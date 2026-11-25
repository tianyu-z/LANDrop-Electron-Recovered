import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import { args, assert, files, json, relative, scriptRoot, sha, writeJson } from './common.mjs';

export function verifyDependencies(source, constraintsFile = path.join(scriptRoot, 'runtime-constraints.json')) {
  const constraints = json(constraintsFile);
  const metadata = json(path.join(source, 'package.json'));
  assert(metadata.name === 'landrop-v2-electron' && metadata.version === '2.7.2', 'Expected original LANDrop 2.7.2 application tree');
  const observed = {};
  for (const [name, expected] of Object.entries(constraints.directDependencies)) {
    const installed = json(path.join(source, 'node_modules', name, 'package.json')).version;
    assert(installed === expected, `Dependency ${name}: expected ${expected}, found ${installed}`);
    observed[name] = installed;
  }
  for (const [name, expected] of Object.entries(constraints.nativeFiles)) {
    assert(sha(path.join(source, name)) === expected, `Native artifact hash differs: ${name}`);
  }
  const relay = path.join(source, 'node_modules/@ca9io/electron-webrtc-relay/lib/ResourceManager.js');
  assert(sha(relay) === constraints.relayResourceManagerSha256, 'The shipped WebRTC relay patch is not preserved');
  const dependencyRoot = path.join(source, 'node_modules');
  const dependencyFiles = files(dependencyRoot).sort((a,b) => {
    const left=relative(dependencyRoot,a), right=relative(dependencyRoot,b); return left<right?-1:left>right?1:0;
  });
  const tree = crypto.createHash('sha256');
  for (const file of dependencyFiles) tree.update(relative(dependencyRoot,file) + '\0' + sha(file) + '\n');
  const treeSha256 = tree.digest('hex');
  assert(treeSha256 === constraints.dependencyTreeSha256, 'Shipped dependency file tree changed');
  assert(dependencyFiles.length === constraints.dependencyFiles, 'Dependency file count changed');
  const packages = dependencyFiles.filter(file => path.basename(file) === 'package.json').map(file => {
    try { const value = json(file); return { path: relative(source, file), name: value.name || null,
      version: value.version || null, sha256: sha(file) }; } catch { return { path: relative(source, file), invalidJson: true }; }
  });
  return { source, originalAsarSha256: constraints.originalAsarSha256, directDependencies: observed,
    dependencyTreeSha256: treeSha256, dependencyFiles: dependencyFiles.length,
    packages, nativeFiles: constraints.nativeFiles,
    nativeWarning: 'build/Release/addon.node is a shipped Mach-O ARM64 file; unmodified secp256k1 catches its Windows load failure and uses elliptic JS fallback.' };
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const options = args();
  assert(options['app-source'], 'Supply --app-source <verified original extracted application>');
  const result = verifyDependencies(path.resolve(options['app-source']), options.constraints);
  if (options.report) writeJson(path.resolve(options.report), result);
  console.log(JSON.stringify({ directDependencies: Object.keys(result.directDependencies).length,
    packageManifests: result.packages.length, nativeWarning: result.nativeWarning }));
}
