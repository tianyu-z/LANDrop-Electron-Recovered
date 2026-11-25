// Offline fixture only. The recovered production preload remains unchanged.
const { contextBridge } = require('electron');
const state = { deviceName: 'Reconstruction test device', downloadPath: '', discoverable: false,
  autoOpenDownloadFolder: false, listeningPort: 0, trustedDevices: [], language: 'en', openAtLogin: false };
const noTransfer = async () => { throw new Error('File/network transfers are disabled in the offline smoke host'); };
const api = { on: () => () => {}, sendFiles: noTransfer, sendText: noTransfer,
  replyFileSendRequest() {}, openFiles: async () => [], openDirectories: async () => [],
  parseFiles: async () => [], openDirectory: async () => null, openDownloadFolder() {},
  getDeviceId: async () => 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=', getServerPort: async () => 0,
  startCheckingForUpdates() {}, quitAndInstallUpdates() {}, fixFirewall: noTransfer,
  addDeviceViaIpAndPort: noTransfer, addDeviceViaDeviceId: noTransfer,
  getTrustedDeviceByPublicKey: async () => null, getTrustedDeviceAskTimes: async () => 0,
  incrementTrustedDeviceAskTimes() {}, addTrustedDevice() {}, editTrustedDevice() {},
  removeTrustedDeviceByIndex() {}, removeTrustedDeviceByPublicKey() {}, analytics: {} };
for (const key of Object.keys(state)) {
  const title = key[0].toUpperCase() + key.slice(1);
  api['get' + title] = async () => state[key];
  api['set' + title] = value => { state[key] = value; };
}
for (const method of ['logSendFiles','logToggleDiscoverableProfilePage','logGoToTab','logTrustDeviceHomepage',
  'logTrustDeviceSnackbar','logAddTrustedDevice','logEditTrustedDevice','logDeleteTrustedDevice',
  'logCopyDeviceId','logToggleOpenDownloadFolder','logChangeLanguage','logToggleOpenAtLogin']) {
  api.analytics[method] = async () => {};
}
contextBridge.exposeInMainWorld('api', api);
contextBridge.exposeInMainWorld('__landropOfflineSmoke', true);
