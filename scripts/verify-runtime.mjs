import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { args, assert, scriptRoot, writeJson } from './common.mjs';

const options = args();
const project = path.resolve(options.project || scriptRoot);
const runtime = path.resolve(options.runtime || path.join(project, '.local/runtime'));
const app = path.join(runtime, 'resources/app');
const code = `const {createRequire}=require('node:module');
const req=createRequire(${JSON.stringify(path.join(app, 'package.json'))});
const secp=req('secp256k1'), sodium=req('libsodium-wrappers');
const selected=req('node-gyp-build').resolve(${JSON.stringify(path.join(app, 'node_modules/secp256k1'))});
let directBindingError=null; try {req('secp256k1/bindings')} catch(e){directBindingError=e.message}
const secret=Buffer.alloc(32); secret[31]=1; const message=Buffer.alloc(32,7);
const publicKey=secp.publicKeyCreate(secret); const signature=secp.ecdsaSign(message,secret);
if(!secp.ecdsaVerify(signature.signature,message,publicKey)) throw new Error('ECDSA round trip failed');
const addon=req(${JSON.stringify(path.join(app, 'node_modules/secp256k1/prebuilds/win32-x64/node.napi.node'))});
const native=req('secp256k1/lib')(new addon.Secp256k1());
if(!native.ecdsaVerify(native.ecdsaSign(message,secret).signature,message,native.publicKeyCreate(secret))) throw new Error('N-API prebuild failed');
sodium.ready.then(()=>console.log(JSON.stringify({runtime:process.versions,arch:process.arch,platform:process.platform,
selectedAddon:selected,directBindingError,defaultEcdsa:true,windowsNapiEcdsa:true,
sodiumHashBytes:sodium.crypto_generichash(32,new Uint8Array([1,2,3])).length}))).catch(e=>{console.error(e);process.exit(1)});`;
const env = { ...process.env, ELECTRON_RUN_AS_NODE: '1' };
for (const key of ['NODE_OPTIONS','NODE_PATH','PREBUILDS_ONLY','SECP256K1_PREBUILD']) delete env[key];
const result = spawnSync(path.join(runtime, 'LANDrop.exe'), ['-e', code], {
  cwd: app, env, encoding: 'utf8', timeout: 15000, windowsHide: true });
assert(!result.error && result.status === 0, `Isolated runtime verification failed: ${result.error || result.stderr}`);
const observed = JSON.parse(result.stdout.trim());
assert(observed.runtime.electron === '31.6.0', `Expected Electron31.6.0; got ${observed.runtime.electron}`);
assert(observed.arch === 'x64' && observed.platform === 'win32', 'Expected Windows x64 runtime');
if (options.report) writeJson(path.resolve(options.report), observed);
console.log(JSON.stringify(observed));
