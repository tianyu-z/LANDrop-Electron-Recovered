const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const EventEmitter = require('node:events');

// The override is only for testing a staged copy of this test file.
const projectRoot = process.env.LANDROP_TEST_ROOT || path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(projectRoot, 'src/main/index.js'), 'utf8');

assert.equal(typeof vm.SourceTextModule, 'function', 'Run with node --experimental-vm-modules --test');

async function runMain({ wonLock, development }) {
  const calls = {};
  const order = [];
  const count = name => {
    calls[name] = (calls[name] || 0) + 1;
    order.push(name);
  };
  const blocked = name => () => {
    count(name);
    throw new Error(`Unexpected mocked operation: ${name}`);
  };
  let completeRender;
  const rendered = new Promise(resolve => { completeRender = resolve; });
  let mainWindow;
  const app = new EventEmitter();
  app.requestSingleInstanceLock = () => { count('lock'); return wonLock; };
  app.quit = () => { count('quit'); };
  app.whenReady = async () => { count('whenReady'); };
  app.getPath = blocked('appGetPath');
  const updater = new EventEmitter();
  updater.checkForUpdates = blocked('checkForUpdates');
  updater.quitAndInstall = blocked('quitAndInstall');

  class MockServer extends EventEmitter {
    constructor() { super(); count('tcpConstruct'); }
    listen(_port, callback) { count('tcpListen'); callback(); }
    address() { return { port: 50123 }; }
  }
  const udp = new EventEmitter();
  udp.bind = (_port, callback) => { count('udpBind'); callback(); };
  udp.address = () => ({ port: 52637 });
  udp.setMulticastTTL = () => count('udpSetMulticastTTL');
  udp.setBroadcast = () => count('udpSetBroadcast');
  udp.setMulticastLoopback = () => count('udpSetMulticastLoopback');
  udp.send = blocked('udpSend');
  udp.addMembership = blocked('udpAddMembership');
  const relay = new EventEmitter();
  relay.RTCPeerConnection = class {};
  relay.init = () => count('relayInit');
  class MockStore {
    constructor() { count('storeConstruct'); }
    get(key, fallback) {
      count('storeRead');
      // An inert identity exercises the load branch without profile access.
      return key === 'landrop_secp256k1_idsk' ? { data: [0] } : fallback;
    }
    set() { count('storeWrite'); }
  }
  class MockWindow extends EventEmitter {
    constructor() {
      super();
      count('windowConstruct');
      mainWindow = this;
      this.webContents = {
        setWindowOpenHandler() { count('windowOpenHandler'); },
        send: blocked('rendererSend'),
      };
    }
    show() { count('windowShow'); }
    hide() { count('windowHide'); }
    loadURL(url) {
      count('loadURL');
      assert.equal(url, 'http://renderer.invalid/');
      completeRender();
    }
    loadFile(file) {
      count('loadFile');
      assert.equal(file, path.join('virtual-main', '../renderer/index.html'));
      completeRender();
    }
  }
  class MockTray extends EventEmitter {
    constructor() { super(); count('trayConstruct'); }
    setToolTip() { count('trayToolTip'); }
    setContextMenu() { count('trayContextMenu'); }
  }
  const sodium = {};
  Object.defineProperty(sodium, 'ready', { get() { count('cryptoReady'); return Promise.resolve(); } });
  const image = { resize() { return this; } };
  const imports = {
    path: { default: path, join: path.join },
    electron: {
      app,
      safeStorage: {
        decryptString() { count('decryptIdentity'); return Buffer.alloc(32, 1).toString('base64'); },
        encryptString: blocked('encryptIdentity'),
      },
      shell: { openExternal: blocked('openExternal'), openPath: blocked('openPath') },
      BrowserWindow: MockWindow, Tray: MockTray,
      nativeImage: { createFromPath() { count('mockImage'); return image; } },
      Menu: { buildFromTemplate(template) { count('mockMenu'); return template; } },
      ipcMain: { handle() { count('ipcHandle'); }, on() { count('ipcOn'); } },
      dialog: {},
    },
    '@electron-toolkit/utils': {
      is: { dev: development }, optimizer: {},
      electronApp: { setAppUserModelId() { count('appUserModelId'); } },
    },
    fs: { default: new Proxy({}, { get: (_, key) => blocked(`fs:${String(key)}`) }) },
    events: { default: EventEmitter, EventEmitter },
    net: { Server: MockServer, Socket: class { constructor() { return blocked('tcpSocket')(); } } },
    os: {
      default: { platform: () => 'win32', hostname: () => 'mock-device' },
      networkInterfaces() { count('interfaceQueries'); return {}; },
    },
    'electron-store': { default: MockStore },
    dgram: { createSocket() { count('udpConstruct'); return udp; } },
    ws: { WebSocket: class extends EventEmitter {
      constructor() { super(); count('websocketConstruct'); }
      // Never emit open: signaling authentication remains inert and pending.
    } },
    'libsodium-wrappers': { default: sodium },
    secp256k1: { default: {
      publicKeyCreate() { count('publicKeyCreate'); return Buffer.alloc(33, 2); },
    } },
    'electron-updater': { default: { autoUpdater: updater } },
    semver: { default: {} },
    child_process: { execFile: blocked('execFile') },
    'node:module': { default: {
      createRequire() {
        count('createRequire');
        return specifier => {
          assert.equal(specifier, '@ca9io/electron-webrtc-relay');
          return () => { count('relayFactory'); return relay; };
        };
      },
    } },
  };
  const context = vm.createContext({
    Buffer,
    crypto: { randomUUID: () => '00000000-0000-4000-8000-000000000000' },
    process: {
      platform: 'win32', argv: [],
      env: development ? { ELECTRON_RENDERER_URL: 'http://renderer.invalid/' } : {},
    },
    console: { log() {}, warn() {}, error() {} },
    async fetch(url, options) {
      count('mockAnalyticsFetch');
      assert.equal(url, 'https://api.landrop.app/v1/analytics');
      assert.equal(options.method, 'POST');
      return { ok: true, json: async () => ({ message: 'mock analytics accepted' }) };
    },
    setInterval() { count('mockInterval'); return calls.mockInterval; },
    setTimeout: blocked('appTimeout'), clearInterval: blocked('clearInterval'),
    clearTimeout: blocked('clearTimeout'),
  });
  const cache = new Map();
  const main = new vm.SourceTextModule(source, {
    context, identifier: 'src/main/index.js',
    initializeImportMeta(meta) {
      meta.url = 'file:///virtual-main/index.js';
      meta.filename = 'virtual-main/index.js';
      meta.dirname = 'virtual-main';
    },
    importModuleDynamically: blocked('dynamicImport'),
  });
  await main.link(specifier => {
    assert(Object.hasOwn(imports, specifier), `Add an explicit synthetic mock for import: ${specifier}`);
    if (!cache.has(specifier)) {
      const exports = imports[specifier];
      cache.set(specifier, new vm.SyntheticModule(Object.keys(exports), function () {
        for (const [name, value] of Object.entries(exports)) this.setExport(name, value);
      }, { context, identifier: `mock:${specifier}` }));
    }
    return cache.get(specifier);
  });
  await main.evaluate({ timeout: 2000 });
  if (wonLock) {
    let watchdog;
    try {
      await Promise.race([
        rendered,
        new Promise((_, reject) => {
          watchdog = setTimeout(() => reject(new Error('Startup did not reach the mocked renderer')), 2000);
        }),
      ]);
    } finally {
      clearTimeout(watchdog);
    }
  }
  await Promise.resolve();
  return { calls, order, app, mainWindow };
}

