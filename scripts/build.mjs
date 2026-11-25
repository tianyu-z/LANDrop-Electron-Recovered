import fs from 'node:fs';
import path from 'node:path';
import { args, assert, copyTree, files, relative, scriptRoot, sha, writeJson } from './common.mjs';

const options = args();
const project = path.resolve(options.project || scriptRoot);
const output = path.resolve(options.out || path.join(project, 'out'));
for (const name of ['main', 'preload', 'renderer']) {
  copyTree(path.join(project, 'src', name), path.join(output, name));
}
for (const required of ['main/index.js', 'preload/index.mjs', 'renderer/index.html']) {
  assert(fs.existsSync(path.join(output, required)), `Missing build entrypoint: ${required}`);
}
const bootstrap = `// Reconstruction boundary: select a separate profile before loading real main.\n` +
  `import { app } from 'electron';\nimport fs from 'node:fs';\nimport path from 'node:path';\n` +
  `if (process.env.LANDROP_RECOVERED_SMOKE === '1') {\n  await import('../smoke/main.mjs');\n} else {\n` +
  `const profile = process.env.LANDROP_RECOVERED_PROFILE;\n` +
  `if (!profile || !path.isAbsolute(profile)) throw new Error('Set an absolute LANDROP_RECOVERED_PROFILE; live profiles are never inferred.');\n` +
  `fs.mkdirSync(profile, {recursive:true});\nfs.mkdirSync(path.join(profile,'session'), {recursive:true});\n` +
  `app.setName('LANDrop Reconstructed');\napp.setPath('userData',profile);\napp.setPath('sessionData',path.join(profile,'session'));\n` +
  `await import('./main/index.js');\n}\n`;
fs.writeFileSync(path.join(output, 'bootstrap.mjs'), bootstrap);
const manifest = { kind: 'copy-readable-shipped-javascript', originalBuildToolchainRecovered: false,
  files: files(output).filter(file => !file.endsWith('.build-manifest.json')).map(file => ({
    path: relative(output, file), bytes: fs.statSync(file).size, sha256: sha(file) })) };
writeJson(path.join(output, '.build-manifest.json'), manifest);
console.log(JSON.stringify({ output, files: manifest.files.length, kind: manifest.kind }));
