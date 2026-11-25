import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { args, assert, json, scriptRoot } from './common.mjs';

const options = args();
const project = path.resolve(options.project || scriptRoot);
const runtime = path.resolve(options.runtime || path.join(project, '.local/runtime'));
const profile = path.resolve(options.profile || path.join(project, '.local/profiles', `offline-${Date.now()}`));
const report = path.resolve(options.report || path.join(project, '.local/reports', `offline-${Date.now()}.json`));
assert(!fs.existsSync(profile), 'Smoke profile must be new; no existing profile is read/copied');
assert(!fs.existsSync(report), 'Smoke report must be new so a previous result cannot be mistaken for this run');
const app = path.join(runtime, 'resources/app');
assert(json(path.join(app, 'package.json')).main === './out/bootstrap.mjs', 'Stage package must use the guarded bootstrap');
assert(fs.readFileSync(path.join(app, 'out/bootstrap.mjs'), 'utf8').includes("process.env.LANDROP_RECOVERED_SMOKE === '1'"), 'Build the current offline-aware bootstrap before smoke launch');
const env = { ...process.env, LANDROP_RECOVERED_SMOKE: '1', LANDROP_RECOVERED_PROFILE: profile, LANDROP_SMOKE_REPORT: report };
for (const key of ['ELECTRON_RUN_AS_NODE','NODE_OPTIONS','NODE_PATH']) delete env[key];
const result = spawnSync(path.join(runtime, 'LANDrop.exe'), ['--disable-gpu','--no-sandbox'], {
  cwd: runtime, env, encoding: 'utf8', timeout: 25000, windowsHide: true });
assert(!result.error, String(result.error));
assert(fs.existsSync(report), `Smoke did not produce report (native exit ${result.status}): ${result.stderr}`);
const observed = json(report);
console.log(JSON.stringify({ report, ok: observed.ok, electron: observed.runtime?.electron,
  node: observed.runtime?.node, profile: observed.profile, errors: observed.errors,
  blockedRequests: observed.blockedRequests, rendererText: observed.dom?.text?.slice(0, 800) }));
assert(result.status === 0 && observed.ok, `Offline renderer smoke failed (exit ${result.status}); inspect report`);
