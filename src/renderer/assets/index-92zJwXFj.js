function Mm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e)) {
        const i = Object.getOwnPropertyDescriptor(r, o);
        i && Object.defineProperty(e, o, i.get ? i : {
          enumerable: !0,
          get: () => r[o]
        });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }));
}
var Go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dm = {
    exports: {}
  },
  Fa = {},
  $m = {
    exports: {}
  },
  X = {}; /**
          * @license React
          * react.production.min.js
          *
          * Copyright (c) Facebook, Inc. and its affiliates.
          *
          * This source code is licensed under the MIT license found in the
          * LICENSE file in the root directory of this source tree.
          */
var Li = Symbol.for("react.element"),
  Ex = Symbol.for("react.portal"),
  kx = Symbol.for("react.fragment"),
  Px = Symbol.for("react.strict_mode"),
  Tx = Symbol.for("react.profiler"),
  Nx = Symbol.for("react.provider"),
  Rx = Symbol.for("react.context"),
  Ox = Symbol.for("react.forward_ref"),
  Ax = Symbol.for("react.suspense"),
  _x = Symbol.for("react.memo"),
  jx = Symbol.for("react.lazy"),
  sp = Symbol.iterator;
function Ix(e) {
  return e === null || typeof e != "object" ? null : (e = sp && e[sp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Fm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  zm = Object.assign,
  Bm = {};
function go(e, t, n) {
  this.props = e, this.context = t, this.refs = Bm, this.updater = n || Fm;
}
go.prototype.isReactComponent = {};
go.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
go.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vm() {}
Vm.prototype = go.prototype;
function hd(e, t, n) {
  this.props = e, this.context = t, this.refs = Bm, this.updater = n || Fm;
}
var md = hd.prototype = new Vm();
md.constructor = hd;
zm(md, go.prototype);
md.isPureReactComponent = !0;
var ap = Array.isArray,
  Hm = Object.prototype.hasOwnProperty,
  gd = {
    current: null
  },
  Um = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function Wm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Hm.call(t, r) && !Um.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Li,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: gd.current
  };
}
function Lx(e, t) {
  return {
    $$typeof: Li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}
function vd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Li;
}
function Mx(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n];
  });
}
var lp = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Mx("" + e.key) : t.toString(36);
}
function Rs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Li:
        case Ex:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Vl(s, 0) : r, ap(o) ? (n = "", e != null && (n = e.replace(lp, "$&/") + "/"), Rs(o, t, n, "", function (c) {
    return c;
  })) : o != null && (vd(o) && (o = Lx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(lp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", ap(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var l = r + Vl(i, a);
    s += Rs(i, t, n, l, o);
  } else if (l = Ix(e), typeof l == "function") for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + Vl(i, a++), s += Rs(i, t, n, l, o);else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function qi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return Rs(e, r, "", "", function (i) {
    return t.call(n, i, o++);
  }), r;
}
function Dx(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function (n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ke = {
    current: null
  },
  Os = {
    transition: null
  },
  $x = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: Os,
    ReactCurrentOwner: gd
  };
function Km() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: qi,
  forEach: function (e, t, n) {
    qi(e, function () {
      t.apply(this, arguments);
    }, n);
  },
  count: function (e) {
    var t = 0;
    return qi(e, function () {
      t++;
    }), t;
  },
  toArray: function (e) {
    return qi(e, function (t) {
      return t;
    }) || [];
  },
  only: function (e) {
    if (!vd(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  }
};
X.Component = go;
X.Fragment = kx;
X.Profiler = Tx;
X.PureComponent = hd;
X.StrictMode = Px;
X.Suspense = Ax;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $x;
X.act = Km;
X.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = gd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Hm.call(t, l) && !Um.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return {
    $$typeof: Li,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: s
  };
};
X.createContext = function (e) {
  return e = {
    $$typeof: Rx,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: Nx,
    _context: e
  }, e.Consumer = e;
};
X.createElement = Wm;
X.createFactory = function (e) {
  var t = Wm.bind(null, e);
  return t.type = e, t;
};
X.createRef = function () {
  return {
    current: null
  };
};
X.forwardRef = function (e) {
  return {
    $$typeof: Ox,
    render: e
  };
};
X.isValidElement = vd;
X.lazy = function (e) {
  return {
    $$typeof: jx,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: Dx
  };
};
X.memo = function (e, t) {
  return {
    $$typeof: _x,
    type: e,
    compare: t === void 0 ? null : t
  };
};
X.startTransition = function (e) {
  var t = Os.transition;
  Os.transition = {};
  try {
    e();
  } finally {
    Os.transition = t;
  }
};
X.unstable_act = Km;
X.useCallback = function (e, t) {
  return Ke.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ke.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ke.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ke.current.useEffect(e, t);
};
X.useId = function () {
  return Ke.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ke.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ke.current.useRef(e);
};
X.useState = function (e) {
  return Ke.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ke.current.useTransition();
};
X.version = "18.3.1";
$m.exports = X;
var p = $m.exports;
const $t = pd(p),
  $c = Mm({
    __proto__: null,
    default: $t
  }, [p]); /**
           * @license React
           * react-jsx-runtime.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
var Fx = p,
  zx = Symbol.for("react.element"),
  Bx = Symbol.for("react.fragment"),
  Vx = Object.prototype.hasOwnProperty,
  Hx = Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ux = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function Gm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Vx.call(t, r) && !Ux.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: zx,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Hx.current
  };
}
Fa.Fragment = Bx;
Fa.jsx = Gm;
Fa.jsxs = Gm;
Dm.exports = Fa;
var h = Dm.exports,
  Fc = {},
  Xm = {
    exports: {}
  },
  ft = {},
  Ym = {
    exports: {}
  },
  Qm = {}; /**
           * @license React
           * scheduler.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
(function (e) {
  function t(N, O) {
    var M = N.length;
    N.push(O);
    e: for (; 0 < M;) {
      var U = M - 1 >>> 1,
        Y = N[U];
      if (0 < o(Y, O)) N[U] = O, N[M] = Y, M = U;else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      M = N.pop();
    if (M !== O) {
      N[0] = M;
      e: for (var U = 0, Y = N.length, q = Y >>> 1; U < q;) {
        var ne = 2 * (U + 1) - 1,
          nt = N[ne],
          xe = ne + 1,
          V = N[xe];
        if (0 > o(nt, M)) xe < Y && 0 > o(V, nt) ? (N[U] = V, N[xe] = M, U = xe) : (N[U] = nt, N[ne] = M, U = ne);else if (xe < Y && 0 > o(V, M)) N[U] = V, N[xe] = M, U = xe;else break e;
      }
    }
    return O;
  }
  function o(N, O) {
    var M = N.sortIndex - O.sortIndex;
    return M !== 0 ? M : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    y = !1,
    w = !1,
    m = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(N) {
    for (var O = n(c); O !== null;) {
      if (O.callback === null) r(c);else if (O.startTime <= N) r(c), O.sortIndex = O.expirationTime, t(l, O);else break;
      O = n(c);
    }
  }
  function b(N) {
    if (m = !1, x(N), !w) if (n(l) !== null) w = !0, R(k);else {
      var O = n(c);
      O !== null && F(b, O.startTime - N);
    }
  }
  function k(N, O) {
    w = !1, m && (m = !1, v(A), A = -1), y = !0;
    var M = f;
    try {
      for (x(O), d = n(l); d !== null && (!(d.expirationTime > O) || N && !j());) {
        var U = d.callback;
        if (typeof U == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = U(d.expirationTime <= O);
          O = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), x(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var q = !0;else {
        var ne = n(c);
        ne !== null && F(b, ne.startTime - O), q = !1;
      }
      return q;
    } finally {
      d = null, f = M, y = !1;
    }
  }
  var E = !1,
    P = null,
    A = -1,
    L = 5,
    C = -1;
  function j() {
    return !(e.unstable_now() - C < L);
  }
  function I() {
    if (P !== null) {
      var N = e.unstable_now();
      C = N;
      var O = !0;
      try {
        O = P(!0, N);
      } finally {
        O ? z() : (E = !1, P = null);
      }
    } else E = !1;
  }
  var z;
  if (typeof g == "function") z = function () {
    g(I);
  };else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      T = D.port2;
    D.port1.onmessage = I, z = function () {
      T.postMessage(null);
    };
  } else z = function () {
    S(I, 0);
  };
  function R(N) {
    P = N, E || (E = !0, z());
  }
  function F(N, O) {
    A = S(function () {
      N(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (N) {
    N.callback = null;
  }, e.unstable_continueExecution = function () {
    w || y || (w = !0, R(k));
  }, e.unstable_forceFrameRate = function (N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function () {
    return f;
  }, e.unstable_getFirstCallbackNode = function () {
    return n(l);
  }, e.unstable_next = function (N) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = f;
    }
    var M = f;
    f = O;
    try {
      return N();
    } finally {
      f = M;
    }
  }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (N, O) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var M = f;
    f = N;
    try {
      return O();
    } finally {
      f = M;
    }
  }, e.unstable_scheduleCallback = function (N, O, M) {
    var U = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? U + M : U) : M = U, N) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = M + Y, N = {
      id: u++,
      callback: O,
      priorityLevel: N,
      startTime: M,
      expirationTime: Y,
      sortIndex: -1
    }, M > U ? (N.sortIndex = M, t(c, N), n(l) === null && N === n(c) && (m ? (v(A), A = -1) : m = !0, F(b, M - U))) : (N.sortIndex = Y, t(l, N), w || y || (w = !0, R(k))), N;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function (N) {
    var O = f;
    return function () {
      var M = f;
      f = O;
      try {
        return N.apply(this, arguments);
      } finally {
        f = M;
      }
    };
  };
})(Qm);
Ym.exports = Qm;
var Wx = Ym.exports; /**
                     * @license React
                     * react-dom.production.min.js
                     *
                     * Copyright (c) Facebook, Inc. and its affiliates.
                     *
                     * This source code is licensed under the MIT license found in the
                     * LICENSE file in the root directory of this source tree.
                     */
var Kx = p,
  dt = Wx;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var qm = new Set(),
  si = {};
function vr(e, t) {
  ro(e, t), ro(e + "Capture", t);
}
function ro(e, t) {
  for (si[e] = t, e = 0; e < t.length; e++) qm.add(t[e]);
}
var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  zc = Object.prototype.hasOwnProperty,
  Gx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cp = {},
  up = {};
function Xx(e) {
  return zc.call(up, e) ? !0 : zc.call(cp, e) ? !1 : Gx.test(e) ? up[e] = !0 : (cp[e] = !0, !1);
}
function Yx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Qx(e, t, n, r) {
  if (t === null || typeof t > "u" || Yx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ge(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  Ie[e] = new Ge(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Ie[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  Ie[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yd = /[\-:]([a-z])/g;
function wd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(yd, wd);
  Ie[t] = new Ge(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(yd, wd);
  Ie[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yd, wd);
  Ie[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xd(e, t, n, r) {
  var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qx(t, n, o, r) && (n = null), r || o === null ? Xx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zi = Symbol.for("react.element"),
  Ir = Symbol.for("react.portal"),
  Lr = Symbol.for("react.fragment"),
  Sd = Symbol.for("react.strict_mode"),
  Bc = Symbol.for("react.profiler"),
  Zm = Symbol.for("react.provider"),
  Jm = Symbol.for("react.context"),
  Cd = Symbol.for("react.forward_ref"),
  Vc = Symbol.for("react.suspense"),
  Hc = Symbol.for("react.suspense_list"),
  bd = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  eg = Symbol.for("react.offscreen"),
  dp = Symbol.iterator;
function Eo(e) {
  return e === null || typeof e != "object" ? null : (e = dp && e[dp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ge = Object.assign,
  Hl;
function Fo(e) {
  if (Hl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Hl = t && t[1] || "";
  }
  return `
` + Hl + e;
}
var Ul = !1;
function Wl(e, t) {
  if (!e || Ul) return "";
  Ul = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) {
      if (t = function () {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function () {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var o = c.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (o[s] !== i[a]) {
        if (s !== 1 || a !== 1) do if (s--, a--, 0 > a || o[s] !== i[a]) {
          var l = `
` + o[s].replace(" at new ", " at ");
          return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
        } while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Ul = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fo(e) : "";
}
function qx(e) {
  switch (e.tag) {
    case 5:
      return Fo(e.type);
    case 16:
      return Fo("Lazy");
    case 13:
      return Fo("Suspense");
    case 19:
      return Fo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Wl(e.type, !1), e;
    case 11:
      return e = Wl(e.type.render, !1), e;
    case 1:
      return e = Wl(e.type, !0), e;
    default:
      return "";
  }
}
function Uc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Ir:
      return "Portal";
    case Bc:
      return "Profiler";
    case Sd:
      return "StrictMode";
    case Vc:
      return "Suspense";
    case Hc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Jm:
      return (e.displayName || "Context") + ".Consumer";
    case Zm:
      return (e._context.displayName || "Context") + ".Provider";
    case Cd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bd:
      return t = e.displayName || null, t !== null ? t : Uc(e.type) || "Memo";
    case xn:
      t = e._payload, e = e._init;
      try {
        return Uc(e(t));
      } catch {}
  }
  return null;
}
function Zx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Uc(t);
    case 8:
      return t === Sd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function tg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jx(e) {
  var t = tg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function () {
        return o.call(this);
      },
      set: function (s) {
        r = "" + s, i.call(this, s);
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function () {
        return r;
      },
      setValue: function (s) {
        r = "" + s;
      },
      stopTracking: function () {
        e._valueTracker = null, delete e[t];
      }
    };
  }
}
function Ji(e) {
  e._valueTracker || (e._valueTracker = Jx(e));
}
function ng(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = tg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Zs(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wc(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  });
}
function fp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ln(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  };
}
function rg(e, t) {
  t = t.checked, t != null && xd(e, "checked", t, !1);
}
function Kc(e, t) {
  rg(e, t);
  var n = Ln(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Gc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gc(e, t.type, Ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Gc(e, t, n) {
  (t !== "number" || Zs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zo = Array.isArray;
function Kr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  });
}
function hp(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error($(92));
      if (zo(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = {
    initialValue: Ln(n)
  };
}
function og(e, t) {
  var n = Ln(t.value),
    r = Ln(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function mp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ig(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ig(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var es,
  sg = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function () {
        return e(t, n, r, o);
      });
    } : e;
  }(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;else {
      for (es = es || document.createElement("div"), es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = es.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function ai(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  e2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xo).forEach(function (e) {
  e2.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Xo[t] = Xo[e];
  });
});
function ag(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xo.hasOwnProperty(e) && Xo[e] ? ("" + t).trim() : t + "px";
}
function lg(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0,
      o = ag(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var t2 = ge({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function Qc(e, t) {
  if (t) {
    if (t2[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function qc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Zc = null;
function Ed(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Jc = null,
  Gr = null,
  Xr = null;
function gp(e) {
  if (e = $i(e)) {
    if (typeof Jc != "function") throw Error($(280));
    var t = e.stateNode;
    t && (t = Ua(t), Jc(e.stateNode, e.type, t));
  }
}
function cg(e) {
  Gr ? Xr ? Xr.push(e) : Xr = [e] : Gr = e;
}
function ug() {
  if (Gr) {
    var e = Gr,
      t = Xr;
    if (Xr = Gr = null, gp(e), t) for (e = 0; e < t.length; e++) gp(t[e]);
  }
}
function dg(e, t) {
  return e(t);
}
function fg() {}
var Kl = !1;
function pg(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return dg(e, t, n);
  } finally {
    Kl = !1, (Gr !== null || Xr !== null) && (fg(), ug());
  }
}
function li(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ua(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var eu = !1;
if (an) try {
  var ko = {};
  Object.defineProperty(ko, "passive", {
    get: function () {
      eu = !0;
    }
  }), window.addEventListener("test", ko, ko), window.removeEventListener("test", ko, ko);
} catch {
  eu = !1;
}
function n2(e, t, n, r, o, i, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Yo = !1,
  Js = null,
  ea = !1,
  tu = null,
  r2 = {
    onError: function (e) {
      Yo = !0, Js = e;
    }
  };
function o2(e, t, n, r, o, i, s, a, l) {
  Yo = !1, Js = null, n2.apply(r2, arguments);
}
function i2(e, t, n, r, o, i, s, a, l) {
  if (o2.apply(this, arguments), Yo) {
    if (Yo) {
      var c = Js;
      Yo = !1, Js = null;
    } else throw Error($(198));
    ea || (ea = !0, tu = c);
  }
}
function yr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e);
  }
  return t.tag === 3 ? n : null;
}
function hg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function vp(e) {
  if (yr(e) !== e) throw Error($(188));
}
function s2(e) {
  var t = e.alternate;
  if (!t) {
    if (t = yr(e), t === null) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i;) {
        if (i === n) return vp(o), e;
        if (i === r) return vp(o), t;
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) n = o, r = i;else {
      for (var s = !1, a = o.child; a;) {
        if (a === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a;) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function mg(e) {
  return e = s2(e), e !== null ? gg(e) : null;
}
function gg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = gg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vg = dt.unstable_scheduleCallback,
  yp = dt.unstable_cancelCallback,
  a2 = dt.unstable_shouldYield,
  l2 = dt.unstable_requestPaint,
  Ce = dt.unstable_now,
  c2 = dt.unstable_getCurrentPriorityLevel,
  kd = dt.unstable_ImmediatePriority,
  yg = dt.unstable_UserBlockingPriority,
  ta = dt.unstable_NormalPriority,
  u2 = dt.unstable_LowPriority,
  wg = dt.unstable_IdlePriority,
  za = null,
  Ut = null;
function d2(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function") try {
    Ut.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128);
  } catch {}
}
var Rt = Math.clz32 ? Math.clz32 : h2,
  f2 = Math.log,
  p2 = Math.LN2;
function h2(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (f2(e) / p2 | 0) | 0;
}
var ts = 64,
  ns = 4194304;
function Bo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function na(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Bo(a) : (i &= s, i !== 0 && (r = Bo(i)));
  } else s = n & ~o, s !== 0 ? r = Bo(s) : i !== 0 && (r = Bo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Rt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function m2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function g2(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var s = 31 - Rt(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = m2(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function nu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function xg() {
  var e = ts;
  return ts <<= 1, !(ts & 4194240) && (ts = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Rt(t), e[t] = n;
}
function v2(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - Rt(n),
      i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Pd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Rt(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var te = 0;
function Sg(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Cg,
  Td,
  bg,
  Eg,
  kg,
  ru = !1,
  rs = [],
  Pn = null,
  Tn = null,
  Nn = null,
  ci = new Map(),
  ui = new Map(),
  Cn = [],
  y2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function wp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      Tn = null;
      break;
    case "mouseover":
    case "mouseout":
      Nn = null;
      break;
    case "pointerover":
    case "pointerout":
      ci.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ui.delete(t.pointerId);
  }
}
function Po(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: i,
    targetContainers: [o]
  }, t !== null && (t = $i(t), t !== null && Td(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function w2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Pn = Po(Pn, e, t, n, r, o), !0;
    case "dragenter":
      return Tn = Po(Tn, e, t, n, r, o), !0;
    case "mouseover":
      return Nn = Po(Nn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ci.set(i, Po(ci.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ui.set(i, Po(ui.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Pg(e) {
  var t = Zn(e.target);
  if (t !== null) {
    var n = yr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = hg(n), t !== null) {
          e.blockedOn = t, kg(e.priority, function () {
            bg(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function As(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = ou(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Zc = r, n.target.dispatchEvent(r), Zc = null;
    } else return t = $i(n), t !== null && Td(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xp(e, t, n) {
  As(e) && n.delete(t);
}
function x2() {
  ru = !1, Pn !== null && As(Pn) && (Pn = null), Tn !== null && As(Tn) && (Tn = null), Nn !== null && As(Nn) && (Nn = null), ci.forEach(xp), ui.forEach(xp);
}
function To(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ru || (ru = !0, dt.unstable_scheduleCallback(dt.unstable_NormalPriority, x2)));
}
function di(e) {
  function t(o) {
    return To(o, e);
  }
  if (0 < rs.length) {
    To(rs[0], e);
    for (var n = 1; n < rs.length; n++) {
      var r = rs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Pn !== null && To(Pn, e), Tn !== null && To(Tn, e), Nn !== null && To(Nn, e), ci.forEach(t), ui.forEach(t), n = 0; n < Cn.length; n++) r = Cn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Cn.length && (n = Cn[0], n.blockedOn === null);) Pg(n), n.blockedOn === null && Cn.shift();
}
var Yr = hn.ReactCurrentBatchConfig,
  ra = !0;
function S2(e, t, n, r) {
  var o = te,
    i = Yr.transition;
  Yr.transition = null;
  try {
    te = 1, Nd(e, t, n, r);
  } finally {
    te = o, Yr.transition = i;
  }
}
function C2(e, t, n, r) {
  var o = te,
    i = Yr.transition;
  Yr.transition = null;
  try {
    te = 4, Nd(e, t, n, r);
  } finally {
    te = o, Yr.transition = i;
  }
}
function Nd(e, t, n, r) {
  if (ra) {
    var o = ou(e, t, n, r);
    if (o === null) rc(e, t, r, oa, n), wp(e, r);else if (w2(o, e, t, n, r)) r.stopPropagation();else if (wp(e, r), t & 4 && -1 < y2.indexOf(e)) {
      for (; o !== null;) {
        var i = $i(o);
        if (i !== null && Cg(i), i = ou(e, t, n, r), i === null && rc(e, t, r, oa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else rc(e, t, r, null, n);
  }
}
var oa = null;
function ou(e, t, n, r) {
  if (oa = null, e = Ed(r), e = Zn(e), e !== null) if (t = yr(e), t === null) e = null;else if (n = t.tag, n === 13) {
    if (e = hg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return oa = e, null;
}
function Tg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (c2()) {
        case kd:
          return 1;
        case yg:
          return 4;
        case ta:
        case u2:
          return 16;
        case wg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null,
  Rd = null,
  _s = null;
function Ng() {
  if (_s) return _s;
  var e,
    t = Rd,
    n = t.length,
    r,
    o = "value" in En ? En.value : En.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return _s = o.slice(e, 1 < r ? 1 - r : void 0);
}
function js(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function os() {
  return !0;
}
function Sp() {
  return !1;
}
function pt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? os : Sp, this.isPropagationStopped = Sp, this;
  }
  return ge(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = os);
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = os);
    },
    persist: function () {},
    isPersistent: os
  }), t;
}
var vo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Od = pt(vo),
  Di = ge({}, vo, {
    view: 0,
    detail: 0
  }),
  b2 = pt(Di),
  Xl,
  Yl,
  No,
  Ba = ge({}, Di, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ad,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== No && (No && e.type === "mousemove" ? (Xl = e.screenX - No.screenX, Yl = e.screenY - No.screenY) : Yl = Xl = 0, No = e), Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    }
  }),
  Cp = pt(Ba),
  E2 = ge({}, Ba, {
    dataTransfer: 0
  }),
  k2 = pt(E2),
  P2 = ge({}, Di, {
    relatedTarget: 0
  }),
  Ql = pt(P2),
  T2 = ge({}, vo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  N2 = pt(T2),
  R2 = ge({}, vo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }),
  O2 = pt(R2),
  A2 = ge({}, vo, {
    data: 0
  }),
  bp = pt(A2),
  _2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  j2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  I2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function L2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = I2[e]) ? !!t[e] : !1;
}
function Ad() {
  return L2;
}
var M2 = ge({}, Di, {
    key: function (e) {
      if (e.key) {
        var t = _2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = js(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? j2[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ad,
    charCode: function (e) {
      return e.type === "keypress" ? js(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? js(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }),
  D2 = pt(M2),
  $2 = ge({}, Ba, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Ep = pt($2),
  F2 = ge({}, Di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ad
  }),
  z2 = pt(F2),
  B2 = ge({}, vo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  V2 = pt(B2),
  H2 = ge({}, Ba, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  U2 = pt(H2),
  W2 = [9, 13, 27, 32],
  _d = an && "CompositionEvent" in window,
  Qo = null;
an && "documentMode" in document && (Qo = document.documentMode);
var K2 = an && "TextEvent" in window && !Qo,
  Rg = an && (!_d || Qo && 8 < Qo && 11 >= Qo),
  kp = " ",
  Pp = !1;
function Og(e, t) {
  switch (e) {
    case "keyup":
      return W2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ag(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Mr = !1;
function G2(e, t) {
  switch (e) {
    case "compositionend":
      return Ag(t);
    case "keypress":
      return t.which !== 32 ? null : (Pp = !0, kp);
    case "textInput":
      return e = t.data, e === kp && Pp ? null : e;
    default:
      return null;
  }
}
function X2(e, t) {
  if (Mr) return e === "compositionend" || !_d && Og(e, t) ? (e = Ng(), _s = Rd = En = null, Mr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Y2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Tp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Y2[e.type] : t === "textarea";
}
function _g(e, t, n, r) {
  cg(r), t = ia(t, "onChange"), 0 < t.length && (n = new Od("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }));
}
var qo = null,
  fi = null;
function Q2(e) {
  Hg(e, 0);
}
function Va(e) {
  var t = Fr(e);
  if (ng(t)) return e;
}
function q2(e, t) {
  if (e === "change") return t;
}
var jg = !1;
if (an) {
  var ql;
  if (an) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var Np = document.createElement("div");
      Np.setAttribute("oninput", "return;"), Zl = typeof Np.oninput == "function";
    }
    ql = Zl;
  } else ql = !1;
  jg = ql && (!document.documentMode || 9 < document.documentMode);
}
function Rp() {
  qo && (qo.detachEvent("onpropertychange", Ig), fi = qo = null);
}
function Ig(e) {
  if (e.propertyName === "value" && Va(fi)) {
    var t = [];
    _g(t, fi, e, Ed(e)), pg(Q2, t);
  }
}
function Z2(e, t, n) {
  e === "focusin" ? (Rp(), qo = t, fi = n, qo.attachEvent("onpropertychange", Ig)) : e === "focusout" && Rp();
}
function J2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Va(fi);
}
function eS(e, t) {
  if (e === "click") return Va(t);
}
function tS(e, t) {
  if (e === "input" || e === "change") return Va(t);
}
function nS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var At = typeof Object.is == "function" ? Object.is : nS;
function pi(e, t) {
  if (At(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zc.call(t, o) || !At(e[o], t[o])) return !1;
  }
  return !0;
}
function Op(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Ap(e, t) {
  var n = Op(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Op(n);
  }
}
function Lg(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Mg() {
  for (var e = window, t = Zs(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;else break;
    t = Zs(e.document);
  }
  return t;
}
function jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function rS(e) {
  var t = Mg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Lg(n.ownerDocument.documentElement, n)) {
    if (r !== null && jd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ap(n, i);
        var s = Ap(n, r);
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var oS = an && "documentMode" in document && 11 >= document.documentMode,
  Dr = null,
  iu = null,
  Zo = null,
  su = !1;
function _p(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  su || Dr == null || Dr !== Zs(r) || (r = Dr, "selectionStart" in r && jd(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), Zo && pi(Zo, r) || (Zo = r, r = ia(iu, "onSelect"), 0 < r.length && (t = new Od("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = Dr)));
}
function is(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $r = {
    animationend: is("Animation", "AnimationEnd"),
    animationiteration: is("Animation", "AnimationIteration"),
    animationstart: is("Animation", "AnimationStart"),
    transitionend: is("Transition", "TransitionEnd")
  },
  Jl = {},
  Dg = {};
an && (Dg = document.createElement("div").style, "AnimationEvent" in window || (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation), "TransitionEvent" in window || delete $r.transitionend.transition);
function Ha(e) {
  if (Jl[e]) return Jl[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dg) return Jl[e] = t[n];
  return e;
}
var $g = Ha("animationend"),
  Fg = Ha("animationiteration"),
  zg = Ha("animationstart"),
  Bg = Ha("transitionend"),
  Vg = new Map(),
  jp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Hn(e, t) {
  Vg.set(e, t), vr(t, [e]);
}
for (var ec = 0; ec < jp.length; ec++) {
  var tc = jp[ec],
    iS = tc.toLowerCase(),
    sS = tc[0].toUpperCase() + tc.slice(1);
  Hn(iS, "on" + sS);
}
Hn($g, "onAnimationEnd");
Hn(Fg, "onAnimationIteration");
Hn(zg, "onAnimationStart");
Hn("dblclick", "onDoubleClick");
Hn("focusin", "onFocus");
Hn("focusout", "onBlur");
Hn(Bg, "onTransitionEnd");
ro("onMouseEnter", ["mouseout", "mouseover"]);
ro("onMouseLeave", ["mouseout", "mouseover"]);
ro("onPointerEnter", ["pointerout", "pointerover"]);
ro("onPointerLeave", ["pointerout", "pointerover"]);
vr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  aS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));
function Ip(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, i2(r, t, void 0, e), e.currentTarget = null;
}
function Hg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s],
          l = a.instance,
          c = a.currentTarget;
        if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
        Ip(o, a, c), i = l;
      } else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
        Ip(o, a, c), i = l;
      }
    }
  }
  if (ea) throw e = tu, ea = !1, tu = null, e;
}
function ce(e, t) {
  var n = t[du];
  n === void 0 && (n = t[du] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ug(t, e, 2, !1), n.add(r));
}
function nc(e, t, n) {
  var r = 0;
  t && (r |= 4), Ug(n, e, r, t);
}
var ss = "_reactListening" + Math.random().toString(36).slice(2);
function hi(e) {
  if (!e[ss]) {
    e[ss] = !0, qm.forEach(function (n) {
      n !== "selectionchange" && (aS.has(n) || nc(n, !1, e), nc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ss] || (t[ss] = !0, nc("selectionchange", !1, t));
  }
}
function Ug(e, t, n, r) {
  switch (Tg(t)) {
    case 1:
      var o = S2;
      break;
    case 4:
      o = C2;
      break;
    default:
      o = Nd;
  }
  n = o.bind(null, t, n, e), o = void 0, !eu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
    passive: o
  }) : e.addEventListener(t, n, !1);
}
function rc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null;) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        s = s.return;
      }
      for (; a !== null;) {
        if (s = Zn(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  pg(function () {
    var c = i,
      u = Ed(n),
      d = [];
    e: {
      var f = Vg.get(e);
      if (f !== void 0) {
        var y = Od,
          w = e;
        switch (e) {
          case "keypress":
            if (js(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = D2;
            break;
          case "focusin":
            w = "focus", y = Ql;
            break;
          case "focusout":
            w = "blur", y = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Cp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = k2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = z2;
            break;
          case $g:
          case Fg:
          case zg:
            y = N2;
            break;
          case Bg:
            y = V2;
            break;
          case "scroll":
            y = b2;
            break;
          case "wheel":
            y = U2;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = O2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ep;
        }
        var m = (t & 4) !== 0,
          S = !m && e === "scroll",
          v = m ? f !== null ? f + "Capture" : null : f;
        m = [];
        for (var g = c, x; g !== null;) {
          x = g;
          var b = x.stateNode;
          if (x.tag === 5 && b !== null && (x = b, v !== null && (b = li(g, v), b != null && m.push(mi(g, b, x)))), S) break;
          g = g.return;
        }
        0 < m.length && (f = new y(f, w, null, n, u), d.push({
          event: f,
          listeners: m
        }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== Zc && (w = n.relatedTarget || n.fromElement) && (Zn(w) || w[ln])) break e;
        if ((y || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = c, w = w ? Zn(w) : null, w !== null && (S = yr(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = c), y !== w)) {
          if (m = Cp, b = "onMouseLeave", v = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (m = Ep, b = "onPointerLeave", v = "onPointerEnter", g = "pointer"), S = y == null ? f : Fr(y), x = w == null ? f : Fr(w), f = new m(b, g + "leave", y, n, u), f.target = S, f.relatedTarget = x, b = null, Zn(u) === c && (m = new m(v, g + "enter", w, n, u), m.target = x, m.relatedTarget = S, b = m), S = b, y && w) t: {
            for (m = y, v = w, g = 0, x = m; x; x = br(x)) g++;
            for (x = 0, b = v; b; b = br(b)) x++;
            for (; 0 < g - x;) m = br(m), g--;
            for (; 0 < x - g;) v = br(v), x--;
            for (; g--;) {
              if (m === v || v !== null && m === v.alternate) break t;
              m = br(m), v = br(v);
            }
            m = null;
          } else m = null;
          y !== null && Lp(d, f, y, m, !1), w !== null && S !== null && Lp(d, S, w, m, !0);
        }
      }
      e: {
        if (f = c ? Fr(c) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var k = q2;else if (Tp(f)) {
          if (jg) k = tS;else {
            k = J2;
            var E = Z2;
          }
        } else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = eS);
        if (k && (k = k(e, c))) {
          _g(d, k, n, u);
          break e;
        }
        E && E(e, f, c), e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Gc(f, "number", f.value);
      }
      switch (E = c ? Fr(c) : window, e) {
        case "focusin":
          (Tp(E) || E.contentEditable === "true") && (Dr = E, iu = c, Zo = null);
          break;
        case "focusout":
          Zo = iu = Dr = null;
          break;
        case "mousedown":
          su = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          su = !1, _p(d, n, u);
          break;
        case "selectionchange":
          if (oS) break;
        case "keydown":
        case "keyup":
          _p(d, n, u);
      }
      var P;
      if (_d) e: {
        switch (e) {
          case "compositionstart":
            var A = "onCompositionStart";
            break e;
          case "compositionend":
            A = "onCompositionEnd";
            break e;
          case "compositionupdate":
            A = "onCompositionUpdate";
            break e;
        }
        A = void 0;
      } else Mr ? Og(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (Rg && n.locale !== "ko" && (Mr || A !== "onCompositionStart" ? A === "onCompositionEnd" && Mr && (P = Ng()) : (En = u, Rd = "value" in En ? En.value : En.textContent, Mr = !0)), E = ia(c, A), 0 < E.length && (A = new bp(A, e, null, n, u), d.push({
        event: A,
        listeners: E
      }), P ? A.data = P : (P = Ag(n), P !== null && (A.data = P)))), (P = K2 ? G2(e, n) : X2(e, n)) && (c = ia(c, "onBeforeInput"), 0 < c.length && (u = new bp("onBeforeInput", "beforeinput", null, n, u), d.push({
        event: u,
        listeners: c
      }), u.data = P));
    }
    Hg(d, t);
  });
}
function mi(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  };
}
function ia(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = li(e, n), i != null && r.unshift(mi(e, i, o)), i = li(e, t), i != null && r.push(mi(e, i, o))), e = e.return;
  }
  return r;
}
function br(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null;
}
function Lp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r;) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && c !== null && (a = c, o ? (l = li(n, i), l != null && s.unshift(mi(n, l, a))) : o || (l = li(n, i), l != null && s.push(mi(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({
    event: t,
    listeners: s
  });
}
var lS = /\r\n?/g,
  cS = /\u0000|\uFFFD/g;
function Mp(e) {
  return (typeof e == "string" ? e : "" + e).replace(lS, `
`).replace(cS, "");
}
function as(e, t, n) {
  if (t = Mp(t), Mp(e) !== t && n) throw Error($(425));
}
function sa() {}
var au = null,
  lu = null;
function cu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var uu = typeof setTimeout == "function" ? setTimeout : void 0,
  uS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Dp = typeof Promise == "function" ? Promise : void 0,
  dS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dp < "u" ? function (e) {
    return Dp.resolve(null).then(e).catch(fS);
  } : uu;
function fS(e) {
  setTimeout(function () {
    throw e;
  });
}
function oc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), di(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  di(t);
}
function Rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $p(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yo = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + yo,
  gi = "__reactProps$" + yo,
  ln = "__reactContainer$" + yo,
  du = "__reactEvents$" + yo,
  pS = "__reactListeners$" + yo,
  hS = "__reactHandles$" + yo;
function Zn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[ln] || n[Bt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $p(e); e !== null;) {
        if (n = e[Bt]) return n;
        e = $p(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $i(e) {
  return e = e[Bt] || e[ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Ua(e) {
  return e[gi] || null;
}
var fu = [],
  zr = -1;
function Un(e) {
  return {
    current: e
  };
}
function ue(e) {
  0 > zr || (e.current = fu[zr], fu[zr] = null, zr--);
}
function ie(e, t) {
  zr++, fu[zr] = e.current, e.current = t;
}
var Mn = {},
  Be = Un(Mn),
  Ze = Un(!1),
  sr = Mn;
function oo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Je(e) {
  return e = e.childContextTypes, e != null;
}
function aa() {
  ue(Ze), ue(Be);
}
function Fp(e, t, n) {
  if (Be.current !== Mn) throw Error($(168));
  ie(Be, t), ie(Ze, n);
}
function Wg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, Zx(e) || "Unknown", o));
  return ge({}, n, r);
}
function la(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mn, sr = Be.current, ie(Be, e), ie(Ze, Ze.current), !0;
}
function zp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? (e = Wg(e, t, sr), r.__reactInternalMemoizedMergedChildContext = e, ue(Ze), ue(Be), ie(Be, e)) : ue(Ze), ie(Ze, n);
}
var Jt = null,
  Wa = !1,
  ic = !1;
function Kg(e) {
  Jt === null ? Jt = [e] : Jt.push(e);
}
function mS(e) {
  Wa = !0, Kg(e);
}
function Wn() {
  if (!ic && Jt !== null) {
    ic = !0;
    var e = 0,
      t = te;
    try {
      var n = Jt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null);
      }
      Jt = null, Wa = !1;
    } catch (o) {
      throw Jt !== null && (Jt = Jt.slice(e + 1)), vg(kd, Wn), o;
    } finally {
      te = t, ic = !1;
    }
  }
  return null;
}
var Br = [],
  Vr = 0,
  ca = null,
  ua = 0,
  mt = [],
  gt = 0,
  ar = null,
  tn = 1,
  nn = "";
function Yn(e, t) {
  Br[Vr++] = ua, Br[Vr++] = ca, ca = e, ua = t;
}
function Gg(e, t, n) {
  mt[gt++] = tn, mt[gt++] = nn, mt[gt++] = ar, ar = e;
  var r = tn;
  e = nn;
  var o = 32 - Rt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Rt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, tn = 1 << 32 - Rt(t) + o | n << o | r, nn = i + e;
  } else tn = 1 << i | n << o | r, nn = e;
}
function Id(e) {
  e.return !== null && (Yn(e, 1), Gg(e, 1, 0));
}
function Ld(e) {
  for (; e === ca;) ca = Br[--Vr], Br[Vr] = null, ua = Br[--Vr], Br[Vr] = null;
  for (; e === ar;) ar = mt[--gt], mt[gt] = null, nn = mt[--gt], mt[gt] = null, tn = mt[--gt], mt[gt] = null;
}
var at = null,
  st = null,
  pe = !1,
  Nt = null;
function Xg(e, t) {
  var n = yt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Bp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, at = e, st = Rn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, at = e, st = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ar !== null ? {
        id: tn,
        overflow: nn
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, at = e, st = null, !0) : !1;
    default:
      return !1;
  }
}
function pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hu(e) {
  if (pe) {
    var t = st;
    if (t) {
      var n = t;
      if (!Bp(e, t)) {
        if (pu(e)) throw Error($(418));
        t = Rn(n.nextSibling);
        var r = at;
        t && Bp(e, t) ? Xg(r, n) : (e.flags = e.flags & -4097 | 2, pe = !1, at = e);
      }
    } else {
      if (pu(e)) throw Error($(418));
      e.flags = e.flags & -4097 | 2, pe = !1, at = e;
    }
  }
}
function Vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  at = e;
}
function ls(e) {
  if (e !== at) return !1;
  if (!pe) return Vp(e), pe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cu(e.type, e.memoizedProps)), t && (t = st)) {
    if (pu(e)) throw Yg(), Error($(418));
    for (; t;) Xg(e, t), t = Rn(t.nextSibling);
  }
  if (Vp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              st = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      st = null;
    }
  } else st = at ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Yg() {
  for (var e = st; e;) e = Rn(e.nextSibling);
}
function io() {
  st = at = null, pe = !1;
}
function Md(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
var gS = hn.ReactCurrentBatchConfig;
function Ro(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function (s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function cs(e, t) {
  throw e = Object.prototype.toString.call(t), Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hp(e) {
  var t = e._init;
  return t(e._payload);
}
function Qg(e) {
  function t(v, g) {
    if (e) {
      var x = v.deletions;
      x === null ? (v.deletions = [g], v.flags |= 16) : x.push(g);
    }
  }
  function n(v, g) {
    if (!e) return null;
    for (; g !== null;) t(v, g), g = g.sibling;
    return null;
  }
  function r(v, g) {
    for (v = new Map(); g !== null;) g.key !== null ? v.set(g.key, g) : v.set(g.index, g), g = g.sibling;
    return v;
  }
  function o(v, g) {
    return v = jn(v, g), v.index = 0, v.sibling = null, v;
  }
  function i(v, g, x) {
    return v.index = x, e ? (x = v.alternate, x !== null ? (x = x.index, x < g ? (v.flags |= 2, g) : x) : (v.flags |= 2, g)) : (v.flags |= 1048576, g);
  }
  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, g, x, b) {
    return g === null || g.tag !== 6 ? (g = fc(x, v.mode, b), g.return = v, g) : (g = o(g, x), g.return = v, g);
  }
  function l(v, g, x, b) {
    var k = x.type;
    return k === Lr ? u(v, g, x.props.children, b, x.key) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === xn && Hp(k) === g.type) ? (b = o(g, x.props), b.ref = Ro(v, g, x), b.return = v, b) : (b = zs(x.type, x.key, x.props, null, v.mode, b), b.ref = Ro(v, g, x), b.return = v, b);
  }
  function c(v, g, x, b) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation ? (g = pc(x, v.mode, b), g.return = v, g) : (g = o(g, x.children || []), g.return = v, g);
  }
  function u(v, g, x, b, k) {
    return g === null || g.tag !== 7 ? (g = nr(x, v.mode, b, k), g.return = v, g) : (g = o(g, x), g.return = v, g);
  }
  function d(v, g, x) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return g = fc("" + g, v.mode, x), g.return = v, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Zi:
          return x = zs(g.type, g.key, g.props, null, v.mode, x), x.ref = Ro(v, null, g), x.return = v, x;
        case Ir:
          return g = pc(g, v.mode, x), g.return = v, g;
        case xn:
          var b = g._init;
          return d(v, b(g._payload), x);
      }
      if (zo(g) || Eo(g)) return g = nr(g, v.mode, x, null), g.return = v, g;
      cs(v, g);
    }
    return null;
  }
  function f(v, g, x, b) {
    var k = g !== null ? g.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return k !== null ? null : a(v, g, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Zi:
          return x.key === k ? l(v, g, x, b) : null;
        case Ir:
          return x.key === k ? c(v, g, x, b) : null;
        case xn:
          return k = x._init, f(v, g, k(x._payload), b);
      }
      if (zo(x) || Eo(x)) return k !== null ? null : u(v, g, x, b, null);
      cs(v, x);
    }
    return null;
  }
  function y(v, g, x, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return v = v.get(x) || null, a(g, v, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Zi:
          return v = v.get(b.key === null ? x : b.key) || null, l(g, v, b, k);
        case Ir:
          return v = v.get(b.key === null ? x : b.key) || null, c(g, v, b, k);
        case xn:
          var E = b._init;
          return y(v, g, x, E(b._payload), k);
      }
      if (zo(b) || Eo(b)) return v = v.get(x) || null, u(g, v, b, k, null);
      cs(g, b);
    }
    return null;
  }
  function w(v, g, x, b) {
    for (var k = null, E = null, P = g, A = g = 0, L = null; P !== null && A < x.length; A++) {
      P.index > A ? (L = P, P = null) : L = P.sibling;
      var C = f(v, P, x[A], b);
      if (C === null) {
        P === null && (P = L);
        break;
      }
      e && P && C.alternate === null && t(v, P), g = i(C, g, A), E === null ? k = C : E.sibling = C, E = C, P = L;
    }
    if (A === x.length) return n(v, P), pe && Yn(v, A), k;
    if (P === null) {
      for (; A < x.length; A++) P = d(v, x[A], b), P !== null && (g = i(P, g, A), E === null ? k = P : E.sibling = P, E = P);
      return pe && Yn(v, A), k;
    }
    for (P = r(v, P); A < x.length; A++) L = y(P, v, A, x[A], b), L !== null && (e && L.alternate !== null && P.delete(L.key === null ? A : L.key), g = i(L, g, A), E === null ? k = L : E.sibling = L, E = L);
    return e && P.forEach(function (j) {
      return t(v, j);
    }), pe && Yn(v, A), k;
  }
  function m(v, g, x, b) {
    var k = Eo(x);
    if (typeof k != "function") throw Error($(150));
    if (x = k.call(x), x == null) throw Error($(151));
    for (var E = k = null, P = g, A = g = 0, L = null, C = x.next(); P !== null && !C.done; A++, C = x.next()) {
      P.index > A ? (L = P, P = null) : L = P.sibling;
      var j = f(v, P, C.value, b);
      if (j === null) {
        P === null && (P = L);
        break;
      }
      e && P && j.alternate === null && t(v, P), g = i(j, g, A), E === null ? k = j : E.sibling = j, E = j, P = L;
    }
    if (C.done) return n(v, P), pe && Yn(v, A), k;
    if (P === null) {
      for (; !C.done; A++, C = x.next()) C = d(v, C.value, b), C !== null && (g = i(C, g, A), E === null ? k = C : E.sibling = C, E = C);
      return pe && Yn(v, A), k;
    }
    for (P = r(v, P); !C.done; A++, C = x.next()) C = y(P, v, A, C.value, b), C !== null && (e && C.alternate !== null && P.delete(C.key === null ? A : C.key), g = i(C, g, A), E === null ? k = C : E.sibling = C, E = C);
    return e && P.forEach(function (I) {
      return t(v, I);
    }), pe && Yn(v, A), k;
  }
  function S(v, g, x, b) {
    if (typeof x == "object" && x !== null && x.type === Lr && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Zi:
          e: {
            for (var k = x.key, E = g; E !== null;) {
              if (E.key === k) {
                if (k = x.type, k === Lr) {
                  if (E.tag === 7) {
                    n(v, E.sibling), g = o(E, x.props.children), g.return = v, v = g;
                    break e;
                  }
                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === xn && Hp(k) === E.type) {
                  n(v, E.sibling), g = o(E, x.props), g.ref = Ro(v, E, x), g.return = v, v = g;
                  break e;
                }
                n(v, E);
                break;
              } else t(v, E);
              E = E.sibling;
            }
            x.type === Lr ? (g = nr(x.props.children, v.mode, b, x.key), g.return = v, v = g) : (b = zs(x.type, x.key, x.props, null, v.mode, b), b.ref = Ro(v, g, x), b.return = v, v = b);
          }
          return s(v);
        case Ir:
          e: {
            for (E = x.key; g !== null;) {
              if (g.key === E) {
                if (g.tag === 4 && g.stateNode.containerInfo === x.containerInfo && g.stateNode.implementation === x.implementation) {
                  n(v, g.sibling), g = o(g, x.children || []), g.return = v, v = g;
                  break e;
                } else {
                  n(v, g);
                  break;
                }
              } else t(v, g);
              g = g.sibling;
            }
            g = pc(x, v.mode, b), g.return = v, v = g;
          }
          return s(v);
        case xn:
          return E = x._init, S(v, g, E(x._payload), b);
      }
      if (zo(x)) return w(v, g, x, b);
      if (Eo(x)) return m(v, g, x, b);
      cs(v, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, g !== null && g.tag === 6 ? (n(v, g.sibling), g = o(g, x), g.return = v, v = g) : (n(v, g), g = fc(x, v.mode, b), g.return = v, v = g), s(v)) : n(v, g);
  }
  return S;
}
var so = Qg(!0),
  qg = Qg(!1),
  da = Un(null),
  fa = null,
  Hr = null,
  Dd = null;
function $d() {
  Dd = Hr = fa = null;
}
function Fd(e) {
  var t = da.current;
  ue(da), e._currentValue = t;
}
function mu(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Qr(e, t) {
  fa = e, Dd = Hr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null);
}
function St(e) {
  var t = e._currentValue;
  if (Dd !== e) if (e = {
    context: e,
    memoizedValue: t,
    next: null
  }, Hr === null) {
    if (fa === null) throw Error($(308));
    Hr = e, fa.dependencies = {
      lanes: 0,
      firstContext: e
    };
  } else Hr = Hr.next = e;
  return t;
}
var Jn = null;
function zd(e) {
  Jn === null ? Jn = [e] : Jn.push(e);
}
function Zg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, zd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, cn(e, r);
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Sn = !1;
function Bd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function Jg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  });
}
function rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function On(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, cn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, zd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, cn(e, n);
}
function Is(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Pd(e, n);
  }
}
function Up(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null,
      i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function pa(e, t, n, r) {
  var o = e.updateQueue;
  Sn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    l.next = null, s === null ? i = c : s.next = c, s = l;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    s = 0, u = c = l = null, a = i;
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        u !== null && (u = u.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var w = e,
            m = a;
          switch (f = t, y = n, m.tag) {
            case 1:
              if (w = m.payload, typeof w == "function") {
                d = w.call(y, d, f);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = m.payload, f = typeof w == "function" ? w.call(y, d, f) : w, f == null) break e;
              d = ge({}, d, f);
              break e;
            case 2:
              Sn = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else y = {
        eventTime: y,
        lane: f,
        tag: a.tag,
        payload: a.payload,
        callback: a.callback,
        next: null
      }, u === null ? (c = u = y, l = d) : u = u.next = y, s |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (l = d), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do s |= o.lane, o = o.next; while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    cr |= s, e.lanes = s, e.memoizedState = d;
  }
}
function Wp(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t],
      o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error($(191, o));
      o.call(r);
    }
  }
}
var Fi = {},
  Wt = Un(Fi),
  vi = Un(Fi),
  yi = Un(Fi);
function er(e) {
  if (e === Fi) throw Error($(174));
  return e;
}
function Vd(e, t) {
  switch (ie(yi, t), ie(vi, e), ie(Wt, Fi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yc(t, e);
  }
  ue(Wt), ie(Wt, t);
}
function ao() {
  ue(Wt), ue(vi), ue(yi);
}
function e0(e) {
  er(yi.current);
  var t = er(Wt.current),
    n = Yc(t, e.type);
  t !== n && (ie(vi, e), ie(Wt, n));
}
function Hd(e) {
  vi.current === e && (ue(Wt), ue(vi));
}
var he = Un(0);
function ha(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var sc = [];
function Ud() {
  for (var e = 0; e < sc.length; e++) sc[e]._workInProgressVersionPrimary = null;
  sc.length = 0;
}
var Ls = hn.ReactCurrentDispatcher,
  ac = hn.ReactCurrentBatchConfig,
  lr = 0,
  me = null,
  Te = null,
  Re = null,
  ma = !1,
  Jo = !1,
  wi = 0,
  vS = 0;
function De() {
  throw Error($(321));
}
function Wd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
  return !0;
}
function Kd(e, t, n, r, o, i) {
  if (lr = i, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ls.current = e === null || e.memoizedState === null ? SS : CS, e = n(r, o), Jo) {
    i = 0;
    do {
      if (Jo = !1, wi = 0, 25 <= i) throw Error($(301));
      i += 1, Re = Te = null, t.updateQueue = null, Ls.current = bS, e = n(r, o);
    } while (Jo);
  }
  if (Ls.current = ga, t = Te !== null && Te.next !== null, lr = 0, Re = Te = me = null, ma = !1, t) throw Error($(300));
  return e;
}
function Gd() {
  var e = wi !== 0;
  return wi = 0, e;
}
function Dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return Re === null ? me.memoizedState = Re = e : Re = Re.next = e, Re;
}
function Ct() {
  if (Te === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = Re === null ? me.memoizedState : Re.next;
  if (t !== null) Re = t, Te = e;else {
    if (e === null) throw Error($(310));
    Te = e, e = {
      memoizedState: Te.memoizedState,
      baseState: Te.baseState,
      baseQueue: Te.baseQueue,
      queue: Te.queue,
      next: null
    }, Re === null ? me.memoizedState = Re = e : Re = Re.next = e;
  }
  return Re;
}
function xi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lc(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Te,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null,
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((lr & u) === u) l !== null && (l = l.next = {
        lane: 0,
        action: c.action,
        hasEagerState: c.hasEagerState,
        eagerState: c.eagerState,
        next: null
      }), r = c.hasEagerState ? c.eagerState : e(r, c.action);else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, me.lanes |= u, cr |= u;
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? s = r : l.next = a, At(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do i = o.lane, me.lanes |= i, cr |= i, o = o.next; while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function cc(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do i = e(i, s.action), s = s.next; while (s !== o);
    At(i, t.memoizedState) || (qe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function t0() {}
function n0(e, t) {
  var n = me,
    r = Ct(),
    o = t(),
    i = !At(r.memoizedState, o);
  if (i && (r.memoizedState = o, qe = !0), r = r.queue, Xd(i0.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Re !== null && Re.memoizedState.tag & 1) {
    if (n.flags |= 2048, Si(9, o0.bind(null, n, r, o, t), void 0, null), Oe === null) throw Error($(349));
    lr & 30 || r0(n, t, o);
  }
  return o;
}
function r0(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = me.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function o0(e, t, n, r) {
  t.value = n, t.getSnapshot = r, s0(t) && a0(e);
}
function i0(e, t, n) {
  return n(function () {
    s0(t) && a0(e);
  });
}
function s0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !At(e, n);
  } catch {
    return !0;
  }
}
function a0(e) {
  var t = cn(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function Kp(e) {
  var t = Dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: xi,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = xS.bind(null, me, e), [t.memoizedState, e];
}
function Si(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = me.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function l0() {
  return Ct().memoizedState;
}
function Ms(e, t, n, r) {
  var o = Dt();
  me.flags |= e, o.memoizedState = Si(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ka(e, t, n, r) {
  var o = Ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Te !== null) {
    var s = Te.memoizedState;
    if (i = s.destroy, r !== null && Wd(r, s.deps)) {
      o.memoizedState = Si(t, n, i, r);
      return;
    }
  }
  me.flags |= e, o.memoizedState = Si(1 | t, n, i, r);
}
function Gp(e, t) {
  return Ms(8390656, 8, e, t);
}
function Xd(e, t) {
  return Ka(2048, 8, e, t);
}
function c0(e, t) {
  return Ka(4, 2, e, t);
}
function u0(e, t) {
  return Ka(4, 4, e, t);
}
function d0(e, t) {
  if (typeof t == "function") return e = e(), t(e), function () {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function () {
    t.current = null;
  };
}
function f0(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ka(4, 4, d0.bind(null, t, e), n);
}
function Yd() {}
function p0(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function h0(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function m0(e, t, n) {
  return lr & 21 ? (At(n, t) || (n = xg(), me.lanes |= n, cr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n);
}
function yS(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ac.transition;
  ac.transition = {};
  try {
    e(!1), t();
  } finally {
    te = n, ac.transition = r;
  }
}
function g0() {
  return Ct().memoizedState;
}
function wS(e, t, n) {
  var r = _n(e);
  if (n = {
    lane: r,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, v0(e)) y0(t, n);else if (n = Zg(e, t, n, r), n !== null) {
    var o = We();
    Ot(n, e, r, o), w0(n, t, r);
  }
}
function xS(e, t, n) {
  var r = _n(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (v0(e)) y0(t, o);else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState,
        a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, At(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, zd(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {} finally {}
    n = Zg(e, t, o, r), n !== null && (o = We(), Ot(n, e, r, o), w0(n, t, r));
  }
}
function v0(e) {
  var t = e.alternate;
  return e === me || t !== null && t === me;
}
function y0(e, t) {
  Jo = ma = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function w0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Pd(e, n);
  }
}
var ga = {
    readContext: St,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1
  },
  SS = {
    readContext: St,
    useCallback: function (e, t) {
      return Dt().memoizedState = [e, t === void 0 ? null : t], e;
    },
    useContext: St,
    useEffect: Gp,
    useImperativeHandle: function (e, t, n) {
      return n = n != null ? n.concat([e]) : null, Ms(4194308, 4, d0.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ms(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ms(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Dt();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
    },
    useReducer: function (e, t, n) {
      var r = Dt();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = wS.bind(null, me, e), [r.memoizedState, e];
    },
    useRef: function (e) {
      var t = Dt();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: Kp,
    useDebugValue: Yd,
    useDeferredValue: function (e) {
      return Dt().memoizedState = e;
    },
    useTransition: function () {
      var e = Kp(!1),
        t = e[0];
      return e = yS.bind(null, e[1]), Dt().memoizedState = e, [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        o = Dt();
      if (pe) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (n = t(), Oe === null) throw Error($(349));
        lr & 30 || r0(r, t, n);
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t
      };
      return o.queue = i, Gp(i0.bind(null, r, i, e), [e]), r.flags |= 2048, Si(9, o0.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = Dt(),
        t = Oe.identifierPrefix;
      if (pe) {
        var n = nn,
          r = tn;
        n = (r & ~(1 << 32 - Rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = vS++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: !1
  },
  CS = {
    readContext: St,
    useCallback: p0,
    useContext: St,
    useEffect: Xd,
    useImperativeHandle: f0,
    useInsertionEffect: c0,
    useLayoutEffect: u0,
    useMemo: h0,
    useReducer: lc,
    useRef: l0,
    useState: function () {
      return lc(xi);
    },
    useDebugValue: Yd,
    useDeferredValue: function (e) {
      var t = Ct();
      return m0(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = lc(xi)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: t0,
    useSyncExternalStore: n0,
    useId: g0,
    unstable_isNewReconciler: !1
  },
  bS = {
    readContext: St,
    useCallback: p0,
    useContext: St,
    useEffect: Xd,
    useImperativeHandle: f0,
    useInsertionEffect: c0,
    useLayoutEffect: u0,
    useMemo: h0,
    useReducer: cc,
    useRef: l0,
    useState: function () {
      return cc(xi);
    },
    useDebugValue: Yd,
    useDeferredValue: function (e) {
      var t = Ct();
      return Te === null ? t.memoizedState = e : m0(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = cc(xi)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: t0,
    useSyncExternalStore: n0,
    useId: g0,
    unstable_isNewReconciler: !1
  };
function Pt(e, t) {
  if (e && e.defaultProps) {
    t = ge({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function gu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ge({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ga = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = _n(e),
      i = rn(r, o);
    i.payload = t, n != null && (i.callback = n), t = On(e, i, o), t !== null && (Ot(t, e, o, r), Is(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = _n(e),
      i = rn(r, o);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = On(e, i, o), t !== null && (Ot(t, e, o, r), Is(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = _n(e),
      o = rn(n, r);
    o.tag = 2, t != null && (o.callback = t), t = On(e, o, r), t !== null && (Ot(t, e, r, n), Is(t, e, r));
  }
};
function Xp(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !pi(n, r) || !pi(o, i) : !0;
}
function x0(e, t, n) {
  var r = !1,
    o = Mn,
    i = t.contextType;
  return typeof i == "object" && i !== null ? i = St(i) : (o = Je(t) ? sr : Be.current, r = t.contextTypes, i = (r = r != null) ? oo(e, o) : Mn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ga, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Yp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ga.enqueueReplaceState(t, t.state, null);
}
function vu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Bd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = St(i) : (i = Je(t) ? sr : Be.current, o.context = oo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (gu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ga.enqueueReplaceState(o, o.state, null), pa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function lo(e, t) {
  try {
    var n = "",
      r = t;
    do n += qx(r), r = r.return; while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  };
}
function uc(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null
  };
}
function yu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ES = typeof WeakMap == "function" ? WeakMap : Map;
function S0(e, t, n) {
  n = rn(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function () {
    ya || (ya = !0, Nu = r), yu(e, t);
  }, n;
}
function C0(e, t, n) {
  n = rn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function () {
      return r(o);
    }, n.callback = function () {
      yu(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function () {
    yu(e, t), typeof r != "function" && (An === null ? An = new Set([this]) : An.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: s !== null ? s : ""
    });
  }), n;
}
function Qp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ES();
    var o = new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = $S.bind(null, e, t, n), t.then(e, e));
}
function qp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zp(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rn(-1, 1), t.tag = 2, On(n, t, 1))), n.lanes |= 1), e);
}
var kS = hn.ReactCurrentOwner,
  qe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? qg(t, null, n, r) : so(t, e.child, n, r);
}
function Jp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Qr(t, o), r = Kd(e, t, n, r, i, o), n = Gd(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, un(e, t, o)) : (pe && n && Id(t), t.flags |= 1, Ue(e, t, r, o), t.child);
}
function eh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !rf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, b0(e, t, i, r, o)) : (e = zs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : pi, n(s, r) && e.ref === t.ref) return un(e, t, o);
  }
  return t.flags |= 1, e = jn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function b0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (pi(i, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (qe = !0);else return t.lanes = e.lanes, un(e, t, o);
  }
  return wu(e, t, n, r, o);
}
function E0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") {
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, ie(Wr, rt), rt |= n;else {
      if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, ie(Wr, rt), rt |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = i !== null ? i.baseLanes : n, ie(Wr, rt), rt |= r;
    }
  } else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ie(Wr, rt), rt |= r;
  return Ue(e, t, o, n), t.child;
}
function k0(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wu(e, t, n, r, o) {
  var i = Je(n) ? sr : Be.current;
  return i = oo(t, i), Qr(t, o), n = Kd(e, t, n, r, i, o), r = Gd(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, un(e, t, o)) : (pe && r && Id(t), t.flags |= 1, Ue(e, t, n, o), t.child);
}
function th(e, t, n, r, o) {
  if (Je(n)) {
    var i = !0;
    la(t);
  } else i = !1;
  if (Qr(t, o), t.stateNode === null) Ds(e, t), x0(t, n, r), vu(t, n, r, o), r = !0;else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null ? c = St(c) : (c = Je(n) ? sr : Be.current, c = oo(t, c));
    var u = n.getDerivedStateFromProps,
      d = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Yp(t, s, r, c), Sn = !1;
    var f = t.memoizedState;
    s.state = f, pa(t, r, s, o), l = t.memoizedState, a !== r || f !== l || Ze.current || Sn ? (typeof u == "function" && (gu(t, n, u, r), l = t.memoizedState), (a = Sn || Xp(t, n, a, r, f, l, c)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Jg(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Pt(t.type, a), s.props = c, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = St(l) : (l = Je(n) ? sr : Be.current, l = oo(t, l));
    var y = n.getDerivedStateFromProps;
    (u = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && Yp(t, s, r, l), Sn = !1, f = t.memoizedState, s.state = f, pa(t, r, s, o);
    var w = t.memoizedState;
    a !== d || f !== w || Ze.current || Sn ? (typeof y == "function" && (gu(t, n, y, r), w = t.memoizedState), (c = Sn || Xp(t, n, c, r, f, w, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return xu(e, t, n, r, i, o);
}
function xu(e, t, n, r, o, i) {
  k0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && zp(t, n, !1), un(e, t, i);
  r = t.stateNode, kS.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = so(t, e.child, null, i), t.child = so(t, null, a, i)) : Ue(e, t, a, i), t.memoizedState = r.state, o && zp(t, n, !0), t.child;
}
function P0(e) {
  var t = e.stateNode;
  t.pendingContext ? Fp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fp(e, t.context, !1), Vd(e, t.containerInfo);
}
function nh(e, t, n, r, o) {
  return io(), Md(o), t.flags |= 256, Ue(e, t, n, r), t.child;
}
var Su = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function Cu(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  };
}
function T0(e, t, n) {
  var r = t.pendingProps,
    o = he.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(he, o & 1), e === null) return hu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
    mode: "hidden",
    children: s
  }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Qa(s, r, 0, null), e = nr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cu(n), t.memoizedState = Su, e) : Qd(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return PS(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = {
      mode: "hidden",
      children: r.children
    };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = jn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = jn(a, i) : (i = nr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Cu(n) : {
      baseLanes: s.baseLanes | n,
      cachePool: null,
      transitions: s.transitions
    }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Su, r;
  }
  return i = e.child, e = i.sibling, r = jn(i, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qd(e, t) {
  return t = Qa({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t;
}
function us(e, t, n, r) {
  return r !== null && Md(r), so(t, e.child, null, n), e = Qd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function PS(e, t, n, r, o, i, s) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = uc(Error($(422))), us(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Qa({
    mode: "visible",
    children: r.children
  }, o, 0, null), i = nr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && so(t, e.child, null, s), t.child.memoizedState = Cu(s), t.memoizedState = Su, i);
  if (!(t.mode & 1)) return us(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error($(419)), r = uc(i, r, void 0), us(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, qe || a) {
    if (r = Oe, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, cn(e, o), Ot(r, e, o, -1));
    }
    return nf(), r = uc(Error($(421))), us(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = FS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, st = Rn(o.nextSibling), at = t, pe = !0, Nt = null, e !== null && (mt[gt++] = tn, mt[gt++] = nn, mt[gt++] = ar, tn = e.id, nn = e.overflow, ar = t), t = Qd(t, r.children), t.flags |= 4096, t);
}
function rh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), mu(e.return, t, n);
}
function dc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function N0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (Ue(e, t, r.children, n), r = he.current, r & 2) r = r & 1 | 2, t.flags |= 128;else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && rh(e, n, t);else if (e.tag === 19) rh(e, n, t);else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ie(he, r), !(t.mode & 1)) t.memoizedState = null;else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ha(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), dc(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null;) {
        if (e = o.alternate, e !== null && ha(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      dc(t, !0, n, null, i);
      break;
    case "together":
      dc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ds(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function un(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), cr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = jn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function TS(e, t, n) {
  switch (t.tag) {
    case 3:
      P0(t), io();
      break;
    case 5:
      e0(t);
      break;
    case 1:
      Je(t.type) && la(t);
      break;
    case 4:
      Vd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ie(da, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ie(he, he.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? T0(e, t, n) : (ie(he, he.current & 1), e = un(e, t, n), e !== null ? e.sibling : null);
      ie(he, he.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return N0(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(he, he.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, E0(e, t, n);
  }
  return un(e, t, n);
}
var R0, bu, O0, A0;
R0 = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
bu = function () {};
O0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, er(Wt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Wc(e, o), r = Wc(e, r), i = [];
        break;
      case "select":
        o = ge({}, o, {
          value: void 0
        }), r = ge({}, r, {
          value: void 0
        }), i = [];
        break;
      case "textarea":
        o = Xc(e, o), r = Xc(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sa);
    }
    Qc(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var a = o[c];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (si.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (a = o?.[c], r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") {
        if (a) {
          for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
        } else n || (i || (i = []), i.push(c, n)), n = l;
      } else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (si.hasOwnProperty(c) ? (l != null && c === "onScroll" && ce("scroll", e), i || a === l || (i = [])) : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
A0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Oo(e, t) {
  if (!pe) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;else for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function NS(e, t, n) {
  var r = t.pendingProps;
  switch (Ld(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return Je(t.type) && aa(), $e(t), null;
    case 3:
      return r = t.stateNode, ao(), ue(Ze), ue(Be), Ud(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ls(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Nt !== null && (Au(Nt), Nt = null))), bu(e, t), $e(t), null;
    case 5:
      Hd(t);
      var o = er(yi.current);
      if (n = t.type, e !== null && t.stateNode != null) O0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return $e(t), null;
        }
        if (e = er(Wt.current), ls(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Bt] = t, r[gi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vo.length; o++) ce(Vo[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              fp(r, i), ce("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!i.multiple
              }, ce("invalid", r);
              break;
            case "textarea":
              hp(r, i), ce("invalid", r);
          }
          Qc(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && as(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && as(r.textContent, a, e), o = ["children", "" + a]) : si.hasOwnProperty(s) && a != null && s === "onScroll" && ce("scroll", r);
          }
          switch (n) {
            case "input":
              Ji(r), pp(r, i, !0);
              break;
            case "textarea":
              Ji(r), mp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = sa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ig(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
            is: r.is
          }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Bt] = t, e[gi] = r, R0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = qc(n, r), n) {
              case "dialog":
                ce("cancel", e), ce("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vo.length; o++) ce(Vo[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), o = r;
                break;
              case "details":
                ce("toggle", e), o = r;
                break;
              case "input":
                fp(e, r), o = Wc(e, r), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = ge({}, r, {
                  value: void 0
                }), ce("invalid", e);
                break;
              case "textarea":
                hp(e, r), o = Xc(e, r), ce("invalid", e);
                break;
              default:
                o = r;
            }
            Qc(n, o), a = o;
            for (i in a) if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "style" ? lg(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && sg(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ai(e, l) : typeof l == "number" && ai(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (si.hasOwnProperty(i) ? l != null && i === "onScroll" && ce("scroll", e) : l != null && xd(e, i, l, s));
            }
            switch (n) {
              case "input":
                Ji(e), pp(e, r, !1);
                break;
              case "textarea":
                Ji(e), mp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ln(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Kr(e, !!r.multiple, i, !1) : r.defaultValue != null && Kr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = sa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) A0(e, t, e.memoizedProps, r);else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (n = er(yi.current), er(Wt.current), ls(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Bt] = t, (i = r.nodeValue !== n) && (e = at, e !== null)) switch (e.tag) {
            case 3:
              as(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && as(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Bt] = t, t.stateNode = r;
      }
      return $e(t), null;
    case 13:
      if (ue(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (pe && st !== null && t.mode & 1 && !(t.flags & 128)) Yg(), io(), t.flags |= 98560, i = !1;else if (i = ls(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error($(317));
            i[Bt] = t;
          } else io(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          $e(t), i = !1;
        } else Nt !== null && (Au(Nt), Nt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || he.current & 1 ? Ne === 0 && (Ne = 3) : nf())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
    case 4:
      return ao(), bu(e, t), e === null && hi(t.stateNode.containerInfo), $e(t), null;
    case 10:
      return Fd(t.type._context), $e(t), null;
    case 17:
      return Je(t.type) && aa(), $e(t), null;
    case 19:
      if (ue(he), i = t.memoizedState, i === null) return $e(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) {
        if (r) Oo(i, !1);else {
          if (Ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
            if (s = ha(e), s !== null) {
              for (t.flags |= 128, Oo(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return ie(he, he.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Ce() > co && (t.flags |= 128, r = !0, Oo(i, !1), t.lanes = 4194304);
        }
      } else {
        if (!r) if (e = ha(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Oo(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !pe) return $e(t), null;
        } else 2 * Ce() - i.renderingStartTime > co && n !== 1073741824 && (t.flags |= 128, r = !0, Oo(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ce(), t.sibling = null, n = he.current, ie(he, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
    case 22:
    case 23:
      return tf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function RS(e, t) {
  switch (Ld(t), t.tag) {
    case 1:
      return Je(t.type) && aa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ao(), ue(Ze), ue(Be), Ud(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Hd(t), null;
    case 13:
      if (ue(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error($(340));
        io();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ue(he), null;
    case 4:
      return ao(), null;
    case 10:
      return Fd(t.type._context), null;
    case 22:
    case 23:
      return tf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ds = !1,
  ze = !1,
  OS = typeof WeakSet == "function" ? WeakSet : Set,
  H = null;
function Ur(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    we(e, t, r);
  } else n.current = null;
}
function Eu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var oh = !1;
function AS(e, t) {
  if (au = ra, e = Mg(), jd(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0,
          a = -1,
          l = -1,
          c = 0,
          u = 0,
          d = e,
          f = null;
        t: for (;;) {
          for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (y = d.firstChild) !== null;) f = d, d = y;
          for (;;) {
            if (d === e) break t;
            if (f === n && ++c === o && (a = s), f === i && ++u === r && (l = s), (y = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = y;
        }
        n = a === -1 || l === -1 ? null : {
          start: a,
          end: l
        };
      } else n = null;
    }
    n = n || {
      start: 0,
      end: 0
    };
  } else n = null;
  for (lu = {
    focusedElem: e,
    selectionRange: n
  }, ra = !1, H = t; H !== null;) if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;else for (; H !== null;) {
    t = H;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var m = w.memoizedProps,
              S = w.memoizedState,
              v = t.stateNode,
              g = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Pt(t.type, m), S);
            v.__reactInternalSnapshotBeforeUpdate = g;
          }
          break;
        case 3:
          var x = t.stateNode.containerInfo;
          x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error($(163));
      }
    } catch (b) {
      we(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, H = e;
      break;
    }
    H = t.return;
  }
  return w = oh, oh = !1, w;
}
function ei(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Eu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xa(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ku(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function _0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bt], delete t[gi], delete t[du], delete t[pS], delete t[hS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function j0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ih(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || j0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sa));else if (r !== 4 && (e = e.child, e !== null)) for (Pu(e, t, n), e = e.sibling; e !== null;) Pu(e, t, n), e = e.sibling;
}
function Tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);else if (r !== 4 && (e = e.child, e !== null)) for (Tu(e, t, n), e = e.sibling; e !== null;) Tu(e, t, n), e = e.sibling;
}
var Ae = null,
  Tt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null;) I0(e, t, n), n = n.sibling;
}
function I0(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function") try {
    Ut.onCommitFiberUnmount(za, n);
  } catch {}
  switch (n.tag) {
    case 5:
      ze || Ur(n, t);
    case 6:
      var r = Ae,
        o = Tt;
      Ae = null, gn(e, t, n), Ae = r, Tt = o, Ae !== null && (Tt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (Tt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? oc(e.parentNode, n) : e.nodeType === 1 && oc(e, n), di(e)) : oc(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, o = Tt, Ae = n.stateNode.containerInfo, Tt = !0, gn(e, t, n), Ae = r, Tt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Eu(n, t, s), o = o.next;
        } while (o !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (!ze && (Ur(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        we(n, t, a);
      }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, gn(e, t, n), ze = r) : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function sh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new OS()), t.forEach(function (r) {
      var o = zS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Et(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e,
        s = t,
        a = s;
      e: for (; a !== null;) {
        switch (a.tag) {
          case 5:
            Ae = a.stateNode, Tt = !1;
            break e;
          case 3:
            Ae = a.stateNode.containerInfo, Tt = !0;
            break e;
          case 4:
            Ae = a.stateNode.containerInfo, Tt = !0;
            break e;
        }
        a = a.return;
      }
      if (Ae === null) throw Error($(160));
      I0(i, s, o), Ae = null, Tt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (c) {
      we(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) L0(t, e), t = t.sibling;
}
function L0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Et(t, e), Lt(e), r & 4) {
        try {
          ei(3, e, e.return), Xa(3, e);
        } catch (m) {
          we(e, e.return, m);
        }
        try {
          ei(5, e, e.return);
        } catch (m) {
          we(e, e.return, m);
        }
      }
      break;
    case 1:
      Et(t, e), Lt(e), r & 512 && n !== null && Ur(n, n.return);
      break;
    case 5:
      if (Et(t, e), Lt(e), r & 512 && n !== null && Ur(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ai(o, "");
        } catch (m) {
          we(e, e.return, m);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && rg(o, i), qc(a, s);
          var c = qc(a, i);
          for (s = 0; s < l.length; s += 2) {
            var u = l[s],
              d = l[s + 1];
            u === "style" ? lg(o, d) : u === "dangerouslySetInnerHTML" ? sg(o, d) : u === "children" ? ai(o, d) : xd(o, u, d, c);
          }
          switch (a) {
            case "input":
              Kc(o, i);
              break;
            case "textarea":
              og(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? Kr(o, !!i.multiple, y, !1) : f !== !!i.multiple && (i.defaultValue != null ? Kr(o, !!i.multiple, i.defaultValue, !0) : Kr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[gi] = i;
        } catch (m) {
          we(e, e.return, m);
        }
      }
      break;
    case 6:
      if (Et(t, e), Lt(e), r & 4) {
        if (e.stateNode === null) throw Error($(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (m) {
          we(e, e.return, m);
        }
      }
      break;
    case 3:
      if (Et(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        di(t.containerInfo);
      } catch (m) {
        we(e, e.return, m);
      }
      break;
    case 4:
      Et(t, e), Lt(e);
      break;
    case 13:
      Et(t, e), Lt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Jd = Ce())), r & 4 && sh(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (c = ze) || u, Et(t, e), ze = c) : Et(t, e), Lt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (H = e, u = e.child; u !== null;) {
          for (d = H = u; H !== null;) {
            switch (f = H, y = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ei(4, f, f.return);
                break;
              case 1:
                Ur(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (m) {
                    we(r, n, m);
                  }
                }
                break;
              case 5:
                Ur(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  lh(d);
                  continue;
                }
            }
            y !== null ? (y.return = f, H = y) : lh(d);
          }
          u = u.sibling;
        }
        e: for (u = null, d = e;;) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                o = d.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = ag("display", s));
              } catch (m) {
                we(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (u === null) try {
              d.stateNode.nodeValue = c ? "" : d.memoizedProps;
            } catch (m) {
              we(e, e.return, m);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), d = d.return;
          }
          u === d && (u = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Et(t, e), Lt(e), r & 4 && sh(e);
      break;
    case 21:
      break;
    default:
      Et(t, e), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (j0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ai(o, ""), r.flags &= -33);
          var i = ih(e);
          Tu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ih(e);
          Pu(e, a, s);
          break;
        default:
          throw Error($(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _S(e, t, n) {
  H = e, M0(e);
}
function M0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null;) {
    var o = H,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ds;
      if (!s) {
        var a = o.alternate,
          l = a !== null && a.memoizedState !== null || ze;
        a = ds;
        var c = ze;
        if (ds = s, (ze = l) && !c) for (H = o; H !== null;) s = H, l = s.child, s.tag === 22 && s.memoizedState !== null ? ch(o) : l !== null ? (l.return = s, H = l) : ch(o);
        for (; i !== null;) H = i, M0(i), i = i.sibling;
        H = o, ds = a, ze = c;
      }
      ah(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, H = i) : ah(e);
  }
}
function ah(e) {
  for (; H !== null;) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || Xa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();else {
              var o = t.elementType === t.type ? n.memoizedProps : Pt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Wp(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Wp(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var u = c.memoizedState;
                if (u !== null) {
                  var d = u.dehydrated;
                  d !== null && di(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error($(163));
        }
        ze || t.flags & 512 && ku(t);
      } catch (f) {
        we(t, t.return, f);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function lh(e) {
  for (; H !== null;) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function ch(e) {
  for (; H !== null;) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xa(4, t);
          } catch (l) {
            we(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              we(t, o, l);
            }
          }
          var i = t.return;
          try {
            ku(t);
          } catch (l) {
            we(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ku(t);
          } catch (l) {
            we(t, s, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      H = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, H = a;
      break;
    }
    H = t.return;
  }
}
var jS = Math.ceil,
  va = hn.ReactCurrentDispatcher,
  qd = hn.ReactCurrentOwner,
  wt = hn.ReactCurrentBatchConfig,
  Q = 0,
  Oe = null,
  Pe = null,
  je = 0,
  rt = 0,
  Wr = Un(0),
  Ne = 0,
  Ci = null,
  cr = 0,
  Ya = 0,
  Zd = 0,
  ti = null,
  Qe = null,
  Jd = 0,
  co = 1 / 0,
  Zt = null,
  ya = !1,
  Nu = null,
  An = null,
  fs = !1,
  kn = null,
  wa = 0,
  ni = 0,
  Ru = null,
  $s = -1,
  Fs = 0;
function We() {
  return Q & 6 ? Ce() : $s !== -1 ? $s : $s = Ce();
}
function _n(e) {
  return e.mode & 1 ? Q & 2 && je !== 0 ? je & -je : gS.transition !== null ? (Fs === 0 && (Fs = xg()), Fs) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tg(e.type)), e) : 1;
}
function Ot(e, t, n, r) {
  if (50 < ni) throw ni = 0, Ru = null, Error($(185));
  Mi(e, n, r), (!(Q & 2) || e !== Oe) && (e === Oe && (!(Q & 2) && (Ya |= n), Ne === 4 && bn(e, je)), et(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (co = Ce() + 500, Wa && Wn()));
}
function et(e, t) {
  var n = e.callbackNode;
  g2(e, t);
  var r = na(e, e === Oe ? je : 0);
  if (r === 0) n !== null && yp(n), e.callbackNode = null, e.callbackPriority = 0;else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && yp(n), t === 1) e.tag === 0 ? mS(uh.bind(null, e)) : Kg(uh.bind(null, e)), dS(function () {
      !(Q & 6) && Wn();
    }), n = null;else {
      switch (Sg(r)) {
        case 1:
          n = kd;
          break;
        case 4:
          n = yg;
          break;
        case 16:
          n = ta;
          break;
        case 536870912:
          n = wg;
          break;
        default:
          n = ta;
      }
      n = U0(n, D0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function D0(e, t) {
  if ($s = -1, Fs = 0, Q & 6) throw Error($(327));
  var n = e.callbackNode;
  if (qr() && e.callbackNode !== n) return null;
  var r = na(e, e === Oe ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xa(e, r);else {
    t = r;
    var o = Q;
    Q |= 2;
    var i = F0();
    (Oe !== e || je !== t) && (Zt = null, co = Ce() + 500, tr(e, t));
    do try {
      MS();
      break;
    } catch (a) {
      $0(e, a);
    } while (!0);
    $d(), va.current = i, Q = o, Pe !== null ? t = 0 : (Oe = null, je = 0, t = Ne);
  }
  if (t !== 0) {
    if (t === 2 && (o = nu(e), o !== 0 && (r = o, t = Ou(e, o))), t === 1) throw n = Ci, tr(e, 0), bn(e, r), et(e, Ce()), n;
    if (t === 6) bn(e, r);else {
      if (o = e.current.alternate, !(r & 30) && !IS(o) && (t = xa(e, r), t === 2 && (i = nu(e), i !== 0 && (r = i, t = Ou(e, i))), t === 1)) throw n = Ci, tr(e, 0), bn(e, r), et(e, Ce()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Qn(e, Qe, Zt);
          break;
        case 3:
          if (bn(e, r), (r & 130023424) === r && (t = Jd + 500 - Ce(), 10 < t)) {
            if (na(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              We(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = uu(Qn.bind(null, e, Qe, Zt), t);
            break;
          }
          Qn(e, Qe, Zt);
          break;
        case 4:
          if (bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var s = 31 - Rt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = uu(Qn.bind(null, e, Qe, Zt), r);
            break;
          }
          Qn(e, Qe, Zt);
          break;
        case 5:
          Qn(e, Qe, Zt);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return et(e, Ce()), e.callbackNode === n ? D0.bind(null, e) : null;
}
function Ou(e, t) {
  var n = ti;
  return e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256), e = xa(e, t), e !== 2 && (t = Qe, Qe = n, t !== null && Au(t)), e;
}
function Au(e) {
  Qe === null ? Qe = e : Qe.push.apply(Qe, e);
}
function IS(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r],
          i = o.getSnapshot;
        o = o.value;
        try {
          if (!At(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function bn(e, t) {
  for (t &= ~Zd, t &= ~Ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Rt(t),
      r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function uh(e) {
  if (Q & 6) throw Error($(327));
  qr();
  var t = na(e, 0);
  if (!(t & 1)) return et(e, Ce()), null;
  var n = xa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = nu(e);
    r !== 0 && (t = r, n = Ou(e, r));
  }
  if (n === 1) throw n = Ci, tr(e, 0), bn(e, t), et(e, Ce()), n;
  if (n === 6) throw Error($(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qn(e, Qe, Zt), et(e, Ce()), null;
}
function ef(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (co = Ce() + 500, Wa && Wn());
  }
}
function ur(e) {
  kn !== null && kn.tag === 0 && !(Q & 6) && qr();
  var t = Q;
  Q |= 1;
  var n = wt.transition,
    r = te;
  try {
    if (wt.transition = null, te = 1, e) return e();
  } finally {
    te = r, wt.transition = n, Q = t, !(Q & 6) && Wn();
  }
}
function tf() {
  rt = Wr.current, ue(Wr);
}
function tr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, uS(n)), Pe !== null) for (n = Pe.return; n !== null;) {
    var r = n;
    switch (Ld(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && aa();
        break;
      case 3:
        ao(), ue(Ze), ue(Be), Ud();
        break;
      case 5:
        Hd(r);
        break;
      case 4:
        ao();
        break;
      case 13:
        ue(he);
        break;
      case 19:
        ue(he);
        break;
      case 10:
        Fd(r.type._context);
        break;
      case 22:
      case 23:
        tf();
    }
    n = n.return;
  }
  if (Oe = e, Pe = e = jn(e.current, null), je = rt = t, Ne = 0, Ci = null, Zd = Ya = cr = 0, Qe = ti = null, Jn !== null) {
    for (t = 0; t < Jn.length; t++) if (n = Jn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next,
        i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Jn = null;
  }
  return e;
}
function $0(e, t) {
  do {
    var n = Pe;
    try {
      if ($d(), Ls.current = ga, ma) {
        for (var r = me.memoizedState; r !== null;) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ma = !1;
      }
      if (lr = 0, Re = Te = me = null, Jo = !1, wi = 0, qd.current = null, n === null || n.return === null) {
        Ne = 1, Ci = t, Pe = null;
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (t = je, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f ? (u.updateQueue = f.updateQueue, u.memoizedState = f.memoizedState, u.lanes = f.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var y = qp(s);
          if (y !== null) {
            y.flags &= -257, Zp(y, s, a, i, t), y.mode & 1 && Qp(i, c, t), t = y, l = c;
            var w = t.updateQueue;
            if (w === null) {
              var m = new Set();
              m.add(l), t.updateQueue = m;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Qp(i, c, t), nf();
              break e;
            }
            l = Error($(426));
          }
        } else if (pe && a.mode & 1) {
          var S = qp(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Zp(S, s, a, i, t), Md(lo(l, a));
            break e;
          }
        }
        i = l = lo(l, a), Ne !== 4 && (Ne = 2), ti === null ? ti = [i] : ti.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = S0(i, l, t);
              Up(i, v);
              break e;
            case 1:
              a = l;
              var g = i.type,
                x = i.stateNode;
              if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (An === null || !An.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = C0(i, a, t);
                Up(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      B0(n);
    } catch (k) {
      t = k, Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function F0() {
  var e = va.current;
  return va.current = ga, e === null ? ga : e;
}
function nf() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Oe === null || !(cr & 268435455) && !(Ya & 268435455) || bn(Oe, je);
}
function xa(e, t) {
  var n = Q;
  Q |= 2;
  var r = F0();
  (Oe !== e || je !== t) && (Zt = null, tr(e, t));
  do try {
    LS();
    break;
  } catch (o) {
    $0(e, o);
  } while (!0);
  if ($d(), Q = n, va.current = r, Pe !== null) throw Error($(261));
  return Oe = null, je = 0, Ne;
}
function LS() {
  for (; Pe !== null;) z0(Pe);
}
function MS() {
  for (; Pe !== null && !a2();) z0(Pe);
}
function z0(e) {
  var t = H0(e.alternate, e, rt);
  e.memoizedProps = e.pendingProps, t === null ? B0(e) : Pe = t, qd.current = null;
}
function B0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = RS(n, t), n !== null) {
        n.flags &= 32767, Pe = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;else {
        Ne = 6, Pe = null;
        return;
      }
    } else if (n = NS(n, t, rt), n !== null) {
      Pe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function Qn(e, t, n) {
  var r = te,
    o = wt.transition;
  try {
    wt.transition = null, te = 1, DS(e, t, n, r);
  } finally {
    wt.transition = o, te = r;
  }
  return null;
}
function DS(e, t, n, r) {
  do qr(); while (kn !== null);
  if (Q & 6) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error($(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (v2(e, i), e === Oe && (Pe = Oe = null, je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fs || (fs = !0, U0(ta, function () {
    return qr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = wt.transition, wt.transition = null;
    var s = te;
    te = 1;
    var a = Q;
    Q |= 4, qd.current = null, AS(e, n), L0(n, e), rS(lu), ra = !!au, lu = au = null, e.current = n, _S(n), l2(), Q = a, te = s, wt.transition = i;
  } else e.current = n;
  if (fs && (fs = !1, kn = e, wa = o), i = e.pendingLanes, i === 0 && (An = null), d2(n.stateNode), et(e, Ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
    componentStack: o.stack,
    digest: o.digest
  });
  if (ya) throw ya = !1, e = Nu, Nu = null, e;
  return wa & 1 && e.tag !== 0 && qr(), i = e.pendingLanes, i & 1 ? e === Ru ? ni++ : (ni = 0, Ru = e) : ni = 0, Wn(), null;
}
function qr() {
  if (kn !== null) {
    var e = Sg(wa),
      t = wt.transition,
      n = te;
    try {
      if (wt.transition = null, te = 16 > e ? 16 : e, kn === null) var r = !1;else {
        if (e = kn, kn = null, wa = 0, Q & 6) throw Error($(331));
        var o = Q;
        for (Q |= 4, H = e.current; H !== null;) {
          var i = H,
            s = i.child;
          if (H.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (H = c; H !== null;) {
                  var u = H;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) d.return = u, H = d;else for (; H !== null;) {
                    u = H;
                    var f = u.sibling,
                      y = u.return;
                    if (_0(u), u === c) {
                      H = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = y, H = f;
                      break;
                    }
                    H = y;
                  }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var m = w.child;
                if (m !== null) {
                  w.child = null;
                  do {
                    var S = m.sibling;
                    m.sibling = null, m = S;
                  } while (m !== null);
                }
              }
              H = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, H = s;else e: for (; H !== null;) {
            if (i = H, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ei(9, i, i.return);
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, H = v;
              break e;
            }
            H = i.return;
          }
        }
        var g = e.current;
        for (H = g; H !== null;) {
          s = H;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) x.return = s, H = x;else e: for (s = g; H !== null;) {
            if (a = H, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Xa(9, a);
              }
            } catch (k) {
              we(a, a.return, k);
            }
            if (a === s) {
              H = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, H = b;
              break e;
            }
            H = a.return;
          }
        }
        if (Q = o, Wn(), Ut && typeof Ut.onPostCommitFiberRoot == "function") try {
          Ut.onPostCommitFiberRoot(za, e);
        } catch {}
        r = !0;
      }
      return r;
    } finally {
      te = n, wt.transition = t;
    }
  }
  return !1;
}
function dh(e, t, n) {
  t = lo(n, t), t = S0(e, t, 1), e = On(e, t, 1), t = We(), e !== null && (Mi(e, 1, t), et(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) dh(e, e, n);else for (; t !== null;) {
    if (t.tag === 3) {
      dh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (An === null || !An.has(r))) {
        e = lo(n, e), e = C0(t, e, 1), t = On(t, e, 1), e = We(), t !== null && (Mi(t, 1, e), et(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $S(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = We(), e.pingedLanes |= e.suspendedLanes & n, Oe === e && (je & n) === n && (Ne === 4 || Ne === 3 && (je & 130023424) === je && 500 > Ce() - Jd ? tr(e, 0) : Zd |= n), et(e, t);
}
function V0(e, t) {
  t === 0 && (e.mode & 1 ? (t = ns, ns <<= 1, !(ns & 130023424) && (ns = 4194304)) : t = 1);
  var n = We();
  e = cn(e, t), e !== null && (Mi(e, t, n), et(e, n));
}
function FS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), V0(e, n);
}
function zS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), V0(e, n);
}
var H0;
H0 = function (e, t, n) {
  if (e !== null) {
    if (e.memoizedProps !== t.pendingProps || Ze.current) qe = !0;else {
      if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, TS(e, t, n);
      qe = !!(e.flags & 131072);
    }
  } else qe = !1, pe && t.flags & 1048576 && Gg(t, ua, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ds(e, t), e = t.pendingProps;
      var o = oo(t, Be.current);
      Qr(t, n), o = Kd(null, t, r, e, o, n);
      var i = Gd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (i = !0, la(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Bd(t), o.updater = Ga, t.stateNode = o, o._reactInternals = t, vu(t, r, e, n), t = xu(null, t, r, !0, i, n)) : (t.tag = 0, pe && i && Id(t), Ue(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ds(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = VS(r), e = Pt(r, e), o) {
          case 0:
            t = wu(null, t, r, e, n);
            break e;
          case 1:
            t = th(null, t, r, e, n);
            break e;
          case 11:
            t = Jp(null, t, r, e, n);
            break e;
          case 14:
            t = eh(null, t, r, Pt(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), wu(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), th(e, t, r, o, n);
    case 3:
      e: {
        if (P0(t), e === null) throw Error($(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Jg(e, t), pa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) {
          if (i = {
            element: r,
            isDehydrated: !1,
            cache: s.cache,
            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
            transitions: s.transitions
          }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = lo(Error($(423)), t), t = nh(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = lo(Error($(424)), t), t = nh(e, t, r, n, o);
            break e;
          } else for (st = Rn(t.stateNode.containerInfo.firstChild), at = t, pe = !0, Nt = null, n = qg(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        } else {
          if (io(), r === o) {
            t = un(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return e0(t), e === null && hu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, cu(r, o) ? s = null : i !== null && cu(r, i) && (t.flags |= 32), k0(e, t), Ue(e, t, s, n), t.child;
    case 6:
      return e === null && hu(t), null;
    case 13:
      return T0(e, t, n);
    case 4:
      return Vd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = so(t, null, r, n) : Ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Jp(e, t, r, o, n);
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ie(da, r._currentValue), r._currentValue = s, i !== null) if (At(i.value, s)) {
          if (i.children === o.children && !Ze.current) {
            t = un(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null;) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var l = a.firstContext; l !== null;) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = rn(-1, n & -n), l.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var u = c.pending;
                    u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), mu(i.return, n, t), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error($(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), mu(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;else for (s = i; s !== null;) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        Ue(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Qr(t, n), o = St(o), r = r(o), t.flags |= 1, Ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Pt(r, t.pendingProps), o = Pt(r.type, o), eh(e, t, r, o, n);
    case 15:
      return b0(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Pt(r, o), Ds(e, t), t.tag = 1, Je(r) ? (e = !0, la(t)) : e = !1, Qr(t, n), x0(t, r, o), vu(t, r, o, n), xu(null, t, r, !0, e, n);
    case 19:
      return N0(e, t, n);
    case 22:
      return E0(e, t, n);
  }
  throw Error($(156, t.tag));
};
function U0(e, t) {
  return vg(e, t);
}
function BS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function yt(e, t, n, r) {
  return new BS(e, t, n, r);
}
function rf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function VS(e) {
  if (typeof e == "function") return rf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Cd) return 11;
    if (e === bd) return 14;
  }
  return 2;
}
function jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function zs(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") rf(e) && (s = 1);else if (typeof e == "string") s = 5;else e: switch (e) {
    case Lr:
      return nr(n.children, o, i, t);
    case Sd:
      s = 8, o |= 8;
      break;
    case Bc:
      return e = yt(12, n, t, o | 2), e.elementType = Bc, e.lanes = i, e;
    case Vc:
      return e = yt(13, n, t, o), e.elementType = Vc, e.lanes = i, e;
    case Hc:
      return e = yt(19, n, t, o), e.elementType = Hc, e.lanes = i, e;
    case eg:
      return Qa(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Zm:
          s = 10;
          break e;
        case Jm:
          s = 9;
          break e;
        case Cd:
          s = 11;
          break e;
        case bd:
          s = 14;
          break e;
        case xn:
          s = 16, r = null;
          break e;
      }
      throw Error($(130, e == null ? e : typeof e, ""));
  }
  return t = yt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function nr(e, t, n, r) {
  return e = yt(7, e, r, t), e.lanes = n, e;
}
function Qa(e, t, n, r) {
  return e = yt(22, e, r, t), e.elementType = eg, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e;
}
function fc(e, t, n) {
  return e = yt(6, e, null, t), e.lanes = n, e;
}
function pc(e, t, n) {
  return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t;
}
function HS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function of(e, t, n, r, o, i, s, a, l) {
  return e = new HS(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = yt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, Bd(i), e;
}
function US(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ir,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  };
}
function W0(e) {
  if (!e) return Mn;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Wg(e, n, t);
  }
  return t;
}
function K0(e, t, n, r, o, i, s, a, l) {
  return e = of(n, r, !0, e, o, i, s, a, l), e.context = W0(null), n = e.current, r = We(), o = _n(n), i = rn(r, o), i.callback = t ?? null, On(n, i, o), e.current.lanes = o, Mi(e, o, r), et(e, r), e;
}
function qa(e, t, n, r) {
  var o = t.current,
    i = We(),
    s = _n(o);
  return n = W0(n), t.context === null ? t.context = n : t.pendingContext = n, t = rn(i, s), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = On(o, t, s), e !== null && (Ot(e, o, s, i), Is(e, o, s)), s;
}
function Sa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sf(e, t) {
  fh(e, t), (e = e.alternate) && fh(e, t);
}
function WS() {
  return null;
}
var G0 = typeof reportError == "function" ? reportError : function (e) {
  console.error(e);
};
function af(e) {
  this._internalRoot = e;
}
Za.prototype.render = af.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  qa(e, t, null, null);
};
Za.prototype.unmount = af.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ur(function () {
      qa(null, e, null, null);
    }), t[ln] = null;
  }
};
function Za(e) {
  this._internalRoot = e;
}
Za.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eg();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Cn.length && t !== 0 && t < Cn[n].priority; n++);
    Cn.splice(n, 0, e), n === 0 && Pg(e);
  }
};
function lf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ja(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ph() {}
function KS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Sa(s);
        i.call(c);
      };
    }
    var s = K0(t, r, e, 0, null, !1, !1, "", ph);
    return e._reactRootContainer = s, e[ln] = s.current, hi(e.nodeType === 8 ? e.parentNode : e), ur(), s;
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Sa(l);
      a.call(c);
    };
  }
  var l = of(e, 0, !1, null, null, !1, !1, "", ph);
  return e._reactRootContainer = l, e[ln] = l.current, hi(e.nodeType === 8 ? e.parentNode : e), ur(function () {
    qa(t, l, n, r);
  }), l;
}
function el(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Sa(s);
        a.call(l);
      };
    }
    qa(t, s, e, o);
  } else s = KS(n, t, e, o, r);
  return Sa(s);
}
Cg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bo(t.pendingLanes);
        n !== 0 && (Pd(t, n | 1), et(t, Ce()), !(Q & 6) && (co = Ce() + 500, Wn()));
      }
      break;
    case 13:
      ur(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var o = We();
          Ot(r, e, 1, o);
        }
      }), sf(e, 1);
  }
};
Td = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = We();
      Ot(t, e, 134217728, n);
    }
    sf(e, 134217728);
  }
};
bg = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = cn(e, t);
    if (n !== null) {
      var r = We();
      Ot(n, e, t, r);
    }
    sf(e, t);
  }
};
Eg = function () {
  return te;
};
kg = function (e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
Jc = function (e, t, n) {
  switch (t) {
    case "input":
      if (Kc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ua(r);
            if (!o) throw Error($(90));
            ng(r), Kc(r, o);
          }
        }
      }
      break;
    case "textarea":
      og(e, n);
      break;
    case "select":
      t = n.value, t != null && Kr(e, !!n.multiple, t, !1);
  }
};
dg = ef;
fg = ur;
var GS = {
    usingClientEntryPoint: !1,
    Events: [$i, Fr, Ua, cg, ug, ef]
  },
  Ao = {
    findFiberByHostInstance: Zn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  XS = {
    bundleType: Ao.bundleType,
    version: Ao.version,
    rendererPackageName: Ao.rendererPackageName,
    rendererConfig: Ao.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return e = mg(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ao.findFiberByHostInstance || WS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ps.isDisabled && ps.supportsFiber) try {
    za = ps.inject(XS), Ut = ps;
  } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GS;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lf(t)) throw Error($(200));
  return US(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!lf(e)) throw Error($(299));
  var n = !1,
    r = "",
    o = G0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = of(e, 1, !1, null, null, n, !1, r, o), e[ln] = t.current, hi(e.nodeType === 8 ? e.parentNode : e), new af(t);
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error($(188)) : (e = Object.keys(e).join(","), Error($(268, e)));
  return e = mg(t), e = e === null ? null : e.stateNode, e;
};
ft.flushSync = function (e) {
  return ur(e);
};
ft.hydrate = function (e, t, n) {
  if (!Ja(t)) throw Error($(200));
  return el(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!lf(e)) throw Error($(405));
  var r = n != null && n.hydratedSources || null,
    o = !1,
    i = "",
    s = G0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = K0(t, null, e, 1, n ?? null, o, !1, i, s), e[ln] = t.current, hi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Za(t);
};
ft.render = function (e, t, n) {
  if (!Ja(t)) throw Error($(200));
  return el(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!Ja(e)) throw Error($(40));
  return e._reactRootContainer ? (ur(function () {
    el(null, null, e, !1, function () {
      e._reactRootContainer = null, e[ln] = null;
    });
  }), !0) : !1;
};
ft.unstable_batchedUpdates = ef;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ja(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return el(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function X0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0);
  } catch (e) {
    console.error(e);
  }
}
X0(), Xm.exports = ft;
var wr = Xm.exports;
const YS = pd(wr);
var hh = wr;
Fc.createRoot = hh.createRoot, Fc.hydrateRoot = hh.hydrateRoot;
function Xe(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var QS = ["color"],
  qS = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, QS);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  ZS = ["color"],
  Y0 = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, ZS);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  JS = ["color"],
  eC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, JS);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  tC = ["color"],
  nC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, tC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  rC = ["color"],
  oC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, rC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  iC = ["color"],
  sC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, iC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  aC = ["color"],
  cf = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, aC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  lC = ["color"],
  cC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, lC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
      fill: r
    }));
  }),
  uC = ["color"],
  dC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, uC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  fC = ["color"],
  pC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, fC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  hC = ["color"],
  mC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, hC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  gC = ["color"],
  vC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, gC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  yC = ["color"],
  wC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, yC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  xC = ["color"],
  Q0 = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, xC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  }),
  SC = ["color"],
  CC = p.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Xe(e, SC);
    return p.createElement("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), p.createElement("path", {
      d: "M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
const bC = (...e) => {
    console?.warn && (rr(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  mh = {},
  _u = (...e) => {
    rr(e[0]) && mh[e[0]] || (rr(e[0]) && (mh[e[0]] = new Date()), bC(...e));
  },
  q0 = (e, t) => () => {
    if (e.isInitialized) t();else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0), t();
      };
      e.on("initialized", n);
    }
  },
  gh = (e, t, n) => {
    e.loadNamespaces(t, q0(e, n));
  },
  vh = (e, t, n, r) => {
    rr(n) && (n = [n]), n.forEach(o => {
      e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }), e.loadLanguages(t, q0(e, r));
  },
  EC = (e, t, n = {}) => !t.languages || !t.languages.length ? (_u("i18n.languages were undefined or empty", t.languages), !0) : t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (r, o) => {
      if (n.bindI18n?.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !o(r.isLanguageChangingTo, e)) return !1;
    }
  }),
  rr = e => typeof e == "string",
  kC = e => typeof e == "object" && e !== null,
  PC = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  TC = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
  },
  NC = e => TC[e],
  RC = e => e.replace(PC, NC);
let ju = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: RC
};
const OC = (e = {}) => {
    ju = {
      ...ju,
      ...e
    };
  },
  AC = () => ju;
let Z0;
const _C = e => {
    Z0 = e;
  },
  jC = () => Z0,
  IC = {
    type: "3rdParty",
    init(e) {
      OC(e.options.react), _C(e);
    }
  },
  LC = p.createContext();
class MC {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach(n => {
      this.usedNamespaces[n] ??= !0;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const DC = (e, t) => {
    const n = p.useRef();
    return p.useEffect(() => {
      n.current = e;
    }, [e, t]), n.current;
  },
  J0 = (e, t, n, r) => e.getFixedT(t, n, r),
  $C = (e, t, n, r) => p.useCallback(J0(e, t, n, r), [e, t, n, r]),
  mn = (e, t = {}) => {
    const {
        i18n: n
      } = t,
      {
        i18n: r,
        defaultNS: o
      } = p.useContext(LC) || {},
      i = n || r || jC();
    if (i && !i.reportNamespaces && (i.reportNamespaces = new MC()), !i) {
      _u("You will need to pass in an i18next instance by using initReactI18next");
      const b = (E, P) => rr(P) ? P : kC(P) && rr(P.defaultValue) ? P.defaultValue : Array.isArray(E) ? E[E.length - 1] : E,
        k = [b, {}, !1];
      return k.t = b, k.i18n = {}, k.ready = !1, k;
    }
    i.options.react?.wait && _u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const s = {
        ...AC(),
        ...i.options.react,
        ...t
      },
      {
        useSuspense: a,
        keyPrefix: l
      } = s;
    let c = o || i.options?.defaultNS;
    c = rr(c) ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces?.(c);
    const u = (i.isInitialized || i.initializedStoreOnce) && c.every(b => EC(b, i, s)),
      d = $C(i, t.lng || null, s.nsMode === "fallback" ? c : c[0], l),
      f = () => d,
      y = () => J0(i, t.lng || null, s.nsMode === "fallback" ? c : c[0], l),
      [w, m] = p.useState(f);
    let S = c.join();
    t.lng && (S = `${t.lng}${S}`);
    const v = DC(S),
      g = p.useRef(!0);
    p.useEffect(() => {
      const {
        bindI18n: b,
        bindI18nStore: k
      } = s;
      g.current = !0, !u && !a && (t.lng ? vh(i, t.lng, c, () => {
        g.current && m(y);
      }) : gh(i, c, () => {
        g.current && m(y);
      })), u && v && v !== S && g.current && m(y);
      const E = () => {
        g.current && m(y);
      };
      return b && i?.on(b, E), k && i?.store.on(k, E), () => {
        g.current = !1, i && b?.split(" ").forEach(P => i.off(P, E)), k && i && k.split(" ").forEach(P => i.store.off(P, E));
      };
    }, [i, S]), p.useEffect(() => {
      g.current && u && m(f);
    }, [i, l, u]);
    const x = [w, i, u];
    if (x.t = w, x.i18n = i, x.ready = u, u || !u && !a) return x;
    throw new Promise(b => {
      t.lng ? vh(i, t.lng, c, () => b()) : gh(i, c, () => b());
    });
  },
  FC = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='图层_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%201024%201024'%20style='enable-background:new%200%200%201024%201024;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23E2E1DE;}%20.st1{clip-path:url(%23SVGID_2_);}%20%3c/style%3e%3cg%3e%3cg%3e%3cpath%20id='SVGID_3_'%20class='st0'%20d='M758.94,1023.94H265.06c-146.36,0-265-118.64-265-265V265.06c0-146.36,118.64-265,265-265%20h493.88c146.36,0,265,118.64,265,265v493.88C1023.94,905.3,905.3,1023.94,758.94,1023.94z'/%3e%3c/g%3e%3cg%3e%3cdefs%3e%3cpath%20id='SVGID_1_'%20d='M758.94,1023.94H265.06c-146.36,0-265-118.64-265-265V265.06c0-146.36,118.64-265,265-265h493.88%20c146.36,0,265,118.64,265,265v493.88C1023.94,905.3,905.3,1023.94,758.94,1023.94z'/%3e%3c/defs%3e%3cclipPath%20id='SVGID_2_'%3e%3cuse%20xlink:href='%23SVGID_1_'%20style='overflow:visible;'/%3e%3c/clipPath%3e%3cg%20class='st1'%3e%3cpath%20d='M825.62,783.96V462.29c0-0.8-0.08-1.58-0.16-2.37c-0.02-0.19-0.01-0.39-0.04-0.58c-0.17-1.3-0.48-2.56-0.86-3.8%20c-0.1-0.33-0.22-0.66-0.34-0.98c-0.46-1.28-0.99-2.54-1.67-3.72c0,0,0-0.01-0.01-0.01c0-0.01-0.01-0.01-0.01-0.01%20c-0.68-1.17-1.49-2.25-2.37-3.29c-0.23-0.28-0.47-0.55-0.71-0.82c-0.87-0.94-1.8-1.83-2.83-2.62c-0.18-0.14-0.38-0.24-0.56-0.37%20c-0.62-0.45-1.25-0.9-1.92-1.28L535.57,281.59c-7.1-4.1-15.84-4.1-22.94,0L234.05,442.43c-0.67,0.39-1.29,0.83-1.91,1.28%20c-0.18,0.13-0.38,0.24-0.56,0.38c-1.03,0.79-1.96,1.68-2.84,2.62c-0.24,0.26-0.48,0.53-0.71,0.81c-0.88,1.04-1.69,2.12-2.37,3.29%20c0,0.01-0.01,0.01-0.01,0.01s0,0.01-0.01,0.01c-0.68,1.18-1.21,2.43-1.67,3.72c-0.12,0.33-0.23,0.65-0.33,0.98%20c-0.38,1.24-0.69,2.5-0.86,3.8c-0.03,0.19-0.02,0.38-0.04,0.58c-0.08,0.79-0.16,1.57-0.16,2.37v321.67%20c0,8.19,4.37,15.77,11.47,19.87l278.58,160.84c0.69,0.4,1.4,0.72,2.12,1.04c0.18,0.08,0.35,0.19,0.54,0.27%20c1.21,0.5,2.46,0.87,3.72,1.15c0.34,0.08,0.68,0.14,1.03,0.2c1.35,0.24,2.7,0.41,4.07,0.41c1.36,0,2.72-0.17,4.07-0.41%20c0.35-0.06,0.69-0.13,1.03-0.2c1.26-0.29,2.51-0.65,3.72-1.15c0.19-0.08,0.36-0.18,0.54-0.27c0.72-0.32,1.43-0.65,2.12-1.04%20l278.58-160.84C821.25,799.73,825.62,792.16,825.62,783.96z%20M524.1,327.94l81.12,46.83L372.53,509.12l-81.12-46.83L524.1,327.94z%20M501.16,905.07l-232.7-134.35v-268.7l85.95,49.62V663c0,12.67,10.27,22.94,22.94,22.94c12.67,0,22.94-10.27,22.94-22.94v-84.87%20l100.87,58.24L501.16,905.07L501.16,905.07z%20M524.1,596.63l-105.7-61.02l232.69-134.35l105.7,61.03L524.1,596.63z%20M779.74,770.72%20l-232.7,134.35v-268.7l232.7-134.34V770.72z'/%3e%3cg%3e%3cpath%20d='M285.41,351.64c-10.12,0-18.33-8.21-18.33-18.33v-795.64c0-10.12,8.21-18.33,18.33-18.33s18.33,8.21,18.33,18.33v795.64%20C303.74,343.43,295.53,351.64,285.41,351.64z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M746.08,341.44c-10.12,0-18.33-8.21-18.33-18.33v-795.64c0-10.12,8.21-18.33,18.33-18.33s18.33,8.21,18.33,18.33V323.1%20C764.41,333.23,756.21,341.44,746.08,341.44z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M666.72,298.15c-10.12,0-18.33-8.21-18.33-18.33v-516.34c0-10.12,8.21-18.33,18.33-18.33s18.33,8.21,18.33,18.33v516.34%20C685.05,289.95,676.84,298.15,666.72,298.15z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M366.89,298.15c-10.12,0-18.33-8.21-18.33-18.33v-516.34c0-10.12,8.21-18.33,18.33-18.33s18.33,8.21,18.33,18.33v516.34%20C385.22,289.95,377.01,298.15,366.89,298.15z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function zC(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function uf(...e) {
  return t => e.forEach(n => zC(n, t));
}
function ee(...e) {
  return p.useCallback(uf(...e), e);
}
var Dn = p.forwardRef((e, t) => {
  const {
      children: n,
      ...r
    } = e,
    o = p.Children.toArray(n),
    i = o.find(VC);
  if (i) {
    const s = i.props.children,
      a = o.map(l => l === i ? p.Children.count(s) > 1 ? p.Children.only(null) : p.isValidElement(s) ? s.props.children : null : l);
    return h.jsx(Iu, {
      ...r,
      ref: t,
      children: p.isValidElement(s) ? p.cloneElement(s, void 0, a) : null
    });
  }
  return h.jsx(Iu, {
    ...r,
    ref: t,
    children: n
  });
});
Dn.displayName = "Slot";
var Iu = p.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  if (p.isValidElement(n)) {
    const o = UC(n);
    return p.cloneElement(n, {
      ...HC(r, n.props),
      ref: t ? uf(t, o) : o
    });
  }
  return p.Children.count(n) > 1 ? p.Children.only(null) : null;
});
Iu.displayName = "SlotClone";
var BC = ({
  children: e
}) => h.jsx(h.Fragment, {
  children: e
});
function VC(e) {
  return p.isValidElement(e) && e.type === BC;
}
function HC(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...i
    } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function UC(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ev(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = ev(e[t])) && (r && (r += " "), r += n);else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function WC() {
  for (var e, t, n = 0, r = ""; n < arguments.length;) (e = arguments[n++]) && (t = ev(e)) && (r && (r += " "), r += t);
  return r;
}
const yh = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
  wh = WC,
  tv = (e, t) => n => {
    var r;
    if (t?.variants == null) return wh(e, n?.class, n?.className);
    const {
        variants: o,
        defaultVariants: i
      } = t,
      s = Object.keys(o).map(c => {
        const u = n?.[c],
          d = i?.[c];
        if (u === null) return null;
        const f = yh(u) || yh(d);
        return o[c][f];
      }),
      a = n && Object.entries(n).reduce((c, u) => {
        let [d, f] = u;
        return f === void 0 || (c[d] = f), c;
      }, {}),
      l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
        let {
          class: d,
          className: f,
          ...y
        } = u;
        return Object.entries(y).every(w => {
          let [m, S] = w;
          return Array.isArray(S) ? S.includes({
            ...i,
            ...a
          }[m]) : {
            ...i,
            ...a
          }[m] === S;
        }) ? [...c, d, f] : c;
      }, []);
    return wh(e, s, l, n?.class, n?.className);
  };
function nv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = nv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = nv(e)) && (r && (r += " "), r += t);
  return r;
}
const df = "-",
  KC = e => {
    const t = XC(e),
      {
        conflictingClassGroups: n,
        conflictingClassGroupModifiers: r
      } = e;
    return {
      getClassGroupId: s => {
        const a = s.split(df);
        return a[0] === "" && a.length !== 1 && a.shift(), ov(a, t) || GC(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      }
    };
  },
  ov = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? ov(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(df);
    return t.validators.find(({
      validator: s
    }) => s(i))?.classGroupId;
  },
  xh = /^\[(.+)\]$/,
  GC = e => {
    if (xh.test(e)) {
      const t = xh.exec(e)[1],
        n = t?.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  XC = e => {
    const {
        theme: t,
        prefix: n
      } = e,
      r = {
        nextPart: new Map(),
        validators: []
      };
    return QC(Object.entries(e.classGroups), n).forEach(([i, s]) => {
      Lu(s, r, i, t);
    }), r;
  },
  Lu = (e, t, n, r) => {
    e.forEach(o => {
      if (typeof o == "string") {
        const i = o === "" ? t : Sh(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (YC(o)) {
          Lu(o(r), t, n, r);
          return;
        }
        t.validators.push({
          validator: o,
          classGroupId: n
        });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Lu(s, Sh(t, i), n, r);
      });
    });
  },
  Sh = (e, t) => {
    let n = e;
    return t.split(df).forEach(r => {
      n.nextPart.has(r) || n.nextPart.set(r, {
        nextPart: new Map(),
        validators: []
      }), n = n.nextPart.get(r);
    }), n;
  },
  YC = e => e.isThemeGetter,
  QC = (e, t) => t ? e.map(([n, r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
    return [n, o];
  }) : e,
  qC = e => {
    if (e < 1) return {
      get: () => {},
      set: () => {}
    };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map());
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      }
    };
  },
  iv = "!",
  ZC = e => {
    const {
        separator: t,
        experimentalParseClassName: n
      } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = a => {
        const l = [];
        let c = 0,
          u = 0,
          d;
        for (let S = 0; S < a.length; S++) {
          let v = a[S];
          if (c === 0) {
            if (v === o && (r || a.slice(S, S + i) === t)) {
              l.push(a.slice(u, S)), u = S + i;
              continue;
            }
            if (v === "/") {
              d = S;
              continue;
            }
          }
          v === "[" ? c++ : v === "]" && c--;
        }
        const f = l.length === 0 ? a : a.substring(u),
          y = f.startsWith(iv),
          w = y ? f.substring(1) : f,
          m = d && d > u ? d - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: y,
          baseClassName: w,
          maybePostfixModifierPosition: m
        };
      };
    return n ? a => n({
      className: a,
      parseClassName: s
    }) : s;
  },
  JC = e => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
      r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
    }), t.push(...n.sort()), t;
  },
  eb = e => ({
    cache: qC(e.cacheSize),
    parseClassName: ZC(e),
    ...KC(e)
  }),
  tb = /\s+/,
  nb = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o
      } = t,
      i = [],
      s = e.trim().split(tb);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const c = s[l],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: y
        } = n(c);
      let w = !!y,
        m = r(w ? f.substring(0, y) : f);
      if (!m) {
        if (!w) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (m = r(f), !m) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const S = JC(u).join(":"),
        v = d ? S + iv : S,
        g = v + m;
      if (i.includes(g)) continue;
      i.push(g);
      const x = o(m, w);
      for (let b = 0; b < x.length; ++b) {
        const k = x[b];
        i.push(v + k);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function rb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length;) (t = arguments[e++]) && (n = sv(t)) && (r && (r += " "), r += n);
  return r;
}
const sv = e => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = sv(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ob(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = eb(c), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const u = nb(l, n);
    return o(l, u), u;
  }
  return function () {
    return i(rb.apply(null, arguments));
  };
}
const le = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t;
  },
  av = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ib = /^\d+\/\d+$/,
  sb = new Set(["px", "full", "screen"]),
  ab = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  lb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  cb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ub = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  db = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Qt = e => Zr(e) || sb.has(e) || ib.test(e),
  vn = e => wo(e, "length", wb),
  Zr = e => !!e && !Number.isNaN(Number(e)),
  hc = e => wo(e, "number", Zr),
  _o = e => !!e && Number.isInteger(Number(e)),
  fb = e => e.endsWith("%") && Zr(e.slice(0, -1)),
  G = e => av.test(e),
  yn = e => ab.test(e),
  pb = new Set(["length", "size", "percentage"]),
  hb = e => wo(e, pb, lv),
  mb = e => wo(e, "position", lv),
  gb = new Set(["image", "url"]),
  vb = e => wo(e, gb, Sb),
  yb = e => wo(e, "", xb),
  jo = () => !0,
  wo = (e, t, n) => {
    const r = av.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
  },
  wb = e => lb.test(e) && !cb.test(e),
  lv = () => !1,
  xb = e => ub.test(e),
  Sb = e => db.test(e),
  Cb = () => {
    const e = le("colors"),
      t = le("spacing"),
      n = le("blur"),
      r = le("brightness"),
      o = le("borderColor"),
      i = le("borderRadius"),
      s = le("borderSpacing"),
      a = le("borderWidth"),
      l = le("contrast"),
      c = le("grayscale"),
      u = le("hueRotate"),
      d = le("invert"),
      f = le("gap"),
      y = le("gradientColorStops"),
      w = le("gradientColorStopPositions"),
      m = le("inset"),
      S = le("margin"),
      v = le("opacity"),
      g = le("padding"),
      x = le("saturate"),
      b = le("scale"),
      k = le("sepia"),
      E = le("skew"),
      P = le("space"),
      A = le("translate"),
      L = () => ["auto", "contain", "none"],
      C = () => ["auto", "hidden", "clip", "visible", "scroll"],
      j = () => ["auto", G, t],
      I = () => [G, t],
      z = () => ["", Qt, vn],
      D = () => ["auto", Zr, G],
      T = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      R = () => ["solid", "dashed", "dotted", "double", "none"],
      F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
      N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      O = () => ["", "0", G],
      M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      U = () => [Zr, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [jo],
        spacing: [Qt, vn],
        blur: ["none", "", yn, G],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", yn, G],
        borderSpacing: I(),
        borderWidth: z(),
        contrast: U(),
        grayscale: O(),
        hueRotate: U(),
        invert: O(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [fb, vn],
        inset: j(),
        margin: j(),
        opacity: U(),
        padding: I(),
        saturate: U(),
        scale: U(),
        sepia: O(),
        skew: U(),
        space: I(),
        translate: I()
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", "video", G]
        }],
        container: ["container"],
        columns: [{
          columns: [yn]
        }],
        "break-after": [{
          "break-after": M()
        }],
        "break-before": [{
          "break-before": M()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: [...T(), G]
        }],
        overflow: [{
          overflow: C()
        }],
        "overflow-x": [{
          "overflow-x": C()
        }],
        "overflow-y": [{
          "overflow-y": C()
        }],
        overscroll: [{
          overscroll: L()
        }],
        "overscroll-x": [{
          "overscroll-x": L()
        }],
        "overscroll-y": [{
          "overscroll-y": L()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: [m]
        }],
        "inset-x": [{
          "inset-x": [m]
        }],
        "inset-y": [{
          "inset-y": [m]
        }],
        start: [{
          start: [m]
        }],
        end: [{
          end: [m]
        }],
        top: [{
          top: [m]
        }],
        right: [{
          right: [m]
        }],
        bottom: [{
          bottom: [m]
        }],
        left: [{
          left: [m]
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: ["auto", _o, G]
        }],
        basis: [{
          basis: j()
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["wrap", "wrap-reverse", "nowrap"]
        }],
        flex: [{
          flex: ["1", "auto", "initial", "none", G]
        }],
        grow: [{
          grow: O()
        }],
        shrink: [{
          shrink: O()
        }],
        order: [{
          order: ["first", "last", "none", _o, G]
        }],
        "grid-cols": [{
          "grid-cols": [jo]
        }],
        "col-start-end": [{
          col: ["auto", {
            span: ["full", _o, G]
          }, G]
        }],
        "col-start": [{
          "col-start": D()
        }],
        "col-end": [{
          "col-end": D()
        }],
        "grid-rows": [{
          "grid-rows": [jo]
        }],
        "row-start-end": [{
          row: ["auto", {
            span: [_o, G]
          }, G]
        }],
        "row-start": [{
          "row-start": D()
        }],
        "row-end": [{
          "row-end": D()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": ["auto", "min", "max", "fr", G]
        }],
        "auto-rows": [{
          "auto-rows": ["auto", "min", "max", "fr", G]
        }],
        gap: [{
          gap: [f]
        }],
        "gap-x": [{
          "gap-x": [f]
        }],
        "gap-y": [{
          "gap-y": [f]
        }],
        "justify-content": [{
          justify: ["normal", ...N()]
        }],
        "justify-items": [{
          "justify-items": ["start", "end", "center", "stretch"]
        }],
        "justify-self": [{
          "justify-self": ["auto", "start", "end", "center", "stretch"]
        }],
        "align-content": [{
          content: ["normal", ...N(), "baseline"]
        }],
        "align-items": [{
          items: ["start", "end", "center", "baseline", "stretch"]
        }],
        "align-self": [{
          self: ["auto", "start", "end", "center", "stretch", "baseline"]
        }],
        "place-content": [{
          "place-content": [...N(), "baseline"]
        }],
        "place-items": [{
          "place-items": ["start", "end", "center", "baseline", "stretch"]
        }],
        "place-self": [{
          "place-self": ["auto", "start", "end", "center", "stretch"]
        }],
        p: [{
          p: [g]
        }],
        px: [{
          px: [g]
        }],
        py: [{
          py: [g]
        }],
        ps: [{
          ps: [g]
        }],
        pe: [{
          pe: [g]
        }],
        pt: [{
          pt: [g]
        }],
        pr: [{
          pr: [g]
        }],
        pb: [{
          pb: [g]
        }],
        pl: [{
          pl: [g]
        }],
        m: [{
          m: [S]
        }],
        mx: [{
          mx: [S]
        }],
        my: [{
          my: [S]
        }],
        ms: [{
          ms: [S]
        }],
        me: [{
          me: [S]
        }],
        mt: [{
          mt: [S]
        }],
        mr: [{
          mr: [S]
        }],
        mb: [{
          mb: [S]
        }],
        ml: [{
          ml: [S]
        }],
        "space-x": [{
          "space-x": [P]
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": [P]
        }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{
          w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
        }],
        "min-w": [{
          "min-w": [G, t, "min", "max", "fit"]
        }],
        "max-w": [{
          "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
            screen: [yn]
          }, yn]
        }],
        h: [{
          h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "min-h": [{
          "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        "max-h": [{
          "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
        }],
        size: [{
          size: [G, t, "auto", "min", "max", "fit"]
        }],
        "font-size": [{
          text: ["base", yn, vn]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hc]
        }],
        "font-family": [{
          font: [jo]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{
          tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
        }],
        "line-clamp": [{
          "line-clamp": ["none", Zr, hc]
        }],
        leading: [{
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qt, G]
        }],
        "list-image": [{
          "list-image": ["none", G]
        }],
        "list-style-type": [{
          list: ["none", "disc", "decimal", G]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "placeholder-color": [{
          placeholder: [e]
        }],
        "placeholder-opacity": [{
          "placeholder-opacity": [v]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "text-color": [{
          text: [e]
        }],
        "text-opacity": [{
          "text-opacity": [v]
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...R(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: ["auto", "from-font", Qt, vn]
        }],
        "underline-offset": [{
          "underline-offset": ["auto", Qt, G]
        }],
        "text-decoration-color": [{
          decoration: [e]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: I()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", G]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-opacity": [{
          "bg-opacity": [v]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: [...T(), mb]
        }],
        "bg-repeat": [{
          bg: ["no-repeat", {
            repeat: ["", "x", "y", "round", "space"]
          }]
        }],
        "bg-size": [{
          bg: ["auto", "cover", "contain", hb]
        }],
        "bg-image": [{
          bg: ["none", {
            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, vb]
        }],
        "bg-color": [{
          bg: [e]
        }],
        "gradient-from-pos": [{
          from: [w]
        }],
        "gradient-via-pos": [{
          via: [w]
        }],
        "gradient-to-pos": [{
          to: [w]
        }],
        "gradient-from": [{
          from: [y]
        }],
        "gradient-via": [{
          via: [y]
        }],
        "gradient-to": [{
          to: [y]
        }],
        rounded: [{
          rounded: [i]
        }],
        "rounded-s": [{
          "rounded-s": [i]
        }],
        "rounded-e": [{
          "rounded-e": [i]
        }],
        "rounded-t": [{
          "rounded-t": [i]
        }],
        "rounded-r": [{
          "rounded-r": [i]
        }],
        "rounded-b": [{
          "rounded-b": [i]
        }],
        "rounded-l": [{
          "rounded-l": [i]
        }],
        "rounded-ss": [{
          "rounded-ss": [i]
        }],
        "rounded-se": [{
          "rounded-se": [i]
        }],
        "rounded-ee": [{
          "rounded-ee": [i]
        }],
        "rounded-es": [{
          "rounded-es": [i]
        }],
        "rounded-tl": [{
          "rounded-tl": [i]
        }],
        "rounded-tr": [{
          "rounded-tr": [i]
        }],
        "rounded-br": [{
          "rounded-br": [i]
        }],
        "rounded-bl": [{
          "rounded-bl": [i]
        }],
        "border-w": [{
          border: [a]
        }],
        "border-w-x": [{
          "border-x": [a]
        }],
        "border-w-y": [{
          "border-y": [a]
        }],
        "border-w-s": [{
          "border-s": [a]
        }],
        "border-w-e": [{
          "border-e": [a]
        }],
        "border-w-t": [{
          "border-t": [a]
        }],
        "border-w-r": [{
          "border-r": [a]
        }],
        "border-w-b": [{
          "border-b": [a]
        }],
        "border-w-l": [{
          "border-l": [a]
        }],
        "border-opacity": [{
          "border-opacity": [v]
        }],
        "border-style": [{
          border: [...R(), "hidden"]
        }],
        "divide-x": [{
          "divide-x": [a]
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": [a]
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{
          "divide-opacity": [v]
        }],
        "divide-style": [{
          divide: R()
        }],
        "border-color": [{
          border: [o]
        }],
        "border-color-x": [{
          "border-x": [o]
        }],
        "border-color-y": [{
          "border-y": [o]
        }],
        "border-color-s": [{
          "border-s": [o]
        }],
        "border-color-e": [{
          "border-e": [o]
        }],
        "border-color-t": [{
          "border-t": [o]
        }],
        "border-color-r": [{
          "border-r": [o]
        }],
        "border-color-b": [{
          "border-b": [o]
        }],
        "border-color-l": [{
          "border-l": [o]
        }],
        "divide-color": [{
          divide: [o]
        }],
        "outline-style": [{
          outline: ["", ...R()]
        }],
        "outline-offset": [{
          "outline-offset": [Qt, G]
        }],
        "outline-w": [{
          outline: [Qt, vn]
        }],
        "outline-color": [{
          outline: [e]
        }],
        "ring-w": [{
          ring: z()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: [e]
        }],
        "ring-opacity": [{
          "ring-opacity": [v]
        }],
        "ring-offset-w": [{
          "ring-offset": [Qt, vn]
        }],
        "ring-offset-color": [{
          "ring-offset": [e]
        }],
        shadow: [{
          shadow: ["", "inner", "none", yn, yb]
        }],
        "shadow-color": [{
          shadow: [jo]
        }],
        opacity: [{
          opacity: [v]
        }],
        "mix-blend": [{
          "mix-blend": [...F(), "plus-lighter", "plus-darker"]
        }],
        "bg-blend": [{
          "bg-blend": F()
        }],
        filter: [{
          filter: ["", "none"]
        }],
        blur: [{
          blur: [n]
        }],
        brightness: [{
          brightness: [r]
        }],
        contrast: [{
          contrast: [l]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", yn, G]
        }],
        grayscale: [{
          grayscale: [c]
        }],
        "hue-rotate": [{
          "hue-rotate": [u]
        }],
        invert: [{
          invert: [d]
        }],
        saturate: [{
          saturate: [x]
        }],
        sepia: [{
          sepia: [k]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none"]
        }],
        "backdrop-blur": [{
          "backdrop-blur": [n]
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [r]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [l]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": [c]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [u]
        }],
        "backdrop-invert": [{
          "backdrop-invert": [d]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [v]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [x]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": [k]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": [s]
        }],
        "border-spacing-x": [{
          "border-spacing-x": [s]
        }],
        "border-spacing-y": [{
          "border-spacing-y": [s]
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
        }],
        duration: [{
          duration: U()
        }],
        ease: [{
          ease: ["linear", "in", "out", "in-out", G]
        }],
        delay: [{
          delay: U()
        }],
        animate: [{
          animate: ["none", "spin", "ping", "pulse", "bounce", G]
        }],
        transform: [{
          transform: ["", "gpu", "none"]
        }],
        scale: [{
          scale: [b]
        }],
        "scale-x": [{
          "scale-x": [b]
        }],
        "scale-y": [{
          "scale-y": [b]
        }],
        rotate: [{
          rotate: [_o, G]
        }],
        "translate-x": [{
          "translate-x": [A]
        }],
        "translate-y": [{
          "translate-y": [A]
        }],
        "skew-x": [{
          "skew-x": [E]
        }],
        "skew-y": [{
          "skew-y": [E]
        }],
        "transform-origin": [{
          origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
        }],
        accent: [{
          accent: ["auto", e]
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
        }],
        "caret-color": [{
          caret: [e]
        }],
        "pointer-events": [{
          "pointer-events": ["none", "auto"]
        }],
        resize: [{
          resize: ["none", "y", "x", ""]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": I()
        }],
        "scroll-mx": [{
          "scroll-mx": I()
        }],
        "scroll-my": [{
          "scroll-my": I()
        }],
        "scroll-ms": [{
          "scroll-ms": I()
        }],
        "scroll-me": [{
          "scroll-me": I()
        }],
        "scroll-mt": [{
          "scroll-mt": I()
        }],
        "scroll-mr": [{
          "scroll-mr": I()
        }],
        "scroll-mb": [{
          "scroll-mb": I()
        }],
        "scroll-ml": [{
          "scroll-ml": I()
        }],
        "scroll-p": [{
          "scroll-p": I()
        }],
        "scroll-px": [{
          "scroll-px": I()
        }],
        "scroll-py": [{
          "scroll-py": I()
        }],
        "scroll-ps": [{
          "scroll-ps": I()
        }],
        "scroll-pe": [{
          "scroll-pe": I()
        }],
        "scroll-pt": [{
          "scroll-pt": I()
        }],
        "scroll-pr": [{
          "scroll-pr": I()
        }],
        "scroll-pb": [{
          "scroll-pb": I()
        }],
        "scroll-pl": [{
          "scroll-pl": I()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", G]
        }],
        fill: [{
          fill: [e, "none"]
        }],
        "stroke-w": [{
          stroke: [Qt, vn, hc]
        }],
        stroke: [{
          stroke: [e, "none"]
        }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      }
    };
  },
  bb = ob(Cb);
function W(...e) {
  return bb(rv(e));
}
const Eb = tv("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }),
  Se = p.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...o
  }, i) => {
    const s = r ? Dn : "button";
    return h.jsx(s, {
      className: W(Eb({
        variant: t,
        size: n,
        className: e
      })),
      ref: i,
      ...o
    });
  });
Se.displayName = "Button";
function B(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function (o) {
    if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
  };
}
function tl(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    function c(d) {
      const {
          scope: f,
          children: y,
          ...w
        } = d,
        m = f?.[e][l] || a,
        S = p.useMemo(() => w, Object.values(w));
      return h.jsx(m.Provider, {
        value: S,
        children: y
      });
    }
    function u(d, f) {
      const y = f?.[e][l] || a,
        w = p.useContext(y);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return c.displayName = i + "Provider", [c, u];
  }
  const o = () => {
    const i = n.map(s => p.createContext(s));
    return function (a) {
      const l = a?.[e] || i;
      return p.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: l
        }
      }), [a, l]);
    };
  };
  return o.scopeName = e, [r, kb(o, ...t)];
}
function kb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function (i) {
      const s = r.reduce((a, {
        useScope: l,
        scopeName: c
      }) => {
        const d = l(i)[`__scope${c}`];
        return {
          ...a,
          ...d
        };
      }, {});
      return p.useMemo(() => ({
        [`__scope${t.scopeName}`]: s
      }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function nl(e) {
  const t = e + "CollectionProvider",
    [n, r] = tl(t),
    [o, i] = n(t, {
      collectionRef: {
        current: null
      },
      itemMap: new Map()
    }),
    s = y => {
      const {
          scope: w,
          children: m
        } = y,
        S = $t.useRef(null),
        v = $t.useRef(new Map()).current;
      return h.jsx(o, {
        scope: w,
        itemMap: v,
        collectionRef: S,
        children: m
      });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = $t.forwardRef((y, w) => {
      const {
          scope: m,
          children: S
        } = y,
        v = i(a, m),
        g = ee(w, v.collectionRef);
      return h.jsx(Dn, {
        ref: g,
        children: S
      });
    });
  l.displayName = a;
  const c = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    d = $t.forwardRef((y, w) => {
      const {
          scope: m,
          children: S,
          ...v
        } = y,
        g = $t.useRef(null),
        x = ee(w, g),
        b = i(c, m);
      return $t.useEffect(() => (b.itemMap.set(g, {
        ref: g,
        ...v
      }), () => void b.itemMap.delete(g))), h.jsx(Dn, {
        [u]: "",
        ref: x,
        children: S
      });
    });
  d.displayName = c;
  function f(y) {
    const w = i(e + "CollectionConsumer", y);
    return $t.useCallback(() => {
      const S = w.collectionRef.current;
      if (!S) return [];
      const v = Array.from(S.querySelectorAll(`[${u}]`));
      return Array.from(w.itemMap.values()).sort((b, k) => v.indexOf(b.ref.current) - v.indexOf(k.ref.current));
    }, [w.collectionRef, w.itemMap]);
  }
  return [{
    Provider: s,
    Slot: l,
    ItemSlot: d
  }, f, r];
}
function Pb(e, t) {
  const n = p.createContext(t),
    r = i => {
      const {
          children: s,
          ...a
        } = i,
        l = p.useMemo(() => a, Object.values(a));
      return h.jsx(n.Provider, {
        value: l,
        children: s
      });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = p.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function xr(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = p.createContext(s),
      l = n.length;
    n = [...n, s];
    const c = d => {
      const {
          scope: f,
          children: y,
          ...w
        } = d,
        m = f?.[e]?.[l] || a,
        S = p.useMemo(() => w, Object.values(w));
      return h.jsx(m.Provider, {
        value: S,
        children: y
      });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      const y = f?.[e]?.[l] || a,
        w = p.useContext(y);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = n.map(s => p.createContext(s));
    return function (a) {
      const l = a?.[e] || i;
      return p.useMemo(() => ({
        [`__scope${e}`]: {
          ...a,
          [e]: l
        }
      }), [a, l]);
    };
  };
  return o.scopeName = e, [r, Tb(o, ...t)];
}
function Tb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function (i) {
      const s = r.reduce((a, {
        useScope: l,
        scopeName: c
      }) => {
        const d = l(i)[`__scope${c}`];
        return {
          ...a,
          ...d
        };
      }, {});
      return p.useMemo(() => ({
        [`__scope${t.scopeName}`]: s
      }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Nb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  K = Nb.reduce((e, t) => {
    const n = p.forwardRef((r, o) => {
      const {
          asChild: i,
          ...s
        } = r,
        a = i ? Dn : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), h.jsx(a, {
        ...s,
        ref: o
      });
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    };
  }, {});
function ff(e, t) {
  e && wr.flushSync(() => e.dispatchEvent(t));
}
function Le(e) {
  const t = p.useRef(e);
  return p.useEffect(() => {
    t.current = e;
  }), p.useMemo(() => (...n) => t.current?.(...n), []);
}
function Rb(e, t = globalThis?.document) {
  const n = Le(e);
  p.useEffect(() => {
    const r = o => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    });
  }, [n, t]);
}
var Ob = "DismissableLayer",
  Mu = "dismissableLayer.update",
  Ab = "dismissableLayer.pointerDownOutside",
  _b = "dismissableLayer.focusOutside",
  Ch,
  cv = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  zi = p.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      c = p.useContext(cv),
      [u, d] = p.useState(null),
      f = u?.ownerDocument ?? globalThis?.document,
      [, y] = p.useState({}),
      w = ee(t, P => d(P)),
      m = Array.from(c.layers),
      [S] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = m.indexOf(S),
      g = u ? m.indexOf(u) : -1,
      x = c.layersWithOutsidePointerEventsDisabled.size > 0,
      b = g >= v,
      k = Ib(P => {
        const A = P.target,
          L = [...c.branches].some(C => C.contains(A));
        !b || L || (o?.(P), s?.(P), P.defaultPrevented || a?.());
      }, f),
      E = Lb(P => {
        const A = P.target;
        [...c.branches].some(C => C.contains(A)) || (i?.(P), s?.(P), P.defaultPrevented || a?.());
      }, f);
    return Rb(P => {
      g === c.layers.size - 1 && (r?.(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, f), p.useEffect(() => {
      if (u) return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Ch = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), bh(), () => {
        n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Ch);
      };
    }, [u, f, n, c]), p.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), bh());
    }, [u, c]), p.useEffect(() => {
      const P = () => y({});
      return document.addEventListener(Mu, P), () => document.removeEventListener(Mu, P);
    }, []), h.jsx(K.div, {
      ...l,
      ref: w,
      style: {
        pointerEvents: x ? b ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: B(e.onFocusCapture, E.onFocusCapture),
      onBlurCapture: B(e.onBlurCapture, E.onBlurCapture),
      onPointerDownCapture: B(e.onPointerDownCapture, k.onPointerDownCapture)
    });
  });
zi.displayName = Ob;
var jb = "DismissableLayerBranch",
  uv = p.forwardRef((e, t) => {
    const n = p.useContext(cv),
      r = p.useRef(null),
      o = ee(t, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return n.branches.add(i), () => {
        n.branches.delete(i);
      };
    }, [n.branches]), h.jsx(K.div, {
      ...e,
      ref: o
    });
  });
uv.displayName = jb;
function Ib(e, t = globalThis?.document) {
  const n = Le(e),
    r = p.useRef(!1),
    o = p.useRef(() => {});
  return p.useEffect(() => {
    const i = a => {
        if (a.target && !r.current) {
          let l = function () {
            dv(Ab, n, c, {
              discrete: !0
            });
          };
          const c = {
            originalEvent: a
          };
          a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
            once: !0
          })) : l();
        } else t.removeEventListener("click", o.current);
        r.current = !1;
      },
      s = window.setTimeout(() => {
        t.addEventListener("pointerdown", i);
      }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  };
}
function Lb(e, t = globalThis?.document) {
  const n = Le(e),
    r = p.useRef(!1);
  return p.useEffect(() => {
    const o = i => {
      i.target && !r.current && dv(_b, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function bh() {
  const e = new CustomEvent(Mu);
  document.dispatchEvent(e);
}
function dv(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? ff(o, i) : o.dispatchEvent(i);
}
var Mb = zi,
  Db = uv,
  Ve = globalThis?.document ? p.useLayoutEffect : () => {},
  $b = "Portal",
  Bi = p.forwardRef((e, t) => {
    const {
        container: n,
        ...r
      } = e,
      [o, i] = p.useState(!1);
    Ve(() => i(!0), []);
    const s = n || o && globalThis?.document?.body;
    return s ? YS.createPortal(h.jsx(K.div, {
      ...r,
      ref: t
    }), s) : null;
  });
Bi.displayName = $b;
function Fb(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var Xt = e => {
  const {
      present: t,
      children: n
    } = e,
    r = zb(t),
    o = typeof n == "function" ? n({
      present: r.isPresent
    }) : p.Children.only(n),
    i = ee(r.ref, Bb(o));
  return typeof n == "function" || r.isPresent ? p.cloneElement(o, {
    ref: i
  }) : null;
};
Xt.displayName = "Presence";
function zb(e) {
  const [t, n] = p.useState(),
    r = p.useRef({}),
    o = p.useRef(e),
    i = p.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = Fb(s, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
  return p.useEffect(() => {
    const c = hs(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Ve(() => {
    const c = r.current,
      u = o.current;
    if (u !== e) {
      const f = i.current,
        y = hs(c);
      e ? l("MOUNT") : y === "none" || c?.display === "none" ? l("UNMOUNT") : l(u && f !== y ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ve(() => {
    if (t) {
      let c;
      const u = t.ownerDocument.defaultView ?? window,
        d = y => {
          const m = hs(r.current).includes(y.animationName);
          if (y.target === t && m && (l("ANIMATION_END"), !o.current)) {
            const S = t.style.animationFillMode;
            t.style.animationFillMode = "forwards", c = u.setTimeout(() => {
              t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
            });
          }
        },
        f = y => {
          y.target === t && (i.current = hs(r.current));
        };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(c), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: p.useCallback(c => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function hs(e) {
  return e?.animationName || "none";
}
function Bb(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function dr({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  const [r, o] = Vb({
      defaultProp: t,
      onChange: n
    }),
    i = e !== void 0,
    s = i ? e : r,
    a = Le(n),
    l = p.useCallback(c => {
      if (i) {
        const d = typeof c == "function" ? c(e) : c;
        d !== e && a(d);
      } else o(c);
    }, [i, e, o, a]);
  return [s, l];
}
function Vb({
  defaultProp: e,
  onChange: t
}) {
  const n = p.useState(e),
    [r] = n,
    o = p.useRef(r),
    i = Le(t);
  return p.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var Hb = "VisuallyHidden",
  rl = p.forwardRef((e, t) => h.jsx(K.span, {
    ...e,
    ref: t,
    style: {
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...e.style
    }
  }));
rl.displayName = Hb;
var pf = "ToastProvider",
  [hf, Ub, Wb] = nl("Toast"),
  [fv, PR] = xr("Toast", [Wb]),
  [Kb, ol] = fv(pf),
  pv = e => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s
      } = e,
      [a, l] = p.useState(null),
      [c, u] = p.useState(0),
      d = p.useRef(!1),
      f = p.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${pf}\`. Expected non-empty \`string\`.`), h.jsx(hf.Provider, {
      scope: t,
      children: h.jsx(Kb, {
        scope: t,
        label: n,
        duration: r,
        swipeDirection: o,
        swipeThreshold: i,
        toastCount: c,
        viewport: a,
        onViewportChange: l,
        onToastAdd: p.useCallback(() => u(y => y + 1), []),
        onToastRemove: p.useCallback(() => u(y => y - 1), []),
        isFocusedToastEscapeKeyDownRef: d,
        isClosePausedRef: f,
        children: s
      })
    });
  };
pv.displayName = pf;
var hv = "ToastViewport",
  Gb = ["F8"],
  Du = "toast.viewportPause",
  $u = "toast.viewportResume",
  mv = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Gb,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = ol(hv, n),
      a = Ub(n),
      l = p.useRef(null),
      c = p.useRef(null),
      u = p.useRef(null),
      d = p.useRef(null),
      f = ee(t, d, s.onViewportChange),
      y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    p.useEffect(() => {
      const S = v => {
        r.length !== 0 && r.every(x => v[x] || v.code === x) && d.current?.focus();
      };
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
    }, [r]), p.useEffect(() => {
      const S = l.current,
        v = d.current;
      if (w && S && v) {
        const g = () => {
            if (!s.isClosePausedRef.current) {
              const E = new CustomEvent(Du);
              v.dispatchEvent(E), s.isClosePausedRef.current = !0;
            }
          },
          x = () => {
            if (s.isClosePausedRef.current) {
              const E = new CustomEvent($u);
              v.dispatchEvent(E), s.isClosePausedRef.current = !1;
            }
          },
          b = E => {
            !S.contains(E.relatedTarget) && x();
          },
          k = () => {
            S.contains(document.activeElement) || x();
          };
        return S.addEventListener("focusin", g), S.addEventListener("focusout", b), S.addEventListener("pointermove", g), S.addEventListener("pointerleave", k), window.addEventListener("blur", g), window.addEventListener("focus", x), () => {
          S.removeEventListener("focusin", g), S.removeEventListener("focusout", b), S.removeEventListener("pointermove", g), S.removeEventListener("pointerleave", k), window.removeEventListener("blur", g), window.removeEventListener("focus", x);
        };
      }
    }, [w, s.isClosePausedRef]);
    const m = p.useCallback(({
      tabbingDirection: S
    }) => {
      const g = a().map(x => {
        const b = x.ref.current,
          k = [b, ...s5(b)];
        return S === "forwards" ? k : k.reverse();
      });
      return (S === "forwards" ? g.reverse() : g).flat();
    }, [a]);
    return p.useEffect(() => {
      const S = d.current;
      if (S) {
        const v = g => {
          const x = g.altKey || g.ctrlKey || g.metaKey;
          if (g.key === "Tab" && !x) {
            const k = document.activeElement,
              E = g.shiftKey;
            if (g.target === S && E) {
              c.current?.focus();
              return;
            }
            const L = m({
                tabbingDirection: E ? "backwards" : "forwards"
              }),
              C = L.findIndex(j => j === k);
            mc(L.slice(C + 1)) ? g.preventDefault() : E ? c.current?.focus() : u.current?.focus();
          }
        };
        return S.addEventListener("keydown", v), () => S.removeEventListener("keydown", v);
      }
    }, [a, m]), h.jsxs(Db, {
      ref: l,
      role: "region",
      "aria-label": o.replace("{hotkey}", y),
      tabIndex: -1,
      style: {
        pointerEvents: w ? void 0 : "none"
      },
      children: [w && h.jsx(Fu, {
        ref: c,
        onFocusFromOutsideViewport: () => {
          const S = m({
            tabbingDirection: "forwards"
          });
          mc(S);
        }
      }), h.jsx(hf.Slot, {
        scope: n,
        children: h.jsx(K.ol, {
          tabIndex: -1,
          ...i,
          ref: f
        })
      }), w && h.jsx(Fu, {
        ref: u,
        onFocusFromOutsideViewport: () => {
          const S = m({
            tabbingDirection: "backwards"
          });
          mc(S);
        }
      })]
    });
  });
mv.displayName = hv;
var gv = "ToastFocusProxy",
  Fu = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        onFocusFromOutsideViewport: r,
        ...o
      } = e,
      i = ol(gv, n);
    return h.jsx(rl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: {
        position: "fixed"
      },
      onFocus: s => {
        const a = s.relatedTarget;
        !i.viewport?.contains(a) && r();
      }
    });
  });
Fu.displayName = gv;
var il = "Toast",
  Xb = "toast.swipeStart",
  Yb = "toast.swipeMove",
  Qb = "toast.swipeCancel",
  qb = "toast.swipeEnd",
  vv = p.forwardRef((e, t) => {
    const {
        forceMount: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        ...s
      } = e,
      [a = !0, l] = dr({
        prop: r,
        defaultProp: o,
        onChange: i
      });
    return h.jsx(Xt, {
      present: n || a,
      children: h.jsx(e5, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Le(e.onPause),
        onResume: Le(e.onResume),
        onSwipeStart: B(e.onSwipeStart, c => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: B(e.onSwipeMove, c => {
          const {
            x: u,
            y: d
          } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: B(e.onSwipeCancel, c => {
          c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: B(e.onSwipeEnd, c => {
          const {
            x: u,
            y: d
          } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1);
        })
      })
    });
  });
vv.displayName = il;
var [Zb, Jb] = fv(il, {
    onClose() {}
  }),
  e5 = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: c,
        onSwipeStart: u,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: y,
        ...w
      } = e,
      m = ol(il, n),
      [S, v] = p.useState(null),
      g = ee(t, D => v(D)),
      x = p.useRef(null),
      b = p.useRef(null),
      k = o || m.duration,
      E = p.useRef(0),
      P = p.useRef(k),
      A = p.useRef(0),
      {
        onToastAdd: L,
        onToastRemove: C
      } = m,
      j = Le(() => {
        S?.contains(document.activeElement) && m.viewport?.focus(), s();
      }),
      I = p.useCallback(D => {
        !D || D === 1 / 0 || (window.clearTimeout(A.current), E.current = new Date().getTime(), A.current = window.setTimeout(j, D));
      }, [j]);
    p.useEffect(() => {
      const D = m.viewport;
      if (D) {
        const T = () => {
            I(P.current), c?.();
          },
          R = () => {
            const F = new Date().getTime() - E.current;
            P.current = P.current - F, window.clearTimeout(A.current), l?.();
          };
        return D.addEventListener(Du, R), D.addEventListener($u, T), () => {
          D.removeEventListener(Du, R), D.removeEventListener($u, T);
        };
      }
    }, [m.viewport, k, l, c, I]), p.useEffect(() => {
      i && !m.isClosePausedRef.current && I(k);
    }, [i, k, m.isClosePausedRef, I]), p.useEffect(() => (L(), () => C()), [L, C]);
    const z = p.useMemo(() => S ? Ev(S) : null, [S]);
    return m.viewport ? h.jsxs(h.Fragment, {
      children: [z && h.jsx(t5, {
        __scopeToast: n,
        role: "status",
        "aria-live": r === "foreground" ? "assertive" : "polite",
        "aria-atomic": !0,
        children: z
      }), h.jsx(Zb, {
        scope: n,
        onClose: j,
        children: wr.createPortal(h.jsx(hf.ItemSlot, {
          scope: n,
          children: h.jsx(Mb, {
            asChild: !0,
            onEscapeKeyDown: B(a, () => {
              m.isFocusedToastEscapeKeyDownRef.current || j(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: h.jsx(K.li, {
              role: "status",
              "aria-live": "off",
              "aria-atomic": !0,
              tabIndex: 0,
              "data-state": i ? "open" : "closed",
              "data-swipe-direction": m.swipeDirection,
              ...w,
              ref: g,
              style: {
                userSelect: "none",
                touchAction: "none",
                ...e.style
              },
              onKeyDown: B(e.onKeyDown, D => {
                D.key === "Escape" && (a?.(D.nativeEvent), D.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, j()));
              }),
              onPointerDown: B(e.onPointerDown, D => {
                D.button === 0 && (x.current = {
                  x: D.clientX,
                  y: D.clientY
                });
              }),
              onPointerMove: B(e.onPointerMove, D => {
                if (!x.current) return;
                const T = D.clientX - x.current.x,
                  R = D.clientY - x.current.y,
                  F = !!b.current,
                  N = ["left", "right"].includes(m.swipeDirection),
                  O = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                  M = N ? O(0, T) : 0,
                  U = N ? 0 : O(0, R),
                  Y = D.pointerType === "touch" ? 10 : 2,
                  q = {
                    x: M,
                    y: U
                  },
                  ne = {
                    originalEvent: D,
                    delta: q
                  };
                F ? (b.current = q, ms(Yb, d, ne, {
                  discrete: !1
                })) : Eh(q, m.swipeDirection, Y) ? (b.current = q, ms(Xb, u, ne, {
                  discrete: !1
                }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(T) > Y || Math.abs(R) > Y) && (x.current = null);
              }),
              onPointerUp: B(e.onPointerUp, D => {
                const T = b.current,
                  R = D.target;
                if (R.hasPointerCapture(D.pointerId) && R.releasePointerCapture(D.pointerId), b.current = null, x.current = null, T) {
                  const F = D.currentTarget,
                    N = {
                      originalEvent: D,
                      delta: T
                    };
                  Eh(T, m.swipeDirection, m.swipeThreshold) ? ms(qb, y, N, {
                    discrete: !0
                  }) : ms(Qb, f, N, {
                    discrete: !0
                  }), F.addEventListener("click", O => O.preventDefault(), {
                    once: !0
                  });
                }
              })
            })
          })
        }), m.viewport)
      })]
    }) : null;
  }),
  t5 = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
      } = e,
      o = ol(il, t),
      [i, s] = p.useState(!1),
      [a, l] = p.useState(!1);
    return o5(() => s(!0)), p.useEffect(() => {
      const c = window.setTimeout(() => l(!0), 1e3);
      return () => window.clearTimeout(c);
    }, []), a ? null : h.jsx(Bi, {
      asChild: !0,
      children: h.jsx(rl, {
        ...r,
        children: i && h.jsxs(h.Fragment, {
          children: [o.label, " ", n]
        })
      })
    });
  },
  n5 = "ToastTitle",
  yv = p.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e;
    return h.jsx(K.div, {
      ...r,
      ref: t
    });
  });
yv.displayName = n5;
var r5 = "ToastDescription",
  wv = p.forwardRef((e, t) => {
    const {
      __scopeToast: n,
      ...r
    } = e;
    return h.jsx(K.div, {
      ...r,
      ref: t
    });
  });
wv.displayName = r5;
var xv = "ToastAction",
  Sv = p.forwardRef((e, t) => {
    const {
      altText: n,
      ...r
    } = e;
    return n.trim() ? h.jsx(bv, {
      altText: n,
      asChild: !0,
      children: h.jsx(mf, {
        ...r,
        ref: t
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${xv}\`. Expected non-empty \`string\`.`), null);
  });
Sv.displayName = xv;
var Cv = "ToastClose",
  mf = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
      } = e,
      o = Jb(Cv, n);
    return h.jsx(bv, {
      asChild: !0,
      children: h.jsx(K.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, o.onClose)
      })
    });
  });
mf.displayName = Cv;
var bv = p.forwardRef((e, t) => {
  const {
    __scopeToast: n,
    altText: r,
    ...o
  } = e;
  return h.jsx(K.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t
  });
});
function Ev(e) {
  const t = [];
  return Array.from(e.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), i5(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none",
        i = r.dataset.radixToastAnnounceExclude === "";
      if (!o) if (i) {
        const s = r.dataset.radixToastAnnounceAlt;
        s && t.push(s);
      } else t.push(...Ev(r));
    }
  }), t;
}
function ms(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? ff(o, i) : o.dispatchEvent(i);
}
var Eh = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function o5(e = () => {}) {
  const t = Le(e);
  Ve(() => {
    let n = 0,
      r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function i5(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function s5(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function mc(e) {
  const t = document.activeElement;
  return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var a5 = pv,
  kv = mv,
  Pv = vv,
  Tv = yv,
  Nv = wv,
  Rv = Sv,
  Ov = mf;
const l5 = a5,
  Av = p.forwardRef(({
    className: e,
    ...t
  }, n) => h.jsx(kv, {
    ref: n,
    className: W("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
  }));
Av.displayName = kv.displayName;
const c5 = tv("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }),
  _v = p.forwardRef(({
    className: e,
    variant: t,
    ...n
  }, r) => h.jsx(Pv, {
    ref: r,
    className: W(c5({
      variant: t
    }), e),
    ...n
  }));
_v.displayName = Pv.displayName;
const qn = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Rv, {
  ref: n,
  className: W("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
  ...t
}));
qn.displayName = Rv.displayName;
const jv = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Ov, {
  ref: n,
  className: W("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
  "toast-close": "",
  ...t,
  children: h.jsx(cf, {
    className: "h-4 w-4"
  })
}));
jv.displayName = Ov.displayName;
const Iv = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Tv, {
  ref: n,
  className: W("text-sm font-semibold [&+div]:text-xs", e),
  ...t
}));
Iv.displayName = Tv.displayName;
const Lv = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Nv, {
  ref: n,
  className: W("text-sm opacity-90", e),
  ...t
}));
Lv.displayName = Nv.displayName;
const u5 = 100,
  d5 = 1e6;
let gc = 0;
function f5() {
  return gc = (gc + 1) % Number.MAX_SAFE_INTEGER, gc.toString();
}
const vc = new Map(),
  kh = e => {
    if (vc.has(e)) return;
    const t = setTimeout(() => {
      vc.delete(e), ri({
        type: "REMOVE_TOAST",
        toastId: e
      });
    }, d5);
    vc.set(e, t);
  },
  p5 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return {
          ...e,
          toasts: [t.toast, ...e.toasts].slice(0, u5)
        };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map(n => n.id === t.toast.id ? {
            ...n,
            ...t.toast
          } : n)
        };
      case "DISMISS_TOAST":
        {
          const {
            toastId: n
          } = t;
          return n ? kh(n) : e.toasts.forEach(r => {
            kh(r.id);
          }), {
            ...e,
            toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
              ...r,
              open: !1
            } : r)
          };
        }
      case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(n => n.id !== t.toastId)
        };
    }
  },
  Bs = [];
let Vs = {
  toasts: []
};
function ri(e) {
  Vs = p5(Vs, e), Bs.forEach(t => {
    t(Vs);
  });
}
function h5({
  ...e
}) {
  const t = f5(),
    n = o => ri({
      type: "UPDATE_TOAST",
      toast: {
        ...o,
        id: t
      }
    }),
    r = () => ri({
      type: "DISMISS_TOAST",
      toastId: t
    });
  return ri({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: o => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function sl() {
  const [e, t] = p.useState(Vs);
  return p.useEffect(() => (Bs.push(t), () => {
    const n = Bs.indexOf(t);
    n > -1 && Bs.splice(n, 1);
  }), [e]), {
    ...e,
    toast: h5,
    dismiss: n => ri({
      type: "DISMISS_TOAST",
      toastId: n
    })
  };
}
var m5 = $c.useId || (() => {}),
  g5 = 0;
function In(e) {
  const [t, n] = p.useState(m5());
  return Ve(() => {
    e || n(r => r ?? String(g5++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var yc = "focusScope.autoFocusOnMount",
  wc = "focusScope.autoFocusOnUnmount",
  Ph = {
    bubbles: !1,
    cancelable: !0
  },
  v5 = "FocusScope",
  al = p.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = p.useState(null),
      c = Le(o),
      u = Le(i),
      d = p.useRef(null),
      f = ee(t, m => l(m)),
      y = p.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    p.useEffect(() => {
      if (r) {
        let m = function (x) {
            if (y.paused || !a) return;
            const b = x.target;
            a.contains(b) ? d.current = b : wn(d.current, {
              select: !0
            });
          },
          S = function (x) {
            if (y.paused || !a) return;
            const b = x.relatedTarget;
            b !== null && (a.contains(b) || wn(d.current, {
              select: !0
            }));
          },
          v = function (x) {
            if (document.activeElement === document.body) for (const k of x) k.removedNodes.length > 0 && wn(a);
          };
        document.addEventListener("focusin", m), document.addEventListener("focusout", S);
        const g = new MutationObserver(v);
        return a && g.observe(a, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", m), document.removeEventListener("focusout", S), g.disconnect();
        };
      }
    }, [r, a, y.paused]), p.useEffect(() => {
      if (a) {
        Nh.add(y);
        const m = document.activeElement;
        if (!a.contains(m)) {
          const v = new CustomEvent(yc, Ph);
          a.addEventListener(yc, c), a.dispatchEvent(v), v.defaultPrevented || (y5(b5(Mv(a)), {
            select: !0
          }), document.activeElement === m && wn(a));
        }
        return () => {
          a.removeEventListener(yc, c), setTimeout(() => {
            const v = new CustomEvent(wc, Ph);
            a.addEventListener(wc, u), a.dispatchEvent(v), v.defaultPrevented || wn(m ?? document.body, {
              select: !0
            }), a.removeEventListener(wc, u), Nh.remove(y);
          }, 0);
        };
      }
    }, [a, c, u, y]);
    const w = p.useCallback(m => {
      if (!n && !r || y.paused) return;
      const S = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
        v = document.activeElement;
      if (S && v) {
        const g = m.currentTarget,
          [x, b] = w5(g);
        x && b ? !m.shiftKey && v === b ? (m.preventDefault(), n && wn(x, {
          select: !0
        })) : m.shiftKey && v === x && (m.preventDefault(), n && wn(b, {
          select: !0
        })) : v === g && m.preventDefault();
      }
    }, [n, r, y.paused]);
    return h.jsx(K.div, {
      tabIndex: -1,
      ...s,
      ref: f,
      onKeyDown: w
    });
  });
al.displayName = v5;
function y5(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e) if (wn(r, {
    select: t
  }), document.activeElement !== n) return;
}
function w5(e) {
  const t = Mv(e),
    n = Th(t, e),
    r = Th(t.reverse(), e);
  return [n, r];
}
function Mv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Th(e, t) {
  for (const n of e) if (!x5(n, {
    upTo: t
  })) return n;
}
function x5(e, {
  upTo: t
}) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function S5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function wn(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && S5(e) && t && e.select();
  }
}
var Nh = C5();
function C5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Rh(e, t), e.unshift(t);
    },
    remove(t) {
      e = Rh(e, t), e[0]?.resume();
    }
  };
}
function Rh(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function b5(e) {
  return e.filter(t => t.tagName !== "A");
}
var xc = 0;
function gf() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Oh()), document.body.insertAdjacentElement("beforeend", e[1] ?? Oh()), xc++, () => {
      xc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), xc--;
    };
  }, []);
}
function Oh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Vt = function () {
  return Vt = Object.assign || function (t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Vt.apply(this, arguments);
};
function Dv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function E5(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Hs = "right-scroll-bar-position",
  Us = "width-before-scroll-bar",
  k5 = "with-scroll-bars-hidden",
  P5 = "--removed-body-scroll-bar-size";
function Sc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function T5(e, t) {
  var n = p.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var N5 = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
  Ah = new WeakMap();
function R5(e, t) {
  var n = T5(null, function (r) {
    return e.forEach(function (o) {
      return Sc(o, r);
    });
  });
  return N5(function () {
    var r = Ah.get(n);
    if (r) {
      var o = new Set(r),
        i = new Set(e),
        s = n.current;
      o.forEach(function (a) {
        i.has(a) || Sc(a, null);
      }), i.forEach(function (a) {
        o.has(a) || Sc(a, s);
      });
    }
    Ah.set(n, e);
  }, [e]), n;
}
function O5(e) {
  return e;
}
function A5(e, t) {
  t === void 0 && (t = O5);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return n.push(s), function () {
          n = n.filter(function (a) {
            return a !== s;
          });
        };
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length;) {
          var s = n;
          n = [], s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          }
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          n = [], a.forEach(i), s = n;
        }
        var l = function () {
            var u = s;
            s = [], u.forEach(i);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(), n = {
          push: function (u) {
            s.push(u), c();
          },
          filter: function (u) {
            return s = s.filter(u), n;
          }
        };
      }
    };
  return o;
}
function _5(e) {
  e === void 0 && (e = {});
  var t = A5(null);
  return t.options = Vt({
    async: !0,
    ssr: !1
  }, e), t;
}
var $v = function (e) {
  var t = e.sideCar,
    n = Dv(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return p.createElement(r, Vt({}, n));
};
$v.isSideCarExport = !0;
function j5(e, t) {
  return e.useMedium(t), $v;
}
var Fv = _5(),
  Cc = function () {},
  ll = p.forwardRef(function (e, t) {
    var n = p.useRef(null),
      r = p.useState({
        onScrollCapture: Cc,
        onWheelCapture: Cc,
        onTouchMoveCapture: Cc
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      y = e.noIsolation,
      w = e.inert,
      m = e.allowPinchZoom,
      S = e.as,
      v = S === void 0 ? "div" : S,
      g = e.gapMode,
      x = Dv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      b = f,
      k = R5([n, t]),
      E = Vt(Vt({}, x), o);
    return p.createElement(p.Fragment, null, u && p.createElement(b, {
      sideCar: Fv,
      removeScrollBar: c,
      shards: d,
      noIsolation: y,
      inert: w,
      setCallbacks: i,
      allowPinchZoom: !!m,
      lockRef: n,
      gapMode: g
    }), s ? p.cloneElement(p.Children.only(a), Vt(Vt({}, E), {
      ref: k
    })) : p.createElement(v, Vt({}, E, {
      className: l,
      ref: k
    }), a));
  });
ll.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ll.classNames = {
  fullWidth: Us,
  zeroRight: Hs
};
var I5 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function L5() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = I5();
  return t && e.setAttribute("nonce", t), e;
}
function M5(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function D5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $5 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = L5()) && (M5(t, n), D5(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
      }
    };
  },
  F5 = function () {
    var e = $5();
    return function (t, n) {
      p.useEffect(function () {
        return e.add(t), function () {
          e.remove();
        };
      }, [t && n]);
    };
  },
  zv = function () {
    var e = F5(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  z5 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  bc = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  B5 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [bc(n), bc(r), bc(o)];
  },
  V5 = function (e) {
    if (e === void 0 && (e = "margin"), typeof window > "u") return z5;
    var t = B5(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  },
  H5 = zv(),
  Jr = "data-scroll-locked",
  U5 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return n === void 0 && (n = "margin"), `
  .`.concat(k5, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Jr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Hs, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Us, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Hs, " .").concat(Hs, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Us, " .").concat(Us, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Jr, `] {
    `).concat(P5, ": ").concat(a, `px;
  }
`);
  },
  _h = function () {
    var e = parseInt(document.body.getAttribute(Jr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  W5 = function () {
    p.useEffect(function () {
      return document.body.setAttribute(Jr, (_h() + 1).toString()), function () {
        var e = _h() - 1;
        e <= 0 ? document.body.removeAttribute(Jr) : document.body.setAttribute(Jr, e.toString());
      };
    }, []);
  },
  K5 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    W5();
    var i = p.useMemo(function () {
      return V5(o);
    }, [o]);
    return p.createElement(H5, {
      styles: U5(i, !t, o, n ? "" : "!important")
    });
  },
  zu = !1;
if (typeof window < "u") try {
  var gs = Object.defineProperty({}, "passive", {
    get: function () {
      return zu = !0, !0;
    }
  });
  window.addEventListener("test", gs, gs), window.removeEventListener("test", gs, gs);
} catch {
  zu = !1;
}
var Er = zu ? {
    passive: !1
  } : !1,
  G5 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Bv = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !G5(e) && n[t] === "visible");
  },
  X5 = function (e) {
    return Bv(e, "overflowY");
  },
  Y5 = function (e) {
    return Bv(e, "overflowX");
  },
  jh = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Vv(e, r);
      if (o) {
        var i = Hv(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Q5 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  q5 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Vv = function (e, t) {
    return e === "v" ? X5(t) : Y5(t);
  },
  Hv = function (e, t) {
    return e === "v" ? Q5(t) : q5(t);
  },
  Z5 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  J5 = function (e, t, n, r, o) {
    var i = Z5(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = s > 0,
      d = 0,
      f = 0;
    do {
      var y = Hv(e, a),
        w = y[0],
        m = y[1],
        S = y[2],
        v = m - S - i * w;
      (w || v) && Vv(e, a) && (d += v, f += w), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (u && (Math.abs(d) < 1 || !o) || !u && (Math.abs(f) < 1 || !o)) && (c = !0), c;
  },
  vs = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  Ih = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Lh = function (e) {
    return e && "current" in e ? e.current : e;
  },
  e3 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  t3 = function (e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
  },
  n3 = 0,
  kr = [];
function r3(e) {
  var t = p.useRef([]),
    n = p.useRef([0, 0]),
    r = p.useRef(),
    o = p.useState(n3++)[0],
    i = p.useState(zv)[0],
    s = p.useRef(e);
  p.useEffect(function () {
    s.current = e;
  }, [e]), p.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = E5([e.lockRef.current], (e.shards || []).map(Lh), !0).filter(Boolean);
      return m.forEach(function (S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function () {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function (S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = p.useCallback(function (m, S) {
      if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !s.current.allowPinchZoom;
      var v = vs(m),
        g = n.current,
        x = "deltaX" in m ? m.deltaX : g[0] - v[0],
        b = "deltaY" in m ? m.deltaY : g[1] - v[1],
        k,
        E = m.target,
        P = Math.abs(x) > Math.abs(b) ? "h" : "v";
      if ("touches" in m && P === "h" && E.type === "range") return !1;
      var A = jh(P, E);
      if (!A) return !0;
      if (A ? k = P : (k = P === "v" ? "h" : "v", A = jh(P, E)), !A) return !1;
      if (!r.current && "changedTouches" in m && (x || b) && (r.current = k), !k) return !0;
      var L = r.current || k;
      return J5(L, S, m, L === "h" ? x : b, !0);
    }, []),
    l = p.useCallback(function (m) {
      var S = m;
      if (!(!kr.length || kr[kr.length - 1] !== i)) {
        var v = "deltaY" in S ? Ih(S) : vs(S),
          g = t.current.filter(function (k) {
            return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && e3(k.delta, v);
          })[0];
        if (g && g.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!g) {
          var x = (s.current.shards || []).map(Lh).filter(Boolean).filter(function (k) {
              return k.contains(S.target);
            }),
            b = x.length > 0 ? a(S, x[0]) : !s.current.noIsolation;
          b && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    c = p.useCallback(function (m, S, v, g) {
      var x = {
        name: m,
        delta: S,
        target: v,
        should: g,
        shadowParent: o3(v)
      };
      t.current.push(x), setTimeout(function () {
        t.current = t.current.filter(function (b) {
          return b !== x;
        });
      }, 1);
    }, []),
    u = p.useCallback(function (m) {
      n.current = vs(m), r.current = void 0;
    }, []),
    d = p.useCallback(function (m) {
      c(m.type, Ih(m), m.target, a(m, e.lockRef.current));
    }, []),
    f = p.useCallback(function (m) {
      c(m.type, vs(m), m.target, a(m, e.lockRef.current));
    }, []);
  p.useEffect(function () {
    return kr.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Er), document.addEventListener("touchmove", l, Er), document.addEventListener("touchstart", u, Er), function () {
      kr = kr.filter(function (m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, Er), document.removeEventListener("touchmove", l, Er), document.removeEventListener("touchstart", u, Er);
    };
  }, []);
  var y = e.removeScrollBar,
    w = e.inert;
  return p.createElement(p.Fragment, null, w ? p.createElement(i, {
    styles: t3(o)
  }) : null, y ? p.createElement(K5, {
    gapMode: e.gapMode
  }) : null);
}
function o3(e) {
  for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const i3 = j5(Fv, r3);
var cl = p.forwardRef(function (e, t) {
  return p.createElement(ll, Vt({}, e, {
    ref: t,
    sideCar: i3
  }));
});
cl.classNames = ll.classNames;
var s3 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Pr = new WeakMap(),
  ys = new WeakMap(),
  ws = {},
  Ec = 0,
  Uv = function (e) {
    return e && (e.host || Uv(e.parentNode));
  },
  a3 = function (e, t) {
    return t.map(function (n) {
      if (e.contains(n)) return n;
      var r = Uv(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
    }).filter(function (n) {
      return !!n;
    });
  },
  l3 = function (e, t, n, r) {
    var o = a3(t, Array.isArray(e) ? e : [e]);
    ws[n] || (ws[n] = new WeakMap());
    var i = ws[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      c = function (d) {
        !d || a.has(d) || (a.add(d), c(d.parentNode));
      };
    o.forEach(c);
    var u = function (d) {
      !d || l.has(d) || Array.prototype.forEach.call(d.children, function (f) {
        if (a.has(f)) u(f);else try {
          var y = f.getAttribute(r),
            w = y !== null && y !== "false",
            m = (Pr.get(f) || 0) + 1,
            S = (i.get(f) || 0) + 1;
          Pr.set(f, m), i.set(f, S), s.push(f), m === 1 && w && ys.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", f, v);
        }
      });
    };
    return u(t), a.clear(), Ec++, function () {
      s.forEach(function (d) {
        var f = Pr.get(d) - 1,
          y = i.get(d) - 1;
        Pr.set(d, f), i.set(d, y), f || (ys.has(d) || d.removeAttribute(r), ys.delete(d)), y || d.removeAttribute(n);
      }), Ec--, Ec || (Pr = new WeakMap(), Pr = new WeakMap(), ys = new WeakMap(), ws = {});
    };
  },
  vf = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = s3(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), l3(r, o, n, "aria-hidden")) : function () {
      return null;
    };
  },
  yf = "Dialog",
  [Wv, TR] = xr(yf),
  [c3, It] = Wv(yf),
  Kv = e => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0
      } = e,
      a = p.useRef(null),
      l = p.useRef(null),
      [c = !1, u] = dr({
        prop: r,
        defaultProp: o,
        onChange: i
      });
    return h.jsx(c3, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: In(),
      titleId: In(),
      descriptionId: In(),
      open: c,
      onOpenChange: u,
      onOpenToggle: p.useCallback(() => u(d => !d), [u]),
      modal: s,
      children: n
    });
  };
Kv.displayName = yf;
var Gv = "DialogTrigger",
  Xv = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = It(Gv, n),
      i = ee(t, o.triggerRef);
    return h.jsx(K.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Sf(o.open),
      ...r,
      ref: i,
      onClick: B(e.onClick, o.onOpenToggle)
    });
  });
Xv.displayName = Gv;
var wf = "DialogPortal",
  [u3, Yv] = Wv(wf, {
    forceMount: void 0
  }),
  Qv = e => {
    const {
        __scopeDialog: t,
        forceMount: n,
        children: r,
        container: o
      } = e,
      i = It(wf, t);
    return h.jsx(u3, {
      scope: t,
      forceMount: n,
      children: p.Children.map(r, s => h.jsx(Xt, {
        present: n || i.open,
        children: h.jsx(Bi, {
          asChild: !0,
          container: o,
          children: s
        })
      }))
    });
  };
Qv.displayName = wf;
var Ca = "DialogOverlay",
  qv = p.forwardRef((e, t) => {
    const n = Yv(Ca, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = It(Ca, e.__scopeDialog);
    return i.modal ? h.jsx(Xt, {
      present: r || i.open,
      children: h.jsx(d3, {
        ...o,
        ref: t
      })
    }) : null;
  });
qv.displayName = Ca;
var d3 = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = It(Ca, n);
    return h.jsx(cl, {
      as: Dn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: h.jsx(K.div, {
        "data-state": Sf(o.open),
        ...r,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...r.style
        }
      })
    });
  }),
  fr = "DialogContent",
  Zv = p.forwardRef((e, t) => {
    const n = Yv(fr, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = It(fr, e.__scopeDialog);
    return h.jsx(Xt, {
      present: r || i.open,
      children: i.modal ? h.jsx(f3, {
        ...o,
        ref: t
      }) : h.jsx(p3, {
        ...o,
        ref: t
      })
    });
  });
Zv.displayName = fr;
var f3 = p.forwardRef((e, t) => {
    const n = It(fr, e.__scopeDialog),
      r = p.useRef(null),
      o = ee(t, n.contentRef, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return vf(i);
    }, []), h.jsx(Jv, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: B(e.onCloseAutoFocus, i => {
        i.preventDefault(), n.triggerRef.current?.focus();
      }),
      onPointerDownOutside: B(e.onPointerDownOutside, i => {
        const s = i.detail.originalEvent,
          a = s.button === 0 && s.ctrlKey === !0;
        (s.button === 2 || a) && i.preventDefault();
      }),
      onFocusOutside: B(e.onFocusOutside, i => i.preventDefault())
    });
  }),
  p3 = p.forwardRef((e, t) => {
    const n = It(fr, e.__scopeDialog),
      r = p.useRef(!1),
      o = p.useRef(!1);
    return h.jsx(Jv, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        e.onCloseAutoFocus?.(i), i.defaultPrevented || (r.current || n.triggerRef.current?.focus(), i.preventDefault()), r.current = !1, o.current = !1;
      },
      onInteractOutside: i => {
        e.onInteractOutside?.(i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        n.triggerRef.current?.contains(s) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
      }
    });
  }),
  Jv = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      a = It(fr, n),
      l = p.useRef(null),
      c = ee(t, l);
    return gf(), h.jsxs(h.Fragment, {
      children: [h.jsx(al, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: h.jsx(zi, {
          role: "dialog",
          id: a.contentId,
          "aria-describedby": a.descriptionId,
          "aria-labelledby": a.titleId,
          "data-state": Sf(a.open),
          ...s,
          ref: c,
          onDismiss: () => a.onOpenChange(!1)
        })
      }), h.jsxs(h.Fragment, {
        children: [h.jsx(h3, {
          titleId: a.titleId
        }), h.jsx(g3, {
          contentRef: l,
          descriptionId: a.descriptionId
        })]
      })]
    });
  }),
  xf = "DialogTitle",
  e1 = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = It(xf, n);
    return h.jsx(K.h2, {
      id: o.titleId,
      ...r,
      ref: t
    });
  });
e1.displayName = xf;
var t1 = "DialogDescription",
  n1 = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = It(t1, n);
    return h.jsx(K.p, {
      id: o.descriptionId,
      ...r,
      ref: t
    });
  });
n1.displayName = t1;
var r1 = "DialogClose",
  o1 = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = It(r1, n);
    return h.jsx(K.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: B(e.onClick, () => o.onOpenChange(!1))
    });
  });
o1.displayName = r1;
function Sf(e) {
  return e ? "open" : "closed";
}
var i1 = "DialogTitleWarning",
  [NR, s1] = Pb(i1, {
    contentName: fr,
    titleName: xf,
    docsSlug: "dialog"
  }),
  h3 = ({
    titleId: e
  }) => {
    const t = s1(i1),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return p.useEffect(() => {
      e && (document.getElementById(e) || console.error(n));
    }, [n, e]), null;
  },
  m3 = "DialogDescriptionWarning",
  g3 = ({
    contentRef: e,
    descriptionId: t
  }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${s1(m3).contentName}}.`;
    return p.useEffect(() => {
      const o = e.current?.getAttribute("aria-describedby");
      t && o && (document.getElementById(t) || console.warn(r));
    }, [r, e, t]), null;
  },
  v3 = Kv,
  y3 = Xv,
  w3 = Qv,
  a1 = qv,
  l1 = Zv,
  c1 = e1,
  u1 = n1,
  d1 = o1;
const Cf = v3,
  bf = y3,
  x3 = w3,
  uo = d1,
  f1 = p.forwardRef(({
    className: e,
    ...t
  }, n) => h.jsx(a1, {
    ref: n,
    className: W("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
  }));
f1.displayName = a1.displayName;
const ul = p.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => h.jsxs(x3, {
  children: [h.jsx(f1, {}), h.jsxs(l1, {
    ref: r,
    className: W("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
    ...n,
    children: [t, h.jsxs(d1, {
      className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      children: [h.jsx(cf, {
        className: "h-4 w-4"
      }), h.jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    })]
  })]
}));
ul.displayName = l1.displayName;
const dl = ({
  className: e,
  ...t
}) => h.jsx("div", {
  className: W("flex flex-col space-y-1.5 text-center sm:text-left", e),
  ...t
});
dl.displayName = "DialogHeader";
const fl = ({
  className: e,
  ...t
}) => h.jsx("div", {
  className: W("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
  ...t
});
fl.displayName = "DialogFooter";
const pl = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(c1, {
  ref: n,
  className: W("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
pl.displayName = c1.displayName;
const S3 = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(u1, {
  ref: n,
  className: W("text-sm text-muted-foreground", e),
  ...t
}));
S3.displayName = u1.displayName;
const on = p.forwardRef(({
  className: e,
  type: t,
  ...n
}, r) => h.jsx("input", {
  type: t,
  className: W("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
  ref: r,
  ...n
}));
on.displayName = "Input";
const C3 = ({
    trigger: e,
    onConfirm: t
  }) => {
    const {
        t: n
      } = mn(),
      [r, o] = p.useState("");
    return h.jsxs(Cf, {
      children: [h.jsx(bf, {
        children: e
      }), h.jsxs(ul, {
        children: [h.jsx(dl, {
          children: h.jsx(pl, {
            children: n("addViaDeviceId")
          })
        }), h.jsx(on, {
          placeholder: n("deviceId"),
          value: r,
          onChange: i => o(i.target.value)
        }), h.jsxs(fl, {
          children: [h.jsx(uo, {
            asChild: !0,
            children: h.jsx(Se, {
              variant: "secondary",
              children: n("cancel")
            })
          }), h.jsx(uo, {
            asChild: !0,
            children: h.jsx(Se, {
              onClick: () => {
                o(""), t(r);
              },
              children: n("confirm")
            })
          })]
        })]
      })]
    });
  },
  b3 = ({
    trigger: e,
    onConfirm: t
  }) => {
    const {
        t: n
      } = mn(),
      [r, o] = p.useState(""),
      [i, s] = p.useState(0);
    return h.jsxs(Cf, {
      children: [h.jsx(bf, {
        children: e
      }), h.jsxs(ul, {
        children: [h.jsx(dl, {
          children: h.jsx(pl, {
            children: n("addViaIpAndPort")
          })
        }), h.jsxs("div", {
          className: "flex space-x-2 items-center",
          children: [h.jsx(on, {
            placeholder: n("ip"),
            className: "w-3/4",
            value: r,
            onChange: a => o(a.target.value)
          }), h.jsx("div", {
            children: ":"
          }), h.jsx(on, {
            type: "number",
            placeholder: n("port"),
            className: "flex-1",
            value: i,
            onChange: a => s(Number(a.target.value))
          })]
        }), h.jsxs(fl, {
          children: [h.jsx(uo, {
            asChild: !0,
            children: h.jsx(Se, {
              variant: "secondary",
              children: n("cancel")
            })
          }), h.jsx(uo, {
            asChild: !0,
            children: h.jsx(Se, {
              onClick: () => {
                o(""), s(0), t(r, i);
              },
              children: n("confirm")
            })
          })]
        })]
      })]
    });
  };
function en(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function p1(e) {
  if (!en(e)) return e;
  const t = {};
  return Object.keys(e).forEach(n => {
    t[n] = p1(e[n]);
  }), t;
}
function lt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return en(e) && en(t) && Object.keys(t).forEach(o => {
    en(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && en(e[o]) ? r[o] = lt(e[o], t[o], n) : n.clone ? r[o] = en(t[o]) ? p1(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function pr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function fo(e) {
  if (typeof e != "string") throw new Error(pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bu(e, t) {
  const n = {
    ...t
  };
  for (const r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
    const o = r;
    if (o === "components" || o === "slots") n[o] = {
      ...e[o],
      ...n[o]
    };else if (o === "componentsProps" || o === "slotProps") {
      const i = e[o],
        s = t[o];
      if (!s) n[o] = i || {};else if (!i) n[o] = s;else {
        n[o] = {
          ...s
        };
        for (const a in i) if (Object.prototype.hasOwnProperty.call(i, a)) {
          const l = a;
          n[o][l] = Bu(i[l], s[l]);
        }
      }
    } else n[o] === void 0 && (n[o] = e[o]);
  }
  return n;
}
function E3(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "",
      a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      c && (s += (a === !0 ? "" : " ") + t(c), a = !1, n && n[c] && (s += " " + n[c]));
    }
    r[o] = s;
  }
  return r;
}
const Mh = e => e,
  k3 = () => {
    let e = Mh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Mh;
      }
    };
  },
  P3 = k3(),
  T3 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
function h1(e, t, n = "Mui") {
  const r = T3[t];
  return r ? `${n}-${r}` : `${P3.generate(e)}-${t}`;
}
function N3(e, t, n = "Mui") {
  const r = {};
  return t.forEach(o => {
    r[o] = h1(e, o, n);
  }), r;
}
function R3(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function oi(e, t) {
  return t ? lt(e, t, {
    clone: !1
  }) : e;
}
function O3(e, t) {
  if (!e.containerQueries) return t;
  const n = Object.keys(t).filter(r => r.startsWith("@container")).sort((r, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(r.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, {
    ...t
  }) : t;
}
function A3(e, t) {
  return t === "@" || t.startsWith("@") && (e.some(n => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function _3(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) return null;
  const [, r, o] = n,
    i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function j3(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const l = t(e.breakpoints.not(...a), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const r = {},
    o = i => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const hl = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  },
  Dh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: e => `@media (min-width:${hl[e]}px)`
  },
  I3 = {
    containerQueries: e => ({
      up: t => {
        let n = typeof t == "number" ? t : hl[t] || t;
        return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
      }
    })
  };
function dn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Dh;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Dh;
    return Object.keys(t).reduce((s, a) => {
      if (A3(i.keys, a)) {
        const l = _3(r.containerQueries ? r : I3, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(i.values || hl).includes(a)) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function L3(e = {}) {
  return e.keys?.reduce((n, r) => {
    const o = e.up(r);
    return n[o] = {}, n;
  }, {}) || {};
}
function M3(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ml(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function ba(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = ml(e, n) || r, t && (o = t(o, r, e)), o;
}
function be(e) {
  const {
      prop: t,
      cssProperty: n = e.prop,
      themeKey: r,
      transform: o
    } = e,
    i = s => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        c = ml(l, r) || {};
      return dn(s, a, d => {
        let f = ba(c, o, d);
        return d === f && typeof d == "string" && (f = ba(c, o, `${t}${d === "default" ? "" : fo(d)}`, d)), n === !1 ? f : {
          [n]: f
        };
      });
    };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function D3(e) {
  const t = {};
  return n => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const $3 = {
    m: "margin",
    p: "padding"
  },
  F3 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  },
  $h = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  },
  z3 = D3(e => {
    if (e.length > 2) if ($h[e]) e = $h[e];else return [e];
    const [t, n] = e.split(""),
      r = $3[t],
      o = F3[n] || "";
    return Array.isArray(o) ? o.map(i => r + i) : [r + o];
  }),
  Ef = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
  kf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ef, ...kf];
function Vi(e, t, n, r) {
  const o = ml(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? i => typeof i == "string" ? i : typeof o == "string" ? `calc(${i} * ${o})` : o * i : Array.isArray(o) ? i => {
    if (typeof i == "string") return i;
    const s = Math.abs(i),
      a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof o == "function" ? o : () => {};
}
function Pf(e) {
  return Vi(e, "spacing", 8);
}
function Hi(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function B3(e, t) {
  return n => e.reduce((r, o) => (r[o] = Hi(t, n), r), {});
}
function V3(e, t, n, r) {
  if (!t.includes(n)) return null;
  const o = z3(n),
    i = B3(o, r),
    s = e[n];
  return dn(e, s, i);
}
function m1(e, t) {
  const n = Pf(e.theme);
  return Object.keys(e).map(r => V3(e, t, r, n)).reduce(oi, {});
}
function ve(e) {
  return m1(e, Ef);
}
ve.propTypes = {};
ve.filterProps = Ef;
function ye(e) {
  return m1(e, kf);
}
ye.propTypes = {};
ye.filterProps = kf;
function gl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach(i => {
      r[i] = o;
    }), r), {}),
    n = r => Object.keys(r).reduce((o, i) => t[i] ? oi(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function vt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function bt(e, t) {
  return be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const H3 = bt("border", vt),
  U3 = bt("borderTop", vt),
  W3 = bt("borderRight", vt),
  K3 = bt("borderBottom", vt),
  G3 = bt("borderLeft", vt),
  X3 = bt("borderColor"),
  Y3 = bt("borderTopColor"),
  Q3 = bt("borderRightColor"),
  q3 = bt("borderBottomColor"),
  Z3 = bt("borderLeftColor"),
  J3 = bt("outline", vt),
  eE = bt("outlineColor"),
  vl = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Vi(e.theme, "shape.borderRadius", 4),
        n = r => ({
          borderRadius: Hi(t, r)
        });
      return dn(e, e.borderRadius, n);
    }
    return null;
  };
vl.propTypes = {};
vl.filterProps = ["borderRadius"];
gl(H3, U3, W3, K3, G3, X3, Y3, Q3, q3, Z3, vl, J3, eE);
const yl = e => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vi(e.theme, "spacing", 8),
      n = r => ({
        gap: Hi(t, r)
      });
    return dn(e, e.gap, n);
  }
  return null;
};
yl.propTypes = {};
yl.filterProps = ["gap"];
const wl = e => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vi(e.theme, "spacing", 8),
      n = r => ({
        columnGap: Hi(t, r)
      });
    return dn(e, e.columnGap, n);
  }
  return null;
};
wl.propTypes = {};
wl.filterProps = ["columnGap"];
const xl = e => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vi(e.theme, "spacing", 8),
      n = r => ({
        rowGap: Hi(t, r)
      });
    return dn(e, e.rowGap, n);
  }
  return null;
};
xl.propTypes = {};
xl.filterProps = ["rowGap"];
const tE = be({
    prop: "gridColumn"
  }),
  nE = be({
    prop: "gridRow"
  }),
  rE = be({
    prop: "gridAutoFlow"
  }),
  oE = be({
    prop: "gridAutoColumns"
  }),
  iE = be({
    prop: "gridAutoRows"
  }),
  sE = be({
    prop: "gridTemplateColumns"
  }),
  aE = be({
    prop: "gridTemplateRows"
  }),
  lE = be({
    prop: "gridTemplateAreas"
  }),
  cE = be({
    prop: "gridArea"
  });
gl(yl, wl, xl, tE, nE, rE, oE, iE, sE, aE, lE, cE);
function eo(e, t) {
  return t === "grey" ? t : e;
}
const uE = be({
    prop: "color",
    themeKey: "palette",
    transform: eo
  }),
  dE = be({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: eo
  }),
  fE = be({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: eo
  });
gl(uE, dE, fE);
function it(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pE = be({
    prop: "width",
    transform: it
  }),
  Tf = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = n => {
        const r = e.theme?.breakpoints?.values?.[n] || hl[n];
        return r ? e.theme?.breakpoints?.unit !== "px" ? {
          maxWidth: `${r}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: it(n)
        };
      };
      return dn(e, e.maxWidth, t);
    }
    return null;
  };
Tf.filterProps = ["maxWidth"];
const hE = be({
    prop: "minWidth",
    transform: it
  }),
  mE = be({
    prop: "height",
    transform: it
  }),
  gE = be({
    prop: "maxHeight",
    transform: it
  }),
  vE = be({
    prop: "minHeight",
    transform: it
  });
be({
  prop: "size",
  cssProperty: "width",
  transform: it
});
be({
  prop: "size",
  cssProperty: "height",
  transform: it
});
const yE = be({
  prop: "boxSizing"
});
gl(pE, Tf, hE, mE, gE, vE, yE);
const Sl = {
  border: {
    themeKey: "borders",
    transform: vt
  },
  borderTop: {
    themeKey: "borders",
    transform: vt
  },
  borderRight: {
    themeKey: "borders",
    transform: vt
  },
  borderBottom: {
    themeKey: "borders",
    transform: vt
  },
  borderLeft: {
    themeKey: "borders",
    transform: vt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: vt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vl
  },
  color: {
    themeKey: "palette",
    transform: eo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: eo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: eo
  },
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: ve
  },
  mt: {
    style: ve
  },
  mr: {
    style: ve
  },
  mb: {
    style: ve
  },
  ml: {
    style: ve
  },
  mx: {
    style: ve
  },
  my: {
    style: ve
  },
  margin: {
    style: ve
  },
  marginTop: {
    style: ve
  },
  marginRight: {
    style: ve
  },
  marginBottom: {
    style: ve
  },
  marginLeft: {
    style: ve
  },
  marginX: {
    style: ve
  },
  marginY: {
    style: ve
  },
  marginInline: {
    style: ve
  },
  marginInlineStart: {
    style: ve
  },
  marginInlineEnd: {
    style: ve
  },
  marginBlock: {
    style: ve
  },
  marginBlockStart: {
    style: ve
  },
  marginBlockEnd: {
    style: ve
  },
  displayPrint: {
    cssProperty: !1,
    transform: e => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: {
    style: yl
  },
  rowGap: {
    style: xl
  },
  columnGap: {
    style: wl
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: {
    themeKey: "shadows"
  },
  width: {
    transform: it
  },
  maxWidth: {
    style: Tf
  },
  minWidth: {
    transform: it
  },
  height: {
    transform: it
  },
  maxHeight: {
    transform: it
  },
  minHeight: {
    transform: it
  },
  boxSizing: {},
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function wE(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every(r => n.size === Object.keys(r).length);
}
function xE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function SE() {
  function e(n, r, o, i) {
    const s = {
        [n]: r,
        theme: o
      },
      a = i[n];
    if (!a) return {
      [n]: r
    };
    const {
      cssProperty: l = n,
      themeKey: c,
      transform: u,
      style: d
    } = a;
    if (r == null) return null;
    if (c === "typography" && r === "inherit") return {
      [n]: r
    };
    const f = ml(o, c) || {};
    return d ? d(s) : dn(s, r, w => {
      let m = ba(f, u, w);
      return w === m && typeof w == "string" && (m = ba(f, u, `${n}${w === "default" ? "" : fo(w)}`, w)), l === !1 ? m : {
        [l]: m
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: o = {}
    } = n || {};
    if (!r) return null;
    const i = o.unstable_sxConfig ?? Sl;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(o);else if (typeof a != "object") return a;
      if (!l) return null;
      const c = L3(o.breakpoints),
        u = Object.keys(c);
      let d = c;
      return Object.keys(l).forEach(f => {
        const y = xE(l[f], o);
        if (y != null) if (typeof y == "object") {
          if (i[f]) d = oi(d, e(f, y, o, i));else {
            const w = dn({
              theme: o
            }, y, m => ({
              [f]: m
            }));
            wE(w, y) ? d[f] = t({
              sx: y,
              theme: o
            }) : d = oi(d, w);
          }
        } else d = oi(d, e(f, y, o, i));
      }), O3(o, M3(u, d));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Ui = SE();
Ui.filterProps = ["sx"];
function Vu() {
  return Vu = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vu.apply(null, arguments);
}
function g1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var CE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  bE = g1(function (e) {
    return CE.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }),
  EE = !1;
function kE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function PE(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var TE = function () {
    function e(n) {
      var r = this;
      this._insertTag = function (o) {
        var i;
        r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
      }, this.isSpeedy = n.speedy === void 0 ? !EE : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function (r) {
      r.forEach(this._insertTag);
    }, t.insert = function (r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(PE(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var i = kE(o);
        try {
          i.insertRule(r, i.cssRules.length);
        } catch {}
      } else o.appendChild(document.createTextNode(r));
      this.ctr++;
    }, t.flush = function () {
      this.tags.forEach(function (r) {
        var o;
        return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
      }), this.tags = [], this.ctr = 0;
    }, e;
  }(),
  Fe = "-ms-",
  Ea = "-moz-",
  Z = "-webkit-",
  v1 = "comm",
  Nf = "rule",
  Rf = "decl",
  NE = "@import",
  y1 = "@keyframes",
  RE = "@layer",
  OE = Math.abs,
  Cl = String.fromCharCode,
  AE = Object.assign;
function _E(e, t) {
  return _e(e, 0) ^ 45 ? (((t << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function w1(e) {
  return e.trim();
}
function jE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, n) {
  return e.replace(t, n);
}
function Hu(e, t) {
  return e.indexOf(t);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function bi(e, t, n) {
  return e.slice(t, n);
}
function Ft(e) {
  return e.length;
}
function Of(e) {
  return e.length;
}
function xs(e, t) {
  return t.push(e), e;
}
function IE(e, t) {
  return e.map(t).join("");
}
var bl = 1,
  po = 1,
  x1 = 0,
  tt = 0,
  ke = 0,
  xo = "";
function El(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: bl,
    column: po,
    length: s,
    return: ""
  };
}
function Io(e, t) {
  return AE(El("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, t);
}
function LE() {
  return ke;
}
function ME() {
  return ke = tt > 0 ? _e(xo, --tt) : 0, po--, ke === 10 && (po = 1, bl--), ke;
}
function ct() {
  return ke = tt < x1 ? _e(xo, tt++) : 0, po++, ke === 10 && (po = 1, bl++), ke;
}
function Kt() {
  return _e(xo, tt);
}
function Ws() {
  return tt;
}
function Wi(e, t) {
  return bi(xo, e, t);
}
function Ei(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function S1(e) {
  return bl = po = 1, x1 = Ft(xo = e), tt = 0, [];
}
function C1(e) {
  return xo = "", e;
}
function Ks(e) {
  return w1(Wi(tt - 1, Uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function DE(e) {
  for (; (ke = Kt()) && ke < 33;) ct();
  return Ei(e) > 2 || Ei(ke) > 3 ? "" : " ";
}
function $E(e, t) {
  for (; --t && ct() && !(ke < 48 || ke > 102 || ke > 57 && ke < 65 || ke > 70 && ke < 97););
  return Wi(e, Ws() + (t < 6 && Kt() == 32 && ct() == 32));
}
function Uu(e) {
  for (; ct();) switch (ke) {
    case e:
      return tt;
    case 34:
    case 39:
      e !== 34 && e !== 39 && Uu(ke);
      break;
    case 40:
      e === 41 && Uu(e);
      break;
    case 92:
      ct();
      break;
  }
  return tt;
}
function FE(e, t) {
  for (; ct() && e + ke !== 57;) if (e + ke === 84 && Kt() === 47) break;
  return "/*" + Wi(t, tt - 1) + "*" + Cl(e === 47 ? e : ct());
}
function zE(e) {
  for (; !Ei(Kt());) ct();
  return Wi(e, tt);
}
function BE(e) {
  return C1(Gs("", null, null, null, [""], e = S1(e), 0, [0], e));
}
function Gs(e, t, n, r, o, i, s, a, l) {
  for (var c = 0, u = 0, d = s, f = 0, y = 0, w = 0, m = 1, S = 1, v = 1, g = 0, x = "", b = o, k = i, E = r, P = x; S;) switch (w = g, g = ct()) {
    case 40:
      if (w != 108 && _e(P, d - 1) == 58) {
        Hu(P += J(Ks(g), "&", "&\f"), "&\f") != -1 && (v = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      P += Ks(g);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      P += DE(w);
      break;
    case 92:
      P += $E(Ws() - 1, 7);
      continue;
    case 47:
      switch (Kt()) {
        case 42:
        case 47:
          xs(VE(FE(ct(), Ws()), t, n), l);
          break;
        default:
          P += "/";
      }
      break;
    case 123 * m:
      a[c++] = Ft(P) * v;
    case 125 * m:
    case 59:
    case 0:
      switch (g) {
        case 0:
        case 125:
          S = 0;
        case 59 + u:
          v == -1 && (P = J(P, /\f/g, "")), y > 0 && Ft(P) - d && xs(y > 32 ? zh(P + ";", r, n, d - 1) : zh(J(P, " ", "") + ";", r, n, d - 2), l);
          break;
        case 59:
          P += ";";
        default:
          if (xs(E = Fh(P, t, n, c, u, o, a, x, b = [], k = [], d), i), g === 123) if (u === 0) Gs(P, t, E, E, b, i, d, a, k);else switch (f === 99 && _e(P, 3) === 110 ? 100 : f) {
            case 100:
            case 108:
            case 109:
            case 115:
              Gs(e, E, E, r && xs(Fh(e, E, E, 0, 0, o, a, x, o, b = [], d), k), o, k, d, a, r ? b : k);
              break;
            default:
              Gs(P, E, E, E, [""], k, 0, a, k);
          }
      }
      c = u = y = 0, m = v = 1, x = P = "", d = s;
      break;
    case 58:
      d = 1 + Ft(P), y = w;
    default:
      if (m < 1) {
        if (g == 123) --m;else if (g == 125 && m++ == 0 && ME() == 125) continue;
      }
      switch (P += Cl(g), g * m) {
        case 38:
          v = u > 0 ? 1 : (P += "\f", -1);
          break;
        case 44:
          a[c++] = (Ft(P) - 1) * v, v = 1;
          break;
        case 64:
          Kt() === 45 && (P += Ks(ct())), f = Kt(), u = d = Ft(x = P += zE(Ws())), g++;
          break;
        case 45:
          w === 45 && Ft(P) == 2 && (m = 0);
      }
  }
  return i;
}
function Fh(e, t, n, r, o, i, s, a, l, c, u) {
  for (var d = o - 1, f = o === 0 ? i : [""], y = Of(f), w = 0, m = 0, S = 0; w < r; ++w) for (var v = 0, g = bi(e, d + 1, d = OE(m = s[w])), x = e; v < y; ++v) (x = w1(m > 0 ? f[v] + " " + g : J(g, /&\f/g, f[v]))) && (l[S++] = x);
  return El(e, t, n, o === 0 ? Nf : a, l, c, u);
}
function VE(e, t, n) {
  return El(e, t, n, v1, Cl(LE()), bi(e, 2, -2), 0);
}
function zh(e, t, n, r) {
  return El(e, t, n, Rf, bi(e, 0, r), bi(e, r + 1, -1), r);
}
function to(e, t) {
  for (var n = "", r = Of(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function HE(e, t, n, r) {
  switch (e.type) {
    case RE:
      if (e.children.length) break;
    case NE:
    case Rf:
      return e.return = e.return || e.value;
    case v1:
      return "";
    case y1:
      return e.return = e.value + "{" + to(e.children, r) + "}";
    case Nf:
      e.value = e.props.join(",");
  }
  return Ft(n = to(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function UE(e) {
  var t = Of(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function WE(e) {
  return function (t) {
    t.root || (t = t.return) && e(t);
  };
}
var KE = function (t, n, r) {
    for (var o = 0, i = 0; o = i, i = Kt(), o === 38 && i === 12 && (n[r] = 1), !Ei(i);) ct();
    return Wi(t, tt);
  },
  GE = function (t, n) {
    var r = -1,
      o = 44;
    do switch (Ei(o)) {
      case 0:
        o === 38 && Kt() === 12 && (n[r] = 1), t[r] += KE(tt - 1, n, r);
        break;
      case 2:
        t[r] += Ks(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Kt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Cl(o);
    } while (o = ct());
    return t;
  },
  XE = function (t, n) {
    return C1(GE(S1(t), n));
  },
  Bh = new WeakMap(),
  YE = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";) if (r = r.parent, !r) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Bh.get(r)) && !o) {
        Bh.set(t, !0);
        for (var i = [], s = XE(n, i), a = r.props, l = 0, c = 0; l < s.length; l++) for (var u = 0; u < a.length; u++, c++) t.props[c] = i[l] ? s[l].replace(/&\f/g, a[u]) : a[u] + " " + s[l];
      }
    }
  },
  QE = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
function b1(e, t) {
  switch (_E(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Ea + e + Fe + e + e;
    case 6828:
    case 4268:
      return Z + e + Fe + e + e;
    case 6165:
      return Z + e + Fe + "flex-" + e + e;
    case 5187:
      return Z + e + J(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + Fe + "flex-$1$2") + e;
    case 5443:
      return Z + e + Fe + "flex-item-" + J(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + Fe + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + Fe + J(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + Fe + J(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + J(e, "-grow", "") + Z + e + Fe + J(e, "grow", "positive") + e;
    case 4554:
      return Z + J(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return J(J(J(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return J(J(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + Fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ft(e) - 1 - t > 6) switch (_e(e, t + 1)) {
        case 109:
          if (_e(e, t + 4) !== 45) break;
        case 102:
          return J(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + Ea + (_e(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Hu(e, "stretch") ? b1(J(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (_e(e, t + 1) !== 115) break;
    case 6444:
      switch (_e(e, Ft(e) - 3 - (~Hu(e, "!important") && 10))) {
        case 107:
          return J(e, ":", ":" + Z) + e;
        case 101:
          return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + Fe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, t + 11)) {
        case 114:
          return Z + e + Fe + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + Fe + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + Fe + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + Fe + e + e;
  }
  return e;
}
var qE = function (t, n, r, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case Rf:
        t.return = b1(t.value, t.length);
        break;
      case y1:
        return to([Io(t, {
          value: J(t.value, "@", "@" + Z)
        })], o);
      case Nf:
        if (t.length) return IE(t.props, function (i) {
          switch (jE(i, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return to([Io(t, {
                props: [J(i, /:(read-\w+)/, ":" + Ea + "$1")]
              })], o);
            case "::placeholder":
              return to([Io(t, {
                props: [J(i, /:(plac\w+)/, ":" + Z + "input-$1")]
              }), Io(t, {
                props: [J(i, /:(plac\w+)/, ":" + Ea + "$1")]
              }), Io(t, {
                props: [J(i, /:(plac\w+)/, Fe + "input-$1")]
              })], o);
          }
          return "";
        });
    }
  },
  ZE = [qE],
  JE = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var S = m.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || ZE,
      i = {},
      s,
      a = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (m) {
      for (var S = m.getAttribute("data-emotion").split(" "), v = 1; v < S.length; v++) i[S[v]] = !0;
      a.push(m);
    });
    var l,
      c = [YE, QE];
    {
      var u,
        d = [HE, WE(function (m) {
          u.insert(m);
        })],
        f = UE(c.concat(o, d)),
        y = function (S) {
          return to(BE(S), f);
        };
      l = function (S, v, g, x) {
        u = g, y(S ? S + "{" + v.styles + "}" : v.styles), x && (w.inserted[v.name] = !0);
      };
    }
    var w = {
      key: n,
      sheet: new TE({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l
    };
    return w.sheet.hydrate(a), w;
  },
  ek = !0;
function tk(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function (o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var E1 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || ek === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
  },
  nk = function (t, n, r) {
    E1(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next; while (i !== void 0);
    }
  };
function rk(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ok = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  ik = !1,
  sk = /[A-Z]|^ms/g,
  ak = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  k1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Vh = function (t) {
    return t != null && typeof t != "boolean";
  },
  kc = g1(function (e) {
    return k1(e) ? e : e.replace(sk, "-$&").toLowerCase();
  }),
  Hh = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string") return n.replace(ak, function (r, o, i) {
          return zt = {
            name: o,
            styles: i,
            next: zt
          }, o;
        });
    }
    return ok[t] !== 1 && !k1(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
  },
  lk = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ki(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object":
      {
        var o = n;
        if (o.anim === 1) return zt = {
          name: o.name,
          styles: o.styles,
          next: zt
        }, o.name;
        var i = n;
        if (i.styles !== void 0) {
          var s = i.next;
          if (s !== void 0) for (; s !== void 0;) zt = {
            name: s.name,
            styles: s.styles,
            next: zt
          }, s = s.next;
          var a = i.styles + ";";
          return a;
        }
        return ck(e, t, n);
      }
    case "function":
      {
        if (e !== void 0) {
          var l = zt,
            c = n(e);
          return zt = l, ki(e, t, c);
        }
        break;
      }
  }
  var u = n;
  if (t == null) return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function ck(e, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += ki(e, t, n[o]) + ";";else for (var i in n) {
    var s = n[i];
    if (typeof s != "object") {
      var a = s;
      t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Vh(a) && (r += kc(i) + ":" + Hh(i, a) + ";");
    } else {
      if (i === "NO_COMPONENT_SELECTOR" && ik) throw new Error(lk);
      if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var l = 0; l < s.length; l++) Vh(s[l]) && (r += kc(i) + ":" + Hh(i, s[l]) + ";");else {
        var c = ki(e, t, s);
        switch (i) {
          case "animation":
          case "animationName":
            {
              r += kc(i) + ":" + c + ";";
              break;
            }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  }
  return r;
}
var Uh = /label:\s*([^\s;{]+)\s*(;|$)/g,
  zt;
function uk(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
  var r = !0,
    o = "";
  zt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) r = !1, o += ki(n, t, i);else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++) if (o += ki(n, t, e[a]), r) {
    var l = i;
    o += l[a];
  }
  Uh.lastIndex = 0;
  for (var c = "", u; (u = Uh.exec(o)) !== null;) c += "-" + u[1];
  var d = rk(o) + c;
  return {
    name: d,
    styles: o,
    next: zt
  };
}
var dk = function (t) {
    return t();
  },
  fk = $c.useInsertionEffect ? $c.useInsertionEffect : !1,
  pk = fk || dk,
  P1 = p.createContext(typeof HTMLElement < "u" ? JE({
    key: "css"
  }) : null);
P1.Provider;
var hk = function (t) {
    return p.forwardRef(function (n, r) {
      var o = p.useContext(P1);
      return t(n, o, r);
    });
  },
  mk = p.createContext({}),
  gk = bE,
  vk = function (t) {
    return t !== "theme";
  },
  Wh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? gk : vk;
  },
  Kh = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o = t.__emotion_forwardProp && i ? function (s) {
        return t.__emotion_forwardProp(s) && i(s);
      } : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  yk = !1,
  wk = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return E1(n, r, o), pk(function () {
      return nk(n, r, o);
    }), null;
  },
  xk = function e(t, n) {
    var r = t.__emotion_real === t,
      o = r && t.__emotion_base || t,
      i,
      s;
    n !== void 0 && (i = n.label, s = n.target);
    var a = Kh(t, n, r),
      l = a || Wh(o),
      c = !l("as");
    return function () {
      var u = arguments,
        d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (i !== void 0 && d.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0) d.push.apply(d, u);else {
        d.push(u[0][0]);
        for (var f = u.length, y = 1; y < f; y++) d.push(u[y], u[0][y]);
      }
      var w = hk(function (m, S, v) {
        var g = c && m.as || o,
          x = "",
          b = [],
          k = m;
        if (m.theme == null) {
          k = {};
          for (var E in m) k[E] = m[E];
          k.theme = p.useContext(mk);
        }
        typeof m.className == "string" ? x = tk(S.registered, b, m.className) : m.className != null && (x = m.className + " ");
        var P = uk(d.concat(b), S.registered, k);
        x += S.key + "-" + P.name, s !== void 0 && (x += " " + s);
        var A = c && a === void 0 ? Wh(g) : l,
          L = {};
        for (var C in m) c && C === "as" || A(C) && (L[C] = m[C]);
        return L.className = x, v && (L.ref = v), p.createElement(p.Fragment, null, p.createElement(wk, {
          cache: S,
          serialized: P,
          isStringTag: typeof g == "string"
        }), p.createElement(g, L));
      });
      return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = d, w.__emotion_forwardProp = a, Object.defineProperty(w, "toString", {
        value: function () {
          return s === void 0 && yk ? "NO_COMPONENT_SELECTOR" : "." + s;
        }
      }), w.withComponent = function (m, S) {
        return e(m, Vu({}, n, S, {
          shouldForwardProp: Kh(w, S, !0)
        })).apply(void 0, d);
      }, w;
    };
  },
  Sk = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
  Wu = xk.bind();
Sk.forEach(function (e) {
  Wu[e] = Wu(e);
}); /**
    * @mui/styled-engine v6.1.2
    *
    * @license MIT
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    */
function Ck(e, t) {
  return Wu(e, t);
}
const bk = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  },
  Ek = e => {
    const t = Object.keys(e).map(n => ({
      key: n,
      val: e[n]
    })) || [];
    return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
      ...n,
      [r.key]: r.val
    }), {});
  };
function kk(e) {
  const {
      values: t = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      },
      unit: n = "px",
      step: r = 5,
      ...o
    } = e,
    i = Ek(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function c(f, y) {
    const w = s.indexOf(y);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(w !== -1 && typeof t[s[w]] == "number" ? t[s[w]] : y) - r / 100}${n})`;
  }
  function u(f) {
    return s.indexOf(f) + 1 < s.length ? c(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const y = s.indexOf(f);
    return y === 0 ? a(s[1]) : y === s.length - 1 ? l(s[y]) : c(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: c,
    only: u,
    not: d,
    unit: n,
    ...o
  };
}
const Pk = {
  borderRadius: 4
};
function T1(e = 8, t = Pf({
  spacing: e
})) {
  if (e.mui) return e;
  const n = (...r) => (r.length === 0 ? [1] : r).map(i => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function Tk(e, t) {
  const n = this;
  if (n.vars) {
    if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function") return {};
    let r = n.getColorSchemeSelector(e);
    return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), {
      [r]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function N1(e = {}, ...t) {
  const {
      breakpoints: n = {},
      palette: r = {},
      spacing: o,
      shape: i = {},
      ...s
    } = e,
    a = kk(n),
    l = T1(o);
  let c = lt({
    breakpoints: a,
    direction: "ltr",
    components: {},
    palette: {
      mode: "light",
      ...r
    },
    spacing: l,
    shape: {
      ...Pk,
      ...i
    }
  }, s);
  return c = j3(c), c.applyStyles = Tk, c = t.reduce((u, d) => lt(u, d), c), c.unstable_sxConfig = {
    ...Sl,
    ...s?.unstable_sxConfig
  }, c.unstable_sx = function (d) {
    return Ui({
      sx: d,
      theme: this
    });
  }, c;
}
const Nk = N1();
function Pc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ku(e, t, n) {
  return Ak(t) ? n : t[e] || t;
}
const Ss = Symbol("mui.processed_props");
function Cs(e, t, n) {
  if (Ss in e) return e[Ss];
  const r = {
    ...e,
    theme: Ku(t, e.theme, n)
  };
  return e[Ss] = r, r[Ss] = r, r;
}
function Rk(e) {
  return e ? (t, n) => n[e] : null;
}
function Xs(e, t) {
  const n = typeof e == "function" ? e(t) : e;
  if (Array.isArray(n)) return n.flatMap(r => Xs(r, t));
  if (Array.isArray(n?.variants)) {
    const {
      variants: r,
      ...o
    } = n;
    let i = o,
      s;
    e: for (let a = 0; a < r.length; a += 1) {
      const l = r[a];
      if (typeof l.props == "function") {
        if (s ??= {
          ...t,
          ...t.ownerState,
          ownerState: t.ownerState
        }, !l.props(s)) continue;
      } else for (const c in l.props) if (t[c] !== l.props[c] && t.ownerState?.[c] !== l.props[c]) continue e;
      Array.isArray(i) || (i = [i]), typeof l.style == "function" ? (s ??= {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }, i.push(l.style(s))) : i.push(l.style);
    }
    return i;
  }
  return n;
}
function Ok(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Nk,
      rootShouldForwardProp: r = Pc,
      slotShouldForwardProp: o = Pc
    } = e,
    i = a => Ui(Cs(a, t, n));
  return i.__mui_systemSx = !0, (a, l = {}) => {
    bk(a, E => E.filter(P => !P?.__mui_systemSx));
    const {
        name: c,
        slot: u,
        skipVariantsResolver: d,
        skipSx: f,
        overridesResolver: y = Rk(jk(u)),
        ...w
      } = l,
      m = d !== void 0 ? d : u && u !== "Root" && u !== "root" || !1,
      S = f || !1;
    let v,
      g = Pc;
    u === "Root" || u === "root" ? g = r : u ? g = o : _k(a) && (g = void 0);
    const x = Ck(a, {
        shouldForwardProp: g,
        label: v,
        ...w
      }),
      b = E => typeof E == "function" && E.__emotion_real !== E || en(E) ? P => Xs(E, Cs(P, t, n)) : E,
      k = (E, ...P) => {
        let A = b(E);
        const L = P ? P.map(b) : [];
        c && y && L.push(I => {
          const z = Ku(t, I.theme, n);
          if (!z.components || !z.components[c] || !z.components[c].styleOverrides) return null;
          const D = z.components[c].styleOverrides,
            T = {},
            R = Cs(I, t, n);
          for (const F in D) T[F] = Xs(D[F], R);
          return y(I, T);
        }), c && !m && L.push(I => {
          const D = Ku(t, I.theme, n)?.components?.[c]?.variants;
          return D ? Xs({
            variants: D
          }, Cs(I, t, n)) : null;
        }), S || L.push(i);
        const C = L.length - P.length;
        if (Array.isArray(E) && C > 0) {
          const I = new Array(C).fill("");
          A = [...E, ...I], A.raw = [...E.raw, ...I];
        }
        const j = x(A, ...L);
        return a.muiName && (j.muiName = a.muiName), j;
      };
    return x.withConfig && (k.withConfig = x.withConfig), k;
  };
}
function Ak(e) {
  for (const t in e) return !1;
  return !0;
}
function _k(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function jk(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Af(e, t = 0, n = 1) {
  return R3(e, t, n);
}
function Ik(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map(r => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $n(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return $n(Ik(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n)) throw new Error(pr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o)) throw new Error(pr(10, o));
  } else r = r.split(",");
  return r = r.map(i => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const Lk = e => {
    const t = $n(e);
    return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
  },
  Ho = (e, t) => {
    try {
      return Lk(e);
    } catch {
      return e;
    }
  };
function kl(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function R1(e) {
  e = $n(e);
  const {
      values: t
    } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), kl({
    type: a,
    values: l
  });
}
function Gu(e) {
  e = $n(e);
  let t = e.type === "hsl" || e.type === "hsla" ? $n(R1(e)).values : e.values;
  return t = t.map(n => (e.type !== "color" && (n /= 255), n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function Mk(e, t) {
  const n = Gu(e),
    r = Gu(t);
  return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function Dk(e, t) {
  return e = $n(e), t = Af(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, kl(e);
}
function bs(e, t, n) {
  try {
    return Dk(e, t);
  } catch {
    return e;
  }
}
function _f(e, t) {
  if (e = $n(e), t = Af(t), e.type.includes("hsl")) e.values[2] *= 1 - t;else if (e.type.includes("rgb") || e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return kl(e);
}
function re(e, t, n) {
  try {
    return _f(e, t);
  } catch {
    return e;
  }
}
function jf(e, t) {
  if (e = $n(e), t = Af(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;else if (e.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;else if (e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return kl(e);
}
function oe(e, t, n) {
  try {
    return jf(e, t);
  } catch {
    return e;
  }
}
function $k(e, t = .15) {
  return Gu(e) > .5 ? _f(e, t) : jf(e, t);
}
function Es(e, t, n) {
  try {
    return $k(e, t);
  } catch {
    return e;
  }
}
const Fk = p.createContext(void 0);
function zk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps ? Bu(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Bu(o, r) : r;
}
function Bk({
  props: e,
  name: t
}) {
  const n = p.useContext(Fk);
  return zk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
function Vk(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Gh = (e, t, n, r = []) => {
    let o = e;
    t.forEach((i, s) => {
      s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
    });
  },
  Hk = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([a, l]) => {
        (!n || n && !n([...i, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s) : t([...i, a], l, s));
      });
    }
    r(e);
  },
  Uk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some(r => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Tc(e, t) {
  const {
      prefix: n,
      shouldSkipGeneratingVar: r
    } = t || {},
    o = {},
    i = {},
    s = {};
  return Hk(e, (a, l, c) => {
    if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
      const u = `--${n ? `${n}-` : ""}${a.join("-")}`,
        d = Uk(a, l);
      Object.assign(o, {
        [u]: d
      }), Gh(i, a, `var(${u})`, c), Gh(s, a, `var(${u}, ${d})`, c);
    }
  }, a => a[0] === "vars"), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Wk(e, t = {}) {
  const {
      getSelector: n = S,
      disableCssColorScheme: r,
      colorSchemeSelector: o
    } = t,
    {
      colorSchemes: i = {},
      components: s,
      defaultColorScheme: a = "light",
      ...l
    } = e,
    {
      vars: c,
      css: u,
      varsWithDefaults: d
    } = Tc(l, t);
  let f = d;
  const y = {},
    {
      [a]: w,
      ...m
    } = i;
  if (Object.entries(m || {}).forEach(([x, b]) => {
    const {
      vars: k,
      css: E,
      varsWithDefaults: P
    } = Tc(b, t);
    f = lt(f, P), y[x] = {
      css: E,
      vars: k
    };
  }), w) {
    const {
      css: x,
      vars: b,
      varsWithDefaults: k
    } = Tc(w, t);
    f = lt(f, k), y[a] = {
      css: x,
      vars: b
    };
  }
  function S(x, b) {
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), x) {
      if (k === "media") return e.defaultColorScheme === x ? ":root" : {
        [`@media (prefers-color-scheme: ${i[x]?.palette?.mode || x})`]: {
          ":root": b
        }
      };
      if (k) return e.defaultColorScheme === x ? `:root, ${k.replace("%s", String(x))}` : k.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let x = {
        ...c
      };
      return Object.entries(y).forEach(([, {
        vars: b
      }]) => {
        x = lt(x, b);
      }), x;
    },
    generateStyleSheets: () => {
      const x = [],
        b = e.defaultColorScheme || "light";
      function k(A, L) {
        Object.keys(L).length && x.push(typeof A == "string" ? {
          [A]: {
            ...L
          }
        } : A);
      }
      k(n(void 0, {
        ...u
      }), u);
      const {
        [b]: E,
        ...P
      } = y;
      if (E) {
        const {
            css: A
          } = E,
          L = i[b]?.palette?.mode,
          C = !r && L ? {
            colorScheme: L,
            ...A
          } : {
            ...A
          };
        k(n(b, {
          ...C
        }), C);
      }
      return Object.entries(P).forEach(([A, {
        css: L
      }]) => {
        const C = i[A]?.palette?.mode,
          j = !r && C ? {
            colorScheme: C,
            ...L
          } : {
            ...L
          };
        k(n(A, {
          ...j
        }), j);
      }), x;
    }
  };
}
function Kk(e) {
  return function (n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const Pi = {
    black: "#000",
    white: "#fff"
  },
  Gk = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  },
  Tr = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  },
  Nr = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  },
  Lo = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  },
  Rr = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  },
  Or = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  },
  Ar = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  },
  Xh = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: Pi.white,
      default: Pi.white
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: .04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: .08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: .38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: .12,
      activatedOpacity: .12
    }
  },
  Nc = {
    text: {
      primary: Pi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Pi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: .08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: .16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: .38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: .12,
      activatedOpacity: .24
    }
  };
function Yh(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = jf(e.main, o) : t === "dark" && (e.dark = _f(e.main, i)));
}
function Xk(e = "light") {
  return e === "dark" ? {
    main: Rr[200],
    light: Rr[50],
    dark: Rr[400]
  } : {
    main: Rr[700],
    light: Rr[400],
    dark: Rr[800]
  };
}
function Yk(e = "light") {
  return e === "dark" ? {
    main: Tr[200],
    light: Tr[50],
    dark: Tr[400]
  } : {
    main: Tr[500],
    light: Tr[300],
    dark: Tr[700]
  };
}
function Qk(e = "light") {
  return e === "dark" ? {
    main: Nr[500],
    light: Nr[300],
    dark: Nr[700]
  } : {
    main: Nr[700],
    light: Nr[400],
    dark: Nr[800]
  };
}
function qk(e = "light") {
  return e === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: Or[700],
    light: Or[500],
    dark: Or[900]
  };
}
function Zk(e = "light") {
  return e === "dark" ? {
    main: Ar[400],
    light: Ar[300],
    dark: Ar[700]
  } : {
    main: Ar[800],
    light: Ar[500],
    dark: Ar[900]
  };
}
function Jk(e = "light") {
  return e === "dark" ? {
    main: Lo[400],
    light: Lo[300],
    dark: Lo[700]
  } : {
    main: "#ed6c02",
    light: Lo[500],
    dark: Lo[900]
  };
}
function If(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = .2,
      ...o
    } = e,
    i = e.primary || Xk(t),
    s = e.secondary || Yk(t),
    a = e.error || Qk(t),
    l = e.info || qk(t),
    c = e.success || Zk(t),
    u = e.warning || Jk(t);
  function d(m) {
    return Mk(m, Nc.text.primary) >= n ? Nc.text.primary : Xh.text.primary;
  }
  const f = ({
      color: m,
      name: S,
      mainShade: v = 500,
      lightShade: g = 300,
      darkShade: x = 700
    }) => {
      if (m = {
        ...m
      }, !m.main && m[v] && (m.main = m[v]), !m.hasOwnProperty("main")) throw new Error(pr(11, S ? ` (${S})` : "", v));
      if (typeof m.main != "string") throw new Error(pr(12, S ? ` (${S})` : "", JSON.stringify(m.main)));
      return Yh(m, "light", g, r), Yh(m, "dark", x, r), m.contrastText || (m.contrastText = d(m.main)), m;
    },
    y = {
      dark: Nc,
      light: Xh
    };
  return lt({
    common: {
      ...Pi
    },
    mode: t,
    primary: f({
      color: i,
      name: "primary"
    }),
    secondary: f({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: f({
      color: a,
      name: "error"
    }),
    warning: f({
      color: u,
      name: "warning"
    }),
    info: f({
      color: l,
      name: "info"
    }),
    success: f({
      color: c,
      name: "success"
    }),
    grey: Gk,
    contrastThreshold: n,
    getContrastText: d,
    augmentColor: f,
    tonalOffset: r,
    ...y[t]
  }, o);
}
function eP(e) {
  const t = {};
  return Object.entries(e).forEach(r => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function tP(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function nP(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Qh = {
    textTransform: "uppercase"
  },
  qh = '"Roboto", "Helvetica", "Arial", sans-serif';
function rP(e, t) {
  const {
      fontFamily: n = qh,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: c,
      pxToRem: u,
      ...d
    } = typeof t == "function" ? t(e) : t,
    f = r / 14,
    y = u || (S => `${S / l * f}rem`),
    w = (S, v, g, x, b) => ({
      fontFamily: n,
      fontWeight: S,
      fontSize: y(v),
      lineHeight: g,
      ...(n === qh ? {
        letterSpacing: `${nP(x / v)}em`
      } : {}),
      ...b,
      ...c
    }),
    m = {
      h1: w(o, 96, 1.167, -1.5),
      h2: w(o, 60, 1.2, -.5),
      h3: w(i, 48, 1.167, 0),
      h4: w(i, 34, 1.235, .25),
      h5: w(i, 24, 1.334, 0),
      h6: w(s, 20, 1.6, .15),
      subtitle1: w(i, 16, 1.75, .15),
      subtitle2: w(s, 14, 1.57, .1),
      body1: w(i, 16, 1.5, .15),
      body2: w(i, 14, 1.43, .15),
      button: w(s, 14, 1.75, .4, Qh),
      caption: w(i, 12, 1.66, .4),
      overline: w(i, 12, 2.66, 1, Qh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
  return lt({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...m
  }, d, {
    clone: !1
  });
}
const oP = .2,
  iP = .14,
  sP = .12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${oP})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${iP})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${sP})`].join(",");
}
const aP = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
  lP = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  },
  cP = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
function Zh(e) {
  return `${Math.round(e)}ms`;
}
function uP(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3);
}
function dP(e) {
  const t = {
      ...lP,
      ...e.easing
    },
    n = {
      ...cP,
      ...e.duration
    };
  return {
    getAutoHeightDuration: uP,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...c
      } = i;
      return (Array.isArray(o) ? o : [o]).map(u => `${u} ${typeof s == "string" ? s : Zh(s)} ${a} ${typeof l == "string" ? l : Zh(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const fP = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Xu(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...c
  } = e;
  if (e.vars) throw new Error(pr(20));
  const u = If(i),
    d = N1(e);
  let f = lt(d, {
    mixins: tP(d.breakpoints, r),
    palette: u,
    shadows: aP.slice(),
    typography: rP(u, a),
    transitions: dP(s),
    zIndex: {
      ...fP
    }
  });
  return f = lt(f, c), f = t.reduce((y, w) => lt(y, w), f), f.unstable_sxConfig = {
    ...Sl,
    ...c?.unstable_sxConfig
  }, f.unstable_sx = function (w) {
    return Ui({
      sx: w,
      theme: this
    });
  }, f;
}
function pP(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const hP = [...Array(25)].map((e, t) => {
  if (t === 0) return "none";
  const n = pP(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function O1(e) {
  return {
    inputPlaceholder: e === "dark" ? .5 : .42,
    inputUnderline: e === "dark" ? .7 : .42,
    switchTrackDisabled: e === "dark" ? .2 : .12,
    switchTrack: e === "dark" ? .3 : .38
  };
}
function A1(e) {
  return e === "dark" ? hP : [];
}
function mP(e) {
  const {
      palette: t = {
        mode: "light"
      },
      opacity: n,
      overlays: r,
      ...o
    } = e,
    i = If(t);
  return {
    palette: i,
    opacity: {
      ...O1(i.mode),
      ...n
    },
    overlays: r || A1(i.mode),
    ...o
  };
}
function gP(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const vP = e => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`],
  yP = e => (t, n) => {
    const r = e.rootSelector || ":root",
      o = e.colorSchemeSelector;
    let i = o;
    if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
      if (t === "dark") {
        const s = {};
        return vP(e.cssVarPrefix).forEach(a => {
          s[a] = n[a], delete n[a];
        }), i === "media" ? {
          [r]: n,
          "@media (prefers-color-scheme: dark)": {
            [r]: s
          }
        } : i ? {
          [i.replace("%s", t)]: s,
          [`${r}, ${i.replace("%s", t)}`]: n
        } : {
          [r]: {
            ...n,
            ...s
          }
        };
      }
      if (i && i !== "media") return `${r}, ${i.replace("%s", String(t))}`;
    } else if (t) {
      if (i === "media") return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
      if (i) return i.replace("%s", String(t));
    }
    return r;
  };
function wP(e) {
  return en(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function xP(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !wP(a) || s.startsWith("unstable_") ? delete r[s] : en(a) && (r[s] = {
        ...a
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function SP(e, t) {
  t.forEach(n => {
    e[n] || (e[n] = {});
  });
}
function _(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Uo(e) {
  return !e || !e.startsWith("hsl") ? e : R1(e);
}
function qt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ho(Uo(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function CP(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Mt = e => {
    try {
      return e();
    } catch {}
  },
  bP = (e = "mui") => Vk(e);
function Rc(e, t, n, r) {
  if (!t) return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = mP({
      ...t,
      palette: {
        mode: o,
        ...t?.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Xu({
    ...n,
    palette: {
      mode: o,
      ...t?.palette
    }
  });
  return e[r] = {
    ...t,
    palette: i,
    opacity: {
      ...O1(o),
      ...t?.opacity
    },
    overlays: t?.overlays || A1(o)
  }, s;
}
function EP(e = {}, ...t) {
  const {
      colorSchemes: n = {
        light: !0
      },
      defaultColorScheme: r,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = "mui",
      shouldSkipGeneratingVar: s = gP,
      colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
      rootSelector: l = ":root",
      ...c
    } = e,
    u = Object.keys(n)[0],
    d = r || (n.light && u !== "light" ? "light" : u),
    f = bP(i),
    {
      [d]: y,
      light: w,
      dark: m,
      ...S
    } = n,
    v = {
      ...S
    };
  let g = y;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (g = !0), !g) throw new Error(pr(21, d));
  const x = Rc(v, g, c, d);
  w && !v.light && Rc(v, w, void 0, "light"), m && !v.dark && Rc(v, m, void 0, "dark");
  let b = {
    defaultColorScheme: d,
    ...x,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: f,
    colorSchemes: v,
    font: {
      ...eP(x.typography),
      ...x.font
    },
    spacing: CP(c.spacing)
  };
  Object.keys(b.colorSchemes).forEach(L => {
    const C = b.colorSchemes[L].palette,
      j = I => {
        const z = I.split("-"),
          D = z[1],
          T = z[2];
        return f(I, C[D][T]);
      };
    if (C.mode === "light" && (_(C.common, "background", "#fff"), _(C.common, "onBackground", "#000")), C.mode === "dark" && (_(C.common, "background", "#000"), _(C.common, "onBackground", "#fff")), SP(C, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), C.mode === "light") {
      _(C.Alert, "errorColor", re(C.error.light, .6)), _(C.Alert, "infoColor", re(C.info.light, .6)), _(C.Alert, "successColor", re(C.success.light, .6)), _(C.Alert, "warningColor", re(C.warning.light, .6)), _(C.Alert, "errorFilledBg", j("palette-error-main")), _(C.Alert, "infoFilledBg", j("palette-info-main")), _(C.Alert, "successFilledBg", j("palette-success-main")), _(C.Alert, "warningFilledBg", j("palette-warning-main")), _(C.Alert, "errorFilledColor", Mt(() => C.getContrastText(C.error.main))), _(C.Alert, "infoFilledColor", Mt(() => C.getContrastText(C.info.main))), _(C.Alert, "successFilledColor", Mt(() => C.getContrastText(C.success.main))), _(C.Alert, "warningFilledColor", Mt(() => C.getContrastText(C.warning.main))), _(C.Alert, "errorStandardBg", oe(C.error.light, .9)), _(C.Alert, "infoStandardBg", oe(C.info.light, .9)), _(C.Alert, "successStandardBg", oe(C.success.light, .9)), _(C.Alert, "warningStandardBg", oe(C.warning.light, .9)), _(C.Alert, "errorIconColor", j("palette-error-main")), _(C.Alert, "infoIconColor", j("palette-info-main")), _(C.Alert, "successIconColor", j("palette-success-main")), _(C.Alert, "warningIconColor", j("palette-warning-main")), _(C.AppBar, "defaultBg", j("palette-grey-100")), _(C.Avatar, "defaultBg", j("palette-grey-400")), _(C.Button, "inheritContainedBg", j("palette-grey-300")), _(C.Button, "inheritContainedHoverBg", j("palette-grey-A100")), _(C.Chip, "defaultBorder", j("palette-grey-400")), _(C.Chip, "defaultAvatarColor", j("palette-grey-700")), _(C.Chip, "defaultIconColor", j("palette-grey-700")), _(C.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(C.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(C.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(C.LinearProgress, "primaryBg", oe(C.primary.main, .62)), _(C.LinearProgress, "secondaryBg", oe(C.secondary.main, .62)), _(C.LinearProgress, "errorBg", oe(C.error.main, .62)), _(C.LinearProgress, "infoBg", oe(C.info.main, .62)), _(C.LinearProgress, "successBg", oe(C.success.main, .62)), _(C.LinearProgress, "warningBg", oe(C.warning.main, .62)), _(C.Skeleton, "bg", `rgba(${j("palette-text-primaryChannel")} / 0.11)`), _(C.Slider, "primaryTrack", oe(C.primary.main, .62)), _(C.Slider, "secondaryTrack", oe(C.secondary.main, .62)), _(C.Slider, "errorTrack", oe(C.error.main, .62)), _(C.Slider, "infoTrack", oe(C.info.main, .62)), _(C.Slider, "successTrack", oe(C.success.main, .62)), _(C.Slider, "warningTrack", oe(C.warning.main, .62));
      const I = Es(C.background.default, .8);
      _(C.SnackbarContent, "bg", I), _(C.SnackbarContent, "color", Mt(() => C.getContrastText(I))), _(C.SpeedDialAction, "fabHoverBg", Es(C.background.paper, .15)), _(C.StepConnector, "border", j("palette-grey-400")), _(C.StepContent, "border", j("palette-grey-400")), _(C.Switch, "defaultColor", j("palette-common-white")), _(C.Switch, "defaultDisabledColor", j("palette-grey-100")), _(C.Switch, "primaryDisabledColor", oe(C.primary.main, .62)), _(C.Switch, "secondaryDisabledColor", oe(C.secondary.main, .62)), _(C.Switch, "errorDisabledColor", oe(C.error.main, .62)), _(C.Switch, "infoDisabledColor", oe(C.info.main, .62)), _(C.Switch, "successDisabledColor", oe(C.success.main, .62)), _(C.Switch, "warningDisabledColor", oe(C.warning.main, .62)), _(C.TableCell, "border", oe(bs(C.divider, 1), .88)), _(C.Tooltip, "bg", bs(C.grey[700], .92));
    }
    if (C.mode === "dark") {
      _(C.Alert, "errorColor", oe(C.error.light, .6)), _(C.Alert, "infoColor", oe(C.info.light, .6)), _(C.Alert, "successColor", oe(C.success.light, .6)), _(C.Alert, "warningColor", oe(C.warning.light, .6)), _(C.Alert, "errorFilledBg", j("palette-error-dark")), _(C.Alert, "infoFilledBg", j("palette-info-dark")), _(C.Alert, "successFilledBg", j("palette-success-dark")), _(C.Alert, "warningFilledBg", j("palette-warning-dark")), _(C.Alert, "errorFilledColor", Mt(() => C.getContrastText(C.error.dark))), _(C.Alert, "infoFilledColor", Mt(() => C.getContrastText(C.info.dark))), _(C.Alert, "successFilledColor", Mt(() => C.getContrastText(C.success.dark))), _(C.Alert, "warningFilledColor", Mt(() => C.getContrastText(C.warning.dark))), _(C.Alert, "errorStandardBg", re(C.error.light, .9)), _(C.Alert, "infoStandardBg", re(C.info.light, .9)), _(C.Alert, "successStandardBg", re(C.success.light, .9)), _(C.Alert, "warningStandardBg", re(C.warning.light, .9)), _(C.Alert, "errorIconColor", j("palette-error-main")), _(C.Alert, "infoIconColor", j("palette-info-main")), _(C.Alert, "successIconColor", j("palette-success-main")), _(C.Alert, "warningIconColor", j("palette-warning-main")), _(C.AppBar, "defaultBg", j("palette-grey-900")), _(C.AppBar, "darkBg", j("palette-background-paper")), _(C.AppBar, "darkColor", j("palette-text-primary")), _(C.Avatar, "defaultBg", j("palette-grey-600")), _(C.Button, "inheritContainedBg", j("palette-grey-800")), _(C.Button, "inheritContainedHoverBg", j("palette-grey-700")), _(C.Chip, "defaultBorder", j("palette-grey-700")), _(C.Chip, "defaultAvatarColor", j("palette-grey-300")), _(C.Chip, "defaultIconColor", j("palette-grey-300")), _(C.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(C.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(C.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(C.LinearProgress, "primaryBg", re(C.primary.main, .5)), _(C.LinearProgress, "secondaryBg", re(C.secondary.main, .5)), _(C.LinearProgress, "errorBg", re(C.error.main, .5)), _(C.LinearProgress, "infoBg", re(C.info.main, .5)), _(C.LinearProgress, "successBg", re(C.success.main, .5)), _(C.LinearProgress, "warningBg", re(C.warning.main, .5)), _(C.Skeleton, "bg", `rgba(${j("palette-text-primaryChannel")} / 0.13)`), _(C.Slider, "primaryTrack", re(C.primary.main, .5)), _(C.Slider, "secondaryTrack", re(C.secondary.main, .5)), _(C.Slider, "errorTrack", re(C.error.main, .5)), _(C.Slider, "infoTrack", re(C.info.main, .5)), _(C.Slider, "successTrack", re(C.success.main, .5)), _(C.Slider, "warningTrack", re(C.warning.main, .5));
      const I = Es(C.background.default, .98);
      _(C.SnackbarContent, "bg", I), _(C.SnackbarContent, "color", Mt(() => C.getContrastText(I))), _(C.SpeedDialAction, "fabHoverBg", Es(C.background.paper, .15)), _(C.StepConnector, "border", j("palette-grey-600")), _(C.StepContent, "border", j("palette-grey-600")), _(C.Switch, "defaultColor", j("palette-grey-300")), _(C.Switch, "defaultDisabledColor", j("palette-grey-600")), _(C.Switch, "primaryDisabledColor", re(C.primary.main, .55)), _(C.Switch, "secondaryDisabledColor", re(C.secondary.main, .55)), _(C.Switch, "errorDisabledColor", re(C.error.main, .55)), _(C.Switch, "infoDisabledColor", re(C.info.main, .55)), _(C.Switch, "successDisabledColor", re(C.success.main, .55)), _(C.Switch, "warningDisabledColor", re(C.warning.main, .55)), _(C.TableCell, "border", re(bs(C.divider, 1), .68)), _(C.Tooltip, "bg", bs(C.grey[700], .92));
    }
    qt(C.background, "default"), qt(C.background, "paper"), qt(C.common, "background"), qt(C.common, "onBackground"), qt(C, "divider"), Object.keys(C).forEach(I => {
      const z = C[I];
      z && typeof z == "object" && (z.main && _(C[I], "mainChannel", Ho(Uo(z.main))), z.light && _(C[I], "lightChannel", Ho(Uo(z.light))), z.dark && _(C[I], "darkChannel", Ho(Uo(z.dark))), z.contrastText && _(C[I], "contrastTextChannel", Ho(Uo(z.contrastText))), I === "text" && (qt(C[I], "primary"), qt(C[I], "secondary")), I === "action" && (z.active && qt(C[I], "active"), z.selected && qt(C[I], "selected")));
    });
  }), b = t.reduce((L, C) => lt(L, C), b);
  const k = {
      prefix: i,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: s,
      getSelector: yP(b)
    },
    {
      vars: E,
      generateThemeVars: P,
      generateStyleSheets: A
    } = Wk(b, k);
  return b.vars = E, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([L, C]) => {
    b[L] = C;
  }), b.generateThemeVars = P, b.generateStyleSheets = A, b.generateSpacing = function () {
    return T1(c.spacing, Pf(this));
  }, b.getColorSchemeSelector = Kk(a), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = s, b.unstable_sxConfig = {
    ...Sl,
    ...c?.unstable_sxConfig
  }, b.unstable_sx = function (C) {
    return Ui({
      sx: C,
      theme: this
    });
  }, b.toRuntimeSource = xP, b;
}
function Jh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...(n !== !0 && n),
    palette: If({
      ...(n === !0 ? {} : n.palette),
      mode: t
    })
  });
}
function kP(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: o = n ? void 0 : {
        light: !0
      },
      defaultColorScheme: i = n?.mode,
      ...s
    } = e,
    a = i || "light",
    l = o?.[a],
    c = {
      ...o,
      ...(n ? {
        [a]: {
          ...(typeof l != "boolean" && l),
          palette: n
        }
      } : void 0)
    };
  if (r === !1) {
    if (!("colorSchemes" in e)) return Xu(e, ...t);
    let u = n;
    "palette" in e || c[a] && (c[a] !== !0 ? u = c[a].palette : a === "dark" && (u = {
      mode: "dark"
    }));
    const d = Xu({
      ...e,
      palette: u
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = c, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...(c.light !== !0 && c.light),
      palette: d.palette
    }, Jh(d, "dark", c.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...(c.dark !== !0 && c.dark),
      palette: d.palette
    }, Jh(d, "light", c.light)), d;
  }
  return !n && !("light" in c) && a === "light" && (c.light = !0), EP({
    ...s,
    colorSchemes: c,
    defaultColorScheme: a,
    ...(typeof r != "boolean" && r)
  }, ...t);
}
const PP = kP(),
  TP = "$$material";
function NP(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const RP = e => NP(e) && e !== "classes",
  OP = Ok({
    themeId: TP,
    defaultTheme: PP,
    rootShouldForwardProp: RP
  }),
  em = {
    theme: void 0
  };
function AP(e) {
  let t, n;
  return r => {
    let o = t;
    return (o === void 0 || r.theme !== n) && (em.theme = r.theme, o = e(em), t = o, n = r.theme), o;
  };
}
function _P(e) {
  return Bk(e);
}
function jP(e) {
  return h1("MuiSvgIcon", e);
}
N3("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const IP = e => {
    const {
        color: t,
        fontSize: n,
        classes: r
      } = e,
      o = {
        root: ["root", t !== "inherit" && `color${fo(t)}`, `fontSize${fo(n)}`]
      };
    return E3(o, jP, r);
  },
  LP = OP("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.color !== "inherit" && t[`color${fo(n.color)}`], t[`fontSize${fo(n.fontSize)}`]];
    }
  })(AP(({
    theme: e
  }) => ({
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: e.transitions?.create?.("fill", {
      duration: (e.vars ?? e).transitions?.duration?.shorter
    }),
    variants: [{
      props: t => !t.hasSvgAsChild,
      style: {
        fill: "currentColor"
      }
    }, {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    }, {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    }, {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    }, {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    }, ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })), {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    }, {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }]
  }))),
  ka = p.forwardRef(function (t, n) {
    const r = _P({
        props: t,
        name: "MuiSvgIcon"
      }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: c,
        inheritViewBox: u = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
        ...y
      } = r,
      w = p.isValidElement(o) && o.type === "svg",
      m = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: f,
        hasSvgAsChild: w
      },
      S = {};
    u || (S.viewBox = f);
    const v = IP(m);
    return h.jsxs(LP, {
      as: a,
      className: rv(v.root, i),
      focusable: "false",
      color: c,
      "aria-hidden": d ? void 0 : !0,
      role: d ? "img" : void 0,
      ref: n,
      ...S,
      ...y,
      ...(w && o.props),
      ownerState: m,
      children: [w ? o.props.children : o, d ? h.jsx("title", {
        children: d
      }) : null]
    });
  });
ka && (ka.muiName = "SvgIcon");
function Ki(e, t) {
  function n(r, o) {
    return h.jsx(ka, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = ka.muiName, p.memo(p.forwardRef(n));
}
const MP = Ki(h.jsx("path", {
    d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"
  }), "DescriptionOutlined"),
  DP = Ki(h.jsx("path", {
    d: "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
  }), "LaptopMacOutlined"),
  Oc = Ki(h.jsx("path", {
    d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"
  }), "LaptopOutlined"),
  $P = Ki(h.jsx("path", {
    d: "M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z"
  }), "PhoneIphoneOutlined"),
  FP = Ki(h.jsx("path", {
    d: "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z"
  }), "SmartphoneOutlined");
var zP = p.createContext(void 0);
function Pl(e) {
  const t = p.useContext(zP);
  return e || t || "ltr";
}
const BP = ["top", "right", "bottom", "left"],
  Fn = Math.min,
  ot = Math.max,
  Pa = Math.round,
  ks = Math.floor,
  zn = e => ({
    x: e,
    y: e
  }),
  VP = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  HP = {
    start: "end",
    end: "start"
  };
function Yu(e, t, n) {
  return ot(e, Fn(t, n));
}
function fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pn(e) {
  return e.split("-")[0];
}
function So(e) {
  return e.split("-")[1];
}
function Lf(e) {
  return e === "x" ? "y" : "x";
}
function Mf(e) {
  return e === "y" ? "height" : "width";
}
function Bn(e) {
  return ["top", "bottom"].includes(pn(e)) ? "y" : "x";
}
function Df(e) {
  return Lf(Bn(e));
}
function UP(e, t, n) {
  n === void 0 && (n = !1);
  const r = So(e),
    o = Df(e),
    i = Mf(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ta(s)), [s, Ta(s)];
}
function WP(e) {
  const t = Ta(e);
  return [Qu(e), t, Qu(t)];
}
function Qu(e) {
  return e.replace(/start|end/g, t => HP[t]);
}
function KP(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function GP(e, t, n, r) {
  const o = So(e);
  let i = KP(pn(e), n === "start", r);
  return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Qu)))), i;
}
function Ta(e) {
  return e.replace(/left|right|bottom|top/g, t => VP[t]);
}
function XP(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function _1(e) {
  return typeof e != "number" ? XP(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Na(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function tm(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Bn(t),
    s = Df(t),
    a = Mf(s),
    l = pn(t),
    c = i === "y",
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let y;
  switch (l) {
    case "top":
      y = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      y = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      y = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      y = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      y = {
        x: r.x,
        y: r.y
      };
  }
  switch (So(t)) {
    case "start":
      y[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      y[s] += f * (n && c ? -1 : 1);
      break;
  }
  return y;
}
const YP = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s
    } = n,
    a = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }),
    {
      x: u,
      y: d
    } = tm(c, r, l),
    f = r,
    y = {},
    w = 0;
  for (let m = 0; m < a.length; m++) {
    const {
        name: S,
        fn: v
      } = a[m],
      {
        x: g,
        y: x,
        data: b,
        reset: k
      } = await v({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: y,
        rects: c,
        platform: s,
        elements: {
          reference: e,
          floating: t
        }
      });
    u = g ?? u, d = x ?? d, y = {
      ...y,
      [S]: {
        ...y[S],
        ...b
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: d
    } = tm(c, f, l)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: y
  };
};
async function Ti(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
      x: r,
      y: o,
      platform: i,
      rects: s,
      elements: a,
      strategy: l
    } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: y = 0
    } = fn(t, e),
    w = _1(y),
    S = a[f ? d === "floating" ? "reference" : "floating" : d],
    v = Na(await i.getClippingRect({
      element: (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
      boundary: c,
      rootBoundary: u,
      strategy: l
    })),
    g = d === "floating" ? {
      x: r,
      y: o,
      width: s.floating.width,
      height: s.floating.height
    } : s.reference,
    x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(x))) ? (await (i.getScale == null ? void 0 : i.getScale(x))) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    },
    k = Na(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: a,
      rect: g,
      offsetParent: x,
      strategy: l
    }) : g);
  return {
    top: (v.top - k.top + w.top) / b.y,
    bottom: (k.bottom - v.bottom + w.bottom) / b.y,
    left: (v.left - k.left + w.left) / b.x,
    right: (k.right - v.right + w.right) / b.x
  };
}
const QP = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: l
        } = t,
        {
          element: c,
          padding: u = 0
        } = fn(e, t) || {};
      if (c == null) return {};
      const d = _1(u),
        f = {
          x: n,
          y: r
        },
        y = Df(o),
        w = Mf(y),
        m = await s.getDimensions(c),
        S = y === "y",
        v = S ? "top" : "left",
        g = S ? "bottom" : "right",
        x = S ? "clientHeight" : "clientWidth",
        b = i.reference[w] + i.reference[y] - f[y] - i.floating[w],
        k = f[y] - i.reference[y],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let P = E ? E[x] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(E)))) && (P = a.floating[x] || i.floating[w]);
      const A = b / 2 - k / 2,
        L = P / 2 - m[w] / 2 - 1,
        C = Fn(d[v], L),
        j = Fn(d[g], L),
        I = C,
        z = P - m[w] - j,
        D = P / 2 - m[w] / 2 + A,
        T = Yu(I, D, z),
        R = !l.arrow && So(o) != null && D !== T && i.reference[w] / 2 - (D < I ? C : j) - m[w] / 2 < 0,
        F = R ? D < I ? D - I : D - z : 0;
      return {
        [y]: f[y] + F,
        data: {
          [y]: T,
          centerOffset: D - T - F,
          ...(R && {
            alignmentOffset: F
          })
        },
        reset: R
      };
    }
  }),
  qP = function (e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
            placement: o,
            middlewareData: i,
            rects: s,
            initialPlacement: a,
            platform: l,
            elements: c
          } = t,
          {
            mainAxis: u = !0,
            crossAxis: d = !0,
            fallbackPlacements: f,
            fallbackStrategy: y = "bestFit",
            fallbackAxisSideDirection: w = "none",
            flipAlignment: m = !0,
            ...S
          } = fn(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) return {};
        const v = pn(o),
          g = Bn(a),
          x = pn(a) === a,
          b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
          k = f || (x || !m ? [Ta(a)] : WP(a)),
          E = w !== "none";
        !f && E && k.push(...GP(a, m, w, b));
        const P = [a, ...k],
          A = await Ti(t, S),
          L = [];
        let C = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if (u && L.push(A[v]), d) {
          const D = UP(o, s, b);
          L.push(A[D[0]], A[D[1]]);
        }
        if (C = [...C, {
          placement: o,
          overflows: L
        }], !L.every(D => D <= 0)) {
          var j, I;
          const D = (((j = i.flip) == null ? void 0 : j.index) || 0) + 1,
            T = P[D];
          if (T) return {
            data: {
              index: D,
              overflows: C
            },
            reset: {
              placement: T
            }
          };
          let R = (I = C.filter(F => F.overflows[0] <= 0).sort((F, N) => F.overflows[1] - N.overflows[1])[0]) == null ? void 0 : I.placement;
          if (!R) switch (y) {
            case "bestFit":
              {
                var z;
                const F = (z = C.filter(N => {
                  if (E) {
                    const O = Bn(N.placement);
                    return O === g || O === "y";
                  }
                  return !0;
                }).map(N => [N.placement, N.overflows.filter(O => O > 0).reduce((O, M) => O + M, 0)]).sort((N, O) => N[1] - O[1])[0]) == null ? void 0 : z[0];
                F && (R = F);
                break;
              }
            case "initialPlacement":
              R = a;
              break;
          }
          if (o !== R) return {
            reset: {
              placement: R
            }
          };
        }
        return {};
      }
    };
  };
function nm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function rm(e) {
  return BP.some(t => e[t] >= 0);
}
const ZP = function (e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
          rects: n
        } = t,
        {
          strategy: r = "referenceHidden",
          ...o
        } = fn(e, t);
      switch (r) {
        case "referenceHidden":
          {
            const i = await Ti(t, {
                ...o,
                elementContext: "reference"
              }),
              s = nm(i, n.reference);
            return {
              data: {
                referenceHiddenOffsets: s,
                referenceHidden: rm(s)
              }
            };
          }
        case "escaped":
          {
            const i = await Ti(t, {
                ...o,
                altBoundary: !0
              }),
              s = nm(i, n.floating);
            return {
              data: {
                escapedOffsets: s,
                escaped: rm(s)
              }
            };
          }
        default:
          return {};
      }
    }
  };
};
async function JP(e, t) {
  const {
      placement: n,
      platform: r,
      elements: o
    } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = pn(n),
    a = So(n),
    l = Bn(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    u = i && l ? -1 : 1,
    d = fn(t, e);
  let {
    mainAxis: f,
    crossAxis: y,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof w == "number" && (y = a === "end" ? w * -1 : w), l ? {
    x: y * u,
    y: f * c
  } : {
    x: f * c,
    y: y * u
  };
}
const eT = function (e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const {
            x: o,
            y: i,
            placement: s,
            middlewareData: a
          } = t,
          l = await JP(t, e);
        return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
          x: o + l.x,
          y: i + l.y,
          data: {
            ...l,
            placement: s
          }
        };
      }
    };
  },
  tT = function (e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o
          } = t,
          {
            mainAxis: i = !0,
            crossAxis: s = !1,
            limiter: a = {
              fn: S => {
                let {
                  x: v,
                  y: g
                } = S;
                return {
                  x: v,
                  y: g
                };
              }
            },
            ...l
          } = fn(e, t),
          c = {
            x: n,
            y: r
          },
          u = await Ti(t, l),
          d = Bn(pn(o)),
          f = Lf(d);
        let y = c[f],
          w = c[d];
        if (i) {
          const S = f === "y" ? "top" : "left",
            v = f === "y" ? "bottom" : "right",
            g = y + u[S],
            x = y - u[v];
          y = Yu(g, y, x);
        }
        if (s) {
          const S = d === "y" ? "top" : "left",
            v = d === "y" ? "bottom" : "right",
            g = w + u[S],
            x = w - u[v];
          w = Yu(g, w, x);
        }
        const m = a.fn({
          ...t,
          [f]: y,
          [d]: w
        });
        return {
          ...m,
          data: {
            x: m.x - n,
            y: m.y - r,
            enabled: {
              [f]: i,
              [d]: s
            }
          }
        };
      }
    };
  },
  nT = function (e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: i,
            middlewareData: s
          } = t,
          {
            offset: a = 0,
            mainAxis: l = !0,
            crossAxis: c = !0
          } = fn(e, t),
          u = {
            x: n,
            y: r
          },
          d = Bn(o),
          f = Lf(d);
        let y = u[f],
          w = u[d];
        const m = fn(a, t),
          S = typeof m == "number" ? {
            mainAxis: m,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...m
          };
        if (l) {
          const x = f === "y" ? "height" : "width",
            b = i.reference[f] - i.floating[x] + S.mainAxis,
            k = i.reference[f] + i.reference[x] - S.mainAxis;
          y < b ? y = b : y > k && (y = k);
        }
        if (c) {
          var v, g;
          const x = f === "y" ? "width" : "height",
            b = ["top", "left"].includes(pn(o)),
            k = i.reference[d] - i.floating[x] + (b && ((v = s.offset) == null ? void 0 : v[d]) || 0) + (b ? 0 : S.crossAxis),
            E = i.reference[d] + i.reference[x] + (b ? 0 : ((g = s.offset) == null ? void 0 : g[d]) || 0) - (b ? S.crossAxis : 0);
          w < k ? w = k : w > E && (w = E);
        }
        return {
          [f]: y,
          [d]: w
        };
      }
    };
  },
  rT = function (e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        var n, r;
        const {
            placement: o,
            rects: i,
            platform: s,
            elements: a
          } = t,
          {
            apply: l = () => {},
            ...c
          } = fn(e, t),
          u = await Ti(t, c),
          d = pn(o),
          f = So(o),
          y = Bn(o) === "y",
          {
            width: w,
            height: m
          } = i.floating;
        let S, v;
        d === "top" || d === "bottom" ? (S = d, v = f === ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating))) ? "start" : "end") ? "left" : "right") : (v = d, S = f === "end" ? "top" : "bottom");
        const g = m - u.top - u.bottom,
          x = w - u.left - u.right,
          b = Fn(m - u[S], g),
          k = Fn(w - u[v], x),
          E = !t.middlewareData.shift;
        let P = b,
          A = k;
        if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = x), (r = t.middlewareData.shift) != null && r.enabled.y && (P = g), E && !f) {
          const C = ot(u.left, 0),
            j = ot(u.right, 0),
            I = ot(u.top, 0),
            z = ot(u.bottom, 0);
          y ? A = w - 2 * (C !== 0 || j !== 0 ? C + j : ot(u.left, u.right)) : P = m - 2 * (I !== 0 || z !== 0 ? I + z : ot(u.top, u.bottom));
        }
        await l({
          ...t,
          availableWidth: A,
          availableHeight: P
        });
        const L = await s.getDimensions(a.floating);
        return w !== L.width || m !== L.height ? {
          reset: {
            rects: !0
          }
        } : {};
      }
    };
  };
function Tl() {
  return typeof window < "u";
}
function Co(e) {
  return j1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (j1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function j1(e) {
  return Tl() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function _t(e) {
  return Tl() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function Gt(e) {
  return Tl() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function om(e) {
  return !Tl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
function Gi(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function oT(e) {
  return ["table", "td", "th"].includes(Co(e));
}
function Nl(e) {
  return [":popover-open", ":modal"].some(t => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function $f(e) {
  const t = Ff(),
    n = _t(e) ? jt(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r));
}
function iT(e) {
  let t = Vn(e);
  for (; Gt(t) && !ho(t);) {
    if ($f(t)) return t;
    if (Nl(t)) return null;
    t = Vn(t);
  }
  return null;
}
function Ff() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ho(e) {
  return ["html", "body", "#document"].includes(Co(e));
}
function jt(e) {
  return ut(e).getComputedStyle(e);
}
function Rl(e) {
  return _t(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Vn(e) {
  if (Co(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || om(e) && e.host || Yt(e);
  return om(t) ? t.host : t;
}
function I1(e) {
  const t = Vn(e);
  return ho(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gt(t) && Gi(t) ? t : I1(t);
}
function Ni(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = I1(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ut(o);
  if (i) {
    const a = qu(s);
    return t.concat(s, s.visualViewport || [], Gi(o) ? o : [], a && n ? Ni(a) : []);
  }
  return t.concat(o, Ni(o, [], n));
}
function qu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function L1(e) {
  const t = jt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Gt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Pa(n) !== i || Pa(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function zf(e) {
  return _t(e) ? e : e.contextElement;
}
function no(e) {
  const t = zf(e);
  if (!Gt(t)) return zn(1);
  const n = t.getBoundingClientRect(),
    {
      width: r,
      height: o,
      $: i
    } = L1(t);
  let s = (i ? Pa(n.width) : n.width) / r,
    a = (i ? Pa(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const sT = zn(0);
function M1(e) {
  const t = ut(e);
  return !Ff() || !t.visualViewport ? sT : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function aT(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ut(e) ? !1 : t;
}
function hr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = zf(e);
  let s = zn(1);
  t && (r ? _t(r) && (s = no(r)) : s = no(e));
  const a = aT(i, n, r) ? M1(i) : zn(0);
  let l = (o.left + a.x) / s.x,
    c = (o.top + a.y) / s.y,
    u = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const f = ut(i),
      y = r && _t(r) ? ut(r) : r;
    let w = f,
      m = qu(w);
    for (; m && r && y !== w;) {
      const S = no(m),
        v = m.getBoundingClientRect(),
        g = jt(m),
        x = v.left + (m.clientLeft + parseFloat(g.paddingLeft)) * S.x,
        b = v.top + (m.clientTop + parseFloat(g.paddingTop)) * S.y;
      l *= S.x, c *= S.y, u *= S.x, d *= S.y, l += x, c += b, w = ut(m), m = qu(w);
    }
  }
  return Na({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function lT(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed",
    s = Yt(r),
    a = t ? Nl(t.floating) : !1;
  if (r === s || a && i) return n;
  let l = {
      scrollLeft: 0,
      scrollTop: 0
    },
    c = zn(1);
  const u = zn(0),
    d = Gt(r);
  if ((d || !d && !i) && ((Co(r) !== "body" || Gi(s)) && (l = Rl(r)), Gt(r))) {
    const f = hr(r);
    c = no(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y
  };
}
function cT(e) {
  return Array.from(e.getClientRects());
}
function Zu(e, t) {
  const n = Rl(e).scrollLeft;
  return t ? t.left + n : hr(Yt(e)).left + n;
}
function uT(e) {
  const t = Yt(e),
    n = Rl(e),
    r = e.ownerDocument.body,
    o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Zu(e);
  const a = -n.scrollTop;
  return jt(r).direction === "rtl" && (s += ot(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function dT(e, t) {
  const n = ut(e),
    r = Yt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Ff();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function fT(e, t) {
  const n = hr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Gt(e) ? no(e) : zn(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = o * i.x,
    c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function im(e, t, n) {
  let r;
  if (t === "viewport") r = dT(e, n);else if (t === "document") r = uT(Yt(e));else if (_t(t)) r = fT(t, n);else {
    const o = M1(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Na(r);
}
function D1(e, t) {
  const n = Vn(e);
  return n === t || !_t(n) || ho(n) ? !1 : jt(n).position === "fixed" || D1(n, t);
}
function pT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ni(e, [], !1).filter(a => _t(a) && Co(a) !== "body"),
    o = null;
  const i = jt(e).position === "fixed";
  let s = i ? Vn(e) : e;
  for (; _t(s) && !ho(s);) {
    const a = jt(s),
      l = $f(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Gi(s) && !l && D1(e, s)) ? r = r.filter(u => u !== s) : o = a, s = Vn(s);
  }
  return t.set(e, r), r;
}
function hT(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...(n === "clippingAncestors" ? Nl(t) ? [] : pT(t, this._c) : [].concat(n)), r],
    a = s[0],
    l = s.reduce((c, u) => {
      const d = im(t, u, o);
      return c.top = ot(d.top, c.top), c.right = Fn(d.right, c.right), c.bottom = Fn(d.bottom, c.bottom), c.left = ot(d.left, c.left), c;
    }, im(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function mT(e) {
  const {
    width: t,
    height: n
  } = L1(e);
  return {
    width: t,
    height: n
  };
}
function gT(e, t, n) {
  const r = Gt(t),
    o = Yt(t),
    i = n === "fixed",
    s = hr(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = zn(0);
  if (r || !r && !i) if ((Co(t) !== "body" || Gi(o)) && (a = Rl(t)), r) {
    const y = hr(t, !0, i, t);
    l.x = y.x + t.clientLeft, l.y = y.y + t.clientTop;
  } else o && (l.x = Zu(o));
  let c = 0,
    u = 0;
  if (o && !r && !i) {
    const y = o.getBoundingClientRect();
    u = y.top + a.scrollTop, c = y.left + a.scrollLeft - Zu(o, y);
  }
  const d = s.left + a.scrollLeft - l.x - c,
    f = s.top + a.scrollTop - l.y - u;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Ac(e) {
  return jt(e).position === "static";
}
function sm(e, t) {
  if (!Gt(e) || jt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function $1(e, t) {
  const n = ut(e);
  if (Nl(e)) return n;
  if (!Gt(e)) {
    let o = Vn(e);
    for (; o && !ho(o);) {
      if (_t(o) && !Ac(o)) return o;
      o = Vn(o);
    }
    return n;
  }
  let r = sm(e, t);
  for (; r && oT(r) && Ac(r);) r = sm(r, t);
  return r && ho(r) && Ac(r) && !$f(r) ? n : r || iT(e) || n;
}
const vT = async function (e) {
  const t = this.getOffsetParent || $1,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: gT(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function yT(e) {
  return jt(e).direction === "rtl";
}
const wT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lT,
  getDocumentElement: Yt,
  getClippingRect: hT,
  getOffsetParent: $1,
  getElementRects: vT,
  getClientRects: cT,
  getDimensions: mT,
  getScale: no,
  isElement: _t,
  isRTL: yT
};
function xT(e, t) {
  let n = null,
    r;
  const o = Yt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (a || t(), !d || !f) return;
    const y = ks(u),
      w = ks(o.clientWidth - (c + d)),
      m = ks(o.clientHeight - (u + f)),
      S = ks(c),
      g = {
        rootMargin: -y + "px " + -w + "px " + -m + "px " + -S + "px",
        threshold: ot(0, Fn(1, l)) || 1
      };
    let x = !0;
    function b(k) {
      const E = k[0].intersectionRatio;
      if (E !== l) {
        if (!x) return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...g,
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, g);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function ST(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1
    } = r,
    c = zf(e),
    u = o || i ? [...(c ? Ni(c) : []), ...Ni(t)] : [];
  u.forEach(v => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = c && a ? xT(c, n) : null;
  let f = -1,
    y = null;
  s && (y = new ResizeObserver(v => {
    let [g] = v;
    g && g.target === c && y && (y.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = y) == null || x.observe(t);
    })), n();
  }), c && !l && y.observe(c), y.observe(t));
  let w,
    m = l ? hr(e) : null;
  l && S();
  function S() {
    const v = hr(e);
    m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && n(), m = v, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var v;
    u.forEach(g => {
      o && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n);
    }), d?.(), (v = y) == null || v.disconnect(), y = null, l && cancelAnimationFrame(w);
  };
}
const CT = eT,
  bT = tT,
  ET = qP,
  kT = rT,
  PT = ZP,
  am = QP,
  TT = nT,
  NT = (e, t, n) => {
    const r = new Map(),
      o = {
        platform: wT,
        ...n
      },
      i = {
        ...o.platform,
        _c: r
      };
    return YP(e, t, {
      ...o,
      platform: i
    });
  };
var Ys = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Ra(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0;) if (!Ra(e[r], t[r])) return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0;) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ra(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function F1(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lm(e, t) {
  const n = F1(e);
  return Math.round(t * n) / n;
}
function _c(e) {
  const t = p.useRef(e);
  return Ys(() => {
    t.current = e;
  }), t;
}
function RT(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: {
        reference: i,
        floating: s
      } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c
    } = e,
    [u, d] = p.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1
    }),
    [f, y] = p.useState(r);
  Ra(f, r) || y(r);
  const [w, m] = p.useState(null),
    [S, v] = p.useState(null),
    g = p.useCallback(N => {
      N !== E.current && (E.current = N, m(N));
    }, []),
    x = p.useCallback(N => {
      N !== P.current && (P.current = N, v(N));
    }, []),
    b = i || w,
    k = s || S,
    E = p.useRef(null),
    P = p.useRef(null),
    A = p.useRef(u),
    L = l != null,
    C = _c(l),
    j = _c(o),
    I = _c(c),
    z = p.useCallback(() => {
      if (!E.current || !P.current) return;
      const N = {
        placement: t,
        strategy: n,
        middleware: f
      };
      j.current && (N.platform = j.current), NT(E.current, P.current, N).then(O => {
        const M = {
          ...O,
          isPositioned: I.current !== !1
        };
        D.current && !Ra(A.current, M) && (A.current = M, wr.flushSync(() => {
          d(M);
        }));
      });
    }, [f, t, n, j, I]);
  Ys(() => {
    c === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d(N => ({
      ...N,
      isPositioned: !1
    })));
  }, [c]);
  const D = p.useRef(!1);
  Ys(() => (D.current = !0, () => {
    D.current = !1;
  }), []), Ys(() => {
    if (b && (E.current = b), k && (P.current = k), b && k) {
      if (C.current) return C.current(b, k, z);
      z();
    }
  }, [b, k, z, C, L]);
  const T = p.useMemo(() => ({
      reference: E,
      floating: P,
      setReference: g,
      setFloating: x
    }), [g, x]),
    R = p.useMemo(() => ({
      reference: b,
      floating: k
    }), [b, k]),
    F = p.useMemo(() => {
      const N = {
        position: n,
        left: 0,
        top: 0
      };
      if (!R.floating) return N;
      const O = lm(R.floating, u.x),
        M = lm(R.floating, u.y);
      return a ? {
        ...N,
        transform: "translate(" + O + "px, " + M + "px)",
        ...(F1(R.floating) >= 1.5 && {
          willChange: "transform"
        })
      } : {
        position: n,
        left: O,
        top: M
      };
    }, [n, a, R.floating, u.x, u.y]);
  return p.useMemo(() => ({
    ...u,
    update: z,
    refs: T,
    elements: R,
    floatingStyles: F
  }), [u, z, T, R, F]);
}
const OT = e => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const {
          element: r,
          padding: o
        } = typeof e == "function" ? e(n) : e;
        return r && t(r) ? r.current != null ? am({
          element: r.current,
          padding: o
        }).fn(n) : {} : r ? am({
          element: r,
          padding: o
        }).fn(n) : {};
      }
    };
  },
  AT = (e, t) => ({
    ...CT(e),
    options: [e, t]
  }),
  _T = (e, t) => ({
    ...bT(e),
    options: [e, t]
  }),
  jT = (e, t) => ({
    ...TT(e),
    options: [e, t]
  }),
  IT = (e, t) => ({
    ...ET(e),
    options: [e, t]
  }),
  LT = (e, t) => ({
    ...kT(e),
    options: [e, t]
  }),
  MT = (e, t) => ({
    ...PT(e),
    options: [e, t]
  }),
  DT = (e, t) => ({
    ...OT(e),
    options: [e, t]
  });
var $T = "Arrow",
  z1 = p.forwardRef((e, t) => {
    const {
      children: n,
      width: r = 10,
      height: o = 5,
      ...i
    } = e;
    return h.jsx(K.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : h.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
z1.displayName = $T;
var FT = z1;
function B1(e) {
  const [t, n] = p.useState(void 0);
  return Ve(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver(o => {
        if (!Array.isArray(o) || !o.length) return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize,
            c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else s = e.offsetWidth, a = e.offsetHeight;
        n({
          width: s,
          height: a
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else n(void 0);
  }, [e]), t;
}
var Bf = "Popper",
  [V1, Ol] = tl(Bf),
  [zT, H1] = V1(Bf),
  U1 = e => {
    const {
        __scopePopper: t,
        children: n
      } = e,
      [r, o] = p.useState(null);
    return h.jsx(zT, {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      children: n
    });
  };
U1.displayName = Bf;
var W1 = "PopperAnchor",
  K1 = p.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        virtualRef: r,
        ...o
      } = e,
      i = H1(W1, n),
      s = p.useRef(null),
      a = ee(t, s);
    return p.useEffect(() => {
      i.onAnchorChange(r?.current || s.current);
    }), r ? null : h.jsx(K.div, {
      ...o,
      ref: a
    });
  });
K1.displayName = W1;
var Vf = "PopperContent",
  [BT, VT] = V1(Vf),
  G1 = p.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: y = "optimized",
        onPlaced: w,
        ...m
      } = e,
      S = H1(Vf, n),
      [v, g] = p.useState(null),
      x = ee(t, V => g(V)),
      [b, k] = p.useState(null),
      E = B1(b),
      P = E?.width ?? 0,
      A = E?.height ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      C = typeof u == "number" ? u : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...u
      },
      j = Array.isArray(c) ? c : [c],
      I = j.length > 0,
      z = {
        padding: C,
        boundary: j.filter(UT),
        altBoundary: I
      },
      {
        refs: D,
        floatingStyles: T,
        placement: R,
        isPositioned: F,
        middlewareData: N
      } = RT({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...V) => ST(...V, {
          animationFrame: y === "always"
        }),
        elements: {
          reference: S.anchor
        },
        middleware: [AT({
          mainAxis: o + A,
          alignmentAxis: s
        }), l && _T({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? jT() : void 0,
          ...z
        }), l && IT({
          ...z
        }), LT({
          ...z,
          apply: ({
            elements: V,
            rects: se,
            availableWidth: He,
            availableHeight: ae
          }) => {
            const {
                width: de,
                height: Ee
              } = se.reference,
              ht = V.floating.style;
            ht.setProperty("--radix-popper-available-width", `${He}px`), ht.setProperty("--radix-popper-available-height", `${ae}px`), ht.setProperty("--radix-popper-anchor-width", `${de}px`), ht.setProperty("--radix-popper-anchor-height", `${Ee}px`);
          }
        }), b && DT({
          element: b,
          padding: a
        }), WT({
          arrowWidth: P,
          arrowHeight: A
        }), f && MT({
          strategy: "referenceHidden",
          ...z
        })]
      }),
      [O, M] = Q1(R),
      U = Le(w);
    Ve(() => {
      F && U?.();
    }, [F, U]);
    const Y = N.arrow?.x,
      q = N.arrow?.y,
      ne = N.arrow?.centerOffset !== 0,
      [nt, xe] = p.useState();
    return Ve(() => {
      v && xe(window.getComputedStyle(v).zIndex);
    }, [v]), h.jsx("div", {
      ref: D.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...T,
        transform: F ? T.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: nt,
        "--radix-popper-transform-origin": [N.transformOrigin?.x, N.transformOrigin?.y].join(" "),
        ...(N.hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        })
      },
      dir: e.dir,
      children: h.jsx(BT, {
        scope: n,
        placedSide: O,
        onArrowChange: k,
        arrowX: Y,
        arrowY: q,
        shouldHideArrow: ne,
        children: h.jsx(K.div, {
          "data-side": O,
          "data-align": M,
          ...m,
          ref: x,
          style: {
            ...m.style,
            animation: F ? void 0 : "none"
          }
        })
      })
    });
  });
G1.displayName = Vf;
var X1 = "PopperArrow",
  HT = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  Y1 = p.forwardRef(function (t, n) {
    const {
        __scopePopper: r,
        ...o
      } = t,
      i = VT(X1, r),
      s = HT[i.placedSide];
    return h.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0
      },
      children: h.jsx(FT, {
        ...o,
        ref: n,
        style: {
          ...o.style,
          display: "block"
        }
      })
    });
  });
Y1.displayName = X1;
function UT(e) {
  return e !== null;
}
var WT = e => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const {
        placement: n,
        rects: r,
        middlewareData: o
      } = t,
      s = o.arrow?.centerOffset !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [c, u] = Q1(n),
      d = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[u],
      f = (o.arrow?.x ?? 0) + a / 2,
      y = (o.arrow?.y ?? 0) + l / 2;
    let w = "",
      m = "";
    return c === "bottom" ? (w = s ? d : `${f}px`, m = `${-l}px`) : c === "top" ? (w = s ? d : `${f}px`, m = `${r.floating.height + l}px`) : c === "right" ? (w = `${-l}px`, m = s ? d : `${y}px`) : c === "left" && (w = `${r.floating.width + l}px`, m = s ? d : `${y}px`), {
      data: {
        x: w,
        y: m
      }
    };
  }
});
function Q1(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var q1 = U1,
  Z1 = K1,
  J1 = G1,
  ey = Y1,
  jc = "rovingFocusGroup.onEntryFocus",
  KT = {
    bubbles: !1,
    cancelable: !0
  },
  Al = "RovingFocusGroup",
  [Ju, ty, GT] = nl(Al),
  [XT, _l] = tl(Al, [GT]),
  [YT, QT] = XT(Al),
  ny = p.forwardRef((e, t) => h.jsx(Ju.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: h.jsx(Ju.Slot, {
      scope: e.__scopeRovingFocusGroup,
      children: h.jsx(qT, {
        ...e,
        ref: t
      })
    })
  }));
ny.displayName = Al;
var qT = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: c,
        preventScrollOnEntryFocus: u = !1,
        ...d
      } = e,
      f = p.useRef(null),
      y = ee(t, f),
      w = Pl(i),
      [m = null, S] = dr({
        prop: s,
        defaultProp: a,
        onChange: l
      }),
      [v, g] = p.useState(!1),
      x = Le(c),
      b = ty(n),
      k = p.useRef(!1),
      [E, P] = p.useState(0);
    return p.useEffect(() => {
      const A = f.current;
      if (A) return A.addEventListener(jc, x), () => A.removeEventListener(jc, x);
    }, [x]), h.jsx(YT, {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: m,
      onItemFocus: p.useCallback(A => S(A), [S]),
      onItemShiftTab: p.useCallback(() => g(!0), []),
      onFocusableItemAdd: p.useCallback(() => P(A => A + 1), []),
      onFocusableItemRemove: p.useCallback(() => P(A => A - 1), []),
      children: h.jsx(K.div, {
        tabIndex: v || E === 0 ? -1 : 0,
        "data-orientation": r,
        ...d,
        ref: y,
        style: {
          outline: "none",
          ...e.style
        },
        onMouseDown: B(e.onMouseDown, () => {
          k.current = !0;
        }),
        onFocus: B(e.onFocus, A => {
          const L = !k.current;
          if (A.target === A.currentTarget && L && !v) {
            const C = new CustomEvent(jc, KT);
            if (A.currentTarget.dispatchEvent(C), !C.defaultPrevented) {
              const j = b().filter(R => R.focusable),
                I = j.find(R => R.active),
                z = j.find(R => R.id === m),
                T = [I, z, ...j].filter(Boolean).map(R => R.ref.current);
              iy(T, u);
            }
          }
          k.current = !1;
        }),
        onBlur: B(e.onBlur, () => g(!1))
      })
    });
  }),
  ry = "RovingFocusGroupItem",
  oy = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...s
      } = e,
      a = In(),
      l = i || a,
      c = QT(ry, n),
      u = c.currentTabStopId === l,
      d = ty(n),
      {
        onFocusableItemAdd: f,
        onFocusableItemRemove: y
      } = c;
    return p.useEffect(() => {
      if (r) return f(), () => y();
    }, [r, f, y]), h.jsx(Ju.ItemSlot, {
      scope: n,
      id: l,
      focusable: r,
      active: o,
      children: h.jsx(K.span, {
        tabIndex: u ? 0 : -1,
        "data-orientation": c.orientation,
        ...s,
        ref: t,
        onMouseDown: B(e.onMouseDown, w => {
          r ? c.onItemFocus(l) : w.preventDefault();
        }),
        onFocus: B(e.onFocus, () => c.onItemFocus(l)),
        onKeyDown: B(e.onKeyDown, w => {
          if (w.key === "Tab" && w.shiftKey) {
            c.onItemShiftTab();
            return;
          }
          if (w.target !== w.currentTarget) return;
          const m = e4(w, c.orientation, c.dir);
          if (m !== void 0) {
            if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
            w.preventDefault();
            let v = d().filter(g => g.focusable).map(g => g.ref.current);
            if (m === "last") v.reverse();else if (m === "prev" || m === "next") {
              m === "prev" && v.reverse();
              const g = v.indexOf(w.currentTarget);
              v = c.loop ? t4(v, g + 1) : v.slice(g + 1);
            }
            setTimeout(() => iy(v));
          }
        })
      })
    });
  });
oy.displayName = ry;
var ZT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function JT(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function e4(e, t, n) {
  const r = JT(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ZT[r];
}
function iy(e, t = !1) {
  const n = document.activeElement;
  for (const r of e) if (r === n || (r.focus({
    preventScroll: t
  }), document.activeElement !== n)) return;
}
function t4(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sy = ny,
  ay = oy,
  ed = ["Enter", " "],
  n4 = ["ArrowDown", "PageUp", "Home"],
  ly = ["ArrowUp", "PageDown", "End"],
  r4 = [...n4, ...ly],
  o4 = {
    ltr: [...ed, "ArrowRight"],
    rtl: [...ed, "ArrowLeft"]
  },
  i4 = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
  },
  Xi = "Menu",
  [Ri, s4, a4] = nl(Xi),
  [Sr, cy] = xr(Xi, [a4, Ol, _l]),
  jl = Ol(),
  uy = _l(),
  [l4, Cr] = Sr(Xi),
  [c4, Yi] = Sr(Xi),
  dy = e => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: s = !0
      } = e,
      a = jl(t),
      [l, c] = p.useState(null),
      u = p.useRef(!1),
      d = Le(i),
      f = Pl(o);
    return p.useEffect(() => {
      const y = () => {
          u.current = !0, document.addEventListener("pointerdown", w, {
            capture: !0,
            once: !0
          }), document.addEventListener("pointermove", w, {
            capture: !0,
            once: !0
          });
        },
        w = () => u.current = !1;
      return document.addEventListener("keydown", y, {
        capture: !0
      }), () => {
        document.removeEventListener("keydown", y, {
          capture: !0
        }), document.removeEventListener("pointerdown", w, {
          capture: !0
        }), document.removeEventListener("pointermove", w, {
          capture: !0
        });
      };
    }, []), h.jsx(q1, {
      ...a,
      children: h.jsx(l4, {
        scope: t,
        open: n,
        onOpenChange: d,
        content: l,
        onContentChange: c,
        children: h.jsx(c4, {
          scope: t,
          onClose: p.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: f,
          modal: s,
          children: r
        })
      })
    });
  };
dy.displayName = Xi;
var u4 = "MenuAnchor",
  Hf = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        ...r
      } = e,
      o = jl(n);
    return h.jsx(Z1, {
      ...o,
      ...r,
      ref: t
    });
  });
Hf.displayName = u4;
var Uf = "MenuPortal",
  [d4, fy] = Sr(Uf, {
    forceMount: void 0
  }),
  py = e => {
    const {
        __scopeMenu: t,
        forceMount: n,
        children: r,
        container: o
      } = e,
      i = Cr(Uf, t);
    return h.jsx(d4, {
      scope: t,
      forceMount: n,
      children: h.jsx(Xt, {
        present: n || i.open,
        children: h.jsx(Bi, {
          asChild: !0,
          container: o,
          children: r
        })
      })
    });
  };
py.displayName = Uf;
var xt = "MenuContent",
  [f4, Wf] = Sr(xt),
  hy = p.forwardRef((e, t) => {
    const n = fy(xt, e.__scopeMenu),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Cr(xt, e.__scopeMenu),
      s = Yi(xt, e.__scopeMenu);
    return h.jsx(Ri.Provider, {
      scope: e.__scopeMenu,
      children: h.jsx(Xt, {
        present: r || i.open,
        children: h.jsx(Ri.Slot, {
          scope: e.__scopeMenu,
          children: s.modal ? h.jsx(p4, {
            ...o,
            ref: t
          }) : h.jsx(h4, {
            ...o,
            ref: t
          })
        })
      })
    });
  }),
  p4 = p.forwardRef((e, t) => {
    const n = Cr(xt, e.__scopeMenu),
      r = p.useRef(null),
      o = ee(t, r);
    return p.useEffect(() => {
      const i = r.current;
      if (i) return vf(i);
    }, []), h.jsx(Kf, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: n.open,
      disableOutsideScroll: !0,
      onFocusOutside: B(e.onFocusOutside, i => i.preventDefault(), {
        checkForDefaultPrevented: !1
      }),
      onDismiss: () => n.onOpenChange(!1)
    });
  }),
  h4 = p.forwardRef((e, t) => {
    const n = Cr(xt, e.__scopeMenu);
    return h.jsx(Kf, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    });
  }),
  Kf = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEntryFocus: l,
        onEscapeKeyDown: c,
        onPointerDownOutside: u,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: y,
        disableOutsideScroll: w,
        ...m
      } = e,
      S = Cr(xt, n),
      v = Yi(xt, n),
      g = jl(n),
      x = uy(n),
      b = s4(n),
      [k, E] = p.useState(null),
      P = p.useRef(null),
      A = ee(t, P, S.onContentChange),
      L = p.useRef(0),
      C = p.useRef(""),
      j = p.useRef(0),
      I = p.useRef(null),
      z = p.useRef("right"),
      D = p.useRef(0),
      T = w ? cl : p.Fragment,
      R = w ? {
        as: Dn,
        allowPinchZoom: !0
      } : void 0,
      F = O => {
        const M = C.current + O,
          U = b().filter(V => !V.disabled),
          Y = document.activeElement,
          q = U.find(V => V.ref.current === Y)?.textValue,
          ne = U.map(V => V.textValue),
          nt = P4(ne, M, q),
          xe = U.find(V => V.textValue === nt)?.ref.current;
        (function V(se) {
          C.current = se, window.clearTimeout(L.current), se !== "" && (L.current = window.setTimeout(() => V(""), 1e3));
        })(M), xe && setTimeout(() => xe.focus());
      };
    p.useEffect(() => () => window.clearTimeout(L.current), []), gf();
    const N = p.useCallback(O => z.current === I.current?.side && N4(O, I.current?.area), []);
    return h.jsx(f4, {
      scope: n,
      searchRef: C,
      onItemEnter: p.useCallback(O => {
        N(O) && O.preventDefault();
      }, [N]),
      onItemLeave: p.useCallback(O => {
        N(O) || (P.current?.focus(), E(null));
      }, [N]),
      onTriggerLeave: p.useCallback(O => {
        N(O) && O.preventDefault();
      }, [N]),
      pointerGraceTimerRef: j,
      onPointerGraceIntentChange: p.useCallback(O => {
        I.current = O;
      }, []),
      children: h.jsx(T, {
        ...R,
        children: h.jsx(al, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: B(i, O => {
            O.preventDefault(), P.current?.focus({
              preventScroll: !0
            });
          }),
          onUnmountAutoFocus: s,
          children: h.jsx(zi, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onInteractOutside: f,
            onDismiss: y,
            children: h.jsx(sy, {
              asChild: !0,
              ...x,
              dir: v.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: k,
              onCurrentTabStopIdChange: E,
              onEntryFocus: B(l, O => {
                v.isUsingKeyboardRef.current || O.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: h.jsx(J1, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": Oy(S.open),
                "data-radix-menu-content": "",
                dir: v.dir,
                ...g,
                ...m,
                ref: A,
                style: {
                  outline: "none",
                  ...m.style
                },
                onKeyDown: B(m.onKeyDown, O => {
                  const U = O.target.closest("[data-radix-menu-content]") === O.currentTarget,
                    Y = O.ctrlKey || O.altKey || O.metaKey,
                    q = O.key.length === 1;
                  U && (O.key === "Tab" && O.preventDefault(), !Y && q && F(O.key));
                  const ne = P.current;
                  if (O.target !== ne || !r4.includes(O.key)) return;
                  O.preventDefault();
                  const xe = b().filter(V => !V.disabled).map(V => V.ref.current);
                  ly.includes(O.key) && xe.reverse(), E4(xe);
                }),
                onBlur: B(e.onBlur, O => {
                  O.currentTarget.contains(O.target) || (window.clearTimeout(L.current), C.current = "");
                }),
                onPointerMove: B(e.onPointerMove, Oi(O => {
                  const M = O.target,
                    U = D.current !== O.clientX;
                  if (O.currentTarget.contains(M) && U) {
                    const Y = O.clientX > D.current ? "right" : "left";
                    z.current = Y, D.current = O.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
hy.displayName = xt;
var m4 = "MenuGroup",
  Gf = p.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return h.jsx(K.div, {
      role: "group",
      ...r,
      ref: t
    });
  });
Gf.displayName = m4;
var g4 = "MenuLabel",
  my = p.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return h.jsx(K.div, {
      ...r,
      ref: t
    });
  });
my.displayName = g4;
var Oa = "MenuItem",
  cm = "menu.itemSelect",
  Il = p.forwardRef((e, t) => {
    const {
        disabled: n = !1,
        onSelect: r,
        ...o
      } = e,
      i = p.useRef(null),
      s = Yi(Oa, e.__scopeMenu),
      a = Wf(Oa, e.__scopeMenu),
      l = ee(t, i),
      c = p.useRef(!1),
      u = () => {
        const d = i.current;
        if (!n && d) {
          const f = new CustomEvent(cm, {
            bubbles: !0,
            cancelable: !0
          });
          d.addEventListener(cm, y => r?.(y), {
            once: !0
          }), ff(d, f), f.defaultPrevented ? c.current = !1 : s.onClose();
        }
      };
    return h.jsx(gy, {
      ...o,
      ref: l,
      disabled: n,
      onClick: B(e.onClick, u),
      onPointerDown: d => {
        e.onPointerDown?.(d), c.current = !0;
      },
      onPointerUp: B(e.onPointerUp, d => {
        c.current || d.currentTarget?.click();
      }),
      onKeyDown: B(e.onKeyDown, d => {
        const f = a.searchRef.current !== "";
        n || f && d.key === " " || ed.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
      })
    });
  });
Il.displayName = Oa;
var gy = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        disabled: r = !1,
        textValue: o,
        ...i
      } = e,
      s = Wf(Oa, n),
      a = uy(n),
      l = p.useRef(null),
      c = ee(t, l),
      [u, d] = p.useState(!1),
      [f, y] = p.useState("");
    return p.useEffect(() => {
      const w = l.current;
      w && y((w.textContent ?? "").trim());
    }, [i.children]), h.jsx(Ri.ItemSlot, {
      scope: n,
      disabled: r,
      textValue: o ?? f,
      children: h.jsx(ay, {
        asChild: !0,
        ...a,
        focusable: !r,
        children: h.jsx(K.div, {
          role: "menuitem",
          "data-highlighted": u ? "" : void 0,
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          ...i,
          ref: c,
          onPointerMove: B(e.onPointerMove, Oi(w => {
            r ? s.onItemLeave(w) : (s.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({
              preventScroll: !0
            }));
          })),
          onPointerLeave: B(e.onPointerLeave, Oi(w => s.onItemLeave(w))),
          onFocus: B(e.onFocus, () => d(!0)),
          onBlur: B(e.onBlur, () => d(!1))
        })
      })
    });
  }),
  v4 = "MenuCheckboxItem",
  vy = p.forwardRef((e, t) => {
    const {
      checked: n = !1,
      onCheckedChange: r,
      ...o
    } = e;
    return h.jsx(Cy, {
      scope: e.__scopeMenu,
      checked: n,
      children: h.jsx(Il, {
        role: "menuitemcheckbox",
        "aria-checked": Aa(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Yf(n),
        onSelect: B(o.onSelect, () => r?.(Aa(n) ? !0 : !n), {
          checkForDefaultPrevented: !1
        })
      })
    });
  });
vy.displayName = v4;
var yy = "MenuRadioGroup",
  [y4, w4] = Sr(yy, {
    value: void 0,
    onValueChange: () => {}
  }),
  wy = p.forwardRef((e, t) => {
    const {
        value: n,
        onValueChange: r,
        ...o
      } = e,
      i = Le(r);
    return h.jsx(y4, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: h.jsx(Gf, {
        ...o,
        ref: t
      })
    });
  });
wy.displayName = yy;
var xy = "MenuRadioItem",
  Sy = p.forwardRef((e, t) => {
    const {
        value: n,
        ...r
      } = e,
      o = w4(xy, e.__scopeMenu),
      i = n === o.value;
    return h.jsx(Cy, {
      scope: e.__scopeMenu,
      checked: i,
      children: h.jsx(Il, {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Yf(i),
        onSelect: B(r.onSelect, () => o.onValueChange?.(n), {
          checkForDefaultPrevented: !1
        })
      })
    });
  });
Sy.displayName = xy;
var Xf = "MenuItemIndicator",
  [Cy, x4] = Sr(Xf, {
    checked: !1
  }),
  by = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        forceMount: r,
        ...o
      } = e,
      i = x4(Xf, n);
    return h.jsx(Xt, {
      present: r || Aa(i.checked) || i.checked === !0,
      children: h.jsx(K.span, {
        ...o,
        ref: t,
        "data-state": Yf(i.checked)
      })
    });
  });
by.displayName = Xf;
var S4 = "MenuSeparator",
  Ey = p.forwardRef((e, t) => {
    const {
      __scopeMenu: n,
      ...r
    } = e;
    return h.jsx(K.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t
    });
  });
Ey.displayName = S4;
var C4 = "MenuArrow",
  ky = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        ...r
      } = e,
      o = jl(n);
    return h.jsx(ey, {
      ...o,
      ...r,
      ref: t
    });
  });
ky.displayName = C4;
var b4 = "MenuSub",
  [RR, Py] = Sr(b4),
  Wo = "MenuSubTrigger",
  Ty = p.forwardRef((e, t) => {
    const n = Cr(Wo, e.__scopeMenu),
      r = Yi(Wo, e.__scopeMenu),
      o = Py(Wo, e.__scopeMenu),
      i = Wf(Wo, e.__scopeMenu),
      s = p.useRef(null),
      {
        pointerGraceTimerRef: a,
        onPointerGraceIntentChange: l
      } = i,
      c = {
        __scopeMenu: e.__scopeMenu
      },
      u = p.useCallback(() => {
        s.current && window.clearTimeout(s.current), s.current = null;
      }, []);
    return p.useEffect(() => u, [u]), p.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), h.jsx(Hf, {
      asChild: !0,
      ...c,
      children: h.jsx(gy, {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Oy(n.open),
        ...e,
        ref: uf(t, o.onTriggerChange),
        onClick: d => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: B(e.onPointerMove, Oi(d => {
          i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
            n.onOpenChange(!0), u();
          }, 100));
        })),
        onPointerLeave: B(e.onPointerLeave, Oi(d => {
          u();
          const f = n.content?.getBoundingClientRect();
          if (f) {
            const y = n.content?.dataset.side,
              w = y === "right",
              m = w ? -5 : 5,
              S = f[w ? "left" : "right"],
              v = f[w ? "right" : "left"];
            i.onPointerGraceIntentChange({
              area: [{
                x: d.clientX + m,
                y: d.clientY
              }, {
                x: S,
                y: f.top
              }, {
                x: v,
                y: f.top
              }, {
                x: v,
                y: f.bottom
              }, {
                x: S,
                y: f.bottom
              }],
              side: y
            }), window.clearTimeout(a.current), a.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300);
          } else {
            if (i.onTriggerLeave(d), d.defaultPrevented) return;
            i.onPointerGraceIntentChange(null);
          }
        })),
        onKeyDown: B(e.onKeyDown, d => {
          const f = i.searchRef.current !== "";
          e.disabled || f && d.key === " " || o4[r.dir].includes(d.key) && (n.onOpenChange(!0), n.content?.focus(), d.preventDefault());
        })
      })
    });
  });
Ty.displayName = Wo;
var Ny = "MenuSubContent",
  Ry = p.forwardRef((e, t) => {
    const n = fy(xt, e.__scopeMenu),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Cr(xt, e.__scopeMenu),
      s = Yi(xt, e.__scopeMenu),
      a = Py(Ny, e.__scopeMenu),
      l = p.useRef(null),
      c = ee(t, l);
    return h.jsx(Ri.Provider, {
      scope: e.__scopeMenu,
      children: h.jsx(Xt, {
        present: r || i.open,
        children: h.jsx(Ri.Slot, {
          scope: e.__scopeMenu,
          children: h.jsx(Kf, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: c,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: u => {
              s.isUsingKeyboardRef.current && l.current?.focus(), u.preventDefault();
            },
            onCloseAutoFocus: u => u.preventDefault(),
            onFocusOutside: B(e.onFocusOutside, u => {
              u.target !== a.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: B(e.onEscapeKeyDown, u => {
              s.onClose(), u.preventDefault();
            }),
            onKeyDown: B(e.onKeyDown, u => {
              const d = u.currentTarget.contains(u.target),
                f = i4[s.dir].includes(u.key);
              d && f && (i.onOpenChange(!1), a.trigger?.focus(), u.preventDefault());
            })
          })
        })
      })
    });
  });
Ry.displayName = Ny;
function Oy(e) {
  return e ? "open" : "closed";
}
function Aa(e) {
  return e === "indeterminate";
}
function Yf(e) {
  return Aa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function E4(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function k4(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function P4(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(c => c === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = k4(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter(c => c !== n));
  const l = s.find(c => c.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function T4(e, t) {
  const {
    x: n,
    y: r
  } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      c = t[s].x,
      u = t[s].y;
    l > r != u > r && n < (c - a) * (r - l) / (u - l) + a && (o = !o);
  }
  return o;
}
function N4(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return T4(n, t);
}
function Oi(e) {
  return t => t.pointerType === "mouse" ? e(t) : void 0;
}
var R4 = dy,
  O4 = Hf,
  A4 = py,
  _4 = hy,
  j4 = Gf,
  I4 = my,
  L4 = Il,
  M4 = vy,
  D4 = wy,
  $4 = Sy,
  F4 = by,
  z4 = Ey,
  B4 = ky,
  V4 = Ty,
  H4 = Ry,
  Qf = "ContextMenu",
  [U4, OR] = xr(Qf, [cy]),
  Ye = cy(),
  [W4, Ay] = U4(Qf),
  _y = e => {
    const {
        __scopeContextMenu: t,
        children: n,
        onOpenChange: r,
        dir: o,
        modal: i = !0
      } = e,
      [s, a] = p.useState(!1),
      l = Ye(t),
      c = Le(r),
      u = p.useCallback(d => {
        a(d), c(d);
      }, [c]);
    return h.jsx(W4, {
      scope: t,
      open: s,
      onOpenChange: u,
      modal: i,
      children: h.jsx(R4, {
        ...l,
        dir: o,
        open: s,
        onOpenChange: u,
        modal: i,
        children: n
      })
    });
  };
_y.displayName = Qf;
var jy = "ContextMenuTrigger",
  Iy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        disabled: r = !1,
        ...o
      } = e,
      i = Ay(jy, n),
      s = Ye(n),
      a = p.useRef({
        x: 0,
        y: 0
      }),
      l = p.useRef({
        getBoundingClientRect: () => DOMRect.fromRect({
          width: 0,
          height: 0,
          ...a.current
        })
      }),
      c = p.useRef(0),
      u = p.useCallback(() => window.clearTimeout(c.current), []),
      d = f => {
        a.current = {
          x: f.clientX,
          y: f.clientY
        }, i.onOpenChange(!0);
      };
    return p.useEffect(() => u, [u]), p.useEffect(() => void (r && u()), [r, u]), h.jsxs(h.Fragment, {
      children: [h.jsx(O4, {
        ...s,
        virtualRef: l
      }), h.jsx(K.span, {
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        ...o,
        ref: t,
        style: {
          WebkitTouchCallout: "none",
          ...e.style
        },
        onContextMenu: r ? e.onContextMenu : B(e.onContextMenu, f => {
          u(), d(f), f.preventDefault();
        }),
        onPointerDown: r ? e.onPointerDown : B(e.onPointerDown, Ps(f => {
          u(), c.current = window.setTimeout(() => d(f), 700);
        })),
        onPointerMove: r ? e.onPointerMove : B(e.onPointerMove, Ps(u)),
        onPointerCancel: r ? e.onPointerCancel : B(e.onPointerCancel, Ps(u)),
        onPointerUp: r ? e.onPointerUp : B(e.onPointerUp, Ps(u))
      })]
    });
  });
Iy.displayName = jy;
var K4 = "ContextMenuPortal",
  Ly = e => {
    const {
        __scopeContextMenu: t,
        ...n
      } = e,
      r = Ye(t);
    return h.jsx(A4, {
      ...r,
      ...n
    });
  };
Ly.displayName = K4;
var My = "ContextMenuContent",
  Dy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ay(My, n),
      i = Ye(n),
      s = p.useRef(!1);
    return h.jsx(_4, {
      ...i,
      ...r,
      ref: t,
      side: "right",
      sideOffset: 2,
      align: "start",
      onCloseAutoFocus: a => {
        e.onCloseAutoFocus?.(a), !a.defaultPrevented && s.current && a.preventDefault(), s.current = !1;
      },
      onInteractOutside: a => {
        e.onInteractOutside?.(a), !a.defaultPrevented && !o.modal && (s.current = !0);
      },
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
Dy.displayName = My;
var G4 = "ContextMenuGroup",
  X4 = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(j4, {
      ...o,
      ...r,
      ref: t
    });
  });
X4.displayName = G4;
var Y4 = "ContextMenuLabel",
  $y = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(I4, {
      ...o,
      ...r,
      ref: t
    });
  });
$y.displayName = Y4;
var Q4 = "ContextMenuItem",
  Fy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(L4, {
      ...o,
      ...r,
      ref: t
    });
  });
Fy.displayName = Q4;
var q4 = "ContextMenuCheckboxItem",
  zy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(M4, {
      ...o,
      ...r,
      ref: t
    });
  });
zy.displayName = q4;
var Z4 = "ContextMenuRadioGroup",
  J4 = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(D4, {
      ...o,
      ...r,
      ref: t
    });
  });
J4.displayName = Z4;
var eN = "ContextMenuRadioItem",
  By = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx($4, {
      ...o,
      ...r,
      ref: t
    });
  });
By.displayName = eN;
var tN = "ContextMenuItemIndicator",
  Vy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(F4, {
      ...o,
      ...r,
      ref: t
    });
  });
Vy.displayName = tN;
var nN = "ContextMenuSeparator",
  Hy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(z4, {
      ...o,
      ...r,
      ref: t
    });
  });
Hy.displayName = nN;
var rN = "ContextMenuArrow",
  oN = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(B4, {
      ...o,
      ...r,
      ref: t
    });
  });
oN.displayName = rN;
var iN = "ContextMenuSubTrigger",
  Uy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(V4, {
      ...o,
      ...r,
      ref: t
    });
  });
Uy.displayName = iN;
var sN = "ContextMenuSubContent",
  Wy = p.forwardRef((e, t) => {
    const {
        __scopeContextMenu: n,
        ...r
      } = e,
      o = Ye(n);
    return h.jsx(H4, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
Wy.displayName = sN;
function Ps(e) {
  return t => t.pointerType !== "mouse" ? e(t) : void 0;
}
var aN = _y,
  lN = Iy,
  cN = Ly,
  Ky = Dy,
  Gy = $y,
  Xy = Fy,
  Yy = zy,
  Qy = By,
  qy = Vy,
  Zy = Hy,
  Jy = Uy,
  ew = Wy;
const uN = aN,
  dN = lN,
  fN = p.forwardRef(({
    className: e,
    inset: t,
    children: n,
    ...r
  }, o) => h.jsxs(Jy, {
    ref: o,
    className: W("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", t && "pl-8", e),
    ...r,
    children: [n, h.jsx(nC, {
      className: "ml-auto h-4 w-4"
    })]
  }));
fN.displayName = Jy.displayName;
const pN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(ew, {
  ref: n,
  className: W("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
  ...t
}));
pN.displayName = ew.displayName;
const tw = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(cN, {
  children: h.jsx(Ky, {
    ref: n,
    className: W("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...t
  })
}));
tw.displayName = Ky.displayName;
const td = p.forwardRef(({
  className: e,
  inset: t,
  ...n
}, r) => h.jsx(Xy, {
  ref: r,
  className: W("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
  ...n
}));
td.displayName = Xy.displayName;
const hN = p.forwardRef(({
  className: e,
  children: t,
  checked: n,
  ...r
}, o) => h.jsxs(Yy, {
  ref: o,
  className: W("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
  checked: n,
  ...r,
  children: [h.jsx("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    children: h.jsx(qy, {
      children: h.jsx(Y0, {
        className: "h-4 w-4"
      })
    })
  }), t]
}));
hN.displayName = Yy.displayName;
const mN = p.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => h.jsxs(Qy, {
  ref: r,
  className: W("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
  ...n,
  children: [h.jsx("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    children: h.jsx(qy, {
      children: h.jsx(cC, {
        className: "h-4 w-4 fill-current"
      })
    })
  }), t]
}));
mN.displayName = Qy.displayName;
const gN = p.forwardRef(({
  className: e,
  inset: t,
  ...n
}, r) => h.jsx(Gy, {
  ref: r,
  className: W("px-2 py-1.5 text-sm font-semibold text-foreground", t && "pl-8", e),
  ...n
}));
gN.displayName = Gy.displayName;
const vN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(Zy, {
  ref: n,
  className: W("-mx-1 my-1 h-px bg-border", e),
  ...t
}));
vN.displayName = Zy.displayName;
const yN = ({
    discoveredDevice: e,
    onClick: t
  }) => {
    const {
        t: n
      } = mn(),
      [r, o] = p.useState(!1);
    p.useEffect(() => {
      const a = () => {
        window.api.getTrustedDeviceByPublicKey(e.publicKey).then(l => {
          o(!!l);
        });
      };
      return a(), window.api.on("trusted-devices-updated", a);
    }, []);
    let i = "",
      s;
    switch (e.deviceType) {
      case "linux":
        i = "device-button-purple", s = h.jsx(Oc, {});
        break;
      case "windows":
        i = "device-button-green", s = h.jsx(Oc, {});
        break;
      case "macos":
        i = "device-button-blue", s = h.jsx(DP, {});
        break;
      case "android":
        i = "device-button-red", s = h.jsx(FP, {});
        break;
      case "ios":
        i = "device-button-yellow", s = h.jsx($P, {});
        break;
      default:
        i = "device-button-green", s = h.jsx(Oc, {});
        break;
    }
    return h.jsxs("div", {
      className: "flex flex-col items-center w-20",
      children: [h.jsxs(uN, {
        children: [h.jsx(dN, {
          children: h.jsx("button", {
            onClick: t,
            className: `w-16 h-16 rounded-full flex items-center justify-center transition-colors mb-2 ${i}`,
            children: $t.cloneElement(s, {
              style: {
                fontSize: "1.8rem"
              }
            })
          })
        }), h.jsx(tw, {
          children: r ? h.jsx(td, {
            onClick: () => {
              window.api.analytics.logTrustDeviceHomepage(e, !1), window.api.removeTrustedDeviceByPublicKey(e.publicKey);
            },
            children: n("untrustThisDevice")
          }) : h.jsx(td, {
            onClick: () => {
              window.api.analytics.logTrustDeviceHomepage(e, !0), window.api.addTrustedDevice({
                name: e.deviceName,
                publicKey: e.publicKey
              });
            },
            children: n("trustThisDevice")
          })
        })]
      }), h.jsx("span", {
        className: "text-sm text-center break-words",
        children: e.deviceName
      })]
    });
  },
  qf = p.forwardRef(({
    className: e,
    ...t
  }, n) => h.jsx("div", {
    className: "relative w-full overflow-auto",
    children: h.jsx("table", {
      ref: n,
      className: W("w-full caption-bottom text-sm", e),
      ...t
    })
  }));
qf.displayName = "Table";
const Zf = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("thead", {
  ref: n,
  className: W("[&_tr]:border-b", e),
  ...t
}));
Zf.displayName = "TableHeader";
const Jf = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("tbody", {
  ref: n,
  className: W("[&_tr:last-child]:border-0", e),
  ...t
}));
Jf.displayName = "TableBody";
const wN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("tfoot", {
  ref: n,
  className: W("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
  ...t
}));
wN.displayName = "TableFooter";
const Ai = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("tr", {
  ref: n,
  className: W("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
  ...t
}));
Ai.displayName = "TableRow";
const or = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("th", {
  ref: n,
  className: W("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
  ...t
}));
or.displayName = "TableHead";
const ir = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("td", {
  ref: n,
  className: W("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
  ...t
}));
ir.displayName = "TableCell";
const xN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("caption", {
  ref: n,
  className: W("mt-4 text-sm text-muted-foreground", e),
  ...t
}));
xN.displayName = "TableCaption";
const _i = (e, t = 2) => {
    if (!+e) return "0 Bytes";
    const n = 1024,
      r = t < 0 ? 0 : t,
      o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(e) / Math.log(n));
    return `${parseFloat((e / Math.pow(n, i)).toFixed(r))} ${o[i]}`;
  },
  SN = e => e.length <= 25 ? e : e.substring(0, 11) + "..." + e.substring(e.length - 11),
  CN = e => {
    const t = /([a-zA-Z]{2,20}):\/\/([\w_-]+(?:(?:\.[\w_-]+)?))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi,
      n = [0];
    let r;
    for (; (r = t.exec(e)) !== null;) n.push(r.index), n.push(r.index + r[0].length);
    n.push(e.length);
    let o = "";
    for (let i = 0; i < n.length - 1; i++) {
      const s = n[i],
        a = n[i + 1],
        l = e.slice(s, a);
      i % 2 === 1 ? o += `<a href="${l}" class="text-blue-500 hover:underline" target="_blank">${l}</a>` : o += l.replace(/[&<>"']/g, u => {
        switch (u) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case '"':
            return "&quot;";
          case "'":
            return "&#39;";
          default:
            return u;
        }
      }).replace(/\n/g, "<br>");
    }
    return o;
  },
  bN = ({
    onSelectFiles: e,
    onSelectDirectories: t,
    onDrop: n,
    onDragOver: r,
    onFileRemoved: o,
    selectedFiles: i
  }) => {
    const {
        t: s
      } = mn(),
      a = _i(i.reduce((l, c) => l + c.tocSize, 0));
    return h.jsxs("div", {
      className: `flex flex-col border-2 min-w-full h-60 mb-4 border-grey rounded-lg border-dashed ${i.length === 0 ? "justify-center items-center" : ""}`,
      onDrop: n,
      onDragOver: r,
      children: [i.length === 0 && h.jsxs(h.Fragment, {
        children: [h.jsx("div", {
          className: "text-sm",
          children: s("fileCatcherHint")
        }), h.jsxs("span", {
          className: "space-x-2",
          children: [h.jsx("a", {
            href: "#",
            onClick: e,
            className: "text-xs text-blue-500 hover:underline",
            children: s("chooseFiles")
          }), h.jsx("a", {
            href: "#",
            onClick: t,
            className: "text-xs text-blue-500 hover:underline",
            children: s("chooseDirectories")
          })]
        })]
      }), i.length > 0 && h.jsxs(h.Fragment, {
        children: [h.jsx("div", {
          className: "mb-1 flex-1 overflow-y-auto",
          children: h.jsxs(qf, {
            children: [h.jsx(Zf, {
              children: h.jsxs(Ai, {
                children: [h.jsx(or, {
                  children: s("filename")
                }), h.jsx(or, {
                  children: s("size")
                }), h.jsx(or, {
                  className: "text-right",
                  children: s("remove")
                })]
              })
            }), h.jsx(Jf, {
              children: i.map((l, c) => h.jsxs(Ai, {
                children: [h.jsx(ir, {
                  children: SN(l.abstractFilename)
                }), h.jsx(ir, {
                  children: _i(l.tocSize)
                }), h.jsx(ir, {
                  className: "text-right",
                  children: h.jsx(Se, {
                    variant: "outline",
                    size: "icon",
                    className: "h-6 w-6",
                    onClick: () => o(c),
                    children: h.jsx(cf, {
                      className: "h-4 w-4"
                    })
                  })
                })]
              }, l.abstractFilename + c))
            })]
          })
        }), h.jsxs("div", {
          className: "flex flex-col text-xs justify-center items-center",
          children: [s("selectedFilesInfo", {
            count: i.length,
            size: a
          }), h.jsxs("span", {
            className: "space-x-2",
            children: [h.jsx("a", {
              href: "#",
              onClick: e,
              className: "text-blue-500 hover:underline",
              children: s("chooseFiles")
            }), h.jsx("a", {
              href: "#",
              onClick: t,
              className: "text-blue-500 hover:underline",
              children: s("chooseDirectories")
            })]
          })]
        })]
      })]
    });
  };
var ep = "Tabs",
  [EN, AR] = xr(ep, [_l]),
  nw = _l(),
  [kN, tp] = EN(ep),
  rw = p.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: i,
        orientation: s = "horizontal",
        dir: a,
        activationMode: l = "automatic",
        ...c
      } = e,
      u = Pl(a),
      [d, f] = dr({
        prop: r,
        onChange: o,
        defaultProp: i
      });
    return h.jsx(kN, {
      scope: n,
      baseId: In(),
      value: d,
      onValueChange: f,
      orientation: s,
      dir: u,
      activationMode: l,
      children: h.jsx(K.div, {
        dir: u,
        "data-orientation": s,
        ...c,
        ref: t
      })
    });
  });
rw.displayName = ep;
var ow = "TabsList",
  iw = p.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        loop: r = !0,
        ...o
      } = e,
      i = tp(ow, n),
      s = nw(n);
    return h.jsx(sy, {
      asChild: !0,
      ...s,
      orientation: i.orientation,
      dir: i.dir,
      loop: r,
      children: h.jsx(K.div, {
        role: "tablist",
        "aria-orientation": i.orientation,
        ...o,
        ref: t
      })
    });
  });
iw.displayName = ow;
var sw = "TabsTrigger",
  aw = p.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        disabled: o = !1,
        ...i
      } = e,
      s = tp(sw, n),
      a = nw(n),
      l = uw(s.baseId, r),
      c = dw(s.baseId, r),
      u = r === s.value;
    return h.jsx(ay, {
      asChild: !0,
      ...a,
      focusable: !o,
      active: u,
      children: h.jsx(K.button, {
        type: "button",
        role: "tab",
        "aria-selected": u,
        "aria-controls": c,
        "data-state": u ? "active" : "inactive",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        id: l,
        ...i,
        ref: t,
        onMouseDown: B(e.onMouseDown, d => {
          !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
        }),
        onKeyDown: B(e.onKeyDown, d => {
          [" ", "Enter"].includes(d.key) && s.onValueChange(r);
        }),
        onFocus: B(e.onFocus, () => {
          const d = s.activationMode !== "manual";
          !u && !o && d && s.onValueChange(r);
        })
      })
    });
  });
aw.displayName = sw;
var lw = "TabsContent",
  cw = p.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        forceMount: o,
        children: i,
        ...s
      } = e,
      a = tp(lw, n),
      l = uw(a.baseId, r),
      c = dw(a.baseId, r),
      u = r === a.value,
      d = p.useRef(u);
    return p.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), h.jsx(Xt, {
      present: o || u,
      children: ({
        present: f
      }) => h.jsx(K.div, {
        "data-state": u ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !f,
        id: c,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: f && i
      })
    });
  });
cw.displayName = lw;
function uw(e, t) {
  return `${e}-trigger-${t}`;
}
function dw(e, t) {
  return `${e}-content-${t}`;
}
var PN = rw,
  fw = iw,
  pw = aw,
  hw = cw;
const TN = PN,
  mw = p.forwardRef(({
    className: e,
    ...t
  }, n) => h.jsx(fw, {
    ref: n,
    className: W("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
    ...t
  }));
mw.displayName = fw.displayName;
const nd = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(pw, {
  ref: n,
  className: W("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", e),
  ...t
}));
nd.displayName = pw.displayName;
const rd = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(hw, {
  ref: n,
  className: W("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
  ...t
}));
rd.displayName = hw.displayName;
const gw = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("textarea", {
  className: W("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
  ref: n,
  ...t
}));
gw.displayName = "Textarea";
const vw = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("div", {
  ref: n,
  className: W("rounded-xl border bg-card text-card-foreground shadow", e),
  ...t
}));
vw.displayName = "Card";
const NN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("div", {
  ref: n,
  className: W("flex flex-col space-y-1.5 p-6", e),
  ...t
}));
NN.displayName = "CardHeader";
const RN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("h3", {
  ref: n,
  className: W("font-semibold leading-none tracking-tight", e),
  ...t
}));
RN.displayName = "CardTitle";
const ON = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("p", {
  ref: n,
  className: W("text-sm text-muted-foreground", e),
  ...t
}));
ON.displayName = "CardDescription";
const AN = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("div", {
  ref: n,
  className: W("p-6 pt-0", e),
  ...t
}));
AN.displayName = "CardContent";
const _N = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx("div", {
  ref: n,
  className: W("flex items-center p-6 pt-0", e),
  ...t
}));
_N.displayName = "CardFooter";
var np = "Progress",
  rp = 100,
  [jN, _R] = tl(np),
  [IN, LN] = jN(np),
  yw = p.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: i = MN,
      ...s
    } = e;
    (o || o === 0) && !um(o) && console.error(DN(`${o}`, "Progress"));
    const a = um(o) ? o : rp;
    r !== null && !dm(r, a) && console.error($N(`${r}`, "Progress"));
    const l = dm(r, a) ? r : null,
      c = _a(l) ? i(l, a) : void 0;
    return h.jsx(IN, {
      scope: n,
      value: l,
      max: a,
      children: h.jsx(K.div, {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": _a(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": Sw(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...s,
        ref: t
      })
    });
  });
yw.displayName = np;
var ww = "ProgressIndicator",
  xw = p.forwardRef((e, t) => {
    const {
        __scopeProgress: n,
        ...r
      } = e,
      o = LN(ww, n);
    return h.jsx(K.div, {
      "data-state": Sw(o.value, o.max),
      "data-value": o.value ?? void 0,
      "data-max": o.max,
      ...r,
      ref: t
    });
  });
xw.displayName = ww;
function MN(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Sw(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function _a(e) {
  return typeof e == "number";
}
function um(e) {
  return _a(e) && !isNaN(e) && e > 0;
}
function dm(e, t) {
  return _a(e) && !isNaN(e) && e <= t && e >= 0;
}
function DN(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${rp}\`.`;
}
function $N(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${rp} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Cw = yw,
  FN = xw;
const bw = p.forwardRef(({
  className: e,
  value: t,
  ...n
}, r) => h.jsx(Cw, {
  ref: r,
  className: W("relative h-2 w-full overflow-hidden rounded-full progress-bar-bg", e),
  ...n,
  children: h.jsx(FN, {
    className: "h-full w-full flex-1 progress-bar-fg transition-all",
    style: {
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
bw.displayName = Cw.displayName;
const zN = ({
  connection: e
}) => {
  const {
    t
  } = mn();
  let n = e.fileSendRequest.files[0].filename;
  return e.fileSendRequest.files.length > 1 && (n += ` and ${e.fileSendRequest.files.length - 1} more`), h.jsx(vw, {
    children: h.jsxs("div", {
      className: "flex flex-col px-4 py-2",
      children: [h.jsxs("div", {
        className: "flex flex-row justify-between pb-1",
        children: [h.jsxs("div", {
          className: "flex flex-row items-center",
          children: [h.jsx("div", {
            className: "w-10 h-10 rounded-xl flex items-center justify-center device-button-green mr-3",
            children: h.jsx(MP, {})
          }), h.jsxs("div", {
            className: "flex flex-col",
            children: [h.jsx("div", {
              className: "text-sm font-medium",
              children: n
            }), h.jsxs("div", {
              className: "text-xs text-gray-500",
              children: [_i(e.fileTotalSize), " · ", t("verifCodeColon"), e.verifCode]
            }), h.jsx("div", {
              className: "text-xs text-gray-500",
              children: e.deviceInfo.name
            })]
          })]
        }), h.jsx("div", {
          className: "flex items-center text-sm mr-1",
          children: (() => {
            switch (e.state) {
              case 1:
              case 2:
                return t("waiting");
              case 3:
                return t("sending");
              case 4:
                return t("receiving");
              case 5:
                return t("done");
              case 6:
                return t("error");
              default:
                return t("unknown");
            }
          })()
        })]
      }), h.jsx(bw, {
        value: e.fileTransferProgress * 100,
        className: "h-[1.5px]"
      })]
    })
  });
};
function BN() {
  const {
      t: e
    } = mn(),
    {
      toast: t
    } = sl(),
    [n, r] = p.useState("files"),
    [o, i] = p.useState([]),
    [s, a] = p.useState([]),
    [l, c] = p.useState([]),
    [u, d] = p.useState(!1);
  p.useEffect(() => window.api.on("discovered-devices-updated", (S, v) => {
    a(v);
  }), []), p.useEffect(() => window.api.on("landrop-connections-updated", (S, v) => {
    c(v.reverse());
  }), []), p.useEffect(() => {
    const S = () => {
      window.api.getTrustedDeviceByPublicKey("add_via_device_id").then(v => {
        d(!!v);
      });
    };
    return S(), window.api.on("trusted-devices-updated", S);
  }, []), p.useEffect(() => window.api.on("prepare-send-files-ui", () => {
    r("files"), i([]);
  }), []), p.useEffect(() => window.api.on("prepare-send-text-ui", () => {
    r("text"), setTimeout(() => {
      const S = document.getElementById("send-text-textarea");
      S.value = "", S.focus();
    }, 0);
  }), []);
  const f = async () => {
      const S = await window.api.parseFiles(await window.api.openFiles()),
        v = o.slice();
      for (const g of S) o.find(x => x.abstractFilename === g.abstractFilename) || v.push(g);
      i(v);
    },
    y = async () => {
      const S = await window.api.parseFiles(await window.api.openDirectories()),
        v = o.slice();
      for (const g of S) o.find(x => x.abstractFilename === g.abstractFilename) || v.push(g);
      i(v);
    },
    w = async S => {
      S.preventDefault();
      const v = Array.from(S.dataTransfer.files).map(b => b.path),
        g = await window.api.parseFiles(v),
        x = o.slice();
      for (const b of g) o.find(k => k.abstractFilename === b.abstractFilename) || x.push(b);
      i(x);
    },
    m = S => {
      i(o.filter((v, g) => g !== S));
    };
  return h.jsxs("div", {
    className: "flex h-screen",
    children: [h.jsxs("div", {
      className: "w-1/2 py-8 pl-8 pr-4 h-screen overflow-y-auto",
      children: [h.jsxs(TN, {
        value: n,
        onValueChange: S => r(S),
        className: "w-full",
        children: [h.jsxs(mw, {
          children: [h.jsx(nd, {
            value: "files",
            children: e("sendFiles")
          }), h.jsx(nd, {
            value: "text",
            onClick: () => {
              document.getElementById("send-text-textarea").focus();
            },
            children: e("sendText")
          })]
        }), h.jsxs(rd, {
          value: "files",
          forceMount: !0,
          className: n === "files" ? "block" : "hidden",
          children: [h.jsx(bN, {
            onSelectFiles: f,
            onSelectDirectories: y,
            onDrop: w,
            onDragOver: S => S.preventDefault(),
            onFileRemoved: m,
            selectedFiles: o
          }), h.jsx("div", {
            className: "flex justify-end mb-4",
            children: h.jsx(Se, {
              variant: "outline",
              onClick: async () => {
                i([]);
              },
              children: e("clearAll")
            })
          })]
        }), h.jsxs(rd, {
          value: "text",
          forceMount: !0,
          className: n === "text" ? "block" : "hidden",
          children: [h.jsx(gw, {
            id: "send-text-textarea",
            className: "h-60 mb-4"
          }), h.jsx("div", {
            className: "flex justify-end mb-4",
            children: h.jsx(Se, {
              variant: "outline",
              onClick: async () => {
                const S = document.getElementById("send-text-textarea"),
                  v = await navigator.clipboard.readText();
                S.value = v, S.focus();
              },
              children: e("paste")
            })
          })]
        })]
      }), h.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [h.jsx("h1", {
          className: "text-lg font-bold",
          children: e("devices")
        }), h.jsxs("div", {
          className: "flex items-center space-x-1",
          children: [h.jsx(b3, {
            trigger: h.jsx(Se, {
              variant: "outline",
              size: "icon",
              className: "w-7 h-7",
              children: h.jsx(Q0, {})
            }),
            onConfirm: async (S, v) => {
              try {
                await window.api.addDeviceViaIpAndPort(S, v);
              } catch (g) {
                t({
                  title: e("failedToAddDevice"),
                  description: g.message,
                  variant: "destructive",
                  duration: 365 * 24 * 60 * 60 * 1e3
                });
              }
            }
          }), u && h.jsx(C3, {
            trigger: h.jsx(Se, {
              variant: "outline",
              size: "icon",
              className: "w-7 h-7",
              children: h.jsx(vC, {})
            }),
            onConfirm: async S => {
              try {
                await window.api.addDeviceViaDeviceId(S);
              } catch (v) {
                t({
                  title: e("failedToAddDevice"),
                  description: v.message,
                  variant: "destructive",
                  duration: 365 * 24 * 60 * 60 * 1e3
                });
              }
            }
          })]
        })]
      }), s.length === 0 ? h.jsx("div", {
        className: "text-md text-center text-gray-500 my-8",
        children: e("noDevicesDetected")
      }) : h.jsx("div", {
        className: "flex flex-row space-x-2 overflow-x-auto",
        children: s.map((S, v) => h.jsx(yN, {
          discoveredDevice: S,
          onClick: async () => {
            if (n === "files") {
              if (o.length === 0) {
                t({
                  title: e("noFilesSelected"),
                  description: e("pleaseSelectFilesToSend"),
                  duration: 3e3
                });
                return;
              }
              try {
                window.api.analytics.logSendFiles(S, "files", o, ""), await window.api.sendFiles(o, S.address, S.port, S.publicKey);
              } catch (g) {
                t({
                  title: e("failedToSendFiles"),
                  description: g.message,
                  variant: "destructive",
                  duration: 365 * 24 * 60 * 60 * 1e3
                });
              }
            } else {
              const g = document.getElementById("send-text-textarea");
              try {
                window.api.analytics.logSendFiles(S, "text", [], g.value), await window.api.sendText(g.value, S.address, S.port, S.publicKey), t({
                  title: e("textSent"),
                  description: e("textSentTo", {
                    deviceName: S.deviceName
                  }),
                  duration: 3e3
                });
              } catch (x) {
                t({
                  title: e("failedToSendText"),
                  description: x.message,
                  variant: "destructive",
                  duration: 365 * 24 * 60 * 60 * 1e3
                });
              }
            }
          }
        }, S.publicKey + v))
      })]
    }), h.jsxs("div", {
      className: "w-1/2 py-8 pl-4 pr-8 h-screen overflow-y-auto",
      children: [h.jsx("h1", {
        className: "text-lg font-bold mb-4",
        children: e("transfers")
      }), l.filter(S => S.state > 0).length === 0 ? h.jsx("div", {
        className: "text-md text-center text-gray-500 my-8",
        children: e("noTransfers")
      }) : h.jsx("div", {
        className: "space-y-4",
        children: l.filter(S => S.state > 0).map((S, v) => h.jsx(zN, {
          connection: S
        }, S.publicKeyBase64 + S.verifCode + v))
      })]
    })]
  });
}
const VN = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class ja {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || VN, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new ja(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new ja(this.logger, t);
  }
}
var Ht = new ja();
class Ll {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach(r => {
      this.observers[r] || (this.observers[r] = new Map());
      const o = this.observers[r].get(n) || 0;
      this.observers[r].set(n, o + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(s => {
      let [a, l] = s;
      for (let c = 0; c < l; c++) a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(s => {
      let [a, l] = s;
      for (let c = 0; c < l; c++) a.apply(a, [t, ...r]);
    });
  }
}
const Mo = () => {
    let e, t;
    const n = new Promise((r, o) => {
      e = r, t = o;
    });
    return n.resolve = e, n.reject = t, n;
  },
  fm = e => e == null ? "" : "" + e,
  HN = (e, t, n) => {
    e.forEach(r => {
      t[r] && (n[r] = t[r]);
    });
  },
  UN = /###/g,
  pm = e => e && e.indexOf("###") > -1 ? e.replace(UN, ".") : e,
  hm = e => !e || typeof e == "string",
  ii = (e, t, n) => {
    const r = typeof t != "string" ? t : t.split(".");
    let o = 0;
    for (; o < r.length - 1;) {
      if (hm(e)) return {};
      const i = pm(r[o]);
      !e[i] && n && (e[i] = new n()), Object.prototype.hasOwnProperty.call(e, i) ? e = e[i] : e = {}, ++o;
    }
    return hm(e) ? {} : {
      obj: e,
      k: pm(r[o])
    };
  },
  mm = (e, t, n) => {
    const {
      obj: r,
      k: o
    } = ii(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[o] = n;
      return;
    }
    let i = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      a = ii(e, s, Object);
    for (; a.obj === void 0 && s.length;) i = `${s[s.length - 1]}.${i}`, s = s.slice(0, s.length - 1), a = ii(e, s, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${i}`] = n;
  },
  WN = (e, t, n, r) => {
    const {
      obj: o,
      k: i
    } = ii(e, t, Object);
    o[i] = o[i] || [], o[i].push(n);
  },
  Ia = (e, t) => {
    const {
      obj: n,
      k: r
    } = ii(e, t);
    if (n) return n[r];
  },
  KN = (e, t, n) => {
    const r = Ia(e, n);
    return r !== void 0 ? r : Ia(t, n);
  },
  Ew = (e, t, n) => {
    for (const r in t) r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Ew(e[r], t[r], n) : e[r] = t[r]);
    return e;
  },
  _r = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var GN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const XN = e => typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => GN[t]) : e;
class YN {
  constructor(t) {
    this.capacity = t, this.regExpMap = new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const QN = [" ", ",", "?", "!", ";"],
  qN = new YN(20),
  ZN = (e, t, n) => {
    t = t || "", n = n || "";
    const r = QN.filter(s => t.indexOf(s) < 0 && n.indexOf(s) < 0);
    if (r.length === 0) return !0;
    const o = qN.getRegExp(`(${r.map(s => s === "?" ? "\\?" : s).join("|")})`);
    let i = !o.test(e);
    if (!i) {
      const s = e.indexOf(n);
      s > 0 && !o.test(e.substring(0, s)) && (i = !0);
    }
    return i;
  },
  od = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let o = e;
    for (let i = 0; i < r.length;) {
      if (!o || typeof o != "object") return;
      let s,
        a = "";
      for (let l = i; l < r.length; ++l) if (l !== i && (a += n), a += r[l], s = o[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1) continue;
        i += l - i + 1;
        break;
      }
      o = s;
    }
    return o;
  },
  La = e => e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
class gm extends Ll {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && i ? a.push(...r.split(i)) : a.push(r)));
    const l = Ia(this.data, a);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), l || !s || typeof r != "string" ? l : od(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), mm(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r) (typeof r[i] == "string" || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], {
      silent: !0
    });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1,
        skipCopy: !1
      },
      a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), o = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = Ia(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? Ew(l, r, i) : l = {
      ...l,
      ...r
    }, mm(this.data, a, l), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find(o => n[o] && Object.keys(n[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var kw = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return e.forEach(i => {
      this.processors[i] && (t = this.processors[i].process(t, n, r, o));
    }), t;
  }
};
const vm = {};
class Ma extends Ll {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), HN(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ht.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !ZN(t, r, o);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return {
        key: t,
        namespaces: i
      };
      const c = t.split(r);
      (r !== o || r === o && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), t = c.join(o);
    }
    return typeof i == "string" && (i = [i]), {
      key: t,
      namespaces: i
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails,
      i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      {
        key: s,
        namespaces: a
      } = this.extractFromKey(t[t.length - 1], n),
      l = a[a.length - 1],
      c = n.lng || this.language,
      u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (u) {
        const b = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${l}${b}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${b}${s}`;
      }
      return o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const y = d && d.usedKey || s,
      w = d && d.exactUsedKey || s,
      m = Object.prototype.toString.apply(f),
      S = ["[object Number]", "[object Function]", "[object RegExp]"],
      v = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      g = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (g && f && typeof f != "string" && typeof f != "boolean" && typeof f != "number" && S.indexOf(m) < 0 && !(typeof v == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const b = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = b, d.usedParams = this.getUsedParamsDetails(n), d) : b;
      }
      if (i) {
        const b = Array.isArray(f),
          k = b ? [] : {},
          E = b ? w : y;
        for (const P in f) if (Object.prototype.hasOwnProperty.call(f, P)) {
          const A = `${E}${i}${P}`;
          k[P] = this.translate(A, {
            ...n,
            joinArrays: !1,
            ns: a
          }), k[P] === A && (k[P] = f[P]);
        }
        f = k;
      }
    } else if (g && typeof v == "string" && Array.isArray(f)) f = f.join(v), f && (f = this.extendTranslation(f, t, n, r));else {
      let b = !1,
        k = !1;
      const E = n.count !== void 0 && typeof n.count != "string",
        P = Ma.hasDefaultValue(n),
        A = E ? this.pluralResolver.getSuffix(c, n.count, n) : "",
        L = n.ordinal && E ? this.pluralResolver.getSuffix(c, n.count, {
          ordinal: !1
        }) : "",
        C = E && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        j = C && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${A}`] || n[`defaultValue${L}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (b = !0, f = j), this.isValidLookup(f) || (k = !0, f = s);
      const z = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : f,
        D = P && j !== f && this.options.updateMissing;
      if (k || b || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", c, l, s, D ? j : f), i) {
          const N = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          N && N.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let T = [];
        const R = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && R && R[0]) for (let N = 0; N < R.length; N++) T.push(R[N]);else this.options.saveMissingTo === "all" ? T = this.languageUtils.toResolveHierarchy(n.lng || this.language) : T.push(n.lng || this.language);
        const F = (N, O, M) => {
          const U = P && M !== f ? M : z;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(N, l, O, U, D, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(N, l, O, U, D, n), this.emit("missingKey", N, l, O, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && E ? T.forEach(N => {
          const O = this.pluralResolver.getSuffixes(N, n);
          C && n[`defaultValue${this.options.pluralSeparator}zero`] && O.indexOf(`${this.options.pluralSeparator}zero`) < 0 && O.push(`${this.options.pluralSeparator}zero`), O.forEach(M => {
            F([N], s + M, n[`defaultValue${M}`] || j);
          });
        }) : F(T, s, j));
      }
      f = this.extendTranslation(f, t, n, d, r), k && f === s && this.options.appendNamespaceToMissingKey && (f = `${l}:${s}`), (k || b) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, b ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return o ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, o, i) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, {
      ...this.options.interpolation.defaultVariables,
      ...r
    }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
      resolved: o
    });else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (c) {
        const f = t.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language || o.usedLng, r), c) {
        const f = t.match(this.interpolator.nestingRegexp),
          y = f && f.length;
        u < y && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = this.language || o.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function () {
        for (var f = arguments.length, y = new Array(f), w = 0; w < f; w++) y[w] = arguments[w];
        return i && i[0] === y[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`), null) : s.translate(...y, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = typeof a == "string" ? [a] : a;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = kw.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      s,
      a;
    return typeof t == "string" && (t = [t]), t.forEach(l => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(l, n),
        u = c.key;
      o = u;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string",
        y = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        w = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "",
        m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach(S => {
        this.isValidLookup(r) || (a = S, !vm[`${m[0]}-${S}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (vm[`${m[0]}-${S}`] = !0, this.logger.warn(`key "${o}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach(v => {
          if (this.isValidLookup(r)) return;
          s = v;
          const g = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(g, u, v, S, n);else {
            let b;
            f && (b = this.pluralResolver.getSuffix(v, n.count, n));
            const k = `${this.options.pluralSeparator}zero`,
              E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (g.push(u + b), n.ordinal && b.indexOf(E) === 0 && g.push(u + b.replace(E, this.options.pluralSeparator)), y && g.push(u + k)), w) {
              const P = `${u}${this.options.contextSeparator}${n.context}`;
              g.push(P), f && (g.push(P + b), n.ordinal && b.indexOf(E) === 0 && g.push(P + b.replace(E, this.options.pluralSeparator)), y && g.push(P + k));
            }
          }
          let x;
          for (; x = g.pop();) this.isValidLookup(r) || (i = x, r = this.getResource(v, S, x, n));
        }));
      });
    }), {
      res: r,
      usedKey: o,
      exactUsedKey: i,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, o) : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
      r = t.replace && typeof t.replace != "string";
    let o = r ? t.replace : t;
    if (r && typeof t.count < "u" && (o.count = t.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !r) {
      o = {
        ...o
      };
      for (const i of n) delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t) if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0) return !0;
    return !1;
  }
}
const Ic = e => e.charAt(0).toUpperCase() + e.slice(1);
class ym {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ht.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = La(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = La(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map(o => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ic(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ic(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ic(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach(r => {
      if (n) return;
      const o = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
    }), !n && this.options.supportedLngs && t.forEach(r => {
      if (n) return;
      const o = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(o)) return n = o;
      n = this.options.supportedLngs.find(i => {
        if (i === o) return i;
        if (!(i.indexOf("-") < 0 && o.indexOf("-") < 0) && (i.indexOf("-") > 0 && o.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === o || i.indexOf(o) === 0 && o.length > 1)) return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      o = [],
      i = s => {
        s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
      };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), r.forEach(s => {
      o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
    }), o;
  }
}
let JN = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
  }, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
  }, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
  }, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
  }, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
  }, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
  }, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
  }, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
  }, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
  }, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
  }, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
  }, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
  }, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
  }, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
  }, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
  }, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
  }, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
  }, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
  }, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
  }, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
  }, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
  }, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
  }, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
  }],
  e6 = {
    1: e => +(e > 1),
    2: e => +(e != 1),
    3: e => 0,
    4: e => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
    5: e => e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5,
    6: e => e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2,
    7: e => e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
    8: e => e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3,
    9: e => +(e >= 2),
    10: e => e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4,
    11: e => e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: e => +(e % 10 != 1 || e % 100 == 11),
    13: e => +(e !== 0),
    14: e => e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3,
    15: e => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
    16: e => e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2,
    17: e => e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1,
    18: e => e == 0 ? 0 : e == 1 ? 1 : 2,
    19: e => e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3,
    20: e => e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2,
    21: e => e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0,
    22: e => e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
  };
const t6 = ["v1", "v2", "v3"],
  n6 = ["v4"],
  wm = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
  },
  r6 = () => {
    const e = {};
    return JN.forEach(t => {
      t.lngs.forEach(n => {
        e[n] = {
          numbers: t.nr,
          plurals: e6[t.fc]
        };
      });
    }), e;
  };
class o6 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Ht.create("pluralResolver"), (!this.options.compatibilityJSON || n6.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = r6(), this.pluralRulesCache = {};
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) try {
      const r = La(t === "dev" ? "en" : t),
        o = n.ordinal ? "ordinal" : "cardinal",
        i = JSON.stringify({
          cleanedCode: r,
          type: o
        });
      if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
      const s = new Intl.PluralRules(r, {
        type: o
      });
      return this.pluralRulesCache[i] = s, s;
    } catch {
      return;
    }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map(o => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => wm[o] - wm[i]).map(o => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map(o => this.getSuffix(t, o, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}` : this.getSuffixRetroCompatible(o, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let o = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
    const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !t6.includes(this.options.compatibilityJSON);
  }
}
const xm = function (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = KN(e, t, n);
    return !i && o && typeof n == "string" && (i = od(e, n, r), i === void 0 && (i = od(t, n, r))), i;
  },
  Lc = e => e.replace(/\$/g, "$$$$");
class i6 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Ht.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (n => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: y,
      nestingSuffix: w,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: S,
      maxReplaces: v,
      alwaysFormat: g
    } = t.interpolation;
    this.escape = n !== void 0 ? n : XN, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? _r(i) : s || "{{", this.suffix = a ? _r(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? _r(f) : y || _r("$t("), this.nestingSuffix = w ? _r(w) : m || _r(")"), this.nestingOptionsSeparator = S || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = g !== void 0 ? g : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, o) {
    let i, s, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
      c = y => {
        if (y.indexOf(this.formatSeparator) < 0) {
          const v = xm(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat ? this.format(v, void 0, r, {
            ...o,
            ...n,
            interpolationkey: y
          }) : v;
        }
        const w = y.split(this.formatSeparator),
          m = w.shift().trim(),
          S = w.join(this.formatSeparator).trim();
        return this.format(xm(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), S, r, {
          ...o,
          ...n,
          interpolationkey: m
        });
      };
    this.resetRegExp();
    const u = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
      d = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: y => Lc(y)
    }, {
      regex: this.regexp,
      safeValue: y => this.escapeValue ? Lc(this.escape(y)) : Lc(y)
    }].forEach(y => {
      for (a = 0; i = y.regex.exec(t);) {
        const w = i[1].trim();
        if (s = c(w), s === void 0) {
          if (typeof u == "function") {
            const S = u(t, i, o);
            s = typeof S == "string" ? S : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, w)) s = "";else if (d) {
            s = i[0];
            continue;
          } else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`), s = "";
        } else typeof s != "string" && !this.useRawValueToEscape && (s = fm(s));
        const m = y.safeValue(s);
        if (t = t.replace(i[0], m), d ? (y.regex.lastIndex += s.length, y.regex.lastIndex -= i[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces) break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      s;
    const a = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const d = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, s);
      const y = f.match(/'/g),
        w = f.match(/"/g);
      (y && y.length % 2 === 0 && !w || w.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), c && (s = {
          ...c,
          ...s
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${u}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
    };
    for (; o = this.nestingRegexp.exec(t);) {
      let l = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let c = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map(d => d.trim());
        o[1] = u.shift(), l = u, c = !0;
      }
      if (i = n(a.call(this, o[1].trim(), s), s), i && o[0] === t && typeof i != "string") return i;
      typeof i != "string" && (i = fm(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), c && (i = l.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const s6 = e => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const o = r[1].substring(0, r[1].length - 1);
      t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach(s => {
        if (s) {
          const [a, ...l] = s.split(":"),
            c = l.join(":").trim().replace(/^'+|'+$/g, ""),
            u = a.trim();
          n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
        }
      });
    }
    return {
      formatName: t,
      formatOptions: n
    };
  },
  jr = e => {
    const t = {};
    return (n, r, o) => {
      let i = o;
      o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (i = {
        ...i,
        [o.interpolationkey]: void 0
      });
      const s = r + JSON.stringify(i);
      let a = t[s];
      return a || (a = e(La(r), o), t[s] = a), a(n);
    };
  };
class a6 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Ht.create("formatter"), this.options = t, this.formats = {
      number: jr((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r
        });
        return i => o.format(i);
      }),
      currency: jr((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return i => o.format(i);
      }),
      datetime: jr((n, r) => {
        const o = new Intl.DateTimeFormat(n, {
          ...r
        });
        return i => o.format(i);
      }),
      relativetime: jr((n, r) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return i => o.format(i, r.range || "day");
      }),
      list: jr((n, r) => {
        const o = new Intl.ListFormat(n, {
          ...r
        });
        return i => o.format(i);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = jr(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find(a => a.indexOf(")") > -1)) {
      const a = i.findIndex(l => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = s6(l);
      if (this.formats[c]) {
        let d = a;
        try {
          const f = o && o.formatParams && o.formatParams[o.interpolationkey] || {},
            y = f.locale || f.lng || o.locale || o.lng || r;
          d = this.formats[c](a, y, {
            ...u,
            ...o,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, t);
  }
}
const l6 = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class c6 extends Ll {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = Ht.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {},
      s = {},
      a = {},
      l = {};
    return t.forEach(c => {
      let u = !0;
      n.forEach(d => {
        const f = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, u = !1, s[f] === void 0 && (s[f] = !0), i[f] === void 0 && (i[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), u || (a[c] = !0);
    }), (Object.keys(i).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const o = t.split("|"),
      i = o[0],
      s = o[1];
    n && this.emit("failedLoading", i, s, n), !n && r && this.store.addResourceBundle(i, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach(l => {
      WN(l.loaded, [i], s), l6(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(c => {
        a[c] || (a[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach(d => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter(l => !l.done);
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (c, u) => {
        if (this.readingCalls--, this.waitingReads.length > 0) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (c && u && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, s);
          }, i);
          return;
        }
        s(c, u);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(t, n);
        c && typeof c.then == "function" ? c.then(u => a(null, u)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length) return i.pending.length || o(), null;
    i.toLoad.forEach(s => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      o = r[0],
      i = r[1];
    this.read(o, i, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a), this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
            ...s,
            isUpdate: i
          },
          c = this.backend.create.bind(this.backend);
        if (c.length < 6) try {
          let u;
          c.length === 5 ? u = c(t, n, r, o, l) : u = c(t, n, r, o), u && typeof u.then == "function" ? u.then(d => a(null, d)).catch(a) : a(null, u);
        } catch (u) {
          a(u);
        } else c(t, n, r, o, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
const Sm = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: e => {
      let t = {};
      if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
        const n = e[3] || e[2];
        Object.keys(n).forEach(r => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: e => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  }),
  Cm = e => (typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e),
  Ts = () => {},
  u6 = e => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class ji extends Ll {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Cm(t), this.services = {}, this.logger = Ht, this.modules = {
      external: []
    }, u6(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const o = Sm();
    this.options = {
      ...o,
      ...this.options,
      ...Cm(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = u => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? Ht.init(i(this.modules.logger), this.options) : Ht.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = a6);
      const d = new ym(this.options);
      this.store = new gm(this.options.resources, this.options);
      const f = this.services;
      f.logger = Ht, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new o6(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new i6(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new c6(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function (y) {
        for (var w = arguments.length, m = new Array(w > 1 ? w - 1 : 0), S = 1; S < w; S++) m[S - 1] = arguments[S];
        t.emit(y, ...m);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Ma(this.services, this.options), this.translator.on("*", function (y) {
        for (var w = arguments.length, m = new Array(w > 1 ? w - 1 : 0), S = 1; S < w; S++) m[S - 1] = arguments[S];
        t.emit(y, ...m);
      }), this.modules.external.forEach(y => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Ts), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(u => {
      this[u] = function () {
        return t.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(u => {
      this[u] = function () {
        return t.store[u](...arguments), t;
      };
    });
    const l = Mo(),
      c = () => {
        const u = (d, f) => {
          this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
        };
        if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return u(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, u);
      };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ts;
    const o = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const i = [],
        s = a => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach(c => {
            c !== "cimode" && i.indexOf(c) < 0 && i.push(c);
          });
        };
      o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => s(l)), this.options.preload && this.options.preload.forEach(a => s(a)), this.services.backendConnector.load(i, this.options.ns, a => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const o = Mo();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = Ts), this.services.backendConnector.reload(t, n, i => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && kw.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) for (let n = 0; n < this.languages.length; n++) {
      const r = this.languages[n];
      if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
        this.resolvedLanguage = r;
        break;
      }
    }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const o = Mo();
    this.emit("languageChanging", t);
    const i = l => {
        this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
      },
      s = (l, c) => {
        c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, o.resolve(function () {
          return r.t(...arguments);
        }), n && n(l, function () {
          return r.t(...arguments);
        });
      },
      a = l => {
        !t && !l && this.services.languageDetector && (l = []);
        const c = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
        c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, u => {
          s(u, c);
        });
      };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), o;
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function (s, a) {
      let l;
      if (typeof a != "object") {
        for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++) u[d - 2] = arguments[d];
        l = o.options.overloadTranslationOptionHandler([s, a].concat(u));
      } else l = {
        ...a
      };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const f = o.options.keySeparator || ".";
      let y;
      return l.keyPrefix && Array.isArray(s) ? y = s.map(w => `${l.keyPrefix}${f}${w}`) : y = l.keyPrefix ? `${l.keyPrefix}${f}${s}` : s, o.t(y, l);
    };
    return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!o || s(i, t)));
  }
  loadNamespaces(t, n) {
    const r = Mo();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach(o => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources(o => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Mo();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [],
      i = t.filter(s => o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources(s => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
      r = this.services && this.services.languageUtils || new ym(Sm());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new ji(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ts;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
        ...this.options,
        ...t,
        isClone: !0
      },
      i = new ji(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach(a => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new gm(this.store.data, o), i.services.resourceStore = i.store), i.translator = new Ma(i.services, o), i.translator.on("*", function (a) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) c[u - 1] = arguments[u];
      i.emit(a, ...c);
    }), i.init(o, n), i.translator.options = o, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Me = ji.createInstance();
Me.createInstance = ji.createInstance;
Me.createInstance;
Me.dir;
Me.init;
Me.loadResources;
Me.reloadResources;
Me.use;
const Mc = Me.changeLanguage;
Me.getFixedT;
Me.t;
Me.exists;
Me.setDefaultNamespace;
Me.hasLoadedNamespace;
Me.loadNamespaces;
Me.loadLanguages;
function bm(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Pw(e) {
  const t = p.useRef({
    value: e,
    previous: e
  });
  return p.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var d6 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  f6 = [" ", "Enter"],
  Qi = "Select",
  [Ml, Dl, p6] = nl(Qi),
  [bo, jR] = xr(Qi, [p6, Ol]),
  $l = Ol(),
  [h6, Kn] = bo(Qi),
  [m6, g6] = bo(Qi),
  Tw = e => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: s,
        defaultValue: a,
        onValueChange: l,
        dir: c,
        name: u,
        autoComplete: d,
        disabled: f,
        required: y,
        form: w
      } = e,
      m = $l(t),
      [S, v] = p.useState(null),
      [g, x] = p.useState(null),
      [b, k] = p.useState(!1),
      E = Pl(c),
      [P = !1, A] = dr({
        prop: r,
        defaultProp: o,
        onChange: i
      }),
      [L, C] = dr({
        prop: s,
        defaultProp: a,
        onChange: l
      }),
      j = p.useRef(null),
      I = S ? w || !!S.closest("form") : !0,
      [z, D] = p.useState(new Set()),
      T = Array.from(z).map(R => R.props.value).join(";");
    return h.jsx(q1, {
      ...m,
      children: h.jsxs(h6, {
        required: y,
        scope: t,
        trigger: S,
        onTriggerChange: v,
        valueNode: g,
        onValueNodeChange: x,
        valueNodeHasChildren: b,
        onValueNodeHasChildrenChange: k,
        contentId: In(),
        value: L,
        onValueChange: C,
        open: P,
        onOpenChange: A,
        dir: E,
        triggerPointerDownPosRef: j,
        disabled: f,
        children: [h.jsx(Ml.Provider, {
          scope: t,
          children: h.jsx(m6, {
            scope: e.__scopeSelect,
            onNativeOptionAdd: p.useCallback(R => {
              D(F => new Set(F).add(R));
            }, []),
            onNativeOptionRemove: p.useCallback(R => {
              D(F => {
                const N = new Set(F);
                return N.delete(R), N;
              });
            }, []),
            children: n
          })
        }), I ? h.jsxs(Zw, {
          "aria-hidden": !0,
          required: y,
          tabIndex: -1,
          name: u,
          autoComplete: d,
          value: L,
          onChange: R => C(R.target.value),
          disabled: f,
          form: w,
          children: [L === void 0 ? h.jsx("option", {
            value: ""
          }) : null, Array.from(z)]
        }, T) : null]
      })
    });
  };
Tw.displayName = Qi;
var Nw = "SelectTrigger",
  Rw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        disabled: r = !1,
        ...o
      } = e,
      i = $l(n),
      s = Kn(Nw, n),
      a = s.disabled || r,
      l = ee(t, s.onTriggerChange),
      c = Dl(n),
      u = p.useRef("touch"),
      [d, f, y] = Jw(m => {
        const S = c().filter(x => !x.disabled),
          v = S.find(x => x.value === s.value),
          g = ex(S, m, v);
        g !== void 0 && s.onValueChange(g.value);
      }),
      w = m => {
        a || (s.onOpenChange(!0), y()), m && (s.triggerPointerDownPosRef.current = {
          x: Math.round(m.pageX),
          y: Math.round(m.pageY)
        });
      };
    return h.jsx(Z1, {
      asChild: !0,
      ...i,
      children: h.jsx(K.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": qw(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: B(o.onClick, m => {
          m.currentTarget.focus(), u.current !== "mouse" && w(m);
        }),
        onPointerDown: B(o.onPointerDown, m => {
          u.current = m.pointerType;
          const S = m.target;
          S.hasPointerCapture(m.pointerId) && S.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (w(m), m.preventDefault());
        }),
        onKeyDown: B(o.onKeyDown, m => {
          const S = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(S && m.key === " ") && d6.includes(m.key) && (w(), m.preventDefault());
        })
      })
    });
  });
Rw.displayName = Nw;
var Ow = "SelectValue",
  Aw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: s = "",
        ...a
      } = e,
      l = Kn(Ow, n),
      {
        onValueNodeHasChildrenChange: c
      } = l,
      u = i !== void 0,
      d = ee(t, l.onValueNodeChange);
    return Ve(() => {
      c(u);
    }, [c, u]), h.jsx(K.span, {
      ...a,
      ref: d,
      style: {
        pointerEvents: "none"
      },
      children: qw(l.value) ? h.jsx(h.Fragment, {
        children: s
      }) : i
    });
  });
Aw.displayName = Ow;
var v6 = "SelectIcon",
  _w = p.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      children: r,
      ...o
    } = e;
    return h.jsx(K.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼"
    });
  });
_w.displayName = v6;
var y6 = "SelectPortal",
  jw = e => h.jsx(Bi, {
    asChild: !0,
    ...e
  });
jw.displayName = y6;
var mr = "SelectContent",
  Iw = p.forwardRef((e, t) => {
    const n = Kn(mr, e.__scopeSelect),
      [r, o] = p.useState();
    if (Ve(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? wr.createPortal(h.jsx(Lw, {
        scope: e.__scopeSelect,
        children: h.jsx(Ml.Slot, {
          scope: e.__scopeSelect,
          children: h.jsx("div", {
            children: e.children
          })
        })
      }), i) : null;
    }
    return h.jsx(Mw, {
      ...e,
      ref: t
    });
  });
Iw.displayName = mr;
var kt = 10,
  [Lw, Gn] = bo(mr),
  w6 = "SelectContentImpl",
  Mw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: d,
        collisionBoundary: f,
        collisionPadding: y,
        sticky: w,
        hideWhenDetached: m,
        avoidCollisions: S,
        ...v
      } = e,
      g = Kn(mr, n),
      [x, b] = p.useState(null),
      [k, E] = p.useState(null),
      P = ee(t, V => b(V)),
      [A, L] = p.useState(null),
      [C, j] = p.useState(null),
      I = Dl(n),
      [z, D] = p.useState(!1),
      T = p.useRef(!1);
    p.useEffect(() => {
      if (x) return vf(x);
    }, [x]), gf();
    const R = p.useCallback(V => {
        const [se, ...He] = I().map(Ee => Ee.ref.current),
          [ae] = He.slice(-1),
          de = document.activeElement;
        for (const Ee of V) if (Ee === de || (Ee?.scrollIntoView({
          block: "nearest"
        }), Ee === se && k && (k.scrollTop = 0), Ee === ae && k && (k.scrollTop = k.scrollHeight), Ee?.focus(), document.activeElement !== de)) return;
      }, [I, k]),
      F = p.useCallback(() => R([A, x]), [R, A, x]);
    p.useEffect(() => {
      z && F();
    }, [z, F]);
    const {
      onOpenChange: N,
      triggerPointerDownPosRef: O
    } = g;
    p.useEffect(() => {
      if (x) {
        let V = {
          x: 0,
          y: 0
        };
        const se = ae => {
            V = {
              x: Math.abs(Math.round(ae.pageX) - (O.current?.x ?? 0)),
              y: Math.abs(Math.round(ae.pageY) - (O.current?.y ?? 0))
            };
          },
          He = ae => {
            V.x <= 10 && V.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || N(!1), document.removeEventListener("pointermove", se), O.current = null;
          };
        return O.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", He, {
          capture: !0,
          once: !0
        })), () => {
          document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", He, {
            capture: !0
          });
        };
      }
    }, [x, N, O]), p.useEffect(() => {
      const V = () => N(!1);
      return window.addEventListener("blur", V), window.addEventListener("resize", V), () => {
        window.removeEventListener("blur", V), window.removeEventListener("resize", V);
      };
    }, [N]);
    const [M, U] = Jw(V => {
        const se = I().filter(de => !de.disabled),
          He = se.find(de => de.ref.current === document.activeElement),
          ae = ex(se, V, He);
        ae && setTimeout(() => ae.ref.current.focus());
      }),
      Y = p.useCallback((V, se, He) => {
        const ae = !T.current && !He;
        (g.value !== void 0 && g.value === se || ae) && (L(V), ae && (T.current = !0));
      }, [g.value]),
      q = p.useCallback(() => x?.focus(), [x]),
      ne = p.useCallback((V, se, He) => {
        const ae = !T.current && !He;
        (g.value !== void 0 && g.value === se || ae) && j(V);
      }, [g.value]),
      nt = r === "popper" ? id : Dw,
      xe = nt === id ? {
        side: a,
        sideOffset: l,
        align: c,
        alignOffset: u,
        arrowPadding: d,
        collisionBoundary: f,
        collisionPadding: y,
        sticky: w,
        hideWhenDetached: m,
        avoidCollisions: S
      } : {};
    return h.jsx(Lw, {
      scope: n,
      content: x,
      viewport: k,
      onViewportChange: E,
      itemRefCallback: Y,
      selectedItem: A,
      onItemLeave: q,
      itemTextRefCallback: ne,
      focusSelectedItem: F,
      selectedItemText: C,
      position: r,
      isPositioned: z,
      searchRef: M,
      children: h.jsx(cl, {
        as: Dn,
        allowPinchZoom: !0,
        children: h.jsx(al, {
          asChild: !0,
          trapped: g.open,
          onMountAutoFocus: V => {
            V.preventDefault();
          },
          onUnmountAutoFocus: B(o, V => {
            g.trigger?.focus({
              preventScroll: !0
            }), V.preventDefault();
          }),
          children: h.jsx(zi, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: V => V.preventDefault(),
            onDismiss: () => g.onOpenChange(!1),
            children: h.jsx(nt, {
              role: "listbox",
              id: g.contentId,
              "data-state": g.open ? "open" : "closed",
              dir: g.dir,
              onContextMenu: V => V.preventDefault(),
              ...v,
              ...xe,
              onPlaced: () => D(!0),
              ref: P,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...v.style
              },
              onKeyDown: B(v.onKeyDown, V => {
                const se = V.ctrlKey || V.altKey || V.metaKey;
                if (V.key === "Tab" && V.preventDefault(), !se && V.key.length === 1 && U(V.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(V.key)) {
                  let ae = I().filter(de => !de.disabled).map(de => de.ref.current);
                  if (["ArrowUp", "End"].includes(V.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(V.key)) {
                    const de = V.target,
                      Ee = ae.indexOf(de);
                    ae = ae.slice(Ee + 1);
                  }
                  setTimeout(() => R(ae)), V.preventDefault();
                }
              })
            })
          })
        })
      })
    });
  });
Mw.displayName = w6;
var x6 = "SelectItemAlignedPosition",
  Dw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        onPlaced: r,
        ...o
      } = e,
      i = Kn(mr, n),
      s = Gn(mr, n),
      [a, l] = p.useState(null),
      [c, u] = p.useState(null),
      d = ee(t, P => u(P)),
      f = Dl(n),
      y = p.useRef(!1),
      w = p.useRef(!0),
      {
        viewport: m,
        selectedItem: S,
        selectedItemText: v,
        focusSelectedItem: g
      } = s,
      x = p.useCallback(() => {
        if (i.trigger && i.valueNode && a && c && m && S && v) {
          const P = i.trigger.getBoundingClientRect(),
            A = c.getBoundingClientRect(),
            L = i.valueNode.getBoundingClientRect(),
            C = v.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const de = C.left - A.left,
              Ee = L.left - de,
              ht = P.left - Ee,
              Xn = P.width + ht,
              Fl = Math.max(Xn, A.width),
              zl = window.innerWidth - kt,
              Bl = bm(Ee, [kt, Math.max(kt, zl - Fl)]);
            a.style.minWidth = Xn + "px", a.style.left = Bl + "px";
          } else {
            const de = A.right - C.right,
              Ee = window.innerWidth - L.right - de,
              ht = window.innerWidth - P.right - Ee,
              Xn = P.width + ht,
              Fl = Math.max(Xn, A.width),
              zl = window.innerWidth - kt,
              Bl = bm(Ee, [kt, Math.max(kt, zl - Fl)]);
            a.style.minWidth = Xn + "px", a.style.right = Bl + "px";
          }
          const j = f(),
            I = window.innerHeight - kt * 2,
            z = m.scrollHeight,
            D = window.getComputedStyle(c),
            T = parseInt(D.borderTopWidth, 10),
            R = parseInt(D.paddingTop, 10),
            F = parseInt(D.borderBottomWidth, 10),
            N = parseInt(D.paddingBottom, 10),
            O = T + R + z + N + F,
            M = Math.min(S.offsetHeight * 5, O),
            U = window.getComputedStyle(m),
            Y = parseInt(U.paddingTop, 10),
            q = parseInt(U.paddingBottom, 10),
            ne = P.top + P.height / 2 - kt,
            nt = I - ne,
            xe = S.offsetHeight / 2,
            V = S.offsetTop + xe,
            se = T + R + V,
            He = O - se;
          if (se <= ne) {
            const de = j.length > 0 && S === j[j.length - 1].ref.current;
            a.style.bottom = "0px";
            const Ee = c.clientHeight - m.offsetTop - m.offsetHeight,
              ht = Math.max(nt, xe + (de ? q : 0) + Ee + F),
              Xn = se + ht;
            a.style.height = Xn + "px";
          } else {
            const de = j.length > 0 && S === j[0].ref.current;
            a.style.top = "0px";
            const ht = Math.max(ne, T + m.offsetTop + (de ? Y : 0) + xe) + He;
            a.style.height = ht + "px", m.scrollTop = se - ne + m.offsetTop;
          }
          a.style.margin = `${kt}px 0`, a.style.minHeight = M + "px", a.style.maxHeight = I + "px", r?.(), requestAnimationFrame(() => y.current = !0);
        }
      }, [f, i.trigger, i.valueNode, a, c, m, S, v, i.dir, r]);
    Ve(() => x(), [x]);
    const [b, k] = p.useState();
    Ve(() => {
      c && k(window.getComputedStyle(c).zIndex);
    }, [c]);
    const E = p.useCallback(P => {
      P && w.current === !0 && (x(), g?.(), w.current = !1);
    }, [x, g]);
    return h.jsx(C6, {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: y,
      onScrollButtonChange: E,
      children: h.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: b
        },
        children: h.jsx(K.div, {
          ...o,
          ref: d,
          style: {
            boxSizing: "border-box",
            maxHeight: "100%",
            ...o.style
          }
        })
      })
    });
  });
Dw.displayName = x6;
var S6 = "SelectPopperPosition",
  id = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = kt,
        ...i
      } = e,
      s = $l(n);
    return h.jsx(J1, {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
id.displayName = S6;
var [C6, op] = bo(mr, {}),
  sd = "SelectViewport",
  $w = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        nonce: r,
        ...o
      } = e,
      i = Gn(sd, n),
      s = op(sd, n),
      a = ee(t, i.onViewportChange),
      l = p.useRef(0);
    return h.jsxs(h.Fragment, {
      children: [h.jsx("style", {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
        },
        nonce: r
      }), h.jsx(Ml.Slot, {
        scope: n,
        children: h.jsx(K.div, {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            position: "relative",
            flex: 1,
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: B(o.onScroll, c => {
            const u = c.currentTarget,
              {
                contentWrapper: d,
                shouldExpandOnScrollRef: f
              } = s;
            if (f?.current && d) {
              const y = Math.abs(l.current - u.scrollTop);
              if (y > 0) {
                const w = window.innerHeight - kt * 2,
                  m = parseFloat(d.style.minHeight),
                  S = parseFloat(d.style.height),
                  v = Math.max(m, S);
                if (v < w) {
                  const g = v + y,
                    x = Math.min(w, g),
                    b = g - x;
                  d.style.height = x + "px", d.style.bottom === "0px" && (u.scrollTop = b > 0 ? b : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = u.scrollTop;
          })
        })
      })]
    });
  });
$w.displayName = sd;
var Fw = "SelectGroup",
  [b6, E6] = bo(Fw),
  k6 = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        ...r
      } = e,
      o = In();
    return h.jsx(b6, {
      scope: n,
      id: o,
      children: h.jsx(K.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t
      })
    });
  });
k6.displayName = Fw;
var zw = "SelectLabel",
  Bw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        ...r
      } = e,
      o = E6(zw, n);
    return h.jsx(K.div, {
      id: o.id,
      ...r,
      ref: t
    });
  });
Bw.displayName = zw;
var Da = "SelectItem",
  [P6, Vw] = bo(Da),
  Hw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...s
      } = e,
      a = Kn(Da, n),
      l = Gn(Da, n),
      c = a.value === r,
      [u, d] = p.useState(i ?? ""),
      [f, y] = p.useState(!1),
      w = ee(t, g => l.itemRefCallback?.(g, r, o)),
      m = In(),
      S = p.useRef("touch"),
      v = () => {
        o || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return h.jsx(P6, {
      scope: n,
      value: r,
      disabled: o,
      textId: m,
      isSelected: c,
      onItemTextChange: p.useCallback(g => {
        d(x => x || (g?.textContent ?? "").trim());
      }, []),
      children: h.jsx(Ml.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: u,
        children: h.jsx(K.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": f ? "" : void 0,
          "aria-selected": c && f,
          "data-state": c ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: w,
          onFocus: B(s.onFocus, () => y(!0)),
          onBlur: B(s.onBlur, () => y(!1)),
          onClick: B(s.onClick, () => {
            S.current !== "mouse" && v();
          }),
          onPointerUp: B(s.onPointerUp, () => {
            S.current === "mouse" && v();
          }),
          onPointerDown: B(s.onPointerDown, g => {
            S.current = g.pointerType;
          }),
          onPointerMove: B(s.onPointerMove, g => {
            S.current = g.pointerType, o ? l.onItemLeave?.() : S.current === "mouse" && g.currentTarget.focus({
              preventScroll: !0
            });
          }),
          onPointerLeave: B(s.onPointerLeave, g => {
            g.currentTarget === document.activeElement && l.onItemLeave?.();
          }),
          onKeyDown: B(s.onKeyDown, g => {
            l.searchRef?.current !== "" && g.key === " " || (f6.includes(g.key) && v(), g.key === " " && g.preventDefault());
          })
        })
      })
    });
  });
Hw.displayName = Da;
var Ko = "SelectItemText",
  Uw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        ...i
      } = e,
      s = Kn(Ko, n),
      a = Gn(Ko, n),
      l = Vw(Ko, n),
      c = g6(Ko, n),
      [u, d] = p.useState(null),
      f = ee(t, v => d(v), l.onItemTextChange, v => a.itemTextRefCallback?.(v, l.value, l.disabled)),
      y = u?.textContent,
      w = p.useMemo(() => h.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: y
      }, l.value), [l.disabled, l.value, y]),
      {
        onNativeOptionAdd: m,
        onNativeOptionRemove: S
      } = c;
    return Ve(() => (m(w), () => S(w)), [m, S, w]), h.jsxs(h.Fragment, {
      children: [h.jsx(K.span, {
        id: l.textId,
        ...i,
        ref: f
      }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? wr.createPortal(i.children, s.valueNode) : null]
    });
  });
Uw.displayName = Ko;
var Ww = "SelectItemIndicator",
  Kw = p.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e;
    return Vw(Ww, n).isSelected ? h.jsx(K.span, {
      "aria-hidden": !0,
      ...r,
      ref: t
    }) : null;
  });
Kw.displayName = Ww;
var ad = "SelectScrollUpButton",
  Gw = p.forwardRef((e, t) => {
    const n = Gn(ad, e.__scopeSelect),
      r = op(ad, e.__scopeSelect),
      [o, i] = p.useState(!1),
      s = ee(t, r.onScrollButtonChange);
    return Ve(() => {
      if (n.viewport && n.isPositioned) {
        let a = function () {
          const c = l.scrollTop > 0;
          i(c);
        };
        const l = n.viewport;
        return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
      }
    }, [n.viewport, n.isPositioned]), o ? h.jsx(Yw, {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const {
          viewport: a,
          selectedItem: l
        } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }) : null;
  });
Gw.displayName = ad;
var ld = "SelectScrollDownButton",
  Xw = p.forwardRef((e, t) => {
    const n = Gn(ld, e.__scopeSelect),
      r = op(ld, e.__scopeSelect),
      [o, i] = p.useState(!1),
      s = ee(t, r.onScrollButtonChange);
    return Ve(() => {
      if (n.viewport && n.isPositioned) {
        let a = function () {
          const c = l.scrollHeight - l.clientHeight,
            u = Math.ceil(l.scrollTop) < c;
          i(u);
        };
        const l = n.viewport;
        return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
      }
    }, [n.viewport, n.isPositioned]), o ? h.jsx(Yw, {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const {
          viewport: a,
          selectedItem: l
        } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }) : null;
  });
Xw.displayName = ld;
var Yw = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        onAutoScroll: r,
        ...o
      } = e,
      i = Gn("SelectScrollButton", n),
      s = p.useRef(null),
      a = Dl(n),
      l = p.useCallback(() => {
        s.current !== null && (window.clearInterval(s.current), s.current = null);
      }, []);
    return p.useEffect(() => () => l(), [l]), Ve(() => {
      a().find(u => u.ref.current === document.activeElement)?.ref.current?.scrollIntoView({
        block: "nearest"
      });
    }, [a]), h.jsx(K.div, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: {
        flexShrink: 0,
        ...o.style
      },
      onPointerDown: B(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: B(o.onPointerMove, () => {
        i.onItemLeave?.(), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: B(o.onPointerLeave, () => {
        l();
      })
    });
  }),
  T6 = "SelectSeparator",
  Qw = p.forwardRef((e, t) => {
    const {
      __scopeSelect: n,
      ...r
    } = e;
    return h.jsx(K.div, {
      "aria-hidden": !0,
      ...r,
      ref: t
    });
  });
Qw.displayName = T6;
var cd = "SelectArrow",
  N6 = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        ...r
      } = e,
      o = $l(n),
      i = Kn(cd, n),
      s = Gn(cd, n);
    return i.open && s.position === "popper" ? h.jsx(ey, {
      ...o,
      ...r,
      ref: t
    }) : null;
  });
N6.displayName = cd;
function qw(e) {
  return e === "" || e === void 0;
}
var Zw = p.forwardRef((e, t) => {
  const {
      value: n,
      ...r
    } = e,
    o = p.useRef(null),
    i = ee(t, o),
    s = Pw(n);
  return p.useEffect(() => {
    const a = o.current,
      l = window.HTMLSelectElement.prototype,
      u = Object.getOwnPropertyDescriptor(l, "value").set;
    if (s !== n && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(a, n), a.dispatchEvent(d);
    }
  }, [s, n]), h.jsx(rl, {
    asChild: !0,
    children: h.jsx("select", {
      ...r,
      ref: i,
      defaultValue: n
    })
  });
});
Zw.displayName = "BubbleSelect";
function Jw(e) {
  const t = Le(e),
    n = p.useRef(""),
    r = p.useRef(0),
    o = p.useCallback(s => {
      const a = n.current + s;
      t(a), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    }, [t]),
    i = p.useCallback(() => {
      n.current = "", window.clearTimeout(r.current);
    }, []);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function ex(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(c => c === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = R6(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter(c => c !== n));
  const l = s.find(c => c.textValue.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function R6(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var O6 = Tw,
  tx = Rw,
  A6 = Aw,
  _6 = _w,
  j6 = jw,
  nx = Iw,
  I6 = $w,
  rx = Bw,
  ox = Hw,
  L6 = Uw,
  M6 = Kw,
  ix = Gw,
  sx = Xw,
  ax = Qw;
const D6 = O6,
  $6 = A6,
  lx = p.forwardRef(({
    className: e,
    children: t,
    ...n
  }, r) => h.jsxs(tx, {
    ref: r,
    className: W("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...n,
    children: [t, h.jsx(_6, {
      asChild: !0,
      children: h.jsx(qS, {
        className: "h-4 w-4 opacity-50"
      })
    })]
  }));
lx.displayName = tx.displayName;
const cx = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(ix, {
  ref: n,
  className: W("flex cursor-default items-center justify-center py-1", e),
  ...t,
  children: h.jsx(oC, {})
}));
cx.displayName = ix.displayName;
const ux = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(sx, {
  ref: n,
  className: W("flex cursor-default items-center justify-center py-1", e),
  ...t,
  children: h.jsx(eC, {})
}));
ux.displayName = sx.displayName;
const dx = p.forwardRef(({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}, o) => h.jsx(j6, {
  children: h.jsxs(nx, {
    ref: o,
    className: W("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
    position: n,
    ...r,
    children: [h.jsx(cx, {}), h.jsx(I6, {
      className: W("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
      children: t
    }), h.jsx(ux, {})]
  })
}));
dx.displayName = nx.displayName;
const F6 = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(rx, {
  ref: n,
  className: W("px-2 py-1.5 text-sm font-semibold", e),
  ...t
}));
F6.displayName = rx.displayName;
const Qs = p.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => h.jsxs(ox, {
  ref: r,
  className: W("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
  ...n,
  children: [h.jsx("span", {
    className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
    children: h.jsx(M6, {
      children: h.jsx(Y0, {
        className: "h-4 w-4"
      })
    })
  }), h.jsx(L6, {
    children: t
  })]
}));
Qs.displayName = ox.displayName;
const z6 = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(ax, {
  ref: n,
  className: W("-mx-1 my-1 h-px bg-muted", e),
  ...t
}));
z6.displayName = ax.displayName;
var ip = "Switch",
  [B6, IR] = xr(ip),
  [V6, H6] = B6(ip),
  fx = p.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: r,
        checked: o,
        defaultChecked: i,
        required: s,
        disabled: a,
        value: l = "on",
        onCheckedChange: c,
        form: u,
        ...d
      } = e,
      [f, y] = p.useState(null),
      w = ee(t, x => y(x)),
      m = p.useRef(!1),
      S = f ? u || !!f.closest("form") : !0,
      [v = !1, g] = dr({
        prop: o,
        defaultProp: i,
        onChange: c
      });
    return h.jsxs(V6, {
      scope: n,
      checked: v,
      disabled: a,
      children: [h.jsx(K.button, {
        type: "button",
        role: "switch",
        "aria-checked": v,
        "aria-required": s,
        "data-state": mx(v),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: l,
        ...d,
        ref: w,
        onClick: B(e.onClick, x => {
          g(b => !b), S && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
        })
      }), S && h.jsx(U6, {
        control: f,
        bubbles: !m.current,
        name: r,
        value: l,
        checked: v,
        required: s,
        disabled: a,
        form: u,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    });
  });
fx.displayName = ip;
var px = "SwitchThumb",
  hx = p.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        ...r
      } = e,
      o = H6(px, n);
    return h.jsx(K.span, {
      "data-state": mx(o.checked),
      "data-disabled": o.disabled ? "" : void 0,
      ...r,
      ref: t
    });
  });
hx.displayName = px;
var U6 = e => {
  const {
      control: t,
      checked: n,
      bubbles: r = !0,
      ...o
    } = e,
    i = p.useRef(null),
    s = Pw(n),
    a = B1(t);
  return p.useEffect(() => {
    const l = i.current,
      c = window.HTMLInputElement.prototype,
      d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(l, n), l.dispatchEvent(f);
    }
  }, [s, n, r]), h.jsx("input", {
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n,
    ...o,
    tabIndex: -1,
    ref: i,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  });
};
function mx(e) {
  return e ? "checked" : "unchecked";
}
var gx = fx,
  W6 = hx;
const qs = p.forwardRef(({
  className: e,
  ...t
}, n) => h.jsx(gx, {
  className: W("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
  ...t,
  ref: n,
  children: h.jsx(W6, {
    className: W("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")
  })
}));
qs.displayName = gx.displayName;
const Em = ({
  trigger: e,
  trustedDevice: t,
  onConfirm: n
}) => {
  const {
      t: r
    } = mn(),
    [o, i] = p.useState(t?.name),
    [s, a] = p.useState(t?.publicKey);
  return p.useEffect(() => {
    i(t?.name), a(t?.publicKey);
  }, []), h.jsxs(Cf, {
    children: [h.jsx(bf, {
      children: e
    }), h.jsxs(ul, {
      children: [h.jsx(dl, {
        children: h.jsx(pl, {
          children: r(t ? "editTrustedDevice" : "addTrustedDevice")
        })
      }), h.jsxs("div", {
        className: "flex flex-col",
        children: [h.jsx("div", {
          className: "text-md font-medium mb-2",
          children: r("nickname")
        }), h.jsx("div", {
          className: "mb-6",
          children: h.jsx(on, {
            value: o,
            onChange: l => i(l.target.value)
          })
        }), h.jsx("div", {
          className: "text-md font-medium mb-2",
          children: r("deviceId")
        }), h.jsx("div", {
          className: "mb-1",
          children: h.jsx(on, {
            value: s,
            onChange: l => a(l.target.value)
          })
        })]
      }), h.jsxs(fl, {
        children: [h.jsx(uo, {
          asChild: !0,
          children: h.jsx(Se, {
            variant: "secondary",
            children: r("cancel")
          })
        }), h.jsx(uo, {
          asChild: !0,
          children: h.jsx(Se, {
            onClick: () => {
              t || (i(""), a("")), n({
                name: o,
                publicKey: s
              });
            },
            children: r("confirm")
          })
        })]
      })]
    })]
  });
};
function K6() {
  const {
      toast: e
    } = sl(),
    {
      t
    } = mn(),
    [n, r] = p.useState(""),
    [o, i] = p.useState(""),
    [s, a] = p.useState(!1),
    [l, c] = p.useState(!1),
    [u, d] = p.useState(0),
    [f, y] = p.useState(0),
    [w, m] = p.useState(""),
    [S, v] = p.useState({}),
    [g, x] = p.useState("auto"),
    [b, k] = p.useState(!1);
  return p.useEffect(() => {
    window.api.getDeviceName().then(E => r(E)), window.api.getDownloadPath().then(E => i(E)), window.api.getDiscoverable().then(E => a(E)), window.api.getAutoOpenDownloadFolder().then(E => c(E)), window.api.getServerPort().then(E => d(E)), window.api.getListeningPort().then(E => y(E)), window.api.getDeviceId().then(E => m(E)), window.api.getTrustedDevices().then(E => v(E)), window.api.getLanguage().then(E => {
      x(E), E !== "auto" && Mc(E);
    }), window.api.getOpenAtLogin().then(E => k(E));
  }, []), p.useEffect(() => window.api.on("trusted-devices-updated", (E, P) => {
    v(P);
  }), []), h.jsxs("div", {
    className: "p-8 h-screen overflow-y-auto",
    children: [h.jsx("h1", {
      className: "text-2xl font-bold mb-4",
      children: t("settings")
    }), h.jsx("div", {
      className: "border-t border-gray-200 mb-4"
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("deviceName")
    }), h.jsx("div", {
      className: "mb-1 w-1/2",
      children: h.jsx(on, {
        value: n,
        onChange: E => {
          r(E.target.value), window.api.setDeviceName(E.target.value);
        }
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("deviceNameDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("downloadPath")
    }), h.jsxs("div", {
      className: "flex items-center mb-1 w-3/4 space-x-2",
      children: [h.jsx(on, {
        value: o,
        readOnly: !0
      }), h.jsx(Se, {
        variant: "outline",
        size: "icon",
        onClick: () => {
          window.api.openDirectory().then(E => {
            E && (i(E), window.api.setDownloadPath(E));
          });
        },
        children: h.jsx(dC, {})
      }), h.jsx(Se, {
        variant: "outline",
        onClick: () => window.api.openDownloadFolder(),
        children: t("open")
      })]
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("downloadPathDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("discoverable")
    }), h.jsx("div", {
      className: "mb-1",
      children: h.jsx(qs, {
        checked: s,
        onCheckedChange: E => {
          window.api.analytics.logToggleDiscoverableProfilePage(E), a(E), window.api.setDiscoverable(E);
        }
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("discoverableDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("openDownloadFolder")
    }), h.jsx("div", {
      className: "mb-1",
      children: h.jsx(qs, {
        checked: l,
        onCheckedChange: E => {
          window.api.analytics.logToggleOpenDownloadFolder(E), c(E), window.api.setAutoOpenDownloadFolder(E);
        }
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("autoOpenDownloadFolderDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("openAtLogin")
    }), h.jsx("div", {
      className: "mb-1",
      children: h.jsx(qs, {
        checked: b,
        onCheckedChange: E => {
          window.api.analytics.logToggleOpenAtLogin(E), k(E), window.api.setOpenAtLogin(E);
        }
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("openAtLoginDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("language")
    }), h.jsx("div", {
      className: "mb-6",
      children: h.jsxs(D6, {
        value: g,
        onValueChange: E => {
          window.api.analytics.logChangeLanguage(E), x(E), window.api.setLanguage(E), Mc(E !== "auto" ? E : navigator.language);
        },
        children: [h.jsx(lx, {
          className: "w-40",
          children: h.jsx($6, {})
        }), h.jsxs(dx, {
          children: [h.jsx(Qs, {
            value: "auto",
            children: t("systemLanguage")
          }), h.jsx(Qs, {
            value: "en-US",
            children: "English"
          }), h.jsx(Qs, {
            value: "zh-CN",
            children: "简体中文"
          })]
        })]
      })
    }), h.jsx("div", {
      className: "text-md font-medium mb-1",
      children: t("listeningPort")
    }), h.jsxs("div", {
      className: "text-xs text-gray-500 mb-1",
      children: [t("currentPort"), ": ", u]
    }), h.jsx("div", {
      className: "mb-1 w-1/4",
      children: h.jsx(on, {
        type: "number",
        value: f,
        onChange: E => {
          const P = parseInt(E.target.value);
          y(P), window.api.setListeningPort(P);
        }
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("listeningPortDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("myDeviceId")
    }), h.jsxs("div", {
      className: "flex mb-1 space-x-2 items-center",
      children: [h.jsx("span", {
        className: "text-md font-mono",
        children: w
      }), h.jsx(Se, {
        variant: "outline",
        size: "icon",
        className: "w-7 h-7",
        onClick: () => {
          window.api.analytics.logCopyDeviceId(), navigator.clipboard.writeText(w), e({
            title: t("deviceIdCopied"),
            description: w,
            duration: 3e3
          });
        },
        children: h.jsx(sC, {})
      })]
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("deviceIdDetails")
    }), h.jsxs("div", {
      className: "flex text-md font-medium mb-2 items-center space-x-2",
      children: [h.jsx("span", {
        children: t("trustedDevices")
      }), h.jsx(Em, {
        trigger: h.jsx(Se, {
          variant: "outline",
          size: "icon",
          className: "w-7 h-7",
          children: h.jsx(Q0, {})
        }),
        onConfirm: E => {
          window.api.analytics.logAddTrustedDevice(E), window.api.addTrustedDevice(E);
        }
      })]
    }), h.jsx("div", {
      className: "mb-1",
      children: h.jsxs(qf, {
        children: [h.jsx(Zf, {
          children: h.jsxs(Ai, {
            children: [h.jsx(or, {
              children: t("nickname")
            }), h.jsx(or, {
              children: t("deviceId")
            }), h.jsx(or, {
              className: "text-right",
              children: t("actions")
            })]
          })
        }), h.jsx(Jf, {
          children: S.devices && S.devices.map((E, P) => h.jsxs(Ai, {
            children: [h.jsx(ir, {
              children: E.name
            }), h.jsx(ir, {
              children: E.publicKey
            }), h.jsxs(ir, {
              className: "text-right space-x-1",
              children: [h.jsx(Em, {
                trigger: h.jsx(Se, {
                  variant: "outline",
                  size: "icon",
                  className: "w-7 h-7",
                  children: h.jsx(wC, {})
                }),
                trustedDevice: E,
                onConfirm: A => {
                  window.api.analytics.logEditTrustedDevice(E, A), window.api.editTrustedDevice(P, A);
                }
              }), h.jsx(Se, {
                variant: "outline",
                size: "icon",
                className: "w-7 h-7",
                onClick: () => {
                  window.api.analytics.logDeleteTrustedDevice(E), window.api.removeTrustedDeviceByIndex(P);
                },
                children: h.jsx(CC, {})
              })]
            })]
          }, E.publicKey + P))
        })]
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("trustedDevicesDetails")
    }), h.jsx("div", {
      className: "text-md font-medium mb-2",
      children: t("troubleshootNetworkIssues")
    }), h.jsx("div", {
      className: "mb-1 w-1/2",
      children: h.jsx(Se, {
        variant: "outline",
        onClick: async () => {
          try {
            await window.api.fixFirewall(), e({
              title: t("firewallFixed"),
              description: t("firewallFixedDescription"),
              duration: 3e3
            });
          } catch (E) {
            e({
              title: t("failedToFixFirewall"),
              description: E.message,
              variant: "destructive",
              duration: 365 * 24 * 60 * 60 * 1e3
            });
          }
        },
        children: t("fixFirewall")
      })
    }), h.jsx("div", {
      className: "text-xs text-gray-500 mb-6",
      children: t("fixFirewallDetails")
    })]
  });
}
function G6() {
  const {
      t: e
    } = mn(),
    {
      toast: t
    } = sl(),
    [n, r] = p.useState("home");
  return p.useEffect(() => window.api.on("file-send-request-recved", async (o, i, s) => {
    let a = "";
    i.fileSendRequest.files.length === 1 ? a = e("singleFileReceivedPrompt", {
      deviceName: i.deviceInfo.name,
      filename: i.fileSendRequest.files[0].filename,
      totalSize: _i(i.fileSendRequest.files[0].size)
    }) : a = e("multipleFilesReceivedPrompt", {
      deviceName: i.deviceInfo.name,
      numOfFiles: i.fileSendRequest.files.length,
      totalSize: _i(i.fileTotalSize)
    }), t({
      title: a,
      description: e("fileReceivedConfirmation", {
        verifCode: i.verifCode
      }),
      action: h.jsxs("div", {
        className: "flex space-x-2",
        children: [h.jsx(qn, {
          onClick: () => window.api.replyFileSendRequest(!0, s),
          altText: "Yes",
          children: e("yes")
        }), h.jsx(qn, {
          onClick: () => window.api.replyFileSendRequest(!1, s),
          altText: "No",
          children: e("no")
        })]
      }),
      duration: 365 * 24 * 60 * 60 * 1e3
    });
  }), []), p.useEffect(() => window.api.on("file-receive-done", async (o, i) => {
    !(await window.api.getTrustedDeviceByPublicKey(i.publicKeyBase64)) && (await window.api.getTrustedDeviceAskTimes(i.publicKeyBase64)) < 1 && (t({
      title: e("trustDeviceTitle", {
        deviceName: i.deviceInfo.name
      }),
      description: e("trustDeviceDescription"),
      action: h.jsx(qn, {
        onClick: () => {
          window.api.analytics.logTrustDeviceSnackbar(i), window.api.addTrustedDevice({
            name: i.deviceInfo.name,
            publicKey: i.publicKeyBase64
          });
        },
        altText: "Trust",
        children: e("trust")
      }),
      duration: 365 * 24 * 60 * 60 * 1e3
    }), window.api.incrementTrustedDeviceAskTimes(i.publicKeyBase64));
  }), []), p.useEffect(() => window.api.on("text-recved", (o, i, s) => {
    t({
      title: e("textReceivedPrompt", {
        deviceName: s.deviceInfo.name
      }),
      description: h.jsx("pre", {
        className: "whitespace-pre-wrap break-words w-72",
        dangerouslySetInnerHTML: {
          __html: CN(i)
        }
      }),
      action: h.jsx(qn, {
        onClick: () => navigator.clipboard.writeText(i),
        altText: "Copy",
        children: e("copy")
      }),
      duration: 365 * 24 * 60 * 60 * 1e3
    });
  }), []), p.useEffect(() => window.api.on("announcement", async (o, i) => {
    let s = await window.api.getLanguage();
    s === "auto" && (s = navigator.language), s = s.slice(0, 2), s in i || (s = "en");
    const a = i[s];
    t({
      title: a.title,
      description: a.content,
      action: h.jsx(qn, {
        onClick: () => window.open(a.cta_url),
        altText: a.cta,
        children: a.cta
      }),
      duration: 365 * 24 * 60 * 60 * 1e3
    });
  }), []), p.useEffect(() => (window.api.startCheckingForUpdates(), window.api.on("update-downloaded", () => {
    t({
      title: e("updateAvailable"),
      description: e("updateDescription"),
      action: h.jsx(qn, {
        altText: "Restart",
        onClick: window.api.quitAndInstallUpdates,
        children: e("restart")
      }),
      duration: 365 * 24 * 60 * 60 * 1e3
    });
  })), []), p.useEffect(() => window.api.on("prepare-send-files-ui", () => {
    r("home");
  }), []), p.useEffect(() => window.api.on("prepare-send-text-ui", () => {
    r("home");
  }), []), p.useEffect(() => window.api.on("prepare-settings-ui", () => {
    r("settings");
  }), []), h.jsxs("div", {
    className: "flex h-screen",
    children: [h.jsxs("div", {
      className: "w-48 py-4",
      children: [h.jsxs("div", {
        className: "flex items-center mb-4 justify-center",
        children: [h.jsx("img", {
          src: FC,
          alt: "LANDrop Logo",
          className: "w-6 h-6 mr-2"
        }), h.jsx("h1", {
          className: "text-lg",
          children: "LANDrop"
        })]
      }), h.jsx("div", {
        className: "border-t border-gray-200 mb-4"
      }), h.jsxs("nav", {
        className: "space-y-2 px-2",
        children: [h.jsxs(Se, {
          variant: "ghost",
          className: `w-full justify-start ${n === "home" ? "bg-gray-100" : ""}`,
          onClick: () => {
            window.api.analytics.logGoToTab("home"), r("home");
          },
          children: [h.jsx(mC, {
            className: "mr-2"
          }), e("home")]
        }), h.jsxs(Se, {
          variant: "ghost",
          className: `w-full justify-start ${n === "settings" ? "bg-gray-100" : ""}`,
          onClick: () => {
            window.api.analytics.logGoToTab("settings"), r("settings");
          },
          children: [h.jsx(pC, {
            className: "mr-2"
          }), e("settings")]
        })]
      })]
    }), h.jsx("div", {
      className: "w-px bg-gray-200 h-full"
    }), h.jsxs("div", {
      className: "flex-1",
      children: [h.jsx("div", {
        className: n === "home" ? "block" : "hidden",
        children: h.jsx(BN, {})
      }), h.jsx("div", {
        className: n === "settings" ? "block" : "hidden",
        children: h.jsx(K6, {})
      })]
    })]
  });
}
function X6() {
  const {
    toasts: e
  } = sl();
  return h.jsxs(l5, {
    children: [e.map(function ({
      id: t,
      title: n,
      description: r,
      action: o,
      ...i
    }) {
      return h.jsxs(_v, {
        ...i,
        children: [h.jsxs("div", {
          className: "grid gap-1",
          children: [n && h.jsx(Iv, {
            children: n
          }), r && h.jsx(Lv, {
            children: r
          })]
        }), o, h.jsx(jv, {})]
      }, t);
    }), h.jsx(Av, {})]
  });
}
const {
  slice: Y6,
  forEach: Q6
} = [];
function q6(e) {
  return Q6.call(Y6.call(arguments, 1), t => {
    if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const km = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Z6 = (e, t, n) => {
    const r = n || {};
    r.path = r.path || "/";
    const o = encodeURIComponent(t);
    let i = `${e}=${o}`;
    if (r.maxAge > 0) {
      const s = r.maxAge - 0;
      if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
      i += `; Max-Age=${Math.floor(s)}`;
    }
    if (r.domain) {
      if (!km.test(r.domain)) throw new TypeError("option domain is invalid");
      i += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!km.test(r.path)) throw new TypeError("option path is invalid");
      i += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
      i += `; Expires=${r.expires.toUTCString()}`;
    }
    if (r.httpOnly && (i += "; HttpOnly"), r.secure && (i += "; Secure"), r.sameSite) switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
    return i;
  },
  Pm = {
    create(e, t, n, r) {
      let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        path: "/",
        sameSite: "strict"
      };
      n && (o.expires = new Date(), o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)), r && (o.domain = r), document.cookie = Z6(e, encodeURIComponent(t), o);
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(";");
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        for (; o.charAt(0) === " ";) o = o.substring(1, o.length);
        if (o.indexOf(t) === 0) return o.substring(t.length, o.length);
      }
      return null;
    },
    remove(e) {
      this.create(e, "", -1);
    }
  };
var J6 = {
    name: "cookie",
    lookup(e) {
      let {
        lookupCookie: t
      } = e;
      if (t && typeof document < "u") return Pm.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: o,
        cookieOptions: i
      } = t;
      n && typeof document < "u" && Pm.create(n, e, r, o, i);
    }
  },
  eR = {
    name: "querystring",
    lookup(e) {
      let {
          lookupQuerystring: t
        } = e,
        n;
      if (typeof window < "u") {
        let {
          search: r
        } = window.location;
        !window.location.search && window.location.hash?.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
        const i = r.substring(1).split("&");
        for (let s = 0; s < i.length; s++) {
          const a = i[s].indexOf("=");
          a > 0 && i[s].substring(0, a) === t && (n = i[s].substring(a + 1));
        }
      }
      return n;
    }
  };
let Do = null;
const Tm = () => {
  if (Do !== null) return Do;
  try {
    Do = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    Do = !1;
  }
  return Do;
};
var tR = {
  name: "localStorage",
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && Tm()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && Tm() && window.localStorage.setItem(n, e);
  }
};
let $o = null;
const Nm = () => {
  if ($o !== null) return $o;
  try {
    $o = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    $o = !1;
  }
  return $o;
};
var nR = {
    name: "sessionStorage",
    lookup(e) {
      let {
        lookupSessionStorage: t
      } = e;
      if (t && Nm()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupSessionStorage: n
      } = t;
      n && Nm() && window.sessionStorage.setItem(n, e);
    }
  },
  rR = {
    name: "navigator",
    lookup(e) {
      const t = [];
      if (typeof navigator < "u") {
        const {
          languages: n,
          userLanguage: r,
          language: o
        } = navigator;
        if (n) for (let i = 0; i < n.length; i++) t.push(n[i]);
        r && t.push(r), o && t.push(o);
      }
      return t.length > 0 ? t : void 0;
    }
  },
  oR = {
    name: "htmlTag",
    lookup(e) {
      let {
          htmlTag: t
        } = e,
        n;
      const r = t || (typeof document < "u" ? document.documentElement : null);
      return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
    }
  },
  iR = {
    name: "path",
    lookup(e) {
      let {
        lookupFromPathIndex: t
      } = e;
      if (typeof window > "u") return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n) ? n[typeof t == "number" ? t : 0]?.replace("/", "") : void 0;
    }
  },
  sR = {
    name: "subdomain",
    lookup(e) {
      let {
        lookupFromSubdomainIndex: t
      } = e;
      const n = typeof t == "number" ? t + 1 : 1,
        r = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
      if (r) return r[n];
    }
  };
function aR() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: e => e
  };
}
class vx {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = q6(n, this.options || {}, aR()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = o => o.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(J6), this.addDetector(eR), this.addDetector(tR), this.addDetector(nR), this.addDetector(rR), this.addDetector(oR), this.addDetector(iR), this.addDetector(sR);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach(r => {
      if (this.detectors[r]) {
        let o = this.detectors[r].lookup(this.options);
        o && typeof o == "string" && (o = [o]), o && (n = n.concat(o));
      }
    }), n = n.map(r => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach(r => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
vx.type = "languageDetector";
function ud(e) {
  "@babel/helpers - typeof";

  return ud = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
    return typeof t;
  } : function (t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ud(e);
}
function yx() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : ud(XMLHttpRequest)) === "object";
}
function lR(e) {
  return !!e && typeof e.then == "function";
}
function cR(e) {
  return lR(e) ? e : Promise.resolve(e);
}
function uR(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var dd = {
    exports: {}
  },
  Ns = {
    exports: {}
  },
  Rm;
function dR() {
  return Rm || (Rm = 1, function (e, t) {
    var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof Go < "u" && Go,
      r = function () {
        function i() {
          this.fetch = !1, this.DOMException = n.DOMException;
        }
        return i.prototype = n, new i();
      }();
    (function (i) {
      (function (s) {
        var a = typeof i < "u" && i || typeof self < "u" && self || typeof a < "u" && a,
          l = {
            searchParams: "URLSearchParams" in a,
            iterable: "Symbol" in a && "iterator" in Symbol,
            blob: "FileReader" in a && "Blob" in a && function () {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            }(),
            formData: "FormData" in a,
            arrayBuffer: "ArrayBuffer" in a
          };
        function c(T) {
          return T && DataView.prototype.isPrototypeOf(T);
        }
        if (l.arrayBuffer) var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          d = ArrayBuffer.isView || function (T) {
            return T && u.indexOf(Object.prototype.toString.call(T)) > -1;
          };
        function f(T) {
          if (typeof T != "string" && (T = String(T)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(T) || T === "") throw new TypeError('Invalid character in header field name: "' + T + '"');
          return T.toLowerCase();
        }
        function y(T) {
          return typeof T != "string" && (T = String(T)), T;
        }
        function w(T) {
          var R = {
            next: function () {
              var F = T.shift();
              return {
                done: F === void 0,
                value: F
              };
            }
          };
          return l.iterable && (R[Symbol.iterator] = function () {
            return R;
          }), R;
        }
        function m(T) {
          this.map = {}, T instanceof m ? T.forEach(function (R, F) {
            this.append(F, R);
          }, this) : Array.isArray(T) ? T.forEach(function (R) {
            this.append(R[0], R[1]);
          }, this) : T && Object.getOwnPropertyNames(T).forEach(function (R) {
            this.append(R, T[R]);
          }, this);
        }
        m.prototype.append = function (T, R) {
          T = f(T), R = y(R);
          var F = this.map[T];
          this.map[T] = F ? F + ", " + R : R;
        }, m.prototype.delete = function (T) {
          delete this.map[f(T)];
        }, m.prototype.get = function (T) {
          return T = f(T), this.has(T) ? this.map[T] : null;
        }, m.prototype.has = function (T) {
          return this.map.hasOwnProperty(f(T));
        }, m.prototype.set = function (T, R) {
          this.map[f(T)] = y(R);
        }, m.prototype.forEach = function (T, R) {
          for (var F in this.map) this.map.hasOwnProperty(F) && T.call(R, this.map[F], F, this);
        }, m.prototype.keys = function () {
          var T = [];
          return this.forEach(function (R, F) {
            T.push(F);
          }), w(T);
        }, m.prototype.values = function () {
          var T = [];
          return this.forEach(function (R) {
            T.push(R);
          }), w(T);
        }, m.prototype.entries = function () {
          var T = [];
          return this.forEach(function (R, F) {
            T.push([F, R]);
          }), w(T);
        }, l.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries);
        function S(T) {
          if (T.bodyUsed) return Promise.reject(new TypeError("Already read"));
          T.bodyUsed = !0;
        }
        function v(T) {
          return new Promise(function (R, F) {
            T.onload = function () {
              R(T.result);
            }, T.onerror = function () {
              F(T.error);
            };
          });
        }
        function g(T) {
          var R = new FileReader(),
            F = v(R);
          return R.readAsArrayBuffer(T), F;
        }
        function x(T) {
          var R = new FileReader(),
            F = v(R);
          return R.readAsText(T), F;
        }
        function b(T) {
          for (var R = new Uint8Array(T), F = new Array(R.length), N = 0; N < R.length; N++) F[N] = String.fromCharCode(R[N]);
          return F.join("");
        }
        function k(T) {
          if (T.slice) return T.slice(0);
          var R = new Uint8Array(T.byteLength);
          return R.set(new Uint8Array(T)), R.buffer;
        }
        function E() {
          return this.bodyUsed = !1, this._initBody = function (T) {
            this.bodyUsed = this.bodyUsed, this._bodyInit = T, T ? typeof T == "string" ? this._bodyText = T : l.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : l.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : l.arrayBuffer && l.blob && c(T) ? (this._bodyArrayBuffer = k(T.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || d(T)) ? this._bodyArrayBuffer = k(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "", this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, l.blob && (this.blob = function () {
            var T = S(this);
            if (T) return T;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var T = S(this);
              return T || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
            } else return this.blob().then(g);
          }), this.text = function () {
            var T = S(this);
            if (T) return T;
            if (this._bodyBlob) return x(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(b(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, l.formData && (this.formData = function () {
            return this.text().then(C);
          }), this.json = function () {
            return this.text().then(JSON.parse);
          }, this;
        }
        var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function A(T) {
          var R = T.toUpperCase();
          return P.indexOf(R) > -1 ? R : T;
        }
        function L(T, R) {
          if (!(this instanceof L)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          R = R || {};
          var F = R.body;
          if (T instanceof L) {
            if (T.bodyUsed) throw new TypeError("Already read");
            this.url = T.url, this.credentials = T.credentials, R.headers || (this.headers = new m(T.headers)), this.method = T.method, this.mode = T.mode, this.signal = T.signal, !F && T._bodyInit != null && (F = T._bodyInit, T.bodyUsed = !0);
          } else this.url = String(T);
          if (this.credentials = R.credentials || this.credentials || "same-origin", (R.headers || !this.headers) && (this.headers = new m(R.headers)), this.method = A(R.method || this.method || "GET"), this.mode = R.mode || this.mode || null, this.signal = R.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && F) throw new TypeError("Body not allowed for GET or HEAD requests");
          if (this._initBody(F), (this.method === "GET" || this.method === "HEAD") && (R.cache === "no-store" || R.cache === "no-cache")) {
            var N = /([?&])_=[^&]*/;
            if (N.test(this.url)) this.url = this.url.replace(N, "$1_=" + new Date().getTime());else {
              var O = /\?/;
              this.url += (O.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
        L.prototype.clone = function () {
          return new L(this, {
            body: this._bodyInit
          });
        };
        function C(T) {
          var R = new FormData();
          return T.trim().split("&").forEach(function (F) {
            if (F) {
              var N = F.split("="),
                O = N.shift().replace(/\+/g, " "),
                M = N.join("=").replace(/\+/g, " ");
              R.append(decodeURIComponent(O), decodeURIComponent(M));
            }
          }), R;
        }
        function j(T) {
          var R = new m(),
            F = T.replace(/\r?\n[\t ]+/g, " ");
          return F.split("\r").map(function (N) {
            return N.indexOf(`
`) === 0 ? N.substr(1, N.length) : N;
          }).forEach(function (N) {
            var O = N.split(":"),
              M = O.shift().trim();
            if (M) {
              var U = O.join(":").trim();
              R.append(M, U);
            }
          }), R;
        }
        E.call(L.prototype);
        function I(T, R) {
          if (!(this instanceof I)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          R || (R = {}), this.type = "default", this.status = R.status === void 0 ? 200 : R.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = R.statusText === void 0 ? "" : "" + R.statusText, this.headers = new m(R.headers), this.url = R.url || "", this._initBody(T);
        }
        E.call(I.prototype), I.prototype.clone = function () {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new m(this.headers),
            url: this.url
          });
        }, I.error = function () {
          var T = new I(null, {
            status: 0,
            statusText: ""
          });
          return T.type = "error", T;
        };
        var z = [301, 302, 303, 307, 308];
        I.redirect = function (T, R) {
          if (z.indexOf(R) === -1) throw new RangeError("Invalid status code");
          return new I(null, {
            status: R,
            headers: {
              location: T
            }
          });
        }, s.DOMException = a.DOMException;
        try {
          new s.DOMException();
        } catch {
          s.DOMException = function (R, F) {
            this.message = R, this.name = F;
            var N = Error(R);
            this.stack = N.stack;
          }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
        }
        function D(T, R) {
          return new Promise(function (F, N) {
            var O = new L(T, R);
            if (O.signal && O.signal.aborted) return N(new s.DOMException("Aborted", "AbortError"));
            var M = new XMLHttpRequest();
            function U() {
              M.abort();
            }
            M.onload = function () {
              var q = {
                status: M.status,
                statusText: M.statusText,
                headers: j(M.getAllResponseHeaders() || "")
              };
              q.url = "responseURL" in M ? M.responseURL : q.headers.get("X-Request-URL");
              var ne = "response" in M ? M.response : M.responseText;
              setTimeout(function () {
                F(new I(ne, q));
              }, 0);
            }, M.onerror = function () {
              setTimeout(function () {
                N(new TypeError("Network request failed"));
              }, 0);
            }, M.ontimeout = function () {
              setTimeout(function () {
                N(new TypeError("Network request failed"));
              }, 0);
            }, M.onabort = function () {
              setTimeout(function () {
                N(new s.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function Y(q) {
              try {
                return q === "" && a.location.href ? a.location.href : q;
              } catch {
                return q;
              }
            }
            M.open(O.method, Y(O.url), !0), O.credentials === "include" ? M.withCredentials = !0 : O.credentials === "omit" && (M.withCredentials = !1), "responseType" in M && (l.blob ? M.responseType = "blob" : l.arrayBuffer && O.headers.get("Content-Type") && O.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (M.responseType = "arraybuffer")), R && typeof R.headers == "object" && !(R.headers instanceof m) ? Object.getOwnPropertyNames(R.headers).forEach(function (q) {
              M.setRequestHeader(q, y(R.headers[q]));
            }) : O.headers.forEach(function (q, ne) {
              M.setRequestHeader(ne, q);
            }), O.signal && (O.signal.addEventListener("abort", U), M.onreadystatechange = function () {
              M.readyState === 4 && O.signal.removeEventListener("abort", U);
            }), M.send(typeof O._bodyInit > "u" ? null : O._bodyInit);
          });
        }
        return D.polyfill = !0, a.fetch || (a.fetch = D, a.Headers = m, a.Request = L, a.Response = I), s.Headers = m, s.Request = L, s.Response = I, s.fetch = D, s;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var o = n.fetch ? n : r;
    t = o.fetch, t.default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t;
  }(Ns, Ns.exports)), Ns.exports;
}
(function (e, t) {
  var n;
  if (typeof fetch == "function" && (typeof Go < "u" && Go.fetch ? n = Go.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof uR < "u" && typeof window > "u") {
    var r = n || dR();
    r.default && (r = r.default), t.default = r, e.exports = t.default;
  }
})(dd, dd.exports);
var wx = dd.exports;
const xx = pd(wx),
  Om = Mm({
    __proto__: null,
    default: xx
  }, [wx]);
function Am(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(n), !0).forEach(function (r) {
      fR(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Am(Object(n)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fR(e, t, n) {
  return (t = pR(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function pR(e) {
  var t = hR(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function hR(e, t) {
  if (gr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (gr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gr(e) {
  "@babel/helpers - typeof";

  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
    return typeof t;
  } : function (t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
var sn;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? sn = global.fetch : typeof window < "u" && window.fetch ? sn = window.fetch : sn = fetch);
var Ii;
yx() && (typeof global < "u" && global.XMLHttpRequest ? Ii = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Ii = window.XMLHttpRequest));
var $a;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? $a = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && ($a = window.ActiveXObject));
!sn && Om && !Ii && !$a && (sn = xx || Om);
typeof sn != "function" && (sn = void 0);
var fd = function (t, n) {
    if (n && gr(n) === "object") {
      var r = "";
      for (var o in n) r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(n[o]);
      if (!r) return t;
      t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
    }
    return t;
  },
  jm = function (t, n, r, o) {
    var i = function (l) {
      if (!l.ok) return r(l.statusText || "Error", {
        status: l.status
      });
      l.text().then(function (c) {
        r(null, {
          status: l.status,
          data: c
        });
      }).catch(r);
    };
    if (o) {
      var s = o(t, n);
      if (s instanceof Promise) {
        s.then(i).catch(r);
        return;
      }
    }
    typeof fetch == "function" ? fetch(t, n).then(i).catch(r) : sn(t, n).then(i).catch(r);
  },
  Im = !1,
  mR = function (t, n, r, o) {
    t.queryStringParams && (n = fd(n, t.queryStringParams));
    var i = _m({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
    typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (i["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (i["Content-Type"] = "application/json");
    var s = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions,
      a = _m({
        method: r ? "POST" : "GET",
        body: r ? t.stringify(r) : void 0,
        headers: i
      }, Im ? {} : s),
      l = typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1 ? t.alternateFetch : void 0;
    try {
      jm(n, a, o, l);
    } catch (c) {
      if (!s || Object.keys(s).length === 0 || !c.message || c.message.indexOf("not implemented") < 0) return o(c);
      try {
        Object.keys(s).forEach(function (u) {
          delete a[u];
        }), jm(n, a, o, l), Im = !0;
      } catch (u) {
        o(u);
      }
    }
  },
  gR = function (t, n, r, o) {
    r && gr(r) === "object" && (r = fd("", r).slice(1)), t.queryStringParams && (n = fd(n, t.queryStringParams));
    try {
      var i;
      Ii ? i = new Ii() : i = new $a("MSXML2.XMLHTTP.3.0"), i.open(r ? "POST" : "GET", n, 1), t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.withCredentials = !!t.withCredentials, r && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.overrideMimeType && i.overrideMimeType("application/json");
      var s = t.customHeaders;
      if (s = typeof s == "function" ? s() : s, s) for (var a in s) i.setRequestHeader(a, s[a]);
      i.onreadystatechange = function () {
        i.readyState > 3 && o(i.status >= 400 ? i.statusText : null, {
          status: i.status,
          data: i.responseText
        });
      }, i.send(r);
    } catch (l) {
      console && console.log(l);
    }
  },
  vR = function (t, n, r, o) {
    if (typeof r == "function" && (o = r, r = void 0), o = o || function () {}, sn && n.indexOf("file:") !== 0) return mR(t, n, r, o);
    if (yx() || typeof ActiveXObject == "function") return gR(t, n, r, o);
    o(new Error("No fetch and no xhr implementation found!"));
  };
function mo(e) {
  "@babel/helpers - typeof";

  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
    return typeof t;
  } : function (t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
}
function Lm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lm(Object(n), !0).forEach(function (r) {
      Sx(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lm(Object(n)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function yR(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wR(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Cx(r.key), r);
  }
}
function xR(e, t, n) {
  return t && wR(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Sx(e, t, n) {
  return (t = Cx(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Cx(e) {
  var t = SR(e, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function SR(e, t) {
  if (mo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (mo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var CR = function () {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      parse: function (n) {
        return JSON.parse(n);
      },
      stringify: JSON.stringify,
      parsePayload: function (n, r, o) {
        return Sx({}, r, o || "");
      },
      parseLoadPayload: function (n, r) {},
      request: vR,
      reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default"
      }
    };
  },
  bx = function () {
    function e(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      yR(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r);
    }
    return xR(e, [{
      key: "init",
      value: function (n) {
        var r = this,
          o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (this.services = n, this.options = Dc(Dc(Dc({}, CR()), this.options || {}), o), this.allOptions = i, this.services && this.options.reloadInterval) {
          var s = setInterval(function () {
            return r.reload();
          }, this.options.reloadInterval);
          mo(s) === "object" && typeof s.unref == "function" && s.unref();
        }
      }
    }, {
      key: "readMulti",
      value: function (n, r, o) {
        this._readAny(n, n, r, r, o);
      }
    }, {
      key: "read",
      value: function (n, r, o) {
        this._readAny([n], n, [r], r, o);
      }
    }, {
      key: "_readAny",
      value: function (n, r, o, i, s) {
        var a = this,
          l = this.options.loadPath;
        typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, o)), l = cR(l), l.then(function (c) {
          if (!c) return s(null, {});
          var u = a.services.interpolator.interpolate(c, {
            lng: n.join("+"),
            ns: o.join("+")
          });
          a.loadUrl(u, s, r, i);
        });
      }
    }, {
      key: "loadUrl",
      value: function (n, r, o, i) {
        var s = this,
          a = typeof o == "string" ? [o] : o,
          l = typeof i == "string" ? [i] : i,
          c = this.options.parseLoadPayload(a, l);
        this.options.request(this.options, n, c, function (u, d) {
          if (d && (d.status >= 500 && d.status < 600 || !d.status)) return r("failed loading " + n + "; status code: " + d.status, !0);
          if (d && d.status >= 400 && d.status < 500) return r("failed loading " + n + "; status code: " + d.status, !1);
          if (!d && u && u.message) {
            var f = u.message.toLowerCase(),
              y = ["failed", "fetch", "network", "load"].find(function (S) {
                return f.indexOf(S) > -1;
              });
            if (y) return r("failed loading " + n + ": " + u.message, !0);
          }
          if (u) return r(u, !1);
          var w, m;
          try {
            typeof d.data == "string" ? w = s.options.parse(d.data, o, i) : w = d.data;
          } catch {
            m = "failed parsing " + n + " to json";
          }
          if (m) return r(m, !1);
          r(null, w);
        });
      }
    }, {
      key: "create",
      value: function (n, r, o, i, s) {
        var a = this;
        if (this.options.addPath) {
          typeof n == "string" && (n = [n]);
          var l = this.options.parsePayload(r, o, i),
            c = 0,
            u = [],
            d = [];
          n.forEach(function (f) {
            var y = a.options.addPath;
            typeof a.options.addPath == "function" && (y = a.options.addPath(f, r));
            var w = a.services.interpolator.interpolate(y, {
              lng: f,
              ns: r
            });
            a.options.request(a.options, w, l, function (m, S) {
              c += 1, u.push(m), d.push(S), c === n.length && typeof s == "function" && s(u, d);
            });
          });
        }
      }
    }, {
      key: "reload",
      value: function () {
        var n = this,
          r = this.services,
          o = r.backendConnector,
          i = r.languageUtils,
          s = r.logger,
          a = o.language;
        if (!(a && a.toLowerCase() === "cimode")) {
          var l = [],
            c = function (d) {
              var f = i.toResolveHierarchy(d);
              f.forEach(function (y) {
                l.indexOf(y) < 0 && l.push(y);
              });
            };
          c(a), this.allOptions.preload && this.allOptions.preload.forEach(function (u) {
            return c(u);
          }), l.forEach(function (u) {
            n.allOptions.ns.forEach(function (d) {
              o.read(u, d, "read", null, null, function (f, y) {
                f && s.warn("loading namespace ".concat(d, " for language ").concat(u, " failed"), f), !f && y && s.log("loaded namespace ".concat(d, " for language ").concat(u), y), o.loaded("".concat(u, "|").concat(d), f, y);
              });
            });
          });
        }
      }
    }]);
  }();
bx.type = "backend";
const bR = {
    translation: {
      sendFiles: "Send Files",
      sendText: "Send Text",
      transfers: "Transfers",
      noTransfers: "No Transfers",
      home: "Home",
      settings: "Settings",
      yes: "Yes",
      no: "No",
      devices: "Devices",
      fileCatcherHint: "Drag and drop your files here",
      chooseFiles: "Choose Files",
      chooseDirectories: "Choose Folders",
      clearAll: "Clear All",
      paste: "Paste",
      copy: "Copy",
      open: "Open",
      deviceName: "Device Name",
      downloadPath: "Download Path",
      discoverable: "Discoverable",
      openDownloadFolder: "Open Download Folder",
      listeningPort: "Listening Port",
      currentPort: "Current Port",
      myDeviceId: "My Device ID",
      trustedDevices: "Trusted Devices",
      nickname: "Nickname",
      deviceId: "Device ID",
      actions: "Actions",
      troubleshootNetworkIssues: "Troubleshoot Network Issues",
      fixFirewall: "Fix Firewall",
      filename: "Filename",
      size: "Size",
      remove: "Remove",
      selectedFilesInfo: "{{count}} file(s) selected. Total size: {{size}}.",
      addViaIpAndPort: "Add via IP & Port",
      addViaDeviceId: "Add via Device ID",
      ip: "IP",
      port: "Port",
      cancel: "Cancel",
      confirm: "Confirm",
      trustThisDevice: "Trust This Device",
      untrustThisDevice: "Untrust This Device",
      verifCodeColon: "Code: ",
      waiting: "Waiting",
      sending: "Sending",
      receiving: "Receiving",
      done: "Done",
      error: "Error",
      unknown: "Unknown",
      editTrustedDevice: "Edit Trusted Device",
      addTrustedDevice: "Add Trusted Device",
      failedToAddDevice: "Failed to add device",
      noDevicesDetected: "No Devices Detected",
      noFilesSelected: "No Files Selected",
      pleaseSelectFilesToSend: "Please select files to send",
      failedToSendFiles: "Failed to send files",
      textSent: "Text sent",
      textSentTo: "Text sent to {{deviceName}}",
      failedToSendText: "Failed to send text",
      singleFileReceivedPrompt: '{{deviceName}} would like to share a file "{{filename}}" of size {{totalSize}}',
      multipleFilesReceivedPrompt: "{{deviceName}} would like to share {{numOfFiles}} files of total size {{totalSize}}",
      fileReceivedConfirmation: "Confirm that the code {{verifCode}} is shown on the sending device. Would you like to receive it?",
      trustDeviceTitle: "Trust this device? ({{deviceName}})",
      trustDeviceDescription: "You'll be able to accept files from this device automatically in the future.",
      trust: "Trust",
      textReceivedPrompt: "{{deviceName}} sent the following text:",
      updateAvailable: "Update Available",
      updateDescription: "Restart LANDrop to update to the latest version",
      restart: "Restart",
      deviceNameDetails: "The name of your device as it will appear in others' device list.",
      downloadPathDetails: "The path where your received files will be saved.",
      discoverableDetails: "If enabled, your device will be discoverable by other devices.",
      autoOpenDownloadFolderDetails: "If enabled, the download folder will be opened automatically when a file is received.",
      listeningPortDetails: "The port on which your device will listen for incoming connections. Restart LANDrop for the change to take effect.",
      deviceIdCopied: "Device ID copied to clipboard",
      deviceIdDetails: "This is the unique identifier for your device.",
      trustedDevicesDetails: "Your device will automatically accept files from devices that are trusted.",
      firewallFixed: "Firewall fixed",
      firewallFixedDescription: "The firewall has been fixed.",
      failedToFixFirewall: "Failed to fix firewall",
      fixFirewallDetails: "If you are able to send files but not receive files on Windows, try to use it to solve the issue.",
      language: "Language",
      systemLanguage: "System",
      openAtLogin: "Launch LANDrop at Startup",
      openAtLoginDetails: "If enabled, LANDrop will launch automatically and silently when you start your computer."
    }
  },
  ER = {
    translation: {
      sendFiles: "发送文件",
      sendText: "发送文本",
      transfers: "传输",
      noTransfers: "无",
      home: "首页",
      settings: "设置",
      yes: "是",
      no: "否",
      devices: "设备",
      fileCatcherHint: "将文件拖放到这里",
      chooseFiles: "选择文件",
      chooseDirectories: "选择文件夹",
      clearAll: "清除所有",
      paste: "粘贴",
      copy: "复制",
      open: "打开",
      deviceName: "设备名称",
      discoverable: "可被发现",
      downloadPath: "下载路径",
      openDownloadFolder: "打开下载文件夹",
      listeningPort: "监听端口",
      currentPort: "当前端口",
      myDeviceId: "我的设备 ID",
      trustedDevices: "信任设备",
      nickname: "昵称",
      deviceId: "设备 ID",
      actions: "操作",
      troubleshootNetworkIssues: "修复网络问题",
      fixFirewall: "修复防火墙",
      filename: "文件名",
      size: "大小",
      remove: "移除",
      selectedFilesInfo: "已选择 {{count}} 个文件，总大小: {{size}}。",
      addViaIpAndPort: "通过 IP 和端口添加",
      addViaDeviceId: "通过设备 ID 添加",
      ip: "IP",
      port: "端口",
      cancel: "取消",
      confirm: "确认",
      trustThisDevice: "信任此设备",
      untrustThisDevice: "取消信任此设备",
      verifCodeColon: "验证码：",
      waiting: "等待中",
      sending: "发送中",
      receiving: "接收中",
      done: "已完成",
      error: "错误",
      unknown: "未知",
      editTrustedDevice: "编辑信任设备",
      addTrustedDevice: "添加信任设备",
      failedToAddDevice: "添加设备失败",
      noDevicesDetected: "未检测到设备",
      noFilesSelected: "未选择文件",
      pleaseSelectFilesToSend: "请选择文件来发送",
      failedToSendFiles: "文件发送失败",
      textSent: "文本发送成功",
      textSentTo: "文本已成功发送给 {{deviceName}}",
      failedToSendText: "文本发送失败",
      singleFileReceivedPrompt: "{{deviceName}} 想要分享一个大小为 {{totalSize}} 的文件“{{filename}}”",
      multipleFilesReceivedPrompt: "{{deviceName}} 想要分享总大小为 {{totalSize}} 的 {{numOfFiles}} 个文件",
      fileReceivedConfirmation: "请确认发送设备上显示了验证码“{{verifCode}}”。您想要接收吗？",
      trustDeviceTitle: "要信任这个设备吗？（{{deviceName}}）",
      trustDeviceDescription: "您将可以从这个设备自动接收文件而无需确认。",
      trust: "信任",
      textReceivedPrompt: "{{deviceName}} 发送了如下文字：",
      updateAvailable: "发现新版本",
      updateDescription: "重启 LANDrop 以更新到新版本",
      restart: "重启",
      deviceNameDetails: "该设备名称将被显示在其他人的设备列表中。",
      downloadPathDetails: "接收到的文件将保存到该路径。",
      discoverableDetails: "启用时，您的设备将可被其他设备发现。",
      autoOpenDownloadFolderDetails: "启用时，接收到文件后将自动打开下载文件夹。",
      listeningPortDetails: "您的设备将在该端口上监听连接。要使更改生效，请重新启动 LANDrop。",
      deviceIdCopied: "设备 ID 已复制到剪贴板",
      deviceIdDetails: "这是您设备的唯一标识符。",
      trustedDevicesDetails: "您的设备将自动接收来自信任设备的文件。",
      firewallFixed: "防火墙已修复",
      firewallFixedDescription: "防火墙已被成功修复。",
      failedToFixFirewall: "防火墙修复失败",
      fixFirewallDetails: "如果您可以发送文件但无法在 Windows 上接收文件，请尝试使用此功能来解决问题。",
      language: "语言",
      systemLanguage: "系统语言",
      openAtLogin: "开机时启动 LANDrop",
      openAtLoginDetails: "启用时，LANDrop 将在您开机时自动启动并静默运行。"
    }
  },
  kR = {
    en: bR,
    zh_CN: ER
  };
Me.use(bx).use(vx).use(IC).init({
  fallbackLng: {
    "zh-Hans": ["zh_CN"],
    "zh-CN": ["zh_CN"],
    default: ["en"]
  },
  detection: {
    order: ["navigator", "localStorage", "cookie"],
    caches: ["localStorage", "cookie"]
  },
  debug: !0,
  resources: kR,
  interpolation: {
    escapeValue: !1
  }
}).then(() => {
  console.warn(Me.language);
});
Fc.createRoot(document.getElementById("root")).render(h.jsxs($t.StrictMode, {
  children: [h.jsx(G6, {}), h.jsx(X6, {})]
}));
//# sourceMappingURL=renderer.readable.js.map