for (const wonLock of [false, true]) for (const development of [false, true]) {
  test(`main startup: ${wonLock ? 'acquired' : 'lost'} lock, ${development ? 'development' : 'production'}`, async () => {
    const { calls, order, app, mainWindow } = await runMain({ wonLock, development });
    assert.equal(calls.lock, 1);
    assert.equal(calls.quit || 0, wonLock ? 0 : 1);
    // These constructors are intentionally still before the startup guard.
    assert.equal(calls.tcpConstruct, 1);
    assert.equal(calls.udpConstruct, 1);
    assert.equal(calls.storeConstruct, 2);
    assert.equal(calls.relayFactory, 1);
    for (const key of ['whenReady', 'cryptoReady', 'tcpListen', 'udpBind', 'relayInit',
      'websocketConstruct', 'windowConstruct', 'trayConstruct']) {
      assert.equal(calls[key] || 0, wonLock ? 1 : 0, key);
    }
    assert.equal(calls.loadURL || 0, wonLock && development ? 1 : 0);
    assert.equal(calls.loadFile || 0, wonLock && !development ? 1 : 0);
    assert.equal(calls.mockAnalyticsFetch || 0, wonLock && !development ? 1 : 0);
    assert.equal(calls.mockInterval || 0, wonLock ? 3 : 0);
    assert.equal(app.listenerCount('second-instance'), wonLock ? 1 : 0);
    if (wonLock) {
      assert(calls.ipcHandle > 0);
      assert(calls.ipcOn > 0);
      const steps = ['lock', 'whenReady', 'cryptoReady', 'tcpListen', 'udpBind',
        'relayInit', 'windowConstruct', 'trayConstruct', 'ipcHandle', development ? 'loadURL' : 'loadFile'];
      for (let i = 1; i < steps.length; i++) assert(order.indexOf(steps[i - 1]) < order.indexOf(steps[i]), steps.join(' -> '));
      app.emit('second-instance');
      assert.equal(calls.windowShow, 1);
      assert(mainWindow);
    } else {
      assert.equal(calls.ipcHandle || 0, 0);
      assert.equal(calls.ipcOn || 0, 0);
      assert.equal(calls.storeRead || 0, 0);
      assert.equal(mainWindow, undefined);
    }
    for (const key of ['storeWrite', 'udpSend', 'udpAddMembership', 'tcpSocket', 'appGetPath',
      'execFile', 'dynamicImport', 'appTimeout', 'checkForUpdates', 'quitAndInstall',
      'openExternal', 'openPath', 'rendererSend', 'encryptIdentity']) {
      assert.equal(calls[key] || 0, 0, key);
    }
    assert.equal(Object.keys(calls).filter(key => key.startsWith('fs:')).length, 0);
  });
}
