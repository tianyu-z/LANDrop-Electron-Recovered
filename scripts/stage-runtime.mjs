import fs from 'node:fs';
import path from 'node:path';
import { args, assert, copyTree, files, json, relative, scriptRoot, sha, writeJson } from './common.mjs';
import { verifyDependencies } from './verify-dependencies.mjs';

const options = args();
assert(options['app-source'] && options['electron-dir'], 'Supply --app-source and --electron-dir; this script never downloads runtime/dependencies');
const project = path.resolve(options.project || scriptRoot);
const original = path.resolve(options['app-source']);
const electron = path.resolve(options['electron-dir']);
const runtime = path.resolve(options.output || path.join(project, '.local/runtime'));
const built = path.resolve(options.build || path.join(project, 'out'));
assert(runtime !== electron && !runtime.startsWith(electron + path.sep), 'Staging output must be outside installed app');
assert(runtime !== original && !runtime.startsWith(original + path.sep), 'Staging output must be outside original artifact');
assert(!fs.existsSync(runtime), 'Staging output already exists; choose a fresh --output directory');
const dependencies = verifyDependencies(original, options.constraints || path.join(project, 'runtime-constraints.json'));
const constraints = json(options.constraints || path.join(project, 'runtime-constraints.json'));
const exe = path.join(electron, 'LANDrop.exe');
assert(sha(exe) === constraints.electronExecutableSha256, 'Electron executable differs from observed 31.6.0 build; review before using it');
const runtimeFiles = [];
for (const entry of fs.readdirSync(electron, { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name === 'locales') copyTree(path.join(electron, entry.name), path.join(runtime, entry.name));
  if (!entry.isFile()) continue;
  if (!(entry.name === 'LANDrop.exe' || /\.(dll|pak|dat|bin)$/.test(entry.name) ||
        /^(LICENSE.*|vk_swiftshader_icd\.json)$/.test(entry.name))) continue;
  const source = path.join(electron, entry.name);
  copyTree(source, path.join(runtime, entry.name));
  runtimeFiles.push({ path: entry.name, bytes: fs.statSync(source).size, sha256: sha(source) });
}
const app = path.join(runtime, 'resources/app');
copyTree(built, path.join(app, 'out'));
copyTree(path.join(project, 'resources'), path.join(app, 'resources'));
copyTree(path.join(original, 'node_modules'), path.join(app, 'node_modules'));
copyTree(path.resolve(options.smoke || path.join(project, 'smoke')), path.join(app, 'smoke'));
writeJson(path.join(app, 'package.json'), { name: 'landrop-v2-electron-reconstructed', version: '2.7.2',
  description: 'Local reconstruction of the shipped LANDrop 2.7.2 application',
  type: 'module', main: './out/bootstrap.mjs', private: true, dependencies: dependencies.directDependencies });
const manifest = { runtime, app, electronVersionExpected: '31.6.0', executable: path.join(runtime, 'LANDrop.exe'),
  runtimeFiles, dependencyManifest: dependencies,
  appFiles: files(path.join(app, 'out')).map(file => ({ path: relative(app, file), sha256: sha(file) })),
  installedAppMutated: false, userProfileCopied: false, downloadedFiles: false,
  note: 'node_modules/runtime are private verification artifacts, not recovered first-party source or redistributable build output.' };
writeJson(path.join(runtime, 'reconstruction-stage.json'), manifest);
console.log(JSON.stringify({ runtime, app, executable: manifest.executable, copiedRuntimeFiles: runtimeFiles.length,
  dependencyPackages: dependencies.packages.length }));
