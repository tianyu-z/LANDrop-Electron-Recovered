// This host never imports recovered main or its discovery/updater services.
import { app, BrowserWindow, session } from 'electron';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const profile = process.env.LANDROP_RECOVERED_PROFILE;
const report = process.env.LANDROP_SMOKE_REPORT;
if (!profile || !path.isAbsolute(profile) || !report || !path.isAbsolute(report)) throw new Error('Explicit smoke profile/report required');
fs.mkdirSync(profile, { recursive: true });
fs.mkdirSync(path.join(profile, 'session'), { recursive: true });
app.setName('LANDrop Reconstruction Offline Smoke');
app.setPath('userData', profile);
app.setPath('sessionData', path.join(profile, 'session'));
app.disableHardwareAcceleration();
for (const flag of ['disable-background-networking','disable-component-update','disable-domain-reliability','no-proxy-server']) app.commandLine.appendSwitch(flag);
const errors = [], blockedRequests = [];
let window;
const deadline = setTimeout(() => finish({ ok: false, error: 'Smoke deadline exceeded' }), 15000);
function finish(result) {
  clearTimeout(deadline);
  fs.mkdirSync(path.dirname(report), { recursive: true });
  fs.writeFileSync(report, JSON.stringify({ ...result, runtime: process.versions,
    profile: app.getPath('userData'), errors, blockedRequests,
    originalMainImported: false, transferOperations: 0, profileCopied: false }, null, 2));
  if (window && !window.isDestroyed()) window.destroy();
  app.exit(result.ok ? 0 : 1);
}
app.whenReady().then(async () => {
  session.defaultSession.webRequest.onBeforeRequest({ urls: ['http://*/*','https://*/*','ws://*/*','wss://*/*','ftp://*/*'] }, (details, callback) => {
    blockedRequests.push(details.url); callback({ cancel: true });
  });
  window = new BrowserWindow({ show: false, width: 1100, height: 800, webPreferences: {
    preload: path.join(root, 'smoke/preload.cjs'), contextIsolation: true, nodeIntegration: false, sandbox: true,
    backgroundThrottling: false } });
  window.webContents.on('console-message', (_event, level, message) => { if (level >= 3) errors.push(message); });
  window.webContents.on('render-process-gone', (_event, details) => errors.push(`Renderer exited: ${details.reason}`));
  await window.loadFile(path.join(root, 'out/renderer/index.html'));
  await new Promise(resolve => setTimeout(resolve, 800));
  const dom = await window.webContents.executeJavaScript(`({ fixture: window.__landropOfflineSmoke === true,
    rootChildren: document.getElementById('root')?.childElementCount || 0,
    text: document.body.innerText, buttons: Array.from(document.querySelectorAll('button')).map(b=>b.innerText).filter(Boolean),
    title: document.title, readyState: document.readyState })`);
  const click = async text => {
    const found = await window.webContents.executeJavaScript(`(()=>{ const button=Array.from(document.querySelectorAll('button')).find(b=>b.innerText.trim()===${JSON.stringify(text)}); if(!button)return false;button.focus();button.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,button:0,ctrlKey:false}));button.click();return true;})()`);
    if (!found) throw new Error(`Missing navigation button: ${text}`);
    await new Promise(resolve=>setTimeout(resolve,200));
  };
  await click('Settings');
  const settings = await window.webContents.executeJavaScript(`({text:document.body.innerText, inputs:Array.from(document.querySelectorAll('input')).map(i=>({type:i.type,value:i.value}))})`);
  await click('Home');
  await click('Send Text');
  const textTab = await window.webContents.executeJavaScript(`({text:document.body.innerText,textareas:document.querySelectorAll('textarea').length,visibleTextareas:Array.from(document.querySelectorAll('textarea')).filter(e=>e.getClientRects().length>0).length})`);
  await click('Send Files');
  await window.webContents.executeJavaScript(`new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))`);
  const screenshot = report.replace(/\.json$/i, '') + '.png';
  fs.writeFileSync(screenshot, (await window.webContents.capturePage()).toPNG());
  const navigationOk = settings.inputs.some(input=>input.value==='Reconstruction test device') && textTab.visibleTextareas > 0;
  finish({ ok: dom.fixture && dom.rootChildren > 0 && dom.text.trim().length > 20 && navigationOk && errors.length === 0,
    dom, navigation: { settings, textTab }, screenshot });
}).catch(error => finish({ ok: false, error: error.stack || String(error) }));
