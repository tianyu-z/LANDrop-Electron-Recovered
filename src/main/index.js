// Readable reconstruction of LANDrop 2.7.2 shipped code.
// Descriptive identifiers are inferred; wire fields and runtime names are retained.
import path, { join as joinPath } from "path";
import { app, safeStorage, shell, BrowserWindow, Tray, nativeImage, Menu, ipcMain, dialog } from "electron";
import { is as runtimeEnvironment, optimizer as windowOptimizer, electronApp } from "@electron-toolkit/utils";
import fs from "fs";
import DefaultEventEmitter, { EventEmitter } from "events";
import { Socket as TcpSocket, Server as TcpServer } from "net";
import os, { networkInterfaces } from "os";
import ElectronStore from "electron-store";
import { createSocket as createDatagramSocket } from "dgram";
import { WebSocket } from "ws";
import sodium from "libsodium-wrappers";
import secp256k1 from "secp256k1";
import electronUpdater from "electron-updater";
import semver from "semver";
import { execFile } from "child_process";
import nodeModule from "node:module";
const mainFilename = import.meta.filename;
const mainDirectory = import.meta.dirname;
const requireFromMain = nodeModule.createRequire(import.meta.url);
// Inferred role: TransferFileEntry; original runtime class name: H.
const TransferFileEntry = class H {
  path;
  abstractFilename;
  tocSize;
  constructor(e, t, s) {
    this.path = e;
    this.abstractFilename = t;
    this.tocSize = s;
  }
  static async parse(e, t = "") {
    const s = await fs.promises.stat(e);
    if (s.isFile()) return [new H(e, t + path.basename(e), s.size)];
    if (s.isDirectory()) {
      const n = await fs.promises.readdir(e);
      const r = [];
      for (const h of n) r.push(...(await H.parse(path.join(e, h), t + path.basename(e) + "/")));
      return r;
    }
    return [];
  }
};
const API_V1_BASE_URL = "https://api.landrop.app/v1";
// Inferred role: ApiClientV1Error; original runtime class name: He.
const ApiClientV1Error = class He extends Error {
  statusCode;
  constructor(e, t) {
    super(t);
    this.name = "LANDropApiClientV1Error";
    this.statusCode = e;
  }
};
// Inferred role: ApiClientV1; original runtime class name: Je.
const ApiClientV1 = class Je {
  baseUrl;
  constructor(e) {
    this.baseUrl = e;
  }
  get headers() {
    return {
      "Content-Type": "application/json"
    };
  }
  async errorHandler(e, t) {
    throw new ApiClientV1Error(e, t);
  }
  async logAnalytics(e, t, s, n) {
    const r = await fetch(`${this.baseUrl}/analytics`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        public_key: e,
        session_id: t,
        type: s,
        ...(n && {
          data: n
        })
      })
    });
    const h = await r.json();
    return r.ok ? h.message : await this.errorHandler(r.status, h.message);
  }
  async getDeviceInfo(e) {
    const t = await fetch(`${this.baseUrl}/devices/${encodeURIComponent(e)}`);
    const s = await t.json();
    return t.ok ? s.data : await this.errorHandler(t.status, s.message);
  }
};
const apiClient = new ApiClientV1(API_V1_BASE_URL);
// Inferred role: DiscoveryDeviceInfo; original runtime class name: J.
const DiscoveryDeviceInfo = class J {
  name;
  type;
  constructor(e = "", t = "") {
    this.name = e;
    this.type = t;
  }
  static generate(e) {
    return new J(e ? deviceIdentity.deviceName : "", e ? deviceIdentity.deviceType : "");
  }
};
// Inferred role: DiscoveryPacket; original runtime class name: G.
const DiscoveryPacket = class G {
  request;
  supported_versions;
  public_key;
  port;
  device_info;
  discoverable;
  constructor(e = !1, t = [], s = "", n = 0, r = new DiscoveryDeviceInfo(), h = !1) {
    this.request = e;
    this.supported_versions = t;
    this.public_key = s;
    this.port = n;
    this.device_info = r;
    this.discoverable = h;
  }
  static generate(e, t, s) {
    return new G(e, ["v2"], deviceIdentity.kp.pkBase64, s ? t : 0, DiscoveryDeviceInfo.generate(s), s);
  }
};
const computeIpv4BroadcastAddress = {
  Ge: (i, e) => {
    const t = i.split(".").map(Number);
    const s = e.split(".").map(Number);
    const n = [];
    for (let r = 0; r < 4; r++) n.push(t[r] | 255 - s[r]);
    return n.join(".");
  }
}.Ge;
const listIpv4Interfaces = {
  ie: (i = !1) => {
    const e = networkInterfaces();
    const t = [];
    for (const s of Object.keys(e)) {
      const n = e[s];
      if (n) for (const r of n) r.family === "IPv4" && (!i && r.address === "127.0.0.1" || t.push({
        address: r.address,
        broadcastAddress: computeIpv4BroadcastAddress(r.address, r.netmask)
      }));
    }
    return t;
  }
}.ie;
// Inferred role: UdpDiscoveryService; original runtime class name: x.
const UdpDiscoveryService = class x extends DefaultEventEmitter {
  static _discoveryMulticastGroup = "239.192.52.63";
  static _discoveryPort = 52637;
  socket;
  _serverPort;
  _discoverable;
  _detectMode;
  started;
  constructor() {
    super();
    this.socket = createDatagramSocket("udp4");
    this._serverPort = 0;
    this._discoverable = !0;
    this._detectMode = !1;
    this.started = !1;
    this.socket.on("message", (e, t) => {
      if (this.isSelf(t.address)) return;
      const s = new DiscoveryPacket();
      Object.assign(s, JSON.parse(e.toString()));
      s.request && this.sendDiscoveryPacket(!1, t.address, t.port);
      this.emit("discovery", {
        addr: t.address,
        discovery: s
      });
    });
  }
  get discoverable() {
    return this._discoverable;
  }
  set discoverable(e) {
    this._discoverable = e;
    this.started && this.sendMulticastDiscoveryPacketToAllInterfaces();
  }
  set detectMode(e) {
    this._detectMode = e;
    this._detectMode && this.started && this.sendMulticastDiscoveryPacketToAllInterfaces(!0);
  }
  set serverPort(e) {
    this._serverPort = e;
    this.started && this.sendMulticastDiscoveryPacketToAllInterfaces();
  }
  start() {
    const e = t => {
      this.socket.removeAllListeners("error");
      console.log(`LANDrop Discovery Service listening on port ${this.socket.address().port}`);
      this.socket.setMulticastTTL(32);
      this.socket.setBroadcast(!0);
      this.socket.setMulticastLoopback(!1);
      this.joinMulticastGroupOnAllInterfaces();
      this.sendMulticastDiscoveryPacketToAllInterfaces(!0);
      setInterval(() => {
        this.joinMulticastGroupOnAllInterfaces();
        this._detectMode && this.sendMulticastDiscoveryPacketToAllInterfaces(!0);
      }, 2e3);
      this.started = !0;
      t();
    };
    return new Promise(t => {
      this.socket.on("error", s => {
        s.code === "EADDRINUSE" && this.socket.bind(0, () => e(t));
      });
      this.socket.bind(x._discoveryPort, () => e(t));
    });
  }
  joinMulticastGroupOnAllInterfaces() {
    const e = listIpv4Interfaces();
    for (const t of e) try {
      this.socket.addMembership(x._discoveryMulticastGroup, t.address);
    } catch {}
  }
  sendDiscoveryPacket(e = !1, t = x._discoveryMulticastGroup, s = x._discoveryPort) {
    const n = DiscoveryPacket.generate(e, this._serverPort, this._discoverable);
    try {
      this.socket.send(JSON.stringify(n), s, t);
    } catch {}
  }
  sendMulticastDiscoveryPacketToAllInterfaces(e = !1) {
    const t = listIpv4Interfaces();
    for (const s of t) try {
      this.socket.setMulticastInterface(s.address);
      this.sendDiscoveryPacket(e);
      this.sendDiscoveryPacket(e, s.broadcastAddress);
    } catch {}
  }
  isSelf(e) {
    const t = listIpv4Interfaces(!0);
    for (const s of t) if (s.address === e) return !0;
    return !1;
  }
};
// Inferred role: SignalingEnvelope; original runtime class name: I.
const SignalingEnvelope = class I {
  type;
  data;
  constructor(e = "", t = {}) {
    this.type = e;
    this.data = t;
  }
  static fromObj(e) {
    return new I(e.typeName, e);
  }
};
// Inferred role: AuthChallengeMessage; original runtime class name: Qe.
const AuthChallengeMessage = class Qe {
  challenge;
  constructor(e = "") {
    this.challenge = e;
  }
  get typeName() {
    return "auth_challenge";
  }
};
let SignalingDeviceInfo = class Pe {
  name;
  type;
  constructor(e = "", t = "") {
    this.name = e;
    this.type = t;
  }
  static generate() {
    return new Pe(deviceIdentity.deviceName, deviceIdentity.deviceType);
  }
};
// Inferred role: AuthResponseMessage; original runtime class name: ce.
const AuthResponseMessage = class ce {
  public_key;
  device_info;
  challenge_response;
  constructor(e = "", t = new SignalingDeviceInfo(), s = "") {
    this.public_key = e;
    this.device_info = t;
    this.challenge_response = s;
  }
  static generate(e) {
    return new ce(deviceIdentity.kp.pkBase64, SignalingDeviceInfo.generate(), e);
  }
  get typeName() {
    return "auth_response";
  }
};
// Inferred role: AuthResultMessage; original runtime class name: Xe.
const AuthResultMessage = class Xe {
  result;
  constructor(e = !1) {
    this.result = e;
  }
  get typeName() {
    return "auth_result";
  }
};
// Inferred role: RoutedSendMessage; original runtime class name: Ye.
const RoutedSendMessage = class Ye {
  to;
  message;
  constructor(e = "", t = new SignalingEnvelope()) {
    this.to = e;
    this.message = t;
  }
  get typeName() {
    return "message_send";
  }
};
// Inferred role: RoutedReceiveMessage; original runtime class name: Ze.
const RoutedReceiveMessage = class Ze {
  from;
  message;
  constructor(e = "", t = new SignalingEnvelope()) {
    this.from = e;
    this.message = t;
  }
  get typeName() {
    return "message_receive";
  }
};
// Inferred role: RoutedErrorMessage; original runtime class name: et.
const RoutedErrorMessage = class et {
  to;
  message;
  error;
  constructor(e = "", t = new SignalingEnvelope(), s = "") {
    this.to = e;
    this.message = t;
    this.error = s;
  }
  get typeName() {
    return "message_error";
  }
};
// Inferred role: WebRtcSignalingMessage; original runtime class name: M.
const WebRtcSignalingMessage = class M {
  session_id;
  type;
  message;
  constructor(e = "", t = "", s = {}) {
    this.session_id = e;
    this.type = t;
    this.message = s;
  }
  get typeName() {
    return "webrtc_signaling";
  }
};
// Inferred role: PingMessage; original runtime class name: tt.
const PingMessage = class tt {
  get typeName() {
    return "ping";
  }
};
// Inferred role: PongMessage; original runtime class name: fe.
const PongMessage = class fe {
  get typeName() {
    return "pong";
  }
};
// Inferred role: KeyPair; original runtime class name: Be.
const KeyPair = class Be {
  pk;
  sk;
  constructor(e, t) {
    this.pk = e;
    this.sk = t;
  }
  get pkBase64() {
    return Buffer.from(this.pk).toString("base64");
  }
  get skBase64() {
    return Buffer.from(this.sk).toString("base64");
  }
};
// Inferred role: IdentityKeyPair; original runtime class name: z.
const IdentityKeyPair = class z extends KeyPair {
  constructor(e, t) {
    super(e, t);
  }
  static generate() {
    let e;
    do e = sodium.randombytes_buf(32); while (!secp256k1.privateKeyVerify(e));
    const t = secp256k1.publicKeyCreate(e, !0);
    return new z(Buffer.from(t), e);
  }
  static fromSkBase64(e) {
    const t = Buffer.from(e, "base64");
    const s = t;
    const n = secp256k1.publicKeyCreate(s, !0);
    return new z(Buffer.from(n), t);
  }
};
// Inferred role: EphemeralKeyPair; original runtime class name: Q.
const EphemeralKeyPair = class Q extends KeyPair {
  constructor(e, t) {
    super(e, t);
  }
  static generate() {
    const e = sodium.crypto_kx_keypair();
    return new Q(e.publicKey, e.privateKey);
  }
};
// Inferred role: SessionKeys; original runtime class name: we.
const SessionKeys = class we {
  rx;
  tx;
  client;
  constructor(e, t, s) {
    const n = s ? sodium.crypto_kx_client_session_keys(e.pk, e.sk, t) : sodium.crypto_kx_server_session_keys(e.pk, e.sk, t);
    this.rx = n.sharedRx;
    this.tx = n.sharedTx;
    this.client = s;
  }
  get kSc() {
    return this.client ? this.rx : this.tx;
  }
  get kCs() {
    return this.client ? this.tx : this.rx;
  }
  get digest() {
    return CryptoPrimitives.blake2b(128, Buffer.concat([this.kSc, this.kCs]));
  }
  get verifCode() {
    const e = this.digest;
    const t = BigInt(e[0]) | BigInt(e[1]) << 8n | BigInt(e[2]) << 16n | BigInt(e[3]) << 24n | BigInt(e[4]) << 32n | BigInt(e[5]) << 40n | BigInt(e[6]) << 48n | BigInt(e[7]) << 56n;
    const s = BigInt(e[8]) | BigInt(e[9]) << 8n | BigInt(e[10]) << 16n | BigInt(e[11]) << 24n | BigInt(e[12]) << 32n | BigInt(e[13]) << 40n | BigInt(e[14]) << 48n | BigInt(e[15]) << 56n;
    return ((t ^ s) % 1000000n).toString().padStart(6, "0");
  }
};
// Inferred role: CryptoPrimitives; original runtime class name: v.
const CryptoPrimitives = class v {
  static inited = !1;
  static async init() {
    v.inited || (await sodium.ready, v.inited = !0);
  }
  static secp256k1SignDigest(e, t) {
    return secp256k1.ecdsaSign(e, t).signature;
  }
  static secp256k1Sign(e, t) {
    const s = this.blake2b(256, e);
    return this.secp256k1SignDigest(s, t);
  }
  static secp256k1VerifyDigest(e, t, s) {
    const n = secp256k1.signatureNormalize(e);
    return secp256k1.ecdsaVerify(n, t, s);
  }
  static secp256k1Verify(e, t, s) {
    const n = this.blake2b(256, t);
    return this.secp256k1VerifyDigest(e, n, s);
  }
  static blake2b(e, t) {
    return sodium.crypto_generichash(e / 8, Buffer.from(t));
  }
  static encrypt(e, t, s) {
    return sodium.crypto_aead_chacha20poly1305_ietf_encrypt(e, null, null, s, t);
  }
  static decrypt(e, t, s) {
    return sodium.crypto_aead_chacha20poly1305_ietf_decrypt(null, e, null, s, t);
  }
  static increment(e) {
    sodium.increment(e);
  }
};
// Inferred role: WebSocketReader; original runtime class name: st.
const WebSocketReader = class st {
  ws;
  constructor(e) {
    this.ws = e;
    this.ws.pause();
  }
  read() {
    return new Promise((e, t) => {
      this.ws.once("message", s => {
        this.ws.pause();
        this.ws.removeAllListeners("close");
        this.ws.removeAllListeners("error");
        e(new Uint8Array(s));
      });
      this.ws.once("close", () => {
        this.ws.removeAllListeners("message");
        this.ws.removeAllListeners("error");
        e(null);
      });
      this.ws.once("error", s => {
        this.ws.removeAllListeners("message");
        this.ws.removeAllListeners("close");
        t(s);
      });
      this.ws.resume();
    });
  }
};
const webRtcRelay = requireFromMain("@ca9io/electron-webrtc-relay")();
const {
  RTCPeerConnection: RTCPeerConnection
} = webRtcRelay;
const webRtcSessions = /* @__PURE__ */new Map();
const webRtcConfiguration = {
  iceServers: [{
    urls: "stun:stun.landrop.app:3478"
  }]
};
// Inferred role: WebRtcTransport; original runtime class name: N.
const WebRtcTransport = class N extends EventEmitter {
  static inited = !1;
  sessionId;
  publicKey;
  peerConnection;
  dataChannel;
  answerPromise;
  answerResolver;
  answerRejecter;
  connectedPromise;
  connectedResolver;
  connectedRejecter;
  iceCandidateBuffer;
  paused;
  dataQueue;
  constructor(e, t, s) {
    super();
    this.sessionId = e;
    this.publicKey = t;
    this.peerConnection = s;
    this.answerPromise = new Promise((n, r) => {
      this.answerResolver = n;
      this.answerRejecter = r;
    });
    this.connectedPromise = new Promise((n, r) => {
      this.connectedResolver = n;
      this.connectedRejecter = r;
    });
    this.iceCandidateBuffer = [];
    this.paused = !1;
    this.dataQueue = [];
  }
  static init() {
    this.inited || (webRtcRelay.init(), webRtcRelay.on("error", e => {
      console.log(e);
    }), this.inited = !0);
  }
  static async createSender(e) {
    const t = crypto.randomUUID();
    const s = new RTCPeerConnection(webRtcConfiguration);
    const n = new N(t, e, s);
    return webRtcSessions.set(t, n), await n.setupSender(), n;
  }
  static async createReceiver(e, t, s) {
    const n = new RTCPeerConnection(webRtcConfiguration);
    const r = new N(t, e, n);
    return webRtcSessions.set(t, r), await r.setupReceiver(s), r;
  }
  async setupSender() {
    this.setupIceCandidate();
    this.dataChannel = this.peerConnection.createDataChannel("landrop_main");
    this.setupDataChannel();
    const e = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(e);
    await signalingClient.sendMessageTo(this.publicKey, new WebRtcSignalingMessage(this.sessionId, "offer", e));
    await this.answerPromise;
    await this.sendIceCandidates();
    await this.connectedPromise;
  }
  async setupReceiver(e) {
    this.setupIceCandidate();
    this.peerConnection.ondatachannel = s => {
      this.dataChannel = s.channel;
      this.setupDataChannel();
    };
    await this.peerConnection.setRemoteDescription(e);
    const t = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(t);
    await signalingClient.sendMessageTo(this.publicKey, new WebRtcSignalingMessage(this.sessionId, "answer", t));
    await this.sendIceCandidates();
    await this.connectedPromise;
  }
  setupDataChannel() {
    this.dataChannel.onopen = () => {
      this.connectedResolver();
    };
    this.dataChannel.onclose = () => {
      this.destroy();
    };
    this.dataChannel.onmessage = e => {
      this.dataQueue.push(Buffer.from(e.data));
      this.emitData();
    };
    this.dataChannel.onerror = () => {
      this.emit("error", new Error("data channel error"));
    };
  }
  setupIceCandidate() {
    this.peerConnection.onicecandidate = e => {
      e.candidate && this.iceCandidateBuffer.push(e.candidate);
    };
  }
  async sendIceCandidates() {
    this.peerConnection.onicecandidate = async e => {
      e.candidate && (await signalingClient.sendMessageTo(this.publicKey, new WebRtcSignalingMessage(this.sessionId, "ice", e.candidate)));
    };
    for (const e of this.iceCandidateBuffer) await signalingClient.sendMessageTo(this.publicKey, new WebRtcSignalingMessage(this.sessionId, "ice", e));
    this.iceCandidateBuffer = [];
  }
  async handleAnswer(e) {
    await this.peerConnection.setRemoteDescription(e);
    this.answerResolver();
  }
  async handleIceCandidate(e) {
    await this.peerConnection.addIceCandidate(e);
  }
  handleMessageError(e) {
    throw this.answerRejecter(`WebRTC error: ${e}`), this.connectedRejecter(`WebRTC error: ${e}`), new Error(`WebRTC error: ${e}`);
  }
  write(e, t) {
    try {
      this.dataChannel.send(e);
      this.dataChannel.bufferedAmount === 0 ? t() : this.dataChannel.onbufferedamountlow = () => {
        t();
        this.dataChannel.onbufferedamountlow = null;
      };
    } catch (s) {
      t(s);
    }
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    this.paused = !1;
    this.emitData();
  }
  emitData() {
    for (; !this.paused && this.dataQueue.length > 0;) {
      const e = this.dataQueue.shift();
      this.emit("data", e);
    }
  }
  destroy() {
    this.peerConnection.close();
    this.emit("end");
  }
};
const SIGNALING_URL = "wss://api.landrop.app/v1/signaling";
// Inferred role: SignalingClient; original runtime class name: nt.
const SignalingClient = class nt extends EventEmitter {
  url;
  ws;
  wsReader;
  pingTimer;
  constructor(e) {
    super();
    this.url = e;
    this.ws = null;
    this.wsReader = null;
    this.pingTimer = null;
  }
  async init() {
    for (;;) try {
      await this.connect();
      await this.handshake();
      this.startPeriodicPing();
      await this.listen();
    } catch (e) {
      console.error("Signaling client error:", e);
      this.stopPeriodicPing();
      await new Promise(t => setTimeout(t, 5e3));
    }
  }
  async connect() {
    this.ws = new WebSocket(this.url);
    await new Promise((e, t) => {
      this.ws.once("open", e);
      this.ws.once("error", s => t(s));
    });
    this.wsReader = new WebSocketReader(this.ws);
  }
  async handshake() {
    const e = await this.recvMessage();
    if (e.type !== "auth_challenge") throw new Error(`Expected auth_challenge, got ${e.type}`);
    const t = new AuthChallengeMessage();
    Object.assign(t, e.data);
    const s = CryptoPrimitives.secp256k1Sign(Buffer.from(t.challenge, "base64"), deviceIdentity.kp.sk);
    await this.sendMessage(AuthResponseMessage.generate(Buffer.from(s).toString("base64")));
    const n = await this.recvMessage();
    if (n.type !== "auth_result") throw new Error(`Expected auth_result, got ${n.type}`);
    const r = new AuthResultMessage();
    if (Object.assign(r, n.data), !r.result) throw new Error("Auth failed");
  }
  async listen() {
    for (;;) {
      const e = await this.recvMessage();
      switch (e.type) {
        case "message_receive":
          {
            const t = new RoutedReceiveMessage();
            Object.assign(t, e.data);
            this.handleMessageReceive(t);
            break;
          }
        case "message_error":
          {
            const t = new RoutedErrorMessage();
            Object.assign(t, e.data);
            this.handleMessageError(t);
            break;
          }
        case "ping":
          this.handlePing();
          break;
      }
    }
  }
  startPeriodicPing() {
    this.pingTimer = setInterval(() => {
      this.sendMessage(new PingMessage());
    }, 3e4);
  }
  stopPeriodicPing() {
    this.pingTimer && (clearInterval(this.pingTimer), this.pingTimer = null);
  }
  async handleMessageReceive(e) {
    if (e.message.type === "ping") {
      await this.sendMessage(new PongMessage());
      return;
    }
    if (e.message.type !== "webrtc_signaling") return;
    const t = new WebRtcSignalingMessage();
    if (Object.assign(t, e.message.data), t.type === "offer") {
      const s = await WebRtcTransport.createReceiver(e.from, t.session_id, t.message);
      this.emit("new-webrtc-client", s);
    } else if (t.type === "answer") {
      const s = webRtcSessions.get(t.session_id);
      if (!s) throw new Error(`Unknown session ID: ${t.session_id}`);
      await s.handleAnswer(t.message);
    } else if (t.type === "ice") {
      const s = webRtcSessions.get(t.session_id);
      if (!s) throw new Error(`Unknown session ID: ${t.session_id}`);
      await s.handleIceCandidate(t.message);
    }
  }
  async handleMessageError(e) {
    if (e.message.type !== "webrtc_signaling") return;
    const t = new WebRtcSignalingMessage();
    Object.assign(t, e.message.data);
    const s = webRtcSessions.get(t.session_id);
    if (!s) throw new Error(`Unknown session ID: ${t.session_id}`);
    s.handleMessageError(e.error);
  }
  async handlePing() {
    await this.sendMessage(new PongMessage());
  }
  async sendMessageTo(e, t) {
    await this.sendMessage(new RoutedSendMessage(e, SignalingEnvelope.fromObj(t)));
  }
  async recvMessage() {
    const e = await this.wsReader.read();
    if (e == null) throw new Error("Signaling client connection closed");
    const t = new SignalingEnvelope();
    return Object.assign(t, JSON.parse(Buffer.from(e).toString("utf-8"))), t;
  }
  sendMessage(e) {
    return new Promise((t, s) => {
      this.ws.send(JSON.stringify(SignalingEnvelope.fromObj(e)), n => {
        n ? s(n) : t();
      });
    });
  }
};
const signalingClient = new SignalingClient(SIGNALING_URL);
// Inferred role: SignedEphemeralPublicKey; original runtime class name: F.
const SignedEphemeralPublicKey = class F {
  public_key;
  sig;
  constructor(e = "", t = "") {
    this.public_key = e;
    this.sig = t;
  }
  static generate(e) {
    const t = Buffer.from(e).toString("base64");
    const s = Buffer.from(CryptoPrimitives.secp256k1Sign(e, deviceIdentity.kp.sk)).toString("base64");
    return new F(t, s);
  }
};
// Inferred role: ClientHello; original runtime class name: X.
const ClientHello = class X {
  supported_versions;
  public_key;
  ecdhe;
  constructor(e = [], t = "", s = new SignedEphemeralPublicKey()) {
    this.supported_versions = e;
    this.public_key = t;
    this.ecdhe = s;
  }
  static generate(e) {
    return new X(["v2"], deviceIdentity.kp.pkBase64, SignedEphemeralPublicKey.generate(e));
  }
  verify() {
    return this.supported_versions.includes("v2") ? CryptoPrimitives.secp256k1Verify(Buffer.from(this.ecdhe.sig, "base64"), Buffer.from(this.ecdhe.public_key, "base64"), Buffer.from(this.public_key, "base64")) : !1;
  }
};
// Inferred role: ServerHello; original runtime class name: Y.
const ServerHello = class Y {
  version;
  public_key;
  ecdhe;
  constructor(e = "", t = "", s = new SignedEphemeralPublicKey()) {
    this.version = e;
    this.public_key = t;
    this.ecdhe = s;
  }
  static generate(e) {
    return new Y("v2", deviceIdentity.kp.pkBase64, SignedEphemeralPublicKey.generate(e));
  }
  verify() {
    return this.version !== "v2" ? !1 : CryptoPrimitives.secp256k1Verify(Buffer.from(this.ecdhe.sig, "base64"), Buffer.from(this.ecdhe.public_key, "base64"), Buffer.from(this.public_key, "base64"));
  }
};
// Inferred role: SocketReader; original runtime class name: rt.
const SocketReader = class rt {
  socket;
  constructor(e) {
    this.socket = e;
    this.socket.pause();
  }
  read() {
    return new Promise((e, t) => {
      this.socket.once("data", s => {
        this.socket.pause();
        this.socket.removeAllListeners("end");
        this.socket.removeAllListeners("error");
        e(s);
      });
      this.socket.once("end", () => {
        this.socket.removeAllListeners("data");
        this.socket.removeAllListeners("error");
        e(null);
      });
      this.socket.once("error", s => {
        this.socket.removeAllListeners("data");
        this.socket.removeAllListeners("end");
        t(s);
      });
      this.socket.resume();
    });
  }
};
// Inferred role: EncryptedSession; original runtime class name: T.
const EncryptedSession = class T {
  static maxBlockSize = 65518;
  /* Push bit */
  socket;
  socketReader;
  client;
  sessionKeys;
  publicKey;
  recvBuffer;
  rxNonce;
  txNonce;
  constructor(e, t) {
    this.socket = e;
    this.socketReader = new SocketReader(e);
    this.client = t;
    this.recvBuffer = new Uint8Array();
    this.rxNonce = new Uint8Array(sodium.crypto_aead_chacha20poly1305_ietf_NPUBBYTES);
    this.txNonce = new Uint8Array(sodium.crypto_aead_chacha20poly1305_ietf_NPUBBYTES);
    this.socket instanceof TcpSocket && this.socket.setNoDelay(!0);
  }
  get verifCode() {
    return this.sessionKeys.verifCode;
  }
  async handshake() {
    this.client ? await this.clientHandshake() : await this.serverHandshake();
  }
  close() {
    this.socket.destroy();
  }
  async encryptAndSendJson(e) {
    await this.encryptAndSend(Buffer.from(JSON.stringify(e)));
  }
  async recvAndDecryptJson() {
    const e = await this.recvAndDecrypt();
    return e === null ? null : JSON.parse(Buffer.from(e).toString("utf-8"));
  }
  async encryptAndSend(e) {
    do {
      const t = e.length <= T.maxBlockSize;
      let s;
      t ? (s = e, e = new Uint8Array()) : (s = e.subarray(0, T.maxBlockSize), e = e.subarray(T.maxBlockSize));
      const n = t ? new Uint8Array([1]) : new Uint8Array([0]);
      const r = CryptoPrimitives.encrypt(Buffer.concat([n, s]), this.sessionKeys.tx, this.txNonce);
      await this.sendRawRecord(r);
      CryptoPrimitives.increment(this.txNonce);
    } while (e.length > 0);
  }
  async recvAndDecrypt() {
    let e = new Uint8Array();
    do {
      const t = await this.recvRawRecord();
      if (t === null) return null;
      const s = CryptoPrimitives.decrypt(t, this.sessionKeys.rx, this.rxNonce);
      CryptoPrimitives.increment(this.rxNonce);
      const n = s[0];
      const r = s.subarray(1);
      if (e = Buffer.concat([e, r]), n === 1) return e;
    } while (!0);
  }
  async clientHandshake() {
    const e = EphemeralKeyPair.generate();
    await this.sendRawRecord(Buffer.from(JSON.stringify(ClientHello.generate(e.pk))));
    const t = await this.recvRawRecord();
    if (t === null) throw this.close(), new Error("client handshake failed: ServerHello not received");
    const s = new ServerHello();
    if (Object.assign(s, JSON.parse(Buffer.from(t).toString("utf-8"))), !s.verify()) throw this.close(), new Error("client handshake failed: ServerHello verification failed");
    this.sessionKeys = new SessionKeys(e, Buffer.from(s.ecdhe.public_key, "base64"), this.client);
    this.publicKey = Buffer.from(s.public_key, "base64");
  }
  async serverHandshake() {
    const e = await this.recvRawRecord();
    if (e === null) throw this.close(), new Error("server handshake failed: ClientHello not received");
    const t = new ClientHello();
    if (Object.assign(t, JSON.parse(Buffer.from(e).toString("utf-8"))), !t.verify()) throw this.close(), new Error("server handshake failed: ClientHello verification failed");
    const s = EphemeralKeyPair.generate();
    await this.sendRawRecord(Buffer.from(JSON.stringify(ServerHello.generate(s.pk))));
    this.sessionKeys = new SessionKeys(s, Buffer.from(t.ecdhe.public_key, "base64"), this.client);
    this.publicKey = Buffer.from(t.public_key, "base64");
  }
  sendRawRecord(e) {
    return new Promise((t, s) => {
      const n = e.length;
      const r = Buffer.concat([Buffer.from([n >> 8 & 255, n & 255]), e]);
      this.socket.write(r, h => {
        h ? s(h) : t();
      });
    });
  }
  async recvRawRecord() {
    do {
      if (this.recvBuffer.length >= 2) {
        const t = this.recvBuffer[0] << 8 | this.recvBuffer[1];
        if (this.recvBuffer.length >= t + 2) {
          const s = this.recvBuffer.subarray(2, t + 2);
          return this.recvBuffer = this.recvBuffer.subarray(t + 2), s;
        }
      }
      const e = await this.socketReader.read();
      if (e === null) return this.close(), null;
      this.recvBuffer = Buffer.concat([this.recvBuffer, e]);
    } while (!0);
  }
};
// Inferred role: IncomingTcpServer; original runtime class name: at.
const IncomingTcpServer = class at extends DefaultEventEmitter {
  server;
  constructor() {
    super();
    this.server = new TcpServer();
    this.server.on("connection", async e => {
      const t = new EncryptedSession(e, !1);
      await t.handshake();
      const s = new TransferConnection(t, !1);
      this.emit("connection", s);
    });
  }
  start(e = 0) {
    const t = s => {
      this.server.removeAllListeners("error");
      console.log(`LANDrop Server listening on port ${this.port}`);
      s();
    };
    return new Promise(s => {
      this.server.on("error", n => {
        n.code === "EADDRINUSE" && this.server.listen(0, () => t(s));
      });
      this.server.listen(e, () => t(s));
    });
  }
  get port() {
    return this.server.address().port;
  }
};
// Inferred role: ConnectionManager; original runtime class name: ot.
const ConnectionManager = class ot extends DefaultEventEmitter {
  server;
  connections;
  constructor() {
    super();
    this.server = new IncomingTcpServer();
    this.connections = [];
  }
  get serverPort() {
    return this.server.port;
  }
  async newConnection(e, t, s) {
    const n = await TransferConnection.connect(e, t, s);
    return await n.exchangeSupportedMessageTypes(), await n.exchangeDeviceInfo(), n.on("update", () => {
      this.emit("update", this.connections.map(r => r.toObj()));
    }), this.connections.push(n), this.emit("update", this.connections.map(r => r.toObj())), n;
  }
  async newWebRTCConnection(e) {
    const t = await TransferConnection.connectWebRTC(e);
    return await t.exchangeSupportedMessageTypes(), await t.exchangeDeviceInfo(), t.on("update", () => {
      this.emit("update", this.connections.map(s => s.toObj()));
    }), this.connections.push(t), this.emit("update", this.connections.map(s => s.toObj())), t;
  }
  setupConnection(e) {
    e.on("update", () => {
      this.emit("update", this.connections.map(t => t.toObj()));
    });
    e.on("file-send-request-recved", t => {
      this.emit("file-send-request-recved", t.toObj(), this.connections.indexOf(t));
    });
    e.on("file-receive-done", t => {
      this.emit("file-receive-done", t.toObj());
    });
    e.on("text-recved", (t, s) => {
      this.emit("text-recved", t, s.toObj());
    });
  }
  async start(e = 0) {
    this.startWebRTC();
    this.server.on("connection", t => {
      t.listen();
      this.setupConnection(t);
      this.connections.push(t);
      this.emit("update", this.connections.map(s => s.toObj()));
    });
    await this.server.start(e);
  }
  startWebRTC() {
    signalingClient.on("new-webrtc-client", async e => {
      const t = new EncryptedSession(e, !1);
      await t.handshake();
      const s = new TransferConnection(t, !0);
      s.listen();
      this.setupConnection(s);
      this.connections.push(s);
      this.emit("update", this.connections.map(n => n.toObj()));
    });
  }
};
const connectionManager = new ConnectionManager();
// Inferred role: DiscoveredDevice; original runtime class name: ne.
const DiscoveredDevice = class ne {
  deviceName;
  deviceType;
  address;
  port;
  publicKey;
  expirationTime;
  constructor(e, t, s, n, r, h) {
    this.deviceName = e;
    this.deviceType = t;
    this.address = s;
    this.port = n;
    this.publicKey = r;
    this.expirationTime = h || new Date(Date.now() + 2e4);
  }
};
// Inferred role: DiscoveryManager; original runtime class name: ct.
const DiscoveryManager = class ct extends DefaultEventEmitter {
  service;
  devices;
  constructor() {
    super();
    this.service = new UdpDiscoveryService();
    this.devices = [];
  }
  set serverPort(e) {
    this.service.serverPort = e;
  }
  get discoverable() {
    return this.service.discoverable;
  }
  set discoverable(e) {
    this.service.discoverable = e;
  }
  set detectMode(e) {
    this.service.detectMode = e;
  }
  async start() {
    setInterval(() => {
      const e = this.devices.length;
      this.devices = this.devices.filter(t => /* @__PURE__ */new Date() <= t.expirationTime);
      e !== this.devices.length && this.emit("update", this.devices);
    }, 1e3);
    this.service.on("discovery", e => {
      if (!e.discovery.discoverable) this.devices = this.devices.filter(t => t.publicKey !== e.discovery.public_key);else {
        const t = new DiscoveredDevice(e.discovery.device_info.name, e.discovery.device_info.type, e.addr, e.discovery.port, e.discovery.public_key);
        const s = this.devices.findIndex(n => n.publicKey === t.publicKey);
        s === -1 ? this.devices.push(t) : this.devices[s] = t;
      }
      this.emit("update", this.devices);
    });
    await this.service.start();
  }
  async addDeviceViaIpAndPort(e, t) {
    const s = await connectionManager.newConnection(e, t);
    s.close();
    const n = new DiscoveredDevice(s.deviceInfo?.name ?? "", s.deviceInfo?.type ?? "", e, t, s.publicKeyBase64, new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3));
    return this.devices.push(n), this.emit("update", this.devices), n;
  }
  async addDeviceViaDeviceId(e) {
    const t = await apiClient.getDeviceInfo(e);
    const s = new DiscoveredDevice(t.device_info.name, t.device_info.type, "", 0, t.public_key, new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3));
    return this.devices.push(s), this.emit("update", this.devices), s;
  }
};
const discoveryManager = new DiscoveryManager();
const APP_VERSION = "2.7.2";
// Inferred role: AppMetadata; original runtime class name: R.
const AppMetadata = class R {
  static appName = "LANDrop";
  static appVersion = APP_VERSION;
  static appPackageName = "app.landrop.landrop-v2-electron";
};
// Inferred role: SettingsStore; original runtime class name: f.
const SettingsStore = class f extends EventEmitter {
  static _deviceNameKey = "device_name";
  static _downloadPathKey = "download_path";
  static _discoverableKey = "discoverable";
  static _autoOpenDownloadFolderKey = "auto_open_download_folder";
  static _listeningPortKey = "listening_port";
  static _trustedDevicesKey = "trusted_devices";
  static _languageKey = "language";
  store;
  constructor() {
    super();
    this.store = new ElectronStore();
  }
  get deviceName() {
    return this.store.get(f._deviceNameKey, os.hostname());
  }
  set deviceName(e) {
    this.store.set(f._deviceNameKey, e);
  }
  get downloadPath() {
    const e = this.store.get(f._downloadPathKey);
    if (e) return e;
    const t = app.getPath("downloads");
    return path.join(t, AppMetadata.appName);
  }
  set downloadPath(e) {
    this.store.set(f._downloadPathKey, e);
  }
  get discoverable() {
    return this.store.get(f._discoverableKey, !0);
  }
  set discoverable(e) {
    this.store.set(f._discoverableKey, e);
    discoveryManager.discoverable = e;
  }
  get autoOpenDownloadFolder() {
    return this.store.get(f._autoOpenDownloadFolderKey, !0);
  }
  set autoOpenDownloadFolder(e) {
    this.store.set(f._autoOpenDownloadFolderKey, e);
  }
  get listeningPort() {
    return this.store.get(f._listeningPortKey, 0);
  }
  set listeningPort(e) {
    this.store.set(f._listeningPortKey, e);
  }
  get trustedDevices() {
    return this.store.get(f._trustedDevicesKey, {
      devices: [],
      askTimes: {}
    });
  }
  set trustedDevices(e) {
    this.store.set(f._trustedDevicesKey, e);
    this.emit("trusted-devices-updated", e);
  }
  getTrustedDeviceByPublicKey(e) {
    return this.trustedDevices.devices.find(t => t.publicKey === e);
  }
  addTrustedDevice(e) {
    const t = this.trustedDevices;
    t.devices.push(e);
    this.trustedDevices = t;
  }
  editTrustedDevice(e, t) {
    const s = this.trustedDevices;
    s.devices[e] = t;
    this.trustedDevices = s;
  }
  removeTrustedDeviceByIndex(e) {
    const t = this.trustedDevices;
    t.devices.splice(e, 1);
    this.trustedDevices = t;
  }
  removeTrustedDeviceByPublicKey(e) {
    const t = this.trustedDevices.devices.findIndex(s => s.publicKey === e);
    t !== -1 && this.removeTrustedDeviceByIndex(t);
  }
  getTrustedDeviceAskTimes(e) {
    return this.trustedDevices.askTimes[e] ?? 0;
  }
  incrementTrustedDeviceAskTimes(e) {
    const t = this.trustedDevices;
    t.askTimes[e] = (t.askTimes[e] ?? 0) + 1;
    this.trustedDevices = t;
  }
  get language() {
    return this.store.get(f._languageKey, "auto");
  }
  set language(e) {
    this.store.set(f._languageKey, e);
  }
};
const settings = new SettingsStore();
// Inferred role: DeviceIdentity; original runtime class name: Z.
const DeviceIdentity = class Z {
  static _idskKey = "landrop_secp256k1_idsk";
  kp;
  store;
  inited;
  constructor() {
    this.store = new ElectronStore();
    this.inited = !1;
  }
  init() {
    this.inited || (this.deviceType === "linux" && (safeStorage.isEncryptionAvailable() || safeStorage.setUsePlainTextEncryption(!0)), this.loadKp() || this.generateKp(), this.inited = !0);
  }
  get deviceName() {
    return settings.deviceName;
  }
  get deviceType() {
    switch (os.platform()) {
      case "darwin":
        return "macos";
      case "win32":
        return "windows";
      case "linux":
        return "linux";
      default:
        throw new Error(`Unsupported platform: ${os.platform()}`);
    }
  }
  loadKp() {
    const e = this.store.get(Z._idskKey);
    if (!e) return !1;
    try {
      this.kp = IdentityKeyPair.fromSkBase64(safeStorage.decryptString(Buffer.from(e.data)));
    } catch {
      return !1;
    }
    return !0;
  }
  generateKp() {
    this.kp = IdentityKeyPair.generate();
    this.store.set(Z._idskKey, safeStorage.encryptString(this.kp.skBase64));
  }
};
const deviceIdentity = new DeviceIdentity();
const addFilenameCollisionSuffix = {
  lt: (i, e) => {
    const t = i.indexOf(".");
    if (t === -1) return `${i} (${e})`;
    const s = i.slice(0, t);
    const n = i.slice(t);
    return `${s} (${e})${n}`;
  }
}.lt;
const chooseUnusedDownloadName = {
  ht: i => {
    const e = settings.downloadPath;
    if (!fs.existsSync(path.join(e, i))) return i;
    for (let t = 2;; ++t) {
      const s = addFilenameCollisionSuffix(i, t);
      if (!fs.existsSync(path.join(e, s))) return s;
    }
  }
}.ht;
const resolveDownloadPath = {
  xe: async (i, e) => {
    const t = i.split("/");
    Object.hasOwn(e, t[0]) || (e[t[0]] = chooseUnusedDownloadName(t[0]));
    t[0] = e[t[0]];
    const s = t.join("/");
    const n = path.dirname(s);
    return await fs.promises.mkdir(path.join(settings.downloadPath, n), {
      recursive: !0
    }), path.join(settings.downloadPath, s);
  }
}.xe;
const ensureDownloadDirectory = {
  ut: () => {
    resolveDownloadPath(" ", {});
  }
}.ut;
const openDownloadFolder = {
  de: () => {
    ensureDownloadDirectory();
    shell.openPath(settings.downloadPath);
  }
}.de;
const encodePosixPermissions = {
  pt: i => {
    let e = 0;
    i & fs.constants.S_IRUSR && (e += 4);
    i & fs.constants.S_IWUSR && (e += 2);
    i & fs.constants.S_IXUSR && (e += 1);
    let t = 0;
    i & fs.constants.S_IRGRP && (t += 4);
    i & fs.constants.S_IWGRP && (t += 2);
    i & fs.constants.S_IXGRP && (t += 1);
    let s = 0;
    return i & fs.constants.S_IROTH && (s += 4), i & fs.constants.S_IWOTH && (s += 2), i & fs.constants.S_IXOTH && (s += 1), `${e}${t}${s}`;
  }
}.pt;
const decodePosixPermissions = {
  ft: i => {
    const e = parseInt(i[0]);
    const t = parseInt(i[1]);
    const s = parseInt(i[2]);
    return (e & 4 ? fs.constants.S_IRUSR : 0) | (e & 2 ? fs.constants.S_IWUSR : 0) | (e & 1 ? fs.constants.S_IXUSR : 0) | (t & 4 ? fs.constants.S_IRGRP : 0) | (t & 2 ? fs.constants.S_IWGRP : 0) | (t & 1 ? fs.constants.S_IXGRP : 0) | (s & 4 ? fs.constants.S_IROTH : 0) | (s & 2 ? fs.constants.S_IWOTH : 0) | (s & 1 ? fs.constants.S_IXOTH : 0);
  }
}.ft;
const getFilenameExtension = {
  wt: i => {
    const e = i.lastIndexOf(".");
    return e === -1 ? "" : i.slice(e + 1);
  }
}.wt;
const SUPPORTED_MESSAGE_TYPES = ["ack", "supported_message_types", "device_info", "file_send_request", "file_send_request_reply", "text_send"];
// Inferred role: TransferEnvelope; original runtime class name: B.
const TransferEnvelope = class B {
  type;
  data;
  constructor(e = "", t = {}) {
    this.type = e;
    this.data = t;
  }
  static fromObj(e) {
    return new B(e.typeName, e);
  }
};
// Inferred role: AckMessage; original runtime class name: ye.
const AckMessage = class ye {
  ack;
  constructor(e = !0) {
    this.ack = e;
  }
  get typeName() {
    return "ack";
  }
};
// Inferred role: SupportedMessageTypes; original runtime class name: A.
const SupportedMessageTypes = class A {
  types;
  constructor(e = SUPPORTED_MESSAGE_TYPES) {
    this.types = e;
  }
  static generate() {
    return new A(SUPPORTED_MESSAGE_TYPES);
  }
  get typeName() {
    return "supported_message_types";
  }
};
// Inferred role: PeerDeviceInfo; original runtime class name: O.
const PeerDeviceInfo = class O {
  name;
  type;
  constructor(e = "", t = "") {
    this.name = e;
    this.type = t;
  }
  static generate() {
    return new O(deviceIdentity.deviceName, deviceIdentity.deviceType);
  }
  get typeName() {
    return "device_info";
  }
};
// Inferred role: FileMetadata; original runtime class name: le.
const FileMetadata = class le {
  filename;
  size;
  last_modified;
  permissions;
  constructor(e = "", t = 0, s = 0, n = "") {
    this.filename = e;
    this.size = t;
    this.last_modified = s;
    this.permissions = n;
  }
  static async generate(e) {
    const t = await fs.promises.stat(e.path);
    return new le(e.abstractFilename, t.size, Math.floor(t.mtimeMs / 1e3), encodePosixPermissions(t.mode));
  }
};
// Inferred role: FileSendRequest; original runtime class name: be.
const FileSendRequest = class be {
  files;
  supported_compressions;
  ios_live_photos;
  constructor(e = [], t = [], s = []) {
    this.files = e;
    this.supported_compressions = t;
    this.ios_live_photos = s;
  }
  get typeName() {
    return "file_send_request";
  }
};
// Inferred role: FileSendRequestReply; original runtime class name: ke.
const FileSendRequestReply = class ke {
  accept;
  compression;
  constructor(e = !1, t = "") {
    this.accept = e;
    this.compression = t;
  }
  get typeName() {
    return "file_send_request_reply";
  }
};
// Inferred role: TextSendMessage; original runtime class name: _e.
const TextSendMessage = class _e {
  text;
  constructor(e = "") {
    this.text = e;
  }
  get typeName() {
    return "text_send";
  }
};
// Inferred role: Analytics; original runtime class name: gt.
const Analytics = class gt {
  sessionId;
  inited;
  constructor() {
    this.sessionId = crypto.randomUUID();
    this.inited = !1;
  }
  init() {
    this.inited || (this.logSessionStart(), setInterval(() => this.logSessionRetain(60 * 5), 1e3 * 60 * 5), this.inited = !0);
  }
  async logEvent(e, t) {
    runtimeEnvironment.dev ? console.log(`Analytics: ${e} ${JSON.stringify(t)}`) : await apiClient.logAnalytics(deviceIdentity.kp.pkBase64, this.sessionId, e, t);
  }
  async logSessionStart() {
    await this.logEvent("session_start", {
      device_info: {
        name: deviceIdentity.deviceName,
        type: deviceIdentity.deviceType
      },
      version: AppMetadata.appVersion
    });
  }
  async logSessionRetain(e) {
    await this.logEvent("session_retain", {
      duration: e
    });
  }
  connectionToMap(e) {
    return {
      public_key: e.publicKeyBase64,
      device_info: {
        name: e.deviceInfo?.name,
        type: e.deviceInfo?.type
      },
      is_webrtc: e.isWebRTC
    };
  }
  fileSendRequestFileToMap(e) {
    return {
      suffix: getFilenameExtension(e.filename),
      size: e.size
    };
  }
  fileSendRequestFilesToMap(e) {
    return e.map(this.fileSendRequestFileToMap);
  }
  fileSendRequestToMap(e) {
    return {
      files: this.fileSendRequestFilesToMap(e.files),
      live_photos_count: e.ios_live_photos.length
    };
  }
  async logTransferStarts(e, t) {
    await this.logEvent("transfer_starts", {
      ...this.connectionToMap(e),
      direction: t,
      ...this.fileSendRequestToMap(e.fileSendRequest),
      size: e.fileTotalSize,
      num_files: e.fileSendRequest.files.length
    });
  }
  async logTransferEnds(e, t, s) {
    await this.logEvent("transfer_ends", {
      ...this.connectionToMap(e),
      direction: t,
      ...this.fileSendRequestToMap(e.fileSendRequest),
      size: e.fileTotalSize,
      num_files: e.fileSendRequest.files.length,
      duration: s
    });
  }
  async logTransferError(e, t, s, n) {
    await this.logEvent("transfer_error", {
      ...this.connectionToMap(e),
      direction: t,
      live_photos_count: n?.length ?? 0,
      size: e.fileTotalSize,
      transferred_size: e.fileTransferredSize,
      num_files: s,
      error_message: e.errorMessage
    });
  }
  async logReceiveFiles(e) {
    await this.logEvent("receive_files", {
      ...this.connectionToMap(e),
      ...this.fileSendRequestToMap(e.fileSendRequest),
      from_trusted_device: !!settings.getTrustedDeviceByPublicKey(e.publicKeyBase64)
    });
  }
  async logReceiveText(e, t) {
    await this.logEvent("receive_text", {
      ...this.connectionToMap(e),
      length: t.length
    });
  }
  discoveredDeviceToMap(e) {
    return {
      public_key: e.publicKey,
      device_info: {
        name: e.deviceName,
        type: e.deviceType
      },
      is_webrtc: e.address === ""
    };
  }
  async logAddViaIpAndPort(e, t, s) {
    await this.logEvent("add_via_ip_and_port", {
      ...this.discoveredDeviceToMap(e),
      ip: t,
      port: s
    });
  }
  async logAddViaDeviceId(e) {
    await this.logEvent("add_via_device_id", {
      ...this.discoveredDeviceToMap(e)
    });
  }
  async logFixFirewall(e) {
    await this.logEvent("fix_firewall", {
      success: e
    });
  }
};
const analytics = new Analytics();
// Inferred role: TransferConnection; original runtime class name: p.
const TransferConnection = class p extends DefaultEventEmitter {
  static State = {
    idle: 0,
    fileSendRequestSent: 1,
    fileSendRequestRecved: 2,
    sendingFiles: 3,
    receivingFiles: 4,
    fileTransferDone: 5,
    fileTransferError: 6
  };
  session;
  supportedMessageTypes;
  deviceInfo;
  fileSendRequest;
  fileTransferredSize;
  fileTotalSize;
  state;
  errorMessage;
  isWebRTC;
  constructor(e, t) {
    super();
    this.session = e;
    this.fileTransferredSize = 0;
    this.fileTotalSize = 0;
    this.state = p.State.idle;
    this.errorMessage = "";
    this.isWebRTC = t;
  }
  static connect(e, t, s) {
    return new Promise((n, r) => {
      const h = new TcpSocket();
      h.on("error", m => {
        r(m);
      });
      h.connect(t, e, async () => {
        const m = new EncryptedSession(h, !0);
        await m.handshake();
        s && Buffer.from(m.publicKey).toString("base64") !== s && r(new Error("Public key mismatch"));
        n(new p(m, !1));
      });
    });
  }
  static async connectWebRTC(e) {
    const t = await WebRtcTransport.createSender(e);
    const s = new EncryptedSession(t, !0);
    if (await s.handshake(), Buffer.from(s.publicKey).toString("base64") !== e) throw new Error("Public key mismatch");
    return new p(s, !0);
  }
  get verifCode() {
    return this.session.verifCode;
  }
  get publicKey() {
    return this.session.publicKey;
  }
  get publicKeyBase64() {
    return Buffer.from(this.publicKey).toString("base64");
  }
  get fileTransferProgress() {
    return this.fileTotalSize === 0 ? 1 : this.fileTransferredSize / this.fileTotalSize;
  }
  async listen() {
    do {
      const e = await this.session.recvAndDecryptJson();
      if (e == null) break;
      const t = new TransferEnvelope();
      switch (Object.assign(t, e), t.type) {
        case "supported_message_types":
          {
            const s = new SupportedMessageTypes();
            Object.assign(s, t.data);
            await this.handleSupportedMessageTypes(s);
            break;
          }
        case "device_info":
          {
            const s = new PeerDeviceInfo();
            Object.assign(s, t.data);
            await this.handleDeviceInfo(s);
            break;
          }
        case "file_send_request":
          {
            const s = new FileSendRequest();
            Object.assign(s, t.data);
            this.handleFileSendRequest(s);
            return;
          }
        case "text_send":
          {
            const s = new TextSendMessage();
            Object.assign(s, t.data);
            await this.handleTextSend(s);
            break;
          }
        default:
          await this.sendMessage(new AckMessage(!1));
      }
    } while (!0);
  }
  async sendMessage(e) {
    await this.session.encryptAndSendJson(TransferEnvelope.fromObj(e));
  }
  async exchangeSupportedMessageTypes() {
    await this.sendMessage(SupportedMessageTypes.generate());
    const e = await this.session.recvAndDecryptJson();
    if (e == null) return this;
    const t = new TransferEnvelope();
    if (Object.assign(t, e), t.type === "supported_message_types") {
      const s = new SupportedMessageTypes();
      Object.assign(s, t.data);
      this.supportedMessageTypes = s;
      this.emit("update", this);
    }
    return this;
  }
  async handleSupportedMessageTypes(e) {
    this.supportedMessageTypes = e;
    this.emit("update", this);
    await this.sendMessage(SupportedMessageTypes.generate());
  }
  async exchangeDeviceInfo() {
    await this.sendMessage(PeerDeviceInfo.generate());
    const e = await this.session.recvAndDecryptJson();
    if (e == null) return this;
    const t = new TransferEnvelope();
    if (Object.assign(t, e), t.type === "device_info") {
      const s = new PeerDeviceInfo();
      Object.assign(s, t.data);
      this.deviceInfo = s;
      this.emit("update", this);
    }
    return this;
  }
  async handleDeviceInfo(e) {
    this.deviceInfo = e;
    this.emit("update", this);
    await this.sendMessage(PeerDeviceInfo.generate());
  }
  async sendFiles(e) {
    try {
      const t = [];
      for (const D of e) t.push(await FileMetadata.generate(D));
      this.fileTransferredSize = 0;
      this.fileTotalSize = 0;
      for (const D of t) this.fileTotalSize += D.size;
      this.fileSendRequest = new FileSendRequest(t, ["none"], []);
      await this.sendMessage(this.fileSendRequest);
      this.setState(p.State.fileSendRequestSent);
      const s = await this.session.recvAndDecryptJson();
      if (s == null) throw new Error("The receipient closed the connection");
      const n = new TransferEnvelope();
      if (Object.assign(n, s), n.type !== "file_send_request_reply") throw new Error("The receipient does not support receiving files");
      const r = new FileSendRequestReply();
      if (Object.assign(r, n.data), !r.accept) throw new Error("The receipient refused to receive files");
      this.setState(p.State.sendingFiles);
      analytics.logTransferStarts(this, "send");
      let h = 0;
      const m = Date.now();
      for (const D of e) {
        const $ = D.path;
        if ((await fs.promises.stat($)).size === 0) continue;
        const q = await fs.promises.open($, "r");
        do {
          const he = Buffer.alloc(EncryptedSession.maxBlockSize);
          const te = await q.read(he);
          if (te.bytesRead === 0) {
            await q.close();
            break;
          }
          await this.session.encryptAndSend(he.subarray(0, te.bytesRead));
          this.fileTransferredSize += te.bytesRead;
          const ue = Math.floor(this.fileTransferredSize / this.fileTotalSize * 1e3);
          h !== ue && (h = ue, this.emit("update", this));
        } while (!0);
      }
      const L = Date.now();
      return this.setState(p.State.fileTransferDone), analytics.logTransferEnds(this, "send", (L - m) / 1e3), this;
    } catch (t) {
      throw t instanceof Error ? this.errorMessage = t.message : this.errorMessage = String(t), this.setState(p.State.fileTransferError), analytics.logTransferError(this, "send", e.length, []), t;
    }
  }
  async handleFileSendRequest(e) {
    this.fileSendRequest = e;
    this.fileTransferredSize = 0;
    this.fileTotalSize = 0;
    for (const t of e.files) this.fileTotalSize += t.size;
    if (this.setState(p.State.fileSendRequestRecved), analytics.logReceiveFiles(this), settings.getTrustedDeviceByPublicKey(this.publicKeyBase64)) {
      this.replyFileSendRequest(!0);
      return;
    }
    this.emit("file-send-request-recved", this);
  }
  async replyFileSendRequest(e) {
    try {
      if (await this.sendMessage(new FileSendRequestReply(e, "none")), !e) throw new Error("We rejected the files");
      this.setState(p.State.receivingFiles);
      const t = {};
      analytics.logTransferStarts(this, "receive");
      let s = 0;
      const n = Date.now();
      for (const h of this.fileSendRequest.files) {
        const m = await resolveDownloadPath(h.filename, t);
        const L = await fs.promises.open(m, "w");
        let D = h.size;
        for (; D > 0;) {
          const j = await this.session.recvAndDecrypt();
          if (j == null) throw new Error("The sender closed the connection");
          await L.write(j);
          D -= j.length;
          this.fileTransferredSize += j.length;
          const q = Math.floor(this.fileTransferredSize / this.fileTotalSize * 1e3);
          s !== q && (s = q, this.emit("update", this));
        }
        await L.close();
        const $ = await fs.promises.stat(m);
        await fs.promises.utimes(m, $.atime, new Date(h.last_modified * 1e3));
        await fs.promises.chmod(m, decodePosixPermissions(h.permissions));
      }
      const r = Date.now();
      return this.setState(p.State.fileTransferDone), this.emit("file-receive-done", this), analytics.logTransferEnds(this, "receive", (r - n) / 1e3), this;
    } catch (t) {
      throw t instanceof Error ? this.errorMessage = t.message : this.errorMessage = String(t), this.setState(p.State.fileTransferError), analytics.logTransferError(this, "receive", this.fileSendRequest.files.length, this.fileSendRequest.ios_live_photos), t;
    } finally {
      this.listen();
    }
  }
  async sendText(e) {
    return await this.sendMessage(new TextSendMessage(e)), await this.session.recvAndDecryptJson(), this;
  }
  async handleTextSend(e) {
    analytics.logReceiveText(this, e.text);
    await this.sendMessage(new AckMessage(!0));
    this.emit("text-recved", e.text, this);
  }
  close() {
    return this.session.close(), this;
  }
  setState(e) {
    this.state = e;
    this.emit("update", this);
  }
  toObj() {
    return {
      supportedMessageTypes: this.supportedMessageTypes,
      deviceInfo: this.deviceInfo,
      fileSendRequest: this.fileSendRequest,
      fileTransferredSize: this.fileTransferredSize,
      fileTotalSize: this.fileTotalSize,
      state: this.state,
      errorMessage: this.errorMessage,
      verifCode: this.verifCode,
      publicKeyBase64: this.publicKeyBase64,
      fileTransferProgress: this.fileTransferProgress,
      isWebRTC: this.isWebRTC
    };
  }
};
const windowsIconPath = joinPath(mainDirectory, "../../resources/icon/icon.ico");
const applicationIconPath = joinPath(mainDirectory, "../../resources/icon/icon.png");
const exitIconPath = joinPath(mainDirectory, "../../resources/img/cancel.png");
const chatIconPath = joinPath(mainDirectory, "../../resources/img/chat.png");
const sendFileIconPath = joinPath(mainDirectory, "../../resources/img/cloud_upload.png");
const folderIconPath = joinPath(mainDirectory, "../../resources/img/folder_open.png");
const aboutIconPath = joinPath(mainDirectory, "../../resources/img/info.png");
const settingsIconPath = joinPath(mainDirectory, "../../resources/img/settings.png");
const macosTrayIconPath = joinPath(mainDirectory, "../../resources/icon/macosTrayIconTemplate@2x.png");
// Inferred role: UpdateManager; original runtime class name: Dt.
const UpdateManager = class Dt extends DefaultEventEmitter {
  appUpdater;
  started;
  checkForUpdatesInterval;
  constructor() {
    super();
    const {
      autoUpdater: e
    } = electronUpdater;
    this.appUpdater = e;
    this.appUpdater.autoDownload = !0;
    this.appUpdater.autoInstallOnAppQuit = !0;
    this.appUpdater.on("update-downloaded", () => {
      this.emit("update-downloaded");
      this.checkForUpdatesInterval && (clearInterval(this.checkForUpdatesInterval), this.checkForUpdatesInterval = null);
    });
    this.started = !1;
    this.checkForUpdatesInterval = null;
  }
  startCheckingForUpdates() {
    this.started || (this.checkForUpdatesInterval = setInterval(() => {
      this.appUpdater.checkForUpdates();
    }, 1e3 * 60 * 60), this.appUpdater.checkForUpdates(), this.fetchAnnouncements(), this.started = !0);
  }
  quitAndInstall() {
    this.appUpdater.quitAndInstall();
  }
  async fetchAnnouncements() {
    const e = await fetch("https://releases.landrop.app/versions.json");
    if (!e.ok) throw new Error("Failed to fetch version data");
    const t = await e.json();
    for (const s of t.announcements) semver.satisfies(AppMetadata.appVersion, s.version) && s.platforms.includes(deviceIdentity.deviceType) && this.emit("announcement", s.message);
  }
};
const updateManager = new UpdateManager();
const requestWindowsFirewallRule = {
  Rt: () => new Promise((i, e) => {
    if (deviceIdentity.deviceType !== "windows") {
      analytics.logFixFirewall(!1);
      e(new Error("Not supported on this platform"));
      return;
    }
    const t = app.getPath("exe").replace(/\//g, "\\");
    const n = `Start-Process -FilePath netsh -ArgumentList '${`advfirewall firewall add rule name="${AppMetadata.appName}" dir=in action=allow program="${t}" enable=yes`}' -Verb RunAs`;
    execFile("powershell", ["-Command", n], r => {
      r ? (analytics.logFixFirewall(!1), e(r)) : (analytics.logFixFirewall(!0), i());
    });
  })
}.Rt;
let mainWindow;
let isQuitting = !1;
const initializeApplication = {
  It: async () => {
    if (!acquireSingleInstanceLock()) return;
    await app.whenReady();
    await initializeServices();
    createMainWindow();
    createTray();
    registerIpcHandlers();
    runtimeEnvironment.dev && process.env.ELECTRON_RENDERER_URL ? mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL) : mainWindow.loadFile(joinPath(mainDirectory, "../renderer/index.html"));
  }
}.It;
const acquireSingleInstanceLock = {
  Pt: () => {
    if (!app.requestSingleInstanceLock()) {
      app.quit();
      return !1;
    }
    app.on("second-instance", () => {
      mainWindow && mainWindow.show();
    });
    return !0;
  }
}.Pt;
const initializeServices = {
  Bt: async () => {
    await CryptoPrimitives.init();
    deviceIdentity.init();
    connectionManager.on("file-receive-done", () => {
      settings.autoOpenDownloadFolder && openDownloadFolder();
    });
    await connectionManager.start(settings.listeningPort);
    discoveryManager.serverPort = connectionManager.serverPort;
    discoveryManager.discoverable = settings.discoverable;
    await discoveryManager.start();
    analytics.init();
    WebRtcTransport.init();
    signalingClient.init();
  }
}.Bt;
const createMainWindow = {
  xt: () => {
    app.on("browser-window-created", (i, e) => {
      windowOptimizer.watchWindowShortcuts(e);
    });
    app.on("activate", () => {
      mainWindow && mainWindow.show();
    });
    mainWindow = new BrowserWindow({
      width: 1072,
      height: 670,
      show: !1,
      autoHideMenuBar: !0,
      ...(process.platform === "linux" ? {
        icon: applicationIconPath
      } : {}),
      webPreferences: {
        preload: joinPath(mainDirectory, "../preload/index.mjs"),
        sandbox: !1
      }
    });
    mainWindow.on("ready-to-show", () => {
      const i = app.getLoginItemSettings().wasOpenedAtLogin;
      const e = process.argv.includes("--hidden");
      !i && !e ? mainWindow.show() : deviceIdentity.deviceType === "macos" && app.dock.hide();
    });
    mainWindow.on("show", () => {
      discoveryManager.detectMode = !0;
      deviceIdentity.deviceType === "macos" && app.dock.show();
    });
    mainWindow.on("close", i => {
      isQuitting || (i.preventDefault(), mainWindow.hide(), deviceIdentity.deviceType === "macos" && app.dock.hide(), discoveryManager.detectMode = !1);
    });
    app.on("before-quit", () => {
      isQuitting = !0;
    });
    mainWindow.webContents.setWindowOpenHandler(i => (shell.openExternal(i.url), {
      action: "deny"
    }));
  }
}.xt;
const createTray = {
  Mt: () => {
    electronApp.setAppUserModelId(AppMetadata.appPackageName);
    let i;
    deviceIdentity.deviceType === "macos" ? i = macosTrayIconPath : deviceIdentity.deviceType === "windows" ? i = windowsIconPath : i = applicationIconPath;
    const e = new Tray(nativeImage.createFromPath(i));
    const t = Menu.buildFromTemplate([{
      label: `${AppMetadata.appName} v${AppMetadata.appVersion}`,
      click: () => mainWindow.show()
    }, {
      type: "separator"
    }, {
      icon: nativeImage.createFromPath(sendFileIconPath).resize({
        width: 16
      }),
      label: "Send File(s)...",
      click: () => {
        mainWindow.webContents.send("prepare-send-files-ui");
        mainWindow.show();
      }
    }, {
      icon: nativeImage.createFromPath(chatIconPath).resize({
        width: 16
      }),
      label: "Send Text...",
      click: () => {
        mainWindow.webContents.send("prepare-send-text-ui");
        mainWindow.show();
      }
    }, {
      icon: nativeImage.createFromPath(folderIconPath).resize({
        width: 16
      }),
      label: "Open Download Folder",
      click: () => openDownloadFolder()
    }, {
      icon: nativeImage.createFromPath(settingsIconPath).resize({
        width: 16
      }),
      label: "Settings...",
      click: () => {
        mainWindow.webContents.send("prepare-settings-ui");
        mainWindow.show();
      }
    }, {
      type: "separator"
    }, {
      icon: nativeImage.createFromPath(aboutIconPath).resize({
        width: 16
      }),
      label: "About...",
      role: "about"
    }, {
      icon: nativeImage.createFromPath(exitIconPath).resize({
        width: 16
      }),
      label: "Exit",
      click: () => {
        isQuitting = !0;
        app.quit();
      }
    }]);
    return e.setToolTip(AppMetadata.appName), e.setContextMenu(t), e.on("double-click", () => {
      mainWindow.show();
    }), connectionManager.on("file-send-request-recved", () => {
      mainWindow.show();
      deviceIdentity.deviceType === "macos" && (app.dock.show().then(() => {
        app.dock.bounce("critical");
      }), app.dock.bounce("critical"));
    }), connectionManager.on("text-recved", () => {
      mainWindow.show();
      deviceIdentity.deviceType === "macos" && (app.dock.show().then(() => {
        app.dock.bounce("critical");
      }), app.dock.bounce("critical"));
    }), e;
  }
}.Mt;
const registerIpcHandlers = {
  Ct: () => {
    discoveryManager.on("update", i => {
      mainWindow.webContents.send("discovered-devices-updated", i);
    });
    connectionManager.on("update", i => {
      mainWindow.webContents.send("landrop-connections-updated", i);
    });
    connectionManager.on("file-send-request-recved", (i, e) => {
      mainWindow.webContents.send("file-send-request-recved", i, e);
    });
    connectionManager.on("file-receive-done", i => {
      mainWindow.webContents.send("file-receive-done", i);
    });
    connectionManager.on("text-recved", (i, e) => {
      mainWindow.webContents.send("text-recved", i, e);
    });
    updateManager.on("update-downloaded", () => {
      mainWindow.webContents.send("update-downloaded");
    });
    updateManager.on("announcement", i => {
      mainWindow.webContents.send("announcement", i);
    });
    settings.on("trusted-devices-updated", i => {
      mainWindow.webContents.send("trusted-devices-updated", i);
    });
    ipcMain.handle("send-files", async (i, e, t, s, n) => {
      let r;
      t !== "" ? r = await connectionManager.newConnection(t, s, n) : r = await connectionManager.newWebRTCConnection(n);
      await r.sendFiles(e);
      r.isWebRTC && (r.setState(TransferConnection.State.sendingFiles), await r.exchangeDeviceInfo(), r.setState(TransferConnection.State.fileTransferDone));
      r.close();
    });
    ipcMain.handle("send-text", async (i, e, t, s, n) => {
      let r;
      t !== "" ? r = await connectionManager.newConnection(t, s, n) : r = await connectionManager.newWebRTCConnection(n);
      await r.sendText(e);
      r.isWebRTC && (await r.exchangeDeviceInfo());
      r.close();
    });
    ipcMain.on("reply-file-send-request", (i, e, t) => {
      connectionManager.connections[t].replyFileSendRequest(e);
    });
    ipcMain.handle("open-files", async () => {
      const i = await dialog.showOpenDialog(mainWindow, {
        properties: ["openFile", "multiSelections"]
      });
      return i.canceled ? [] : i.filePaths;
    });
    ipcMain.handle("open-directories", async () => {
      const i = await dialog.showOpenDialog(mainWindow, {
        properties: ["openDirectory", "multiSelections"]
      });
      return i.canceled ? [] : i.filePaths;
    });
    ipcMain.handle("parse-files", async (i, e) => {
      const t = [];
      for (const s of e) t.push(...(await TransferFileEntry.parse(s)));
      return t;
    });
    ipcMain.handle("open-directory", async () => {
      const i = await dialog.showOpenDialog(mainWindow, {
        properties: ["openDirectory", "createDirectory"]
      });
      return i.canceled ? null : i.filePaths[0];
    });
    ipcMain.on("open-download-folder", () => {
      openDownloadFolder();
    });
    ipcMain.handle("get-device-id", () => deviceIdentity.kp.pkBase64);
    ipcMain.handle("get-server-port", () => connectionManager.serverPort);
    ipcMain.on("start-checking-for-updates", () => {
      updateManager.startCheckingForUpdates();
    });
    ipcMain.on("quit-and-install-updates", () => {
      isQuitting = !0;
      updateManager.quitAndInstall();
    });
    ipcMain.handle("fix-firewall", async () => {
      await requestWindowsFirewallRule();
    });
    ipcMain.handle("add-device-via-ip-and-port", async (i, e, t) => {
      const s = await discoveryManager.addDeviceViaIpAndPort(e, t);
      analytics.logAddViaIpAndPort(s, e, t);
    });
    ipcMain.handle("add-device-via-device-id", async (i, e) => {
      if (e === deviceIdentity.kp.pkBase64) throw new Error("Cannot add yourself");
      const t = await discoveryManager.addDeviceViaDeviceId(e);
      analytics.logAddViaDeviceId(t);
    });
    ipcMain.handle("log-event", async (i, e, t) => {
      await analytics.logEvent(e, t);
    });
    ipcMain.handle("get-device-name", () => settings.deviceName);
    ipcMain.on("set-device-name", (i, e) => {
      settings.deviceName = e;
    });
    ipcMain.handle("get-download-path", () => settings.downloadPath);
    ipcMain.on("set-download-path", (i, e) => {
      settings.downloadPath = e;
    });
    ipcMain.handle("get-discoverable", () => settings.discoverable);
    ipcMain.on("set-discoverable", (i, e) => {
      settings.discoverable = e;
    });
    ipcMain.handle("get-auto-open-download-folder", () => settings.autoOpenDownloadFolder);
    ipcMain.on("set-auto-open-download-folder", (i, e) => {
      settings.autoOpenDownloadFolder = e;
    });
    ipcMain.handle("get-listening-port", () => settings.listeningPort);
    ipcMain.on("set-listening-port", (i, e) => {
      settings.listeningPort = e;
    });
    ipcMain.handle("get-trusted-devices", () => settings.trustedDevices);
    ipcMain.handle("get-trusted-device-by-public-key", (i, e) => settings.getTrustedDeviceByPublicKey(e));
    ipcMain.on("add-trusted-device", (i, e) => {
      settings.addTrustedDevice(e);
    });
    ipcMain.on("edit-trusted-device", (i, e, t) => {
      settings.editTrustedDevice(e, t);
    });
    ipcMain.on("remove-trusted-device-by-index", (i, e) => {
      settings.removeTrustedDeviceByIndex(e);
    });
    ipcMain.on("remove-trusted-device-by-public-key", (i, e) => {
      settings.removeTrustedDeviceByPublicKey(e);
    });
    ipcMain.handle("get-trusted-device-ask-times", (i, e) => settings.getTrustedDeviceAskTimes(e));
    ipcMain.on("increment-trusted-device-ask-times", (i, e) => {
      settings.incrementTrustedDeviceAskTimes(e);
    });
    ipcMain.handle("get-language", () => settings.language);
    ipcMain.on("set-language", (i, e) => {
      settings.language = e;
    });
    ipcMain.handle("get-open-at-login", () => app.getLoginItemSettings({
      args: ["--hidden"]
    }).openAtLogin);
    ipcMain.on("set-open-at-login", (i, e) => {
      app.setLoginItemSettings({
        openAtLogin: e,
        args: ["--hidden"]
      });
    });
  }
}.Ct;
initializeApplication();
