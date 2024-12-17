var UnLazy = function(P) {
    "use strict";
    var ut;
    const bt = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        tt = typeof window > "u",
        Et = !tt && "loading" in HTMLImageElement.prototype,
        yt = !tt && (!("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));

    function et(t, e = document) {
        return typeof t == "string" ? [...e.querySelectorAll(t)] : t instanceof Element ? [t] : [...t]
    }

    function pt(t, e) {
        let n, r;
        return t >= 1 ? (n = e, r = Math.round(e / t)) : (n = Math.round(e * t), r = e), {
            width: n,
            height: r
        }
    }

    function ht(t, e) {
        let n;
        return function(...r) {
            n && clearTimeout(n), n = setTimeout(() => {
                n = void 0, t(...r)
            }, e)
        }
    }

    function Lt(t) {
        let {
            PI: e,
            min: n,
            max: r,
            cos: s,
            round: c
        } = Math, u = t[0] | t[1] << 8 | t[2] << 16, o = t[3] | t[4] << 8, a = (u & 63) / 63, b = (u >> 6 & 63) / 31.5 - 1, d = (u >> 12 & 63) / 31.5 - 1, f = (u >> 18 & 31) / 31, l = u >> 23, _ = (o >> 3 & 63) / 63, m = (o >> 9 & 63) / 63, w = o >> 15, T = r(3, w ? l ? 5 : 7 : o & 7), y = r(3, w ? o & 7 : l ? 5 : 7), g = l ? (t[5] & 15) / 15 : 1, Z = (t[5] >> 4) / 15, W = l ? 6 : 5, C = 0, L = (I, h, R) => {
            let O = [];
            for (let S = 0; S < h; S++)
                for (let U = S ? 0 : 1; U * h < I * (h - S); U++) O.push(((t[W + (C >> 1)] >> ((C++ & 1) << 2) & 15) / 7.5 - 1) * R);
            return O
        }, p = L(T, y, f), K = L(3, 3, _ * 1.25), j = L(3, 3, m * 1.25), z = l && L(5, 5, Z), Y = wt(t), $ = c(Y > 1 ? 32 : 32 * Y), k = c(Y > 1 ? 32 / Y : 32), D = new Uint8Array($ * k * 4), Q = [], V = [];
        for (let I = 0, h = 0; I < k; I++)
            for (let R = 0; R < $; R++, h += 4) {
                let O = a,
                    S = b,
                    U = d,
                    ft = g;
                for (let i = 0, A = r(T, l ? 5 : 3); i < A; i++) Q[i] = s(e / $ * (R + .5) * i);
                for (let i = 0, A = r(y, l ? 5 : 3); i < A; i++) V[i] = s(e / k * (I + .5) * i);
                for (let i = 0, A = 0; i < y; i++)
                    for (let E = i ? 0 : 1, x = V[i] * 2; E * y < T * (y - i); E++, A++) O += p[A] * Q[E] * x;
                for (let i = 0, A = 0; i < 3; i++)
                    for (let E = i ? 0 : 1, x = V[i] * 2; E < 3 - i; E++, A++) {
                        let _t = Q[E] * x;
                        S += K[A] * _t, U += j[A] * _t
                    }
                if (l)
                    for (let i = 0, A = 0; i < 5; i++)
                        for (let E = i ? 0 : 1, x = V[i] * 2; E < 5 - i; E++, A++) ft += z[A] * Q[E] * x;
                let dt = O - 2 / 3 * S,
                    At = (3 * O - dt + U) / 2,
                    Dt = At - U;
                D[h] = r(0, 255 * n(1, At)), D[h + 1] = r(0, 255 * n(1, Dt)), D[h + 2] = r(0, 255 * n(1, dt)), D[h + 3] = r(0, 255 * n(1, ft))
            }
        return {
            w: $,
            h: k,
            rgba: D
        }
    }

    function wt(t) {
        let e = t[3],
            n = t[2] & 128,
            r = t[4] & 128,
            s = r ? n ? 5 : 7 : e & 7,
            c = r ? e & 7 : n ? 5 : 7;
        return s / c
    }
    /**
     * Encodes an RGBA image to a PNG data URI. RGB should not be premultiplied by A.
     *
     * @remarks
     * This is optimized for speed and simplicity and does not optimize for size
     * at all. This doesn't do any compression (all values are stored uncompressed).
     *
     * @see https://github.com/evanw/thumbhash
     * @author Evan Wallace
     * @license MIT
     */
    function rt(t, e, n) {
        const r = t * 4 + 1,
            s = 6 + e * (5 + r),
            c = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, t >> 8, t & 255, 0, 0, e >> 8, e & 255, 8, 6, 0, 0, 0, 0, 0, 0, 0, s >>> 24, s >> 16 & 255, s >> 8 & 255, s & 255, 73, 68, 65, 84, 120, 1],
            u = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188];
        let o = 1,
            a = 0;
        for (let d = 0, f = 0, l = r - 1; d < e; d++, l += r - 1)
            for (c.push(d + 1 < e ? 0 : 1, r & 255, r >> 8, ~r & 255, r >> 8 ^ 255, 0), a = (a + o) % 65521; f < l; f++) {
                const _ = n[f] & 255;
                c.push(_), o = (o + _) % 65521, a = (a + o) % 65521
            }
        c.push(a >> 8, a & 255, o >> 8, o & 255, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
        for (let [d, f] of [
                [12, 29],
                [37, 41 + s]
            ]) {
            let l = -1;
            for (let _ = d; _ < f; _++) l ^= c[_], l = l >>> 4 ^ u[l & 15], l = l >>> 4 ^ u[l & 15];
            l = ~l, c[f++] = l >>> 24, c[f++] = l >> 16 & 255, c[f++] = l >> 8 & 255, c[f++] = l & 255
        }
        return `data:image/png;base64,${globalThis.btoa(String.fromCharCode(...c))}`
    }

    function gt(t) {
        const e = Ct(t),
            {
                w: n,
                h: r,
                rgba: s
            } = Lt(e);
        return rt(n, r, s)
    }

    function Ct(t) {
        return Uint8Array.from(globalThis.atob(zt(t)), e => e.charCodeAt(0))
    }

    function zt(t) {
        return t.replaceAll("-", "+").replaceAll("_", "/")
    }
    const St = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~",
        H = (t, e, n) => {
            let r = 0;
            for (; e < n;) r *= 83, r += St.indexOf(t[e++]);
            return r
        },
        nt = Math.pow,
        v = Math.PI,
        Pt = v * 2,
        ot = 3294.6,
        st = 269.025,
        Tt = t => t > 10.31475 ? nt(t / st + .052132, 2.4) : t / ot,
        X = t => ~~(t > 1227e-8 ? st * nt(t, .416666) - 13.025 : t * ot + 1),
        G = t => (t < 0 ? -1 : 1) * t * t,
        ct = t => {
            for (t += v / 2; t > v;) t -= Pt;
            const e = 1.27323954 * t - .405284735 * G(t);
            return .225 * (G(e) - e) + e
        };

    function Ot(t) {
        const e = H(t, 2, 6);
        return [e >> 16, e >> 8 & 255, e & 255]
    }

    function Ut(t, e, n, r) {
        const s = H(t, 0, 1),
            c = s % 9 + 1,
            u = ~~(s / 9) + 1,
            o = c * u;
        let a = 0,
            b = 0,
            d = 0,
            f = 0,
            l = 0,
            _ = 0,
            m = 0,
            w = 0,
            T = 0,
            y = 0,
            g = 0,
            Z = 0,
            W = 0,
            C = 0;
        const L = (H(t, 1, 2) + 1) / 13446 * (r | 1),
            p = new Float64Array(o * 3),
            K = Ot(t);
        for (a = 0; a < 3; a++) p[a] = Tt(K[a]);
        for (a = 1; a < o; a++) C = H(t, 4 + a * 2, 6 + a * 2), p[a * 3] = G(~~(C / 361) - 9) * L, p[a * 3 + 1] = G(~~(C / 19) % 19 - 9) * L, p[a * 3 + 2] = G(C % 19 - 9) * L;
        const j = e * 4,
            z = new Uint8ClampedArray(j * n);
        for (f = 0; f < n; f++)
            for (Z = v * f / n, d = 0; d < e; d++) {
                for (l = 0, _ = 0, m = 0, W = v * d / e, b = 0; b < u; b++)
                    for (T = ct(Z * b), a = 0; a < c; a++) w = ct(W * a) * T, y = (a + b * c) * 3, l += p[y] * w, _ += p[y + 1] * w, m += p[y + 2] * w;
                g = 4 * d + f * j, z[g] = X(l), z[g + 1] = X(_), z[g + 2] = X(m), z[g + 3] = 255
            }
        return z
    }

    function vt(t, {
        ratio: e = 1,
        size: n = 32
    } = {}) {
        const {
            width: r,
            height: s
        } = pt(e, n), c = Ut(t, r, s);
        return rt(r, s, c)
    }

    function J(t = 'img[loading="lazy"]', {
        hash: e = !0,
        hashType: n = "blurhash",
        placeholderSize: r = 32,
        updateSizesOnResize: s = !1,
        onImageLoad: c
    } = {}) {
        const u = new Set;
        for (const o of et(t)) {
            const a = M(o, {
                updateOnResize: s
            });
            if (s && a && u.add(a), e) {
                const d = Gt({
                    image: o,
                    hash: typeof e == "string" ? e : void 0,
                    hashType: n,
                    size: r
                });
                d && (o.src = d)
            }
            if (!o.dataset.src && !o.dataset.srcset) {
                (typeof __UNLAZY_LOGGING__ > "u" || __UNLAZY_LOGGING__) && console.error("[unlazy] Missing `data-src` or `data-srcset` attribute", o);
                continue
            }
            if (yt || !Et) {
                lt(o), q(o), F(o);
                continue
            }
            if (o.src || (o.src = bt), o.complete && o.naturalWidth > 0) {
                N(o, c);
                continue
            }
            const b = () => N(o, c);
            o.addEventListener("load", b, {
                once: !0
            }), u.add(() => o.removeEventListener("load", b))
        }
        return () => {
            for (const o of u) o();
            u.clear()
        }
    }

    function at(t = 'img[data-sizes="auto"], source[data-sizes="auto"]') {
        for (const e of et(t)) M(e)
    }

    function N(t, e) {
        var o;
        if (((o = t.parentElement) == null ? void 0 : o.tagName.toLowerCase()) === "picture") {
            lt(t), q(t), F(t), e == null || e(t);
            return
        }
        const r = new Image,
            {
                srcset: s,
                src: c,
                sizes: u
            } = t.dataset;
        if (u === "auto") {
            const a = it(t);
            a && (r.sizes = `${a}px`)
        } else t.sizes && (r.sizes = t.sizes);
        s && (r.srcset = s), c && (r.src = c), r.addEventListener("load", () => {
            q(t), F(t), e == null || e(t)
        }, {
            once: !0
        })
    }

    function Gt({
        image: t,
        hash: e,
        hashType: n = "blurhash",
        size: r = 32,
        ratio: s
    } = {}) {
        if (!e && t) {
            const {
                blurhash: c,
                thumbhash: u
            } = t.dataset;
            e = u || c, n = u ? "thumbhash" : "blurhash"
        }
        if (e) try {
            if (n === "thumbhash") return gt(e);
            if (!s && t) {
                const c = t.width || t.offsetWidth || r,
                    u = t.height || t.offsetHeight || r;
                s = c / u
            }
            return vt(e, {
                ratio: s,
                size: r
            })
        } catch (c) {
            (typeof __UNLAZY_LOGGING__ > "u" || __UNLAZY_LOGGING__) && console.error(`Error generating ${n} placeholder:`, c)
        }
    }
    const B = new WeakMap;

    function M(t, e) {
        var r;
        if (t.dataset.sizes !== "auto") return;
        const n = it(t);
        if (n && (t.sizes = `${n}px`), ((r = t.parentElement) == null ? void 0 : r.tagName.toLowerCase()) === "picture" && !(e != null && e.skipChildren) && [...t.parentElement.getElementsByTagName("source")].forEach(s => M(s, {
                skipChildren: !0
            })), e != null && e.updateOnResize) {
            if (!B.has(t)) {
                const s = ht(() => M(t), 500),
                    c = new ResizeObserver(s);
                B.set(t, c), c.observe(t)
            }
            return () => {
                const s = B.get(t);
                s && (s.disconnect(), B.delete(t))
            }
        }
    }

    function F(t) {
        t.dataset.src && (t.src = t.dataset.src, t.removeAttribute("data-src"))
    }

    function q(t) {
        t.dataset.srcset && (t.srcset = t.dataset.srcset, t.removeAttribute("data-srcset"))
    }

    function lt(t) {
        const e = t.parentElement;
        (e == null ? void 0 : e.tagName.toLowerCase()) === "picture" && ([...e.querySelectorAll("source[data-srcset]")].forEach(q), [...e.querySelectorAll("source[data-src]")].forEach(F))
    }

    function it(t) {
        var e, n;
        return t instanceof HTMLSourceElement ? (n = (e = t.parentElement) == null ? void 0 : e.getElementsByTagName("img")[0]) == null ? void 0 : n.offsetWidth : t.offsetWidth
    }
    const mt = Object.freeze({
        autoSizes: at,
        lazyLoad: J,
        loadImage: N
    });
    return (ut = document.currentScript) != null && ut.hasAttribute("init") && J(), P.autoSizes = at, P.default = mt, P.lazyLoad = J, P.loadImage = N, Object.defineProperties(P, {
        __esModule: {
            value: !0
        },
        [Symbol.toStringTag]: {
            value: "Module"
        }
    }), P
}({});