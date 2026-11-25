import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const scriptRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export function args(argv = process.argv.slice(2)) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    if (!argv[i].startsWith('--')) throw new Error(`Unexpected argument ${argv[i]}`);
    const key = argv[i].slice(2);
    result[key] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
  }
  return result;
}
export function assert(value, message) { if (!value) throw new Error(message); }
export function sha(file) { return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'); }
export function json(file) { return JSON.parse(fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '')); }
export function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}
export function files(root) {
  const result = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const absolute = path.join(root, entry.name);
    assert(!entry.isSymbolicLink(), `Symbolic links need explicit review: ${absolute}`);
    if (entry.isDirectory()) result.push(...files(absolute));
    else if (entry.isFile()) result.push(absolute);
  }
  return result;
}
export function copyTree(source, target) {
  assert(fs.existsSync(source), `Missing source: ${source}`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true, dereference: false });
}
export function relative(root, file) { return path.relative(root, file).split(path.sep).join('/'); }
