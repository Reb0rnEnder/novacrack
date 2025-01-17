function Hm(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();
var Fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function _d(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Gm(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var xd = {
        exports: {}
    },
    Di = {},
    kd = {
        exports: {}
    },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uo = Symbol.for("react.element"),
    Km = Symbol.for("react.portal"),
    qm = Symbol.for("react.fragment"),
    Qm = Symbol.for("react.strict_mode"),
    Jm = Symbol.for("react.profiler"),
    Ym = Symbol.for("react.provider"),
    Xm = Symbol.for("react.context"),
    Zm = Symbol.for("react.forward_ref"),
    ev = Symbol.for("react.suspense"),
    tv = Symbol.for("react.memo"),
    nv = Symbol.for("react.lazy"),
    Eu = Symbol.iterator;

function rv(e) {
    return e === null || typeof e != "object" ? null : (e = Eu && e[Eu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Sd = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Ed = Object.assign,
    bd = {};

function cr(e, t, n) {
    this.props = e, this.context = t, this.refs = bd, this.updater = n || Sd
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
cr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Cd() {}
Cd.prototype = cr.prototype;

function al(e, t, n) {
    this.props = e, this.context = t, this.refs = bd, this.updater = n || Sd
}
var ll = al.prototype = new Cd;
ll.constructor = al;
Ed(ll, cr.prototype);
ll.isPureReactComponent = !0;
var bu = Array.isArray,
    Pd = Object.prototype.hasOwnProperty,
    ul = {
        current: null
    },
    Nd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function jd(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Pd.call(t, r) && !Nd.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: uo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: ul.current
    }
}

function ov(e, t) {
    return {
        $$typeof: uo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function cl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === uo
}

function iv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Cu = /\/+/g;

function ms(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? iv("" + e.key) : t.toString(36)
}

function Ko(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case uo:
                case Km:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + ms(s, 0) : r, bu(o) ? (n = "", e != null && (n = e.replace(Cu, "$&/") + "/"), Ko(o, t, n, "", function(u) {
        return u
    })) : o != null && (cl(o) && (o = ov(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Cu, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", bu(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + ms(i, a);
            s += Ko(i, t, n, l, o)
        } else if (l = rv(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + ms(i, a++), s += Ko(i, t, n, l, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function xo(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Ko(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function sv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var we = {
        current: null
    },
    qo = {
        transition: null
    },
    av = {
        ReactCurrentDispatcher: we,
        ReactCurrentBatchConfig: qo,
        ReactCurrentOwner: ul
    };

function Rd() {
    throw Error("act(...) is not supported in production builds of React.")
}
$.Children = {
    map: xo,
    forEach: function(e, t, n) {
        xo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return xo(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return xo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!cl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
$.Component = cr;
$.Fragment = qm;
$.Profiler = Jm;
$.PureComponent = al;
$.StrictMode = Qm;
$.Suspense = ev;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = av;
$.act = Rd;
$.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ed({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = ul.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Pd.call(t, l) && !Nd.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: uo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
$.createContext = function(e) {
    return e = {
        $$typeof: Xm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Ym,
        _context: e
    }, e.Consumer = e
};
$.createElement = jd;
$.createFactory = function(e) {
    var t = jd.bind(null, e);
    return t.type = e, t
};
$.createRef = function() {
    return {
        current: null
    }
};
$.forwardRef = function(e) {
    return {
        $$typeof: Zm,
        render: e
    }
};
$.isValidElement = cl;
$.lazy = function(e) {
    return {
        $$typeof: nv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: sv
    }
};
$.memo = function(e, t) {
    return {
        $$typeof: tv,
        type: e,
        compare: t === void 0 ? null : t
    }
};
$.startTransition = function(e) {
    var t = qo.transition;
    qo.transition = {};
    try {
        e()
    } finally {
        qo.transition = t
    }
};
$.unstable_act = Rd;
$.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
};
$.useContext = function(e) {
    return we.current.useContext(e)
};
$.useDebugValue = function() {};
$.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
};
$.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
};
$.useId = function() {
    return we.current.useId()
};
$.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
};
$.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
};
$.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
};
$.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
};
$.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
};
$.useRef = function(e) {
    return we.current.useRef(e)
};
$.useState = function(e) {
    return we.current.useState(e)
};
$.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
};
$.useTransition = function() {
    return we.current.useTransition()
};
$.version = "18.3.1";
kd.exports = $;
var v = kd.exports;
const ee = _d(v),
    Td = Hm({
        __proto__: null,
        default: ee
    }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv = v,
    uv = Symbol.for("react.element"),
    cv = Symbol.for("react.fragment"),
    dv = Object.prototype.hasOwnProperty,
    fv = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    hv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Od(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) dv.call(t, r) && !hv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: uv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: fv.current
    }
}
Di.Fragment = cv;
Di.jsx = Od;
Di.jsxs = Od;
xd.exports = Di;
var m = xd.exports,
    Ad = {
        exports: {}
    },
    Le = {},
    Id = {
        exports: {}
    },
    Ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, T) {
        var O = N.length;
        N.push(T);
        e: for (; 0 < O;) {
            var z = O - 1 >>> 1,
                oe = N[z];
            if (0 < o(oe, T)) N[z] = T, N[O] = oe, O = z;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var T = N[0],
            O = N.pop();
        if (O !== T) {
            N[0] = O;
            e: for (var z = 0, oe = N.length, wo = oe >>> 1; z < wo;) {
                var en = 2 * (z + 1) - 1,
                    ps = N[en],
                    tn = en + 1,
                    _o = N[tn];
                if (0 > o(ps, O)) tn < oe && 0 > o(_o, ps) ? (N[z] = _o, N[tn] = O, z = tn) : (N[z] = ps, N[en] = O, z = en);
                else if (tn < oe && 0 > o(_o, O)) N[z] = _o, N[tn] = O, z = tn;
                else break e
            }
        }
        return T
    }

    function o(N, T) {
        var O = N.sortIndex - T.sortIndex;
        return O !== 0 ? O : N.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        w = !1,
        x = !1,
        g = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function y(N) {
        for (var T = n(u); T !== null;) {
            if (T.callback === null) r(u);
            else if (T.startTime <= N) r(u), T.sortIndex = T.expirationTime, t(l, T);
            else break;
            T = n(u)
        }
    }

    function k(N) {
        if (g = !1, y(N), !x)
            if (n(l) !== null) x = !0, St(S);
            else {
                var T = n(u);
                T !== null && En(k, T.startTime - N)
            }
    }

    function S(N, T) {
        x = !1, g && (g = !1, p(P), P = -1), w = !0;
        var O = f;
        try {
            for (y(T), d = n(l); d !== null && (!(d.expirationTime > T) || N && !le());) {
                var z = d.callback;
                if (typeof z == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var oe = z(d.expirationTime <= T);
                    T = e.unstable_now(), typeof oe == "function" ? d.callback = oe : d === n(l) && r(l), y(T)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var wo = !0;
            else {
                var en = n(u);
                en !== null && En(k, en.startTime - T), wo = !1
            }
            return wo
        } finally {
            d = null, f = O, w = !1
        }
    }
    var E = !1,
        C = null,
        P = -1,
        L = 5,
        R = -1;

    function le() {
        return !(e.unstable_now() - R < L)
    }

    function U() {
        if (C !== null) {
            var N = e.unstable_now();
            R = N;
            var T = !0;
            try {
                T = C(!0, N)
            } finally {
                T ? kt() : (E = !1, C = null)
            }
        } else E = !1
    }
    var kt;
    if (typeof h == "function") kt = function() {
        h(U)
    };
    else if (typeof MessageChannel < "u") {
        var Zt = new MessageChannel,
            yo = Zt.port2;
        Zt.port1.onmessage = U, kt = function() {
            yo.postMessage(null)
        }
    } else kt = function() {
        _(U, 0)
    };

    function St(N) {
        C = N, E || (E = !0, kt())
    }

    function En(N, T) {
        P = _(function() {
            N(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        x || w || (x = !0, St(S))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(N) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = f
        }
        var O = f;
        f = T;
        try {
            return N()
        } finally {
            f = O
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, T) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var O = f;
        f = N;
        try {
            return T()
        } finally {
            f = O
        }
    }, e.unstable_scheduleCallback = function(N, T, O) {
        var z = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? z + O : z) : O = z, N) {
            case 1:
                var oe = -1;
                break;
            case 2:
                oe = 250;
                break;
            case 5:
                oe = 1073741823;
                break;
            case 4:
                oe = 1e4;
                break;
            default:
                oe = 5e3
        }
        return oe = O + oe, N = {
            id: c++,
            callback: T,
            priorityLevel: N,
            startTime: O,
            expirationTime: oe,
            sortIndex: -1
        }, O > z ? (N.sortIndex = O, t(u, N), n(l) === null && N === n(u) && (g ? (p(P), P = -1) : g = !0, En(k, O - z))) : (N.sortIndex = oe, t(l, N), x || w || (x = !0, St(S))), N
    }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(N) {
        var T = f;
        return function() {
            var O = f;
            f = T;
            try {
                return N.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
})(Ld);
Id.exports = Ld;
var pv = Id.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv = v,
    Ie = pv;

function b(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var $d = new Set,
    Hr = {};

function _n(e, t) {
    er(e, t), er(e + "Capture", t)
}

function er(e, t) {
    for (Hr[e] = t, e = 0; e < t.length; e++) $d.add(t[e])
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Zs = Object.prototype.hasOwnProperty,
    vv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Pu = {},
    Nu = {};

function gv(e) {
    return Zs.call(Nu, e) ? !0 : Zs.call(Pu, e) ? !1 : vv.test(e) ? Nu[e] = !0 : (Pu[e] = !0, !1)
}

function yv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function wv(e, t, n, r) {
    if (t === null || typeof t > "u" || yv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function _e(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    de[e] = new _e(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    de[t] = new _e(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    de[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    de[e] = new _e(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    de[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    de[e] = new _e(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    de[e] = new _e(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    de[e] = new _e(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    de[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var dl = /[\-:]([a-z])/g;

function fl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(dl, fl);
    de[t] = new _e(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(dl, fl);
    de[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(dl, fl);
    de[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    de[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
de.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    de[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function hl(e, t, n, r) {
    var o = de.hasOwnProperty(t) ? de[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wv(t, n, o, r) && (n = null), r || o === null ? gv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var _t = mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ko = Symbol.for("react.element"),
    On = Symbol.for("react.portal"),
    An = Symbol.for("react.fragment"),
    pl = Symbol.for("react.strict_mode"),
    ea = Symbol.for("react.profiler"),
    Dd = Symbol.for("react.provider"),
    Md = Symbol.for("react.context"),
    ml = Symbol.for("react.forward_ref"),
    ta = Symbol.for("react.suspense"),
    na = Symbol.for("react.suspense_list"),
    vl = Symbol.for("react.memo"),
    Rt = Symbol.for("react.lazy"),
    zd = Symbol.for("react.offscreen"),
    ju = Symbol.iterator;

function vr(e) {
    return e === null || typeof e != "object" ? null : (e = ju && e[ju] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Y = Object.assign,
    vs;

function Nr(e) {
    if (vs === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        vs = t && t[1] || ""
    }
    return `
` + vs + e
}
var gs = !1;

function ys(e, t) {
    if (!e || gs) return "";
    gs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            } while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        gs = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nr(e) : ""
}

function _v(e) {
    switch (e.tag) {
        case 5:
            return Nr(e.type);
        case 16:
            return Nr("Lazy");
        case 13:
            return Nr("Suspense");
        case 19:
            return Nr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ys(e.type, !1), e;
        case 11:
            return e = ys(e.type.render, !1), e;
        case 1:
            return e = ys(e.type, !0), e;
        default:
            return ""
    }
}

function ra(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case An:
            return "Fragment";
        case On:
            return "Portal";
        case ea:
            return "Profiler";
        case pl:
            return "StrictMode";
        case ta:
            return "Suspense";
        case na:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Md:
            return (e.displayName || "Context") + ".Consumer";
        case Dd:
            return (e._context.displayName || "Context") + ".Provider";
        case ml:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case vl:
            return t = e.displayName || null, t !== null ? t : ra(e.type) || "Memo";
        case Rt:
            t = e._payload, e = e._init;
            try {
                return ra(e(t))
            } catch {}
    }
    return null
}

function xv(e) {
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
            return ra(t);
        case 8:
            return t === pl ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function Kt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Ud(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function kv(e) {
    var t = Ud(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function So(e) {
    e._valueTracker || (e._valueTracker = kv(e))
}

function Fd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Ud(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ai(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function oa(e, t) {
    var n = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Ru(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Kt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Bd(e, t) {
    t = t.checked, t != null && hl(e, "checked", t, !1)
}

function ia(e, t) {
    Bd(e, t);
    var n = Kt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? sa(e, t.type, n) : t.hasOwnProperty("defaultValue") && sa(e, t.type, Kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Tu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function sa(e, t, n) {
    (t !== "number" || ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var jr = Array.isArray;

function Vn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Kt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function aa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
    return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ou(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(b(92));
            if (jr(n)) {
                if (1 < n.length) throw Error(b(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Kt(n)
    }
}

function Wd(e, t) {
    var n = Kt(t.value),
        r = Kt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Au(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Vd(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function la(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Eo, Hd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Eo = Eo || document.createElement("div"), Eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Eo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Gr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ar = {
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
    Sv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ar).forEach(function(e) {
    Sv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Ar[t] = Ar[e]
    })
});

function Gd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ar.hasOwnProperty(e) && Ar[e] ? ("" + t).trim() : t + "px"
}

function Kd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Gd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var Ev = Y({
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

function ua(e, t) {
    if (t) {
        if (Ev[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(b(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(b(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(b(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(b(62))
    }
}

function ca(e, t) {
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
            return !0
    }
}
var da = null;

function gl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var fa = null,
    Hn = null,
    Gn = null;

function Iu(e) {
    if (e = ho(e)) {
        if (typeof fa != "function") throw Error(b(280));
        var t = e.stateNode;
        t && (t = Bi(t), fa(e.stateNode, e.type, t))
    }
}

function qd(e) {
    Hn ? Gn ? Gn.push(e) : Gn = [e] : Hn = e
}

function Qd() {
    if (Hn) {
        var e = Hn,
            t = Gn;
        if (Gn = Hn = null, Iu(e), t)
            for (e = 0; e < t.length; e++) Iu(t[e])
    }
}

function Jd(e, t) {
    return e(t)
}

function Yd() {}
var ws = !1;

function Xd(e, t, n) {
    if (ws) return e(t, n);
    ws = !0;
    try {
        return Jd(e, t, n)
    } finally {
        ws = !1, (Hn !== null || Gn !== null) && (Yd(), Qd())
    }
}

function Kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Bi(n);
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
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(b(231, t, typeof n));
    return n
}
var ha = !1;
if (vt) try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
        get: function() {
            ha = !0
        }
    }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr)
} catch {
    ha = !1
}

function bv(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Ir = !1,
    li = null,
    ui = !1,
    pa = null,
    Cv = {
        onError: function(e) {
            Ir = !0, li = e
        }
    };

function Pv(e, t, n, r, o, i, s, a, l) {
    Ir = !1, li = null, bv.apply(Cv, arguments)
}

function Nv(e, t, n, r, o, i, s, a, l) {
    if (Pv.apply(this, arguments), Ir) {
        if (Ir) {
            var u = li;
            Ir = !1, li = null
        } else throw Error(b(198));
        ui || (ui = !0, pa = u)
    }
}

function xn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Zd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Lu(e) {
    if (xn(e) !== e) throw Error(b(188))
}

function jv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = xn(e), t === null) throw Error(b(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Lu(o), e;
                if (i === r) return Lu(o), t;
                i = i.sibling
            }
            throw Error(b(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, a = o.child; a;) {
                if (a === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (a === r) {
                    s = !0, r = o, n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (a === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(b(189))
            }
        }
        if (n.alternate !== r) throw Error(b(190))
    }
    if (n.tag !== 3) throw Error(b(188));
    return n.stateNode.current === n ? e : t
}

function ef(e) {
    return e = jv(e), e !== null ? tf(e) : null
}

function tf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = tf(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var nf = Ie.unstable_scheduleCallback,
    $u = Ie.unstable_cancelCallback,
    Rv = Ie.unstable_shouldYield,
    Tv = Ie.unstable_requestPaint,
    Z = Ie.unstable_now,
    Ov = Ie.unstable_getCurrentPriorityLevel,
    yl = Ie.unstable_ImmediatePriority,
    rf = Ie.unstable_UserBlockingPriority,
    ci = Ie.unstable_NormalPriority,
    Av = Ie.unstable_LowPriority,
    of = Ie.unstable_IdlePriority,
    Mi = null,
    it = null;

function Iv(e) {
    if (it && typeof it.onCommitFiberRoot == "function") try {
        it.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Dv,
    Lv = Math.log,
    $v = Math.LN2;

function Dv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Lv(e) / $v | 0) | 0
}
var bo = 64,
    Co = 4194304;

function Rr(e) {
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
            return e
    }
}

function di(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Rr(a) : (i &= s, i !== 0 && (r = Rr(i)))
    } else s = n & ~o, s !== 0 ? r = Rr(s) : i !== 0 && (r = Rr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Qe(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Mv(e, t) {
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
            return -1
    }
}

function zv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - Qe(i),
            a = 1 << s,
            l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Mv(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function ma(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function sf() {
    var e = bo;
    return bo <<= 1, !(bo & 4194240) && (bo = 64), e
}

function _s(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function co(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n
}

function Uv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - Qe(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function wl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Qe(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var F = 0;

function af(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var lf, _l, uf, cf, df, va = !1,
    Po = [],
    zt = null,
    Ut = null,
    Ft = null,
    qr = new Map,
    Qr = new Map,
    At = [],
    Fv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Du(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            zt = null;
            break;
        case "dragenter":
        case "dragleave":
            Ut = null;
            break;
        case "mouseover":
        case "mouseout":
            Ft = null;
            break;
        case "pointerover":
        case "pointerout":
            qr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Qr.delete(t.pointerId)
    }
}

function yr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = ho(t), t !== null && _l(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Bv(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return zt = yr(zt, e, t, n, r, o), !0;
        case "dragenter":
            return Ut = yr(Ut, e, t, n, r, o), !0;
        case "mouseover":
            return Ft = yr(Ft, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return qr.set(i, yr(qr.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Qr.set(i, yr(Qr.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function ff(e) {
    var t = ln(e.target);
    if (t !== null) {
        var n = xn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Zd(n), t !== null) {
                    e.blockedOn = t, df(e.priority, function() {
                        uf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Qo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            da = r, n.target.dispatchEvent(r), da = null
        } else return t = ho(n), t !== null && _l(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Mu(e, t, n) {
    Qo(e) && n.delete(t)
}

function Wv() {
    va = !1, zt !== null && Qo(zt) && (zt = null), Ut !== null && Qo(Ut) && (Ut = null), Ft !== null && Qo(Ft) && (Ft = null), qr.forEach(Mu), Qr.forEach(Mu)
}

function wr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, va || (va = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Wv)))
}

function Jr(e) {
    function t(o) {
        return wr(o, e)
    }
    if (0 < Po.length) {
        wr(Po[0], e);
        for (var n = 1; n < Po.length; n++) {
            var r = Po[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (zt !== null && wr(zt, e), Ut !== null && wr(Ut, e), Ft !== null && wr(Ft, e), qr.forEach(t), Qr.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < At.length && (n = At[0], n.blockedOn === null);) ff(n), n.blockedOn === null && At.shift()
}
var Kn = _t.ReactCurrentBatchConfig,
    fi = !0;

function Vv(e, t, n, r) {
    var o = F,
        i = Kn.transition;
    Kn.transition = null;
    try {
        F = 1, xl(e, t, n, r)
    } finally {
        F = o, Kn.transition = i
    }
}

function Hv(e, t, n, r) {
    var o = F,
        i = Kn.transition;
    Kn.transition = null;
    try {
        F = 4, xl(e, t, n, r)
    } finally {
        F = o, Kn.transition = i
    }
}

function xl(e, t, n, r) {
    if (fi) {
        var o = ga(e, t, n, r);
        if (o === null) Rs(e, t, r, hi, n), Du(e, r);
        else if (Bv(o, e, t, n, r)) r.stopPropagation();
        else if (Du(e, r), t & 4 && -1 < Fv.indexOf(e)) {
            for (; o !== null;) {
                var i = ho(o);
                if (i !== null && lf(i), i = ga(e, t, n, r), i === null && Rs(e, t, r, hi, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else Rs(e, t, r, null, n)
    }
}
var hi = null;

function ga(e, t, n, r) {
    if (hi = null, e = gl(r), e = ln(e), e !== null)
        if (t = xn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Zd(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return hi = e, null
}

function hf(e) {
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
            switch (Ov()) {
                case yl:
                    return 1;
                case rf:
                    return 4;
                case ci:
                case Av:
                    return 16;
                case of:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var $t = null,
    kl = null,
    Jo = null;

function pf() {
    if (Jo) return Jo;
    var e, t = kl,
        n = t.length,
        r, o = "value" in $t ? $t.value : $t.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return Jo = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Yo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function No() {
    return !0
}

function zu() {
    return !1
}

function $e(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? No : zu, this.isPropagationStopped = zu, this
    }
    return Y(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = No)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = No)
        },
        persist: function() {},
        isPersistent: No
    }), t
}
var dr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Sl = $e(dr),
    fo = Y({}, dr, {
        view: 0,
        detail: 0
    }),
    Gv = $e(fo),
    xs, ks, _r, zi = Y({}, fo, {
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
        getModifierState: El,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== _r && (_r && e.type === "mousemove" ? (xs = e.screenX - _r.screenX, ks = e.screenY - _r.screenY) : ks = xs = 0, _r = e), xs)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ks
        }
    }),
    Uu = $e(zi),
    Kv = Y({}, zi, {
        dataTransfer: 0
    }),
    qv = $e(Kv),
    Qv = Y({}, fo, {
        relatedTarget: 0
    }),
    Ss = $e(Qv),
    Jv = Y({}, dr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Yv = $e(Jv),
    Xv = Y({}, dr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Zv = $e(Xv),
    eg = Y({}, dr, {
        data: 0
    }),
    Fu = $e(eg),
    tg = {
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
    ng = {
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
    rg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function og(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rg[e]) ? !!t[e] : !1
}

function El() {
    return og
}
var ig = Y({}, fo, {
        key: function(e) {
            if (e.key) {
                var t = tg[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ng[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: El,
        charCode: function(e) {
            return e.type === "keypress" ? Yo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    sg = $e(ig),
    ag = Y({}, zi, {
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
    Bu = $e(ag),
    lg = Y({}, fo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: El
    }),
    ug = $e(lg),
    cg = Y({}, dr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    dg = $e(cg),
    fg = Y({}, zi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    hg = $e(fg),
    pg = [9, 13, 27, 32],
    bl = vt && "CompositionEvent" in window,
    Lr = null;
vt && "documentMode" in document && (Lr = document.documentMode);
var mg = vt && "TextEvent" in window && !Lr,
    mf = vt && (!bl || Lr && 8 < Lr && 11 >= Lr),
    Wu = " ",
    Vu = !1;

function vf(e, t) {
    switch (e) {
        case "keyup":
            return pg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function gf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var In = !1;

function vg(e, t) {
    switch (e) {
        case "compositionend":
            return gf(t);
        case "keypress":
            return t.which !== 32 ? null : (Vu = !0, Wu);
        case "textInput":
            return e = t.data, e === Wu && Vu ? null : e;
        default:
            return null
    }
}

function gg(e, t) {
    if (In) return e === "compositionend" || !bl && vf(e, t) ? (e = pf(), Jo = kl = $t = null, In = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return mf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var yg = {
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

function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yg[e.type] : t === "textarea"
}

function yf(e, t, n, r) {
    qd(r), t = pi(t, "onChange"), 0 < t.length && (n = new Sl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var $r = null,
    Yr = null;

function wg(e) {
    jf(e, 0)
}

function Ui(e) {
    var t = Dn(e);
    if (Fd(t)) return e
}

function _g(e, t) {
    if (e === "change") return t
}
var wf = !1;
if (vt) {
    var Es;
    if (vt) {
        var bs = "oninput" in document;
        if (!bs) {
            var Gu = document.createElement("div");
            Gu.setAttribute("oninput", "return;"), bs = typeof Gu.oninput == "function"
        }
        Es = bs
    } else Es = !1;
    wf = Es && (!document.documentMode || 9 < document.documentMode)
}

function Ku() {
    $r && ($r.detachEvent("onpropertychange", _f), Yr = $r = null)
}

function _f(e) {
    if (e.propertyName === "value" && Ui(Yr)) {
        var t = [];
        yf(t, Yr, e, gl(e)), Xd(wg, t)
    }
}

function xg(e, t, n) {
    e === "focusin" ? (Ku(), $r = t, Yr = n, $r.attachEvent("onpropertychange", _f)) : e === "focusout" && Ku()
}

function kg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(Yr)
}

function Sg(e, t) {
    if (e === "click") return Ui(t)
}

function Eg(e, t) {
    if (e === "input" || e === "change") return Ui(t)
}

function bg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ye = typeof Object.is == "function" ? Object.is : bg;

function Xr(e, t) {
    if (Ye(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Zs.call(t, o) || !Ye(e[o], t[o])) return !1
    }
    return !0
}

function qu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Qu(e, t) {
    var n = qu(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = qu(n)
    }
}

function xf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function kf() {
    for (var e = window, t = ai(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ai(e.document)
    }
    return t
}

function Cl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Cg(e) {
    var t = kf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Cl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Qu(n, i);
                var s = Qu(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Pg = vt && "documentMode" in document && 11 >= document.documentMode,
    Ln = null,
    ya = null,
    Dr = null,
    wa = !1;

function Ju(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wa || Ln == null || Ln !== ai(r) || (r = Ln, "selectionStart" in r && Cl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Dr && Xr(Dr, r) || (Dr = r, r = pi(ya, "onSelect"), 0 < r.length && (t = new Sl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ln)))
}

function jo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var $n = {
        animationend: jo("Animation", "AnimationEnd"),
        animationiteration: jo("Animation", "AnimationIteration"),
        animationstart: jo("Animation", "AnimationStart"),
        transitionend: jo("Transition", "TransitionEnd")
    },
    Cs = {},
    Sf = {};
vt && (Sf = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);

function Fi(e) {
    if (Cs[e]) return Cs[e];
    if (!$n[e]) return e;
    var t = $n[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Sf) return Cs[e] = t[n];
    return e
}
var Ef = Fi("animationend"),
    bf = Fi("animationiteration"),
    Cf = Fi("animationstart"),
    Pf = Fi("transitionend"),
    Nf = new Map,
    Yu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Jt(e, t) {
    Nf.set(e, t), _n(t, [e])
}
for (var Ps = 0; Ps < Yu.length; Ps++) {
    var Ns = Yu[Ps],
        Ng = Ns.toLowerCase(),
        jg = Ns[0].toUpperCase() + Ns.slice(1);
    Jt(Ng, "on" + jg)
}
Jt(Ef, "onAnimationEnd");
Jt(bf, "onAnimationIteration");
Jt(Cf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Pf, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));

function Xu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Nv(r, t, void 0, e), e.currentTarget = null
}

function jf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
                    Xu(o, a, u), i = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
                        Xu(o, a, u), i = l
                    }
        }
    }
    if (ui) throw e = pa, ui = !1, pa = null, e
}

function H(e, t) {
    var n = t[Ea];
    n === void 0 && (n = t[Ea] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Rf(t, e, 2, !1), n.add(r))
}

function js(e, t, n) {
    var r = 0;
    t && (r |= 4), Rf(n, e, r, t)
}
var Ro = "_reactListening" + Math.random().toString(36).slice(2);

function Zr(e) {
    if (!e[Ro]) {
        e[Ro] = !0, $d.forEach(function(n) {
            n !== "selectionchange" && (Rg.has(n) || js(n, !1, e), js(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ro] || (t[Ro] = !0, js("selectionchange", !1, t))
    }
}

function Rf(e, t, n, r) {
    switch (hf(t)) {
        case 1:
            var o = Vv;
            break;
        case 4:
            o = Hv;
            break;
        default:
            o = xl
    }
    n = o.bind(null, t, n, e), o = void 0, !ha || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function Rs(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = ln(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = i = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Xd(function() {
        var u = i,
            c = gl(n),
            d = [];
        e: {
            var f = Nf.get(e);
            if (f !== void 0) {
                var w = Sl,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Yo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = sg;
                        break;
                    case "focusin":
                        x = "focus", w = Ss;
                        break;
                    case "focusout":
                        x = "blur", w = Ss;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Ss;
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
                        w = Uu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = qv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = ug;
                        break;
                    case Ef:
                    case bf:
                    case Cf:
                        w = Yv;
                        break;
                    case Pf:
                        w = dg;
                        break;
                    case "scroll":
                        w = Gv;
                        break;
                    case "wheel":
                        w = hg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = Zv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = Bu
                }
                var g = (t & 4) !== 0,
                    _ = !g && e === "scroll",
                    p = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var h = u, y; h !== null;) {
                    y = h;
                    var k = y.stateNode;
                    if (y.tag === 5 && k !== null && (y = k, p !== null && (k = Kr(h, p), k != null && g.push(eo(h, k, y)))), _) break;
                    h = h.return
                }
                0 < g.length && (f = new w(f, x, null, n, c), d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", f && n !== da && (x = n.relatedTarget || n.fromElement) && (ln(x) || x[gt])) break e;
                if ((w || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = u, x = x ? ln(x) : null, x !== null && (_ = xn(x), x !== _ || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = u), w !== x)) {
                    if (g = Uu, k = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = Bu, k = "onPointerLeave", p = "onPointerEnter", h = "pointer"), _ = w == null ? f : Dn(w), y = x == null ? f : Dn(x), f = new g(k, h + "leave", w, n, c), f.target = _, f.relatedTarget = y, k = null, ln(c) === u && (g = new g(p, h + "enter", x, n, c), g.target = y, g.relatedTarget = _, k = g), _ = k, w && x) t: {
                        for (g = w, p = x, h = 0, y = g; y; y = bn(y)) h++;
                        for (y = 0, k = p; k; k = bn(k)) y++;
                        for (; 0 < h - y;) g = bn(g),
                        h--;
                        for (; 0 < y - h;) p = bn(p),
                        y--;
                        for (; h--;) {
                            if (g === p || p !== null && g === p.alternate) break t;
                            g = bn(g), p = bn(p)
                        }
                        g = null
                    }
                    else g = null;
                    w !== null && Zu(d, f, w, g, !1), x !== null && _ !== null && Zu(d, _, x, g, !0)
                }
            }
            e: {
                if (f = u ? Dn(u) : window, w = f.nodeName && f.nodeName.toLowerCase(), w === "select" || w === "input" && f.type === "file") var S = _g;
                else if (Hu(f))
                    if (wf) S = Eg;
                    else {
                        S = kg;
                        var E = xg
                    }
                else(w = f.nodeName) && w.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = Sg);
                if (S && (S = S(e, u))) {
                    yf(d, S, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && sa(f, "number", f.value)
            }
            switch (E = u ? Dn(u) : window, e) {
                case "focusin":
                    (Hu(E) || E.contentEditable === "true") && (Ln = E, ya = u, Dr = null);
                    break;
                case "focusout":
                    Dr = ya = Ln = null;
                    break;
                case "mousedown":
                    wa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    wa = !1, Ju(d, n, c);
                    break;
                case "selectionchange":
                    if (Pg) break;
                case "keydown":
                case "keyup":
                    Ju(d, n, c)
            }
            var C;
            if (bl) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else In ? vf(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (mf && n.locale !== "ko" && (In || P !== "onCompositionStart" ? P === "onCompositionEnd" && In && (C = pf()) : ($t = c, kl = "value" in $t ? $t.value : $t.textContent, In = !0)), E = pi(u, P), 0 < E.length && (P = new Fu(P, e, null, n, c), d.push({
                event: P,
                listeners: E
            }), C ? P.data = C : (C = gf(n), C !== null && (P.data = C)))),
            (C = mg ? vg(e, n) : gg(e, n)) && (u = pi(u, "onBeforeInput"), 0 < u.length && (c = new Fu("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = C))
        }
        jf(d, t)
    })
}

function eo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function pi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Kr(e, n), i != null && r.unshift(eo(e, i, o)), i = Kr(e, t), i != null && r.push(eo(e, i, o))), e = e.return
    }
    return r
}

function bn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Zu(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = Kr(n, i), l != null && s.unshift(eo(n, l, a))) : o || (l = Kr(n, i), l != null && s.push(eo(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Tg = /\r\n?/g,
    Og = /\u0000|\uFFFD/g;

function ec(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tg, `
`).replace(Og, "")
}

function To(e, t, n) {
    if (t = ec(t), ec(e) !== t && n) throw Error(b(425))
}

function mi() {}
var _a = null,
    xa = null;

function ka(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Sa = typeof setTimeout == "function" ? setTimeout : void 0,
    Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tc = typeof Promise == "function" ? Promise : void 0,
    Ig = typeof queueMicrotask == "function" ? queueMicrotask : typeof tc < "u" ? function(e) {
        return tc.resolve(null).then(e).catch(Lg)
    } : Sa;

function Lg(e) {
    setTimeout(function() {
        throw e
    })
}

function Ts(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Jr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Jr(t)
}

function Bt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function nc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fr = Math.random().toString(36).slice(2),
    rt = "__reactFiber$" + fr,
    to = "__reactProps$" + fr,
    gt = "__reactContainer$" + fr,
    Ea = "__reactEvents$" + fr,
    $g = "__reactListeners$" + fr,
    Dg = "__reactHandles$" + fr;

function ln(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[gt] || n[rt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = nc(e); e !== null;) {
                    if (n = e[rt]) return n;
                    e = nc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ho(e) {
    return e = e[rt] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Dn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(b(33))
}

function Bi(e) {
    return e[to] || null
}
var ba = [],
    Mn = -1;

function Yt(e) {
    return {
        current: e
    }
}

function G(e) {
    0 > Mn || (e.current = ba[Mn], ba[Mn] = null, Mn--)
}

function W(e, t) {
    Mn++, ba[Mn] = e.current, e.current = t
}
var qt = {},
    ve = Yt(qt),
    Ce = Yt(!1),
    hn = qt;

function tr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Pe(e) {
    return e = e.childContextTypes, e != null
}

function vi() {
    G(Ce), G(ve)
}

function rc(e, t, n) {
    if (ve.current !== qt) throw Error(b(168));
    W(ve, t), W(Ce, n)
}

function Tf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(b(108, xv(e) || "Unknown", o));
    return Y({}, n, r)
}

function gi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qt, hn = ve.current, W(ve, e), W(Ce, Ce.current), !0
}

function oc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(b(169));
    n ? (e = Tf(e, t, hn), r.__reactInternalMemoizedMergedChildContext = e, G(Ce), G(ve), W(ve, e)) : G(Ce), W(Ce, n)
}
var dt = null,
    Wi = !1,
    Os = !1;

function Of(e) {
    dt === null ? dt = [e] : dt.push(e)
}

function Mg(e) {
    Wi = !0, Of(e)
}

function Xt() {
    if (!Os && dt !== null) {
        Os = !0;
        var e = 0,
            t = F;
        try {
            var n = dt;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            dt = null, Wi = !1
        } catch (o) {
            throw dt !== null && (dt = dt.slice(e + 1)), nf(yl, Xt), o
        } finally {
            F = t, Os = !1
        }
    }
    return null
}
var zn = [],
    Un = 0,
    yi = null,
    wi = 0,
    De = [],
    Me = 0,
    pn = null,
    ft = 1,
    ht = "";

function rn(e, t) {
    zn[Un++] = wi, zn[Un++] = yi, yi = e, wi = t
}

function Af(e, t, n) {
    De[Me++] = ft, De[Me++] = ht, De[Me++] = pn, pn = e;
    var r = ft;
    e = ht;
    var o = 32 - Qe(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - Qe(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, ft = 1 << 32 - Qe(t) + o | n << o | r, ht = i + e
    } else ft = 1 << i | n << o | r, ht = e
}

function Pl(e) {
    e.return !== null && (rn(e, 1), Af(e, 1, 0))
}

function Nl(e) {
    for (; e === yi;) yi = zn[--Un], zn[Un] = null, wi = zn[--Un], zn[Un] = null;
    for (; e === pn;) pn = De[--Me], De[Me] = null, ht = De[--Me], De[Me] = null, ft = De[--Me], De[Me] = null
}
var Ae = null,
    Oe = null,
    K = !1,
    qe = null;

function If(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ic(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Oe = Bt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Oe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? {
                id: ft,
                overflow: ht
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Oe = null, !0) : !1;
        default:
            return !1
    }
}

function Ca(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Pa(e) {
    if (K) {
        var t = Oe;
        if (t) {
            var n = t;
            if (!ic(e, t)) {
                if (Ca(e)) throw Error(b(418));
                t = Bt(n.nextSibling);
                var r = Ae;
                t && ic(e, t) ? If(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Ae = e)
            }
        } else {
            if (Ca(e)) throw Error(b(418));
            e.flags = e.flags & -4097 | 2, K = !1, Ae = e
        }
    }
}

function sc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ae = e
}

function Oo(e) {
    if (e !== Ae) return !1;
    if (!K) return sc(e), K = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ka(e.type, e.memoizedProps)), t && (t = Oe)) {
        if (Ca(e)) throw Lf(), Error(b(418));
        for (; t;) If(e, t), t = Bt(t.nextSibling)
    }
    if (sc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Oe = Bt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Oe = null
        }
    } else Oe = Ae ? Bt(e.stateNode.nextSibling) : null;
    return !0
}

function Lf() {
    for (var e = Oe; e;) e = Bt(e.nextSibling)
}

function nr() {
    Oe = Ae = null, K = !1
}

function jl(e) {
    qe === null ? qe = [e] : qe.push(e)
}
var zg = _t.ReactCurrentBatchConfig;

function xr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(b(309));
                var r = n.stateNode
            }
            if (!r) throw Error(b(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(b(284));
        if (!n._owner) throw Error(b(290, e))
    }
    return e
}

function Ao(e, t) {
    throw e = Object.prototype.toString.call(t), Error(b(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ac(e) {
    var t = e._init;
    return t(e._payload)
}

function $f(e) {
    function t(p, h) {
        if (e) {
            var y = p.deletions;
            y === null ? (p.deletions = [h], p.flags |= 16) : y.push(h)
        }
    }

    function n(p, h) {
        if (!e) return null;
        for (; h !== null;) t(p, h), h = h.sibling;
        return null
    }

    function r(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function o(p, h) {
        return p = Gt(p, h), p.index = 0, p.sibling = null, p
    }

    function i(p, h, y) {
        return p.index = y, e ? (y = p.alternate, y !== null ? (y = y.index, y < h ? (p.flags |= 2, h) : y) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, h, y, k) {
        return h === null || h.tag !== 6 ? (h = zs(y, p.mode, k), h.return = p, h) : (h = o(h, y), h.return = p, h)
    }

    function l(p, h, y, k) {
        var S = y.type;
        return S === An ? c(p, h, y.props.children, k, y.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Rt && ac(S) === h.type) ? (k = o(h, y.props), k.ref = xr(p, h, y), k.return = p, k) : (k = oi(y.type, y.key, y.props, null, p.mode, k), k.ref = xr(p, h, y), k.return = p, k)
    }

    function u(p, h, y, k) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Us(y, p.mode, k), h.return = p, h) : (h = o(h, y.children || []), h.return = p, h)
    }

    function c(p, h, y, k, S) {
        return h === null || h.tag !== 7 ? (h = fn(y, p.mode, k, S), h.return = p, h) : (h = o(h, y), h.return = p, h)
    }

    function d(p, h, y) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = zs("" + h, p.mode, y), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case ko:
                    return y = oi(h.type, h.key, h.props, null, p.mode, y), y.ref = xr(p, null, h), y.return = p, y;
                case On:
                    return h = Us(h, p.mode, y), h.return = p, h;
                case Rt:
                    var k = h._init;
                    return d(p, k(h._payload), y)
            }
            if (jr(h) || vr(h)) return h = fn(h, p.mode, y, null), h.return = p, h;
            Ao(p, h)
        }
        return null
    }

    function f(p, h, y, k) {
        var S = h !== null ? h.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return S !== null ? null : a(p, h, "" + y, k);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ko:
                    return y.key === S ? l(p, h, y, k) : null;
                case On:
                    return y.key === S ? u(p, h, y, k) : null;
                case Rt:
                    return S = y._init, f(p, h, S(y._payload), k)
            }
            if (jr(y) || vr(y)) return S !== null ? null : c(p, h, y, k, null);
            Ao(p, y)
        }
        return null
    }

    function w(p, h, y, k, S) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return p = p.get(y) || null, a(h, p, "" + k, S);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case ko:
                    return p = p.get(k.key === null ? y : k.key) || null, l(h, p, k, S);
                case On:
                    return p = p.get(k.key === null ? y : k.key) || null, u(h, p, k, S);
                case Rt:
                    var E = k._init;
                    return w(p, h, y, E(k._payload), S)
            }
            if (jr(k) || vr(k)) return p = p.get(y) || null, c(h, p, k, S, null);
            Ao(h, k)
        }
        return null
    }

    function x(p, h, y, k) {
        for (var S = null, E = null, C = h, P = h = 0, L = null; C !== null && P < y.length; P++) {
            C.index > P ? (L = C, C = null) : L = C.sibling;
            var R = f(p, C, y[P], k);
            if (R === null) {
                C === null && (C = L);
                break
            }
            e && C && R.alternate === null && t(p, C), h = i(R, h, P), E === null ? S = R : E.sibling = R, E = R, C = L
        }
        if (P === y.length) return n(p, C), K && rn(p, P), S;
        if (C === null) {
            for (; P < y.length; P++) C = d(p, y[P], k), C !== null && (h = i(C, h, P), E === null ? S = C : E.sibling = C, E = C);
            return K && rn(p, P), S
        }
        for (C = r(p, C); P < y.length; P++) L = w(C, p, P, y[P], k), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? P : L.key), h = i(L, h, P), E === null ? S = L : E.sibling = L, E = L);
        return e && C.forEach(function(le) {
            return t(p, le)
        }), K && rn(p, P), S
    }

    function g(p, h, y, k) {
        var S = vr(y);
        if (typeof S != "function") throw Error(b(150));
        if (y = S.call(y), y == null) throw Error(b(151));
        for (var E = S = null, C = h, P = h = 0, L = null, R = y.next(); C !== null && !R.done; P++, R = y.next()) {
            C.index > P ? (L = C, C = null) : L = C.sibling;
            var le = f(p, C, R.value, k);
            if (le === null) {
                C === null && (C = L);
                break
            }
            e && C && le.alternate === null && t(p, C), h = i(le, h, P), E === null ? S = le : E.sibling = le, E = le, C = L
        }
        if (R.done) return n(p, C), K && rn(p, P), S;
        if (C === null) {
            for (; !R.done; P++, R = y.next()) R = d(p, R.value, k), R !== null && (h = i(R, h, P), E === null ? S = R : E.sibling = R, E = R);
            return K && rn(p, P), S
        }
        for (C = r(p, C); !R.done; P++, R = y.next()) R = w(C, p, P, R.value, k), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? P : R.key), h = i(R, h, P), E === null ? S = R : E.sibling = R, E = R);
        return e && C.forEach(function(U) {
            return t(p, U)
        }), K && rn(p, P), S
    }

    function _(p, h, y, k) {
        if (typeof y == "object" && y !== null && y.type === An && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ko:
                    e: {
                        for (var S = y.key, E = h; E !== null;) {
                            if (E.key === S) {
                                if (S = y.type, S === An) {
                                    if (E.tag === 7) {
                                        n(p, E.sibling), h = o(E, y.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Rt && ac(S) === E.type) {
                                    n(p, E.sibling), h = o(E, y.props), h.ref = xr(p, E, y), h.return = p, p = h;
                                    break e
                                }
                                n(p, E);
                                break
                            } else t(p, E);
                            E = E.sibling
                        }
                        y.type === An ? (h = fn(y.props.children, p.mode, k, y.key), h.return = p, p = h) : (k = oi(y.type, y.key, y.props, null, p.mode, k), k.ref = xr(p, h, y), k.return = p, p = k)
                    }
                    return s(p);
                case On:
                    e: {
                        for (E = y.key; h !== null;) {
                            if (h.key === E)
                                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                    n(p, h.sibling), h = o(h, y.children || []), h.return = p, p = h;
                                    break e
                                } else {
                                    n(p, h);
                                    break
                                }
                            else t(p, h);
                            h = h.sibling
                        }
                        h = Us(y, p.mode, k),
                        h.return = p,
                        p = h
                    }
                    return s(p);
                case Rt:
                    return E = y._init, _(p, h, E(y._payload), k)
            }
            if (jr(y)) return x(p, h, y, k);
            if (vr(y)) return g(p, h, y, k);
            Ao(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(p, h.sibling), h = o(h, y), h.return = p, p = h) : (n(p, h), h = zs(y, p.mode, k), h.return = p, p = h), s(p)) : n(p, h)
    }
    return _
}
var rr = $f(!0),
    Df = $f(!1),
    _i = Yt(null),
    xi = null,
    Fn = null,
    Rl = null;

function Tl() {
    Rl = Fn = xi = null
}

function Ol(e) {
    var t = _i.current;
    G(_i), e._currentValue = t
}

function Na(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function qn(e, t) {
    xi = e, Rl = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), e.firstContext = null)
}

function Be(e) {
    var t = e._currentValue;
    if (Rl !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Fn === null) {
            if (xi === null) throw Error(b(308));
            Fn = e, xi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Fn = Fn.next = e;
    return t
}
var un = null;

function Al(e) {
    un === null ? un = [e] : un.push(e)
}

function Mf(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Al(t)) : (n.next = o.next, o.next = n), t.interleaved = n, yt(e, r)
}

function yt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Tt = !1;

function Il(e) {
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
    }
}

function zf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function mt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, yt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Al(r)) : (t.next = o.next, o.next = t), r.interleaved = t, yt(e, n)
}

function Xo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, wl(e, n)
    }
}

function lc(e, t) {
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
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ki(e, t, n, r) {
    var o = e.updateQueue;
    Tt = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? i = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0, c = u = l = null, a = i;
        do {
            var f = a.lane,
                w = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e,
                        g = a;
                    switch (f = t, w = n, g.tag) {
                        case 1:
                            if (x = g.payload, typeof x == "function") {
                                d = x.call(w, d, f);
                                break e
                            }
                            d = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = g.payload, f = typeof x == "function" ? x.call(w, d, f) : x, f == null) break e;
                            d = Y({}, d, f);
                            break e;
                        case 2:
                            Tt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a))
            } else w = {
                eventTime: w,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = w, l = d) : c = c.next = w, s |= f;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        vn |= s, e.lanes = s, e.memoizedState = d
    }
}

function uc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(b(191, o));
                o.call(r)
            }
        }
}
var po = {},
    st = Yt(po),
    no = Yt(po),
    ro = Yt(po);

function cn(e) {
    if (e === po) throw Error(b(174));
    return e
}

function Ll(e, t) {
    switch (W(ro, t), W(no, e), W(st, po), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : la(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = la(t, e)
    }
    G(st), W(st, t)
}

function or() {
    G(st), G(no), G(ro)
}

function Uf(e) {
    cn(ro.current);
    var t = cn(st.current),
        n = la(t, e.type);
    t !== n && (W(no, e), W(st, n))
}

function $l(e) {
    no.current === e && (G(st), G(no))
}
var q = Yt(0);

function Si(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var As = [];

function Dl() {
    for (var e = 0; e < As.length; e++) As[e]._workInProgressVersionPrimary = null;
    As.length = 0
}
var Zo = _t.ReactCurrentDispatcher,
    Is = _t.ReactCurrentBatchConfig,
    mn = 0,
    J = null,
    ne = null,
    se = null,
    Ei = !1,
    Mr = !1,
    oo = 0,
    Ug = 0;

function he() {
    throw Error(b(321))
}

function Ml(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ye(e[n], t[n])) return !1;
    return !0
}

function zl(e, t, n, r, o, i) {
    if (mn = i, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zo.current = e === null || e.memoizedState === null ? Vg : Hg, e = n(r, o), Mr) {
        i = 0;
        do {
            if (Mr = !1, oo = 0, 25 <= i) throw Error(b(301));
            i += 1, se = ne = null, t.updateQueue = null, Zo.current = Gg, e = n(r, o)
        } while (Mr)
    }
    if (Zo.current = bi, t = ne !== null && ne.next !== null, mn = 0, se = ne = J = null, Ei = !1, t) throw Error(b(300));
    return e
}

function Ul() {
    var e = oo !== 0;
    return oo = 0, e
}

function nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return se === null ? J.memoizedState = se = e : se = se.next = e, se
}

function We() {
    if (ne === null) {
        var e = J.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ne.next;
    var t = se === null ? J.memoizedState : se.next;
    if (t !== null) se = t, ne = e;
    else {
        if (e === null) throw Error(b(310));
        ne = e, e = {
            memoizedState: ne.memoizedState,
            baseState: ne.baseState,
            baseQueue: ne.baseQueue,
            queue: ne.queue,
            next: null
        }, se === null ? J.memoizedState = se = e : se = se.next = e
    }
    return se
}

function io(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ls(e) {
    var t = We(),
        n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = ne,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((mn & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, J.lanes |= c, vn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a, Ye(r, t.memoizedState) || (be = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, J.lanes |= i, vn |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function $s(e) {
    var t = We(),
        n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        Ye(i, t.memoizedState) || (be = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Ff() {}

function Bf(e, t) {
    var n = J,
        r = We(),
        o = t(),
        i = !Ye(r.memoizedState, o);
    if (i && (r.memoizedState = o, be = !0), r = r.queue, Fl(Hf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
        if (n.flags |= 2048, so(9, Vf.bind(null, n, r, o, t), void 0, null), ae === null) throw Error(b(349));
        mn & 30 || Wf(n, t, o)
    }
    return o
}

function Wf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = J.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Vf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Gf(t) && Kf(e)
}

function Hf(e, t, n) {
    return n(function() {
        Gf(t) && Kf(e)
    })
}

function Gf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ye(e, n)
    } catch {
        return !0
    }
}

function Kf(e) {
    var t = yt(e, 1);
    t !== null && Je(t, e, 1, -1)
}

function cc(e) {
    var t = nt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: io,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Wg.bind(null, J, e), [t.memoizedState, e]
}

function so(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = J.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, J.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function qf() {
    return We().memoizedState
}

function ei(e, t, n, r) {
    var o = nt();
    J.flags |= e, o.memoizedState = so(1 | t, n, void 0, r === void 0 ? null : r)
}

function Vi(e, t, n, r) {
    var o = We();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ne !== null) {
        var s = ne.memoizedState;
        if (i = s.destroy, r !== null && Ml(r, s.deps)) {
            o.memoizedState = so(t, n, i, r);
            return
        }
    }
    J.flags |= e, o.memoizedState = so(1 | t, n, i, r)
}

function dc(e, t) {
    return ei(8390656, 8, e, t)
}

function Fl(e, t) {
    return Vi(2048, 8, e, t)
}

function Qf(e, t) {
    return Vi(4, 2, e, t)
}

function Jf(e, t) {
    return Vi(4, 4, e, t)
}

function Yf(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Xf(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vi(4, 4, Yf.bind(null, t, e), n)
}

function Bl() {}

function Zf(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ml(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function eh(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ml(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function th(e, t, n) {
    return mn & 21 ? (Ye(n, t) || (n = sf(), J.lanes |= n, vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n)
}

function Fg(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Is.transition;
    Is.transition = {};
    try {
        e(!1), t()
    } finally {
        F = n, Is.transition = r
    }
}

function nh() {
    return We().memoizedState
}

function Bg(e, t, n) {
    var r = Ht(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, rh(e)) oh(t, n);
    else if (n = Mf(e, t, n, r), n !== null) {
        var o = ye();
        Je(n, e, r, o), ih(n, t, r)
    }
}

function Wg(e, t, n) {
    var r = Ht(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (rh(e)) oh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                a = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = a, Ye(a, s)) {
                var l = t.interleaved;
                l === null ? (o.next = o, Al(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Mf(e, t, o, r), n !== null && (o = ye(), Je(n, e, r, o), ih(n, t, r))
    }
}

function rh(e) {
    var t = e.alternate;
    return e === J || t !== null && t === J
}

function oh(e, t) {
    Mr = Ei = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ih(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, wl(e, n)
    }
}
var bi = {
        readContext: Be,
        useCallback: he,
        useContext: he,
        useEffect: he,
        useImperativeHandle: he,
        useInsertionEffect: he,
        useLayoutEffect: he,
        useMemo: he,
        useReducer: he,
        useRef: he,
        useState: he,
        useDebugValue: he,
        useDeferredValue: he,
        useTransition: he,
        useMutableSource: he,
        useSyncExternalStore: he,
        useId: he,
        unstable_isNewReconciler: !1
    },
    Vg = {
        readContext: Be,
        useCallback: function(e, t) {
            return nt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Be,
        useEffect: dc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, ei(4194308, 4, Yf.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ei(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return ei(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = nt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = nt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Bg.bind(null, J, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = nt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: cc,
        useDebugValue: Bl,
        useDeferredValue: function(e) {
            return nt().memoizedState = e
        },
        useTransition: function() {
            var e = cc(!1),
                t = e[0];
            return e = Fg.bind(null, e[1]), nt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = J,
                o = nt();
            if (K) {
                if (n === void 0) throw Error(b(407));
                n = n()
            } else {
                if (n = t(), ae === null) throw Error(b(349));
                mn & 30 || Wf(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, dc(Hf.bind(null, r, i, e), [e]), r.flags |= 2048, so(9, Vf.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = nt(),
                t = ae.identifierPrefix;
            if (K) {
                var n = ht,
                    r = ft;
                n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = oo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Ug++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Hg = {
        readContext: Be,
        useCallback: Zf,
        useContext: Be,
        useEffect: Fl,
        useImperativeHandle: Xf,
        useInsertionEffect: Qf,
        useLayoutEffect: Jf,
        useMemo: eh,
        useReducer: Ls,
        useRef: qf,
        useState: function() {
            return Ls(io)
        },
        useDebugValue: Bl,
        useDeferredValue: function(e) {
            var t = We();
            return th(t, ne.memoizedState, e)
        },
        useTransition: function() {
            var e = Ls(io)[0],
                t = We().memoizedState;
            return [e, t]
        },
        useMutableSource: Ff,
        useSyncExternalStore: Bf,
        useId: nh,
        unstable_isNewReconciler: !1
    },
    Gg = {
        readContext: Be,
        useCallback: Zf,
        useContext: Be,
        useEffect: Fl,
        useImperativeHandle: Xf,
        useInsertionEffect: Qf,
        useLayoutEffect: Jf,
        useMemo: eh,
        useReducer: $s,
        useRef: qf,
        useState: function() {
            return $s(io)
        },
        useDebugValue: Bl,
        useDeferredValue: function(e) {
            var t = We();
            return ne === null ? t.memoizedState = e : th(t, ne.memoizedState, e)
        },
        useTransition: function() {
            var e = $s(io)[0],
                t = We().memoizedState;
            return [e, t]
        },
        useMutableSource: Ff,
        useSyncExternalStore: Bf,
        useId: nh,
        unstable_isNewReconciler: !1
    };

function He(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function ja(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Hi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? xn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            o = Ht(e),
            i = mt(r, o);
        i.payload = t, n != null && (i.callback = n), t = Wt(e, i, o), t !== null && (Je(t, e, o, r), Xo(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            o = Ht(e),
            i = mt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wt(e, i, o), t !== null && (Je(t, e, o, r), Xo(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ye(),
            r = Ht(e),
            o = mt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Wt(e, o, r), t !== null && (Je(t, e, r, n), Xo(t, e, r))
    }
};

function fc(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(o, i) : !0
}

function sh(e, t, n) {
    var r = !1,
        o = qt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Be(i) : (o = Pe(t) ? hn : ve.current, r = t.contextTypes, i = (r = r != null) ? tr(e, o) : qt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function hc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hi.enqueueReplaceState(t, t.state, null)
}

function Ra(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Il(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Be(i) : (i = Pe(t) ? hn : ve.current, o.context = tr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ja(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Hi.enqueueReplaceState(o, o.state, null), ki(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function ir(e, t) {
    try {
        var n = "",
            r = t;
        do n += _v(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function Ds(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Ta(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Kg = typeof WeakMap == "function" ? WeakMap : Map;

function ah(e, t, n) {
    n = mt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Pi || (Pi = !0, Fa = r), Ta(e, t)
    }, n
}

function lh(e, t, n) {
    n = mt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            Ta(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ta(e, t), typeof r != "function" && (Vt === null ? Vt = new Set([this]) : Vt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function pc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Kg;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = ay.bind(null, e, t, n), t.then(e, e))
}

function mc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function vc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, Wt(n, t, 1))), n.lanes |= 1), e)
}
var qg = _t.ReactCurrentOwner,
    be = !1;

function ge(e, t, n, r) {
    t.child = e === null ? Df(t, null, n, r) : rr(t, e.child, n, r)
}

function gc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return qn(t, o), r = zl(e, t, n, r, i, o), n = Ul(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wt(e, t, o)) : (K && n && Pl(t), t.flags |= 1, ge(e, t, r, o), t.child)
}

function yc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Jl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, uh(e, t, i, r, o)) : (e = oi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Xr, n(s, r) && e.ref === t.ref) return wt(e, t, o)
    }
    return t.flags |= 1, e = Gt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function uh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Xr(i, r) && e.ref === t.ref)
            if (be = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (be = !0);
            else return t.lanes = e.lanes, wt(e, t, o)
    }
    return Oa(e, t, n, r, o)
}

function ch(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, W(Wn, Te), Te |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, W(Wn, Te), Te |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, W(Wn, Te), Te |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, W(Wn, Te), Te |= r;
    return ge(e, t, o, n), t.child
}

function dh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Oa(e, t, n, r, o) {
    var i = Pe(n) ? hn : ve.current;
    return i = tr(t, i), qn(t, o), n = zl(e, t, n, r, i, o), r = Ul(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wt(e, t, o)) : (K && r && Pl(t), t.flags |= 1, ge(e, t, n, o), t.child)
}

function wc(e, t, n, r, o) {
    if (Pe(n)) {
        var i = !0;
        gi(t)
    } else i = !1;
    if (qn(t, o), t.stateNode === null) ti(e, t), sh(t, n, r), Ra(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = Pe(n) ? hn : ve.current, u = tr(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && hc(t, s, r, u), Tt = !1;
        var f = t.memoizedState;
        s.state = f, ki(t, r, s, o), l = t.memoizedState, a !== r || f !== l || Ce.current || Tt ? (typeof c == "function" && (ja(t, n, c, r), l = t.memoizedState), (a = Tt || fc(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, zf(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : He(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Be(l) : (l = Pe(n) ? hn : ve.current, l = tr(t, l));
        var w = n.getDerivedStateFromProps;
        (c = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && hc(t, s, r, l), Tt = !1, f = t.memoizedState, s.state = f, ki(t, r, s, o);
        var x = t.memoizedState;
        a !== d || f !== x || Ce.current || Tt ? (typeof w == "function" && (ja(t, n, w, r), x = t.memoizedState), (u = Tt || fc(t, n, u, r, f, x, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Aa(e, t, n, r, i, o)
}

function Aa(e, t, n, r, o, i) {
    dh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && oc(t, n, !1), wt(e, t, i);
    r = t.stateNode, qg.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = rr(t, e.child, null, i), t.child = rr(t, null, a, i)) : ge(e, t, a, i), t.memoizedState = r.state, o && oc(t, n, !0), t.child
}

function fh(e) {
    var t = e.stateNode;
    t.pendingContext ? rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rc(e, t.context, !1), Ll(e, t.containerInfo)
}

function _c(e, t, n, r, o) {
    return nr(), jl(o), t.flags |= 256, ge(e, t, n, r), t.child
}
var Ia = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function La(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function hh(e, t, n) {
    var r = t.pendingProps,
        o = q.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), W(q, o & 1), e === null) return Pa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = qi(s, r, 0, null), e = fn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = La(n), t.memoizedState = Ia, e) : Wl(t, s));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return Qg(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Gt(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Gt(a, i) : (i = fn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? La(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ia, r
    }
    return i = e.child, e = i.sibling, r = Gt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Wl(e, t) {
    return t = qi({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Io(e, t, n, r) {
    return r !== null && jl(r), rr(t, e.child, null, n), e = Wl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Qg(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ds(Error(b(422))), Io(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = qi({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = fn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && rr(t, e.child, null, s), t.child.memoizedState = La(s), t.memoizedState = Ia, i);
    if (!(t.mode & 1)) return Io(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(b(419)), r = Ds(i, r, void 0), Io(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, be || a) {
        if (r = ae, r !== null) {
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
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, yt(e, o), Je(r, e, o, -1))
        }
        return Ql(), r = Ds(Error(b(421))), Io(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ly.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Oe = Bt(o.nextSibling), Ae = t, K = !0, qe = null, e !== null && (De[Me++] = ft, De[Me++] = ht, De[Me++] = pn, ft = e.id, ht = e.overflow, pn = t), t = Wl(t, r.children), t.flags |= 4096, t)
}

function xc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Na(e.return, t, n)
}

function Ms(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function ph(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (ge(e, t, r.children, n), r = q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && xc(e, n, t);
            else if (e.tag === 19) xc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (W(q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Si(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ms(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Si(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Ms(t, !0, n, null, i);
            break;
        case "together":
            Ms(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ti(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function wt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(b(153));
    if (t.child !== null) {
        for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Gt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jg(e, t, n) {
    switch (t.tag) {
        case 3:
            fh(t), nr();
            break;
        case 5:
            Uf(t);
            break;
        case 1:
            Pe(t.type) && gi(t);
            break;
        case 4:
            Ll(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            W(_i, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (W(q, q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? hh(e, t, n) : (W(q, q.current & 1), e = wt(e, t, n), e !== null ? e.sibling : null);
            W(q, q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return ph(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), W(q, q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, ch(e, t, n)
    }
    return wt(e, t, n)
}
var mh, $a, vh, gh;
mh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
$a = function() {};
vh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, cn(st.current);
        var i = null;
        switch (n) {
            case "input":
                o = oa(e, o), r = oa(e, r), i = [];
                break;
            case "select":
                o = Y({}, o, {
                    value: void 0
                }), r = Y({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = aa(e, o), r = aa(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = mi)
        }
        ua(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Hr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (i || (i = []), i.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Hr.hasOwnProperty(u) ? (l != null && u === "onScroll" && H("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
gh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function kr(e, t) {
    if (!K) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Yg(e, t, n) {
    var r = t.pendingProps;
    switch (Nl(t), t.tag) {
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
            return pe(t), null;
        case 1:
            return Pe(t.type) && vi(), pe(t), null;
        case 3:
            return r = t.stateNode, or(), G(Ce), G(ve), Dl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Oo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qe !== null && (Va(qe), qe = null))), $a(e, t), pe(t), null;
        case 5:
            $l(t);
            var o = cn(ro.current);
            if (n = t.type, e !== null && t.stateNode != null) vh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(b(166));
                    return pe(t), null
                }
                if (e = cn(st.current), Oo(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[rt] = t, r[to] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Tr.length; o++) H(Tr[o], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            Ru(r, i), H("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, H("invalid", r);
                            break;
                        case "textarea":
                            Ou(r, i), H("invalid", r)
                    }
                    ua(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && To(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && To(r.textContent, a, e), o = ["children", "" + a]) : Hr.hasOwnProperty(s) && a != null && s === "onScroll" && H("scroll", r)
                        } switch (n) {
                        case "input":
                            So(r), Tu(r, i, !0);
                            break;
                        case "textarea":
                            So(r), Au(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = mi)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[rt] = t, e[to] = r, mh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = ca(n, r), n) {
                            case "dialog":
                                H("cancel", e), H("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Tr.length; o++) H(Tr[o], e);
                                o = r;
                                break;
                            case "source":
                                H("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), o = r;
                                break;
                            case "details":
                                H("toggle", e), o = r;
                                break;
                            case "input":
                                Ru(e, r), o = oa(e, r), H("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Y({}, r, {
                                    value: void 0
                                }), H("invalid", e);
                                break;
                            case "textarea":
                                Ou(e, r), o = aa(e, r), H("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        ua(n, o),
                        a = o;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style" ? Kd(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Hd(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Gr(e, l) : typeof l == "number" && Gr(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Hr.hasOwnProperty(i) ? l != null && i === "onScroll" && H("scroll", e) : l != null && hl(e, i, l, s))
                            } switch (n) {
                            case "input":
                                So(e), Tu(e, r, !1);
                                break;
                            case "textarea":
                                So(e), Au(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Vn(e, !!r.multiple, i, !1) : r.defaultValue != null && Vn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = mi)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return pe(t), null;
        case 6:
            if (e && t.stateNode != null) gh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
                if (n = cn(ro.current), cn(st.current), Oo(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (i = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
                        case 3:
                            To(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && To(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r
            }
            return pe(t), null;
        case 13:
            if (G(q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (K && Oe !== null && t.mode & 1 && !(t.flags & 128)) Lf(), nr(), t.flags |= 98560, i = !1;
                else if (i = Oo(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(b(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(b(317));
                        i[rt] = t
                    } else nr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    pe(t), i = !1
                } else qe !== null && (Va(qe), qe = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? re === 0 && (re = 3) : Ql())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
        case 4:
            return or(), $a(e, t), e === null && Zr(t.stateNode.containerInfo), pe(t), null;
        case 10:
            return Ol(t.type._context), pe(t), null;
        case 17:
            return Pe(t.type) && vi(), pe(t), null;
        case 19:
            if (G(q), i = t.memoizedState, i === null) return pe(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) kr(i, !1);
                else {
                    if (re !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Si(e), s !== null) {
                                for (t.flags |= 128, kr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return W(q, q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Z() > sr && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Si(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !K) return pe(t), null
                    } else 2 * Z() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, kr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Z(), t.sibling = null, n = q.current, W(q, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
        case 22:
        case 23:
            return ql(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Te & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(b(156, t.tag))
}

function Xg(e, t) {
    switch (Nl(t), t.tag) {
        case 1:
            return Pe(t.type) && vi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return or(), G(Ce), G(ve), Dl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return $l(t), null;
        case 13:
            if (G(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(b(340));
                nr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return G(q), null;
        case 4:
            return or(), null;
        case 10:
            return Ol(t.type._context), null;
        case 22:
        case 23:
            return ql(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Lo = !1,
    me = !1,
    Zg = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function Bn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            X(e, t, r)
        } else n.current = null
}

function Da(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var kc = !1;

function ey(e, t) {
    if (_a = fi, e = kf(), Cl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    f = null;
                t: for (;;) {
                    for (var w; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (w = d.firstChild) !== null;) f = d, d = w;
                    for (;;) {
                        if (d === e) break t;
                        if (f === n && ++u === o && (a = s), f === i && ++c === r && (l = s), (w = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = w
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (xa = {
            focusedElem: e,
            selectionRange: n
        }, fi = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var g = x.memoizedProps,
                                    _ = x.memoizedState,
                                    p = t.stateNode,
                                    h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : He(t.type, g), _);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(b(163))
                    }
                } catch (k) {
                    X(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return x = kc, kc = !1, x
}

function zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Da(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Gi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ma(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function yh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[to], delete t[Ea], delete t[$g], delete t[Dg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function wh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Sc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || wh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function za(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mi));
    else if (r !== 4 && (e = e.child, e !== null))
        for (za(e, t, n), e = e.sibling; e !== null;) za(e, t, n), e = e.sibling
}

function Ua(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ua(e, t, n), e = e.sibling; e !== null;) Ua(e, t, n), e = e.sibling
}
var ue = null,
    Ge = !1;

function Et(e, t, n) {
    for (n = n.child; n !== null;) _h(e, t, n), n = n.sibling
}

function _h(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function") try {
        it.onCommitFiberUnmount(Mi, n)
    } catch {}
    switch (n.tag) {
        case 5:
            me || Bn(n, t);
        case 6:
            var r = ue,
                o = Ge;
            ue = null, Et(e, t, n), ue = r, Ge = o, ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
            break;
        case 18:
            ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Ts(e.parentNode, n) : e.nodeType === 1 && Ts(e, n), Jr(e)) : Ts(ue, n.stateNode));
            break;
        case 4:
            r = ue, o = Ge, ue = n.stateNode.containerInfo, Ge = !0, Et(e, t, n), ue = r, Ge = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Da(n, t, s), o = o.next
                } while (o !== r)
            }
            Et(e, t, n);
            break;
        case 1:
            if (!me && (Bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                X(n, t, a)
            }
            Et(e, t, n);
            break;
        case 21:
            Et(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, Et(e, t, n), me = r) : Et(e, t, n);
            break;
        default:
            Et(e, t, n)
    }
}

function Ec(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Zg), t.forEach(function(r) {
            var o = uy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Ve(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ue = a.stateNode, Ge = !1;
                            break e;
                        case 3:
                            ue = a.stateNode.containerInfo, Ge = !0;
                            break e;
                        case 4:
                            ue = a.stateNode.containerInfo, Ge = !0;
                            break e
                    }
                    a = a.return
                }
                if (ue === null) throw Error(b(160));
                _h(i, s, o), ue = null, Ge = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                X(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) xh(t, e), t = t.sibling
}

function xh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ve(t, e), et(e), r & 4) {
                try {
                    zr(3, e, e.return), Gi(3, e)
                } catch (g) {
                    X(e, e.return, g)
                }
                try {
                    zr(5, e, e.return)
                } catch (g) {
                    X(e, e.return, g)
                }
            }
            break;
        case 1:
            Ve(t, e), et(e), r & 512 && n !== null && Bn(n, n.return);
            break;
        case 5:
            if (Ve(t, e), et(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Gr(o, "")
                } catch (g) {
                    X(e, e.return, g)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && Bd(o, i), ca(a, s);
                    var u = ca(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            d = l[s + 1];
                        c === "style" ? Kd(o, d) : c === "dangerouslySetInnerHTML" ? Hd(o, d) : c === "children" ? Gr(o, d) : hl(o, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            ia(o, i);
                            break;
                        case "textarea":
                            Wd(o, i);
                            break;
                        case "select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var w = i.value;
                            w != null ? Vn(o, !!i.multiple, w, !1) : f !== !!i.multiple && (i.defaultValue != null ? Vn(o, !!i.multiple, i.defaultValue, !0) : Vn(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[to] = i
                } catch (g) {
                    X(e, e.return, g)
                }
            }
            break;
        case 6:
            if (Ve(t, e), et(e), r & 4) {
                if (e.stateNode === null) throw Error(b(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (g) {
                    X(e, e.return, g)
                }
            }
            break;
        case 3:
            if (Ve(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Jr(t.containerInfo)
            } catch (g) {
                X(e, e.return, g)
            }
            break;
        case 4:
            Ve(t, e), et(e);
            break;
        case 13:
            Ve(t, e), et(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Gl = Z())), r & 4 && Ec(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (u = me) || c, Ve(t, e), me = u) : Ve(t, e), et(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (j = e, c = e.child; c !== null;) {
                        for (d = j = c; j !== null;) {
                            switch (f = j, w = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    zr(4, f, f.return);
                                    break;
                                case 1:
                                    Bn(f, f.return);
                                    var x = f.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (g) {
                                            X(r, n, g)
                                        }
                                    }
                                    break;
                                case 5:
                                    Bn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Cc(d);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = f, j = w) : Cc(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Gd("display", s))
                            } catch (g) {
                                X(e, e.return, g)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            X(e, e.return, g)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            Ve(t, e), et(e), r & 4 && Ec(e);
            break;
        case 21:
            break;
        default:
            Ve(t, e), et(e)
    }
}

function et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (wh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(b(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Gr(o, ""), r.flags &= -33);
                    var i = Sc(e);
                    Ua(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Sc(e);
                    za(e, a, s);
                    break;
                default:
                    throw Error(b(161))
            }
        }
        catch (l) {
            X(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ty(e, t, n) {
    j = e, kh(e)
}

function kh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var o = j,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Lo;
            if (!s) {
                var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || me;
                a = Lo;
                var u = me;
                if (Lo = s, (me = l) && !u)
                    for (j = o; j !== null;) s = j, l = s.child, s.tag === 22 && s.memoizedState !== null ? Pc(o) : l !== null ? (l.return = s, j = l) : Pc(o);
                for (; i !== null;) j = i, kh(i), i = i.sibling;
                j = o, Lo = a, me = u
            }
            bc(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : bc(e)
    }
}

function bc(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        me || Gi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !me)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : He(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var i = t.updateQueue;
                        i !== null && uc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            uc(t, s, n)
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
                                    l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Jr(d)
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
                        throw Error(b(163))
                }
                me || t.flags & 512 && Ma(t)
            } catch (f) {
                X(t, t.return, f)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Cc(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Pc(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Gi(4, t)
                    } catch (l) {
                        X(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            X(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        Ma(t)
                    } catch (l) {
                        X(t, i, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Ma(t)
                    } catch (l) {
                        X(t, s, l)
                    }
            }
        } catch (l) {
            X(t, t.return, l)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, j = a;
            break
        }
        j = t.return
    }
}
var ny = Math.ceil,
    Ci = _t.ReactCurrentDispatcher,
    Vl = _t.ReactCurrentOwner,
    Ue = _t.ReactCurrentBatchConfig,
    M = 0,
    ae = null,
    te = null,
    ce = 0,
    Te = 0,
    Wn = Yt(0),
    re = 0,
    ao = null,
    vn = 0,
    Ki = 0,
    Hl = 0,
    Ur = null,
    Se = null,
    Gl = 0,
    sr = 1 / 0,
    ut = null,
    Pi = !1,
    Fa = null,
    Vt = null,
    $o = !1,
    Dt = null,
    Ni = 0,
    Fr = 0,
    Ba = null,
    ni = -1,
    ri = 0;

function ye() {
    return M & 6 ? Z() : ni !== -1 ? ni : ni = Z()
}

function Ht(e) {
    return e.mode & 1 ? M & 2 && ce !== 0 ? ce & -ce : zg.transition !== null ? (ri === 0 && (ri = sf()), ri) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hf(e.type)), e) : 1
}

function Je(e, t, n, r) {
    if (50 < Fr) throw Fr = 0, Ba = null, Error(b(185));
    co(e, n, r), (!(M & 2) || e !== ae) && (e === ae && (!(M & 2) && (Ki |= n), re === 4 && It(e, ce)), Ne(e, r), n === 1 && M === 0 && !(t.mode & 1) && (sr = Z() + 500, Wi && Xt()))
}

function Ne(e, t) {
    var n = e.callbackNode;
    zv(e, t);
    var r = di(e, e === ae ? ce : 0);
    if (r === 0) n !== null && $u(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && $u(n), t === 1) e.tag === 0 ? Mg(Nc.bind(null, e)) : Of(Nc.bind(null, e)), Ig(function() {
            !(M & 6) && Xt()
        }), n = null;
        else {
            switch (af(r)) {
                case 1:
                    n = yl;
                    break;
                case 4:
                    n = rf;
                    break;
                case 16:
                    n = ci;
                    break;
                case 536870912:
                    n = of;
                    break;
                default:
                    n = ci
            }
            n = Rh(n, Sh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Sh(e, t) {
    if (ni = -1, ri = 0, M & 6) throw Error(b(327));
    var n = e.callbackNode;
    if (Qn() && e.callbackNode !== n) return null;
    var r = di(e, e === ae ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ji(e, r);
    else {
        t = r;
        var o = M;
        M |= 2;
        var i = bh();
        (ae !== e || ce !== t) && (ut = null, sr = Z() + 500, dn(e, t));
        do try {
            iy();
            break
        } catch (a) {
            Eh(e, a)
        }
        while (!0);
        Tl(), Ci.current = i, M = o, te !== null ? t = 0 : (ae = null, ce = 0, t = re)
    }
    if (t !== 0) {
        if (t === 2 && (o = ma(e), o !== 0 && (r = o, t = Wa(e, o))), t === 1) throw n = ao, dn(e, 0), It(e, r), Ne(e, Z()), n;
        if (t === 6) It(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !ry(o) && (t = ji(e, r), t === 2 && (i = ma(e), i !== 0 && (r = i, t = Wa(e, i))), t === 1)) throw n = ao, dn(e, 0), It(e, r), Ne(e, Z()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(b(345));
                case 2:
                    on(e, Se, ut);
                    break;
                case 3:
                    if (It(e, r), (r & 130023424) === r && (t = Gl + 500 - Z(), 10 < t)) {
                        if (di(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            ye(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Sa(on.bind(null, e, Se, ut), t);
                        break
                    }
                    on(e, Se, ut);
                    break;
                case 4:
                    if (It(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - Qe(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ny(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Sa(on.bind(null, e, Se, ut), r);
                        break
                    }
                    on(e, Se, ut);
                    break;
                case 5:
                    on(e, Se, ut);
                    break;
                default:
                    throw Error(b(329))
            }
        }
    }
    return Ne(e, Z()), e.callbackNode === n ? Sh.bind(null, e) : null
}

function Wa(e, t) {
    var n = Ur;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = ji(e, t), e !== 2 && (t = Se, Se = n, t !== null && Va(t)), e
}

function Va(e) {
    Se === null ? Se = e : Se.push.apply(Se, e)
}

function ry(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ye(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function It(e, t) {
    for (t &= ~Hl, t &= ~Ki, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Qe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Nc(e) {
    if (M & 6) throw Error(b(327));
    Qn();
    var t = di(e, 0);
    if (!(t & 1)) return Ne(e, Z()), null;
    var n = ji(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ma(e);
        r !== 0 && (t = r, n = Wa(e, r))
    }
    if (n === 1) throw n = ao, dn(e, 0), It(e, t), Ne(e, Z()), n;
    if (n === 6) throw Error(b(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, on(e, Se, ut), Ne(e, Z()), null
}

function Kl(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (sr = Z() + 500, Wi && Xt())
    }
}

function gn(e) {
    Dt !== null && Dt.tag === 0 && !(M & 6) && Qn();
    var t = M;
    M |= 1;
    var n = Ue.transition,
        r = F;
    try {
        if (Ue.transition = null, F = 1, e) return e()
    } finally {
        F = r, Ue.transition = n, M = t, !(M & 6) && Xt()
    }
}

function ql() {
    Te = Wn.current, G(Wn)
}

function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Ag(n)), te !== null)
        for (n = te.return; n !== null;) {
            var r = n;
            switch (Nl(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && vi();
                    break;
                case 3:
                    or(), G(Ce), G(ve), Dl();
                    break;
                case 5:
                    $l(r);
                    break;
                case 4:
                    or();
                    break;
                case 13:
                    G(q);
                    break;
                case 19:
                    G(q);
                    break;
                case 10:
                    Ol(r.type._context);
                    break;
                case 22:
                case 23:
                    ql()
            }
            n = n.return
        }
    if (ae = e, te = e = Gt(e.current, null), ce = Te = t, re = 0, ao = null, Hl = Ki = vn = 0, Se = Ur = null, un !== null) {
        for (t = 0; t < un.length; t++)
            if (n = un[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            } un = null
    }
    return e
}

function Eh(e, t) {
    do {
        var n = te;
        try {
            if (Tl(), Zo.current = bi, Ei) {
                for (var r = J.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Ei = !1
            }
            if (mn = 0, se = ne = J = null, Mr = !1, oo = 0, Vl.current = null, n === null || n.return === null) {
                re = 1, ao = t, te = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = ce, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var w = mc(s);
                    if (w !== null) {
                        w.flags &= -257, vc(w, s, a, i, t), w.mode & 1 && pc(i, u, t), t = w, l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var g = new Set;
                            g.add(l), t.updateQueue = g
                        } else x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            pc(i, u, t), Ql();
                            break e
                        }
                        l = Error(b(426))
                    }
                } else if (K && a.mode & 1) {
                    var _ = mc(s);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), vc(_, s, a, i, t), jl(ir(l, a));
                        break e
                    }
                }
                i = l = ir(l, a),
                re !== 4 && (re = 2),
                Ur === null ? Ur = [i] : Ur.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var p = ah(i, l, t);
                            lc(i, p);
                            break e;
                        case 1:
                            a = l;
                            var h = i.type,
                                y = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Vt === null || !Vt.has(y)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var k = lh(i, a, t);
                                lc(i, k);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ph(n)
        } catch (S) {
            t = S, te === n && n !== null && (te = n = n.return);
            continue
        }
        break
    } while (!0)
}

function bh() {
    var e = Ci.current;
    return Ci.current = bi, e === null ? bi : e
}

function Ql() {
    (re === 0 || re === 3 || re === 2) && (re = 4), ae === null || !(vn & 268435455) && !(Ki & 268435455) || It(ae, ce)
}

function ji(e, t) {
    var n = M;
    M |= 2;
    var r = bh();
    (ae !== e || ce !== t) && (ut = null, dn(e, t));
    do try {
        oy();
        break
    } catch (o) {
        Eh(e, o)
    }
    while (!0);
    if (Tl(), M = n, Ci.current = r, te !== null) throw Error(b(261));
    return ae = null, ce = 0, re
}

function oy() {
    for (; te !== null;) Ch(te)
}

function iy() {
    for (; te !== null && !Rv();) Ch(te)
}

function Ch(e) {
    var t = jh(e.alternate, e, Te);
    e.memoizedProps = e.pendingProps, t === null ? Ph(e) : te = t, Vl.current = null
}

function Ph(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Xg(n, t), n !== null) {
                n.flags &= 32767, te = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                re = 6, te = null;
                return
            }
        } else if (n = Yg(n, t, Te), n !== null) {
            te = n;
            return
        }
        if (t = t.sibling, t !== null) {
            te = t;
            return
        }
        te = t = e
    } while (t !== null);
    re === 0 && (re = 5)
}

function on(e, t, n) {
    var r = F,
        o = Ue.transition;
    try {
        Ue.transition = null, F = 1, sy(e, t, n, r)
    } finally {
        Ue.transition = o, F = r
    }
    return null
}

function sy(e, t, n, r) {
    do Qn(); while (Dt !== null);
    if (M & 6) throw Error(b(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(b(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Uv(e, i), e === ae && (te = ae = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $o || ($o = !0, Rh(ci, function() {
            return Qn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Ue.transition, Ue.transition = null;
        var s = F;
        F = 1;
        var a = M;
        M |= 4, Vl.current = null, ey(e, n), xh(n, e), Cg(xa), fi = !!_a, xa = _a = null, e.current = n, ty(n), Tv(), M = a, F = s, Ue.transition = i
    } else e.current = n;
    if ($o && ($o = !1, Dt = e, Ni = o), i = e.pendingLanes, i === 0 && (Vt = null), Iv(n.stateNode), Ne(e, Z()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Pi) throw Pi = !1, e = Fa, Fa = null, e;
    return Ni & 1 && e.tag !== 0 && Qn(), i = e.pendingLanes, i & 1 ? e === Ba ? Fr++ : (Fr = 0, Ba = e) : Fr = 0, Xt(), null
}

function Qn() {
    if (Dt !== null) {
        var e = af(Ni),
            t = Ue.transition,
            n = F;
        try {
            if (Ue.transition = null, F = 16 > e ? 16 : e, Dt === null) var r = !1;
            else {
                if (e = Dt, Dt = null, Ni = 0, M & 6) throw Error(b(331));
                var o = M;
                for (M |= 4, j = e.current; j !== null;) {
                    var i = j,
                        s = i.child;
                    if (j.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (j = u; j !== null;) {
                                    var c = j;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zr(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, j = d;
                                    else
                                        for (; j !== null;) {
                                            c = j;
                                            var f = c.sibling,
                                                w = c.return;
                                            if (yh(c), c === u) {
                                                j = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = w, j = f;
                                                break
                                            }
                                            j = w
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var g = x.child;
                                if (g !== null) {
                                    x.child = null;
                                    do {
                                        var _ = g.sibling;
                                        g.sibling = null, g = _
                                    } while (g !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, j = s;
                    else e: for (; j !== null;) {
                        if (i = j, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                zr(9, i, i.return)
                        }
                        var p = i.sibling;
                        if (p !== null) {
                            p.return = i.return, j = p;
                            break e
                        }
                        j = i.return
                    }
                }
                var h = e.current;
                for (j = h; j !== null;) {
                    s = j;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null) y.return = s, j = y;
                    else e: for (s = h; j !== null;) {
                        if (a = j, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Gi(9, a)
                            }
                        } catch (S) {
                            X(a, a.return, S)
                        }
                        if (a === s) {
                            j = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, j = k;
                            break e
                        }
                        j = a.return
                    }
                }
                if (M = o, Xt(), it && typeof it.onPostCommitFiberRoot == "function") try {
                    it.onPostCommitFiberRoot(Mi, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            F = n, Ue.transition = t
        }
    }
    return !1
}

function jc(e, t, n) {
    t = ir(n, t), t = ah(e, t, 1), e = Wt(e, t, 1), t = ye(), e !== null && (co(e, 1, t), Ne(e, t))
}

function X(e, t, n) {
    if (e.tag === 3) jc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                jc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
                    e = ir(n, e), e = lh(t, e, 1), t = Wt(t, e, 1), e = ye(), t !== null && (co(t, 1, e), Ne(t, e));
                    break
                }
            }
            t = t.return
        }
}

function ay(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > Z() - Gl ? dn(e, 0) : Hl |= n), Ne(e, t)
}

function Nh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Co, Co <<= 1, !(Co & 130023424) && (Co = 4194304)) : t = 1);
    var n = ye();
    e = yt(e, t), e !== null && (co(e, t, n), Ne(e, n))
}

function ly(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Nh(e, n)
}

function uy(e, t) {
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
            throw Error(b(314))
    }
    r !== null && r.delete(t), Nh(e, n)
}
var jh;
jh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current) be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return be = !1, Jg(e, t, n);
            be = !!(e.flags & 131072)
        }
    else be = !1, K && t.flags & 1048576 && Af(t, wi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ti(e, t), e = t.pendingProps;
            var o = tr(t, ve.current);
            qn(t, n), o = zl(null, t, r, e, o, n);
            var i = Ul();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (i = !0, gi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Il(t), o.updater = Hi, t.stateNode = o, o._reactInternals = t, Ra(t, r, e, n), t = Aa(null, t, r, !0, i, n)) : (t.tag = 0, K && i && Pl(t), ge(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ti(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = dy(r), e = He(r, e), o) {
                    case 0:
                        t = Oa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = wc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = gc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = yc(null, t, r, He(r.type, e), n);
                        break e
                }
                throw Error(b(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : He(r, o), Oa(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : He(r, o), wc(e, t, r, o, n);
        case 3:
            e: {
                if (fh(t), e === null) throw Error(b(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                zf(e, t),
                ki(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = ir(Error(b(423)), t), t = _c(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = ir(Error(b(424)), t), t = _c(e, t, r, n, o);
                    break e
                } else
                    for (Oe = Bt(t.stateNode.containerInfo.firstChild), Ae = t, K = !0, qe = null, n = Df(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (nr(), r === o) {
                        t = wt(e, t, n);
                        break e
                    }
                    ge(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Uf(t), e === null && Pa(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ka(r, o) ? s = null : i !== null && ka(r, i) && (t.flags |= 32), dh(e, t), ge(e, t, s, n), t.child;
        case 6:
            return e === null && Pa(t), null;
        case 13:
            return hh(e, t, n);
        case 4:
            return Ll(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rr(t, null, r, n) : ge(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : He(r, o), gc(e, t, r, o, n);
        case 7:
            return ge(e, t, t.pendingProps, n), t.child;
        case 8:
            return ge(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ge(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, W(_i, r._currentValue), r._currentValue = s, i !== null)
                    if (Ye(i.value, s)) {
                        if (i.children === o.children && !Ce.current) {
                            t = wt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = mt(-1, n & -n), l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Na(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(b(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Na(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                ge(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, qn(t, n), o = Be(o), r = r(o), t.flags |= 1, ge(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = He(r, t.pendingProps), o = He(r.type, o), yc(e, t, r, o, n);
        case 15:
            return uh(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : He(r, o), ti(e, t), t.tag = 1, Pe(r) ? (e = !0, gi(t)) : e = !1, qn(t, n), sh(t, r, o), Ra(t, r, o, n), Aa(null, t, r, !0, e, n);
        case 19:
            return ph(e, t, n);
        case 22:
            return ch(e, t, n)
    }
    throw Error(b(156, t.tag))
};

function Rh(e, t) {
    return nf(e, t)
}

function cy(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ze(e, t, n, r) {
    return new cy(e, t, n, r)
}

function Jl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function dy(e) {
    if (typeof e == "function") return Jl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ml) return 11;
        if (e === vl) return 14
    }
    return 2
}

function Gt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function oi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") Jl(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case An:
            return fn(n.children, o, i, t);
        case pl:
            s = 8, o |= 8;
            break;
        case ea:
            return e = ze(12, n, t, o | 2), e.elementType = ea, e.lanes = i, e;
        case ta:
            return e = ze(13, n, t, o), e.elementType = ta, e.lanes = i, e;
        case na:
            return e = ze(19, n, t, o), e.elementType = na, e.lanes = i, e;
        case zd:
            return qi(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Dd:
                    s = 10;
                    break e;
                case Md:
                    s = 9;
                    break e;
                case ml:
                    s = 11;
                    break e;
                case vl:
                    s = 14;
                    break e;
                case Rt:
                    s = 16, r = null;
                    break e
            }
            throw Error(b(130, e == null ? e : typeof e, ""))
    }
    return t = ze(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function fn(e, t, n, r) {
    return e = ze(7, e, r, t), e.lanes = n, e
}

function qi(e, t, n, r) {
    return e = ze(22, e, r, t), e.elementType = zd, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function zs(e, t, n) {
    return e = ze(6, e, null, t), e.lanes = n, e
}

function Us(e, t, n) {
    return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function fy(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _s(0), this.expirationTimes = _s(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _s(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Yl(e, t, n, r, o, i, s, a, l) {
    return e = new fy(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ze(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Il(i), e
}

function hy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: On,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Th(e) {
    if (!e) return qt;
    e = e._reactInternals;
    e: {
        if (xn(e) !== e || e.tag !== 1) throw Error(b(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Pe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(b(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Pe(n)) return Tf(e, n, t)
    }
    return t
}

function Oh(e, t, n, r, o, i, s, a, l) {
    return e = Yl(n, r, !0, e, o, i, s, a, l), e.context = Th(null), n = e.current, r = ye(), o = Ht(n), i = mt(r, o), i.callback = t ?? null, Wt(n, i, o), e.current.lanes = o, co(e, o, r), Ne(e, r), e
}

function Qi(e, t, n, r) {
    var o = t.current,
        i = ye(),
        s = Ht(o);
    return n = Th(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wt(o, t, s), e !== null && (Je(e, o, s, i), Xo(e, o, s)), s
}

function Ri(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Rc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Xl(e, t) {
    Rc(e, t), (e = e.alternate) && Rc(e, t)
}

function py() {
    return null
}
var Ah = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Zl(e) {
    this._internalRoot = e
}
Ji.prototype.render = Zl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(b(409));
    Qi(e, t, null, null)
};
Ji.prototype.unmount = Zl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gn(function() {
            Qi(null, e, null, null)
        }), t[gt] = null
    }
};

function Ji(e) {
    this._internalRoot = e
}
Ji.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = cf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
        At.splice(n, 0, e), n === 0 && ff(e)
    }
};

function eu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Yi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Tc() {}

function my(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ri(s);
                i.call(u)
            }
        }
        var s = Oh(t, r, e, 0, null, !1, !1, "", Tc);
        return e._reactRootContainer = s, e[gt] = s.current, Zr(e.nodeType === 8 ? e.parentNode : e), gn(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ri(l);
            a.call(u)
        }
    }
    var l = Yl(e, 0, !1, null, null, !1, !1, "", Tc);
    return e._reactRootContainer = l, e[gt] = l.current, Zr(e.nodeType === 8 ? e.parentNode : e), gn(function() {
        Qi(t, l, n, r)
    }), l
}

function Xi(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Ri(s);
                a.call(l)
            }
        }
        Qi(t, s, e, o)
    } else s = my(n, t, e, o, r);
    return Ri(s)
}
lf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Rr(t.pendingLanes);
                n !== 0 && (wl(t, n | 1), Ne(t, Z()), !(M & 6) && (sr = Z() + 500, Xt()))
            }
            break;
        case 13:
            gn(function() {
                var r = yt(e, 1);
                if (r !== null) {
                    var o = ye();
                    Je(r, e, 1, o)
                }
            }), Xl(e, 1)
    }
};
_l = function(e) {
    if (e.tag === 13) {
        var t = yt(e, 134217728);
        if (t !== null) {
            var n = ye();
            Je(t, e, 134217728, n)
        }
        Xl(e, 134217728)
    }
};
uf = function(e) {
    if (e.tag === 13) {
        var t = Ht(e),
            n = yt(e, t);
        if (n !== null) {
            var r = ye();
            Je(n, e, t, r)
        }
        Xl(e, t)
    }
};
cf = function() {
    return F
};
df = function(e, t) {
    var n = F;
    try {
        return F = e, t()
    } finally {
        F = n
    }
};
fa = function(e, t, n) {
    switch (t) {
        case "input":
            if (ia(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Bi(r);
                        if (!o) throw Error(b(90));
                        Fd(r), ia(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Wd(e, n);
            break;
        case "select":
            t = n.value, t != null && Vn(e, !!n.multiple, t, !1)
    }
};
Jd = Kl;
Yd = gn;
var vy = {
        usingClientEntryPoint: !1,
        Events: [ho, Dn, Bi, qd, Qd, Kl]
    },
    Sr = {
        findFiberByHostInstance: ln,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    gy = {
        bundleType: Sr.bundleType,
        version: Sr.version,
        rendererPackageName: Sr.rendererPackageName,
        rendererConfig: Sr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _t.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ef(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Sr.findFiberByHostInstance || py,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Do.isDisabled && Do.supportsFiber) try {
        Mi = Do.inject(gy), it = Do
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vy;
Le.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!eu(t)) throw Error(b(200));
    return hy(e, t, null, n)
};
Le.createRoot = function(e, t) {
    if (!eu(e)) throw Error(b(299));
    var n = !1,
        r = "",
        o = Ah;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Yl(e, 1, !1, null, null, n, !1, r, o), e[gt] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new Zl(t)
};
Le.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(b(188)) : (e = Object.keys(e).join(","), Error(b(268, e)));
    return e = ef(t), e = e === null ? null : e.stateNode, e
};
Le.flushSync = function(e) {
    return gn(e)
};
Le.hydrate = function(e, t, n) {
    if (!Yi(t)) throw Error(b(200));
    return Xi(null, e, t, !0, n)
};
Le.hydrateRoot = function(e, t, n) {
    if (!eu(e)) throw Error(b(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = Ah;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Oh(t, null, e, 1, n ?? null, o, !1, i, s), e[gt] = t.current, Zr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ji(t)
};
Le.render = function(e, t, n) {
    if (!Yi(t)) throw Error(b(200));
    return Xi(null, e, t, !1, n)
};
Le.unmountComponentAtNode = function(e) {
    if (!Yi(e)) throw Error(b(40));
    return e._reactRootContainer ? (gn(function() {
        Xi(null, null, e, !1, function() {
            e._reactRootContainer = null, e[gt] = null
        })
    }), !0) : !1
};
Le.unstable_batchedUpdates = Kl;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yi(n)) throw Error(b(200));
    if (e == null || e._reactInternals === void 0) throw Error(b(38));
    return Xi(e, t, n, !1, r)
};
Le.version = "18.3.1-next-f1338f8080-20240426";

function Ih() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ih)
    } catch (e) {
        console.error(e)
    }
}
Ih(), Ad.exports = Le;
var tu = Ad.exports;
const yy = _d(tu);
var Lh, Oc = tu;
Lh = Oc.createRoot, Oc.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ti() {
    return Ti = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ti.apply(this, arguments)
}
var Mt;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Mt || (Mt = {}));
const Ac = "popstate";

function wy(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: a
        } = r.location;
        return Ha("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : Dh(o)
    }
    return xy(t, n, null, e)
}

function je(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function $h(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function _y() {
    return Math.random().toString(36).substr(2, 8)
}

function Ic(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ha(e, t, n, r) {
    return n === void 0 && (n = null), Ti({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Zi(t) : t, {
        state: n,
        key: t && t.key || r || _y()
    })
}

function Dh(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Zi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function xy(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, a = Mt.Pop, l = null, u = c();
    u == null && (u = 0, s.replaceState(Ti({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function d() {
        a = Mt.Pop;
        let _ = c(),
            p = _ == null ? null : _ - u;
        u = _, l && l({
            action: a,
            location: g.location,
            delta: p
        })
    }

    function f(_, p) {
        a = Mt.Push;
        let h = Ha(g.location, _, p);
        u = c() + 1;
        let y = Ic(h, u),
            k = g.createHref(h);
        try {
            s.pushState(y, "", k)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError") throw S;
            o.location.assign(k)
        }
        i && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }

    function w(_, p) {
        a = Mt.Replace;
        let h = Ha(g.location, _, p);
        u = c();
        let y = Ic(h, u),
            k = g.createHref(h);
        s.replaceState(y, "", k), i && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }

    function x(_) {
        let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof _ == "string" ? _ : Dh(_);
        return h = h.replace(/ $/, "%20"), je(p, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, p)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(_) {
            if (l) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Ac, d), l = _, () => {
                o.removeEventListener(Ac, d), l = null
            }
        },
        createHref(_) {
            return t(o, _)
        },
        createURL: x,
        encodeLocation(_) {
            let p = x(_);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: w,
        go(_) {
            return s.go(_)
        }
    };
    return g
}
var Lc;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Lc || (Lc = {}));

function ky(e, t, n) {
    return n === void 0 && (n = "/"), Sy(e, t, n, !1)
}

function Sy(e, t, n, r) {
    let o = typeof t == "string" ? Zi(t) : t,
        i = Uh(o.pathname || "/", n);
    if (i == null) return null;
    let s = Mh(e);
    Ey(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = Ly(i);
        a = Ay(s[l], u, r)
    }
    return a
}

function Mh(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (je(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = Jn([r, l.relativePath]),
            c = n.concat(l);
        i.children && i.children.length > 0 && (je(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Mh(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: Ty(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
        else
            for (let l of zh(i.path)) o(i, s, l)
    }), t
}

function zh(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = zh(r.join("/")),
        a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))), o && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function Ey(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Oy(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const by = /^:[\w-]+$/,
    Cy = 3,
    Py = 2,
    Ny = 1,
    jy = 10,
    Ry = -2,
    $c = e => e === "*";

function Ty(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some($c) && (r += Ry), t && (r += Py), n.filter(o => !$c(o)).reduce((o, i) => o + (by.test(i) ? Cy : i === "" ? Ny : jy), r)
}

function Oy(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Ay(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            d = Dc({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c),
            f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Dc({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, c)), !d) return null;
        Object.assign(o, d.params), s.push({
            params: o,
            pathname: Jn([i, d.pathname]),
            pathnameBase: $y(Jn([i, d.pathnameBase])),
            route: f
        }), d.pathnameBase !== "/" && (i = Jn([i, d.pathnameBase]))
    }
    return s
}

function Dc(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Iy(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let {
                paramName: f,
                isOptional: w
            } = c;
            if (f === "*") {
                let g = a[d] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[d];
            return w && !x ? u[f] = void 0 : u[f] = (x || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function Iy(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), $h(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function Ly(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return $h(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function Uh(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Jn = e => e.join("/").replace(/\/\/+/g, "/"),
    $y = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function Dy(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Fh = ["post", "put", "patch", "delete"];
new Set(Fh);
const My = ["get", ...Fh];
new Set(My);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Oi() {
    return Oi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Oi.apply(this, arguments)
}
const zy = v.createContext(null),
    Uy = v.createContext(null),
    Bh = v.createContext(null),
    es = v.createContext(null),
    ts = v.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Wh = v.createContext(null);

function nu() {
    return v.useContext(es) != null
}

function Fy() {
    return nu() || je(!1), v.useContext(es).location
}

function By(e, t) {
    return Wy(e, t)
}

function Wy(e, t, n, r) {
    nu() || je(!1);
    let {
        navigator: o
    } = v.useContext(Bh), {
        matches: i
    } = v.useContext(ts), s = i[i.length - 1], a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Fy(),
        c;
    if (t) {
        var d;
        let _ = typeof t == "string" ? Zi(t) : t;
        l === "/" || (d = _.pathname) != null && d.startsWith(l) || je(!1), c = _
    } else c = u;
    let f = c.pathname || "/",
        w = f;
    if (l !== "/") {
        let _ = l.replace(/^\//, "").split("/");
        w = "/" + f.replace(/^\//, "").split("/").slice(_.length).join("/")
    }
    let x = ky(e, {
            pathname: w
        }),
        g = qy(x && x.map(_ => Object.assign({}, _, {
            params: Object.assign({}, a, _.params),
            pathname: Jn([l, o.encodeLocation ? o.encodeLocation(_.pathname).pathname : _.pathname]),
            pathnameBase: _.pathnameBase === "/" ? l : Jn([l, o.encodeLocation ? o.encodeLocation(_.pathnameBase).pathname : _.pathnameBase])
        })), i, n, r);
    return t && g ? v.createElement(es.Provider, {
        value: {
            location: Oi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Mt.Pop
        }
    }, g) : g
}

function Vy() {
    let e = Xy(),
        t = Dy(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? v.createElement("pre", {
        style: o
    }, n) : null, null)
}
const Hy = v.createElement(Vy, null);
class Gy extends v.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? v.createElement(ts.Provider, {
            value: this.props.routeContext
        }, v.createElement(Wh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Ky(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = v.useContext(zy);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), v.createElement(ts.Provider, {
        value: t
    }, r)
}

function qy(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || je(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: f,
                    errors: w
                } = n, x = d.route.loader && f[d.route.id] === void 0 && (!w || w[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, f) => {
        let w, x = !1,
            g = null,
            _ = null;
        n && (w = a && d.route.id ? a[d.route.id] : void 0, g = d.route.errorElement || Hy, l && (u < 0 && f === 0 ? (x = !0, _ = null) : u === f && (x = !0, _ = d.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, f + 1)),
            h = () => {
                let y;
                return w ? y = g : x ? y = _ : d.route.Component ? y = v.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c, v.createElement(Ky, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: p,
                        isDataRoute: n != null
                    },
                    children: y
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? v.createElement(Gy, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: w,
            children: h(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : h()
    }, null)
}
var Ga = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Ga || {});

function Qy(e) {
    let t = v.useContext(Uy);
    return t || je(!1), t
}

function Jy(e) {
    let t = v.useContext(ts);
    return t || je(!1), t
}

function Yy(e) {
    let t = Jy(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || je(!1), n.route.id
}

function Xy() {
    var e;
    let t = v.useContext(Wh),
        n = Qy(Ga.UseRouteError),
        r = Yy(Ga.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const Mc = {};

function Zy(e, t) {
    Mc[t] || (Mc[t] = !0, console.warn(t))
}
const zc = (e, t, n) => Zy(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));

function e0(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && zc("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && !t && zc("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}

function Vh(e) {
    je(!1)
}

function t0(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Mt.Pop,
        navigator: i,
        static: s = !1,
        future: a
    } = e;
    nu() && je(!1);
    let l = t.replace(/^\/*/, "/"),
        u = v.useMemo(() => ({
            basename: l,
            navigator: i,
            static: s,
            future: Oi({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, i, s]);
    typeof r == "string" && (r = Zi(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: f = "",
        state: w = null,
        key: x = "default"
    } = r, g = v.useMemo(() => {
        let _ = Uh(c, l);
        return _ == null ? null : {
            location: {
                pathname: _,
                search: d,
                hash: f,
                state: w,
                key: x
            },
            navigationType: o
        }
    }, [l, c, d, f, w, x, o]);
    return g == null ? null : v.createElement(Bh.Provider, {
        value: u
    }, v.createElement(es.Provider, {
        children: n,
        value: g
    }))
}

function n0(e) {
    let {
        children: t,
        location: n
    } = e;
    return By(Ka(t), n)
}
new Promise(() => {});

function Ka(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return v.Children.forEach(e, (r, o) => {
        if (!v.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === v.Fragment) {
            n.push.apply(n, Ka(r.props.children, i));
            return
        }
        r.type !== Vh && je(!1), !r.props.index || !r.props.children || je(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Ka(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const r0 = "6";
try {
    window.__reactRouterVersion = r0
} catch {}
const o0 = "startTransition",
    Uc = Td[o0];

function i0(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = v.useRef();
    i.current == null && (i.current = wy({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [a, l] = v.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = v.useCallback(d => {
            u && Uc ? Uc(() => l(d)) : l(d)
        }, [l, u]);
    return v.useLayoutEffect(() => s.listen(c), [s, c]), v.useEffect(() => e0(r), [r]), v.createElement(t0, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var Fc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Fc || (Fc = {}));
var Bc;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Bc || (Bc = {}));

function s0(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Hh(...e) {
    return t => e.forEach(n => s0(n, t))
}

function Xe(...e) {
    return v.useCallback(Hh(...e), e)
}
var ar = v.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = v.Children.toArray(n), i = o.find(l0);
    if (i) {
        const s = i.props.children,
            a = o.map(l => l === i ? v.Children.count(s) > 1 ? v.Children.only(null) : v.isValidElement(s) ? s.props.children : null : l);
        return m.jsx(qa, {
            ...r,
            ref: t,
            children: v.isValidElement(s) ? v.cloneElement(s, void 0, a) : null
        })
    }
    return m.jsx(qa, {
        ...r,
        ref: t,
        children: n
    })
});
ar.displayName = "Slot";
var qa = v.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (v.isValidElement(n)) {
        const o = c0(n);
        return v.cloneElement(n, {
            ...u0(r, n.props),
            ref: t ? Hh(t, o) : o
        })
    }
    return v.Children.count(n) > 1 ? v.Children.only(null) : null
});
qa.displayName = "SlotClone";
var a0 = ({
    children: e
}) => m.jsx(m.Fragment, {
    children: e
});

function l0(e) {
    return v.isValidElement(e) && e.type === a0
}

function u0(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            i(...a), o(...a)
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function c0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Gh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = Gh(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function d0() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Gh(e)) && (r && (r += " "), r += t);
    return r
}
const Wc = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
    Vc = d0,
    f0 = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Vc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const c = n == null ? void 0 : n[u],
                d = i == null ? void 0 : i[u];
            if (c === null) return null;
            const f = Wc(c) || Wc(d);
            return o[u][f]
        }), a = n && Object.entries(n).reduce((u, c) => {
            let [d, f] = c;
            return f === void 0 || (u[d] = f), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
            let {
                class: d,
                className: f,
                ...w
            } = c;
            return Object.entries(w).every(x => {
                let [g, _] = x;
                return Array.isArray(_) ? _.includes({
                    ...i,
                    ...a
                } [g]) : {
                    ...i,
                    ...a
                } [g] === _
            }) ? [...u, d, f] : u
        }, []);
        return Vc(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };

function Kh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Kh(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function h0() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Kh(e)) && (r && (r += " "), r += t);
    return r
}
const ru = "-",
    p0 = e => {
        const t = v0(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const a = s.split(ru);
                return a[0] === "" && a.length !== 1 && a.shift(), qh(a, t) || m0(s)
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l
            }
        }
    },
    qh = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? qh(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(ru);
        return (s = t.validators.find(({
            validator: a
        }) => a(i))) == null ? void 0 : s.classGroupId
    },
    Hc = /^\[(.+)\]$/,
    m0 = e => {
        if (Hc.test(e)) {
            const t = Hc.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    v0 = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return y0(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            Qa(s, r, i, t)
        }), r
    },
    Qa = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : Gc(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (g0(o)) {
                    Qa(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                Qa(s, Gc(t, i), n, r)
            })
        })
    },
    Gc = (e, t) => {
        let n = e;
        return t.split(ru).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    g0 = e => e.isThemeGetter,
    y0 = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
        return [n, o]
    }) : e,
    w0 = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    Qh = "!",
    _0 = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = a => {
            const l = [];
            let u = 0,
                c = 0,
                d;
            for (let _ = 0; _ < a.length; _++) {
                let p = a[_];
                if (u === 0) {
                    if (p === o && (r || a.slice(_, _ + i) === t)) {
                        l.push(a.slice(c, _)), c = _ + i;
                        continue
                    }
                    if (p === "/") {
                        d = _;
                        continue
                    }
                }
                p === "[" ? u++ : p === "]" && u--
            }
            const f = l.length === 0 ? a : a.substring(c),
                w = f.startsWith(Qh),
                x = w ? f.substring(1) : f,
                g = d && d > c ? d - c : void 0;
            return {
                modifiers: l,
                hasImportantModifier: w,
                baseClassName: x,
                maybePostfixModifierPosition: g
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: s
        }) : s
    },
    x0 = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    k0 = e => ({
        cache: w0(e.cacheSize),
        parseClassName: _0(e),
        ...p0(e)
    }),
    S0 = /\s+/,
    E0 = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(S0);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const u = s[l],
                {
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: w
                } = n(u);
            let x = !!w,
                g = r(x ? f.substring(0, w) : f);
            if (!g) {
                if (!x) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (g = r(f), !g) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                x = !1
            }
            const _ = x0(c).join(":"),
                p = d ? _ + Qh : _,
                h = p + g;
            if (i.includes(h)) continue;
            i.push(h);
            const y = o(g, x);
            for (let k = 0; k < y.length; ++k) {
                const S = y[k];
                i.push(p + S)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function b0() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = Jh(t)) && (r && (r += " "), r += n);
    return r
}
const Jh = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Jh(e[r])) && (n && (n += " "), n += t);
    return n
};

function C0(e, ...t) {
    let n, r, o, i = s;

    function s(l) {
        const u = t.reduce((c, d) => d(c), e());
        return n = k0(u), r = n.cache.get, o = n.cache.set, i = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const c = E0(l, n);
        return o(l, c), c
    }
    return function() {
        return i(b0.apply(null, arguments))
    }
}
const V = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    Yh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    P0 = /^\d+\/\d+$/,
    N0 = new Set(["px", "full", "screen"]),
    j0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    R0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    T0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    O0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    A0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    lt = e => Yn(e) || N0.has(e) || P0.test(e),
    bt = e => hr(e, "length", F0),
    Yn = e => !!e && !Number.isNaN(Number(e)),
    Fs = e => hr(e, "number", Yn),
    Er = e => !!e && Number.isInteger(Number(e)),
    I0 = e => e.endsWith("%") && Yn(e.slice(0, -1)),
    A = e => Yh.test(e),
    Ct = e => j0.test(e),
    L0 = new Set(["length", "size", "percentage"]),
    $0 = e => hr(e, L0, Xh),
    D0 = e => hr(e, "position", Xh),
    M0 = new Set(["image", "url"]),
    z0 = e => hr(e, M0, W0),
    U0 = e => hr(e, "", B0),
    br = () => !0,
    hr = (e, t, n) => {
        const r = Yh.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    F0 = e => R0.test(e) && !T0.test(e),
    Xh = () => !1,
    B0 = e => O0.test(e),
    W0 = e => A0.test(e),
    V0 = () => {
        const e = V("colors"),
            t = V("spacing"),
            n = V("blur"),
            r = V("brightness"),
            o = V("borderColor"),
            i = V("borderRadius"),
            s = V("borderSpacing"),
            a = V("borderWidth"),
            l = V("contrast"),
            u = V("grayscale"),
            c = V("hueRotate"),
            d = V("invert"),
            f = V("gap"),
            w = V("gradientColorStops"),
            x = V("gradientColorStopPositions"),
            g = V("inset"),
            _ = V("margin"),
            p = V("opacity"),
            h = V("padding"),
            y = V("saturate"),
            k = V("scale"),
            S = V("sepia"),
            E = V("skew"),
            C = V("space"),
            P = V("translate"),
            L = () => ["auto", "contain", "none"],
            R = () => ["auto", "hidden", "clip", "visible", "scroll"],
            le = () => ["auto", A, t],
            U = () => [A, t],
            kt = () => ["", lt, bt],
            Zt = () => ["auto", Yn, A],
            yo = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            St = () => ["solid", "dashed", "dotted", "double", "none"],
            En = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            T = () => ["", "0", A],
            O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            z = () => [Yn, A];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [br],
                spacing: [lt, bt],
                blur: ["none", "", Ct, A],
                brightness: z(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Ct, A],
                borderSpacing: U(),
                borderWidth: kt(),
                contrast: z(),
                grayscale: T(),
                hueRotate: z(),
                invert: T(),
                gap: U(),
                gradientColorStops: [e],
                gradientColorStopPositions: [I0, bt],
                inset: le(),
                margin: le(),
                opacity: z(),
                padding: U(),
                saturate: z(),
                scale: z(),
                sepia: T(),
                skew: z(),
                space: U(),
                translate: U()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", A]
                }],
                container: ["container"],
                columns: [{
                    columns: [Ct]
                }],
                "break-after": [{
                    "break-after": O()
                }],
                "break-before": [{
                    "break-before": O()
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
                    object: [...yo(), A]
                }],
                overflow: [{
                    overflow: R()
                }],
                "overflow-x": [{
                    "overflow-x": R()
                }],
                "overflow-y": [{
                    "overflow-y": R()
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
                    inset: [g]
                }],
                "inset-x": [{
                    "inset-x": [g]
                }],
                "inset-y": [{
                    "inset-y": [g]
                }],
                start: [{
                    start: [g]
                }],
                end: [{
                    end: [g]
                }],
                top: [{
                    top: [g]
                }],
                right: [{
                    right: [g]
                }],
                bottom: [{
                    bottom: [g]
                }],
                left: [{
                    left: [g]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Er, A]
                }],
                basis: [{
                    basis: le()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", A]
                }],
                grow: [{
                    grow: T()
                }],
                shrink: [{
                    shrink: T()
                }],
                order: [{
                    order: ["first", "last", "none", Er, A]
                }],
                "grid-cols": [{
                    "grid-cols": [br]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Er, A]
                    }, A]
                }],
                "col-start": [{
                    "col-start": Zt()
                }],
                "col-end": [{
                    "col-end": Zt()
                }],
                "grid-rows": [{
                    "grid-rows": [br]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Er, A]
                    }, A]
                }],
                "row-start": [{
                    "row-start": Zt()
                }],
                "row-end": [{
                    "row-end": Zt()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", A]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", A]
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
                    p: [h]
                }],
                px: [{
                    px: [h]
                }],
                py: [{
                    py: [h]
                }],
                ps: [{
                    ps: [h]
                }],
                pe: [{
                    pe: [h]
                }],
                pt: [{
                    pt: [h]
                }],
                pr: [{
                    pr: [h]
                }],
                pb: [{
                    pb: [h]
                }],
                pl: [{
                    pl: [h]
                }],
                m: [{
                    m: [_]
                }],
                mx: [{
                    mx: [_]
                }],
                my: [{
                    my: [_]
                }],
                ms: [{
                    ms: [_]
                }],
                me: [{
                    me: [_]
                }],
                mt: [{
                    mt: [_]
                }],
                mr: [{
                    mr: [_]
                }],
                mb: [{
                    mb: [_]
                }],
                ml: [{
                    ml: [_]
                }],
                "space-x": [{
                    "space-x": [C]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [C]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", A, t]
                }],
                "min-w": [{
                    "min-w": [A, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [A, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Ct]
                    }, Ct]
                }],
                h: [{
                    h: [A, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [A, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Ct, bt]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fs]
                }],
                "font-family": [{
                    font: [br]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", A]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Yn, Fs]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", lt, A]
                }],
                "list-image": [{
                    "list-image": ["none", A]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", A]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...St(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", lt, bt]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", lt, A]
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
                    indent: U()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", A]
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
                    content: ["none", A]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...yo(), D0]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", $0]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, z0]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [x]
                }],
                "gradient-via-pos": [{
                    via: [x]
                }],
                "gradient-to-pos": [{
                    to: [x]
                }],
                "gradient-from": [{
                    from: [w]
                }],
                "gradient-via": [{
                    via: [w]
                }],
                "gradient-to": [{
                    to: [w]
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
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...St(), "hidden"]
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
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: St()
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
                    outline: ["", ...St()]
                }],
                "outline-offset": [{
                    "outline-offset": [lt, A]
                }],
                "outline-w": [{
                    outline: [lt, bt]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: kt()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [lt, bt]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Ct, U0]
                }],
                "shadow-color": [{
                    shadow: [br]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...En(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": En()
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
                    "drop-shadow": ["", "none", Ct, A]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [y]
                }],
                sepia: [{
                    sepia: [S]
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
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [S]
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
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", A]
                }],
                duration: [{
                    duration: z()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", A]
                }],
                delay: [{
                    delay: z()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", A]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [k]
                }],
                "scale-x": [{
                    "scale-x": [k]
                }],
                "scale-y": [{
                    "scale-y": [k]
                }],
                rotate: [{
                    rotate: [Er, A]
                }],
                "translate-x": [{
                    "translate-x": [P]
                }],
                "translate-y": [{
                    "translate-y": [P]
                }],
                "skew-x": [{
                    "skew-x": [E]
                }],
                "skew-y": [{
                    "skew-y": [E]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", A]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", A]
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
                    "scroll-m": U()
                }],
                "scroll-mx": [{
                    "scroll-mx": U()
                }],
                "scroll-my": [{
                    "scroll-my": U()
                }],
                "scroll-ms": [{
                    "scroll-ms": U()
                }],
                "scroll-me": [{
                    "scroll-me": U()
                }],
                "scroll-mt": [{
                    "scroll-mt": U()
                }],
                "scroll-mr": [{
                    "scroll-mr": U()
                }],
                "scroll-mb": [{
                    "scroll-mb": U()
                }],
                "scroll-ml": [{
                    "scroll-ml": U()
                }],
                "scroll-p": [{
                    "scroll-p": U()
                }],
                "scroll-px": [{
                    "scroll-px": U()
                }],
                "scroll-py": [{
                    "scroll-py": U()
                }],
                "scroll-ps": [{
                    "scroll-ps": U()
                }],
                "scroll-pe": [{
                    "scroll-pe": U()
                }],
                "scroll-pt": [{
                    "scroll-pt": U()
                }],
                "scroll-pr": [{
                    "scroll-pr": U()
                }],
                "scroll-pb": [{
                    "scroll-pb": U()
                }],
                "scroll-pl": [{
                    "scroll-pl": U()
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
                    "will-change": ["auto", "scroll", "contents", "transform", A]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [lt, bt, Fs]
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
        }
    },
    H0 = C0(V0);

function Q(...e) {
    return H0(h0(e))
}
const G0 = f0("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
    pt = v.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? ar : "button";
        return m.jsx(s, {
            className: Q(G0({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
pt.displayName = "Button";

function at(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function K0(e, t) {
    const n = v.createContext(t),
        r = i => {
            const {
                children: s,
                ...a
            } = i, l = v.useMemo(() => a, Object.values(a));
            return m.jsx(n.Provider, {
                value: l,
                children: s
            })
        };
    r.displayName = e + "Provider";

    function o(i) {
        const s = v.useContext(n);
        if (s) return s;
        if (t !== void 0) return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [r, o]
}

function ns(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = v.createContext(s),
            l = n.length;
        n = [...n, s];
        const u = d => {
            var p;
            const {
                scope: f,
                children: w,
                ...x
            } = d, g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a, _ = v.useMemo(() => x, Object.values(x));
            return m.jsx(g.Provider, {
                value: _,
                children: w
            })
        };
        u.displayName = i + "Provider";

        function c(d, f) {
            var g;
            const w = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
                x = v.useContext(w);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => v.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return v.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, q0(o, ...t)]
}

function q0(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }, {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var yn = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
    Q0 = Td.useId || (() => {}),
    J0 = 0;

function Br(e) {
    const [t, n] = v.useState(Q0());
    return yn(() => {
        n(r => r ?? String(J0++))
    }, [e]), t ? `radix-${t}` : ""
}

function Qt(e) {
    const t = v.useRef(e);
    return v.useEffect(() => {
        t.current = e
    }), v.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function rs({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = Y0({
        defaultProp: t,
        onChange: n
    }), i = e !== void 0, s = i ? e : r, a = Qt(n), l = v.useCallback(u => {
        if (i) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && a(d)
        } else o(u)
    }, [i, e, o, a]);
    return [s, l]
}

function Y0({
    defaultProp: e,
    onChange: t
}) {
    const n = v.useState(e),
        [r] = n,
        o = v.useRef(r),
        i = Qt(t);
    return v.useEffect(() => {
        o.current !== r && (i(r), o.current = r)
    }, [r, o, i]), n
}
var X0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    fe = X0.reduce((e, t) => {
        const n = v.forwardRef((r, o) => {
            const {
                asChild: i,
                ...s
            } = r, a = i ? ar : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), m.jsx(a, {
                ...s,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
        }
    }, {});

function Z0(e, t) {
    e && tu.flushSync(() => e.dispatchEvent(t))
}

function ew(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Qt(e);
    v.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var tw = "DismissableLayer",
    Ja = "dismissableLayer.update",
    nw = "dismissableLayer.pointerDownOutside",
    rw = "dismissableLayer.focusOutside",
    Kc, Zh = v.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    ep = v.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
        } = e, u = v.useContext(Zh), [c, d] = v.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, w] = v.useState({}), x = Xe(t, C => d(C)), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = g.indexOf(_), h = c ? g.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, k = h >= p, S = sw(C => {
            const P = C.target,
                L = [...u.branches].some(R => R.contains(P));
            !k || L || (o == null || o(C), s == null || s(C), C.defaultPrevented || a == null || a())
        }, f), E = aw(C => {
            const P = C.target;
            [...u.branches].some(R => R.contains(P)) || (i == null || i(C), s == null || s(C), C.defaultPrevented || a == null || a())
        }, f);
        return ew(C => {
            h === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()))
        }, f), v.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Kc = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), qc(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Kc)
            }
        }, [c, f, n, u]), v.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), qc())
        }, [c, u]), v.useEffect(() => {
            const C = () => w({});
            return document.addEventListener(Ja, C), () => document.removeEventListener(Ja, C)
        }, []), m.jsx(fe.div, {
            ...l,
            ref: x,
            style: {
                pointerEvents: y ? k ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: at(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: at(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: at(e.onPointerDownCapture, S.onPointerDownCapture)
        })
    });
ep.displayName = tw;
var ow = "DismissableLayerBranch",
    iw = v.forwardRef((e, t) => {
        const n = v.useContext(Zh),
            r = v.useRef(null),
            o = Xe(t, r);
        return v.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), m.jsx(fe.div, {
            ...e,
            ref: o
        })
    });
iw.displayName = ow;

function sw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Qt(e),
        r = v.useRef(!1),
        o = v.useRef(() => {});
    return v.useEffect(() => {
        const i = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        tp(nw, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function aw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Qt(e),
        r = v.useRef(!1);
    return v.useEffect(() => {
        const o = i => {
            i.target && !r.current && tp(rw, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function qc() {
    const e = new CustomEvent(Ja);
    document.dispatchEvent(e)
}

function tp(e, t, n, {
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
    }), r ? Z0(o, i) : o.dispatchEvent(i)
}
var Bs = "focusScope.autoFocusOnMount",
    Ws = "focusScope.autoFocusOnUnmount",
    Qc = {
        bubbles: !1,
        cancelable: !0
    },
    lw = "FocusScope",
    np = v.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
        } = e, [a, l] = v.useState(null), u = Qt(o), c = Qt(i), d = v.useRef(null), f = Xe(t, g => l(g)), w = v.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        v.useEffect(() => {
            if (r) {
                let g = function(y) {
                        if (w.paused || !a) return;
                        const k = y.target;
                        a.contains(k) ? d.current = k : Pt(d.current, {
                            select: !0
                        })
                    },
                    _ = function(y) {
                        if (w.paused || !a) return;
                        const k = y.relatedTarget;
                        k !== null && (a.contains(k) || Pt(d.current, {
                            select: !0
                        }))
                    },
                    p = function(y) {
                        if (document.activeElement === document.body)
                            for (const S of y) S.removedNodes.length > 0 && Pt(a)
                    };
                document.addEventListener("focusin", g), document.addEventListener("focusout", _);
                const h = new MutationObserver(p);
                return a && h.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", g), document.removeEventListener("focusout", _), h.disconnect()
                }
            }
        }, [r, a, w.paused]), v.useEffect(() => {
            if (a) {
                Yc.add(w);
                const g = document.activeElement;
                if (!a.contains(g)) {
                    const p = new CustomEvent(Bs, Qc);
                    a.addEventListener(Bs, u), a.dispatchEvent(p), p.defaultPrevented || (uw(pw(rp(a)), {
                        select: !0
                    }), document.activeElement === g && Pt(a))
                }
                return () => {
                    a.removeEventListener(Bs, u), setTimeout(() => {
                        const p = new CustomEvent(Ws, Qc);
                        a.addEventListener(Ws, c), a.dispatchEvent(p), p.defaultPrevented || Pt(g ?? document.body, {
                            select: !0
                        }), a.removeEventListener(Ws, c), Yc.remove(w)
                    }, 0)
                }
            }
        }, [a, u, c, w]);
        const x = v.useCallback(g => {
            if (!n && !r || w.paused) return;
            const _ = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
                p = document.activeElement;
            if (_ && p) {
                const h = g.currentTarget,
                    [y, k] = cw(h);
                y && k ? !g.shiftKey && p === k ? (g.preventDefault(), n && Pt(y, {
                    select: !0
                })) : g.shiftKey && p === y && (g.preventDefault(), n && Pt(k, {
                    select: !0
                })) : p === h && g.preventDefault()
            }
        }, [n, r, w.paused]);
        return m.jsx(fe.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: x
        })
    });
np.displayName = lw;

function uw(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (Pt(r, {
                select: t
            }), document.activeElement !== n) return
}

function cw(e) {
    const t = rp(e),
        n = Jc(t, e),
        r = Jc(t.reverse(), e);
    return [n, r]
}

function rp(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Jc(e, t) {
    for (const n of e)
        if (!dw(n, {
                upTo: t
            })) return n
}

function dw(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function fw(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function Pt(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && fw(e) && t && e.select()
    }
}
var Yc = hw();

function hw() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = Xc(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = Xc(e, t), (n = e[0]) == null || n.resume()
        }
    }
}

function Xc(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function pw(e) {
    return e.filter(t => t.tagName !== "A")
}
var mw = "Portal",
    op = v.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, i] = v.useState(!1);
        yn(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? yy.createPortal(m.jsx(fe.div, {
            ...r,
            ref: t
        }), s) : null
    });
op.displayName = mw;

function vw(e, t) {
    return v.useReducer((n, r) => t[n][r] ?? n, e)
}
var mo = e => {
    const {
        present: t,
        children: n
    } = e, r = gw(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : v.Children.only(n), i = Xe(r.ref, yw(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
        ref: i
    }) : null
};
mo.displayName = "Presence";

function gw(e) {
    const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), i = v.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = vw(s, {
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
    return v.useEffect(() => {
        const u = Mo(r.current);
        i.current = a === "mounted" ? u : "none"
    }, [a]), yn(() => {
        const u = r.current,
            c = o.current;
        if (c !== e) {
            const f = i.current,
                w = Mo(u);
            e ? l("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== w ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, l]), yn(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window,
                d = w => {
                    const g = Mo(r.current).includes(w.animationName);
                    if (w.target === t && g && (l("ANIMATION_END"), !o.current)) {
                        const _ = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = _)
                        })
                    }
                },
                f = w => {
                    w.target === t && (i.current = Mo(r.current))
                };
            return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: v.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function Mo(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function yw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Vs = 0;

function ww() {
    v.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Zc()), Vs++, () => {
            Vs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Vs--
        }
    }, [])
}

function Zc() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var ot = function() {
    return ot = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, ot.apply(this, arguments)
};

function ip(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function _w(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var ii = "right-scroll-bar-position",
    si = "width-before-scroll-bar",
    xw = "with-scroll-bars-hidden",
    kw = "--removed-body-scroll-bar-size";

function Hs(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Sw(e, t) {
    var n = v.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var Ew = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
    ed = new WeakMap;

function bw(e, t) {
    var n = Sw(null, function(r) {
        return e.forEach(function(o) {
            return Hs(o, r)
        })
    });
    return Ew(function() {
        var r = ed.get(n);
        if (r) {
            var o = new Set(r),
                i = new Set(e),
                s = n.current;
            o.forEach(function(a) {
                i.has(a) || Hs(a, null)
            }), i.forEach(function(a) {
                o.has(a) || Hs(a, s)
            })
        }
        ed.set(n, e)
    }, [e]), n
}

function Cw(e) {
    return e
}

function Pw(e, t) {
    t === void 0 && (t = Cw);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(i) {
                var s = t(i, r);
                return n.push(s),
                    function() {
                        n = n.filter(function(a) {
                            return a !== s
                        })
                    }
            },
            assignSyncMedium: function(i) {
                for (r = !0; n.length;) {
                    var s = n;
                    n = [], s.forEach(i)
                }
                n = {
                    push: function(a) {
                        return i(a)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(i) {
                r = !0;
                var s = [];
                if (n.length) {
                    var a = n;
                    n = [], a.forEach(i), s = n
                }
                var l = function() {
                        var c = s;
                        s = [], c.forEach(i)
                    },
                    u = function() {
                        return Promise.resolve().then(l)
                    };
                u(), n = {
                    push: function(c) {
                        s.push(c), u()
                    },
                    filter: function(c) {
                        return s = s.filter(c), n
                    }
                }
            }
        };
    return o
}

function Nw(e) {
    e === void 0 && (e = {});
    var t = Pw(null);
    return t.options = ot({
        async: !0,
        ssr: !1
    }, e), t
}
var sp = function(e) {
    var t = e.sideCar,
        n = ip(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return v.createElement(r, ot({}, n))
};
sp.isSideCarExport = !0;

function jw(e, t) {
    return e.useMedium(t), sp
}
var ap = Nw(),
    Gs = function() {},
    os = v.forwardRef(function(e, t) {
        var n = v.useRef(null),
            r = v.useState({
                onScrollCapture: Gs,
                onWheelCapture: Gs,
                onTouchMoveCapture: Gs
            }),
            o = r[0],
            i = r[1],
            s = e.forwardProps,
            a = e.children,
            l = e.className,
            u = e.removeScrollBar,
            c = e.enabled,
            d = e.shards,
            f = e.sideCar,
            w = e.noIsolation,
            x = e.inert,
            g = e.allowPinchZoom,
            _ = e.as,
            p = _ === void 0 ? "div" : _,
            h = e.gapMode,
            y = ip(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            k = f,
            S = bw([n, t]),
            E = ot(ot({}, y), o);
        return v.createElement(v.Fragment, null, c && v.createElement(k, {
            sideCar: ap,
            removeScrollBar: u,
            shards: d,
            noIsolation: w,
            inert: x,
            setCallbacks: i,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: h
        }), s ? v.cloneElement(v.Children.only(a), ot(ot({}, E), {
            ref: S
        })) : v.createElement(p, ot({}, E, {
            className: l,
            ref: S
        }), a))
    });
os.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
os.classNames = {
    fullWidth: si,
    zeroRight: ii
};
var Rw = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Tw() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Rw();
    return t && e.setAttribute("nonce", t), e
}

function Ow(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Aw(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Iw = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Tw()) && (Ow(t, n), Aw(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Lw = function() {
        var e = Iw();
        return function(t, n) {
            v.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    lp = function() {
        var e = Lw(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    $w = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Ks = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Dw = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Ks(n), Ks(r), Ks(o)]
    },
    Mw = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return $w;
        var t = Dw(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    zw = lp(),
    Xn = "data-scroll-locked",
    Uw = function(e, t, n, r) {
        var o = e.left,
            i = e.top,
            s = e.right,
            a = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(xw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Xn, `] {
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
  
  .`).concat(ii, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(si, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ii, " .").concat(ii, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(si, " .").concat(si, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Xn, `] {
    `).concat(kw, ": ").concat(a, `px;
  }
`)
    },
    td = function() {
        var e = parseInt(document.body.getAttribute(Xn) || "0", 10);
        return isFinite(e) ? e : 0
    },
    Fw = function() {
        v.useEffect(function() {
            return document.body.setAttribute(Xn, (td() + 1).toString()),
                function() {
                    var e = td() - 1;
                    e <= 0 ? document.body.removeAttribute(Xn) : document.body.setAttribute(Xn, e.toString())
                }
        }, [])
    },
    Bw = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        Fw();
        var i = v.useMemo(function() {
            return Mw(o)
        }, [o]);
        return v.createElement(zw, {
            styles: Uw(i, !t, o, n ? "" : "!important")
        })
    },
    Ya = !1;
if (typeof window < "u") try {
    var zo = Object.defineProperty({}, "passive", {
        get: function() {
            return Ya = !0, !0
        }
    });
    window.addEventListener("test", zo, zo), window.removeEventListener("test", zo, zo)
} catch {
    Ya = !1
}
var Cn = Ya ? {
        passive: !1
    } : !1,
    Ww = function(e) {
        return e.tagName === "TEXTAREA"
    },
    up = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ww(e) && n[t] === "visible")
    },
    Vw = function(e) {
        return up(e, "overflowY")
    },
    Hw = function(e) {
        return up(e, "overflowX")
    },
    nd = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = cp(e, r);
            if (o) {
                var i = dp(e, r),
                    s = i[1],
                    a = i[2];
                if (s > a) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    Gw = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    Kw = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    cp = function(e, t) {
        return e === "v" ? Vw(t) : Hw(t)
    },
    dp = function(e, t) {
        return e === "v" ? Gw(t) : Kw(t)
    },
    qw = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    Qw = function(e, t, n, r, o) {
        var i = qw(e, window.getComputedStyle(t).direction),
            s = i * r,
            a = n.target,
            l = t.contains(a),
            u = !1,
            c = s > 0,
            d = 0,
            f = 0;
        do {
            var w = dp(e, a),
                x = w[0],
                g = w[1],
                _ = w[2],
                p = g - _ - i * x;
            (x || p) && cp(e, a) && (d += p, f += x), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
        } while (!l && a !== document.body || l && (t.contains(a) || t === a));
        return (c && (Math.abs(d) < 1 || !o) || !c && (Math.abs(f) < 1 || !o)) && (u = !0), u
    },
    Uo = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    rd = function(e) {
        return [e.deltaX, e.deltaY]
    },
    od = function(e) {
        return e && "current" in e ? e.current : e
    },
    Jw = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    Yw = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    Xw = 0,
    Pn = [];

function Zw(e) {
    var t = v.useRef([]),
        n = v.useRef([0, 0]),
        r = v.useRef(),
        o = v.useState(Xw++)[0],
        i = v.useState(lp)[0],
        s = v.useRef(e);
    v.useEffect(function() {
        s.current = e
    }, [e]), v.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var g = _w([e.lockRef.current], (e.shards || []).map(od), !0).filter(Boolean);
            return g.forEach(function(_) {
                    return _.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(_) {
                        return _.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = v.useCallback(function(g, _) {
            if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey) return !s.current.allowPinchZoom;
            var p = Uo(g),
                h = n.current,
                y = "deltaX" in g ? g.deltaX : h[0] - p[0],
                k = "deltaY" in g ? g.deltaY : h[1] - p[1],
                S, E = g.target,
                C = Math.abs(y) > Math.abs(k) ? "h" : "v";
            if ("touches" in g && C === "h" && E.type === "range") return !1;
            var P = nd(C, E);
            if (!P) return !0;
            if (P ? S = C : (S = C === "v" ? "h" : "v", P = nd(C, E)), !P) return !1;
            if (!r.current && "changedTouches" in g && (y || k) && (r.current = S), !S) return !0;
            var L = r.current || S;
            return Qw(L, _, g, L === "h" ? y : k, !0)
        }, []),
        l = v.useCallback(function(g) {
            var _ = g;
            if (!(!Pn.length || Pn[Pn.length - 1] !== i)) {
                var p = "deltaY" in _ ? rd(_) : Uo(_),
                    h = t.current.filter(function(S) {
                        return S.name === _.type && (S.target === _.target || _.target === S.shadowParent) && Jw(S.delta, p)
                    })[0];
                if (h && h.should) {
                    _.cancelable && _.preventDefault();
                    return
                }
                if (!h) {
                    var y = (s.current.shards || []).map(od).filter(Boolean).filter(function(S) {
                            return S.contains(_.target)
                        }),
                        k = y.length > 0 ? a(_, y[0]) : !s.current.noIsolation;
                    k && _.cancelable && _.preventDefault()
                }
            }
        }, []),
        u = v.useCallback(function(g, _, p, h) {
            var y = {
                name: g,
                delta: _,
                target: p,
                should: h,
                shadowParent: e1(p)
            };
            t.current.push(y), setTimeout(function() {
                t.current = t.current.filter(function(k) {
                    return k !== y
                })
            }, 1)
        }, []),
        c = v.useCallback(function(g) {
            n.current = Uo(g), r.current = void 0
        }, []),
        d = v.useCallback(function(g) {
            u(g.type, rd(g), g.target, a(g, e.lockRef.current))
        }, []),
        f = v.useCallback(function(g) {
            u(g.type, Uo(g), g.target, a(g, e.lockRef.current))
        }, []);
    v.useEffect(function() {
        return Pn.push(i), e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: f
            }), document.addEventListener("wheel", l, Cn), document.addEventListener("touchmove", l, Cn), document.addEventListener("touchstart", c, Cn),
            function() {
                Pn = Pn.filter(function(g) {
                    return g !== i
                }), document.removeEventListener("wheel", l, Cn), document.removeEventListener("touchmove", l, Cn), document.removeEventListener("touchstart", c, Cn)
            }
    }, []);
    var w = e.removeScrollBar,
        x = e.inert;
    return v.createElement(v.Fragment, null, x ? v.createElement(i, {
        styles: Yw(o)
    }) : null, w ? v.createElement(Bw, {
        gapMode: e.gapMode
    }) : null)
}

function e1(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const t1 = jw(ap, Zw);
var fp = v.forwardRef(function(e, t) {
    return v.createElement(os, ot({}, e, {
        ref: t,
        sideCar: t1
    }))
});
fp.classNames = os.classNames;
var n1 = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    Nn = new WeakMap,
    Fo = new WeakMap,
    Bo = {},
    qs = 0,
    hp = function(e) {
        return e && (e.host || hp(e.parentNode))
    },
    r1 = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = hp(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    o1 = function(e, t, n, r) {
        var o = r1(t, Array.isArray(e) ? e : [e]);
        Bo[n] || (Bo[n] = new WeakMap);
        var i = Bo[n],
            s = [],
            a = new Set,
            l = new Set(o),
            u = function(d) {
                !d || a.has(d) || (a.add(d), u(d.parentNode))
            };
        o.forEach(u);
        var c = function(d) {
            !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
                if (a.has(f)) c(f);
                else try {
                    var w = f.getAttribute(r),
                        x = w !== null && w !== "false",
                        g = (Nn.get(f) || 0) + 1,
                        _ = (i.get(f) || 0) + 1;
                    Nn.set(f, g), i.set(f, _), s.push(f), g === 1 && x && Fo.set(f, !0), _ === 1 && f.setAttribute(n, "true"), x || f.setAttribute(r, "true")
                } catch (p) {
                    console.error("aria-hidden: cannot operate on ", f, p)
                }
            })
        };
        return c(t), a.clear(), qs++,
            function() {
                s.forEach(function(d) {
                    var f = Nn.get(d) - 1,
                        w = i.get(d) - 1;
                    Nn.set(d, f), i.set(d, w), f || (Fo.has(d) || d.removeAttribute(r), Fo.delete(d)), w || d.removeAttribute(n)
                }), qs--, qs || (Nn = new WeakMap, Nn = new WeakMap, Fo = new WeakMap, Bo = {})
            }
    },
    i1 = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = n1(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), o1(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    ou = "Dialog",
    [pp, Qk] = ns(ou),
    [s1, Ze] = pp(ou),
    mp = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
        } = e, a = v.useRef(null), l = v.useRef(null), [u = !1, c] = rs({
            prop: r,
            defaultProp: o,
            onChange: i
        });
        return m.jsx(s1, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: Br(),
            titleId: Br(),
            descriptionId: Br(),
            open: u,
            onOpenChange: c,
            onOpenToggle: v.useCallback(() => c(d => !d), [c]),
            modal: s,
            children: n
        })
    };
mp.displayName = ou;
var vp = "DialogTrigger",
    a1 = v.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ze(vp, n), i = Xe(t, o.triggerRef);
        return m.jsx(fe.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": au(o.open),
            ...r,
            ref: i,
            onClick: at(e.onClick, o.onOpenToggle)
        })
    });
a1.displayName = vp;
var iu = "DialogPortal",
    [l1, gp] = pp(iu, {
        forceMount: void 0
    }),
    yp = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
        } = e, i = Ze(iu, t);
        return m.jsx(l1, {
            scope: t,
            forceMount: n,
            children: v.Children.map(r, s => m.jsx(mo, {
                present: n || i.open,
                children: m.jsx(op, {
                    asChild: !0,
                    container: o,
                    children: s
                })
            }))
        })
    };
yp.displayName = iu;
var Ai = "DialogOverlay",
    wp = v.forwardRef((e, t) => {
        const n = gp(Ai, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            i = Ze(Ai, e.__scopeDialog);
        return i.modal ? m.jsx(mo, {
            present: r || i.open,
            children: m.jsx(u1, {
                ...o,
                ref: t
            })
        }) : null
    });
wp.displayName = Ai;
var u1 = v.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ze(Ai, n);
        return m.jsx(fp, {
            as: ar,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: m.jsx(fe.div, {
                "data-state": au(o.open),
                ...r,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }),
    wn = "DialogContent",
    _p = v.forwardRef((e, t) => {
        const n = gp(wn, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            i = Ze(wn, e.__scopeDialog);
        return m.jsx(mo, {
            present: r || i.open,
            children: i.modal ? m.jsx(c1, {
                ...o,
                ref: t
            }) : m.jsx(d1, {
                ...o,
                ref: t
            })
        })
    });
_p.displayName = wn;
var c1 = v.forwardRef((e, t) => {
        const n = Ze(wn, e.__scopeDialog),
            r = v.useRef(null),
            o = Xe(t, n.contentRef, r);
        return v.useEffect(() => {
            const i = r.current;
            if (i) return i1(i)
        }, []), m.jsx(xp, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: at(e.onCloseAutoFocus, i => {
                var s;
                i.preventDefault(), (s = n.triggerRef.current) == null || s.focus()
            }),
            onPointerDownOutside: at(e.onPointerDownOutside, i => {
                const s = i.detail.originalEvent,
                    a = s.button === 0 && s.ctrlKey === !0;
                (s.button === 2 || a) && i.preventDefault()
            }),
            onFocusOutside: at(e.onFocusOutside, i => i.preventDefault())
        })
    }),
    d1 = v.forwardRef((e, t) => {
        const n = Ze(wn, e.__scopeDialog),
            r = v.useRef(!1),
            o = v.useRef(!1);
        return m.jsx(xp, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: i => {
                var s, a;
                (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: i => {
                var l, u;
                (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const s = i.target;
                ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
            }
        })
    }),
    xp = v.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
        } = e, a = Ze(wn, n), l = v.useRef(null), u = Xe(t, l);
        return ww(), m.jsxs(m.Fragment, {
            children: [m.jsx(np, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
                children: m.jsx(ep, {
                    role: "dialog",
                    id: a.contentId,
                    "aria-describedby": a.descriptionId,
                    "aria-labelledby": a.titleId,
                    "data-state": au(a.open),
                    ...s,
                    ref: u,
                    onDismiss: () => a.onOpenChange(!1)
                })
            }), m.jsxs(m.Fragment, {
                children: [m.jsx(f1, {
                    titleId: a.titleId
                }), m.jsx(p1, {
                    contentRef: l,
                    descriptionId: a.descriptionId
                })]
            })]
        })
    }),
    su = "DialogTitle",
    kp = v.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ze(su, n);
        return m.jsx(fe.h2, {
            id: o.titleId,
            ...r,
            ref: t
        })
    });
kp.displayName = su;
var Sp = "DialogDescription",
    Ep = v.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ze(Sp, n);
        return m.jsx(fe.p, {
            id: o.descriptionId,
            ...r,
            ref: t
        })
    });
Ep.displayName = Sp;
var bp = "DialogClose",
    Cp = v.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ze(bp, n);
        return m.jsx(fe.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: at(e.onClick, () => o.onOpenChange(!1))
        })
    });
Cp.displayName = bp;

function au(e) {
    return e ? "open" : "closed"
}
var Pp = "DialogTitleWarning",
    [Jk, Np] = K0(Pp, {
        contentName: wn,
        titleName: su,
        docsSlug: "dialog"
    }),
    f1 = ({
        titleId: e
    }) => {
        const t = Np(Pp),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return v.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }, [n, e]), null
    },
    h1 = "DialogDescriptionWarning",
    p1 = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Np(h1).contentName}}.`;
        return v.useEffect(() => {
            var i;
            const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(r))
        }, [r, e, t]), null
    },
    m1 = mp,
    v1 = yp,
    jp = wp,
    Rp = _p,
    Tp = kp,
    Op = Ep,
    g1 = Cp;
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Ap = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = v.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
}, l) => v.createElement("svg", {
    ref: l,
    ...w1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Ap("lucide", o),
    ...a
}, [...s.map(([u, c]) => v.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = (e, t) => {
    const n = v.forwardRef(({
        className: r,
        ...o
    }, i) => v.createElement(_1, {
        ref: i,
        iconNode: t,
        className: Ap(`lucide-${y1(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = xe("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = xe("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = xe("CircleCheck", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = xe("CircleX", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "m15 9-6 6",
        key: "1uzhvr"
    }],
    ["path", {
        d: "m9 9 6 6",
        key: "z0biqf"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = xe("Gamepad2", [
    ["line", {
        x1: "6",
        x2: "10",
        y1: "11",
        y2: "11",
        key: "1gktln"
    }],
    ["line", {
        x1: "8",
        x2: "8",
        y1: "9",
        y2: "13",
        key: "qnk9ow"
    }],
    ["line", {
        x1: "15",
        x2: "15.01",
        y1: "12",
        y2: "12",
        key: "krot7o"
    }],
    ["line", {
        x1: "18",
        x2: "18.01",
        y1: "10",
        y2: "10",
        key: "1lcuu1"
    }],
    ["path", {
        d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
        key: "mfqc10"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = xe("Key", [
    ["path", {
        d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
        key: "g0fldk"
    }],
    ["path", {
        d: "m21 2-9.6 9.6",
        key: "1j0ho8"
    }],
    ["circle", {
        cx: "7.5",
        cy: "15.5",
        r: "5.5",
        key: "yqb3hr"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = xe("LoaderCircle", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = xe("MousePointer2", [
    ["path", {
        d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
        key: "edeuup"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = xe("Settings", [
    ["path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = xe("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = xe("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = xe("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = xe("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = xe("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = xe("Zap", [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ]),
    j1 = m1,
    R1 = v1,
    Up = v.forwardRef(({
        className: e,
        ...t
    }, n) => m.jsx(jp, {
        ref: n,
        className: Q("fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
        ...t
    }));
Up.displayName = jp.displayName;
const Fp = v.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => m.jsxs(R1, {
    children: [m.jsx(Up, {}), m.jsxs(Rp, {
        ref: r,
        className: Q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-3xl", e),
        ...n,
        children: [t, m.jsxs(g1, {
            className: "absolute right-4 top-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [m.jsx(Mp, {
                className: "h-4 w-4"
            }), m.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Fp.displayName = Rp.displayName;
const Bp = ({
    className: e,
    ...t
}) => m.jsx("div", {
    className: Q("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
Bp.displayName = "DialogHeader";
const Wp = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(Tp, {
    ref: n,
    className: Q("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Wp.displayName = Tp.displayName;
const T1 = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(Op, {
    ref: n,
    className: Q("text-sm text-muted-foreground", e),
    ...t
}));
T1.displayName = Op.displayName;
const Xa = v.forwardRef(({
    className: e,
    type: t,
    ...n
}, r) => m.jsx("input", {
    type: t,
    className: Q("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: r,
    ...n
}));
Xa.displayName = "Input";
const O1 = "modulepreload",
    A1 = function(e) {
        return "/" + e
    },
    id = {},
    lr = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const s = document.querySelector("meta[property=csp-nonce]"),
                a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
            o = Promise.allSettled(n.map(l => {
                if (l = A1(l), l in id) return;
                id[l] = !0;
                const u = l.endsWith(".css"),
                    c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${l}"]${c}`)) return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : O1, u || (d.as = "script"), d.crossOrigin = "", d.href = l, a && d.setAttribute("nonce", a), document.head.appendChild(d), u) return new Promise((f, w) => {
                    d.addEventListener("load", f), d.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }

        function i(s) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s
        }
        return o.then(s => {
            for (const a of s || []) a.status === "rejected" && i(a.reason);
            return t().catch(i)
        })
    },
    I1 = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = (...n) => lr(async () => {
            const {
                default: r
            } = await Promise.resolve().then(() => pr);
            return {
                default: r
            }
        }, void 0).then(({
            default: r
        }) => r(...n)) : t = fetch, (...n) => t(...n)
    };
class lu extends Error {
    constructor(t, n = "FunctionsError", r) {
        super(t), this.name = n, this.context = r
    }
}
class L1 extends lu {
    constructor(t) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", t)
    }
}
class $1 extends lu {
    constructor(t) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", t)
    }
}
class D1 extends lu {
    constructor(t) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t)
    }
}
var Za;
(function(e) {
    e.Any = "any", e.ApNortheast1 = "ap-northeast-1", e.ApNortheast2 = "ap-northeast-2", e.ApSouth1 = "ap-south-1", e.ApSoutheast1 = "ap-southeast-1", e.ApSoutheast2 = "ap-southeast-2", e.CaCentral1 = "ca-central-1", e.EuCentral1 = "eu-central-1", e.EuWest1 = "eu-west-1", e.EuWest2 = "eu-west-2", e.EuWest3 = "eu-west-3", e.SaEast1 = "sa-east-1", e.UsEast1 = "us-east-1", e.UsWest1 = "us-west-1", e.UsWest2 = "us-west-2"
})(Za || (Za = {}));
var M1 = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
class z1 {
    constructor(t, {
        headers: n = {},
        customFetch: r,
        region: o = Za.Any
    } = {}) {
        this.url = t, this.headers = n, this.region = o, this.fetch = I1(r)
    }
    setAuth(t) {
        this.headers.Authorization = `Bearer ${t}`
    }
    invoke(t, n = {}) {
        var r;
        return M1(this, void 0, void 0, function*() {
            try {
                const {
                    headers: o,
                    method: i,
                    body: s
                } = n;
                let a = {},
                    {
                        region: l
                    } = n;
                l || (l = this.region), l && l !== "any" && (a["x-region"] = l);
                let u;
                s && (o && !Object.prototype.hasOwnProperty.call(o, "Content-Type") || !o) && (typeof Blob < "u" && s instanceof Blob || s instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream", u = s) : typeof s == "string" ? (a["Content-Type"] = "text/plain", u = s) : typeof FormData < "u" && s instanceof FormData ? u = s : (a["Content-Type"] = "application/json", u = JSON.stringify(s)));
                const c = yield this.fetch(`${this.url}/${t}`, {
                    method: i || "POST",
                    headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), o),
                    body: u
                }).catch(x => {
                    throw new L1(x)
                }), d = c.headers.get("x-relay-error");
                if (d && d === "true") throw new $1(c);
                if (!c.ok) throw new D1(c);
                let f = ((r = c.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(),
                    w;
                return f === "application/json" ? w = yield c.json(): f === "application/octet-stream" ? w = yield c.blob(): f === "text/event-stream" ? w = c : f === "multipart/form-data" ? w = yield c.formData(): w = yield c.text(), {
                    data: w,
                    error: null
                }
            } catch (o) {
                return {
                    data: null,
                    error: o
                }
            }
        })
    }
}
var Ee = {},
    uu = {},
    is = {},
    vo = {},
    ss = {},
    as = {},
    U1 = function() {
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    },
    ur = U1();
const F1 = ur.fetch,
    Vp = ur.fetch.bind(ur),
    Hp = ur.Headers,
    B1 = ur.Request,
    W1 = ur.Response,
    pr = Object.freeze(Object.defineProperty({
        __proto__: null,
        Headers: Hp,
        Request: B1,
        Response: W1,
        default: Vp,
        fetch: F1
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    V1 = Gm(pr);
var ls = {};
Object.defineProperty(ls, "__esModule", {
    value: !0
});
let H1 = class extends Error {
    constructor(t) {
        super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code
    }
};
ls.default = H1;
var Gp = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(as, "__esModule", {
    value: !0
});
const G1 = Gp(V1),
    K1 = Gp(ls);
let q1 = class {
    constructor(t) {
        this.shouldThrowOnError = !1, this.method = t.method, this.url = t.url, this.headers = t.headers, this.schema = t.schema, this.body = t.body, this.shouldThrowOnError = t.shouldThrowOnError, this.signal = t.signal, this.isMaybeSingle = t.isMaybeSingle, t.fetch ? this.fetch = t.fetch : typeof fetch > "u" ? this.fetch = G1.default : this.fetch = fetch
    }
    throwOnError() {
        return this.shouldThrowOnError = !0, this
    }
    setHeader(t, n) {
        return this.headers = Object.assign({}, this.headers), this.headers[t] = n, this
    }
    then(t, n) {
        this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
        const r = this.fetch;
        let o = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async i => {
            var s, a, l;
            let u = null,
                c = null,
                d = null,
                f = i.status,
                w = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const p = await i.text();
                    p === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? c = p : c = JSON.parse(p))
                }
                const g = (s = this.headers.Prefer) === null || s === void 0 ? void 0 : s.match(/count=(exact|planned|estimated)/),
                    _ = (a = i.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
                g && _ && _.length > 1 && (d = parseInt(_[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(c) && (c.length > 1 ? (u = {
                    code: "PGRST116",
                    details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message: "JSON object requested, multiple (or no) rows returned"
                }, c = null, d = null, f = 406, w = "Not Acceptable") : c.length === 1 ? c = c[0] : c = null)
            } else {
                const g = await i.text();
                try {
                    u = JSON.parse(g), Array.isArray(u) && i.status === 404 && (c = [], u = null, f = 200, w = "OK")
                } catch {
                    i.status === 404 && g === "" ? (f = 204, w = "No Content") : u = {
                        message: g
                    }
                }
                if (u && this.isMaybeSingle && (!((l = u == null ? void 0 : u.details) === null || l === void 0) && l.includes("0 rows")) && (u = null, f = 200, w = "OK"), u && this.shouldThrowOnError) throw new K1.default(u)
            }
            return {
                error: u,
                data: c,
                count: d,
                status: f,
                statusText: w
            }
        });
        return this.shouldThrowOnError || (o = o.catch(i => {
            var s, a, l;
            return {
                error: {
                    message: `${(s=i==null?void 0:i.name)!==null&&s!==void 0?s:"FetchError"}: ${i==null?void 0:i.message}`,
                    details: `${(a=i==null?void 0:i.stack)!==null&&a!==void 0?a:""}`,
                    hint: "",
                    code: `${(l=i==null?void 0:i.code)!==null&&l!==void 0?l:""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            }
        })), o.then(t, n)
    }
};
as.default = q1;
var Q1 = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(ss, "__esModule", {
    value: !0
});
const J1 = Q1(as);
let Y1 = class extends J1.default {
    select(t) {
        let n = !1;
        const r = (t ?? "*").split("").map(o => /\s/.test(o) && !n ? "" : (o === '"' && (n = !n), o)).join("");
        return this.url.searchParams.set("select", r), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this
    }
    order(t, {
        ascending: n = !0,
        nullsFirst: r,
        foreignTable: o,
        referencedTable: i = o
    } = {}) {
        const s = i ? `${i}.order` : "order",
            a = this.url.searchParams.get(s);
        return this.url.searchParams.set(s, `${a?`${a},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`), this
    }
    limit(t, {
        foreignTable: n,
        referencedTable: r = n
    } = {}) {
        const o = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(o, `${t}`), this
    }
    range(t, n, {
        foreignTable: r,
        referencedTable: o = r
    } = {}) {
        const i = typeof o > "u" ? "offset" : `${o}.offset`,
            s = typeof o > "u" ? "limit" : `${o}.limit`;
        return this.url.searchParams.set(i, `${t}`), this.url.searchParams.set(s, `${n-t+1}`), this
    }
    abortSignal(t) {
        return this.signal = t, this
    }
    single() {
        return this.headers.Accept = "application/vnd.pgrst.object+json", this
    }
    maybeSingle() {
        return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this
    }
    csv() {
        return this.headers.Accept = "text/csv", this
    }
    geojson() {
        return this.headers.Accept = "application/geo+json", this
    }
    explain({
        analyze: t = !1,
        verbose: n = !1,
        settings: r = !1,
        buffers: o = !1,
        wal: i = !1,
        format: s = "text"
    } = {}) {
        var a;
        const l = [t ? "analyze" : null, n ? "verbose" : null, r ? "settings" : null, o ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|"),
            u = (a = this.headers.Accept) !== null && a !== void 0 ? a : "application/json";
        return this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${u}"; options=${l};`, s === "json" ? this : this
    }
    rollback() {
        var t;
        return ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this
    }
    returns() {
        return this
    }
};
ss.default = Y1;
var X1 = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(vo, "__esModule", {
    value: !0
});
const Z1 = X1(ss);
let e_ = class extends Z1.default {
    eq(t, n) {
        return this.url.searchParams.append(t, `eq.${n}`), this
    }
    neq(t, n) {
        return this.url.searchParams.append(t, `neq.${n}`), this
    }
    gt(t, n) {
        return this.url.searchParams.append(t, `gt.${n}`), this
    }
    gte(t, n) {
        return this.url.searchParams.append(t, `gte.${n}`), this
    }
    lt(t, n) {
        return this.url.searchParams.append(t, `lt.${n}`), this
    }
    lte(t, n) {
        return this.url.searchParams.append(t, `lte.${n}`), this
    }
    like(t, n) {
        return this.url.searchParams.append(t, `like.${n}`), this
    }
    likeAllOf(t, n) {
        return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`), this
    }
    likeAnyOf(t, n) {
        return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`), this
    }
    ilike(t, n) {
        return this.url.searchParams.append(t, `ilike.${n}`), this
    }
    ilikeAllOf(t, n) {
        return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`), this
    }
    ilikeAnyOf(t, n) {
        return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`), this
    }
    is(t, n) {
        return this.url.searchParams.append(t, `is.${n}`), this
    }
    in(t, n) {
        const r = Array.from(new Set(n)).map(o => typeof o == "string" && new RegExp("[,()]").test(o) ? `"${o}"` : `${o}`).join(",");
        return this.url.searchParams.append(t, `in.(${r})`), this
    }
    contains(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`), this
    }
    containedBy(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`), this
    }
    rangeGt(t, n) {
        return this.url.searchParams.append(t, `sr.${n}`), this
    }
    rangeGte(t, n) {
        return this.url.searchParams.append(t, `nxl.${n}`), this
    }
    rangeLt(t, n) {
        return this.url.searchParams.append(t, `sl.${n}`), this
    }
    rangeLte(t, n) {
        return this.url.searchParams.append(t, `nxr.${n}`), this
    }
    rangeAdjacent(t, n) {
        return this.url.searchParams.append(t, `adj.${n}`), this
    }
    overlaps(t, n) {
        return typeof n == "string" ? this.url.searchParams.append(t, `ov.${n}`) : this.url.searchParams.append(t, `ov.{${n.join(",")}}`), this
    }
    textSearch(t, n, {
        config: r,
        type: o
    } = {}) {
        let i = "";
        o === "plain" ? i = "pl" : o === "phrase" ? i = "ph" : o === "websearch" && (i = "w");
        const s = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(t, `${i}fts${s}.${n}`), this
    }
    match(t) {
        return Object.entries(t).forEach(([n, r]) => {
            this.url.searchParams.append(n, `eq.${r}`)
        }), this
    }
    not(t, n, r) {
        return this.url.searchParams.append(t, `not.${n}.${r}`), this
    }
    or(t, {
        foreignTable: n,
        referencedTable: r = n
    } = {}) {
        const o = r ? `${r}.or` : "or";
        return this.url.searchParams.append(o, `(${t})`), this
    }
    filter(t, n, r) {
        return this.url.searchParams.append(t, `${n}.${r}`), this
    }
};
vo.default = e_;
var t_ = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(is, "__esModule", {
    value: !0
});
const Cr = t_(vo);
let n_ = class {
    constructor(t, {
        headers: n = {},
        schema: r,
        fetch: o
    }) {
        this.url = t, this.headers = n, this.schema = r, this.fetch = o
    }
    select(t, {
        head: n = !1,
        count: r
    } = {}) {
        const o = n ? "HEAD" : "GET";
        let i = !1;
        const s = (t ?? "*").split("").map(a => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)).join("");
        return this.url.searchParams.set("select", s), r && (this.headers.Prefer = `count=${r}`), new Cr.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    insert(t, {
        count: n,
        defaultToNull: r = !0
    } = {}) {
        const o = "POST",
            i = [];
        if (this.headers.Prefer && i.push(this.headers.Prefer), n && i.push(`count=${n}`), r || i.push("missing=default"), this.headers.Prefer = i.join(","), Array.isArray(t)) {
            const s = t.reduce((a, l) => a.concat(Object.keys(l)), []);
            if (s.length > 0) {
                const a = [...new Set(s)].map(l => `"${l}"`);
                this.url.searchParams.set("columns", a.join(","))
            }
        }
        return new Cr.default({
            method: o,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    upsert(t, {
        onConflict: n,
        ignoreDuplicates: r = !1,
        count: o,
        defaultToNull: i = !0
    } = {}) {
        const s = "POST",
            a = [`resolution=${r?"ignore":"merge"}-duplicates`];
        if (n !== void 0 && this.url.searchParams.set("on_conflict", n), this.headers.Prefer && a.push(this.headers.Prefer), o && a.push(`count=${o}`), i || a.push("missing=default"), this.headers.Prefer = a.join(","), Array.isArray(t)) {
            const l = t.reduce((u, c) => u.concat(Object.keys(c)), []);
            if (l.length > 0) {
                const u = [...new Set(l)].map(c => `"${c}"`);
                this.url.searchParams.set("columns", u.join(","))
            }
        }
        return new Cr.default({
            method: s,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    update(t, {
        count: n
    } = {}) {
        const r = "PATCH",
            o = [];
        return this.headers.Prefer && o.push(this.headers.Prefer), n && o.push(`count=${n}`), this.headers.Prefer = o.join(","), new Cr.default({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
    delete({
        count: t
    } = {}) {
        const n = "DELETE",
            r = [];
        return t && r.push(`count=${t}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers.Prefer = r.join(","), new Cr.default({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
};
is.default = n_;
var us = {},
    cs = {};
Object.defineProperty(cs, "__esModule", {
    value: !0
});
cs.version = void 0;
cs.version = "0.0.0-automated";
Object.defineProperty(us, "__esModule", {
    value: !0
});
us.DEFAULT_HEADERS = void 0;
const r_ = cs;
us.DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${r_.version}`
};
var Kp = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(uu, "__esModule", {
    value: !0
});
const o_ = Kp(is),
    i_ = Kp(vo),
    s_ = us;
let a_ = class qp {
    constructor(t, {
        headers: n = {},
        schema: r,
        fetch: o
    } = {}) {
        this.url = t, this.headers = Object.assign(Object.assign({}, s_.DEFAULT_HEADERS), n), this.schemaName = r, this.fetch = o
    }
    from(t) {
        const n = new URL(`${this.url}/${t}`);
        return new o_.default(n, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        })
    }
    schema(t) {
        return new qp(this.url, {
            headers: this.headers,
            schema: t,
            fetch: this.fetch
        })
    }
    rpc(t, n = {}, {
        head: r = !1,
        get: o = !1,
        count: i
    } = {}) {
        let s;
        const a = new URL(`${this.url}/rpc/${t}`);
        let l;
        r || o ? (s = r ? "HEAD" : "GET", Object.entries(n).filter(([c, d]) => d !== void 0).map(([c, d]) => [c, Array.isArray(d) ? `{${d.join(",")}}` : `${d}`]).forEach(([c, d]) => {
            a.searchParams.append(c, d)
        })) : (s = "POST", l = n);
        const u = Object.assign({}, this.headers);
        return i && (u.Prefer = `count=${i}`), new i_.default({
            method: s,
            url: a,
            headers: u,
            schema: this.schemaName,
            body: l,
            fetch: this.fetch,
            allowEmpty: !1
        })
    }
};
uu.default = a_;
var mr = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Ee, "__esModule", {
    value: !0
});
Ee.PostgrestError = Ee.PostgrestBuilder = Ee.PostgrestTransformBuilder = Ee.PostgrestFilterBuilder = Ee.PostgrestQueryBuilder = Ee.PostgrestClient = void 0;
const Qp = mr(uu);
Ee.PostgrestClient = Qp.default;
const Jp = mr(is);
Ee.PostgrestQueryBuilder = Jp.default;
const Yp = mr(vo);
Ee.PostgrestFilterBuilder = Yp.default;
const Xp = mr(ss);
Ee.PostgrestTransformBuilder = Xp.default;
const Zp = mr(as);
Ee.PostgrestBuilder = Zp.default;
const em = mr(ls);
Ee.PostgrestError = em.default;
var l_ = Ee.default = {
    PostgrestClient: Qp.default,
    PostgrestQueryBuilder: Jp.default,
    PostgrestFilterBuilder: Yp.default,
    PostgrestTransformBuilder: Xp.default,
    PostgrestBuilder: Zp.default,
    PostgrestError: em.default
};
const {
    PostgrestClient: u_,
    PostgrestQueryBuilder: nS,
    PostgrestFilterBuilder: rS,
    PostgrestTransformBuilder: oS,
    PostgrestBuilder: iS,
    PostgrestError: sS
} = l_, c_ = "2.11.2", d_ = {
    "X-Client-Info": `realtime-js/${c_}`
}, f_ = "1.0.0", tm = 1e4, h_ = 1e3;
var Zn;
(function(e) {
    e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] = "closed"
})(Zn || (Zn = {}));
var Re;
(function(e) {
    e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving = "leaving"
})(Re || (Re = {}));
var Ke;
(function(e) {
    e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave = "phx_leave", e.access_token = "access_token"
})(Ke || (Ke = {}));
var el;
(function(e) {
    e.websocket = "websocket"
})(el || (el = {}));
var an;
(function(e) {
    e.Connecting = "connecting", e.Open = "open", e.Closing = "closing", e.Closed = "closed"
})(an || (an = {}));
class p_ {
    constructor() {
        this.HEADER_LENGTH = 1
    }
    decode(t, n) {
        return t.constructor === ArrayBuffer ? n(this._binaryDecode(t)) : n(typeof t == "string" ? JSON.parse(t) : {})
    }
    _binaryDecode(t) {
        const n = new DataView(t),
            r = new TextDecoder;
        return this._decodeBroadcast(t, n, r)
    }
    _decodeBroadcast(t, n, r) {
        const o = n.getUint8(1),
            i = n.getUint8(2);
        let s = this.HEADER_LENGTH + 2;
        const a = r.decode(t.slice(s, s + o));
        s = s + o;
        const l = r.decode(t.slice(s, s + i));
        s = s + i;
        const u = JSON.parse(r.decode(t.slice(s, t.byteLength)));
        return {
            ref: null,
            topic: a,
            event: l,
            payload: u
        }
    }
}
class nm {
    constructor(t, n) {
        this.callback = t, this.timerCalc = n, this.timer = void 0, this.tries = 0, this.callback = t, this.timerCalc = n
    }
    reset() {
        this.tries = 0, clearTimeout(this.timer)
    }
    scheduleTimeout() {
        clearTimeout(this.timer), this.timer = setTimeout(() => {
            this.tries = this.tries + 1, this.callback()
        }, this.timerCalc(this.tries + 1))
    }
}
var B;
(function(e) {
    e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 = "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range = "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid = "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz = "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange"
})(B || (B = {}));
const sd = (e, t, n = {}) => {
        var r;
        const o = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
        return Object.keys(t).reduce((i, s) => (i[s] = m_(s, e, t, o), i), {})
    },
    m_ = (e, t, n, r) => {
        const o = t.find(a => a.name === e),
            i = o == null ? void 0 : o.type,
            s = n[e];
        return i && !r.includes(i) ? rm(i, s) : tl(s)
    },
    rm = (e, t) => {
        if (e.charAt(0) === "_") {
            const n = e.slice(1, e.length);
            return w_(t, n)
        }
        switch (e) {
            case B.bool:
                return v_(t);
            case B.float4:
            case B.float8:
            case B.int2:
            case B.int4:
            case B.int8:
            case B.numeric:
            case B.oid:
                return g_(t);
            case B.json:
            case B.jsonb:
                return y_(t);
            case B.timestamp:
                return __(t);
            case B.abstime:
            case B.date:
            case B.daterange:
            case B.int4range:
            case B.int8range:
            case B.money:
            case B.reltime:
            case B.text:
            case B.time:
            case B.timestamptz:
            case B.timetz:
            case B.tsrange:
            case B.tstzrange:
                return tl(t);
            default:
                return tl(t)
        }
    },
    tl = e => e,
    v_ = e => {
        switch (e) {
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return e
        }
    },
    g_ = e => {
        if (typeof e == "string") {
            const t = parseFloat(e);
            if (!Number.isNaN(t)) return t
        }
        return e
    },
    y_ = e => {
        if (typeof e == "string") try {
            return JSON.parse(e)
        } catch (t) {
            return console.log(`JSON parse error: ${t}`), e
        }
        return e
    },
    w_ = (e, t) => {
        if (typeof e != "string") return e;
        const n = e.length - 1,
            r = e[n];
        if (e[0] === "{" && r === "}") {
            let i;
            const s = e.slice(1, n);
            try {
                i = JSON.parse("[" + s + "]")
            } catch {
                i = s ? s.split(",") : []
            }
            return i.map(a => rm(t, a))
        }
        return e
    },
    __ = e => typeof e == "string" ? e.replace(" ", "T") : e,
    om = e => {
        let t = e;
        return t = t.replace(/^ws/i, "http"), t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), t.replace(/\/+$/, "")
    };
class Qs {
    constructor(t, n, r = {}, o = tm) {
        this.channel = t, this.event = n, this.payload = r, this.timeout = o, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
    }
    resend(t) {
        this.timeout = t, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
    }
    send() {
        this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        }))
    }
    updatePayload(t) {
        this.payload = Object.assign(Object.assign({}, this.payload), t)
    }
    receive(t, n) {
        var r;
        return this._hasReceived(t) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({
            status: t,
            callback: n
        }), this
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
        const t = n => {
            this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = n, this._matchReceive(n)
        };
        this.channel._on(this.refEvent, {}, t), this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {})
        }, this.timeout)
    }
    trigger(t, n) {
        this.refEvent && this.channel._trigger(this.refEvent, {
            status: t,
            response: n
        })
    }
    destroy() {
        this._cancelRefEvent(), this._cancelTimeout()
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {})
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
    }
    _matchReceive({
        status: t,
        response: n
    }) {
        this.recHooks.filter(r => r.status === t).forEach(r => r.callback(n))
    }
    _hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t
    }
}
var ad;
(function(e) {
    e.SYNC = "sync", e.JOIN = "join", e.LEAVE = "leave"
})(ad || (ad = {}));
class Wr {
    constructor(t, n) {
        this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
            onJoin: () => {},
            onLeave: () => {},
            onSync: () => {}
        };
        const r = (n == null ? void 0 : n.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(r.state, {}, o => {
            const {
                onJoin: i,
                onLeave: s,
                onSync: a
            } = this.caller;
            this.joinRef = this.channel._joinRef(), this.state = Wr.syncState(this.state, o, i, s), this.pendingDiffs.forEach(l => {
                this.state = Wr.syncDiff(this.state, l, i, s)
            }), this.pendingDiffs = [], a()
        }), this.channel._on(r.diff, {}, o => {
            const {
                onJoin: i,
                onLeave: s,
                onSync: a
            } = this.caller;
            this.inPendingSyncState() ? this.pendingDiffs.push(o) : (this.state = Wr.syncDiff(this.state, o, i, s), a())
        }), this.onJoin((o, i, s) => {
            this.channel._trigger("presence", {
                event: "join",
                key: o,
                currentPresences: i,
                newPresences: s
            })
        }), this.onLeave((o, i, s) => {
            this.channel._trigger("presence", {
                event: "leave",
                key: o,
                currentPresences: i,
                leftPresences: s
            })
        }), this.onSync(() => {
            this.channel._trigger("presence", {
                event: "sync"
            })
        })
    }
    static syncState(t, n, r, o) {
        const i = this.cloneDeep(t),
            s = this.transformState(n),
            a = {},
            l = {};
        return this.map(i, (u, c) => {
            s[u] || (l[u] = c)
        }), this.map(s, (u, c) => {
            const d = i[u];
            if (d) {
                const f = c.map(_ => _.presence_ref),
                    w = d.map(_ => _.presence_ref),
                    x = c.filter(_ => w.indexOf(_.presence_ref) < 0),
                    g = d.filter(_ => f.indexOf(_.presence_ref) < 0);
                x.length > 0 && (a[u] = x), g.length > 0 && (l[u] = g)
            } else a[u] = c
        }), this.syncDiff(i, {
            joins: a,
            leaves: l
        }, r, o)
    }
    static syncDiff(t, n, r, o) {
        const {
            joins: i,
            leaves: s
        } = {
            joins: this.transformState(n.joins),
            leaves: this.transformState(n.leaves)
        };
        return r || (r = () => {}), o || (o = () => {}), this.map(i, (a, l) => {
            var u;
            const c = (u = t[a]) !== null && u !== void 0 ? u : [];
            if (t[a] = this.cloneDeep(l), c.length > 0) {
                const d = t[a].map(w => w.presence_ref),
                    f = c.filter(w => d.indexOf(w.presence_ref) < 0);
                t[a].unshift(...f)
            }
            r(a, c, l)
        }), this.map(s, (a, l) => {
            let u = t[a];
            if (!u) return;
            const c = l.map(d => d.presence_ref);
            u = u.filter(d => c.indexOf(d.presence_ref) < 0), t[a] = u, o(a, u, l), u.length === 0 && delete t[a]
        }), t
    }
    static map(t, n) {
        return Object.getOwnPropertyNames(t).map(r => n(r, t[r]))
    }
    static transformState(t) {
        return t = this.cloneDeep(t), Object.getOwnPropertyNames(t).reduce((n, r) => {
            const o = t[r];
            return "metas" in o ? n[r] = o.metas.map(i => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : n[r] = o, n
        }, {})
    }
    static cloneDeep(t) {
        return JSON.parse(JSON.stringify(t))
    }
    onJoin(t) {
        this.caller.onJoin = t
    }
    onLeave(t) {
        this.caller.onLeave = t
    }
    onSync(t) {
        this.caller.onSync = t
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef()
    }
}
var ld;
(function(e) {
    e.ALL = "*", e.INSERT = "INSERT", e.UPDATE = "UPDATE", e.DELETE = "DELETE"
})(ld || (ld = {}));
var ud;
(function(e) {
    e.BROADCAST = "broadcast", e.PRESENCE = "presence", e.POSTGRES_CHANGES = "postgres_changes", e.SYSTEM = "system"
})(ud || (ud = {}));
var ct;
(function(e) {
    e.SUBSCRIBED = "SUBSCRIBED", e.TIMED_OUT = "TIMED_OUT", e.CLOSED = "CLOSED", e.CHANNEL_ERROR = "CHANNEL_ERROR"
})(ct || (ct = {}));
class cu {
    constructor(t, n = {
        config: {}
    }, r) {
        this.topic = t, this.params = n, this.socket = r, this.bindings = {}, this.state = Re.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
            broadcast: {
                ack: !1,
                self: !1
            },
            presence: {
                key: ""
            },
            private: !1
        }, n.config), this.timeout = this.socket.timeout, this.joinPush = new Qs(this, Ke.join, this.params, this.timeout), this.rejoinTimer = new nm(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
            this.state = Re.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(o => o.send()), this.pushBuffer = []
        }), this._onClose(() => {
            this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = Re.closed, this.socket._remove(this)
        }), this._onError(o => {
            this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = Re.errored, this.rejoinTimer.scheduleTimeout())
        }), this.joinPush.receive("timeout", () => {
            this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = Re.errored, this.rejoinTimer.scheduleTimeout())
        }), this._on(Ke.reply, {}, (o, i) => {
            this._trigger(this._replyEventName(i), o)
        }), this.presence = new Wr(this), this.broadcastEndpointURL = om(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1
    }
    subscribe(t, n = this.timeout) {
        var r, o;
        if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
        {
            const {
                config: {
                    broadcast: i,
                    presence: s,
                    private: a
                }
            } = this.params;
            this._onError(c => t == null ? void 0 : t(ct.CHANNEL_ERROR, c)), this._onClose(() => t == null ? void 0 : t(ct.CLOSED));
            const l = {},
                u = {
                    broadcast: i,
                    presence: s,
                    postgres_changes: (o = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map(c => c.filter)) !== null && o !== void 0 ? o : [],
                    private: a
                };
            this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({
                config: u
            }, l)), this.joinedOnce = !0, this._rejoin(n), this.joinPush.receive("ok", async ({
                postgres_changes: c
            }) => {
                var d;
                if (this.socket.setAuth(), c === void 0) {
                    t == null || t(ct.SUBSCRIBED);
                    return
                } else {
                    const f = this.bindings.postgres_changes,
                        w = (d = f == null ? void 0 : f.length) !== null && d !== void 0 ? d : 0,
                        x = [];
                    for (let g = 0; g < w; g++) {
                        const _ = f[g],
                            {
                                filter: {
                                    event: p,
                                    schema: h,
                                    table: y,
                                    filter: k
                                }
                            } = _,
                            S = c && c[g];
                        if (S && S.event === p && S.schema === h && S.table === y && S.filter === k) x.push(Object.assign(Object.assign({}, _), {
                            id: S.id
                        }));
                        else {
                            this.unsubscribe(), t == null || t(ct.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
                            return
                        }
                    }
                    this.bindings.postgres_changes = x, t && t(ct.SUBSCRIBED);
                    return
                }
            }).receive("error", c => {
                t == null || t(ct.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(c).join(", ") || "error")))
            }).receive("timeout", () => {
                t == null || t(ct.TIMED_OUT)
            })
        }
        return this
    }
    presenceState() {
        return this.presence.state
    }
    async track(t, n = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload: t
        }, n.timeout || this.timeout)
    }
    async untrack(t = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, t)
    }
    on(t, n, r) {
        return this._on(t, n, r)
    }
    async send(t, n = {}) {
        var r, o;
        if (!this._canPush() && t.type === "broadcast") {
            const {
                event: i,
                payload: s
            } = t, l = {
                method: "POST",
                headers: {
                    Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                    apikey: this.socket.apiKey ? this.socket.apiKey : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [{
                        topic: this.subTopic,
                        event: i,
                        payload: s,
                        private: this.private
                    }]
                })
            };
            try {
                const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
                return await ((o = u.body) === null || o === void 0 ? void 0 : o.cancel()), u.ok ? "ok" : "error"
            } catch (u) {
                return u.name === "AbortError" ? "timed out" : "error"
            }
        } else return new Promise(i => {
            var s, a, l;
            const u = this._push(t.type, t, n.timeout || this.timeout);
            t.type === "broadcast" && !(!((l = (a = (s = this.params) === null || s === void 0 ? void 0 : s.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"))
        })
    }
    updateJoinPayload(t) {
        this.joinPush.updatePayload(t)
    }
    unsubscribe(t = this.timeout) {
        this.state = Re.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`), this._trigger(Ke.close, "leave", this._joinRef())
        };
        return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise(r => {
            const o = new Qs(this, Ke.leave, {}, t);
            o.receive("ok", () => {
                n(), r("ok")
            }).receive("timeout", () => {
                n(), r("timed out")
            }).receive("error", () => {
                r("error")
            }), o.send(), this._canPush() || o.trigger("ok", {})
        })
    }
    async _fetchWithTimeout(t, n, r) {
        const o = new AbortController,
            i = setTimeout(() => o.abort(), r),
            s = await this.socket.fetch(t, Object.assign(Object.assign({}, n), {
                signal: o.signal
            }));
        return clearTimeout(i), s
    }
    _push(t, n, r = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let o = new Qs(this, t, n, r);
        return this._canPush() ? o.send() : (o.startTimeout(), this.pushBuffer.push(o)), o
    }
    _onMessage(t, n, r) {
        return n
    }
    _isMember(t) {
        return this.topic === t
    }
    _joinRef() {
        return this.joinPush.ref
    }
    _trigger(t, n, r) {
        var o, i;
        const s = t.toLocaleLowerCase(),
            {
                close: a,
                error: l,
                leave: u,
                join: c
            } = Ke;
        if (r && [a, l, u, c].indexOf(s) >= 0 && r !== this._joinRef()) return;
        let f = this._onMessage(s, n, r);
        if (n && !f) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(s) ? (o = this.bindings.postgres_changes) === null || o === void 0 || o.filter(w => {
            var x, g, _;
            return ((x = w.filter) === null || x === void 0 ? void 0 : x.event) === "*" || ((_ = (g = w.filter) === null || g === void 0 ? void 0 : g.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase()) === s
        }).map(w => w.callback(f, r)) : (i = this.bindings[s]) === null || i === void 0 || i.filter(w => {
            var x, g, _, p, h, y;
            if (["broadcast", "presence", "postgres_changes"].includes(s))
                if ("id" in w) {
                    const k = w.id,
                        S = (x = w.filter) === null || x === void 0 ? void 0 : x.event;
                    return k && ((g = n.ids) === null || g === void 0 ? void 0 : g.includes(k)) && (S === "*" || (S == null ? void 0 : S.toLocaleLowerCase()) === ((_ = n.data) === null || _ === void 0 ? void 0 : _.type.toLocaleLowerCase()))
                } else {
                    const k = (h = (p = w == null ? void 0 : w.filter) === null || p === void 0 ? void 0 : p.event) === null || h === void 0 ? void 0 : h.toLocaleLowerCase();
                    return k === "*" || k === ((y = n == null ? void 0 : n.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase())
                }
            else return w.type.toLocaleLowerCase() === s
        }).map(w => {
            if (typeof f == "object" && "ids" in f) {
                const x = f.data,
                    {
                        schema: g,
                        table: _,
                        commit_timestamp: p,
                        type: h,
                        errors: y
                    } = x;
                f = Object.assign(Object.assign({}, {
                    schema: g,
                    table: _,
                    commit_timestamp: p,
                    eventType: h,
                    new: {},
                    old: {},
                    errors: y
                }), this._getPayloadRecords(x))
            }
            w.callback(f, r)
        })
    }
    _isClosed() {
        return this.state === Re.closed
    }
    _isJoined() {
        return this.state === Re.joined
    }
    _isJoining() {
        return this.state === Re.joining
    }
    _isLeaving() {
        return this.state === Re.leaving
    }
    _replyEventName(t) {
        return `chan_reply_${t}`
    }
    _on(t, n, r) {
        const o = t.toLocaleLowerCase(),
            i = {
                type: o,
                filter: n,
                callback: r
            };
        return this.bindings[o] ? this.bindings[o].push(i) : this.bindings[o] = [i], this
    }
    _off(t, n) {
        const r = t.toLocaleLowerCase();
        return this.bindings[r] = this.bindings[r].filter(o => {
            var i;
            return !(((i = o.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && cu.isEqual(o.filter, n))
        }), this
    }
    static isEqual(t, n) {
        if (Object.keys(t).length !== Object.keys(n).length) return !1;
        for (const r in t)
            if (t[r] !== n[r]) return !1;
        return !0
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
    }
    _onClose(t) {
        this._on(Ke.close, {}, t)
    }
    _onError(t) {
        this._on(Ke.error, {}, n => t(n))
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined()
    }
    _rejoin(t = this.timeout) {
        this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = Re.joining, this.joinPush.resend(t))
    }
    _getPayloadRecords(t) {
        const n = {
            new: {},
            old: {}
        };
        return (t.type === "INSERT" || t.type === "UPDATE") && (n.new = sd(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (n.old = sd(t.columns, t.old_record)), n
    }
}
const x_ = () => {},
    k_ = typeof WebSocket < "u",
    S_ = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class E_ {
    constructor(t, n) {
        var r;
        this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = d_, this.params = {}, this.timeout = tm, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = x_, this.conn = null, this.sendBuffer = [], this.serializer = new p_, this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        }, this.accessToken = null, this._resolveFetch = i => {
            let s;
            return i ? s = i : typeof fetch > "u" ? s = (...a) => lr(async () => {
                const {
                    default: l
                } = await Promise.resolve().then(() => pr);
                return {
                    default: l
                }
            }, void 0).then(({
                default: l
            }) => l(...a)) : s = fetch, (...a) => s(...a)
        }, this.endPoint = `${t}/${el.websocket}`, this.httpEndpoint = om(t), n != null && n.transport ? this.transport = n.transport : this.transport = null, n != null && n.params && (this.params = n.params), n != null && n.headers && (this.headers = Object.assign(Object.assign({}, this.headers), n.headers)), n != null && n.timeout && (this.timeout = n.timeout), n != null && n.logger && (this.logger = n.logger), n != null && n.heartbeatIntervalMs && (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
        const o = (r = n == null ? void 0 : n.params) === null || r === void 0 ? void 0 : r.apikey;
        if (o && (this.accessTokenValue = o, this.apiKey = o), this.reconnectAfterMs = n != null && n.reconnectAfterMs ? n.reconnectAfterMs : i => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4, this.encode = n != null && n.encode ? n.encode : (i, s) => s(JSON.stringify(i)), this.decode = n != null && n.decode ? n.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new nm(async () => {
                this.disconnect(), this.connect()
            }, this.reconnectAfterMs), this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch), n != null && n.worker) {
            if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
            this.worker = (n == null ? void 0 : n.worker) || !1, this.workerUrl = n == null ? void 0 : n.workerUrl
        }
        this.accessToken = (n == null ? void 0 : n.accessToken) || null
    }
    connect() {
        if (!this.conn) {
            if (this.transport) {
                this.conn = new this.transport(this.endpointURL(), void 0, {
                    headers: this.headers
                });
                return
            }
            if (k_) {
                this.conn = new WebSocket(this.endpointURL()), this.setupConnection();
                return
            }
            this.conn = new b_(this.endpointURL(), void 0, {
                close: () => {
                    this.conn = null
                }
            }), lr(async () => {
                const {
                    default: t
                } = await import("./browser-DW8f6fvD.js").then(n => n.b);
                return {
                    default: t
                }
            }, []).then(({
                default: t
            }) => {
                this.conn = new t(this.endpointURL(), void 0, {
                    headers: this.headers
                }), this.setupConnection()
            })
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: f_
        }))
    }
    disconnect(t, n) {
        this.conn && (this.conn.onclose = function() {}, t ? this.conn.close(t, n ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
    }
    getChannels() {
        return this.channels
    }
    async removeChannel(t) {
        const n = await t.unsubscribe();
        return this.channels.length === 0 && this.disconnect(), n
    }
    async removeAllChannels() {
        const t = await Promise.all(this.channels.map(n => n.unsubscribe()));
        return this.disconnect(), t
    }
    log(t, n, r) {
        this.logger(t, n, r)
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case Zn.connecting:
                return an.Connecting;
            case Zn.open:
                return an.Open;
            case Zn.closing:
                return an.Closing;
            default:
                return an.Closed
        }
    }
    isConnected() {
        return this.connectionState() === an.Open
    }
    channel(t, n = {
        config: {}
    }) {
        const r = new cu(`realtime:${t}`, n, this);
        return this.channels.push(r), r
    }
    push(t) {
        const {
            topic: n,
            event: r,
            payload: o,
            ref: i
        } = t, s = () => {
            this.encode(t, a => {
                var l;
                (l = this.conn) === null || l === void 0 || l.send(a)
            })
        };
        this.log("push", `${n} ${r} (${i})`, o), this.isConnected() ? s() : this.sendBuffer.push(s)
    }
    async setAuth(t = null) {
        let n = t || this.accessToken && await this.accessToken() || this.accessTokenValue;
        if (n) {
            let r = null;
            try {
                r = JSON.parse(atob(n.split(".")[1]))
            } catch {}
            if (r && r.exp && !(Math.floor(Date.now() / 1e3) - r.exp < 0)) return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`), Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);
            this.accessTokenValue = n, this.channels.forEach(o => {
                n && o.updateJoinPayload({
                    access_token: n
                }), o.joinedOnce && o._isJoined() && o._push(Ke.access_token, {
                    access_token: n
                })
            })
        }
    }
    async sendHeartbeat() {
        var t;
        if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (t = this.conn) === null || t === void 0 || t.close(h_, "hearbeat timeout");
                return
            }
            this.pendingHeartbeatRef = this._makeRef(), this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef
            }), this.setAuth()
        }
    }
    flushSendBuffer() {
        this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(t => t()), this.sendBuffer = [])
    }
    _makeRef() {
        let t = this.ref + 1;
        return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString()
    }
    _leaveOpenTopic(t) {
        let n = this.channels.find(r => r.topic === t && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${t}"`), n.unsubscribe())
    }
    _remove(t) {
        this.channels = this.channels.filter(n => n._joinRef() !== t._joinRef())
    }
    setupConnection() {
        this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = t => this._onConnError(t), this.conn.onmessage = t => this._onConnMessage(t), this.conn.onclose = t => this._onConnClose(t))
    }
    _onConnMessage(t) {
        this.decode(t.data, n => {
            let {
                topic: r,
                event: o,
                payload: i,
                ref: s
            } = n;
            s && s === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${i.status||""} ${r} ${o} ${s&&"("+s+")"||""}`, i), this.channels.filter(a => a._isMember(r)).forEach(a => a._trigger(o, i, s)), this.stateChangeCallbacks.message.forEach(a => a(n))
        })
    }
    async _onConnOpen() {
        if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), !this.worker) this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        else {
            this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
            const t = this._workerObjectUrl(this.workerUrl);
            this.workerRef = new Worker(t), this.workerRef.onerror = n => {
                this.log("worker", "worker error", n.message), this.workerRef.terminate()
            }, this.workerRef.onmessage = n => {
                n.data.event === "keepAlive" && this.sendHeartbeat()
            }, this.workerRef.postMessage({
                event: "start",
                interval: this.heartbeatIntervalMs
            })
        }
        this.stateChangeCallbacks.open.forEach(t => t())
    }
    _onConnClose(t) {
        this.log("transport", "close", t), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(n => n(t))
    }
    _onConnError(t) {
        this.log("transport", t.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(n => n(t))
    }
    _triggerChanError() {
        this.channels.forEach(t => t._trigger(Ke.error))
    }
    _appendParams(t, n) {
        if (Object.keys(n).length === 0) return t;
        const r = t.match(/\?/) ? "&" : "?",
            o = new URLSearchParams(n);
        return `${t}${r}${o}`
    }
    _workerObjectUrl(t) {
        let n;
        if (t) n = t;
        else {
            const r = new Blob([S_], {
                type: "application/javascript"
            });
            n = URL.createObjectURL(r)
        }
        return n
    }
}
class b_ {
    constructor(t, n, r) {
        this.binaryType = "arraybuffer", this.onclose = () => {}, this.onerror = () => {}, this.onmessage = () => {}, this.onopen = () => {}, this.readyState = Zn.connecting, this.send = () => {}, this.url = null, this.url = t, this.close = r.close
    }
}
class du extends Error {
    constructor(t) {
        super(t), this.__isStorageError = !0, this.name = "StorageError"
    }
}

function ie(e) {
    return typeof e == "object" && e !== null && "__isStorageError" in e
}
class C_ extends du {
    constructor(t, n) {
        super(t), this.name = "StorageApiError", this.status = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        }
    }
}
class nl extends du {
    constructor(t, n) {
        super(t), this.name = "StorageUnknownError", this.originalError = n
    }
}
var P_ = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
const im = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = (...n) => lr(async () => {
            const {
                default: r
            } = await Promise.resolve().then(() => pr);
            return {
                default: r
            }
        }, void 0).then(({
            default: r
        }) => r(...n)) : t = fetch, (...n) => t(...n)
    },
    N_ = () => P_(void 0, void 0, void 0, function*() {
        return typeof Response > "u" ? (yield lr(() => Promise.resolve().then(() => pr), void 0)).Response : Response
    }),
    rl = e => {
        if (Array.isArray(e)) return e.map(n => rl(n));
        if (typeof e == "function" || e !== Object(e)) return e;
        const t = {};
        return Object.entries(e).forEach(([n, r]) => {
            const o = n.replace(/([-_][a-z])/gi, i => i.toUpperCase().replace(/[-_]/g, ""));
            t[o] = rl(r)
        }), t
    };
var kn = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
const Js = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
    j_ = (e, t, n) => kn(void 0, void 0, void 0, function*() {
        const r = yield N_();
        e instanceof r && !(n != null && n.noResolveJson) ? e.json().then(o => {
            t(new C_(Js(o), e.status || 500))
        }).catch(o => {
            t(new nl(Js(o), o))
        }) : t(new nl(Js(e), e))
    }),
    R_ = (e, t, n, r) => {
        const o = {
            method: e,
            headers: (t == null ? void 0 : t.headers) || {}
        };
        return e === "GET" ? o : (o.headers = Object.assign({
            "Content-Type": "application/json"
        }, t == null ? void 0 : t.headers), r && (o.body = JSON.stringify(r)), Object.assign(Object.assign({}, o), n))
    };

function go(e, t, n, r, o, i) {
    return kn(this, void 0, void 0, function*() {
        return new Promise((s, a) => {
            e(n, R_(t, r, o, i)).then(l => {
                if (!l.ok) throw l;
                return r != null && r.noResolveJson ? l : l.json()
            }).then(l => s(l)).catch(l => j_(l, a, r))
        })
    })
}

function Li(e, t, n, r) {
    return kn(this, void 0, void 0, function*() {
        return go(e, "GET", t, n, r)
    })
}

function Ot(e, t, n, r, o) {
    return kn(this, void 0, void 0, function*() {
        return go(e, "POST", t, r, o, n)
    })
}

function T_(e, t, n, r, o) {
    return kn(this, void 0, void 0, function*() {
        return go(e, "PUT", t, r, o, n)
    })
}

function O_(e, t, n, r) {
    return kn(this, void 0, void 0, function*() {
        return go(e, "HEAD", t, Object.assign(Object.assign({}, n), {
            noResolveJson: !0
        }), r)
    })
}

function sm(e, t, n, r, o) {
    return kn(this, void 0, void 0, function*() {
        return go(e, "DELETE", t, r, o, n)
    })
}
var ke = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
const A_ = {
        limit: 100,
        offset: 0,
        sortBy: {
            column: "name",
            order: "asc"
        }
    },
    cd = {
        cacheControl: "3600",
        contentType: "text/plain;charset=UTF-8",
        upsert: !1
    };
class I_ {
    constructor(t, n = {}, r, o) {
        this.url = t, this.headers = n, this.bucketId = r, this.fetch = im(o)
    }
    uploadOrUpdate(t, n, r, o) {
        return ke(this, void 0, void 0, function*() {
            try {
                let i;
                const s = Object.assign(Object.assign({}, cd), o);
                let a = Object.assign(Object.assign({}, this.headers), t === "POST" && {
                    "x-upsert": String(s.upsert)
                });
                const l = s.metadata;
                typeof Blob < "u" && r instanceof Blob ? (i = new FormData, i.append("cacheControl", s.cacheControl), l && i.append("metadata", this.encodeMetadata(l)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.append("cacheControl", s.cacheControl), l && i.append("metadata", this.encodeMetadata(l))) : (i = r, a["cache-control"] = `max-age=${s.cacheControl}`, a["content-type"] = s.contentType, l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), o != null && o.headers && (a = Object.assign(Object.assign({}, a), o.headers));
                const u = this._removeEmptyFolders(n),
                    c = this._getFinalPath(u),
                    d = yield this.fetch(`${this.url}/object/${c}`, Object.assign({
                        method: t,
                        body: i,
                        headers: a
                    }, s != null && s.duplex ? {
                        duplex: s.duplex
                    } : {})), f = yield d.json();
                return d.ok ? {
                    data: {
                        path: u,
                        id: f.Id,
                        fullPath: f.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: f
                }
            } catch (i) {
                if (ie(i)) return {
                    data: null,
                    error: i
                };
                throw i
            }
        })
    }
    upload(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", t, n, r)
        })
    }
    uploadToSignedUrl(t, n, r, o) {
        return ke(this, void 0, void 0, function*() {
            const i = this._removeEmptyFolders(t),
                s = this._getFinalPath(i),
                a = new URL(this.url + `/object/upload/sign/${s}`);
            a.searchParams.set("token", n);
            try {
                let l;
                const u = Object.assign({
                        upsert: cd.upsert
                    }, o),
                    c = Object.assign(Object.assign({}, this.headers), {
                        "x-upsert": String(u.upsert)
                    });
                typeof Blob < "u" && r instanceof Blob ? (l = new FormData, l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType);
                const d = yield this.fetch(a.toString(), {
                    method: "PUT",
                    body: l,
                    headers: c
                }), f = yield d.json();
                return d.ok ? {
                    data: {
                        path: i,
                        fullPath: f.Key
                    },
                    error: null
                } : {
                    data: null,
                    error: f
                }
            } catch (l) {
                if (ie(l)) return {
                    data: null,
                    error: l
                };
                throw l
            }
        })
    }
    createSignedUploadUrl(t, n) {
        return ke(this, void 0, void 0, function*() {
            try {
                let r = this._getFinalPath(t);
                const o = Object.assign({}, this.headers);
                n != null && n.upsert && (o["x-upsert"] = "true");
                const i = yield Ot(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                    headers: o
                }), s = new URL(this.url + i.url), a = s.searchParams.get("token");
                if (!a) throw new du("No token returned by API");
                return {
                    data: {
                        signedUrl: s.toString(),
                        path: t,
                        token: a
                    },
                    error: null
                }
            } catch (r) {
                if (ie(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    update(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", t, n, r)
        })
    }
    move(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ot(this.fetch, `${this.url}/object/move`, {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: n,
                        destinationBucket: r == null ? void 0 : r.destinationBucket
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (o) {
                if (ie(o)) return {
                    data: null,
                    error: o
                };
                throw o
            }
        })
    }
    copy(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            try {
                return {
                    data: {
                        path: (yield Ot(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: t,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket
                        }, {
                            headers: this.headers
                        })).Key
                    },
                    error: null
                }
            } catch (o) {
                if (ie(o)) return {
                    data: null,
                    error: o
                };
                throw o
            }
        })
    }
    createSignedUrl(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            try {
                let o = this._getFinalPath(t),
                    i = yield Ot(this.fetch, `${this.url}/object/sign/${o}`, Object.assign({
                        expiresIn: n
                    }, r != null && r.transform ? {
                        transform: r.transform
                    } : {}), {
                        headers: this.headers
                    });
                const s = r != null && r.download ? `&download=${r.download===!0?"":r.download}` : "";
                return i = {
                    signedUrl: encodeURI(`${this.url}${i.signedURL}${s}`)
                }, {
                    data: i,
                    error: null
                }
            } catch (o) {
                if (ie(o)) return {
                    data: null,
                    error: o
                };
                throw o
            }
        })
    }
    createSignedUrls(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            try {
                const o = yield Ot(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn: n,
                    paths: t
                }, {
                    headers: this.headers
                }), i = r != null && r.download ? `&download=${r.download===!0?"":r.download}` : "";
                return {
                    data: o.map(s => Object.assign(Object.assign({}, s), {
                        signedUrl: s.signedURL ? encodeURI(`${this.url}${s.signedURL}${i}`) : null
                    })),
                    error: null
                }
            } catch (o) {
                if (ie(o)) return {
                    data: null,
                    error: o
                };
                throw o
            }
        })
    }
    download(t, n) {
        return ke(this, void 0, void 0, function*() {
            const o = typeof(n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object",
                i = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {}),
                s = i ? `?${i}` : "";
            try {
                const a = this._getFinalPath(t);
                return {
                    data: yield(yield Li(this.fetch, `${this.url}/${o}/${a}${s}`, {
                        headers: this.headers,
                        noResolveJson: !0
                    })).blob(),
                    error: null
                }
            } catch (a) {
                if (ie(a)) return {
                    data: null,
                    error: a
                };
                throw a
            }
        })
    }
    info(t) {
        return ke(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                const r = yield Li(this.fetch, `${this.url}/object/info/${n}`, {
                    headers: this.headers
                });
                return {
                    data: rl(r),
                    error: null
                }
            } catch (r) {
                if (ie(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    exists(t) {
        return ke(this, void 0, void 0, function*() {
            const n = this._getFinalPath(t);
            try {
                return yield O_(this.fetch, `${this.url}/object/${n}`, {
                    headers: this.headers
                }), {
                    data: !0,
                    error: null
                }
            } catch (r) {
                if (ie(r) && r instanceof nl) {
                    const o = r.originalError;
                    if ([400, 404].includes(o == null ? void 0 : o.status)) return {
                        data: !1,
                        error: r
                    }
                }
                throw r
            }
        })
    }
    getPublicUrl(t, n) {
        const r = this._getFinalPath(t),
            o = [],
            i = n != null && n.download ? `download=${n.download===!0?"":n.download}` : "";
        i !== "" && o.push(i);
        const a = typeof(n == null ? void 0 : n.transform) < "u" ? "render/image" : "object",
            l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        l !== "" && o.push(l);
        let u = o.join("&");
        return u !== "" && (u = `?${u}`), {
            data: {
                publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`)
            }
        }
    }
    remove(t) {
        return ke(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sm(this.fetch, `${this.url}/object/${this.bucketId}`, {
                        prefixes: t
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ie(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    list(t, n, r) {
        return ke(this, void 0, void 0, function*() {
            try {
                const o = Object.assign(Object.assign(Object.assign({}, A_), n), {
                    prefix: t || ""
                });
                return {
                    data: yield Ot(this.fetch, `${this.url}/object/list/${this.bucketId}`, o, {
                        headers: this.headers
                    }, r),
                    error: null
                }
            } catch (o) {
                if (ie(o)) return {
                    data: null,
                    error: o
                };
                throw o
            }
        })
    }
    encodeMetadata(t) {
        return JSON.stringify(t)
    }
    toBase64(t) {
        return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t)
    }
    _getFinalPath(t) {
        return `${this.bucketId}/${t}`
    }
    _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
    }
    transformOptsToQueryString(t) {
        const n = [];
        return t.width && n.push(`width=${t.width}`), t.height && n.push(`height=${t.height}`), t.resize && n.push(`resize=${t.resize}`), t.format && n.push(`format=${t.format}`), t.quality && n.push(`quality=${t.quality}`), n.join("&")
    }
}
const L_ = "2.7.1",
    $_ = {
        "X-Client-Info": `storage-js/${L_}`
    };
var jn = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
class D_ {
    constructor(t, n = {}, r) {
        this.url = t, this.headers = Object.assign(Object.assign({}, $_), n), this.fetch = im(r)
    }
    listBuckets() {
        return jn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Li(this.fetch, `${this.url}/bucket`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (t) {
                if (ie(t)) return {
                    data: null,
                    error: t
                };
                throw t
            }
        })
    }
    getBucket(t) {
        return jn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Li(this.fetch, `${this.url}/bucket/${t}`, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ie(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    createBucket(t, n = {
        public: !1
    }) {
        return jn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ot(this.fetch, `${this.url}/bucket`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (ie(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    updateBucket(t, n) {
        return jn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield T_(this.fetch, `${this.url}/bucket/${t}`, {
                        id: t,
                        name: t,
                        public: n.public,
                        file_size_limit: n.fileSizeLimit,
                        allowed_mime_types: n.allowedMimeTypes
                    }, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (r) {
                if (ie(r)) return {
                    data: null,
                    error: r
                };
                throw r
            }
        })
    }
    emptyBucket(t) {
        return jn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield Ot(this.fetch, `${this.url}/bucket/${t}/empty`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ie(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    deleteBucket(t) {
        return jn(this, void 0, void 0, function*() {
            try {
                return {
                    data: yield sm(this.fetch, `${this.url}/bucket/${t}`, {}, {
                        headers: this.headers
                    }),
                    error: null
                }
            } catch (n) {
                if (ie(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
}
class M_ extends D_ {
    constructor(t, n = {}, r) {
        super(t, n, r)
    }
    from(t) {
        return new I_(this.url, this.headers, t, this.fetch)
    }
}
const z_ = "2.47.10";
let Or = "";
typeof Deno < "u" ? Or = "deno" : typeof document < "u" ? Or = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Or = "react-native" : Or = "node";
const U_ = {
        "X-Client-Info": `supabase-js-${Or}/${z_}`
    },
    F_ = {
        headers: U_
    },
    B_ = {
        schema: "public"
    },
    W_ = {
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        flowType: "implicit"
    },
    V_ = {};
var H_ = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
const G_ = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = Vp : t = fetch, (...n) => t(...n)
    },
    K_ = () => typeof Headers > "u" ? Hp : Headers,
    q_ = (e, t, n) => {
        const r = G_(n),
            o = K_();
        return (i, s) => H_(void 0, void 0, void 0, function*() {
            var a;
            const l = (a = yield t()) !== null && a !== void 0 ? a : e;
            let u = new o(s == null ? void 0 : s.headers);
            return u.has("apikey") || u.set("apikey", e), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), r(i, Object.assign(Object.assign({}, s), {
                headers: u
            }))
        })
    };
var Q_ = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};

function J_(e) {
    return e.replace(/\/$/, "")
}

function Y_(e, t) {
    const {
        db: n,
        auth: r,
        realtime: o,
        global: i
    } = e, {
        db: s,
        auth: a,
        realtime: l,
        global: u
    } = t, c = {
        db: Object.assign(Object.assign({}, s), n),
        auth: Object.assign(Object.assign({}, a), r),
        realtime: Object.assign(Object.assign({}, l), o),
        global: Object.assign(Object.assign({}, u), i),
        accessToken: () => Q_(this, void 0, void 0, function*() {
            return ""
        })
    };
    return e.accessToken ? c.accessToken = e.accessToken : delete c.accessToken, c
}
const am = "2.67.3",
    X_ = "http://localhost:9999",
    Z_ = "supabase.auth.token",
    ex = {
        "X-Client-Info": `gotrue-js/${am}`
    },
    dd = 10,
    ol = "X-Supabase-Api-Version",
    lm = {
        "2024-01-01": {
            timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
            name: "2024-01-01"
        }
    };

function tx(e) {
    return Math.round(Date.now() / 1e3) + e
}

function nx() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        const t = Math.random() * 16 | 0;
        return (e == "x" ? t : t & 3 | 8).toString(16)
    })
}
const tt = () => typeof window < "u" && typeof document < "u",
    nn = {
        tested: !1,
        writable: !1
    },
    Vr = () => {
        if (!tt()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1
        } catch {
            return !1
        }
        if (nn.tested) return nn.writable;
        const e = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), nn.tested = !0, nn.writable = !0
        } catch {
            nn.tested = !0, nn.writable = !1
        }
        return nn.writable
    };

function rx(e) {
    const t = {},
        n = new URL(e);
    if (n.hash && n.hash[0] === "#") try {
        new URLSearchParams(n.hash.substring(1)).forEach((o, i) => {
            t[i] = o
        })
    } catch {}
    return n.searchParams.forEach((r, o) => {
        t[o] = r
    }), t
}
const um = e => {
        let t;
        return e ? t = e : typeof fetch > "u" ? t = (...n) => lr(async () => {
            const {
                default: r
            } = await Promise.resolve().then(() => pr);
            return {
                default: r
            }
        }, void 0).then(({
            default: r
        }) => r(...n)) : t = fetch, (...n) => t(...n)
    },
    ox = e => typeof e == "object" && e !== null && "status" in e && "ok" in e && "json" in e && typeof e.json == "function",
    cm = async (e, t, n) => {
        await e.setItem(t, JSON.stringify(n))
    }, Wo = async (e, t) => {
        const n = await e.getItem(t);
        if (!n) return null;
        try {
            return JSON.parse(n)
        } catch {
            return n
        }
    }, Vo = async (e, t) => {
        await e.removeItem(t)
    };

function ix(e) {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let n = "",
        r, o, i, s, a, l, u, c = 0;
    for (e = e.replace("-", "+").replace("_", "/"); c < e.length;) s = t.indexOf(e.charAt(c++)), a = t.indexOf(e.charAt(c++)), l = t.indexOf(e.charAt(c++)), u = t.indexOf(e.charAt(c++)), r = s << 2 | a >> 4, o = (a & 15) << 4 | l >> 2, i = (l & 3) << 6 | u, n = n + String.fromCharCode(r), l != 64 && o != 0 && (n = n + String.fromCharCode(o)), u != 64 && i != 0 && (n = n + String.fromCharCode(i));
    return n
}
class ds {
    constructor() {
        this.promise = new ds.promiseConstructor((t, n) => {
            this.resolve = t, this.reject = n
        })
    }
}
ds.promiseConstructor = Promise;

function fd(e) {
    const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
        n = e.split(".");
    if (n.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
    if (!t.test(n[1])) throw new Error("JWT is not valid: payload is not in base64url format");
    const r = n[1];
    return JSON.parse(ix(r))
}
async function sx(e) {
    return await new Promise(t => {
        setTimeout(() => t(null), e)
    })
}

function ax(e, t) {
    return new Promise((r, o) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++) try {
                const s = await e(i);
                if (!t(i, null, s)) {
                    r(s);
                    return
                }
            } catch (s) {
                if (!t(i, s)) {
                    o(s);
                    return
                }
            }
        })()
    })
}

function lx(e) {
    return ("0" + e.toString(16)).substr(-2)
}

function ux() {
    const t = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            r = n.length;
        let o = "";
        for (let i = 0; i < 56; i++) o += n.charAt(Math.floor(Math.random() * r));
        return o
    }
    return crypto.getRandomValues(t), Array.from(t, lx).join("")
}
async function cx(e) {
    const n = new TextEncoder().encode(e),
        r = await crypto.subtle.digest("SHA-256", n),
        o = new Uint8Array(r);
    return Array.from(o).map(i => String.fromCharCode(i)).join("")
}

function dx(e) {
    return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}
async function fx(e) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u")) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
    const n = await cx(e);
    return dx(n)
}
async function Rn(e, t, n = !1) {
    const r = ux();
    let o = r;
    n && (o += "/PASSWORD_RECOVERY"), await cm(e, `${t}-code-verifier`, o);
    const i = await fx(r);
    return [i, r === i ? "plain" : "s256"]
}
const hx = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;

function px(e) {
    const t = e.headers.get(ol);
    if (!t || !t.match(hx)) return null;
    try {
        return new Date(`${t}T00:00:00.0Z`)
    } catch {
        return null
    }
}
class fu extends Error {
    constructor(t, n, r) {
        super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = n, this.code = r
    }
}

function I(e) {
    return typeof e == "object" && e !== null && "__isAuthError" in e
}
class mx extends fu {
    constructor(t, n, r) {
        super(t, n, r), this.name = "AuthApiError", this.status = n, this.code = r
    }
}

function vx(e) {
    return I(e) && e.name === "AuthApiError"
}
class dm extends fu {
    constructor(t, n) {
        super(t), this.name = "AuthUnknownError", this.originalError = n
    }
}
class Sn extends fu {
    constructor(t, n, r, o) {
        super(t, r, o), this.name = n, this.status = r
    }
}
class Nt extends Sn {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
    }
}

function gx(e) {
    return I(e) && e.name === "AuthSessionMissingError"
}
class Ys extends Sn {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
    }
}
class Ho extends Sn {
    constructor(t) {
        super(t, "AuthInvalidCredentialsError", 400, void 0)
    }
}
class Go extends Sn {
    constructor(t, n = null) {
        super(t, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}

function yx(e) {
    return I(e) && e.name === "AuthImplicitGrantRedirectError"
}
class hd extends Sn {
    constructor(t, n = null) {
        super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = n
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        }
    }
}
class il extends Sn {
    constructor(t, n) {
        super(t, "AuthRetryableFetchError", n, void 0)
    }
}

function Xs(e) {
    return I(e) && e.name === "AuthRetryableFetchError"
}
class pd extends Sn {
    constructor(t, n, r) {
        super(t, "AuthWeakPasswordError", n, "weak_password"), this.reasons = r
    }
}
var wx = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
const sn = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
    _x = [502, 503, 504];
async function md(e) {
    var t;
    if (!ox(e)) throw new il(sn(e), 0);
    if (_x.includes(e.status)) throw new il(sn(e), e.status);
    let n;
    try {
        n = await e.json()
    } catch (i) {
        throw new dm(sn(i), i)
    }
    let r;
    const o = px(e);
    if (o && o.getTime() >= lm["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code), r) {
        if (r === "weak_password") throw new pd(sn(n), e.status, ((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
        if (r === "session_not_found") throw new Nt
    } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce((i, s) => i && typeof s == "string", !0)) throw new pd(sn(n), e.status, n.weak_password.reasons);
    throw new mx(sn(n), e.status || 500, r)
}
const xx = (e, t, n, r) => {
    const o = {
        method: e,
        headers: (t == null ? void 0 : t.headers) || {}
    };
    return e === "GET" ? o : (o.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, t == null ? void 0 : t.headers), o.body = JSON.stringify(r), Object.assign(Object.assign({}, o), n))
};
async function D(e, t, n, r) {
    var o;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[ol] || (i[ol] = lm["2024-01-01"].name), r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const s = (o = r == null ? void 0 : r.query) !== null && o !== void 0 ? o : {};
    r != null && r.redirectTo && (s.redirect_to = r.redirectTo);
    const a = Object.keys(s).length ? "?" + new URLSearchParams(s).toString() : "",
        l = await kx(e, t, n + a, {
            headers: i,
            noResolveJson: r == null ? void 0 : r.noResolveJson
        }, {}, r == null ? void 0 : r.body);
    return r != null && r.xform ? r == null ? void 0 : r.xform(l) : {
        data: Object.assign({}, l),
        error: null
    }
}
async function kx(e, t, n, r, o, i) {
    const s = xx(t, r, o, i);
    let a;
    try {
        a = await e(n, Object.assign({}, s))
    } catch (l) {
        throw console.error(l), new il(sn(l), 0)
    }
    if (a.ok || await md(a), r != null && r.noResolveJson) return a;
    try {
        return await a.json()
    } catch (l) {
        await md(l)
    }
}

function jt(e) {
    var t;
    let n = null;
    Cx(e) && (n = Object.assign({}, e), e.expires_at || (n.expires_at = tx(e.expires_in)));
    const r = (t = e.user) !== null && t !== void 0 ? t : e;
    return {
        data: {
            session: n,
            user: r
        },
        error: null
    }
}

function vd(e) {
    const t = jt(e);
    return !t.error && e.weak_password && typeof e.weak_password == "object" && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && typeof e.weak_password.message == "string" && e.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) && (t.data.weak_password = e.weak_password), t
}

function Lt(e) {
    var t;
    return {
        data: {
            user: (t = e.user) !== null && t !== void 0 ? t : e
        },
        error: null
    }
}

function Sx(e) {
    return {
        data: e,
        error: null
    }
}

function Ex(e) {
    const {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: o,
        verification_type: i
    } = e, s = wx(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
        action_link: t,
        email_otp: n,
        hashed_token: r,
        redirect_to: o,
        verification_type: i
    }, l = Object.assign({}, s);
    return {
        data: {
            properties: a,
            user: l
        },
        error: null
    }
}

function bx(e) {
    return e
}

function Cx(e) {
    return e.access_token && e.refresh_token && e.expires_in
}
var Px = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
};
class Nx {
    constructor({
        url: t = "",
        headers: n = {},
        fetch: r
    }) {
        this.url = t, this.headers = n, this.fetch = um(r), this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        }
    }
    async signOut(t, n = "global") {
        try {
            return await D(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                headers: this.headers,
                jwt: t,
                noResolveJson: !0
            }), {
                data: null,
                error: null
            }
        } catch (r) {
            if (I(r)) return {
                data: null,
                error: r
            };
            throw r
        }
    }
    async inviteUserByEmail(t, n = {}) {
        try {
            return await D(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email: t,
                    data: n.data
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Lt
            })
        } catch (r) {
            if (I(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async generateLink(t) {
        try {
            const {
                options: n
            } = t, r = Px(t, ["options"]), o = Object.assign(Object.assign({}, r), n);
            return "newEmail" in r && (o.new_email = r == null ? void 0 : r.newEmail, delete o.newEmail), await D(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: o,
                headers: this.headers,
                xform: Ex,
                redirectTo: n == null ? void 0 : n.redirectTo
            })
        } catch (n) {
            if (I(n)) return {
                data: {
                    properties: null,
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async createUser(t) {
        try {
            return await D(this.fetch, "POST", `${this.url}/admin/users`, {
                body: t,
                headers: this.headers,
                xform: Lt
            })
        } catch (n) {
            if (I(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async listUsers(t) {
        var n, r, o, i, s, a, l;
        try {
            const u = {
                    nextPage: null,
                    lastPage: 0,
                    total: 0
                },
                c = await D(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page: (r = (n = t == null ? void 0 : t.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
                        per_page: (i = (o = t == null ? void 0 : t.perPage) === null || o === void 0 ? void 0 : o.toString()) !== null && i !== void 0 ? i : ""
                    },
                    xform: bx
                });
            if (c.error) throw c.error;
            const d = await c.json(),
                f = (s = c.headers.get("x-total-count")) !== null && s !== void 0 ? s : 0,
                w = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
            return w.length > 0 && (w.forEach(x => {
                const g = parseInt(x.split(";")[0].split("=")[1].substring(0, 1)),
                    _ = JSON.parse(x.split(";")[1].split("=")[1]);
                u[`${_}Page`] = g
            }), u.total = parseInt(f)), {
                data: Object.assign(Object.assign({}, d), u),
                error: null
            }
        } catch (u) {
            if (I(u)) return {
                data: {
                    users: []
                },
                error: u
            };
            throw u
        }
    }
    async getUserById(t) {
        try {
            return await D(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                xform: Lt
            })
        } catch (n) {
            if (I(n)) return {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async updateUserById(t, n) {
        try {
            return await D(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
                body: n,
                headers: this.headers,
                xform: Lt
            })
        } catch (r) {
            if (I(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async deleteUser(t, n = !1) {
        try {
            return await D(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: n
                },
                xform: Lt
            })
        } catch (r) {
            if (I(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    async _listFactors(t) {
        try {
            const {
                data: n,
                error: r
            } = await D(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
                headers: this.headers,
                xform: o => ({
                    data: {
                        factors: o
                    },
                    error: null
                })
            });
            return {
                data: n,
                error: r
            }
        } catch (n) {
            if (I(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async _deleteFactor(t) {
        try {
            return {
                data: await D(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
                    headers: this.headers
                }),
                error: null
            }
        } catch (n) {
            if (I(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
}
const jx = {
    getItem: e => Vr() ? globalThis.localStorage.getItem(e) : null,
    setItem: (e, t) => {
        Vr() && globalThis.localStorage.setItem(e, t)
    },
    removeItem: e => {
        Vr() && globalThis.localStorage.removeItem(e)
    }
};

function gd(e = {}) {
    return {
        getItem: t => e[t] || null,
        setItem: (t, n) => {
            e[t] = n
        },
        removeItem: t => {
            delete e[t]
        }
    }
}

function Rx() {
    if (typeof globalThis != "object") try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this
            },
            configurable: !0
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
    } catch {
        typeof self < "u" && (self.globalThis = self)
    }
}
const Tn = {
    debug: !!(globalThis && Vr() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class fm extends Error {
    constructor(t) {
        super(t), this.isAcquireTimeout = !0
    }
}
class Tx extends fm {}
async function Ox(e, t, n) {
    Tn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
    const r = new globalThis.AbortController;
    return t > 0 && setTimeout(() => {
        r.abort(), Tn.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
    }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(e, t === 0 ? {
        mode: "exclusive",
        ifAvailable: !0
    } : {
        mode: "exclusive",
        signal: r.signal
    }, async o => {
        if (o) {
            Tn.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, o.name);
            try {
                return await n()
            } finally {
                Tn.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, o.name)
            }
        } else {
            if (t === 0) throw Tn.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new Tx(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
            if (Tn.debug) try {
                const i = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "))
            } catch (i) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i)
            }
            return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await n()
        }
    }))
}
Rx();
const Ax = {
        url: X_,
        storageKey: Z_,
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: ex,
        flowType: "implicit",
        debug: !1,
        hasCustomAuthorizationHeader: !1
    },
    Pr = 30 * 1e3,
    yd = 3;
async function wd(e, t, n) {
    return await n()
}
class lo {
    constructor(t) {
        var n, r;
        this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = lo.nextInstanceID, lo.nextInstanceID += 1, this.instanceID > 0 && tt() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const o = Object.assign(Object.assign({}, Ax), t);
        if (this.logDebugMessages = !!o.debug, typeof o.debug == "function" && (this.logger = o.debug), this.persistSession = o.persistSession, this.storageKey = o.storageKey, this.autoRefreshToken = o.autoRefreshToken, this.admin = new Nx({
                url: o.url,
                headers: o.headers,
                fetch: o.fetch
            }), this.url = o.url, this.headers = o.headers, this.fetch = um(o.fetch), this.lock = o.lock || wd, this.detectSessionInUrl = o.detectSessionInUrl, this.flowType = o.flowType, this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader, o.lock ? this.lock = o.lock : tt() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = Ox : this.lock = wd, this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
            }, this.persistSession ? o.storage ? this.storage = o.storage : Vr() ? this.storage = jx : (this.memoryStorage = {}, this.storage = gd(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = gd(this.memoryStorage)), tt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
            } catch (i) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i)
            }(r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async i => {
                this._debug("received broadcast notification from other tab or client", i), await this._notifyAllSubscribers(i.data.event, i.data.session, !1)
            })
        }
        this.initialize()
    }
    _debug(...t) {
        return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${am}) ${new Date().toISOString()}`, ...t), this
    }
    async initialize() {
        return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise)
    }
    async _initialize() {
        var t;
        try {
            const n = rx(window.location.href);
            let r = "none";
            if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"), tt() && this.detectSessionInUrl && r !== "none") {
                const {
                    data: o,
                    error: i
                } = await this._getSessionFromURL(n, r);
                if (i) {
                    if (this._debug("#_initialize()", "error detecting session from URL", i), yx(i)) {
                        const l = (t = i.details) === null || t === void 0 ? void 0 : t.code;
                        if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable") return {
                            error: i
                        }
                    }
                    return await this._removeSession(), {
                        error: i
                    }
                }
                const {
                    session: s,
                    redirectType: a
                } = o;
                return this._debug("#_initialize()", "detected session in URL", s, "redirect type", a), await this._saveSession(s), setTimeout(async () => {
                    a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", s) : await this._notifyAllSubscribers("SIGNED_IN", s)
                }, 0), {
                    error: null
                }
            }
            return await this._recoverAndRefresh(), {
                error: null
            }
        } catch (n) {
            return I(n) ? {
                error: n
            } : {
                error: new dm("Unexpected error during initialization", n)
            }
        } finally {
            await this._handleVisibilityChange(), this._debug("#_initialize()", "end")
        }
    }
    async signInAnonymously(t) {
        var n, r, o;
        try {
            const i = await D(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data: (r = (n = t == null ? void 0 : t.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
                        gotrue_meta_security: {
                            captcha_token: (o = t == null ? void 0 : t.options) === null || o === void 0 ? void 0 : o.captchaToken
                        }
                    },
                    xform: jt
                }),
                {
                    data: s,
                    error: a
                } = i;
            if (a || !s) return {
                data: {
                    user: null,
                    session: null
                },
                error: a
            };
            const l = s.session,
                u = s.user;
            return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", l)), {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (I(i)) return {
                data: {
                    user: null,
                    session: null
                },
                error: i
            };
            throw i
        }
    }
    async signUp(t) {
        var n, r, o;
        try {
            let i;
            if ("email" in t) {
                const {
                    email: c,
                    password: d,
                    options: f
                } = t;
                let w = null,
                    x = null;
                this.flowType === "pkce" && ([w, x] = await Rn(this.storage, this.storageKey)), i = await D(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: f == null ? void 0 : f.emailRedirectTo,
                    body: {
                        email: c,
                        password: d,
                        data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        },
                        code_challenge: w,
                        code_challenge_method: x
                    },
                    xform: jt
                })
            } else if ("phone" in t) {
                const {
                    phone: c,
                    password: d,
                    options: f
                } = t;
                i = await D(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: c,
                        password: d,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        channel: (o = f == null ? void 0 : f.channel) !== null && o !== void 0 ? o : "sms",
                        gotrue_meta_security: {
                            captcha_token: f == null ? void 0 : f.captchaToken
                        }
                    },
                    xform: jt
                })
            } else throw new Ho("You must provide either an email or phone number and a password");
            const {
                data: s,
                error: a
            } = i;
            if (a || !s) return {
                data: {
                    user: null,
                    session: null
                },
                error: a
            };
            const l = s.session,
                u = s.user;
            return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", l)), {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (i) {
            if (I(i)) return {
                data: {
                    user: null,
                    session: null
                },
                error: i
            };
            throw i
        }
    }
    async signInWithPassword(t) {
        try {
            let n;
            if ("email" in t) {
                const {
                    email: i,
                    password: s,
                    options: a
                } = t;
                n = await D(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: s,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: vd
                })
            } else if ("phone" in t) {
                const {
                    phone: i,
                    password: s,
                    options: a
                } = t;
                n = await D(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: s,
                        gotrue_meta_security: {
                            captcha_token: a == null ? void 0 : a.captchaToken
                        }
                    },
                    xform: vd
                })
            } else throw new Ho("You must provide either an email or phone number and a password");
            const {
                data: r,
                error: o
            } = n;
            return o ? {
                data: {
                    user: null,
                    session: null
                },
                error: o
            } : !r || !r.session || !r.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Ys
            } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
                data: Object.assign({
                    user: r.user,
                    session: r.session
                }, r.weak_password ? {
                    weakPassword: r.weak_password
                } : null),
                error: o
            })
        } catch (n) {
            if (I(n)) return {
                data: {
                    user: null,
                    session: null
                },
                error: n
            };
            throw n
        }
    }
    async signInWithOAuth(t) {
        var n, r, o, i;
        return await this._handleProviderSignIn(t.provider, {
            redirectTo: (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (o = t.options) === null || o === void 0 ? void 0 : o.queryParams,
            skipBrowserRedirect: (i = t.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
        })
    }
    async exchangeCodeForSession(t) {
        return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    }
    async _exchangeCodeForSession(t) {
        const n = await Wo(this.storage, `${this.storageKey}-code-verifier`),
            [r, o] = (n ?? "").split("/");
        try {
            const {
                data: i,
                error: s
            } = await D(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: t,
                    code_verifier: r
                },
                xform: jt
            });
            if (await Vo(this.storage, `${this.storageKey}-code-verifier`), s) throw s;
            return !i || !i.session || !i.user ? {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: new Ys
            } : (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), {
                data: Object.assign(Object.assign({}, i), {
                    redirectType: o ?? null
                }),
                error: s
            })
        } catch (i) {
            if (I(i)) return {
                data: {
                    user: null,
                    session: null,
                    redirectType: null
                },
                error: i
            };
            throw i
        }
    }
    async signInWithIdToken(t) {
        try {
            const {
                options: n,
                provider: r,
                token: o,
                access_token: i,
                nonce: s
            } = t, a = await D(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider: r,
                    id_token: o,
                    access_token: i,
                    nonce: s,
                    gotrue_meta_security: {
                        captcha_token: n == null ? void 0 : n.captchaToken
                    }
                },
                xform: jt
            }), {
                data: l,
                error: u
            } = a;
            return u ? {
                data: {
                    user: null,
                    session: null
                },
                error: u
            } : !l || !l.session || !l.user ? {
                data: {
                    user: null,
                    session: null
                },
                error: new Ys
            } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), {
                data: l,
                error: u
            })
        } catch (n) {
            if (I(n)) return {
                data: {
                    user: null,
                    session: null
                },
                error: n
            };
            throw n
        }
    }
    async signInWithOtp(t) {
        var n, r, o, i, s;
        try {
            if ("email" in t) {
                const {
                    email: a,
                    options: l
                } = t;
                let u = null,
                    c = null;
                this.flowType === "pkce" && ([u, c] = await Rn(this.storage, this.storageKey));
                const {
                    error: d
                } = await D(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        code_challenge: u,
                        code_challenge_method: c
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: d
                }
            }
            if ("phone" in t) {
                const {
                    phone: a,
                    options: l
                } = t, {
                    data: u,
                    error: c
                } = await D(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone: a,
                        data: (o = l == null ? void 0 : l.data) !== null && o !== void 0 ? o : {},
                        create_user: (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                        gotrue_meta_security: {
                            captcha_token: l == null ? void 0 : l.captchaToken
                        },
                        channel: (s = l == null ? void 0 : l.channel) !== null && s !== void 0 ? s : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: u == null ? void 0 : u.message_id
                    },
                    error: c
                }
            }
            throw new Ho("You must provide either an email or phone number.")
        } catch (a) {
            if (I(a)) return {
                data: {
                    user: null,
                    session: null
                },
                error: a
            };
            throw a
        }
    }
    async verifyOtp(t) {
        var n, r;
        try {
            let o, i;
            "options" in t && (o = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo, i = (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken);
            const {
                data: s,
                error: a
            } = await D(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, t), {
                    gotrue_meta_security: {
                        captcha_token: i
                    }
                }),
                redirectTo: o,
                xform: jt
            });
            if (a) throw a;
            if (!s) throw new Error("An error occurred on token verification.");
            const l = s.session,
                u = s.user;
            return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), {
                data: {
                    user: u,
                    session: l
                },
                error: null
            }
        } catch (o) {
            if (I(o)) return {
                data: {
                    user: null,
                    session: null
                },
                error: o
            };
            throw o
        }
    }
    async signInWithSSO(t) {
        var n, r, o;
        try {
            let i = null,
                s = null;
            return this.flowType === "pkce" && ([i, s] = await Rn(this.storage, this.storageKey)), await D(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? {
                    provider_id: t.providerId
                } : null), "domain" in t ? {
                    domain: t.domain
                } : null), {
                    redirect_to: (r = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0
                }), !((o = t == null ? void 0 : t.options) === null || o === void 0) && o.captchaToken ? {
                    gotrue_meta_security: {
                        captcha_token: t.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: !0,
                    code_challenge: i,
                    code_challenge_method: s
                }),
                headers: this.headers,
                xform: Sx
            })
        } catch (i) {
            if (I(i)) return {
                data: null,
                error: i
            };
            throw i
        }
    }
    async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate())
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async t => {
                const {
                    data: {
                        session: n
                    },
                    error: r
                } = t;
                if (r) throw r;
                if (!n) throw new Nt;
                const {
                    error: o
                } = await D(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: o
                }
            })
        } catch (t) {
            if (I(t)) return {
                data: {
                    user: null,
                    session: null
                },
                error: t
            };
            throw t
        }
    }
    async resend(t) {
        try {
            const n = `${this.url}/resend`;
            if ("email" in t) {
                const {
                    email: r,
                    type: o,
                    options: i
                } = t, {
                    error: s
                } = await D(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        email: r,
                        type: o,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    },
                    redirectTo: i == null ? void 0 : i.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: s
                }
            } else if ("phone" in t) {
                const {
                    phone: r,
                    type: o,
                    options: i
                } = t, {
                    data: s,
                    error: a
                } = await D(this.fetch, "POST", n, {
                    headers: this.headers,
                    body: {
                        phone: r,
                        type: o,
                        gotrue_meta_security: {
                            captcha_token: i == null ? void 0 : i.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: s == null ? void 0 : s.message_id
                    },
                    error: a
                }
            }
            throw new Ho("You must provide either an email or phone number and a type")
        } catch (n) {
            if (I(n)) return {
                data: {
                    user: null,
                    session: null
                },
                error: n
            };
            throw n
        }
    }
    async getSession() {
        return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async n => n))
    }
    async _acquireLock(t, n) {
        this._debug("#_acquireLock", "begin", t);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                    o = (async () => (await r, await n()))();
                return this.pendingInLock.push((async () => {
                    try {
                        await o
                    } catch {}
                })()), o
            }
            return await this.lock(`lock:${this.storageKey}`, t, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (this.pendingInLock.push((async () => {
                            try {
                                await r
                            } catch {}
                        })()), await r; this.pendingInLock.length;) {
                        const o = [...this.pendingInLock];
                        await Promise.all(o), this.pendingInLock.splice(0, o.length)
                    }
                    return await r
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1
                }
            })
        } finally {
            this._debug("#_acquireLock", "end")
        }
    }
    async _useSession(t) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await t(n)
        } finally {
            this._debug("#_useSession", "end")
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let t = null;
            const n = await Wo(this.storage, this.storageKey);
            if (this._debug("#getSession()", "session from storage", n), n !== null && (this._isValidSession(n) ? t = n : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t) return {
                data: {
                    session: null
                },
                error: null
            };
            const r = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
            if (this._debug("#__loadSession()", `session has${r?"":" not"} expired`, "expires_at", t.expires_at), !r) {
                if (this.storage.isServer) {
                    let s = this.suppressGetSessionWarning;
                    t = new Proxy(t, {
                        get: (l, u, c) => (!s && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), s = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, u, c))
                    })
                }
                return {
                    data: {
                        session: t
                    },
                    error: null
                }
            }
            const {
                session: o,
                error: i
            } = await this._callRefreshToken(t.refresh_token);
            return i ? {
                data: {
                    session: null
                },
                error: i
            } : {
                data: {
                    session: o
                },
                error: null
            }
        } finally {
            this._debug("#__loadSession()", "end")
        }
    }
    async getUser(t) {
        return t ? await this._getUser(t) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()))
    }
    async _getUser(t) {
        try {
            return t ? await D(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: t,
                xform: Lt
            }) : await this._useSession(async n => {
                var r, o, i;
                const {
                    data: s,
                    error: a
                } = n;
                if (a) throw a;
                return !(!((r = s.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? {
                    data: {
                        user: null
                    },
                    error: new Nt
                } : await D(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (i = (o = s.session) === null || o === void 0 ? void 0 : o.access_token) !== null && i !== void 0 ? i : void 0,
                    xform: Lt
                })
            })
        } catch (n) {
            if (I(n)) return gx(n) && (await this._removeSession(), await Vo(this.storage, `${this.storageKey}-code-verifier`)), {
                data: {
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async updateUser(t, n = {}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(t, n))
    }
    async _updateUser(t, n = {}) {
        try {
            return await this._useSession(async r => {
                const {
                    data: o,
                    error: i
                } = r;
                if (i) throw i;
                if (!o.session) throw new Nt;
                const s = o.session;
                let a = null,
                    l = null;
                this.flowType === "pkce" && t.email != null && ([a, l] = await Rn(this.storage, this.storageKey));
                const {
                    data: u,
                    error: c
                } = await D(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, t), {
                        code_challenge: a,
                        code_challenge_method: l
                    }),
                    jwt: s.access_token,
                    xform: Lt
                });
                if (c) throw c;
                return s.user = u.user, await this._saveSession(s), await this._notifyAllSubscribers("USER_UPDATED", s), {
                    data: {
                        user: s.user
                    },
                    error: null
                }
            })
        } catch (r) {
            if (I(r)) return {
                data: {
                    user: null
                },
                error: r
            };
            throw r
        }
    }
    _decodeJWT(t) {
        return fd(t)
    }
    async setSession(t) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(t))
    }
    async _setSession(t) {
        try {
            if (!t.access_token || !t.refresh_token) throw new Nt;
            const n = Date.now() / 1e3;
            let r = n,
                o = !0,
                i = null;
            const s = fd(t.access_token);
            if (s.exp && (r = s.exp, o = r <= n), o) {
                const {
                    session: a,
                    error: l
                } = await this._callRefreshToken(t.refresh_token);
                if (l) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: l
                };
                if (!a) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                i = a
            } else {
                const {
                    data: a,
                    error: l
                } = await this._getUser(t.access_token);
                if (l) throw l;
                i = {
                    access_token: t.access_token,
                    refresh_token: t.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r
                }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)
            }
            return {
                data: {
                    user: i.user,
                    session: i
                },
                error: null
            }
        } catch (n) {
            if (I(n)) return {
                data: {
                    session: null,
                    user: null
                },
                error: n
            };
            throw n
        }
    }
    async refreshSession(t) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(t))
    }
    async _refreshSession(t) {
        try {
            return await this._useSession(async n => {
                var r;
                if (!t) {
                    const {
                        data: s,
                        error: a
                    } = n;
                    if (a) throw a;
                    t = (r = s.session) !== null && r !== void 0 ? r : void 0
                }
                if (!(t != null && t.refresh_token)) throw new Nt;
                const {
                    session: o,
                    error: i
                } = await this._callRefreshToken(t.refresh_token);
                return i ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: i
                } : o ? {
                    data: {
                        user: o.user,
                        session: o
                    },
                    error: null
                } : {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                }
            })
        } catch (n) {
            if (I(n)) return {
                data: {
                    user: null,
                    session: null
                },
                error: n
            };
            throw n
        }
    }
    async _getSessionFromURL(t, n) {
        try {
            if (!tt()) throw new Go("No browser detected.");
            if (t.error || t.error_description || t.error_code) throw new Go(t.error_description || "Error in URL with unspecified error_description", {
                error: t.error || "unspecified_error",
                code: t.error_code || "unspecified_code"
            });
            switch (n) {
                case "implicit":
                    if (this.flowType === "pkce") throw new hd("Not a valid PKCE flow url.");
                    break;
                case "pkce":
                    if (this.flowType === "implicit") throw new Go("Not a valid implicit grant flow url.");
                    break;
                default:
            }
            if (n === "pkce") {
                if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code) throw new hd("No code detected.");
                const {
                    data: h,
                    error: y
                } = await this._exchangeCodeForSession(t.code);
                if (y) throw y;
                const k = new URL(window.location.href);
                return k.searchParams.delete("code"), window.history.replaceState(window.history.state, "", k.toString()), {
                    data: {
                        session: h.session,
                        redirectType: null
                    },
                    error: null
                }
            }
            const {
                provider_token: r,
                provider_refresh_token: o,
                access_token: i,
                refresh_token: s,
                expires_in: a,
                expires_at: l,
                token_type: u
            } = t;
            if (!i || !a || !s || !u) throw new Go("No session defined in URL");
            const c = Math.round(Date.now() / 1e3),
                d = parseInt(a);
            let f = c + d;
            l && (f = parseInt(l));
            const w = f - c;
            w * 1e3 <= Pr && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${d}s`);
            const x = f - d;
            c - x >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", x, f, c) : c - x < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", x, f, c);
            const {
                data: g,
                error: _
            } = await this._getUser(i);
            if (_) throw _;
            const p = {
                provider_token: r,
                provider_refresh_token: o,
                access_token: i,
                expires_in: d,
                expires_at: f,
                refresh_token: s,
                token_type: u,
                user: g.user
            };
            return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
                data: {
                    session: p,
                    redirectType: t.type
                },
                error: null
            }
        } catch (r) {
            if (I(r)) return {
                data: {
                    session: null,
                    redirectType: null
                },
                error: r
            };
            throw r
        }
    }
    _isImplicitGrantCallback(t) {
        return !!(t.access_token || t.error_description)
    }
    async _isPKCECallback(t) {
        const n = await Wo(this.storage, `${this.storageKey}-code-verifier`);
        return !!(t.code && n)
    }
    async signOut(t = {
        scope: "global"
    }) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(t))
    }
    async _signOut({
        scope: t
    } = {
        scope: "global"
    }) {
        return await this._useSession(async n => {
            var r;
            const {
                data: o,
                error: i
            } = n;
            if (i) return {
                error: i
            };
            const s = (r = o.session) === null || r === void 0 ? void 0 : r.access_token;
            if (s) {
                const {
                    error: a
                } = await this.admin.signOut(s, t);
                if (a && !(vx(a) && (a.status === 404 || a.status === 401 || a.status === 403))) return {
                    error: a
                }
            }
            return t !== "others" && (await this._removeSession(), await Vo(this.storage, `${this.storageKey}-code-verifier`)), {
                error: null
            }
        })
    }
    onAuthStateChange(t) {
        const n = nx(),
            r = {
                id: n,
                callback: t,
                unsubscribe: () => {
                    this._debug("#unsubscribe()", "state change callback with id removed", n), this.stateChangeEmitters.delete(n)
                }
            };
        return this._debug("#onAuthStateChange()", "registered callback with id", n), this.stateChangeEmitters.set(n, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
            this._emitInitialSession(n)
        })))(), {
            data: {
                subscription: r
            }
        }
    }
    async _emitInitialSession(t) {
        return await this._useSession(async n => {
            var r, o;
            try {
                const {
                    data: {
                        session: i
                    },
                    error: s
                } = n;
                if (s) throw s;
                await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", t, "session", i)
            } catch (i) {
                await ((o = this.stateChangeEmitters.get(t)) === null || o === void 0 ? void 0 : o.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", i), console.error(i)
            }
        })
    }
    async resetPasswordForEmail(t, n = {}) {
        let r = null,
            o = null;
        this.flowType === "pkce" && ([r, o] = await Rn(this.storage, this.storageKey, !0));
        try {
            return await D(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: t,
                    code_challenge: r,
                    code_challenge_method: o,
                    gotrue_meta_security: {
                        captcha_token: n.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: n.redirectTo
            })
        } catch (i) {
            if (I(i)) return {
                data: null,
                error: i
            };
            throw i
        }
    }
    async getUserIdentities() {
        var t;
        try {
            const {
                data: n,
                error: r
            } = await this.getUser();
            if (r) throw r;
            return {
                data: {
                    identities: (t = n.user.identities) !== null && t !== void 0 ? t : []
                },
                error: null
            }
        } catch (n) {
            if (I(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async linkIdentity(t) {
        var n;
        try {
            const {
                data: r,
                error: o
            } = await this._useSession(async i => {
                var s, a, l, u, c;
                const {
                    data: d,
                    error: f
                } = i;
                if (f) throw f;
                const w = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
                    redirectTo: (s = t.options) === null || s === void 0 ? void 0 : s.redirectTo,
                    scopes: (a = t.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0
                });
                return await D(this.fetch, "GET", w, {
                    headers: this.headers,
                    jwt: (c = (u = d.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
                })
            });
            if (o) throw o;
            return tt() && !(!((n = t.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), {
                data: {
                    provider: t.provider,
                    url: r == null ? void 0 : r.url
                },
                error: null
            }
        } catch (r) {
            if (I(r)) return {
                data: {
                    provider: t.provider,
                    url: null
                },
                error: r
            };
            throw r
        }
    }
    async unlinkIdentity(t) {
        try {
            return await this._useSession(async n => {
                var r, o;
                const {
                    data: i,
                    error: s
                } = n;
                if (s) throw s;
                return await D(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
                    headers: this.headers,
                    jwt: (o = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && o !== void 0 ? o : void 0
                })
            })
        } catch (n) {
            if (I(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async _refreshAccessToken(t) {
        const n = `#_refreshAccessToken(${t.substring(0,5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await ax(async o => (o > 0 && await sx(200 * Math.pow(2, o - 1)), this._debug(n, "refreshing attempt", o), await D(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                body: {
                    refresh_token: t
                },
                headers: this.headers,
                xform: jt
            })), (o, i) => {
                const s = 200 * Math.pow(2, o);
                return i && Xs(i) && Date.now() + s - r < Pr
            })
        } catch (r) {
            if (this._debug(n, "error", r), I(r)) return {
                data: {
                    session: null,
                    user: null
                },
                error: r
            };
            throw r
        } finally {
            this._debug(n, "end")
        }
    }
    _isValidSession(t) {
        return typeof t == "object" && t !== null && "access_token" in t && "refresh_token" in t && "expires_at" in t
    }
    async _handleProviderSignIn(t, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams
        });
        return this._debug("#_handleProviderSignIn()", "provider", t, "options", n, "url", r), tt() && !n.skipBrowserRedirect && window.location.assign(r), {
            data: {
                provider: t,
                url: r
            },
            error: null
        }
    }
    async _recoverAndRefresh() {
        var t;
        const n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
            const r = await Wo(this.storage, this.storageKey);
            if (this._debug(n, "session from storage", r), !this._isValidSession(r)) {
                this._debug(n, "session is not valid"), r !== null && await this._removeSession();
                return
            }
            const o = Math.round(Date.now() / 1e3),
                i = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) < o + dd;
            if (this._debug(n, `session has${i?"":" not"} expired with margin of ${dd}s`), i) {
                if (this.autoRefreshToken && r.refresh_token) {
                    const {
                        error: s
                    } = await this._callRefreshToken(r.refresh_token);
                    s && (console.error(s), Xs(s) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", s), await this._removeSession()))
                }
            } else await this._notifyAllSubscribers("SIGNED_IN", r)
        } catch (r) {
            this._debug(n, "error", r), console.error(r);
            return
        } finally {
            this._debug(n, "end")
        }
    }
    async _callRefreshToken(t) {
        var n, r;
        if (!t) throw new Nt;
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const o = `#_callRefreshToken(${t.substring(0,5)}...)`;
        this._debug(o, "begin");
        try {
            this.refreshingDeferred = new ds;
            const {
                data: i,
                error: s
            } = await this._refreshAccessToken(t);
            if (s) throw s;
            if (!i.session) throw new Nt;
            await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const a = {
                session: i.session,
                error: null
            };
            return this.refreshingDeferred.resolve(a), a
        } catch (i) {
            if (this._debug(o, "error", i), I(i)) {
                const s = {
                    session: null,
                    error: i
                };
                return Xs(i) || await this._removeSession(), (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(s), s
            }
            throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i), i
        } finally {
            this.refreshingDeferred = null, this._debug(o, "end")
        }
    }
    async _notifyAllSubscribers(t, n, r = !0) {
        const o = `#_notifyAllSubscribers(${t})`;
        this._debug(o, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({
                event: t,
                session: n
            });
            const i = [],
                s = Array.from(this.stateChangeEmitters.values()).map(async a => {
                    try {
                        await a.callback(t, n)
                    } catch (l) {
                        i.push(l)
                    }
                });
            if (await Promise.all(s), i.length > 0) {
                for (let a = 0; a < i.length; a += 1) console.error(i[a]);
                throw i[0]
            }
        } finally {
            this._debug(o, "end")
        }
    }
    async _saveSession(t) {
        this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0, await cm(this.storage, this.storageKey, t)
    }
    async _removeSession() {
        this._debug("#_removeSession()"), await Vo(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null)
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const t = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            t && tt() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t)
        } catch (n) {
            console.error("removing visibilitychange callback failed", n)
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        const t = setInterval(() => this._autoRefreshTokenTick(), Pr);
        this.autoRefreshTicker = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t), setTimeout(async () => {
            await this.initializePromise, await this._autoRefreshTokenTick()
        }, 0)
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const t = this.autoRefreshTicker;
        this.autoRefreshTicker = null, t && clearInterval(t)
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const t = Date.now();
                    try {
                        return await this._useSession(async n => {
                            const {
                                data: {
                                    session: r
                                }
                            } = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return
                            }
                            const o = Math.floor((r.expires_at * 1e3 - t) / Pr);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${o} ticks, a tick lasts ${Pr}ms, refresh threshold is ${yd} ticks`), o <= yd && await this._callRefreshToken(r.refresh_token)
                        })
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n)
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end")
                }
            })
        } catch (t) {
            if (t.isAcquireTimeout || t instanceof fm) this._debug("auto refresh token tick lock not available");
            else throw t
        }
    }
    async _handleVisibilityChange() {
        if (this._debug("#_handleVisibilityChange()"), !tt() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
        try {
            this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0)
        } catch (t) {
            console.error("_handleVisibilityChange", t)
        }
    }
    async _onVisibilityChanged(t) {
        const n = `#_onVisibilityChanged(${t})`;
        this._debug(n, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), t || (await this.initializePromise, await this._acquireLock(-1, async () => {
            if (document.visibilityState !== "visible") {
                this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                return
            }
            await this._recoverAndRefresh()
        }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
    }
    async _getUrlForProvider(t, n, r) {
        const o = [`provider=${encodeURIComponent(n)}`];
        if (r != null && r.redirectTo && o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && o.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
            const [i, s] = await Rn(this.storage, this.storageKey), a = new URLSearchParams({
                code_challenge: `${encodeURIComponent(i)}`,
                code_challenge_method: `${encodeURIComponent(s)}`
            });
            o.push(a.toString())
        }
        if (r != null && r.queryParams) {
            const i = new URLSearchParams(r.queryParams);
            o.push(i.toString())
        }
        return r != null && r.skipBrowserRedirect && o.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${t}?${o.join("&")}`
    }
    async _unenroll(t) {
        try {
            return await this._useSession(async n => {
                var r;
                const {
                    data: o,
                    error: i
                } = n;
                return i ? {
                    data: null,
                    error: i
                } : await D(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
                    headers: this.headers,
                    jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                })
            })
        } catch (n) {
            if (I(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async _enroll(t) {
        try {
            return await this._useSession(async n => {
                var r, o;
                const {
                    data: i,
                    error: s
                } = n;
                if (s) return {
                    data: null,
                    error: s
                };
                const a = Object.assign({
                        friendly_name: t.friendlyName,
                        factor_type: t.factorType
                    }, t.factorType === "phone" ? {
                        phone: t.phone
                    } : {
                        issuer: t.issuer
                    }),
                    {
                        data: l,
                        error: u
                    } = await D(this.fetch, "POST", `${this.url}/factors`, {
                        body: a,
                        headers: this.headers,
                        jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                return u ? {
                    data: null,
                    error: u
                } : (t.factorType === "totp" && (!((o = l == null ? void 0 : l.totp) === null || o === void 0) && o.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), {
                    data: l,
                    error: null
                })
            })
        } catch (n) {
            if (I(n)) return {
                data: null,
                error: n
            };
            throw n
        }
    }
    async _verify(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {
                        data: o,
                        error: i
                    } = n;
                    if (i) return {
                        data: null,
                        error: i
                    };
                    const {
                        data: s,
                        error: a
                    } = await D(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
                        body: {
                            code: t.code,
                            challenge_id: t.challengeId
                        },
                        headers: this.headers,
                        jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + s.expires_in
                    }, s)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s), {
                        data: s,
                        error: a
                    })
                })
            } catch (n) {
                if (I(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    async _challenge(t) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async n => {
                    var r;
                    const {
                        data: o,
                        error: i
                    } = n;
                    return i ? {
                        data: null,
                        error: i
                    } : await D(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
                        body: {
                            channel: t.channel
                        },
                        headers: this.headers,
                        jwt: (r = o == null ? void 0 : o.session) === null || r === void 0 ? void 0 : r.access_token
                    })
                })
            } catch (n) {
                if (I(n)) return {
                    data: null,
                    error: n
                };
                throw n
            }
        })
    }
    async _challengeAndVerify(t) {
        const {
            data: n,
            error: r
        } = await this._challenge({
            factorId: t.factorId
        });
        return r ? {
            data: null,
            error: r
        } : await this._verify({
            factorId: t.factorId,
            challengeId: n.id,
            code: t.code
        })
    }
    async _listFactors() {
        const {
            data: {
                user: t
            },
            error: n
        } = await this.getUser();
        if (n) return {
            data: null,
            error: n
        };
        const r = (t == null ? void 0 : t.factors) || [],
            o = r.filter(s => s.factor_type === "totp" && s.status === "verified"),
            i = r.filter(s => s.factor_type === "phone" && s.status === "verified");
        return {
            data: {
                all: r,
                totp: o,
                phone: i
            },
            error: null
        }
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async () => await this._useSession(async t => {
            var n, r;
            const {
                data: {
                    session: o
                },
                error: i
            } = t;
            if (i) return {
                data: null,
                error: i
            };
            if (!o) return {
                data: {
                    currentLevel: null,
                    nextLevel: null,
                    currentAuthenticationMethods: []
                },
                error: null
            };
            const s = this._decodeJWT(o.access_token);
            let a = null;
            s.aal && (a = s.aal);
            let l = a;
            ((r = (n = o.user.factors) === null || n === void 0 ? void 0 : n.filter(d => d.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
            const c = s.amr || [];
            return {
                data: {
                    currentLevel: a,
                    nextLevel: l,
                    currentAuthenticationMethods: c
                },
                error: null
            }
        }))
    }
}
lo.nextInstanceID = 0;
const Ix = lo;
class Lx extends Ix {
    constructor(t) {
        super(t)
    }
}
var $x = function(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? i(c.value) : o(c.value).then(a, l)
        }
        u((r = r.apply(e, t || [])).next())
    })
};
class Dx {
    constructor(t, n, r) {
        var o, i, s;
        if (this.supabaseUrl = t, this.supabaseKey = n, !t) throw new Error("supabaseUrl is required.");
        if (!n) throw new Error("supabaseKey is required.");
        const a = J_(t);
        this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${a}/auth/v1`, this.storageUrl = `${a}/storage/v1`, this.functionsUrl = `${a}/functions/v1`;
        const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
            u = {
                db: B_,
                realtime: V_,
                auth: Object.assign(Object.assign({}, W_), {
                    storageKey: l
                }),
                global: F_
            },
            c = Y_(r ?? {}, u);
        this.storageKey = (o = c.auth.storageKey) !== null && o !== void 0 ? o : "", this.headers = (i = c.global.headers) !== null && i !== void 0 ? i : {}, c.accessToken ? (this.accessToken = c.accessToken, this.auth = new Proxy({}, {
            get: (d, f) => {
                throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)
            }
        })) : this.auth = this._initSupabaseAuthClient((s = c.auth) !== null && s !== void 0 ? s : {}, this.headers, c.global.fetch), this.fetch = q_(n, this._getAccessToken.bind(this), c.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, c.realtime)), this.rest = new u_(`${a}/rest/v1`, {
            headers: this.headers,
            schema: c.db.schema,
            fetch: this.fetch
        }), c.accessToken || this._listenForAuthEvents()
    }
    get functions() {
        return new z1(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch
        })
    }
    get storage() {
        return new M_(this.storageUrl, this.headers, this.fetch)
    }
    from(t) {
        return this.rest.from(t)
    }
    schema(t) {
        return this.rest.schema(t)
    }
    rpc(t, n = {}, r = {}) {
        return this.rest.rpc(t, n, r)
    }
    channel(t, n = {
        config: {}
    }) {
        return this.realtime.channel(t, n)
    }
    getChannels() {
        return this.realtime.getChannels()
    }
    removeChannel(t) {
        return this.realtime.removeChannel(t)
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels()
    }
    _getAccessToken() {
        var t, n;
        return $x(this, void 0, void 0, function*() {
            if (this.accessToken) return yield this.accessToken();
            const {
                data: r
            } = yield this.auth.getSession();
            return (n = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && n !== void 0 ? n : null
        })
    }
    _initSupabaseAuthClient({
        autoRefreshToken: t,
        persistSession: n,
        detectSessionInUrl: r,
        storage: o,
        storageKey: i,
        flowType: s,
        lock: a,
        debug: l
    }, u, c) {
        var d;
        const f = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new Lx({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, f), u),
            storageKey: i,
            autoRefreshToken: t,
            persistSession: n,
            detectSessionInUrl: r,
            storage: o,
            flowType: s,
            lock: a,
            debug: l,
            fetch: c,
            hasCustomAuthorizationHeader: (d = "Authorization" in this.headers) !== null && d !== void 0 ? d : !1
        })
    }
    _initRealtimeClient(t) {
        return new E_(this.realtimeUrl, Object.assign(Object.assign({}, t), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, t == null ? void 0 : t.params)
        }))
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange((n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token)
        })
    }
    _handleTokenChanged(t, n, r) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : t === "SIGNED_OUT" && (this.realtime.setAuth(), n == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0)
    }
}
const Mx = (e, t, n) => new Dx(e, t, n),
    zx = "https://euaxibtuncqzdzgsozmz.supabase.co",
    Ux = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1YXhpYnR1bmNxemR6Z3Nvem16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNTg4ODgsImV4cCI6MjA1MDgzNDg4OH0.8G2sYQ30P4Zil9bJQLYr6CIkeF8lC4wk5THybuPumXU",
    hu = Mx(zx, Ux);
async function hm(e) {
    const {
        data: t,
        error: n
    } = await hu.rpc("check_key_secure", {
        key_input: e
    });
    return n ? (console.error("Error finding key:", n), null) : t.valid ? {
        key: e,
        tier: t.tier
    } : null
}
async function Fx(e, t) {
    const {
        data: n,
        error: r
    } = await hu.rpc("redeem_key_secure", {
        key_input: e,
        discord_id_input: t,
        client_ip_input: "client-ip",
        user_agent_input: navigator.userAgent
    });
    return r ? (console.error("Error redeeming key:", r), !1) : n.success
}
async function Bx(e) {
    try {
        return await new Promise(t => setTimeout(t, 500)), await hm(e)
    } catch (t) {
        return console.error("Error checking key:", t), null
    }
}
async function Wx(e, t) {
    try {
        const {
            data: n,
            error: r
        } = await hu.rpc("check_rate_limit", {
            client_ip: "client-ip"
        });
        if (r || !n) return {
            success: !1,
            message: "Too many attempts. Please try again later."
        };
        const o = await hm(e);
        return o ? await Fx(e, t) ? {
            success: !0,
            message: "Successfully redeemed",
            tier: o.tier
        } : {
            success: !1,
            message: "Error redeeming key"
        } : {
            success: !1,
            message: "Invalid key"
        }
    } catch (n) {
        return console.error("Error redeeming key:", n), {
            success: !1,
            message: n instanceof Error ? n.message : "Error processing redemption"
        }
    }
}
const Vx = [{
    title: "Enable Developer Mode",
    description: "Open Discord Settings → App Settings → Advanced → Enable Developer Mode",
    icon: b1,
    image: "https://i.imgur.com/8XnLOdv.png"
}, {
    title: "Right Click Your Profile",
    description: "Right-click your profile picture or name anywhere in Discord",
    icon: E1,
    image: "https://i.imgur.com/dxW8Jcf.png"
}, {
    title: "Copy ID",
    description: "Click 'Copy ID' at the bottom of the context menu",
    icon: Dp,
    image: "https://i.imgur.com/YvdxOPN.png"
}];

function Hx() {
    return m.jsxs("div", {
        className: "space-y-6 p-4 bg-secondary/10 rounded-xl border border-primary/10",
        children: [m.jsx("h3", {
            className: "text-lg font-semibold text-primary",
            children: "How to Find Your Discord ID"
        }), m.jsx("div", {
            className: "space-y-4",
            children: Vx.map((e, t) => m.jsxs("div", {
                className: "flex items-start gap-4 p-3 bg-secondary/20 rounded-lg transition-all hover:bg-secondary/30",
                children: [m.jsx("div", {
                    className: "flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center",
                    children: m.jsx(e.icon, {
                        className: "w-4 h-4 text-primary"
                    })
                }), m.jsxs("div", {
                    className: "flex-grow",
                    children: [m.jsx("h4", {
                        className: "text-sm font-medium mb-1",
                        children: e.title
                    }), m.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: e.description
                    })]
                })]
            }, t))
        })]
    })
}

function Gx({
    steps: e,
    currentStep: t,
    className: n
}) {
    return m.jsxs("div", {
        className: Q("relative", n),
        children: [m.jsx("div", {
            className: "absolute top-[22px] left-[10%] right-[10%] h-0.5 bg-secondary",
            children: m.jsx("div", {
                className: "h-full bg-primary transition-all duration-500 ease-out",
                style: {
                    width: `${(t-1)/(e.length-1)*100}%`
                }
            })
        }), m.jsx("div", {
            className: "relative flex justify-between px-0",
            children: e.map((r, o) => {
                const i = r.icon,
                    s = t > o + 1,
                    a = t === o + 1;
                return m.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [m.jsx("div", {
                        className: Q("w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300", s && "bg-primary scale-95", a && "bg-primary ring-4 ring-primary/20", !s && !a && "bg-secondary"),
                        children: s ? m.jsx(Lp, {
                            className: "w-5 h-5 text-primary-foreground"
                        }) : m.jsx(i, {
                            className: Q("w-5 h-5", a ? "text-primary-foreground" : "text-muted-foreground")
                        })
                    }), m.jsx("span", {
                        className: Q("mt-3 text-sm font-medium transition-colors duration-300", s || a ? "text-primary" : "text-muted-foreground"),
                        children: r.title
                    })]
                }, o)
            })
        })]
    })
}
const Kx = [{
    title: "Verify Key",
    icon: Ii
}, {
    title: "Discord Setup",
    icon: Dp
}];

function qx({
    open: e,
    onOpenChange: t
}) {
    const [n, r] = v.useState(1), [o, i] = v.useState(""), [s, a] = v.useState(""), [l, u] = v.useState(!1), [c, d] = v.useState(null), [f, w] = v.useState(null), [x, g] = v.useState(!1), [_, p] = v.useState(!1), h = () => {
        i(""), a(""), w(null), d(null), g(!1), r(1), p(!1)
    }, y = async () => {
        u(!0), d(null);
        try {
            const E = await Bx(o);
            E ? (w(E), r(2)) : d("Invalid key")
        } catch {
            d("Error checking key")
        } finally {
            u(!1)
        }
    }, k = async () => {
        if (!(!f || !s)) {
            u(!0), d(null);
            try {
                const E = await Wx(o, s);
                E.success ? (g(!0), r(3)) : d(E.message)
            } catch {
                d("Error redeeming key")
            } finally {
                u(!1)
            }
        }
    }, S = async E => {
        E.preventDefault(), n === 1 ? await y() : n === 2 && await k()
    };
    return m.jsx(j1, {
        open: e,
        onOpenChange: E => {
            E || h(), t(E)
        },
        children: m.jsxs(Fp, {
            className: "modal-content sm:max-w-md border-primary/20 bg-black/95 backdrop-blur-xl rounded-3xl",
            children: [m.jsx(Bp, {
                children: m.jsxs(Wp, {
                    className: "flex items-center gap-2 text-xl",
                    children: [m.jsx(Ii, {
                        className: "w-5 h-5"
                    }), "Redeem Your Key"]
                })
            }), !x && m.jsx(Gx, {
                steps: Kx,
                currentStep: n,
                className: "mb-8"
            }), x ? m.jsxs("div", {
                className: "py-8 text-center",
                children: [m.jsxs("div", {
                    className: "relative mb-6",
                    children: [m.jsx("div", {
                        className: "absolute inset-0 animate-ping rounded-full bg-green-500/20"
                    }), m.jsx(x1, {
                        className: "relative w-16 h-16 text-green-500 mx-auto animate-bounce"
                    })]
                }), m.jsx("p", {
                    className: "text-lg font-medium",
                    children: "Successfully redeemed!"
                }), m.jsxs("p", {
                    className: "text-sm text-muted-foreground",
                    children: ["You now have access to ", f == null ? void 0 : f.tier]
                })]
            }) : m.jsxs("form", {
                onSubmit: S,
                className: "space-y-6 py-4",
                children: [m.jsxs("div", {
                    className: "space-y-4",
                    children: [n === 1 ? m.jsxs("div", {
                        className: "space-y-4 animate-in fade-in slide-in-from-right",
                        children: [m.jsx(Xa, {
                            value: o,
                            onChange: E => i(E.target.value.toUpperCase()),
                            placeholder: "Enter your license key",
                            className: "input-glow bg-secondary border-primary/20 rounded-2xl",
                            disabled: l
                        }), m.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Enter the key you received after purchase"
                        })]
                    }) : m.jsxs("div", {
                        className: "space-y-4 animate-in fade-in slide-in-from-right",
                        children: [m.jsx(Xa, {
                            value: s,
                            onChange: E => a(E.target.value.trim()),
                            placeholder: "Enter your Discord ID",
                            className: "input-glow bg-secondary border-primary/20 rounded-2xl",
                            disabled: l
                        }), m.jsx(pt, {
                            type: "button",
                            variant: "ghost",
                            className: "w-full text-sm text-primary hover:text-primary/80",
                            onClick: () => p(!_),
                            children: _ ? "Hide Guide" : "Need help finding your Discord ID?"
                        }), _ && m.jsx("div", {
                            className: "animate-in fade-in slide-in-from-top",
                            children: m.jsx(Hx, {})
                        })]
                    }), c && m.jsxs("div", {
                        className: "flex items-center gap-2 text-sm text-destructive animate-in fade-in slide-in-from-top",
                        children: [m.jsx(k1, {
                            className: "w-4 h-4"
                        }), c]
                    }), f && m.jsxs("div", {
                        className: "p-4 rounded-lg bg-primary/10 text-sm animate-in fade-in slide-in-from-bottom",
                        children: ["You are redeeming the ", m.jsx("span", {
                            className: "font-semibold",
                            children: f.tier
                        }), " tier"]
                    })]
                }), m.jsxs(pt, {
                    type: "submit",
                    className: "w-full glossy-button rounded-2xl group",
                    disabled: l || (n === 1 ? !o : !s),
                    children: [l ? m.jsx(S1, {
                        className: "w-4 h-4 mr-2 animate-spin"
                    }) : m.jsx(Ii, {
                        className: "w-4 h-4 mr-2"
                    }), n === 1 ? "Verify Key" : "Confirm Redemption", m.jsx(Ip, {
                        className: "w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    })]
                })]
            })]
        })
    })
}

function Qx() {
    const [e, t] = v.useState(!1), n = r => {
        var o;
        (o = document.getElementById(r)) == null || o.scrollIntoView({
            behavior: "smooth"
        })
    };
    return m.jsxs("nav", {
        className: "fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border",
        children: [m.jsxs("div", {
            className: "container mx-auto px-4 h-16 flex items-center justify-between",
            children: [m.jsx("span", {
                className: "text-xl font-bold text-primary glow-text",
                children: "OpenNova Admin"
            }), m.jsxs("div", {
                className: "flex gap-4",
                children: [m.jsx(pt, {
                    variant: "ghost",
                    className: "rounded-full",
                    onClick: () => n("home"),
                    children: "Home"
                }), m.jsx(pt, {
                    variant: "ghost",
                    className: "rounded-full",
                    onClick: () => n("testimonials"),
                    children: "Testimonials"
                }), m.jsx(pt, {
                    variant: "ghost",
                    className: "rounded-full",
                    onClick: () => n("pricing"),
                    children: "Downloads"
                })]
            })]
        }), m.jsx(qx, {
            open: e,
            onOpenChange: t
        })]
    })
}

function pu({
    className: e = "",
    quantity: t = 30,
    staticity: n = 50,
    ease: r = 50,
    refresh: o = !1
}) {
    const i = v.useRef(null),
        s = v.useRef(null),
        a = v.useRef(null),
        l = v.useRef([]),
        u = v.useRef({
            x: 0,
            y: 0
        }),
        c = v.useRef({
            w: 0,
            h: 0
        }),
        d = typeof window < "u" ? window.devicePixelRatio : 1;
    v.useEffect(() => (i.current && (a.current = i.current.getContext("2d")), f(), p(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f)
    }), []), v.useEffect(() => {
        f()
    }, [o]);
    const f = () => {
            w(), g()
        },
        w = () => {
            s.current && i.current && a.current && (l.current = [], c.current.w = s.current.offsetWidth, c.current.h = s.current.offsetHeight, i.current.width = c.current.w * d, i.current.height = c.current.h * d, i.current.style.width = `${c.current.w}px`, i.current.style.height = `${c.current.h}px`, a.current.scale(d, d))
        },
        x = () => {
            const h = Math.floor(Math.random() * c.current.w),
                y = Math.floor(Math.random() * c.current.h),
                k = 0,
                S = 0,
                E = Math.floor(Math.random() * 2) + 1,
                C = 0,
                P = parseFloat((Math.random() * .6 + .1).toFixed(1)),
                L = (Math.random() - .5) * .2,
                R = -Math.random() * .6 - .3,
                le = .1 + Math.random() * 4;
            return {
                x: h,
                y,
                translateX: k,
                translateY: S,
                size: E,
                alpha: C,
                targetAlpha: P,
                dx: L,
                dy: R,
                magnetism: le
            }
        },
        g = () => {
            l.current = [];
            for (let h = 0; h < t; h++) l.current.push(x())
        },
        _ = (h, y = !1) => {
            if (a.current) {
                const {
                    x: k,
                    y: S,
                    translateX: E,
                    translateY: C,
                    size: P,
                    alpha: L
                } = h;
                if (a.current.translate(E, C), a.current.beginPath(), a.current.arc(k, S, P, 0, 2 * Math.PI), a.current.fillStyle = `rgba(255, 255, 255, ${L})`, a.current.fill(), a.current.setTransform(d, 0, 0, d, 0, 0), !y) return;
                S + C < -100 && (h.y = c.current.h + 100, h.x = Math.floor(Math.random() * c.current.w)), h.x += h.dx, h.y += h.dy, h.translateX += (u.current.x / (n / h.magnetism) - h.translateX) / r, h.translateY += (u.current.y / (n / h.magnetism) - h.translateY) / r, h.alpha += (h.targetAlpha - h.alpha) / r
            }
        },
        p = () => {
            a.current && (a.current.clearRect(0, 0, c.current.w, c.current.h), l.current.forEach(h => _(h, !0))), window.requestAnimationFrame(p)
        };
    return m.jsx("div", {
        className: e,
        ref: s,
        "aria-hidden": "true",
        children: m.jsx("canvas", {
            ref: i
        })
    })
}

function Jx() {
    const e = () => {
        var t;
        (t = document.getElementById("pricing")) == null || t.scrollIntoView({
            behavior: "smooth"
        })
    };
    return m.jsxs("section", {
        className: "min-h-[90vh] relative flex items-center justify-center px-4",
        id: "home",
        children: [m.jsx("div", {
            className: "absolute inset-0 grid-background"
        }), m.jsx("div", {
            className: "absolute inset-0",
            children: m.jsx(pu, {
                className: "absolute inset-0",
                quantity: 50
            })
        }), m.jsx("div", {
            className: "absolute inset-0 overflow-hidden",
            children: m.jsxs("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]",
                children: [m.jsx("div", {
                    className: "absolute inset-0 bg-primary/20 rounded-full blur-[120px] animate-pulse"
                }), m.jsx("div", {
                    className: "absolute inset-0 bg-primary/10 rounded-full blur-[150px] animate-pulse delay-1000"
                })]
            })
        }), m.jsxs("div", {
            className: "container mx-auto text-center relative z-10",
            children: [m.jsx("h1", {
                className: "text-8xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-primary/50 glow-text",
                children: "OpenNova Admin"
            }), m.jsx("p", {
                className: "text-xl text-muted-foreground max-w-2xl mx-auto mb-12",
                children: "Nova Admin's source made open!"
            }), m.jsxs("div", {
                className: "flex gap-6 justify-center",
                children: [m.jsxs(pt, {
                    className: "glossy-button px-8 py-6 text-lg rounded-full group relative overflow-hidden hover:pr-16 transition-all duration-300",
                    onClick: e,
                    children: [m.jsx("span", {
                        className: "relative z-10",
                        children: "Get Started"
                    }), m.jsx(Ip, {
                        className: "w-6 h-6 absolute right-10 top-1/2 -translate-y-1/2 opacity-0 -translate-x-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    })]
                }), m.jsx(pt, {
                    variant: "outline",
                    className: "px-8 py-6 text-lg rounded-full border-primary/20 hover:bg-primary/10 transition-colors glow-border",
                    onClick: () => {
                        var t;
                        return (t = document.getElementById("features")) == null ? void 0 : t.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    children: "Learn More"
                })]
            })]
        })]
    })
}
const Yx = [{
    title: "Any Game Support",
    description: "Its literally the source code...",
    icon: $p
}, {
    title: "Hyperion Bypass",
    description: "What would even Hyperion have do do with this???",
    icon: C1
}, {
    title: "Instant Access",
    description: "Yeah you can download it instantly right on this page.",
    icon: zp
}];

function Xx() {
    return m.jsx("section", {
        className: "py-24 px-4 relative",
        children: m.jsx("div", {
            className: "container mx-auto",
            children: m.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: Yx.map((e, t) => m.jsxs("div", {
                    className: "p-8 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-primary/10",
                    children: [m.jsx(e.icon, {
                        className: "w-12 h-12 text-primary mb-6"
                    }), m.jsx("h3", {
                        className: "text-xl font-semibold mb-3",
                        children: e.title
                    }), m.jsx("p", {
                        className: "text-muted-foreground",
                        children: e.description
                    })]
                }, t))
            })
        })
    })
}
const Zx = [{
    number: "69420",
    label: "Active Users",
    description: "customers using OpenNova Admin daily",
    icon: N1
}, {
    number: "ALL",
    label: "Games Supported",
    description: "compatible games",
    icon: $p
}, {
    number: "100%",
    label: "Satisfaction Rate",
    description: "from our skids",
    icon: P1
}, {
    number: "ONE GAZILLION",
    label: "Scripts Executed",
    description: "successful script executions daily",
    icon: zp
}];

function ek() {
    return m.jsxs("section", {
        className: "py-24 px-4 relative overflow-hidden",
        children: [m.jsxs("div", {
            className: "absolute inset-0",
            children: [m.jsx(pu, {
                className: "absolute inset-0",
                quantity: 50
            }), m.jsx("div", {
                className: "absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30 animate-pulse"
            }), m.jsx("div", {
                className: "absolute inset-0 bg-grid-white/5",
                style: {
                    backgroundSize: "30px 30px"
                }
            })]
        }), m.jsxs("div", {
            className: "container mx-auto relative z-10",
            children: [m.jsxs("h2", {
                className: "text-4xl font-bold text-center mb-4",
                children: ["Trusted by ", m.jsx("span", {
                    className: "text-primary glow-text",
                    children: "skids"
                })]
            }), m.jsx("p", {
                className: "text-center text-muted-foreground mb-16 max-w-2xl mx-auto",
                children: "Experience the best, experience Windows XP."
            }), m.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: Zx.map((e, t) => m.jsxs("div", {
                    className: "p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20",
                    children: [m.jsx("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: m.jsx("div", {
                            className: "p-2 rounded-xl bg-primary/20 backdrop-blur-sm",
                            children: m.jsx(e.icon, {
                                className: "w-6 h-6 text-primary"
                            })
                        })
                    }), m.jsx("div", {
                        className: "text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/80",
                        children: e.number
                    }), m.jsx("div", {
                        className: "text-lg font-semibold mb-1",
                        children: e.label
                    }), m.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: e.description
                    })]
                }, t))
            })]
        })]
    })
}
var mu = "Avatar",
    [tk, aS] = ns(mu),
    [nk, pm] = tk(mu),
    mm = v.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            ...r
        } = e, [o, i] = v.useState("idle");
        return m.jsx(nk, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: m.jsx(fe.span, {
                ...r,
                ref: t
            })
        })
    });
mm.displayName = mu;
var vm = "AvatarImage",
    gm = v.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...i
        } = e, s = pm(vm, n), a = rk(r, i.referrerPolicy), l = Qt(u => {
            o(u), s.onImageLoadingStatusChange(u)
        });
        return yn(() => {
            a !== "idle" && l(a)
        }, [a, l]), a === "loaded" ? m.jsx(fe.img, {
            ...i,
            ref: t,
            src: r
        }) : null
    });
gm.displayName = vm;
var ym = "AvatarFallback",
    wm = v.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: r,
            ...o
        } = e, i = pm(ym, n), [s, a] = v.useState(r === void 0);
        return v.useEffect(() => {
            if (r !== void 0) {
                const l = window.setTimeout(() => a(!0), r);
                return () => window.clearTimeout(l)
            }
        }, [r]), s && i.imageLoadingStatus !== "loaded" ? m.jsx(fe.span, {
            ...o,
            ref: t
        }) : null
    });
wm.displayName = ym;

function rk(e, t) {
    const [n, r] = v.useState("idle");
    return yn(() => {
        if (!e) {
            r("error");
            return
        }
        let o = !0;
        const i = new window.Image,
            s = a => () => {
                o && r(a)
            };
        return r("loading"), i.onload = s("loaded"), i.onerror = s("error"), i.src = e, t && (i.referrerPolicy = t), () => {
            o = !1
        }
    }, [e, t]), n
}
var _m = mm,
    xm = gm,
    km = wm;
const Sm = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(_m, {
    ref: n,
    className: Q("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
Sm.displayName = _m.displayName;
const ok = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(xm, {
    ref: n,
    className: Q("aspect-square h-full w-full", e),
    ...t
}));
ok.displayName = xm.displayName;
const ik = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(km, {
    ref: n,
    className: Q("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
ik.displayName = km.displayName;
const vu = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: Q("rounded-xl border bg-card text-card-foreground shadow", e),
    ...t
}));
vu.displayName = "Card";
const sk = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: Q("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
sk.displayName = "CardHeader";
const ak = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("h3", {
    ref: n,
    className: Q("font-semibold leading-none tracking-tight", e),
    ...t
}));
ak.displayName = "CardTitle";
const lk = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("p", {
    ref: n,
    className: Q("text-sm text-muted-foreground", e),
    ...t
}));
lk.displayName = "CardDescription";
const uk = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: Q("p-6 pt-0", e),
    ...t
}));
uk.displayName = "CardContent";
const ck = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: Q("flex items-center p-6 pt-0", e),
    ...t
}));
ck.displayName = "CardFooter";

function dk({
    name: e,
    role: t,
    content: n,
    image: r
}) {
    return m.jsxs(vu, {
        className: "p-6 bg-secondary/50 backdrop-blur-sm border-primary/10 rounded-2xl slide-in",
        children: [m.jsxs("div", {
            className: "flex items-center gap-4 mb-4",
            children: [m.jsx(Sm, {
                className: "w-12 h-12 border-2 border-primary/20",
                children: m.jsx("img", {
                    src: r,
                    alt: e,
                    className: "object-cover"
                })
            }), m.jsxs("div", {
                children: [m.jsx("h4", {
                    className: "font-bold text-lg",
                    children: e
                }), m.jsx("p", {
                    className: "text-sm text-primary/80",
                    children: t
                })]
            })]
        }), m.jsx("p", {
            className: "text-muted-foreground leading-relaxed",
            children: n
        })]
    })
}
const fk = [{
    name: "XxEPICGAMER69420xX",
    role: "Epic Gamer",
    content: "ty for the source +vouch",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces"
}, {
    name: "metro",
    role: "Nova Admin Co-owner",
    content: "Get this nigga bro\nAnd he’s on our dick since he knows his reputation has the value of a sperm dump",
    image: "https://cdn.discordapp.com/avatars/1257729658829668386/97bec47cf49c03c29be23af6ce21bd54.webp?size=256"
}, {
    name: "1arize",
    role: "Rich Guy with connections",
    content: "guys i cannot leggally open that file\ni signed a legal agreement\nill get sued\ngg",
    image: "https://cdn.discordapp.com/avatars/1233313723423260732/06d3d9dc3528dff2e18f9d9e292ef470.webp?size=256"
}];

function hk() {
    return m.jsx("section", {
        className: "py-24 px-4 section-bg",
        id: "testimonials",
        children: m.jsxs("div", {
            className: "container mx-auto",
            children: [m.jsx("h2", {
                className: "text-4xl font-bold text-center mb-4 glow-text",
                children: "What Our s Say"
            }), m.jsx("p", {
                className: "text-center text-muted-foreground mb-16 max-w-2xl mx-auto",
                children: "Join thousands of satisfied skids who trust OpenNova Admin for skidding needs"
            }), m.jsx("div", {
                className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
                children: fk.map((e, t) => m.jsx(dk, {
                    ...e
                }, t))
            })]
        })
    })
}

function pk({
    title: e,
    price: t,
    features: n,
    productId: r,
    recommended: o,
    renderFeature: i
}) {
    return m.jsxs(vu, {
        className: `p-6 relative slide-in overflow-hidden ${o?"border-primary":"border-border"}`,
        children: [m.jsx("div", {
            className: "absolute inset-0 pointer-events-none",
            children: m.jsx("div", {
                className: "absolute inset-[-100%] glint-effect"
            })
        }), o && m.jsx("span", {
            className: "absolute -top-3 right-4 bg-primary px-4 py-1 rounded-full text-sm font-medium",
            children: "Recommended"
        }), m.jsx("h3", {
            className: "text-2xl font-bold mb-2",
            children: e
        }), m.jsx("div", {
            className: "mb-6",
            children: m.jsxs("span", {
                className: "text-4xl font-black",
                children: ["$", t]
            })
        }), m.jsx("ul", {
            className: "space-y-3 mb-6",
            children: n.map((s, a) => m.jsx("li", {
                className: "flex items-center gap-2",
                children: i(s)
            }, a))
        }), m.jsx("button", {
            "data-sellix-product": r,
            type: "button",
            className: `w-full py-2 px-4 rounded-full relative overflow-hidden ${o?"glossy-button hover:scale-105 transition-transform":"bg-secondary hover:bg-secondary/80 transition-colors"}`,
            children: m.jsx("span", {
                className: "relative z-10",
                children: "Download"
            })
        })]
    })
}
const mk = {
    basic: {
        title: "Latest v?",
        price: "0",
        productId: "latest",
        features: [{
            name: "Latest Release",
            included: !0
        }, {
            name: "Cleaned and verified scripts",
            included: !1
        }, {
            name: "Removed authentication systems",
            included: !1
        }]
    },
    enhanced: {
        title: "Recommended v1.3.1",
        price: "0",
        productId: "archive",
        features: [{
            name: "Cleaned and verified scripts",
            included: !0
        }, {
            name: "Removed authentication systems",
            included: !0
        }, {
            name: "Latest Release",
            included: !1
        }]
    }
};

function vk({
    included: e
}) {
    return e ? m.jsx(Lp, {
        className: "w-4 h-4 text-primary"
    }) : m.jsx(Mp, {
        className: "w-4 h-4 text-muted-foreground/50"
    })
}

function gk() {
    return m.jsxs("section", {
        className: "py-24 px-4 relative overflow-hidden",
        id: "pricing",
        children: [m.jsxs("div", {
            className: "absolute inset-0",
            children: [m.jsx(pu, {
                className: "absolute inset-0",
                quantity: 100
            }), m.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"
            }), m.jsx("div", {
                className: "absolute inset-0 bg-grid-white/5",
                style: {
                    backgroundSize: "30px 30px"
                }
            })]
        }), m.jsxs("div", {
            className: "container mx-auto relative z-10",
            children: [m.jsx("h2", {
                className: "text-4xl font-bold text-center mb-4 slide-in glow-text",
                children: "Choose Your Version"
            }), m.jsx("p", {
                className: "text-center text-muted-foreground mb-16 max-w-2xl mx-auto",
                children: "Select the perfect version for your needs and skid the heck out of OpenNova Admin"
            }), m.jsx("div", {
                className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                children: Object.entries(mk).map(([e, t]) => m.jsx(pk, {
                    ...t,
                    recommended: e === "enhanced",
                    renderFeature: n => m.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [m.jsx(vk, {
                            included: n.included
                        }), m.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children: n.name
                        })]
                    })
                }, e))
            })]
        })]
    })
}

function yk(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = v.createContext(s),
            l = n.length;
        n = [...n, s];

        function u(d) {
            const {
                scope: f,
                children: w,
                ...x
            } = d, g = (f == null ? void 0 : f[e][l]) || a, _ = v.useMemo(() => x, Object.values(x));
            return m.jsx(g.Provider, {
                value: _,
                children: w
            })
        }

        function c(d, f) {
            const w = (f == null ? void 0 : f[e][l]) || a,
                x = v.useContext(w);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider", [u, c]
    }
    const o = () => {
        const i = n.map(s => v.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return v.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, wk(o, ...t)]
}

function wk(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }, {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function _k(e) {
    const t = e + "CollectionProvider",
        [n, r] = yk(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = w => {
            const {
                scope: x,
                children: g
            } = w, _ = ee.useRef(null), p = ee.useRef(new Map).current;
            return m.jsx(o, {
                scope: x,
                itemMap: p,
                collectionRef: _,
                children: g
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = ee.forwardRef((w, x) => {
            const {
                scope: g,
                children: _
            } = w, p = i(a, g), h = Xe(x, p.collectionRef);
            return m.jsx(ar, {
                ref: h,
                children: _
            })
        });
    l.displayName = a;
    const u = e + "CollectionItemSlot",
        c = "data-radix-collection-item",
        d = ee.forwardRef((w, x) => {
            const {
                scope: g,
                children: _,
                ...p
            } = w, h = ee.useRef(null), y = Xe(x, h), k = i(u, g);
            return ee.useEffect(() => (k.itemMap.set(h, {
                ref: h,
                ...p
            }), () => void k.itemMap.delete(h))), m.jsx(ar, {
                [c]: "",
                ref: y,
                children: _
            })
        });
    d.displayName = u;

    function f(w) {
        const x = i(e + "CollectionConsumer", w);
        return ee.useCallback(() => {
            const _ = x.collectionRef.current;
            if (!_) return [];
            const p = Array.from(_.querySelectorAll(`[${c}]`));
            return Array.from(x.itemMap.values()).sort((k, S) => p.indexOf(k.ref.current) - p.indexOf(S.ref.current))
        }, [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: l,
        ItemSlot: d
    }, f, r]
}
var gu = "Collapsible",
    [xk, Em] = ns(gu),
    [kk, yu] = xk(gu),
    bm = v.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: o,
            disabled: i,
            onOpenChange: s,
            ...a
        } = e, [l = !1, u] = rs({
            prop: r,
            defaultProp: o,
            onChange: s
        });
        return m.jsx(kk, {
            scope: n,
            disabled: i,
            contentId: Br(),
            open: l,
            onOpenToggle: v.useCallback(() => u(c => !c), [u]),
            children: m.jsx(fe.div, {
                "data-state": _u(l),
                "data-disabled": i ? "" : void 0,
                ...a,
                ref: t
            })
        })
    });
bm.displayName = gu;
var Cm = "CollapsibleTrigger",
    Pm = v.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...r
        } = e, o = yu(Cm, n);
        return m.jsx(fe.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": _u(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: at(e.onClick, o.onOpenToggle)
        })
    });
Pm.displayName = Cm;
var wu = "CollapsibleContent",
    Nm = v.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = yu(wu, e.__scopeCollapsible);
        return m.jsx(mo, {
            present: n || o.open,
            children: ({
                present: i
            }) => m.jsx(Sk, {
                ...r,
                ref: t,
                present: i
            })
        })
    });
Nm.displayName = wu;
var Sk = v.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: r,
        children: o,
        ...i
    } = e, s = yu(wu, n), [a, l] = v.useState(r), u = v.useRef(null), c = Xe(t, u), d = v.useRef(0), f = d.current, w = v.useRef(0), x = w.current, g = s.open || a, _ = v.useRef(g), p = v.useRef();
    return v.useEffect(() => {
        const h = requestAnimationFrame(() => _.current = !1);
        return () => cancelAnimationFrame(h)
    }, []), yn(() => {
        const h = u.current;
        if (h) {
            p.current = p.current || {
                transitionDuration: h.style.transitionDuration,
                animationName: h.style.animationName
            }, h.style.transitionDuration = "0s", h.style.animationName = "none";
            const y = h.getBoundingClientRect();
            d.current = y.height, w.current = y.width, _.current || (h.style.transitionDuration = p.current.transitionDuration, h.style.animationName = p.current.animationName), l(r)
        }
    }, [s.open, r]), m.jsx(fe.div, {
        "data-state": _u(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        id: s.contentId,
        hidden: !g,
        ...i,
        ref: c,
        style: {
            "--radix-collapsible-content-height": f ? `${f}px` : void 0,
            "--radix-collapsible-content-width": x ? `${x}px` : void 0,
            ...e.style
        },
        children: g && o
    })
});

function _u(e) {
    return e ? "open" : "closed"
}
var Ek = bm,
    bk = Pm,
    Ck = Nm,
    Pk = v.createContext(void 0);

function Nk(e) {
    const t = v.useContext(Pk);
    return e || t || "ltr"
}
var xt = "Accordion",
    jk = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [xu, Rk, Tk] = _k(xt),
    [fs, lS] = ns(xt, [Tk, Em]),
    ku = Em(),
    jm = ee.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e, o = r, i = r;
        return m.jsx(xu.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? m.jsx(Lk, {
                ...i,
                ref: t
            }) : m.jsx(Ik, {
                ...o,
                ref: t
            })
        })
    });
jm.displayName = xt;
var [Rm, Ok] = fs(xt), [Tm, Ak] = fs(xt, {
    collapsible: !1
}), Ik = ee.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: i = !1,
        ...s
    } = e, [a, l] = rs({
        prop: n,
        defaultProp: r,
        onChange: o
    });
    return m.jsx(Rm, {
        scope: e.__scopeAccordion,
        value: a ? [a] : [],
        onItemOpen: l,
        onItemClose: ee.useCallback(() => i && l(""), [i, l]),
        children: m.jsx(Tm, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: m.jsx(Om, {
                ...s,
                ref: t
            })
        })
    })
}), Lk = ee.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        ...i
    } = e, [s = [], a] = rs({
        prop: n,
        defaultProp: r,
        onChange: o
    }), l = ee.useCallback(c => a((d = []) => [...d, c]), [a]), u = ee.useCallback(c => a((d = []) => d.filter(f => f !== c)), [a]);
    return m.jsx(Rm, {
        scope: e.__scopeAccordion,
        value: s,
        onItemOpen: l,
        onItemClose: u,
        children: m.jsx(Tm, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: m.jsx(Om, {
                ...i,
                ref: t
            })
        })
    })
}), [$k, hs] = fs(xt), Om = ee.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: i = "vertical",
        ...s
    } = e, a = ee.useRef(null), l = Xe(a, t), u = Rk(n), d = Nk(o) === "ltr", f = at(e.onKeyDown, w => {
        var P;
        if (!jk.includes(w.key)) return;
        const x = w.target,
            g = u().filter(L => {
                var R;
                return !((R = L.ref.current) != null && R.disabled)
            }),
            _ = g.findIndex(L => L.ref.current === x),
            p = g.length;
        if (_ === -1) return;
        w.preventDefault();
        let h = _;
        const y = 0,
            k = p - 1,
            S = () => {
                h = _ + 1, h > k && (h = y)
            },
            E = () => {
                h = _ - 1, h < y && (h = k)
            };
        switch (w.key) {
            case "Home":
                h = y;
                break;
            case "End":
                h = k;
                break;
            case "ArrowRight":
                i === "horizontal" && (d ? S() : E());
                break;
            case "ArrowDown":
                i === "vertical" && S();
                break;
            case "ArrowLeft":
                i === "horizontal" && (d ? E() : S());
                break;
            case "ArrowUp":
                i === "vertical" && E();
                break
        }
        const C = h % p;
        (P = g[C].ref.current) == null || P.focus()
    });
    return m.jsx($k, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: m.jsx(xu.Slot, {
            scope: n,
            children: m.jsx(fe.div, {
                ...s,
                "data-orientation": i,
                ref: l,
                onKeyDown: r ? void 0 : f
            })
        })
    })
}), $i = "AccordionItem", [Dk, Su] = fs($i), Am = ee.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        value: r,
        ...o
    } = e, i = hs($i, n), s = Ok($i, n), a = ku(n), l = Br(), u = r && s.value.includes(r) || !1, c = i.disabled || e.disabled;
    return m.jsx(Dk, {
        scope: n,
        open: u,
        disabled: c,
        triggerId: l,
        children: m.jsx(Ek, {
            "data-orientation": i.orientation,
            "data-state": zm(u),
            ...a,
            ...o,
            ref: t,
            disabled: c,
            open: u,
            onOpenChange: d => {
                d ? s.onItemOpen(r) : s.onItemClose(r)
            }
        })
    })
});
Am.displayName = $i;
var Im = "AccordionHeader",
    Lm = ee.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = hs(xt, n), i = Su(Im, n);
        return m.jsx(fe.h3, {
            "data-orientation": o.orientation,
            "data-state": zm(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...r,
            ref: t
        })
    });
Lm.displayName = Im;
var sl = "AccordionTrigger",
    $m = ee.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = hs(xt, n), i = Su(sl, n), s = Ak(sl, n), a = ku(n);
        return m.jsx(xu.ItemSlot, {
            scope: n,
            children: m.jsx(bk, {
                "aria-disabled": i.open && !s.collapsible || void 0,
                "data-orientation": o.orientation,
                id: i.triggerId,
                ...a,
                ...r,
                ref: t
            })
        })
    });
$m.displayName = sl;
var Dm = "AccordionContent",
    Mm = ee.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = hs(xt, n), i = Su(Dm, n), s = ku(n);
        return m.jsx(Ck, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": o.orientation,
            ...s,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
Mm.displayName = Dm;

function zm(e) {
    return e ? "open" : "closed"
}
var Mk = jm,
    zk = Am,
    Uk = Lm,
    Um = $m,
    Fm = Mm;

function Fk(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
var Bk = ["color"],
    Wk = v.forwardRef(function(e, t) {
        var n = e.color,
            r = n === void 0 ? "currentColor" : n,
            o = Fk(e, Bk);
        return v.createElement("svg", Object.assign({
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o, {
            ref: t
        }), v.createElement("path", {
            d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
            fill: r,
            fillRule: "evenodd",
            clipRule: "evenodd"
        }))
    });
const Vk = Mk,
    Bm = v.forwardRef(({
        className: e,
        ...t
    }, n) => m.jsx(zk, {
        ref: n,
        className: Q("border-b", e),
        ...t
    }));
Bm.displayName = "AccordionItem";
const Wm = v.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => m.jsx(Uk, {
    className: "flex",
    children: m.jsxs(Um, {
        ref: r,
        className: Q("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, m.jsx(Wk, {
            className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
        })]
    })
}));
Wm.displayName = Um.displayName;
const Vm = v.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => m.jsx(Fm, {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: m.jsx("div", {
        className: Q("pb-4 pt-0", e),
        children: t
    })
}));
Vm.displayName = Fm.displayName;
const Hk = [{
    question: "What is OpenNova Admin?",
    answer: "OpenNova Admin is an Open Sourced version of Nova Admin from \"https://nova.remium.wtf/\"."
}, {
    question: "Do I have to download anything?",
    answer: "Obviously... Yes the source and Roblox Studio if you haven't got it installed."
}, {
    question: "How does this work?",
    answer: "You just download it and open in Roblox Studio and then you're free to do anything you'd like."
}, {
    question: "Is this paid?",
    answer: "Nope! Its completly free you can just download it from this page."
}, {
    question: "Is this illegal?",
    answer: "IDK... I dont think they got a patent for this or have it copyrighted, eighterway i dont think they could even do that..."
}, {
    question: "Is this against ROBLOX TOS?",
    answer: "Hell nah."
}, {
    question: "Does the new Hyperion update affect this?",
    answer: "why would it"
}];

function Gk() {
    return m.jsx("section", {
        className: "py-24 px-4",
        id: "faq",
        children: m.jsxs("div", {
            className: "container mx-auto max-w-3xl",
            children: [m.jsx("h2", {
                className: "text-4xl font-bold text-center mb-16",
                children: "Frequently asked questions"
            }), m.jsx(Vk, {
                type: "single",
                collapsible: !0,
                className: "space-y-4",
                children: Hk.map((e, t) => m.jsxs(Bm, {
                    value: `item-${t}`,
                    className: "bg-secondary/20 backdrop-blur-sm border border-primary/10 rounded-lg px-6",
                    children: [m.jsx(Wm, {
                        className: "text-lg font-medium py-4",
                        children: e.question
                    }), m.jsx(Vm, {
                        className: "text-muted-foreground pb-4",
                        children: e.answer
                    })]
                }, t))
            })]
        })
    })
}

function Kk() {
    return m.jsxs("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [m.jsx(Qx, {}), m.jsxs("main", {
            className: "relative",
            children: [m.jsx("div", {
                className: "section-transition",
                children: m.jsx(Jx, {})
            }), m.jsx("div", {
                className: "section-transition",
                children: m.jsx(ek, {})
            }), m.jsx("div", {
                className: "section-transition",
                children: m.jsx(Xx, {})
            }), m.jsx("div", {
                className: "section-transition",
                children: m.jsx(hk, {})
            }), m.jsx("div", {
                className: "section-transition",
                children: m.jsx(gk, {})
            }), m.jsx("div", {
                className: "section-transition",
                children: m.jsx(Gk, {})
            })]
        }), m.jsx("footer", {
            className: "py-8 border-t border-primary/10",
            children: m.jsx("div", {
                className: "container mx-auto px-4 text-center text-sm text-muted-foreground",
                children: "Reb0rnEnder © 2025. All rights reserved."
            })
        })]
    })
}

function qk() {
    return m.jsx(i0, {
        children: m.jsx(n0, {
            children: m.jsx(Vh, {
                path: "/",
                element: m.jsx(Kk, {})
            })
        })
    })
}
Lh(document.getElementById("root")).render(m.jsx(v.StrictMode, {
    children: m.jsx(qk, {})
}));
export {
    _d as g
};
