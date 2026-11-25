"""Extract a verified ASAR and its sidecar into a new local directory."""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import struct


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def entries(tree, prefix=""):
    for name, entry in tree["files"].items():
        logical_path = prefix + name
        if "files" in entry:
            yield from entries(entry, logical_path + "/")
        else:
            yield logical_path, entry


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("archive", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--expected-sha256", required=True)
    parser.add_argument("--manifest", type=Path, required=True)
    args = parser.parse_args()
    raw = args.archive.read_bytes()
    observed = sha256(raw)
    if observed != args.expected_sha256:
        raise RuntimeError("Archive identity differs from the selected source")
    marker, header_size, payload_size, text_size = struct.unpack_from("<IIII", raw)
    if marker != 4 or header_size != payload_size + 4 or text_size > payload_size - 4:
        raise RuntimeError("Invalid ASAR header")
    tree = json.loads(raw[16:16 + text_size])
    payload_offset = 8 + header_size
    if args.output.exists():
        raise RuntimeError("Output already exists; refusing to overwrite it")
    args.output.mkdir(parents=True)
    output = args.output.resolve()
    sidecar = args.archive.with_name(args.archive.name + ".unpacked")
    manifest = []
    for logical_path, entry in entries(tree):
        parts = PurePosixPath(logical_path)
        if parts.is_absolute() or ".." in parts.parts or "\\" in logical_path:
            raise RuntimeError("Unsafe archive path")
        destination = output.joinpath(*parts.parts)
        if "link" in entry:
            raise RuntimeError("Unexpected ASAR link: " + logical_path)
        if entry.get("unpacked"):
            data = sidecar.joinpath(*parts.parts).read_bytes()
        else:
            offset = payload_offset + int(entry["offset"])
            data = raw[offset:offset + entry["size"]]
        if len(data) != entry["size"]:
            raise RuntimeError("Invalid member length: " + logical_path)
        digest = sha256(data)
        integrity = entry.get("integrity")
        if integrity:
            block = integrity["blockSize"]
            if (integrity["algorithm"] != "SHA256" or integrity["hash"] != digest
                    or integrity["blocks"] != [sha256(data[i:i + block])
                                               for i in range(0, len(data), block)]):
                raise RuntimeError("Member integrity mismatch: " + logical_path)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(data)
        manifest.append({"path": logical_path, "bytes": len(data),
                         "sha256": digest, "unpacked": bool(entry.get("unpacked"))})
    report = {"archiveSha256": observed, "memberCount": len(manifest),
              "members": manifest}
    args.manifest.write_text(json.dumps(report, indent=2), encoding="ascii")
    print(json.dumps({"archiveSha256": observed, "memberCount": len(manifest),
                      "applicationFiles": [e for e in manifest
                                           if not e["path"].startswith("node_modules/")]}))


if __name__ == "__main__":
    main()
