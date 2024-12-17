import {
    b as Ha
} from "./chunk-VQIXZYP3.js";
import {
    $ as na,
    $a as fe,
    $b as Na,
    A as Qs,
    Aa as la,
    Ab as Ma,
    B as Fn,
    Ba as da,
    Bb as xa,
    C as Pt,
    Ca as ua,
    Cb as L,
    D as Hr,
    Da as pa,
    Db as qt,
    E as Ys,
    Ea as ha,
    Eb as Gt,
    F as Ks,
    Fa as $t,
    Fb as Pa,
    Fc as Wa,
    G as Xs,
    Ga as Di,
    Gb as Sa,
    Gc as Jn,
    H as Xe,
    Ha as ot,
    Hb as Ea,
    Hc as Wi,
    I as Js,
    Ia as fa,
    Ib as Vn,
    J as xe,
    Ja as ma,
    Jb as Ni,
    K as he,
    Ka as Hn,
    Kb as ji,
    L as Zs,
    La as I,
    Lb as Fi,
    M as J,
    Ma as b,
    Mb as Ia,
    Mc as Va,
    N as Te,
    Na as Li,
    Nb as eo,
    Nc as Vi,
    O as ea,
    Oa as ga,
    Ob as qn,
    P as ge,
    Pa as ya,
    Pb as Gn,
    Pc as qa,
    Q as Wr,
    Qa as ln,
    Qb as Ta,
    R as ee,
    Ra as ne,
    Rb as zi,
    S as T,
    Sa as ba,
    Sb as Qt,
    T as Vr,
    Ta as dn,
    Tb as ka,
    U as ta,
    Ua as Jr,
    Ub as Ra,
    Uc as Ga,
    V as zn,
    Va as Et,
    Vb as Aa,
    W as D,
    Wa as qe,
    Wb as K,
    X as ke,
    Xa as va,
    Xb as un,
    Y as Be,
    Ya as Zr,
    Yb as Da,
    Z as Un,
    Za as q,
    Zb as La,
    _ as Bt,
    _a as Ca,
    _b as Ui,
    a as $s,
    aa as Bn,
    ab as S,
    ac as ja,
    b as Hs,
    ba as it,
    bb as It,
    bc as le,
    c as Mt,
    ca as sn,
    cb as _a,
    cc as Fa,
    d as Fr,
    da as We,
    db as Le,
    dc as Qn,
    e as zr,
    ea as Ve,
    eb as p,
    ec as za,
    f as ut,
    fa as St,
    fb as u,
    fc as Ua,
    g as ze,
    ga as rt,
    gb as O,
    gc as Yn,
    h as xt,
    ha as ia,
    hb as Re,
    hc as to,
    i as be,
    ia as qr,
    ib as Ae,
    ic as Bi,
    j as $,
    ja as Gr,
    jb as Ht,
    jc as pn,
    k as jn,
    ka as Me,
    kb as pt,
    kc as ht,
    l as Ws,
    la as Pe,
    lb as ce,
    lc as $i,
    m as Vs,
    ma as Qr,
    mb as W,
    mc as Hi,
    n as _e,
    na as ra,
    nb as bt,
    nc as te,
    o as B,
    oa as De,
    ob as st,
    oc as Ba,
    p as Ai,
    pa as oa,
    pb as Wt,
    pc as ie,
    q as He,
    qa as Yr,
    qb as wa,
    qc as Kn,
    r as Ur,
    ra as sa,
    rb as Vt,
    rc as Xn,
    s as qs,
    sa as V,
    sb as H,
    sc as $a,
    t as Br,
    ta as $n,
    tb as j,
    tc as X,
    u as Ue,
    ua as Kr,
    ub as F,
    uc as N,
    v as rn,
    va as Xr,
    vb as Wn,
    vc as E,
    w as Gs,
    wa as an,
    wb as h,
    wc as G,
    x as Ut,
    xa as cn,
    xb as Je,
    xc as no,
    y as $r,
    ya as aa,
    yb as vt,
    yc as io,
    z as on,
    za as ca,
    zb as Oa,
    zc as de
} from "./chunk-XV6AYHCQ.js";
import {
    a as C,
    b as ae,
    c as Nn,
    d as Us,
    e as Bs,
    f as Ri
} from "./chunk-EQDQRRRY.js";
var Yl = Us((ys, bs) => {
    "use strict";
    (function(i, e) {
        typeof ys == "object" && typeof bs < "u" ? bs.exports = e() : typeof define == "function" && define.amd ? define(e) : (i = i || self, i.SanityImageUrlBuilder = e())
    })(ys, function() {
        function i() {
            return i = Object.assign || function(_) {
                for (var M = 1; M < arguments.length; M++) {
                    var P = arguments[M];
                    for (var y in P) Object.prototype.hasOwnProperty.call(P, y) && (_[y] = P[y])
                }
                return _
            }, i.apply(this, arguments)
        }

        function e(_, M) {
            if (_) {
                if (typeof _ == "string") return t(_, M);
                var P = Object.prototype.toString.call(_).slice(8, -1);
                if (P === "Object" && _.constructor && (P = _.constructor.name), P === "Map" || P === "Set") return Array.from(_);
                if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return t(_, M)
            }
        }

        function t(_, M) {
            (M == null || M > _.length) && (M = _.length);
            for (var P = 0, y = new Array(M); P < M; P++) y[P] = _[P];
            return y
        }

        function n(_, M) {
            var P = typeof Symbol < "u" && _[Symbol.iterator] || _["@@iterator"];
            if (P) return (P = P.call(_)).next.bind(P);
            if (Array.isArray(_) || (P = e(_)) || M && _ && typeof _.length == "number") {
                P && (_ = P);
                var y = 0;
                return function() {
                    return y >= _.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: _[y++]
                    }
                }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function o(_) {
            var M = _.split("-"),
                P = M[1],
                y = M[2],
                U = M[3];
            if (!P || !y || !U) throw new Error("Malformed asset _ref '" + _ + `'. Expected an id like "` + r + '".');
            var k = y.split("x"),
                oe = k[0],
                ve = k[1],
                Fe = +oe,
                Ee = +ve,
                Oe = isFinite(Fe) && isFinite(Ee);
            if (!Oe) throw new Error("Malformed asset _ref '" + _ + `'. Expected an id like "` + r + '".');
            return {
                id: P,
                width: Fe,
                height: Ee,
                format: U
            }
        }
        var s = function(M) {
                var P = M;
                return P ? typeof P._ref == "string" : !1
            },
            a = function(M) {
                var P = M;
                return P ? typeof P._id == "string" : !1
            },
            c = function(M) {
                var P = M;
                return P && P.asset ? typeof P.asset.url == "string" : !1
            };

        function l(_) {
            if (!_) return null;
            var M;
            if (typeof _ == "string" && d(_)) M = {
                asset: {
                    _ref: f(_)
                }
            };
            else if (typeof _ == "string") M = {
                asset: {
                    _ref: _
                }
            };
            else if (s(_)) M = {
                asset: _
            };
            else if (a(_)) M = {
                asset: {
                    _ref: _._id || ""
                }
            };
            else if (c(_)) M = {
                asset: {
                    _ref: f(_.asset.url)
                }
            };
            else if (typeof _.asset == "object") M = i({}, _);
            else return null;
            var P = _;
            return P.crop && (M.crop = P.crop), P.hotspot && (M.hotspot = P.hotspot), m(M)
        }

        function d(_) {
            return /^https?:\/\//.test("" + _)
        }

        function f(_) {
            var M = _.split("/").slice(-1);
            return ("image-" + M[0]).replace(/\.([a-z]+)$/, "-$1")
        }

        function m(_) {
            if (_.crop && _.hotspot) return _;
            var M = i({}, _);
            return M.crop || (M.crop = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            }), M.hotspot || (M.hotspot = {
                x: .5,
                y: .5,
                height: 1,
                width: 1
            }), M
        }
        var g = [
            ["width", "w"],
            ["height", "h"],
            ["format", "fm"],
            ["download", "dl"],
            ["blur", "blur"],
            ["sharpen", "sharp"],
            ["invert", "invert"],
            ["orientation", "or"],
            ["minHeight", "min-h"],
            ["maxHeight", "max-h"],
            ["minWidth", "min-w"],
            ["maxWidth", "max-w"],
            ["quality", "q"],
            ["fit", "fit"],
            ["crop", "crop"],
            ["saturation", "sat"],
            ["auto", "auto"],
            ["dpr", "dpr"],
            ["pad", "pad"]
        ];

        function w(_) {
            var M = i({}, _ || {}),
                P = M.source;
            delete M.source;
            var y = l(P);
            if (!y) throw new Error("Unable to resolve image URL from source (" + JSON.stringify(P) + ")");
            var U = y.asset._ref || y.asset._id || "",
                k = o(U),
                oe = Math.round(y.crop.left * k.width),
                ve = Math.round(y.crop.top * k.height),
                Fe = {
                    left: oe,
                    top: ve,
                    width: Math.round(k.width - y.crop.right * k.width - oe),
                    height: Math.round(k.height - y.crop.bottom * k.height - ve)
                },
                Ee = y.hotspot.height * k.height / 2,
                Oe = y.hotspot.width * k.width / 2,
                Ke = y.hotspot.x * k.width,
                Ie = y.hotspot.y * k.height,
                dt = {
                    left: Ke - Oe,
                    top: Ie - Ee,
                    right: Ke + Oe,
                    bottom: Ie + Ee
                };
            return M.rect || M.focalPoint || M.ignoreImageParams || M.crop || (M = i({}, M, x({
                crop: Fe,
                hotspot: dt
            }, M))), v(i({}, M, {
                asset: k
            }))
        }

        function v(_) {
            var M = (_.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                P = _.asset.id + "-" + _.asset.width + "x" + _.asset.height + "." + _.asset.format,
                y = M + "/images/" + _.projectId + "/" + _.dataset + "/" + P,
                U = [];
            if (_.rect) {
                var k = _.rect,
                    oe = k.left,
                    ve = k.top,
                    Fe = k.width,
                    Ee = k.height,
                    Oe = oe !== 0 || ve !== 0 || Ee !== _.asset.height || Fe !== _.asset.width;
                Oe && U.push("rect=" + oe + "," + ve + "," + Fe + "," + Ee)
            }
            _.bg && U.push("bg=" + _.bg), _.focalPoint && (U.push("fp-x=" + _.focalPoint.x), U.push("fp-y=" + _.focalPoint.y));
            var Ke = [_.flipHorizontal && "h", _.flipVertical && "v"].filter(Boolean).join("");
            return Ke && U.push("flip=" + Ke), g.forEach(function(Ie) {
                var dt = Ie[0],
                    zt = Ie[1];
                typeof _[dt] < "u" ? U.push(zt + "=" + encodeURIComponent(_[dt])) : typeof _[zt] < "u" && U.push(zt + "=" + encodeURIComponent(_[zt]))
            }), U.length === 0 ? y : y + "?" + U.join("&")
        }

        function x(_, M) {
            var P, y = M.width,
                U = M.height;
            if (!(y && U)) return {
                width: y,
                height: U,
                rect: _.crop
            };
            var k = _.crop,
                oe = _.hotspot,
                ve = y / U,
                Fe = k.width / k.height;
            if (Fe > ve) {
                var Ee = Math.round(k.height),
                    Oe = Math.round(Ee * ve),
                    Ke = Math.max(0, Math.round(k.top)),
                    Ie = Math.round((oe.right - oe.left) / 2 + oe.left),
                    dt = Math.max(0, Math.round(Ie - Oe / 2));
                dt < k.left ? dt = k.left : dt + Oe > k.left + k.width && (dt = k.left + k.width - Oe), P = {
                    left: dt,
                    top: Ke,
                    width: Oe,
                    height: Ee
                }
            } else {
                var zt = k.width,
                    ki = Math.round(zt / ve),
                    su = Math.max(0, Math.round(k.left)),
                    au = Math.round((oe.bottom - oe.top) / 2 + oe.top),
                    Ln = Math.max(0, Math.round(au - ki / 2));
                Ln < k.top ? Ln = k.top : Ln + ki > k.top + k.height && (Ln = k.top + k.height - ki), P = {
                    left: su,
                    top: Ln,
                    width: zt,
                    height: ki
                }
            }
            return {
                width: y,
                height: U,
                rect: P
            }
        }
        var R = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            z = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            re = ["format"];

        function pe(_) {
            return _ && "config" in _ ? typeof _.config == "function" : !1
        }

        function Ce(_) {
            return _ && "clientConfig" in _ ? typeof _.clientConfig == "object" : !1
        }

        function gt(_) {
            for (var M = g, P = n(M), y; !(y = P()).done;) {
                var U = y.value,
                    k = U[0],
                    oe = U[1];
                if (_ === k || _ === oe) return k
            }
            return _
        }

        function yt(_) {
            if (pe(_)) {
                var M = _.config(),
                    P = M.apiHost,
                    y = M.projectId,
                    U = M.dataset,
                    k = P || "https://api.sanity.io";
                return new je(null, {
                    baseUrl: k.replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: y,
                    dataset: U
                })
            }
            var oe = _;
            if (Ce(oe)) {
                var ve = oe.clientConfig,
                    Fe = ve.apiHost,
                    Ee = ve.projectId,
                    Oe = ve.dataset,
                    Ke = Fe || "https://api.sanity.io";
                return new je(null, {
                    baseUrl: Ke.replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: Ee,
                    dataset: Oe
                })
            }
            return new je(null, _)
        }
        var je = function() {
            function _(P, y) {
                this.options = void 0, this.options = P ? i({}, P.options || {}, y || {}) : i({}, y || {})
            }
            var M = _.prototype;
            return M.withOptions = function(y) {
                var U = y.baseUrl || this.options.baseUrl,
                    k = {
                        baseUrl: U
                    };
                for (var oe in y)
                    if (y.hasOwnProperty(oe)) {
                        var ve = gt(oe);
                        k[ve] = y[oe]
                    }
                return new _(this, i({
                    baseUrl: U
                }, k))
            }, M.image = function(y) {
                return this.withOptions({
                    source: y
                })
            }, M.dataset = function(y) {
                return this.withOptions({
                    dataset: y
                })
            }, M.projectId = function(y) {
                return this.withOptions({
                    projectId: y
                })
            }, M.bg = function(y) {
                return this.withOptions({
                    bg: y
                })
            }, M.dpr = function(y) {
                return this.withOptions(y && y !== 1 ? {
                    dpr: y
                } : {})
            }, M.width = function(y) {
                return this.withOptions({
                    width: y
                })
            }, M.height = function(y) {
                return this.withOptions({
                    height: y
                })
            }, M.focalPoint = function(y, U) {
                return this.withOptions({
                    focalPoint: {
                        x: y,
                        y: U
                    }
                })
            }, M.maxWidth = function(y) {
                return this.withOptions({
                    maxWidth: y
                })
            }, M.minWidth = function(y) {
                return this.withOptions({
                    minWidth: y
                })
            }, M.maxHeight = function(y) {
                return this.withOptions({
                    maxHeight: y
                })
            }, M.minHeight = function(y) {
                return this.withOptions({
                    minHeight: y
                })
            }, M.size = function(y, U) {
                return this.withOptions({
                    width: y,
                    height: U
                })
            }, M.blur = function(y) {
                return this.withOptions({
                    blur: y
                })
            }, M.sharpen = function(y) {
                return this.withOptions({
                    sharpen: y
                })
            }, M.rect = function(y, U, k, oe) {
                return this.withOptions({
                    rect: {
                        left: y,
                        top: U,
                        width: k,
                        height: oe
                    }
                })
            }, M.format = function(y) {
                return this.withOptions({
                    format: y
                })
            }, M.invert = function(y) {
                return this.withOptions({
                    invert: y
                })
            }, M.orientation = function(y) {
                return this.withOptions({
                    orientation: y
                })
            }, M.quality = function(y) {
                return this.withOptions({
                    quality: y
                })
            }, M.forceDownload = function(y) {
                return this.withOptions({
                    download: y
                })
            }, M.flipHorizontal = function() {
                return this.withOptions({
                    flipHorizontal: !0
                })
            }, M.flipVertical = function() {
                return this.withOptions({
                    flipVertical: !0
                })
            }, M.ignoreImageParams = function() {
                return this.withOptions({
                    ignoreImageParams: !0
                })
            }, M.fit = function(y) {
                if (R.indexOf(y) === -1) throw new Error('Invalid fit mode "' + y + '"');
                return this.withOptions({
                    fit: y
                })
            }, M.crop = function(y) {
                if (z.indexOf(y) === -1) throw new Error('Invalid crop mode "' + y + '"');
                return this.withOptions({
                    crop: y
                })
            }, M.saturation = function(y) {
                return this.withOptions({
                    saturation: y
                })
            }, M.auto = function(y) {
                if (re.indexOf(y) === -1) throw new Error('Invalid auto mode "' + y + '"');
                return this.withOptions({
                    auto: y
                })
            }, M.pad = function(y) {
                return this.withOptions({
                    pad: y
                })
            }, M.url = function() {
                return w(this.options)
            }, M.toString = function() {
                return this.url()
            }, _
        }();
        return yt
    })
});
var Id = Us((Rs, As) => {
    "use strict";
    (function(i, e) {
        typeof Rs == "object" && typeof As < "u" ? As.exports = e() : typeof define == "function" && define.amd ? define(e) : i.vhtml = e()
    })(Rs, function() {
        "use strict";
        var i = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
            e = function(c) {
                return String(c).replace(/[&<>"']/g, function(l) {
                    return "&" + t[l] + ";"
                })
            },
            t = {
                "&": "amp",
                "<": "lt",
                ">": "gt",
                '"': "quot",
                "'": "apos"
            },
            n = "dangerouslySetInnerHTML",
            r = {
                className: "class",
                htmlFor: "for"
            },
            o = {};

        function s(a, c) {
            var l = [],
                d = "";
            c = c || {};
            for (var f = arguments.length; f-- > 2;) l.push(arguments[f]);
            if (typeof a == "function") return c.children = l.reverse(), a(c);
            if (a) {
                if (d += "<" + a, c)
                    for (var m in c) c[m] !== !1 && c[m] != null && m !== n && (d += " " + (r[m] ? r[m] : e(m)) + '="' + e(c[m]) + '"');
                d += ">"
            }
            if (i.indexOf(a) === -1) {
                if (c[n]) d += c[n].__html;
                else
                    for (; l.length;) {
                        var g = l.pop();
                        if (g)
                            if (g.pop)
                                for (var w = g.length; w--;) l.push(g[w]);
                            else d += o[g] === !0 ? g : e(g)
                    }
                d += a ? "</" + a + ">" : ""
            }
            return o[d] = !0, d
        }
        return s
    })
});
var Gi = class i {
    constructor(e) {
        this.normalizedNames = new Map, this.lazyUpdate = null, e ? typeof e == "string" ? this.lazyInit = () => {
            this.headers = new Map, e.split(`
`).forEach(t => {
                let n = t.indexOf(":");
                if (n > 0) {
                    let r = t.slice(0, n),
                        o = r.toLowerCase(),
                        s = t.slice(n + 1).trim();
                    this.maybeSetNormalizedName(r, o), this.headers.has(o) ? this.headers.get(o).push(s) : this.headers.set(o, [s])
                }
            })
        } : typeof Headers < "u" && e instanceof Headers ? (this.headers = new Map, e.forEach((t, n) => {
            this.setHeaderEntries(n, t)
        })) : this.lazyInit = () => {
            this.headers = new Map, Object.entries(e).forEach(([t, n]) => {
                this.setHeaderEntries(t, n)
            })
        } : this.headers = new Map
    }
    has(e) {
        return this.init(), this.headers.has(e.toLowerCase())
    }
    get(e) {
        this.init();
        let t = this.headers.get(e.toLowerCase());
        return t && t.length > 0 ? t[0] : null
    }
    keys() {
        return this.init(), Array.from(this.normalizedNames.values())
    }
    getAll(e) {
        return this.init(), this.headers.get(e.toLowerCase()) || null
    }
    append(e, t) {
        return this.clone({
            name: e,
            value: t,
            op: "a"
        })
    }
    set(e, t) {
        return this.clone({
            name: e,
            value: t,
            op: "s"
        })
    }
    delete(e, t) {
        return this.clone({
            name: e,
            value: t,
            op: "d"
        })
    }
    maybeSetNormalizedName(e, t) {
        this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
    }
    init() {
        this.lazyInit && (this.lazyInit instanceof i ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), this.lazyUpdate = null))
    }
    copyFrom(e) {
        e.init(), Array.from(e.headers.keys()).forEach(t => {
            this.headers.set(t, e.headers.get(t)), this.normalizedNames.set(t, e.normalizedNames.get(t))
        })
    }
    clone(e) {
        let t = new i;
        return t.lazyInit = this.lazyInit && this.lazyInit instanceof i ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([e]), t
    }
    applyUpdate(e) {
        let t = e.name.toLowerCase();
        switch (e.op) {
            case "a":
            case "s":
                let n = e.value;
                if (typeof n == "string" && (n = [n]), n.length === 0) return;
                this.maybeSetNormalizedName(e.name, t);
                let r = (e.op === "a" ? this.headers.get(t) : void 0) || [];
                r.push(...n), this.headers.set(t, r);
                break;
            case "d":
                let o = e.value;
                if (!o) this.headers.delete(t), this.normalizedNames.delete(t);
                else {
                    let s = this.headers.get(t);
                    if (!s) return;
                    s = s.filter(a => o.indexOf(a) === -1), s.length === 0 ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, s)
                }
                break
        }
    }
    setHeaderEntries(e, t) {
        let n = (Array.isArray(t) ? t : [t]).map(o => o.toString()),
            r = e.toLowerCase();
        this.headers.set(r, n), this.maybeSetNormalizedName(e, r)
    }
    forEach(e) {
        this.init(), Array.from(this.normalizedNames.keys()).forEach(t => e(this.normalizedNames.get(t), this.headers.get(t)))
    }
};
var tc = function(i) {
        return i[i.Sent = 0] = "Sent", i[i.UploadProgress = 1] = "UploadProgress", i[i.ResponseHeader = 2] = "ResponseHeader", i[i.DownloadProgress = 3] = "DownloadProgress", i[i.Response = 4] = "Response", i[i.User = 5] = "User", i
    }(tc || {}),
    ro = class {
        constructor(e, t = 200, n = "OK") {
            this.headers = e.headers || new Gi, this.status = e.status !== void 0 ? e.status : t, this.statusText = e.statusText || n, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
        }
    };
var Qi = class i extends ro {
    constructor(e = {}) {
        super(e), this.type = tc.Response, this.body = e.body !== void 0 ? e.body : null
    }
    clone(e = {}) {
        return new i({
            body: e.body !== void 0 ? e.body : this.body,
            headers: e.headers || this.headers,
            status: e.status !== void 0 ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0
        })
    }
};
var lu = new ge("");
var du = new ge(""),
    Qa = "b",
    Ya = "h",
    Ka = "s",
    Xa = "st",
    Ja = "u",
    Za = "rt",
    qi = new ge(""),
    uu = ["GET", "HEAD"];

function pu(i, e) {
    let g = T(qi),
        {
            isCacheActive: t
        } = g,
        n = Nn(g, ["isCacheActive"]),
        {
            transferCache: r,
            method: o
        } = i;
    if (!t || r === !1 || o === "POST" && !n.includePostRequests && !r || o !== "POST" && !uu.includes(o) || !n.includeRequestsWithAuthHeaders && hu(i) || n.filter ? .(i) === !1) return e(i);
    let s = T(Xr),
        a = T(du, {
            optional: !0
        }),
        c = Kn(T(V));
    if (a && !c) throw new he(2803, !1);
    let l = c && a ? yu(i.url, a) : i.url,
        d = mu(i, l),
        f = s.get(d, null),
        m = n.includeHeaders;
    if (typeof r == "object" && r.includeHeaders && (m = r.includeHeaders), f) {
        let {
            [Qa]: w, [Za]: v, [Ya]: x, [Ka]: R, [Xa]: z, [Ja]: re
        } = f, pe = w;
        switch (v) {
            case "arraybuffer":
                pe = new TextEncoder().encode(w).buffer;
                break;
            case "blob":
                pe = new Blob([w]);
                break
        }
        let Ce = new Gi(x);
        return $(new Qi({
            body: pe,
            headers: Ce,
            status: R,
            statusText: z,
            url: re
        }))
    }
    return e(i).pipe(xe(w => {
        w instanceof Qi && c && s.set(d, {
            [Qa]: w.body,
            [Ya]: fu(w.headers, m),
            [Ka]: w.status,
            [Xa]: w.statusText,
            [Ja]: l,
            [Za]: i.responseType
        })
    }))
}

function hu(i) {
    return i.headers.has("authorization") || i.headers.has("proxy-authorization")
}

function fu(i, e) {
    if (!e) return {};
    let t = {};
    for (let n of e) {
        let r = i.getAll(n);
        r !== null && (t[n] = r)
    }
    return t
}

function ec(i) {
    return [...i.keys()].sort().map(e => `${e}=${i.getAll(e)}`).join("&")
}

function mu(i, e) {
    let {
        params: t,
        method: n,
        responseType: r
    } = i, o = ec(t), s = i.serializeBody();
    s instanceof URLSearchParams ? s = ec(s) : typeof s != "string" && (s = "");
    let a = [n, r, e, s, o].join("|"),
        c = gu(a);
    return c
}

function gu(i) {
    let e = 0;
    for (let t of i) e = Math.imul(31, e) + t.charCodeAt(0) << 0;
    return e += 2147483648, e.toString()
}

function nc(i) {
    return [{
        provide: qi,
        useFactory: () => (dn("NgHttpTransferCache"), C({
            isCacheActive: !0
        }, i))
    }, {
        provide: lu,
        useValue: pu,
        multi: !0,
        deps: [Xr, qi]
    }, {
        provide: qn,
        multi: !0,
        useFactory: () => {
            let e = T(Gn),
                t = T(qi);
            return () => {
                Ta(e).then(() => {
                    t.isCacheActive = !1
                })
            }
        }
    }]
}

function yu(i, e) {
    let t = new URL(i, "resolve://").origin,
        n = e[t];
    return n ? i.replace(t, n) : i
}
var ao = class extends ja {
        constructor() {
            super(...arguments), this.supportsDOMEvents = !0
        }
    },
    co = class i extends ao {
        static makeCurrent() {
            Na(new i)
        }
        onAndCancel(e, t, n) {
            return e.addEventListener(t, n), () => {
                e.removeEventListener(t, n)
            }
        }
        dispatchEvent(e, t) {
            e.dispatchEvent(t)
        }
        remove(e) {
            e.remove()
        }
        createElement(e, t) {
            return t = t || this.getDefaultDocument(), t.createElement(e)
        }
        createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
        }
        getDefaultDocument() {
            return document
        }
        isElementNode(e) {
            return e.nodeType === Node.ELEMENT_NODE
        }
        isShadowRoot(e) {
            return e instanceof DocumentFragment
        }
        getGlobalEventTarget(e, t) {
            return t === "window" ? window : t === "document" ? e : t === "body" ? e.body : null
        }
        getBaseHref(e) {
            let t = Cu();
            return t == null ? null : _u(t)
        }
        resetBaseElement() {
            Zn = null
        }
        getUserAgent() {
            return window.navigator.userAgent
        }
        getCookie(e) {
            return to(document.cookie, e)
        }
    },
    Zn = null;

function Cu() {
    return Zn = Zn || document.querySelector("base"), Zn ? Zn.getAttribute("href") : null
}

function _u(i) {
    return new URL(i, document.baseURI).pathname
}
var wu = (() => {
        let e = class e {
            build() {
                return new XMLHttpRequest
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    Yi = new ge(""),
    oc = (() => {
        let e = class e {
            constructor(n, r) {
                this._zone = r, this._eventNameToPlugin = new Map, n.forEach(o => {
                    o.manager = this
                }), this._plugins = n.slice().reverse()
            }
            addEventListener(n, r, o) {
                return this._findPluginFor(r).addEventListener(n, r, o)
            }
            getZone() {
                return this._zone
            }
            _findPluginFor(n) {
                let r = this._eventNameToPlugin.get(n);
                if (r) return r;
                if (r = this._plugins.find(s => s.supports(n)), !r) throw new he(5101, !1);
                return this._eventNameToPlugin.set(n, r), r
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(Yi), ee(Pe))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    ei = class {
        constructor(e) {
            this._doc = e
        }
    },
    oo = "ng-app-id",
    sc = (() => {
        let e = class e {
            constructor(n, r, o, s = {}) {
                this.doc = n, this.appId = r, this.nonce = o, this.platformId = s, this.styleRef = new Map, this.hostNodes = new Set, this.styleNodesInDOM = this.collectServerRenderedStyles(), this.platformIsServer = Kn(s), this.resetHostNodes()
            }
            addStyles(n) {
                for (let r of n) this.changeUsageCount(r, 1) === 1 && this.onStyleAdded(r)
            }
            removeStyles(n) {
                for (let r of n) this.changeUsageCount(r, -1) <= 0 && this.onStyleRemoved(r)
            }
            ngOnDestroy() {
                let n = this.styleNodesInDOM;
                n && (n.forEach(r => r.remove()), n.clear());
                for (let r of this.getAllStyles()) this.onStyleRemoved(r);
                this.resetHostNodes()
            }
            addHost(n) {
                this.hostNodes.add(n);
                for (let r of this.getAllStyles()) this.addStyleToHost(n, r)
            }
            removeHost(n) {
                this.hostNodes.delete(n)
            }
            getAllStyles() {
                return this.styleRef.keys()
            }
            onStyleAdded(n) {
                for (let r of this.hostNodes) this.addStyleToHost(r, n)
            }
            onStyleRemoved(n) {
                let r = this.styleRef;
                r.get(n) ? .elements ? .forEach(o => o.remove()), r.delete(n)
            }
            collectServerRenderedStyles() {
                let n = this.doc.head ? .querySelectorAll(`style[${oo}="${this.appId}"]`);
                if (n ? .length) {
                    let r = new Map;
                    return n.forEach(o => {
                        o.textContent != null && r.set(o.textContent, o)
                    }), r
                }
                return null
            }
            changeUsageCount(n, r) {
                let o = this.styleRef;
                if (o.has(n)) {
                    let s = o.get(n);
                    return s.usage += r, s.usage
                }
                return o.set(n, {
                    usage: r,
                    elements: []
                }), r
            }
            getStyleElement(n, r) {
                let o = this.styleNodesInDOM,
                    s = o ? .get(r);
                if (s ? .parentNode === n) return o.delete(r), s.removeAttribute(oo), s; {
                    let a = this.doc.createElement("style");
                    return this.nonce && a.setAttribute("nonce", this.nonce), a.textContent = r, this.platformIsServer && a.setAttribute(oo, this.appId), n.appendChild(a), a
                }
            }
            addStyleToHost(n, r) {
                let o = this.getStyleElement(n, r),
                    s = this.styleRef,
                    a = s.get(r) ? .elements;
                a ? a.push(o) : s.set(r, {
                    elements: [o],
                    usage: 1
                })
            }
            resetHostNodes() {
                let n = this.hostNodes;
                n.clear(), n.add(this.doc.head)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le), ee(Yr), ee(Kr, 8), ee(V))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    so = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/Math/MathML"
    },
    po = /%COMP%/g,
    ac = "%COMP%",
    Ou = `_nghost-${ac}`,
    Mu = `_ngcontent-${ac}`,
    xu = !0,
    Pu = new ge("", {
        providedIn: "root",
        factory: () => xu
    });

function Su(i) {
    return Mu.replace(po, i)
}

function Eu(i) {
    return Ou.replace(po, i)
}

function cc(i, e) {
    return e.map(t => t.replace(po, i))
}
var hn = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c, l, d = null) {
                this.eventManager = n, this.sharedStylesHost = r, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = a, this.platformId = c, this.ngZone = l, this.nonce = d, this.rendererByCompId = new Map, this.platformIsServer = Kn(c), this.defaultRenderer = new ti(n, a, l, this.platformIsServer)
            }
            createRenderer(n, r) {
                if (!n || !r) return this.defaultRenderer;
                this.platformIsServer && r.encapsulation === zn.ShadowDom && (r = ae(C({}, r), {
                    encapsulation: zn.Emulated
                }));
                let o = this.getOrCreateRenderer(n, r);
                return o instanceof Ki ? o.applyToHost(n) : o instanceof ni && o.applyStyles(), o
            }
            getOrCreateRenderer(n, r) {
                let o = this.rendererByCompId,
                    s = o.get(r.id);
                if (!s) {
                    let a = this.doc,
                        c = this.ngZone,
                        l = this.eventManager,
                        d = this.sharedStylesHost,
                        f = this.removeStylesOnCompDestroy,
                        m = this.platformIsServer;
                    switch (r.encapsulation) {
                        case zn.Emulated:
                            s = new Ki(l, d, r, this.appId, f, a, c, m);
                            break;
                        case zn.ShadowDom:
                            return new lo(l, d, n, r, a, c, this.nonce, m);
                        default:
                            s = new ni(l, d, r, f, a, c, m);
                            break
                    }
                    o.set(r.id, s)
                }
                return s
            }
            ngOnDestroy() {
                this.rendererByCompId.clear()
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(oc), ee(sc), ee(Yr), ee(Pu), ee(le), ee(V), ee(Pe), ee(Kr))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    ti = class {
        constructor(e, t, n, r) {
            this.eventManager = e, this.doc = t, this.ngZone = n, this.platformIsServer = r, this.data = Object.create(null), this.throwOnSyntheticProps = !0, this.destroyNode = null
        }
        destroy() {}
        createElement(e, t) {
            return t ? this.doc.createElementNS(so[t] || t, e) : this.doc.createElement(e)
        }
        createComment(e) {
            return this.doc.createComment(e)
        }
        createText(e) {
            return this.doc.createTextNode(e)
        }
        appendChild(e, t) {
            (ic(e) ? e.content : e).appendChild(t)
        }
        insertBefore(e, t, n) {
            e && (ic(e) ? e.content : e).insertBefore(t, n)
        }
        removeChild(e, t) {
            t.remove()
        }
        selectRootElement(e, t) {
            let n = typeof e == "string" ? this.doc.querySelector(e) : e;
            if (!n) throw new he(-5104, !1);
            return t || (n.textContent = ""), n
        }
        parentNode(e) {
            return e.parentNode
        }
        nextSibling(e) {
            return e.nextSibling
        }
        setAttribute(e, t, n, r) {
            if (r) {
                t = r + ":" + t;
                let o = so[r];
                o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n)
            } else e.setAttribute(t, n)
        }
        removeAttribute(e, t, n) {
            if (n) {
                let r = so[n];
                r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`)
            } else e.removeAttribute(t)
        }
        addClass(e, t) {
            e.classList.add(t)
        }
        removeClass(e, t) {
            e.classList.remove(t)
        }
        setStyle(e, t, n, r) {
            r & (Hn.DashCase | Hn.Important) ? e.style.setProperty(t, n, r & Hn.Important ? "important" : "") : e.style[t] = n
        }
        removeStyle(e, t, n) {
            n & Hn.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
        }
        setProperty(e, t, n) {
            e != null && (e[t] = n)
        }
        setValue(e, t) {
            e.nodeValue = t
        }
        listen(e, t, n) {
            if (typeof e == "string" && (e = Ui().getGlobalEventTarget(this.doc, e), !e)) throw new Error(`Unsupported event target ${e} for event ${t}`);
            return this.eventManager.addEventListener(e, t, this.decoratePreventDefault(n))
        }
        decoratePreventDefault(e) {
            return t => {
                if (t === "__ngUnwrap__") return e;
                (this.platformIsServer ? this.ngZone.runGuarded(() => e(t)) : e(t)) === !1 && t.preventDefault()
            }
        }
    };

function ic(i) {
    return i.tagName === "TEMPLATE" && i.content !== void 0
}
var lo = class extends ti {
        constructor(e, t, n, r, o, s, a, c) {
            super(e, o, s, c), this.sharedStylesHost = t, this.hostEl = n, this.shadowRoot = n.attachShadow({
                mode: "open"
            }), this.sharedStylesHost.addHost(this.shadowRoot);
            let l = cc(r.id, r.styles);
            for (let d of l) {
                let f = document.createElement("style");
                a && f.setAttribute("nonce", a), f.textContent = d, this.shadowRoot.appendChild(f)
            }
        }
        nodeOrShadowRoot(e) {
            return e === this.hostEl ? this.shadowRoot : e
        }
        appendChild(e, t) {
            return super.appendChild(this.nodeOrShadowRoot(e), t)
        }
        insertBefore(e, t, n) {
            return super.insertBefore(this.nodeOrShadowRoot(e), t, n)
        }
        removeChild(e, t) {
            return super.removeChild(null, t)
        }
        parentNode(e) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
        }
        destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
        }
    },
    ni = class extends ti {
        constructor(e, t, n, r, o, s, a, c) {
            super(e, o, s, a), this.sharedStylesHost = t, this.removeStylesOnCompDestroy = r, this.styles = c ? cc(c, n.styles) : n.styles
        }
        applyStyles() {
            this.sharedStylesHost.addStyles(this.styles)
        }
        destroy() {
            this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles)
        }
    },
    Ki = class extends ni {
        constructor(e, t, n, r, o, s, a, c) {
            let l = r + "-" + n.id;
            super(e, t, n, o, s, a, c, l), this.contentAttr = Su(l), this.hostAttr = Eu(l)
        }
        applyToHost(e) {
            this.applyStyles(), this.setAttribute(e, this.hostAttr, "")
        }
        createElement(e, t) {
            let n = super.createElement(e, t);
            return super.setAttribute(n, this.contentAttr, ""), n
        }
    },
    Iu = (() => {
        let e = class e extends ei {
            constructor(n) {
                super(n)
            }
            supports(n) {
                return !0
            }
            addEventListener(n, r, o) {
                return n.addEventListener(r, o, !1), () => this.removeEventListener(n, r, o)
            }
            removeEventListener(n, r, o) {
                return n.removeEventListener(r, o)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    Tu = (() => {
        let e = class e extends ei {
            constructor(n) {
                super(n), this.delegate = T(Ra, {
                    optional: !0
                })
            }
            supports(n) {
                return this.delegate ? this.delegate.supports(n) : !1
            }
            addEventListener(n, r, o) {
                return this.delegate.addEventListener(n, r, o)
            }
            removeEventListener(n, r, o) {
                return this.delegate.removeEventListener(n, r, o)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    rc = ["alt", "control", "meta", "shift"],
    ku = {
        "\b": "Backspace",
        "	": "Tab",
        "\x7F": "Delete",
        "\x1B": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS"
    },
    Ru = {
        alt: i => i.altKey,
        control: i => i.ctrlKey,
        meta: i => i.metaKey,
        shift: i => i.shiftKey
    },
    Au = (() => {
        let e = class e extends ei {
            constructor(n) {
                super(n)
            }
            supports(n) {
                return e.parseEventName(n) != null
            }
            addEventListener(n, r, o) {
                let s = e.parseEventName(r),
                    a = e.eventCallback(s.fullKey, o, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(() => Ui().onAndCancel(n, s.domEventName, a))
            }
            static parseEventName(n) {
                let r = n.toLowerCase().split("."),
                    o = r.shift();
                if (r.length === 0 || !(o === "keydown" || o === "keyup")) return null;
                let s = e._normalizeKey(r.pop()),
                    a = "",
                    c = r.indexOf("code");
                if (c > -1 && (r.splice(c, 1), a = "code."), rc.forEach(d => {
                        let f = r.indexOf(d);
                        f > -1 && (r.splice(f, 1), a += d + ".")
                    }), a += s, r.length != 0 || s.length === 0) return null;
                let l = {};
                return l.domEventName = o, l.fullKey = a, l
            }
            static matchEventFullKeyCode(n, r) {
                let o = ku[n.key] || n.key,
                    s = "";
                return r.indexOf("code.") > -1 && (o = n.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), rc.forEach(a => {
                    if (a !== o) {
                        let c = Ru[a];
                        c(n) && (s += a + ".")
                    }
                }), s += o, s === r)
            }
            static eventCallback(n, r, o) {
                return s => {
                    e.matchEventFullKeyCode(s, n) && o.runGuarded(() => r(s))
                }
            }
            static _normalizeKey(n) {
                return n === "esc" ? "escape" : n
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })();

function lc(i, e) {
    return ka(C({
        rootComponent: i
    }, Du(e)))
}

function Du(i) {
    return {
        appProviders: [...zu, ...i ? .providers ? ? []],
        platformProviders: Fu
    }
}

function Lu() {
    co.makeCurrent()
}

function Nu() {
    return new Qr
}

function ju() {
    return oa(document), document
}
var Fu = [{
    provide: V,
    useValue: Ba
}, {
    provide: sa,
    useValue: Lu,
    multi: !0
}, {
    provide: le,
    useFactory: ju,
    deps: []
}];
var zu = [{
        provide: na,
        useValue: "root"
    }, {
        provide: Qr,
        useFactory: Nu,
        deps: []
    }, {
        provide: Yi,
        useClass: Iu,
        multi: !0,
        deps: [le, Pe, V]
    }, {
        provide: Yi,
        useClass: Au,
        multi: !0,
        deps: [le]
    }, {
        provide: Yi,
        useClass: Tu,
        multi: !0
    }, hn, sc, oc, {
        provide: ln,
        useExisting: hn
    }, {
        provide: $a,
        useClass: wu,
        deps: []
    },
    []
];
var we = (() => {
        let e = class e {
            constructor(n) {
                this._doc = n, this._dom = Ui()
            }
            addTag(n, r = !1) {
                return n ? this._getOrCreateElement(n, r) : null
            }
            addTags(n, r = !1) {
                return n ? n.reduce((o, s) => (s && o.push(this._getOrCreateElement(s, r)), o), []) : []
            }
            getTag(n) {
                return n && this._doc.querySelector(`meta[${n}]`) || null
            }
            getTags(n) {
                if (!n) return [];
                let r = this._doc.querySelectorAll(`meta[${n}]`);
                return r ? [].slice.call(r) : []
            }
            updateTag(n, r) {
                if (!n) return null;
                r = r || this._parseSelector(n);
                let o = this.getTag(r);
                return o ? this._setMetaElementAttributes(n, o) : this._getOrCreateElement(n, !0)
            }
            removeTag(n) {
                this.removeTagElement(this.getTag(n))
            }
            removeTagElement(n) {
                n && this._dom.remove(n)
            }
            _getOrCreateElement(n, r = !1) {
                if (!r) {
                    let a = this._parseSelector(n),
                        c = this.getTags(a).filter(l => this._containsAttributes(n, l))[0];
                    if (c !== void 0) return c
                }
                let o = this._dom.createElement("meta");
                return this._setMetaElementAttributes(n, o), this._doc.getElementsByTagName("head")[0].appendChild(o), o
            }
            _setMetaElementAttributes(n, r) {
                return Object.keys(n).forEach(o => r.setAttribute(this._getMetaKeyMap(o), n[o])), r
            }
            _parseSelector(n) {
                let r = n.name ? "name" : "property";
                return `${r}="${n[r]}"`
            }
            _containsAttributes(n, r) {
                return Object.keys(n).every(o => r.getAttribute(this._getMetaKeyMap(o)) === n[o])
            }
            _getMetaKeyMap(n) {
                return Uu[n] || n
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    Uu = {
        httpEquiv: "http-equiv"
    },
    ye = (() => {
        let e = class e {
            constructor(n) {
                this._doc = n
            }
            getTitle() {
                return this._doc.title
            }
            setTitle(n) {
                this._doc.title = n || ""
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })();
var Yt = (() => {
        let e = class e {};
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: function(r) {
                let o = null;
                return r ? o = new(r || e) : o = ee(Bu), o
            },
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    Bu = (() => {
        let e = class e extends Yt {
            constructor(n) {
                super(), this._doc = n
            }
            sanitize(n, r) {
                if (r == null) return null;
                switch (n) {
                    case $t.NONE:
                        return r;
                    case $t.HTML:
                        return cn(r, "HTML") ? an(r) : ha(this._doc, String(r)).toString();
                    case $t.STYLE:
                        return cn(r, "Style") ? an(r) : r;
                    case $t.SCRIPT:
                        if (cn(r, "Script")) return an(r);
                        throw new he(5200, !1);
                    case $t.URL:
                        return cn(r, "URL") ? an(r) : pa(String(r));
                    case $t.RESOURCE_URL:
                        if (cn(r, "ResourceURL")) return an(r);
                        throw new he(5201, !1);
                    default:
                        throw new he(5202, !1)
                }
            }
            bypassSecurityTrustHtml(n) {
                return aa(n)
            }
            bypassSecurityTrustStyle(n) {
                return ca(n)
            }
            bypassSecurityTrustScript(n) {
                return la(n)
            }
            bypassSecurityTrustUrl(n) {
                return da(n)
            }
            bypassSecurityTrustResourceUrl(n) {
                return ua(n)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(le))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    uo = function(i) {
        return i[i.NoHttpTransferCache = 0] = "NoHttpTransferCache", i[i.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", i[i.I18nSupport = 2] = "I18nSupport", i[i.EventReplay = 3] = "EventReplay", i
    }(uo || {});

function dc(...i) {
    let e = [],
        t = new Set,
        n = t.has(uo.HttpTransferCacheOptions);
    for (let {\
            u0275providers: r,
            \u0275kind: o
        } of i) t.add(o), r.length && e.push(r);
    return Bt([
        [], Aa(), t.has(uo.NoHttpTransferCache) || n ? [] : nc({}), e
    ])
}
var Q = "primary",
    yi = Symbol("RouteTitle"),
    yo = class {
        constructor(e) {
            this.params = e || {}
        }
        has(e) {
            return Object.prototype.hasOwnProperty.call(this.params, e)
        }
        get(e) {
            if (this.has(e)) {
                let t = this.params[e];
                return Array.isArray(t) ? t[0] : t
            }
            return null
        }
        getAll(e) {
            if (this.has(e)) {
                let t = this.params[e];
                return Array.isArray(t) ? t : [t]
            }
            return []
        }
        get keys() {
            return Object.keys(this.params)
        }
    };

function vn(i) {
    return new yo(i)
}

function $u(i, e, t) {
    let n = t.path.split("/");
    if (n.length > i.length || t.pathMatch === "full" && (e.hasChildren() || n.length < i.length)) return null;
    let r = {};
    for (let o = 0; o < n.length; o++) {
        let s = n[o],
            a = i[o];
        if (s[0] === ":") r[s.substring(1)] = a;
        else if (s !== a.path) return null
    }
    return {
        consumed: i.slice(0, n.length),
        posParams: r
    }
}

function Hu(i, e) {
    if (i.length !== e.length) return !1;
    for (let t = 0; t < i.length; ++t)
        if (!ft(i[t], e[t])) return !1;
    return !0
}

function ft(i, e) {
    let t = i ? bo(i) : void 0,
        n = e ? bo(e) : void 0;
    if (!t || !n || t.length != n.length) return !1;
    let r;
    for (let o = 0; o < t.length; o++)
        if (r = t[o], !_c(i[r], e[r])) return !1;
    return !0
}

function bo(i) {
    return [...Object.keys(i), ...Object.getOwnPropertySymbols(i)]
}

function _c(i, e) {
    if (Array.isArray(i) && Array.isArray(e)) {
        if (i.length !== e.length) return !1;
        let t = [...i].sort(),
            n = [...e].sort();
        return t.every((r, o) => n[o] === r)
    } else return i === e
}

function wc(i) {
    return i.length > 0 ? i[i.length - 1] : null
}

function kt(i) {
    return Ws(i) ? i : Ia(i) ? be(Promise.resolve(i)) : $(i)
}
var Wu = {
        exact: Mc,
        subset: xc
    },
    Oc = {
        exact: Vu,
        subset: qu,
        ignored: () => !0
    };

function uc(i, e, t) {
    return Wu[t.paths](i.root, e.root, t.matrixParams) && Oc[t.queryParams](i.queryParams, e.queryParams) && !(t.fragment === "exact" && i.fragment !== e.fragment)
}

function Vu(i, e) {
    return ft(i, e)
}

function Mc(i, e, t) {
    if (!Xt(i.segments, e.segments) || !Zi(i.segments, e.segments, t) || i.numberOfChildren !== e.numberOfChildren) return !1;
    for (let n in e.children)
        if (!i.children[n] || !Mc(i.children[n], e.children[n], t)) return !1;
    return !0
}

function qu(i, e) {
    return Object.keys(e).length <= Object.keys(i).length && Object.keys(e).every(t => _c(i[t], e[t]))
}

function xc(i, e, t) {
    return Pc(i, e, e.segments, t)
}

function Pc(i, e, t, n) {
    if (i.segments.length > t.length) {
        let r = i.segments.slice(0, t.length);
        return !(!Xt(r, t) || e.hasChildren() || !Zi(r, t, n))
    } else if (i.segments.length === t.length) {
        if (!Xt(i.segments, t) || !Zi(i.segments, t, n)) return !1;
        for (let r in e.children)
            if (!i.children[r] || !xc(i.children[r], e.children[r], n)) return !1;
        return !0
    } else {
        let r = t.slice(0, i.segments.length),
            o = t.slice(i.segments.length);
        return !Xt(i.segments, r) || !Zi(i.segments, r, n) || !i.children[Q] ? !1 : Pc(i.children[Q], e, o, n)
    }
}

function Zi(i, e, t) {
    return e.every((n, r) => Oc[t](i[r].parameters, n.parameters))
}
var _t = class {
        constructor(e = new se([], {}), t = {}, n = null) {
            this.root = e, this.queryParams = t, this.fragment = n
        }
        get queryParamMap() {
            return this._queryParamMap ? ? = vn(this.queryParams), this._queryParamMap
        }
        toString() {
            return Yu.serialize(this)
        }
    },
    se = class {
        constructor(e, t) {
            this.segments = e, this.children = t, this.parent = null, Object.values(t).forEach(n => n.parent = this)
        }
        hasChildren() {
            return this.numberOfChildren > 0
        }
        get numberOfChildren() {
            return Object.keys(this.children).length
        }
        toString() {
            return er(this)
        }
    },
    Kt = class {
        constructor(e, t) {
            this.path = e, this.parameters = t
        }
        get parameterMap() {
            return this._parameterMap ? ? = vn(this.parameters), this._parameterMap
        }
        toString() {
            return Ec(this)
        }
    };

function Gu(i, e) {
    return Xt(i, e) && i.every((t, n) => ft(t.parameters, e[n].parameters))
}

function Xt(i, e) {
    return i.length !== e.length ? !1 : i.every((t, n) => t.path === e[n].path)
}

function Qu(i, e) {
    let t = [];
    return Object.entries(i.children).forEach(([n, r]) => {
        n === Q && (t = t.concat(e(r, n)))
    }), Object.entries(i.children).forEach(([n, r]) => {
        n !== Q && (t = t.concat(e(r, n)))
    }), t
}
var xn = (() => {
        let e = class e {};
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: () => new Cn,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    Cn = class {
        parse(e) {
            let t = new Co(e);
            return new _t(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment())
        }
        serialize(e) {
            let t = `/${ii(e.root,!0)}`,
                n = Ju(e.queryParams),
                r = typeof e.fragment == "string" ? `#${Ku(e.fragment)}` : "";
            return `${t}${n}${r}`
        }
    },
    Yu = new Cn;

function er(i) {
    return i.segments.map(e => Ec(e)).join("/")
}

function ii(i, e) {
    if (!i.hasChildren()) return er(i);
    if (e) {
        let t = i.children[Q] ? ii(i.children[Q], !1) : "",
            n = [];
        return Object.entries(i.children).forEach(([r, o]) => {
            r !== Q && n.push(`${r}:${ii(o,!1)}`)
        }), n.length > 0 ? `${t}(${n.join("//")})` : t
    } else {
        let t = Qu(i, (n, r) => r === Q ? [ii(i.children[Q], !1)] : [`${r}:${ii(n,!1)}`]);
        return Object.keys(i.children).length === 1 && i.children[Q] != null ? `${er(i)}/${t[0]}` : `${er(i)}/(${t.join("//")})`
    }
}

function Sc(i) {
    return encodeURIComponent(i).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}

function Xi(i) {
    return Sc(i).replace(/%3B/gi, ";")
}

function Ku(i) {
    return encodeURI(i)
}

function vo(i) {
    return Sc(i).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}

function tr(i) {
    return decodeURIComponent(i)
}

function pc(i) {
    return tr(i.replace(/\+/g, "%20"))
}

function Ec(i) {
    return `${vo(i.path)}${Xu(i.parameters)}`
}

function Xu(i) {
    return Object.entries(i).map(([e, t]) => `;${vo(e)}=${vo(t)}`).join("")
}

function Ju(i) {
    let e = Object.entries(i).map(([t, n]) => Array.isArray(n) ? n.map(r => `${Xi(t)}=${Xi(r)}`).join("&") : `${Xi(t)}=${Xi(n)}`).filter(t => t);
    return e.length ? `?${e.join("&")}` : ""
}
var Zu = /^[^\/()?;#]+/;

function ho(i) {
    let e = i.match(Zu);
    return e ? e[0] : ""
}
var ep = /^[^\/()?;=#]+/;

function tp(i) {
    let e = i.match(ep);
    return e ? e[0] : ""
}
var np = /^[^=?&#]+/;

function ip(i) {
    let e = i.match(np);
    return e ? e[0] : ""
}
var rp = /^[^&#]+/;

function op(i) {
    let e = i.match(rp);
    return e ? e[0] : ""
}
var Co = class {
    constructor(e) {
        this.url = e, this.remaining = e
    }
    parseRootSegment() {
        return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new se([], {}) : new se([], this.parseChildren())
    }
    parseQueryParams() {
        let e = {};
        if (this.consumeOptional("?"))
            do this.parseQueryParam(e); while (this.consumeOptional("&"));
        return e
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let e = [];
        for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
        let t = {};
        this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
        let n = {};
        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n[Q] = new se(e, t)), n
    }
    parseSegment() {
        let e = ho(this.remaining);
        if (e === "" && this.peekStartsWith(";")) throw new he(4009, !1);
        return this.capture(e), new Kt(tr(e), this.parseMatrixParams())
    }
    parseMatrixParams() {
        let e = {};
        for (; this.consumeOptional(";");) this.parseParam(e);
        return e
    }
    parseParam(e) {
        let t = tp(this.remaining);
        if (!t) return;
        this.capture(t);
        let n = "";
        if (this.consumeOptional("=")) {
            let r = ho(this.remaining);
            r && (n = r, this.capture(n))
        }
        e[tr(t)] = tr(n)
    }
    parseQueryParam(e) {
        let t = ip(this.remaining);
        if (!t) return;
        this.capture(t);
        let n = "";
        if (this.consumeOptional("=")) {
            let s = op(this.remaining);
            s && (n = s, this.capture(n))
        }
        let r = pc(t),
            o = pc(n);
        if (e.hasOwnProperty(r)) {
            let s = e[r];
            Array.isArray(s) || (s = [s], e[r] = s), s.push(o)
        } else e[r] = o
    }
    parseParens(e) {
        let t = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            let n = ho(this.remaining),
                r = this.remaining[n.length];
            if (r !== "/" && r !== ")" && r !== ";") throw new he(4010, !1);
            let o;
            n.indexOf(":") > -1 ? (o = n.slice(0, n.indexOf(":")), this.capture(o), this.capture(":")) : e && (o = Q);
            let s = this.parseChildren();
            t[o] = Object.keys(s).length === 1 ? s[Q] : new se([], s), this.consumeOptional("//")
        }
        return t
    }
    peekStartsWith(e) {
        return this.remaining.startsWith(e)
    }
    consumeOptional(e) {
        return this.peekStartsWith(e) ? (this.remaining = this.remaining.substring(e.length), !0) : !1
    }
    capture(e) {
        if (!this.consumeOptional(e)) throw new he(4011, !1)
    }
};

function Ic(i) {
    return i.segments.length > 0 ? new se([], {
        [Q]: i
    }) : i
}

function Tc(i) {
    let e = {};
    for (let [n, r] of Object.entries(i.children)) {
        let o = Tc(r);
        if (n === Q && o.segments.length === 0 && o.hasChildren())
            for (let [s, a] of Object.entries(o.children)) e[s] = a;
        else(o.segments.length > 0 || o.hasChildren()) && (e[n] = o)
    }
    let t = new se(i.segments, e);
    return sp(t)
}

function sp(i) {
    if (i.numberOfChildren === 1 && i.children[Q]) {
        let e = i.children[Q];
        return new se(i.segments.concat(e.segments), e.children)
    }
    return i
}

function Jt(i) {
    return i instanceof _t
}

function ap(i, e, t = null, n = null) {
    let r = kc(i);
    return Rc(r, e, t, n)
}

function kc(i) {
    let e;

    function t(o) {
        let s = {};
        for (let c of o.children) {
            let l = t(c);
            s[c.outlet] = l
        }
        let a = new se(o.url, s);
        return o === i && (e = a), a
    }
    let n = t(i.root),
        r = Ic(n);
    return e ? ? r
}

function Rc(i, e, t, n) {
    let r = i;
    for (; r.parent;) r = r.parent;
    if (e.length === 0) return fo(r, r, r, t, n);
    let o = cp(e);
    if (o.toRoot()) return fo(r, r, new se([], {}), t, n);
    let s = lp(o, r, i),
        a = s.processChildren ? si(s.segmentGroup, s.index, o.commands) : Dc(s.segmentGroup, s.index, o.commands);
    return fo(r, s.segmentGroup, a, t, n)
}

function nr(i) {
    return typeof i == "object" && i != null && !i.outlets && !i.segmentPath
}

function li(i) {
    return typeof i == "object" && i != null && i.outlets
}

function fo(i, e, t, n, r) {
    let o = {};
    n && Object.entries(n).forEach(([c, l]) => {
        o[c] = Array.isArray(l) ? l.map(d => `${d}`) : `${l}`
    });
    let s;
    i === e ? s = t : s = Ac(i, e, t);
    let a = Ic(Tc(s));
    return new _t(a, o, r)
}

function Ac(i, e, t) {
    let n = {};
    return Object.entries(i.children).forEach(([r, o]) => {
        o === e ? n[r] = t : n[r] = Ac(o, e, t)
    }), new se(i.segments, n)
}
var ir = class {
    constructor(e, t, n) {
        if (this.isAbsolute = e, this.numberOfDoubleDots = t, this.commands = n, e && n.length > 0 && nr(n[0])) throw new he(4003, !1);
        let r = n.find(li);
        if (r && r !== wc(n)) throw new he(4004, !1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
};

function cp(i) {
    if (typeof i[0] == "string" && i.length === 1 && i[0] === "/") return new ir(!0, 0, i);
    let e = 0,
        t = !1,
        n = i.reduce((r, o, s) => {
            if (typeof o == "object" && o != null) {
                if (o.outlets) {
                    let a = {};
                    return Object.entries(o.outlets).forEach(([c, l]) => {
                        a[c] = typeof l == "string" ? l.split("/") : l
                    }), [...r, {
                        outlets: a
                    }]
                }
                if (o.segmentPath) return [...r, o.segmentPath]
            }
            return typeof o != "string" ? [...r, o] : s === 0 ? (o.split("/").forEach((a, c) => {
                c == 0 && a === "." || (c == 0 && a === "" ? t = !0 : a === ".." ? e++ : a != "" && r.push(a))
            }), r) : [...r, o]
        }, []);
    return new ir(t, e, n)
}
var gn = class {
    constructor(e, t, n) {
        this.segmentGroup = e, this.processChildren = t, this.index = n
    }
};

function lp(i, e, t) {
    if (i.isAbsolute) return new gn(e, !0, 0);
    if (!t) return new gn(e, !1, NaN);
    if (t.parent === null) return new gn(t, !0, 0);
    let n = nr(i.commands[0]) ? 0 : 1,
        r = t.segments.length - 1 + n;
    return dp(t, r, i.numberOfDoubleDots)
}

function dp(i, e, t) {
    let n = i,
        r = e,
        o = t;
    for (; o > r;) {
        if (o -= r, n = n.parent, !n) throw new he(4005, !1);
        r = n.segments.length
    }
    return new gn(n, !1, r - o)
}

function up(i) {
    return li(i[0]) ? i[0].outlets : {
        [Q]: i
    }
}

function Dc(i, e, t) {
    if (i ? ? = new se([], {}), i.segments.length === 0 && i.hasChildren()) return si(i, e, t);
    let n = pp(i, e, t),
        r = t.slice(n.commandIndex);
    if (n.match && n.pathIndex < i.segments.length) {
        let o = new se(i.segments.slice(0, n.pathIndex), {});
        return o.children[Q] = new se(i.segments.slice(n.pathIndex), i.children), si(o, 0, r)
    } else return n.match && r.length === 0 ? new se(i.segments, {}) : n.match && !i.hasChildren() ? _o(i, e, t) : n.match ? si(i, 0, r) : _o(i, e, t)
}

function si(i, e, t) {
    if (t.length === 0) return new se(i.segments, {}); {
        let n = up(t),
            r = {};
        if (Object.keys(n).some(o => o !== Q) && i.children[Q] && i.numberOfChildren === 1 && i.children[Q].segments.length === 0) {
            let o = si(i.children[Q], e, t);
            return new se(i.segments, o.children)
        }
        return Object.entries(n).forEach(([o, s]) => {
            typeof s == "string" && (s = [s]), s !== null && (r[o] = Dc(i.children[o], e, s))
        }), Object.entries(i.children).forEach(([o, s]) => {
            n[o] === void 0 && (r[o] = s)
        }), new se(i.segments, r)
    }
}

function pp(i, e, t) {
    let n = 0,
        r = e,
        o = {
            match: !1,
            pathIndex: 0,
            commandIndex: 0
        };
    for (; r < i.segments.length;) {
        if (n >= t.length) return o;
        let s = i.segments[r],
            a = t[n];
        if (li(a)) break;
        let c = `${a}`,
            l = n < t.length - 1 ? t[n + 1] : null;
        if (r > 0 && c === void 0) break;
        if (c && l && typeof l == "object" && l.outlets === void 0) {
            if (!fc(c, l, s)) return o;
            n += 2
        } else {
            if (!fc(c, {}, s)) return o;
            n++
        }
        r++
    }
    return {
        match: !0,
        pathIndex: r,
        commandIndex: n
    }
}

function _o(i, e, t) {
    let n = i.segments.slice(0, e),
        r = 0;
    for (; r < t.length;) {
        let o = t[r];
        if (li(o)) {
            let c = hp(o.outlets);
            return new se(n, c)
        }
        if (r === 0 && nr(t[0])) {
            let c = i.segments[e];
            n.push(new Kt(c.path, hc(t[0]))), r++;
            continue
        }
        let s = li(o) ? o.outlets[Q] : `${o}`,
            a = r < t.length - 1 ? t[r + 1] : null;
        s && a && nr(a) ? (n.push(new Kt(s, hc(a))), r += 2) : (n.push(new Kt(s, {})), r++)
    }
    return new se(n, {})
}

function hp(i) {
    let e = {};
    return Object.entries(i).forEach(([t, n]) => {
        typeof n == "string" && (n = [n]), n !== null && (e[t] = _o(new se([], {}), 0, n))
    }), e
}

function hc(i) {
    let e = {};
    return Object.entries(i).forEach(([t, n]) => e[t] = `${n}`), e
}

function fc(i, e, t) {
    return i == t.path && ft(e, t.parameters)
}
var ai = "imperative",
    Se = function(i) {
        return i[i.NavigationStart = 0] = "NavigationStart", i[i.NavigationEnd = 1] = "NavigationEnd", i[i.NavigationCancel = 2] = "NavigationCancel", i[i.NavigationError = 3] = "NavigationError", i[i.RoutesRecognized = 4] = "RoutesRecognized", i[i.ResolveStart = 5] = "ResolveStart", i[i.ResolveEnd = 6] = "ResolveEnd", i[i.GuardsCheckStart = 7] = "GuardsCheckStart", i[i.GuardsCheckEnd = 8] = "GuardsCheckEnd", i[i.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", i[i.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", i[i.ChildActivationStart = 11] = "ChildActivationStart", i[i.ChildActivationEnd = 12] = "ChildActivationEnd", i[i.ActivationStart = 13] = "ActivationStart", i[i.ActivationEnd = 14] = "ActivationEnd", i[i.Scroll = 15] = "Scroll", i[i.NavigationSkipped = 16] = "NavigationSkipped", i
    }(Se || {}),
    Ze = class {
        constructor(e, t) {
            this.id = e, this.url = t
        }
    },
    _n = class extends Ze {
        constructor(e, t, n = "imperative", r = null) {
            super(e, t), this.type = Se.NavigationStart, this.navigationTrigger = n, this.restoredState = r
        }
        toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
        }
    },
    et = class extends Ze {
        constructor(e, t, n) {
            super(e, t), this.urlAfterRedirects = n, this.type = Se.NavigationEnd
        }
        toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
        }
    },
    Qe = function(i) {
        return i[i.Redirect = 0] = "Redirect", i[i.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", i[i.NoDataFromResolver = 2] = "NoDataFromResolver", i[i.GuardRejected = 3] = "GuardRejected", i
    }(Qe || {}),
    rr = function(i) {
        return i[i.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", i[i.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", i
    }(rr || {}),
    Ct = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.reason = n, this.code = r, this.type = Se.NavigationCancel
        }
        toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
        }
    },
    Tt = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.reason = n, this.code = r, this.type = Se.NavigationSkipped
        }
    },
    di = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.error = n, this.target = r, this.type = Se.NavigationError
        }
        toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
        }
    },
    or = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.urlAfterRedirects = n, this.state = r, this.type = Se.RoutesRecognized
        }
        toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    wo = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.urlAfterRedirects = n, this.state = r, this.type = Se.GuardsCheckStart
        }
        toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Oo = class extends Ze {
        constructor(e, t, n, r, o) {
            super(e, t), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = o, this.type = Se.GuardsCheckEnd
        }
        toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
        }
    },
    Mo = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.urlAfterRedirects = n, this.state = r, this.type = Se.ResolveStart
        }
        toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    xo = class extends Ze {
        constructor(e, t, n, r) {
            super(e, t), this.urlAfterRedirects = n, this.state = r, this.type = Se.ResolveEnd
        }
        toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Po = class {
        constructor(e) {
            this.route = e, this.type = Se.RouteConfigLoadStart
        }
        toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
        }
    },
    So = class {
        constructor(e) {
            this.route = e, this.type = Se.RouteConfigLoadEnd
        }
        toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
        }
    },
    Eo = class {
        constructor(e) {
            this.snapshot = e, this.type = Se.ChildActivationStart
        }
        toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    Io = class {
        constructor(e) {
            this.snapshot = e, this.type = Se.ChildActivationEnd
        }
        toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    To = class {
        constructor(e) {
            this.snapshot = e, this.type = Se.ActivationStart
        }
        toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    ko = class {
        constructor(e) {
            this.snapshot = e, this.type = Se.ActivationEnd
        }
        toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    sr = class {
        constructor(e, t, n) {
            this.routerEvent = e, this.position = t, this.anchor = n, this.type = Se.Scroll
        }
        toString() {
            let e = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
            return `Scroll(anchor: '${this.anchor}', position: '${e}')`
        }
    },
    ui = class {},
    wn = class {
        constructor(e, t) {
            this.url = e, this.navigationBehaviorOptions = t
        }
    };

function fp(i, e) {
    return i.providers && !i._injector && (i._injector = Zr(i.providers, e, `Route: ${i.path}`)), i._injector ? ? e
}

function at(i) {
    return i.outlet || Q
}

function mp(i, e) {
    let t = i.filter(n => at(n) === e);
    return t.push(...i.filter(n => at(n) !== e)), t
}

function bi(i) {
    if (!i) return null;
    if (i.routeConfig ? ._injector) return i.routeConfig._injector;
    for (let e = i.parent; e; e = e.parent) {
        let t = e.routeConfig;
        if (t ? ._loadedInjector) return t._loadedInjector;
        if (t ? ._injector) return t._injector
    }
    return null
}
var Ro = class {
        get injector() {
            return bi(this.route ? .snapshot) ? ? this.rootInjector
        }
        set injector(e) {}
        constructor(e) {
            this.rootInjector = e, this.outlet = null, this.route = null, this.children = new vi(this.rootInjector), this.attachRef = null
        }
    },
    vi = (() => {
        let e = class e {
            constructor(n) {
                this.rootInjector = n, this.contexts = new Map
            }
            onChildOutletCreated(n, r) {
                let o = this.getOrCreateContext(n);
                o.outlet = r, this.contexts.set(n, o)
            }
            onChildOutletDestroyed(n) {
                let r = this.getContext(n);
                r && (r.outlet = null, r.attachRef = null)
            }
            onOutletDeactivated() {
                let n = this.contexts;
                return this.contexts = new Map, n
            }
            onOutletReAttached(n) {
                this.contexts = n
            }
            getOrCreateContext(n) {
                let r = this.getContext(n);
                return r || (r = new Ro(this.rootInjector), this.contexts.set(n, r)), r
            }
            getContext(n) {
                return this.contexts.get(n) || null
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(Bn))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    ar = class {
        constructor(e) {
            this._root = e
        }
        get root() {
            return this._root.value
        }
        parent(e) {
            let t = this.pathFromRoot(e);
            return t.length > 1 ? t[t.length - 2] : null
        }
        children(e) {
            let t = Ao(e, this._root);
            return t ? t.children.map(n => n.value) : []
        }
        firstChild(e) {
            let t = Ao(e, this._root);
            return t && t.children.length > 0 ? t.children[0].value : null
        }
        siblings(e) {
            let t = Do(e, this._root);
            return t.length < 2 ? [] : t[t.length - 2].children.map(r => r.value).filter(r => r !== e)
        }
        pathFromRoot(e) {
            return Do(e, this._root).map(t => t.value)
        }
    };

function Ao(i, e) {
    if (i === e.value) return e;
    for (let t of e.children) {
        let n = Ao(i, t);
        if (n) return n
    }
    return null
}

function Do(i, e) {
    if (i === e.value) return [e];
    for (let t of e.children) {
        let n = Do(i, t);
        if (n.length) return n.unshift(e), n
    }
    return []
}
var Ge = class {
    constructor(e, t) {
        this.value = e, this.children = t
    }
    toString() {
        return `TreeNode(${this.value})`
    }
};

function mn(i) {
    let e = {};
    return i && i.children.forEach(t => e[t.value.outlet] = t), e
}
var cr = class extends ar {
    constructor(e, t) {
        super(e), this.snapshot = t, Ho(this, e)
    }
    toString() {
        return this.snapshot.toString()
    }
};

function Lc(i) {
    let e = gp(i),
        t = new ze([new Kt("", {})]),
        n = new ze({}),
        r = new ze({}),
        o = new ze({}),
        s = new ze(""),
        a = new mt(t, n, o, s, r, Q, i, e.root);
    return a.snapshot = e.root, new cr(new Ge(a, []), e)
}

function gp(i) {
    let e = {},
        t = {},
        n = {},
        r = "",
        o = new yn([], e, n, r, t, Q, i, null, {});
    return new dr("", new Ge(o, []))
}
var mt = class {
    constructor(e, t, n, r, o, s, a, c) {
        this.urlSubject = e, this.paramsSubject = t, this.queryParamsSubject = n, this.fragmentSubject = r, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject ? .pipe(B(l => l[yi])) ? ? $(void 0), this.url = e, this.params = t, this.queryParams = n, this.fragment = r, this.data = o
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ? ? = this.params.pipe(B(e => vn(e))), this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ? ? = this.queryParams.pipe(B(e => vn(e))), this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
};

function lr(i, e, t = "emptyOnly") {
    let n, {
        routeConfig: r
    } = i;
    return e !== null && (t === "always" || r ? .path === "" || !e.component && !e.routeConfig ? .loadComponent) ? n = {
        params: C(C({}, e.params), i.params),
        data: C(C({}, e.data), i.data),
        resolve: C(C(C(C({}, i.data), e.data), r ? .data), i._resolvedData)
    } : n = {
        params: C({}, i.params),
        data: C({}, i.data),
        resolve: C(C({}, i.data), i._resolvedData ? ? {})
    }, r && jc(r) && (n.resolve[yi] = r.title), n
}
var yn = class {
        get title() {
            return this.data ? .[yi]
        }
        constructor(e, t, n, r, o, s, a, c, l) {
            this.url = e, this.params = t, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = l
        }
        get root() {
            return this._routerState.root
        }
        get parent() {
            return this._routerState.parent(this)
        }
        get firstChild() {
            return this._routerState.firstChild(this)
        }
        get children() {
            return this._routerState.children(this)
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
            return this._paramMap ? ? = vn(this.params), this._paramMap
        }
        get queryParamMap() {
            return this._queryParamMap ? ? = vn(this.queryParams), this._queryParamMap
        }
        toString() {
            let e = this.url.map(n => n.toString()).join("/"),
                t = this.routeConfig ? this.routeConfig.path : "";
            return `Route(url:'${e}', path:'${t}')`
        }
    },
    dr = class extends ar {
        constructor(e, t) {
            super(t), this.url = e, Ho(this, t)
        }
        toString() {
            return Nc(this._root)
        }
    };

function Ho(i, e) {
    e.value._routerState = i, e.children.forEach(t => Ho(i, t))
}

function Nc(i) {
    let e = i.children.length > 0 ? ` { ${i.children.map(Nc).join(", ")} } ` : "";
    return `${i.value}${e}`
}

function mo(i) {
    if (i.snapshot) {
        let e = i.snapshot,
            t = i._futureSnapshot;
        i.snapshot = t, ft(e.queryParams, t.queryParams) || i.queryParamsSubject.next(t.queryParams), e.fragment !== t.fragment && i.fragmentSubject.next(t.fragment), ft(e.params, t.params) || i.paramsSubject.next(t.params), Hu(e.url, t.url) || i.urlSubject.next(t.url), ft(e.data, t.data) || i.dataSubject.next(t.data)
    } else i.snapshot = i._futureSnapshot, i.dataSubject.next(i._futureSnapshot.data)
}

function Lo(i, e) {
    let t = ft(i.params, e.params) && Gu(i.url, e.url),
        n = !i.parent != !e.parent;
    return t && !n && (!i.parent || Lo(i.parent, e.parent))
}

function jc(i) {
    return typeof i.title == "string" || i.title === null
}
var Wo = (() => {
        let e = class e {
            constructor() {
                this.activated = null, this._activatedRoute = null, this.name = Q, this.activateEvents = new Me, this.deactivateEvents = new Me, this.attachEvents = new Me, this.detachEvents = new Me, this.parentContexts = T(vi), this.location = T(ba), this.changeDetector = T(Qt), this.inputBinder = T(fr, {
                    optional: !0
                }), this.supportsBindingToComponentInputs = !0
            }
            get activatedComponentRef() {
                return this.activated
            }
            ngOnChanges(n) {
                if (n.name) {
                    let {
                        firstChange: r,
                        previousValue: o
                    } = n.name;
                    if (r) return;
                    this.isTrackedInParentContexts(o) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)), this.initializeOutletWithName()
                }
            }
            ngOnDestroy() {
                this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder ? .unsubscribeFromRouteData(this)
            }
            isTrackedInParentContexts(n) {
                return this.parentContexts.getContext(n) ? .outlet === this
            }
            ngOnInit() {
                this.initializeOutletWithName()
            }
            initializeOutletWithName() {
                if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
                let n = this.parentContexts.getContext(this.name);
                n ? .route && (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.injector))
            }
            get isActivated() {
                return !!this.activated
            }
            get component() {
                if (!this.activated) throw new he(4012, !1);
                return this.activated.instance
            }
            get activatedRoute() {
                if (!this.activated) throw new he(4012, !1);
                return this._activatedRoute
            }
            get activatedRouteData() {
                return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            }
            detach() {
                if (!this.activated) throw new he(4012, !1);
                this.location.detach();
                let n = this.activated;
                return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(n.instance), n
            }
            attach(n, r) {
                this.activated = n, this._activatedRoute = r, this.location.insert(n.hostView), this.inputBinder ? .bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(n.instance)
            }
            deactivate() {
                if (this.activated) {
                    let n = this.component;
                    this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(n)
                }
            }
            activateWith(n, r) {
                if (this.isActivated) throw new he(4013, !1);
                this._activatedRoute = n;
                let o = this.location,
                    a = n.snapshot.component,
                    c = this.parentContexts.getOrCreateContext(this.name).children,
                    l = new No(n, c, o.injector);
                this.activated = o.createComponent(a, {
                    index: o.length,
                    injector: l,
                    environmentInjector: r
                }), this.changeDetector.markForCheck(), this.inputBinder ? .bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275dir = Be({
            type: e,
            selectors: [
                ["router-outlet"]
            ],
            inputs: {
                name: "name"
            },
            outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
                attachEvents: "attach",
                detachEvents: "detach"
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [sn]
        });
        let i = e;
        return i
    })(),
    No = class i {
        __ngOutletInjector(e) {
            return new i(this.route, this.childContexts, e)
        }
        constructor(e, t, n) {
            this.route = e, this.childContexts = t, this.parent = n
        }
        get(e, t) {
            return e === mt ? this.route : e === vi ? this.childContexts : this.parent.get(e, t)
        }
    },
    fr = new ge(""),
    mc = (() => {
        let e = class e {
            constructor() {
                this.outletDataSubscriptions = new Map
            }
            bindActivatedRouteToOutletComponent(n) {
                this.unsubscribeFromRouteData(n), this.subscribeToRouteData(n)
            }
            unsubscribeFromRouteData(n) {
                this.outletDataSubscriptions.get(n) ? .unsubscribe(), this.outletDataSubscriptions.delete(n)
            }
            subscribeToRouteData(n) {
                let {
                    activatedRoute: r
                } = n, o = Ai([r.queryParams, r.params, r.data]).pipe(Xe(([s, a, c], l) => (c = C(C(C({}, s), a), c), l === 0 ? $(c) : Promise.resolve(c)))).subscribe(s => {
                    if (!n.isActivated || !n.activatedComponentRef || n.activatedRoute !== r || r.component === null) {
                        this.unsubscribeFromRouteData(n);
                        return
                    }
                    let a = La(r.component);
                    if (!a) {
                        this.unsubscribeFromRouteData(n);
                        return
                    }
                    for (let {
                            templateName: c
                        } of a.inputs) n.activatedComponentRef.setInput(c, s[c])
                });
                this.outletDataSubscriptions.set(n, o)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })();

function yp(i, e, t) {
    let n = pi(i, e._root, t ? t._root : void 0);
    return new cr(n, e)
}

function pi(i, e, t) {
    if (t && i.shouldReuseRoute(e.value, t.value.snapshot)) {
        let n = t.value;
        n._futureSnapshot = e.value;
        let r = bp(i, e, t);
        return new Ge(n, r)
    } else {
        if (i.shouldAttach(e.value)) {
            let o = i.retrieve(e.value);
            if (o !== null) {
                let s = o.route;
                return s.value._futureSnapshot = e.value, s.children = e.children.map(a => pi(i, a)), s
            }
        }
        let n = vp(e.value),
            r = e.children.map(o => pi(i, o));
        return new Ge(n, r)
    }
}

function bp(i, e, t) {
    return e.children.map(n => {
        for (let r of t.children)
            if (i.shouldReuseRoute(n.value, r.value.snapshot)) return pi(i, n, r);
        return pi(i, n)
    })
}

function vp(i) {
    return new mt(new ze(i.url), new ze(i.params), new ze(i.queryParams), new ze(i.fragment), new ze(i.data), i.outlet, i.component, i)
}
var hi = class {
        constructor(e, t) {
            this.redirectTo = e, this.navigationBehaviorOptions = t
        }
    },
    Fc = "ngNavigationCancelingError";

function ur(i, e) {
    let {
        redirectTo: t,
        navigationBehaviorOptions: n
    } = Jt(e) ? {
        redirectTo: e,
        navigationBehaviorOptions: void 0
    } : e, r = zc(!1, Qe.Redirect);
    return r.url = t, r.navigationBehaviorOptions = n, r
}

function zc(i, e) {
    let t = new Error(`NavigationCancelingError: ${i||""}`);
    return t[Fc] = !0, t.cancellationCode = e, t
}

function Cp(i) {
    return Uc(i) && Jt(i.url)
}

function Uc(i) {
    return !!i && i[Fc]
}
var _p = (i, e, t, n) => B(r => (new jo(e, r.targetRouterState, r.currentRouterState, t, n).activate(i), r)),
    jo = class {
        constructor(e, t, n, r, o) {
            this.routeReuseStrategy = e, this.futureState = t, this.currState = n, this.forwardEvent = r, this.inputBindingEnabled = o
        }
        activate(e) {
            let t = this.futureState._root,
                n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(t, n, e), mo(this.futureState.root), this.activateChildRoutes(t, n, e)
        }
        deactivateChildRoutes(e, t, n) {
            let r = mn(t);
            e.children.forEach(o => {
                let s = o.value.outlet;
                this.deactivateRoutes(o, r[s], n), delete r[s]
            }), Object.values(r).forEach(o => {
                this.deactivateRouteAndItsChildren(o, n)
            })
        }
        deactivateRoutes(e, t, n) {
            let r = e.value,
                o = t ? t.value : null;
            if (r === o)
                if (r.component) {
                    let s = n.getContext(r.outlet);
                    s && this.deactivateChildRoutes(e, t, s.children)
                } else this.deactivateChildRoutes(e, t, n);
            else o && this.deactivateRouteAndItsChildren(t, n)
        }
        deactivateRouteAndItsChildren(e, t) {
            e.value.component && this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t)
        }
        detachAndStoreRouteSubtree(e, t) {
            let n = t.getContext(e.value.outlet),
                r = n && e.value.component ? n.children : t,
                o = mn(e);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, r);
            if (n && n.outlet) {
                let s = n.outlet.detach(),
                    a = n.children.onOutletDeactivated();
                this.routeReuseStrategy.store(e.value.snapshot, {
                    componentRef: s,
                    route: e,
                    contexts: a
                })
            }
        }
        deactivateRouteAndOutlet(e, t) {
            let n = t.getContext(e.value.outlet),
                r = n && e.value.component ? n.children : t,
                o = mn(e);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, r);
            n && (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()), n.attachRef = null, n.route = null)
        }
        activateChildRoutes(e, t, n) {
            let r = mn(t);
            e.children.forEach(o => {
                this.activateRoutes(o, r[o.value.outlet], n), this.forwardEvent(new ko(o.value.snapshot))
            }), e.children.length && this.forwardEvent(new Io(e.value.snapshot))
        }
        activateRoutes(e, t, n) {
            let r = e.value,
                o = t ? t.value : null;
            if (mo(r), r === o)
                if (r.component) {
                    let s = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(e, t, s.children)
                } else this.activateChildRoutes(e, t, n);
            else if (r.component) {
                let s = n.getOrCreateContext(r.outlet);
                if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    let a = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), mo(a.route.value), this.activateChildRoutes(e, null, s.children)
                } else s.attachRef = null, s.route = r, s.outlet && s.outlet.activateWith(r, s.injector), this.activateChildRoutes(e, null, s.children)
            } else this.activateChildRoutes(e, null, n)
        }
    },
    pr = class {
        constructor(e) {
            this.path = e, this.route = this.path[this.path.length - 1]
        }
    },
    bn = class {
        constructor(e, t) {
            this.component = e, this.route = t
        }
    };

function wp(i, e, t) {
    let n = i._root,
        r = e ? e._root : null;
    return ri(n, r, t, [n.value])
}

function Op(i) {
    let e = i.routeConfig ? i.routeConfig.canActivateChild : null;
    return !e || e.length === 0 ? null : {
        node: i,
        guards: e
    }
}

function Pn(i, e) {
    let t = Symbol(),
        n = e.get(i, t);
    return n === t ? typeof i == "function" && !ea(i) ? i : e.get(i) : n
}

function ri(i, e, t, n, r = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = mn(e);
    return i.children.forEach(s => {
        Mp(s, o[s.value.outlet], t, n.concat([s.value]), r), delete o[s.value.outlet]
    }), Object.entries(o).forEach(([s, a]) => ci(a, t.getContext(s), r)), r
}

function Mp(i, e, t, n, r = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = i.value,
        s = e ? e.value : null,
        a = t ? t.getContext(i.value.outlet) : null;
    if (s && o.routeConfig === s.routeConfig) {
        let c = xp(s, o, o.routeConfig.runGuardsAndResolvers);
        c ? r.canActivateChecks.push(new pr(n)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? ri(i, e, a ? a.children : null, n, r) : ri(i, e, t, n, r), c && a && a.outlet && a.outlet.isActivated && r.canDeactivateChecks.push(new bn(a.outlet.component, s))
    } else s && ci(e, a, r), r.canActivateChecks.push(new pr(n)), o.component ? ri(i, null, a ? a.children : null, n, r) : ri(i, null, t, n, r);
    return r
}

function xp(i, e, t) {
    if (typeof t == "function") return t(i, e);
    switch (t) {
        case "pathParamsChange":
            return !Xt(i.url, e.url);
        case "pathParamsOrQueryParamsChange":
            return !Xt(i.url, e.url) || !ft(i.queryParams, e.queryParams);
        case "always":
            return !0;
        case "paramsOrQueryParamsChange":
            return !Lo(i, e) || !ft(i.queryParams, e.queryParams);
        case "paramsChange":
        default:
            return !Lo(i, e)
    }
}

function ci(i, e, t) {
    let n = mn(i),
        r = i.value;
    Object.entries(n).forEach(([o, s]) => {
        r.component ? e ? ci(s, e.children.getContext(o), t) : ci(s, null, t) : ci(s, e, t)
    }), r.component ? e && e.outlet && e.outlet.isActivated ? t.canDeactivateChecks.push(new bn(e.outlet.component, r)) : t.canDeactivateChecks.push(new bn(null, r)) : t.canDeactivateChecks.push(new bn(null, r))
}

function Ci(i) {
    return typeof i == "function"
}

function Pp(i) {
    return typeof i == "boolean"
}

function Sp(i) {
    return i && Ci(i.canLoad)
}

function Ep(i) {
    return i && Ci(i.canActivate)
}

function Ip(i) {
    return i && Ci(i.canActivateChild)
}

function Tp(i) {
    return i && Ci(i.canDeactivate)
}

function kp(i) {
    return i && Ci(i.canMatch)
}

function Bc(i) {
    return i instanceof Vs || i ? .name === "EmptyError"
}
var Ji = Symbol("INITIAL_VALUE");

function On() {
    return Xe(i => Ai(i.map(e => e.pipe(on(1), Xs(Ji)))).pipe(B(e => {
        for (let t of e)
            if (t !== !0) {
                if (t === Ji) return Ji;
                if (t === !1 || Rp(t)) return t
            }
        return !0
    }), Ue(e => e !== Ji), on(1)))
}

function Rp(i) {
    return Jt(i) || i instanceof hi
}

function Ap(i, e) {
    return He(t => {
        let {
            targetSnapshot: n,
            currentSnapshot: r,
            guards: {
                canActivateChecks: o,
                canDeactivateChecks: s
            }
        } = t;
        return s.length === 0 && o.length === 0 ? $(ae(C({}, t), {
            guardsResult: !0
        })) : Dp(s, n, r, i).pipe(He(a => a && Pp(a) ? Lp(n, o, i, e) : $(a)), B(a => ae(C({}, t), {
            guardsResult: a
        })))
    })
}

function Dp(i, e, t, n) {
    return be(i).pipe(He(r => Up(r.component, r.route, t, e, n)), Pt(r => r !== !0, !0))
}

function Lp(i, e, t, n) {
    return be(e).pipe(Ut(r => qs(jp(r.route.parent, n), Np(r.route, n), zp(i, r.path, t), Fp(i, r.route, t))), Pt(r => r !== !0, !0))
}

function Np(i, e) {
    return i !== null && e && e(new To(i)), $(!0)
}

function jp(i, e) {
    return i !== null && e && e(new Eo(i)), $(!0)
}

function Fp(i, e, t) {
    let n = e.routeConfig ? e.routeConfig.canActivate : null;
    if (!n || n.length === 0) return $(!0);
    let r = n.map(o => Br(() => {
        let s = bi(e) ? ? t,
            a = Pn(o, s),
            c = Ep(a) ? a.canActivate(e, i) : it(s, () => a(e, i));
        return kt(c).pipe(Pt())
    }));
    return $(r).pipe(On())
}

function zp(i, e, t) {
    let n = e[e.length - 1],
        o = e.slice(0, e.length - 1).reverse().map(s => Op(s)).filter(s => s !== null).map(s => Br(() => {
            let a = s.guards.map(c => {
                let l = bi(s.node) ? ? t,
                    d = Pn(c, l),
                    f = Ip(d) ? d.canActivateChild(n, i) : it(l, () => d(n, i));
                return kt(f).pipe(Pt())
            });
            return $(a).pipe(On())
        }));
    return $(o).pipe(On())
}

function Up(i, e, t, n, r) {
    let o = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
    if (!o || o.length === 0) return $(!0);
    let s = o.map(a => {
        let c = bi(e) ? ? r,
            l = Pn(a, c),
            d = Tp(l) ? l.canDeactivate(i, e, t, n) : it(c, () => l(i, e, t, n));
        return kt(d).pipe(Pt())
    });
    return $(s).pipe(On())
}

function Bp(i, e, t, n) {
    let r = e.canLoad;
    if (r === void 0 || r.length === 0) return $(!0);
    let o = r.map(s => {
        let a = Pn(s, i),
            c = Sp(a) ? a.canLoad(e, t) : it(i, () => a(e, t));
        return kt(c)
    });
    return $(o).pipe(On(), $c(n))
}

function $c(i) {
    return Hs(xe(e => {
        if (typeof e != "boolean") throw ur(i, e)
    }), B(e => e === !0))
}

function $p(i, e, t, n) {
    let r = e.canMatch;
    if (!r || r.length === 0) return $(!0);
    let o = r.map(s => {
        let a = Pn(s, i),
            c = kp(a) ? a.canMatch(e, t) : it(i, () => a(e, t));
        return kt(c)
    });
    return $(o).pipe(On(), $c(n))
}
var fi = class {
        constructor(e) {
            this.segmentGroup = e || null
        }
    },
    mi = class extends Error {
        constructor(e) {
            super(), this.urlTree = e
        }
    };

function fn(i) {
    return jn(new fi(i))
}

function Hp(i) {
    return jn(new he(4e3, !1))
}

function Wp(i) {
    return jn(zc(!1, Qe.GuardRejected))
}
var Fo = class {
        constructor(e, t) {
            this.urlSerializer = e, this.urlTree = t
        }
        lineralizeSegments(e, t) {
            let n = [],
                r = t.root;
            for (;;) {
                if (n = n.concat(r.segments), r.numberOfChildren === 0) return $(n);
                if (r.numberOfChildren > 1 || !r.children[Q]) return Hp(`${e.redirectTo}`);
                r = r.children[Q]
            }
        }
        applyRedirectCommands(e, t, n, r, o) {
            if (typeof t != "string") {
                let a = t,
                    {
                        queryParams: c,
                        fragment: l,
                        routeConfig: d,
                        url: f,
                        outlet: m,
                        params: g,
                        data: w,
                        title: v
                    } = r,
                    x = it(o, () => a({
                        params: g,
                        data: w,
                        queryParams: c,
                        fragment: l,
                        routeConfig: d,
                        url: f,
                        outlet: m,
                        title: v
                    }));
                if (x instanceof _t) throw new mi(x);
                t = x
            }
            let s = this.applyRedirectCreateUrlTree(t, this.urlSerializer.parse(t), e, n);
            if (t[0] === "/") throw new mi(s);
            return s
        }
        applyRedirectCreateUrlTree(e, t, n, r) {
            let o = this.createSegmentGroup(e, t.root, n, r);
            return new _t(o, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment)
        }
        createQueryParams(e, t) {
            let n = {};
            return Object.entries(e).forEach(([r, o]) => {
                if (typeof o == "string" && o[0] === ":") {
                    let a = o.substring(1);
                    n[r] = t[a]
                } else n[r] = o
            }), n
        }
        createSegmentGroup(e, t, n, r) {
            let o = this.createSegments(e, t.segments, n, r),
                s = {};
            return Object.entries(t.children).forEach(([a, c]) => {
                s[a] = this.createSegmentGroup(e, c, n, r)
            }), new se(o, s)
        }
        createSegments(e, t, n, r) {
            return t.map(o => o.path[0] === ":" ? this.findPosParam(e, o, r) : this.findOrReturn(o, n))
        }
        findPosParam(e, t, n) {
            let r = n[t.path.substring(1)];
            if (!r) throw new he(4001, !1);
            return r
        }
        findOrReturn(e, t) {
            let n = 0;
            for (let r of t) {
                if (r.path === e.path) return t.splice(n), r;
                n++
            }
            return e
        }
    },
    zo = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {}
    };

function Vp(i, e, t, n, r) {
    let o = Hc(i, e, t);
    return o.matched ? (n = fp(e, n), $p(n, e, t, r).pipe(B(s => s === !0 ? o : C({}, zo)))) : $(o)
}

function Hc(i, e, t) {
    if (e.path === "**") return qp(t);
    if (e.path === "") return e.pathMatch === "full" && (i.hasChildren() || t.length > 0) ? C({}, zo) : {
        matched: !0,
        consumedSegments: [],
        remainingSegments: t,
        parameters: {},
        positionalParamSegments: {}
    };
    let r = (e.matcher || $u)(t, i, e);
    if (!r) return C({}, zo);
    let o = {};
    Object.entries(r.posParams ? ? {}).forEach(([a, c]) => {
        o[a] = c.path
    });
    let s = r.consumed.length > 0 ? C(C({}, o), r.consumed[r.consumed.length - 1].parameters) : o;
    return {
        matched: !0,
        consumedSegments: r.consumed,
        remainingSegments: t.slice(r.consumed.length),
        parameters: s,
        positionalParamSegments: r.posParams ? ? {}
    }
}

function qp(i) {
    return {
        matched: !0,
        parameters: i.length > 0 ? wc(i).parameters : {},
        consumedSegments: i,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}

function gc(i, e, t, n) {
    return t.length > 0 && Yp(i, t, n) ? {
        segmentGroup: new se(e, Qp(n, new se(t, i.children))),
        slicedSegments: []
    } : t.length === 0 && Kp(i, t, n) ? {
        segmentGroup: new se(i.segments, Gp(i, t, n, i.children)),
        slicedSegments: t
    } : {
        segmentGroup: new se(i.segments, i.children),
        slicedSegments: t
    }
}

function Gp(i, e, t, n) {
    let r = {};
    for (let o of t)
        if (mr(i, e, o) && !n[at(o)]) {
            let s = new se([], {});
            r[at(o)] = s
        }
    return C(C({}, n), r)
}

function Qp(i, e) {
    let t = {};
    t[Q] = e;
    for (let n of i)
        if (n.path === "" && at(n) !== Q) {
            let r = new se([], {});
            t[at(n)] = r
        }
    return t
}

function Yp(i, e, t) {
    return t.some(n => mr(i, e, n) && at(n) !== Q)
}

function Kp(i, e, t) {
    return t.some(n => mr(i, e, n))
}

function mr(i, e, t) {
    return (i.hasChildren() || e.length > 0) && t.pathMatch === "full" ? !1 : t.path === ""
}

function Xp(i, e, t) {
    return e.length === 0 && !i.children[t]
}
var Uo = class {};

function Jp(i, e, t, n, r, o, s = "emptyOnly") {
    return new Bo(i, e, t, n, r, s, o).recognize()
}
var Zp = 31,
    Bo = class {
        constructor(e, t, n, r, o, s, a) {
            this.injector = e, this.configLoader = t, this.rootComponentType = n, this.config = r, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new Fo(this.urlSerializer, this.urlTree), this.absoluteRedirectCount = 0, this.allowRedirects = !0
        }
        noMatchError(e) {
            return new he(4002, `'${e.segmentGroup}'`)
        }
        recognize() {
            let e = gc(this.urlTree.root, [], [], this.config).segmentGroup;
            return this.match(e).pipe(B(({
                children: t,
                rootSnapshot: n
            }) => {
                let r = new Ge(n, t),
                    o = new dr("", r),
                    s = ap(n, [], this.urlTree.queryParams, this.urlTree.fragment);
                return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), {
                    state: o,
                    tree: s
                }
            }))
        }
        match(e) {
            let t = new yn([], Object.freeze({}), Object.freeze(C({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), Q, this.rootComponentType, null, {});
            return this.processSegmentGroup(this.injector, this.config, e, Q, t).pipe(B(n => ({
                children: n,
                rootSnapshot: t
            })), rn(n => {
                if (n instanceof mi) return this.urlTree = n.urlTree, this.match(n.urlTree.root);
                throw n instanceof fi ? this.noMatchError(n) : n
            }))
        }
        processSegmentGroup(e, t, n, r, o) {
            return n.segments.length === 0 && n.hasChildren() ? this.processChildren(e, t, n, o) : this.processSegment(e, t, n, n.segments, r, !0, o).pipe(B(s => s instanceof Ge ? [s] : []))
        }
        processChildren(e, t, n, r) {
            let o = [];
            for (let s of Object.keys(n.children)) s === "primary" ? o.unshift(s) : o.push(s);
            return be(o).pipe(Ut(s => {
                let a = n.children[s],
                    c = mp(t, s);
                return this.processSegmentGroup(e, c, a, s, r)
            }), Ks((s, a) => (s.push(...a), s)), $r(null), Ys(), He(s => {
                if (s === null) return fn(n);
                let a = Wc(s);
                return eh(a), $(a)
            }))
        }
        processSegment(e, t, n, r, o, s, a) {
            return be(t).pipe(Ut(c => this.processSegmentAgainstRoute(c._injector ? ? e, t, c, n, r, o, s, a).pipe(rn(l => {
                if (l instanceof fi) return $(null);
                throw l
            }))), Pt(c => !!c), rn(c => {
                if (Bc(c)) return Xp(n, r, o) ? $(new Uo) : fn(n);
                throw c
            }))
        }
        processSegmentAgainstRoute(e, t, n, r, o, s, a, c) {
            return at(n) !== s && (s === Q || !mr(r, o, n)) ? fn(r) : n.redirectTo === void 0 ? this.matchSegmentAgainstRoute(e, r, n, o, s, c) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(e, r, t, n, o, s, c) : fn(r)
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, o, s, a) {
            let {
                matched: c,
                parameters: l,
                consumedSegments: d,
                positionalParamSegments: f,
                remainingSegments: m
            } = Hc(t, r, o);
            if (!c) return fn(t);
            typeof r.redirectTo == "string" && r.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Zp && (this.allowRedirects = !1));
            let g = new yn(o, l, Object.freeze(C({}, this.urlTree.queryParams)), this.urlTree.fragment, yc(r), at(r), r.component ? ? r._loadedComponent ? ? null, r, bc(r)),
                w = lr(g, a, this.paramsInheritanceStrategy);
            g.params = Object.freeze(w.params), g.data = Object.freeze(w.data);
            let v = this.applyRedirects.applyRedirectCommands(d, r.redirectTo, f, g, e);
            return this.applyRedirects.lineralizeSegments(r, v).pipe(He(x => this.processSegment(e, n, t, x.concat(m), s, !1, a)))
        }
        matchSegmentAgainstRoute(e, t, n, r, o, s) {
            let a = Vp(t, n, r, e, this.urlSerializer);
            return n.path === "**" && (t.children = {}), a.pipe(Xe(c => c.matched ? (e = n._injector ? ? e, this.getChildConfig(e, n, r).pipe(Xe(({
                routes: l
            }) => {
                let d = n._loadedInjector ? ? e,
                    {
                        parameters: f,
                        consumedSegments: m,
                        remainingSegments: g
                    } = c,
                    w = new yn(m, f, Object.freeze(C({}, this.urlTree.queryParams)), this.urlTree.fragment, yc(n), at(n), n.component ? ? n._loadedComponent ? ? null, n, bc(n)),
                    v = lr(w, s, this.paramsInheritanceStrategy);
                w.params = Object.freeze(v.params), w.data = Object.freeze(v.data);
                let {
                    segmentGroup: x,
                    slicedSegments: R
                } = gc(t, m, g, l);
                if (R.length === 0 && x.hasChildren()) return this.processChildren(d, l, x, w).pipe(B(re => new Ge(w, re)));
                if (l.length === 0 && R.length === 0) return $(new Ge(w, []));
                let z = at(n) === o;
                return this.processSegment(d, l, x, R, z ? Q : o, !0, w).pipe(B(re => new Ge(w, re instanceof Ge ? [re] : [])))
            }))) : fn(t)))
        }
        getChildConfig(e, t, n) {
            return t.children ? $({
                routes: t.children,
                injector: e
            }) : t.loadChildren ? t._loadedRoutes !== void 0 ? $({
                routes: t._loadedRoutes,
                injector: t._loadedInjector
            }) : Bp(e, t, n, this.urlSerializer).pipe(He(r => r ? this.configLoader.loadChildren(e, t).pipe(xe(o => {
                t._loadedRoutes = o.routes, t._loadedInjector = o.injector
            })) : Wp(t))) : $({
                routes: [],
                injector: e
            })
        }
    };

function eh(i) {
    i.sort((e, t) => e.value.outlet === Q ? -1 : t.value.outlet === Q ? 1 : e.value.outlet.localeCompare(t.value.outlet))
}

function th(i) {
    let e = i.value.routeConfig;
    return e && e.path === ""
}

function Wc(i) {
    let e = [],
        t = new Set;
    for (let n of i) {
        if (!th(n)) {
            e.push(n);
            continue
        }
        let r = e.find(o => n.value.routeConfig === o.value.routeConfig);
        r !== void 0 ? (r.children.push(...n.children), t.add(r)) : e.push(n)
    }
    for (let n of t) {
        let r = Wc(n.children);
        e.push(new Ge(n.value, r))
    }
    return e.filter(n => !t.has(n))
}

function yc(i) {
    return i.data || {}
}

function bc(i) {
    return i.resolve || {}
}

function nh(i, e, t, n, r, o) {
    return He(s => Jp(i, e, t, n, s.extractedUrl, r, o).pipe(B(({
        state: a,
        tree: c
    }) => ae(C({}, s), {
        targetSnapshot: a,
        urlAfterRedirects: c
    }))))
}

function ih(i, e) {
    return He(t => {
        let {
            targetSnapshot: n,
            guards: {
                canActivateChecks: r
            }
        } = t;
        if (!r.length) return $(t);
        let o = new Set(r.map(c => c.route)),
            s = new Set;
        for (let c of o)
            if (!s.has(c))
                for (let l of Vc(c)) s.add(l);
        let a = 0;
        return be(s).pipe(Ut(c => o.has(c) ? rh(c, n, i, e) : (c.data = lr(c, c.parent, i).resolve, $(void 0))), xe(() => a++), Hr(1), He(c => a === s.size ? $(t) : xt))
    })
}

function Vc(i) {
    let e = i.children.map(t => Vc(t)).flat();
    return [i, ...e]
}

function rh(i, e, t, n) {
    let r = i.routeConfig,
        o = i._resolve;
    return r ? .title !== void 0 && !jc(r) && (o[yi] = r.title), oh(o, i, e, n).pipe(B(s => (i._resolvedData = s, i.data = lr(i, i.parent, t).resolve, null)))
}

function oh(i, e, t, n) {
    let r = bo(i);
    if (r.length === 0) return $({});
    let o = {};
    return be(r).pipe(He(s => sh(i[s], e, t, n).pipe(Pt(), xe(a => {
        if (a instanceof hi) throw ur(new Cn, a);
        o[s] = a
    }))), Hr(1), Qs(o), rn(s => Bc(s) ? xt : jn(s)))
}

function sh(i, e, t, n) {
    let r = bi(e) ? ? n,
        o = Pn(i, r),
        s = o.resolve ? o.resolve(e, t) : it(r, () => o(e, t));
    return kt(s)
}

function go(i) {
    return Xe(e => {
        let t = i(e);
        return t ? be(t).pipe(B(() => e)) : $(e)
    })
}
var qc = (() => {
        let e = class e {
            buildTitle(n) {
                let r, o = n.root;
                for (; o !== void 0;) r = this.getResolvedTitleForRoute(o) ? ? r, o = o.children.find(s => s.outlet === Q);
                return r
            }
            getResolvedTitleForRoute(n) {
                return n.data[yi]
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: () => T(ah),
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    ah = (() => {
        let e = class e extends qc {
            constructor(n) {
                super(), this.title = n
            }
            updateTitle(n) {
                let r = this.buildTitle(n);
                r !== void 0 && this.title.setTitle(r)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(ye))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    _i = new ge("", {
        providedIn: "root",
        factory: () => ({})
    }),
    ch = (() => {
        let e = class e {};
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["ng-component"]
            ],
            standalone: !0,
            features: [L],
            decls: 1,
            vars: 0,
            template: function(r, o) {
                r & 1 && O(0, "router-outlet")
            },
            dependencies: [Wo],
            encapsulation: 2
        });
        let i = e;
        return i
    })();

function Vo(i) {
    let e = i.children && i.children.map(Vo),
        t = e ? ae(C({}, i), {
            children: e
        }) : C({}, i);
    return !t.component && !t.loadComponent && (e || t.loadChildren) && t.outlet && t.outlet !== Q && (t.component = ch), t
}
var gi = new ge(""),
    qo = (() => {
        let e = class e {
            constructor() {
                this.componentLoaders = new WeakMap, this.childrenLoaders = new WeakMap, this.compiler = T(zi)
            }
            loadComponent(n) {
                if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
                if (n._loadedComponent) return $(n._loadedComponent);
                this.onLoadStartListener && this.onLoadStartListener(n);
                let r = kt(n.loadComponent()).pipe(B(Gc), xe(s => {
                        this.onLoadEndListener && this.onLoadEndListener(n), n._loadedComponent = s
                    }), Fn(() => {
                        this.componentLoaders.delete(n)
                    })),
                    o = new zr(r, () => new ut).pipe(Fr());
                return this.componentLoaders.set(n, o), o
            }
            loadChildren(n, r) {
                if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
                if (r._loadedRoutes) return $({
                    routes: r._loadedRoutes,
                    injector: r._loadedInjector
                });
                this.onLoadStartListener && this.onLoadStartListener(r);
                let s = lh(r, this.compiler, n, this.onLoadEndListener).pipe(Fn(() => {
                        this.childrenLoaders.delete(r)
                    })),
                    a = new zr(s, () => new ut).pipe(Fr());
                return this.childrenLoaders.set(r, a), a
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })();

function lh(i, e, t, n) {
    return kt(i.loadChildren()).pipe(B(Gc), He(r => r instanceof va || Array.isArray(r) ? $(r) : be(e.compileModuleAsync(r))), B(r => {
        n && n(i);
        let o, s, a = !1;
        return Array.isArray(r) ? (s = r, a = !0) : (o = r.create(t).injector, s = o.get(gi, [], {
            optional: !0,
            self: !0
        }).flat()), {
            routes: s.map(Vo),
            injector: o
        }
    }))
}

function dh(i) {
    return i && typeof i == "object" && "default" in i
}

function Gc(i) {
    return dh(i) ? i.default : i
}
var Go = (() => {
        let e = class e {};
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: () => T(uh),
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    uh = (() => {
        let e = class e {
            shouldProcessUrl(n) {
                return !0
            }
            extract(n) {
                return n
            }
            merge(n, r) {
                return n
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    Qc = new ge(""),
    Yc = new ge("");

function ph(i, e, t) {
    let n = i.get(Yc),
        r = i.get(le);
    return i.get(Pe).runOutsideAngular(() => {
        if (!r.startViewTransition || n.skipNextTransition) return n.skipNextTransition = !1, new Promise(l => setTimeout(l));
        let o, s = new Promise(l => {
                o = l
            }),
            a = r.startViewTransition(() => (o(), hh(i))),
            {
                onViewTransitionCreated: c
            } = n;
        return c && it(i, () => c({
            transition: a,
            from: e,
            to: t
        })), s
    })
}

function hh(i) {
    return new Promise(e => {
        Ca({
            read: () => setTimeout(e)
        }, {
            injector: i
        })
    })
}
var fh = new ge(""),
    gr = (() => {
        let e = class e {
            get hasRequestedNavigation() {
                return this.navigationId !== 0
            }
            constructor() {
                this.currentNavigation = null, this.currentTransition = null, this.lastSuccessfulNavigation = null, this.events = new ut, this.transitionAbortSubject = new ut, this.configLoader = T(qo), this.environmentInjector = T(Bn), this.urlSerializer = T(xn), this.rootContexts = T(vi), this.location = T(Yn), this.inputBindingEnabled = T(fr, {
                    optional: !0
                }) !== null, this.titleStrategy = T(qc), this.options = T(_i, {
                    optional: !0
                }) || {}, this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly", this.urlHandlingStrategy = T(Go), this.createViewTransition = T(Qc, {
                    optional: !0
                }), this.navigationErrorHandler = T(fh, {
                    optional: !0
                }), this.navigationId = 0, this.afterPreactivation = () => $(void 0), this.rootComponentType = null;
                let n = o => this.events.next(new Po(o)),
                    r = o => this.events.next(new So(o));
                this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = n
            }
            complete() {
                this.transitions ? .complete()
            }
            handleNavigationRequest(n) {
                let r = ++this.navigationId;
                this.transitions ? .next(ae(C(C({}, this.transitions.value), n), {
                    id: r
                }))
            }
            setupNavigations(n, r, o) {
                return this.transitions = new ze({
                    id: 0,
                    currentUrlTree: r,
                    currentRawUrl: r,
                    extractedUrl: this.urlHandlingStrategy.extract(r),
                    urlAfterRedirects: this.urlHandlingStrategy.extract(r),
                    rawUrl: r,
                    extras: {},
                    resolve: () => {},
                    reject: () => {},
                    promise: Promise.resolve(!0),
                    source: ai,
                    restoredState: null,
                    currentSnapshot: o.snapshot,
                    targetSnapshot: null,
                    currentRouterState: o,
                    targetRouterState: null,
                    guards: {
                        canActivateChecks: [],
                        canDeactivateChecks: []
                    },
                    guardsResult: null
                }), this.transitions.pipe(Ue(s => s.id !== 0), B(s => ae(C({}, s), {
                    extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl)
                })), Xe(s => {
                    let a = !1,
                        c = !1;
                    return $(s).pipe(Xe(l => {
                        if (this.navigationId > s.id) return this.cancelNavigationTransition(s, "", Qe.SupersededByNewNavigation), xt;
                        this.currentTransition = s, this.currentNavigation = {
                            id: l.id,
                            initialUrl: l.rawUrl,
                            extractedUrl: l.extractedUrl,
                            targetBrowserUrl: typeof l.extras.browserUrl == "string" ? this.urlSerializer.parse(l.extras.browserUrl) : l.extras.browserUrl,
                            trigger: l.source,
                            extras: l.extras,
                            previousNavigation: this.lastSuccessfulNavigation ? ae(C({}, this.lastSuccessfulNavigation), {
                                previousNavigation: null
                            }) : null
                        };
                        let d = !n.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                            f = l.extras.onSameUrlNavigation ? ? n.onSameUrlNavigation;
                        if (!d && f !== "reload") {
                            let m = "";
                            return this.events.next(new Tt(l.id, this.urlSerializer.serialize(l.rawUrl), m, rr.IgnoredSameUrlNavigation)), l.resolve(!1), xt
                        }
                        if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl)) return $(l).pipe(Xe(m => {
                            let g = this.transitions ? .getValue();
                            return this.events.next(new _n(m.id, this.urlSerializer.serialize(m.extractedUrl), m.source, m.restoredState)), g !== this.transitions ? .getValue() ? xt : Promise.resolve(m)
                        }), nh(this.environmentInjector, this.configLoader, this.rootComponentType, n.config, this.urlSerializer, this.paramsInheritanceStrategy), xe(m => {
                            s.targetSnapshot = m.targetSnapshot, s.urlAfterRedirects = m.urlAfterRedirects, this.currentNavigation = ae(C({}, this.currentNavigation), {
                                finalUrl: m.urlAfterRedirects
                            });
                            let g = new or(m.id, this.urlSerializer.serialize(m.extractedUrl), this.urlSerializer.serialize(m.urlAfterRedirects), m.targetSnapshot);
                            this.events.next(g)
                        }));
                        if (d && this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)) {
                            let {
                                id: m,
                                extractedUrl: g,
                                source: w,
                                restoredState: v,
                                extras: x
                            } = l, R = new _n(m, this.urlSerializer.serialize(g), w, v);
                            this.events.next(R);
                            let z = Lc(this.rootComponentType).snapshot;
                            return this.currentTransition = s = ae(C({}, l), {
                                targetSnapshot: z,
                                urlAfterRedirects: g,
                                extras: ae(C({}, x), {
                                    skipLocationChange: !1,
                                    replaceUrl: !1
                                })
                            }), this.currentNavigation.finalUrl = g, $(s)
                        } else {
                            let m = "";
                            return this.events.next(new Tt(l.id, this.urlSerializer.serialize(l.extractedUrl), m, rr.IgnoredByUrlHandlingStrategy)), l.resolve(!1), xt
                        }
                    }), xe(l => {
                        let d = new wo(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot);
                        this.events.next(d)
                    }), B(l => (this.currentTransition = s = ae(C({}, l), {
                        guards: wp(l.targetSnapshot, l.currentSnapshot, this.rootContexts)
                    }), s)), Ap(this.environmentInjector, l => this.events.next(l)), xe(l => {
                        if (s.guardsResult = l.guardsResult, l.guardsResult && typeof l.guardsResult != "boolean") throw ur(this.urlSerializer, l.guardsResult);
                        let d = new Oo(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
                        this.events.next(d)
                    }), Ue(l => l.guardsResult ? !0 : (this.cancelNavigationTransition(l, "", Qe.GuardRejected), !1)), go(l => {
                        if (l.guards.canActivateChecks.length) return $(l).pipe(xe(d => {
                            let f = new Mo(d.id, this.urlSerializer.serialize(d.extractedUrl), this.urlSerializer.serialize(d.urlAfterRedirects), d.targetSnapshot);
                            this.events.next(f)
                        }), Xe(d => {
                            let f = !1;
                            return $(d).pipe(ih(this.paramsInheritanceStrategy, this.environmentInjector), xe({
                                next: () => f = !0,
                                complete: () => {
                                    f || this.cancelNavigationTransition(d, "", Qe.NoDataFromResolver)
                                }
                            }))
                        }), xe(d => {
                            let f = new xo(d.id, this.urlSerializer.serialize(d.extractedUrl), this.urlSerializer.serialize(d.urlAfterRedirects), d.targetSnapshot);
                            this.events.next(f)
                        }))
                    }), go(l => {
                        let d = f => {
                            let m = [];
                            f.routeConfig ? .loadComponent && !f.routeConfig._loadedComponent && m.push(this.configLoader.loadComponent(f.routeConfig).pipe(xe(g => {
                                f.component = g
                            }), B(() => {})));
                            for (let g of f.children) m.push(...d(g));
                            return m
                        };
                        return Ai(d(l.targetSnapshot.root)).pipe($r(null), on(1))
                    }), go(() => this.afterPreactivation()), Xe(() => {
                        let {
                            currentSnapshot: l,
                            targetSnapshot: d
                        } = s, f = this.createViewTransition ? .(this.environmentInjector, l.root, d.root);
                        return f ? be(f).pipe(B(() => s)) : $(s)
                    }), B(l => {
                        let d = yp(n.routeReuseStrategy, l.targetSnapshot, l.currentRouterState);
                        return this.currentTransition = s = ae(C({}, l), {
                            targetRouterState: d
                        }), this.currentNavigation.targetRouterState = d, s
                    }), xe(() => {
                        this.events.next(new ui)
                    }), _p(this.rootContexts, n.routeReuseStrategy, l => this.events.next(l), this.inputBindingEnabled), on(1), xe({
                        next: l => {
                            a = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new et(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects))), this.titleStrategy ? .updateTitle(l.targetRouterState.snapshot), l.resolve(!0)
                        },
                        complete: () => {
                            a = !0
                        }
                    }), Js(this.transitionAbortSubject.pipe(xe(l => {
                        throw l
                    }))), Fn(() => {
                        !a && !c && this.cancelNavigationTransition(s, "", Qe.SupersededByNewNavigation), this.currentTransition ? .id === s.id && (this.currentNavigation = null, this.currentTransition = null)
                    }), rn(l => {
                        if (c = !0, Uc(l)) this.events.next(new Ct(s.id, this.urlSerializer.serialize(s.extractedUrl), l.message, l.cancellationCode)), Cp(l) ? this.events.next(new wn(l.url, l.navigationBehaviorOptions)) : s.resolve(!1);
                        else {
                            let d = new di(s.id, this.urlSerializer.serialize(s.extractedUrl), l, s.targetSnapshot ? ? void 0);
                            try {
                                let f = it(this.environmentInjector, () => this.navigationErrorHandler ? .(d));
                                if (f instanceof hi) {
                                    let {
                                        message: m,
                                        cancellationCode: g
                                    } = ur(this.urlSerializer, f);
                                    this.events.next(new Ct(s.id, this.urlSerializer.serialize(s.extractedUrl), m, g)), this.events.next(new wn(f.redirectTo, f.navigationBehaviorOptions))
                                } else {
                                    this.events.next(d);
                                    let m = n.errorHandler(l);
                                    s.resolve(!!m)
                                }
                            } catch (f) {
                                this.options.resolveNavigationPromiseOnError ? s.resolve(!1) : s.reject(f)
                            }
                        }
                        return xt
                    }))
                }))
            }
            cancelNavigationTransition(n, r, o) {
                let s = new Ct(n.id, this.urlSerializer.serialize(n.extractedUrl), r, o);
                this.events.next(s), n.resolve(!1)
            }
            isUpdatingInternalState() {
                return this.currentTransition ? .extractedUrl.toString() !== this.currentTransition ? .currentUrlTree.toString()
            }
            isUpdatedBrowserUrl() {
                let n = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),
                    r = this.currentNavigation ? .targetBrowserUrl ? ? this.currentNavigation ? .extractedUrl;
                return n.toString() !== r ? .toString() && !this.currentNavigation ? .extras.skipLocationChange
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })();

function mh(i) {
    return i !== ai
}
var gh = (() => {
        let e = class e {};
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: () => T(yh),
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    $o = class {
        shouldDetach(e) {
            return !1
        }
        store(e, t) {}
        shouldAttach(e) {
            return !1
        }
        retrieve(e) {
            return null
        }
        shouldReuseRoute(e, t) {
            return e.routeConfig === t.routeConfig
        }
    },
    yh = (() => {
        let e = class e extends $o {};
        e.\u0275fac = (() => {
            let n;
            return function(o) {
                return (n || (n = rt(e)))(o || e)
            }
        })(), e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    Kc = (() => {
        let e = class e {};
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: () => T(bh),
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    bh = (() => {
        let e = class e extends Kc {
            constructor() {
                super(...arguments), this.location = T(Yn), this.urlSerializer = T(xn), this.options = T(_i, {
                    optional: !0
                }) || {}, this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace", this.urlHandlingStrategy = T(Go), this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.currentUrlTree = new _t, this.rawUrlTree = this.currentUrlTree, this.currentPageId = 0, this.lastSuccessfulId = -1, this.routerState = Lc(null), this.stateMemento = this.createStateMemento()
            }
            getCurrentUrlTree() {
                return this.currentUrlTree
            }
            getRawUrlTree() {
                return this.rawUrlTree
            }
            restoredState() {
                return this.location.getState()
            }
            get browserPageId() {
                return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState() ? .\u0275routerPageId ? ? this.currentPageId
            }
            getRouterState() {
                return this.routerState
            }
            createStateMemento() {
                return {
                    rawUrlTree: this.rawUrlTree,
                    currentUrlTree: this.currentUrlTree,
                    routerState: this.routerState
                }
            }
            registerNonRouterCurrentEntryChangeListener(n) {
                return this.location.subscribe(r => {
                    r.type === "popstate" && n(r.url, r.state)
                })
            }
            handleRouterEvent(n, r) {
                if (n instanceof _n) this.stateMemento = this.createStateMemento();
                else if (n instanceof Tt) this.rawUrlTree = r.initialUrl;
                else if (n instanceof or) {
                    if (this.urlUpdateStrategy === "eager" && !r.extras.skipLocationChange) {
                        let o = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl);
                        this.setBrowserUrl(r.targetBrowserUrl ? ? o, r)
                    }
                } else n instanceof ui ? (this.currentUrlTree = r.finalUrl, this.rawUrlTree = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl), this.routerState = r.targetRouterState, this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(r.targetBrowserUrl ? ? this.rawUrlTree, r)) : n instanceof Ct && (n.code === Qe.GuardRejected || n.code === Qe.NoDataFromResolver) ? this.restoreHistory(r) : n instanceof di ? this.restoreHistory(r, !0) : n instanceof et && (this.lastSuccessfulId = n.id, this.currentPageId = this.browserPageId)
            }
            setBrowserUrl(n, r) {
                let o = n instanceof _t ? this.urlSerializer.serialize(n) : n;
                if (this.location.isCurrentPathEqualTo(o) || r.extras.replaceUrl) {
                    let s = this.browserPageId,
                        a = C(C({}, r.extras.state), this.generateNgRouterState(r.id, s));
                    this.location.replaceState(o, "", a)
                } else {
                    let s = C(C({}, r.extras.state), this.generateNgRouterState(r.id, this.browserPageId + 1));
                    this.location.go(o, "", s)
                }
            }
            restoreHistory(n, r = !1) {
                if (this.canceledNavigationResolution === "computed") {
                    let o = this.browserPageId,
                        s = this.currentPageId - o;
                    s !== 0 ? this.location.historyGo(s) : this.currentUrlTree === n.finalUrl && s === 0 && (this.resetState(n), this.resetUrlToCurrentUrlTree())
                } else this.canceledNavigationResolution === "replace" && (r && this.resetState(n), this.resetUrlToCurrentUrlTree())
            }
            resetState(n) {
                this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n.finalUrl ? ? this.rawUrlTree)
            }
            resetUrlToCurrentUrlTree() {
                this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
            }
            generateNgRouterState(n, r) {
                return this.canceledNavigationResolution === "computed" ? {
                    navigationId: n,
                    \u0275routerPageId: r
                } : {
                    navigationId: n
                }
            }
        };
        e.\u0275fac = (() => {
            let n;
            return function(o) {
                return (n || (n = rt(e)))(o || e)
            }
        })(), e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    oi = function(i) {
        return i[i.COMPLETE = 0] = "COMPLETE", i[i.FAILED = 1] = "FAILED", i[i.REDIRECTING = 2] = "REDIRECTING", i
    }(oi || {});

function Xc(i, e) {
    i.events.pipe(Ue(t => t instanceof et || t instanceof Ct || t instanceof di || t instanceof Tt), B(t => t instanceof et || t instanceof Tt ? oi.COMPLETE : (t instanceof Ct ? t.code === Qe.Redirect || t.code === Qe.SupersededByNewNavigation : !1) ? oi.REDIRECTING : oi.FAILED), Ue(t => t !== oi.REDIRECTING), on(1)).subscribe(() => {
        e()
    })
}

function vh(i) {
    throw i
}
var Ch = {
        paths: "exact",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "exact"
    },
    _h = {
        paths: "subset",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "subset"
    },
    ct = (() => {
        let e = class e {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree()
            }
            get rawUrlTree() {
                return this.stateManager.getRawUrlTree()
            }
            get events() {
                return this._events
            }
            get routerState() {
                return this.stateManager.getRouterState()
            }
            constructor() {
                this.disposed = !1, this.console = T(Fi), this.stateManager = T(Kc), this.options = T(_i, {
                    optional: !0
                }) || {}, this.pendingTasks = T(Gr), this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.navigationTransitions = T(gr), this.urlSerializer = T(xn), this.location = T(Yn), this.urlHandlingStrategy = T(Go), this._events = new ut, this.errorHandler = this.options.errorHandler || vh, this.navigated = !1, this.routeReuseStrategy = T(gh), this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore", this.config = T(gi, {
                    optional: !0
                }) ? .flat() ? ? [], this.componentInputBindingEnabled = !!T(fr, {
                    optional: !0
                }), this.eventsSubscription = new $s, this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
                    error: n => {
                        this.console.warn(n)
                    }
                }), this.subscribeToNavigationEvents()
            }
            subscribeToNavigationEvents() {
                let n = this.navigationTransitions.events.subscribe(r => {
                    try {
                        let o = this.navigationTransitions.currentTransition,
                            s = this.navigationTransitions.currentNavigation;
                        if (o !== null && s !== null) {
                            if (this.stateManager.handleRouterEvent(r, s), r instanceof Ct && r.code !== Qe.Redirect && r.code !== Qe.SupersededByNewNavigation) this.navigated = !0;
                            else if (r instanceof et) this.navigated = !0;
                            else if (r instanceof wn) {
                                let a = r.navigationBehaviorOptions,
                                    c = this.urlHandlingStrategy.merge(r.url, o.currentRawUrl),
                                    l = C({
                                        browserUrl: o.extras.browserUrl,
                                        info: o.extras.info,
                                        skipLocationChange: o.extras.skipLocationChange,
                                        replaceUrl: o.extras.replaceUrl || this.urlUpdateStrategy === "eager" || mh(o.source)
                                    }, a);
                                this.scheduleNavigation(c, ai, null, l, {
                                    resolve: o.resolve,
                                    reject: o.reject,
                                    promise: o.promise
                                })
                            }
                        }
                        Oh(r) && this._events.next(r)
                    } catch (o) {
                        this.navigationTransitions.transitionAbortSubject.next(o)
                    }
                });
                this.eventsSubscription.add(n)
            }
            resetRootComponentType(n) {
                this.routerState.root.component = n, this.navigationTransitions.rootComponentType = n
            }
            initialNavigation() {
                this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), ai, this.stateManager.restoredState())
            }
            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ? ? = this.stateManager.registerNonRouterCurrentEntryChangeListener((n, r) => {
                    setTimeout(() => {
                        this.navigateToSyncWithBrowser(n, "popstate", r)
                    }, 0)
                })
            }
            navigateToSyncWithBrowser(n, r, o) {
                let s = {
                        replaceUrl: !0
                    },
                    a = o ? .navigationId ? o : null;
                if (o) {
                    let l = C({}, o);
                    delete l.navigationId, delete l.\u0275routerPageId, Object.keys(l).length !== 0 && (s.state = l)
                }
                let c = this.parseUrl(n);
                this.scheduleNavigation(c, r, a, s)
            }
            get url() {
                return this.serializeUrl(this.currentUrlTree)
            }
            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation
            }
            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation
            }
            resetConfig(n) {
                this.config = n.map(Vo), this.navigated = !1
            }
            ngOnDestroy() {
                this.dispose()
            }
            dispose() {
                this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe()
            }
            createUrlTree(n, r = {}) {
                let {
                    relativeTo: o,
                    queryParams: s,
                    fragment: a,
                    queryParamsHandling: c,
                    preserveFragment: l
                } = r, d = l ? this.currentUrlTree.fragment : a, f = null;
                switch (c ? ? this.options.defaultQueryParamsHandling) {
                    case "merge":
                        f = C(C({}, this.currentUrlTree.queryParams), s);
                        break;
                    case "preserve":
                        f = this.currentUrlTree.queryParams;
                        break;
                    default:
                        f = s || null
                }
                f !== null && (f = this.removeEmptyProps(f));
                let m;
                try {
                    let g = o ? o.snapshot : this.routerState.snapshot.root;
                    m = kc(g)
                } catch {
                    (typeof n[0] != "string" || n[0][0] !== "/") && (n = []), m = this.currentUrlTree.root
                }
                return Rc(m, n, f, d ? ? null)
            }
            navigateByUrl(n, r = {
                skipLocationChange: !1
            }) {
                let o = Jt(n) ? n : this.parseUrl(n),
                    s = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
                return this.scheduleNavigation(s, ai, null, r)
            }
            navigate(n, r = {
                skipLocationChange: !1
            }) {
                return wh(n), this.navigateByUrl(this.createUrlTree(n, r), r)
            }
            serializeUrl(n) {
                return this.urlSerializer.serialize(n)
            }
            parseUrl(n) {
                try {
                    return this.urlSerializer.parse(n)
                } catch {
                    return this.urlSerializer.parse("/")
                }
            }
            isActive(n, r) {
                let o;
                if (r === !0 ? o = C({}, Ch) : r === !1 ? o = C({}, _h) : o = r, Jt(n)) return uc(this.currentUrlTree, n, o);
                let s = this.parseUrl(n);
                return uc(this.currentUrlTree, s, o)
            }
            removeEmptyProps(n) {
                return Object.entries(n).reduce((r, [o, s]) => (s != null && (r[o] = s), r), {})
            }
            scheduleNavigation(n, r, o, s, a) {
                if (this.disposed) return Promise.resolve(!1);
                let c, l, d;
                a ? (c = a.resolve, l = a.reject, d = a.promise) : d = new Promise((m, g) => {
                    c = m, l = g
                });
                let f = this.pendingTasks.add();
                return Xc(this, () => {
                    queueMicrotask(() => this.pendingTasks.remove(f))
                }), this.navigationTransitions.handleNavigationRequest({
                    source: r,
                    restoredState: o,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    rawUrl: n,
                    extras: s,
                    resolve: c,
                    reject: l,
                    promise: d,
                    currentSnapshot: this.routerState.snapshot,
                    currentRouterState: this.routerState
                }), d.catch(m => Promise.reject(m))
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })();

function wh(i) {
    for (let e = 0; e < i.length; e++)
        if (i[e] == null) throw new he(4008, !1)
}

function Oh(i) {
    return !(i instanceof ui) && !(i instanceof wn)
}
var Rt = (() => {
    let e = class e {
        constructor(n, r, o, s, a, c) {
            this.router = n, this.route = r, this.tabIndexAttribute = o, this.renderer = s, this.el = a, this.locationStrategy = c, this.href = null, this.onChanges = new ut, this.preserveFragment = !1, this.skipLocationChange = !1, this.replaceUrl = !1, this.routerLinkInput = null;
            let l = a.nativeElement.tagName ? .toLowerCase();
            this.isAnchorElement = l === "a" || l === "area", this.isAnchorElement ? this.subscription = n.events.subscribe(d => {
                d instanceof et && this.updateHref()
            }) : this.setTabIndexIfNotOnNativeEl("0")
        }
        setTabIndexIfNotOnNativeEl(n) {
            this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", n)
        }
        ngOnChanges(n) {
            this.isAnchorElement && this.updateHref(), this.onChanges.next(this)
        }
        set routerLink(n) {
            n == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (Jt(n) ? this.routerLinkInput = n : this.routerLinkInput = Array.isArray(n) ? n : [n], this.setTabIndexIfNotOnNativeEl("0"))
        }
        onClick(n, r, o, s, a) {
            let c = this.urlTree;
            if (c === null || this.isAnchorElement && (n !== 0 || r || o || s || a || typeof this.target == "string" && this.target != "_self")) return !0;
            let l = {
                skipLocationChange: this.skipLocationChange,
                replaceUrl: this.replaceUrl,
                state: this.state,
                info: this.info
            };
            return this.router.navigateByUrl(c, l), !this.isAnchorElement
        }
        ngOnDestroy() {
            this.subscription ? .unsubscribe()
        }
        updateHref() {
            let n = this.urlTree;
            this.href = n !== null && this.locationStrategy ? this.locationStrategy ? .prepareExternalUrl(this.router.serializeUrl(n)) : null;
            let r = this.href === null ? null : fa(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
            this.applyAttributeValue("href", r)
        }
        applyAttributeValue(n, r) {
            let o = this.renderer,
                s = this.el.nativeElement;
            r !== null ? o.setAttribute(s, n, r) : o.removeAttribute(s, n)
        }
        get urlTree() {
            return this.routerLinkInput === null ? null : Jt(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, {
                relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: this.preserveFragment
            })
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(ct), b(mt), ia("tabindex"), b(ne), b(De), b(Qn))
    }, e.\u0275dir = Be({
        type: e,
        selectors: [
            ["", "routerLink", ""]
        ],
        hostVars: 1,
        hostBindings: function(r, o) {
            r & 1 && ce("click", function(a) {
                return o.onClick(a.button, a.ctrlKey, a.shiftKey, a.altKey, a.metaKey)
            }), r & 2 && fe("target", o.target)
        },
        inputs: {
            target: "target",
            queryParams: "queryParams",
            fragment: "fragment",
            queryParamsHandling: "queryParamsHandling",
            state: "state",
            info: "info",
            relativeTo: "relativeTo",
            preserveFragment: [2, "preserveFragment", "preserveFragment", K],
            skipLocationChange: [2, "skipLocationChange", "skipLocationChange", K],
            replaceUrl: [2, "replaceUrl", "replaceUrl", K],
            routerLink: "routerLink"
        },
        standalone: !0,
        features: [qe, sn]
    });
    let i = e;
    return i
})();
var hr = class {};
var Mh = (() => {
        let e = class e {
            constructor(n, r, o, s, a) {
                this.router = n, this.injector = o, this.preloadingStrategy = s, this.loader = a
            }
            setUpPreloading() {
                this.subscription = this.router.events.pipe(Ue(n => n instanceof et), Ut(() => this.preload())).subscribe(() => {})
            }
            preload() {
                return this.processRoutes(this.injector, this.router.config)
            }
            ngOnDestroy() {
                this.subscription && this.subscription.unsubscribe()
            }
            processRoutes(n, r) {
                let o = [];
                for (let s of r) {
                    s.providers && !s._injector && (s._injector = Zr(s.providers, n, `Route: ${s.path}`));
                    let a = s._injector ? ? n,
                        c = s._loadedInjector ? ? a;
                    (s.loadChildren && !s._loadedRoutes && s.canLoad === void 0 || s.loadComponent && !s._loadedComponent) && o.push(this.preloadConfig(a, s)), (s.children || s._loadedRoutes) && o.push(this.processRoutes(c, s.children ? ? s._loadedRoutes))
                }
                return be(o).pipe(Ur())
            }
            preloadConfig(n, r) {
                return this.preloadingStrategy.preload(r, () => {
                    let o;
                    r.loadChildren && r.canLoad === void 0 ? o = this.loader.loadChildren(n, r) : o = $(null);
                    let s = o.pipe(He(a => a === null ? $(void 0) : (r._loadedRoutes = a.routes, r._loadedInjector = a.injector, this.processRoutes(a.injector ? ? n, a.routes))));
                    if (r.loadComponent && !r._loadedComponent) {
                        let a = this.loader.loadComponent(r);
                        return be([s, a]).pipe(Ur())
                    } else return s
                })
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(ct), ee(zi), ee(Bn), ee(hr), ee(qo))
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let i = e;
        return i
    })(),
    Qo = new ge(""),
    Jc = (() => {
        let e = class e {
            constructor(n, r, o, s, a = {}) {
                this.urlSerializer = n, this.transitions = r, this.viewportScroller = o, this.zone = s, this.options = a, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, a.scrollPositionRestoration || = "disabled", a.anchorScrolling || = "disabled"
            }
            init() {
                this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
            }
            createScrollEvents() {
                return this.transitions.events.subscribe(n => {
                    n instanceof _n ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = n.navigationTrigger, this.restoredId = n.restoredState ? n.restoredState.navigationId : 0) : n instanceof et ? (this.lastId = n.id, this.scheduleScrollEvent(n, this.urlSerializer.parse(n.urlAfterRedirects).fragment)) : n instanceof Tt && n.code === rr.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(n, this.urlSerializer.parse(n.url).fragment))
                })
            }
            consumeScrollEvents() {
                return this.transitions.events.subscribe(n => {
                    n instanceof sr && (n.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0]) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(n.position) : n.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(n.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]))
                })
            }
            scheduleScrollEvent(n, r) {
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.zone.run(() => {
                            this.transitions.events.next(new sr(n, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r))
                        })
                    }, 0)
                })
            }
            ngOnDestroy() {
                this.routerEventsSubscription ? .unsubscribe(), this.scrollEventsSubscription ? .unsubscribe()
            }
        };
        e.\u0275fac = function(r) {
            Li()
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })();

function Zc(i, ...e) {
    return Bt([{
            provide: gi,
            multi: !0,
            useValue: i
        },
        [], {
            provide: mt,
            useFactory: el,
            deps: [ct]
        }, {
            provide: qn,
            multi: !0,
            useFactory: nl
        },
        e.map(t => t.\u0275providers)
    ])
}

function el(i) {
    return i.routerState.root
}

function Sn(i, e) {
    return {\
        u0275kind: i,
        \u0275providers: e
    }
}

function tl(i = {}) {
    return Sn(4, [{
        provide: Qo,
        useFactory: () => {
            let t = T(Xn),
                n = T(Pe),
                r = T(gr),
                o = T(xn);
            return new Jc(o, r, t, n, i)
        }
    }])
}

function nl() {
    let i = T(qr);
    return e => {
        let t = i.get(Gn);
        if (e !== t.components[0]) return;
        let n = i.get(ct),
            r = i.get(il);
        i.get(Yo) === 1 && n.initialNavigation(), i.get(rl, null, Wr.Optional) ? .setUpPreloading(), i.get(Qo, null, Wr.Optional) ? .init(), n.resetRootComponentType(t.componentTypes[0]), r.closed || (r.next(), r.complete(), r.unsubscribe())
    }
}
var il = new ge("", {
        factory: () => new ut
    }),
    Yo = new ge("", {
        providedIn: "root",
        factory: () => 1
    });

function xh() {
    return Sn(2, [{
        provide: Yo,
        useValue: 0
    }, {
        provide: eo,
        multi: !0,
        deps: [qr],
        useFactory: e => {
            let t = e.get(Fa, Promise.resolve());
            return () => t.then(() => new Promise(n => {
                let r = e.get(ct),
                    o = e.get(il);
                Xc(r, () => {
                    n(!0)
                }), e.get(gr).afterPreactivation = () => (n(!0), o.closed ? $(void 0) : o), r.initialNavigation()
            }))
        }
    }])
}

function Ph() {
    return Sn(3, [{
        provide: eo,
        multi: !0,
        useFactory: () => {
            let e = T(ct);
            return () => {
                e.setUpLocationChangeListener()
            }
        }
    }, {
        provide: Yo,
        useValue: 2
    }])
}
var rl = new ge("");

function Sh(i) {
    return Sn(0, [{
        provide: rl,
        useExisting: Mh
    }, {
        provide: hr,
        useExisting: i
    }])
}

function Eh() {
    return Sn(8, [mc, {
        provide: fr,
        useExisting: mc
    }])
}

function Ih(i) {
    let e = [{
        provide: Qc,
        useValue: ph
    }, {
        provide: Yc,
        useValue: C({
            skipNextTransition: !!i ? .skipInitialTransition
        }, i)
    }];
    return Sn(9, e)
}
var vc = new ge("ROUTER_FORROOT_GUARD"),
    Th = [Yn, {
        provide: xn,
        useClass: Cn
    }, ct, vi, {
        provide: mt,
        useFactory: el,
        deps: [ct]
    }, qo, []],
    tt = (() => {
        let e = class e {
            constructor(n) {}
            static forRoot(n, r) {
                return {
                    ngModule: e,
                    providers: [Th, [], {
                        provide: gi,
                        multi: !0,
                        useValue: n
                    }, {
                        provide: vc,
                        useFactory: Dh,
                        deps: [
                            [ct, new Vr, new ta]
                        ]
                    }, {
                        provide: _i,
                        useValue: r || {}
                    }, r ? .useHash ? Rh() : Ah(), kh(), r ? .preloadingStrategy ? Sh(r.preloadingStrategy).\u0275providers : [], r ? .initialNavigation ? Lh(r) : [], r ? .bindToComponentInputs ? Eh().\u0275providers : [], r ? .enableViewTransitions ? Ih().\u0275providers : [], Nh()]
                }
            }
            static forChild(n) {
                return {
                    ngModule: e,
                    providers: [{
                        provide: gi,
                        multi: !0,
                        useValue: n
                    }]
                }
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(ee(vc, 8))
        }, e.\u0275mod = ke({
            type: e
        }), e.\u0275inj = Te({});
        let i = e;
        return i
    })();

function kh() {
    return {
        provide: Qo,
        useFactory: () => {
            let i = T(Xn),
                e = T(Pe),
                t = T(_i),
                n = T(gr),
                r = T(xn);
            return t.scrollOffset && i.setOffset(t.scrollOffset), new Jc(r, n, i, e, t)
        }
    }
}

function Rh() {
    return {
        provide: Qn,
        useClass: Ua
    }
}

function Ah() {
    return {
        provide: Qn,
        useClass: za
    }
}

function Dh(i) {
    return "guarded"
}

function Lh(i) {
    return [i.initialNavigation === "disabled" ? Ph().\u0275providers : [], i.initialNavigation === "enabledBlocking" ? xh().\u0275providers : []]
}
var Cc = new ge("");

function Nh() {
    return [{
        provide: Cc,
        useFactory: nl
    }, {
        provide: qn,
        multi: !0,
        useExisting: Cc
    }]
}
var sl = !(typeof navigator > "u") && navigator.product === "ReactNative",
    al = {
        timeout: sl ? 6e4 : 12e4
    },
    cl = function(i) {
        let e = C(C({}, al), typeof i == "string" ? {
            url: i
        } : i);
        if (e.timeout = ll(e.timeout), e.query) {
            let {
                url: t,
                searchParams: n
            } = function(r) {
                let o = r.indexOf("?");
                if (o === -1) return {
                    url: r,
                    searchParams: new URLSearchParams
                };
                let s = r.slice(0, o),
                    a = r.slice(o + 1);
                if (!sl) return {
                    url: s,
                    searchParams: new URLSearchParams(a)
                };
                if (typeof decodeURIComponent != "function") throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
                let c = new URLSearchParams;
                for (let l of a.split("&")) {
                    let [d, f] = l.split("=");
                    d && c.append(ol(d), ol(f || ""))
                }
                return {
                    url: s,
                    searchParams: c
                }
            }(e.url);
            for (let [r, o] of Object.entries(e.query)) {
                if (o !== void 0)
                    if (Array.isArray(o))
                        for (let a of o) n.append(r, a);
                    else n.append(r, o);
                let s = n.toString();
                s && (e.url = `${t}?${s}`)
            }
        }
        return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e
    };

function ol(i) {
    return decodeURIComponent(i.replace(/\+/g, " "))
}

function ll(i) {
    if (i === !1 || i === 0) return !1;
    if (i.connect || i.socket) return i;
    let e = Number(i);
    return isNaN(e) ? ll(al.timeout) : {
        connect: e,
        socket: e
    }
}
var jh = /^https?:\/\//i,
    dl = function(i) {
        if (!jh.test(i.url)) throw new Error(`"${i.url}" is not a valid URL`)
    };

function yr(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var Fh = ["request", "response", "progress", "error", "abort"],
    ul = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];

function pl(i, e) {
    let t = [],
        n = ul.reduce((o, s) => (o[s] = o[s] || [], o), {
            processOptions: [cl],
            validateOptions: [dl]
        });

    function r(o) {
        let s = Fh.reduce((g, w) => (g[w] = function() {
                let v = Object.create(null),
                    x = 0;
                return {
                    publish: function(R) {
                        for (let z in v) v[z](R)
                    },
                    subscribe: function(R) {
                        let z = x++;
                        return v[z] = R,
                            function() {
                                delete v[z]
                            }
                    }
                }
            }(), g), {}),
            a = (g => function(w, v, ...x) {
                let R = w === "onError",
                    z = v;
                for (let re = 0; re < g[w].length && (z = (0, g[w][re])(z, ...x), !R || z); re++);
                return z
            })(n),
            c = a("processOptions", o);
        a("validateOptions", c);
        let l = {
                options: c,
                channels: s,
                applyMiddleware: a
            },
            d, f = s.request.subscribe(g => {
                d = e(g, (w, v) => ((x, R, z) => {
                    let re = x,
                        pe = R;
                    if (!re) try {
                        pe = a("onResponse", R, z)
                    } catch (Ce) {
                        pe = null, re = Ce
                    }
                    re = re && a("onError", re, z), re ? s.error.publish(re) : pe && s.response.publish(pe)
                })(w, v, g))
            });
        s.abort.subscribe(() => {
            f(), d && d.abort()
        });
        let m = a("onReturn", s, l);
        return m === s && s.request.publish(l), m
    }
    return r.use = function(o) {
        if (!o) throw new Error("Tried to add middleware that resolved to falsey value");
        if (typeof o == "function") throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        if (o.onReturn && n.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        return ul.forEach(s => {
            o[s] && n[s].push(o[s])
        }), t.push(o), r
    }, r.clone = () => pl(t, e), i.forEach(r.use), r
}
var Ko = function(i) {
        return i.replace(/^\s+|\s+$/g, "")
    },
    zh = yr(function(i) {
        if (!i) return {};
        for (var e = {}, t = Ko(i).split(`
`), n = 0; n < t.length; n++) {
            var r = t[n],
                o = r.indexOf(":"),
                s = Ko(r.slice(0, o)).toLowerCase(),
                a = Ko(r.slice(o + 1));
            typeof e[s] > "u" ? e[s] = a : (c = e[s], Object.prototype.toString.call(c) === "[object Array]" ? e[s].push(a) : e[s] = [e[s], a])
        }
        var c;
        return e
    }),
    wi = class {
        onabort;
        onerror;
        onreadystatechange;
        ontimeout;
        readyState = 0;
        response;
        responseText = "";
        responseType = "";
        status;
        statusText;
        withCredentials;#
        e;#
        t;#
        i;#
        r = {};#
        n;#
        o = {};#
        s;
        open(e, t, n) {
            this.#e = e, this.#t = t, this.#i = "", this.readyState = 1, this.onreadystatechange ? .(), this.#n = void 0
        }
        abort() {
            this.#n && this.#n.abort()
        }
        getAllResponseHeaders() {
            return this.#i
        }
        setRequestHeader(e, t) {
            this.#r[e] = t
        }
        setInit(e, t = !0) {
            this.#o = e, this.#s = t
        }
        send(e) {
            let t = this.responseType !== "arraybuffer",
                n = ae(C({}, this.#o), {
                    method: this.#e,
                    headers: this.#r,
                    body: e
                });
            typeof AbortController == "function" && this.#s && (this.#n = new AbortController, typeof EventTarget < "u" && this.#n.signal instanceof EventTarget && (n.signal = this.#n.signal)), typeof document < "u" && (n.credentials = this.withCredentials ? "include" : "omit"), fetch(this.#t, n).then(r => (r.headers.forEach((o, s) => {
                this.#i += `${s}: ${o}\r
`
            }), this.status = r.status, this.statusText = r.statusText, this.readyState = 3, this.onreadystatechange ? .(), t ? r.text() : r.arrayBuffer())).then(r => {
                typeof r == "string" ? this.responseText = r : this.response = r, this.readyState = 4, this.onreadystatechange ? .()
            }).catch(r => {
                r.name !== "AbortError" ? this.onerror ? .(r) : this.onabort ? .()
            })
        }
    },
    Xo = typeof XMLHttpRequest == "function" ? "xhr" : "fetch",
    Uh = Xo === "xhr" ? XMLHttpRequest : wi,
    Bh = (i, e) => {
        let t = i.options,
            n = i.applyMiddleware("finalizeOptions", t),
            r = {},
            o = i.applyMiddleware("interceptRequest", void 0, {
                adapter: Xo,
                context: i
            });
        if (o) {
            let v = setTimeout(e, 0, null, o);
            return {
                abort: () => clearTimeout(v)
            }
        }
        let s = new Uh;
        s instanceof wi && typeof n.fetch == "object" && s.setInit(n.fetch, n.useAbortSignal ? ? !0);
        let a = n.headers,
            c = n.timeout,
            l = !1,
            d = !1,
            f = !1;
        if (s.onerror = v => {
                w(s instanceof wi ? v instanceof Error ? v : new Error(`Request error while attempting to reach is ${n.url}`, {
                    cause: v
                }) : new Error(`Request error while attempting to reach is ${n.url}${v.lengthComputable?`(${v.loaded} of ${v.total} bytes transferred)`:""}`))
            }, s.ontimeout = v => {
                w(new Error(`Request timeout while attempting to reach ${n.url}${v.lengthComputable?`(${v.loaded} of ${v.total} bytes transferred)`:""}`))
            }, s.onabort = () => {
                g(!0), l = !0
            }, s.onreadystatechange = () => {
                c && (g(), r.socket = setTimeout(() => m("ESOCKETTIMEDOUT"), c.socket)), !l && s.readyState === 4 && s.status !== 0 && function() {
                    if (!(l || d || f)) {
                        if (s.status === 0) return void w(new Error("Unknown XHR error"));
                        g(), d = !0, e(null, {
                            body: s.response || (s.responseType === "" || s.responseType === "text" ? s.responseText : ""),
                            url: n.url,
                            method: n.method,
                            headers: zh(s.getAllResponseHeaders()),
                            statusCode: s.status,
                            statusMessage: s.statusText
                        })
                    }
                }()
            }, s.open(n.method, n.url, !0), s.withCredentials = !!n.withCredentials, a && s.setRequestHeader)
            for (let v in a) a.hasOwnProperty(v) && s.setRequestHeader(v, a[v]);
        return n.rawBody && (s.responseType = "arraybuffer"), i.applyMiddleware("onRequest", {
            options: n,
            adapter: Xo,
            request: s,
            context: i
        }), s.send(n.body || null), c && (r.connect = setTimeout(() => m("ETIMEDOUT"), c.connect)), {
            abort: function() {
                l = !0, s && s.abort()
            }
        };

        function m(v) {
            f = !0, s.abort();
            let x = new Error(v === "ESOCKETTIMEDOUT" ? `Socket timed out on request to ${n.url}` : `Connection timed out on request to ${n.url}`);
            x.code = v, i.channels.error.publish(x)
        }

        function g(v) {
            (v || l || s.readyState >= 2 && r.connect) && clearTimeout(r.connect), r.socket && clearTimeout(r.socket)
        }

        function w(v) {
            if (d) return;
            g(!0), d = !0, s = null;
            let x = v || new Error(`Network error while attempting to reach ${n.url}`);
            x.isNetworkError = !0, x.request = n, e(x)
        }
    },
    hl = (i = [], e = Bh) => pl(i, e);

function $h(i) {
    return {}
}
var fl, ml, Zo = {
    exports: {}
};

function Hh() {
    if (ml) return fl;
    ml = 1;
    var i = 1e3,
        e = 60 * i,
        t = 60 * e,
        n = 24 * t,
        r = 7 * n,
        o = 365.25 * n;

    function s(a, c, l, d) {
        var f = c >= 1.5 * l;
        return Math.round(a / l) + " " + d + (f ? "s" : "")
    }
    return fl = function(a, c) {
        c = c || {};
        var l, d, f = typeof a;
        if (f === "string" && a.length > 0) return function(m) {
            if (!((m = String(m)).length > 100)) {
                var g = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(m);
                if (g) {
                    var w = parseFloat(g[1]);
                    switch ((g[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return w * o;
                        case "weeks":
                        case "week":
                        case "w":
                            return w * r;
                        case "days":
                        case "day":
                        case "d":
                            return w * n;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return w * t;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return w * e;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return w * i;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return w;
                        default:
                            return
                    }
                }
            }
        }(a);
        if (f === "number" && isFinite(a)) return c.long ? (l = a, (d = Math.abs(l)) >= n ? s(l, d, n, "day") : d >= t ? s(l, d, t, "hour") : d >= e ? s(l, d, e, "minute") : d >= i ? s(l, d, i, "second") : l + " ms") : function(m) {
            var g = Math.abs(m);
            return g >= n ? Math.round(m / n) + "d" : g >= t ? Math.round(m / t) + "h" : g >= e ? Math.round(m / e) + "m" : g >= i ? Math.round(m / i) + "s" : m + "ms"
        }(a);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
    }
}
var Wh = function(i) {
    function e(r) {
        let o, s, a, c = null;

        function l(...d) {
            if (!l.enabled) return;
            let f = l,
                m = Number(new Date),
                g = m - (o || m);
            f.diff = g, f.prev = o, f.curr = m, o = m, d[0] = e.coerce(d[0]), typeof d[0] != "string" && d.unshift("%O");
            let w = 0;
            d[0] = d[0].replace(/%([a-zA-Z%])/g, (v, x) => {
                if (v === "%%") return "%";
                w++;
                let R = e.formatters[x];
                if (typeof R == "function") {
                    let z = d[w];
                    v = R.call(f, z), d.splice(w, 1), w--
                }
                return v
            }), e.formatArgs.call(f, d), (f.log || e.log).apply(f, d)
        }
        return l.namespace = r, l.useColors = e.useColors(), l.color = e.selectColor(r), l.extend = t, l.destroy = e.destroy, Object.defineProperty(l, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => c !== null ? c : (s !== e.namespaces && (s = e.namespaces, a = e.enabled(r)), a),
            set: d => {
                c = d
            }
        }), typeof e.init == "function" && e.init(l), l
    }

    function t(r, o) {
        let s = e(this.namespace + (typeof o > "u" ? ":" : o) + r);
        return s.log = this.log, s
    }

    function n(r) {
        return r.toString().substring(2, r.toString().length - 2).replace(/\.\*\?$/, "*")
    }
    return e.debug = e, e.default = e, e.coerce = function(r) {
        return r instanceof Error ? r.stack || r.message : r
    }, e.disable = function() {
        let r = [...e.names.map(n), ...e.skips.map(n).map(o => "-" + o)].join(",");
        return e.enable(""), r
    }, e.enable = function(r) {
        let o;
        e.save(r), e.namespaces = r, e.names = [], e.skips = [];
        let s = (typeof r == "string" ? r : "").split(/[\s,]+/),
            a = s.length;
        for (o = 0; o < a; o++) s[o] && ((r = s[o].replace(/\*/g, ".*?"))[0] === "-" ? e.skips.push(new RegExp("^" + r.slice(1) + "$")) : e.names.push(new RegExp("^" + r + "$")))
    }, e.enabled = function(r) {
        if (r[r.length - 1] === "*") return !0;
        let o, s;
        for (o = 0, s = e.skips.length; o < s; o++)
            if (e.skips[o].test(r)) return !1;
        for (o = 0, s = e.names.length; o < s; o++)
            if (e.names[o].test(r)) return !0;
        return !1
    }, e.humanize = Hh(), e.destroy = function() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }, Object.keys(i).forEach(r => {
        e[r] = i[r]
    }), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function(r) {
        let o = 0;
        for (let s = 0; s < r.length; s++) o = (o << 5) - o + r.charCodeAt(s), o |= 0;
        return e.colors[Math.abs(o) % e.colors.length]
    }, e.enable(e.load()), e
};
(function(i, e) {
    e.formatArgs = function(n) {
        if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + i.exports.humanize(this.diff), !this.useColors) return;
        let r = "color: " + this.color;
        n.splice(1, 0, r, "color: inherit");
        let o = 0,
            s = 0;
        n[0].replace(/%[a-zA-Z%]/g, a => {
            a !== "%%" && (o++, a === "%c" && (s = o))
        }), n.splice(s, 0, r)
    }, e.save = function(n) {
        try {
            n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug")
        } catch {}
    }, e.load = function() {
        let n;
        try {
            n = e.storage.getItem("debug")
        } catch {}
        return !n && typeof process < "u" && "env" in process && (n = process.env.DEBUG), n
    }, e.useColors = function() {
        return !(!(typeof window < "u" && window.process) || window.process.type !== "renderer" && !window.process.__nwjs) || !(typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && (typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }, e.storage = function() {
        try {
            return localStorage
        } catch {}
    }(), e.destroy = (() => {
        let n = !1;
        return () => {
            n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), i.exports = Wh(e);
    let {
        formatters: t
    } = i.exports;
    t.j = function(n) {
        try {
            return JSON.stringify(n)
        } catch (r) {
            return "[UnexpectedJSONParseError]: " + r.message
        }
    }
})(Zo, Zo.exports);
var cb = yr(Zo.exports);
var Vh = typeof Buffer > "u" ? () => !1 : i => Buffer.isBuffer(i);

function gl(i) {
    return Object.prototype.toString.call(i) === "[object Object]"
}

function qh(i) {
    if (gl(i) === !1) return !1;
    let e = i.constructor;
    if (e === void 0) return !0;
    let t = e.prototype;
    return !(gl(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)
}
var Gh = ["boolean", "string", "number"];

function bl() {
    return {
        processOptions: i => {
            let e = i.body;
            return !e || typeof e.pipe == "function" || Vh(e) || Gh.indexOf(typeof e) === -1 && !Array.isArray(e) && !qh(e) ? i : Object.assign({}, i, {
                body: JSON.stringify(i.body),
                headers: Object.assign({}, i.headers, {
                    "Content-Type": "application/json"
                })
            })
        }
    }
}

function vl(i) {
    return {
        onResponse: t => {
            let n = t.headers["content-type"] || "",
                r = i && i.force || n.indexOf("application/json") !== -1;
            return t.body && n && r ? Object.assign({}, t, {
                body: e(t.body)
            }) : t
        },
        processOptions: t => Object.assign({}, t, {
            headers: Object.assign({
                Accept: "application/json"
            }, t.headers)
        })
    };

    function e(t) {
        try {
            return JSON.parse(t)
        } catch (n) {
            throw n.message = `Failed to parsed response body as JSON: ${n.message}`, n
        }
    }
}
var Oi = {};
typeof globalThis < "u" ? Oi = globalThis : typeof window < "u" ? Oi = window : typeof global < "u" ? Oi = global : typeof self < "u" && (Oi = self);
var Qh = Oi;

function Cl(i = {}) {
    let e = i.implementation || Qh.Observable;
    if (!e) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
    return {
        onReturn: (t, n) => new e(r => (t.error.subscribe(o => r.error(o)), t.progress.subscribe(o => r.next(Object.assign({
            type: "progress"
        }, o))), t.response.subscribe(o => {
            r.next(Object.assign({
                type: "response"
            }, o)), r.complete()
        }), t.request.publish(n), () => t.abort.publish()))
    }
}

function _l() {
    return {
        onRequest: i => {
            if (i.adapter !== "xhr") return;
            let e = i.request,
                t = i.context;

            function n(r) {
                return o => {
                    let s = o.lengthComputable ? o.loaded / o.total * 100 : -1;
                    t.channels.progress.publish({
                        stage: r,
                        percent: s,
                        total: o.total,
                        loaded: o.loaded,
                        lengthComputable: o.lengthComputable
                    })
                }
            }
            "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"))
        }
    }
}
var Jo = (i = {}) => {
        let e = i.implementation || Promise;
        if (!e) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
        return {
            onReturn: (t, n) => new e((r, o) => {
                let s = n.options.cancelToken;
                s && s.promise.then(a => {
                    t.abort.publish(a), o(a)
                }), t.error.subscribe(o), t.response.subscribe(a => {
                    r(i.onlyBody ? a.body : a)
                }), setTimeout(() => {
                    try {
                        t.request.publish(n)
                    } catch (a) {
                        o(a)
                    }
                }, 0)
            })
        }
    },
    br = class {
        __CANCEL__ = !0;
        message;
        constructor(e) {
            this.message = e
        }
        toString() {
            return "Cancel" + (this.message ? `: ${this.message}` : "")
        }
    },
    Yh = (() => {
        class i {
            promise;
            reason;
            constructor(t) {
                if (typeof t != "function") throw new TypeError("executor must be a function.");
                let n = null;
                this.promise = new Promise(r => {
                    n = r
                }), t(r => {
                    this.reason || (this.reason = new br(r), n(this.reason))
                })
            }
            static source = () => {
                let t;
                return {
                    token: new i(n => {
                        t = n
                    }),
                    cancel: t
                }
            }
        }
        return i
    })();
Jo.Cancel = br, Jo.CancelToken = Yh, Jo.isCancel = i => !(!i || !i ? .__CANCEL__);
var wl = (i, e, t) => (t.method === "GET" || t.method === "HEAD") && (i.isNetworkError || !1);

function Kh(i) {
    return 100 * Math.pow(2, i) + 100 * Math.random()
}
var vr = (i = {}) => (e => {
    let t = e.maxRetries || 5,
        n = e.retryDelay || Kh,
        r = e.shouldRetry;
    return {
        onError: (o, s) => {
            let a = s.options,
                c = a.maxRetries || t,
                l = a.retryDelay || n,
                d = a.shouldRetry || r,
                f = a.attemptNumber || 0;
            if ((m = a.body) !== null && typeof m == "object" && typeof m.pipe == "function" || !d(o, f, a) || f >= c) return o;
            var m;
            let g = Object.assign({}, s, {
                options: Object.assign({}, a, {
                    attemptNumber: f + 1
                })
            });
            return setTimeout(() => s.channels.request.publish(g), l(f)), null
        }
    }
})(C({
    shouldRetry: wl
}, i));
vr.shouldRetry = wl;
var es = class extends Error {
        request;
        code;
        constructor(e, t) {
            super(e.message), this.request = t, this.code = e.code
        }
    },
    lb = (yl = $h, function(i = {}) {
        let {
            maxRetries: e = 3,
            ms: t = 1e3,
            maxFree: n = 256
        } = i, {
            finalizeOptions: r
        } = yl({
            keepAlive: !0,
            keepAliveMsecs: t,
            maxFreeSockets: n
        });
        return {
            finalizeOptions: r,
            onError: (o, s) => {
                if ((s.options.method === "GET" || s.options.method === "POST") && o instanceof es && o.code === "ECONNRESET" && o.request.reusedSocket) {
                    let a = s.options.attemptNumber || 0;
                    if (a < e) {
                        let c = Object.assign({}, s, {
                            options: Object.assign({}, s.options, {
                                attemptNumber: a + 1
                            })
                        });
                        return setImmediate(() => s.channels.request.publish(c)), null
                    }
                }
                return o
            }
        }
    }),
    yl;
var ts = class extends Error {
        response;
        statusCode = 400;
        responseBody;
        details;
        constructor(e) {
            let t = Sl(e);
            super(t.message), Object.assign(this, t)
        }
    },
    ns = class extends Error {
        response;
        statusCode = 500;
        responseBody;
        details;
        constructor(e) {
            let t = Sl(e);
            super(t.message), Object.assign(this, t)
        }
    };

function Sl(i) {
    let e = i.body,
        t = {
            response: i,
            statusCode: i.statusCode,
            responseBody: ef(e, i),
            message: "",
            details: void 0
        };
    if (e.error && e.message) return t.message = `${e.error} - ${e.message}`, t;
    if (Xh(e) || Jh(e)) {
        let n = e.error.items || [],
            r = n.slice(0, 5).map(s => s.error ? .description).filter(Boolean),
            o = r.length ? `:
- ${r.join(`
- `)}` : "";
        return n.length > 5 && (o += `
...and ${n.length-5} more`), t.message = `${e.error.description}${o}`, t.details = e.error, t
    }
    return e.error && e.error.description ? (t.message = e.error.description, t.details = e.error, t) : (t.message = e.error || e.message || Zh(i), t)
}

function Xh(i) {
    return Cr(i) && Cr(i.error) && i.error.type === "mutationError" && typeof i.error.description == "string"
}

function Jh(i) {
    return Cr(i) && Cr(i.error) && i.error.type === "actionError" && typeof i.error.description == "string"
}

function Cr(i) {
    return typeof i == "object" && i !== null && !Array.isArray(i)
}

function Zh(i) {
    let e = i.statusMessage ? ` ${i.statusMessage}` : "";
    return `${i.method}-request to ${i.url} resulted in HTTP ${i.statusCode}${e}`
}

function ef(i, e) {
    return (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(i, null, 2) : i
}
var tf = {
        onResponse: i => {
            if (i.statusCode >= 500) throw new ns(i);
            if (i.statusCode >= 400) throw new ts(i);
            return i
        }
    },
    nf = {
        onResponse: i => {
            let e = i.headers["x-sanity-warning"];
            return (Array.isArray(e) ? e : [e]).filter(Boolean).forEach(t => console.warn(t)), i
        }
    };

function rf(i) {
    return hl([vr({
        shouldRetry: of
    }), ...i, nf, bl(), vl(), _l(), tf, Cl({
        implementation: Mt
    })])
}

function of (i, e, t) {
    if (t.maxRetries === 0) return !1;
    let n = t.method === "GET" || t.method === "HEAD",
        r = (t.uri || t.url).startsWith("/data/query"),
        o = i.response && (i.response.statusCode === 429 || i.response.statusCode === 502 || i.response.statusCode === 503);
    return (n || r) && o ? !0 : vr.shouldRetry(i, e, t)
}

function El(i) {
    if (typeof i == "string") return {
        id: i
    };
    if (Array.isArray(i)) return {
        query: "*[_id in $ids]",
        params: {
            ids: i
        }
    };
    if (typeof i == "object" && i !== null && "query" in i && typeof i.query == "string") return "params" in i && typeof i.params == "object" && i.params !== null ? {
        query: i.query,
        params: i.params
    } : {
        query: i.query
    };
    let e = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
    throw new Error(`Unknown selection - must be one of:

${e}`)
}
var Ol = ["image", "file"],
    Ml = ["before", "after", "replace"],
    Il = i => {
        if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(i)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
    },
    sf = i => {
        if (!/^[-a-z0-9]+$/i.test(i)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")
    },
    af = i => {
        if (Ol.indexOf(i) === -1) throw new Error(`Invalid asset type: ${i}. Must be one of ${Ol.join(", ")}`)
    },
    Mi = (i, e) => {
        if (e === null || typeof e != "object" || Array.isArray(e)) throw new Error(`${i}() takes an object of properties`)
    },
    Tl = (i, e) => {
        if (typeof e != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) || e.includes("..")) throw new Error(`${i}(): "${e}" is not a valid document ID`)
    },
    _r = (i, e) => {
        if (!e._id) throw new Error(`${i}() requires that the document contains an ID ("_id" property)`);
        Tl(i, e._id)
    },
    cf = (i, e, t) => {
        let n = "insert(at, selector, items)";
        if (Ml.indexOf(i) === -1) {
            let r = Ml.map(o => `"${o}"`).join(", ");
            throw new Error(`${n} takes an "at"-argument which is one of: ${r}`)
        }
        if (typeof e != "string") throw new Error(`${n} takes a "selector"-argument which must be a string`);
        if (!Array.isArray(t)) throw new Error(`${n} takes an "items"-argument which must be an array`)
    },
    kl = i => {
        if (!i.dataset) throw new Error("`dataset` must be provided to perform queries");
        return i.dataset || ""
    },
    Rl = i => {
        if (typeof i != "string" || !/^[a-z0-9._-]{1,75}$/i.test(i)) throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
        return i
    },
    wr = class {
        selection;
        operations;
        constructor(e, t = {}) {
            this.selection = e, this.operations = t
        }
        set(e) {
            return this._assign("set", e)
        }
        setIfMissing(e) {
            return this._assign("setIfMissing", e)
        }
        diffMatchPatch(e) {
            return Mi("diffMatchPatch", e), this._assign("diffMatchPatch", e)
        }
        unset(e) {
            if (!Array.isArray(e)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
            return this.operations = Object.assign({}, this.operations, {
                unset: e
            }), this
        }
        inc(e) {
            return this._assign("inc", e)
        }
        dec(e) {
            return this._assign("dec", e)
        }
        insert(e, t, n) {
            return cf(e, t, n), this._assign("insert", {
                [e]: t,
                items: n
            })
        }
        append(e, t) {
            return this.insert("after", `${e}[-1]`, t)
        }
        prepend(e, t) {
            return this.insert("before", `${e}[0]`, t)
        }
        splice(e, t, n, r) {
            let o = typeof n > "u" || n === -1,
                s = t < 0 ? t - 1 : t,
                a = o ? -1 : Math.max(0, t + n),
                c = s < 0 && a >= 0 ? "" : a,
                l = `${e}[${s}:${c}]`;
            return this.insert("replace", l, r || [])
        }
        ifRevisionId(e) {
            return this.operations.ifRevisionID = e, this
        }
        serialize() {
            return C(C({}, El(this.selection)), this.operations)
        }
        toJSON() {
            return this.serialize()
        }
        reset() {
            return this.operations = {}, this
        }
        _assign(e, t, n = !0) {
            return Mi(e, t), this.operations = Object.assign({}, this.operations, {
                [e]: Object.assign({}, n && this.operations[e] || {}, t)
            }), this
        }
        _set(e, t) {
            return this._assign(e, t, !1)
        }
    },
    Zt = class i extends wr {#
        e;
        constructor(e, t, n) {
            super(e, t), this.#e = n
        }
        clone() {
            return new i(this.selection, C({}, this.operations), this.#e)
        }
        commit(e) {
            if (!this.#e) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
            let t = typeof this.selection == "string",
                n = Object.assign({
                    returnFirst: t,
                    returnDocuments: !0
                }, e);
            return this.#e.mutate({
                patch: this.serialize()
            }, n)
        }
    },
    en = class i extends wr {#
        e;
        constructor(e, t, n) {
            super(e, t), this.#e = n
        }
        clone() {
            return new i(this.selection, C({}, this.operations), this.#e)
        }
        commit(e) {
            if (!this.#e) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
            let t = typeof this.selection == "string",
                n = Object.assign({
                    returnFirst: t,
                    returnDocuments: !0
                }, e);
            return this.#e.mutate({
                patch: this.serialize()
            }, n)
        }
    },
    Al = {
        returnDocuments: !1
    },
    Or = class {
        operations;
        trxId;
        constructor(e = [], t) {
            this.operations = e, this.trxId = t
        }
        create(e) {
            return Mi("create", e), this._add({
                create: e
            })
        }
        createIfNotExists(e) {
            let t = "createIfNotExists";
            return Mi(t, e), _r(t, e), this._add({
                [t]: e
            })
        }
        createOrReplace(e) {
            let t = "createOrReplace";
            return Mi(t, e), _r(t, e), this._add({
                [t]: e
            })
        }
        delete(e) {
            return Tl("delete", e), this._add({
                delete: {
                    id: e
                }
            })
        }
        transactionId(e) {
            return e ? (this.trxId = e, this) : this.trxId
        }
        serialize() {
            return [...this.operations]
        }
        toJSON() {
            return this.serialize()
        }
        reset() {
            return this.operations = [], this
        }
        _add(e) {
            return this.operations.push(e), this
        }
    },
    Mr = class i extends Or {#
        e;
        constructor(e, t, n) {
            super(e, n), this.#e = t
        }
        clone() {
            return new i([...this.operations], this.#e, this.trxId)
        }
        commit(e) {
            if (!this.#e) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#e.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, Al, e || {}))
        }
        patch(e, t) {
            let n = typeof t == "function";
            if (typeof e != "string" && e instanceof en) return this._add({
                patch: e.serialize()
            });
            if (n) {
                let r = t(new en(e, {}, this.#e));
                if (!(r instanceof en)) throw new Error("function passed to `patch()` must return the patch");
                return this._add({
                    patch: r.serialize()
                })
            }
            return this._add({
                patch: C({
                    id: e
                }, t)
            })
        }
    },
    xr = class i extends Or {#
        e;
        constructor(e, t, n) {
            super(e, n), this.#e = t
        }
        clone() {
            return new i([...this.operations], this.#e, this.trxId)
        }
        commit(e) {
            if (!this.#e) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#e.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, Al, e || {}))
        }
        patch(e, t) {
            let n = typeof t == "function";
            if (typeof e != "string" && e instanceof Zt) return this._add({
                patch: e.serialize()
            });
            if (n) {
                let r = t(new Zt(e, {}, this.#e));
                if (!(r instanceof Zt)) throw new Error("function passed to `patch()` must return the patch");
                return this._add({
                    patch: r.serialize()
                })
            }
            return this._add({
                patch: C({
                    id: e
                }, t)
            })
        }
    },
    lf = "https://www.sanity.io/help/";

function hs(i) {
    return lf + i
}

function df(i) {
    let e = !1,
        t;
    return (...n) => (e || (t = i(...n), e = !0), t)
}
var Tn = i => df((...e) => console.warn(i.join(" "), ...e)),
    uf = Tn(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]),
    pf = Tn(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
    hf = Tn(["The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
    ff = Tn(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${hs("js-client-browser-token")} for more information and how to hide this warning.`]),
    mf = Tn(["Using the Sanity client without specifying an API version is deprecated.", `See ${hs("js-client-api-version")}`]),
    gf = Tn(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]),
    yf = "apicdn.sanity.io",
    xi = {
        apiHost: "https://api.sanity.io",
        apiVersion: "1",
        useProjectHostname: !0,
        stega: {
            enabled: !1
        }
    },
    bf = ["localhost", "127.0.0.1", "0.0.0.0"],
    vf = i => bf.indexOf(i) !== -1;

function Cf(i) {
    if (i === "1" || i === "X") return;
    let e = new Date(i);
    if (!(/^\d{4}-\d{2}-\d{2}$/.test(i) && e instanceof Date && e.getTime() > 0)) throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
}
var Dl = function(i) {
        switch (i) {
            case "previewDrafts":
            case "published":
            case "raw":
                return;
            default:
                throw new TypeError("Invalid API perspective string, expected `published`, `previewDrafts` or `raw`")
        }
    },
    Ll = (i, e) => {
        let t = ae(C(C({}, e), i), {
            stega: C(C({}, typeof e.stega == "boolean" ? {
                enabled: e.stega
            } : e.stega || xi.stega), typeof i.stega == "boolean" ? {
                enabled: i.stega
            } : i.stega || {})
        });
        t.apiVersion || mf();
        let n = C(C({}, xi), t),
            r = n.useProjectHostname;
        if (typeof Promise > "u") {
            let f = hs("js-client-promise-polyfill");
            throw new Error(`No native Promise-implementation found, polyfill needed - see ${f}`)
        }
        if (r && !n.projectId) throw new Error("Configuration must contain `projectId`");
        if (typeof n.perspective == "string" && Dl(n.perspective), "encodeSourceMap" in n) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
        if ("encodeSourceMapAtPath" in n) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
        if (typeof n.stega.enabled != "boolean") throw new Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);
        if (n.stega.enabled && n.stega.studioUrl === void 0) throw new Error("stega.studioUrl must be defined when stega.enabled is true");
        if (n.stega.enabled && typeof n.stega.studioUrl != "string" && typeof n.stega.studioUrl != "function") throw new Error(`stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`);
        let o = typeof window < "u" && window.location && window.location.hostname,
            s = o && vf(window.location.hostname);
        o && s && n.token && n.ignoreBrowserTokenWarning !== !0 ? ff() : typeof n.useCdn > "u" && pf(), r && sf(n.projectId), n.dataset && Il(n.dataset), "requestTagPrefix" in n && (n.requestTagPrefix = n.requestTagPrefix ? Rl(n.requestTagPrefix).replace(/\.+$/, "") : void 0), n.apiVersion = `${n.apiVersion}`.replace(/^v/, ""), n.isDefaultApi = n.apiHost === xi.apiHost, n.useCdn === !0 && n.withCredentials && uf(), n.useCdn = n.useCdn !== !1 && !n.withCredentials, Cf(n.apiVersion);
        let a = n.apiHost.split("://", 2),
            c = a[0],
            l = a[1],
            d = n.isDefaultApi ? yf : l;
        return n.useProjectHostname ? (n.url = `${c}://${n.projectId}.${l}/v${n.apiVersion}`, n.cdnUrl = `${c}://${n.projectId}.${d}/v${n.apiVersion}`) : (n.url = `${n.apiHost}/v${n.apiVersion}`, n.cdnUrl = n.url), n
    },
    _f = "X-Sanity-Project-ID";

function wf(i, e = {}) {
    let t = {},
        n = e.token || i.token;
    n && (t.Authorization = `Bearer ${n}`), !e.useGlobalApi && !i.useProjectHostname && i.projectId && (t[_f] = i.projectId);
    let r = !!(typeof e.withCredentials > "u" ? i.token || i.withCredentials : e.withCredentials),
        o = typeof e.timeout > "u" ? i.timeout : e.timeout;
    return Object.assign({}, e, {
        headers: Object.assign({}, t, e.headers || {}),
        timeout: typeof o > "u" ? 5 * 60 * 1e3 : o,
        proxy: e.proxy || i.proxy,
        json: !0,
        withCredentials: r,
        fetch: typeof e.fetch == "object" && typeof i.fetch == "object" ? C(C({}, i.fetch), e.fetch) : e.fetch || i.fetch
    })
}
var Nl = ({
        query: i,
        params: e = {},
        options: t = {}
    }) => {
        let n = new URLSearchParams,
            c = t,
            {
                tag: r,
                includeMutations: o,
                returnQuery: s
            } = c,
            a = Nn(c, ["tag", "includeMutations", "returnQuery"]);
        r && n.append("tag", r), n.append("query", i);
        for (let [l, d] of Object.entries(e)) n.append(`$${l}`, JSON.stringify(d));
        for (let [l, d] of Object.entries(a)) d && n.append(l, `${d}`);
        return s === !1 && n.append("returnQuery", "false"), o === !1 && n.append("includeMutations", "false"), `?${n}`
    },
    Of = (i, e) => i === !1 ? void 0 : typeof i > "u" ? e : i,
    Mf = (i = {}) => ({
        dryRun: i.dryRun,
        returnIds: !0,
        returnDocuments: Of(i.returnDocuments, !0),
        visibility: i.visibility || "sync",
        autoGenerateArrayKeys: i.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: i.skipCrossDatasetReferenceValidation
    }),
    fs = i => i.type === "response",
    xf = i => i.body,
    Pf = (i, e) => i.reduce((t, n) => (t[e(n)] = n, t), Object.create(null)),
    Sf = 11264;

function jl(i, e, t, n, r = {}, o = {}) {
    let s = "stega" in o ? C(C({}, t || {}), typeof o.stega == "boolean" ? {
            enabled: o.stega
        } : o.stega || {}) : t,
        a = s.enabled ? Ha(r) : r,
        c = o.filterResponse === !1 ? v => v : v => v.result,
        w = ae(C({
            useAbortSignal: typeof o.signal < "u",
            resultSourceMap: s.enabled ? "withKeyArraySelector" : o.resultSourceMap
        }, o), {
            returnQuery: o.filterResponse === !1 && o.returnQuery !== !1
        }),
        {
            cache: l,
            next: d
        } = w,
        f = Nn(w, ["cache", "next"]),
        m = typeof l < "u" || typeof d < "u" ? ae(C({}, f), {
            fetch: {
                cache: l,
                next: d
            }
        }) : f,
        g = kn(i, e, "query", {
            query: n,
            params: a
        }, m);
    return s.enabled ? g.pipe(Gs(be(
        import ("./chunk-SOZPIMX3.js").then(function(v) {
            return v.stegaEncodeSourceMap$1
        }).then(({
            stegaEncodeSourceMap: v
        }) => v))), B(([v, x]) => {
        let R = x(v.result, v.resultSourceMap, s);
        return c(ae(C({}, v), {
            result: R
        }))
    })) : g.pipe(B(c))
}

function Fl(i, e, t, n = {}) {
    let r = {
        uri: tn(i, "doc", t),
        json: !0,
        tag: n.tag,
        signal: n.signal
    };
    return Pi(i, e, r).pipe(Ue(fs), B(o => o.body.documents && o.body.documents[0]))
}

function zl(i, e, t, n = {}) {
    let r = {
        uri: tn(i, "doc", t.join(",")),
        json: !0,
        tag: n.tag,
        signal: n.signal
    };
    return Pi(i, e, r).pipe(Ue(fs), B(o => {
        let s = Pf(o.body.documents || [], a => a._id);
        return t.map(a => s[a] || null)
    }))
}

function Ul(i, e, t, n) {
    return _r("createIfNotExists", t), Sr(i, e, t, "createIfNotExists", n)
}

function Bl(i, e, t, n) {
    return _r("createOrReplace", t), Sr(i, e, t, "createOrReplace", n)
}

function $l(i, e, t, n) {
    return kn(i, e, "mutate", {
        mutations: [{
            delete: El(t)
        }]
    }, n)
}

function Hl(i, e, t, n) {
    let r;
    t instanceof en || t instanceof Zt ? r = {
        patch: t.serialize()
    } : t instanceof Mr || t instanceof xr ? r = t.serialize() : r = t;
    let o = Array.isArray(r) ? r : [r],
        s = n && n.transactionId || void 0;
    return kn(i, e, "mutate", {
        mutations: o,
        transactionId: s
    }, n)
}

function Wl(i, e, t, n) {
    let r = Array.isArray(t) ? t : [t],
        o = n && n.transactionId || void 0,
        s = n && n.skipCrossDatasetReferenceValidation || void 0,
        a = n && n.dryRun || void 0;
    return kn(i, e, "actions", {
        actions: r,
        transactionId: o,
        skipCrossDatasetReferenceValidation: s,
        dryRun: a
    }, n)
}

function kn(i, e, t, n, r = {}) {
    let o = t === "mutate",
        s = t === "actions",
        a = t === "query",
        c = o || s ? "" : Nl(n),
        l = !o && !s && c.length < Sf,
        d = l ? c : "",
        f = r.returnFirst,
        {
            timeout: m,
            token: g,
            tag: w,
            headers: v,
            returnQuery: x,
            lastLiveEventId: R
        } = r,
        z = tn(i, t, d),
        re = {
            method: l ? "GET" : "POST",
            uri: z,
            json: !0,
            body: l ? void 0 : n,
            query: o && Mf(r),
            timeout: m,
            headers: v,
            token: g,
            tag: w,
            returnQuery: x,
            perspective: r.perspective,
            resultSourceMap: r.resultSourceMap,
            lastLiveEventId: Array.isArray(R) ? R[0] : R,
            canUseCdn: a,
            signal: r.signal,
            fetch: r.fetch,
            useAbortSignal: r.useAbortSignal,
            useCdn: r.useCdn
        };
    return Pi(i, e, re).pipe(Ue(fs), B(xf), B(pe => {
        if (!o) return pe;
        let Ce = pe.results || [];
        if (r.returnDocuments) return f ? Ce[0] && Ce[0].document : Ce.map(je => je.document);
        let gt = f ? "documentId" : "documentIds",
            yt = f ? Ce[0] && Ce[0].id : Ce.map(je => je.id);
        return {
            transactionId: pe.transactionId,
            results: Ce,
            [gt]: yt
        }
    }))
}

function Sr(i, e, t, n, r = {}) {
    let o = {
            [n]: t
        },
        s = Object.assign({
            returnFirst: !0,
            returnDocuments: !0
        }, r);
    return kn(i, e, "mutate", {
        mutations: [o]
    }, s)
}

function Pi(i, e, t) {
    let n = t.url || t.uri,
        r = i.config(),
        o = typeof t.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 && n.indexOf("/data/") === 0 : t.canUseCdn,
        s = (t.useCdn ? ? r.useCdn) && o,
        a = t.tag && r.requestTagPrefix ? [r.requestTagPrefix, t.tag].join(".") : t.tag || r.requestTagPrefix;
    if (a && t.tag !== null && (t.query = C({
            tag: Rl(a)
        }, t.query)), ["GET", "HEAD", "POST"].indexOf(t.method || "GET") >= 0 && n.indexOf("/data/query/") === 0) {
        let d = t.resultSourceMap ? ? r.resultSourceMap;
        d !== void 0 && d !== !1 && (t.query = C({
            resultSourceMap: d
        }, t.query));
        let f = t.perspective || r.perspective;
        typeof f == "string" && f !== "raw" && (Dl(f), t.query = C({
            perspective: f
        }, t.query), f === "previewDrafts" && s && (s = !1, hf())), t.lastLiveEventId && (t.query = ae(C({}, t.query), {
            lastLiveEventId: t.lastLiveEventId
        })), t.returnQuery === !1 && (t.query = C({
            returnQuery: "false"
        }, t.query))
    }
    let c = wf(r, Object.assign({}, t, {
            url: ms(i, n, s)
        })),
        l = new Mt(d => e(c, r.requester).subscribe(d));
    return t.signal ? l.pipe(Ef(t.signal)) : l
}

function lt(i, e, t) {
    return Pi(i, e, t).pipe(Ue(n => n.type === "response"), B(n => n.body))
}

function tn(i, e, t) {
    let n = i.config(),
        r = kl(n),
        o = `/${e}/${r}`;
    return `/data${t?`${o}/${t}`:o}`.replace(/\/($|\?)/, "$1")
}

function ms(i, e, t = !1) {
    let {
        url: n,
        cdnUrl: r
    } = i.config();
    return `${t?r:n}/${e.replace(/^\//,"")}`
}

function Ef(i) {
    return e => new Mt(t => {
        let n = () => t.error(Tf(i));
        if (i && i.aborted) {
            n();
            return
        }
        let r = e.subscribe(t);
        return i.addEventListener("abort", n), () => {
            i.removeEventListener("abort", n), r.unsubscribe()
        }
    })
}
var If = !!globalThis.DOMException;

function Tf(i) {
    if (If) return new DOMException(i ? .reason ? ? "The operation was aborted.", "AbortError");
    let e = new Error(i ? .reason ? ? "The operation was aborted.");
    return e.name = "AbortError", e
}
var is = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        upload(e, t, n) {
            return Vl(this.#e, this.#t, e, t, n)
        }
    },
    rs = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        upload(e, t, n) {
            let r = Vl(this.#e, this.#t, e, t, n);
            return _e(r.pipe(Ue(o => o.type === "response"), B(o => o.body.document)))
        }
    };

function Vl(i, e, t, n, r = {}) {
    af(t);
    let o = r.extract || void 0;
    o && !o.length && (o = ["none"]);
    let s = kl(i.config()),
        a = t === "image" ? "images" : "files",
        c = kf(r, n),
        {
            tag: l,
            label: d,
            title: f,
            description: m,
            creditLine: g,
            filename: w,
            source: v
        } = c,
        x = {
            label: d,
            title: f,
            description: m,
            filename: w,
            meta: o,
            creditLine: g
        };
    return v && (x.sourceId = v.id, x.sourceName = v.name, x.sourceUrl = v.url), Pi(i, e, {
        tag: l,
        method: "POST",
        timeout: c.timeout || 0,
        uri: `/assets/${a}/${s}`,
        headers: c.contentType ? {
            "Content-Type": c.contentType
        } : {},
        query: x,
        body: n
    })
}

function kf(i, e) {
    return typeof File > "u" || !(e instanceof File) ? i : Object.assign({
        filename: i.preserveFilename === !1 ? void 0 : e.name,
        contentType: e.type
    }, i)
}
var Rf = (i, e) => Object.keys(e).concat(Object.keys(i)).reduce((t, n) => (t[n] = typeof i[n] > "u" ? e[n] : i[n], t), {}),
    Af = (i, e) => e.reduce((t, n) => (typeof i[n] > "u" || (t[n] = i[n]), t), {}),
    Df = 14800,
    Lf = ["includePreviousRevision", "includeResult", "includeMutations", "visibility", "effectFormat", "tag"],
    Nf = {
        includeResult: !0
    };

function ql(i, e, t = {}) {
    let {
        url: n,
        token: r,
        withCredentials: o,
        requestTagPrefix: s
    } = this.config(), a = t.tag && s ? [s, t.tag].join(".") : t.tag, c = ae(C({}, Rf(t, Nf)), {
        tag: a
    }), l = Af(c, Lf), d = Nl({
        query: i,
        params: e,
        options: C({
            tag: a
        }, l)
    }), f = `${n}${tn(this,"listen",d)}`;
    if (f.length > Df) return new Mt(v => v.error(new Error("Query too large for listener")));
    let m = c.events ? c.events : ["mutation"],
        g = m.indexOf("reconnect") !== -1,
        w = {};
    return (r || o) && (w.withCredentials = !0), r && (w.headers = {
        Authorization: `Bearer ${r}`
    }), new Mt(v => {
        let x, R, z = !1,
            re = !1;
        P();

        function pe() {
            z || (_(), !z && x.readyState === x.CLOSED && (je(), clearTimeout(R), R = setTimeout(P, 100)))
        }

        function Ce(U) {
            v.error(jf(U))
        }

        function gt(U) {
            let k = Gl(U);
            return k instanceof Error ? v.error(k) : v.next(k)
        }

        function yt() {
            z = !0, je(), v.complete()
        }

        function je() {
            x && (x.removeEventListener("error", pe), x.removeEventListener("channelError", Ce), x.removeEventListener("disconnect", yt), m.forEach(U => x.removeEventListener(U, gt)), x.close())
        }

        function _() {
            g && v.next({
                type: "reconnect"
            })
        }

        function M() {
            return Ri(this, null, function*() {
                let {
                    default: U
                } = yield
                import ("./chunk-AAZ2DQ2T.js");
                if (re) return;
                let k = new U(f, w);
                return k.addEventListener("error", pe), k.addEventListener("channelError", Ce), k.addEventListener("disconnect", yt), m.forEach(oe => k.addEventListener(oe, gt)), k
            })
        }

        function P() {
            M().then(U => {
                U && (x = U, re && je())
            }).catch(U => {
                v.error(U), y()
            })
        }

        function y() {
            z = !0, je(), re = !0
        }
        return y
    })
}

function Gl(i) {
    try {
        let e = i.data && JSON.parse(i.data) || {};
        return Object.assign({
            type: i.type
        }, e)
    } catch (e) {
        return e
    }
}

function jf(i) {
    if (i instanceof Error) return i;
    let e = Gl(i);
    return e instanceof Error ? e : new Error(Ff(e))
}

function Ff(i) {
    return i.error ? i.error.description ? i.error.description : typeof i.error == "string" ? i.error : JSON.stringify(i.error, null, 2) : i.message || "Unknown listener error"
}
var xl = "2021-03-26",
    Pr = class {#
        e;
        constructor(e) {
            this.#e = e
        }
        events() {
            let e = this.#e.config().apiVersion.replace(/^v/, "");
            if (e !== "X" && e < xl) throw new Error(`The live events API requires API version ${xl} or later. The current API version is ${e}. Please update your API version to use this feature.`);
            let t = tn(this.#e, "live/events"),
                n = new URL(this.#e.getUrl(t, !1)),
                r = ["restart", "message"];
            return new Mt(o => {
                let s, a, c = !1,
                    l = !1;
                w();

                function d(x) {
                    if (!c) {
                        if ("data" in x) {
                            let R = Pl(x);
                            o.error(new Error(R.message, {
                                cause: R
                            }))
                        }
                        s.readyState === s.CLOSED && (m(), clearTimeout(a), a = setTimeout(w, 100))
                    }
                }

                function f(x) {
                    let R = Pl(x);
                    return R instanceof Error ? o.error(R) : o.next(R)
                }

                function m() {
                    if (s) {
                        s.removeEventListener("error", d);
                        for (let x of r) s.removeEventListener(x, f);
                        s.close()
                    }
                }

                function g() {
                    return Ri(this, null, function*() {
                        let x = typeof EventSource > "u" ? (yield
                            import ("./chunk-AAZ2DQ2T.js")).default : EventSource;
                        if (l) return;
                        let R = new x(n.toString());
                        R.addEventListener("error", d);
                        for (let z of r) R.addEventListener(z, f);
                        return R
                    })
                }

                function w() {
                    g().then(x => {
                        x && (s = x, l && m())
                    }).catch(x => {
                        o.error(x), v()
                    })
                }

                function v() {
                    c = !0, m(), l = !0
                }
                return v
            })
        }
    };

function Pl(i) {
    try {
        let e = i.data && JSON.parse(i.data) || {};
        return C({
            type: i.type,
            id: i.lastEventId
        }, e)
    } catch (e) {
        return e
    }
}
var os = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        create(e, t) {
            return In(this.#e, this.#t, "PUT", e, t)
        }
        edit(e, t) {
            return In(this.#e, this.#t, "PATCH", e, t)
        }
        delete(e) {
            return In(this.#e, this.#t, "DELETE", e)
        }
        list() {
            return lt(this.#e, this.#t, {
                uri: "/datasets",
                tag: null
            })
        }
    },
    ss = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        create(e, t) {
            return _e(In(this.#e, this.#t, "PUT", e, t))
        }
        edit(e, t) {
            return _e(In(this.#e, this.#t, "PATCH", e, t))
        }
        delete(e) {
            return _e(In(this.#e, this.#t, "DELETE", e))
        }
        list() {
            return _e(lt(this.#e, this.#t, {
                uri: "/datasets",
                tag: null
            }))
        }
    };

function In(i, e, t, n, r) {
    return Il(n), lt(i, e, {
        method: t,
        uri: `/datasets/${n}`,
        body: r,
        tag: null
    })
}
var as = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        list(e) {
            let t = e ? .includeMembers === !1 ? "/projects?includeMembers=false" : "/projects";
            return lt(this.#e, this.#t, {
                uri: t
            })
        }
        getById(e) {
            return lt(this.#e, this.#t, {
                uri: `/projects/${e}`
            })
        }
    },
    cs = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        list(e) {
            let t = e ? .includeMembers === !1 ? "/projects?includeMembers=false" : "/projects";
            return _e(lt(this.#e, this.#t, {
                uri: t
            }))
        }
        getById(e) {
            return _e(lt(this.#e, this.#t, {
                uri: `/projects/${e}`
            }))
        }
    },
    ls = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        getById(e) {
            return lt(this.#e, this.#t, {
                uri: `/users/${e}`
            })
        }
    },
    ds = class {#
        e;#
        t;
        constructor(e, t) {
            this.#e = e, this.#t = t
        }
        getById(e) {
            return _e(lt(this.#e, this.#t, {
                uri: `/users/${e}`
            }))
        }
    },
    us = class i {
        assets;
        datasets;
        live;
        projects;
        users;#
        e;#
        t;
        listen = ql;
        constructor(e, t = xi) {
            this.config(t), this.#t = e, this.assets = new is(this, this.#t), this.datasets = new os(this, this.#t), this.live = new Pr(this), this.projects = new as(this, this.#t), this.users = new ls(this, this.#t)
        }
        clone() {
            return new i(this.#t, this.config())
        }
        config(e) {
            if (e === void 0) return C({}, this.#e);
            if (this.#e && this.#e.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.#e = Ll(e, this.#e || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new i(this.#t, ae(C(C({}, t), e), {
                stega: C(C({}, t.stega || {}), typeof e ? .stega == "boolean" ? {
                    enabled: e.stega
                } : e ? .stega || {})
            }))
        }
        fetch(e, t, n) {
            return jl(this, this.#t, this.#e.stega, e, t, n)
        }
        getDocument(e, t) {
            return Fl(this, this.#t, e, t)
        }
        getDocuments(e, t) {
            return zl(this, this.#t, e, t)
        }
        create(e, t) {
            return Sr(this, this.#t, e, "create", t)
        }
        createIfNotExists(e, t) {
            return Ul(this, this.#t, e, t)
        }
        createOrReplace(e, t) {
            return Bl(this, this.#t, e, t)
        }
        delete(e, t) {
            return $l(this, this.#t, e, t)
        }
        mutate(e, t) {
            return Hl(this, this.#t, e, t)
        }
        patch(e, t) {
            return new Zt(e, t, this)
        }
        transaction(e) {
            return new xr(e, this)
        }
        action(e, t) {
            return Wl(this, this.#t, e, t)
        }
        request(e) {
            return lt(this, this.#t, e)
        }
        getUrl(e, t) {
            return ms(this, e, t)
        }
        getDataUrl(e, t) {
            return tn(this, e, t)
        }
    },
    ps = class i {
        assets;
        datasets;
        live;
        projects;
        users;
        observable;#
        e;#
        t;
        listen = ql;
        constructor(e, t = xi) {
            this.config(t), this.#t = e, this.assets = new rs(this, this.#t), this.datasets = new ss(this, this.#t), this.live = new Pr(this), this.projects = new cs(this, this.#t), this.users = new ds(this, this.#t), this.observable = new us(e, t)
        }
        clone() {
            return new i(this.#t, this.config())
        }
        config(e) {
            if (e === void 0) return C({}, this.#e);
            if (this.#e && this.#e.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.observable && this.observable.config(e), this.#e = Ll(e, this.#e || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new i(this.#t, ae(C(C({}, t), e), {
                stega: C(C({}, t.stega || {}), typeof e ? .stega == "boolean" ? {
                    enabled: e.stega
                } : e ? .stega || {})
            }))
        }
        fetch(e, t, n) {
            return _e(jl(this, this.#t, this.#e.stega, e, t, n))
        }
        getDocument(e, t) {
            return _e(Fl(this, this.#t, e, t))
        }
        getDocuments(e, t) {
            return _e(zl(this, this.#t, e, t))
        }
        create(e, t) {
            return _e(Sr(this, this.#t, e, "create", t))
        }
        createIfNotExists(e, t) {
            return _e(Ul(this, this.#t, e, t))
        }
        createOrReplace(e, t) {
            return _e(Bl(this, this.#t, e, t))
        }
        delete(e, t) {
            return _e($l(this, this.#t, e, t))
        }
        mutate(e, t) {
            return _e(Hl(this, this.#t, e, t))
        }
        patch(e, t) {
            return new en(e, t, this)
        }
        transaction(e) {
            return new Mr(e, this)
        }
        action(e, t) {
            return _e(Wl(this, this.#t, e, t))
        }
        request(e) {
            return _e(lt(this, this.#t, e))
        }
        dataRequest(e, t, n) {
            return _e(kn(this, this.#t, e, t, n))
        }
        getUrl(e, t) {
            return ms(this, e, t)
        }
        getDataUrl(e, t) {
            return tn(this, e, t)
        }
    };

function zf(i, e) {
    let t = rf(i);
    return {
        requester: t,
        createClient: n => new e((r, o) => (o || t)(C({
            maxRedirects: 0,
            maxRetries: n.maxRetries,
            retryDelay: n.retryDelay
        }, r)), n)
    }
}

function Uf(i) {
    return function(e) {
        return gf(), i(e)
    }
}
var Bf = [],
    Ql = zf(Bf, ps),
    yb = Ql.requester,
    gs = Ql.createClient,
    bb = Uf(gs);
var Kl = Bs(Yl());
var ue = (() => {
    let e = class e {
        constructor() {
            this.sanityClient = gs({
                projectId: "s9bsao5g",
                dataset: "production",
                apiVersion: "2024-08-23",
                useCdn: !0
            }), this.loadingSubject = new ze(!1), this.loading$ = this.loadingSubject.asObservable(), this.imageUrlBuilder = (0, Kl.default)(this.sanityClient)
        }
        setLoading(n) {
            this.loadingSubject.next(n)
        }
        getImageUrlBuilder(n) {
            return this.imageUrlBuilder.image(n)
        }
        fetchPosts(n, r) {
            this.setLoading(!0);
            let s = (n - 1) * r + r;
            return this.sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mobileImage{
        asset->{
          _id,
          url
        }
      },
      desktopImage{
        asset->{
          _id,
          url
        }
      },
      body,
      author-> {
        name,
        image,
        bio
      },
      publishedAt
    }[]`).finally(() => this.setLoading(!1))
        }
        getPostBySlug(n) {
            return this.setLoading(!0), be(this.sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mobileImage{
        asset->{
          _id,
          url
        }
      },
      desktopImage{
        asset->{
          _id,
          url
        }
      },
      body,
      author-> {
        name,
        image,
        bio
      },
      publishedAt
    }`, {
                slug: n
            })).pipe(B(o => (this.setLoading(!1), o)))
        }
        getHomeData() {
            return this.setLoading(!0), be(this.sanityClient.fetch('*[_type == "home"]{..., "heroBgUrl": heroBg.asset->url, "heroSmallUrl": heroSmallBg.asset->url}')).pipe(B(n => n[0]), B(n => (this.setLoading(!1), n)))
        }
        getAboutData() {
            return this.setLoading(!0), be(this.sanityClient.fetch('*[_type == "about"]{..., "heroBgUrl": heroBg.asset->url, "heroSmallUrl": heroSmallBg.asset->url}')).pipe(B(n => n[0]), B(n => (this.setLoading(!1), n)))
        }
        getTradingData() {
            return this.setLoading(!0), be(this.sanityClient.fetch('*[_type == "token"]{..., "heroBgUrl": heroBg.asset->url, "heroSmallUrl": heroSmallBg.asset->url}')).pipe(B(n => n[0]), B(n => (this.setLoading(!1), n)))
        }
        getMissionData() {
            return this.setLoading(!0), be(this.sanityClient.fetch('*[_type == "mission"]{..., "heroBgUrl": heroBg.asset->url, "heroSmallUrl": heroSmallBg.asset->url}')).pipe(B(n => n[0]), B(n => (this.setLoading(!1), n)))
        }
        getVisionData() {
            return this.setLoading(!0), be(this.sanityClient.fetch('*[_type == "vision"]{..., "heroBgUrl": heroBg.asset->url, "heroSmallUrl": heroSmallBg.asset->url}')).pipe(B(n => n[0]), B(n => (this.setLoading(!1), n)))
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)
    }, e.\u0275prov = J({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let i = e;
    return i
})();
var $f = ["title"],
    Hf = ["btn"],
    Wf = ["img"],
    Vf = ["desc"],
    qf = ["card"],
    Xl = (() => {
        let e = class e {
            constructor(n, r, o, s, a) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title ? .nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.button ? .nativeElement ? this.runAnimation(this.button.nativeElement, "fadeInSlideLeft") : a === this.img ? .nativeElement ? this.runAnimation(this.img.nativeElement, "fadeInSlideUp") : a === this.desc ? .nativeElement ? this.runAnimation(this.desc.nativeElement, "fadeInSlideRight") : a === this.card ? .nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    this.title && r.observe(this.title.nativeElement), this.button && r.observe(this.button.nativeElement), this.img && r.observe(this.img.nativeElement), this.desc && r.observe(this.desc.nativeElement), this.card && r.observe(this.card.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    case "fadeInSlideRight":
                        return "translateX(-30px)";
                    case "fadeInSlideLeft":
                        return "translateX(30px)";
                    default:
                        return "none"
                }
            }
            ngOnInit() {
                this.titleService.setTitle("Indowealth Group")
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-home"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H($f, 5), H(Hf, 5), H(Wf, 5), H(Vf, 5), H(qf, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.button = s.first), j(s = F()) && (o.img = s.first), j(s = F()) && (o.desc = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 23,
            vars: 0,
            consts: [
                ["title", ""],
                ["btn", ""],
                ["card", ""],
                ["img", ""],
                ["desc", ""],
                [1, "hero"],
                [1, "text-[4rem]", "md:text-[7rem]", "lg:text-[10rem]"],
                ["href", "https://www.bitmart.com/trade/en-US?symbol=IWT_USDT", "target", "_blank", 1, "hero-btn"],
                [1, "second-sec"],
                [1, "card"],
                [1, "section-img"],
                ["src", "assets/logo3.PNG", "alt", ""],
                [1, "section-desc"],
                [1, "text-[1.4rem]", "md:text-[2rem]", "lg:text-[2.4rem]"],
                ["routerLink", "/about"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 5)(1, "h1", 6, 0), h(3, " Welcome To "), O(4, "br"), h(5, " Indowealth Group "), u(), p(6, "a", 7, 1), h(8, "Buy IWT"), u()(), p(9, "section", 8)(10, "div", 9, 2)(12, "div", 10, 3), O(14, "img", 11), u(), p(15, "div", 12, 4)(17, "h2"), h(18, "About Us"), u(), p(19, "p", 13), h(20, " The Indowealth Group is made up of, and administered by, a group of professionals across multiple jurisdictions with a large range of expertise and qualifications in fields such as investment banking, blockchain IT, financial advisory, entrepreneurship and more who have come together to realize a shared vision.\xA0 "), p(21, "a", 14), h(22, "...Read more"), u()()()()())
            },
            dependencies: [tt, Rt, te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(100vh - 8.8rem);width:100%;background:url(/assets/home_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;margin-bottom:1.5rem}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#fff;margin-bottom:2rem}.hero[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:1rem 2rem;background:#da9915;border:none;border-radius:.5rem;color:#fff;font-size:2rem;font-family:source-sans-pro-bold;cursor:pointer;transition:box-shadow .3s ease,transform .3s ease;width:20rem;height:4.9rem}.hero[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:1rem}.hero[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%]:hover{box-shadow:0 0 15px #da991599;transform:scale(1.05)}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/home_hero.png) no-repeat center center;background-size:cover;min-height:calc(100vh - 6rem);align-items:center;text-align:center}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:1rem;line-height:1}}.second-sec[_ngcontent-%COMP%]{position:relative;overflow:hidden;background:#fff;width:100%;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:start;padding:4rem 1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;row-gap:2rem;align-items:center;justify-content:center;text-align:start;background:none;width:100%;height:80%;padding:4rem 3rem 0rem;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border-radius:12px;border:1px solid #da9915}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem}.second-sec[_ngcontent-%COMP%]   .section-img[_ngcontent-%COMP%]{display:flex;align-items:center;justify-self:center}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{width:100%;text-align:start;flex-direction:column;margin-bottom:4rem;display:flex;align-items:start;justify-self:center}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin-top:1rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#da9915;font-weight:700;font-family:source-sans-pro-bold;text-decoration:none;transition:all .3s ease}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-shadow:0 0 10px #da9915,0 0 20px #da9915,0 0 40px #da9915,0 0 80px #da9915,0 0 120px #da9915}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;flex-direction:row;padding:10rem 3rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-template-rows:1fr;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border-radius:12px;border:1px solid #da9915;padding:4rem;width:calc(100% - 10rem);height:80%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%;height:auto}.second-sec[_ngcontent-%COMP%]   .section-img[_ngcontent-%COMP%]{grid-column:2;display:flex;align-items:center;justify-content:center}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;justify-content:center;grid-column:1;grid-row:1}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;font-size:2.6rem;font-family:source-sans-pro-bold;font-weight:700}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;margin-bottom:1rem;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.4;max-width:68.5rem}}.corner-svg[_ngcontent-%COMP%]{position:absolute}.top-left[_ngcontent-%COMP%]{top:0;left:0}.top-right[_ngcontent-%COMP%]{top:0;right:0}.bottom-left[_ngcontent-%COMP%]{bottom:0;left:0}.bottom-right[_ngcontent-%COMP%]{bottom:0;right:0}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(50px)"
                }), N("900ms ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])]), X("fadeInSlideRight", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(-30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])]), X("fadeInSlideLeft", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var Gf = ["title"],
    Qf = ["card"],
    Jl = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    r.observe(this.title.nativeElement), r.observe(this.card.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
            ngOnInit() {
                this.titleService.setTitle("About Us - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Learn more about Indowealth Group, our history, values, and what drives us."
                }, {
                    name: "keywords",
                    content: "about, Indowealth Group, company history, values"
                }])
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-about"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(Gf, 5), H(Qf, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 34,
            vars: 0,
            consts: [
                ["title", ""],
                ["card", ""],
                [1, "hero"],
                [1, "second-sec"],
                [1, "card"],
                [1, "section-desc-1"],
                [1, "section-img"],
                ["src", "assets/logo3.PNG", "alt", ""],
                [1, "section-desc"],
                [1, "section-desc-2"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 2)(1, "h1", null, 0), h(3, "About Us"), u()(), p(4, "section", 3)(5, "div", 4, 1)(7, "div", 5)(8, "div", 6), O(9, "img", 7), u(), p(10, "div", 8)(11, "h2"), h(12, "About Us"), u(), p(13, "p"), h(14, " The IndoWealth Group is made up of, and administered by, a group of professionals across multiple jurisdictions with a large range of expertise and qualifications in fields such as investment banking, blockchain IT, financial advisory, entrepreneurship and more who have come together to realize a shared vision. "), O(15, "br")(16, "br"), h(17, " Through its unique position of entering a developing multi-billion-dollar economy (that is set to soon become a multi-trillion-dollar G7-level economy in the very near future) over a decade ago and long before it became \u201Cfashionable\u201D, the IndoWealth Group is able to harness its local network and connections to harvest the best deals in the fastest growing industries with the highest paying yields. "), u()()(), p(18, "div", 9)(19, "p"), h(20, " Members of the IndoWealth Group have concluded billions of dollars\u2019 worth of deals in the past for large institutions and high net-worth individuals, and now they have formed the IndoWealth Group to bring those same deals to the everyday investor through the power of blockchain technology. By combining the foundational templates of large-scale business enterprise with an investment-focused financial services lens boosted by the utility of blockchain technology, IndoWealth Group is the first entity to create a new investment model that is transcends traditional financial institutions and service providers. "), u(), p(21, "p"), h(22, " In so doing, the IndoWealth Group aims to be the bridge between the everyday investor and mega-projects that previously only the wealthy have access to. By harnessing the power of blockchain technology and appealing directly to the lifeblood of crypto funding that is every individual crypto investor, the IndoWealth Group is much bigger than the sum of its parts. IndoWealth Group aspires to build to create a permanent income-producing, self-sustaining network that does the following: "), u(), p(23, "ul")(24, "li"), h(25, " Improve the crypto investment landscape by making large \u201Cunobtainable\u201D deals available to its community "), u(), p(26, "li"), h(27, " Continuously unlock the economic potential of one of the fastest growing economies in the world "), u(), p(28, "li"), h(29, " Provide investors access to unprecedented investment opportunities at \u201Cground-level\u201D before the local market becomes oversaturated "), u(), p(30, "li"), h(31, " Building up the infrastructure and livelihoods of the target investment destination, leading to long-term profit generation and sustainability and "), u(), p(32, "li"), h(33, " Pay high yields and provide real value that reward investors for taking part in this future forward endeavor. "), u()()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/about_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/about_hero1.JPG) no-repeat;background-size:cover;background-attachment:fixed;min-height:calc(100vh - 10rem);align-items:flex-start;text-align:left;padding-left:3rem;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:70.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;min-height:53.9rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem 3rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;width:calc(100% - 1.5rem);height:auto}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem}.second-sec[_ngcontent-%COMP%]   .section-desc-1[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc-1[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.second-sec[_ngcontent-%COMP%]   .section-desc-2[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;text-align:start}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start;align-self:flex-start}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:auto;font-size:1.2rem;color:#000;margin-top:1rem}.second-sec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:1.7rem;font-family:source-sans-pro-semi-bold;color:#000;list-style:circle}.second-sec[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:99.7rem}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:auto;padding:1rem 0rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{grid-template-columns:1fr;border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:3rem;width:calc(100% - 10rem);height:auto}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .section-img[_ngcontent-%COMP%]{grid-row:1;height:100%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .section-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%;height:auto}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.4rem;line-height:1.4}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:2.4rem;line-height:1.5}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0}.second-sec[_ngcontent-%COMP%]   .section-desc-1[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr)}.second-sec[_ngcontent-%COMP%]   .section-desc-1[_ngcontent-%COMP%]   .section-img[_ngcontent-%COMP%]{grid-column:2;display:flex;align-items:center;justify-content:center}.second-sec[_ngcontent-%COMP%]   .section-desc-1[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{margin-left:4rem}.second-sec[_ngcontent-%COMP%]   .section-desc-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 3rem}.second-sec[_ngcontent-%COMP%]   .section-desc-1[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc-3[_ngcontent-%COMP%]{flex-direction:row}}.card[_ngcontent-%COMP%]{visibility:hidden}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(60px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])]), X("fadeInSlideRight", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(-30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])]), X("fadeInSlideLeft", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var Yf = ["title"],
    Kf = ["card"],
    Zl = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    r.observe(this.title.nativeElement), r.observe(this.card.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
            ngOnInit() {
                this.titleService.setTitle("Indowealth Token (IWT) - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Learn about Indowealth Token (IWT) and its role in our ecosystem."
                }, {
                    name: "keywords",
                    content: "Indowealth Token, IWT, cryptocurrency, blockchain, Indowealth Group"
                }])
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-trading"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(Yf, 5), H(Kf, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 31,
            vars: 0,
            consts: [
                ["title", ""],
                ["card", ""],
                [1, "hero"],
                [1, "d-flex", "flex-row", "gap-4", "align-items-center"],
                ["src", "assets/new_iwt_logo.png", "alt", "", 1, "token-img"],
                [1, "second-sec"],
                [1, "card"],
                [1, "section-desc"],
                [1, "bold"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 2)(1, "h1", 3, 0), O(3, "img", 4), h(4, " Indowealth Token (IWT) "), u()(), p(5, "section", 5)(6, "div", 6, 1)(8, "div", 7)(9, "p"), h(10, " The IndoWealth Token (\u201CIWT\u201D) is the proposed solution to further facilitate the democratisation of finance by offering the general public the opportunity to partake in highly lucrative large-scale projects typically made available only to institutional and ultra-high net worth individual investors by leveraging on digital assets\u2019 capability to fractionalise assets, which enables investments at a significantly smaller (and thus, more affordable) level, independent of investors' existing wealth levels. "), u()(), p(11, "div", 7)(12, "h2"), h(13, "Key Features and Benefits"), u(), p(14, "ul")(15, "li")(16, "span", 8), h(17, "Backed by Real-World Assets(RWAs):"), u(), h(18, " Tokens will be backed by RWAs, where the entirety of the assets of the massive project are pledged to back the token. "), u(), p(19, "li")(20, "span", 8), h(21, "High appreciation potential:"), u(), h(22, " The transformative nature of the assets of the project backing IWT has been approved by the Indonesian government and is expected to increase the value of the pledged asset exponentially. "), u(), p(23, "li")(24, "span", 8), h(25, "Transparent:"), u(), h(26, " Token holders will have visibility of the ongoing status on the project as it evolves, via the user portal, enabling them to watch the value of their investment grow over time. "), u(), p(27, "li")(28, "span", 8), h(29, "Powered by Solana blockchain: "), u(), h(30, " Next-generation protocol which offers faster transaction speed and substantially lower transaction fees than rival blockchains (e.g. Ethereum). "), u()()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/token_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{white-space:nowrap;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%;display:flex;flex-direction:row;align-items:center}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:80px;border-radius:5px}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/token_hero.jpg) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:160px;border-radius:5px}}.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:27rem;width:100%;background-size:cover;padding:6rem 2rem;display:flex;align-items:center;justify-content:center}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;width:calc(100% - 1.5rem);padding:2rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]:last-child{margin:0}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;flex-direction:column;margin-bottom:4rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem;font-family:source-sans-pro-semi-bold;color:#000;list-style:circle}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%]{font-family:source-sans-pro-bold}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:44.7rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:6rem;width:calc(100% - 2rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:block;position:absolute;top:0;right:0;width:30rem;height:30rem;margin-top:1rem;margin-right:1rem;border-top-right-radius:20px;background:url(/assets/token2.jpeg) no-repeat center center;background-size:cover}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.4rem;line-height:1.5}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(100px)"
                }), N("2s ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var Xf = ["title"],
    Jf = ["card"],
    ed = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    r.observe(this.title.nativeElement), r.observe(this.card.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
            ngOnInit() {
                this.titleService.setTitle("Mission - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Discover the mission of Indowealth Group and our commitment to excellence."
                }, {
                    name: "keywords",
                    content: "mission, Indowealth Group, commitment, excellence"
                }])
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-mission"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(Xf, 5), H(Jf, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 14,
            vars: 0,
            consts: [
                ["title", ""],
                ["card", ""],
                [1, "hero"],
                [1, "second-sec"],
                [1, "section-desc"],
                ["src", "assets/arrow_mobile.jpg", "alt", "", 1, "mobile-img"],
                ["src", "assets/arrow.jpg", "alt", "", 1, "desktop-img"],
                [1, "card"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 2)(1, "h1", null, 0), h(3, "Mission"), u()(), p(4, "section", 3)(5, "div", 4), O(6, "img", 5)(7, "img", 6), p(8, "div", 7, 1)(10, "h2"), h(11, "Mission"), u(), p(12, "p"), h(13, " To build a token representing ownership of value in large-scale mega projects and investments and ensure its sustainability without interference from malignant third-party forces whilst ensuring value is constantly increased for token holders. To break the monopoly and ownership of megaprojects and high-level investments by large corporations, high net-worth individuals, and governments to ensure equality of opportunity is uncompromisingly achieved through translating and realising the concept of decentralisation into the real world. To overturn the current financial system practices where high net-worth entities are given every privilege, benefit and advantage with utmost ease of entry into top investment options while everyday investors are subjected to unending barriers to entry and made to pay every cost along the way with no certainty of ever being able to participate in such deals. "), u()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/mission_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/mission_hero.jpg) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;min-height:80.9rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;margin-top:auto;margin-bottom:3rem}.second-sec[_ngcontent-%COMP%]   .mobile-img[_ngcontent-%COMP%]{display:block;width:100%;z-index:900;border-radius:8px;transform:translateY(5%)}.second-sec[_ngcontent-%COMP%]   .desktop-img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;height:auto;padding:4rem 3rem 3rem;width:100%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start;align-self:flex-start}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#000;margin-top:1rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:85.7rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;width:auto}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.4rem;width:auto;padding:1rem 0rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:10rem}.second-sec[_ngcontent-%COMP%]   .desktop-img[_ngcontent-%COMP%]{display:block;width:calc(100% - 15rem);z-index:900;transform:translateY(15%);border-radius:20px}.second-sec[_ngcontent-%COMP%]   .mobile-img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:15rem 3rem 3rem;height:auto;width:calc(100% - 15rem)}}.card[_ngcontent-%COMP%]{visibility:hidden}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(60px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])]), X("fadeInSlideRight", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(-30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])]), X("fadeInSlideLeft", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var Zf = ["title"],
    em = ["card"],
    td = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    r.observe(this.title.nativeElement), r.observe(this.card.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
            ngOnInit() {
                this.titleService.setTitle("Vision - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Explore the vision of Indowealth Group and our goals for the future."
                }, {
                    name: "keywords",
                    content: "vision, Indowealth Group, future goals, aspirations"
                }])
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-vision"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(Zf, 5), H(em, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 14,
            vars: 0,
            consts: [
                ["title", ""],
                ["card", ""],
                [1, "hero"],
                [1, "second-sec"],
                [1, "section-desc"],
                ["src", "assets/eye_mobile.jpg", "alt", "", 1, "mobile-img"],
                ["src", "assets/eye.jpg", "alt", "", 1, "desktop-img"],
                [1, "card"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 2)(1, "h1", null, 0), h(3, "Vision"), u()(), p(4, "section", 3)(5, "div", 4), O(6, "img", 5)(7, "img", 6), p(8, "div", 7, 1)(10, "h2"), h(11, "Vision"), u(), p(12, "p"), h(13, " IWT represents the vision of complete democratisation and transparency where top money-making deals are no longer restricted merely to the wealthy and powerful but to every person with a crypto wallet and the initiative to make profits. IWT is an investment vehicle that aims to serve the everyday investor by opening up the same type of investment opportunities to them which are largely confined to big banks and hedge funds. By bridging this gap and tapping into the power of the everyday investor, large investment projects in a variety of asset types and industries can be democratised to allow such investors to enjoy the same benefits and profits as large institutions. "), u()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/mission_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/mission_hero.jpg) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;min-height:80.9rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;margin-top:auto;margin-bottom:3rem}.second-sec[_ngcontent-%COMP%]   .mobile-img[_ngcontent-%COMP%]{display:block;width:100%;border-radius:8px;z-index:900;transform:translateY(5%)}.second-sec[_ngcontent-%COMP%]   .desktop-img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;height:auto;padding:4rem 3rem 3rem;width:100%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start;align-self:flex-start}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#000;margin-top:1rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:85.7rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;width:auto}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.4rem;width:auto;padding:1rem 0rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:10rem}.second-sec[_ngcontent-%COMP%]   .desktop-img[_ngcontent-%COMP%]{display:block;width:calc(100% - 15rem);z-index:900;transform:translateY(15%);border-radius:10px}.second-sec[_ngcontent-%COMP%]   .mobile-img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:15rem 3rem 3rem;height:auto;width:calc(100% - 15rem)}}.card[_ngcontent-%COMP%]{visibility:hidden}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(60px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])]), X("fadeInSlideRight", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(-30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])]), X("fadeInSlideLeft", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var vs = class {
        constructor() {
            this.change = new Me, this.instances = {}, this.DEFAULT_ID = "DEFAULT_PAGINATION_ID"
        }
        defaultId() {
            return this.DEFAULT_ID
        }
        register(e) {
            return e.id == null && (e.id = this.DEFAULT_ID), this.instances[e.id] ? this.updateInstance(e) : (this.instances[e.id] = e, !0)
        }
        updateInstance(e) {
            let t = !1;
            for (let n in this.instances[e.id]) e[n] !== this.instances[e.id][n] && (this.instances[e.id][n] = e[n], t = !0);
            return t
        }
        getCurrentPage(e) {
            return this.instances[e] ? this.instances[e].currentPage : 1
        }
        setCurrentPage(e, t) {
            if (this.instances[e]) {
                let n = this.instances[e],
                    r = Math.ceil(n.totalItems / n.itemsPerPage);
                t <= r && 1 <= t && (this.instances[e].currentPage = t, this.change.emit(e))
            }
        }
        setTotalItems(e, t) {
            this.instances[e] && 0 <= t && (this.instances[e].totalItems = t, this.change.emit(e))
        }
        setItemsPerPage(e, t) {
            this.instances[e] && (this.instances[e].itemsPerPage = t, this.change.emit(e))
        }
        getInstance(e = this.DEFAULT_ID) {
            return this.instances[e] ? this.clone(this.instances[e]) : {}
        }
        clone(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }
    },
    yv = Number.MAX_SAFE_INTEGER;
var At = (() => {
    class i {}
    return i.\u0275fac = function(t) {
        return new(t || i)
    }, i.\u0275mod = ke({
        type: i
    }), i.\u0275inj = Te({
        providers: [vs],
        imports: [
            [te]
        ]
    }), i
})();

function nd(i) {
    var e, t, n = "";
    if (typeof i == "string" || typeof i == "number") n += i;
    else if (typeof i == "object")
        if (Array.isArray(i))
            for (e = 0; e < i.length; e++) i[e] && (t = nd(i[e])) && (n && (n += " "), n += t);
        else
            for (e in i) i[e] && (n && (n += " "), n += e);
    return n
}

function id() {
    for (var i, e, t = 0, n = ""; t < arguments.length;)(i = arguments[t++]) && (e = nd(i)) && (n && (n += " "), n += e);
    return n
}
var ws = "-",
    tm = i => {
        let e = im(i),
            {
                conflictingClassGroups: t,
                conflictingClassGroupModifiers: n
            } = i;
        return {
            getClassGroupId: s => {
                let a = s.split(ws);
                return a[0] === "" && a.length !== 1 && a.shift(), sd(a, e) || nm(s)
            },
            getConflictingClassGroupIds: (s, a) => {
                let c = t[s] || [];
                return a && n[s] ? [...c, ...n[s]] : c
            }
        }
    },
    sd = (i, e) => {
        if (i.length === 0) return e.classGroupId;
        let t = i[0],
            n = e.nextPart.get(t),
            r = n ? sd(i.slice(1), n) : void 0;
        if (r) return r;
        if (e.validators.length === 0) return;
        let o = i.join(ws);
        return e.validators.find(({
            validator: s
        }) => s(o)) ? .classGroupId
    },
    rd = /^\[(.+)\]$/,
    nm = i => {
        if (rd.test(i)) {
            let e = rd.exec(i)[1],
                t = e ? .substring(0, e.indexOf(":"));
            if (t) return "arbitrary.." + t
        }
    },
    im = i => {
        let {
            theme: e,
            prefix: t
        } = i, n = {
            nextPart: new Map,
            validators: []
        };
        return om(Object.entries(i.classGroups), t).forEach(([o, s]) => {
            _s(s, n, o, e)
        }), n
    },
    _s = (i, e, t, n) => {
        i.forEach(r => {
            if (typeof r == "string") {
                let o = r === "" ? e : od(e, r);
                o.classGroupId = t;
                return
            }
            if (typeof r == "function") {
                if (rm(r)) {
                    _s(r(n), e, t, n);
                    return
                }
                e.validators.push({
                    validator: r,
                    classGroupId: t
                });
                return
            }
            Object.entries(r).forEach(([o, s]) => {
                _s(s, od(e, o), t, n)
            })
        })
    },
    od = (i, e) => {
        let t = i;
        return e.split(ws).forEach(n => {
            t.nextPart.has(n) || t.nextPart.set(n, {
                nextPart: new Map,
                validators: []
            }), t = t.nextPart.get(n)
        }), t
    },
    rm = i => i.isThemeGetter,
    om = (i, e) => e ? i.map(([t, n]) => {
        let r = n.map(o => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, a]) => [e + s, a])) : o);
        return [t, r]
    }) : i,
    sm = i => {
        if (i < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            t = new Map,
            n = new Map,
            r = (o, s) => {
                t.set(o, s), e++, e > i && (e = 0, n = t, t = new Map)
            };
        return {
            get(o) {
                let s = t.get(o);
                if (s !== void 0) return s;
                if ((s = n.get(o)) !== void 0) return r(o, s), s
            },
            set(o, s) {
                t.has(o) ? t.set(o, s) : r(o, s)
            }
        }
    },
    ad = "!",
    am = i => {
        let {
            separator: e,
            experimentalParseClassName: t
        } = i, n = e.length === 1, r = e[0], o = e.length, s = a => {
            let c = [],
                l = 0,
                d = 0,
                f;
            for (let x = 0; x < a.length; x++) {
                let R = a[x];
                if (l === 0) {
                    if (R === r && (n || a.slice(x, x + o) === e)) {
                        c.push(a.slice(d, x)), d = x + o;
                        continue
                    }
                    if (R === "/") {
                        f = x;
                        continue
                    }
                }
                R === "[" ? l++ : R === "]" && l--
            }
            let m = c.length === 0 ? a : a.substring(d),
                g = m.startsWith(ad),
                w = g ? m.substring(1) : m,
                v = f && f > d ? f - d : void 0;
            return {
                modifiers: c,
                hasImportantModifier: g,
                baseClassName: w,
                maybePostfixModifierPosition: v
            }
        };
        return t ? a => t({
            className: a,
            parseClassName: s
        }) : s
    },
    cm = i => {
        if (i.length <= 1) return i;
        let e = [],
            t = [];
        return i.forEach(n => {
            n[0] === "[" ? (e.push(...t.sort(), n), t = []) : t.push(n)
        }), e.push(...t.sort()), e
    },
    lm = i => C({
        cache: sm(i.cacheSize),
        parseClassName: am(i)
    }, tm(i)),
    dm = /\s+/,
    um = (i, e) => {
        let {
            parseClassName: t,
            getClassGroupId: n,
            getConflictingClassGroupIds: r
        } = e, o = [], s = i.trim().split(dm), a = "";
        for (let c = s.length - 1; c >= 0; c -= 1) {
            let l = s[c],
                {
                    modifiers: d,
                    hasImportantModifier: f,
                    baseClassName: m,
                    maybePostfixModifierPosition: g
                } = t(l),
                w = !!g,
                v = n(w ? m.substring(0, g) : m);
            if (!v) {
                if (!w) {
                    a = l + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (v = n(m), !v) {
                    a = l + (a.length > 0 ? " " + a : a);
                    continue
                }
                w = !1
            }
            let x = cm(d).join(":"),
                R = f ? x + ad : x,
                z = R + v;
            if (o.includes(z)) continue;
            o.push(z);
            let re = r(v, w);
            for (let pe = 0; pe < re.length; ++pe) {
                let Ce = re[pe];
                o.push(R + Ce)
            }
            a = l + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function pm() {
    let i = 0,
        e, t, n = "";
    for (; i < arguments.length;)(e = arguments[i++]) && (t = cd(e)) && (n && (n += " "), n += t);
    return n
}
var cd = i => {
    if (typeof i == "string") return i;
    let e, t = "";
    for (let n = 0; n < i.length; n++) i[n] && (e = cd(i[n])) && (t && (t += " "), t += e);
    return t
};

function hm(i, ...e) {
    let t, n, r, o = s;

    function s(c) {
        let l = e.reduce((d, f) => f(d), i());
        return t = lm(l), n = t.cache.get, r = t.cache.set, o = a, a(c)
    }

    function a(c) {
        let l = n(c);
        if (l) return l;
        let d = um(c, t);
        return r(c, d), d
    }
    return function() {
        return o(pm.apply(null, arguments))
    }
}
var me = i => {
        let e = t => t[i] || [];
        return e.isThemeGetter = !0, e
    },
    ld = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    fm = /^\d+\/\d+$/,
    mm = new Set(["px", "full", "screen"]),
    gm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    ym = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    bm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    vm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Cm = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    wt = i => Rn(i) || mm.has(i) || fm.test(i),
    Dt = i => An(i, "length", Em),
    Rn = i => !!i && !Number.isNaN(Number(i)),
    Cs = i => An(i, "number", Rn),
    Si = i => !!i && Number.isInteger(Number(i)),
    _m = i => i.endsWith("%") && Rn(i.slice(0, -1)),
    Y = i => ld.test(i),
    Lt = i => gm.test(i),
    wm = new Set(["length", "size", "percentage"]),
    Om = i => An(i, wm, dd),
    Mm = i => An(i, "position", dd),
    xm = new Set(["image", "url"]),
    Pm = i => An(i, xm, Tm),
    Sm = i => An(i, "", Im),
    Ei = () => !0,
    An = (i, e, t) => {
        let n = ld.exec(i);
        return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : t(n[2]) : !1
    },
    Em = i => ym.test(i) && !bm.test(i),
    dd = () => !1,
    Im = i => vm.test(i),
    Tm = i => Cm.test(i);
var km = () => {
    let i = me("colors"),
        e = me("spacing"),
        t = me("blur"),
        n = me("brightness"),
        r = me("borderColor"),
        o = me("borderRadius"),
        s = me("borderSpacing"),
        a = me("borderWidth"),
        c = me("contrast"),
        l = me("grayscale"),
        d = me("hueRotate"),
        f = me("invert"),
        m = me("gap"),
        g = me("gradientColorStops"),
        w = me("gradientColorStopPositions"),
        v = me("inset"),
        x = me("margin"),
        R = me("opacity"),
        z = me("padding"),
        re = me("saturate"),
        pe = me("scale"),
        Ce = me("sepia"),
        gt = me("skew"),
        yt = me("space"),
        je = me("translate"),
        _ = () => ["auto", "contain", "none"],
        M = () => ["auto", "hidden", "clip", "visible", "scroll"],
        P = () => ["auto", Y, e],
        y = () => [Y, e],
        U = () => ["", wt, Dt],
        k = () => ["auto", Rn, Y],
        oe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
        ve = () => ["solid", "dashed", "dotted", "double", "none"],
        Fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
        Ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
        Oe = () => ["", "0", Y],
        Ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
        Ie = () => [Rn, Y];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Ei],
            spacing: [wt, Dt],
            blur: ["none", "", Lt, Y],
            brightness: Ie(),
            borderColor: [i],
            borderRadius: ["none", "", "full", Lt, Y],
            borderSpacing: y(),
            borderWidth: U(),
            contrast: Ie(),
            grayscale: Oe(),
            hueRotate: Ie(),
            invert: Oe(),
            gap: y(),
            gradientColorStops: [i],
            gradientColorStopPositions: [_m, Dt],
            inset: P(),
            margin: P(),
            opacity: Ie(),
            padding: y(),
            saturate: Ie(),
            scale: Ie(),
            sepia: Oe(),
            skew: Ie(),
            space: y(),
            translate: y()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Y]
            }],
            container: ["container"],
            columns: [{
                columns: [Lt]
            }],
            "break-after": [{
                "break-after": Ke()
            }],
            "break-before": [{
                "break-before": Ke()
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
                object: [...oe(), Y]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: _()
            }],
            "overscroll-x": [{
                "overscroll-x": _()
            }],
            "overscroll-y": [{
                "overscroll-y": _()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Si, Y]
            }],
            basis: [{
                basis: P()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Y]
            }],
            grow: [{
                grow: Oe()
            }],
            shrink: [{
                shrink: Oe()
            }],
            order: [{
                order: ["first", "last", "none", Si, Y]
            }],
            "grid-cols": [{
                "grid-cols": [Ei]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Si, Y]
                }, Y]
            }],
            "col-start": [{
                "col-start": k()
            }],
            "col-end": [{
                "col-end": k()
            }],
            "grid-rows": [{
                "grid-rows": [Ei]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Si, Y]
                }, Y]
            }],
            "row-start": [{
                "row-start": k()
            }],
            "row-end": [{
                "row-end": k()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Y]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Y]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...Ee()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...Ee(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...Ee(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [z]
            }],
            px: [{
                px: [z]
            }],
            py: [{
                py: [z]
            }],
            ps: [{
                ps: [z]
            }],
            pe: [{
                pe: [z]
            }],
            pt: [{
                pt: [z]
            }],
            pr: [{
                pr: [z]
            }],
            pb: [{
                pb: [z]
            }],
            pl: [{
                pl: [z]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [yt]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [yt]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, e]
            }],
            "min-w": [{
                "min-w": [Y, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [Y, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Lt]
                }, Lt]
            }],
            h: [{
                h: [Y, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [Y, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [Y, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [Y, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Lt, Dt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Cs]
            }],
            "font-family": [{
                font: [Ei]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Rn, Cs]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", wt, Y]
            }],
            "list-image": [{
                "list-image": ["none", Y]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Y]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [i]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [R]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [i]
            }],
            "text-opacity": [{
                "text-opacity": [R]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ve(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", wt, Dt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", wt, Y]
            }],
            "text-decoration-color": [{
                decoration: [i]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: y()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
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
                content: ["none", Y]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [R]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...oe(), Mm]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Om]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Pm]
            }],
            "bg-color": [{
                bg: [i]
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
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
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
                "border-opacity": [R]
            }],
            "border-style": [{
                border: [...ve(), "hidden"]
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
                "divide-opacity": [R]
            }],
            "divide-style": [{
                divide: ve()
            }],
            "border-color": [{
                border: [r]
            }],
            "border-color-x": [{
                "border-x": [r]
            }],
            "border-color-y": [{
                "border-y": [r]
            }],
            "border-color-t": [{
                "border-t": [r]
            }],
            "border-color-r": [{
                "border-r": [r]
            }],
            "border-color-b": [{
                "border-b": [r]
            }],
            "border-color-l": [{
                "border-l": [r]
            }],
            "divide-color": [{
                divide: [r]
            }],
            "outline-style": [{
                outline: ["", ...ve()]
            }],
            "outline-offset": [{
                "outline-offset": [wt, Y]
            }],
            "outline-w": [{
                outline: [wt, Dt]
            }],
            "outline-color": [{
                outline: [i]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [i]
            }],
            "ring-opacity": [{
                "ring-opacity": [R]
            }],
            "ring-offset-w": [{
                "ring-offset": [wt, Dt]
            }],
            "ring-offset-color": [{
                "ring-offset": [i]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Lt, Sm]
            }],
            "shadow-color": [{
                shadow: [Ei]
            }],
            opacity: [{
                opacity: [R]
            }],
            "mix-blend": [{
                "mix-blend": [...Fe(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Fe()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [t]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [c]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Lt, Y]
            }],
            grayscale: [{
                grayscale: [l]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [re]
            }],
            sepia: [{
                sepia: [Ce]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [t]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [c]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [l]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [R]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [re]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [Ce]
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
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
            }],
            duration: [{
                duration: Ie()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Y]
            }],
            delay: [{
                delay: Ie()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Y]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [pe]
            }],
            "scale-x": [{
                "scale-x": [pe]
            }],
            "scale-y": [{
                "scale-y": [pe]
            }],
            rotate: [{
                rotate: [Si, Y]
            }],
            "translate-x": [{
                "translate-x": [je]
            }],
            "translate-y": [{
                "translate-y": [je]
            }],
            "skew-x": [{
                "skew-x": [gt]
            }],
            "skew-y": [{
                "skew-y": [gt]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
            }],
            accent: [{
                accent: ["auto", i]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
            }],
            "caret-color": [{
                caret: [i]
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
                "scroll-m": y()
            }],
            "scroll-mx": [{
                "scroll-mx": y()
            }],
            "scroll-my": [{
                "scroll-my": y()
            }],
            "scroll-ms": [{
                "scroll-ms": y()
            }],
            "scroll-me": [{
                "scroll-me": y()
            }],
            "scroll-mt": [{
                "scroll-mt": y()
            }],
            "scroll-mr": [{
                "scroll-mr": y()
            }],
            "scroll-mb": [{
                "scroll-mb": y()
            }],
            "scroll-ml": [{
                "scroll-ml": y()
            }],
            "scroll-p": [{
                "scroll-p": y()
            }],
            "scroll-px": [{
                "scroll-px": y()
            }],
            "scroll-py": [{
                "scroll-py": y()
            }],
            "scroll-ps": [{
                "scroll-ps": y()
            }],
            "scroll-pe": [{
                "scroll-pe": y()
            }],
            "scroll-pt": [{
                "scroll-pt": y()
            }],
            "scroll-pr": [{
                "scroll-pr": y()
            }],
            "scroll-pb": [{
                "scroll-pb": y()
            }],
            "scroll-pl": [{
                "scroll-pl": y()
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
                "will-change": ["auto", "scroll", "contents", "transform", Y]
            }],
            fill: [{
                fill: [i, "none"]
            }],
            "stroke-w": [{
                stroke: [wt, Dt, Cs]
            }],
            stroke: [{
                stroke: [i, "none"]
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
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
};
var ud = hm(km);

function Er(i) {
    let e = new ge(i);
    return [(o = {}) => T(e, o), o => ({
        provide: e,
        useValue: o
    }), o => ({
        provide: e,
        useExisting: Zs(o)
    }), e]
}
var [xv, Pv, Sv, Ev] = Er("@spartan-ng SET_CLASS_TO_CUSTOM_ELEMENT_TOKEN");
var [Iv, Tv, kv, Rv] = Er("@spartan-ng EXPOSES_SIDE_TOKEN"), [Av, Dv, Lv, Nv] = Er("@spartan-ng EXPOSES_STATE_TOKEN");
var [jv, Fv, zv, Uv] = Er("@spartan-ng SET_TABLE_CLASSES_TOKEN");

function pd(...i) {
    return ud(id(i))
}
var hd = (() => {
    let e = class e {
        constructor() {
            this.userClass = ra("", {
                alias: "class"
            }), this._computedClass = Da(() => pd("block animate-pulse rounded-md bg-muted", this.userClass()))
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["hlm-skeleton"]
        ],
        hostVars: 2,
        hostBindings: function(r, o) {
            r & 2 && Le(o._computedClass())
        },
        inputs: {
            userClass: [1, "class", "userClass"]
        },
        standalone: !0,
        features: [L],
        decls: 0,
        vars: 0,
        template: function(r, o) {},
        encapsulation: 2
    });
    let i = e;
    return i
})();
var Ir = (() => {
    let e = class e {};
    e.\u0275fac = function(r) {
        return new(r || e)
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["spartan-skeleton-preview"]
        ],
        standalone: !0,
        features: [L],
        decls: 9,
        vars: 0,
        consts: [
            [1, "flex", "flex-col", "md:flex-row", "bg-white", "dark:bg-card", "rounded-lg", "shadow-lg", "overflow-hidden", "w-full", "card", "h-[40rem]"],
            [1, "relative", "md:w-1/2"],
            [1, "w-full", "h-full", "object-cover"],
            [1, "md:w-1/2", "px-6", "py-8", "bg-indo", "text-white", "flex", "flex-col", "justify-between"],
            [1, "space-y-2", "mb-6"],
            [1, "h-4", "w-[250px]"],
            [1, "h-4", "w-[200px]"],
            [1, "flex", "justify-end"],
            [1, "h-10", "w-[100px]", "rounded-lg"]
        ],
        template: function(r, o) {
            r & 1 && (p(0, "div", 0)(1, "div", 1), O(2, "hlm-skeleton", 2), u(), p(3, "div", 3)(4, "div", 4), O(5, "hlm-skeleton", 5)(6, "hlm-skeleton", 6), u(), p(7, "div", 7), O(8, "hlm-skeleton", 8), u()()())
        },
        dependencies: [hd],
        encapsulation: 2
    });
    let i = e;
    return i
})();
var Rm = ["title"],
    Am = i => ["/blogs", i];

function Dm(i, e) {
    i & 1 && (Re(0), O(1, "spartan-skeleton-preview", 6)(2, "spartan-skeleton-preview", 6), Ae())
}

function Lm(i, e) {
    if (i & 1 && (p(0, "div", 8)(1, "div", 9), O(2, "img", 10)(3, "div", 11), p(4, "h2", 12), h(5), u()(), p(6, "div", 13), O(7, "p", 14), p(8, "div", 15)(9, "a", 16), h(10, " Read More "), u()()()()), i & 2) {
        let t = e.$implicit;
        S("@fadeInSlideUp", "in"), I(2), Wt("alt", t.title), S("src", t.mobileImage.asset.url, ot), I(3), vt(" ", t.title, " "), I(2), S("innerHTML", t.bodyPreview, Di), I(2), S("routerLink", Gt(6, Am, t.slug == null ? null : t.slug.current))
    }
}

function Nm(i, e) {
    if (i & 1 && q(0, Lm, 11, 8, "div", 7), i & 2) {
        let t = W();
        S("ngForOf", t.blogs)
    }
}
var fd = (() => {
    let e = class e {
        constructor(n, r, o, s, a, c, l) {
            this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanitizer = s, this.sanityService = a, this.titleService = c, this.meta = l, this.blogs = [], this.page = 1, this.totalBlogs = 0, this.blogsPerPage = 4, this.isLoading = !0
        }
        ngOnInit() {
            this.getBlogs(this.page), this.titleService.setTitle("Blogs - Indowealth Group"), this.meta.addTags([{
                name: "description",
                content: "Read the latest news and updates from Indowealth Group on our blog."
            }, {
                name: "keywords",
                content: "blog, news, updates, Indowealth Group"
            }])
        }
        getBlogs(n) {
            this.sanityService.fetchPosts(n, this.blogsPerPage).then(r => {
                this.blogs = r.map(o => ae(C({}, o), {
                    bodyPreview: this.formatBlogBody(o.body)
                })), this.isLoading = !1, console.log(this.blogs)
            })
        }
        formatBlogBody(n, r = 150) {
            if (!n || !n[0] ? .children) return "";
            let o = "";
            return n[0].children.forEach(s => {
                let a = s.text || "",
                    c = /(https?:\/\/[^\s]+)/g;
                a = a.replace(c, '<a href="$&" target="_blank">$&</a>'), s.marks && s.marks.includes("strong") && (a = `<strong>${a}</strong>`), o += a
            }), o = o.replace(/\n/g, "<br />"), o.length > r && (o = o.substring(0, r) + "..."), this.sanitizer.bypassSecurityTrustHtml(o)
        }
        onPageChange(n) {
            this.page = n, this.getBlogs(this.page)
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(V), b(ne), b(de), b(Yt), b(ue), b(ye), b(we))
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-blog"]
        ],
        viewQuery: function(r, o) {
            if (r & 1 && H(Rm, 5), r & 2) {
                let s;
                j(s = F()) && (o.title = s.first)
            }
        },
        standalone: !0,
        features: [L],
        decls: 9,
        vars: 2,
        consts: [
            ["title", ""],
            ["blogList", ""],
            [1, "hero"],
            [1, "second-sec"],
            [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "w-full", "gap-y-14"],
            [4, "ngIf", "ngIfElse"],
            [1, "flex", "items-center", "p-4", "md:m-4", "w-full", "space-x-4"],
            ["class", "flex flex-col md:flex-row bg-white dark:bg-card rounded-lg shadow-lg overflow-hidden w-full card", 4, "ngFor", "ngForOf"],
            [1, "flex", "flex-col", "md:flex-row", "bg-white", "dark:bg-card", "rounded-lg", "shadow-lg", "overflow-hidden", "w-full", "card"],
            [1, "relative", "md:w-1/2"],
            [1, "w-full", "h-full", "object-cover", 3, "src", "alt"],
            [1, "absolute", "inset-0", "bg-gradient-to-b", "from-black", "to-black", "opacity-50"],
            [1, "absolute", "bottom-4", "left-4", "font-bold", "text-white", "px-2", "py-1", "rounded"],
            [1, "md:w-1/2", "px-6", "py-8", "bg-indo", "text-white", "flex", "flex-col", "justify-between"],
            [1, "text-base", "mb-6", 3, "innerHTML"],
            [1, "flex", "justify-end"],
            [1, "px-4", "py-2", "rounded-lg", 3, "routerLink"]
        ],
        template: function(r, o) {
            if (r & 1 && (p(0, "section", 2)(1, "h1", null, 0), h(3, "Blog & Announcements"), u()(), p(4, "section", 3)(5, "div", 4), q(6, Dm, 3, 0, "ng-container", 5)(7, Nm, 1, 1, "ng-template", null, 1, ji), u()()), r & 2) {
                let s = Wn(8);
                I(6), S("ngIf", o.isLoading)("ngIfElse", s)
            }
        },
        dependencies: [At, te, pn, ht, tt, Rt, Ir],
        styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/token_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%;white-space:nowrap}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/blog_hero.jpg) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.4rem;margin-bottom:1.5rem}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.6rem;font-family:source-sans-pro-semi-bold}.second-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#da9915;width:13rem;height:4.1rem;border-radius:5px;font-family:source-sans-pro-bold;font-size:1.6rem;transition:box-shadow .3s ease,transform .3s ease;cursor:pointer}.second-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 0 15px #da991599;transform:scale(1.05)}.second-sec[_ngcontent-%COMP%]   .bg-indo[_ngcontent-%COMP%]{background-color:#d10600;padding:3rem 2rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;padding:5%}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;margin-bottom:1.5rem}.second-sec[_ngcontent-%COMP%]   .bg-indo[_ngcontent-%COMP%]{background-color:#d10600;padding:4rem 2rem}}"],
        data: {
            animation: [X("fadeInSlideUp", [G(":enter", [E({
                opacity: 0,
                transform: "translateY(60px)"
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translateY(0)"
            }))])])]
        }
    });
    let i = e;
    return i
})();

function md(i, e) {
    var t = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(i);
        e && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(i, r).enumerable
        })), t.push.apply(t, n)
    }
    return t
}

function gd(i) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? md(Object(t), !0).forEach(function(n) {
            jm(i, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : md(Object(t)).forEach(function(n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return i
}

function jm(i, e, t) {
    return e = Fm(e), e in i ? Object.defineProperty(i, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[e] = t, i
}

function Fm(i) {
    var e = zm(i, "string");
    return typeof e == "symbol" ? e : e + ""
}

function zm(i, e) {
    if (typeof i != "object" || !i) return i;
    var t = i[Symbol.toPrimitive];
    if (t !== void 0) {
        var n = t.call(i, e || "default");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(i)
}

function kr(i) {
    return i._type === "span" && "text" in i && typeof i.text == "string" && (typeof i.marks > "u" || Array.isArray(i.marks) && i.marks.every(e => typeof e == "string"))
}

function Ms(i) {
    return typeof i._type == "string" && i._type[0] !== "@" && (!("markDefs" in i) || !i.markDefs || Array.isArray(i.markDefs) && i.markDefs.every(e => typeof e._key == "string")) && "children" in i && Array.isArray(i.children) && i.children.every(e => typeof e == "object" && "_type" in e)
}

function xs(i) {
    return Ms(i) && "listItem" in i && typeof i.listItem == "string" && (typeof i.level > "u" || typeof i.level == "number")
}

function Ps(i) {
    return i._type === "@list"
}

function Ss(i) {
    return i._type === "@span"
}

function Es(i) {
    return i._type === "@text"
}
var yd = ["strong", "em", "code", "underline", "strike-through"];

function Um(i, e, t) {
    if (!kr(i) || !i.marks) return [];
    if (!i.marks.length) return [];
    let n = i.marks.slice(),
        r = {};
    return n.forEach(o => {
        r[o] = 1;
        for (let s = e + 1; s < t.length; s++) {
            let a = t[s];
            if (a && kr(a) && Array.isArray(a.marks) && a.marks.indexOf(o) !== -1) r[o]++;
            else break
        }
    }), n.sort((o, s) => Bm(r, o, s))
}

function Bm(i, e, t) {
    let n = i[e],
        r = i[t];
    if (n !== r) return r - n;
    let o = yd.indexOf(e),
        s = yd.indexOf(t);
    return o !== s ? o - s : e.localeCompare(t)
}

function bd(i) {
    var e;
    let {
        children: t,
        markDefs: n = []
    } = i;
    if (!t || !t.length) return [];
    let r = t.map(Um),
        o = {
            _type: "@span",
            children: [],
            markType: "<unknown>"
        },
        s = [o];
    for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (!c) continue;
        let l = r[a] || [],
            d = 1;
        if (s.length > 1)
            for (d; d < s.length; d++) {
                let m = ((e = s[d]) == null ? void 0 : e.markKey) || "",
                    g = l.indexOf(m);
                if (g === -1) break;
                l.splice(g, 1)
            }
        s = s.slice(0, d);
        let f = s[s.length - 1];
        if (f) {
            for (let m of l) {
                let g = n.find(x => x._key === m),
                    w = g ? g._type : m,
                    v = {
                        _type: "@span",
                        _key: c._key,
                        children: [],
                        markDef: g,
                        markType: w,
                        markKey: m
                    };
                f.children.push(v), s.push(v), f = v
            }
            if (kr(c)) {
                let m = c.text.split(`
`);
                for (let g = m.length; g-- > 1;) m.splice(g, 0, `
`);
                f.children = f.children.concat(m.map(g => ({
                    _type: "@text",
                    text: g
                })))
            } else f.children = f.children.concat(c)
        }
    }
    return o.children
}

function vd(i, e) {
    let t = [],
        n;
    for (let r = 0; r < i.length; r++) {
        let o = i[r];
        if (o) {
            if (!xs(o)) {
                t.push(o), n = void 0;
                continue
            }
            if (!n) {
                n = Tr(o, r, e), t.push(n);
                continue
            }
            if ($m(o, n)) {
                n.children.push(o);
                continue
            }
            if ((o.level || 1) > n.level) {
                let s = Tr(o, r, e);
                if (e === "html") {
                    let a = n.children[n.children.length - 1],
                        c = gd(gd({}, a), {}, {
                            children: [...a.children, s]
                        });
                    n.children[n.children.length - 1] = c
                } else n.children.push(s);
                n = s;
                continue
            }
            if ((o.level || 1) < n.level) {
                let s = t[t.length - 1],
                    a = s && Os(s, o);
                if (a) {
                    n = a, n.children.push(o);
                    continue
                }
                n = Tr(o, r, e), t.push(n);
                continue
            }
            if (o.listItem !== n.listItem) {
                let s = t[t.length - 1],
                    a = s && Os(s, {
                        level: o.level || 1
                    });
                if (a && a.listItem === o.listItem) {
                    n = a, n.children.push(o);
                    continue
                } else {
                    n = Tr(o, r, e), t.push(n);
                    continue
                }
            }
            console.warn("Unknown state encountered for block", o), t.push(o)
        }
    }
    return t
}

function $m(i, e) {
    return (i.level || 1) === e.level && i.listItem === e.listItem
}

function Tr(i, e, t) {
    return {
        _type: "@list",
        _key: `${i._key||`${e}`}-parent`,
        mode: t,
        level: i.level || 1,
        listItem: i.listItem,
        children: [i]
    }
}

function Os(i, e) {
    let t = e.level || 1,
        n = e.listItem || "normal",
        r = typeof e.listItem == "string";
    if (Ps(i) && (i.level || 1) === t && r && (i.listItem || "normal") === n) return i;
    if (!("children" in i)) return;
    let o = i.children[i.children.length - 1];
    return o && !kr(o) ? Os(o, e) : void 0
}

function Is(i) {
    let e = "";
    return i.children.forEach(t => {
        Es(t) ? e += t.text : Ss(t) && (e += Is(t))
    }), e
}
var Hm = ["block", "list", "listItem", "marks", "types"],
    Wm = ["listItem"],
    Vm = ["_key"];

function Cd(i, e) {
    var t = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(i);
        e && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(i, r).enumerable
        })), t.push.apply(t, n)
    }
    return t
}

function Nt(i) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Cd(Object(t), !0).forEach(function(n) {
            qm(i, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Cd(Object(t)).forEach(function(n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return i
}

function qm(i, e, t) {
    return e = Gm(e), e in i ? Object.defineProperty(i, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[e] = t, i
}

function Gm(i) {
    var e = Qm(i, "string");
    return typeof e == "symbol" ? e : e + ""
}

function Qm(i, e) {
    if (typeof i != "object" || !i) return i;
    var t = i[Symbol.toPrimitive];
    if (t !== void 0) {
        var n = t.call(i, e || "default");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(i)
}

function Ts(i, e) {
    if (i == null) return {};
    var t = Ym(i, e),
        n, r;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(i);
        for (r = 0; r < o.length; r++) n = o[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(i, n) && (t[n] = i[n])
    }
    return t
}

function Ym(i, e) {
    if (i == null) return {};
    var t = {},
        n = Object.keys(i),
        r, o;
    for (o = 0; o < n.length; o++) r = n[o], !(e.indexOf(r) >= 0) && (t[r] = i[r]);
    return t
}
var Km = {
        number: ({
            children: i
        }) => `<ol>${i}</ol>`,
        bullet: ({
            children: i
        }) => `<ul>${i}</ul>`
    },
    Xm = ({
        children: i
    }) => `<li>${i}</li>`,
    Jm = ["http", "https", "mailto", "tel"],
    Zm = {
        "&": "amp",
        "<": "lt",
        ">": "gt",
        '"': "quot",
        "'": "#x27"
    };

function Od(i) {
    return i.replace(/[&<>"']/g, e => `&${Zm[e]};`)
}

function ks(i) {
    let e = (i || "").trim(),
        t = e.charAt(0);
    if (t === "#" || t === "/") return !0;
    let n = e.indexOf(":");
    if (n === -1) return !0;
    let r = e.slice(0, n).toLowerCase();
    if (Jm.indexOf(r) !== -1) return !0;
    let o = e.indexOf("?");
    if (o !== -1 && n > o) return !0;
    let s = e.indexOf("#");
    return s !== -1 && n > s
}
var eg = ({
        children: i,
        value: e
    }) => {
        let t = e ? .href || "";
        return ks(t) ? `<a href="${Od(t)}">${i}</a>` : i
    },
    tg = {
        em: ({
            children: i
        }) => `<em>${i}</em>`,
        strong: ({
            children: i
        }) => `<strong>${i}</strong>`,
        code: ({
            children: i
        }) => `<code>${i}</code>`,
        underline: ({
            children: i
        }) => `<span style="text-decoration:underline">${i}</span>`,
        "strike-through": ({
            children: i
        }) => `<del>${i}</del>`,
        link: eg
    },
    Ti = (i, e) => `Unknown ${i}, specify a component for it in the \`components.${e}\` option`,
    Md = i => Ti(`block type "${i}"`, "types"),
    ng = i => Ti(`mark type "${i}"`, "marks"),
    ig = i => Ti(`block style "${i}"`, "block"),
    rg = i => Ti(`list style "${i}"`, "list"),
    og = i => Ti(`list item style "${i}"`, "listItem");

function sg(i) {
    console.warn(i)
}
var ag = ({
        value: i,
        isInline: e
    }) => {
        let t = Md(i._type);
        return e ? `<span style="display:none">${t}</span>` : `<div style="display:none">${t}</div>`
    },
    cg = ({
        markType: i,
        children: e
    }) => `<span class="unknown__pt__mark__${i}">${e}</span>`,
    lg = ({
        children: i
    }) => `<p>${i}</p>`,
    dg = ({
        children: i
    }) => `<ul>${i}</ul>`,
    ug = ({
        children: i
    }) => `<li>${i}</li>`,
    pg = () => "<br/>",
    hg = {
        normal: ({
            children: i
        }) => `<p>${i}</p>`,
        blockquote: ({
            children: i
        }) => `<blockquote>${i}</blockquote>`,
        h1: ({
            children: i
        }) => `<h1>${i}</h1>`,
        h2: ({
            children: i
        }) => `<h2>${i}</h2>`,
        h3: ({
            children: i
        }) => `<h3>${i}</h3>`,
        h4: ({
            children: i
        }) => `<h4>${i}</h4>`,
        h5: ({
            children: i
        }) => `<h5>${i}</h5>`,
        h6: ({
            children: i
        }) => `<h6>${i}</h6>`
    },
    _d = {
        types: {},
        block: hg,
        marks: tg,
        list: Km,
        listItem: Xm,
        hardBreak: pg,
        unknownType: ag,
        unknownMark: cg,
        unknownList: dg,
        unknownListItem: ug,
        unknownBlockStyle: lg
    };

function fg(i, e) {
    let {
        block: t,
        list: n,
        listItem: r,
        marks: o,
        types: s
    } = e, a = Ts(e, Hm);
    return Nt(Nt({}, i), {}, {
        block: Ii(i, e, "block"),
        list: Ii(i, e, "list"),
        listItem: Ii(i, e, "listItem"),
        marks: Ii(i, e, "marks"),
        types: Ii(i, e, "types")
    }, a)
}

function Ii(i, e, t) {
    let n = e[t],
        r = i[t];
    return typeof n == "function" || n && typeof r == "function" ? n : n ? Nt(Nt({}, r), n) : r
}

function xd(i, e = {}) {
    let {
        components: t,
        onMissingComponent: n = sg
    } = e, r = n || gg, o = Array.isArray(i) ? i : [i], s = vd(o, "html"), a = t ? fg(_d, t) : _d, c = mg(a, r);
    return s.map((l, d) => c({
        node: l,
        index: d,
        isInline: !1,
        renderNode: c
    })).join("")
}
var mg = (i, e) => {
    function t(l) {
        let {
            node: d,
            index: f,
            isInline: m
        } = l;
        return Ps(d) ? r(d, f) : xs(d) ? n(d, f) : Ss(d) ? o(d) : Ms(d) ? s(d, f, m) : Es(d) ? a(d) : c(d, f, m)
    }

    function n(l, d) {
        let f = wd({
                node: l,
                index: d,
                isInline: !1,
                renderNode: t
            }),
            m = i.listItem,
            g = (typeof m == "function" ? m : m[l.listItem]) || i.unknownListItem;
        if (g === i.unknownListItem) {
            let v = l.listItem || "bullet";
            e(og(v), {
                type: v,
                nodeType: "listItemStyle"
            })
        }
        let w = f.children;
        if (l.style && l.style !== "normal") {
            let {
                listItem: v
            } = l, x = Ts(l, Wm);
            w = t({
                node: x,
                index: d,
                isInline: !1,
                renderNode: t
            })
        }
        return g({
            value: l,
            index: d,
            isInline: !1,
            renderNode: t,
            children: w
        })
    }

    function r(l, d) {
        let f = l.children.map((w, v) => t({
                node: w._key ? w : Nt(Nt({}, w), {}, {
                    _key: `li-${d}-${v}`
                }),
                index: d,
                isInline: !1,
                renderNode: t
            })),
            m = i.list,
            g = (typeof m == "function" ? m : m[l.listItem]) || i.unknownList;
        if (g === i.unknownList) {
            let w = l.listItem || "bullet";
            e(rg(w), {
                nodeType: "listStyle",
                type: w
            })
        }
        return g({
            value: l,
            index: d,
            isInline: !1,
            renderNode: t,
            children: f.join("")
        })
    }

    function o(l) {
        let {
            markDef: d,
            markType: f,
            markKey: m
        } = l, g = i.marks[f] || i.unknownMark, w = l.children.map((v, x) => t({
            node: v,
            index: x,
            isInline: !0,
            renderNode: t
        }));
        return g === i.unknownMark && e(ng(f), {
            nodeType: "mark",
            type: f
        }), g({
            text: Is(l),
            value: d,
            markType: f,
            markKey: m,
            renderNode: t,
            children: w.join("")
        })
    }

    function s(l, d, f) {
        let m = wd({
                node: l,
                index: d,
                isInline: f,
                renderNode: t
            }),
            {
                _key: g
            } = m,
            w = Ts(m, Vm),
            v = w.node.style || "normal",
            x = (typeof i.block == "function" ? i.block : i.block[v]) || i.unknownBlockStyle;
        return x === i.unknownBlockStyle && e(ig(v), {
            nodeType: "blockStyle",
            type: v
        }), x(Nt(Nt({}, w), {}, {
            value: w.node,
            renderNode: t
        }))
    }

    function a(l) {
        if (l.text === `
`) {
            let d = i.hardBreak;
            return d ? d() : `
`
        }
        return Od(l.text)
    }

    function c(l, d, f) {
        let m = i.types[l._type];
        return m || e(Md(l._type), {
            nodeType: "block",
            type: l._type
        }), (m || i.unknownType)({
            value: l,
            isInline: f,
            index: d,
            renderNode: t
        })
    }
    return t
};

function wd(i) {
    let {
        node: e,
        index: t,
        isInline: n,
        renderNode: r
    } = i, o = bd(e).map((s, a) => r({
        node: s,
        isInline: !0,
        index: a,
        renderNode: r
    }));
    return {
        _key: e._key || `block-${t}`,
        children: o.join(""),
        index: t,
        isInline: n,
        node: e
    }
}

function gg() {}
var Sd = function(i, e, t, n) {
        var r;
        e[0] = 0;
        for (var o = 1; o < e.length; o++) {
            var s = e[o++],
                a = e[o] ? (e[0] |= s ? 1 : 2, t[e[o++]]) : e[++o];
            s === 3 ? n[0] = a : s === 4 ? n[1] = Object.assign(n[1] || {}, a) : s === 5 ? (n[1] = n[1] || {})[e[++o]] = a : s === 6 ? n[1][e[++o]] += a + "" : s ? (r = i.apply(a, Sd(i, a, t, ["", null])), n.push(r), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = r)) : n.push(a)
        }
        return n
    },
    Pd = new Map;

function Ed(i) {
    var e = Pd.get(this);
    return e || (e = new Map, Pd.set(this, e)), (e = Sd(this, e.get(i) || (e.set(i, e = function(t) {
        for (var n, r, o = 1, s = "", a = "", c = [0], l = function(m) {
                o === 1 && (m || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, m, s) : o === 3 && (m || s) ? (c.push(3, m, s), o = 2) : o === 2 && s === "..." && m ? c.push(4, m, 0) : o === 2 && s && !m ? c.push(5, 0, !0, s) : o >= 5 && ((s || !m && o === 5) && (c.push(o, 0, s, r), o = 6), m && (c.push(o, m, 0, r), o = 6)), s = ""
            }, d = 0; d < t.length; d++) {
            d && (o === 1 && l(), l(d));
            for (var f = 0; f < t[d].length; f++) n = t[d][f], o === 1 ? n === "<" ? (l(), c = [c], o = 3) : s += n : o === 4 ? s === "--" && n === ">" ? (o = 1, s = "") : s = n + s[0] : a ? n === a ? a = "" : s += n : n === '"' || n === "'" ? a = n : n === ">" ? (l(), o = 1) : o && (n === "=" ? (o = 5, r = s, s = "") : n === "/" && (o < 5 || t[d][f + 1] === ">") ? (l(), o === 3 && (c = c[0]), o = c, (c = c[0]).push(2, 0, o), o = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (l(), o = 2) : s += n), o === 3 && s === "!--" && (o = 4, c = c[0])
        }
        return l(), c
    }(i)), e), arguments, [])).length > 1 ? e : e[0]
}
var Td = Bs(Id());
var Dn = (() => {
    let e = class e {
        constructor(n) {
            this.sanityService = n
        }
        transform(n, r) {
            if (!n) return console.warn("SanityImagePipe: No image source provided"), null;
            let o = this.sanityService.getImageUrlBuilder(n);
            return r ? o.width(r).auto("format").url() : o.auto("format").url()
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(ue, 16))
    }, e.\u0275pipe = Un({
        name: "sanityImage",
        type: e,
        pure: !0,
        standalone: !0
    });
    let i = e;
    return i
})();
var mC = Ed.bind(Td.default),
    Rr = (() => {
        let e = class e {
            constructor(n, r) {
                this.sanitizer = n, this.sanityImagePipe = r, this.components = {
                    types: {
                        image: ({
                            value: o
                        }) => '<img src="' + this.sanityImagePipe.transform(o, 900) + '" />'
                    },
                    marks: {
                        link: ({
                            children: o,
                            value: s
                        }) => {
                            let a = s.href || "";
                            if (ks(a)) {
                                let c = a.startsWith("/") ? void 0 : "noreferrer noopener";
                                return `<a style="color: #da9915" href="${a}" target="_blank" rel="${c}">${o}</a>`
                            }
                            return o
                        }
                    }
                }
            }
            transform(n) {
                let r = xd(n, {
                    components: this.components
                });
                return this.sanitizer.bypassSecurityTrustHtml(r)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(Yt, 16), b(Dn, 16))
        }, e.\u0275pipe = Un({
            name: "portableText",
            type: e,
            pure: !0,
            standalone: !0
        });
        let i = e;
        return i
    })();
var nn = class i {
        static isArray(e, t = !0) {
            return Array.isArray(e) && (t || e.length !== 0)
        }
        static isObject(e, t = !0) {
            return typeof e == "object" && !Array.isArray(e) && e != null && (t || Object.keys(e).length !== 0)
        }
        static equals(e, t, n) {
            return n ? this.resolveFieldData(e, n) === this.resolveFieldData(t, n) : this.equalsByValue(e, t)
        }
        static equalsByValue(e, t) {
            if (e === t) return !0;
            if (e && t && typeof e == "object" && typeof t == "object") {
                var n = Array.isArray(e),
                    r = Array.isArray(t),
                    o, s, a;
                if (n && r) {
                    if (s = e.length, s != t.length) return !1;
                    for (o = s; o-- !== 0;)
                        if (!this.equalsByValue(e[o], t[o])) return !1;
                    return !0
                }
                if (n != r) return !1;
                var c = this.isDate(e),
                    l = this.isDate(t);
                if (c != l) return !1;
                if (c && l) return e.getTime() == t.getTime();
                var d = e instanceof RegExp,
                    f = t instanceof RegExp;
                if (d != f) return !1;
                if (d && f) return e.toString() == t.toString();
                var m = Object.keys(e);
                if (s = m.length, s !== Object.keys(t).length) return !1;
                for (o = s; o-- !== 0;)
                    if (!Object.prototype.hasOwnProperty.call(t, m[o])) return !1;
                for (o = s; o-- !== 0;)
                    if (a = m[o], !this.equalsByValue(e[a], t[a])) return !1;
                return !0
            }
            return e !== e && t !== t
        }
        static resolveFieldData(e, t) {
            if (e && t) {
                if (this.isFunction(t)) return t(e);
                if (t.indexOf(".") == -1) return e[t]; {
                    let n = t.split("."),
                        r = e;
                    for (let o = 0, s = n.length; o < s; ++o) {
                        if (r == null) return null;
                        r = r[n[o]]
                    }
                    return r
                }
            } else return null
        }
        static isFunction(e) {
            return !!(e && e.constructor && e.call && e.apply)
        }
        static reorderArray(e, t, n) {
            let r;
            e && t !== n && (n >= e.length && (n %= e.length, t %= e.length), e.splice(n, 0, e.splice(t, 1)[0]))
        }
        static insertIntoOrderedArray(e, t, n, r) {
            if (n.length > 0) {
                let o = !1;
                for (let s = 0; s < n.length; s++)
                    if (this.findIndexInList(n[s], r) > t) {
                        n.splice(s, 0, e), o = !0;
                        break
                    }
                o || n.push(e)
            } else n.push(e)
        }
        static findIndexInList(e, t) {
            let n = -1;
            if (t) {
                for (let r = 0; r < t.length; r++)
                    if (t[r] == e) {
                        n = r;
                        break
                    }
            }
            return n
        }
        static contains(e, t) {
            if (e != null && t && t.length) {
                for (let n of t)
                    if (this.equals(e, n)) return !0
            }
            return !1
        }
        static removeAccents(e) {
            return e && (e = e.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "")), e
        }
        static isDate(e) {
            return Object.prototype.toString.call(e) === "[object Date]"
        }
        static isEmpty(e) {
            return e == null || e === "" || Array.isArray(e) && e.length === 0 || !this.isDate(e) && typeof e == "object" && Object.keys(e).length === 0
        }
        static isNotEmpty(e) {
            return !this.isEmpty(e)
        }
        static compare(e, t, n, r = 1) {
            let o = -1,
                s = this.isEmpty(e),
                a = this.isEmpty(t);
            return s && a ? o = 0 : s ? o = r : a ? o = -r : typeof e == "string" && typeof t == "string" ? o = e.localeCompare(t, n, {
                numeric: !0
            }) : o = e < t ? -1 : e > t ? 1 : 0, o
        }
        static sort(e, t, n = 1, r, o = 1) {
            let s = i.compare(e, t, r, n),
                a = n;
            return (i.isEmpty(e) || i.isEmpty(t)) && (a = o === 1 ? n : o), a * s
        }
        static merge(e, t) {
            if (!(e == null && t == null)) {
                {
                    if ((e == null || typeof e == "object") && (t == null || typeof t == "object")) return C(C({}, e || {}), t || {});
                    if ((e == null || typeof e == "string") && (t == null || typeof t == "string")) return [e || "", t || ""].join(" ")
                }
                return t || e
            }
        }
        static isPrintableCharacter(e = "") {
            return this.isNotEmpty(e) && e.length === 1 && e.match(/\S| /)
        }
        static getItemValue(e, ...t) {
            return this.isFunction(e) ? e(...t) : e
        }
        static findLastIndex(e, t) {
            let n = -1;
            if (this.isNotEmpty(e)) try {
                n = e.findLastIndex(t)
            } catch {
                n = e.lastIndexOf([...e].reverse().find(t))
            }
            return n
        }
        static findLast(e, t) {
            let n;
            if (this.isNotEmpty(e)) try {
                n = e.findLast(t)
            } catch {
                n = [...e].reverse().find(t)
            }
            return n
        }
        static deepEquals(e, t) {
            if (e === t) return !0;
            if (e && t && typeof e == "object" && typeof t == "object") {
                var n = Array.isArray(e),
                    r = Array.isArray(t),
                    o, s, a;
                if (n && r) {
                    if (s = e.length, s != t.length) return !1;
                    for (o = s; o-- !== 0;)
                        if (!this.deepEquals(e[o], t[o])) return !1;
                    return !0
                }
                if (n != r) return !1;
                var c = e instanceof Date,
                    l = t instanceof Date;
                if (c != l) return !1;
                if (c && l) return e.getTime() == t.getTime();
                var d = e instanceof RegExp,
                    f = t instanceof RegExp;
                if (d != f) return !1;
                if (d && f) return e.toString() == t.toString();
                var m = Object.keys(e);
                if (s = m.length, s !== Object.keys(t).length) return !1;
                for (o = s; o-- !== 0;)
                    if (!Object.prototype.hasOwnProperty.call(t, m[o])) return !1;
                for (o = s; o-- !== 0;)
                    if (a = m[o], !this.deepEquals(e[a], t[a])) return !1;
                return !0
            }
            return e !== e && t !== t
        }
    },
    kd = 0;

function Ot(i = "pn_id_") {
    return kd++, `${i}${kd}`
}

function bg() {
    let i = [],
        e = (o, s) => {
            let a = i.length > 0 ? i[i.length - 1] : {
                    key: o,
                    value: s
                },
                c = a.value + (a.key === o ? 0 : s) + 2;
            return i.push({
                key: o,
                value: c
            }), c
        },
        t = o => {
            i = i.filter(s => s.value !== o)
        },
        n = () => i.length > 0 ? i[i.length - 1].value : 0,
        r = o => o && parseInt(o.style.zIndex, 10) || 0;
    return {
        get: r,
        set: (o, s, a) => {
            s && (s.style.zIndex = String(e(o, a)))
        },
        clear: o => {
            o && (t(r(o)), o.style.zIndex = "")
        },
        getCurrent: () => n()
    }
}
var Ds = bg();
var Rd = ["*"];
var Ne = (() => {
    class i {
        static STARTS_WITH = "startsWith";
        static CONTAINS = "contains";
        static NOT_CONTAINS = "notContains";
        static ENDS_WITH = "endsWith";
        static EQUALS = "equals";
        static NOT_EQUALS = "notEquals";
        static IN = "in";
        static LESS_THAN = "lt";
        static LESS_THAN_OR_EQUAL_TO = "lte";
        static GREATER_THAN = "gt";
        static GREATER_THAN_OR_EQUAL_TO = "gte";
        static BETWEEN = "between";
        static IS = "is";
        static IS_NOT = "isNot";
        static BEFORE = "before";
        static AFTER = "after";
        static DATE_IS = "dateIs";
        static DATE_IS_NOT = "dateIsNot";
        static DATE_BEFORE = "dateBefore";
        static DATE_AFTER = "dateAfter"
    }
    return i
})();
var Ar = (() => {
        class i {
            ripple = !1;
            inputStyle = Jr("outlined");
            overlayOptions = {};
            csp = Jr({
                nonce: void 0
            });
            filterMatchModeOptions = {
                text: [Ne.STARTS_WITH, Ne.CONTAINS, Ne.NOT_CONTAINS, Ne.ENDS_WITH, Ne.EQUALS, Ne.NOT_EQUALS],
                numeric: [Ne.EQUALS, Ne.NOT_EQUALS, Ne.LESS_THAN, Ne.LESS_THAN_OR_EQUAL_TO, Ne.GREATER_THAN, Ne.GREATER_THAN_OR_EQUAL_TO],
                date: [Ne.DATE_IS, Ne.DATE_IS_NOT, Ne.DATE_BEFORE, Ne.DATE_AFTER]
            };
            translation = {
                startsWith: "Starts with",
                contains: "Contains",
                notContains: "Not contains",
                endsWith: "Ends with",
                equals: "Equals",
                notEquals: "Not equals",
                noFilter: "No Filter",
                lt: "Less than",
                lte: "Less than or equal to",
                gt: "Greater than",
                gte: "Greater than or equal to",
                is: "Is",
                isNot: "Is not",
                before: "Before",
                after: "After",
                dateIs: "Date is",
                dateIsNot: "Date is not",
                dateBefore: "Date is before",
                dateAfter: "Date is after",
                clear: "Clear",
                apply: "Apply",
                matchAll: "Match All",
                matchAny: "Match Any",
                addRule: "Add Rule",
                removeRule: "Remove Rule",
                accept: "Yes",
                reject: "No",
                choose: "Choose",
                upload: "Upload",
                cancel: "Cancel",
                pending: "Pending",
                fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                chooseYear: "Choose Year",
                chooseMonth: "Choose Month",
                chooseDate: "Choose Date",
                prevDecade: "Previous Decade",
                nextDecade: "Next Decade",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                prevHour: "Previous Hour",
                nextHour: "Next Hour",
                prevMinute: "Previous Minute",
                nextMinute: "Next Minute",
                prevSecond: "Previous Second",
                nextSecond: "Next Second",
                am: "am",
                pm: "pm",
                dateFormat: "mm/dd/yy",
                firstDayOfWeek: 0,
                today: "Today",
                weekHeader: "Wk",
                weak: "Weak",
                medium: "Medium",
                strong: "Strong",
                passwordPrompt: "Enter a password",
                emptyMessage: "No results found",
                searchMessage: "{0} results are available",
                selectionMessage: "{0} items selected",
                emptySelectionMessage: "No selected item",
                emptySearchMessage: "No results found",
                emptyFilterMessage: "No results found",
                aria: {
                    trueLabel: "True",
                    falseLabel: "False",
                    nullLabel: "Not Selected",
                    star: "1 star",
                    stars: "{star} stars",
                    selectAll: "All items selected",
                    unselectAll: "All items unselected",
                    close: "Close",
                    previous: "Previous",
                    next: "Next",
                    navigation: "Navigation",
                    scrollTop: "Scroll Top",
                    moveTop: "Move Top",
                    moveUp: "Move Up",
                    moveDown: "Move Down",
                    moveBottom: "Move Bottom",
                    moveToTarget: "Move to Target",
                    moveToSource: "Move to Source",
                    moveAllToTarget: "Move All to Target",
                    moveAllToSource: "Move All to Source",
                    pageLabel: "{page}",
                    firstPageLabel: "First Page",
                    lastPageLabel: "Last Page",
                    nextPageLabel: "Next Page",
                    prevPageLabel: "Previous Page",
                    rowsPerPageLabel: "Rows per page",
                    previousPageLabel: "Previous Page",
                    jumpToPageDropdownLabel: "Jump to Page Dropdown",
                    jumpToPageInputLabel: "Jump to Page Input",
                    selectRow: "Row Selected",
                    unselectRow: "Row Unselected",
                    expandRow: "Row Expanded",
                    collapseRow: "Row Collapsed",
                    showFilterMenu: "Show Filter Menu",
                    hideFilterMenu: "Hide Filter Menu",
                    filterOperator: "Filter Operator",
                    filterConstraint: "Filter Constraint",
                    editRow: "Row Edit",
                    saveEdit: "Save Edit",
                    cancelEdit: "Cancel Edit",
                    listView: "List View",
                    gridView: "Grid View",
                    slide: "Slide",
                    slideNumber: "{slideNumber}",
                    zoomImage: "Zoom Image",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    rotateRight: "Rotate Right",
                    rotateLeft: "Rotate Left",
                    listLabel: "Option List",
                    selectColor: "Select a color",
                    removeLabel: "Remove",
                    browseFiles: "Browse Files",
                    maximizeLabel: "Maximize"
                }
            };
            zIndex = {
                modal: 1100,
                overlay: 1e3,
                menu: 1e3,
                tooltip: 1100
            };
            translationSource = new ut;
            translationObserver = this.translationSource.asObservable();
            getTranslation(t) {
                return this.translation[t]
            }
            setTranslation(t) {
                this.translation = C(C({}, this.translation), t), this.translationSource.next(this.translation)
            }
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275prov = J({
                token: i,
                factory: i.\u0275fac,
                providedIn: "root"
            })
        }
        return i
    })(),
    Dr = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275cmp = D({
                type: i,
                selectors: [
                    ["p-header"]
                ],
                standalone: !0,
                features: [L],
                ngContentSelectors: Rd,
                decls: 1,
                vars: 0,
                template: function(n, r) {
                    n & 1 && (bt(), st(0))
                },
                encapsulation: 2
            })
        }
        return i
    })(),
    Ad = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275cmp = D({
                type: i,
                selectors: [
                    ["p-footer"]
                ],
                standalone: !0,
                features: [L],
                ngContentSelectors: Rd,
                decls: 1,
                vars: 0,
                template: function(n, r) {
                    n & 1 && (bt(), st(0))
                },
                encapsulation: 2
            })
        }
        return i
    })(),
    Lr = (() => {
        class i {
            template;
            type;
            name;
            constructor(t) {
                this.template = t
            }
            getType() {
                return this.name
            }
            static\ u0275fac = function(n) {
                return new(n || i)(b(ga))
            };
            static\ u0275dir = Be({
                type: i,
                selectors: [
                    ["", "pTemplate", ""]
                ],
                inputs: {
                    type: "type",
                    name: [0, "pTemplate", "name"]
                },
                standalone: !0
            })
        }
        return i
    })(),
    Nr = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275mod = ke({
                type: i
            });
            static\ u0275inj = Te({})
        }
        return i
    })(),
    Dd = (() => {
        class i {
            static STARTS_WITH = "startsWith";
            static CONTAINS = "contains";
            static NOT_CONTAINS = "notContains";
            static ENDS_WITH = "endsWith";
            static EQUALS = "equals";
            static NOT_EQUALS = "notEquals";
            static NO_FILTER = "noFilter";
            static LT = "lt";
            static LTE = "lte";
            static GT = "gt";
            static GTE = "gte";
            static IS = "is";
            static IS_NOT = "isNot";
            static BEFORE = "before";
            static AFTER = "after";
            static CLEAR = "clear";
            static APPLY = "apply";
            static MATCH_ALL = "matchAll";
            static MATCH_ANY = "matchAny";
            static ADD_RULE = "addRule";
            static REMOVE_RULE = "removeRule";
            static ACCEPT = "accept";
            static REJECT = "reject";
            static CHOOSE = "choose";
            static UPLOAD = "upload";
            static CANCEL = "cancel";
            static PENDING = "pending";
            static FILE_SIZE_TYPES = "fileSizeTypes";
            static DAY_NAMES = "dayNames";
            static DAY_NAMES_SHORT = "dayNamesShort";
            static DAY_NAMES_MIN = "dayNamesMin";
            static MONTH_NAMES = "monthNames";
            static MONTH_NAMES_SHORT = "monthNamesShort";
            static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
            static TODAY = "today";
            static WEEK_HEADER = "weekHeader";
            static WEAK = "weak";
            static MEDIUM = "medium";
            static STRONG = "strong";
            static PASSWORD_PROMPT = "passwordPrompt";
            static EMPTY_MESSAGE = "emptyMessage";
            static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
            static SHOW_FILTER_MENU = "showFilterMenu";
            static HIDE_FILTER_MENU = "hideFilterMenu";
            static SELECTION_MESSAGE = "selectionMessage";
            static ARIA = "aria";
            static SELECT_COLOR = "selectColor";
            static BROWSE_FILES = "browseFiles"
        }
        return i
    })();
var A = (() => {
    class i {
        static zindex = 1e3;
        static calculatedScrollbarWidth = null;
        static calculatedScrollbarHeight = null;
        static browser;
        static addClass(t, n) {
            t && n && (t.classList ? t.classList.add(n) : t.className += " " + n)
        }
        static addMultipleClasses(t, n) {
            if (t && n)
                if (t.classList) {
                    let r = n.trim().split(" ");
                    for (let o = 0; o < r.length; o++) t.classList.add(r[o])
                } else {
                    let r = n.split(" ");
                    for (let o = 0; o < r.length; o++) t.className += " " + r[o]
                }
        }
        static removeClass(t, n) {
            t && n && (t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        static removeMultipleClasses(t, n) {
            t && n && [n].flat().filter(Boolean).forEach(r => r.split(" ").forEach(o => this.removeClass(t, o)))
        }
        static hasClass(t, n) {
            return t && n ? t.classList ? t.classList.contains(n) : new RegExp("(^| )" + n + "( |$)", "gi").test(t.className) : !1
        }
        static siblings(t) {
            return Array.prototype.filter.call(t.parentNode.children, function(n) {
                return n !== t
            })
        }
        static find(t, n) {
            return Array.from(t.querySelectorAll(n))
        }
        static findSingle(t, n) {
            return this.isElement(t) ? t.querySelector(n) : null
        }
        static index(t) {
            let n = t.parentNode.childNodes,
                r = 0;
            for (var o = 0; o < n.length; o++) {
                if (n[o] == t) return r;
                n[o].nodeType == 1 && r++
            }
            return -1
        }
        static indexWithinGroup(t, n) {
            let r = t.parentNode ? t.parentNode.childNodes : [],
                o = 0;
            for (var s = 0; s < r.length; s++) {
                if (r[s] == t) return o;
                r[s].attributes && r[s].attributes[n] && r[s].nodeType == 1 && o++
            }
            return -1
        }
        static appendOverlay(t, n, r = "self") {
            r !== "self" && t && n && this.appendChild(t, n)
        }
        static alignOverlay(t, n, r = "self", o = !0) {
            t && n && (o && (t.style.minWidth = `${i.getOuterWidth(n)}px`), r === "self" ? this.relativePosition(t, n) : this.absolutePosition(t, n))
        }
        static relativePosition(t, n, r = !0) {
            let o = z => {
                    if (z) return getComputedStyle(z).getPropertyValue("position") === "relative" ? z : o(z.parentElement)
                },
                s = t.offsetParent ? {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                } : this.getHiddenElementDimensions(t),
                a = n.offsetHeight ? ? n.getBoundingClientRect().height,
                c = n.getBoundingClientRect(),
                l = this.getWindowScrollTop(),
                d = this.getWindowScrollLeft(),
                f = this.getViewport(),
                g = o(t) ? .getBoundingClientRect() || {
                    top: -1 * l,
                    left: -1 * d
                },
                w, v;
            c.top + a + s.height > f.height ? (w = c.top - g.top - s.height, t.style.transformOrigin = "bottom", c.top + w < 0 && (w = -1 * c.top)) : (w = a + c.top - g.top, t.style.transformOrigin = "top");
            let x = c.left + s.width - f.width,
                R = c.left - g.left;
            s.width > f.width ? v = (c.left - g.left) * -1 : x > 0 ? v = R - x : v = c.left - g.left, t.style.top = w + "px", t.style.left = v + "px", r && (t.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))")
        }
        static absolutePosition(t, n, r = !0) {
            let o = t.offsetParent ? {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                } : this.getHiddenElementDimensions(t),
                s = o.height,
                a = o.width,
                c = n.offsetHeight ? ? n.getBoundingClientRect().height,
                l = n.offsetWidth ? ? n.getBoundingClientRect().width,
                d = n.getBoundingClientRect(),
                f = this.getWindowScrollTop(),
                m = this.getWindowScrollLeft(),
                g = this.getViewport(),
                w, v;
            d.top + c + s > g.height ? (w = d.top + f - s, t.style.transformOrigin = "bottom", w < 0 && (w = f)) : (w = c + d.top + f, t.style.transformOrigin = "top"), d.left + a > g.width ? v = Math.max(0, d.left + m + l - a) : v = d.left + m, t.style.top = w + "px", t.style.left = v + "px", r && (t.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))")
        }
        static getParents(t, n = []) {
            return t.parentNode === null ? n : this.getParents(t.parentNode, n.concat([t.parentNode]))
        }
        static getScrollableParents(t) {
            let n = [];
            if (t) {
                let r = this.getParents(t),
                    o = /(auto|scroll)/,
                    s = a => {
                        let c = window.getComputedStyle(a, null);
                        return o.test(c.getPropertyValue("overflow")) || o.test(c.getPropertyValue("overflowX")) || o.test(c.getPropertyValue("overflowY"))
                    };
                for (let a of r) {
                    let c = a.nodeType === 1 && a.dataset.scrollselectors;
                    if (c) {
                        let l = c.split(",");
                        for (let d of l) {
                            let f = this.findSingle(a, d);
                            f && s(f) && n.push(f)
                        }
                    }
                    a.nodeType !== 9 && s(a) && n.push(a)
                }
            }
            return n
        }
        static getHiddenElementOuterHeight(t) {
            t.style.visibility = "hidden", t.style.display = "block";
            let n = t.offsetHeight;
            return t.style.display = "none", t.style.visibility = "visible", n
        }
        static getHiddenElementOuterWidth(t) {
            t.style.visibility = "hidden", t.style.display = "block";
            let n = t.offsetWidth;
            return t.style.display = "none", t.style.visibility = "visible", n
        }
        static getHiddenElementDimensions(t) {
            let n = {};
            return t.style.visibility = "hidden", t.style.display = "block", n.width = t.offsetWidth, n.height = t.offsetHeight, t.style.display = "none", t.style.visibility = "visible", n
        }
        static scrollInView(t, n) {
            let r = getComputedStyle(t).getPropertyValue("borderTopWidth"),
                o = r ? parseFloat(r) : 0,
                s = getComputedStyle(t).getPropertyValue("paddingTop"),
                a = s ? parseFloat(s) : 0,
                c = t.getBoundingClientRect(),
                d = n.getBoundingClientRect().top + document.body.scrollTop - (c.top + document.body.scrollTop) - o - a,
                f = t.scrollTop,
                m = t.clientHeight,
                g = this.getOuterHeight(n);
            d < 0 ? t.scrollTop = f + d : d + g > m && (t.scrollTop = f + d - m + g)
        }
        static fadeIn(t, n) {
            t.style.opacity = 0;
            let r = +new Date,
                o = 0,
                s = function() {
                    o = +t.style.opacity.replace(",", ".") + (new Date().getTime() - r) / n, t.style.opacity = o, r = +new Date, +o < 1 && (window.requestAnimationFrame && requestAnimationFrame(s) || setTimeout(s, 16))
                };
            s()
        }
        static fadeOut(t, n) {
            var r = 1,
                o = 50,
                s = n,
                a = o / s;
            let c = setInterval(() => {
                r = r - a, r <= 0 && (r = 0, clearInterval(c)), t.style.opacity = r
            }, o)
        }
        static getWindowScrollTop() {
            let t = document.documentElement;
            return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0)
        }
        static getWindowScrollLeft() {
            let t = document.documentElement;
            return (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        }
        static matches(t, n) {
            var r = Element.prototype,
                o = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function(s) {
                    return [].indexOf.call(document.querySelectorAll(s), this) !== -1
                };
            return o.call(t, n)
        }
        static getOuterWidth(t, n) {
            let r = t.offsetWidth;
            if (n) {
                let o = getComputedStyle(t);
                r += parseFloat(o.marginLeft) + parseFloat(o.marginRight)
            }
            return r
        }
        static getHorizontalPadding(t) {
            let n = getComputedStyle(t);
            return parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)
        }
        static getHorizontalMargin(t) {
            let n = getComputedStyle(t);
            return parseFloat(n.marginLeft) + parseFloat(n.marginRight)
        }
        static innerWidth(t) {
            let n = t.offsetWidth,
                r = getComputedStyle(t);
            return n += parseFloat(r.paddingLeft) + parseFloat(r.paddingRight), n
        }
        static width(t) {
            let n = t.offsetWidth,
                r = getComputedStyle(t);
            return n -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight), n
        }
        static getInnerHeight(t) {
            let n = t.offsetHeight,
                r = getComputedStyle(t);
            return n += parseFloat(r.paddingTop) + parseFloat(r.paddingBottom), n
        }
        static getOuterHeight(t, n) {
            let r = t.offsetHeight;
            if (n) {
                let o = getComputedStyle(t);
                r += parseFloat(o.marginTop) + parseFloat(o.marginBottom)
            }
            return r
        }
        static getHeight(t) {
            let n = t.offsetHeight,
                r = getComputedStyle(t);
            return n -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), n
        }
        static getWidth(t) {
            let n = t.offsetWidth,
                r = getComputedStyle(t);
            return n -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), n
        }
        static getViewport() {
            let t = window,
                n = document,
                r = n.documentElement,
                o = n.getElementsByTagName("body")[0],
                s = t.innerWidth || r.clientWidth || o.clientWidth,
                a = t.innerHeight || r.clientHeight || o.clientHeight;
            return {
                width: s,
                height: a
            }
        }
        static getOffset(t) {
            var n = t.getBoundingClientRect();
            return {
                top: n.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                left: n.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
            }
        }
        static replaceElementWith(t, n) {
            let r = t.parentNode;
            if (!r) throw "Can't replace element";
            return r.replaceChild(n, t)
        }
        static getUserAgent() {
            if (navigator && this.isClient()) return navigator.userAgent
        }
        static isIE() {
            var t = window.navigator.userAgent,
                n = t.indexOf("MSIE ");
            if (n > 0) return !0;
            var r = t.indexOf("Trident/");
            if (r > 0) {
                var o = t.indexOf("rv:");
                return !0
            }
            var s = t.indexOf("Edge/");
            return s > 0
        }
        static isIOS() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }
        static isAndroid() {
            return /(android)/i.test(navigator.userAgent)
        }
        static isTouchDevice() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0
        }
        static appendChild(t, n) {
            if (this.isElement(n)) n.appendChild(t);
            else if (n && n.el && n.el.nativeElement) n.el.nativeElement.appendChild(t);
            else throw "Cannot append " + n + " to " + t
        }
        static removeChild(t, n) {
            if (this.isElement(n)) n.removeChild(t);
            else if (n.el && n.el.nativeElement) n.el.nativeElement.removeChild(t);
            else throw "Cannot remove " + t + " from " + n
        }
        static removeElement(t) {
            "remove" in Element.prototype ? t.remove() : t.parentNode.removeChild(t)
        }
        static isElement(t) {
            return typeof HTMLElement == "object" ? t instanceof HTMLElement : t && typeof t == "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string"
        }
        static calculateScrollbarWidth(t) {
            if (t) {
                let n = getComputedStyle(t);
                return t.offsetWidth - t.clientWidth - parseFloat(n.borderLeftWidth) - parseFloat(n.borderRightWidth)
            } else {
                if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
                let n = document.createElement("div");
                n.className = "p-scrollbar-measure", document.body.appendChild(n);
                let r = n.offsetWidth - n.clientWidth;
                return document.body.removeChild(n), this.calculatedScrollbarWidth = r, r
            }
        }
        static calculateScrollbarHeight() {
            if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
            let t = document.createElement("div");
            t.className = "p-scrollbar-measure", document.body.appendChild(t);
            let n = t.offsetHeight - t.clientHeight;
            return document.body.removeChild(t), this.calculatedScrollbarWidth = n, n
        }
        static invokeElementMethod(t, n, r) {
            t[n].apply(t, r)
        }
        static clearSelection() {
            if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0 && window.getSelection().removeAllRanges();
            else if (document.selection && document.selection.empty) try {
                document.selection.empty()
            } catch {}
        }
        static getBrowser() {
            if (!this.browser) {
                let t = this.resolveUserAgent();
                this.browser = {}, t.browser && (this.browser[t.browser] = !0, this.browser.version = t.version), this.browser.chrome ? this.browser.webkit = !0 : this.browser.webkit && (this.browser.safari = !0)
            }
            return this.browser
        }
        static resolveUserAgent() {
            let t = navigator.userAgent.toLowerCase(),
                n = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: n[1] || "",
                version: n[2] || "0"
            }
        }
        static isInteger(t) {
            return Number.isInteger ? Number.isInteger(t) : typeof t == "number" && isFinite(t) && Math.floor(t) === t
        }
        static isHidden(t) {
            return !t || t.offsetParent === null
        }
        static isVisible(t) {
            return t && t.offsetParent != null
        }
        static isExist(t) {
            return t !== null && typeof t < "u" && t.nodeName && t.parentNode
        }
        static focus(t, n) {
            t && document.activeElement !== t && t.focus(n)
        }
        static getFocusableSelectorString(t = "") {
            return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`
        }
        static getFocusableElements(t, n = "") {
            let r = this.find(t, this.getFocusableSelectorString(n)),
                o = [];
            for (let s of r) {
                let a = getComputedStyle(s);
                this.isVisible(s) && a.display != "none" && a.visibility != "hidden" && o.push(s)
            }
            return o
        }
        static getFocusableElement(t, n = "") {
            let r = this.findSingle(t, this.getFocusableSelectorString(n));
            if (r) {
                let o = getComputedStyle(r);
                if (this.isVisible(r) && o.display != "none" && o.visibility != "hidden") return r
            }
            return null
        }
        static getFirstFocusableElement(t, n = "") {
            let r = this.getFocusableElements(t, n);
            return r.length > 0 ? r[0] : null
        }
        static getLastFocusableElement(t, n) {
            let r = this.getFocusableElements(t, n);
            return r.length > 0 ? r[r.length - 1] : null
        }
        static getNextFocusableElement(t, n = !1) {
            let r = i.getFocusableElements(t),
                o = 0;
            if (r && r.length > 0) {
                let s = r.indexOf(r[0].ownerDocument.activeElement);
                n ? s == -1 || s === 0 ? o = r.length - 1 : o = s - 1 : s != -1 && s !== r.length - 1 && (o = s + 1)
            }
            return r[o]
        }
        static generateZIndex() {
            return this.zindex = this.zindex || 999, ++this.zindex
        }
        static getSelection() {
            return window.getSelection ? window.getSelection().toString() : document.getSelection ? document.getSelection().toString() : document.selection ? document.selection.createRange().text : null
        }
        static getTargetElement(t, n) {
            if (!t) return null;
            switch (t) {
                case "document":
                    return document;
                case "window":
                    return window;
                case "@next":
                    return n ? .nextElementSibling;
                case "@prev":
                    return n ? .previousElementSibling;
                case "@parent":
                    return n ? .parentElement;
                case "@grandparent":
                    return n ? .parentElement.parentElement;
                default:
                    let r = typeof t;
                    if (r === "string") return document.querySelector(t);
                    if (r === "object" && t.hasOwnProperty("nativeElement")) return this.isExist(t.nativeElement) ? t.nativeElement : void 0;
                    let s = (a => !!(a && a.constructor && a.call && a.apply))(t) ? t() : t;
                    return s && s.nodeType === 9 || this.isExist(s) ? s : null
            }
        }
        static isClient() {
            return !!(typeof window < "u" && window.document && window.document.createElement)
        }
        static getAttribute(t, n) {
            if (t) {
                let r = t.getAttribute(n);
                return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r
            }
        }
        static calculateBodyScrollbarWidth() {
            return window.innerWidth - document.documentElement.offsetWidth
        }
        static blockBodyScroll(t = "p-overflow-hidden") {
            document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, t)
        }
        static unblockBodyScroll(t = "p-overflow-hidden") {
            document.body.style.removeProperty("--scrollbar-width"), this.removeClass(document.body, t)
        }
        static createElement(t, n = {}, ...r) {
            if (t) {
                let o = document.createElement(t);
                return this.setAttributes(o, n), o.append(...r), o
            }
        }
        static setAttribute(t, n = "", r) {
            this.isElement(t) && r !== null && r !== void 0 && t.setAttribute(n, r)
        }
        static setAttributes(t, n = {}) {
            if (this.isElement(t)) {
                let r = (o, s) => {
                    let a = t ? .$attrs ? .[o] ? [t ? .$attrs ? .[o]] : [];
                    return [s].flat().reduce((c, l) => {
                        if (l != null) {
                            let d = typeof l;
                            if (d === "string" || d === "number") c.push(l);
                            else if (d === "object") {
                                let f = Array.isArray(l) ? r(o, l) : Object.entries(l).map(([m, g]) => o === "style" && (g || g === 0) ? `${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}` : g ? m : void 0);
                                c = f.length ? c.concat(f.filter(m => !!m)) : c
                            }
                        }
                        return c
                    }, a)
                };
                Object.entries(n).forEach(([o, s]) => {
                    if (s != null) {
                        let a = o.match(/^on(.+)/);
                        a ? t.addEventListener(a[1].toLowerCase(), s) : o === "pBind" ? this.setAttributes(t, s) : (s = o === "class" ? [...new Set(r("class", s))].join(" ").trim() : o === "style" ? r("style", s).join(";").trim() : s, (t.$attrs = t.$attrs || {}) && (t.$attrs[o] = s), t.setAttribute(o, s))
                    }
                })
            }
        }
        static isFocusableElement(t, n = "") {
            return this.isElement(t) ? t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`) : !1
        }
    }
    return i
})();
var Ld = (() => {
        class i {
            pFocusTrapDisabled = !1;
            platformId = T(V);
            host = T(De);
            document = T(le);
            firstHiddenFocusableElement;
            lastHiddenFocusableElement;
            ngOnInit() {
                ie(this.platformId) && !this.pFocusTrapDisabled && !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements()
            }
            ngOnChanges(t) {
                t.pFocusTrapDisabled && ie(this.platformId) && (t.pFocusTrapDisabled.currentValue ? this.removeHiddenFocusableElements() : this.createHiddenFocusableElements())
            }
            removeHiddenFocusableElements() {
                this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode && this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement), this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode && this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)
            }
            getComputedSelector(t) {
                return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${t??""}`
            }
            createHiddenFocusableElements() {
                let t = "0",
                    n = r => A.createElement("span", {
                        class: "p-hidden-accessible p-hidden-focusable",
                        tabindex: t,
                        role: "presentation",
                        "data-p-hidden-accessible": !0,
                        "data-p-hidden-focusable": !0,
                        onFocus: r ? .bind(this)
                    });
                this.firstHiddenFocusableElement = n(this.onFirstHiddenElementFocus), this.lastHiddenFocusableElement = n(this.onLastHiddenElementFocus), this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement"), this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement"), this.host.nativeElement.prepend(this.firstHiddenFocusableElement), this.host.nativeElement.append(this.lastHiddenFocusableElement)
            }
            onFirstHiddenElementFocus(t) {
                let {
                    currentTarget: n,
                    relatedTarget: r
                } = t, o = r === this.lastHiddenFocusableElement || !this.host.nativeElement ? .contains(r) ? A.getFirstFocusableElement(n.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
                A.focus(o)
            }
            onLastHiddenElementFocus(t) {
                let {
                    currentTarget: n,
                    relatedTarget: r
                } = t, o = r === this.firstHiddenFocusableElement || !this.host.nativeElement ? .contains(r) ? A.getLastFocusableElement(n.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
                A.focus(o)
            }
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275dir = Be({
                type: i,
                selectors: [
                    ["", "pFocusTrap", ""]
                ],
                hostAttrs: [1, "p-element"],
                inputs: {
                    pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", K]
                },
                features: [qe, sn]
            })
        }
        return i
    })(),
    Nd = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275mod = ke({
                type: i
            });
            static\ u0275inj = Te({
                imports: [te]
            })
        }
        return i
    })();
var Cg = ["*"],
    jt = (() => {
        class i {
            label;
            spin = !1;
            styleClass;
            role;
            ariaLabel;
            ariaHidden;
            ngOnInit() {
                this.getAttributes()
            }
            getAttributes() {
                let t = nn.isEmpty(this.label);
                this.role = t ? void 0 : "img", this.ariaLabel = t ? void 0 : this.label, this.ariaHidden = t
            }
            getClassNames() {
                return `p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`
            }
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275cmp = D({
                type: i,
                selectors: [
                    ["ng-component"]
                ],
                hostAttrs: [1, "p-element", "p-icon-wrapper"],
                inputs: {
                    label: "label",
                    spin: [2, "spin", "spin", K],
                    styleClass: "styleClass"
                },
                standalone: !0,
                features: [qe, L],
                ngContentSelectors: Cg,
                decls: 1,
                vars: 0,
                template: function(n, r) {
                    n & 1 && (bt(), st(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return i
    })();
var Ns = (() => {
    class i extends jt {
        static\ u0275fac = (() => {
            let t;
            return function(r) {
                return (t || (t = rt(i)))(r || i)
            }
        })();
        static\ u0275cmp = D({
            type: i,
            selectors: [
                ["TimesIcon"]
            ],
            standalone: !0,
            features: [Et, L],
            decls: 2,
            vars: 5,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]
            ],
            template: function(n, r) {
                n & 1 && (St(), p(0, "svg", 0), O(1, "path", 1), u()), n & 2 && (Le(r.getClassNames()), fe("aria-label", r.ariaLabel)("aria-hidden", r.ariaHidden)("role", r.role))
            },
            encapsulation: 2
        })
    }
    return i
})();
var js = (() => {
    class i extends jt {
        pathId;
        ngOnInit() {
            this.pathId = "url(#" + Ot() + ")"
        }
        static\ u0275fac = (() => {
            let t;
            return function(r) {
                return (t || (t = rt(i)))(r || i)
            }
        })();
        static\ u0275cmp = D({
            type: i,
            selectors: [
                ["WindowMaximizeIcon"]
            ],
            standalone: !0,
            features: [Et, L],
            decls: 6,
            vars: 7,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z", "fill", "currentColor"],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"]
            ],
            template: function(n, r) {
                n & 1 && (St(), p(0, "svg", 0)(1, "g"), O(2, "path", 1), u(), p(3, "defs")(4, "clipPath", 2), O(5, "rect", 3), u()()()), n & 2 && (Le(r.getClassNames()), fe("aria-label", r.ariaLabel)("aria-hidden", r.ariaHidden)("role", r.role), I(), fe("clip-path", r.pathId), I(3), S("id", r.pathId))
            },
            encapsulation: 2
        })
    }
    return i
})();
var Fs = (() => {
    class i extends jt {
        pathId;
        ngOnInit() {
            this.pathId = "url(#" + Ot() + ")"
        }
        static\ u0275fac = (() => {
            let t;
            return function(r) {
                return (t || (t = rt(i)))(r || i)
            }
        })();
        static\ u0275cmp = D({
            type: i,
            selectors: [
                ["WindowMinimizeIcon"]
            ],
            standalone: !0,
            features: [Et, L],
            decls: 6,
            vars: 7,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z", "fill", "currentColor"],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"]
            ],
            template: function(n, r) {
                n & 1 && (St(), p(0, "svg", 0)(1, "g"), O(2, "path", 1), u(), p(3, "defs")(4, "clipPath", 2), O(5, "rect", 3), u()()()), n & 2 && (Le(r.getClassNames()), fe("aria-label", r.ariaLabel)("aria-hidden", r.ariaHidden)("role", r.role), I(), fe("clip-path", r.pathId), I(3), S("id", r.pathId))
            },
            encapsulation: 2
        })
    }
    return i
})();
var jr = (() => {
        class i {
            document;
            platformId;
            renderer;
            el;
            zone;
            config;
            constructor(t, n, r, o, s, a) {
                this.document = t, this.platformId = n, this.renderer = r, this.el = o, this.zone = s, this.config = a
            }
            animationListener;
            mouseDownListener;
            timeout;
            ngAfterViewInit() {
                ie(this.platformId) && this.config && this.config.ripple && this.zone.runOutsideAngular(() => {
                    this.create(), this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this))
                })
            }
            onMouseDown(t) {
                let n = this.getInk();
                if (!n || this.document.defaultView ? .getComputedStyle(n, null).display === "none") return;
                if (A.removeClass(n, "p-ink-active"), !A.getHeight(n) && !A.getWidth(n)) {
                    let a = Math.max(A.getOuterWidth(this.el.nativeElement), A.getOuterHeight(this.el.nativeElement));
                    n.style.height = a + "px", n.style.width = a + "px"
                }
                let r = A.getOffset(this.el.nativeElement),
                    o = t.pageX - r.left + this.document.body.scrollTop - A.getWidth(n) / 2,
                    s = t.pageY - r.top + this.document.body.scrollLeft - A.getHeight(n) / 2;
                this.renderer.setStyle(n, "top", s + "px"), this.renderer.setStyle(n, "left", o + "px"), A.addClass(n, "p-ink-active"), this.timeout = setTimeout(() => {
                    let a = this.getInk();
                    a && A.removeClass(a, "p-ink-active")
                }, 401)
            }
            getInk() {
                let t = this.el.nativeElement.children;
                for (let n = 0; n < t.length; n++)
                    if (typeof t[n].className == "string" && t[n].className.indexOf("p-ink") !== -1) return t[n];
                return null
            }
            resetInk() {
                let t = this.getInk();
                t && A.removeClass(t, "p-ink-active")
            }
            onAnimationEnd(t) {
                this.timeout && clearTimeout(this.timeout), A.removeClass(t.currentTarget, "p-ink-active")
            }
            create() {
                let t = this.renderer.createElement("span");
                this.renderer.addClass(t, "p-ink"), this.renderer.appendChild(this.el.nativeElement, t), this.renderer.setAttribute(t, "aria-hidden", "true"), this.renderer.setAttribute(t, "role", "presentation"), this.animationListener || (this.animationListener = this.renderer.listen(t, "animationend", this.onAnimationEnd.bind(this)))
            }
            remove() {
                let t = this.getInk();
                t && (this.mouseDownListener && this.mouseDownListener(), this.animationListener && this.animationListener(), this.mouseDownListener = null, this.animationListener = null, A.removeElement(t))
            }
            ngOnDestroy() {
                this.config && this.config.ripple && this.remove()
            }
            static\ u0275fac = function(n) {
                return new(n || i)(b(le), b(V), b(ne), b(De), b(Pe), b(Ar, 8))
            };
            static\ u0275dir = Be({
                type: i,
                selectors: [
                    ["", "pRipple", ""]
                ],
                hostAttrs: [1, "p-ripple", "p-element"],
                standalone: !0
            })
        }
        return i
    })(),
    jd = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275mod = ke({
                type: i
            });
            static\ u0275inj = Te({})
        }
        return i
    })();
var Fd = (() => {
    class i {
        autofocus = !1;
        focused = !1;
        platformId = T(V);
        document = T(le);
        host = T(De);
        ngAfterContentChecked() {
            this.autofocus === !1 ? this.host.nativeElement.removeAttribute("autofocus") : this.host.nativeElement.setAttribute("autofocus", !0), this.focused || this.autoFocus()
        }
        ngAfterViewChecked() {
            this.focused || this.autoFocus()
        }
        autoFocus() {
            ie(this.platformId) && this.autofocus && setTimeout(() => {
                let t = A.getFocusableElements(this.host ? .nativeElement);
                t.length === 0 && this.host.nativeElement.focus(), t.length > 0 && t[0].focus(), this.focused = !0
            })
        }
        static\ u0275fac = function(n) {
            return new(n || i)
        };
        static\ u0275dir = Be({
            type: i,
            selectors: [
                ["", "pAutoFocus", ""]
            ],
            hostAttrs: [1, "p-element"],
            inputs: {
                autofocus: [2, "autofocus", "autofocus", K]
            },
            standalone: !0,
            features: [qe]
        })
    }
    return i
})();
var zd = (() => {
    class i extends jt {
        pathId;
        ngOnInit() {
            this.pathId = "url(#" + Ot() + ")"
        }
        static\ u0275fac = (() => {
            let t;
            return function(r) {
                return (t || (t = rt(i)))(r || i)
            }
        })();
        static\ u0275cmp = D({
            type: i,
            selectors: [
                ["SpinnerIcon"]
            ],
            standalone: !0,
            features: [Et, L],
            decls: 6,
            vars: 7,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"]
            ],
            template: function(n, r) {
                n & 1 && (St(), p(0, "svg", 0)(1, "g"), O(2, "path", 1), u(), p(3, "defs")(4, "clipPath", 2), O(5, "rect", 3), u()()()), n & 2 && (Le(r.getClassNames()), fe("aria-label", r.ariaLabel)("aria-hidden", r.ariaHidden)("role", r.role), I(), fe("clip-path", r.pathId), I(3), S("id", r.pathId))
            },
            encapsulation: 2
        })
    }
    return i
})();
var wg = ["*"],
    Ud = i => ({
        class: i
    });

function Og(i, e) {
    i & 1 && Ht(0)
}

function Mg(i, e) {
    if (i & 1 && O(0, "span", 8), i & 2) {
        let t = W(3);
        S("ngClass", t.iconClass()), fe("aria-hidden", !0)("data-pc-section", "loadingicon")
    }
}

function xg(i, e) {
    if (i & 1 && O(0, "SpinnerIcon", 9), i & 2) {
        let t = W(3);
        S("styleClass", t.spinnerIconClass())("spin", !0), fe("aria-hidden", !0)("data-pc-section", "loadingicon")
    }
}

function Pg(i, e) {
    if (i & 1 && (Re(0), q(1, Mg, 1, 3, "span", 6)(2, xg, 1, 4, "SpinnerIcon", 7), Ae()), i & 2) {
        let t = W(2);
        I(), S("ngIf", t.loadingIcon), I(), S("ngIf", !t.loadingIcon)
    }
}

function Sg(i, e) {}

function Eg(i, e) {
    if (i & 1 && q(0, Sg, 0, 0, "ng-template", 10), i & 2) {
        let t = W(2);
        S("ngIf", t.loadingIconTemplate)
    }
}

function Ig(i, e) {
    if (i & 1 && (Re(0), q(1, Pg, 3, 2, "ng-container", 2)(2, Eg, 1, 1, null, 5), Ae()), i & 2) {
        let t = W();
        I(), S("ngIf", !t.loadingIconTemplate), I(), S("ngTemplateOutlet", t.loadingIconTemplate)("ngTemplateOutletContext", Gt(3, Ud, t.iconClass()))
    }
}

function Tg(i, e) {
    if (i & 1 && O(0, "span", 8), i & 2) {
        let t = W(2);
        S("ngClass", t.iconClass()), fe("data-pc-section", "icon")
    }
}

function kg(i, e) {}

function Rg(i, e) {
    if (i & 1 && q(0, kg, 0, 0, "ng-template", 10), i & 2) {
        let t = W(2);
        S("ngIf", !t.icon && t.iconTemplate)
    }
}

function Ag(i, e) {
    if (i & 1 && (Re(0), q(1, Tg, 1, 2, "span", 6)(2, Rg, 1, 1, null, 5), Ae()), i & 2) {
        let t = W();
        I(), S("ngIf", t.icon && !t.iconTemplate), I(), S("ngTemplateOutlet", t.iconTemplate)("ngTemplateOutletContext", Gt(3, Ud, t.iconClass()))
    }
}

function Dg(i, e) {
    if (i & 1 && (p(0, "span", 11), h(1), u()), i & 2) {
        let t = W();
        fe("aria-hidden", t.icon && !t.label)("data-pc-section", "label"), I(), Je(t.label)
    }
}

function Lg(i, e) {
    if (i & 1 && (p(0, "span", 8), h(1), u()), i & 2) {
        let t = W();
        Le(t.badgeClass), S("ngClass", t.badgeStyleClass()), fe("data-pc-section", "badge"), I(), Je(t.badge)
    }
}
var Ft = {
        button: "p-button",
        component: "p-component",
        iconOnly: "p-button-icon-only",
        disabled: "p-disabled",
        loading: "p-button-loading",
        labelOnly: "p-button-loading-label-only"
    },
    Bd = (() => {
        class i {
            el;
            document;
            iconPos = "left";
            loadingIcon;
            get label() {
                return this._label
            }
            set label(t) {
                this._label = t, this.initialized && (this.updateLabel(), this.updateIcon(), this.setStyleClass())
            }
            get icon() {
                return this._icon
            }
            set icon(t) {
                this._icon = t, this.initialized && (this.updateIcon(), this.setStyleClass())
            }
            get loading() {
                return this._loading
            }
            set loading(t) {
                this._loading = t, this.initialized && (this.updateIcon(), this.setStyleClass())
            }
            severity;
            raised = !1;
            rounded = !1;
            text = !1;
            outlined = !1;
            size = null;
            plain = !1;
            _label;
            _icon;
            _loading = !1;
            initialized;
            get htmlElement() {
                return this.el.nativeElement
            }
            _internalClasses = Object.values(Ft);
            constructor(t, n) {
                this.el = t, this.document = n
            }
            ngAfterViewInit() {
                A.addMultipleClasses(this.htmlElement, this.getStyleClass().join(" ")), this.createIcon(), this.createLabel(), this.initialized = !0
            }
            getStyleClass() {
                let t = [Ft.button, Ft.component];
                return this.icon && !this.label && nn.isEmpty(this.htmlElement.textContent) && t.push(Ft.iconOnly), this.loading && (t.push(Ft.disabled, Ft.loading), !this.icon && this.label && t.push(Ft.labelOnly), this.icon && !this.label && !nn.isEmpty(this.htmlElement.textContent) && t.push(Ft.iconOnly)), this.text && t.push("p-button-text"), this.severity && t.push(`p-button-${this.severity}`), this.plain && t.push("p-button-plain"), this.raised && t.push("p-button-raised"), this.size && t.push(`p-button-${this.size}`), this.outlined && t.push("p-button-outlined"), this.rounded && t.push("p-button-rounded"), this.size === "small" && t.push("p-button-sm"), this.size === "large" && t.push("p-button-lg"), t
            }
            setStyleClass() {
                let t = this.getStyleClass();
                this.htmlElement.classList.remove(...this._internalClasses), this.htmlElement.classList.add(...t)
            }
            createLabel() {
                if (!A.findSingle(this.htmlElement, ".p-button-label") && this.label) {
                    let n = this.document.createElement("span");
                    this.icon && !this.label && n.setAttribute("aria-hidden", "true"), n.className = "p-button-label", n.appendChild(this.document.createTextNode(this.label)), this.htmlElement.appendChild(n)
                }
            }
            createIcon() {
                if (!A.findSingle(this.htmlElement, ".p-button-icon") && (this.icon || this.loading)) {
                    let n = this.document.createElement("span");
                    n.className = "p-button-icon", n.setAttribute("aria-hidden", "true");
                    let r = this.label ? "p-button-icon-" + this.iconPos : null;
                    r && A.addClass(n, r);
                    let o = this.getIconClass();
                    o && A.addMultipleClasses(n, o), this.htmlElement.insertBefore(n, this.htmlElement.firstChild)
                }
            }
            updateLabel() {
                let t = A.findSingle(this.htmlElement, ".p-button-label");
                if (!this.label) {
                    t && this.htmlElement.removeChild(t);
                    return
                }
                t ? t.textContent = this.label : this.createLabel()
            }
            updateIcon() {
                let t = A.findSingle(this.htmlElement, ".p-button-icon"),
                    n = A.findSingle(this.htmlElement, ".p-button-label");
                t ? this.iconPos ? t.className = "p-button-icon " + (n ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass() : t.className = "p-button-icon " + this.getIconClass() : this.createIcon()
            }
            getIconClass() {
                return this.loading ? "p-button-loading-icon pi-spin " + (this.loadingIcon ? ? "pi pi-spinner") : this.icon || "p-hidden"
            }
            ngOnDestroy() {
                this.initialized = !1
            }
            static\ u0275fac = function(n) {
                return new(n || i)(b(De), b(le))
            };
            static\ u0275dir = Be({
                type: i,
                selectors: [
                    ["", "pButton", ""]
                ],
                hostAttrs: [1, "p-element"],
                inputs: {
                    iconPos: "iconPos",
                    loadingIcon: "loadingIcon",
                    label: "label",
                    icon: "icon",
                    loading: "loading",
                    severity: "severity",
                    raised: [2, "raised", "raised", K],
                    rounded: [2, "rounded", "rounded", K],
                    text: [2, "text", "text", K],
                    outlined: [2, "outlined", "outlined", K],
                    size: "size",
                    plain: [2, "plain", "plain", K]
                },
                standalone: !0,
                features: [qe]
            })
        }
        return i
    })(),
    Ng = (() => {
        class i {
            el;
            type = "button";
            iconPos = "left";
            icon;
            badge;
            label;
            disabled;
            loading = !1;
            loadingIcon;
            raised = !1;
            rounded = !1;
            text = !1;
            plain = !1;
            severity;
            outlined = !1;
            link = !1;
            tabindex;
            size;
            style;
            styleClass;
            badgeClass;
            ariaLabel;
            autofocus;
            onClick = new Me;
            onFocus = new Me;
            onBlur = new Me;
            contentTemplate;
            loadingIconTemplate;
            iconTemplate;
            templates;
            constructor(t) {
                this.el = t
            }
            spinnerIconClass() {
                return Object.entries(this.iconClass()).filter(([, t]) => !!t).reduce((t, [n]) => t + ` ${n}`, "p-button-loading-icon")
            }
            iconClass() {
                let t = {
                    "p-button-icon": !0,
                    "p-button-icon-left": this.iconPos === "left" && this.label,
                    "p-button-icon-right": this.iconPos === "right" && this.label,
                    "p-button-icon-top": this.iconPos === "top" && this.label,
                    "p-button-icon-bottom": this.iconPos === "bottom" && this.label
                };
                return this.loading ? t[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`] = !0 : this.icon && (t[this.icon] = !0), t
            }
            get buttonClass() {
                return {
                    "p-button p-component": !0,
                    "p-button-icon-only": (this.icon || this.iconTemplate || this.loadingIcon || this.loadingIconTemplate) && !this.label,
                    "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
                    "p-button-loading": this.loading,
                    "p-button-loading-label-only": this.loading && !this.icon && this.label && !this.loadingIcon && this.iconPos === "left",
                    "p-button-link": this.link,
                    [`p-button-${this.severity}`]: this.severity,
                    "p-button-raised": this.raised,
                    "p-button-rounded": this.rounded,
                    "p-button-text": this.text,
                    "p-button-outlined": this.outlined,
                    "p-button-sm": this.size === "small",
                    "p-button-lg": this.size === "large",
                    "p-button-plain": this.plain,
                    [`${this.styleClass}`]: this.styleClass
                }
            }
            ngAfterContentInit() {
                this.templates ? .forEach(t => {
                    switch (t.getType()) {
                        case "content":
                            this.contentTemplate = t.template;
                            break;
                        case "icon":
                            this.iconTemplate = t.template;
                            break;
                        case "loadingicon":
                            this.loadingIconTemplate = t.template;
                            break;
                        default:
                            this.contentTemplate = t.template;
                            break
                    }
                })
            }
            badgeStyleClass() {
                return {
                    "p-badge p-component": !0,
                    "p-badge-no-gutter": this.badge && String(this.badge).length === 1
                }
            }
            focus() {
                this.el.nativeElement.firstChild.focus()
            }
            static\ u0275fac = function(n) {
                return new(n || i)(b(De))
            };
            static\ u0275cmp = D({
                type: i,
                selectors: [
                    ["p-button"]
                ],
                contentQueries: function(n, r, o) {
                    if (n & 1 && Vt(o, Lr, 4), n & 2) {
                        let s;
                        j(s = F()) && (r.templates = s)
                    }
                },
                hostAttrs: [1, "p-element"],
                hostVars: 2,
                hostBindings: function(n, r) {
                    n & 2 && It("p-disabled", r.disabled)
                },
                inputs: {
                    type: "type",
                    iconPos: "iconPos",
                    icon: "icon",
                    badge: "badge",
                    label: "label",
                    disabled: [2, "disabled", "disabled", K],
                    loading: [2, "loading", "loading", K],
                    loadingIcon: "loadingIcon",
                    raised: [2, "raised", "raised", K],
                    rounded: [2, "rounded", "rounded", K],
                    text: [2, "text", "text", K],
                    plain: [2, "plain", "plain", K],
                    severity: "severity",
                    outlined: [2, "outlined", "outlined", K],
                    link: [2, "link", "link", K],
                    tabindex: [2, "tabindex", "tabindex", un],
                    size: "size",
                    style: "style",
                    styleClass: "styleClass",
                    badgeClass: "badgeClass",
                    ariaLabel: "ariaLabel",
                    autofocus: [2, "autofocus", "autofocus", K]
                },
                outputs: {
                    onClick: "onClick",
                    onFocus: "onFocus",
                    onBlur: "onBlur"
                },
                standalone: !0,
                features: [qe, L],
                ngContentSelectors: wg,
                decls: 7,
                vars: 14,
                consts: [
                    ["pRipple", "", "pAutoFocus", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "ngClass", "autofocus"],
                    [4, "ngTemplateOutlet"],
                    [4, "ngIf"],
                    ["class", "p-button-label", 4, "ngIf"],
                    [3, "ngClass", "class", 4, "ngIf"],
                    [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                    [3, "ngClass", 4, "ngIf"],
                    [3, "styleClass", "spin", 4, "ngIf"],
                    [3, "ngClass"],
                    [3, "styleClass", "spin"],
                    [3, "ngIf"],
                    [1, "p-button-label"]
                ],
                template: function(n, r) {
                    n & 1 && (bt(), p(0, "button", 0), ce("click", function(s) {
                        return r.onClick.emit(s)
                    })("focus", function(s) {
                        return r.onFocus.emit(s)
                    })("blur", function(s) {
                        return r.onBlur.emit(s)
                    }), st(1), q(2, Og, 1, 0, "ng-container", 1)(3, Ig, 3, 5, "ng-container", 2)(4, Ag, 3, 5, "ng-container", 2)(5, Dg, 2, 3, "span", 3)(6, Lg, 2, 5, "span", 4), u()), n & 2 && (S("ngStyle", r.style)("disabled", r.disabled || r.loading)("ngClass", r.buttonClass)("autofocus", r.autofocus), fe("type", r.type)("aria-label", r.ariaLabel)("data-pc-name", "button")("data-pc-section", "root")("tabindex", r.tabindex), I(2), S("ngTemplateOutlet", r.contentTemplate), I(), S("ngIf", r.loading), I(), S("ngIf", !r.loading), I(), S("ngIf", !r.contentTemplate && r.label), I(), S("ngIf", !r.contentTemplate && r.badge))
                },
                dependencies: [ht, Hi, $i, Bi, jr, Fd, zd],
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return i
    })(),
    $d = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275mod = ke({
                type: i
            });
            static\ u0275inj = Te({
                imports: [Ng, Nr]
            })
        }
        return i
    })();
var Fg = ["titlebar"],
    zg = ["content"],
    Ug = ["footer"],
    Bg = ["*", [
            ["p-header"]
        ],
        [
            ["p-footer"]
        ]
    ],
    $g = ["*", "p-header", "p-footer"],
    Hg = (i, e, t, n, r, o, s, a, c, l) => ({
        "p-dialog-mask": !0,
        "p-component-overlay p-component-overlay-enter": i,
        "p-dialog-mask-scrollblocker": e,
        "p-dialog-left": t,
        "p-dialog-right": n,
        "p-dialog-top": r,
        "p-dialog-top-left": o,
        "p-dialog-top-right": s,
        "p-dialog-bottom": a,
        "p-dialog-bottom-left": c,
        "p-dialog-bottom-right": l
    }),
    Wg = (i, e, t, n) => ({
        "p-dialog p-component": !0,
        "p-dialog-rtl": i,
        "p-dialog-draggable": e,
        "p-dialog-resizable": t,
        "p-dialog-maximized": n
    }),
    Vg = (i, e) => ({
        transform: i,
        transition: e
    }),
    qg = i => ({
        value: "visible",
        params: i
    }),
    Gg = () => ({
        "p-dialog-header-icon p-dialog-header-maximize p-link": !0
    }),
    Qg = () => ({
        "p-dialog-header-icon p-dialog-header-close p-link": !0
    }),
    Yg = () => ({
        "min-width": 0
    });

function Kg(i, e) {
    i & 1 && Ht(0)
}

function Xg(i, e) {
    if (i & 1 && (Re(0), q(1, Kg, 1, 0, "ng-container", 10), Ae()), i & 2) {
        let t = W(3);
        I(), S("ngTemplateOutlet", t.headlessTemplate)
    }
}

function Jg(i, e) {
    if (i & 1) {
        let t = pt();
        p(0, "div", 15), ce("mousedown", function(r) {
            We(t);
            let o = W(4);
            return Ve(o.initResize(r))
        }), u()
    }
}

function Zg(i, e) {
    if (i & 1 && (p(0, "span", 21), h(1), u()), i & 2) {
        let t = W(5);
        S("id", t.ariaLabelledBy), I(), Je(t.header)
    }
}

function e0(i, e) {
    if (i & 1 && (p(0, "span", 21), st(1, 1), u()), i & 2) {
        let t = W(5);
        S("id", t.ariaLabelledBy)
    }
}

function t0(i, e) {
    i & 1 && Ht(0)
}

function n0(i, e) {
    if (i & 1 && O(0, "span", 25), i & 2) {
        let t = W(6);
        S("ngClass", t.maximized ? t.minimizeIcon : t.maximizeIcon)
    }
}

function i0(i, e) {
    i & 1 && O(0, "WindowMaximizeIcon", 27), i & 2 && S("styleClass", "p-dialog-header-maximize-icon")
}

function r0(i, e) {
    i & 1 && O(0, "WindowMinimizeIcon", 27), i & 2 && S("styleClass", "p-dialog-header-maximize-icon")
}

function o0(i, e) {
    if (i & 1 && (Re(0), q(1, i0, 1, 1, "WindowMaximizeIcon", 26)(2, r0, 1, 1, "WindowMinimizeIcon", 26), Ae()), i & 2) {
        let t = W(6);
        I(), S("ngIf", !t.maximized && !t.maximizeIconTemplate), I(), S("ngIf", t.maximized && !t.minimizeIconTemplate)
    }
}

function s0(i, e) {}

function a0(i, e) {
    i & 1 && q(0, s0, 0, 0, "ng-template")
}

function c0(i, e) {
    if (i & 1 && (Re(0), q(1, a0, 1, 0, null, 10), Ae()), i & 2) {
        let t = W(6);
        I(), S("ngTemplateOutlet", t.maximizeIconTemplate)
    }
}

function l0(i, e) {}

function d0(i, e) {
    i & 1 && q(0, l0, 0, 0, "ng-template")
}

function u0(i, e) {
    if (i & 1 && (Re(0), q(1, d0, 1, 0, null, 10), Ae()), i & 2) {
        let t = W(6);
        I(), S("ngTemplateOutlet", t.minimizeIconTemplate)
    }
}

function p0(i, e) {
    if (i & 1) {
        let t = pt();
        p(0, "button", 22), ce("click", function() {
            We(t);
            let r = W(5);
            return Ve(r.maximize())
        })("keydown.enter", function() {
            We(t);
            let r = W(5);
            return Ve(r.maximize())
        }), q(1, n0, 1, 1, "span", 23)(2, o0, 3, 2, "ng-container", 24)(3, c0, 2, 1, "ng-container", 24)(4, u0, 2, 1, "ng-container", 24), u()
    }
    if (i & 2) {
        let t = W(5);
        S("ngClass", qt(7, Gg)), fe("tabindex", t.maximizable ? "0" : "-1")("aria-label", t.maximizeLabel), I(), S("ngIf", t.maximizeIcon && !t.maximizeIconTemplate && !t.minimizeIconTemplate), I(), S("ngIf", !t.maximizeIcon), I(), S("ngIf", !t.maximized), I(), S("ngIf", t.maximized)
    }
}

function h0(i, e) {
    if (i & 1 && O(0, "span", 30), i & 2) {
        let t = W(7);
        S("ngClass", t.closeIcon)
    }
}

function f0(i, e) {
    i & 1 && O(0, "TimesIcon", 27), i & 2 && S("styleClass", "p-dialog-header-close-icon")
}

function m0(i, e) {
    if (i & 1 && (Re(0), q(1, h0, 1, 1, "span", 29)(2, f0, 1, 1, "TimesIcon", 26), Ae()), i & 2) {
        let t = W(6);
        I(), S("ngIf", t.closeIcon), I(), S("ngIf", !t.closeIcon)
    }
}

function g0(i, e) {}

function y0(i, e) {
    i & 1 && q(0, g0, 0, 0, "ng-template")
}

function b0(i, e) {
    if (i & 1 && (p(0, "span"), q(1, y0, 1, 0, null, 10), u()), i & 2) {
        let t = W(6);
        I(), S("ngTemplateOutlet", t.closeIconTemplate)
    }
}

function v0(i, e) {
    if (i & 1) {
        let t = pt();
        p(0, "button", 28), ce("click", function(r) {
            We(t);
            let o = W(5);
            return Ve(o.close(r))
        })("keydown.enter", function(r) {
            We(t);
            let o = W(5);
            return Ve(o.close(r))
        }), q(1, m0, 3, 2, "ng-container", 24)(2, b0, 2, 1, "span", 24), u()
    }
    if (i & 2) {
        let t = W(5);
        S("ngClass", qt(6, Qg))("ngStyle", qt(7, Yg)), fe("aria-label", t.closeAriaLabel)("tabindex", t.closeTabindex), I(), S("ngIf", !t.closeIconTemplate), I(), S("ngIf", t.closeIconTemplate)
    }
}

function C0(i, e) {
    if (i & 1) {
        let t = pt();
        p(0, "div", 16, 3), ce("mousedown", function(r) {
            We(t);
            let o = W(4);
            return Ve(o.initDrag(r))
        }), q(2, Zg, 2, 2, "span", 17)(3, e0, 2, 1, "span", 17)(4, t0, 1, 0, "ng-container", 10), p(5, "div", 18), q(6, p0, 5, 8, "button", 19)(7, v0, 3, 8, "button", 20), u()()
    }
    if (i & 2) {
        let t = W(4);
        I(2), S("ngIf", !t.headerFacet && !t.headerTemplate), I(), S("ngIf", t.headerFacet), I(), S("ngTemplateOutlet", t.headerTemplate), I(2), S("ngIf", t.maximizable), I(), S("ngIf", t.closable)
    }
}

function _0(i, e) {
    i & 1 && Ht(0)
}

function w0(i, e) {
    i & 1 && Ht(0)
}

function O0(i, e) {
    if (i & 1 && (p(0, "div", 31, 4), st(2, 2), q(3, w0, 1, 0, "ng-container", 10), u()), i & 2) {
        let t = W(4);
        I(3), S("ngTemplateOutlet", t.footerTemplate)
    }
}

function M0(i, e) {
    if (i & 1 && (q(0, Jg, 1, 0, "div", 11)(1, C0, 8, 5, "div", 12), p(2, "div", 13, 2), st(4), q(5, _0, 1, 0, "ng-container", 10), u(), q(6, O0, 4, 1, "div", 14)), i & 2) {
        let t = W(3);
        S("ngIf", t.resizable), I(), S("ngIf", t.showHeader), I(), Le(t.contentStyleClass), S("ngClass", "p-dialog-content")("ngStyle", t.contentStyle), I(3), S("ngTemplateOutlet", t.contentTemplate), I(), S("ngIf", t.footerFacet || t.footerTemplate)
    }
}

function x0(i, e) {
    if (i & 1) {
        let t = pt();
        p(0, "div", 8, 0), ce("@animation.start", function(r) {
            We(t);
            let o = W(2);
            return Ve(o.onAnimationStart(r))
        })("@animation.done", function(r) {
            We(t);
            let o = W(2);
            return Ve(o.onAnimationEnd(r))
        }), q(2, Xg, 2, 1, "ng-container", 9)(3, M0, 7, 8, "ng-template", null, 1, ji), u()
    }
    if (i & 2) {
        let t = Wn(4),
            n = W(2);
        Le(n.styleClass), S("ngClass", Sa(10, Wg, n.rtl, n.draggable, n.resizable, n.maximized))("ngStyle", n.style)("pFocusTrapDisabled", n.focusTrap === !1)("@animation", Gt(18, qg, Pa(15, Vg, n.transformOptions, n.transitionOptions))), fe("aria-labelledby", n.ariaLabelledBy)("aria-modal", !0), I(2), S("ngIf", n.headlessTemplate)("ngIfElse", t)
    }
}

function P0(i, e) {
    if (i & 1 && (p(0, "div", 6), q(1, x0, 5, 20, "div", 7), u()), i & 2) {
        let t = W();
        Le(t.maskStyleClass), S("ngStyle", t.maskStyle)("ngClass", Ea(5, Hg, [t.modal, t.modal || t.blockScroll, t.position === "left", t.position === "right", t.position === "top", t.position === "topleft" || t.position === "top-left", t.position === "topright" || t.position === "top-right", t.position === "bottom", t.position === "bottomleft" || t.position === "bottom-left", t.position === "bottomright" || t.position === "bottom-right"])), I(), S("ngIf", t.visible)
    }
}
var S0 = no([E({
        transform: "{{transform}}",
        opacity: 0
    }), N("{{transition}}")]),
    E0 = no([N("{{transition}}", E({
        transform: "{{transform}}",
        opacity: 0
    }))]),
    Hd = (() => {
        class i {
            document;
            platformId;
            el;
            renderer;
            zone;
            cd;
            config;
            header;
            draggable = !0;
            resizable = !0;
            get positionLeft() {
                return 0
            }
            set positionLeft(t) {
                console.log("positionLeft property is deprecated.")
            }
            get positionTop() {
                return 0
            }
            set positionTop(t) {
                console.log("positionTop property is deprecated.")
            }
            contentStyle;
            contentStyleClass;
            modal = !1;
            closeOnEscape = !0;
            dismissableMask = !1;
            rtl = !1;
            closable = !0;
            get responsive() {
                return !1
            }
            set responsive(t) {
                console.log("Responsive property is deprecated.")
            }
            appendTo;
            breakpoints;
            styleClass;
            maskStyleClass;
            maskStyle;
            showHeader = !0;
            get breakpoint() {
                return 649
            }
            set breakpoint(t) {
                console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")
            }
            blockScroll = !1;
            autoZIndex = !0;
            baseZIndex = 0;
            minX = 0;
            minY = 0;
            focusOnShow = !0;
            maximizable = !1;
            keepInViewport = !0;
            focusTrap = !0;
            transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
            closeIcon;
            closeAriaLabel;
            closeTabindex = "0";
            minimizeIcon;
            maximizeIcon;
            get visible() {
                return this._visible
            }
            set visible(t) {
                this._visible = t, this._visible && !this.maskVisible && (this.maskVisible = !0)
            }
            get style() {
                return this._style
            }
            set style(t) {
                t && (this._style = C({}, t), this.originalStyle = t)
            }
            get position() {
                return this._position
            }
            set position(t) {
                switch (this._position = t, t) {
                    case "topleft":
                    case "bottomleft":
                    case "left":
                        this.transformOptions = "translate3d(-100%, 0px, 0px)";
                        break;
                    case "topright":
                    case "bottomright":
                    case "right":
                        this.transformOptions = "translate3d(100%, 0px, 0px)";
                        break;
                    case "bottom":
                        this.transformOptions = "translate3d(0px, 100%, 0px)";
                        break;
                    case "top":
                        this.transformOptions = "translate3d(0px, -100%, 0px)";
                        break;
                    default:
                        this.transformOptions = "scale(0.7)";
                        break
                }
            }
            onShow = new Me;
            onHide = new Me;
            visibleChange = new Me;
            onResizeInit = new Me;
            onResizeEnd = new Me;
            onDragEnd = new Me;
            onMaximize = new Me;
            headerFacet;
            footerFacet;
            templates;
            headerViewChild;
            contentViewChild;
            footerViewChild;
            headerTemplate;
            contentTemplate;
            footerTemplate;
            maximizeIconTemplate;
            closeIconTemplate;
            minimizeIconTemplate;
            headlessTemplate;
            _visible = !1;
            maskVisible;
            container;
            wrapper;
            dragging;
            ariaLabelledBy = this.getAriaLabelledBy();
            documentDragListener;
            documentDragEndListener;
            resizing;
            documentResizeListener;
            documentResizeEndListener;
            documentEscapeListener;
            maskClickListener;
            lastPageX;
            lastPageY;
            preventVisibleChangePropagation;
            maximized;
            preMaximizeContentHeight;
            preMaximizeContainerWidth;
            preMaximizeContainerHeight;
            preMaximizePageX;
            preMaximizePageY;
            id = Ot();
            _style = {};
            _position = "center";
            originalStyle;
            transformOptions = "scale(0.7)";
            styleElement;
            window;
            get maximizeLabel() {
                return this.config.getTranslation(Dd.ARIA).maximizeLabel
            }
            constructor(t, n, r, o, s, a, c) {
                this.document = t, this.platformId = n, this.el = r, this.renderer = o, this.zone = s, this.cd = a, this.config = c, this.window = this.document.defaultView
            }
            ngAfterContentInit() {
                this.templates ? .forEach(t => {
                    switch (t.getType()) {
                        case "header":
                            this.headerTemplate = t.template;
                            break;
                        case "content":
                            this.contentTemplate = t.template;
                            break;
                        case "footer":
                            this.footerTemplate = t.template;
                            break;
                        case "closeicon":
                            this.closeIconTemplate = t.template;
                            break;
                        case "maximizeicon":
                            this.maximizeIconTemplate = t.template;
                            break;
                        case "minimizeicon":
                            this.minimizeIconTemplate = t.template;
                            break;
                        case "headless":
                            this.headlessTemplate = t.template;
                            break;
                        default:
                            this.contentTemplate = t.template;
                            break
                    }
                })
            }
            ngOnInit() {
                this.breakpoints && this.createStyle()
            }
            getAriaLabelledBy() {
                return this.header !== null ? Ot() + "_header" : null
            }
            parseDurationToMilliseconds(t) {
                let n = /([\d\.]+)(ms|s)\b/g,
                    r = 0,
                    o;
                for (;
                    (o = n.exec(t)) !== null;) {
                    let s = parseFloat(o[1]),
                        a = o[2];
                    a === "ms" ? r += s : a === "s" && (r += s * 1e3)
                }
                if (r !== 0) return r
            }
            focus(t = this.contentViewChild ? .nativeElement) {
                let n = this.parseDurationToMilliseconds(this.transitionOptions),
                    r = A.getFocusableElement(t, "[autofocus]");
                if (r) {
                    this.zone.runOutsideAngular(() => {
                        setTimeout(() => r.focus(), n || 5)
                    });
                    return
                }
                let o = A.getFocusableElement(t);
                o ? this.zone.runOutsideAngular(() => {
                    setTimeout(() => o.focus(), n || 5)
                }) : this.footerViewChild && t !== this.footerViewChild.nativeElement && this.focus(this.footerViewChild.nativeElement)
            }
            close(t) {
                this.visibleChange.emit(!1), t.preventDefault()
            }
            enableModality() {
                this.closable && this.dismissableMask && (this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", t => {
                    this.wrapper && this.wrapper.isSameNode(t.target) && this.close(t)
                })), this.modal && A.blockBodyScroll()
            }
            disableModality() {
                if (this.wrapper) {
                    this.dismissableMask && this.unbindMaskClickListener();
                    let t = document.querySelectorAll(".p-dialog-mask-scrollblocker");
                    this.modal && t && t.length == 1 && A.unblockBodyScroll(), this.cd.destroyed || this.cd.detectChanges()
                }
            }
            maximize() {
                this.maximized = !this.maximized, !this.modal && !this.blockScroll && (this.maximized ? A.blockBodyScroll() : A.unblockBodyScroll()), this.onMaximize.emit({
                    maximized: this.maximized
                })
            }
            unbindMaskClickListener() {
                this.maskClickListener && (this.maskClickListener(), this.maskClickListener = null)
            }
            moveOnTop() {
                this.autoZIndex && (Ds.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal), this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1))
            }
            createStyle() {
                if (ie(this.platformId) && !this.styleElement) {
                    this.styleElement = this.renderer.createElement("style"), this.styleElement.type = "text/css", A.setAttribute(this.styleElement, "nonce", this.config ? .csp() ? .nonce), this.renderer.appendChild(this.document.head, this.styleElement);
                    let t = "";
                    for (let n in this.breakpoints) t += `
                        @media screen and (max-width: ${n}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;
                    this.renderer.setProperty(this.styleElement, "innerHTML", t)
                }
            }
            initDrag(t) {
                A.hasClass(t.target, "p-dialog-header-icon") || A.hasClass(t.target, "p-dialog-header-close-icon") || A.hasClass(t.target.parentElement, "p-dialog-header-icon") || this.draggable && (this.dragging = !0, this.lastPageX = t.pageX, this.lastPageY = t.pageY, this.container.style.margin = "0", A.addClass(this.document.body, "p-unselectable-text"))
            }
            onDrag(t) {
                if (this.dragging) {
                    let n = A.getOuterWidth(this.container),
                        r = A.getOuterHeight(this.container),
                        o = t.pageX - this.lastPageX,
                        s = t.pageY - this.lastPageY,
                        a = this.container.getBoundingClientRect(),
                        c = getComputedStyle(this.container),
                        l = parseFloat(c.marginLeft),
                        d = parseFloat(c.marginTop),
                        f = a.left + o - l,
                        m = a.top + s - d,
                        g = A.getViewport();
                    this.container.style.position = "fixed", this.keepInViewport ? (f >= this.minX && f + n < g.width && (this._style.left = `${f}px`, this.lastPageX = t.pageX, this.container.style.left = `${f}px`), m >= this.minY && m + r < g.height && (this._style.top = `${m}px`, this.lastPageY = t.pageY, this.container.style.top = `${m}px`)) : (this.lastPageX = t.pageX, this.container.style.left = `${f}px`, this.lastPageY = t.pageY, this.container.style.top = `${m}px`)
                }
            }
            endDrag(t) {
                this.dragging && (this.dragging = !1, A.removeClass(this.document.body, "p-unselectable-text"), this.cd.detectChanges(), this.onDragEnd.emit(t))
            }
            resetPosition() {
                this.container.style.position = "", this.container.style.left = "", this.container.style.top = "", this.container.style.margin = ""
            }
            center() {
                this.resetPosition()
            }
            initResize(t) {
                this.resizable && (this.resizing = !0, this.lastPageX = t.pageX, this.lastPageY = t.pageY, A.addClass(this.document.body, "p-unselectable-text"), this.onResizeInit.emit(t))
            }
            onResize(t) {
                if (this.resizing) {
                    let n = t.pageX - this.lastPageX,
                        r = t.pageY - this.lastPageY,
                        o = A.getOuterWidth(this.container),
                        s = A.getOuterHeight(this.container),
                        a = A.getOuterHeight(this.contentViewChild ? .nativeElement),
                        c = o + n,
                        l = s + r,
                        d = this.container.style.minWidth,
                        f = this.container.style.minHeight,
                        m = this.container.getBoundingClientRect(),
                        g = A.getViewport();
                    (!parseInt(this.container.style.top) || !parseInt(this.container.style.left)) && (c += n, l += r), (!d || c > parseInt(d)) && m.left + c < g.width && (this._style.width = c + "px", this.container.style.width = this._style.width), (!f || l > parseInt(f)) && m.top + l < g.height && (this.contentViewChild.nativeElement.style.height = a + l - s + "px", this._style.height && (this._style.height = l + "px", this.container.style.height = this._style.height)), this.lastPageX = t.pageX, this.lastPageY = t.pageY
                }
            }
            resizeEnd(t) {
                this.resizing && (this.resizing = !1, A.removeClass(this.document.body, "p-unselectable-text"), this.onResizeEnd.emit(t))
            }
            bindGlobalListeners() {
                this.draggable && (this.bindDocumentDragListener(), this.bindDocumentDragEndListener()), this.resizable && this.bindDocumentResizeListeners(), this.closeOnEscape && this.closable && this.bindDocumentEscapeListener()
            }
            unbindGlobalListeners() {
                this.unbindDocumentDragListener(), this.unbindDocumentDragEndListener(), this.unbindDocumentResizeListeners(), this.unbindDocumentEscapeListener()
            }
            bindDocumentDragListener() {
                this.documentDragListener || this.zone.runOutsideAngular(() => {
                    this.documentDragListener = this.renderer.listen(this.window, "mousemove", this.onDrag.bind(this))
                })
            }
            unbindDocumentDragListener() {
                this.documentDragListener && (this.documentDragListener(), this.documentDragListener = null)
            }
            bindDocumentDragEndListener() {
                this.documentDragEndListener || this.zone.runOutsideAngular(() => {
                    this.documentDragEndListener = this.renderer.listen(this.window, "mouseup", this.endDrag.bind(this))
                })
            }
            unbindDocumentDragEndListener() {
                this.documentDragEndListener && (this.documentDragEndListener(), this.documentDragEndListener = null)
            }
            bindDocumentResizeListeners() {
                !this.documentResizeListener && !this.documentResizeEndListener && this.zone.runOutsideAngular(() => {
                    this.documentResizeListener = this.renderer.listen(this.window, "mousemove", this.onResize.bind(this)), this.documentResizeEndListener = this.renderer.listen(this.window, "mouseup", this.resizeEnd.bind(this))
                })
            }
            unbindDocumentResizeListeners() {
                this.documentResizeListener && this.documentResizeEndListener && (this.documentResizeListener(), this.documentResizeEndListener(), this.documentResizeListener = null, this.documentResizeEndListener = null)
            }
            bindDocumentEscapeListener() {
                let t = this.el ? this.el.nativeElement.ownerDocument : "document";
                this.documentEscapeListener = this.renderer.listen(t, "keydown", n => {
                    n.key == "Escape" && this.close(n)
                })
            }
            unbindDocumentEscapeListener() {
                this.documentEscapeListener && (this.documentEscapeListener(), this.documentEscapeListener = null)
            }
            appendContainer() {
                this.appendTo && (this.appendTo === "body" ? this.renderer.appendChild(this.document.body, this.wrapper) : A.appendChild(this.wrapper, this.appendTo))
            }
            restoreAppend() {
                this.container && this.appendTo && this.renderer.appendChild(this.el.nativeElement, this.wrapper)
            }
            onAnimationStart(t) {
                switch (t.toState) {
                    case "visible":
                        this.container = t.element, this.wrapper = this.container ? .parentElement, this.moveOnTop(), this.appendContainer(), this.bindGlobalListeners(), this.container ? .setAttribute(this.id, ""), this.modal && this.enableModality(), !this.modal && this.blockScroll && A.addClass(this.document.body, "p-overflow-hidden"), this.focusOnShow && this.focus();
                        break;
                    case "void":
                        this.wrapper && this.modal && A.addClass(this.wrapper, "p-component-overlay-leave");
                        break
                }
            }
            onAnimationEnd(t) {
                switch (t.toState) {
                    case "void":
                        this.onContainerDestroy(), this.onHide.emit({}), this.cd.markForCheck();
                        break;
                    case "visible":
                        this.onShow.emit({});
                        break
                }
            }
            onContainerDestroy() {
                this.unbindGlobalListeners(), this.dragging = !1, this.maskVisible = !1, this.maximized && (A.removeClass(this.document.body, "p-overflow-hidden"), this.document.body.style.removeProperty("--scrollbar-width"), this.maximized = !1), this.modal && this.disableModality(), this.blockScroll && A.removeClass(this.document.body, "p-overflow-hidden"), this.container && this.autoZIndex && Ds.clear(this.container), this.container = null, this.wrapper = null, this._style = this.originalStyle ? C({}, this.originalStyle) : {}
            }
            destroyStyle() {
                this.styleElement && (this.renderer.removeChild(this.document.head, this.styleElement), this.styleElement = null)
            }
            ngOnDestroy() {
                this.container && (this.restoreAppend(), this.onContainerDestroy()), this.destroyStyle()
            }
            static\ u0275fac = function(n) {
                return new(n || i)(b(le), b(V), b(De), b(ne), b(Pe), b(Qt), b(Ar))
            };
            static\ u0275cmp = D({
                type: i,
                selectors: [
                    ["p-dialog"]
                ],
                contentQueries: function(n, r, o) {
                    if (n & 1 && (Vt(o, Dr, 5), Vt(o, Ad, 5), Vt(o, Lr, 4)), n & 2) {
                        let s;
                        j(s = F()) && (r.headerFacet = s.first), j(s = F()) && (r.footerFacet = s.first), j(s = F()) && (r.templates = s)
                    }
                },
                viewQuery: function(n, r) {
                    if (n & 1 && (H(Fg, 5), H(zg, 5), H(Ug, 5)), n & 2) {
                        let o;
                        j(o = F()) && (r.headerViewChild = o.first), j(o = F()) && (r.contentViewChild = o.first), j(o = F()) && (r.footerViewChild = o.first)
                    }
                },
                hostAttrs: [1, "p-element"],
                inputs: {
                    header: "header",
                    draggable: [2, "draggable", "draggable", K],
                    resizable: [2, "resizable", "resizable", K],
                    positionLeft: "positionLeft",
                    positionTop: "positionTop",
                    contentStyle: "contentStyle",
                    contentStyleClass: "contentStyleClass",
                    modal: [2, "modal", "modal", K],
                    closeOnEscape: [2, "closeOnEscape", "closeOnEscape", K],
                    dismissableMask: [2, "dismissableMask", "dismissableMask", K],
                    rtl: [2, "rtl", "rtl", K],
                    closable: [2, "closable", "closable", K],
                    responsive: "responsive",
                    appendTo: "appendTo",
                    breakpoints: "breakpoints",
                    styleClass: "styleClass",
                    maskStyleClass: "maskStyleClass",
                    maskStyle: "maskStyle",
                    showHeader: [2, "showHeader", "showHeader", K],
                    breakpoint: "breakpoint",
                    blockScroll: [2, "blockScroll", "blockScroll", K],
                    autoZIndex: [2, "autoZIndex", "autoZIndex", K],
                    baseZIndex: [2, "baseZIndex", "baseZIndex", un],
                    minX: [2, "minX", "minX", un],
                    minY: [2, "minY", "minY", un],
                    focusOnShow: [2, "focusOnShow", "focusOnShow", K],
                    maximizable: [2, "maximizable", "maximizable", K],
                    keepInViewport: [2, "keepInViewport", "keepInViewport", K],
                    focusTrap: [2, "focusTrap", "focusTrap", K],
                    transitionOptions: "transitionOptions",
                    closeIcon: "closeIcon",
                    closeAriaLabel: "closeAriaLabel",
                    closeTabindex: "closeTabindex",
                    minimizeIcon: "minimizeIcon",
                    maximizeIcon: "maximizeIcon",
                    visible: "visible",
                    style: "style",
                    position: "position"
                },
                outputs: {
                    onShow: "onShow",
                    onHide: "onHide",
                    visibleChange: "visibleChange",
                    onResizeInit: "onResizeInit",
                    onResizeEnd: "onResizeEnd",
                    onDragEnd: "onDragEnd",
                    onMaximize: "onMaximize"
                },
                features: [qe],
                ngContentSelectors: $g,
                decls: 1,
                vars: 1,
                consts: [
                    ["container", ""],
                    ["notHeadless", ""],
                    ["content", ""],
                    ["titlebar", ""],
                    ["footer", ""],
                    [3, "class", "ngStyle", "ngClass", 4, "ngIf"],
                    [3, "ngStyle", "ngClass"],
                    ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "class", "pFocusTrapDisabled", 4, "ngIf"],
                    ["pFocusTrap", "", "role", "dialog", 3, "ngClass", "ngStyle", "pFocusTrapDisabled"],
                    [4, "ngIf", "ngIfElse"],
                    [4, "ngTemplateOutlet"],
                    ["class", "p-resizable-handle", 3, "mousedown", 4, "ngIf"],
                    ["class", "p-dialog-header", 3, "mousedown", 4, "ngIf"],
                    [3, "ngClass", "ngStyle"],
                    ["class", "p-dialog-footer", 4, "ngIf"],
                    [1, "p-resizable-handle", 3, "mousedown"],
                    [1, "p-dialog-header", 3, "mousedown"],
                    ["class", "p-dialog-title", 3, "id", 4, "ngIf"],
                    [1, "p-dialog-header-icons"],
                    ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"],
                    ["type", "button", "pRipple", "", "pButton", "", 3, "ngClass", "ngStyle", "click", "keydown.enter", 4, "ngIf"],
                    [1, "p-dialog-title", 3, "id"],
                    ["role", "button", "type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass"],
                    ["class", "p-dialog-header-maximize-icon", 3, "ngClass", 4, "ngIf"],
                    [4, "ngIf"],
                    [1, "p-dialog-header-maximize-icon", 3, "ngClass"],
                    [3, "styleClass", 4, "ngIf"],
                    [3, "styleClass"],
                    ["type", "button", "pRipple", "", "pButton", "", 3, "click", "keydown.enter", "ngClass", "ngStyle"],
                    ["class", "p-dialog-header-close-icon", 3, "ngClass", 4, "ngIf"],
                    [1, "p-dialog-header-close-icon", 3, "ngClass"],
                    [1, "p-dialog-footer"]
                ],
                template: function(n, r) {
                    n & 1 && (bt(Bg), q(0, P0, 2, 16, "div", 5)), n & 2 && S("ngIf", r.maskVisible)
                },
                dependencies: () => [Bi, ht, Hi, $i, Ld, Bd, jr, Ns, js, Fs],
                styles: [`@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{-webkit-transition:none;transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}
`],
                encapsulation: 2,
                data: {
                    animation: [X("animation", [G("void => visible", [io(S0)]), G("visible => void", [io(E0)])])]
                },
                changeDetection: 0
            })
        }
        return i
    })(),
    Wd = (() => {
        class i {
            static\ u0275fac = function(n) {
                return new(n || i)
            };
            static\ u0275mod = ke({
                type: i
            });
            static\ u0275inj = Te({
                imports: [te, Nd, $d, jd, Ns, js, Fs, Nr]
            })
        }
        return i
    })();
var T0 = ["title"],
    k0 = () => ({
        width: "50rem"
    }),
    R0 = () => ({
        "1199px": "75vw",
        "575px": "90vw"
    });

function A0(i, e) {
    i & 1 && O(0, "spartan-skeleton-preview")
}

function D0(i, e) {
    if (i & 1) {
        let t = pt();
        p(0, "p", 16), ce("click", function() {
            We(t);
            let r = W(2);
            return Ve(r.showDialog())
        }), O(1, "img", 4), Vn(2, "sanityImage"), p(3, "i", 17), h(4), u()()
    }
    if (i & 2) {
        let t = W(2);
        I(), S("src", Ni(2, 2, t.blog == null || t.blog.author == null || t.blog.author.image == null || t.blog.author.image.asset == null ? null : t.blog.author.image.asset._ref), ot), I(3), Je(t.blog == null ? null : t.blog.author.name)
    }
}

function L0(i, e) {
    if (i & 1 && (Re(0), O(1, "img", 11)(2, "img", 12), p(3, "div", 13, 1), q(5, D0, 5, 4, "p", 14), p(6, "h2"), h(7), u(), O(8, "p", 15), Vn(9, "portableText"), u(), Ae()), i & 2) {
        let t = W();
        I(), Wt("alt", t.blog == null ? null : t.blog.title), S("src", t.blog == null || t.blog.mobileImage == null || t.blog.mobileImage.asset == null ? null : t.blog.mobileImage.asset.url, ot), I(), Wt("alt", t.blog == null ? null : t.blog.title), S("src", t.blog == null || t.blog.desktopImage == null || t.blog.desktopImage.asset == null ? null : t.blog.desktopImage.asset.url, ot), I(3), S("ngIf", t.blog == null || t.blog.author == null ? null : t.blog.author.name), I(2), Je(t.blog == null ? null : t.blog.title), I(), S("innerHTML", Ni(9, 7, t.blog == null ? null : t.blog.body), Di)
    }
}
var Vd = (() => {
    let e = class e {
        constructor(n, r, o, s, a, c) {
            this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.route = a, this.sanitizer = c, this.isLoading = !0, this.visible = !1
        }
        ngOnInit() {
            let n = this.route.snapshot.paramMap.get("slug");
            this.sanityService.getPostBySlug(n).subscribe(r => {
                this.blog = r, this.sanitizeBlogText(), this.isLoading = !1
            })
        }
        sanitizeBlogText() {
            let n = this.blog ? .body || [],
                r = "";
            n.forEach(o => {
                o.children && o.children.forEach(s => {
                    let a = s.text,
                        c = /(https?:\/\/[^\s]+)/g;
                    a = a.replace(c, '<a style="color: #da9915" href="$&" target="_blank">$&</a>'), s.marks && s.marks.includes("strong") && (a = `<strong class="bold">${a}</strong>`), r += a
                })
            }), r = r.replace(/\n/g, "<br />"), this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(r)
        }
        ngAfterViewInit() {
            if (ie(this.platformId)) {
                let n = {
                    root: null,
                    rootMargin: "0px",
                    threshold: .1
                };
                new IntersectionObserver(o => {
                    o.forEach(s => {
                        let a = s.target;
                        s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement && this.runAnimation(this.title.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                    })
                }, n).observe(this.title.nativeElement)
            }
        }
        runAnimation(n, r) {
            this.animationBuilder.build([E({
                opacity: 0,
                transform: this.getTransform(r)
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translate(0, 0)"
            }))]).create(n).play()
        }
        getTransform(n) {
            switch (n) {
                case "fadeInSlideUp":
                    return "translateY(30px)";
                default:
                    return "none"
            }
        }
        showDialog() {
            this.visible = !0
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(V), b(ne), b(de), b(ue), b(mt), b(Yt))
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-blog"]
        ],
        viewQuery: function(r, o) {
            if (r & 1 && H(T0, 5), r & 2) {
                let s;
                j(s = F()) && (o.title = s.first)
            }
        },
        standalone: !0,
        features: [L],
        decls: 17,
        vars: 15,
        consts: [
            ["title", ""],
            ["card", ""],
            [3, "visibleChange", "modal", "visible", "breakpoints", "maximizable"],
            [1, "flex", "items-center"],
            ["alt", "", 1, "w-16", "h-16", "rounded-full", "mr-4", 3, "src"],
            [1, "text-xl", "font-semibold"],
            [1, "!text-lg", "text-gray-700"],
            [1, "hero"],
            [1, "second-sec"],
            [1, "section-desc"],
            [4, "ngIf"],
            [1, "mobile-img", 3, "src", "alt"],
            [1, "desktop-img", 3, "src", "alt"],
            [1, "card"],
            ["class", "flex items-center cursor-pointer text-start self-end mb-4", 3, "click", 4, "ngIf"],
            [3, "innerHTML"],
            [1, "flex", "items-center", "cursor-pointer", "text-start", "self-end", "mb-4", 3, "click"],
            [1, "whitespace-nowrap", "ml-4"]
        ],
        template: function(r, o) {
            if (r & 1) {
                let s = pt();
                p(0, "p-dialog", 2), xa("visibleChange", function(c) {
                    return We(s), Ma(o.visible, c) || (o.visible = c), Ve(c)
                }), p(1, "p-header")(2, "div", 3), O(3, "img", 4), Vn(4, "sanityImage"), p(5, "h4", 5), h(6), u()()(), p(7, "p", 6), h(8), u()(), p(9, "section", 7)(10, "h1", null, 0), h(12, "Blog & Announcements"), u()(), p(13, "section", 8)(14, "div", 9), q(15, A0, 1, 0, "spartan-skeleton-preview", 10)(16, L0, 10, 9, "ng-container", 10), u()()
            }
            r & 2 && (_a(qt(13, k0)), S("modal", !0), Oa("visible", o.visible), S("breakpoints", qt(14, R0))("maximizable", !0), I(3), S("src", Ni(4, 11, o.blog == null || o.blog.author == null || o.blog.author.image == null || o.blog.author.image.asset == null ? null : o.blog.author.image.asset._ref), ot), I(3), Je(o.blog == null || o.blog.author == null ? null : o.blog.author.name), I(2), vt(" ", o.blog == null || o.blog.author == null ? null : o.blog.author.bio[0].children[0].text, " "), I(7), S("ngIf", o.isLoading), I(), S("ngIf", !o.isLoading))
        },
        dependencies: [At, te, ht, Ir, Rr, Dn, Wd, Hd, Dr],
        styles: ["a[_ngcontent-%COMP%]{color:#da9915!important}.hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/token_hero_mobile.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%;white-space:nowrap}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/blog_hero.jpg) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;min-height:80.9rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;margin-top:auto;margin-bottom:3rem}.second-sec[_ngcontent-%COMP%]   .mobile-img[_ngcontent-%COMP%]{display:block;width:100%;z-index:900;border-radius:8px;transform:translateY(5%)}.second-sec[_ngcontent-%COMP%]   .desktop-img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;height:auto;padding:4rem 3rem 3rem;width:calc(100% - 2rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block ruby}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{word-wrap:break-word;-webkit-font-smoothing:antialiased}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start;align-self:flex-start}.second-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#da9915;text-decoration:none;transition:all .3s ease}.second-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#000;margin-top:1rem;max-width:30rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:85.7rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;width:auto}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.4rem;max-width:100%;padding:1rem 0rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:10rem}.second-sec[_ngcontent-%COMP%]   .desktop-img[_ngcontent-%COMP%]{display:block;width:calc(100% - 15rem);z-index:900;border-radius:20px;transform:translateY(10%)}.second-sec[_ngcontent-%COMP%]   .mobile-img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:15rem 3rem 3rem;height:auto;width:calc(100% - 20rem)}}"],
        data: {
            animation: [X("fadeInSlideUp", [G(":enter", [E({
                opacity: 0,
                transform: "translateY(60px)"
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translateY(0)"
            }))])]), X("fadeInSlideRight", [G(":enter", [E({
                opacity: 0,
                transform: "translateX(-30px)"
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translateX(0)"
            }))])]), X("fadeInSlideLeft", [G(":enter", [E({
                opacity: 0,
                transform: "translateX(30px)"
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translateX(0)"
            }))])])]
        }
    });
    let i = e;
    return i
})();
var N0 = ["title"],
    j0 = ["card"],
    qd = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngOnInit() {
                this.titleService.setTitle("Contact Us - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Get in touch with Indowealth Group for inquiries and support."
                }, {
                    name: "keywords",
                    content: "contact, support, inquiries, Indowealth Group"
                }])
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    r.observe(this.title.nativeElement), r.observe(this.card.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-contact"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(N0, 5), H(j0, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 62,
            vars: 0,
            consts: [
                ["title", ""],
                ["card", ""],
                [1, "hero"],
                [1, "second-sec"],
                [1, "mobile-text"],
                [1, "title"],
                [1, "desc"],
                [1, "card"],
                [1, "red-card"],
                [1, "text-group"],
                ["href", "mailto:admin@indowealth.group", "target", "_blank", "rel", "noopener noreferrer"],
                [1, "icon"],
                ["src", "/assets/mail.png", "alt", ""],
                [1, "social-icons"],
                ["src", "/assets/pointer.png", "alt", "", 1, "pointer"],
                ["href", "https://x.com/indowealthgroup?s=21", "target", "_blank", "rel", "noopener noreferrer"],
                ["src", "/assets/x.png", "alt", "", 1, "icon"],
                ["href", "https://t.me/IndoWealthOfficial", "target", "_blank", "rel", "noopener noreferrer"],
                ["src", "/assets/telegram.png", "alt", "", 1, "icon"],
                [1, "eclipses-mobile"],
                ["src", "/assets/ellipse_white_mobile.png", "alt", "", 1, "eclipse", "eclipse-small"],
                ["src", "/assets/ellipse_yellow_mobile.png", "alt", "", 1, "eclipse", "eclipse-big"],
                [1, "eclipses"],
                ["src", "/assets/ellipse_white.png", "alt", "", 1, "eclipse", "eclipse-small"],
                ["src", "/assets/ellipse_yellow.png", "alt", "", 1, "eclipse", "eclipse-big"],
                [1, "row", "g-5"],
                [1, "col-md-6"],
                ["for", "fname", 1, "form-label"],
                ["type", "text", "id", "fname", 1, "form-control"],
                ["for", "lname", 1, "form-label"],
                ["type", "text", "id", "lname", 1, "form-control"],
                ["for", "email", 1, "form-label"],
                ["type", "email", "id", "email", 1, "form-control"],
                ["for", "phone", 1, "form-label"],
                ["type", "tel", "id", "phone", 1, "form-control"],
                [1, "col-12", "message"],
                ["for", "message", 1, "form-label"],
                ["type", "text", "id", "message", "placeholder", "Write your message...", 1, "form-control"],
                [1, "col-12", "d-flex"],
                ["type", "submit", 1, "btn", "btn-primary", "ml-auto"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 2)(1, "h1", null, 0), h(3, "Contact Us"), u()(), p(4, "section", 3)(5, "div", 4)(6, "h2", 5), h(7, "Contact Us"), u(), p(8, "span", 6), h(9, "Any question or remarks? Just"), O(10, "br"), h(11, " write us a message!"), u()(), p(12, "div", 7, 1)(14, "div", 8)(15, "div", 9)(16, "h1", 5), h(17, "Contact "), O(18, "br"), h(19, "Information"), u(), p(20, "span", 6), h(21, "Say something to contact support!"), u(), p(22, "a", 10)(23, "span", 11), O(24, "img", 12), u()()(), p(25, "div", 13), O(26, "img", 14), p(27, "a", 15), O(28, "img", 16), u(), p(29, "a", 17), O(30, "img", 18), u()(), p(31, "div", 19), O(32, "img", 20)(33, "img", 21), u(), p(34, "div", 22), O(35, "img", 23)(36, "img", 24), u()(), p(37, "div")(38, "form", 25)(39, "div", 26)(40, "label", 27), h(41, "First Name"), u(), O(42, "input", 28), u(), p(43, "div", 26)(44, "label", 29), h(45, "Last Name"), u(), O(46, "input", 30), u(), p(47, "div", 26)(48, "label", 31), h(49, "Email"), u(), O(50, "input", 32), u(), p(51, "div", 26)(52, "label", 33), h(53, "Phone Number"), u(), O(54, "input", 34), u(), p(55, "div", 35)(56, "label", 36), h(57, "Message"), u(), O(58, "input", 37), u(), p(59, "div", 38)(60, "button", 39), h(61, " Send Message "), u()()()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/blog_hero.jpg) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:block;min-height:calc(50vh - 10rem);display:flex;align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:auto;color:#fff;font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem;gap:2rem}.second-sec[_ngcontent-%COMP%]   .mobile-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:1.2rem;gap:1rem;text-align:center;margin-top:1rem;align-items:center;justify-content:center}.second-sec[_ngcontent-%COMP%]   .mobile-text[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:source-sans-pro-bold!important;font-size:2.4rem;color:#000;text-align:center;align-self:center}.second-sec[_ngcontent-%COMP%]   .mobile-text[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-family:source-sans-pro!important;font-size:1.4rem;color:#717171}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;border-radius:6px;background-color:#fff;box-shadow:-5px 5px 15px 10px #0000001a;height:auto;padding:1rem;width:calc(100% - 3rem);column-gap:3rem;row-gap:3rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]{height:39.7rem;background:#d10600;border-radius:10px;padding:4rem;position:relative}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20%;gap:1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:block;width:5.4rem;height:2.5rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:4rem;font-family:source-sans-pro-semi-bold!important;color:#fff;font-weight:700;text-align:center;margin:0}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:1.1rem;color:#c9c9c9;font-family:source-sans-pro!important;text-align:center}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses-mobile[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;display:flex;flex-direction:row;width:29%;height:25%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses-mobile[_ngcontent-%COMP%]   .eclipse-small[_ngcontent-%COMP%]{position:absolute;width:60%;height:60%;transform:translate(-1rem,-1rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses-mobile[_ngcontent-%COMP%]   .eclipse-big[_ngcontent-%COMP%]{width:100%;height:100%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;margin-bottom:4rem;transform:translate(-50%);display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{position:absolute;width:2.4rem;height:2.4rem;right:0;transform:translateY(2.5rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:3rem;height:3rem;transition:all .3s ease;border-radius:50%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #fff,0 0 20px #fff,0 0 40px #fff,0 0 80px #fff,0 0 120px #fff}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:3rem 2rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.6rem;color:#000;font-family:source-sans-pro!important;margin-top:1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus{border:none;border-bottom:1px solid #000;font-family:source-sans-pro!important;color:#8d8d8d;font-size:1.6rem;outline:none!important}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{-webkit-box-shadow:none;box-shadow:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:#da9915;color:#fff;font-size:1.6rem;font-family:source-sans-pro-semi-bold!important;padding:1rem 2rem;border-radius:6px;cursor:pointer;margin-top:2rem;transition:.3s;align-self:center;width:100%;height:3.7rem;transition:all .3s ease;border:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{box-shadow:0 5px 15px #da9915;transform:translateY(-.5rem)}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start;align-self:flex-start}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#000;margin-top:1rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;padding:10rem 1rem}.second-sec[_ngcontent-%COMP%]   .mobile-text[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem;width:auto}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.4rem;width:auto;padding:1rem 0rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;background-color:#fff;grid-template-columns:1.5fr 2fr;padding:2rem;height:auto;width:calc(100% - 20rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]{height:64.7rem;background:#d10600;border-radius:10px;padding:4rem;position:relative}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses-mobile[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:start;margin-top:20%;gap:1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:block;width:5.4rem;height:2.5rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:7rem;font-family:source-sans-pro-semi-bold!important;color:#fff;font-weight:700;text-align:start;margin:0}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .text-group[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:1.8rem;color:#c9c9c9;font-family:source-sans-pro!important;text-align:start}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;display:flex;flex-direction:row;width:25%;height:30%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses[_ngcontent-%COMP%]   .eclipse-small[_ngcontent-%COMP%]{position:absolute;width:60%;height:60%;transform:translate(-1rem,-1rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .eclipses[_ngcontent-%COMP%]   .eclipse-big[_ngcontent-%COMP%]{width:100%;height:100%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .red-card[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{left:0;bottom:0;transform:translate(0);margin-bottom:4rem;margin-left:4rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:3rem 2rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:2rem;color:#000;font-family:source-sans-pro!important;margin-top:1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus{border:none;border-bottom:1px solid #000;font-family:source-sans-pro!important;color:#8d8d8d;font-size:2rem;outline:none!important}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{-webkit-box-shadow:none;box-shadow:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-top:20%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:19.1rem;height:5rem;font-size:2rem;transition:all .3s ease;border:none}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{box-shadow:0 5px 15px #da9915;transform:translateY(-.5rem)}}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(60px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var F0 = ["title"],
    z0 = ["card"],
    Gd = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngOnInit() {
                this.titleService.setTitle("NBC - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Discover NBC Land, a premier real estate investment opportunity with Indowealth Group."
                }, {
                    name: "keywords",
                    content: "NBC Land, real estate, investment, Indowealth Group"
                }])
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                        root: null,
                        rootMargin: "0px",
                        threshold: .1
                    };
                    new IntersectionObserver(o => {
                        o.forEach(s => {
                            let a = s.target;
                            s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                        })
                    }, n).observe(this.title.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-nbc"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(F0, 5), H(z0, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 74,
            vars: 0,
            consts: [
                ["title", ""],
                [1, "hero"],
                [1, "d-flex", "flex-row", "gap-4", "align-items-center"],
                [1, "second-sec"],
                [1, "card"],
                [1, "section-desc"],
                ["src", "/assets/nbc1.png", "alt", "", 1, "desc-img"],
                ["src", "/assets/nbc2.png", "alt", "", 1, "desc-img"],
                ["src", "/assets/nbc3.png", "alt", "", 1, "desc-img"],
                ["src", "/assets/nbc4.png", "alt", "", 1, "desc-img"],
                ["src", "/assets/nbc5.png", "alt", "", 1, "desc-img"],
                [1, "bold"],
                ["href", "https://en.ccccltd.cn/", "target", "_blank", "rel", "noopener noreferrer"],
                ["href", "https://www.sinergy.web.id/#", "target", "_blank", "rel", "noopener noreferrer"],
                ["href", "https://wdsdesign.sg/", "target", "_blank", "rel", "noopener noreferrer"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 1)(1, "h1", 2, 0), h(3, "NBC LAND"), u()(), p(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "h2"), h(8, " New Batam Centre Land Reclamation and Development Project (\u201CNBC Land\u201D) "), u(), p(9, "p"), h(10, " NBC Land will be located on the north-eastern tip of the island, where 100 hectares of land will be reclaimed, of which 13 hectares will be used for construction of a ferry terminal to replace the existing ferry terminal of 0.9 hectares (See: Figure 1&2). "), u(), O(11, "img", 6), p(12, "i"), h(13, "Figure 1: Location of Main Transportation Infrastructure on Batam Island "), u(), O(14, "img", 7), p(15, "i"), h(16, "Figure 2: Location Plans for the Project "), u()(), p(17, "div", 5)(18, "h2"), h(19, "Project Development Plans"), u(), O(20, "img", 8), p(21, "i"), h(22, "Figure 3: Development Plans for the Project "), u(), O(23, "img", 9), p(24, "i"), h(25, "Figure 4a: Architectural Planning and Design "), u(), O(26, "img", 10), p(27, "i"), h(28, "Figure 4b: Architectural Planning and Design "), u(), p(29, "p"), h(30, " NBC Land shall be developed as a meticulously curated, self-contained tropical island paradise with world-class amenities of all kinds catered towards high-net-worth individuals and families, corporations and tourists, serving as a centre for all forms of tourism, including medical tourism , and well positioned as a highly competitive alternative to the neighbouring Singaporean real estate market. Execution of NBC Land will be led by China Communications Construction Company Limited (\u201CCCCC\u201D), an expert in land reclamation and civil infrastructure, via its regional subsidiary incorporated in Malaysia, CCCC Dredging Southeast Asia Sdn Bhd (\u201CCDSA\u201D), in partnership with Indonesia-incorporated PT Synergy Tharada (\u201CPT Synergy\u201D), the local partner holding the rights and licenses required to execute the project. CCCC\u2019s projects in the Southeast Asian region are executed by its regional entity, CDSA which has substantial experience in infrastructure and reclamation projects , and will be acting as the project manager for the reclamation works and infrastructural development of the island and funding arrangement, where it has historically successfully executed multi-billion-dollar projects in the region and maintains strong access to sources of funding both via China\u2019s strong baking institutions and internationally. The Gross Development Value (GDV) of the Project is estimated at USD3.2 billion, with a total projected GDV of USD17.8 billion on final completion. Demand is expected to benefit from the robust value proposition: "), u(), p(31, "ul")(32, "li")(33, "span", 11), h(34, "Strategic Location:"), u(), h(35, " on the busy Melaka Strait shipping route, with international transportation amenities in the form of ferry, international airport and port, where historically there have been a large number of Singaporean tourists, which comprised over 50% of Batam\u2019s international visitors. "), u(), p(36, "li")(37, "span", 11), h(38, "World class construction quality and amenities:"), u(), h(39, " across the entire island, with carefully curated landscaped parks and public facilities. "), u(), p(40, "li")(41, "span", 11), h(42, "From luxury to ultra luxury residential real estate:"), u(), h(43, " as an alternative to Singapore property ownership for Singaporeans, where Housing Development Board (HDB) apartment units\u2019 average cost of USD4.7k/m\xB2, with landed property costing at least USD13.8k/m\xB2 . "), u(), p(44, "li")(45, "span", 11), h(46, "Grade A commercial real estate and offices: "), u(), h(47, " where Batam remains an attractive destination for businesses, with USD800m earmarked for investment by businesses setting up in Batam further noting the commercial real estate and offices which will be made available via the Project will be vastly superior to the existing offerings in Batam (e.g. in terms of build quality, energy saving, amenities, etc.). "), u()(), p(48, "p"), h(49, " The Project offers a stronger value proposition given the offering of similar world-class amenities at a lower pricing point (compared to Singapore and other similar top tier global developments), moderate weather (compared to the UAE) and special economic zone (which will boost demand, on the back of industry growth). "), u()(), p(50, "div", 5)(51, "h2"), h(52, 'China Communications Construction Company Limited ("CCCC")'), u(), p(53, "p"), h(54, " CCCC ("), p(55, "a", 12), h(56, "https://en.ccccltd.cn/"), u(), h(57, ") is a China majority state-owned enterprise with more than 100 years of experience noting China\u2019s position as the largest area of reclaimed land in the world at 4,600 square miles , and is a leading global comprehensive service provider of ultra-large infrastructure engaged in the investment, construction and operation of transportation infrastructure, equipment manufacturing, real estate and urban comprehensive development, providing customers with investment financing, consulting planning, design and construction, management and operation package solutions and integrated services and claims to be the world's largest port design and construction company, the world's largest highway and bridge design and building company, the world's largest dredging company, the world's largest container crane manufacturing company and the world's largest offshore oil drilling platform design company; it also has the title of China's largest international engineering contracting company and China's largest expressway investors. "), u()(), p(58, "div", 5)(59, "h2"), h(60, "PT Synergy Tharada (\u201CPT Synergy\u201D)"), u(), p(61, "p"), h(62, " PT Synergy is a subsidiary of the Synergy Group ("), p(63, "a", 13), h(64, "https://www.sinergy.web.id/#"), u(), h(65, ") was contracted with the construction and management with the BOT (Build, Operation and Transfer) system of Batu Ampar Passenger Ferry Port, Batam Island (which was later converted into a Container Port) with the Batam Authority. The Batam Centre Ferry Terminal ferries passengers between Singapore and Malaysia (and vice versa), where PT Synergy has transitioned the ferry terminal from a port into an integrated business centres on Batam Island. "), u()(), p(66, "div", 5)(67, "h2"), h(68, "WDS Consultancy Pte Lt (\u201CWDS\u201D)"), u(), p(69, "p"), h(70, " WDS ("), p(71, "a", 14), h(72, "https://wdsdesign.sg/"), u(), h(73, ") is an international multidisciplinary design firm providing consultancy services for architecture, interior design, landscape master planning and urban design in the Asian region and beyond, with numerous international projects such as the Masterplan of Funtasy Island Batam Indonesia, Hai Tang Bay, Sanya, China Masterplan for a Rice Museum, Indoor Garden and Mall, Glorificaraguay, a strategic planning for the Republic of Paraguay. Masterplan of Villa Florida in Asuncion, Bali Airport City and the likes. "), u()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/nbc_hero.JPG) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/nbc_hero.JPG) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:80px}}.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;width:100%;background-size:cover;padding:6rem 2rem;display:flex;align-items:center;justify-content:center}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;width:calc(100% - 1.5rem);padding:2rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]:last-child{margin:0}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .desc-img[_ngcontent-%COMP%]{width:100%}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{transition:all .3s ease;padding:0;background:none}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0;color:#da9915}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-family:source-sans-pro;margin-top:.3rem;font-size:1.3rem;margin-bottom:4rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]{font-family:source-sans-pro-bold;font-size:2.3rem;display:inline-block}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{font-family:source-sans-pro-semi-bold;font-size:1.2rem;display:grid;grid-template-columns:1fr 1fr 1fr 1.5fr;width:100%;border:1px solid #000}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:1rem .5rem 1rem 1rem;border:1px solid #000;text-align:start;display:flex;align-items:flex-start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal;word-wrap:break-word;overflow-wrap:break-word}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{font-family:source-sans-pro-bold;font-size:1.7rem;padding:1rem;border:1px solid #000;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem;font-family:source-sans-pro-semi-bold;color:#000;list-style:circle}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%]{font-family:source-sans-pro-bold}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#da9915;text-decoration:none;transition:all .3s ease}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;margin-bottom:3rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:44.7rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:6rem;width:calc(100% - 2rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:block;position:absolute;top:0;right:0;width:20rem;height:20rem;margin-top:1rem;margin-right:1rem;border-top-right-radius:20px;background:url(/assets/token2.jpeg) no-repeat center center;background-size:cover}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .desc-img[_ngcontent-%COMP%]{width:100%}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:70%;font-size:1.7rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;font-size:2.4rem;line-height:3rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;margin-bottom:3rem;line-height:3rem}}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(100px)"
                }), N("2s ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var U0 = ["title"],
    B0 = ["card"],
    Qd = (() => {
        let e = class e {
            constructor(n, r, o, s, a, c) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c
            }
            ngOnInit() {
                this.titleService.setTitle("FAQ - Indowealth Group"), this.meta.addTags([{
                    name: "description",
                    content: "Find answers to frequently asked questions about Indowealth Group."
                }, {
                    name: "keywords",
                    content: "FAQ, frequently asked questions, support"
                }])
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                        root: null,
                        rootMargin: "0px",
                        threshold: .1
                    };
                    new IntersectionObserver(o => {
                        o.forEach(s => {
                            let a = s.target;
                            s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement ? this.runAnimation(this.title.nativeElement, "fadeInSlideUp") : a === this.card.nativeElement && this.runAnimation(this.card.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                        })
                    }, n).observe(this.title.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-faq"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(U0, 5), H(B0, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.title = s.first), j(s = F()) && (o.card = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 90,
            vars: 0,
            consts: [
                ["title", ""],
                [1, "hero"],
                [1, "d-flex", "flex-row", "gap-4", "align-items-center"],
                [1, "second-sec"],
                [1, "card"],
                [1, "section-desc"],
                [1, "bold"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "section", 1)(1, "h1", 2, 0), h(3, "FAQ"), u()(), p(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "h2"), h(8, "Frequently Asked Questions (FAQ)"), u(), p(9, "ul")(10, "li")(11, "span", 6), h(12, "What is IWT?"), u(), O(13, "br"), h(14, " IndoWealth Token (IWT) is the world\u2019s first cryptocurrency backed by a land reclamation and development project, specifically the New Batam Centre Land Reclamation and Development Project (NBC Land) in Indonesia. "), u(), p(15, "li")(16, "span", 6), h(17, "How does IWT work?"), u(), O(18, "br"), h(19, " IWT operates on the Solana blockchain, offering high transaction speeds and low fees. The token's value is securely linked to the NBC Land project, ensuring that it is always backed by a tangible asset. "), u(), p(20, "li")(21, "span", 6), h(22, "How do I contact IWT support?"), u(), O(23, "br"), h(24, " You can contact IWT support via the \u201CContact Us\u201D link at the bottom of the IndoWealth Group website, or through our Telegram Community and Twitter (X) account, accessible via the icons beneath the Contact Us link. "), u(), p(25, "li")(26, "span", 6), h(27, "What are the benefits of investing in IWT?"), u(), O(28, "br"), h(29, " Investing in IWT offers the security of real-world asset backing, significant growth potential, transparency through regular project updates and efficient, low-cost transactions on the Solana blockchain. "), u(), p(30, "li")(31, "span", 6), h(32, "How can I stay updated on IWT news?"), u(), O(33, "br"), h(34, " Stay updated by clicking \u201CBlogs and Announcements\u201D on the IndoWealth Group website or through our Telegram Community and Twitter (X) account, accessible via the icons beneath the \u201CContact Us\u201D link. "), u(), p(35, "li")(36, "span", 6), h(37, "What is the NBC Land Project?"), u(), O(38, "br"), h(39, " The NBC Land Project is a 100-hectare land reclamation and development project on the north-eastern tip of Batam Island, Indonesia. It will feature a new ferry terminal and a self-contained tropical island with world-class amenities aimed at high-net-worth individuals, corporations, and tourists. Managed by China Communications Construction Company Limited (CCCC) and PT Synergy Tharada, it offers a competitive alternative to Singapore\u2019s real estate market and is expected to have an initial Gross Development Value (GDV) of USD 3.2 billion, with a final GDV of USD 17.8 billion. "), u(), p(40, "li")(41, "span", 6), h(42, "Where can I review documentation for IWT and NBC Land?"), u(), O(43, "br"), h(44, " Documentation, including the IWT White Paper and additional details on the NBC Land project, is available on the IndoWealth Group website. "), u(), p(45, "li")(46, "span", 6), h(47, "Do I need a wallet for IWT?"), u(), O(48, "br"), h(49, " Yes, a cryptocurrency wallet compatible with the Solana blockchain is required to store and manage your IWT tokens. "), u(), p(50, "li")(51, "span", 6), h(52, "Is IWT linked to other projects?"), u(), O(53, "br"), h(54, " IWT is specifically linked to the NBC Land project, which has partnerships with significant entities including China Communications Construction Company Limited (CCCC) and PT Synergy Tharada. "), u(), p(55, "li")(56, "span", 6), h(57, "What gives IWT value?"), u(), O(58, "br"), h(59, " IWT\u2019s value is underpinned by the assets and development of the NBC Land project, expected to appreciate due to its strategic location and world-class infrastructure. "), u(), p(60, "li")(61, "span", 6), h(62, "How do I start investing with IWT?"), u(), O(63, "br"), h(64, " To start investing, you may participate in the token offering and purchase IWT using a compatible wallet when it is listed. "), u(), p(65, "li")(66, "span", 6), h(67, "When is IWT listing?"), u(), O(68, "br"), h(69, " The projected listing date for IWT is November 15th, 2024, with confirmation to be made via announcements on the IndoWealth Group website and our Telegram Community and Twitter (X) account. "), u(), p(70, "li")(71, "span", 6), h(72, "What are the fees associated with investing in IWT?"), u(), O(73, "br"), h(74, " Fees are minimal, primarily involving low transaction fees on the Solana blockchain, significantly lower than those on other blockchains like Ethereum. "), u(), p(75, "li")(76, "span", 6), h(77, "What can I do with my IWT?"), u(), O(78, "br"), h(79, " IWT can be held as an investment or traded for profit on cryptocurrency exchanges after its listing. "), u(), p(80, "li")(81, "span", 6), h(82, "What are the ways I can get IWT?"), u(), O(83, "br"), h(84, " IWT can be obtained through purchasing upon listing or via airdrops and giveaways organized by IndoWealth Group. "), u(), p(85, "li")(86, "span", 6), h(87, "How do I participate in giveaways and airdrops?"), u(), O(88, "br"), h(89, " Participation in giveaways and airdrops is mainly done through our Telegram bot game and watching for announcements on our Telegram Community and Twitter (X) account. "), u()()()()())
            },
            dependencies: [te],
            styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:url(/assets/faq_hero_mobile.JPG) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:50px}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:url(/assets/faq_hero.jpg) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;width:80px}}.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;width:100%;background-size:cover;padding:6rem 2rem;display:flex;align-items:center;justify-content:center}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:6px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;width:calc(100% - 1.5rem);padding:2rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:none}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]:last-child{margin:0}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .desc-img[_ngcontent-%COMP%]{width:100%}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{transition:all .3s ease;padding:0;background:none}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0;color:#da9915}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-family:source-sans-pro;margin-top:.3rem;font-size:1.3rem;margin-bottom:4rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;color:#da9915;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]{font-family:source-sans-pro-bold;font-size:2.3rem;display:inline-block}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{font-family:source-sans-pro-semi-bold;font-size:1.2rem;display:grid;grid-template-columns:1fr 1fr 1fr 1.5fr;width:100%;border:1px solid #000}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:1rem .5rem 1rem 1rem;border:1px solid #000;text-align:start;display:flex;align-items:flex-start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal;word-wrap:break-word;overflow-wrap:break-word}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{font-family:source-sans-pro-bold;font-size:1.7rem;padding:1rem;border:1px solid #000;text-align:start}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:4rem!important;font-size:1.7rem;font-family:source-sans-pro-semi-bold;color:#000;list-style:circle}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%]{font-family:source-sans-pro-bold}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#da9915;text-decoration:none;transition:all .3s ease}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;margin-bottom:3rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;min-height:44.7rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:16px;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#d7e4e5bf;box-shadow:-5px 5px 15px 10px #0000001a;border:1px solid #da9915;padding:6rem;width:calc(100% - 2rem)}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:block;position:absolute;top:0;right:0;width:20rem;height:20rem;margin-top:1rem;margin-right:1rem;border-top-right-radius:20px;background:url(/assets/token2.jpeg) no-repeat center center;background-size:cover}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:5rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .desc-img[_ngcontent-%COMP%]{width:100%}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:70%;font-size:1.7rem}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;font-size:2.4rem;line-height:3rem;margin-bottom:6rem!important}.second-sec[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;margin-bottom:3rem;line-height:3rem}}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(100px)"
                }), N("2s ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var $0 = ["title"];

function H0(i, e) {
    if (i & 1 && (p(0, "div", 5)(1, "div", 6), O(2, "img", 7), u(), p(3, "div", 8)(4, "h2", 9), h(5), u(), p(6, "p", 10), h(7), u()()()), i & 2) {
        let t = e.$implicit;
        I(2), Wt("alt", t.name), S("src", t.url, ot), I(3), vt(" ", t.name, " "), I(2), Je(t == null ? null : t.body)
    }
}
var Yd = (() => {
    let e = class e {
        constructor(n, r, o, s, a, c) {
            this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c, this.teams = [{
                name: "William \u201CWill\u201D Adams",
                url: "assets/team2.JPEG",
                body: "William Adams is the CEO and a co-founder of the Indowealth Group. He has previous work experience in various fields including finance, consulting and academia prior to his foray into the cryptosphere. Given his passion for innovative finance solutions and fascination with the role of technology in continuously shaping more and more of that landscape, it is little wonder that he has now found himself at the forefront of introducing a unique world\u2019s first token in IWT."
            }, {
                name: "Scott \u201CBenny\u201D Burnham",
                url: "assets/team3.JPEG",
                body: "Scott Burnham is the CFO of the Indowealth Group. He has previous work experience in audit and finance, where he crossed paths with Will and found himself on a one-way trip into Indowealth Group. Despite his cautious and wary nature, he was convinced of the merits in creating a token that would allow for equal opportunity investments for investors of all categories into large-scale projects, and is now determined to ensure the success of IWT."
            }, {
                name: "Sergei \u201CPeter\u201D Pavlovitch",
                url: "assets/team5.JPEG",
                body: "Sergei Pavlovitch is the COO of the Indowealth Group. Originally hailing from the city of St Petersburg, his previous work experience in sales and operations have allowed him to gain valuable insight from which the Indowealth Group benefits tremendously. A strict belief in utilitarian principles and unwavering desire to make a wider impact on the world around him has led down the path of joining forces with Will and Benny to create IWT and ensure its message is known far and wide."
            }, {
                name: "Kyo",
                url: "assets/team1.JPEG",
                body: "Kyo is the General Manager of the Indowealth Group. Having worked and travelled throughout much of his younger days, he unsuspectingly stumbled into the Indowealth Group and has ended up as Head Minion to Will, Benny and Peter. Not one to outwardly express his thoughts, Kyo is nonetheless brimming with excitement to see IWT become a household name in the crypto verse."
            }, {
                name: "Joshua \u201CJosh\u201D Joseph",
                url: "assets/team4.JPEG",
                body: "Joshua Joseph, commonly referred to as Josh, serves as the Head of Marketing Strategies at IndoWealth Group. With a self-taught mastery in digital marketing, Josh has intricately woven his innovative strategies into the fabric of IndoWealth\u2019s operations, under the guidance of Kyo, the General Manager, and in close collaboration with Will, Benny, and Peter. His knack for capturing market trends has not only heightened the group\u2019s visibility but has also harmonized with the team\u2019s collective vision, propelling IndoWealth into new realms of the blockchain landscape."
            }]
        }
        ngOnInit() {
            this.titleService.setTitle("Our Team - Indowealth Group"), this.meta.addTags([{
                name: "description",
                content: "Meet the dedicated team behind Indowealth Group and our expertise in the industry."
            }, {
                name: "keywords",
                content: "team, Indowealth Group, experts, leadership"
            }])
        }
        ngAfterViewInit() {
            if (ie(this.platformId)) {
                let n = {
                    root: null,
                    rootMargin: "0px",
                    threshold: .1
                };
                new IntersectionObserver(o => {
                    o.forEach(s => {
                        let a = s.target;
                        s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement && this.runAnimation(this.title.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                    })
                }, n).observe(this.title.nativeElement)
            }
        }
        runAnimation(n, r) {
            this.animationBuilder.build([E({
                opacity: 0,
                transform: this.getTransform(r)
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translate(0, 0)"
            }))]).create(n).play()
        }
        getTransform(n) {
            switch (n) {
                case "fadeInSlideUp":
                    return "translateY(30px)";
                default:
                    return "none"
            }
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-team"]
        ],
        viewQuery: function(r, o) {
            if (r & 1 && H($0, 5), r & 2) {
                let s;
                j(s = F()) && (o.title = s.first)
            }
        },
        standalone: !0,
        features: [L],
        decls: 7,
        vars: 1,
        consts: [
            ["title", ""],
            [1, "hero"],
            [1, "second-sec"],
            [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "w-full", "gap-y-14"],
            ["class", "flex flex-col md:flex-row bg-white dark:bg-card rounded-lg shadow-lg overflow-hidden w-full card", 4, "ngFor", "ngForOf"],
            [1, "flex", "flex-col", "md:flex-row", "bg-white", "dark:bg-card", "rounded-lg", "shadow-lg", "overflow-hidden", "w-full", "card"],
            [1, "relative", "md:w-1/2"],
            [1, "img-team", "w-full", "h-full", "object-cover", 3, "src", "alt"],
            [1, "md:w-1/2", "px-6", "py-8", "bg-indo", "text-white", "flex", "flex-col", "h-auto"],
            [1, "text-3xl", "font-bold", "text-white", "rounded"],
            [1, "text-base", "mb-6"]
        ],
        template: function(r, o) {
            r & 1 && (p(0, "section", 1)(1, "h1", null, 0), h(3, "Meet the IndoWealth team"), u()(), p(4, "section", 2)(5, "div", 3), q(6, H0, 8, 4, "div", 4), u()()), r & 2 && (I(6), S("ngForOf", o.teams))
        },
        dependencies: [At, te, pn, tt],
        styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:linear-gradient(#00000080,#00000080),url(/assets/team_hero_mobile.JPG) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%;white-space:nowrap}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:linear-gradient(#00000080,#00000080),url(/assets/team_hero.JPG) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1.5rem;font-family:Inter!important}.second-sec[_ngcontent-%COMP%]   .img-team[_ngcontent-%COMP%]{transform:scale(1)}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;font-family:source-sans-pro-semi-bold;line-height:1.5!important}.second-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#da9915;width:13rem;height:4.1rem;border-radius:5px;font-family:source-sans-pro-bold;font-size:1.6rem;transition:box-shadow .3s ease,transform .3s ease;cursor:pointer}.second-sec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 0 15px #da991599;transform:scale(1.05)}.second-sec[_ngcontent-%COMP%]   .bg-indo[_ngcontent-%COMP%]{background-color:#da9915;padding:3rem 2rem}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;padding:5%}.second-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:2rem}.second-sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.5!important}.second-sec[_ngcontent-%COMP%]   .bg-indo[_ngcontent-%COMP%]{background-color:#da9915;padding:4rem 2rem}}"],
        data: {
            animation: [X("fadeInSlideUp", [G(":enter", [E({
                opacity: 0,
                transform: "translateY(60px)"
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translateY(0)"
            }))])])]
        }
    });
    let i = e;
    return i
})();
var W0 = ["title"];

function V0(i, e) {
    if (i & 1 && (p(0, "div", 5)(1, "span", 6), h(2), u(), p(3, "a", 7), h(4, "View Document"), u()()), i & 2) {
        let t = e.$implicit;
        I(2), vt(" ", t.title, ""), I(), wa("href", "https://indowealth-node-backend.vercel.app/download/", t.name, "", ot)
    }
}
var Kd = (() => {
    let e = class e {
        constructor(n, r, o, s, a, c) {
            this.platformId = n, this.renderer = r, this.animationBuilder = o, this.sanityService = s, this.titleService = a, this.meta = c, this.documents = [{
                title: "Memorandum between              PT Synergy Tharada and Indowealth Group",
                name: "memo1"
            }, {
                title: "Memorandum between PT Synery Tharada and China Communications Construction Company",
                name: "memo2"
            }, {
                title: "Classification of New Batam Center as Project of National Stategic Value by Indonesian Ministry of Investments",
                name: "Classification"
            }, {
                title: "Official Recognition Letter of NBC Land as Project of National Strategic Value by Indonesian Ministry of Investments",
                name: "Official"
            }, {
                title: "Letter of Approval for NBC Land jointly issued by Ministry of Investments and Ministry of Marine Affairs & Fisheries",
                name: "Letter"
            }, {
                title: "Ministry of Transportation Approval Letter to PT Synergy Tharada for Land Survey Work",
                name: "ministry"
            }, {
                title: "NBC Land Project Presentation",
                name: "nbc1"
            }, {
                title: "NBC Land Architectural Blueprint & Design",
                name: "nbc2"
            }, {
                title: "Master Schedule              NBC Land",
                name: "master"
            }, {
                title: "NBC Land Reclamatiion Concept Design",
                name: "nbc3"
            }, {
                title: "China Communications Construction Company Limited (CCCC) Presentation",
                name: "China"
            }, {
                title: "WDS Architecture Firm Presentation",
                name: "wds"
            }]
        }
        ngOnInit() {
            this.titleService.setTitle("Blogs - Indowealth Group"), this.meta.addTags([{
                name: "description",
                content: "Access comprehensive documentation and user guides for Indowealth Group services."
            }, {
                name: "keywords",
                content: "documentation, user guides, resources"
            }])
        }
        ngAfterViewInit() {
            if (ie(this.platformId)) {
                let n = {
                    root: null,
                    rootMargin: "0px",
                    threshold: .1
                };
                new IntersectionObserver(o => {
                    o.forEach(s => {
                        let a = s.target;
                        s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.title.nativeElement && this.runAnimation(this.title.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                    })
                }, n).observe(this.title.nativeElement)
            }
        }
        runAnimation(n, r) {
            this.animationBuilder.build([E({
                opacity: 0,
                transform: this.getTransform(r)
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translate(0, 0)"
            }))]).create(n).play()
        }
        getTransform(n) {
            switch (n) {
                case "fadeInSlideUp":
                    return "translateY(30px)";
                default:
                    return "none"
            }
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(V), b(ne), b(de), b(ue), b(ye), b(we))
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-document"]
        ],
        viewQuery: function(r, o) {
            if (r & 1 && H(W0, 5), r & 2) {
                let s;
                j(s = F()) && (o.title = s.first)
            }
        },
        standalone: !0,
        features: [L],
        decls: 7,
        vars: 1,
        consts: [
            ["title", ""],
            [1, "hero"],
            [1, "second-sec"],
            [1, "grid", "grid-cols-1", "w-full", "gap-y-6"],
            ["class", "flex flex-row dark:bg-card rounded-lg shadow-lg overflow-hidden w-full card", 4, "ngFor", "ngForOf"],
            [1, "flex", "flex-row", "dark:bg-card", "rounded-lg", "shadow-lg", "overflow-hidden", "w-full", "card"],
            [1, "name"],
            ["target", "_blank", "rel", "noopener noreferrer", 1, "view", 3, "href"]
        ],
        template: function(r, o) {
            r & 1 && (p(0, "section", 1)(1, "h1", null, 0), h(3, "DOCUMENTATION"), u()(), p(4, "section", 2)(5, "div", 3), q(6, V0, 5, 3, "div", 4), u()()), r & 2 && (I(6), S("ngForOf", o.documents))
        },
        dependencies: [te, pn, tt],
        styles: [".hero[_ngcontent-%COMP%]{min-height:calc(50vh - 8.8rem);width:100%;background:linear-gradient(#00000080,#00000080),url(/assets/document_hero_mobile.JPG) no-repeat center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;flex-direction:column;justify-content:center;text-align:start}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:25.7rem;font-size:2.6rem;font-weight:700;color:#fff;margin-top:auto;margin-bottom:2rem;margin-left:7%;white-space:nowrap}@media (min-width: 768px){.hero[_ngcontent-%COMP%]{background:linear-gradient(#00000080,#00000080),url(/assets/document_hero.JPG) no-repeat center center;background-size:cover;min-height:calc(50vh - 10rem);align-items:flex-start;text-align:left;padding-left:5%;padding-top:8rem}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10rem;width:49.5rem;margin-left:0}}.second-sec[_ngcontent-%COMP%]{background:#fff;width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:2rem 1rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:2rem 1rem;background:#d10600;color:#fff}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.6rem;font-family:source-sans-pro-bold!important;display:inline-block;width:70%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#da9915;width:10rem;height:4.1rem;border-radius:5px;font-family:source-sans-pro-bold;font-size:1.2rem;transition:box-shadow .3s ease,transform .3s ease;cursor:pointer;white-space:nowrap}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 0 15px #da991599;transform:scale(1.05)}@media (min-width: 768px){.second-sec[_ngcontent-%COMP%]{background:#fff;height:auto;padding:5%}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:2rem 4rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:source-sans-pro-bold!important;font-size:2.4rem}.second-sec[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:13rem;height:4.1rem;font-size:1.6rem}}"],
        data: {
            animation: [X("fadeInSlideUp", [G(":enter", [E({
                opacity: 0,
                transform: "translateY(60px)"
            }), N("800ms ease-out", E({
                opacity: 1,
                transform: "translateY(0)"
            }))])])]
        }
    });
    let i = e;
    return i
})();
var Xd = [{
    redirectTo: "home",
    path: "",
    pathMatch: "full"
}, {
    component: Xl,
    path: "home",
    data: {
        title: "Home"
    }
}, {
    component: Jl,
    path: "about",
    data: {
        title: "About"
    }
}, {
    component: Zl,
    path: "trading",
    data: {
        title: "Trading"
    }
}, {
    component: ed,
    path: "mission",
    data: {
        title: "Mission"
    }
}, {
    component: td,
    path: "vision",
    data: {
        title: "Vision"
    }
}, {
    component: fd,
    path: "blogs",
    data: {
        title: "Blogs"
    }
}, {
    component: Vd,
    path: "blogs/:slug",
    data: {
        title: "BlogContent"
    }
}, {
    component: qd,
    path: "contact",
    data: {
        title: "Contact"
    }
}, {
    component: Gd,
    path: "nbc",
    data: {
        title: "Nbc"
    }
}, {
    component: Qd,
    path: "faq",
    data: {
        title: "Faq"
    }
}, {
    component: Yd,
    path: "team",
    data: {
        title: "Team"
    }
}, {
    component: Kd,
    path: "document",
    data: {
        title: "Document"
    }
}];
var q0 = (() => {
    let e = class e extends Vi {
        constructor(n, r, o) {
            super(n, r, o)
        }
        ngOnDestroy() {
            this.flush()
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(ee(le), ee(Jn), ee(Wi))
    }, e.\u0275prov = J({
        token: e,
        factory: e.\u0275fac
    });
    let i = e;
    return i
})();

function G0() {
    return new Va
}

function Q0(i, e, t) {
    return new Ga(i, e, t)
}
var Jd = [{
        provide: Wi,
        useFactory: G0
    }, {
        provide: Vi,
        useClass: q0
    }, {
        provide: ln,
        useFactory: Q0,
        deps: [hn, Vi, Pe]
    }],
    Y0 = [{
        provide: Jn,
        useFactory: () => new qa
    }, {
        provide: $n,
        useValue: "BrowserAnimations"
    }, ...Jd],
    gw = [{
        provide: Jn,
        useClass: Wa
    }, {
        provide: $n,
        useValue: "NoopAnimations"
    }, ...Jd];

function Zd() {
    return dn("NgEagerAnimations"), [...Y0]
}
var K0 = "@",
    X0 = (() => {
        let e = class e {
            constructor(n, r, o, s, a) {
                this.doc = n, this.delegate = r, this.zone = o, this.animationType = s, this.moduleImpl = a, this._rendererFactoryPromise = null, this.scheduler = T(ya, {
                    optional: !0
                }), this.loadingSchedulerFn = T(J0, {
                    optional: !0
                })
            }
            ngOnDestroy() {
                this._engine ? .flush()
            }
            loadImpl() {
                let n = () => this.moduleImpl ? ?
                    import ("./chunk-BRMUSV7G.js").then(o => o),
                    r;
                return this.loadingSchedulerFn ? r = this.loadingSchedulerFn(n) : r = n(), r.catch(o => {
                    throw new he(5300, !1)
                }).then(({\
                    u0275createEngine: o,
                    \u0275AnimationRendererFactory: s
                }) => {
                    this._engine = o(this.animationType, this.doc);
                    let a = new s(this.delegate, this._engine, this.zone);
                    return this.delegate = a, a
                })
            }
            createRenderer(n, r) {
                let o = this.delegate.createRenderer(n, r);
                if (o.\u0275type === 0) return o;
                typeof o.throwOnSyntheticProps == "boolean" && (o.throwOnSyntheticProps = !1);
                let s = new zs(o);
                return r ? .data ? .animation && !this._rendererFactoryPromise && (this._rendererFactoryPromise = this.loadImpl()), this._rendererFactoryPromise ? .then(a => {
                    let c = a.createRenderer(n, r);
                    s.use(c), this.scheduler ? .notify(10)
                }).catch(a => {
                    s.use(o)
                }), s
            }
            begin() {
                this.delegate.begin ? .()
            }
            end() {
                this.delegate.end ? .()
            }
            whenRenderingDone() {
                return this.delegate.whenRenderingDone ? .() ? ? Promise.resolve()
            }
        };
        e.\u0275fac = function(r) {
            Li()
        }, e.\u0275prov = J({
            token: e,
            factory: e.\u0275fac
        });
        let i = e;
        return i
    })(),
    zs = class {
        constructor(e) {
            this.delegate = e, this.replay = [], this.\u0275type = 1
        }
        use(e) {
            if (this.delegate = e, this.replay !== null) {
                for (let t of this.replay) t(e);
                this.replay = null
            }
        }
        get data() {
            return this.delegate.data
        }
        destroy() {
            this.replay = null, this.delegate.destroy()
        }
        createElement(e, t) {
            return this.delegate.createElement(e, t)
        }
        createComment(e) {
            return this.delegate.createComment(e)
        }
        createText(e) {
            return this.delegate.createText(e)
        }
        get destroyNode() {
            return this.delegate.destroyNode
        }
        appendChild(e, t) {
            this.delegate.appendChild(e, t)
        }
        insertBefore(e, t, n, r) {
            this.delegate.insertBefore(e, t, n, r)
        }
        removeChild(e, t, n) {
            this.delegate.removeChild(e, t, n)
        }
        selectRootElement(e, t) {
            return this.delegate.selectRootElement(e, t)
        }
        parentNode(e) {
            return this.delegate.parentNode(e)
        }
        nextSibling(e) {
            return this.delegate.nextSibling(e)
        }
        setAttribute(e, t, n, r) {
            this.delegate.setAttribute(e, t, n, r)
        }
        removeAttribute(e, t, n) {
            this.delegate.removeAttribute(e, t, n)
        }
        addClass(e, t) {
            this.delegate.addClass(e, t)
        }
        removeClass(e, t) {
            this.delegate.removeClass(e, t)
        }
        setStyle(e, t, n, r) {
            this.delegate.setStyle(e, t, n, r)
        }
        removeStyle(e, t, n) {
            this.delegate.removeStyle(e, t, n)
        }
        setProperty(e, t, n) {
            this.shouldReplay(t) && this.replay.push(r => r.setProperty(e, t, n)), this.delegate.setProperty(e, t, n)
        }
        setValue(e, t) {
            this.delegate.setValue(e, t)
        }
        listen(e, t, n) {
            return this.shouldReplay(t) && this.replay.push(r => r.listen(e, t, n)), this.delegate.listen(e, t, n)
        }
        shouldReplay(e) {
            return this.replay !== null && e.startsWith(K0)
        }
    },
    J0 = new ge("");

function eu(i = "animations") {
    return dn("NgAsyncAnimations"), Bt([{
        provide: ln,
        useFactory: (e, t, n) => new X0(e, t, n, i),
        deps: [le, hn, Pe]
    }, {
        provide: $n,
        useValue: i === "noop" ? "NoopAnimations" : "BrowserAnimations"
    }])
}
var tu = {
    providers: [Zc(Xd, tl({
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled"
    })), dc(), Zd(), Dn, Rr, eu()]
};
var nu = (() => {
    let e = class e {
        constructor(n, r) {
            this.renderer = n, this.el = r, this.isMobileNavbarOpen = !1, this.isMobileSubmenuOpen = !1, this.isMobileNavbarOpen2 = !1, this.isMobileSubmenuOpen2 = !1, this.isMobileNavbarOpen3 = !1, this.isMobileSubmenuOpen3 = !1, this.isDesktopSubmenuOpen = !1
        }
        toggleMobileNavbar() {
            this.isMobileNavbarOpen = !this.isMobileNavbarOpen, this.isMobileNavbarOpen || (this.isMobileSubmenuOpen = !1, this.isMobileSubmenuOpen2 = !1, this.isMobileSubmenuOpen3 = !1)
        }
        toggleMobileSubmenu() {
            this.isMobileSubmenuOpen = !this.isMobileSubmenuOpen
        }
        toggleMobileSubmenu2() {
            this.isMobileSubmenuOpen2 = !this.isMobileSubmenuOpen2
        }
        toggleMobileSubmenu3() {
            this.isMobileSubmenuOpen3 = !this.isMobileSubmenuOpen3
        }
        toggleDesktopSubmenu() {
            this.isDesktopSubmenuOpen = !this.isDesktopSubmenuOpen
        }
        onDocumentClick(n) {
            this.el.nativeElement.contains(n.target) || (this.isMobileNavbarOpen = !1, this.isMobileSubmenuOpen = !1, this.isDesktopSubmenuOpen = !1)
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(ne), b(De))
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-header"]
        ],
        hostBindings: function(r, o) {
            r & 1 && ce("click", function(a) {
                return o.onDocumentClick(a)
            }, !1, ma)
        },
        standalone: !0,
        features: [L],
        decls: 105,
        vars: 10,
        consts: [
            [1, "header"],
            [1, "controls"],
            [1, "logo"],
            ["src", "assets/logo3.PNG", "alt", "Logo"],
            [1, "hamburger", 3, "click"],
            ["src", "assets/hamburger.png", "alt", "Menu"],
            [1, "desktop-controls"],
            [1, "nav-list"],
            ["routerLink", "/home"],
            [1, "has-submenu"],
            [1, "submenu"],
            ["routerLink", "/team"],
            ["routerLink", "/mission"],
            ["routerLink", "/vision"],
            ["routerLink", "/trading"],
            ["routerLink", "/nbc"],
            ["routerLink", "/blogs"],
            ["href", "https://indowealth-node-backend.vercel.app/download/Whitepaper", "target", "_blank"],
            ["routerLink", "/document"],
            ["routerLink", "/faq"],
            [1, "social-icons"],
            ["href", "https://t.me/IndoWealthOfficial", "target", "_blank", "rel", "noopener noreferrer"],
            ["src", "assets/telegram.png", "alt", "Social 1"],
            ["href", "https://x.com/indowealthgroup?s=21", "target", "_blank", "rel", "noopener noreferrer"],
            ["src", "assets/x.png", "alt", "Social 2"],
            [1, "mobile-navbar"],
            ["routerLink", "/home", 3, "click"],
            [1, "has-submenu", 3, "click"],
            [1, "sub-menu"],
            ["routerLink", "/team", 3, "click"],
            ["routerLink", "/mission", 3, "click"],
            ["routerLink", "/vision", 3, "click"],
            ["routerLink", "/trading", 3, "click"],
            ["routerLink", "/nbc", 3, "click"],
            ["routerLink", "/blogs", 3, "click"],
            ["href", "https://indowealth-node-backend.vercel.app/download/Whitepaper", "target", "_blank", 3, "click"],
            ["routerLink", "/document", 3, "click"],
            ["routerLink", "/faq", 3, "click"]
        ],
        template: function(r, o) {
            r & 1 && (p(0, "div", 0)(1, "div", 1)(2, "div", 2), O(3, "img", 3), p(4, "span"), h(5, "Indowealth Group"), u()(), p(6, "div", 4), ce("click", function() {
                return o.toggleMobileNavbar()
            }), O(7, "img", 5), u()(), p(8, "nav", 6)(9, "div", 2), O(10, "img", 3), p(11, "span"), h(12, "Indowealth Group"), u()(), p(13, "ul", 7)(14, "li")(15, "a", 8), h(16, "Home"), u()(), p(17, "li", 9)(18, "a"), h(19, " Who We Are "), u(), p(20, "ul", 10)(21, "li")(22, "a", 11), h(23, "OUR TEAM"), u()(), p(24, "li")(25, "a", 12), h(26, "Mission"), u()(), p(27, "li")(28, "a", 13), h(29, "Vision"), u()()()(), p(30, "li", 9)(31, "a"), h(32, "What We Do"), u(), p(33, "ul", 10)(34, "li")(35, "a", 14), h(36, "IWT"), u()(), p(37, "li")(38, "a", 15), h(39, "NBC LAND"), u()()()(), p(40, "li")(41, "a", 16), h(42, "Blog and Announcements"), u()(), p(43, "li", 9)(44, "a"), h(45, "Learn More"), u(), p(46, "ul", 10)(47, "li")(48, "a", 17), h(49, "WHITEPAPER"), u()(), p(50, "li")(51, "a", 18), h(52, "DOCUMENTATION"), u()(), p(53, "li")(54, "a", 19), h(55, "FAQ"), u()()()()(), p(56, "div", 20)(57, "a", 21), O(58, "img", 22), u(), p(59, "a", 23), O(60, "img", 24), u()()()(), p(61, "nav", 25)(62, "ul", 7)(63, "li")(64, "a", 26), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(65, "Home"), u()(), p(66, "li", 27), ce("click", function() {
                return o.toggleMobileSubmenu()
            }), p(67, "a"), h(68, "Who We Are"), u(), p(69, "ul", 28)(70, "li")(71, "a", 29), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(72, "Our Team"), u()(), p(73, "li")(74, "a", 30), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(75, "Mission"), u()(), p(76, "li")(77, "a", 31), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(78, "Vision"), u()()()(), p(79, "li", 27), ce("click", function() {
                return o.toggleMobileSubmenu2()
            }), p(80, "a"), h(81, "What We Do"), u(), p(82, "ul", 28)(83, "li")(84, "a", 32), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(85, "IWT"), u()(), p(86, "li")(87, "a", 33), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(88, "NBC Land"), u()()()(), p(89, "li")(90, "a", 34), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(91, "Blog & Announcements"), u()(), p(92, "li", 27), ce("click", function() {
                return o.toggleMobileSubmenu3()
            }), p(93, "a"), h(94, "Learn More"), u(), p(95, "ul", 28)(96, "li")(97, "a", 35), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(98, "WHITEPAPER"), u()(), p(99, "li")(100, "a", 36), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(101, "DOCUMENTATION"), u()(), p(102, "li")(103, "a", 37), ce("click", function() {
                return o.toggleMobileNavbar()
            }), h(104, "FAQ"), u()()()()()()), r & 2 && (I(61), It("open", o.isMobileNavbarOpen)("closed", !o.isMobileNavbarOpen), I(5), It("open", o.isMobileSubmenuOpen), I(13), It("open", o.isMobileSubmenuOpen2), I(13), It("open", o.isMobileSubmenuOpen3))
        },
        dependencies: [tt, Rt, te],
        styles: [".header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:1.5rem;height:8.8rem;background:linear-gradient(.25turn,#d10600,#6b0300);color:#fff;position:fixed;top:0;left:0;width:100%;z-index:1000}@media (min-width: 768px){.header[_ngcontent-%COMP%]{height:10rem}}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;align-items:center;font-family:BebasNeue-Regular}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:4rem;margin-right:1rem}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.4rem}@media (min-width: 768px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.5rem}}@media (min-width: 1200px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem}}.header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{font-size:2rem;cursor:pointer}.header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:3rem}@media (min-width: 768px){.header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{display:none}}.header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:calc(100% - 3rem);background:#d106005c;border-radius:1rem;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid #da9915;padding:1rem}@media (min-width: 768px){.header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:none}}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]{display:none}@media (min-width: 1200px){.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.5rem!important}}@media (min-width: 768px){.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:calc(100% - 4rem);background:#d106005c;border-radius:2rem;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid #da9915;padding:0 3rem;height:7rem}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{display:flex;flex-grow:.5;gap:1rem;align-items:center;justify-content:space-between;position:relative;font-size:1rem;color:#fff;padding:0;margin:0;height:100%}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;position:relative;height:100%;display:flex;align-items:center}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#da9915}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase;white-space:nowrap;position:relative;display:flex;align-items:center;padding:.5rem;cursor:pointer;text-decoration:none;font-size:1.2rem;color:#fff;font-family:source-sans-pro-bold}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;height:6rem;display:flex;align-items:center;font-size:1.2rem;color:#fff;font-family:source-sans-pro-bold}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:hover{color:#da9915}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]:hover{block-size:auto;block-size:calc-size(auto);border-top:.5rem solid #da9915;padding:1rem 0;display:block}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]{opacity:1}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]{white-space:nowrap;display:flex!important;min-width:100%;position:absolute;top:7rem;left:50%;transform:translate(-50%);transition:all .5s ease-in-out;block-size:0;padding-block:0;display:none;overflow:hidden;background-color:#da9915;z-index:999;box-shadow:0 2px 5px #0000004d;justify-content:space-around;flex-direction:column}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{opacity:0;display:flex;align-items:center;justify-content:center;border-bottom:.5px solid #fff;margin:0 1rem}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem 2rem;font-size:1.2rem;color:#fff;transition:all .3s ease;text-transform:uppercase;letter-spacing:.05em}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;text-shadow:0 0 10px #fff,0 0 20px #fff,0 0 40px #fff,0 0 80px #fff,0 0 120px #fff}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{display:flex;gap:1rem}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:50%;transition:all .3s ease}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #fff,0 0 20px #fff,0 0 40px #fff,0 0 80px #fff,0 0 120px #fff}.header[_ngcontent-%COMP%]   .desktop-controls[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5rem}}.mobile-navbar[_ngcontent-%COMP%]{position:fixed;top:8.8rem;left:50%;transform:translate(-50%);width:90%;border-bottom-left-radius:6px;border-bottom-right-radius:6px;block-size:0;padding-block:0;backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);background-color:#6b4f0fbf;overflow:hidden;z-index:1000;transition:all .3s ease-in-out}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;width:100%;text-align:center;font-size:2rem;font-weight:700;color:#fff;font-family:source-sans-pro;padding-top:2rem;opacity:0;transition:opacity .3s ease;text-transform:uppercase}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:1rem 3rem;position:relative;border-bottom:.5px solid #fff}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;color:#fff;display:block;padding:1rem 0}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li.has-submenu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{overflow:hidden;transition:all .3s ease-in-out;list-style:none;background:#da9915;block-size:0;padding-block:0}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li.has-submenu.open[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]{block-size:auto;block-size:calc-size(auto);display:block;margin-top:1rem}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li.has-submenu.open[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:.5px solid #fff}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li.has-submenu.open[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.mobile-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li.has-submenu.open[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:1rem 0}.mobile-navbar.open[_ngcontent-%COMP%]{overflow-y:scroll;block-size:auto;block-size:calc-size(auto);display:block;border:1px solid #da9915;max-height:70vh;padding-bottom:2rem}.mobile-navbar.open[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{opacity:1}.mobile-navbar.closed[_ngcontent-%COMP%]{height:0}.mobile-navbar.closed[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{opacity:0}.desktop-navbar[_ngcontent-%COMP%]{position:fixed;top:10rem;left:0;width:9rem;height:calc(100vh - 10rem);background:linear-gradient(#d10600,#6b0300);transition:width .3s ease;z-index:1000;overflow:hidden}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{position:relative;font-size:1.8rem;font-weight:700;color:#fff;padding:0}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin-bottom:1rem;position:relative}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#6b0300}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{white-space:nowrap;position:relative;display:flex;align-items:center;padding:1rem 0;cursor:pointer;text-decoration:none}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;height:6rem;display:flex;align-items:center;font-size:2.5rem;color:#fff;font-weight:700;font-family:SourceSans3}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;min-width:9rem;height:5.4rem}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .img-fill[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;background-color:#da9915;width:5.4rem;height:5.4rem;border-radius:5px}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.5em}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] + .submenu[_ngcontent-%COMP%]{display:block}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]{display:none;background:#da9915;padding:0rem;transition:max-height .3s ease,opacity .3s ease;height:0;opacity:0;overflow:hidden}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.5rem 0}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:block}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:block;position:relative;height:6rem;display:flex;align-items:center;font-size:1em;color:#fff;text-transform:uppercase;letter-spacing:.05em}.desktop-navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   li.has-submenu.open[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]{display:block;height:auto;opacity:1}.desktop-navbar[_ngcontent-%COMP%]:hover{width:30rem}.desktop-navbar[_ngcontent-%COMP%]:hover   .nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:block}@media (max-width: 767px){.desktop-navbar[_ngcontent-%COMP%]{display:none}}@media (min-width: 768px){.mobile-navbar[_ngcontent-%COMP%]{display:none}#content[_ngcontent-%COMP%]{margin-top:8rem;margin-left:5rem;padding:2rem;overflow-y:auto;transition:margin-left .3s ease}.desktop-navbar[_ngcontent-%COMP%]:hover   #content[_ngcontent-%COMP%]{margin-left:15rem}}"]
    });
    let i = e;
    return i
})();
var Z0 = ["item1"],
    ey = ["item2"],
    ty = ["item3"],
    ny = ["item4"],
    iy = ["item5"],
    iu = (() => {
        let e = class e {
            constructor(n, r, o) {
                this.platformId = n, this.renderer = r, this.animationBuilder = o
            }
            ngAfterViewInit() {
                if (ie(this.platformId)) {
                    let n = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        },
                        r = new IntersectionObserver(o => {
                            o.forEach(s => {
                                let a = s.target;
                                s.isIntersecting ? (this.renderer.setStyle(a, "visibility", "visible"), a === this.item1.nativeElement ? this.runAnimation(this.item1.nativeElement, "fadeInSlideUp") : a === this.item2.nativeElement ? this.runAnimation(this.item2.nativeElement, "fadeInSlideUp") : a === this.item3.nativeElement ? this.runAnimation(this.item3.nativeElement, "fadeInSlideUp") : a === this.item4.nativeElement ? this.runAnimation(this.item4.nativeElement, "fadeInSlideUp") : a === this.item5.nativeElement && this.runAnimation(this.item5.nativeElement, "fadeInSlideUp")) : this.renderer.setStyle(a, "visibility", "hidden")
                            })
                        }, n);
                    r.observe(this.item1.nativeElement), r.observe(this.item2.nativeElement), r.observe(this.item3.nativeElement), r.observe(this.item4.nativeElement), r.observe(this.item5.nativeElement)
                }
            }
            runAnimation(n, r) {
                this.animationBuilder.build([E({
                    opacity: 0,
                    transform: this.getTransform(r)
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translate(0, 0)"
                }))]).create(n).play()
            }
            getTransform(n) {
                switch (n) {
                    case "fadeInSlideUp":
                        return "translateY(30px)";
                    default:
                        return "none"
                }
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(b(V), b(ne), b(de))
        }, e.\u0275cmp = D({
            type: e,
            selectors: [
                ["app-footer"]
            ],
            viewQuery: function(r, o) {
                if (r & 1 && (H(Z0, 5), H(ey, 5), H(ty, 5), H(ny, 5), H(iy, 5)), r & 2) {
                    let s;
                    j(s = F()) && (o.item1 = s.first), j(s = F()) && (o.item2 = s.first), j(s = F()) && (o.item3 = s.first), j(s = F()) && (o.item4 = s.first), j(s = F()) && (o.item5 = s.first)
                }
            },
            standalone: !0,
            features: [L],
            decls: 59,
            vars: 0,
            consts: [
                ["item1", ""],
                ["item2", ""],
                ["item3", ""],
                ["item4", ""],
                ["item5", ""],
                [1, "footer-items", "flex-wrap"],
                [1, "footer-item"],
                [1, "item-header", "big"],
                [1, "item-links"],
                ["routerLink", "/blogs"],
                [1, "item-header"],
                ["routerLink", "/trading"],
                ["routerLink", "/nbc"],
                ["routerLink", "/team"],
                ["routerLink", "/mission"],
                ["routerLink", "/vision"],
                ["href", "https://indowealth-node-backend.vercel.app/download/Whitepaper", "rel", "noopener noreferrer", "target", "_blank"],
                ["routerLink", "/document"],
                ["routerLink", "/faq"],
                ["routerLink", "/contact"],
                [1, "social-icons"],
                ["href", "https://x.com/indowealthgroup?s=21", "target", "_blank", "rel", "noopener noreferrer"],
                ["src", "assets/x.png", "alt", "Social 1"],
                ["href", "https://t.me/IndoWealthOfficial", "target", "_blank", "rel", "noopener noreferrer"],
                ["src", "assets/telegram.png", "alt", "Social 2"]
            ],
            template: function(r, o) {
                r & 1 && (p(0, "div", 5)(1, "div", 6, 0)(3, "span", 7), h(4, "Indowealth Group"), u(), p(5, "ul", 8)(6, "li")(7, "a", 9), h(8, "Blog & Announcements"), u()()()(), p(9, "div", 6, 1)(11, "span", 10), h(12, "What We Do"), u(), p(13, "ul", 8)(14, "li")(15, "a", 11), h(16, "Indowealth Token (IWT)"), u()(), p(17, "li")(18, "a", 12), h(19, "NBC Land"), u()()()(), p(20, "div", 6, 2)(22, "span", 10), h(23, "Who We Are"), u(), p(24, "ul", 8)(25, "li")(26, "a", 13), h(27, "Our Team"), u()(), p(28, "li")(29, "a", 14), h(30, "Mission"), u()(), p(31, "li")(32, "a", 15), h(33, "Vision"), u()()()(), p(34, "div", 6, 3)(36, "span", 10), h(37, "Learn More"), u(), p(38, "ul", 8)(39, "li")(40, "a", 16), h(41, "Whitepaper"), u()(), p(42, "li")(43, "a", 17), h(44, "Documentation"), u()(), p(45, "li")(46, "a", 18), h(47, "FAQ"), u()()()(), p(48, "div", 6, 4)(50, "span", 10)(51, "a", 19), h(52, "Contact Us"), u()(), p(53, "ul", 8)(54, "li", 20)(55, "a", 21), O(56, "img", 22), u(), p(57, "a", 23), O(58, "img", 24), u()()()()())
            },
            dependencies: [tt, Rt],
            styles: [".footer-items[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;gap:3rem;width:100%}@media (min-width: 768px){.footer-items[_ngcontent-%COMP%]{padding-top:10%;justify-content:space-evenly;width:100%;flex-direction:row}}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]{color:#da9915;font-size:2rem;font-weight:700;font-family:Orbitron-Bold;margin-bottom:1rem;white-space:nowrap}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#da9915;text-decoration:none;cursor:pointer;transition:all .3s ease}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-shadow:0 5px 15px #da9915;transform:translateY(-.5rem)}@media (min-width: 768px){.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-shadow:0 0 10px #da9915,0 0 20px #da9915,0 0 40px #da9915,0 0 80px #da9915,0 0 120px #da9915}}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-header.big[_ngcontent-%COMP%]{font-size:3rem}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;list-style:none;padding:0;margin:0;width:100%;text-align:start;font-size:1.2rem;color:#fff}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1rem 0;font-size:1.6rem}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]{display:flex;gap:2rem}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:50%;transition:all .3s ease}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #fff,0 0 20px #fff,0 0 40px #fff,0 0 80px #fff,0 0 120px #fff}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-family:SourceSans3}.footer-items[_ngcontent-%COMP%]   .footer-item[_ngcontent-%COMP%]   .item-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#da9915}"],
            data: {
                animation: [X("fadeInSlideUp", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateY(60px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateY(0)"
                }))])]), X("fadeInSlideRight", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(-30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])]), X("fadeInSlideLeft", [G(":enter", [E({
                    opacity: 0,
                    transform: "translateX(30px)"
                }), N("800ms ease-out", E({
                    opacity: 1,
                    transform: "translateX(0)"
                }))])])]
            }
        });
        let i = e;
        return i
    })();
var ru = (() => {
    let e = class e {};
    e.\u0275fac = function(r) {
        return new(r || e)
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-loader"]
        ],
        standalone: !0,
        features: [L],
        decls: 4,
        vars: 0,
        consts: [
            [1, "loader-container"],
            [1, "spinner-container"],
            [1, "spinner"],
            ["src", "assets/logo3.PNG", "alt", "...", 1, "logo"]
        ],
        template: function(r, o) {
            r & 1 && (p(0, "div", 0)(1, "div", 1), O(2, "div", 2)(3, "img", 3), u()())
        },
        styles: [".loader-container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#fff;z-index:9999}.loader-container[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%]{position:relative;width:100px;height:100px;display:flex;justify-content:center;align-items:center}.loader-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;border:10px solid red;border-radius:50%;border-top:10px solid transparent;animation:_ngcontent-%COMP%_spin 1s linear infinite}.loader-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:relative;width:70%;height:70%;animation:_ngcontent-%COMP%_resize 1s ease-in-out infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_resize{0%,to{transform:scale(1)}50%{transform:scale(1.2)}}"]
    });
    let i = e;
    return i
})();

function ry(i, e) {
    i & 1 && O(0, "app-loader")
}

function oy(i, e) {
    i & 1 && (Re(0), O(1, "app-header"), p(2, "div", 1), O(3, "router-outlet")(4, "app-footer", 2), p(5, "div", 3)(6, "span", 4), h(7, "\xA9 2024 Indowealth Group"), u(), O(8, "span", 5), p(9, "a", 6), h(10, "Terms of Use"), u()()(), Ae())
}
var ou = (() => {
    let e = class e {
        expandDesktopNavbar() {
            this.isDesktopNavbarExpanded = !0
        }
        collapseDesktopNavbar() {
            this.isDesktopNavbarExpanded = !1
        }
        constructor(n, r) {
            this.router = n, this.viewportScroller = r, this.title = "indowealth-main", this.isDesktopNavbarExpanded = !1, this.isLoading = !0
        }
        ngOnInit() {
            this.router.events.subscribe(n => {
                n instanceof et && setTimeout(() => {
                    this.isLoading = !1
                }, 1e3)
            })
        }
        scrollToTop() {
            this.viewportScroller.scrollToPosition([0, 0])
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(b(ct), b(Xn))
    }, e.\u0275cmp = D({
        type: e,
        selectors: [
            ["app-root"]
        ],
        standalone: !0,
        features: [L],
        decls: 2,
        vars: 2,
        consts: [
            [4, "ngIf"],
            ["id", "content"],
            [1, "footer"],
            [1, "last-div"],
            [1, "name"],
            [1, "line"],
            ["href", "assets/IndoWealth.group Terms of Use.pdf", "target", "_blank", 1, "term"]
        ],
        template: function(r, o) {
            r & 1 && q(0, ry, 1, 0, "app-loader", 0)(1, oy, 11, 0, "ng-container", 0), r & 2 && (S("ngIf", o.isLoading), I(), S("ngIf", !o.isLoading))
        },
        dependencies: [Wo, nu, iu, ru, te, ht, At],
        styles: ["#content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;padding-top:8.8rem;overflow-y:auto;transition:margin-left .3s ease;width:100%}@media (min-width: 768px){#content[_ngcontent-%COMP%]{padding-top:10rem}}#content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:grid;padding:3rem;width:100%;background:linear-gradient(#d10600,#000 60%)}@media (min-width: 768px){#content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{height:57.3rem;background:#000;grid-template-rows:1fr;grid-template-columns:1fr;column-gap:4rem;padding:0}}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]{justify-self:flex-end;display:flex;align-items:center;justify-content:center;width:100%;height:12.4rem;background-color:#da9915;text-align:center;font-weight:700;font-size:1.6rem;color:#fff;flex-direction:column;gap:.5rem}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:25rem;height:0px;border:1px solid #ffffff}@media (min-width: 768px){#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:none}}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:source-sans-pro;white-space:nowrap}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:source-sans-pro-bold}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]{font-family:source-sans-pro-bold;cursor:pointer;transition:all .3s ease}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]:hover{text-shadow:0 0 10px #fff,0 0 20px #fff,0 0 40px #fff,0 0 80px #fff,0 0 120px #fff}@media (min-width: 768px){#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]{height:6rem;flex-direction:row;padding:0 10%;flex:1;gap:4rem;justify-content:center}#content[_ngcontent-%COMP%]   .last-div[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:60rem}}"]
    });
    let i = e;
    return i
})();
lc(ou, tu).catch(i => console.error(i));