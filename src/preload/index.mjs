// Readable reconstruction of LANDrop 2.7.2 shipped code.
// Descriptive identifiers are inferred; wire fields and runtime names are retained.
import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
const ipcRenderer = electronAPI.ipcRenderer;
const sendFiles = {
  l: (e, n, s, i) => ipcRenderer.invoke("send-files", e, n, s, i)
}.l;
const sendText = {
  u: (e, n, s, i) => ipcRenderer.invoke("send-text", e, n, s, i)
}.u;
const replyFileSendRequest = {
  g: (e, n) => {
    ipcRenderer.send("reply-file-send-request", e, n);
  }
}.g;
const openFiles = {
  v: () => ipcRenderer.invoke("open-files")
}.v;
const openDirectories = {
  p: () => ipcRenderer.invoke("open-directories")
}.p;
const parseFiles = {
  y: e => ipcRenderer.invoke("parse-files", e)
}.y;
const openDirectory = {
  k: () => ipcRenderer.invoke("open-directory")
}.k;
const openDownloadFolder = {
  _: () => {
    ipcRenderer.send("open-download-folder");
  }
}._;
const getDeviceId = {
  m: () => ipcRenderer.invoke("get-device-id")
}.m;
const getServerPort = {
  D: () => ipcRenderer.invoke("get-server-port")
}.D;
const startCheckingForUpdates = {
  b: () => {
    ipcRenderer.send("start-checking-for-updates");
  }
}.b;
const quitAndInstallUpdates = {
  w: () => {
    ipcRenderer.send("quit-and-install-updates");
  }
}.w;
const fixFirewall = {
  f: () => ipcRenderer.invoke("fix-firewall")
}.f;
const addDeviceViaIpAndPort = {
  T: (e, n) => ipcRenderer.invoke("add-device-via-ip-and-port", e, n)
}.T;
const addDeviceViaDeviceId = {
  I: e => ipcRenderer.invoke("add-device-via-device-id", e)
}.I;
const logEvent = {
  o: (e, n) => ipcRenderer.invoke("log-event", e, n)
}.o;
const getDeviceName = {
  h: () => ipcRenderer.invoke("get-device-name")
}.h;
const setDeviceName = {
  F: e => {
    ipcRenderer.send("set-device-name", e);
  }
}.F;
const getDownloadPath = {
  x: () => ipcRenderer.invoke("get-download-path")
}.x;
const setDownloadPath = {
  A: e => {
    ipcRenderer.send("set-download-path", e);
  }
}.A;
const getDiscoverable = {
  P: () => ipcRenderer.invoke("get-discoverable")
}.P;
const setDiscoverable = {
  K: e => {
    ipcRenderer.send("set-discoverable", e);
  }
}.K;
const getAutoOpenDownloadFolder = {
  L: () => ipcRenderer.invoke("get-auto-open-download-folder")
}.L;
const setAutoOpenDownloadFolder = {
  O: e => {
    ipcRenderer.send("set-auto-open-download-folder", e);
  }
}.O;
const getListeningPort = {
  S: () => ipcRenderer.invoke("get-listening-port")
}.S;
const setListeningPort = {
  B: e => {
    ipcRenderer.send("set-listening-port", e);
  }
}.B;
const getTrustedDevices = {
  M: () => ipcRenderer.invoke("get-trusted-devices")
}.M;
const getTrustedDeviceByPublicKey = {
  q: e => ipcRenderer.invoke("get-trusted-device-by-public-key", e)
}.q;
const addTrustedDevice = {
  C: e => {
    ipcRenderer.send("add-trusted-device", e);
  }
}.C;
const editTrustedDevice = {
  N: (e, n) => {
    ipcRenderer.send("edit-trusted-device", e, n);
  }
}.N;
const removeTrustedDeviceByIndex = {
  R: e => {
    ipcRenderer.send("remove-trusted-device-by-index", e);
  }
}.R;
const removeTrustedDeviceByPublicKey = {
  z: e => {
    ipcRenderer.send("remove-trusted-device-by-public-key", e);
  }
}.z;
const getTrustedDeviceAskTimes = {
  E: e => ipcRenderer.invoke("get-trusted-device-ask-times", e)
}.E;
const incrementTrustedDeviceAskTimes = {
  U: e => {
    ipcRenderer.send("increment-trusted-device-ask-times", e);
  }
}.U;
const getLanguage = {
  V: () => ipcRenderer.invoke("get-language")
}.V;
const setLanguage = {
  W: e => {
    ipcRenderer.send("set-language", e);
  }
}.W;
const getOpenAtLogin = {
  G: () => ipcRenderer.invoke("get-open-at-login")
}.G;
const setOpenAtLogin = {
  H: e => {
    ipcRenderer.send("set-open-at-login", e);
  }
}.H;
const discoveredDeviceAnalyticsFields = {
  r: e => ({
    public_key: e.publicKey,
    device_info: {
      name: e.deviceName,
      type: e.deviceType
    },
    is_webrtc: e.address === ""
  })
}.r;
const getFileExtension = {
  j: e => {
    const n = e.lastIndexOf(".");
    return n === -1 ? "" : e.slice(n + 1);
  }
}.j;
const transferFileAnalyticsFields = {
  J: e => ({
    suffix: getFileExtension(e.path),
    size: e.tocSize
  })
}.J;
const transferFilesAnalyticsFields = {
  Q: e => e.map(transferFileAnalyticsFields)
}.Q;
const logSendFiles = {
  X: async (e, n, s, i) => {
    await logEvent("send_files", {
      ...discoveredDeviceAnalyticsFields(e),
      type: n,
      files: transferFilesAnalyticsFields(s),
      live_photos_count: 0,
      length: i.length
    });
  }
}.X;
const logToggleDiscoverableProfilePage = {
  Y: async e => {
    await logEvent("toggle_discoverable_profile_page", {
      value: e
    });
  }
}.Y;
const logGoToTab = {
  Z: async e => {
    await logEvent("go_to_tab", {
      tab: e
    });
  }
}.Z;
const logTrustDeviceHomepage = {
  $: async (e, n) => {
    await logEvent("trust_device_homepage", {
      ...discoveredDeviceAnalyticsFields(e),
      trusted: n
    });
  }
}.$;
const connectionAnalyticsFields = {
  ee: e => ({
    public_key: e.publicKeyBase64,
    device_info: {
      name: e.deviceInfo?.name,
      type: e.deviceInfo?.type
    },
    is_webrtc: e.isWebRTC
  })
}.ee;
const logTrustDeviceSnackbar = {
  te: async e => {
    await logEvent("trust_device_snackbar", connectionAnalyticsFields(e));
  }
}.te;
const logAddTrustedDevice = {
  ne: async e => {
    await logEvent("add_trusted_device", {
      name: e.name,
      public_key: e.publicKey
    });
  }
}.ne;
const logEditTrustedDevice = {
  oe: async (e, n) => {
    await logEvent("edit_trusted_device", {
      from: {
        name: e.name,
        public_key: e.publicKey
      },
      to: {
        name: n.name,
        public_key: n.publicKey
      }
    });
  }
}.oe;
const logDeleteTrustedDevice = {
  se: async e => {
    await logEvent("delete_trusted_device", {
      name: e.name,
      public_key: e.publicKey
    });
  }
}.se;
const logCopyDeviceId = {
  ie: async () => {
    await logEvent("copy_device_id");
  }
}.ie;
const logToggleOpenDownloadFolder = {
  ce: async e => {
    await logEvent("toggle_open_download_folder", {
      value: e
    });
  }
}.ce;
const logChangeLanguage = {
  re: async e => {
    await logEvent("change_language", {
      language: e
    });
  }
}.re;
const logToggleOpenAtLogin = {
  de: async e => {
    await logEvent("toggle_open_at_login", {
      value: e
    });
  }
}.de;
const rendererApi = {
  on: ipcRenderer.on,
  sendFiles: sendFiles,
  sendText: sendText,
  replyFileSendRequest: replyFileSendRequest,
  openFiles: openFiles,
  openDirectories: openDirectories,
  parseFiles: parseFiles,
  openDirectory: openDirectory,
  openDownloadFolder: openDownloadFolder,
  getDeviceId: getDeviceId,
  getServerPort: getServerPort,
  startCheckingForUpdates: startCheckingForUpdates,
  quitAndInstallUpdates: quitAndInstallUpdates,
  fixFirewall: fixFirewall,
  addDeviceViaIpAndPort: addDeviceViaIpAndPort,
  addDeviceViaDeviceId: addDeviceViaDeviceId,
  getDeviceName: getDeviceName,
  setDeviceName: setDeviceName,
  getDownloadPath: getDownloadPath,
  setDownloadPath: setDownloadPath,
  getDiscoverable: getDiscoverable,
  setDiscoverable: setDiscoverable,
  getAutoOpenDownloadFolder: getAutoOpenDownloadFolder,
  setAutoOpenDownloadFolder: setAutoOpenDownloadFolder,
  getListeningPort: getListeningPort,
  setListeningPort: setListeningPort,
  getTrustedDevices: getTrustedDevices,
  getTrustedDeviceByPublicKey: getTrustedDeviceByPublicKey,
  addTrustedDevice: addTrustedDevice,
  editTrustedDevice: editTrustedDevice,
  removeTrustedDeviceByIndex: removeTrustedDeviceByIndex,
  removeTrustedDeviceByPublicKey: removeTrustedDeviceByPublicKey,
  getTrustedDeviceAskTimes: getTrustedDeviceAskTimes,
  incrementTrustedDeviceAskTimes: incrementTrustedDeviceAskTimes,
  getLanguage: getLanguage,
  setLanguage: setLanguage,
  getOpenAtLogin: getOpenAtLogin,
  setOpenAtLogin: setOpenAtLogin,
  analytics: {
    logSendFiles: logSendFiles,
    logToggleDiscoverableProfilePage: logToggleDiscoverableProfilePage,
    logGoToTab: logGoToTab,
    logTrustDeviceHomepage: logTrustDeviceHomepage,
    logTrustDeviceSnackbar: logTrustDeviceSnackbar,
    logAddTrustedDevice: logAddTrustedDevice,
    logEditTrustedDevice: logEditTrustedDevice,
    logDeleteTrustedDevice: logDeleteTrustedDevice,
    logCopyDeviceId: logCopyDeviceId,
    logToggleOpenDownloadFolder: logToggleOpenDownloadFolder,
    logChangeLanguage: logChangeLanguage,
    logToggleOpenAtLogin: logToggleOpenAtLogin
  }
};
if (process.contextIsolated) try {
  contextBridge.exposeInMainWorld("api", rendererApi);
} catch (e) {
  console.error(e);
} else window.api = rendererApi;
