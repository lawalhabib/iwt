import {
    a as ie,
    b as Re,
    c as Ku
} from "./chunk-EQDQRRRY.js";

function Yu(t, e) {
    return Object.is(t, e)
}
var W = null,
    sr = !1,
    ar = 1,
    ke = Symbol("SIGNAL");

function P(t) {
    let e = W;
    return W = t, e
}

function Ju() {
    return W
}
var bn = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producerNode: void 0,
    producerLastReadVersion: void 0,
    producerIndexOfThis: void 0,
    nextProducerIndex: 0,
    liveConsumerNode: void 0,
    liveConsumerIndexOfThis: void 0,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {},
    consumerMarkedDirty: () => {},
    consumerOnSignalRead: () => {}
};

function lr(t) {
    if (sr) throw new Error("");
    if (W === null) return;
    W.consumerOnSignalRead(t);
    let e = W.nextProducerIndex++;
    if (fr(W), e < W.producerNode.length && W.producerNode[e] !== t && In(W)) {
        let n = W.producerNode[e];
        dr(n, W.producerIndexOfThis[e])
    }
    W.producerNode[e] !== t && (W.producerNode[e] = t, W.producerIndexOfThis[e] = In(W) ? nl(t, W, e) : 0), W.producerLastReadVersion[e] = t.version
}

function Rp() {
    ar++
}

function Xu(t) {
    if (!(In(t) && !t.dirty) && !(!t.dirty && t.lastCleanEpoch === ar)) {
        if (!t.producerMustRecompute(t) && !yi(t)) {
            t.dirty = !1, t.lastCleanEpoch = ar;
            return
        }
        t.producerRecomputeValue(t), t.dirty = !1, t.lastCleanEpoch = ar
    }
}

function el(t) {
    if (t.liveConsumerNode === void 0) return;
    let e = sr;
    sr = !0;
    try {
        for (let n of t.liveConsumerNode) n.dirty || kp(n)
    } finally {
        sr = e
    }
}

function tl() {
    return W ? .consumerAllowSignalWrites !== !1
}

function kp(t) {
    t.dirty = !0, el(t), t.consumerMarkedDirty ? .(t)
}

function cr(t) {
    return t && (t.nextProducerIndex = 0), P(t)
}

function mi(t, e) {
    if (P(e), !(!t || t.producerNode === void 0 || t.producerIndexOfThis === void 0 || t.producerLastReadVersion === void 0)) {
        if (In(t))
            for (let n = t.nextProducerIndex; n < t.producerNode.length; n++) dr(t.producerNode[n], t.producerIndexOfThis[n]);
        for (; t.producerNode.length > t.nextProducerIndex;) t.producerNode.pop(), t.producerLastReadVersion.pop(), t.producerIndexOfThis.pop()
    }
}

function yi(t) {
    fr(t);
    for (let e = 0; e < t.producerNode.length; e++) {
        let n = t.producerNode[e],
            r = t.producerLastReadVersion[e];
        if (r !== n.version || (Xu(n), r !== n.version)) return !0
    }
    return !1
}

function vi(t) {
    if (fr(t), In(t))
        for (let e = 0; e < t.producerNode.length; e++) dr(t.producerNode[e], t.producerIndexOfThis[e]);
    t.producerNode.length = t.producerLastReadVersion.length = t.producerIndexOfThis.length = 0, t.liveConsumerNode && (t.liveConsumerNode.length = t.liveConsumerIndexOfThis.length = 0)
}

function nl(t, e, n) {
    if (rl(t), t.liveConsumerNode.length === 0 && ol(t))
        for (let r = 0; r < t.producerNode.length; r++) t.producerIndexOfThis[r] = nl(t.producerNode[r], t, r);
    return t.liveConsumerIndexOfThis.push(n), t.liveConsumerNode.push(e) - 1
}

function dr(t, e) {
    if (rl(t), t.liveConsumerNode.length === 1 && ol(t))
        for (let r = 0; r < t.producerNode.length; r++) dr(t.producerNode[r], t.producerIndexOfThis[r]);
    let n = t.liveConsumerNode.length - 1;
    if (t.liveConsumerNode[e] = t.liveConsumerNode[n], t.liveConsumerIndexOfThis[e] = t.liveConsumerIndexOfThis[n], t.liveConsumerNode.length--, t.liveConsumerIndexOfThis.length--, e < t.liveConsumerNode.length) {
        let r = t.liveConsumerIndexOfThis[e],
            o = t.liveConsumerNode[e];
        fr(o), o.producerIndexOfThis[r] = e
    }
}

function In(t) {
    return t.consumerIsAlwaysLive || (t ? .liveConsumerNode ? .length ? ? 0) > 0
}

function fr(t) {
    t.producerNode ? ? = [], t.producerIndexOfThis ? ? = [], t.producerLastReadVersion ? ? = []
}

function rl(t) {
    t.liveConsumerNode ? ? = [], t.liveConsumerIndexOfThis ? ? = []
}

function ol(t) {
    return t.producerNode !== void 0
}

function il(t) {
    let e = Object.create(Lp);
    e.computation = t;
    let n = () => {
        if (Xu(e), lr(e), e.value === ur) throw e.error;
        return e.value
    };
    return n[ke] = e, n
}
var pi = Symbol("UNSET"),
    gi = Symbol("COMPUTING"),
    ur = Symbol("ERRORED"),
    Lp = Re(ie({}, bn), {
        value: pi,
        dirty: !0,
        error: null,
        equal: Yu,
        producerMustRecompute(t) {
            return t.value === pi || t.value === gi
        },
        producerRecomputeValue(t) {
            if (t.value === gi) throw new Error("Detected cycle in computations.");
            let e = t.value;
            t.value = gi;
            let n = cr(t),
                r;
            try {
                r = t.computation()
            } catch (o) {
                r = ur, t.error = o
            } finally {
                mi(t, n)
            }
            if (e !== pi && e !== ur && r !== ur && t.equal(e, r)) {
                t.value = e;
                return
            }
            t.value = r, t.version++
        }
    });

function jp() {
    throw new Error
}
var sl = jp;

function al() {
    sl()
}

function ul(t) {
    sl = t
}
var Vp = null;

function ll(t) {
    let e = Object.create(Di);
    e.value = t;
    let n = () => (lr(e), e.value);
    return n[ke] = e, n
}

function hr(t, e) {
    tl() || al(), t.equal(t.value, e) || (t.value = e, Bp(t))
}

function cl(t, e) {
    tl() || al(), hr(t, e(t.value))
}
var Di = Re(ie({}, bn), {
    equal: Yu,
    value: void 0
});

function Bp(t) {
    t.version++, Rp(), el(t), Vp ? .()
}

function I(t) {
    return typeof t == "function"
}

function Ht(t) {
    let n = t(r => {
        Error.call(r), r.stack = new Error().stack
    });
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n
}
var pr = Ht(t => function(n) {
    t(this), this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map((r,o)=>`${o+1}) ${r.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = n
});

function Cn(t, e) {
    if (t) {
        let n = t.indexOf(e);
        0 <= n && t.splice(n, 1)
    }
}
var J = class t {
    constructor(e) {
        this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
    }
    unsubscribe() {
        let e;
        if (!this.closed) {
            this.closed = !0;
            let {
                _parentage: n
            } = this;
            if (n)
                if (this._parentage = null, Array.isArray(n))
                    for (let i of n) i.remove(this);
                else n.remove(this);
            let {
                initialTeardown: r
            } = this;
            if (I(r)) try {
                r()
            } catch (i) {
                e = i instanceof pr ? i.errors : [i]
            }
            let {
                _finalizers: o
            } = this;
            if (o) {
                this._finalizers = null;
                for (let i of o) try {
                    dl(i)
                } catch (s) {
                    e = e ? ? [], s instanceof pr ? e = [...e, ...s.errors] : e.push(s)
                }
            }
            if (e) throw new pr(e)
        }
    }
    add(e) {
        var n;
        if (e && e !== this)
            if (this.closed) dl(e);
            else {
                if (e instanceof t) {
                    if (e.closed || e._hasParent(this)) return;
                    e._addParent(this)
                }(this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e)
            }
    }
    _hasParent(e) {
        let {
            _parentage: n
        } = this;
        return n === e || Array.isArray(n) && n.includes(e)
    }
    _addParent(e) {
        let {
            _parentage: n
        } = this;
        this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e
    }
    _removeParent(e) {
        let {
            _parentage: n
        } = this;
        n === e ? this._parentage = null : Array.isArray(n) && Cn(n, e)
    }
    remove(e) {
        let {
            _finalizers: n
        } = this;
        n && Cn(n, e), e instanceof t && e._removeParent(this)
    }
};
J.EMPTY = (() => {
    let t = new J;
    return t.closed = !0, t
})();
var Ei = J.EMPTY;

function gr(t) {
    return t instanceof J || t && "closed" in t && I(t.remove) && I(t.add) && I(t.unsubscribe)
}

function dl(t) {
    I(t) ? t() : t.unsubscribe()
}
var Ce = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var Ut = {
    setTimeout(t, e, ...n) {
        let {
            delegate: r
        } = Ut;
        return r ? .setTimeout ? r.setTimeout(t, e, ...n) : setTimeout(t, e, ...n)
    },
    clearTimeout(t) {
        let {
            delegate: e
        } = Ut;
        return (e ? .clearTimeout || clearTimeout)(t)
    },
    delegate: void 0
};

function mr(t) {
    Ut.setTimeout(() => {
        let {
            onUnhandledError: e
        } = Ce;
        if (e) e(t);
        else throw t
    })
}

function _n() {}
var fl = wi("C", void 0, void 0);

function hl(t) {
    return wi("E", void 0, t)
}

function pl(t) {
    return wi("N", t, void 0)
}

function wi(t, e, n) {
    return {
        kind: t,
        value: e,
        error: n
    }
}
var vt = null;

function zt(t) {
    if (Ce.useDeprecatedSynchronousErrorHandling) {
        let e = !vt;
        if (e && (vt = {
                errorThrown: !1,
                error: null
            }), t(), e) {
            let {
                errorThrown: n,
                error: r
            } = vt;
            if (vt = null, n) throw r
        }
    } else t()
}

function gl(t) {
    Ce.useDeprecatedSynchronousErrorHandling && vt && (vt.errorThrown = !0, vt.error = t)
}
var Dt = class extends J {
        constructor(e) {
            super(), this.isStopped = !1, e ? (this.destination = e, gr(e) && e.add(this)) : this.destination = Up
        }
        static create(e, n, r) {
            return new Gt(e, n, r)
        }
        next(e) {
            this.isStopped ? bi(pl(e), this) : this._next(e)
        }
        error(e) {
            this.isStopped ? bi(hl(e), this) : (this.isStopped = !0, this._error(e))
        }
        complete() {
            this.isStopped ? bi(fl, this) : (this.isStopped = !0, this._complete())
        }
        unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
        }
        _next(e) {
            this.destination.next(e)
        }
        _error(e) {
            try {
                this.destination.error(e)
            } finally {
                this.unsubscribe()
            }
        }
        _complete() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
    },
    $p = Function.prototype.bind;

function Ii(t, e) {
    return $p.call(t, e)
}
var Ci = class {
        constructor(e) {
            this.partialObserver = e
        }
        next(e) {
            let {
                partialObserver: n
            } = this;
            if (n.next) try {
                n.next(e)
            } catch (r) {
                yr(r)
            }
        }
        error(e) {
            let {
                partialObserver: n
            } = this;
            if (n.error) try {
                n.error(e)
            } catch (r) {
                yr(r)
            } else yr(e)
        }
        complete() {
            let {
                partialObserver: e
            } = this;
            if (e.complete) try {
                e.complete()
            } catch (n) {
                yr(n)
            }
        }
    },
    Gt = class extends Dt {
        constructor(e, n, r) {
            super();
            let o;
            if (I(e) || !e) o = {
                next: e ? ? void 0,
                error: n ? ? void 0,
                complete: r ? ? void 0
            };
            else {
                let i;
                this && Ce.useDeprecatedNextContext ? (i = Object.create(e), i.unsubscribe = () => this.unsubscribe(), o = {
                    next: e.next && Ii(e.next, i),
                    error: e.error && Ii(e.error, i),
                    complete: e.complete && Ii(e.complete, i)
                }) : o = e
            }
            this.destination = new Ci(o)
        }
    };

function yr(t) {
    Ce.useDeprecatedSynchronousErrorHandling ? gl(t) : mr(t)
}

function Hp(t) {
    throw t
}

function bi(t, e) {
    let {
        onStoppedNotification: n
    } = Ce;
    n && Ut.setTimeout(() => n(t, e))
}
var Up = {
    closed: !0,
    next: _n,
    error: Hp,
    complete: _n
};
var qt = typeof Symbol == "function" && Symbol.observable || "@@observable";

function pe(t) {
    return t
}

function _i(...t) {
    return Si(t)
}

function Si(t) {
    return t.length === 0 ? pe : t.length === 1 ? t[0] : function(n) {
        return t.reduce((r, o) => o(r), n)
    }
}
var j = (() => {
    class t {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new t;
            return r.source = this, r.operator = n, r
        }
        subscribe(n, r, o) {
            let i = Gp(n) ? n : new Gt(n, r, o);
            return zt(() => {
                let {
                    operator: s,
                    source: a
                } = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i))
            }), i
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = ml(r), new r((o, i) => {
                let s = new Gt({
                    next: a => {
                        try {
                            n(a)
                        } catch (u) {
                            i(u), s.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                this.subscribe(s)
            })
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        }[qt]() {
            return this
        }
        pipe(...n) {
            return Si(n)(this)
        }
        toPromise(n) {
            return n = ml(n), new n((r, o) => {
                let i;
                this.subscribe(s => i = s, s => o(s), () => r(i))
            })
        }
    }
    return t.create = e => new t(e), t
})();

function ml(t) {
    var e;
    return (e = t ? ? Ce.Promise) !== null && e !== void 0 ? e : Promise
}

function zp(t) {
    return t && I(t.next) && I(t.error) && I(t.complete)
}

function Gp(t) {
    return t && t instanceof Dt || zp(t) && gr(t)
}

function Mi(t) {
    return I(t ? .lift)
}

function N(t) {
    return e => {
        if (Mi(e)) return e.lift(function(n) {
            try {
                return t(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function A(t, e, n, r, o) {
    return new Ti(t, e, n, r, o)
}
var Ti = class extends Dt {
    constructor(e, n, r, o, i, s) {
        super(e), this.onFinalize = i, this.shouldUnsubscribe = s, this._next = n ? function(a) {
            try {
                n(a)
            } catch (u) {
                e.error(u)
            }
        } : super._next, this._error = o ? function(a) {
            try {
                o(a)
            } catch (u) {
                e.error(u)
            } finally {
                this.unsubscribe()
            }
        } : super._error, this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                e.error(a)
            } finally {
                this.unsubscribe()
            }
        } : super._complete
    }
    unsubscribe() {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {
                closed: n
            } = this;
            super.unsubscribe(), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this))
        }
    }
};

function Ni() {
    return N((t, e) => {
        let n = null;
        t._refCount++;
        let r = A(e, void 0, void 0, void 0, () => {
            if (!t || t._refCount <= 0 || 0 < --t._refCount) {
                n = null;
                return
            }
            let o = t._connection,
                i = n;
            n = null, o && (!i || o === i) && o.unsubscribe(), e.unsubscribe()
        });
        t.subscribe(r), r.closed || (n = t.connect())
    })
}
var xi = class extends j {
    constructor(e, n) {
        super(), this.source = e, this.subjectFactory = n, this._subject = null, this._refCount = 0, this._connection = null, Mi(e) && (this.lift = e.lift)
    }
    _subscribe(e) {
        return this.getSubject().subscribe(e)
    }
    getSubject() {
        let e = this._subject;
        return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject
    }
    _teardown() {
        this._refCount = 0;
        let {
            _connection: e
        } = this;
        this._subject = this._connection = null, e ? .unsubscribe()
    }
    connect() {
        let e = this._connection;
        if (!e) {
            e = this._connection = new J;
            let n = this.getSubject();
            e.add(this.source.subscribe(A(n, void 0, () => {
                this._teardown(), n.complete()
            }, r => {
                this._teardown(), n.error(r)
            }, () => this._teardown()))), e.closed && (this._connection = null, e = J.EMPTY)
        }
        return e
    }
    refCount() {
        return Ni()(this)
    }
};
var yl = Ht(t => function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
});
var et = (() => {
        class t extends j {
            constructor() {
                super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null
            }
            lift(n) {
                let r = new vr(this, this);
                return r.operator = n, r
            }
            _throwIfClosed() {
                if (this.closed) throw new yl
            }
            next(n) {
                zt(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.currentObservers || (this.currentObservers = Array.from(this.observers));
                        for (let r of this.currentObservers) r.next(n)
                    }
                })
            }
            error(n) {
                zt(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.hasError = this.isStopped = !0, this.thrownError = n;
                        let {
                            observers: r
                        } = this;
                        for (; r.length;) r.shift().error(n)
                    }
                })
            }
            complete() {
                zt(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.isStopped = !0;
                        let {
                            observers: n
                        } = this;
                        for (; n.length;) n.shift().complete()
                    }
                })
            }
            unsubscribe() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }
            get observed() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
            }
            _trySubscribe(n) {
                return this._throwIfClosed(), super._trySubscribe(n)
            }
            _subscribe(n) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
            }
            _innerSubscribe(n) {
                let {
                    hasError: r,
                    isStopped: o,
                    observers: i
                } = this;
                return r || o ? Ei : (this.currentObservers = null, i.push(n), new J(() => {
                    this.currentObservers = null, Cn(i, n)
                }))
            }
            _checkFinalizedStatuses(n) {
                let {
                    hasError: r,
                    thrownError: o,
                    isStopped: i
                } = this;
                r ? n.error(o) : i && n.complete()
            }
            asObservable() {
                let n = new j;
                return n.source = this, n
            }
        }
        return t.create = (e, n) => new vr(e, n), t
    })(),
    vr = class extends et {
        constructor(e, n) {
            super(), this.destination = e, this.source = n
        }
        next(e) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, e)
        }
        error(e) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, e)
        }
        complete() {
            var e, n;
            (n = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || n === void 0 || n.call(e)
        }
        _subscribe(e) {
            var n, r;
            return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e)) !== null && r !== void 0 ? r : Ei
        }
    };
var Sn = class extends et {
    constructor(e) {
        super(), this._value = e
    }
    get value() {
        return this.getValue()
    }
    _subscribe(e) {
        let n = super._subscribe(e);
        return !n.closed && e.next(this._value), n
    }
    getValue() {
        let {
            hasError: e,
            thrownError: n,
            _value: r
        } = this;
        if (e) throw n;
        return this._throwIfClosed(), r
    }
    next(e) {
        super.next(this._value = e)
    }
};
var Mn = new j(t => t.complete());

function vl(t) {
    return t && I(t.schedule)
}

function Dl(t) {
    return t[t.length - 1]
}

function Dr(t) {
    return I(Dl(t)) ? t.pop() : void 0
}

function tt(t) {
    return vl(Dl(t)) ? t.pop() : void 0
}

function wl(t, e, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        })
    }
    return new(n || (n = Promise))(function(i, s) {
        function a(c) {
            try {
                l(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            try {
                l(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            c.done ? i(c.value) : o(c.value).then(a, u)
        }
        l((r = r.apply(t, e || [])).next())
    })
}

function El(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        n = e && t[e],
        r = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && r >= t.length && (t = void 0), {
                value: t && t[r++],
                done: !t
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Et(t) {
    return this instanceof Et ? (this.v = t, this) : new Et(t)
}

function Il(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(t, e || []),
        o, i = [];
    return o = {}, a("next"), a("throw"), a("return", s), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function s(f) {
        return function(p) {
            return Promise.resolve(p).then(f, d)
        }
    }

    function a(f, p) {
        r[f] && (o[f] = function(g) {
            return new Promise(function(M, T) {
                i.push([f, g, M, T]) > 1 || u(f, g)
            })
        }, p && (o[f] = p(o[f])))
    }

    function u(f, p) {
        try {
            l(r[f](p))
        } catch (g) {
            h(i[0][3], g)
        }
    }

    function l(f) {
        f.value instanceof Et ? Promise.resolve(f.value.v).then(c, d) : h(i[0][2], f)
    }

    function c(f) {
        u("next", f)
    }

    function d(f) {
        u("throw", f)
    }

    function h(f, p) {
        f(p), i.shift(), i.length && u(i[0][0], i[0][1])
    }
}

function bl(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator],
        n;
    return e ? e.call(t) : (t = typeof El == "function" ? El(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n);

    function r(i) {
        n[i] = t[i] && function(s) {
            return new Promise(function(a, u) {
                s = t[i](s), o(a, u, s.done, s.value)
            })
        }
    }

    function o(i, s, a, u) {
        Promise.resolve(u).then(function(l) {
            i({
                value: l,
                done: a
            })
        }, s)
    }
}
var Er = t => t && typeof t.length == "number" && typeof t != "function";

function wr(t) {
    return I(t ? .then)
}

function Ir(t) {
    return I(t[qt])
}

function br(t) {
    return Symbol.asyncIterator && I(t ? .[Symbol.asyncIterator])
}

function Cr(t) {
    return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}

function qp() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var _r = qp();

function Sr(t) {
    return I(t ? .[_r])
}

function Mr(t) {
    return Il(this, arguments, function*() {
        let n = t.getReader();
        try {
            for (;;) {
                let {
                    value: r,
                    done: o
                } = yield Et(n.read());
                if (o) return yield Et(void 0);
                yield yield Et(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}

function Tr(t) {
    return I(t ? .getReader)
}

function X(t) {
    if (t instanceof j) return t;
    if (t != null) {
        if (Ir(t)) return Wp(t);
        if (Er(t)) return Qp(t);
        if (wr(t)) return Zp(t);
        if (br(t)) return Cl(t);
        if (Sr(t)) return Kp(t);
        if (Tr(t)) return Yp(t)
    }
    throw Cr(t)
}

function Wp(t) {
    return new j(e => {
        let n = t[qt]();
        if (I(n.subscribe)) return n.subscribe(e);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function Qp(t) {
    return new j(e => {
        for (let n = 0; n < t.length && !e.closed; n++) e.next(t[n]);
        e.complete()
    })
}

function Zp(t) {
    return new j(e => {
        t.then(n => {
            e.closed || (e.next(n), e.complete())
        }, n => e.error(n)).then(null, mr)
    })
}

function Kp(t) {
    return new j(e => {
        for (let n of t)
            if (e.next(n), e.closed) return;
        e.complete()
    })
}

function Cl(t) {
    return new j(e => {
        Jp(t, e).catch(n => e.error(n))
    })
}

function Yp(t) {
    return Cl(Mr(t))
}

function Jp(t, e) {
    var n, r, o, i;
    return wl(this, void 0, void 0, function*() {
        try {
            for (n = bl(t); r = yield n.next(), !r.done;) {
                let s = r.value;
                if (e.next(s), e.closed) return
            }
        } catch (s) {
            o = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (i = n.return) && (yield i.call(n))
            } finally {
                if (o) throw o.error
            }
        }
        e.complete()
    })
}

function se(t, e, n, r = 0, o = !1) {
    let i = e.schedule(function() {
        n(), o ? t.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (t.add(i), !o) return i
}

function Nr(t, e = 0) {
    return N((n, r) => {
        n.subscribe(A(r, o => se(r, t, () => r.next(o), e), () => se(r, t, () => r.complete(), e), o => se(r, t, () => r.error(o), e)))
    })
}

function xr(t, e = 0) {
    return N((n, r) => {
        r.add(t.schedule(() => n.subscribe(r), e))
    })
}

function _l(t, e) {
    return X(t).pipe(xr(e), Nr(e))
}

function Sl(t, e) {
    return X(t).pipe(xr(e), Nr(e))
}

function Ml(t, e) {
    return new j(n => {
        let r = 0;
        return e.schedule(function() {
            r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule())
        })
    })
}

function Tl(t, e) {
    return new j(n => {
        let r;
        return se(n, e, () => {
            r = t[_r](), se(n, e, () => {
                let o, i;
                try {
                    ({
                        value: o,
                        done: i
                    } = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                i ? n.complete() : n.next(o)
            }, 0, !0)
        }), () => I(r ? .return) && r.return()
    })
}

function Ar(t, e) {
    if (!t) throw new Error("Iterable cannot be null");
    return new j(n => {
        se(n, e, () => {
            let r = t[Symbol.asyncIterator]();
            se(n, e, () => {
                r.next().then(o => {
                    o.done ? n.complete() : n.next(o.value)
                })
            }, 0, !0)
        })
    })
}

function Nl(t, e) {
    return Ar(Mr(t), e)
}

function xl(t, e) {
    if (t != null) {
        if (Ir(t)) return _l(t, e);
        if (Er(t)) return Ml(t, e);
        if (wr(t)) return Sl(t, e);
        if (br(t)) return Ar(t, e);
        if (Sr(t)) return Tl(t, e);
        if (Tr(t)) return Nl(t, e)
    }
    throw Cr(t)
}

function nt(t, e) {
    return e ? xl(t, e) : X(t)
}

function Xp(...t) {
    let e = tt(t);
    return nt(t, e)
}

function eg(t, e) {
    let n = I(t) ? t : () => t,
        r = o => o.error(n());
    return new j(e ? o => e.schedule(r, 0, o) : r)
}

function tg(t) {
    return !!t && (t instanceof j || I(t.lift) && I(t.subscribe))
}
var qe = Ht(t => function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence"
});

function ng(t, e) {
    let n = typeof e == "object";
    return new Promise((r, o) => {
        let i = !1,
            s;
        t.subscribe({
            next: a => {
                s = a, i = !0
            },
            error: o,
            complete: () => {
                i ? r(s) : n ? r(e.defaultValue) : o(new qe)
            }
        })
    })
}

function Le(t, e) {
    return N((n, r) => {
        let o = 0;
        n.subscribe(A(r, i => {
            r.next(t.call(e, i, o++))
        }))
    })
}
var {
    isArray: rg
} = Array;

function og(t, e) {
    return rg(e) ? t(...e) : t(e)
}

function Or(t) {
    return Le(e => og(t, e))
}
var {
    isArray: ig
} = Array, {
    getPrototypeOf: sg,
    prototype: ag,
    keys: ug
} = Object;

function Al(t) {
    if (t.length === 1) {
        let e = t[0];
        if (ig(e)) return {
            args: e,
            keys: null
        };
        if (lg(e)) {
            let n = ug(e);
            return {
                args: n.map(r => e[r]),
                keys: n
            }
        }
    }
    return {
        args: t,
        keys: null
    }
}

function lg(t) {
    return t && typeof t == "object" && sg(t) === ag
}

function Ol(t, e) {
    return t.reduce((n, r, o) => (n[r] = e[o], n), {})
}

function cg(...t) {
    let e = tt(t),
        n = Dr(t),
        {
            args: r,
            keys: o
        } = Al(t);
    if (r.length === 0) return nt([], e);
    let i = new j(Ai(r, e, o ? s => Ol(o, s) : pe));
    return n ? i.pipe(Or(n)) : i
}

function Ai(t, e, n = pe) {
    return r => {
        Fl(e, () => {
            let {
                length: o
            } = t, i = new Array(o), s = o, a = o;
            for (let u = 0; u < o; u++) Fl(e, () => {
                let l = nt(t[u], e),
                    c = !1;
                l.subscribe(A(r, d => {
                    i[u] = d, c || (c = !0, a--), a || r.next(n(i.slice()))
                }, () => {
                    --s || r.complete()
                }))
            }, r)
        }, r)
    }
}

function Fl(t, e, n) {
    t ? se(n, t, e) : e()
}

function Pl(t, e, n, r, o, i, s, a) {
    let u = [],
        l = 0,
        c = 0,
        d = !1,
        h = () => {
            d && !u.length && !l && e.complete()
        },
        f = g => l < r ? p(g) : u.push(g),
        p = g => {
            i && e.next(g), l++;
            let M = !1;
            X(n(g, c++)).subscribe(A(e, T => {
                o ? .(T), i ? f(T) : e.next(T)
            }, () => {
                M = !0
            }, void 0, () => {
                if (M) try {
                    for (l--; u.length && l < r;) {
                        let T = u.shift();
                        s ? se(e, s, () => p(T)) : p(T)
                    }
                    h()
                } catch (T) {
                    e.error(T)
                }
            }))
        };
    return t.subscribe(A(e, f, () => {
        d = !0, h()
    })), () => {
        a ? .()
    }
}

function wt(t, e, n = 1 / 0) {
    return I(e) ? wt((r, o) => Le((i, s) => e(r, i, o, s))(X(t(r, o))), n) : (typeof e == "number" && (n = e), N((r, o) => Pl(r, o, t, n)))
}

function Oi(t = 1 / 0) {
    return wt(pe, t)
}

function Rl() {
    return Oi(1)
}

function Fr(...t) {
    return Rl()(nt(t, tt(t)))
}

function dg(t) {
    return new j(e => {
        X(t()).subscribe(e)
    })
}
var {
    isArray: fg
} = Array;

function kl(t) {
    return t.length === 1 && fg(t[0]) ? t[0] : t
}

function Tn(t, e) {
    return N((n, r) => {
        let o = 0;
        n.subscribe(A(r, i => t.call(e, i, o++) && r.next(i)))
    })
}

function Ll(t) {
    return N((e, n) => {
        let r = null,
            o = !1,
            i;
        r = e.subscribe(A(n, void 0, void 0, s => {
            i = X(t(s, Ll(t)(e))), r ? (r.unsubscribe(), r = null, i.subscribe(n)) : o = !0
        })), o && (r.unsubscribe(), r = null, i.subscribe(n))
    })
}

function jl(t, e, n, r, o) {
    return (i, s) => {
        let a = n,
            u = e,
            l = 0;
        i.subscribe(A(s, c => {
            let d = l++;
            u = a ? t(u, c, d) : (a = !0, c), r && s.next(u)
        }, o && (() => {
            a && s.next(u), s.complete()
        })))
    }
}

function Fi(...t) {
    let e = Dr(t);
    return e ? _i(Fi(...t), Or(e)) : N((n, r) => {
        Ai([n, ...kl(t)])(r)
    })
}

function hg(...t) {
    return Fi(...t)
}

function pg(t, e) {
    return I(e) ? wt(t, e, 1) : wt(t, 1)
}

function Nn(t) {
    return N((e, n) => {
        let r = !1;
        e.subscribe(A(n, o => {
            r = !0, n.next(o)
        }, () => {
            r || n.next(t), n.complete()
        }))
    })
}

function Pi(t) {
    return t <= 0 ? () => Mn : N((e, n) => {
        let r = 0;
        e.subscribe(A(n, o => {
            ++r <= t && (n.next(o), t <= r && n.complete())
        }))
    })
}

function gg(t) {
    return Le(() => t)
}

function Pr(t = mg) {
    return N((e, n) => {
        let r = !1;
        e.subscribe(A(n, o => {
            r = !0, n.next(o)
        }, () => r ? n.complete() : n.error(t())))
    })
}

function mg() {
    return new qe
}

function yg(t) {
    return N((e, n) => {
        try {
            e.subscribe(n)
        } finally {
            n.add(t)
        }
    })
}

function Ri(t, e) {
    let n = arguments.length >= 2;
    return r => r.pipe(t ? Tn((o, i) => t(o, i, r)) : pe, Pi(1), n ? Nn(e) : Pr(() => new qe))
}

function ki(t) {
    return t <= 0 ? () => Mn : N((e, n) => {
        let r = [];
        e.subscribe(A(n, o => {
            r.push(o), t < r.length && r.shift()
        }, () => {
            for (let o of r) n.next(o);
            n.complete()
        }, void 0, () => {
            r = null
        }))
    })
}

function vg(t, e) {
    let n = arguments.length >= 2;
    return r => r.pipe(t ? Tn((o, i) => t(o, i, r)) : pe, ki(1), n ? Nn(e) : Pr(() => new qe))
}

function Dg(t, e) {
    return N(jl(t, e, arguments.length >= 2, !0))
}

function Eg(...t) {
    let e = tt(t);
    return N((n, r) => {
        (e ? Fr(t, n, e) : Fr(t, n)).subscribe(r)
    })
}

function wg(t, e) {
    return N((n, r) => {
        let o = null,
            i = 0,
            s = !1,
            a = () => s && !o && r.complete();
        n.subscribe(A(r, u => {
            o ? .unsubscribe();
            let l = 0,
                c = i++;
            X(t(u, c)).subscribe(o = A(r, d => r.next(e ? e(u, d, c, l++) : d), () => {
                o = null, a()
            }))
        }, () => {
            s = !0, a()
        }))
    })
}

function Ig(t) {
    return N((e, n) => {
        X(t).subscribe(A(n, () => n.complete(), _n)), !n.closed && e.subscribe(n)
    })
}

function bg(t, e, n) {
    let r = I(t) || e || n ? {
        next: t,
        error: e,
        complete: n
    } : t;
    return r ? N((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(A(i, u => {
            var l;
            (l = r.next) === null || l === void 0 || l.call(r, u), i.next(u)
        }, () => {
            var u;
            a = !1, (u = r.complete) === null || u === void 0 || u.call(r), i.complete()
        }, u => {
            var l;
            a = !1, (l = r.error) === null || l === void 0 || l.call(r, u), i.error(u)
        }, () => {
            var u, l;
            a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)), (l = r.finalize) === null || l === void 0 || l.call(r)
        }))
    }) : pe
}
var Nc = "https://g.co/ng/security#xss",
    m = class extends Error {
        constructor(e, n) {
            super(xc(e, n)), this.code = e
        }
    };

function xc(t, e) {
    return `${`NG0${Math.abs(t)}`}${e?": "+e:""}`
}
var Ac = Symbol("InputSignalNode#UNSET"),
    Cg = Re(ie({}, Di), {
        transformFn: void 0,
        applyValueToInputSignal(t, e) {
            hr(t, e)
        }
    });

function Oc(t, e) {
    let n = Object.create(Cg);
    n.value = t, n.transformFn = e ? .transform;

    function r() {
        if (lr(n), n.value === Ac) throw new m(-950, !1);
        return n.value
    }
    return r[ke] = n, r
}

function Hn(t) {
    return {
        toString: t
    }.toString()
}
var Rr = "__parameters__";

function _g(t) {
    return function(...n) {
        if (t) {
            let r = t(...n);
            for (let o in r) this[o] = r[o]
        }
    }
}

function Fc(t, e, n) {
    return Hn(() => {
        let r = _g(e);

        function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            let s = new o(...i);
            return a.annotation = s, a;

            function a(u, l, c) {
                let d = u.hasOwnProperty(Rr) ? u[Rr] : Object.defineProperty(u, Rr, {
                    value: []
                })[Rr];
                for (; d.length <= c;) d.push(null);
                return (d[c] = d[c] || []).push(s), u
            }
        }
        return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
    })
}
var Kr = globalThis;

function V(t) {
    for (let e in t)
        if (t[e] === V) return e;
    throw Error("Could not find renamed property on target object.")
}

function Sg(t, e) {
    for (let n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
}

function oe(t) {
    if (typeof t == "string") return t;
    if (Array.isArray(t)) return "[" + t.map(oe).join(", ") + "]";
    if (t == null) return "" + t;
    if (t.overriddenName) return `${t.overriddenName}`;
    if (t.name) return `${t.name}`;
    let e = t.toString();
    if (e == null) return "" + e;
    let n = e.indexOf(`
`);
    return n === -1 ? e : e.substring(0, n)
}

function Ki(t, e) {
    return t == null || t === "" ? e === null ? "" : e : e == null || e === "" ? t : t + " " + e
}
var Mg = V({
    __forward_ref__: V
});

function Pc(t) {
    return t.__forward_ref__ = Pc, t.toString = function() {
        return oe(this())
    }, t
}

function we(t) {
    return Rc(t) ? t() : t
}

function Rc(t) {
    return typeof t == "function" && t.hasOwnProperty(Mg) && t.__forward_ref__ === Pc
}

function R(t) {
    return {
        token: t.token,
        providedIn: t.providedIn || null,
        factory: t.factory,
        value: void 0
    }
}

function kc(t) {
    return {
        providers: t.providers || [],
        imports: t.imports || []
    }
}

function Co(t) {
    return Vl(t, Lc) || Vl(t, jc)
}

function KT(t) {
    return Co(t) !== null
}

function Vl(t, e) {
    return t.hasOwnProperty(e) ? t[e] : null
}

function Tg(t) {
    let e = t && (t[Lc] || t[jc]);
    return e || null
}

function Bl(t) {
    return t && (t.hasOwnProperty($l) || t.hasOwnProperty(Ng)) ? t[$l] : null
}
var Lc = V({\
        u0275prov: V
    }),
    $l = V({\
        u0275inj: V
    }),
    jc = V({
        ngInjectableDef: V
    }),
    Ng = V({
        ngInjectorDef: V
    }),
    k = class {
        constructor(e, n) {
            this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = R({
                token: this,
                providedIn: n.providedIn || "root",
                factory: n.factory
            }))
        }
        get multi() {
            return this
        }
        toString() {
            return `InjectionToken ${this._desc}`
        }
    };

function Vc(t) {
    return t && !!t.\u0275providers
}
var xg = V({\
        u0275cmp: V
    }),
    Ag = V({\
        u0275dir: V
    }),
    Og = V({\
        u0275pipe: V
    }),
    Fg = V({\
        u0275mod: V
    }),
    Yr = V({\
        u0275fac: V
    }),
    On = V({
        __NG_ELEMENT_ID__: V
    }),
    Hl = V({
        __NG_ENV_ID__: V
    });

function Un(t) {
    return typeof t == "string" ? t : t == null ? "" : String(t)
}

function Pg(t) {
    return typeof t == "function" ? t.name || t.toString() : typeof t == "object" && t != null && typeof t.type == "function" ? t.type.name || t.type.toString() : Un(t)
}

function Rg(t, e) {
    let n = e ? `. Dependency path: ${e.join(" > ")} > ${t}` : "";
    throw new m(-200, t)
}

function sa(t, e) {
    throw new m(-201, !1)
}
var x = function(t) {
        return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
    }(x || {}),
    Yi;

function Bc() {
    return Yi
}

function ae(t) {
    let e = Yi;
    return Yi = t, e
}

function $c(t, e, n) {
    let r = Co(t);
    if (r && r.providedIn == "root") return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & x.Optional) return null;
    if (e !== void 0) return e;
    sa(t, "Injector")
}
var kg = {},
    Fn = kg,
    Ji = "__NG_DI_FLAG__",
    Jr = "ngTempTokenPath",
    Lg = "ngTokenPath",
    jg = /\n/gm,
    Vg = "\u0275",
    Ul = "__source",
    Yt;

function Bg() {
    return Yt
}

function rt(t) {
    let e = Yt;
    return Yt = t, e
}

function $g(t, e = x.Default) {
    if (Yt === void 0) throw new m(-203, !1);
    return Yt === null ? $c(t, void 0, e) : Yt.get(t, e & x.Optional ? null : void 0, e)
}

function Z(t, e = x.Default) {
    return (Bc() || $g)(we(t), e)
}

function E(t, e = x.Default) {
    return Z(t, _o(e))
}

function _o(t) {
    return typeof t > "u" || typeof t == "number" ? t : 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4)
}

function Xi(t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
        let r = we(t[n]);
        if (Array.isArray(r)) {
            if (r.length === 0) throw new m(900, !1);
            let o, i = x.Default;
            for (let s = 0; s < r.length; s++) {
                let a = r[s],
                    u = Hg(a);
                typeof u == "number" ? u === -1 ? o = a.token : i |= u : o = a
            }
            e.push(Z(o, i))
        } else e.push(Z(r))
    }
    return e
}

function Hc(t, e) {
    return t[Ji] = e, t.prototype[Ji] = e, t
}

function Hg(t) {
    return t[Ji]
}

function Ug(t, e, n, r) {
    let o = t[Jr];
    throw e[Ul] && o.unshift(e[Ul]), t.message = zg(`
` + t.message, o, n, r), t[Lg] = o, t[Jr] = null, t
}

function zg(t, e, n, r = null) {
    t = t && t.charAt(0) === `
` && t.charAt(1) == Vg ? t.slice(2) : t;
    let o = oe(e);
    if (Array.isArray(e)) o = e.map(oe).join(" -> ");
    else if (typeof e == "object") {
        let i = [];
        for (let s in e)
            if (e.hasOwnProperty(s)) {
                let a = e[s];
                i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : oe(a)))
            }
        o = `{${i.join(", ")}}`
    }
    return `${n}${r?"("+r+")":""}[${o}]: ${t.replace(jg,`
  `)}`
}
var Uc = Hc(Fc("Optional"), 8);
var zc = Hc(Fc("SkipSelf"), 4);

function _t(t, e) {
    let n = t.hasOwnProperty(Yr);
    return n ? t[Yr] : null
}

function Gg(t, e, n) {
    if (t.length !== e.length) return !1;
    for (let r = 0; r < t.length; r++) {
        let o = t[r],
            i = e[r];
        if (n && (o = n(o), i = n(i)), i !== o) return !1
    }
    return !0
}

function qg(t) {
    return t.flat(Number.POSITIVE_INFINITY)
}

function aa(t, e) {
    t.forEach(n => Array.isArray(n) ? aa(n, e) : e(n))
}

function Gc(t, e, n) {
    e >= t.length ? t.push(n) : t.splice(e, 0, n)
}

function Xr(t, e) {
    return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
}

function Wg(t, e) {
    let n = [];
    for (let r = 0; r < t; r++) n.push(e);
    return n
}

function Qg(t, e, n, r) {
    let o = t.length;
    if (o == e) t.push(n, r);
    else if (o === 1) t.push(r, t[0]), t[0] = n;
    else {
        for (o--, t.push(t[o - 1], t[o]); o > e;) {
            let i = o - 2;
            t[o] = t[i], o--
        }
        t[e] = n, t[e + 1] = r
    }
}

function So(t, e, n) {
    let r = zn(t, e);
    return r >= 0 ? t[r | 1] = n : (r = ~r, Qg(t, r, e, n)), r
}

function Li(t, e) {
    let n = zn(t, e);
    if (n >= 0) return t[n | 1]
}

function zn(t, e) {
    return Zg(t, e, 1)
}

function Zg(t, e, n) {
    let r = 0,
        o = t.length >> n;
    for (; o !== r;) {
        let i = r + (o - r >> 1),
            s = t[i << n];
        if (e === s) return i << n;
        s > e ? o = i : r = i + 1
    }
    return ~(o << n)
}
var Xt = {},
    re = [],
    Pn = new k(""),
    qc = new k("", -1),
    Wc = new k(""),
    eo = class {
        get(e, n = Fn) {
            if (n === Fn) {
                let r = new Error(`NullInjectorError: No provider for ${oe(e)}!`);
                throw r.name = "NullInjectorError", r
            }
            return n
        }
    },
    Qc = function(t) {
        return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t
    }(Qc || {}),
    St = function(t) {
        return t[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
    }(St || {}),
    it = function(t) {
        return t[t.None = 0] = "None", t[t.SignalBased = 1] = "SignalBased", t[t.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", t
    }(it || {});

function Kg(t, e, n) {
    let r = t.length;
    for (;;) {
        let o = t.indexOf(e, n);
        if (o === -1) return o;
        if (o === 0 || t.charCodeAt(o - 1) <= 32) {
            let i = e.length;
            if (o + i === r || t.charCodeAt(o + i) <= 32) return o
        }
        n = o + 1
    }
}

function es(t, e, n) {
    let r = 0;
    for (; r < n.length;) {
        let o = n[r];
        if (typeof o == "number") {
            if (o !== 0) break;
            r++;
            let i = n[r++],
                s = n[r++],
                a = n[r++];
            t.setAttribute(e, s, a, i)
        } else {
            let i = o,
                s = n[++r];
            Yg(i) ? t.setProperty(e, i, s) : t.setAttribute(e, i, s), r++
        }
    }
    return r
}

function Zc(t) {
    return t === 3 || t === 4 || t === 6
}

function Yg(t) {
    return t.charCodeAt(0) === 64
}

function Rn(t, e) {
    if (!(e === null || e.length === 0))
        if (t === null || t.length === 0) t = e.slice();
        else {
            let n = -1;
            for (let r = 0; r < e.length; r++) {
                let o = e[r];
                typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? zl(t, n, o, null, e[++r]) : zl(t, n, o, null, null))
            }
        }
    return t
}

function zl(t, e, n, r, o) {
    let i = 0,
        s = t.length;
    if (e === -1) s = -1;
    else
        for (; i < t.length;) {
            let a = t[i++];
            if (typeof a == "number") {
                if (a === e) {
                    s = -1;
                    break
                } else if (a > e) {
                    s = i - 1;
                    break
                }
            }
        }
    for (; i < t.length;) {
        let a = t[i];
        if (typeof a == "number") break;
        if (a === n) {
            if (r === null) {
                o !== null && (t[i + 1] = o);
                return
            } else if (r === t[i + 1]) {
                t[i + 2] = o;
                return
            }
        }
        i++, r !== null && i++, o !== null && i++
    }
    s !== -1 && (t.splice(s, 0, e), i = s + 1), t.splice(i++, 0, n), r !== null && t.splice(i++, 0, r), o !== null && t.splice(i++, 0, o)
}
var Kc = "ng-template";

function Jg(t, e, n, r) {
    let o = 0;
    if (r) {
        for (; o < e.length && typeof e[o] == "string"; o += 2)
            if (e[o] === "class" && Kg(e[o + 1].toLowerCase(), n, 0) !== -1) return !0
    } else if (ua(t)) return !1;
    if (o = e.indexOf(1, o), o > -1) {
        let i;
        for (; ++o < e.length && typeof(i = e[o]) == "string";)
            if (i.toLowerCase() === n) return !0
    }
    return !1
}

function ua(t) {
    return t.type === 4 && t.value !== Kc
}

function Xg(t, e, n) {
    let r = t.type === 4 && !n ? Kc : t.value;
    return e === r
}

function em(t, e, n) {
    let r = 4,
        o = t.attrs,
        i = o !== null ? rm(o) : 0,
        s = !1;
    for (let a = 0; a < e.length; a++) {
        let u = e[a];
        if (typeof u == "number") {
            if (!s && !_e(r) && !_e(u)) return !1;
            if (s && _e(u)) continue;
            s = !1, r = u | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1, u !== "" && !Xg(t, u, n) || u === "" && e.length === 1) {
                    if (_e(r)) return !1;
                    s = !0
                }
            } else if (r & 8) {
            if (o === null || !Jg(t, o, u, n)) {
                if (_e(r)) return !1;
                s = !0
            }
        } else {
            let l = e[++a],
                c = tm(u, o, ua(t), n);
            if (c === -1) {
                if (_e(r)) return !1;
                s = !0;
                continue
            }
            if (l !== "") {
                let d;
                if (c > i ? d = "" : d = o[c + 1].toLowerCase(), r & 2 && l !== d) {
                    if (_e(r)) return !1;
                    s = !0
                }
            }
        }
    }
    return _e(r) || s
}

function _e(t) {
    return (t & 1) === 0
}

function tm(t, e, n, r) {
    if (e === null) return -1;
    let o = 0;
    if (r || !n) {
        let i = !1;
        for (; o < e.length;) {
            let s = e[o];
            if (s === t) return o;
            if (s === 3 || s === 6) i = !0;
            else if (s === 1 || s === 2) {
                let a = e[++o];
                for (; typeof a == "string";) a = e[++o];
                continue
            } else {
                if (s === 4) break;
                if (s === 0) {
                    o += 4;
                    continue
                }
            }
            o += i ? 1 : 2
        }
        return -1
    } else return om(e, t)
}

function Yc(t, e, n = !1) {
    for (let r = 0; r < e.length; r++)
        if (em(t, e[r], n)) return !0;
    return !1
}

function nm(t) {
    let e = t.attrs;
    if (e != null) {
        let n = e.indexOf(5);
        if (!(n & 1)) return e[n + 1]
    }
    return null
}

function rm(t) {
    for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (Zc(n)) return e
    }
    return t.length
}

function om(t, e) {
    let n = t.indexOf(4);
    if (n > -1)
        for (n++; n < t.length;) {
            let r = t[n];
            if (typeof r == "number") return -1;
            if (r === e) return n;
            n++
        }
    return -1
}

function im(t, e) {
    e: for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (t.length === r.length) {
            for (let o = 0; o < t.length; o++)
                if (t[o] !== r[o]) continue e;
            return !0
        }
    }
    return !1
}

function Gl(t, e) {
    return t ? ":not(" + e.trim() + ")" : e
}

function sm(t) {
    let e = t[0],
        n = 1,
        r = 2,
        o = "",
        i = !1;
    for (; n < t.length;) {
        let s = t[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = t[++n];
                o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else r & 8 ? o += "." + s : r & 4 && (o += " " + s);
        else o !== "" && !_e(s) && (e += Gl(i, o), o = ""), r = s, i = i || !_e(r);
        n++
    }
    return o !== "" && (e += Gl(i, o)), e
}

function am(t) {
    return t.map(sm).join(",")
}

function um(t) {
    let e = [],
        n = [],
        r = 1,
        o = 2;
    for (; r < t.length;) {
        let i = t[r];
        if (typeof i == "string") o === 2 ? i !== "" && e.push(i, t[++r]) : o === 8 && n.push(i);
        else {
            if (!_e(o)) break;
            o = i
        }
        r++
    }
    return {
        attrs: e,
        classes: n
    }
}

function YT(t) {
    return Hn(() => {
        let e = nd(t),
            n = Re(ie({}, e), {
                decls: t.decls,
                vars: t.vars,
                template: t.template,
                consts: t.consts || null,
                ngContentSelectors: t.ngContentSelectors,
                onPush: t.changeDetection === Qc.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                dependencies: e.standalone && t.dependencies || null,
                getStandaloneInjector: null,
                signals: t.signals ? ? !1,
                data: t.data || {},
                encapsulation: t.encapsulation || St.Emulated,
                styles: t.styles || re,
                _: null,
                schemas: t.schemas || null,
                tView: null,
                id: ""
            });
        rd(n);
        let r = t.dependencies;
        return n.directiveDefs = Wl(r, !1), n.pipeDefs = Wl(r, !0), n.id = hm(n), n
    })
}

function lm(t) {
    return st(t) || Xc(t)
}

function cm(t) {
    return t !== null
}

function Jc(t) {
    return Hn(() => ({
        type: t.type,
        bootstrap: t.bootstrap || re,
        declarations: t.declarations || re,
        imports: t.imports || re,
        exports: t.exports || re,
        transitiveCompileScopes: null,
        schemas: t.schemas || null,
        id: t.id || null
    }))
}

function ql(t, e) {
    if (t == null) return Xt;
    let n = {};
    for (let r in t)
        if (t.hasOwnProperty(r)) {
            let o = t[r],
                i, s, a = it.None;
            Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ? ? i) : (i = o, s = o), e ? (n[i] = a !== it.None ? [r, a] : r, e[i] = s) : n[i] = r
        }
    return n
}

function fn(t) {
    return Hn(() => {
        let e = nd(t);
        return rd(e), e
    })
}

function dm(t) {
    return {
        type: t.type,
        name: t.name,
        factory: null,
        pure: t.pure !== !1,
        standalone: t.standalone === !0,
        onDestroy: t.type.prototype.ngOnDestroy || null
    }
}

function st(t) {
    return t[xg] || null
}

function Xc(t) {
    return t[Ag] || null
}

function ed(t) {
    return t[Og] || null
}

function fm(t) {
    let e = st(t) || Xc(t) || ed(t);
    return e !== null ? e.standalone : !1
}

function td(t, e) {
    let n = t[Fg] || null;
    if (!n && e === !0) throw new Error(`Type ${oe(t)} does not have '\u0275mod' property.`);
    return n
}

function nd(t) {
    let e = {};
    return {
        type: t.type,
        providersResolver: null,
        factory: null,
        hostBindings: t.hostBindings || null,
        hostVars: t.hostVars || 0,
        hostAttrs: t.hostAttrs || null,
        contentQueries: t.contentQueries || null,
        declaredInputs: e,
        inputTransforms: null,
        inputConfig: t.inputs || Xt,
        exportAs: t.exportAs || null,
        standalone: t.standalone === !0,
        signals: t.signals === !0,
        selectors: t.selectors || re,
        viewQuery: t.viewQuery || null,
        features: t.features || null,
        setInput: null,
        findHostDirectiveDefs: null,
        hostDirectives: null,
        inputs: ql(t.inputs, e),
        outputs: ql(t.outputs),
        debugInfo: null
    }
}

function rd(t) {
    t.features ? .forEach(e => e(t))
}

function Wl(t, e) {
    if (!t) return null;
    let n = e ? ed : lm;
    return () => (typeof t == "function" ? t() : t).map(r => n(r)).filter(cm)
}

function hm(t) {
    let e = 0,
        n = [t.selectors, t.ngContentSelectors, t.hostVars, t.hostAttrs, t.consts, t.vars, t.decls, t.encapsulation, t.standalone, t.signals, t.exportAs, JSON.stringify(t.inputs), JSON.stringify(t.outputs), Object.getOwnPropertyNames(t.type.prototype), !!t.contentQueries, !!t.viewQuery].join("|");
    for (let o of n) e = Math.imul(31, e) + o.charCodeAt(0) << 0;
    return e += 2147483648, "c" + e
}

function pm(t) {
    return {\
        u0275providers: t
    }
}

function gm(...t) {
    return {\
        u0275providers: od(!0, t),
        \u0275fromNgModule: !0
    }
}

function od(t, ...e) {
    let n = [],
        r = new Set,
        o, i = s => {
            n.push(s)
        };
    return aa(e, s => {
        let a = s;
        ts(a, i, [], r) && (o || = [], o.push(a))
    }), o !== void 0 && id(o, i), n
}

function id(t, e) {
    for (let n = 0; n < t.length; n++) {
        let {
            ngModule: r,
            providers: o
        } = t[n];
        la(o, i => {
            e(i, r)
        })
    }
}

function ts(t, e, n, r) {
    if (t = we(t), !t) return !1;
    let o = null,
        i = Bl(t),
        s = !i && st(t);
    if (!i && !s) {
        let u = t.ngModule;
        if (i = Bl(u), i) o = u;
        else return !1
    } else {
        if (s && !s.standalone) return !1;
        o = t
    }
    let a = r.has(o);
    if (s) {
        if (a) return !1;
        if (r.add(o), s.dependencies) {
            let u = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let l of u) ts(l, e, n, r)
        }
    } else if (i) {
        if (i.imports != null && !a) {
            r.add(o);
            let l;
            try {
                aa(i.imports, c => {
                    ts(c, e, n, r) && (l || = [], l.push(c))
                })
            } finally {}
            l !== void 0 && id(l, e)
        }
        if (!a) {
            let l = _t(o) || (() => new o);
            e({
                provide: o,
                useFactory: l,
                deps: re
            }, o), e({
                provide: Wc,
                useValue: o,
                multi: !0
            }, o), e({
                provide: Pn,
                useValue: () => Z(o),
                multi: !0
            }, o)
        }
        let u = i.providers;
        if (u != null && !a) {
            let l = t;
            la(u, c => {
                e(c, l)
            })
        }
    } else return !1;
    return o !== t && t.providers !== void 0
}

function la(t, e) {
    for (let n of t) Vc(n) && (n = n.\u0275providers), Array.isArray(n) ? la(n, e) : e(n)
}
var mm = V({
    provide: String,
    useValue: V
});

function sd(t) {
    return t !== null && typeof t == "object" && mm in t
}

function ym(t) {
    return !!(t && t.useExisting)
}

function vm(t) {
    return !!(t && t.useFactory)
}

function ns(t) {
    return typeof t == "function"
}
var ad = new k(""),
    zr = {},
    Dm = {},
    ji;

function ca() {
    return ji === void 0 && (ji = new eo), ji
}
var at = class {},
    kn = class extends at {
        get destroyed() {
            return this._destroyed
        }
        constructor(e, n, r, o) {
            super(), this.parent = n, this.source = r, this.scopes = o, this.records = new Map, this._ngOnDestroyHooks = new Set, this._onDestroyHooks = [], this._destroyed = !1, os(e, s => this.processProvider(s)), this.records.set(qc, Wt(void 0, this)), o.has("environment") && this.records.set(at, Wt(void 0, this));
            let i = this.records.get(ad);
            i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(Wc, re, x.Self))
        }
        destroy() {
            this.assertNotDestroyed(), this._destroyed = !0;
            let e = P(null);
            try {
                for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
                let n = this._onDestroyHooks;
                this._onDestroyHooks = [];
                for (let r of n) r()
            } finally {
                this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), P(e)
            }
        }
        onDestroy(e) {
            return this.assertNotDestroyed(), this._onDestroyHooks.push(e), () => this.removeOnDestroy(e)
        }
        runInContext(e) {
            this.assertNotDestroyed();
            let n = rt(this),
                r = ae(void 0),
                o;
            try {
                return e()
            } finally {
                rt(n), ae(r)
            }
        }
        get(e, n = Fn, r = x.Default) {
            if (this.assertNotDestroyed(), e.hasOwnProperty(Hl)) return e[Hl](this);
            r = _o(r);
            let o, i = rt(this),
                s = ae(void 0);
            try {
                if (!(r & x.SkipSelf)) {
                    let u = this.records.get(e);
                    if (u === void 0) {
                        let l = _m(e) && Co(e);
                        l && this.injectableDefInScope(l) ? u = Wt(rs(e), zr) : u = null, this.records.set(e, u)
                    }
                    if (u != null) return this.hydrate(e, u)
                }
                let a = r & x.Self ? ca() : this.parent;
                return n = r & x.Optional && n === Fn ? null : n, a.get(e, n)
            } catch (a) {
                if (a.name === "NullInjectorError") {
                    if ((a[Jr] = a[Jr] || []).unshift(oe(e)), i) throw a;
                    return Ug(a, e, "R3InjectorError", this.source)
                } else throw a
            } finally {
                ae(s), rt(i)
            }
        }
        resolveInjectorInitializers() {
            let e = P(null),
                n = rt(this),
                r = ae(void 0),
                o;
            try {
                let i = this.get(Pn, re, x.Self);
                for (let s of i) s()
            } finally {
                rt(n), ae(r), P(e)
            }
        }
        toString() {
            let e = [],
                n = this.records;
            for (let r of n.keys()) e.push(oe(r));
            return `R3Injector[${e.join(", ")}]`
        }
        assertNotDestroyed() {
            if (this._destroyed) throw new m(205, !1)
        }
        processProvider(e) {
            e = we(e);
            let n = ns(e) ? e : we(e && e.provide),
                r = wm(e);
            if (!ns(e) && e.multi === !0) {
                let o = this.records.get(n);
                o || (o = Wt(void 0, zr, !0), o.factory = () => Xi(o.multi), this.records.set(n, o)), n = e, o.multi.push(e)
            }
            this.records.set(n, r)
        }
        hydrate(e, n) {
            let r = P(null);
            try {
                return n.value === zr && (n.value = Dm, n.value = n.factory()), typeof n.value == "object" && n.value && Cm(n.value) && this._ngOnDestroyHooks.add(n.value), n.value
            } finally {
                P(r)
            }
        }
        injectableDefInScope(e) {
            if (!e.providedIn) return !1;
            let n = we(e.providedIn);
            return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
        }
        removeOnDestroy(e) {
            let n = this._onDestroyHooks.indexOf(e);
            n !== -1 && this._onDestroyHooks.splice(n, 1)
        }
    };

function rs(t) {
    let e = Co(t),
        n = e !== null ? e.factory : _t(t);
    if (n !== null) return n;
    if (t instanceof k) throw new m(204, !1);
    if (t instanceof Function) return Em(t);
    throw new m(204, !1)
}

function Em(t) {
    if (t.length > 0) throw new m(204, !1);
    let n = Tg(t);
    return n !== null ? () => n.factory(t) : () => new t
}

function wm(t) {
    if (sd(t)) return Wt(void 0, t.useValue); {
        let e = Im(t);
        return Wt(e, zr)
    }
}

function Im(t, e, n) {
    let r;
    if (ns(t)) {
        let o = we(t);
        return _t(o) || rs(o)
    } else if (sd(t)) r = () => we(t.useValue);
    else if (vm(t)) r = () => t.useFactory(...Xi(t.deps || []));
    else if (ym(t)) r = () => Z(we(t.useExisting));
    else {
        let o = we(t && (t.useClass || t.provide));
        if (bm(t)) r = () => new o(...Xi(t.deps));
        else return _t(o) || rs(o)
    }
    return r
}

function Wt(t, e, n = !1) {
    return {
        factory: t,
        value: e,
        multi: n ? [] : void 0
    }
}

function bm(t) {
    return !!t.deps
}

function Cm(t) {
    return t !== null && typeof t == "object" && typeof t.ngOnDestroy == "function"
}

function _m(t) {
    return typeof t == "function" || typeof t == "object" && t instanceof k
}

function os(t, e) {
    for (let n of t) Array.isArray(n) ? os(n, e) : n && Vc(n) ? os(n.\u0275providers, e) : e(n)
}

function JT(t, e) {
    t instanceof kn && t.assertNotDestroyed();
    let n, r = rt(t),
        o = ae(void 0);
    try {
        return e()
    } finally {
        rt(r), ae(o)
    }
}

function ud() {
    return Bc() !== void 0 || Bg() != null
}

function Sm(t) {
    if (!ud()) throw new m(-203, !1)
}

function Mm(t) {
    return typeof t == "function"
}
var me = 0,
    C = 1,
    w = 2,
    ee = 3,
    Me = 4,
    ce = 5,
    Ne = 6,
    to = 7,
    xe = 8,
    en = 9,
    Be = 10,
    B = 11,
    Ln = 12,
    Ql = 13,
    hn = 14,
    le = 15,
    Mt = 16,
    Qt = 17,
    We = 18,
    Mo = 19,
    ld = 20,
    ot = 21,
    Vi = 22,
    Ie = 23,
    G = 25,
    cd = 1,
    jn = 6,
    Qe = 7,
    no = 8,
    tn = 9,
    ue = 10,
    ro = function(t) {
        return t[t.None = 0] = "None", t[t.HasTransplantedViews = 2] = "HasTransplantedViews", t
    }(ro || {});

function Te(t) {
    return Array.isArray(t) && typeof t[cd] == "object"
}

function He(t) {
    return Array.isArray(t) && t[cd] === !0
}

function da(t) {
    return (t.flags & 4) !== 0
}

function Gn(t) {
    return t.componentOffset > -1
}

function To(t) {
    return (t.flags & 1) === 1
}

function Tt(t) {
    return !!t.template
}

function oo(t) {
    return (t[w] & 512) !== 0
}
var is = class {
    constructor(e, n, r) {
        this.previousValue = e, this.currentValue = n, this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
};

function dd(t, e, n, r) {
    e !== null ? e.applyValueToInputSignal(e, r) : t[n] = r
}

function fa() {
    return fd
}

function fd(t) {
    return t.type.prototype.ngOnChanges && (t.setInput = Nm), Tm
}
fa.ngInherit = !0;

function Tm() {
    let t = pd(this),
        e = t ? .current;
    if (e) {
        let n = t.previous;
        if (n === Xt) t.previous = e;
        else
            for (let r in e) n[r] = e[r];
        t.current = null, this.ngOnChanges(e)
    }
}

function Nm(t, e, n, r, o) {
    let i = this.declaredInputs[r],
        s = pd(t) || xm(t, {
            previous: Xt,
            current: null
        }),
        a = s.current || (s.current = {}),
        u = s.previous,
        l = u[i];
    a[i] = new is(l && l.currentValue, n, u === Xt), dd(t, e, o, n)
}
var hd = "__ngSimpleChanges__";

function pd(t) {
    return t[hd] || null
}

function xm(t, e) {
    return t[hd] = e
}
var Zl = null;
var je = function(t, e, n) {
        Zl ? .(t, e, n)
    },
    gd = "svg",
    Am = "math";

function Ae(t) {
    for (; Array.isArray(t);) t = t[me];
    return t
}

function md(t, e) {
    return Ae(e[t])
}

function ye(t, e) {
    return Ae(e[t.index])
}

function yd(t, e) {
    return t.data[e]
}

function vd(t, e) {
    return t[e]
}

function dt(t, e) {
    let n = e[t];
    return Te(n) ? n : n[me]
}

function Om(t) {
    return (t[w] & 4) === 4
}

function ha(t) {
    return (t[w] & 128) === 128
}

function Fm(t) {
    return He(t[ee])
}

function nn(t, e) {
    return e == null ? null : t[e]
}

function Dd(t) {
    t[Qt] = 0
}

function Ed(t) {
    t[w] & 1024 || (t[w] |= 1024, ha(t) && xo(t))
}

function Pm(t, e) {
    for (; t > 0;) e = e[hn], t--;
    return e
}

function No(t) {
    return !!(t[w] & 9216 || t[Ie] ? .dirty)
}

function ss(t) {
    t[Be].changeDetectionScheduler ? .notify(8), t[w] & 64 && (t[w] |= 1024), No(t) && xo(t)
}

function xo(t) {
    t[Be].changeDetectionScheduler ? .notify(0);
    let e = Nt(t);
    for (; e !== null && !(e[w] & 8192 || (e[w] |= 8192, !ha(e)));) e = Nt(e)
}

function wd(t, e) {
    if ((t[w] & 256) === 256) throw new m(911, !1);
    t[ot] === null && (t[ot] = []), t[ot].push(e)
}

function Rm(t, e) {
    if (t[ot] === null) return;
    let n = t[ot].indexOf(e);
    n !== -1 && t[ot].splice(n, 1)
}

function Nt(t) {
    let e = t[ee];
    return He(e) ? e[ee] : e
}
var _ = {
    lFrame: xd(null),
    bindingsEnabled: !0,
    skipHydrationRootTNode: null
};
var Id = !1;

function km() {
    return _.lFrame.elementDepthCount
}

function Lm() {
    _.lFrame.elementDepthCount++
}

function jm() {
    _.lFrame.elementDepthCount--
}

function bd() {
    return _.bindingsEnabled
}

function pn() {
    return _.skipHydrationRootTNode !== null
}

function Vm(t) {
    return _.skipHydrationRootTNode === t
}

function Bm(t) {
    _.skipHydrationRootTNode = t
}

function $m() {
    _.skipHydrationRootTNode = null
}

function S() {
    return _.lFrame.lView
}

function q() {
    return _.lFrame.tView
}

function XT(t) {
    return _.lFrame.contextLView = t, t[xe]
}

function eN(t) {
    return _.lFrame.contextLView = null, t
}

function ne() {
    let t = Cd();
    for (; t !== null && t.type === 64;) t = t.parent;
    return t
}

function Cd() {
    return _.lFrame.currentTNode
}

function Hm() {
    let t = _.lFrame,
        e = t.currentTNode;
    return t.isParent ? e : e.parent
}

function Pt(t, e) {
    let n = _.lFrame;
    n.currentTNode = t, n.isParent = e
}

function pa() {
    return _.lFrame.isParent
}

function ga() {
    _.lFrame.isParent = !1
}

function Um() {
    return _.lFrame.contextLView
}

function _d() {
    return Id
}

function Kl(t) {
    Id = t
}

function gn() {
    let t = _.lFrame,
        e = t.bindingRootIndex;
    return e === -1 && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
}

function zm(t) {
    return _.lFrame.bindingIndex = t
}

function Ao() {
    return _.lFrame.bindingIndex++
}

function Sd(t) {
    let e = _.lFrame,
        n = e.bindingIndex;
    return e.bindingIndex = e.bindingIndex + t, n
}

function Gm() {
    return _.lFrame.inI18n
}

function qm(t, e) {
    let n = _.lFrame;
    n.bindingIndex = n.bindingRootIndex = t, as(e)
}

function Wm() {
    return _.lFrame.currentDirectiveIndex
}

function as(t) {
    _.lFrame.currentDirectiveIndex = t
}

function Qm(t) {
    let e = _.lFrame.currentDirectiveIndex;
    return e === -1 ? null : t[e]
}

function Md() {
    return _.lFrame.currentQueryIndex
}

function ma(t) {
    _.lFrame.currentQueryIndex = t
}

function Zm(t) {
    let e = t[C];
    return e.type === 2 ? e.declTNode : e.type === 1 ? t[ce] : null
}

function Td(t, e, n) {
    if (n & x.SkipSelf) {
        let o = e,
            i = t;
        for (; o = o.parent, o === null && !(n & x.Host);)
            if (o = Zm(i), o === null || (i = i[hn], o.type & 10)) break;
        if (o === null) return !1;
        e = o, t = i
    }
    let r = _.lFrame = Nd();
    return r.currentTNode = e, r.lView = t, !0
}

function ya(t) {
    let e = Nd(),
        n = t[C];
    _.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1
}

function Nd() {
    let t = _.lFrame,
        e = t === null ? null : t.child;
    return e === null ? xd(t) : e
}

function xd(t) {
    let e = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: t,
        child: null,
        inI18n: !1
    };
    return t !== null && (t.child = e), e
}

function Ad() {
    let t = _.lFrame;
    return _.lFrame = t.parent, t.currentTNode = null, t.lView = null, t
}
var Od = Ad;

function va() {
    let t = Ad();
    t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
}

function Km(t) {
    return (_.lFrame.contextLView = Pm(t, _.lFrame.contextLView))[xe]
}

function Rt() {
    return _.lFrame.selectedIndex
}

function xt(t) {
    _.lFrame.selectedIndex = t
}

function Oo() {
    let t = _.lFrame;
    return yd(t.tView, t.selectedIndex)
}

function tN() {
    _.lFrame.currentNamespace = gd
}

function Fd() {
    return _.lFrame.currentNamespace
}
var Pd = !0;

function Fo() {
    return Pd
}

function ft(t) {
    Pd = t
}

function Ym(t, e, n) {
    let {
        ngOnChanges: r,
        ngOnInit: o,
        ngDoCheck: i
    } = e.type.prototype;
    if (r) {
        let s = fd(e);
        (n.preOrderHooks ? ? = []).push(t, s), (n.preOrderCheckHooks ? ? = []).push(t, s)
    }
    o && (n.preOrderHooks ? ? = []).push(0 - t, o), i && ((n.preOrderHooks ? ? = []).push(t, i), (n.preOrderCheckHooks ? ? = []).push(t, i))
}

function Po(t, e) {
    for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
        let i = t.data[n].type.prototype,
            {
                ngAfterContentInit: s,
                ngAfterContentChecked: a,
                ngAfterViewInit: u,
                ngAfterViewChecked: l,
                ngOnDestroy: c
            } = i;
        s && (t.contentHooks ? ? = []).push(-n, s), a && ((t.contentHooks ? ? = []).push(n, a), (t.contentCheckHooks ? ? = []).push(n, a)), u && (t.viewHooks ? ? = []).push(-n, u), l && ((t.viewHooks ? ? = []).push(n, l), (t.viewCheckHooks ? ? = []).push(n, l)), c != null && (t.destroyHooks ? ? = []).push(n, c)
    }
}

function Gr(t, e, n) {
    Rd(t, e, 3, n)
}

function qr(t, e, n, r) {
    (t[w] & 3) === n && Rd(t, e, n, r)
}

function Bi(t, e) {
    let n = t[w];
    (n & 3) === e && (n &= 16383, n += 1, t[w] = n)
}

function Rd(t, e, n, r) {
    let o = r !== void 0 ? t[Qt] & 65535 : 0,
        i = r ? ? -1,
        s = e.length - 1,
        a = 0;
    for (let u = o; u < s; u++)
        if (typeof e[u + 1] == "number") {
            if (a = e[u], r != null && a >= r) break
        } else e[u] < 0 && (t[Qt] += 65536), (a < i || i == -1) && (Jm(t, n, e, u), t[Qt] = (t[Qt] & 4294901760) + u + 2), u++
}

function Yl(t, e) {
    je(4, t, e);
    let n = P(null);
    try {
        e.call(t)
    } finally {
        P(n), je(5, t, e)
    }
}

function Jm(t, e, n, r) {
    let o = n[r] < 0,
        i = n[r + 1],
        s = o ? -n[r] : n[r],
        a = t[s];
    o ? t[w] >> 14 < t[Qt] >> 16 && (t[w] & 3) === e && (t[w] += 16384, Yl(a, i)) : Yl(a, i)
}
var Jt = -1,
    Vn = class {
        constructor(e, n, r) {
            this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
        }
    };

function Xm(t) {
    return t instanceof Vn
}

function ey(t) {
    return (t.flags & 8) !== 0
}

function ty(t) {
    return (t.flags & 16) !== 0
}
var $i = {},
    us = class {
        constructor(e, n) {
            this.injector = e, this.parentInjector = n
        }
        get(e, n, r) {
            r = _o(r);
            let o = this.injector.get(e, $i, r);
            return o !== $i || n === $i ? o : this.parentInjector.get(e, n, r)
        }
    };

function kd(t) {
    return t !== Jt
}

function io(t) {
    return t & 32767
}

function ny(t) {
    return t >> 16
}

function so(t, e) {
    let n = ny(t),
        r = e;
    for (; n > 0;) r = r[hn], n--;
    return r
}
var ls = !0;

function ao(t) {
    let e = ls;
    return ls = t, e
}
var ry = 256,
    Ld = ry - 1,
    jd = 5,
    oy = 0,
    Ve = {};

function iy(t, e, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(On) && (r = n[On]), r == null && (r = n[On] = oy++);
    let o = r & Ld,
        i = 1 << o;
    e.data[t + (o >> jd)] |= i
}

function Vd(t, e) {
    let n = Bd(t, e);
    if (n !== -1) return n;
    let r = e[C];
    r.firstCreatePass && (t.injectorIndex = e.length, Hi(r.data, t), Hi(e, null), Hi(r.blueprint, null));
    let o = Da(t, e),
        i = t.injectorIndex;
    if (kd(o)) {
        let s = io(o),
            a = so(o, e),
            u = a[C].data;
        for (let l = 0; l < 8; l++) e[i + l] = a[s + l] | u[s + l]
    }
    return e[i + 8] = o, i
}

function Hi(t, e) {
    t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
}

function Bd(t, e) {
    return t.injectorIndex === -1 || t.parent && t.parent.injectorIndex === t.injectorIndex || e[t.injectorIndex + 8] === null ? -1 : t.injectorIndex
}

function Da(t, e) {
    if (t.parent && t.parent.injectorIndex !== -1) return t.parent.injectorIndex;
    let n = 0,
        r = null,
        o = e;
    for (; o !== null;) {
        if (r = Gd(o), r === null) return Jt;
        if (n++, o = o[hn], r.injectorIndex !== -1) return r.injectorIndex | n << 16
    }
    return Jt
}

function sy(t, e, n) {
    iy(t, e, n)
}

function ay(t, e) {
    if (e === "class") return t.classes;
    if (e === "style") return t.styles;
    let n = t.attrs;
    if (n) {
        let r = n.length,
            o = 0;
        for (; o < r;) {
            let i = n[o];
            if (Zc(i)) break;
            if (i === 0) o = o + 2;
            else if (typeof i == "number")
                for (o++; o < r && typeof n[o] == "string";) o++;
            else {
                if (i === e) return n[o + 1];
                o = o + 2
            }
        }
    }
    return null
}

function $d(t, e, n) {
    if (n & x.Optional || t !== void 0) return t;
    sa(e, "NodeInjector")
}

function Hd(t, e, n, r) {
    if (n & x.Optional && r === void 0 && (r = null), !(n & (x.Self | x.Host))) {
        let o = t[en],
            i = ae(void 0);
        try {
            return o ? o.get(e, r, n & x.Optional) : $c(e, r, n & x.Optional)
        } finally {
            ae(i)
        }
    }
    return $d(r, e, n)
}

function Ud(t, e, n, r = x.Default, o) {
    if (t !== null) {
        if (e[w] & 2048 && !(r & x.Self)) {
            let s = dy(t, e, n, r, Ve);
            if (s !== Ve) return s
        }
        let i = zd(t, e, n, r, Ve);
        if (i !== Ve) return i
    }
    return Hd(e, n, r, o)
}

function zd(t, e, n, r, o) {
    let i = ly(n);
    if (typeof i == "function") {
        if (!Td(e, t, r)) return r & x.Host ? $d(o, n, r) : Hd(e, n, r, o);
        try {
            let s;
            if (s = i(r), s == null && !(r & x.Optional)) sa(n);
            else return s
        } finally {
            Od()
        }
    } else if (typeof i == "number") {
        let s = null,
            a = Bd(t, e),
            u = Jt,
            l = r & x.Host ? e[le][ce] : null;
        for ((a === -1 || r & x.SkipSelf) && (u = a === -1 ? Da(t, e) : e[a + 8], u === Jt || !Xl(r, !1) ? a = -1 : (s = e[C], a = io(u), e = so(u, e))); a !== -1;) {
            let c = e[C];
            if (Jl(i, a, c.data)) {
                let d = uy(a, e, n, s, r, l);
                if (d !== Ve) return d
            }
            u = e[a + 8], u !== Jt && Xl(r, e[C].data[a + 8] === l) && Jl(i, a, e) ? (s = c, a = io(u), e = so(u, e)) : a = -1
        }
    }
    return o
}

function uy(t, e, n, r, o, i) {
    let s = e[C],
        a = s.data[t + 8],
        u = r == null ? Gn(a) && ls : r != s && (a.type & 3) !== 0,
        l = o & x.Host && i === a,
        c = Wr(a, s, n, u, l);
    return c !== null ? rn(e, s, c, a) : Ve
}

function Wr(t, e, n, r, o) {
    let i = t.providerIndexes,
        s = e.data,
        a = i & 1048575,
        u = t.directiveStart,
        l = t.directiveEnd,
        c = i >> 20,
        d = r ? a : a + c,
        h = o ? a + c : l;
    for (let f = d; f < h; f++) {
        let p = s[f];
        if (f < u && n === p || f >= u && p.type === n) return f
    }
    if (o) {
        let f = s[u];
        if (f && Tt(f) && f.type === n) return u
    }
    return null
}

function rn(t, e, n, r) {
    let o = t[n],
        i = e.data;
    if (Xm(o)) {
        let s = o;
        s.resolving && Rg(Pg(i[n]));
        let a = ao(s.canSeeViewProviders);
        s.resolving = !0;
        let u, l = s.injectImpl ? ae(s.injectImpl) : null,
            c = Td(t, r, x.Default);
        try {
            o = t[n] = s.factory(void 0, i, t, r), e.firstCreatePass && n >= r.directiveStart && Ym(n, i[n], e)
        } finally {
            l !== null && ae(l), ao(a), s.resolving = !1, Od()
        }
    }
    return o
}

function ly(t) {
    if (typeof t == "string") return t.charCodeAt(0) || 0;
    let e = t.hasOwnProperty(On) ? t[On] : void 0;
    return typeof e == "number" ? e >= 0 ? e & Ld : cy : e
}

function Jl(t, e, n) {
    let r = 1 << t;
    return !!(n[e + (t >> jd)] & r)
}

function Xl(t, e) {
    return !(t & x.Self) && !(t & x.Host && e)
}
var Ct = class {
    constructor(e, n) {
        this._tNode = e, this._lView = n
    }
    get(e, n, r) {
        return Ud(this._tNode, this._lView, e, _o(r), n)
    }
};

function cy() {
    return new Ct(ne(), S())
}

function nN(t) {
    return Hn(() => {
        let e = t.prototype.constructor,
            n = e[Yr] || cs(e),
            r = Object.prototype,
            o = Object.getPrototypeOf(t.prototype).constructor;
        for (; o && o !== r;) {
            let i = o[Yr] || cs(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o)
        }
        return i => new i
    })
}

function cs(t) {
    return Rc(t) ? () => {
        let e = cs(we(t));
        return e && e()
    } : _t(t)
}

function dy(t, e, n, r, o) {
    let i = t,
        s = e;
    for (; i !== null && s !== null && s[w] & 2048 && !(s[w] & 512);) {
        let a = zd(i, s, n, r | x.Self, Ve);
        if (a !== Ve) return a;
        let u = i.parent;
        if (!u) {
            let l = s[ld];
            if (l) {
                let c = l.get(n, Ve, r);
                if (c !== Ve) return c
            }
            u = Gd(s), s = s[hn]
        }
        i = u
    }
    return o
}

function Gd(t) {
    let e = t[C],
        n = e.type;
    return n === 2 ? e.declTNode : n === 1 ? t[ce] : null
}

function fy(t) {
    return ay(ne(), t)
}

function ec(t, e = null, n = null, r) {
    let o = qd(t, e, n, r);
    return o.resolveInjectorInitializers(), o
}

function qd(t, e = null, n = null, r, o = new Set) {
    let i = [n || re, gm(t)];
    return r = r || (typeof t == "object" ? void 0 : oe(t)), new kn(i, e || ca(), r || null, o)
}
var It = class It {
    static create(e, n) {
        if (Array.isArray(e)) return ec({
            name: ""
        }, n, e, ""); {
            let r = e.name ? ? "";
            return ec({
                name: r
            }, e.parent, e.providers, r)
        }
    }
};
It.THROW_IF_NOT_FOUND = Fn, It.NULL = new eo, It.\u0275prov = R({
    token: It,
    providedIn: "any",
    factory: () => Z(qc)
}), It.__NG_ELEMENT_ID__ = -1;
var ut = It;
var hy = new k("");
hy.__NG_ELEMENT_ID__ = t => {
    let e = ne();
    if (e === null) throw new m(204, !1);
    if (e.type & 2) return e.value;
    if (t & x.Optional) return null;
    throw new m(204, !1)
};
var py = "ngOriginalError";

function Ui(t) {
    return t[py]
}
var Wd = !0,
    Ea = (() => {
        let e = class e {};
        e.__NG_ELEMENT_ID__ = gy, e.__NG_ENV_ID__ = r => r;
        let t = e;
        return t
    })(),
    ds = class extends Ea {
        constructor(e) {
            super(), this._lView = e
        }
        onDestroy(e) {
            return wd(this._lView, e), () => Rm(this._lView, e)
        }
    };

function gy() {
    return new ds(S())
}
var Ro = (() => {
    let e = class e {
        constructor() {
            this.taskId = 0, this.pendingTasks = new Set, this.hasPendingTasks = new Sn(!1)
        }
        get _hasPendingTasks() {
            return this.hasPendingTasks.value
        }
        add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            let r = this.taskId++;
            return this.pendingTasks.add(r), r
        }
        remove(r) {
            this.pendingTasks.delete(r), this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
        ngOnDestroy() {
            this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
    };
    e.\u0275prov = R({
        token: e,
        providedIn: "root",
        factory: () => new e
    });
    let t = e;
    return t
})();
var fs = class extends et {
        constructor(e = !1) {
            super(), this.destroyRef = void 0, this.pendingTasks = void 0, this.__isAsync = e, ud() && (this.destroyRef = E(Ea, {
                optional: !0
            }) ? ? void 0, this.pendingTasks = E(Ro, {
                optional: !0
            }) ? ? void 0)
        }
        emit(e) {
            let n = P(null);
            try {
                super.next(e)
            } finally {
                P(n)
            }
        }
        subscribe(e, n, r) {
            let o = e,
                i = n || (() => null),
                s = r;
            if (e && typeof e == "object") {
                let u = e;
                o = u.next ? .bind(u), i = u.error ? .bind(u), s = u.complete ? .bind(u)
            }
            this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s)));
            let a = super.subscribe({
                next: o,
                error: i,
                complete: s
            });
            return e instanceof J && e.add(a), a
        }
        wrapInTimeout(e) {
            return n => {
                let r = this.pendingTasks ? .add();
                setTimeout(() => {
                    e(n), r !== void 0 && this.pendingTasks ? .remove(r)
                })
            }
        }
    },
    Se = fs;

function uo(...t) {}

function Qd(t) {
    let e, n;

    function r() {
        t = uo;
        try {
            n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), e !== void 0 && clearTimeout(e)
        } catch {}
    }
    return e = setTimeout(() => {
        t(), r()
    }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => {
        t(), r()
    })), () => r()
}

function tc(t) {
    return queueMicrotask(() => t()), () => {
        t = uo
    }
}
var wa = "isAngularZone",
    lo = wa + "_ID",
    my = 0,
    ge = class t {
        constructor(e) {
            this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Se(!1), this.onMicrotaskEmpty = new Se(!1), this.onStable = new Se(!1), this.onError = new Se(!1);
            let {
                enableLongStackTrace: n = !1,
                shouldCoalesceEventChangeDetection: r = !1,
                shouldCoalesceRunChangeDetection: o = !1,
                scheduleInRootZone: i = Wd
            } = e;
            if (typeof Zone > "u") throw new m(908, !1);
            Zone.assertZonePatched();
            let s = this;
            s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, Dy(s)
        }
        static isInAngularZone() {
            return typeof Zone < "u" && Zone.current.get(wa) === !0
        }
        static assertInAngularZone() {
            if (!t.isInAngularZone()) throw new m(909, !1)
        }
        static assertNotInAngularZone() {
            if (t.isInAngularZone()) throw new m(909, !1)
        }
        run(e, n, r) {
            return this._inner.run(e, n, r)
        }
        runTask(e, n, r, o) {
            let i = this._inner,
                s = i.scheduleEventTask("NgZoneEvent: " + o, e, yy, uo, uo);
            try {
                return i.runTask(s, n, r)
            } finally {
                i.cancelTask(s)
            }
        }
        runGuarded(e, n, r) {
            return this._inner.runGuarded(e, n, r)
        }
        runOutsideAngular(e) {
            return this._outer.run(e)
        }
    },
    yy = {};

function Ia(t) {
    if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable) try {
        t._nesting++, t.onMicrotaskEmpty.emit(null)
    } finally {
        if (t._nesting--, !t.hasPendingMicrotasks) try {
            t.runOutsideAngular(() => t.onStable.emit(null))
        } finally {
            t.isStable = !0
        }
    }
}

function vy(t) {
    if (t.isCheckStableRunning || t.callbackScheduled) return;
    t.callbackScheduled = !0;

    function e() {
        Qd(() => {
            t.callbackScheduled = !1, hs(t), t.isCheckStableRunning = !0, Ia(t), t.isCheckStableRunning = !1
        })
    }
    t.scheduleInRootZone ? Zone.root.run(() => {
        e()
    }) : t._outer.run(() => {
        e()
    }), hs(t)
}

function Dy(t) {
    let e = () => {
            vy(t)
        },
        n = my++;
    t._inner = t._inner.fork({
        name: "angular",
        properties: {
            [wa]: !0,
            [lo]: n,
            [lo + n]: !0
        },
        onInvokeTask: (r, o, i, s, a, u) => {
            if (Ey(u)) return r.invokeTask(i, s, a, u);
            try {
                return nc(t), r.invokeTask(i, s, a, u)
            } finally {
                (t.shouldCoalesceEventChangeDetection && s.type === "eventTask" || t.shouldCoalesceRunChangeDetection) && e(), rc(t)
            }
        },
        onInvoke: (r, o, i, s, a, u, l) => {
            try {
                return nc(t), r.invoke(i, s, a, u, l)
            } finally {
                t.shouldCoalesceRunChangeDetection && !t.callbackScheduled && !wy(u) && e(), rc(t)
            }
        },
        onHasTask: (r, o, i, s) => {
            r.hasTask(i, s), o === i && (s.change == "microTask" ? (t._hasPendingMicrotasks = s.microTask, hs(t), Ia(t)) : s.change == "macroTask" && (t.hasPendingMacrotasks = s.macroTask))
        },
        onHandleError: (r, o, i, s) => (r.handleError(i, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
    })
}

function hs(t) {
    t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && t.callbackScheduled === !0 ? t.hasPendingMicrotasks = !0 : t.hasPendingMicrotasks = !1
}

function nc(t) {
    t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
}

function rc(t) {
    t._nesting--, Ia(t)
}
var ps = class {
    constructor() {
        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Se, this.onMicrotaskEmpty = new Se, this.onStable = new Se, this.onError = new Se
    }
    run(e, n, r) {
        return e.apply(n, r)
    }
    runGuarded(e, n, r) {
        return e.apply(n, r)
    }
    runOutsideAngular(e) {
        return e()
    }
    runTask(e, n, r, o) {
        return e.apply(n, r)
    }
};

function Ey(t) {
    return Zd(t, "__ignore_ng_zone__")
}

function wy(t) {
    return Zd(t, "__scheduler_tick__")
}

function Zd(t, e) {
    return !Array.isArray(t) || t.length !== 1 ? !1 : t[0] ? .data ? .[e] === !0
}
var on = class {
        constructor() {
            this._console = console
        }
        handleError(e) {
            let n = this._findOriginalError(e);
            this._console.error("ERROR", e), n && this._console.error("ORIGINAL ERROR", n)
        }
        _findOriginalError(e) {
            let n = e && Ui(e);
            for (; n && Ui(n);) n = Ui(n);
            return n || null
        }
    },
    Iy = new k("", {
        providedIn: "root",
        factory: () => {
            let t = E(ge),
                e = E(on);
            return n => t.runOutsideAngular(() => e.handleError(n))
        }
    });

function oc(t, e) {
    return Oc(t, e)
}

function by(t) {
    return Oc(Ac, t)
}
var rN = (oc.required = by, oc);

function Cy() {
    return mn(ne(), S())
}

function mn(t, e) {
    return new ht(ye(t, e))
}
var ht = (() => {
    let e = class e {
        constructor(r) {
            this.nativeElement = r
        }
    };
    e.__NG_ELEMENT_ID__ = Cy;
    let t = e;
    return t
})();

function _y(t) {
    return t instanceof ht ? t.nativeElement : t
}

function Sy() {
    return this._results[Symbol.iterator]()
}
var gs = class t {
        get changes() {
            return this._changes ? ? = new Se
        }
        constructor(e = !1) {
            this._emitDistinctChangesOnly = e, this.dirty = !0, this._onDirty = void 0, this._results = [], this._changesDetected = !1, this._changes = void 0, this.length = 0, this.first = void 0, this.last = void 0;
            let n = t.prototype;
            n[Symbol.iterator] || (n[Symbol.iterator] = Sy)
        }
        get(e) {
            return this._results[e]
        }
        map(e) {
            return this._results.map(e)
        }
        filter(e) {
            return this._results.filter(e)
        }
        find(e) {
            return this._results.find(e)
        }
        reduce(e, n) {
            return this._results.reduce(e, n)
        }
        forEach(e) {
            this._results.forEach(e)
        }
        some(e) {
            return this._results.some(e)
        }
        toArray() {
            return this._results.slice()
        }
        toString() {
            return this._results.toString()
        }
        reset(e, n) {
            this.dirty = !1;
            let r = qg(e);
            (this._changesDetected = !Gg(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0])
        }
        notifyOnChanges() {
            this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
        }
        onDirty(e) {
            this._onDirty = e
        }
        setDirty() {
            this.dirty = !0, this._onDirty ? .()
        }
        destroy() {
            this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe())
        }
    },
    My = "ngSkipHydration",
    Ty = "ngskiphydration";

function Kd(t) {
    let e = t.mergedAttrs;
    if (e === null) return !1;
    for (let n = 0; n < e.length; n += 2) {
        let r = e[n];
        if (typeof r == "number") return !1;
        if (typeof r == "string" && r.toLowerCase() === Ty) return !0
    }
    return !1
}

function Yd(t) {
    return t.hasAttribute(My)
}

function co(t) {
    return (t.flags & 128) === 128
}

function Ny(t) {
    if (co(t)) return !0;
    let e = t.parent;
    for (; e;) {
        if (co(t) || Kd(e)) return !0;
        e = e.parent
    }
    return !1
}
var Jd = new Map,
    xy = 0;

function Ay() {
    return xy++
}

function Oy(t) {
    Jd.set(t[Mo], t)
}

function ms(t) {
    Jd.delete(t[Mo])
}
var ic = "__ngContext__";

function lt(t, e) {
    Te(e) ? (t[ic] = e[Mo], Oy(e)) : t[ic] = e
}

function Xd(t) {
    return tf(t[Ln])
}

function ef(t) {
    return tf(t[Me])
}

function tf(t) {
    for (; t !== null && !He(t);) t = t[Me];
    return t
}
var ys;

function oN(t) {
    ys = t
}

function qn() {
    if (ys !== void 0) return ys;
    if (typeof document < "u") return document;
    throw new m(210, !1)
}
var Fy = new k("", {
        providedIn: "root",
        factory: () => Py
    }),
    Py = "ng",
    Ry = new k(""),
    ko = new k("", {
        providedIn: "platform",
        factory: () => "unknown"
    });
var nf = new k(""),
    iN = new k("", {
        providedIn: "root",
        factory: () => qn().body ? .querySelector("[ngCspNonce]") ? .getAttribute("ngCspNonce") || null
    });

function ky() {
    let t = new ba;
    return E(ko) === "browser" && (t.store = Ly(qn(), E(Fy))), t
}
var ba = (() => {
    let e = class e {
        constructor() {
            this.store = {}, this.onSerializeCallbacks = {}
        }
        get(r, o) {
            return this.store[r] !== void 0 ? this.store[r] : o
        }
        set(r, o) {
            this.store[r] = o
        }
        remove(r) {
            delete this.store[r]
        }
        hasKey(r) {
            return this.store.hasOwnProperty(r)
        }
        get isEmpty() {
            return Object.keys(this.store).length === 0
        }
        onSerialize(r, o) {
            this.onSerializeCallbacks[r] = o
        }
        toJson() {
            for (let r in this.onSerializeCallbacks)
                if (this.onSerializeCallbacks.hasOwnProperty(r)) try {
                    this.store[r] = this.onSerializeCallbacks[r]()
                } catch (o) {
                    console.warn("Exception in onSerialize callback: ", o)
                }
            return JSON.stringify(this.store).replace(/</g, "\\u003C")
        }
    };
    e.\u0275prov = R({
        token: e,
        providedIn: "root",
        factory: ky
    });
    let t = e;
    return t
})();

function Ly(t, e) {
    let n = t.getElementById(e + "-state");
    if (n ? .textContent) try {
        return JSON.parse(n.textContent)
    } catch (r) {
        console.warn("Exception while restoring TransferState for app " + e, r)
    }
    return {}
}
var rf = "h",
    of = "b",
    vs = function(t) {
        return t.FirstChild = "f", t.NextSibling = "n", t
    }(vs || {}),
    jy = "e",
    Vy = "t",
    Ca = "c",
    sf = "x",
    fo = "r",
    By = "i",
    $y = "n",
    af = "d";
var Hy = "__nghData__",
    uf = Hy,
    zi = "ngh",
    Uy = "nghm",
    lf = () => null;

function zy(t, e, n = !1) {
    let r = t.getAttribute(zi);
    if (r == null) return null;
    let [o, i] = r.split("|");
    if (r = n ? i : o, !r) return null;
    let s = i ? `|${i}` : "",
        a = n ? o : s,
        u = {};
    if (r !== "") {
        let c = e.get(ba, null, {
            optional: !0
        });
        c !== null && (u = c.get(uf, [])[Number(r)])
    }
    let l = {
        data: u,
        firstChild: t.firstChild ? ? null
    };
    return n && (l.firstChild = t, Lo(l, 0, t.nextSibling)), a ? t.setAttribute(zi, a) : t.removeAttribute(zi), l
}

function Gy() {
    lf = zy
}

function _a(t, e, n = !1) {
    return lf(t, e, n)
}

function qy(t) {
    let e = t._lView;
    return e[C].type === 2 ? null : (oo(e) && (e = e[G]), e)
}

function Wy(t) {
    return t.textContent ? .replace(/\s/gm, "")
}

function Qy(t) {
    let e = qn(),
        n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, {
            acceptNode(i) {
                let s = Wy(i);
                return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
            }
        }),
        r, o = [];
    for (; r = n.nextNode();) o.push(r);
    for (let i of o) i.textContent === "ngetn" ? i.replaceWith(e.createTextNode("")) : i.remove()
}

function Lo(t, e, n) {
    t.segmentHeads ? ? = {}, t.segmentHeads[e] = n
}

function Ds(t, e) {
    return t.segmentHeads ? .[e] ? ? null
}

function Zy(t, e) {
    let n = t.data,
        r = n[jy] ? .[e] ? ? null;
    return r === null && n[Ca] ? .[e] && (r = Sa(t, e)), r
}

function cf(t, e) {
    return t.data[Ca] ? .[e] ? ? null
}

function Sa(t, e) {
    let n = cf(t, e) ? ? [],
        r = 0;
    for (let o of n) r += o[fo] * (o[sf] ? ? 1);
    return r
}

function Ky(t) {
    if (typeof t.disconnectedNodes > "u") {
        let e = t.data[af];
        t.disconnectedNodes = e ? new Set(e) : null
    }
    return t.disconnectedNodes
}

function Wn(t, e) {
    if (typeof t.disconnectedNodes > "u") {
        let n = t.data[af];
        t.disconnectedNodes = n ? new Set(n) : null
    }
    return !!Ky(t) ? .has(e)
}
var kr = new k(""),
    df = !1,
    ff = new k("", {
        providedIn: "root",
        factory: () => df
    });
var Lr;

function Yy() {
    if (Lr === void 0 && (Lr = null, Kr.trustedTypes)) try {
        Lr = Kr.trustedTypes.createPolicy("angular", {
            createHTML: t => t,
            createScript: t => t,
            createScriptURL: t => t
        })
    } catch {}
    return Lr
}

function jo(t) {
    return Yy() ? .createHTML(t) || t
}
var jr;

function hf() {
    if (jr === void 0 && (jr = null, Kr.trustedTypes)) try {
        jr = Kr.trustedTypes.createPolicy("angular#unsafe-bypass", {
            createHTML: t => t,
            createScript: t => t,
            createScriptURL: t => t
        })
    } catch {}
    return jr
}

function sc(t) {
    return hf() ? .createHTML(t) || t
}

function ac(t) {
    return hf() ? .createScriptURL(t) || t
}
var Ze = class {
        constructor(e) {
            this.changingThisBreaksApplicationSecurity = e
        }
        toString() {
            return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Nc})`
        }
    },
    Es = class extends Ze {
        getTypeName() {
            return "HTML"
        }
    },
    ws = class extends Ze {
        getTypeName() {
            return "Style"
        }
    },
    Is = class extends Ze {
        getTypeName() {
            return "Script"
        }
    },
    bs = class extends Ze {
        getTypeName() {
            return "URL"
        }
    },
    Cs = class extends Ze {
        getTypeName() {
            return "ResourceURL"
        }
    };

function kt(t) {
    return t instanceof Ze ? t.changingThisBreaksApplicationSecurity : t
}

function Ma(t, e) {
    let n = Jy(t);
    if (n != null && n !== e) {
        if (n === "ResourceURL" && e === "URL") return !0;
        throw new Error(`Required a safe ${e}, got a ${n} (see ${Nc})`)
    }
    return n === e
}

function Jy(t) {
    return t instanceof Ze && t.getTypeName() || null
}

function sN(t) {
    return new Es(t)
}

function aN(t) {
    return new ws(t)
}

function uN(t) {
    return new Is(t)
}

function lN(t) {
    return new bs(t)
}

function cN(t) {
    return new Cs(t)
}

function Xy(t) {
    let e = new Ss(t);
    return ev() ? new _s(e) : e
}
var _s = class {
        constructor(e) {
            this.inertDocumentHelper = e
        }
        getInertBodyElement(e) {
            e = "<body><remove></remove>" + e;
            try {
                let n = new window.DOMParser().parseFromString(jo(e), "text/html").body;
                return n === null ? this.inertDocumentHelper.getInertBodyElement(e) : (n.firstChild ? .remove(), n)
            } catch {
                return null
            }
        }
    },
    Ss = class {
        constructor(e) {
            this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
        }
        getInertBodyElement(e) {
            let n = this.inertDocument.createElement("template");
            return n.innerHTML = jo(e), n
        }
    };

function ev() {
    try {
        return !!new window.DOMParser().parseFromString(jo(""), "text/html")
    } catch {
        return !1
    }
}
var tv = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

function pf(t) {
    return t = String(t), t.match(tv) ? t : "unsafe:" + t
}

function Ke(t) {
    let e = {};
    for (let n of t.split(",")) e[n] = !0;
    return e
}

function Qn(...t) {
    let e = {};
    for (let n of t)
        for (let r in n) n.hasOwnProperty(r) && (e[r] = !0);
    return e
}
var gf = Ke("area,br,col,hr,img,wbr"),
    mf = Ke("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    yf = Ke("rp,rt"),
    nv = Qn(yf, mf),
    rv = Qn(mf, Ke("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
    ov = Qn(yf, Ke("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
    uc = Qn(gf, rv, ov, nv),
    vf = Ke("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
    iv = Ke("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
    sv = Ke("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
    av = Qn(vf, iv, sv),
    uv = Ke("script,style,template"),
    Ms = class {
        constructor() {
            this.sanitizedSomething = !1, this.buf = []
        }
        sanitizeChildren(e) {
            let n = e.firstChild,
                r = !0,
                o = [];
            for (; n;) {
                if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
                    o.push(n), n = dv(n);
                    continue
                }
                for (; n;) {
                    n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                    let i = cv(n);
                    if (i) {
                        n = i;
                        break
                    }
                    n = o.pop()
                }
            }
            return this.buf.join("")
        }
        startElement(e) {
            let n = lc(e).toLowerCase();
            if (!uc.hasOwnProperty(n)) return this.sanitizedSomething = !0, !uv.hasOwnProperty(n);
            this.buf.push("<"), this.buf.push(n);
            let r = e.attributes;
            for (let o = 0; o < r.length; o++) {
                let i = r.item(o),
                    s = i.name,
                    a = s.toLowerCase();
                if (!av.hasOwnProperty(a)) {
                    this.sanitizedSomething = !0;
                    continue
                }
                let u = i.value;
                vf[a] && (u = pf(u)), this.buf.push(" ", s, '="', cc(u), '"')
            }
            return this.buf.push(">"), !0
        }
        endElement(e) {
            let n = lc(e).toLowerCase();
            uc.hasOwnProperty(n) && !gf.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
        }
        chars(e) {
            this.buf.push(cc(e))
        }
    };

function lv(t, e) {
    return (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY
}

function cv(t) {
    let e = t.nextSibling;
    if (e && t !== e.previousSibling) throw Df(e);
    return e
}

function dv(t) {
    let e = t.firstChild;
    if (e && lv(t, e)) throw Df(e);
    return e
}

function lc(t) {
    let e = t.nodeName;
    return typeof e == "string" ? e : "FORM"
}

function Df(t) {
    return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)
}
var fv = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    hv = /([^\#-~ |!])/g;

function cc(t) {
    return t.replace(/&/g, "&amp;").replace(fv, function(e) {
        let n = e.charCodeAt(0),
            r = e.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"
    }).replace(hv, function(e) {
        return "&#" + e.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var Vr;

function pv(t, e) {
    let n = null;
    try {
        Vr = Vr || Xy(t);
        let r = e ? String(e) : "";
        n = Vr.getInertBodyElement(r);
        let o = 5,
            i = r;
        do {
            if (o === 0) throw new Error("Failed to sanitize html because the input is unstable");
            o--, r = i, i = n.innerHTML, n = Vr.getInertBodyElement(r)
        } while (r !== i);
        let a = new Ms().sanitizeChildren(dc(n) || n);
        return jo(a)
    } finally {
        if (n) {
            let r = dc(n) || n;
            for (; r.firstChild;) r.firstChild.remove()
        }
    }
}

function dc(t) {
    return "content" in t && gv(t) ? t.content : null
}

function gv(t) {
    return t.nodeType === Node.ELEMENT_NODE && t.nodeName === "TEMPLATE"
}
var Vo = function(t) {
    return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
}(Vo || {});

function dN(t) {
    let e = Ta();
    return e ? sc(e.sanitize(Vo.HTML, t) || "") : Ma(t, "HTML") ? sc(kt(t)) : pv(qn(), Un(t))
}

function mv(t) {
    let e = Ta();
    return e ? e.sanitize(Vo.URL, t) || "" : Ma(t, "URL") ? kt(t) : pf(Un(t))
}

function yv(t) {
    let e = Ta();
    if (e) return ac(e.sanitize(Vo.RESOURCE_URL, t) || "");
    if (Ma(t, "ResourceURL")) return ac(kt(t));
    throw new m(904, !1)
}

function vv(t, e) {
    return e === "src" && (t === "embed" || t === "frame" || t === "iframe" || t === "media" || t === "script") || e === "href" && (t === "base" || t === "link") ? yv : mv
}

function fN(t, e, n) {
    return vv(e, n)(t)
}

function Ta() {
    let t = S();
    return t && t[Be].sanitizer
}
var Dv = /^>|^->|<!--|-->|--!>|<!-$/g,
    Ev = /(<|>)/g,
    wv = "\u200B$1\u200B";

function Iv(t) {
    return t.replace(Dv, e => e.replace(Ev, wv))
}

function hN(t) {
    return t.ownerDocument
}

function bv(t) {
    return t.ownerDocument.body
}

function Ef(t) {
    return t instanceof Function ? t() : t
}

function xn(t) {
    return (t ? ? E(ut)).get(ko) === "browser"
}
var Bn = function(t) {
        return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
    }(Bn || {}),
    Cv;

function Na(t, e) {
    return Cv(t, e)
}

function Zt(t, e, n, r, o) {
    if (r != null) {
        let i, s = !1;
        He(r) ? i = r : Te(r) && (s = !0, r = r[me]);
        let a = Ae(r);
        t === 0 && n !== null ? o == null ? Mf(e, n, a) : ho(e, n, a, o || null, !0) : t === 1 && n !== null ? ho(e, n, a, o || null, !0) : t === 2 ? Oa(e, a, s) : t === 3 && e.destroyNode(a), i != null && Lv(e, t, i, n, o)
    }
}

function wf(t, e) {
    return t.createText(e)
}

function _v(t, e, n) {
    t.setValue(e, n)
}

function If(t, e) {
    return t.createComment(Iv(e))
}

function xa(t, e, n) {
    return t.createElement(e, n)
}

function Sv(t, e) {
    bf(t, e), e[me] = null, e[ce] = null
}

function Mv(t, e, n, r, o, i) {
    r[me] = o, r[ce] = e, $o(t, r, n, 1, o, i)
}

function bf(t, e) {
    e[Be].changeDetectionScheduler ? .notify(9), $o(t, e, e[B], 2, null, null)
}

function Tv(t) {
    let e = t[Ln];
    if (!e) return Gi(t[C], t);
    for (; e;) {
        let n = null;
        if (Te(e)) n = e[Ln];
        else {
            let r = e[ue];
            r && (n = r)
        }
        if (!n) {
            for (; e && !e[Me] && e !== t;) Te(e) && Gi(e[C], e), e = e[ee];
            e === null && (e = t), Te(e) && Gi(e[C], e), n = e && e[Me]
        }
        e = n
    }
}

function Nv(t, e, n, r) {
    let o = ue + r,
        i = n.length;
    r > 0 && (n[o - 1][Me] = e), r < i - ue ? (e[Me] = n[o], Gc(n, ue + r, e)) : (n.push(e), e[Me] = null), e[ee] = n;
    let s = e[Mt];
    s !== null && n !== s && Cf(s, e);
    let a = e[We];
    a !== null && a.insertView(t), ss(e), e[w] |= 128
}

function Cf(t, e) {
    let n = t[tn],
        r = e[ee];
    if (Te(r)) t[w] |= ro.HasTransplantedViews;
    else {
        let o = r[ee][le];
        e[le] !== o && (t[w] |= ro.HasTransplantedViews)
    }
    n === null ? t[tn] = [e] : n.push(e)
}

function Aa(t, e) {
    let n = t[tn],
        r = n.indexOf(e);
    n.splice(r, 1)
}

function Ts(t, e) {
    if (t.length <= ue) return;
    let n = ue + e,
        r = t[n];
    if (r) {
        let o = r[Mt];
        o !== null && o !== t && Aa(o, r), e > 0 && (t[n - 1][Me] = r[Me]);
        let i = Xr(t, ue + e);
        Sv(r[C], r);
        let s = i[We];
        s !== null && s.detachView(i[C]), r[ee] = null, r[Me] = null, r[w] &= -129
    }
    return r
}

function _f(t, e) {
    if (!(e[w] & 256)) {
        let n = e[B];
        n.destroyNode && $o(t, e, n, 3, null, null), Tv(e)
    }
}

function Gi(t, e) {
    if (e[w] & 256) return;
    let n = P(null);
    try {
        e[w] &= -129, e[w] |= 256, e[Ie] && vi(e[Ie]), Av(t, e), xv(t, e), e[C].type === 1 && e[B].destroy();
        let r = e[Mt];
        if (r !== null && He(e[ee])) {
            r !== e[ee] && Aa(r, e);
            let o = e[We];
            o !== null && o.detachView(t)
        }
        ms(e)
    } finally {
        P(n)
    }
}

function xv(t, e) {
    let n = t.cleanup,
        r = e[to];
    if (n !== null)
        for (let i = 0; i < n.length - 1; i += 2)
            if (typeof n[i] == "string") {
                let s = n[i + 3];
                s >= 0 ? r[s]() : r[-s].unsubscribe(), i += 2
            } else {
                let s = r[n[i + 1]];
                n[i].call(s)
            }
    r !== null && (e[to] = null);
    let o = e[ot];
    if (o !== null) {
        e[ot] = null;
        for (let i = 0; i < o.length; i++) {
            let s = o[i];
            s()
        }
    }
}

function Av(t, e) {
    let n;
    if (t != null && (n = t.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let o = e[n[r]];
            if (!(o instanceof Vn)) {
                let i = n[r + 1];
                if (Array.isArray(i))
                    for (let s = 0; s < i.length; s += 2) {
                        let a = o[i[s]],
                            u = i[s + 1];
                        je(4, a, u);
                        try {
                            u.call(a)
                        } finally {
                            je(5, a, u)
                        }
                    } else {
                        je(4, o, i);
                        try {
                            i.call(o)
                        } finally {
                            je(5, o, i)
                        }
                    }
            }
        }
}

function Sf(t, e, n) {
    return Ov(t, e.parent, n)
}

function Ov(t, e, n) {
    let r = e;
    for (; r !== null && r.type & 168;) e = r, r = e.parent;
    if (r === null) return n[me]; {
        let {
            componentOffset: o
        } = r;
        if (o > -1) {
            let {
                encapsulation: i
            } = t.data[r.directiveStart + o];
            if (i === St.None || i === St.Emulated) return null
        }
        return ye(r, n)
    }
}

function ho(t, e, n, r, o) {
    t.insertBefore(e, n, r, o)
}

function Mf(t, e, n) {
    t.appendChild(e, n)
}

function fc(t, e, n, r, o) {
    r !== null ? ho(t, e, n, r, o) : Mf(t, e, n)
}

function Tf(t, e) {
    return t.parentNode(e)
}

function Fv(t, e) {
    return t.nextSibling(e)
}

function Nf(t, e, n) {
    return Rv(t, e, n)
}

function Pv(t, e, n) {
    return t.type & 40 ? ye(t, n) : null
}
var Rv = Pv,
    hc;

function Bo(t, e, n, r) {
    let o = Sf(t, r, e),
        i = e[B],
        s = r.parent || e[ce],
        a = Nf(s, r, e);
    if (o != null)
        if (Array.isArray(n))
            for (let u = 0; u < n.length; u++) fc(i, o, n[u], a, !1);
        else fc(i, o, n, a, !1);
    hc !== void 0 && hc(i, r, e, n, o)
}

function An(t, e) {
    if (e !== null) {
        let n = e.type;
        if (n & 3) return ye(e, t);
        if (n & 4) return Ns(-1, t[e.index]);
        if (n & 8) {
            let r = e.child;
            if (r !== null) return An(t, r); {
                let o = t[e.index];
                return He(o) ? Ns(-1, o) : Ae(o)
            }
        } else {
            if (n & 128) return An(t, e.next);
            if (n & 32) return Na(e, t)() || Ae(t[e.index]); {
                let r = xf(t, e);
                if (r !== null) {
                    if (Array.isArray(r)) return r[0];
                    let o = Nt(t[le]);
                    return An(o, r)
                } else return An(t, e.next)
            }
        }
    }
    return null
}

function xf(t, e) {
    if (e !== null) {
        let r = t[le][ce],
            o = e.projection;
        return r.projection[o]
    }
    return null
}

function Ns(t, e) {
    let n = ue + t + 1;
    if (n < e.length) {
        let r = e[n],
            o = r[C].firstChild;
        if (o !== null) return An(r, o)
    }
    return e[Qe]
}

function Oa(t, e, n) {
    t.removeChild(null, e, n)
}

function Af(t) {
    t.textContent = ""
}

function Fa(t, e, n, r, o, i, s) {
    for (; n != null;) {
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let a = r[n.index],
            u = n.type;
        if (s && e === 0 && (a && lt(Ae(a), r), n.flags |= 2), (n.flags & 32) !== 32)
            if (u & 8) Fa(t, e, n.child, r, o, i, !1), Zt(e, t, o, a, i);
            else if (u & 32) {
            let l = Na(n, r),
                c;
            for (; c = l();) Zt(e, t, o, c, i);
            Zt(e, t, o, a, i)
        } else u & 16 ? Of(t, e, r, n, o, i) : Zt(e, t, o, a, i);
        n = s ? n.projectionNext : n.next
    }
}

function $o(t, e, n, r, o, i) {
    Fa(n, r, t.firstChild, e, o, i, !1)
}

function kv(t, e, n) {
    let r = e[B],
        o = Sf(t, n, e),
        i = n.parent || e[ce],
        s = Nf(i, n, e);
    Of(r, 0, e, n, o, s)
}

function Of(t, e, n, r, o, i) {
    let s = n[le],
        u = s[ce].projection[r.projection];
    if (Array.isArray(u))
        for (let l = 0; l < u.length; l++) {
            let c = u[l];
            Zt(e, t, o, c, i)
        } else {
            let l = u,
                c = s[ee];
            co(r) && (l.flags |= 128), Fa(t, e, l, c, o, i, !0)
        }
}

function Lv(t, e, n, r, o) {
    let i = n[Qe],
        s = Ae(n);
    i !== s && Zt(e, t, r, i, o);
    for (let a = ue; a < n.length; a++) {
        let u = n[a];
        $o(u[C], u, t, e, r, i)
    }
}

function jv(t, e, n, r, o) {
    if (e) o ? t.addClass(n, r) : t.removeClass(n, r);
    else {
        let i = r.indexOf("-") === -1 ? void 0 : Bn.DashCase;
        o == null ? t.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), i |= Bn.Important), t.setStyle(n, r, o, i))
    }
}

function Vv(t, e, n) {
    t.setAttribute(e, "style", n)
}

function Ff(t, e, n) {
    n === "" ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n)
}

function Pf(t, e, n) {
    let {
        mergedAttrs: r,
        classes: o,
        styles: i
    } = n;
    r !== null && es(t, e, r), o !== null && Ff(t, e, o), i !== null && Vv(t, e, i)
}
var Oe = {};

function pN(t = 1) {
    Rf(q(), S(), Rt() + t, !1)
}

function Rf(t, e, n, r) {
    if (!r)
        if ((e[w] & 3) === 3) {
            let i = t.preOrderCheckHooks;
            i !== null && Gr(e, i, n)
        } else {
            let i = t.preOrderHooks;
            i !== null && qr(e, i, 0, n)
        }
    xt(n)
}

function de(t, e = x.Default) {
    let n = S();
    if (n === null) return Z(t, e);
    let r = ne();
    return Ud(r, n, we(t), e)
}

function gN() {
    let t = "invalid";
    throw new Error(t)
}

function kf(t, e, n, r, o, i) {
    let s = P(null);
    try {
        let a = null;
        o & it.SignalBased && (a = e[r][ke]), a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)), o & it.HasDecoratorInputTransform && (i = t.inputTransforms[r].call(e, i)), t.setInput !== null ? t.setInput(e, a, i, n, r) : dd(e, a, r, i)
    } finally {
        P(s)
    }
}

function Bv(t, e) {
    let n = t.hostBindingOpCodes;
    if (n !== null) try {
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            if (o < 0) xt(~o);
            else {
                let i = o,
                    s = n[++r],
                    a = n[++r];
                qm(s, i);
                let u = e[i];
                a(2, u)
            }
        }
    } finally {
        xt(-1)
    }
}

function Ho(t, e, n, r, o, i, s, a, u, l, c) {
    let d = e.blueprint.slice();
    return d[me] = o, d[w] = r | 4 | 128 | 8 | 64, (l !== null || t && t[w] & 2048) && (d[w] |= 2048), Dd(d), d[ee] = d[hn] = t, d[xe] = n, d[Be] = s || t && t[Be], d[B] = a || t && t[B], d[en] = u || t && t[en] || null, d[ce] = i, d[Mo] = Ay(), d[Ne] = c, d[ld] = l, d[le] = e.type == 2 ? t[le] : d, d
}

function yn(t, e, n, r, o) {
    let i = t.data[e];
    if (i === null) i = $v(t, e, n, r, o), Gm() && (i.flags |= 32);
    else if (i.type & 64) {
        i.type = n, i.value = r, i.attrs = o;
        let s = Hm();
        i.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return Pt(i, !0), i
}

function $v(t, e, n, r, o) {
    let i = Cd(),
        s = pa(),
        a = s ? i : i && i.parent,
        u = t.data[e] = Qv(t, a, n, e, r, o);
    return t.firstChild === null && (t.firstChild = u), i !== null && (s ? i.child == null && u.parent !== null && (i.child = u) : i.next === null && (i.next = u, u.prev = i)), u
}

function Lf(t, e, n, r) {
    if (n === 0) return -1;
    let o = e.length;
    for (let i = 0; i < n; i++) e.push(r), t.blueprint.push(r), t.data.push(null);
    return o
}

function jf(t, e, n, r, o) {
    let i = Rt(),
        s = r & 2;
    try {
        xt(-1), s && e.length > G && Rf(t, e, G, !1), je(s ? 2 : 0, o), n(r, o)
    } finally {
        xt(i), je(s ? 3 : 1, o)
    }
}

function Pa(t, e, n) {
    if (da(e)) {
        let r = P(null);
        try {
            let o = e.directiveStart,
                i = e.directiveEnd;
            for (let s = o; s < i; s++) {
                let a = t.data[s];
                if (a.contentQueries) {
                    let u = n[s];
                    a.contentQueries(1, u, s)
                }
            }
        } finally {
            P(r)
        }
    }
}

function Ra(t, e, n) {
    bd() && (eD(t, e, n, ye(n, e)), (n.flags & 64) === 64 && Hf(t, e, n))
}

function ka(t, e, n = ye) {
    let r = e.localNames;
    if (r !== null) {
        let o = e.index + 1;
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i + 1],
                a = s === -1 ? n(e, t) : t[s];
            t[o++] = a
        }
    }
}

function Vf(t) {
    let e = t.tView;
    return e === null || e.incompleteFirstPass ? t.tView = La(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts, t.id) : e
}

function La(t, e, n, r, o, i, s, a, u, l, c) {
    let d = G + r,
        h = d + o,
        f = Hv(d, h),
        p = typeof l == "function" ? l() : l;
    return f[C] = {
        type: t,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: e,
        data: f.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: h,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof i == "function" ? i() : i,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: u,
        consts: p,
        incompleteFirstPass: !1,
        ssrId: c
    }
}

function Hv(t, e) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(r < t ? null : Oe);
    return n
}

function Uv(t, e, n, r) {
    let i = r.get(ff, df) || n === St.ShadowDom,
        s = t.selectRootElement(e, i);
    return zv(s), s
}

function zv(t) {
    Bf(t)
}
var Bf = () => null;

function Gv(t) {
    Yd(t) ? Af(t) : Qy(t)
}

function qv() {
    Bf = Gv
}

function Wv(t, e, n, r) {
    let o = Gf(e);
    o.push(n), t.firstCreatePass && qf(t).push(r, o.length - 1)
}

function Qv(t, e, n, r, o, i) {
    let s = e ? e.injectorIndex : -1,
        a = 0;
    return pn() && (a |= 128), {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: o,
        attrs: i,
        mergedAttrs: null,
        localNames: null,
        initialInputs: void 0,
        inputs: null,
        outputs: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: e,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}

function pc(t, e, n, r, o) {
    for (let i in e) {
        if (!e.hasOwnProperty(i)) continue;
        let s = e[i];
        if (s === void 0) continue;
        r ? ? = {};
        let a, u = it.None;
        Array.isArray(s) ? (a = s[0], u = s[1]) : a = s;
        let l = i;
        if (o !== null) {
            if (!o.hasOwnProperty(i)) continue;
            l = o[i]
        }
        t === 0 ? gc(r, n, l, a, u) : gc(r, n, l, a)
    }
    return r
}

function gc(t, e, n, r, o) {
    let i;
    t.hasOwnProperty(n) ? (i = t[n]).push(e, r) : i = t[n] = [e, r], o !== void 0 && i.push(o)
}

function Zv(t, e, n) {
    let r = e.directiveStart,
        o = e.directiveEnd,
        i = t.data,
        s = e.attrs,
        a = [],
        u = null,
        l = null;
    for (let c = r; c < o; c++) {
        let d = i[c],
            h = n ? n.get(d) : null,
            f = h ? h.inputs : null,
            p = h ? h.outputs : null;
        u = pc(0, d.inputs, c, u, f), l = pc(1, d.outputs, c, l, p);
        let g = u !== null && s !== null && !ua(e) ? dD(u, c, s) : null;
        a.push(g)
    }
    u !== null && (u.hasOwnProperty("class") && (e.flags |= 8), u.hasOwnProperty("style") && (e.flags |= 16)), e.initialInputs = a, e.inputs = u, e.outputs = l
}

function Kv(t) {
    return t === "class" ? "className" : t === "for" ? "htmlFor" : t === "formaction" ? "formAction" : t === "innerHtml" ? "innerHTML" : t === "readonly" ? "readOnly" : t === "tabindex" ? "tabIndex" : t
}

function ja(t, e, n, r, o, i, s, a) {
    let u = ye(e, n),
        l = e.inputs,
        c;
    !a && l != null && (c = l[r]) ? (Ba(t, n, c, r, o), Gn(e) && Yv(n, e.index)) : e.type & 3 ? (r = Kv(r), o = s != null ? s(o, e.value || "", r) : o, i.setProperty(u, r, o)) : e.type & 12
}

function Yv(t, e) {
    let n = dt(e, t);
    n[w] & 16 || (n[w] |= 64)
}

function Va(t, e, n, r) {
    if (bd()) {
        let o = r === null ? null : {
                "": -1
            },
            i = nD(t, n),
            s, a;
        i === null ? s = a = null : [s, a] = i, s !== null && $f(t, e, n, s, o, a), o && rD(n, r, o)
    }
    n.mergedAttrs = Rn(n.mergedAttrs, n.attrs)
}

function $f(t, e, n, r, o, i) {
    for (let l = 0; l < r.length; l++) sy(Vd(n, e), t, r[l].type);
    iD(n, t.data.length, r.length);
    for (let l = 0; l < r.length; l++) {
        let c = r[l];
        c.providersResolver && c.providersResolver(c)
    }
    let s = !1,
        a = !1,
        u = Lf(t, e, r.length, null);
    for (let l = 0; l < r.length; l++) {
        let c = r[l];
        n.mergedAttrs = Rn(n.mergedAttrs, c.hostAttrs), sD(t, n, e, u, c), oD(u, c, o), c.contentQueries !== null && (n.flags |= 4), (c.hostBindings !== null || c.hostAttrs !== null || c.hostVars !== 0) && (n.flags |= 64);
        let d = c.type.prototype;
        !s && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && ((t.preOrderHooks ? ? = []).push(n.index), s = !0), !a && (d.ngOnChanges || d.ngDoCheck) && ((t.preOrderCheckHooks ? ? = []).push(n.index), a = !0), u++
    }
    Zv(t, n, i)
}

function Jv(t, e, n, r, o) {
    let i = o.hostBindings;
    if (i) {
        let s = t.hostBindingOpCodes;
        s === null && (s = t.hostBindingOpCodes = []);
        let a = ~e.index;
        Xv(s) != a && s.push(a), s.push(n, r, i)
    }
}

function Xv(t) {
    let e = t.length;
    for (; e > 0;) {
        let n = t[--e];
        if (typeof n == "number" && n < 0) return n
    }
    return 0
}

function eD(t, e, n, r) {
    let o = n.directiveStart,
        i = n.directiveEnd;
    Gn(n) && aD(e, n, t.data[o + n.componentOffset]), t.firstCreatePass || Vd(n, e), lt(r, e);
    let s = n.initialInputs;
    for (let a = o; a < i; a++) {
        let u = t.data[a],
            l = rn(e, t, a, n);
        if (lt(l, e), s !== null && cD(e, a - o, l, u, n, s), Tt(u)) {
            let c = dt(n.index, e);
            c[xe] = rn(e, t, a, n)
        }
    }
}

function Hf(t, e, n) {
    let r = n.directiveStart,
        o = n.directiveEnd,
        i = n.index,
        s = Wm();
    try {
        xt(i);
        for (let a = r; a < o; a++) {
            let u = t.data[a],
                l = e[a];
            as(a), (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) && tD(u, l)
        }
    } finally {
        xt(-1), as(s)
    }
}

function tD(t, e) {
    t.hostBindings !== null && t.hostBindings(1, e)
}

function nD(t, e) {
    let n = t.directiveRegistry,
        r = null,
        o = null;
    if (n)
        for (let i = 0; i < n.length; i++) {
            let s = n[i];
            if (Yc(e, s.selectors, !1))
                if (r || (r = []), Tt(s))
                    if (s.findHostDirectiveDefs !== null) {
                        let a = [];
                        o = o || new Map, s.findHostDirectiveDefs(s, a, o), r.unshift(...a, s);
                        let u = a.length;
                        xs(t, e, u)
                    } else r.unshift(s), xs(t, e, 0);
            else o = o || new Map, s.findHostDirectiveDefs ? .(s, r, o), r.push(s)
        }
    return r === null ? null : [r, o]
}

function xs(t, e, n) {
    e.componentOffset = n, (t.components ? ? = []).push(e.index)
}

function rD(t, e, n) {
    if (e) {
        let r = t.localNames = [];
        for (let o = 0; o < e.length; o += 2) {
            let i = n[e[o + 1]];
            if (i == null) throw new m(-301, !1);
            r.push(e[o], i)
        }
    }
}

function oD(t, e, n) {
    if (n) {
        if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
        Tt(e) && (n[""] = t)
    }
}

function iD(t, e, n) {
    t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
}

function sD(t, e, n, r, o) {
    t.data[r] = o;
    let i = o.factory || (o.factory = _t(o.type, !0)),
        s = new Vn(i, Tt(o), de);
    t.blueprint[r] = s, n[r] = s, Jv(t, e, r, Lf(t, n, o.hostVars, Oe), o)
}

function aD(t, e, n) {
    let r = ye(e, t),
        o = Vf(n),
        i = t[Be].rendererFactory,
        s = 16;
    n.signals ? s = 4096 : n.onPush && (s = 64);
    let a = Uo(t, Ho(t, o, null, s, r, e, null, i.createRenderer(r, n), null, null, null));
    t[e.index] = a
}

function uD(t, e, n, r, o, i) {
    let s = ye(t, e);
    lD(e[B], s, i, t.value, n, r, o)
}

function lD(t, e, n, r, o, i, s) {
    if (i == null) t.removeAttribute(e, o, n);
    else {
        let a = s == null ? Un(i) : s(i, r || "", o);
        t.setAttribute(e, o, a, n)
    }
}

function cD(t, e, n, r, o, i) {
    let s = i[e];
    if (s !== null)
        for (let a = 0; a < s.length;) {
            let u = s[a++],
                l = s[a++],
                c = s[a++],
                d = s[a++];
            kf(r, n, u, l, c, d)
        }
}

function dD(t, e, n) {
    let r = null,
        o = 0;
    for (; o < n.length;) {
        let i = n[o];
        if (i === 0) {
            o += 4;
            continue
        } else if (i === 5) {
            o += 2;
            continue
        }
        if (typeof i == "number") break;
        if (t.hasOwnProperty(i)) {
            r === null && (r = []);
            let s = t[i];
            for (let a = 0; a < s.length; a += 3)
                if (s[a] === e) {
                    r.push(i, s[a + 1], s[a + 2], n[o + 1]);
                    break
                }
        }
        o += 2
    }
    return r
}

function Uf(t, e, n, r) {
    return [t, !0, 0, e, null, r, null, n, null, null]
}

function zf(t, e) {
    let n = t.contentQueries;
    if (n !== null) {
        let r = P(null);
        try {
            for (let o = 0; o < n.length; o += 2) {
                let i = n[o],
                    s = n[o + 1];
                if (s !== -1) {
                    let a = t.data[s];
                    ma(i), a.contentQueries(2, e[s], s)
                }
            }
        } finally {
            P(r)
        }
    }
}

function Uo(t, e) {
    return t[Ln] ? t[Ql][Me] = e : t[Ln] = e, t[Ql] = e, e
}

function As(t, e, n) {
    ma(0);
    let r = P(null);
    try {
        e(t, n)
    } finally {
        P(r)
    }
}

function Gf(t) {
    return t[to] ? ? = []
}

function qf(t) {
    return t.cleanup ? ? = []
}

function Wf(t, e) {
    let n = t[en],
        r = n ? n.get(on, null) : null;
    r && r.handleError(e)
}

function Ba(t, e, n, r, o) {
    for (let i = 0; i < n.length;) {
        let s = n[i++],
            a = n[i++],
            u = n[i++],
            l = e[s],
            c = t.data[s];
        kf(c, l, r, a, u, o)
    }
}

function fD(t, e, n) {
    let r = md(e, t);
    _v(t[B], r, n)
}

function hD(t, e) {
    let n = dt(e, t),
        r = n[C];
    pD(r, n);
    let o = n[me];
    o !== null && n[Ne] === null && (n[Ne] = _a(o, n[en])), $a(r, n, n[xe])
}

function pD(t, e) {
    for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
}

function $a(t, e, n) {
    ya(e);
    try {
        let r = t.viewQuery;
        r !== null && As(1, r, n);
        let o = t.template;
        o !== null && jf(t, e, o, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), e[We] ? .finishViewCreation(t), t.staticContentQueries && zf(t, e), t.staticViewQueries && As(2, t.viewQuery, n);
        let i = t.components;
        i !== null && gD(e, i)
    } catch (r) {
        throw t.firstCreatePass && (t.incompleteFirstPass = !0, t.firstCreatePass = !1), r
    } finally {
        e[w] &= -5, va()
    }
}

function gD(t, e) {
    for (let n = 0; n < e.length; n++) hD(t, e[n])
}

function Qf(t, e, n, r) {
    let o = P(null);
    try {
        let i = e.tView,
            a = t[w] & 4096 ? 4096 : 16,
            u = Ho(t, i, n, a, null, e, null, null, r ? .injector ? ? null, r ? .embeddedViewInjector ? ? null, r ? .dehydratedView ? ? null),
            l = t[e.index];
        u[Mt] = l;
        let c = t[We];
        return c !== null && (u[We] = c.createEmbeddedView(i)), $a(i, u, n), u
    } finally {
        P(o)
    }
}

function Os(t, e) {
    return !e || e.firstChild === null || co(t)
}

function Zf(t, e, n, r = !0) {
    let o = e[C];
    if (Nv(o, e, t, n), r) {
        let s = Ns(n, t),
            a = e[B],
            u = Tf(a, t[Qe]);
        u !== null && Mv(o, t[ce], a, e, u, s)
    }
    let i = e[Ne];
    i !== null && i.firstChild !== null && (i.firstChild = null)
}

function po(t, e, n, r, o = !1) {
    for (; n !== null;) {
        if (n.type === 128) {
            n = o ? n.projectionNext : n.next;
            continue
        }
        let i = e[n.index];
        i !== null && r.push(Ae(i)), He(i) && mD(i, r);
        let s = n.type;
        if (s & 8) po(t, e, n.child, r);
        else if (s & 32) {
            let a = Na(n, e),
                u;
            for (; u = a();) r.push(u)
        } else if (s & 16) {
            let a = xf(e, n);
            if (Array.isArray(a)) r.push(...a);
            else {
                let u = Nt(e[le]);
                po(u[C], u, a, r, !0)
            }
        }
        n = o ? n.projectionNext : n.next
    }
    return r
}

function mD(t, e) {
    for (let n = ue; n < t.length; n++) {
        let r = t[n],
            o = r[C].firstChild;
        o !== null && po(r[C], r, o, e)
    }
    t[Qe] !== t[me] && e.push(t[Qe])
}
var Kf = [];

function yD(t) {
    return t[Ie] ? ? vD(t)
}

function vD(t) {
    let e = Kf.pop() ? ? Object.create(ED);
    return e.lView = t, e
}

function DD(t) {
    t.lView[Ie] !== t && (t.lView = null, Kf.push(t))
}
var ED = Re(ie({}, bn), {
    consumerIsAlwaysLive: !0,
    consumerMarkedDirty: t => {
        xo(t.lView)
    },
    consumerOnSignalRead() {
        this.lView[Ie] = this
    }
});

function wD(t) {
    let e = t[Ie] ? ? Object.create(ID);
    return e.lView = t, e
}
var ID = Re(ie({}, bn), {
    consumerIsAlwaysLive: !0,
    consumerMarkedDirty: t => {
        let e = Nt(t.lView);
        for (; e && !Yf(e[C]);) e = Nt(e);
        e && Ed(e)
    },
    consumerOnSignalRead() {
        this.lView[Ie] = this
    }
});

function Yf(t) {
    return t.type !== 2
}
var bD = 100;

function Jf(t, e = !0, n = 0) {
    let r = t[Be],
        o = r.rendererFactory,
        i = !1;
    i || o.begin ? .();
    try {
        CD(t, n)
    } catch (s) {
        throw e && Wf(t, s), s
    } finally {
        i || (o.end ? .(), r.inlineEffectRunner ? .flush())
    }
}

function CD(t, e) {
    let n = _d();
    try {
        Kl(!0), Fs(t, e);
        let r = 0;
        for (; No(t);) {
            if (r === bD) throw new m(103, !1);
            r++, Fs(t, 1)
        }
    } finally {
        Kl(n)
    }
}

function _D(t, e, n, r) {
    let o = e[w];
    if ((o & 256) === 256) return;
    let i = !1,
        s = !1;
    !i && e[Be].inlineEffectRunner ? .flush(), ya(e);
    let a = !0,
        u = null,
        l = null;
    i || (Yf(t) ? (l = yD(e), u = cr(l)) : Ju() === null ? (a = !1, l = wD(e), u = cr(l)) : e[Ie] && (vi(e[Ie]), e[Ie] = null));
    try {
        Dd(e), zm(t.bindingStartIndex), n !== null && jf(t, e, n, 2, r);
        let c = (o & 3) === 3;
        if (!i)
            if (c) {
                let f = t.preOrderCheckHooks;
                f !== null && Gr(e, f, null)
            } else {
                let f = t.preOrderHooks;
                f !== null && qr(e, f, 0, null), Bi(e, 0)
            }
        if (s || SD(e), Xf(e, 0), t.contentQueries !== null && zf(t, e), !i)
            if (c) {
                let f = t.contentCheckHooks;
                f !== null && Gr(e, f)
            } else {
                let f = t.contentHooks;
                f !== null && qr(e, f, 1), Bi(e, 1)
            }
        Bv(t, e);
        let d = t.components;
        d !== null && th(e, d, 0);
        let h = t.viewQuery;
        if (h !== null && As(2, h, r), !i)
            if (c) {
                let f = t.viewCheckHooks;
                f !== null && Gr(e, f)
            } else {
                let f = t.viewHooks;
                f !== null && qr(e, f, 2), Bi(e, 2)
            }
        if (t.firstUpdatePass === !0 && (t.firstUpdatePass = !1), e[Vi]) {
            for (let f of e[Vi]) f();
            e[Vi] = null
        }
        i || (e[w] &= -73)
    } catch (c) {
        throw i || xo(e), c
    } finally {
        l !== null && (mi(l, u), a && DD(l)), va()
    }
}

function Xf(t, e) {
    for (let n = Xd(t); n !== null; n = ef(n))
        for (let r = ue; r < n.length; r++) {
            let o = n[r];
            eh(o, e)
        }
}

function SD(t) {
    for (let e = Xd(t); e !== null; e = ef(e)) {
        if (!(e[w] & ro.HasTransplantedViews)) continue;
        let n = e[tn];
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            Ed(o)
        }
    }
}

function MD(t, e, n) {
    let r = dt(e, t);
    eh(r, n)
}

function eh(t, e) {
    ha(t) && Fs(t, e)
}

function Fs(t, e) {
    let r = t[C],
        o = t[w],
        i = t[Ie],
        s = !!(e === 0 && o & 16);
    if (s || = !!(o & 64 && e === 0), s || = !!(o & 1024), s || = !!(i ? .dirty && yi(i)), s || = !1, i && (i.dirty = !1), t[w] &= -9217, s) _D(r, t, r.template, t[xe]);
    else if (o & 8192) {
        Xf(t, 1);
        let a = r.components;
        a !== null && th(t, a, 1)
    }
}

function th(t, e, n) {
    for (let r = 0; r < e.length; r++) MD(t, e[r], n)
}

function Ha(t, e) {
    let n = _d() ? 64 : 1088;
    for (t[Be].changeDetectionScheduler ? .notify(e); t;) {
        t[w] |= n;
        let r = Nt(t);
        if (oo(t) && !r) return t;
        t = r
    }
    return null
}
var At = class {
        get rootNodes() {
            let e = this._lView,
                n = e[C];
            return po(n, e, n.firstChild, [])
        }
        constructor(e, n, r = !0) {
            this._lView = e, this._cdRefInjectingView = n, this.notifyErrorHandler = r, this._appRef = null, this._attachedToViewContainer = !1
        }
        get context() {
            return this._lView[xe]
        }
        set context(e) {
            this._lView[xe] = e
        }
        get destroyed() {
            return (this._lView[w] & 256) === 256
        }
        destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._attachedToViewContainer) {
                let e = this._lView[ee];
                if (He(e)) {
                    let n = e[no],
                        r = n ? n.indexOf(this) : -1;
                    r > -1 && (Ts(e, r), Xr(n, r))
                }
                this._attachedToViewContainer = !1
            }
            _f(this._lView[C], this._lView)
        }
        onDestroy(e) {
            wd(this._lView, e)
        }
        markForCheck() {
            Ha(this._cdRefInjectingView || this._lView, 4)
        }
        detach() {
            this._lView[w] &= -129
        }
        reattach() {
            ss(this._lView), this._lView[w] |= 128
        }
        detectChanges() {
            this._lView[w] |= 1024, Jf(this._lView, this.notifyErrorHandler)
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
            if (this._appRef) throw new m(902, !1);
            this._attachedToViewContainer = !0
        }
        detachFromAppRef() {
            this._appRef = null;
            let e = oo(this._lView),
                n = this._lView[Mt];
            n !== null && !e && Aa(n, this._lView), bf(this._lView[C], this._lView)
        }
        attachToAppRef(e) {
            if (this._attachedToViewContainer) throw new m(902, !1);
            this._appRef = e;
            let n = oo(this._lView),
                r = this._lView[Mt];
            r !== null && !n && Cf(r, this._lView), ss(this._lView)
        }
    },
    Ot = (() => {
        let e = class e {};
        e.__NG_ELEMENT_ID__ = xD;
        let t = e;
        return t
    })(),
    TD = Ot,
    ND = class extends TD {
        constructor(e, n, r) {
            super(), this._declarationLView = e, this._declarationTContainer = n, this.elementRef = r
        }
        get ssrId() {
            return this._declarationTContainer.tView ? .ssrId || null
        }
        createEmbeddedView(e, n) {
            return this.createEmbeddedViewImpl(e, n)
        }
        createEmbeddedViewImpl(e, n, r) {
            let o = Qf(this._declarationLView, this._declarationTContainer, e, {
                embeddedViewInjector: n,
                dehydratedView: r
            });
            return new At(o)
        }
    };

function xD() {
    return zo(ne(), S())
}

function zo(t, e) {
    return t.type & 4 ? new ND(e, t, mn(t, e)) : null
}
var AD = new RegExp(`^(\\d+)*(${of}|${rf})*(.*)`);

function OD(t) {
    let e = t.match(AD),
        [n, r, o, i] = e,
        s = r ? parseInt(r, 10) : o,
        a = [];
    for (let [u, l, c] of i.matchAll(/(f|n)(\d*)/g)) {
        let d = parseInt(c, 10) || 1;
        a.push(l, d)
    }
    return [s, ...a]
}

function FD(t) {
    return !t.prev && t.parent ? .type === 8
}

function qi(t) {
    return t.index - G
}

function PD(t, e) {
    let n = t.i18nNodes;
    if (n) return n.get(e)
}

function Go(t, e, n, r) {
    let o = qi(r),
        i = PD(t, o);
    if (i === void 0) {
        let s = t.data[$y];
        if (s ? .[o]) i = kD(s[o], n);
        else if (e.firstChild === r) i = t.firstChild;
        else {
            let a = r.prev === null,
                u = r.prev ? ? r.parent;
            if (FD(r)) {
                let l = qi(r.parent);
                i = Ds(t, l)
            } else {
                let l = ye(u, n);
                if (a) i = l.firstChild;
                else {
                    let c = qi(u),
                        d = Ds(t, c);
                    if (u.type === 2 && d) {
                        let f = Sa(t, c) + 1;
                        i = qo(f, d)
                    } else i = l.nextSibling
                }
            }
        }
    }
    return i
}

function qo(t, e) {
    let n = e;
    for (let r = 0; r < t; r++) n = n.nextSibling;
    return n
}

function RD(t, e) {
    let n = t;
    for (let r = 0; r < e.length; r += 2) {
        let o = e[r],
            i = e[r + 1];
        for (let s = 0; s < i; s++) switch (o) {
            case vs.FirstChild:
                n = n.firstChild;
                break;
            case vs.NextSibling:
                n = n.nextSibling;
                break
        }
    }
    return n
}

function kD(t, e) {
    let [n, ...r] = OD(t), o;
    if (n === rf) o = e[le][me];
    else if (n === of ) o = bv(e[le][me]);
    else {
        let i = Number(n);
        o = Ae(e[i + G])
    }
    return RD(o, r)
}
var LD = !1;

function jD(t) {
    LD = t
}

function VD(t) {
    let e = t[Ne];
    if (e) {
        let {
            i18nNodes: n,
            dehydratedIcuData: r
        } = e;
        if (n && r) {
            let o = t[B];
            for (let i of r.values()) BD(o, n, i)
        }
        e.i18nNodes = void 0, e.dehydratedIcuData = void 0
    }
}

function BD(t, e, n) {
    for (let r of n.node.cases[n.case]) {
        let o = e.get(r.index - G);
        o && Oa(t, o, !1)
    }
}

function nh(t) {
    let e = t[jn] ? ? [],
        r = t[ee][B];
    for (let o of e) $D(o, r);
    t[jn] = re
}

function $D(t, e) {
    let n = 0,
        r = t.firstChild;
    if (r) {
        let o = t.data[fo];
        for (; n < o;) {
            let i = r.nextSibling;
            Oa(e, r, !1), r = i, n++
        }
    }
}

function rh(t) {
    nh(t);
    let e = t[me];
    Te(e) && go(e);
    for (let n = ue; n < t.length; n++) go(t[n])
}

function go(t) {
    VD(t);
    let e = t[C];
    for (let n = G; n < e.bindingStartIndex; n++)
        if (He(t[n])) {
            let r = t[n];
            rh(r)
        } else Te(t[n]) && go(t[n])
}

function HD(t) {
    let e = t._views;
    for (let n of e) {
        let r = qy(n);
        r !== null && r[me] !== null && (Te(r) ? go(r) : rh(r))
    }
}

function UD(t, e) {
    let n = [];
    for (let r of e)
        for (let o = 0; o < (r[sf] ? ? 1); o++) {
            let i = {
                data: r,
                firstChild: null
            };
            r[fo] > 0 && (i.firstChild = t, t = qo(r[fo], t)), n.push(i)
        }
    return [t, n]
}
var oh = () => null;

function zD(t, e) {
    let n = t[jn];
    return !e || n === null || n.length === 0 ? null : n[0].data[By] === e ? n.shift() : (nh(t), null)
}

function GD() {
    oh = zD
}

function Ps(t, e) {
    return oh(t, e)
}
var sn = class {},
    ih = new k("", {
        providedIn: "root",
        factory: () => !1
    });
var sh = new k(""),
    ah = new k(""),
    Rs = class {},
    mo = class {};

function qD(t) {
    let e = Error(`No component factory found for ${oe(t)}.`);
    return e[WD] = t, e
}
var WD = "ngComponent";
var ks = class {
        resolveComponentFactory(e) {
            throw qD(e)
        }
    },
    Ya = class Ya {};
Ya.NULL = new ks;
var an = Ya,
    un = class {},
    Wo = (() => {
        let e = class e {
            constructor() {
                this.destroyNode = null
            }
        };
        e.__NG_ELEMENT_ID__ = () => QD();
        let t = e;
        return t
    })();

function QD() {
    let t = S(),
        e = ne(),
        n = dt(e.index, t);
    return (Te(n) ? n : t)[B]
}
var ZD = (() => {
    let e = class e {};
    e.\u0275prov = R({
        token: e,
        providedIn: "root",
        factory: () => null
    });
    let t = e;
    return t
})();

function yo(t, e, n) {
    let r = n ? t.styles : null,
        o = n ? t.classes : null,
        i = 0;
    if (e !== null)
        for (let s = 0; s < e.length; s++) {
            let a = e[s];
            if (typeof a == "number") i = a;
            else if (i == 1) o = Ki(o, a);
            else if (i == 2) {
                let u = a,
                    l = e[++s];
                r = Ki(r, u + ": " + l + ";")
            }
        }
    n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = o : t.classesWithoutHost = o
}
var vo = class extends an {
    constructor(e) {
        super(), this.ngModule = e
    }
    resolveComponentFactory(e) {
        let n = st(e);
        return new ln(n, this.ngModule)
    }
};

function mc(t, e) {
    let n = [];
    for (let r in t) {
        if (!t.hasOwnProperty(r)) continue;
        let o = t[r];
        if (o === void 0) continue;
        let i = Array.isArray(o),
            s = i ? o[0] : o,
            a = i ? o[1] : it.None;
        e ? n.push({
            propName: s,
            templateName: r,
            isSignal: (a & it.SignalBased) !== 0
        }) : n.push({
            propName: s,
            templateName: r
        })
    }
    return n
}

function KD(t) {
    let e = t.toLowerCase();
    return e === "svg" ? gd : e === "math" ? Am : null
}
var ln = class extends mo {
        get inputs() {
            let e = this.componentDef,
                n = e.inputTransforms,
                r = mc(e.inputs, !0);
            if (n !== null)
                for (let o of r) n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
            return r
        }
        get outputs() {
            return mc(this.componentDef.outputs, !1)
        }
        constructor(e, n) {
            super(), this.componentDef = e, this.ngModule = n, this.componentType = e.type, this.selector = am(e.selectors), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!n
        }
        create(e, n, r, o) {
            let i = P(null);
            try {
                o = o || this.ngModule;
                let s = o instanceof at ? o : o ? .injector;
                s && this.componentDef.getStandaloneInjector !== null && (s = this.componentDef.getStandaloneInjector(s) || s);
                let a = s ? new us(e, s) : e,
                    u = a.get(un, null);
                if (u === null) throw new m(407, !1);
                let l = a.get(ZD, null),
                    c = a.get(sn, null),
                    d = {
                        rendererFactory: u,
                        sanitizer: l,
                        inlineEffectRunner: null,
                        changeDetectionScheduler: c
                    },
                    h = u.createRenderer(null, this.componentDef),
                    f = this.componentDef.selectors[0][0] || "div",
                    p = r ? Uv(h, r, this.componentDef.encapsulation, a) : xa(h, f, KD(f)),
                    g = 512;
                this.componentDef.signals ? g |= 4096 : this.componentDef.onPush || (g |= 16);
                let M = null;
                p !== null && (M = _a(p, a, !0));
                let T = La(0, null, null, 1, 0, null, null, null, null, null, null),
                    F = Ho(null, T, null, g, null, null, d, h, a, null, M);
                ya(F);
                let $, L, fe = null;
                try {
                    let H = this.componentDef,
                        z, K = null;
                    H.findHostDirectiveDefs ? (z = [], K = new Map, H.findHostDirectiveDefs(H, z, K), z.push(H)) : z = [H];
                    let Ge = YD(F, p);
                    fe = JD(Ge, p, H, z, F, d, h), L = yd(T, G), p && tE(h, H, p, r), n !== void 0 && nE(L, this.ngContentSelectors, n), $ = eE(fe, H, z, K, F, [rE]), $a(T, F, null)
                } catch (H) {
                    throw fe !== null && ms(fe), ms(F), H
                } finally {
                    va()
                }
                return new Ls(this.componentType, $, mn(L, F), F, L)
            } finally {
                P(i)
            }
        }
    },
    Ls = class extends Rs {
        constructor(e, n, r, o, i) {
            super(), this.location = r, this._rootLView = o, this._tNode = i, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new At(o, void 0, !1), this.componentType = e
        }
        setInput(e, n) {
            let r = this._tNode.inputs,
                o;
            if (r !== null && (o = r[e])) {
                if (this.previousInputValues ? ? = new Map, this.previousInputValues.has(e) && Object.is(this.previousInputValues.get(e), n)) return;
                let i = this._rootLView;
                Ba(i[C], i, o, e, n), this.previousInputValues.set(e, n);
                let s = dt(this._tNode.index, i);
                Ha(s, 1)
            }
        }
        get injector() {
            return new Ct(this._tNode, this._rootLView)
        }
        destroy() {
            this.hostView.destroy()
        }
        onDestroy(e) {
            this.hostView.onDestroy(e)
        }
    };

function YD(t, e) {
    let n = t[C],
        r = G;
    return t[r] = e, yn(n, r, 2, "#host", null)
}

function JD(t, e, n, r, o, i, s) {
    let a = o[C];
    XD(r, t, e, s);
    let u = null;
    e !== null && (u = _a(e, o[en]));
    let l = i.rendererFactory.createRenderer(e, n),
        c = 16;
    n.signals ? c = 4096 : n.onPush && (c = 64);
    let d = Ho(o, Vf(n), null, c, o[t.index], t, i, l, null, null, u);
    return a.firstCreatePass && xs(a, t, r.length - 1), Uo(o, d), o[t.index] = d
}

function XD(t, e, n, r) {
    for (let o of t) e.mergedAttrs = Rn(e.mergedAttrs, o.hostAttrs);
    e.mergedAttrs !== null && (yo(e, e.mergedAttrs, !0), n !== null && Pf(r, n, e))
}

function eE(t, e, n, r, o, i) {
    let s = ne(),
        a = o[C],
        u = ye(s, o);
    $f(a, o, s, n, null, r);
    for (let c = 0; c < n.length; c++) {
        let d = s.directiveStart + c,
            h = rn(o, a, d, s);
        lt(h, o)
    }
    Hf(a, o, s), u && lt(u, o);
    let l = rn(o, a, s.directiveStart + s.componentOffset, s);
    if (t[xe] = o[xe] = l, i !== null)
        for (let c of i) c(l, e);
    return Pa(a, s, o), l
}

function tE(t, e, n, r) {
    if (r) es(t, n, ["ng-version", "18.2.2"]);
    else {
        let {
            attrs: o,
            classes: i
        } = um(e.selectors[0]);
        o && es(t, n, o), i && i.length > 0 && Ff(t, n, i.join(" "))
    }
}

function nE(t, e, n) {
    let r = t.projection = [];
    for (let o = 0; o < e.length; o++) {
        let i = n[o];
        r.push(i != null ? Array.from(i) : null)
    }
}

function rE() {
    let t = ne();
    Po(S()[C], t)
}
var Lt = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = oE;
    let t = e;
    return t
})();

function oE() {
    let t = ne();
    return lh(t, S())
}
var iE = Lt,
    uh = class extends iE {
        constructor(e, n, r) {
            super(), this._lContainer = e, this._hostTNode = n, this._hostLView = r
        }
        get element() {
            return mn(this._hostTNode, this._hostLView)
        }
        get injector() {
            return new Ct(this._hostTNode, this._hostLView)
        }
        get parentInjector() {
            let e = Da(this._hostTNode, this._hostLView);
            if (kd(e)) {
                let n = so(e, this._hostLView),
                    r = io(e),
                    o = n[C].data[r + 8];
                return new Ct(o, n)
            } else return new Ct(null, this._hostLView)
        }
        clear() {
            for (; this.length > 0;) this.remove(this.length - 1)
        }
        get(e) {
            let n = yc(this._lContainer);
            return n !== null && n[e] || null
        }
        get length() {
            return this._lContainer.length - ue
        }
        createEmbeddedView(e, n, r) {
            let o, i;
            typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector);
            let s = Ps(this._lContainer, e.ssrId),
                a = e.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, Os(this._hostTNode, s)), a
        }
        createComponent(e, n, r, o, i) {
            let s = e && !Mm(e),
                a;
            if (s) a = n;
            else {
                let p = n || {};
                a = p.index, r = p.injector, o = p.projectableNodes, i = p.environmentInjector || p.ngModuleRef
            }
            let u = s ? e : new ln(st(e)),
                l = r || this.parentInjector;
            if (!i && u.ngModule == null) {
                let g = (s ? l : this.parentInjector).get(at, null);
                g && (i = g)
            }
            let c = st(u.componentType ? ? {}),
                d = Ps(this._lContainer, c ? .id ? ? null),
                h = d ? .firstChild ? ? null,
                f = u.create(l, o, h, i);
            return this.insertImpl(f.hostView, a, Os(this._hostTNode, d)), f
        }
        insert(e, n) {
            return this.insertImpl(e, n, !0)
        }
        insertImpl(e, n, r) {
            let o = e._lView;
            if (Fm(o)) {
                let a = this.indexOf(e);
                if (a !== -1) this.detach(a);
                else {
                    let u = o[ee],
                        l = new uh(u, u[ce], u[ee]);
                    l.detach(l.indexOf(e))
                }
            }
            let i = this._adjustIndex(n),
                s = this._lContainer;
            return Zf(s, o, i, r), e.attachToViewContainerRef(), Gc(Wi(s), i, e), e
        }
        move(e, n) {
            return this.insert(e, n)
        }
        indexOf(e) {
            let n = yc(this._lContainer);
            return n !== null ? n.indexOf(e) : -1
        }
        remove(e) {
            let n = this._adjustIndex(e, -1),
                r = Ts(this._lContainer, n);
            r && (Xr(Wi(this._lContainer), n), _f(r[C], r))
        }
        detach(e) {
            let n = this._adjustIndex(e, -1),
                r = Ts(this._lContainer, n);
            return r && Xr(Wi(this._lContainer), n) != null ? new At(r) : null
        }
        _adjustIndex(e, n = 0) {
            return e ? ? this.length + n
        }
    };

function yc(t) {
    return t[no]
}

function Wi(t) {
    return t[no] || (t[no] = [])
}

function lh(t, e) {
    let n, r = e[t.index];
    return He(r) ? n = r : (n = Uf(r, e, null, t), e[t.index] = n, Uo(e, n)), ch(n, e, t, r), new uh(n, t, e)
}

function sE(t, e) {
    let n = t[B],
        r = n.createComment(""),
        o = ye(e, t),
        i = Tf(n, o);
    return ho(n, i, r, Fv(n, o), !1), r
}
var ch = dh,
    Ua = () => !1;

function aE(t, e, n) {
    return Ua(t, e, n)
}

function dh(t, e, n, r) {
    if (t[Qe]) return;
    let o;
    n.type & 8 ? o = Ae(r) : o = sE(e, n), t[Qe] = o
}

function uE(t, e, n) {
    if (t[Qe] && t[jn]) return !0;
    let r = n[Ne],
        o = e.index - G;
    if (!r || Ny(e) || Wn(r, o)) return !1;
    let s = Ds(r, o),
        a = r.data[Ca] ? .[o],
        [u, l] = UD(s, a);
    return t[Qe] = u, t[jn] = l, !0
}

function lE(t, e, n, r) {
    Ua(t, n, e) || dh(t, e, n, r)
}

function cE() {
    ch = lE, Ua = uE
}
var js = class t {
        constructor(e) {
            this.queryList = e, this.matches = null
        }
        clone() {
            return new t(this.queryList)
        }
        setDirty() {
            this.queryList.setDirty()
        }
    },
    Vs = class t {
        constructor(e = []) {
            this.queries = e
        }
        createEmbeddedView(e) {
            let n = e.queries;
            if (n !== null) {
                let r = e.contentQueries !== null ? e.contentQueries[0] : n.length,
                    o = [];
                for (let i = 0; i < r; i++) {
                    let s = n.getByIndex(i),
                        a = this.queries[s.indexInDeclarationView];
                    o.push(a.clone())
                }
                return new t(o)
            }
            return null
        }
        insertView(e) {
            this.dirtyQueriesWithMatches(e)
        }
        detachView(e) {
            this.dirtyQueriesWithMatches(e)
        }
        finishViewCreation(e) {
            this.dirtyQueriesWithMatches(e)
        }
        dirtyQueriesWithMatches(e) {
            for (let n = 0; n < this.queries.length; n++) za(e, n).matches !== null && this.queries[n].setDirty()
        }
    },
    Do = class {
        constructor(e, n, r = null) {
            this.flags = n, this.read = r, typeof e == "string" ? this.predicate = vE(e) : this.predicate = e
        }
    },
    Bs = class t {
        constructor(e = []) {
            this.queries = e
        }
        elementStart(e, n) {
            for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(e, n)
        }
        elementEnd(e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(e)
        }
        embeddedTView(e) {
            let n = null;
            for (let r = 0; r < this.length; r++) {
                let o = n !== null ? n.length : 0,
                    i = this.getByIndex(r).embeddedTView(e, o);
                i && (i.indexInDeclarationView = r, n !== null ? n.push(i) : n = [i])
            }
            return n !== null ? new t(n) : null
        }
        template(e, n) {
            for (let r = 0; r < this.queries.length; r++) this.queries[r].template(e, n)
        }
        getByIndex(e) {
            return this.queries[e]
        }
        get length() {
            return this.queries.length
        }
        track(e) {
            this.queries.push(e)
        }
    },
    $s = class t {
        constructor(e, n = -1) {
            this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
        }
        elementStart(e, n) {
            this.isApplyingToNode(n) && this.matchTNode(e, n)
        }
        elementEnd(e) {
            this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
        }
        template(e, n) {
            this.elementStart(e, n)
        }
        embeddedTView(e, n) {
            return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, n), new t(this.metadata)) : null
        }
        isApplyingToNode(e) {
            if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
                let n = this._declarationNodeIndex,
                    r = e.parent;
                for (; r !== null && r.type & 8 && r.index !== n;) r = r.parent;
                return n === (r !== null ? r.index : -1)
            }
            return this._appliesToNextNode
        }
        matchTNode(e, n) {
            let r = this.metadata.predicate;
            if (Array.isArray(r))
                for (let o = 0; o < r.length; o++) {
                    let i = r[o];
                    this.matchTNodeWithReadOption(e, n, dE(n, i)), this.matchTNodeWithReadOption(e, n, Wr(n, e, i, !1, !1))
                } else r === Ot ? n.type & 4 && this.matchTNodeWithReadOption(e, n, -1) : this.matchTNodeWithReadOption(e, n, Wr(n, e, r, !1, !1))
        }
        matchTNodeWithReadOption(e, n, r) {
            if (r !== null) {
                let o = this.metadata.read;
                if (o !== null)
                    if (o === ht || o === Lt || o === Ot && n.type & 4) this.addMatch(n.index, -2);
                    else {
                        let i = Wr(n, e, o, !1, !1);
                        i !== null && this.addMatch(n.index, i)
                    }
                else this.addMatch(n.index, r)
            }
        }
        addMatch(e, n) {
            this.matches === null ? this.matches = [e, n] : this.matches.push(e, n)
        }
    };

function dE(t, e) {
    let n = t.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2)
            if (n[r] === e) return n[r + 1]
    }
    return null
}

function fE(t, e) {
    return t.type & 11 ? mn(t, e) : t.type & 4 ? zo(t, e) : null
}

function hE(t, e, n, r) {
    return n === -1 ? fE(e, t) : n === -2 ? pE(t, e, r) : rn(t, t[C], n, e)
}

function pE(t, e, n) {
    if (n === ht) return mn(e, t);
    if (n === Ot) return zo(e, t);
    if (n === Lt) return lh(e, t)
}

function fh(t, e, n, r) {
    let o = e[We].queries[r];
    if (o.matches === null) {
        let i = t.data,
            s = n.matches,
            a = [];
        for (let u = 0; s !== null && u < s.length; u += 2) {
            let l = s[u];
            if (l < 0) a.push(null);
            else {
                let c = i[l];
                a.push(hE(e, c, s[u + 1], n.metadata.read))
            }
        }
        o.matches = a
    }
    return o.matches
}

function Hs(t, e, n, r) {
    let o = t.queries.getByIndex(n),
        i = o.matches;
    if (i !== null) {
        let s = fh(t, e, o, n);
        for (let a = 0; a < i.length; a += 2) {
            let u = i[a];
            if (u > 0) r.push(s[a / 2]);
            else {
                let l = i[a + 1],
                    c = e[-u];
                for (let d = ue; d < c.length; d++) {
                    let h = c[d];
                    h[Mt] === h[ee] && Hs(h[C], h, l, r)
                }
                if (c[tn] !== null) {
                    let d = c[tn];
                    for (let h = 0; h < d.length; h++) {
                        let f = d[h];
                        Hs(f[C], f, l, r)
                    }
                }
            }
        }
    }
    return r
}

function gE(t, e) {
    return t[We].queries[e].queryList
}

function hh(t, e, n) {
    let r = new gs((n & 4) === 4);
    return Wv(t, e, r, r.destroy), (e[We] ? ? = new Vs).queries.push(new js(r)) - 1
}

function mE(t, e, n) {
    let r = q();
    return r.firstCreatePass && (ph(r, new Do(t, e, n), -1), (e & 2) === 2 && (r.staticViewQueries = !0)), hh(r, S(), e)
}

function yE(t, e, n, r) {
    let o = q();
    if (o.firstCreatePass) {
        let i = ne();
        ph(o, new Do(e, n, r), i.index), DE(o, t), (n & 2) === 2 && (o.staticContentQueries = !0)
    }
    return hh(o, S(), n)
}

function vE(t) {
    return t.split(",").map(e => e.trim())
}

function ph(t, e, n) {
    t.queries === null && (t.queries = new Bs), t.queries.track(new $s(e, n))
}

function DE(t, e) {
    let n = t.contentQueries || (t.contentQueries = []),
        r = n.length ? n[n.length - 1] : -1;
    e !== r && n.push(t.queries.length - 1, e)
}

function za(t, e) {
    return t.queries.getByIndex(e)
}

function EE(t, e) {
    let n = t[C],
        r = za(n, e);
    return r.crossesNgTemplate ? Hs(n, t, e, []) : fh(n, t, r, e)
}
var vc = new Set;

function vn(t) {
    vc.has(t) || (vc.add(t), performance ? .mark ? .("mark_feature_usage", {
        detail: {
            feature: t
        }
    }))
}

function wE(t) {
    return typeof t == "function" && t[ke] !== void 0
}

function vN(t, e) {
    vn("NgSignals");
    let n = ll(t),
        r = n[ke];
    return e ? .equal && (r.equal = e.equal), n.set = o => hr(r, o), n.update = o => cl(r, o), n.asReadonly = IE.bind(n), n
}

function IE() {
    let t = this[ke];
    if (t.readonlyFn === void 0) {
        let e = () => this();
        e[ke] = t, t.readonlyFn = e
    }
    return t.readonlyFn
}

function gh(t) {
    return wE(t) && typeof t.set == "function"
}

function bE(t) {
    return Object.getPrototypeOf(t.prototype).constructor
}

function CE(t) {
    let e = bE(t.type),
        n = !0,
        r = [t];
    for (; e;) {
        let o;
        if (Tt(t)) o = e.\u0275cmp || e.\u0275dir;
        else {
            if (e.\u0275cmp) throw new m(903, !1);
            o = e.\u0275dir
        }
        if (o) {
            if (n) {
                r.push(o);
                let s = t;
                s.inputs = Br(t.inputs), s.inputTransforms = Br(t.inputTransforms), s.declaredInputs = Br(t.declaredInputs), s.outputs = Br(t.outputs);
                let a = o.hostBindings;
                a && NE(t, a);
                let u = o.viewQuery,
                    l = o.contentQueries;
                if (u && ME(t, u), l && TE(t, l), _E(t, o), Sg(t.outputs, o.outputs), Tt(o) && o.data.animation) {
                    let c = t.data;
                    c.animation = (c.animation || []).concat(o.data.animation)
                }
            }
            let i = o.features;
            if (i)
                for (let s = 0; s < i.length; s++) {
                    let a = i[s];
                    a && a.ngInherit && a(t), a === CE && (n = !1)
                }
        }
        e = Object.getPrototypeOf(e)
    }
    SE(r)
}

function _E(t, e) {
    for (let n in e.inputs) {
        if (!e.inputs.hasOwnProperty(n) || t.inputs.hasOwnProperty(n)) continue;
        let r = e.inputs[n];
        if (r !== void 0 && (t.inputs[n] = r, t.declaredInputs[n] = e.declaredInputs[n], e.inputTransforms !== null)) {
            let o = Array.isArray(r) ? r[0] : r;
            if (!e.inputTransforms.hasOwnProperty(o)) continue;
            t.inputTransforms ? ? = {}, t.inputTransforms[o] = e.inputTransforms[o]
        }
    }
}

function SE(t) {
    let e = 0,
        n = null;
    for (let r = t.length - 1; r >= 0; r--) {
        let o = t[r];
        o.hostVars = e += o.hostVars, o.hostAttrs = Rn(o.hostAttrs, n = Rn(n, o.hostAttrs))
    }
}

function Br(t) {
    return t === Xt ? {} : t === re ? [] : t
}

function ME(t, e) {
    let n = t.viewQuery;
    n ? t.viewQuery = (r, o) => {
        e(r, o), n(r, o)
    } : t.viewQuery = e
}

function TE(t, e) {
    let n = t.contentQueries;
    n ? t.contentQueries = (r, o, i) => {
        e(r, o, i), n(r, o, i)
    } : t.contentQueries = e
}

function NE(t, e) {
    let n = t.hostBindings;
    n ? t.hostBindings = (r, o) => {
        e(r, o), n(r, o)
    } : t.hostBindings = e
}

function xE(t) {
    let e = t.inputConfig,
        n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let o = e[r];
            Array.isArray(o) && o[3] && (n[r] = o[3])
        }
    t.inputTransforms = n
}
var ct = class {},
    Us = class {};
var zs = class extends ct {
        constructor(e, n, r, o = !0) {
            super(), this.ngModuleType = e, this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new vo(this);
            let i = td(e);
            this._bootstrapComponents = Ef(i.bootstrap), this._r3Injector = qd(e, n, [{
                provide: ct,
                useValue: this
            }, {
                provide: an,
                useValue: this.componentFactoryResolver
            }, ...r], oe(e), new Set(["environment"])), o && this.resolveInjectorInitializers()
        }
        resolveInjectorInitializers() {
            this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType)
        }
        get injector() {
            return this._r3Injector
        }
        destroy() {
            let e = this._r3Injector;
            !e.destroyed && e.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
        }
        onDestroy(e) {
            this.destroyCbs.push(e)
        }
    },
    Gs = class extends Us {
        constructor(e) {
            super(), this.moduleType = e
        }
        create(e) {
            return new zs(this.moduleType, e, [])
        }
    };
var Eo = class extends ct {
    constructor(e) {
        super(), this.componentFactoryResolver = new vo(this), this.instance = null;
        let n = new kn([...e.providers, {
            provide: ct,
            useValue: this
        }, {
            provide: an,
            useValue: this.componentFactoryResolver
        }], e.parent || ca(), e.debugName, new Set(["environment"]));
        this.injector = n, e.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(e) {
        this.injector.onDestroy(e)
    }
};

function AE(t, e, n = null) {
    return new Eo({
        providers: t,
        parent: e,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}

function mh(t) {
    return Ga(t) ? Array.isArray(t) || !(t instanceof Map) && Symbol.iterator in t : !1
}

function OE(t, e) {
    if (Array.isArray(t))
        for (let n = 0; n < t.length; n++) e(t[n]);
    else {
        let n = t[Symbol.iterator](),
            r;
        for (; !(r = n.next()).done;) e(r.value)
    }
}

function Ga(t) {
    return t !== null && (typeof t == "function" || typeof t == "object")
}

function Zn(t, e, n) {
    return t[e] = n
}

function FE(t, e) {
    return t[e]
}

function $e(t, e, n) {
    let r = t[e];
    return Object.is(r, n) ? !1 : (t[e] = n, !0)
}

function qs(t, e, n, r) {
    let o = $e(t, e, n);
    return $e(t, e + 1, r) || o
}

function PE(t, e, n, r, o, i) {
    let s = qs(t, e, n, r);
    return qs(t, e + 2, o, i) || s
}

function Kn(t) {
    return (t.flags & 32) === 32
}

function RE(t, e, n, r, o, i, s, a, u) {
    let l = e.consts,
        c = yn(e, t, 4, s || null, a || null);
    Va(e, n, c, nn(l, u)), Po(e, c);
    let d = c.tView = La(2, c, r, o, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, l, null);
    return e.queries !== null && (e.queries.template(e, c), d.queries = e.queries.embeddedTView(c)), c
}

function yh(t, e, n, r, o, i, s, a, u, l) {
    let c = n + G,
        d = e.firstCreatePass ? RE(c, e, t, r, o, i, s, a, u) : e.data[c];
    Pt(d, !1);
    let h = vh(e, t, d, n);
    Fo() && Bo(e, t, h, d), lt(h, t);
    let f = Uf(h, t, h, d);
    return t[c] = f, Uo(t, f), aE(f, d, t), To(d) && Ra(e, t, d), u != null && ka(t, d, l), d
}

function kE(t, e, n, r, o, i, s, a) {
    let u = S(),
        l = q(),
        c = nn(l.consts, i);
    return yh(u, l, t, e, n, r, o, c, s, a), kE
}
var vh = Dh;

function Dh(t, e, n, r) {
    return ft(!0), e[B].createComment("")
}

function LE(t, e, n, r) {
    let o = e[Ne],
        i = !o || pn() || Kn(n) || Wn(o, r);
    if (ft(i), i) return Dh(t, e, n, r);
    let s = o.data[Vy] ? .[r] ? ? null;
    s !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = s);
    let a = Go(o, t, e, n);
    Lo(o, r, a);
    let u = Sa(o, r);
    return qo(u, a)
}

function jE() {
    vh = LE
}
var Kt = function(t) {
        return t[t.EarlyRead = 0] = "EarlyRead", t[t.Write = 1] = "Write", t[t.MixedReadWrite = 2] = "MixedReadWrite", t[t.Read = 3] = "Read", t
    }(Kt || {}),
    Eh = (() => {
        let e = class e {
            constructor() {
                this.impl = null
            }
            execute() {
                this.impl ? .execute()
            }
        };
        e.\u0275prov = R({
            token: e,
            providedIn: "root",
            factory: () => new e
        });
        let t = e;
        return t
    })(),
    bt = class bt {
        constructor() {
            this.ngZone = E(ge), this.scheduler = E(sn), this.errorHandler = E(on, {
                optional: !0
            }), this.sequences = new Set, this.deferredRegistrations = new Set, this.executing = !1
        }
        execute() {
            this.executing = !0;
            for (let e of bt.PHASES)
                for (let n of this.sequences)
                    if (!(n.erroredOrDestroyed || !n.hooks[e])) try {
                        n.pipelinedValue = this.ngZone.runOutsideAngular(() => n.hooks[e](n.pipelinedValue))
                    } catch (r) {
                        n.erroredOrDestroyed = !0, this.errorHandler ? .handleError(r)
                    }
            this.executing = !1;
            for (let e of this.sequences) e.afterRun(), e.once && this.sequences.delete(e);
            for (let e of this.deferredRegistrations) this.sequences.add(e);
            this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear()
        }
        register(e) {
            this.executing ? this.deferredRegistrations.add(e) : (this.sequences.add(e), this.scheduler.notify(6))
        }
        unregister(e) {
            this.executing && this.sequences.has(e) ? (e.erroredOrDestroyed = !0, e.pipelinedValue = void 0, e.once = !0) : (this.sequences.delete(e), this.deferredRegistrations.delete(e))
        }
    };
bt.PHASES = [Kt.EarlyRead, Kt.Write, Kt.MixedReadWrite, Kt.Read], bt.\u0275prov = R({
    token: bt,
    providedIn: "root",
    factory: () => new bt
});
var Ws = bt,
    Qs = class {
        constructor(e, n, r, o) {
            this.impl = e, this.hooks = n, this.once = r, this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.unregisterOnDestroy = o.onDestroy(() => this.destroy())
        }
        afterRun() {
            this.erroredOrDestroyed = !1, this.pipelinedValue = void 0
        }
        destroy() {
            this.impl.unregister(this), this.unregisterOnDestroy()
        }
    };

function VE(t, e) {
    !e ? .injector && Sm(VE);
    let n = e ? .injector ? ? E(ut);
    return xn(n) ? (vn("NgAfterNextRender"), $E(t, n, e, !0)) : HE
}

function BE(t, e) {
    if (t instanceof Function) {
        let n = [void 0, void 0, void 0, void 0];
        return n[e] = t, n
    } else return [t.earlyRead, t.write, t.mixedReadWrite, t.read]
}

function $E(t, e, n, r) {
    let o = e.get(Eh);
    o.impl ? ? = e.get(Ws);
    let i = n ? .phase ? ? Kt.MixedReadWrite,
        s = new Qs(o.impl, BE(t, i), r, e.get(Ea));
    return o.impl.register(s), s
}
var HE = {
    destroy() {}
};

function UE(t, e, n, r) {
    let o = S(),
        i = Ao();
    if ($e(o, i, e)) {
        let s = q(),
            a = Oo();
        uD(a, o, t, e, n, r)
    }
    return UE
}

function wh(t, e, n, r) {
    return $e(t, Ao(), n) ? e + Un(n) + r : Oe
}

function $r(t, e) {
    return t << 17 | e << 2
}

function Ft(t) {
    return t >> 17 & 32767
}

function zE(t) {
    return (t & 2) == 2
}

function GE(t, e) {
    return t & 131071 | e << 17
}

function Zs(t) {
    return t | 2
}

function cn(t) {
    return (t & 131068) >> 2
}

function Qi(t, e) {
    return t & -131069 | e << 2
}

function qE(t) {
    return (t & 1) === 1
}

function Ks(t) {
    return t | 1
}

function WE(t, e, n, r, o, i) {
    let s = i ? e.classBindings : e.styleBindings,
        a = Ft(s),
        u = cn(s);
    t[r] = n;
    let l = !1,
        c;
    if (Array.isArray(n)) {
        let d = n;
        c = d[1], (c === null || zn(d, c) > 0) && (l = !0)
    } else c = n;
    if (o)
        if (u !== 0) {
            let h = Ft(t[a + 1]);
            t[r + 1] = $r(h, a), h !== 0 && (t[h + 1] = Qi(t[h + 1], r)), t[a + 1] = GE(t[a + 1], r)
        } else t[r + 1] = $r(a, 0), a !== 0 && (t[a + 1] = Qi(t[a + 1], r)), a = r;
    else t[r + 1] = $r(u, 0), a === 0 ? a = r : t[u + 1] = Qi(t[u + 1], r), u = r;
    l && (t[r + 1] = Zs(t[r + 1])), Dc(t, c, r, !0), Dc(t, c, r, !1), QE(e, c, t, r, i), s = $r(a, u), i ? e.classBindings = s : e.styleBindings = s
}

function QE(t, e, n, r, o) {
    let i = o ? t.residualClasses : t.residualStyles;
    i != null && typeof e == "string" && zn(i, e) >= 0 && (n[r + 1] = Ks(n[r + 1]))
}

function Dc(t, e, n, r) {
    let o = t[n + 1],
        i = e === null,
        s = r ? Ft(o) : cn(o),
        a = !1;
    for (; s !== 0 && (a === !1 || i);) {
        let u = t[s],
            l = t[s + 1];
        ZE(u, e) && (a = !0, t[s + 1] = r ? Ks(l) : Zs(l)), s = r ? Ft(l) : cn(l)
    }
    a && (t[n + 1] = r ? Zs(o) : Ks(o))
}

function ZE(t, e) {
    return t === null || e == null || (Array.isArray(t) ? t[1] : t) === e ? !0 : Array.isArray(t) && typeof e == "string" ? zn(t, e) >= 0 : !1
}
var Q = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0
};

function Ih(t) {
    return t.substring(Q.key, Q.keyEnd)
}

function KE(t) {
    return t.substring(Q.value, Q.valueEnd)
}

function YE(t) {
    return _h(t), bh(t, dn(t, 0, Q.textEnd))
}

function bh(t, e) {
    let n = Q.textEnd;
    return n === e ? -1 : (e = Q.keyEnd = XE(t, Q.key = e, n), dn(t, e, n))
}

function JE(t) {
    return _h(t), Ch(t, dn(t, 0, Q.textEnd))
}

function Ch(t, e) {
    let n = Q.textEnd,
        r = Q.key = dn(t, e, n);
    return n === r ? -1 : (r = Q.keyEnd = ew(t, r, n), r = Ec(t, r, n, 58), r = Q.value = dn(t, r, n), r = Q.valueEnd = tw(t, r, n), Ec(t, r, n, 59))
}

function _h(t) {
    Q.key = 0, Q.keyEnd = 0, Q.value = 0, Q.valueEnd = 0, Q.textEnd = t.length
}

function dn(t, e, n) {
    for (; e < n && t.charCodeAt(e) <= 32;) e++;
    return e
}

function XE(t, e, n) {
    for (; e < n && t.charCodeAt(e) > 32;) e++;
    return e
}

function ew(t, e, n) {
    let r;
    for (; e < n && ((r = t.charCodeAt(e)) === 45 || r === 95 || (r & -33) >= 65 && (r & -33) <= 90 || r >= 48 && r <= 57);) e++;
    return e
}

function Ec(t, e, n, r) {
    return e = dn(t, e, n), e < n && e++, e
}

function tw(t, e, n) {
    let r = -1,
        o = -1,
        i = -1,
        s = e,
        a = s;
    for (; s < n;) {
        let u = t.charCodeAt(s++);
        if (u === 59) return a;
        u === 34 || u === 39 ? a = s = wc(t, u, s, n) : e === s - 4 && i === 85 && o === 82 && r === 76 && u === 40 ? a = s = wc(t, 41, s, n) : u > 32 && (a = s), i = o, o = r, r = u & -33
    }
    return a
}

function wc(t, e, n, r) {
    let o = -1,
        i = n;
    for (; i < r;) {
        let s = t.charCodeAt(i++);
        if (s == e && o !== 92) return i;
        s == 92 && o === 92 ? o = 0 : o = s
    }
    throw new Error
}

function nw(t, e, n) {
    let r = S(),
        o = Ao();
    if ($e(r, o, e)) {
        let i = q(),
            s = Oo();
        ja(i, s, r, t, e, r[B], n, !1)
    }
    return nw
}

function Ys(t, e, n, r, o) {
    let i = e.inputs,
        s = o ? "class" : "style";
    Ba(t, n, i[s], s, r)
}

function rw(t, e) {
    return sw(t, e, null, !0), rw
}

function DN(t) {
    Sh(Nh, ow, t, !1)
}

function ow(t, e) {
    for (let n = JE(e); n >= 0; n = Ch(e, n)) Nh(t, Ih(e), KE(e))
}

function EN(t) {
    Sh(fw, iw, t, !0)
}

function iw(t, e) {
    for (let n = YE(e); n >= 0; n = bh(e, n)) So(t, Ih(e), !0)
}

function sw(t, e, n, r) {
    let o = S(),
        i = q(),
        s = Sd(2);
    if (i.firstUpdatePass && Th(i, t, s, r), e !== Oe && $e(o, s, e)) {
        let a = i.data[Rt()];
        xh(i, a, o, o[B], t, o[s + 1] = pw(e, n), r, s)
    }
}

function Sh(t, e, n, r) {
    let o = q(),
        i = Sd(2);
    o.firstUpdatePass && Th(o, null, i, r);
    let s = S();
    if (n !== Oe && $e(s, i, n)) {
        let a = o.data[Rt()];
        if (Ah(a, r) && !Mh(o, i)) {
            let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
            u !== null && (n = Ki(u, n || "")), Ys(o, a, s, n, r)
        } else hw(o, a, s, s[B], s[i + 1], s[i + 1] = dw(t, e, n), r, i)
    }
}

function Mh(t, e) {
    return e >= t.expandoStartIndex
}

function Th(t, e, n, r) {
    let o = t.data;
    if (o[n + 1] === null) {
        let i = o[Rt()],
            s = Mh(t, n);
        Ah(i, r) && e === null && !s && (e = !1), e = aw(o, i, e, r), WE(o, i, e, n, s, r)
    }
}

function aw(t, e, n, r) {
    let o = Qm(t),
        i = r ? e.residualClasses : e.residualStyles;
    if (o === null)(r ? e.classBindings : e.styleBindings) === 0 && (n = Zi(null, t, e, n, r), n = $n(n, e.attrs, r), i = null);
    else {
        let s = e.directiveStylingLast;
        if (s === -1 || t[s] !== o)
            if (n = Zi(o, t, e, n, r), i === null) {
                let u = uw(t, e, r);
                u !== void 0 && Array.isArray(u) && (u = Zi(null, t, e, u[1], r), u = $n(u, e.attrs, r), lw(t, e, r, u))
            } else i = cw(t, e, r)
    }
    return i !== void 0 && (r ? e.residualClasses = i : e.residualStyles = i), n
}

function uw(t, e, n) {
    let r = n ? e.classBindings : e.styleBindings;
    if (cn(r) !== 0) return t[Ft(r)]
}

function lw(t, e, n, r) {
    let o = n ? e.classBindings : e.styleBindings;
    t[Ft(o)] = r
}

function cw(t, e, n) {
    let r, o = e.directiveEnd;
    for (let i = 1 + e.directiveStylingLast; i < o; i++) {
        let s = t[i].hostAttrs;
        r = $n(r, s, n)
    }
    return $n(r, e.attrs, n)
}

function Zi(t, e, n, r, o) {
    let i = null,
        s = n.directiveEnd,
        a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (i = e[a], r = $n(r, i.hostAttrs, o), i !== t);) a++;
    return t !== null && (n.directiveStylingLast = a), r
}

function $n(t, e, n) {
    let r = n ? 1 : 2,
        o = -1;
    if (e !== null)
        for (let i = 0; i < e.length; i++) {
            let s = e[i];
            typeof s == "number" ? o = s : o === r && (Array.isArray(t) || (t = t === void 0 ? [] : ["", t]), So(t, s, n ? !0 : e[++i]))
        }
    return t === void 0 ? null : t
}

function dw(t, e, n) {
    if (n == null || n === "") return re;
    let r = [],
        o = kt(n);
    if (Array.isArray(o))
        for (let i = 0; i < o.length; i++) t(r, o[i], !0);
    else if (typeof o == "object")
        for (let i in o) o.hasOwnProperty(i) && t(r, i, o[i]);
    else typeof o == "string" && e(r, o);
    return r
}

function Nh(t, e, n) {
    So(t, e, kt(n))
}

function fw(t, e, n) {
    let r = String(e);
    r !== "" && !r.includes(" ") && So(t, r, n)
}

function hw(t, e, n, r, o, i, s, a) {
    o === Oe && (o = re);
    let u = 0,
        l = 0,
        c = 0 < o.length ? o[0] : null,
        d = 0 < i.length ? i[0] : null;
    for (; c !== null || d !== null;) {
        let h = u < o.length ? o[u + 1] : void 0,
            f = l < i.length ? i[l + 1] : void 0,
            p = null,
            g;
        c === d ? (u += 2, l += 2, h !== f && (p = d, g = f)) : d === null || c !== null && c < d ? (u += 2, p = c) : (l += 2, p = d, g = f), p !== null && xh(t, e, n, r, p, g, s, a), c = u < o.length ? o[u] : null, d = l < i.length ? i[l] : null
    }
}

function xh(t, e, n, r, o, i, s, a) {
    if (!(e.type & 3)) return;
    let u = t.data,
        l = u[a + 1],
        c = qE(l) ? Ic(u, e, n, o, cn(l), s) : void 0;
    if (!wo(c)) {
        wo(i) || zE(l) && (i = Ic(u, null, n, o, a, s));
        let d = md(Rt(), n);
        jv(r, s, d, o, i)
    }
}

function Ic(t, e, n, r, o, i) {
    let s = e === null,
        a;
    for (; o > 0;) {
        let u = t[o],
            l = Array.isArray(u),
            c = l ? u[1] : u,
            d = c === null,
            h = n[o + 1];
        h === Oe && (h = d ? re : void 0);
        let f = d ? Li(h, r) : c === r ? h : void 0;
        if (l && !wo(f) && (f = Li(u, r)), wo(f) && (a = f, s)) return a;
        let p = t[o + 1];
        o = s ? Ft(p) : cn(p)
    }
    if (e !== null) {
        let u = i ? e.residualClasses : e.residualStyles;
        u != null && (a = Li(u, r))
    }
    return a
}

function wo(t) {
    return t !== void 0
}

function pw(t, e) {
    return t == null || t === "" || (typeof e == "string" ? t = t + e : typeof t == "object" && (t = oe(kt(t)))), t
}

function Ah(t, e) {
    return (t.flags & (e ? 8 : 16)) !== 0
}

function gw(t, e, n, r, o, i) {
    let s = e.consts,
        a = nn(s, o),
        u = yn(e, t, 2, r, a);
    return Va(e, n, u, nn(s, i)), u.attrs !== null && yo(u, u.attrs, !1), u.mergedAttrs !== null && yo(u, u.mergedAttrs, !0), e.queries !== null && e.queries.elementStart(e, u), u
}

function Oh(t, e, n, r) {
    let o = S(),
        i = q(),
        s = G + t,
        a = o[B],
        u = i.firstCreatePass ? gw(s, i, o, e, n, r) : i.data[s],
        l = Ph(i, o, u, a, e, t);
    o[s] = l;
    let c = To(u);
    return Pt(u, !0), Pf(a, l, u), !Kn(u) && Fo() && Bo(i, o, l, u), km() === 0 && lt(l, o), Lm(), c && (Ra(i, o, u), Pa(i, u, o)), r !== null && ka(o, u), Oh
}

function Fh() {
    let t = ne();
    pa() ? ga() : (t = t.parent, Pt(t, !1));
    let e = t;
    Vm(e) && $m(), jm();
    let n = q();
    return n.firstCreatePass && (Po(n, t), da(t) && n.queries.elementEnd(t)), e.classesWithoutHost != null && ey(e) && Ys(n, e, S(), e.classesWithoutHost, !0), e.stylesWithoutHost != null && ty(e) && Ys(n, e, S(), e.stylesWithoutHost, !1), Fh
}

function mw(t, e, n, r) {
    return Oh(t, e, n, r), Fh(), mw
}
var Ph = (t, e, n, r, o, i) => (ft(!0), xa(r, o, Fd()));

function yw(t, e, n, r, o, i) {
    let s = e[Ne],
        a = !s || pn() || Kn(n) || Wn(s, i);
    if (ft(a), a) return xa(r, o, Fd());
    let u = Go(s, t, e, n);
    return cf(s, i) && Lo(s, i, u.nextSibling), s && (Kd(n) || Yd(u)) && Gn(n) && (Bm(n), Af(u)), u
}

function vw() {
    Ph = yw
}

function Dw(t, e, n, r, o) {
    let i = e.consts,
        s = nn(i, r),
        a = yn(e, t, 8, "ng-container", s);
    s !== null && yo(a, s, !0);
    let u = nn(i, o);
    return Va(e, n, a, u), e.queries !== null && e.queries.elementStart(e, a), a
}

function Rh(t, e, n) {
    let r = S(),
        o = q(),
        i = t + G,
        s = o.firstCreatePass ? Dw(i, o, r, e, n) : o.data[i];
    Pt(s, !0);
    let a = Lh(o, r, s, t);
    return r[i] = a, Fo() && Bo(o, r, a, s), lt(a, r), To(s) && (Ra(o, r, s), Pa(o, s, r)), n != null && ka(r, s), Rh
}

function kh() {
    let t = ne(),
        e = q();
    return pa() ? ga() : (t = t.parent, Pt(t, !1)), e.firstCreatePass && (Po(e, t), da(t) && e.queries.elementEnd(t)), kh
}

function Ew(t, e, n) {
    return Rh(t, e, n), kh(), Ew
}
var Lh = (t, e, n, r) => (ft(!0), If(e[B], ""));

function ww(t, e, n, r) {
    let o, i = e[Ne],
        s = !i || pn() || Wn(i, r) || Kn(n);
    if (ft(s), s) return If(e[B], "");
    let a = Go(i, t, e, n),
        u = Zy(i, r);
    return Lo(i, r, a), o = qo(u, a), o
}

function Iw() {
    Lh = ww
}

function wN() {
    return S()
}
var Io = "en-US";
var bw = Io;

function Cw(t) {
    typeof t == "string" && (bw = t.toLowerCase().replace(/_/g, "-"))
}
var _w = (t, e, n) => {};

function Sw(t, e, n, r) {
    let o = S(),
        i = q(),
        s = ne();
    return jh(i, o, o[B], s, t, e, r), Sw
}

function Mw(t, e, n, r) {
    let o = t.cleanup;
    if (o != null)
        for (let i = 0; i < o.length - 1; i += 2) {
            let s = o[i];
            if (s === n && o[i + 1] === r) {
                let a = e[to],
                    u = o[i + 2];
                return a.length > u ? a[u] : null
            }
            typeof s == "string" && (i += 2)
        }
    return null
}

function jh(t, e, n, r, o, i, s) {
    let a = To(r),
        l = t.firstCreatePass && qf(t),
        c = e[xe],
        d = Gf(e),
        h = !0;
    if (r.type & 3 || s) {
        let g = ye(r, e),
            M = s ? s(g) : g,
            T = d.length,
            F = s ? L => s(Ae(L[r.index])) : r.index,
            $ = null;
        if (!s && a && ($ = Mw(t, e, o, r.index)), $ !== null) {
            let L = $.__ngLastListenerFn__ || $;
            L.__ngNextListenerFn__ = i, $.__ngLastListenerFn__ = i, h = !1
        } else {
            i = Cc(r, e, c, i), _w(g, o, i);
            let L = n.listen(M, o, i);
            d.push(i, L), l && l.push(o, F, T, T + 1)
        }
    } else i = Cc(r, e, c, i);
    let f = r.outputs,
        p;
    if (h && f !== null && (p = f[o])) {
        let g = p.length;
        if (g)
            for (let M = 0; M < g; M += 2) {
                let T = p[M],
                    F = p[M + 1],
                    fe = e[T][F].subscribe(i),
                    H = d.length;
                d.push(i, fe), l && l.push(o, r.index, H, -(H + 1))
            }
    }
}

function bc(t, e, n, r) {
    let o = P(null);
    try {
        return je(6, e, n), n(r) !== !1
    } catch (i) {
        return Wf(t, i), !1
    } finally {
        je(7, e, n), P(o)
    }
}

function Cc(t, e, n, r) {
    return function o(i) {
        if (i === Function) return r;
        let s = t.componentOffset > -1 ? dt(t.index, e) : e;
        Ha(s, 5);
        let a = bc(e, n, r, i),
            u = o.__ngNextListenerFn__;
        for (; u;) a = bc(e, n, u, i) && a, u = u.__ngNextListenerFn__;
        return a
    }
}

function IN(t = 1) {
    return Km(t)
}

function Tw(t, e) {
    let n = null,
        r = nm(t);
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        if (i === "*") {
            n = o;
            continue
        }
        if (r === null ? Yc(t, i, !0) : im(r, i)) return o
    }
    return n
}

function bN(t) {
    let e = S()[le][ce];
    if (!e.projection) {
        let n = t ? t.length : 1,
            r = e.projection = Wg(n, null),
            o = r.slice(),
            i = e.child;
        for (; i !== null;) {
            if (i.type !== 128) {
                let s = t ? Tw(i, t) : 0;
                s !== null && (o[s] ? o[s].projectionNext = i : r[s] = i, o[s] = i)
            }
            i = i.next
        }
    }
}

function CN(t, e = 0, n, r, o, i) {
    let s = S(),
        a = q(),
        u = r ? t + 1 : null;
    u !== null && yh(s, a, u, r, o, i, null, n);
    let l = yn(a, G + t, 16, null, n || null);
    l.projection === null && (l.projection = e), ga();
    let d = !s[Ne] || pn();
    s[le][ce].projection[l.projection] === null && u !== null ? Nw(s, a, u) : d && (l.flags & 32) !== 32 && kv(a, s, l)
}

function Nw(t, e, n) {
    let r = G + n,
        o = e.data[r],
        i = t[r],
        s = Ps(i, o.tView.ssrId),
        a = Qf(t, o, void 0, {
            dehydratedView: s
        });
    Zf(i, a, 0, Os(o, s))
}

function xw(t, e, n) {
    return Vh(t, "", e, "", n), xw
}

function Vh(t, e, n, r, o) {
    let i = S(),
        s = wh(i, e, n, r);
    if (s !== Oe) {
        let a = q(),
            u = Oo();
        ja(a, u, i, t, s, i[B], o, !1)
    }
    return Vh
}

function _N(t, e, n, r) {
    yE(t, e, n, r)
}

function SN(t, e, n) {
    mE(t, e, n)
}

function MN(t) {
    let e = S(),
        n = q(),
        r = Md();
    ma(r + 1);
    let o = za(n, r);
    if (t.dirty && Om(e) === ((o.metadata.flags & 2) === 2)) {
        if (o.matches === null) t.reset([]);
        else {
            let i = EE(e, r);
            t.reset(i, _y), t.notifyOnChanges()
        }
        return !0
    }
    return !1
}

function TN() {
    return gE(S(), Md())
}

function Aw(t, e, n, r) {
    n >= t.data.length && (t.data[n] = null, t.blueprint[n] = null), e[n] = r
}

function NN(t) {
    let e = Um();
    return vd(e, G + t)
}

function xN(t, e = "") {
    let n = S(),
        r = q(),
        o = t + G,
        i = r.firstCreatePass ? yn(r, o, 1, e, null) : r.data[o],
        s = Bh(r, n, i, e, t);
    n[o] = s, Fo() && Bo(r, n, s, i), Pt(i, !1)
}
var Bh = (t, e, n, r, o) => (ft(!0), wf(e[B], r));

function Ow(t, e, n, r, o) {
    let i = e[Ne],
        s = !i || pn() || Kn(n) || Wn(i, o);
    return ft(s), s ? wf(e[B], r) : Go(i, t, e, n)
}

function Fw() {
    Bh = Ow
}

function Pw(t) {
    return $h("", t, ""), Pw
}

function $h(t, e, n) {
    let r = S(),
        o = wh(r, t, e, n);
    return o !== Oe && fD(r, Rt(), o), $h
}

function Rw(t, e, n) {
    gh(e) && (e = e());
    let r = S(),
        o = Ao();
    if ($e(r, o, e)) {
        let i = q(),
            s = Oo();
        ja(i, s, r, t, e, r[B], n, !1)
    }
    return Rw
}

function AN(t, e) {
    let n = gh(t);
    return n && t.set(e), n
}

function kw(t, e) {
    let n = S(),
        r = q(),
        o = ne();
    return jh(r, n, n[B], o, t, e), kw
}
var Lw = (() => {
    let e = class e {
        constructor(r) {
            this._injector = r, this.cachedInjectors = new Map
        }
        getOrCreateStandaloneInjector(r) {
            if (!r.standalone) return null;
            if (!this.cachedInjectors.has(r)) {
                let o = od(!1, r.type),
                    i = o.length > 0 ? AE([o], this._injector, `Standalone[${r.type.name}]`) : null;
                this.cachedInjectors.set(r, i)
            }
            return this.cachedInjectors.get(r)
        }
        ngOnDestroy() {
            try {
                for (let r of this.cachedInjectors.values()) r !== null && r.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
    };
    e.\u0275prov = R({
        token: e,
        providedIn: "environment",
        factory: () => new e(Z(at))
    });
    let t = e;
    return t
})();

function ON(t) {
    vn("NgStandalone"), t.getStandaloneInjector = e => e.get(Lw).getOrCreateStandaloneInjector(t)
}

function FN(t, e, n) {
    let r = gn() + t,
        o = S();
    return o[r] === Oe ? Zn(o, r, n ? e.call(n) : e()) : FE(o, r)
}

function PN(t, e, n, r) {
    return Hh(S(), gn(), t, e, n, r)
}

function RN(t, e, n, r, o) {
    return jw(S(), gn(), t, e, n, r, o)
}

function kN(t, e, n, r, o, i, s) {
    return Vw(S(), gn(), t, e, n, r, o, i, s)
}

function LN(t, e, n, r) {
    return Bw(S(), gn(), t, e, n, r)
}

function Qo(t, e) {
    let n = t[e];
    return n === Oe ? void 0 : n
}

function Hh(t, e, n, r, o, i) {
    let s = e + n;
    return $e(t, s, o) ? Zn(t, s + 1, i ? r.call(i, o) : r(o)) : Qo(t, s + 1)
}

function jw(t, e, n, r, o, i, s) {
    let a = e + n;
    return qs(t, a, o, i) ? Zn(t, a + 2, s ? r.call(s, o, i) : r(o, i)) : Qo(t, a + 2)
}

function Vw(t, e, n, r, o, i, s, a, u) {
    let l = e + n;
    return PE(t, l, o, i, s, a) ? Zn(t, l + 4, u ? r.call(u, o, i, s, a) : r(o, i, s, a)) : Qo(t, l + 4)
}

function Bw(t, e, n, r, o, i) {
    let s = e + n,
        a = !1;
    for (let u = 0; u < o.length; u++) $e(t, s++, o[u]) && (a = !0);
    return a ? Zn(t, s, r.apply(i, o)) : Qo(t, s)
}

function jN(t, e) {
    let n = q(),
        r, o = t + G;
    n.firstCreatePass ? (r = $w(e, n.pipeRegistry), n.data[o] = r, r.onDestroy && (n.destroyHooks ? ? = []).push(o, r.onDestroy)) : r = n.data[o];
    let i = r.factory || (r.factory = _t(r.type, !0)),
        s, a = ae(de);
    try {
        let u = ao(!1),
            l = i();
        return ao(u), Aw(n, S(), o, l), l
    } finally {
        ae(a)
    }
}

function $w(t, e) {
    if (e)
        for (let n = e.length - 1; n >= 0; n--) {
            let r = e[n];
            if (t === r.name) return r
        }
}

function VN(t, e, n) {
    let r = t + G,
        o = S(),
        i = vd(o, r);
    return Hw(o, r) ? Hh(o, gn(), e, i.transform, n, i) : i.transform(n)
}

function Hw(t, e) {
    return t[C].data[e].pure
}

function BN(t, e) {
    return zo(t, e)
}
var $N = (() => {
    let e = class e {
        log(r) {
            console.log(r)
        }
        warn(r) {
            console.warn(r)
        }
    };
    e.\u0275fac = function(o) {
        return new(o || e)
    }, e.\u0275prov = R({
        token: e,
        factory: e.\u0275fac,
        providedIn: "platform"
    });
    let t = e;
    return t
})();
var Uw = new k("");

function qa(t) {
    return !!t && typeof t.then == "function"
}

function Uh(t) {
    return !!t && typeof t.subscribe == "function"
}
var zw = new k(""),
    zh = (() => {
        let e = class e {
            constructor() {
                this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, o) => {
                    this.resolve = r, this.reject = o
                }), this.appInits = E(zw, {
                    optional: !0
                }) ? ? []
            }
            runInitializers() {
                if (this.initialized) return;
                let r = [];
                for (let i of this.appInits) {
                    let s = i();
                    if (qa(s)) r.push(s);
                    else if (Uh(s)) {
                        let a = new Promise((u, l) => {
                            s.subscribe({
                                complete: u,
                                error: l
                            })
                        });
                        r.push(a)
                    }
                }
                let o = () => {
                    this.done = !0, this.resolve()
                };
                Promise.all(r).then(() => {
                    o()
                }).catch(i => {
                    this.reject(i)
                }), r.length === 0 && o(), this.initialized = !0
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    Gh = new k("");

function Gw() {
    ul(() => {
        throw new m(600, !1)
    })
}

function qw(t) {
    return t.isBoundToModule
}
var Ww = 10;

function Qw(t, e, n) {
    try {
        let r = n();
        return qa(r) ? r.catch(o => {
            throw e.runOutsideAngular(() => t.handleError(o)), o
        }) : r
    } catch (r) {
        throw e.runOutsideAngular(() => t.handleError(r)), r
    }
}
var Yn = (() => {
    let e = class e {
        constructor() {
            this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = E(Iy), this.afterRenderManager = E(Eh), this.zonelessEnabled = E(ih), this.dirtyFlags = 0, this.deferredDirtyFlags = 0, this.externalTestViews = new Set, this.beforeRender = new et, this.afterTick = new et, this.componentTypes = [], this.components = [], this.isStable = E(Ro).hasPendingTasks.pipe(Le(r => !r)), this._injector = E(at)
        }
        get allViews() {
            return [...this.externalTestViews.keys(), ...this._views]
        }
        get destroyed() {
            return this._destroyed
        }
        whenStable() {
            let r;
            return new Promise(o => {
                r = this.isStable.subscribe({
                    next: i => {
                        i && o()
                    }
                })
            }).finally(() => {
                r.unsubscribe()
            })
        }
        get injector() {
            return this._injector
        }
        bootstrap(r, o) {
            let i = r instanceof mo;
            if (!this._injector.get(zh).done) {
                let f = !i && fm(r),
                    p = !1;
                throw new m(405, p)
            }
            let a;
            i ? a = r : a = this._injector.get(an).resolveComponentFactory(r), this.componentTypes.push(a.componentType);
            let u = qw(a) ? void 0 : this._injector.get(ct),
                l = o || a.selector,
                c = a.create(ut.NULL, [], l, u),
                d = c.location.nativeElement,
                h = c.injector.get(Uw, null);
            return h ? .registerApplication(d), c.onDestroy(() => {
                this.detachView(c.hostView), Qr(this.components, c), h ? .unregisterApplication(d)
            }), this._loadComponent(c), c
        }
        tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick()
        }
        _tick() {
            if (this._runningTick) throw new m(101, !1);
            let r = P(null);
            try {
                this._runningTick = !0, this.synchronize()
            } catch (o) {
                this.internalErrorHandler(o)
            } finally {
                this._runningTick = !1, P(r), this.afterTick.next()
            }
        }
        synchronize() {
            let r = null;
            this._injector.destroyed || (r = this._injector.get(un, null, {
                optional: !0
            })), this.dirtyFlags |= this.deferredDirtyFlags, this.deferredDirtyFlags = 0;
            let o = 0;
            for (; this.dirtyFlags !== 0 && o++ < Ww;) this.synchronizeOnce(r)
        }
        synchronizeOnce(r) {
            if (this.dirtyFlags |= this.deferredDirtyFlags, this.deferredDirtyFlags = 0, this.dirtyFlags & 7) {
                let o = !!(this.dirtyFlags & 1);
                this.dirtyFlags &= -8, this.dirtyFlags |= 8, this.beforeRender.next(o);
                for (let {
                        _lView: i,
                        notifyErrorHandler: s
                    } of this._views) Zw(i, s, o, this.zonelessEnabled);
                if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 7) return
            } else r ? .begin ? .(), r ? .end ? .();
            this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews()
        }
        syncDirtyFlagsWithViews() {
            if (this.allViews.some(({
                    _lView: r
                }) => No(r))) {
                this.dirtyFlags |= 2;
                return
            } else this.dirtyFlags &= -8
        }
        attachView(r) {
            let o = r;
            this._views.push(o), o.attachToAppRef(this)
        }
        detachView(r) {
            let o = r;
            Qr(this._views, o), o.detachFromAppRef()
        }
        _loadComponent(r) {
            this.attachView(r.hostView), this.tick(), this.components.push(r);
            let o = this._injector.get(Gh, []);
            [...this._bootstrapListeners, ...o].forEach(i => i(r))
        }
        ngOnDestroy() {
            if (!this._destroyed) try {
                this._destroyListeners.forEach(r => r()), this._views.slice().forEach(r => r.destroy())
            } finally {
                this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = []
            }
        }
        onDestroy(r) {
            return this._destroyListeners.push(r), () => Qr(this._destroyListeners, r)
        }
        destroy() {
            if (this._destroyed) throw new m(406, !1);
            let r = this._injector;
            r.destroy && !r.destroyed && r.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        warnIfDestroyed() {}
    };
    e.\u0275fac = function(o) {
        return new(o || e)
    }, e.\u0275prov = R({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function Qr(t, e) {
    let n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
var Hr;

function qh(t) {
    Hr ? ? = new WeakMap;
    let e = Hr.get(t);
    if (e) return e;
    let n = t.isStable.pipe(Ri(r => r)).toPromise().then(() => {});
    return Hr.set(t, n), t.onDestroy(() => Hr ? .delete(t)), n
}

function Zw(t, e, n, r) {
    if (!n && !No(t)) return;
    Jf(t, e, n && !r ? 0 : 1)
}
var Js = class {
        constructor(e, n) {
            this.ngModuleFactory = e, this.componentFactories = n
        }
    },
    HN = (() => {
        let e = class e {
            compileModuleSync(r) {
                return new Gs(r)
            }
            compileModuleAsync(r) {
                return Promise.resolve(this.compileModuleSync(r))
            }
            compileModuleAndAllComponentsSync(r) {
                let o = this.compileModuleSync(r),
                    i = td(r),
                    s = Ef(i.declarations).reduce((a, u) => {
                        let l = st(u);
                        return l && a.push(new ln(l)), a
                    }, []);
                return new Js(o, s)
            }
            compileModuleAndAllComponentsAsync(r) {
                return Promise.resolve(this.compileModuleAndAllComponentsSync(r))
            }
            clearCache() {}
            clearCacheFor(r) {}
            getModuleId(r) {}
        };
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })();
var Kw = (() => {
    let e = class e {
        constructor() {
            this.zone = E(ge), this.changeDetectionScheduler = E(sn), this.applicationRef = E(Yn)
        }
        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.changeDetectionScheduler.runningTick || this.zone.run(() => {
                        this.applicationRef.tick()
                    })
                }
            }))
        }
        ngOnDestroy() {
            this._onMicrotaskEmptySubscription ? .unsubscribe()
        }
    };
    e.\u0275fac = function(o) {
        return new(o || e)
    }, e.\u0275prov = R({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function Yw({
    ngZoneFactory: t,
    ignoreChangesOutsideZone: e,
    scheduleInRootZone: n
}) {
    return t ? ? = () => new ge(Re(ie({}, Jw()), {
        scheduleInRootZone: n
    })), [{
        provide: ge,
        useFactory: t
    }, {
        provide: Pn,
        multi: !0,
        useFactory: () => {
            let r = E(Kw, {
                optional: !0
            });
            return () => r.initialize()
        }
    }, {
        provide: Pn,
        multi: !0,
        useFactory: () => {
            let r = E(Xw);
            return () => {
                r.initialize()
            }
        }
    }, e === !0 ? {
        provide: sh,
        useValue: !0
    } : [], {
        provide: ah,
        useValue: n ? ? Wd
    }]
}

function Jw(t) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: t ? .eventCoalescing ? ? !1,
        shouldCoalesceRunChangeDetection: t ? .runCoalescing ? ? !1
    }
}
var Xw = (() => {
    let e = class e {
        constructor() {
            this.subscription = new J, this.initialized = !1, this.zone = E(ge), this.pendingTasks = E(Ro)
        }
        initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let r = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (r = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
                this.subscription.add(this.zone.onStable.subscribe(() => {
                    ge.assertNotInAngularZone(), queueMicrotask(() => {
                        r !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(r), r = null)
                    })
                }))
            }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
                ge.assertInAngularZone(), r ? ? = this.pendingTasks.add()
            }))
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
    };
    e.\u0275fac = function(o) {
        return new(o || e)
    }, e.\u0275prov = R({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();
var eI = (() => {
    let e = class e {
        constructor() {
            this.appRef = E(Yn), this.taskService = E(Ro), this.ngZone = E(ge), this.zonelessEnabled = E(ih), this.disableScheduling = E(sh, {
                optional: !0
            }) ? ? !1, this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run, this.schedulerTickApplyArgs = [{
                data: {
                    __scheduler_tick__: !0
                }
            }], this.subscriptions = new J, this.angularZoneId = this.zoneIsDefined ? this.ngZone._inner ? .get(lo) : null, this.scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(ah, {
                optional: !0
            }) ? ? !1), this.cancelScheduledCallback = null, this.useMicrotaskScheduler = !1, this.runningTick = !1, this.pendingRenderTaskId = null, this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
                this.runningTick || this.cleanup()
            })), this.disableScheduling || = !this.zonelessEnabled && (this.ngZone instanceof ps || !this.zoneIsDefined)
        }
        notify(r) {
            if (!this.zonelessEnabled && r === 5) return;
            switch (r) {
                case 0:
                    {
                        this.appRef.dirtyFlags |= 2;
                        break
                    }
                case 3:
                case 2:
                case 4:
                case 5:
                case 1:
                    {
                        this.appRef.dirtyFlags |= 4;
                        break
                    }
                case 7:
                    {
                        this.appRef.deferredDirtyFlags |= 8;
                        break
                    }
                case 9:
                case 8:
                case 6:
                case 10:
                default:
                    this.appRef.dirtyFlags |= 8
            }
            if (!this.shouldScheduleTick()) return;
            let o = this.useMicrotaskScheduler ? tc : Qd;
            this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick()))
        }
        shouldScheduleTick() {
            return !(this.disableScheduling || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(lo + this.angularZoneId))
        }
        tick() {
            if (this.runningTick || this.appRef.destroyed) return;
            !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
            let r = this.taskService.add();
            try {
                this.ngZone.run(() => {
                    this.runningTick = !0, this.appRef._tick()
                }, void 0, this.schedulerTickApplyArgs)
            } catch (o) {
                throw this.taskService.remove(r), o
            } finally {
                this.cleanup()
            }
            this.useMicrotaskScheduler = !0, tc(() => {
                this.useMicrotaskScheduler = !1, this.taskService.remove(r)
            })
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe(), this.cleanup()
        }
        cleanup() {
            if (this.runningTick = !1, this.cancelScheduledCallback ? .(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
                let r = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null, this.taskService.remove(r)
            }
        }
    };
    e.\u0275fac = function(o) {
        return new(o || e)
    }, e.\u0275prov = R({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function tI() {
    return typeof $localize < "u" && $localize.locale || Io
}
var Wa = new k("", {
    providedIn: "root",
    factory: () => E(Wa, x.Optional | x.SkipSelf) || tI()
});
var Wh = new k("");

function Ur(t) {
    return !!t.platformInjector
}

function nI(t) {
    let e = Ur(t) ? t.r3Injector : t.moduleRef.injector,
        n = e.get(ge);
    return n.run(() => {
        Ur(t) ? t.r3Injector.resolveInjectorInitializers() : t.moduleRef.resolveInjectorInitializers();
        let r = e.get(on, null),
            o;
        if (n.runOutsideAngular(() => {
                o = n.onError.subscribe({
                    next: i => {
                        r.handleError(i)
                    }
                })
            }), Ur(t)) {
            let i = () => e.destroy(),
                s = t.platformInjector.get(Wh);
            s.add(i), e.onDestroy(() => {
                o.unsubscribe(), s.delete(i)
            })
        } else t.moduleRef.onDestroy(() => {
            Qr(t.allPlatformModules, t.moduleRef), o.unsubscribe()
        });
        return Qw(r, n, () => {
            let i = e.get(zh);
            return i.runInitializers(), i.donePromise.then(() => {
                let s = e.get(Wa, Io);
                if (Cw(s || Io), Ur(t)) {
                    let a = e.get(Yn);
                    return t.rootComponent !== void 0 && a.bootstrap(t.rootComponent), a
                } else return rI(t.moduleRef, t.allPlatformModules), t.moduleRef
            })
        })
    })
}

function rI(t, e) {
    let n = t.injector.get(Yn);
    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(r => n.bootstrap(r));
    else if (t.instance.ngDoBootstrap) t.instance.ngDoBootstrap(n);
    else throw new m(-403, !1);
    e.push(t)
}
var Zr = null;

function oI(t = [], e) {
    return ut.create({
        name: e,
        providers: [{
            provide: ad,
            useValue: "platform"
        }, {
            provide: Wh,
            useValue: new Set([() => Zr = null])
        }, ...t]
    })
}

function iI(t = []) {
    if (Zr) return Zr;
    let e = oI(t);
    return Zr = e, Gw(), sI(e), e
}

function sI(t) {
    t.get(Ry, null) ? .forEach(n => n())
}
var Qh = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = aI;
    let t = e;
    return t
})();

function aI(t) {
    return uI(ne(), S(), (t & 16) === 16)
}

function uI(t, e, n) {
    if (Gn(t) && !n) {
        let r = dt(t.index, e);
        return new At(r, r)
    } else if (t.type & 175) {
        let r = e[le];
        return new At(r, e)
    }
    return null
}
var Xs = class {
        constructor() {}
        supports(e) {
            return mh(e)
        }
        create(e) {
            return new ea(e)
        }
    },
    lI = (t, e) => e,
    ea = class {
        constructor(e) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || lI
        }
        forEachItem(e) {
            let n;
            for (n = this._itHead; n !== null; n = n._next) e(n)
        }
        forEachOperation(e) {
            let n = this._itHead,
                r = this._removalsHead,
                o = 0,
                i = null;
            for (; n || r;) {
                let s = !r || n && n.currentIndex < _c(r, o, i) ? n : r,
                    a = _c(s, o, i),
                    u = s.currentIndex;
                if (s === r) o--, r = r._nextRemoved;
                else if (n = n._next, s.previousIndex == null) o++;
                else {
                    i || (i = []);
                    let l = a - o,
                        c = u - o;
                    if (l != c) {
                        for (let h = 0; h < l; h++) {
                            let f = h < i.length ? i[h] : i[h] = 0,
                                p = f + h;
                            c <= p && p < l && (i[h] = f + 1)
                        }
                        let d = s.previousIndex;
                        i[d] = c - l
                    }
                }
                a !== u && e(s, a, u)
            }
        }
        forEachPreviousItem(e) {
            let n;
            for (n = this._previousItHead; n !== null; n = n._nextPrevious) e(n)
        }
        forEachAddedItem(e) {
            let n;
            for (n = this._additionsHead; n !== null; n = n._nextAdded) e(n)
        }
        forEachMovedItem(e) {
            let n;
            for (n = this._movesHead; n !== null; n = n._nextMoved) e(n)
        }
        forEachRemovedItem(e) {
            let n;
            for (n = this._removalsHead; n !== null; n = n._nextRemoved) e(n)
        }
        forEachIdentityChange(e) {
            let n;
            for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange) e(n)
        }
        diff(e) {
            if (e == null && (e = []), !mh(e)) throw new m(900, !1);
            return this.check(e) ? this : null
        }
        onDestroy() {}
        check(e) {
            this._reset();
            let n = this._itHead,
                r = !1,
                o, i, s;
            if (Array.isArray(e)) {
                this.length = e.length;
                for (let a = 0; a < this.length; a++) i = e[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), r = !0) : (r && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next
            } else o = 0, OE(e, a => {
                s = this._trackByFn(o, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, o), r = !0) : (r && (n = this._verifyReinsertion(n, a, s, o)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, o++
            }), this.length = o;
            return this._truncate(n), this.collection = e, this.isDirty
        }
        get isDirty() {
            return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null
        }
        _reset() {
            if (this.isDirty) {
                let e;
                for (e = this._previousItHead = this._itHead; e !== null; e = e._next) e._nextPrevious = e._next;
                for (e = this._additionsHead; e !== null; e = e._nextAdded) e.previousIndex = e.currentIndex;
                for (this._additionsHead = this._additionsTail = null, e = this._movesHead; e !== null; e = e._nextMoved) e.previousIndex = e.currentIndex;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
        }
        _mismatch(e, n, r, o) {
            let i;
            return e === null ? i = this._itTail : (i = e._prev, this._remove(e)), e = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), e !== null ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._reinsertAfter(e, i, o)) : (e = this._linkedRecords === null ? null : this._linkedRecords.get(r, o), e !== null ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._moveAfter(e, i, o)) : e = this._addAfter(new ta(n, r), i, o)), e
        }
        _verifyReinsertion(e, n, r, o) {
            let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
            return i !== null ? e = this._reinsertAfter(i, e._prev, o) : e.currentIndex != o && (e.currentIndex = o, this._addToMoves(e, o)), e
        }
        _truncate(e) {
            for (; e !== null;) {
                let n = e._next;
                this._addToRemovals(this._unlink(e)), e = n
            }
            this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null)
        }
        _reinsertAfter(e, n, r) {
            this._unlinkedRecords !== null && this._unlinkedRecords.remove(e);
            let o = e._prevRemoved,
                i = e._nextRemoved;
            return o === null ? this._removalsHead = i : o._nextRemoved = i, i === null ? this._removalsTail = o : i._prevRemoved = o, this._insertAfter(e, n, r), this._addToMoves(e, r), e
        }
        _moveAfter(e, n, r) {
            return this._unlink(e), this._insertAfter(e, n, r), this._addToMoves(e, r), e
        }
        _addAfter(e, n, r) {
            return this._insertAfter(e, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = e : this._additionsTail = this._additionsTail._nextAdded = e, e
        }
        _insertAfter(e, n, r) {
            let o = n === null ? this._itHead : n._next;
            return e._next = o, e._prev = n, o === null ? this._itTail = e : o._prev = e, n === null ? this._itHead = e : n._next = e, this._linkedRecords === null && (this._linkedRecords = new bo), this._linkedRecords.put(e), e.currentIndex = r, e
        }
        _remove(e) {
            return this._addToRemovals(this._unlink(e))
        }
        _unlink(e) {
            this._linkedRecords !== null && this._linkedRecords.remove(e);
            let n = e._prev,
                r = e._next;
            return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, e
        }
        _addToMoves(e, n) {
            return e.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = e : this._movesTail = this._movesTail._nextMoved = e), e
        }
        _addToRemovals(e) {
            return this._unlinkedRecords === null && (this._unlinkedRecords = new bo), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
        }
        _addIdentityChange(e, n) {
            return e.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = e : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = e, e
        }
    },
    ta = class {
        constructor(e, n) {
            this.item = e, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        }
    },
    na = class {
        constructor() {
            this._head = null, this._tail = null
        }
        add(e) {
            this._head === null ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
        }
        get(e, n) {
            let r;
            for (r = this._head; r !== null; r = r._nextDup)
                if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, e)) return r;
            return null
        }
        remove(e) {
            let n = e._prevDup,
                r = e._nextDup;
            return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null
        }
    },
    bo = class {
        constructor() {
            this.map = new Map
        }
        put(e) {
            let n = e.trackById,
                r = this.map.get(n);
            r || (r = new na, this.map.set(n, r)), r.add(e)
        }
        get(e, n) {
            let r = e,
                o = this.map.get(r);
            return o ? o.get(e, n) : null
        }
        remove(e) {
            let n = e.trackById;
            return this.map.get(n).remove(e) && this.map.delete(n), e
        }
        get isEmpty() {
            return this.map.size === 0
        }
        clear() {
            this.map.clear()
        }
    };

function _c(t, e, n) {
    let r = t.previousIndex;
    if (r === null) return r;
    let o = 0;
    return n && r < n.length && (o = n[r]), r + e + o
}
var ra = class {
        constructor() {}
        supports(e) {
            return e instanceof Map || Ga(e)
        }
        create() {
            return new oa
        }
    },
    oa = class {
        constructor() {
            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
        }
        get isDirty() {
            return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null
        }
        forEachItem(e) {
            let n;
            for (n = this._mapHead; n !== null; n = n._next) e(n)
        }
        forEachPreviousItem(e) {
            let n;
            for (n = this._previousMapHead; n !== null; n = n._nextPrevious) e(n)
        }
        forEachChangedItem(e) {
            let n;
            for (n = this._changesHead; n !== null; n = n._nextChanged) e(n)
        }
        forEachAddedItem(e) {
            let n;
            for (n = this._additionsHead; n !== null; n = n._nextAdded) e(n)
        }
        forEachRemovedItem(e) {
            let n;
            for (n = this._removalsHead; n !== null; n = n._nextRemoved) e(n)
        }
        diff(e) {
            if (!e) e = new Map;
            else if (!(e instanceof Map || Ga(e))) throw new m(900, !1);
            return this.check(e) ? this : null
        }
        onDestroy() {}
        check(e) {
            this._reset();
            let n = this._mapHead;
            if (this._appendAfter = null, this._forEach(e, (r, o) => {
                    if (n && n.key === o) this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
                    else {
                        let i = this._getOrCreateRecordForKey(o, r);
                        n = this._insertBeforeOrAppend(n, i)
                    }
                }), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (let r = n; r !== null; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
        }
        _insertBeforeOrAppend(e, n) {
            if (e) {
                let r = e._prev;
                return n._next = e, n._prev = r, e._prev = n, r && (r._next = n), e === this._mapHead && (this._mapHead = n), this._appendAfter = e, e
            }
            return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
        }
        _getOrCreateRecordForKey(e, n) {
            if (this._records.has(e)) {
                let o = this._records.get(e);
                this._maybeAddToChanges(o, n);
                let i = o._prev,
                    s = o._next;
                return i && (i._next = s), s && (s._prev = i), o._next = null, o._prev = null, o
            }
            let r = new ia(e);
            return this._records.set(e, r), r.currentValue = n, this._addToAdditions(r), r
        }
        _reset() {
            if (this.isDirty) {
                let e;
                for (this._previousMapHead = this._mapHead, e = this._previousMapHead; e !== null; e = e._next) e._nextPrevious = e._next;
                for (e = this._changesHead; e !== null; e = e._nextChanged) e.previousValue = e.currentValue;
                for (e = this._additionsHead; e != null; e = e._nextAdded) e.previousValue = e.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
        }
        _maybeAddToChanges(e, n) {
            Object.is(n, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = n, this._addToChanges(e))
        }
        _addToAdditions(e) {
            this._additionsHead === null ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
        }
        _addToChanges(e) {
            this._changesHead === null ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
        }
        _forEach(e, n) {
            e instanceof Map ? e.forEach(n) : Object.keys(e).forEach(r => n(e[r], r))
        }
    },
    ia = class {
        constructor(e) {
            this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        }
    };

function Sc() {
    return new Qa([new Xs])
}
var Qa = (() => {
    let e = class e {
        constructor(r) {
            this.factories = r
        }
        static create(r, o) {
            if (o != null) {
                let i = o.factories.slice();
                r = r.concat(i)
            }
            return new e(r)
        }
        static extend(r) {
            return {
                provide: e,
                useFactory: o => e.create(r, o || Sc()),
                deps: [
                    [e, new zc, new Uc]
                ]
            }
        }
        find(r) {
            let o = this.factories.find(i => i.supports(r));
            if (o != null) return o;
            throw new m(901, !1)
        }
    };
    e.\u0275prov = R({
        token: e,
        providedIn: "root",
        factory: Sc
    });
    let t = e;
    return t
})();

function Mc() {
    return new Za([new ra])
}
var Za = (() => {
    let e = class e {
        constructor(r) {
            this.factories = r
        }
        static create(r, o) {
            if (o) {
                let i = o.factories.slice();
                r = r.concat(i)
            }
            return new e(r)
        }
        static extend(r) {
            return {
                provide: e,
                useFactory: o => e.create(r, o || Mc()),
                deps: [
                    [e, new zc, new Uc]
                ]
            }
        }
        find(r) {
            let o = this.factories.find(i => i.supports(r));
            if (o) return o;
            throw new m(901, !1)
        }
    };
    e.\u0275prov = R({
        token: e,
        providedIn: "root",
        factory: Mc
    });
    let t = e;
    return t
})();

function UN(t) {
    try {
        let {
            rootComponent: e,
            appProviders: n,
            platformProviders: r
        } = t, o = iI(r), i = [Yw({}), {
            provide: sn,
            useExisting: eI
        }, ...n || []], s = new Eo({
            providers: i,
            parent: o,
            debugName: "",
            runEnvironmentInitializers: !1
        });
        return nI({
            r3Injector: s.injector,
            platformInjector: o,
            rootComponent: e
        })
    } catch (e) {
        return Promise.reject(e)
    }
}
var zN = new k("");
var Tc = !1;

function cI() {
    Tc || (Tc = !0, Gy(), vw(), Fw(), Iw(), jE(), cE(), GD(), qv())
}

function dI(t, e) {
    return qh(t)
}

function GN() {
    return pm([{
        provide: kr,
        useFactory: () => {
            let t = !0;
            return xn() && (t = !!E(ba, {
                optional: !0
            }) ? .get(uf, null)), t && vn("NgHydration"), t
        }
    }, {
        provide: Pn,
        useValue: () => {
            jD(!1), xn() && E(kr) && (fI(), cI())
        },
        multi: !0
    }, {
        provide: ff,
        useFactory: () => xn() && E(kr)
    }, {
        provide: Gh,
        useFactory: () => {
            if (xn() && E(kr)) {
                let t = E(Yn),
                    e = E(ut);
                return () => {
                    dI(t, e).then(() => {
                        HD(t)
                    })
                }
            }
            return () => {}
        },
        multi: !0
    }])
}

function fI() {
    let t = qn(),
        e;
    for (let n of t.body.childNodes)
        if (n.nodeType === Node.COMMENT_NODE && n.textContent ? .trim() === Uy) {
            e = n;
            break
        }
    if (!e) throw new m(-507, !1)
}

function hI(t) {
    return typeof t == "boolean" ? t : t != null && t !== "false"
}

function pI(t, e = NaN) {
    return !isNaN(parseFloat(t)) && !isNaN(Number(t)) ? Number(t) : e
}

function qN(t, e) {
    vn("NgSignals");
    let n = il(t);
    return e ? .equal && (n[ke].equal = e.equal), n
}

function WN(t) {
    let e = st(t);
    if (!e) return null;
    let n = new ln(e);
    return {
        get selector() {
            return n.selector
        },
        get type() {
            return n.componentType
        },
        get inputs() {
            return n.inputs
        },
        get outputs() {
            return n.outputs
        },
        get ngContentSelectors() {
            return n.ngContentSelectors
        },
        get isStandalone() {
            return e.standalone
        },
        get isSignal() {
            return e.signals
        }
    }
}
var np = null;

function Ja() {
    return np
}

function Dx(t) {
    np ? ? = t
}
var Zh = class {};
var Jn = new k(""),
    ou = (() => {
        let e = class e {
            historyGo(r) {
                throw new Error("")
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: () => E(gI),
            providedIn: "platform"
        });
        let t = e;
        return t
    })(),
    Ex = new k(""),
    gI = (() => {
        let e = class e extends ou {
            constructor() {
                super(), this._doc = E(Jn), this._location = window.location, this._history = window.history
            }
            getBaseHrefFromDOM() {
                return Ja().getBaseHref(this._doc)
            }
            onPopState(r) {
                let o = Ja().getGlobalEventTarget(this._doc, "window");
                return o.addEventListener("popstate", r, !1), () => o.removeEventListener("popstate", r)
            }
            onHashChange(r) {
                let o = Ja().getGlobalEventTarget(this._doc, "window");
                return o.addEventListener("hashchange", r, !1), () => o.removeEventListener("hashchange", r)
            }
            get href() {
                return this._location.href
            }
            get protocol() {
                return this._location.protocol
            }
            get hostname() {
                return this._location.hostname
            }
            get port() {
                return this._location.port
            }
            get pathname() {
                return this._location.pathname
            }
            get search() {
                return this._location.search
            }
            get hash() {
                return this._location.hash
            }
            set pathname(r) {
                this._location.pathname = r
            }
            pushState(r, o, i) {
                this._history.pushState(r, o, i)
            }
            replaceState(r, o, i) {
                this._history.replaceState(r, o, i)
            }
            forward() {
                this._history.forward()
            }
            back() {
                this._history.back()
            }
            historyGo(r = 0) {
                this._history.go(r)
            }
            getState() {
                return this._history.state
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: () => new e,
            providedIn: "platform"
        });
        let t = e;
        return t
    })();

function iu(t, e) {
    if (t.length == 0) return e;
    if (e.length == 0) return t;
    let n = 0;
    return t.endsWith("/") && n++, e.startsWith("/") && n++, n == 2 ? t + e.substring(1) : n == 1 ? t + e : t + "/" + e
}

function Kh(t) {
    let e = t.match(/#|\?|$/),
        n = e && e.index || t.length,
        r = n - (t[n - 1] === "/" ? 1 : 0);
    return t.slice(0, r) + t.slice(n)
}

function Ye(t) {
    return t && t[0] !== "?" ? "?" + t : t
}
var Zo = (() => {
        let e = class e {
            historyGo(r) {
                throw new Error("")
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: () => E(mI),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    rp = new k(""),
    mI = (() => {
        let e = class e extends Zo {
            constructor(r, o) {
                super(), this._platformLocation = r, this._removeListenerFns = [], this._baseHref = o ? ? this._platformLocation.getBaseHrefFromDOM() ? ? E(Jn).location ? .origin ? ? ""
            }
            ngOnDestroy() {
                for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
            }
            onPopState(r) {
                this._removeListenerFns.push(this._platformLocation.onPopState(r), this._platformLocation.onHashChange(r))
            }
            getBaseHref() {
                return this._baseHref
            }
            prepareExternalUrl(r) {
                return iu(this._baseHref, r)
            }
            path(r = !1) {
                let o = this._platformLocation.pathname + Ye(this._platformLocation.search),
                    i = this._platformLocation.hash;
                return i && r ? `${o}${i}` : o
            }
            pushState(r, o, i, s) {
                let a = this.prepareExternalUrl(i + Ye(s));
                this._platformLocation.pushState(r, o, a)
            }
            replaceState(r, o, i, s) {
                let a = this.prepareExternalUrl(i + Ye(s));
                this._platformLocation.replaceState(r, o, a)
            }
            forward() {
                this._platformLocation.forward()
            }
            back() {
                this._platformLocation.back()
            }
            getState() {
                return this._platformLocation.getState()
            }
            historyGo(r = 0) {
                this._platformLocation.historyGo ? .(r)
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(Z(ou), Z(rp, 8))
        }, e.\u0275prov = R({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    wx = (() => {
        let e = class e extends Zo {
            constructor(r, o) {
                super(), this._platformLocation = r, this._baseHref = "", this._removeListenerFns = [], o != null && (this._baseHref = o)
            }
            ngOnDestroy() {
                for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
            }
            onPopState(r) {
                this._removeListenerFns.push(this._platformLocation.onPopState(r), this._platformLocation.onHashChange(r))
            }
            getBaseHref() {
                return this._baseHref
            }
            path(r = !1) {
                let o = this._platformLocation.hash ? ? "#";
                return o.length > 0 ? o.substring(1) : o
            }
            prepareExternalUrl(r) {
                let o = iu(this._baseHref, r);
                return o.length > 0 ? "#" + o : o
            }
            pushState(r, o, i, s) {
                let a = this.prepareExternalUrl(i + Ye(s));
                a.length == 0 && (a = this._platformLocation.pathname), this._platformLocation.pushState(r, o, a)
            }
            replaceState(r, o, i, s) {
                let a = this.prepareExternalUrl(i + Ye(s));
                a.length == 0 && (a = this._platformLocation.pathname), this._platformLocation.replaceState(r, o, a)
            }
            forward() {
                this._platformLocation.forward()
            }
            back() {
                this._platformLocation.back()
            }
            getState() {
                return this._platformLocation.getState()
            }
            historyGo(r = 0) {
                this._platformLocation.historyGo ? .(r)
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(Z(ou), Z(rp, 8))
        }, e.\u0275prov = R({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    yI = (() => {
        let e = class e {
            constructor(r) {
                this._subject = new Se, this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = r;
                let o = this._locationStrategy.getBaseHref();
                this._basePath = EI(Kh(Yh(o))), this._locationStrategy.onPopState(i => {
                    this._subject.emit({
                        url: this.path(!0),
                        pop: !0,
                        state: i.state,
                        type: i.type
                    })
                })
            }
            ngOnDestroy() {
                this._urlChangeSubscription ? .unsubscribe(), this._urlChangeListeners = []
            }
            path(r = !1) {
                return this.normalize(this._locationStrategy.path(r))
            }
            getState() {
                return this._locationStrategy.getState()
            }
            isCurrentPathEqualTo(r, o = "") {
                return this.path() == this.normalize(r + Ye(o))
            }
            normalize(r) {
                return e.stripTrailingSlash(DI(this._basePath, Yh(r)))
            }
            prepareExternalUrl(r) {
                return r && r[0] !== "/" && (r = "/" + r), this._locationStrategy.prepareExternalUrl(r)
            }
            go(r, o = "", i = null) {
                this._locationStrategy.pushState(i, "", r, o), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Ye(o)), i)
            }
            replaceState(r, o = "", i = null) {
                this._locationStrategy.replaceState(i, "", r, o), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Ye(o)), i)
            }
            forward() {
                this._locationStrategy.forward()
            }
            back() {
                this._locationStrategy.back()
            }
            historyGo(r = 0) {
                this._locationStrategy.historyGo ? .(r)
            }
            onUrlChange(r) {
                return this._urlChangeListeners.push(r), this._urlChangeSubscription ? ? = this.subscribe(o => {
                    this._notifyUrlChangeListeners(o.url, o.state)
                }), () => {
                    let o = this._urlChangeListeners.indexOf(r);
                    this._urlChangeListeners.splice(o, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription ? .unsubscribe(), this._urlChangeSubscription = null)
                }
            }
            _notifyUrlChangeListeners(r = "", o) {
                this._urlChangeListeners.forEach(i => i(r, o))
            }
            subscribe(r, o, i) {
                return this._subject.subscribe({
                    next: r,
                    error: o,
                    complete: i
                })
            }
        };
        e.normalizeQueryParams = Ye, e.joinWithSlash = iu, e.stripTrailingSlash = Kh, e.\u0275fac = function(o) {
            return new(o || e)(Z(Zo))
        }, e.\u0275prov = R({
            token: e,
            factory: () => vI(),
            providedIn: "root"
        });
        let t = e;
        return t
    })();

function vI() {
    return new yI(Z(Zo))
}

function DI(t, e) {
    if (!t || !e.startsWith(t)) return e;
    let n = e.substring(t.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : e
}

function Yh(t) {
    return t.replace(/\/index.html$/, "")
}

function EI(t) {
    if (new RegExp("^(https?:)?//").test(t)) {
        let [, n] = t.split(/\/\/[^\/]+/);
        return n
    }
    return t
}

function Ix(t, e) {
    e = encodeURIComponent(e);
    for (let n of t.split(";")) {
        let r = n.indexOf("="),
            [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (o.trim() === e) return decodeURIComponent(i)
    }
    return null
}
var Xa = /\s+/,
    Jh = [],
    bx = (() => {
        let e = class e {
            constructor(r, o) {
                this._ngEl = r, this._renderer = o, this.initialClasses = Jh, this.stateMap = new Map
            }
            set klass(r) {
                this.initialClasses = r != null ? r.trim().split(Xa) : Jh
            }
            set ngClass(r) {
                this.rawClass = typeof r == "string" ? r.trim().split(Xa) : r
            }
            ngDoCheck() {
                for (let o of this.initialClasses) this._updateState(o, !0);
                let r = this.rawClass;
                if (Array.isArray(r) || r instanceof Set)
                    for (let o of r) this._updateState(o, !0);
                else if (r != null)
                    for (let o of Object.keys(r)) this._updateState(o, !!r[o]);
                this._applyStateDiff()
            }
            _updateState(r, o) {
                let i = this.stateMap.get(r);
                i !== void 0 ? (i.enabled !== o && (i.changed = !0, i.enabled = o), i.touched = !0) : this.stateMap.set(r, {
                    enabled: o,
                    changed: !0,
                    touched: !0
                })
            }
            _applyStateDiff() {
                for (let r of this.stateMap) {
                    let o = r[0],
                        i = r[1];
                    i.changed ? (this._toggleClass(o, i.enabled), i.changed = !1) : i.touched || (i.enabled && this._toggleClass(o, !1), this.stateMap.delete(o)), i.touched = !1
                }
            }
            _toggleClass(r, o) {
                r = r.trim(), r.length > 0 && r.split(Xa).forEach(i => {
                    o ? this._renderer.addClass(this._ngEl.nativeElement, i) : this._renderer.removeClass(this._ngEl.nativeElement, i)
                })
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(de(ht), de(Wo))
        }, e.\u0275dir = fn({
            type: e,
            selectors: [
                ["", "ngClass", ""]
            ],
            inputs: {
                klass: [0, "class", "klass"],
                ngClass: "ngClass"
            },
            standalone: !0
        });
        let t = e;
        return t
    })();
var eu = class {
        constructor(e, n, r, o) {
            this.$implicit = e, this.ngForOf = n, this.index = r, this.count = o
        }
        get first() {
            return this.index === 0
        }
        get last() {
            return this.index === this.count - 1
        }
        get even() {
            return this.index % 2 === 0
        }
        get odd() {
            return !this.even
        }
    },
    Cx = (() => {
        let e = class e {
            set ngForOf(r) {
                this._ngForOf = r, this._ngForOfDirty = !0
            }
            set ngForTrackBy(r) {
                this._trackByFn = r
            }
            get ngForTrackBy() {
                return this._trackByFn
            }
            constructor(r, o, i) {
                this._viewContainer = r, this._template = o, this._differs = i, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }
            set ngForTemplate(r) {
                r && (this._template = r)
            }
            ngDoCheck() {
                if (this._ngForOfDirty) {
                    this._ngForOfDirty = !1;
                    let r = this._ngForOf;
                    if (!this._differ && r)
                        if (0) try {} catch {} else this._differ = this._differs.find(r).create(this.ngForTrackBy)
                }
                if (this._differ) {
                    let r = this._differ.diff(this._ngForOf);
                    r && this._applyChanges(r)
                }
            }
            _applyChanges(r) {
                let o = this._viewContainer;
                r.forEachOperation((i, s, a) => {
                    if (i.previousIndex == null) o.createEmbeddedView(this._template, new eu(i.item, this._ngForOf, -1, -1), a === null ? void 0 : a);
                    else if (a == null) o.remove(s === null ? void 0 : s);
                    else if (s !== null) {
                        let u = o.get(s);
                        o.move(u, a), Xh(u, i)
                    }
                });
                for (let i = 0, s = o.length; i < s; i++) {
                    let u = o.get(i).context;
                    u.index = i, u.count = s, u.ngForOf = this._ngForOf
                }
                r.forEachIdentityChange(i => {
                    let s = o.get(i.currentIndex);
                    Xh(s, i)
                })
            }
            static ngTemplateContextGuard(r, o) {
                return !0
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(de(Lt), de(Ot), de(Qa))
        }, e.\u0275dir = fn({
            type: e,
            selectors: [
                ["", "ngFor", "", "ngForOf", ""]
            ],
            inputs: {
                ngForOf: "ngForOf",
                ngForTrackBy: "ngForTrackBy",
                ngForTemplate: "ngForTemplate"
            },
            standalone: !0
        });
        let t = e;
        return t
    })();

function Xh(t, e) {
    t.context.$implicit = e.item
}
var _x = (() => {
        let e = class e {
            constructor(r, o) {
                this._viewContainer = r, this._context = new tu, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = o
            }
            set ngIf(r) {
                this._context.$implicit = this._context.ngIf = r, this._updateView()
            }
            set ngIfThen(r) {
                ep("ngIfThen", r), this._thenTemplateRef = r, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(r) {
                ep("ngIfElse", r), this._elseTemplateRef = r, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
                this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngTemplateContextGuard(r, o) {
                return !0
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(de(Lt), de(Ot))
        }, e.\u0275dir = fn({
            type: e,
            selectors: [
                ["", "ngIf", ""]
            ],
            inputs: {
                ngIf: "ngIf",
                ngIfThen: "ngIfThen",
                ngIfElse: "ngIfElse"
            },
            standalone: !0
        });
        let t = e;
        return t
    })(),
    tu = class {
        constructor() {
            this.$implicit = null, this.ngIf = null
        }
    };

function ep(t, e) {
    if (!!!(!e || e.createEmbeddedView)) throw new Error(`${t} must be a TemplateRef, but received '${oe(e)}'.`)
}
var Sx = (() => {
        let e = class e {
            constructor(r, o, i) {
                this._ngEl = r, this._differs = o, this._renderer = i, this._ngStyle = null, this._differ = null
            }
            set ngStyle(r) {
                this._ngStyle = r, !this._differ && r && (this._differ = this._differs.find(r).create())
            }
            ngDoCheck() {
                if (this._differ) {
                    let r = this._differ.diff(this._ngStyle);
                    r && this._applyChanges(r)
                }
            }
            _setStyle(r, o) {
                let [i, s] = r.split("."), a = i.indexOf("-") === -1 ? void 0 : Bn.DashCase;
                o != null ? this._renderer.setStyle(this._ngEl.nativeElement, i, s ? `${o}${s}` : o, a) : this._renderer.removeStyle(this._ngEl.nativeElement, i, a)
            }
            _applyChanges(r) {
                r.forEachRemovedItem(o => this._setStyle(o.key, null)), r.forEachAddedItem(o => this._setStyle(o.key, o.currentValue)), r.forEachChangedItem(o => this._setStyle(o.key, o.currentValue))
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(de(ht), de(Za), de(Wo))
        }, e.\u0275dir = fn({
            type: e,
            selectors: [
                ["", "ngStyle", ""]
            ],
            inputs: {
                ngStyle: "ngStyle"
            },
            standalone: !0
        });
        let t = e;
        return t
    })(),
    Mx = (() => {
        let e = class e {
            constructor(r) {
                this._viewContainerRef = r, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null, this.ngTemplateOutletInjector = null
            }
            ngOnChanges(r) {
                if (this._shouldRecreateView(r)) {
                    let o = this._viewContainerRef;
                    if (this._viewRef && o.remove(o.indexOf(this._viewRef)), !this.ngTemplateOutlet) {
                        this._viewRef = null;
                        return
                    }
                    let i = this._createContextForwardProxy();
                    this._viewRef = o.createEmbeddedView(this.ngTemplateOutlet, i, {
                        injector: this.ngTemplateOutletInjector ? ? void 0
                    })
                }
            }
            _shouldRecreateView(r) {
                return !!r.ngTemplateOutlet || !!r.ngTemplateOutletInjector
            }
            _createContextForwardProxy() {
                return new Proxy({}, {
                    set: (r, o, i) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, o, i) : !1,
                    get: (r, o, i) => {
                        if (this.ngTemplateOutletContext) return Reflect.get(this.ngTemplateOutletContext, o, i)
                    }
                })
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(de(Lt))
        }, e.\u0275dir = fn({
            type: e,
            selectors: [
                ["", "ngTemplateOutlet", ""]
            ],
            inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector"
            },
            standalone: !0,
            features: [fa]
        });
        let t = e;
        return t
    })();
var Tx = (() => {
        let e = class e {};
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275mod = Jc({
            type: e
        }), e.\u0275inj = kc({});
        let t = e;
        return t
    })(),
    wI = "browser",
    II = "server";

function bI(t) {
    return t === wI
}

function Nx(t) {
    return t === II
}
var xx = (() => {
        let e = class e {};
        e.\u0275prov = R({
            token: e,
            providedIn: "root",
            factory: () => bI(E(ko)) ? new nu(E(Jn), window) : new ru
        });
        let t = e;
        return t
    })(),
    nu = class {
        constructor(e, n) {
            this.document = e, this.window = n, this.offset = () => [0, 0]
        }
        setOffset(e) {
            Array.isArray(e) ? this.offset = () => e : this.offset = e
        }
        getScrollPosition() {
            return [this.window.scrollX, this.window.scrollY]
        }
        scrollToPosition(e) {
            this.window.scrollTo(e[0], e[1])
        }
        scrollToAnchor(e) {
            let n = CI(this.document, e);
            n && (this.scrollToElement(n), n.focus())
        }
        setHistoryScrollRestoration(e) {
            this.window.history.scrollRestoration = e
        }
        scrollToElement(e) {
            let n = e.getBoundingClientRect(),
                r = n.left + this.window.pageXOffset,
                o = n.top + this.window.pageYOffset,
                i = this.offset();
            this.window.scrollTo(r - i[0], o - i[1])
        }
    };

function CI(t, e) {
    let n = t.getElementById(e) || t.getElementsByName(e)[0];
    if (n) return n;
    if (typeof t.createTreeWalker == "function" && t.body && typeof t.body.attachShadow == "function") {
        let r = t.createTreeWalker(t.body, NodeFilter.SHOW_ELEMENT),
            o = r.currentNode;
        for (; o;) {
            let i = o.shadowRoot;
            if (i) {
                let s = i.getElementById(e) || i.querySelector(`[name="${e}"]`);
                if (s) return s
            }
            o = r.nextNode()
        }
    }
    return null
}
var ru = class {
        setOffset(e) {}
        getScrollPosition() {
            return [0, 0]
        }
        scrollToPosition(e) {}
        scrollToAnchor(e) {}
        setHistoryScrollRestoration(e) {}
    },
    tp = class {};
var b = function(t) {
        return t[t.State = 0] = "State", t[t.Transition = 1] = "Transition", t[t.Sequence = 2] = "Sequence", t[t.Group = 3] = "Group", t[t.Animate = 4] = "Animate", t[t.Keyframes = 5] = "Keyframes", t[t.Style = 6] = "Style", t[t.Trigger = 7] = "Trigger", t[t.Reference = 8] = "Reference", t[t.AnimateChild = 9] = "AnimateChild", t[t.AnimateRef = 10] = "AnimateRef", t[t.Query = 11] = "Query", t[t.Stagger = 12] = "Stagger", t
    }(b || {}),
    Ue = "*";

function Lx(t, e) {
    return {
        type: b.Trigger,
        name: t,
        definitions: e,
        options: {}
    }
}

function jx(t, e = null) {
    return {
        type: b.Animate,
        styles: e,
        timings: t
    }
}

function lu(t, e = null) {
    return {
        type: b.Sequence,
        steps: t,
        options: e
    }
}

function cu(t) {
    return {
        type: b.Style,
        styles: t,
        offset: null
    }
}

function Vx(t, e, n = null) {
    return {
        type: b.Transition,
        expr: t,
        animation: e,
        options: n
    }
}

function Bx(t, e = null) {
    return {
        type: b.Reference,
        animation: t,
        options: e
    }
}

function $x(t, e = null) {
    return {
        type: b.AnimateRef,
        animation: t,
        options: e
    }
}
var _I = (() => {
        let e = class e {};
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: () => E(SI),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    su = class {},
    SI = (() => {
        let e = class e extends _I {
            constructor(r, o) {
                super(), this.animationModuleType = E(nf, {
                    optional: !0
                }), this._nextAnimationId = 0;
                let i = {
                    id: "0",
                    encapsulation: St.None,
                    styles: [],
                    data: {
                        animation: []
                    }
                };
                if (this._renderer = r.createRenderer(o.body, i), this.animationModuleType === null && !TI(this._renderer)) throw new m(3600, !1)
            }
            build(r) {
                let o = this._nextAnimationId;
                this._nextAnimationId++;
                let i = Array.isArray(r) ? lu(r) : r;
                return op(this._renderer, null, o, "register", [i]), new au(o, this._renderer)
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)(Z(un), Z(Jn))
        }, e.\u0275prov = R({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    au = class extends su {
        constructor(e, n) {
            super(), this._id = e, this._renderer = n
        }
        create(e, n) {
            return new uu(this._id, e, n || {}, this._renderer)
        }
    },
    uu = class {
        constructor(e, n, r, o) {
            this.id = e, this.element = n, this._renderer = o, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", r)
        }
        _listen(e, n) {
            return this._renderer.listen(this.element, `@@${this.id}:${e}`, n)
        }
        _command(e, ...n) {
            op(this._renderer, this.element, this.id, e, n)
        }
        onDone(e) {
            this._listen("done", e)
        }
        onStart(e) {
            this._listen("start", e)
        }
        onDestroy(e) {
            this._listen("destroy", e)
        }
        init() {
            this._command("init")
        }
        hasStarted() {
            return this._started
        }
        play() {
            this._command("play"), this._started = !0
        }
        pause() {
            this._command("pause")
        }
        restart() {
            this._command("restart")
        }
        finish() {
            this._command("finish")
        }
        destroy() {
            this._command("destroy")
        }
        reset() {
            this._command("reset"), this._started = !1
        }
        setPosition(e) {
            this._command("setPosition", e)
        }
        getPosition() {
            return MI(this._renderer) ? .engine ? .players[this.id] ? .getPosition() ? ? 0
        }
    };

function op(t, e, n, r, o) {
    t.setProperty(e, `@@${n}:${r}`, o)
}

function MI(t) {
    let e = t.\u0275type;
    return e === 0 ? t : e === 1 ? t.animationRenderer : null
}

function TI(t) {
    let e = t.\u0275type;
    return e === 0 || e === 1
}
var pt = class {
        constructor(e = 0, n = 0) {
            this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._originalOnDoneFns = [], this._originalOnStartFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = e + n
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
        }
        onStart(e) {
            this._originalOnStartFns.push(e), this._onStartFns.push(e)
        }
        onDone(e) {
            this._originalOnDoneFns.push(e), this._onDoneFns.push(e)
        }
        onDestroy(e) {
            this._onDestroyFns.push(e)
        }
        hasStarted() {
            return this._started
        }
        init() {}
        play() {
            this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
        }
        triggerMicrotask() {
            queueMicrotask(() => this._onFinish())
        }
        _onStart() {
            this._onStartFns.forEach(e => e()), this._onStartFns = []
        }
        pause() {}
        restart() {}
        finish() {
            this._onFinish()
        }
        destroy() {
            this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
        }
        reset() {
            this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
        }
        setPosition(e) {
            this._position = this.totalTime ? e * this.totalTime : 1
        }
        getPosition() {
            return this.totalTime ? this._position / this.totalTime : 1
        }
        triggerCallback(e) {
            let n = e == "start" ? this._onStartFns : this._onDoneFns;
            n.forEach(r => r()), n.length = 0
        }
    },
    Xn = class {
        constructor(e) {
            this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = e;
            let n = 0,
                r = 0,
                o = 0,
                i = this.players.length;
            i == 0 ? queueMicrotask(() => this._onFinish()) : this.players.forEach(s => {
                s.onDone(() => {
                    ++n == i && this._onFinish()
                }), s.onDestroy(() => {
                    ++r == i && this._onDestroy()
                }), s.onStart(() => {
                    ++o == i && this._onStart()
                })
            }), this.totalTime = this.players.reduce((s, a) => Math.max(s, a.totalTime), 0)
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
        }
        init() {
            this.players.forEach(e => e.init())
        }
        onStart(e) {
            this._onStartFns.push(e)
        }
        _onStart() {
            this.hasStarted() || (this._started = !0, this._onStartFns.forEach(e => e()), this._onStartFns = [])
        }
        onDone(e) {
            this._onDoneFns.push(e)
        }
        onDestroy(e) {
            this._onDestroyFns.push(e)
        }
        hasStarted() {
            return this._started
        }
        play() {
            this.parentPlayer || this.init(), this._onStart(), this.players.forEach(e => e.play())
        }
        pause() {
            this.players.forEach(e => e.pause())
        }
        restart() {
            this.players.forEach(e => e.restart())
        }
        finish() {
            this._onFinish(), this.players.forEach(e => e.finish())
        }
        destroy() {
            this._onDestroy()
        }
        _onDestroy() {
            this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(e => e.destroy()), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
        }
        reset() {
            this.players.forEach(e => e.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
        }
        setPosition(e) {
            let n = e * this.totalTime;
            this.players.forEach(r => {
                let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
                r.setPosition(o)
            })
        }
        getPosition() {
            let e = this.players.reduce((n, r) => n === null || r.totalTime > n.totalTime ? r : n, null);
            return e != null ? e.getPosition() : 0
        }
        beforeDestroy() {
            this.players.forEach(e => {
                e.beforeDestroy && e.beforeDestroy()
            })
        }
        triggerCallback(e) {
            let n = e == "start" ? this._onStartFns : this._onDoneFns;
            n.forEach(r => r()), n.length = 0
        }
    },
    Ko = "!";

function ip(t) {
    return new m(3e3, !1)
}

function NI() {
    return new m(3100, !1)
}

function xI() {
    return new m(3101, !1)
}

function AI(t) {
    return new m(3001, !1)
}

function OI(t) {
    return new m(3003, !1)
}

function FI(t) {
    return new m(3004, !1)
}

function PI(t, e) {
    return new m(3005, !1)
}

function RI() {
    return new m(3006, !1)
}

function kI() {
    return new m(3007, !1)
}

function LI(t, e) {
    return new m(3008, !1)
}

function jI(t) {
    return new m(3002, !1)
}

function VI(t, e, n, r, o) {
    return new m(3010, !1)
}

function BI() {
    return new m(3011, !1)
}

function $I() {
    return new m(3012, !1)
}

function HI() {
    return new m(3200, !1)
}

function UI() {
    return new m(3202, !1)
}

function zI() {
    return new m(3013, !1)
}

function GI(t) {
    return new m(3014, !1)
}

function qI(t) {
    return new m(3015, !1)
}

function WI(t) {
    return new m(3016, !1)
}

function QI(t) {
    return new m(3500, !1)
}

function ZI(t) {
    return new m(3501, !1)
}

function KI(t, e) {
    return new m(3404, !1)
}

function YI(t) {
    return new m(3502, !1)
}

function JI(t) {
    return new m(3503, !1)
}

function XI() {
    return new m(3300, !1)
}

function eb(t) {
    return new m(3504, !1)
}

function tb(t) {
    return new m(3301, !1)
}

function nb(t, e) {
    return new m(3302, !1)
}

function rb(t) {
    return new m(3303, !1)
}

function ob(t, e) {
    return new m(3400, !1)
}

function ib(t) {
    return new m(3401, !1)
}

function sb(t) {
    return new m(3402, !1)
}

function ab(t, e) {
    return new m(3505, !1)
}
var ub = new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);

function gt(t) {
    switch (t.length) {
        case 0:
            return new pt;
        case 1:
            return t[0];
        default:
            return new Xn(t)
    }
}

function bp(t, e, n = new Map, r = new Map) {
    let o = [],
        i = [],
        s = -1,
        a = null;
    if (e.forEach(u => {
            let l = u.get("offset"),
                c = l == s,
                d = c && a || new Map;
            u.forEach((h, f) => {
                let p = f,
                    g = h;
                if (f !== "offset") switch (p = t.normalizePropertyName(p, o), g) {
                    case Ko:
                        g = n.get(f);
                        break;
                    case Ue:
                        g = r.get(f);
                        break;
                    default:
                        g = t.normalizeStyleValue(f, p, g, o);
                        break
                }
                d.set(p, g)
            }), c || i.push(d), a = d, s = l
        }), o.length) throw YI(o);
    return i
}

function ku(t, e, n, r) {
    switch (e) {
        case "start":
            t.onStart(() => r(n && du(n, "start", t)));
            break;
        case "done":
            t.onDone(() => r(n && du(n, "done", t)));
            break;
        case "destroy":
            t.onDestroy(() => r(n && du(n, "destroy", t)));
            break
    }
}

function du(t, e, n) {
    let r = n.totalTime,
        o = !!n.disabled,
        i = Lu(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, r ? ? t.totalTime, o),
        s = t._data;
    return s != null && (i._data = s), i
}

function Lu(t, e, n, r, o = "", i = 0, s) {
    return {
        element: t,
        triggerName: e,
        fromState: n,
        toState: r,
        phaseName: o,
        totalTime: i,
        disabled: !!s
    }
}

function De(t, e, n) {
    let r = t.get(e);
    return r || t.set(e, r = n), r
}

function sp(t) {
    let e = t.indexOf(":"),
        n = t.substring(1, e),
        r = t.slice(e + 1);
    return [n, r]
}
var lb = typeof document > "u" ? null : document.documentElement;

function ju(t) {
    let e = t.parentNode || t.host || null;
    return e === lb ? null : e
}

function cb(t) {
    return t.substring(1, 6) == "ebkit"
}
var jt = null,
    ap = !1;

function db(t) {
    jt || (jt = fb() || {}, ap = jt.style ? "WebkitAppearance" in jt.style : !1);
    let e = !0;
    return jt.style && !cb(t) && (e = t in jt.style, !e && ap && (e = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1) in jt.style)), e
}

function qx(t) {
    return ub.has(t)
}

function fb() {
    return typeof document < "u" ? document.body : null
}

function Cp(t, e) {
    for (; e;) {
        if (e === t) return !0;
        e = ju(e)
    }
    return !1
}

function _p(t, e, n) {
    if (n) return Array.from(t.querySelectorAll(e));
    let r = t.querySelector(e);
    return r ? [r] : []
}
var Sp = (() => {
        let e = class e {
            validateStyleProperty(r) {
                return db(r)
            }
            containsElement(r, o) {
                return Cp(r, o)
            }
            getParentElement(r) {
                return ju(r)
            }
            query(r, o, i) {
                return _p(r, o, i)
            }
            computeStyle(r, o, i) {
                return i || ""
            }
            animate(r, o, i, s, a, u = [], l) {
                return new pt(i, s)
            }
        };
        e.\u0275fac = function(o) {
            return new(o || e)
        }, e.\u0275prov = R({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    Gu = class Gu {};
Gu.NOOP = new Sp;
var up = Gu,
    yu = class {},
    vu = class {
        normalizePropertyName(e, n) {
            return e
        }
        normalizeStyleValue(e, n, r, o) {
            return r
        }
    },
    hb = 1e3,
    Mp = "{{",
    pb = "}}",
    Vu = "ng-enter",
    ni = "ng-leave",
    Yo = "ng-trigger",
    ri = ".ng-trigger",
    lp = "ng-animating",
    Du = ".ng-animating";

function Je(t) {
    if (typeof t == "number") return t;
    let e = t.match(/^(-?[\.\d]+)(m?s)/);
    return !e || e.length < 2 ? 0 : Eu(parseFloat(e[1]), e[2])
}

function Eu(t, e) {
    switch (e) {
        case "s":
            return t * hb;
        default:
            return t
    }
}

function oi(t, e, n) {
    return t.hasOwnProperty("duration") ? t : gb(t, e, n)
}

function gb(t, e, n) {
    let r = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
        o, i = 0,
        s = "";
    if (typeof t == "string") {
        let a = t.match(r);
        if (a === null) return e.push(ip(t)), {
            duration: 0,
            delay: 0,
            easing: ""
        };
        o = Eu(parseFloat(a[1]), a[2]);
        let u = a[3];
        u != null && (i = Eu(parseFloat(u), a[4]));
        let l = a[5];
        l && (s = l)
    } else o = t;
    if (!n) {
        let a = !1,
            u = e.length;
        o < 0 && (e.push(NI()), a = !0), i < 0 && (e.push(xI()), a = !0), a && e.splice(u, 0, ip(t))
    }
    return {
        duration: o,
        delay: i,
        easing: s
    }
}

function mb(t) {
    return t.length ? t[0] instanceof Map ? t : t.map(e => new Map(Object.entries(e))) : []
}

function cp(t) {
    return Array.isArray(t) ? new Map(...t) : new Map(t)
}

function ze(t, e, n) {
    e.forEach((r, o) => {
        let i = Bu(o);
        n && !n.has(o) && n.set(o, t.style[i]), t.style[i] = r
    })
}

function Bt(t, e) {
    e.forEach((n, r) => {
        let o = Bu(r);
        t.style[o] = ""
    })
}

function er(t) {
    return Array.isArray(t) ? t.length == 1 ? t[0] : lu(t) : t
}

function yb(t, e, n) {
    let r = e.params || {},
        o = Tp(t);
    o.length && o.forEach(i => {
        r.hasOwnProperty(i) || n.push(AI(i))
    })
}
var wu = new RegExp(`${Mp}\\s*(.+?)\\s*${pb}`, "g");

function Tp(t) {
    let e = [];
    if (typeof t == "string") {
        let n;
        for (; n = wu.exec(t);) e.push(n[1]);
        wu.lastIndex = 0
    }
    return e
}

function nr(t, e, n) {
    let r = `${t}`,
        o = r.replace(wu, (i, s) => {
            let a = e[s];
            return a == null && (n.push(OI(s)), a = ""), a.toString()
        });
    return o == r ? t : o
}
var vb = /-+([a-z0-9])/g;

function Bu(t) {
    return t.replace(vb, (...e) => e[1].toUpperCase())
}

function Wx(t) {
    return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function Db(t, e) {
    return t === 0 || e === 0
}

function Eb(t, e, n) {
    if (n.size && e.length) {
        let r = e[0],
            o = [];
        if (n.forEach((i, s) => {
                r.has(s) || o.push(s), r.set(s, i)
            }), o.length)
            for (let i = 1; i < e.length; i++) {
                let s = e[i];
                o.forEach(a => s.set(a, $u(t, a)))
            }
    }
    return e
}

function ve(t, e, n) {
    switch (e.type) {
        case b.Trigger:
            return t.visitTrigger(e, n);
        case b.State:
            return t.visitState(e, n);
        case b.Transition:
            return t.visitTransition(e, n);
        case b.Sequence:
            return t.visitSequence(e, n);
        case b.Group:
            return t.visitGroup(e, n);
        case b.Animate:
            return t.visitAnimate(e, n);
        case b.Keyframes:
            return t.visitKeyframes(e, n);
        case b.Style:
            return t.visitStyle(e, n);
        case b.Reference:
            return t.visitReference(e, n);
        case b.AnimateChild:
            return t.visitAnimateChild(e, n);
        case b.AnimateRef:
            return t.visitAnimateRef(e, n);
        case b.Query:
            return t.visitQuery(e, n);
        case b.Stagger:
            return t.visitStagger(e, n);
        default:
            throw FI(e.type)
    }
}

function $u(t, e) {
    return window.getComputedStyle(t)[e]
}
var wb = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]),
    Iu = class extends yu {
        normalizePropertyName(e, n) {
            return Bu(e)
        }
        normalizeStyleValue(e, n, r, o) {
            let i = "",
                s = r.toString().trim();
            if (wb.has(n) && r !== 0 && r !== "0")
                if (typeof r == "number") i = "px";
                else {
                    let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    a && a[1].length == 0 && o.push(PI(e, r))
                }
            return s + i
        }
    };
var ii = "*";

function Ib(t, e) {
    let n = [];
    return typeof t == "string" ? t.split(/\s*,\s*/).forEach(r => bb(r, n, e)) : n.push(t), n
}

function bb(t, e, n) {
    if (t[0] == ":") {
        let u = Cb(t, n);
        if (typeof u == "function") {
            e.push(u);
            return
        }
        t = u
    }
    let r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (r == null || r.length < 4) return n.push(qI(t)), e;
    let o = r[1],
        i = r[2],
        s = r[3];
    e.push(dp(o, s));
    let a = o == ii && s == ii;
    i[0] == "<" && !a && e.push(dp(s, o))
}

function Cb(t, e) {
    switch (t) {
        case ":enter":
            return "void => *";
        case ":leave":
            return "* => void";
        case ":increment":
            return (n, r) => parseFloat(r) > parseFloat(n);
        case ":decrement":
            return (n, r) => parseFloat(r) < parseFloat(n);
        default:
            return e.push(WI(t)), "* => *"
    }
}
var Jo = new Set(["true", "1"]),
    Xo = new Set(["false", "0"]);

function dp(t, e) {
    let n = Jo.has(t) || Xo.has(t),
        r = Jo.has(e) || Xo.has(e);
    return (o, i) => {
        let s = t == ii || t == o,
            a = e == ii || e == i;
        return !s && n && typeof o == "boolean" && (s = o ? Jo.has(t) : Xo.has(t)), !a && r && typeof i == "boolean" && (a = i ? Jo.has(e) : Xo.has(e)), s && a
    }
}
var Np = ":self",
    _b = new RegExp(`s*${Np}s*,?`, "g");

function Hu(t, e, n, r) {
    return new bu(t).build(e, n, r)
}
var fp = "",
    bu = class {
        constructor(e) {
            this._driver = e
        }
        build(e, n, r) {
            let o = new Cu(n);
            return this._resetContextStyleTimingState(o), ve(this, er(e), o)
        }
        _resetContextStyleTimingState(e) {
            e.currentQuerySelector = fp, e.collectedStyles = new Map, e.collectedStyles.set(fp, new Map), e.currentTime = 0
        }
        visitTrigger(e, n) {
            let r = n.queryCount = 0,
                o = n.depCount = 0,
                i = [],
                s = [];
            return e.name.charAt(0) == "@" && n.errors.push(RI()), e.definitions.forEach(a => {
                if (this._resetContextStyleTimingState(n), a.type == b.State) {
                    let u = a,
                        l = u.name;
                    l.toString().split(/\s*,\s*/).forEach(c => {
                        u.name = c, i.push(this.visitState(u, n))
                    }), u.name = l
                } else if (a.type == b.Transition) {
                    let u = this.visitTransition(a, n);
                    r += u.queryCount, o += u.depCount, s.push(u)
                } else n.errors.push(kI())
            }), {
                type: b.Trigger,
                name: e.name,
                states: i,
                transitions: s,
                queryCount: r,
                depCount: o,
                options: null
            }
        }
        visitState(e, n) {
            let r = this.visitStyle(e.styles, n),
                o = e.options && e.options.params || null;
            if (r.containsDynamicStyles) {
                let i = new Set,
                    s = o || {};
                r.styles.forEach(a => {
                    a instanceof Map && a.forEach(u => {
                        Tp(u).forEach(l => {
                            s.hasOwnProperty(l) || i.add(l)
                        })
                    })
                }), i.size && n.errors.push(LI(e.name, [...i.values()]))
            }
            return {
                type: b.State,
                name: e.name,
                style: r,
                options: o ? {
                    params: o
                } : null
            }
        }
        visitTransition(e, n) {
            n.queryCount = 0, n.depCount = 0;
            let r = ve(this, er(e.animation), n),
                o = Ib(e.expr, n.errors);
            return {
                type: b.Transition,
                matchers: o,
                animation: r,
                queryCount: n.queryCount,
                depCount: n.depCount,
                options: Vt(e.options)
            }
        }
        visitSequence(e, n) {
            return {
                type: b.Sequence,
                steps: e.steps.map(r => ve(this, r, n)),
                options: Vt(e.options)
            }
        }
        visitGroup(e, n) {
            let r = n.currentTime,
                o = 0,
                i = e.steps.map(s => {
                    n.currentTime = r;
                    let a = ve(this, s, n);
                    return o = Math.max(o, n.currentTime), a
                });
            return n.currentTime = o, {
                type: b.Group,
                steps: i,
                options: Vt(e.options)
            }
        }
        visitAnimate(e, n) {
            let r = Nb(e.timings, n.errors);
            n.currentAnimateTimings = r;
            let o, i = e.styles ? e.styles : cu({});
            if (i.type == b.Keyframes) o = this.visitKeyframes(i, n);
            else {
                let s = e.styles,
                    a = !1;
                if (!s) {
                    a = !0;
                    let l = {};
                    r.easing && (l.easing = r.easing), s = cu(l)
                }
                n.currentTime += r.duration + r.delay;
                let u = this.visitStyle(s, n);
                u.isEmptyStep = a, o = u
            }
            return n.currentAnimateTimings = null, {
                type: b.Animate,
                timings: r,
                style: o,
                options: null
            }
        }
        visitStyle(e, n) {
            let r = this._makeStyleAst(e, n);
            return this._validateStyleAst(r, n), r
        }
        _makeStyleAst(e, n) {
            let r = [],
                o = Array.isArray(e.styles) ? e.styles : [e.styles];
            for (let a of o) typeof a == "string" ? a === Ue ? r.push(a) : n.errors.push(jI(a)) : r.push(new Map(Object.entries(a)));
            let i = !1,
                s = null;
            return r.forEach(a => {
                if (a instanceof Map && (a.has("easing") && (s = a.get("easing"), a.delete("easing")), !i)) {
                    for (let u of a.values())
                        if (u.toString().indexOf(Mp) >= 0) {
                            i = !0;
                            break
                        }
                }
            }), {
                type: b.Style,
                styles: r,
                easing: s,
                offset: e.offset,
                containsDynamicStyles: i,
                options: null
            }
        }
        _validateStyleAst(e, n) {
            let r = n.currentAnimateTimings,
                o = n.currentTime,
                i = n.currentTime;
            r && i > 0 && (i -= r.duration + r.delay), e.styles.forEach(s => {
                typeof s != "string" && s.forEach((a, u) => {
                    let l = n.collectedStyles.get(n.currentQuerySelector),
                        c = l.get(u),
                        d = !0;
                    c && (i != o && i >= c.startTime && o <= c.endTime && (n.errors.push(VI(u, c.startTime, c.endTime, i, o)), d = !1), i = c.startTime), d && l.set(u, {
                        startTime: i,
                        endTime: o
                    }), n.options && yb(a, n.options, n.errors)
                })
            })
        }
        visitKeyframes(e, n) {
            let r = {
                type: b.Keyframes,
                styles: [],
                options: null
            };
            if (!n.currentAnimateTimings) return n.errors.push(BI()), r;
            let o = 1,
                i = 0,
                s = [],
                a = !1,
                u = !1,
                l = 0,
                c = e.steps.map(T => {
                    let F = this._makeStyleAst(T, n),
                        $ = F.offset != null ? F.offset : Tb(F.styles),
                        L = 0;
                    return $ != null && (i++, L = F.offset = $), u = u || L < 0 || L > 1, a = a || L < l, l = L, s.push(L), F
                });
            u && n.errors.push($I()), a && n.errors.push(HI());
            let d = e.steps.length,
                h = 0;
            i > 0 && i < d ? n.errors.push(UI()) : i == 0 && (h = o / (d - 1));
            let f = d - 1,
                p = n.currentTime,
                g = n.currentAnimateTimings,
                M = g.duration;
            return c.forEach((T, F) => {
                let $ = h > 0 ? F == f ? 1 : h * F : s[F],
                    L = $ * M;
                n.currentTime = p + g.delay + L, g.duration = L, this._validateStyleAst(T, n), T.offset = $, r.styles.push(T)
            }), r
        }
        visitReference(e, n) {
            return {
                type: b.Reference,
                animation: ve(this, er(e.animation), n),
                options: Vt(e.options)
            }
        }
        visitAnimateChild(e, n) {
            return n.depCount++, {
                type: b.AnimateChild,
                options: Vt(e.options)
            }
        }
        visitAnimateRef(e, n) {
            return {
                type: b.AnimateRef,
                animation: this.visitReference(e.animation, n),
                options: Vt(e.options)
            }
        }
        visitQuery(e, n) {
            let r = n.currentQuerySelector,
                o = e.options || {};
            n.queryCount++, n.currentQuery = e;
            let [i, s] = Sb(e.selector);
            n.currentQuerySelector = r.length ? r + " " + i : i, De(n.collectedStyles, n.currentQuerySelector, new Map);
            let a = ve(this, er(e.animation), n);
            return n.currentQuery = null, n.currentQuerySelector = r, {
                type: b.Query,
                selector: i,
                limit: o.limit || 0,
                optional: !!o.optional,
                includeSelf: s,
                animation: a,
                originalSelector: e.selector,
                options: Vt(e.options)
            }
        }
        visitStagger(e, n) {
            n.currentQuery || n.errors.push(zI());
            let r = e.timings === "full" ? {
                duration: 0,
                delay: 0,
                easing: "full"
            } : oi(e.timings, n.errors, !0);
            return {
                type: b.Stagger,
                animation: ve(this, er(e.animation), n),
                timings: r,
                options: null
            }
        }
    };

function Sb(t) {
    let e = !!t.split(/\s*,\s*/).find(n => n == Np);
    return e && (t = t.replace(_b, "")), t = t.replace(/@\*/g, ri).replace(/@\w+/g, n => ri + "-" + n.slice(1)).replace(/:animating/g, Du), [t, e]
}

function Mb(t) {
    return t ? ie({}, t) : null
}
var Cu = class {
    constructor(e) {
        this.errors = e, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = new Map, this.options = null, this.unsupportedCSSPropertiesFound = new Set
    }
};

function Tb(t) {
    if (typeof t == "string") return null;
    let e = null;
    if (Array.isArray(t)) t.forEach(n => {
        if (n instanceof Map && n.has("offset")) {
            let r = n;
            e = parseFloat(r.get("offset")), r.delete("offset")
        }
    });
    else if (t instanceof Map && t.has("offset")) {
        let n = t;
        e = parseFloat(n.get("offset")), n.delete("offset")
    }
    return e
}

function Nb(t, e) {
    if (t.hasOwnProperty("duration")) return t;
    if (typeof t == "number") {
        let i = oi(t, e).duration;
        return fu(i, 0, "")
    }
    let n = t;
    if (n.split(/\s+/).some(i => i.charAt(0) == "{" && i.charAt(1) == "{")) {
        let i = fu(0, 0, "");
        return i.dynamic = !0, i.strValue = n, i
    }
    let o = oi(n, e);
    return fu(o.duration, o.delay, o.easing)
}

function Vt(t) {
    return t ? (t = ie({}, t), t.params && (t.params = Mb(t.params))) : t = {}, t
}

function fu(t, e, n) {
    return {
        duration: t,
        delay: e,
        easing: n
    }
}

function Uu(t, e, n, r, o, i, s = null, a = !1) {
    return {
        type: 1,
        element: t,
        keyframes: e,
        preStyleProps: n,
        postStyleProps: r,
        duration: o,
        delay: i,
        totalTime: o + i,
        easing: s,
        subTimeline: a
    }
}
var wn = class {
        constructor() {
            this._map = new Map
        }
        get(e) {
            return this._map.get(e) || []
        }
        append(e, n) {
            let r = this._map.get(e);
            r || this._map.set(e, r = []), r.push(...n)
        }
        has(e) {
            return this._map.has(e)
        }
        clear() {
            this._map.clear()
        }
    },
    xb = 1,
    Ab = ":enter",
    Ob = new RegExp(Ab, "g"),
    Fb = ":leave",
    Pb = new RegExp(Fb, "g");

function zu(t, e, n, r, o, i = new Map, s = new Map, a, u, l = []) {
    return new _u().buildKeyframes(t, e, n, r, o, i, s, a, u, l)
}
var _u = class {
        buildKeyframes(e, n, r, o, i, s, a, u, l, c = []) {
            l = l || new wn;
            let d = new Su(e, n, l, o, i, c, []);
            d.options = u;
            let h = u.delay ? Je(u.delay) : 0;
            d.currentTimeline.delayNextStep(h), d.currentTimeline.setStyles([s], null, d.errors, u), ve(this, r, d);
            let f = d.timelines.filter(p => p.containsAnimation());
            if (f.length && a.size) {
                let p;
                for (let g = f.length - 1; g >= 0; g--) {
                    let M = f[g];
                    if (M.element === n) {
                        p = M;
                        break
                    }
                }
                p && !p.allowOnlyTimelineStyles() && p.setStyles([a], null, d.errors, u)
            }
            return f.length ? f.map(p => p.buildKeyframes()) : [Uu(n, [], [], [], 0, h, "", !1)]
        }
        visitTrigger(e, n) {}
        visitState(e, n) {}
        visitTransition(e, n) {}
        visitAnimateChild(e, n) {
            let r = n.subInstructions.get(n.element);
            if (r) {
                let o = n.createSubContext(e.options),
                    i = n.currentTimeline.currentTime,
                    s = this._visitSubInstructions(r, o, o.options);
                i != s && n.transformIntoNewTimeline(s)
            }
            n.previousNode = e
        }
        visitAnimateRef(e, n) {
            let r = n.createSubContext(e.options);
            r.transformIntoNewTimeline(), this._applyAnimationRefDelays([e.options, e.animation.options], n, r), this.visitReference(e.animation, r), n.transformIntoNewTimeline(r.currentTimeline.currentTime), n.previousNode = e
        }
        _applyAnimationRefDelays(e, n, r) {
            for (let o of e) {
                let i = o ? .delay;
                if (i) {
                    let s = typeof i == "number" ? i : Je(nr(i, o ? .params ? ? {}, n.errors));
                    r.delayNextStep(s)
                }
            }
        }
        _visitSubInstructions(e, n, r) {
            let i = n.currentTimeline.currentTime,
                s = r.duration != null ? Je(r.duration) : null,
                a = r.delay != null ? Je(r.delay) : null;
            return s !== 0 && e.forEach(u => {
                let l = n.appendInstructionToTimeline(u, s, a);
                i = Math.max(i, l.duration + l.delay)
            }), i
        }
        visitReference(e, n) {
            n.updateOptions(e.options, !0), ve(this, e.animation, n), n.previousNode = e
        }
        visitSequence(e, n) {
            let r = n.subContextCount,
                o = n,
                i = e.options;
            if (i && (i.params || i.delay) && (o = n.createSubContext(i), o.transformIntoNewTimeline(), i.delay != null)) {
                o.previousNode.type == b.Style && (o.currentTimeline.snapshotCurrentStyles(), o.previousNode = si);
                let s = Je(i.delay);
                o.delayNextStep(s)
            }
            e.steps.length && (e.steps.forEach(s => ve(this, s, o)), o.currentTimeline.applyStylesToKeyframe(), o.subContextCount > r && o.transformIntoNewTimeline()), n.previousNode = e
        }
        visitGroup(e, n) {
            let r = [],
                o = n.currentTimeline.currentTime,
                i = e.options && e.options.delay ? Je(e.options.delay) : 0;
            e.steps.forEach(s => {
                let a = n.createSubContext(e.options);
                i && a.delayNextStep(i), ve(this, s, a), o = Math.max(o, a.currentTimeline.currentTime), r.push(a.currentTimeline)
            }), r.forEach(s => n.currentTimeline.mergeTimelineCollectedStyles(s)), n.transformIntoNewTimeline(o), n.previousNode = e
        }
        _visitTiming(e, n) {
            if (e.dynamic) {
                let r = e.strValue,
                    o = n.params ? nr(r, n.params, n.errors) : r;
                return oi(o, n.errors)
            } else return {
                duration: e.duration,
                delay: e.delay,
                easing: e.easing
            }
        }
        visitAnimate(e, n) {
            let r = n.currentAnimateTimings = this._visitTiming(e.timings, n),
                o = n.currentTimeline;
            r.delay && (n.incrementTime(r.delay), o.snapshotCurrentStyles());
            let i = e.style;
            i.type == b.Keyframes ? this.visitKeyframes(i, n) : (n.incrementTime(r.duration), this.visitStyle(i, n), o.applyStylesToKeyframe()), n.currentAnimateTimings = null, n.previousNode = e
        }
        visitStyle(e, n) {
            let r = n.currentTimeline,
                o = n.currentAnimateTimings;
            !o && r.hasCurrentStyleProperties() && r.forwardFrame();
            let i = o && o.easing || e.easing;
            e.isEmptyStep ? r.applyEmptyStep(i) : r.setStyles(e.styles, i, n.errors, n.options), n.previousNode = e
        }
        visitKeyframes(e, n) {
            let r = n.currentAnimateTimings,
                o = n.currentTimeline.duration,
                i = r.duration,
                a = n.createSubContext().currentTimeline;
            a.easing = r.easing, e.styles.forEach(u => {
                let l = u.offset || 0;
                a.forwardTime(l * i), a.setStyles(u.styles, u.easing, n.errors, n.options), a.applyStylesToKeyframe()
            }), n.currentTimeline.mergeTimelineCollectedStyles(a), n.transformIntoNewTimeline(o + i), n.previousNode = e
        }
        visitQuery(e, n) {
            let r = n.currentTimeline.currentTime,
                o = e.options || {},
                i = o.delay ? Je(o.delay) : 0;
            i && (n.previousNode.type === b.Style || r == 0 && n.currentTimeline.hasCurrentStyleProperties()) && (n.currentTimeline.snapshotCurrentStyles(), n.previousNode = si);
            let s = r,
                a = n.invokeQuery(e.selector, e.originalSelector, e.limit, e.includeSelf, !!o.optional, n.errors);
            n.currentQueryTotal = a.length;
            let u = null;
            a.forEach((l, c) => {
                n.currentQueryIndex = c;
                let d = n.createSubContext(e.options, l);
                i && d.delayNextStep(i), l === n.element && (u = d.currentTimeline), ve(this, e.animation, d), d.currentTimeline.applyStylesToKeyframe();
                let h = d.currentTimeline.currentTime;
                s = Math.max(s, h)
            }), n.currentQueryIndex = 0, n.currentQueryTotal = 0, n.transformIntoNewTimeline(s), u && (n.currentTimeline.mergeTimelineCollectedStyles(u), n.currentTimeline.snapshotCurrentStyles()), n.previousNode = e
        }
        visitStagger(e, n) {
            let r = n.parentContext,
                o = n.currentTimeline,
                i = e.timings,
                s = Math.abs(i.duration),
                a = s * (n.currentQueryTotal - 1),
                u = s * n.currentQueryIndex;
            switch (i.duration < 0 ? "reverse" : i.easing) {
                case "reverse":
                    u = a - u;
                    break;
                case "full":
                    u = r.currentStaggerTime;
                    break
            }
            let c = n.currentTimeline;
            u && c.delayNextStep(u);
            let d = c.currentTime;
            ve(this, e.animation, n), n.previousNode = e, r.currentStaggerTime = o.currentTime - d + (o.startTime - r.currentTimeline.startTime)
        }
    },
    si = {},
    Su = class t {
        constructor(e, n, r, o, i, s, a, u) {
            this._driver = e, this.element = n, this.subInstructions = r, this._enterClassName = o, this._leaveClassName = i, this.errors = s, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = si, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = u || new ai(this._driver, n, 0), a.push(this.currentTimeline)
        }
        get params() {
            return this.options.params
        }
        updateOptions(e, n) {
            if (!e) return;
            let r = e,
                o = this.options;
            r.duration != null && (o.duration = Je(r.duration)), r.delay != null && (o.delay = Je(r.delay));
            let i = r.params;
            if (i) {
                let s = o.params;
                s || (s = this.options.params = {}), Object.keys(i).forEach(a => {
                    (!n || !s.hasOwnProperty(a)) && (s[a] = nr(i[a], s, this.errors))
                })
            }
        }
        _copyOptions() {
            let e = {};
            if (this.options) {
                let n = this.options.params;
                if (n) {
                    let r = e.params = {};
                    Object.keys(n).forEach(o => {
                        r[o] = n[o]
                    })
                }
            }
            return e
        }
        createSubContext(e = null, n, r) {
            let o = n || this.element,
                i = new t(this._driver, o, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(o, r || 0));
            return i.previousNode = this.previousNode, i.currentAnimateTimings = this.currentAnimateTimings, i.options = this._copyOptions(), i.updateOptions(e), i.currentQueryIndex = this.currentQueryIndex, i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this, this.subContextCount++, i
        }
        transformIntoNewTimeline(e) {
            return this.previousNode = si, this.currentTimeline = this.currentTimeline.fork(this.element, e), this.timelines.push(this.currentTimeline), this.currentTimeline
        }
        appendInstructionToTimeline(e, n, r) {
            let o = {
                    duration: n ? ? e.duration,
                    delay: this.currentTimeline.currentTime + (r ? ? 0) + e.delay,
                    easing: ""
                },
                i = new Mu(this._driver, e.element, e.keyframes, e.preStyleProps, e.postStyleProps, o, e.stretchStartingKeyframe);
            return this.timelines.push(i), o
        }
        incrementTime(e) {
            this.currentTimeline.forwardTime(this.currentTimeline.duration + e)
        }
        delayNextStep(e) {
            e > 0 && this.currentTimeline.delayNextStep(e)
        }
        invokeQuery(e, n, r, o, i, s) {
            let a = [];
            if (o && a.push(this.element), e.length > 0) {
                e = e.replace(Ob, "." + this._enterClassName), e = e.replace(Pb, "." + this._leaveClassName);
                let u = r != 1,
                    l = this._driver.query(this.element, e, u);
                r !== 0 && (l = r < 0 ? l.slice(l.length + r, l.length) : l.slice(0, r)), a.push(...l)
            }
            return !i && a.length == 0 && s.push(GI(n)), a
        }
    },
    ai = class t {
        constructor(e, n, r, o) {
            this._driver = e, this.element = n, this.startTime = r, this._elementTimelineStylesLookup = o, this.duration = 0, this.easing = null, this._previousKeyframe = new Map, this._currentKeyframe = new Map, this._keyframes = new Map, this._styleSummary = new Map, this._localTimelineStyles = new Map, this._pendingStyles = new Map, this._backFill = new Map, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)), this._loadKeyframe()
        }
        containsAnimation() {
            switch (this._keyframes.size) {
                case 0:
                    return !1;
                case 1:
                    return this.hasCurrentStyleProperties();
                default:
                    return !0
            }
        }
        hasCurrentStyleProperties() {
            return this._currentKeyframe.size > 0
        }
        get currentTime() {
            return this.startTime + this.duration
        }
        delayNextStep(e) {
            let n = this._keyframes.size === 1 && this._pendingStyles.size;
            this.duration || n ? (this.forwardTime(this.currentTime + e), n && this.snapshotCurrentStyles()) : this.startTime += e
        }
        fork(e, n) {
            return this.applyStylesToKeyframe(), new t(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup)
        }
        _loadKeyframe() {
            this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = new Map, this._keyframes.set(this.duration, this._currentKeyframe))
        }
        forwardFrame() {
            this.duration += xb, this._loadKeyframe()
        }
        forwardTime(e) {
            this.applyStylesToKeyframe(), this.duration = e, this._loadKeyframe()
        }
        _updateStyle(e, n) {
            this._localTimelineStyles.set(e, n), this._globalTimelineStyles.set(e, n), this._styleSummary.set(e, {
                time: this.currentTime,
                value: n
            })
        }
        allowOnlyTimelineStyles() {
            return this._currentEmptyStepKeyframe !== this._currentKeyframe
        }
        applyEmptyStep(e) {
            e && this._previousKeyframe.set("easing", e);
            for (let [n, r] of this._globalTimelineStyles) this._backFill.set(n, r || Ue), this._currentKeyframe.set(n, Ue);
            this._currentEmptyStepKeyframe = this._currentKeyframe
        }
        setStyles(e, n, r, o) {
            n && this._previousKeyframe.set("easing", n);
            let i = o && o.params || {},
                s = Rb(e, this._globalTimelineStyles);
            for (let [a, u] of s) {
                let l = nr(u, i, r);
                this._pendingStyles.set(a, l), this._localTimelineStyles.has(a) || this._backFill.set(a, this._globalTimelineStyles.get(a) ? ? Ue), this._updateStyle(a, l)
            }
        }
        applyStylesToKeyframe() {
            this._pendingStyles.size != 0 && (this._pendingStyles.forEach((e, n) => {
                this._currentKeyframe.set(n, e)
            }), this._pendingStyles.clear(), this._localTimelineStyles.forEach((e, n) => {
                this._currentKeyframe.has(n) || this._currentKeyframe.set(n, e)
            }))
        }
        snapshotCurrentStyles() {
            for (let [e, n] of this._localTimelineStyles) this._pendingStyles.set(e, n), this._updateStyle(e, n)
        }
        getFinalKeyframe() {
            return this._keyframes.get(this.duration)
        }
        get properties() {
            let e = [];
            for (let n in this._currentKeyframe) e.push(n);
            return e
        }
        mergeTimelineCollectedStyles(e) {
            e._styleSummary.forEach((n, r) => {
                let o = this._styleSummary.get(r);
                (!o || n.time > o.time) && this._updateStyle(r, n.value)
            })
        }
        buildKeyframes() {
            this.applyStylesToKeyframe();
            let e = new Set,
                n = new Set,
                r = this._keyframes.size === 1 && this.duration === 0,
                o = [];
            this._keyframes.forEach((a, u) => {
                let l = new Map([...this._backFill, ...a]);
                l.forEach((c, d) => {
                    c === Ko ? e.add(d) : c === Ue && n.add(d)
                }), r || l.set("offset", u / this.duration), o.push(l)
            });
            let i = [...e.values()],
                s = [...n.values()];
            if (r) {
                let a = o[0],
                    u = new Map(a);
                a.set("offset", 0), u.set("offset", 1), o = [a, u]
            }
            return Uu(this.element, o, i, s, this.duration, this.startTime, this.easing, !1)
        }
    },
    Mu = class extends ai {
        constructor(e, n, r, o, i, s, a = !1) {
            super(e, n, s.delay), this.keyframes = r, this.preStyleProps = o, this.postStyleProps = i, this._stretchStartingKeyframe = a, this.timings = {
                duration: s.duration,
                delay: s.delay,
                easing: s.easing
            }
        }
        containsAnimation() {
            return this.keyframes.length > 1
        }
        buildKeyframes() {
            let e = this.keyframes,
                {
                    delay: n,
                    duration: r,
                    easing: o
                } = this.timings;
            if (this._stretchStartingKeyframe && n) {
                let i = [],
                    s = r + n,
                    a = n / s,
                    u = new Map(e[0]);
                u.set("offset", 0), i.push(u);
                let l = new Map(e[0]);
                l.set("offset", hp(a)), i.push(l);
                let c = e.length - 1;
                for (let d = 1; d <= c; d++) {
                    let h = new Map(e[d]),
                        f = h.get("offset"),
                        p = n + f * r;
                    h.set("offset", hp(p / s)), i.push(h)
                }
                r = s, n = 0, o = "", e = i
            }
            return Uu(this.element, e, this.preStyleProps, this.postStyleProps, r, n, o, !0)
        }
    };

function hp(t, e = 3) {
    let n = Math.pow(10, e - 1);
    return Math.round(t * n) / n
}

function Rb(t, e) {
    let n = new Map,
        r;
    return t.forEach(o => {
        if (o === "*") {
            r ? ? = e.keys();
            for (let i of r) n.set(i, Ue)
        } else
            for (let [i, s] of o) n.set(i, s)
    }), n
}

function pp(t, e, n, r, o, i, s, a, u, l, c, d, h) {
    return {
        type: 0,
        element: t,
        triggerName: e,
        isRemovalTransition: o,
        fromState: n,
        fromStyles: i,
        toState: r,
        toStyles: s,
        timelines: a,
        queriedElements: u,
        preStyleProps: l,
        postStyleProps: c,
        totalTime: d,
        errors: h
    }
}
var hu = {},
    ui = class {
        constructor(e, n, r) {
            this._triggerName = e, this.ast = n, this._stateStyles = r
        }
        match(e, n, r, o) {
            return kb(this.ast.matchers, e, n, r, o)
        }
        buildStyles(e, n, r) {
            let o = this._stateStyles.get("*");
            return e !== void 0 && (o = this._stateStyles.get(e ? .toString()) || o), o ? o.buildStyles(n, r) : new Map
        }
        build(e, n, r, o, i, s, a, u, l, c) {
            let d = [],
                h = this.ast.options && this.ast.options.params || hu,
                f = a && a.params || hu,
                p = this.buildStyles(r, f, d),
                g = u && u.params || hu,
                M = this.buildStyles(o, g, d),
                T = new Set,
                F = new Map,
                $ = new Map,
                L = o === "void",
                fe = {
                    params: xp(g, h),
                    delay: this.ast.options ? .delay
                },
                H = c ? [] : zu(e, n, this.ast.animation, i, s, p, M, fe, l, d),
                z = 0;
            return H.forEach(K => {
                z = Math.max(K.duration + K.delay, z)
            }), d.length ? pp(n, this._triggerName, r, o, L, p, M, [], [], F, $, z, d) : (H.forEach(K => {
                let Ge = K.element,
                    $t = De(F, Ge, new Set);
                K.preStyleProps.forEach(mt => $t.add(mt));
                let qu = De($, Ge, new Set);
                K.postStyleProps.forEach(mt => qu.add(mt)), Ge !== n && T.add(Ge)
            }), pp(n, this._triggerName, r, o, L, p, M, H, [...T.values()], F, $, z))
        }
    };

function kb(t, e, n, r, o) {
    return t.some(i => i(e, n, r, o))
}

function xp(t, e) {
    let n = ie({}, e);
    return Object.entries(t).forEach(([r, o]) => {
        o != null && (n[r] = o)
    }), n
}
var Tu = class {
    constructor(e, n, r) {
        this.styles = e, this.defaultParams = n, this.normalizer = r
    }
    buildStyles(e, n) {
        let r = new Map,
            o = xp(e, this.defaultParams);
        return this.styles.styles.forEach(i => {
            typeof i != "string" && i.forEach((s, a) => {
                s && (s = nr(s, o, n));
                let u = this.normalizer.normalizePropertyName(a, n);
                s = this.normalizer.normalizeStyleValue(a, u, s, n), r.set(a, s)
            })
        }), r
    }
};

function Lb(t, e, n) {
    return new Nu(t, e, n)
}
var Nu = class {
    constructor(e, n, r) {
        this.name = e, this.ast = n, this._normalizer = r, this.transitionFactories = [], this.states = new Map, n.states.forEach(o => {
            let i = o.options && o.options.params || {};
            this.states.set(o.name, new Tu(o.style, i, r))
        }), gp(this.states, "true", "1"), gp(this.states, "false", "0"), n.transitions.forEach(o => {
            this.transitionFactories.push(new ui(e, o, this.states))
        }), this.fallbackTransition = jb(e, this.states, this._normalizer)
    }
    get containsQueries() {
        return this.ast.queryCount > 0
    }
    matchTransition(e, n, r, o) {
        return this.transitionFactories.find(s => s.match(e, n, r, o)) || null
    }
    matchStyles(e, n, r) {
        return this.fallbackTransition.buildStyles(e, n, r)
    }
};

function jb(t, e, n) {
    let r = [(s, a) => !0],
        o = {
            type: b.Sequence,
            steps: [],
            options: null
        },
        i = {
            type: b.Transition,
            animation: o,
            matchers: r,
            options: null,
            queryCount: 0,
            depCount: 0
        };
    return new ui(t, i, e)
}

function gp(t, e, n) {
    t.has(e) ? t.has(n) || t.set(n, t.get(e)) : t.has(n) && t.set(e, t.get(n))
}
var Vb = new wn,
    xu = class {
        constructor(e, n, r) {
            this.bodyNode = e, this._driver = n, this._normalizer = r, this._animations = new Map, this._playersById = new Map, this.players = []
        }
        register(e, n) {
            let r = [],
                o = [],
                i = Hu(this._driver, n, r, o);
            if (r.length) throw JI(r);
            o.length && void 0, this._animations.set(e, i)
        }
        _buildPlayer(e, n, r) {
            let o = e.element,
                i = bp(this._normalizer, e.keyframes, n, r);
            return this._driver.animate(o, i, e.duration, e.delay, e.easing, [], !0)
        }
        create(e, n, r = {}) {
            let o = [],
                i = this._animations.get(e),
                s, a = new Map;
            if (i ? (s = zu(this._driver, n, i, Vu, ni, new Map, new Map, r, Vb, o), s.forEach(c => {
                    let d = De(a, c.element, new Map);
                    c.postStyleProps.forEach(h => d.set(h, null))
                })) : (o.push(XI()), s = []), o.length) throw eb(o);
            a.forEach((c, d) => {
                c.forEach((h, f) => {
                    c.set(f, this._driver.computeStyle(d, f, Ue))
                })
            });
            let u = s.map(c => {
                    let d = a.get(c.element);
                    return this._buildPlayer(c, new Map, d)
                }),
                l = gt(u);
            return this._playersById.set(e, l), l.onDestroy(() => this.destroy(e)), this.players.push(l), l
        }
        destroy(e) {
            let n = this._getPlayer(e);
            n.destroy(), this._playersById.delete(e);
            let r = this.players.indexOf(n);
            r >= 0 && this.players.splice(r, 1)
        }
        _getPlayer(e) {
            let n = this._playersById.get(e);
            if (!n) throw tb(e);
            return n
        }
        listen(e, n, r, o) {
            let i = Lu(n, "", "", "");
            return ku(this._getPlayer(e), r, i, o), () => {}
        }
        command(e, n, r, o) {
            if (r == "register") {
                this.register(e, o[0]);
                return
            }
            if (r == "create") {
                let s = o[0] || {};
                this.create(e, n, s);
                return
            }
            let i = this._getPlayer(e);
            switch (r) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "reset":
                    i.reset();
                    break;
                case "restart":
                    i.restart();
                    break;
                case "finish":
                    i.finish();
                    break;
                case "init":
                    i.init();
                    break;
                case "setPosition":
                    i.setPosition(parseFloat(o[0]));
                    break;
                case "destroy":
                    this.destroy(e);
                    break
            }
        }
    },
    mp = "ng-animate-queued",
    Bb = ".ng-animate-queued",
    pu = "ng-animate-disabled",
    $b = ".ng-animate-disabled",
    Hb = "ng-star-inserted",
    Ub = ".ng-star-inserted",
    zb = [],
    Ap = {
        namespaceId: "",
        setForRemoval: !1,
        setForMove: !1,
        hasAnimation: !1,
        removedBeforeQueried: !1
    },
    Gb = {
        namespaceId: "",
        setForMove: !1,
        setForRemoval: !1,
        hasAnimation: !1,
        removedBeforeQueried: !0
    },
    Fe = "__ng_removed",
    rr = class {
        get params() {
            return this.options.params
        }
        constructor(e, n = "") {
            this.namespaceId = n;
            let r = e && e.hasOwnProperty("value"),
                o = r ? e.value : e;
            if (this.value = Wb(o), r) {
                let i = e,
                    {
                        value: s
                    } = i,
                    a = Ku(i, ["value"]);
                this.options = a
            } else this.options = {};
            this.options.params || (this.options.params = {})
        }
        absorbOptions(e) {
            let n = e.params;
            if (n) {
                let r = this.options.params;
                Object.keys(n).forEach(o => {
                    r[o] == null && (r[o] = n[o])
                })
            }
        }
    },
    tr = "void",
    gu = new rr(tr),
    Au = class {
        constructor(e, n, r) {
            this.id = e, this.hostElement = n, this._engine = r, this.players = [], this._triggers = new Map, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + e, be(n, this._hostClassName)
        }
        listen(e, n, r, o) {
            if (!this._triggers.has(n)) throw nb(r, n);
            if (r == null || r.length == 0) throw rb(n);
            if (!Qb(r)) throw ob(r, n);
            let i = De(this._elementListeners, e, []),
                s = {
                    name: n,
                    phase: r,
                    callback: o
                };
            i.push(s);
            let a = De(this._engine.statesByElement, e, new Map);
            return a.has(n) || (be(e, Yo), be(e, Yo + "-" + n), a.set(n, gu)), () => {
                this._engine.afterFlush(() => {
                    let u = i.indexOf(s);
                    u >= 0 && i.splice(u, 1), this._triggers.has(n) || a.delete(n)
                })
            }
        }
        register(e, n) {
            return this._triggers.has(e) ? !1 : (this._triggers.set(e, n), !0)
        }
        _getTrigger(e) {
            let n = this._triggers.get(e);
            if (!n) throw ib(e);
            return n
        }
        trigger(e, n, r, o = !0) {
            let i = this._getTrigger(n),
                s = new or(this.id, n, e),
                a = this._engine.statesByElement.get(e);
            a || (be(e, Yo), be(e, Yo + "-" + n), this._engine.statesByElement.set(e, a = new Map));
            let u = a.get(n),
                l = new rr(r, this.id);
            if (!(r && r.hasOwnProperty("value")) && u && l.absorbOptions(u.options), a.set(n, l), u || (u = gu), !(l.value === tr) && u.value === l.value) {
                if (!Yb(u.params, l.params)) {
                    let g = [],
                        M = i.matchStyles(u.value, u.params, g),
                        T = i.matchStyles(l.value, l.params, g);
                    g.length ? this._engine.reportError(g) : this._engine.afterFlush(() => {
                        Bt(e, M), ze(e, T)
                    })
                }
                return
            }
            let h = De(this._engine.playersByElement, e, []);
            h.forEach(g => {
                g.namespaceId == this.id && g.triggerName == n && g.queued && g.destroy()
            });
            let f = i.matchTransition(u.value, l.value, e, l.params),
                p = !1;
            if (!f) {
                if (!o) return;
                f = i.fallbackTransition, p = !0
            }
            return this._engine.totalQueuedPlayers++, this._queue.push({
                element: e,
                triggerName: n,
                transition: f,
                fromState: u,
                toState: l,
                player: s,
                isFallbackTransition: p
            }), p || (be(e, mp), s.onStart(() => {
                Dn(e, mp)
            })), s.onDone(() => {
                let g = this.players.indexOf(s);
                g >= 0 && this.players.splice(g, 1);
                let M = this._engine.playersByElement.get(e);
                if (M) {
                    let T = M.indexOf(s);
                    T >= 0 && M.splice(T, 1)
                }
            }), this.players.push(s), h.push(s), s
        }
        deregister(e) {
            this._triggers.delete(e), this._engine.statesByElement.forEach(n => n.delete(e)), this._elementListeners.forEach((n, r) => {
                this._elementListeners.set(r, n.filter(o => o.name != e))
            })
        }
        clearElementCache(e) {
            this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
            let n = this._engine.playersByElement.get(e);
            n && (n.forEach(r => r.destroy()), this._engine.playersByElement.delete(e))
        }
        _signalRemovalForInnerTriggers(e, n) {
            let r = this._engine.driver.query(e, ri, !0);
            r.forEach(o => {
                if (o[Fe]) return;
                let i = this._engine.fetchNamespacesByElement(o);
                i.size ? i.forEach(s => s.triggerLeaveAnimation(o, n, !1, !0)) : this.clearElementCache(o)
            }), this._engine.afterFlushAnimationsDone(() => r.forEach(o => this.clearElementCache(o)))
        }
        triggerLeaveAnimation(e, n, r, o) {
            let i = this._engine.statesByElement.get(e),
                s = new Map;
            if (i) {
                let a = [];
                if (i.forEach((u, l) => {
                        if (s.set(l, u.value), this._triggers.has(l)) {
                            let c = this.trigger(e, l, tr, o);
                            c && a.push(c)
                        }
                    }), a.length) return this._engine.markElementAsRemoved(this.id, e, !0, n, s), r && gt(a).onDone(() => this._engine.processLeaveNode(e)), !0
            }
            return !1
        }
        prepareLeaveAnimationListeners(e) {
            let n = this._elementListeners.get(e),
                r = this._engine.statesByElement.get(e);
            if (n && r) {
                let o = new Set;
                n.forEach(i => {
                    let s = i.name;
                    if (o.has(s)) return;
                    o.add(s);
                    let u = this._triggers.get(s).fallbackTransition,
                        l = r.get(s) || gu,
                        c = new rr(tr),
                        d = new or(this.id, s, e);
                    this._engine.totalQueuedPlayers++, this._queue.push({
                        element: e,
                        triggerName: s,
                        transition: u,
                        fromState: l,
                        toState: c,
                        player: d,
                        isFallbackTransition: !0
                    })
                })
            }
        }
        removeNode(e, n) {
            let r = this._engine;
            if (e.childElementCount && this._signalRemovalForInnerTriggers(e, n), this.triggerLeaveAnimation(e, n, !0)) return;
            let o = !1;
            if (r.totalAnimations) {
                let i = r.players.length ? r.playersByQueriedElement.get(e) : [];
                if (i && i.length) o = !0;
                else {
                    let s = e;
                    for (; s = s.parentNode;)
                        if (r.statesByElement.get(s)) {
                            o = !0;
                            break
                        }
                }
            }
            if (this.prepareLeaveAnimationListeners(e), o) r.markElementAsRemoved(this.id, e, !1, n);
            else {
                let i = e[Fe];
                (!i || i === Ap) && (r.afterFlush(() => this.clearElementCache(e)), r.destroyInnerAnimations(e), r._onRemovalComplete(e, n))
            }
        }
        insertNode(e, n) {
            be(e, this._hostClassName)
        }
        drainQueuedTransitions(e) {
            let n = [];
            return this._queue.forEach(r => {
                let o = r.player;
                if (o.destroyed) return;
                let i = r.element,
                    s = this._elementListeners.get(i);
                s && s.forEach(a => {
                    if (a.name == r.triggerName) {
                        let u = Lu(i, r.triggerName, r.fromState.value, r.toState.value);
                        u._data = e, ku(r.player, a.phase, u, a.callback)
                    }
                }), o.markedForDestroy ? this._engine.afterFlush(() => {
                    o.destroy()
                }) : n.push(r)
            }), this._queue = [], n.sort((r, o) => {
                let i = r.transition.ast.depCount,
                    s = o.transition.ast.depCount;
                return i == 0 || s == 0 ? i - s : this._engine.driver.containsElement(r.element, o.element) ? 1 : -1
            })
        }
        destroy(e) {
            this.players.forEach(n => n.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, e)
        }
    },
    Ou = class {
        _onRemovalComplete(e, n) {
            this.onRemovalComplete(e, n)
        }
        constructor(e, n, r) {
            this.bodyNode = e, this.driver = n, this._normalizer = r, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (o, i) => {}
        }
        get queuedPlayers() {
            let e = [];
            return this._namespaceList.forEach(n => {
                n.players.forEach(r => {
                    r.queued && e.push(r)
                })
            }), e
        }
        createNamespace(e, n) {
            let r = new Au(e, n, this);
            return this.bodyNode && this.driver.containsElement(this.bodyNode, n) ? this._balanceNamespaceList(r, n) : (this.newHostElements.set(n, r), this.collectEnterElement(n)), this._namespaceLookup[e] = r
        }
        _balanceNamespaceList(e, n) {
            let r = this._namespaceList,
                o = this.namespacesByHostElement;
            if (r.length - 1 >= 0) {
                let s = !1,
                    a = this.driver.getParentElement(n);
                for (; a;) {
                    let u = o.get(a);
                    if (u) {
                        let l = r.indexOf(u);
                        r.splice(l + 1, 0, e), s = !0;
                        break
                    }
                    a = this.driver.getParentElement(a)
                }
                s || r.unshift(e)
            } else r.push(e);
            return o.set(n, e), e
        }
        register(e, n) {
            let r = this._namespaceLookup[e];
            return r || (r = this.createNamespace(e, n)), r
        }
        registerTrigger(e, n, r) {
            let o = this._namespaceLookup[e];
            o && o.register(n, r) && this.totalAnimations++
        }
        destroy(e, n) {
            e && (this.afterFlush(() => {}), this.afterFlushAnimationsDone(() => {
                let r = this._fetchNamespace(e);
                this.namespacesByHostElement.delete(r.hostElement);
                let o = this._namespaceList.indexOf(r);
                o >= 0 && this._namespaceList.splice(o, 1), r.destroy(n), delete this._namespaceLookup[e]
            }))
        }
        _fetchNamespace(e) {
            return this._namespaceLookup[e]
        }
        fetchNamespacesByElement(e) {
            let n = new Set,
                r = this.statesByElement.get(e);
            if (r) {
                for (let o of r.values())
                    if (o.namespaceId) {
                        let i = this._fetchNamespace(o.namespaceId);
                        i && n.add(i)
                    }
            }
            return n
        }
        trigger(e, n, r, o) {
            if (ei(n)) {
                let i = this._fetchNamespace(e);
                if (i) return i.trigger(n, r, o), !0
            }
            return !1
        }
        insertNode(e, n, r, o) {
            if (!ei(n)) return;
            let i = n[Fe];
            if (i && i.setForRemoval) {
                i.setForRemoval = !1, i.setForMove = !0;
                let s = this.collectedLeaveElements.indexOf(n);
                s >= 0 && this.collectedLeaveElements.splice(s, 1)
            }
            if (e) {
                let s = this._fetchNamespace(e);
                s && s.insertNode(n, r)
            }
            o && this.collectEnterElement(n)
        }
        collectEnterElement(e) {
            this.collectedEnterElements.push(e)
        }
        markElementAsDisabled(e, n) {
            n ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), be(e, pu)) : this.disabledNodes.has(e) && (this.disabledNodes.delete(e), Dn(e, pu))
        }
        removeNode(e, n, r) {
            if (ei(n)) {
                let o = e ? this._fetchNamespace(e) : null;
                o ? o.removeNode(n, r) : this.markElementAsRemoved(e, n, !1, r);
                let i = this.namespacesByHostElement.get(n);
                i && i.id !== e && i.removeNode(n, r)
            } else this._onRemovalComplete(n, r)
        }
        markElementAsRemoved(e, n, r, o, i) {
            this.collectedLeaveElements.push(n), n[Fe] = {
                namespaceId: e,
                setForRemoval: o,
                hasAnimation: r,
                removedBeforeQueried: !1,
                previousTriggersValues: i
            }
        }
        listen(e, n, r, o, i) {
            return ei(n) ? this._fetchNamespace(e).listen(n, r, o, i) : () => {}
        }
        _buildInstruction(e, n, r, o, i) {
            return e.transition.build(this.driver, e.element, e.fromState.value, e.toState.value, r, o, e.fromState.options, e.toState.options, n, i)
        }
        destroyInnerAnimations(e) {
            let n = this.driver.query(e, ri, !0);
            n.forEach(r => this.destroyActiveAnimationsForElement(r)), this.playersByQueriedElement.size != 0 && (n = this.driver.query(e, Du, !0), n.forEach(r => this.finishActiveQueriedAnimationOnElement(r)))
        }
        destroyActiveAnimationsForElement(e) {
            let n = this.playersByElement.get(e);
            n && n.forEach(r => {
                r.queued ? r.markedForDestroy = !0 : r.destroy()
            })
        }
        finishActiveQueriedAnimationOnElement(e) {
            let n = this.playersByQueriedElement.get(e);
            n && n.forEach(r => r.finish())
        }
        whenRenderingDone() {
            return new Promise(e => {
                if (this.players.length) return gt(this.players).onDone(() => e());
                e()
            })
        }
        processLeaveNode(e) {
            let n = e[Fe];
            if (n && n.setForRemoval) {
                if (e[Fe] = Ap, n.namespaceId) {
                    this.destroyInnerAnimations(e);
                    let r = this._fetchNamespace(n.namespaceId);
                    r && r.clearElementCache(e)
                }
                this._onRemovalComplete(e, n.setForRemoval)
            }
            e.classList ? .contains(pu) && this.markElementAsDisabled(e, !1), this.driver.query(e, $b, !0).forEach(r => {
                this.markElementAsDisabled(r, !1)
            })
        }
        flush(e = -1) {
            let n = [];
            if (this.newHostElements.size && (this.newHostElements.forEach((r, o) => this._balanceNamespaceList(r, o)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                for (let r = 0; r < this.collectedEnterElements.length; r++) {
                    let o = this.collectedEnterElements[r];
                    be(o, Hb)
                }
            if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                let r = [];
                try {
                    n = this._flushAnimations(r, e)
                } finally {
                    for (let o = 0; o < r.length; o++) r[o]()
                }
            } else
                for (let r = 0; r < this.collectedLeaveElements.length; r++) {
                    let o = this.collectedLeaveElements[r];
                    this.processLeaveNode(o)
                }
            if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(r => r()), this._flushFns = [], this._whenQuietFns.length) {
                let r = this._whenQuietFns;
                this._whenQuietFns = [], n.length ? gt(n).onDone(() => {
                    r.forEach(o => o())
                }) : r.forEach(o => o())
            }
        }
        reportError(e) {
            throw sb(e)
        }
        _flushAnimations(e, n) {
            let r = new wn,
                o = [],
                i = new Map,
                s = [],
                a = new Map,
                u = new Map,
                l = new Map,
                c = new Set;
            this.disabledNodes.forEach(y => {
                c.add(y);
                let v = this.driver.query(y, Bb, !0);
                for (let D = 0; D < v.length; D++) c.add(v[D])
            });
            let d = this.bodyNode,
                h = Array.from(this.statesByElement.keys()),
                f = Dp(h, this.collectedEnterElements),
                p = new Map,
                g = 0;
            f.forEach((y, v) => {
                let D = Vu + g++;
                p.set(v, D), y.forEach(O => be(O, D))
            });
            let M = [],
                T = new Set,
                F = new Set;
            for (let y = 0; y < this.collectedLeaveElements.length; y++) {
                let v = this.collectedLeaveElements[y],
                    D = v[Fe];
                D && D.setForRemoval && (M.push(v), T.add(v), D.hasAnimation ? this.driver.query(v, Ub, !0).forEach(O => T.add(O)) : F.add(v))
            }
            let $ = new Map,
                L = Dp(h, Array.from(T));
            L.forEach((y, v) => {
                let D = ni + g++;
                $.set(v, D), y.forEach(O => be(O, D))
            }), e.push(() => {
                f.forEach((y, v) => {
                    let D = p.get(v);
                    y.forEach(O => Dn(O, D))
                }), L.forEach((y, v) => {
                    let D = $.get(v);
                    y.forEach(O => Dn(O, D))
                }), M.forEach(y => {
                    this.processLeaveNode(y)
                })
            });
            let fe = [],
                H = [];
            for (let y = this._namespaceList.length - 1; y >= 0; y--) this._namespaceList[y].drainQueuedTransitions(n).forEach(D => {
                let O = D.player,
                    Y = D.element;
                if (fe.push(O), this.collectedEnterElements.length) {
                    let te = Y[Fe];
                    if (te && te.setForMove) {
                        if (te.previousTriggersValues && te.previousTriggersValues.has(D.triggerName)) {
                            let yt = te.previousTriggersValues.get(D.triggerName),
                                Ee = this.statesByElement.get(D.element);
                            if (Ee && Ee.has(D.triggerName)) {
                                let ir = Ee.get(D.triggerName);
                                ir.value = yt, Ee.set(D.triggerName, ir)
                            }
                        }
                        O.destroy();
                        return
                    }
                }
                let Pe = !d || !this.driver.containsElement(d, Y),
                    he = $.get(Y),
                    Xe = p.get(Y),
                    U = this._buildInstruction(D, r, Xe, he, Pe);
                if (U.errors && U.errors.length) {
                    H.push(U);
                    return
                }
                if (Pe) {
                    O.onStart(() => Bt(Y, U.fromStyles)), O.onDestroy(() => ze(Y, U.toStyles)), o.push(O);
                    return
                }
                if (D.isFallbackTransition) {
                    O.onStart(() => Bt(Y, U.fromStyles)), O.onDestroy(() => ze(Y, U.toStyles)), o.push(O);
                    return
                }
                let Zu = [];
                U.timelines.forEach(te => {
                    te.stretchStartingKeyframe = !0, this.disabledNodes.has(te.element) || Zu.push(te)
                }), U.timelines = Zu, r.append(Y, U.timelines);
                let Pp = {
                    instruction: U,
                    player: O,
                    element: Y
                };
                s.push(Pp), U.queriedElements.forEach(te => De(a, te, []).push(O)), U.preStyleProps.forEach((te, yt) => {
                    if (te.size) {
                        let Ee = u.get(yt);
                        Ee || u.set(yt, Ee = new Set), te.forEach((ir, hi) => Ee.add(hi))
                    }
                }), U.postStyleProps.forEach((te, yt) => {
                    let Ee = l.get(yt);
                    Ee || l.set(yt, Ee = new Set), te.forEach((ir, hi) => Ee.add(hi))
                })
            });
            if (H.length) {
                let y = [];
                H.forEach(v => {
                    y.push(ab(v.triggerName, v.errors))
                }), fe.forEach(v => v.destroy()), this.reportError(y)
            }
            let z = new Map,
                K = new Map;
            s.forEach(y => {
                let v = y.element;
                r.has(v) && (K.set(v, v), this._beforeAnimationBuild(y.player.namespaceId, y.instruction, z))
            }), o.forEach(y => {
                let v = y.element;
                this._getPreviousPlayers(v, !1, y.namespaceId, y.triggerName, null).forEach(O => {
                    De(z, v, []).push(O), O.destroy()
                })
            });
            let Ge = M.filter(y => Ep(y, u, l)),
                $t = new Map;
            vp($t, this.driver, F, l, Ue).forEach(y => {
                Ep(y, u, l) && Ge.push(y)
            });
            let mt = new Map;
            f.forEach((y, v) => {
                vp(mt, this.driver, new Set(y), u, Ko)
            }), Ge.forEach(y => {
                let v = $t.get(y),
                    D = mt.get(y);
                $t.set(y, new Map([...v ? .entries() ? ? [], ...D ? .entries() ? ? []]))
            });
            let fi = [],
                Wu = [],
                Qu = {};
            s.forEach(y => {
                let {
                    element: v,
                    player: D,
                    instruction: O
                } = y;
                if (r.has(v)) {
                    if (c.has(v)) {
                        D.onDestroy(() => ze(v, O.toStyles)), D.disabled = !0, D.overrideTotalTime(O.totalTime), o.push(D);
                        return
                    }
                    let Y = Qu;
                    if (K.size > 1) {
                        let he = v,
                            Xe = [];
                        for (; he = he.parentNode;) {
                            let U = K.get(he);
                            if (U) {
                                Y = U;
                                break
                            }
                            Xe.push(he)
                        }
                        Xe.forEach(U => K.set(U, Y))
                    }
                    let Pe = this._buildAnimation(D.namespaceId, O, z, i, mt, $t);
                    if (D.setRealPlayer(Pe), Y === Qu) fi.push(D);
                    else {
                        let he = this.playersByElement.get(Y);
                        he && he.length && (D.parentPlayer = gt(he)), o.push(D)
                    }
                } else Bt(v, O.fromStyles), D.onDestroy(() => ze(v, O.toStyles)), Wu.push(D), c.has(v) && o.push(D)
            }), Wu.forEach(y => {
                let v = i.get(y.element);
                if (v && v.length) {
                    let D = gt(v);
                    y.setRealPlayer(D)
                }
            }), o.forEach(y => {
                y.parentPlayer ? y.syncPlayerEvents(y.parentPlayer) : y.destroy()
            });
            for (let y = 0; y < M.length; y++) {
                let v = M[y],
                    D = v[Fe];
                if (Dn(v, ni), D && D.hasAnimation) continue;
                let O = [];
                if (a.size) {
                    let Pe = a.get(v);
                    Pe && Pe.length && O.push(...Pe);
                    let he = this.driver.query(v, Du, !0);
                    for (let Xe = 0; Xe < he.length; Xe++) {
                        let U = a.get(he[Xe]);
                        U && U.length && O.push(...U)
                    }
                }
                let Y = O.filter(Pe => !Pe.destroyed);
                Y.length ? Zb(this, v, Y) : this.processLeaveNode(v)
            }
            return M.length = 0, fi.forEach(y => {
                this.players.push(y), y.onDone(() => {
                    y.destroy();
                    let v = this.players.indexOf(y);
                    this.players.splice(v, 1)
                }), y.play()
            }), fi
        }
        afterFlush(e) {
            this._flushFns.push(e)
        }
        afterFlushAnimationsDone(e) {
            this._whenQuietFns.push(e)
        }
        _getPreviousPlayers(e, n, r, o, i) {
            let s = [];
            if (n) {
                let a = this.playersByQueriedElement.get(e);
                a && (s = a)
            } else {
                let a = this.playersByElement.get(e);
                if (a) {
                    let u = !i || i == tr;
                    a.forEach(l => {
                        l.queued || !u && l.triggerName != o || s.push(l)
                    })
                }
            }
            return (r || o) && (s = s.filter(a => !(r && r != a.namespaceId || o && o != a.triggerName))), s
        }
        _beforeAnimationBuild(e, n, r) {
            let o = n.triggerName,
                i = n.element,
                s = n.isRemovalTransition ? void 0 : e,
                a = n.isRemovalTransition ? void 0 : o;
            for (let u of n.timelines) {
                let l = u.element,
                    c = l !== i,
                    d = De(r, l, []);
                this._getPreviousPlayers(l, c, s, a, n.toState).forEach(f => {
                    let p = f.getRealPlayer();
                    p.beforeDestroy && p.beforeDestroy(), f.destroy(), d.push(f)
                })
            }
            Bt(i, n.fromStyles)
        }
        _buildAnimation(e, n, r, o, i, s) {
            let a = n.triggerName,
                u = n.element,
                l = [],
                c = new Set,
                d = new Set,
                h = n.timelines.map(p => {
                    let g = p.element;
                    c.add(g);
                    let M = g[Fe];
                    if (M && M.removedBeforeQueried) return new pt(p.duration, p.delay);
                    let T = g !== u,
                        F = Kb((r.get(g) || zb).map(z => z.getRealPlayer())).filter(z => {
                            let K = z;
                            return K.element ? K.element === g : !1
                        }),
                        $ = i.get(g),
                        L = s.get(g),
                        fe = bp(this._normalizer, p.keyframes, $, L),
                        H = this._buildPlayer(p, fe, F);
                    if (p.subTimeline && o && d.add(g), T) {
                        let z = new or(e, a, g);
                        z.setRealPlayer(H), l.push(z)
                    }
                    return H
                });
            l.forEach(p => {
                De(this.playersByQueriedElement, p.element, []).push(p), p.onDone(() => qb(this.playersByQueriedElement, p.element, p))
            }), c.forEach(p => be(p, lp));
            let f = gt(h);
            return f.onDestroy(() => {
                c.forEach(p => Dn(p, lp)), ze(u, n.toStyles)
            }), d.forEach(p => {
                De(o, p, []).push(f)
            }), f
        }
        _buildPlayer(e, n, r) {
            return n.length > 0 ? this.driver.animate(e.element, n, e.duration, e.delay, e.easing, r) : new pt(e.duration, e.delay)
        }
    },
    or = class {
        constructor(e, n, r) {
            this.namespaceId = e, this.triggerName = n, this.element = r, this._player = new pt, this._containsRealPlayer = !1, this._queuedCallbacks = new Map, this.destroyed = !1, this.parentPlayer = null, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
        }
        setRealPlayer(e) {
            this._containsRealPlayer || (this._player = e, this._queuedCallbacks.forEach((n, r) => {
                n.forEach(o => ku(e, r, void 0, o))
            }), this._queuedCallbacks.clear(), this._containsRealPlayer = !0, this.overrideTotalTime(e.totalTime), this.queued = !1)
        }
        getRealPlayer() {
            return this._player
        }
        overrideTotalTime(e) {
            this.totalTime = e
        }
        syncPlayerEvents(e) {
            let n = this._player;
            n.triggerCallback && e.onStart(() => n.triggerCallback("start")), e.onDone(() => this.finish()), e.onDestroy(() => this.destroy())
        }
        _queueEvent(e, n) {
            De(this._queuedCallbacks, e, []).push(n)
        }
        onDone(e) {
            this.queued && this._queueEvent("done", e), this._player.onDone(e)
        }
        onStart(e) {
            this.queued && this._queueEvent("start", e), this._player.onStart(e)
        }
        onDestroy(e) {
            this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e)
        }
        init() {
            this._player.init()
        }
        hasStarted() {
            return this.queued ? !1 : this._player.hasStarted()
        }
        play() {
            !this.queued && this._player.play()
        }
        pause() {
            !this.queued && this._player.pause()
        }
        restart() {
            !this.queued && this._player.restart()
        }
        finish() {
            this._player.finish()
        }
        destroy() {
            this.destroyed = !0, this._player.destroy()
        }
        reset() {
            !this.queued && this._player.reset()
        }
        setPosition(e) {
            this.queued || this._player.setPosition(e)
        }
        getPosition() {
            return this.queued ? 0 : this._player.getPosition()
        }
        triggerCallback(e) {
            let n = this._player;
            n.triggerCallback && n.triggerCallback(e)
        }
    };

function qb(t, e, n) {
    let r = t.get(e);
    if (r) {
        if (r.length) {
            let o = r.indexOf(n);
            r.splice(o, 1)
        }
        r.length == 0 && t.delete(e)
    }
    return r
}

function Wb(t) {
    return t ? ? null
}

function ei(t) {
    return t && t.nodeType === 1
}

function Qb(t) {
    return t == "start" || t == "done"
}

function yp(t, e) {
    let n = t.style.display;
    return t.style.display = e ? ? "none", n
}

function vp(t, e, n, r, o) {
    let i = [];
    n.forEach(u => i.push(yp(u)));
    let s = [];
    r.forEach((u, l) => {
        let c = new Map;
        u.forEach(d => {
            let h = e.computeStyle(l, d, o);
            c.set(d, h), (!h || h.length == 0) && (l[Fe] = Gb, s.push(l))
        }), t.set(l, c)
    });
    let a = 0;
    return n.forEach(u => yp(u, i[a++])), s
}

function Dp(t, e) {
    let n = new Map;
    if (t.forEach(a => n.set(a, [])), e.length == 0) return n;
    let r = 1,
        o = new Set(e),
        i = new Map;

    function s(a) {
        if (!a) return r;
        let u = i.get(a);
        if (u) return u;
        let l = a.parentNode;
        return n.has(l) ? u = l : o.has(l) ? u = r : u = s(l), i.set(a, u), u
    }
    return e.forEach(a => {
        let u = s(a);
        u !== r && n.get(u).push(a)
    }), n
}

function be(t, e) {
    t.classList ? .add(e)
}

function Dn(t, e) {
    t.classList ? .remove(e)
}

function Zb(t, e, n) {
    gt(n).onDone(() => t.processLeaveNode(e))
}

function Kb(t) {
    let e = [];
    return Op(t, e), e
}

function Op(t, e) {
    for (let n = 0; n < t.length; n++) {
        let r = t[n];
        r instanceof Xn ? Op(r.players, e) : e.push(r)
    }
}

function Yb(t, e) {
    let n = Object.keys(t),
        r = Object.keys(e);
    if (n.length != r.length) return !1;
    for (let o = 0; o < n.length; o++) {
        let i = n[o];
        if (!e.hasOwnProperty(i) || t[i] !== e[i]) return !1
    }
    return !0
}

function Ep(t, e, n) {
    let r = n.get(t);
    if (!r) return !1;
    let o = e.get(t);
    return o ? r.forEach(i => o.add(i)) : e.set(t, r), n.delete(t), !0
}
var li = class {
    constructor(e, n, r) {
        this._driver = n, this._normalizer = r, this._triggerCache = {}, this.onRemovalComplete = (o, i) => {}, this._transitionEngine = new Ou(e.body, n, r), this._timelineEngine = new xu(e.body, n, r), this._transitionEngine.onRemovalComplete = (o, i) => this.onRemovalComplete(o, i)
    }
    registerTrigger(e, n, r, o, i) {
        let s = e + "-" + o,
            a = this._triggerCache[s];
        if (!a) {
            let u = [],
                l = [],
                c = Hu(this._driver, i, u, l);
            if (u.length) throw KI(o, u);
            l.length && void 0, a = Lb(o, c, this._normalizer), this._triggerCache[s] = a
        }
        this._transitionEngine.registerTrigger(n, o, a)
    }
    register(e, n) {
        this._transitionEngine.register(e, n)
    }
    destroy(e, n) {
        this._transitionEngine.destroy(e, n)
    }
    onInsert(e, n, r, o) {
        this._transitionEngine.insertNode(e, n, r, o)
    }
    onRemove(e, n, r) {
        this._transitionEngine.removeNode(e, n, r)
    }
    disableAnimations(e, n) {
        this._transitionEngine.markElementAsDisabled(e, n)
    }
    process(e, n, r, o) {
        if (r.charAt(0) == "@") {
            let [i, s] = sp(r), a = o;
            this._timelineEngine.command(i, n, s, a)
        } else this._transitionEngine.trigger(e, n, r, o)
    }
    listen(e, n, r, o, i) {
        if (r.charAt(0) == "@") {
            let [s, a] = sp(r);
            return this._timelineEngine.listen(s, n, a, i)
        }
        return this._transitionEngine.listen(e, n, r, o, i)
    }
    flush(e = -1) {
        this._transitionEngine.flush(e)
    }
    get players() {
        return [...this._transitionEngine.players, ...this._timelineEngine.players]
    }
    whenRenderingDone() {
        return this._transitionEngine.whenRenderingDone()
    }
    afterFlushAnimationsDone(e) {
        this._transitionEngine.afterFlushAnimationsDone(e)
    }
};

function Jb(t, e) {
    let n = null,
        r = null;
    return Array.isArray(e) && e.length ? (n = mu(e[0]), e.length > 1 && (r = mu(e[e.length - 1]))) : e instanceof Map && (n = mu(e)), n || r ? new Fu(t, n, r) : null
}
var En = class En {
    constructor(e, n, r) {
        this._element = e, this._startStyles = n, this._endStyles = r, this._state = 0;
        let o = En.initialStylesByElement.get(e);
        o || En.initialStylesByElement.set(e, o = new Map), this._initialStyles = o
    }
    start() {
        this._state < 1 && (this._startStyles && ze(this._element, this._startStyles, this._initialStyles), this._state = 1)
    }
    finish() {
        this.start(), this._state < 2 && (ze(this._element, this._initialStyles), this._endStyles && (ze(this._element, this._endStyles), this._endStyles = null), this._state = 1)
    }
    destroy() {
        this.finish(), this._state < 3 && (En.initialStylesByElement.delete(this._element), this._startStyles && (Bt(this._element, this._startStyles), this._endStyles = null), this._endStyles && (Bt(this._element, this._endStyles), this._endStyles = null), ze(this._element, this._initialStyles), this._state = 3)
    }
};
En.initialStylesByElement = new WeakMap;
var Fu = En;

function mu(t) {
    let e = null;
    return t.forEach((n, r) => {
        Xb(r) && (e = e || new Map, e.set(r, n))
    }), e
}

function Xb(t) {
    return t === "display" || t === "position"
}
var ci = class {
        constructor(e, n, r, o) {
            this.element = e, this.keyframes = n, this.options = r, this._specialStyles = o, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this._originalOnDoneFns = [], this._originalOnStartFns = [], this.time = 0, this.parentPlayer = null, this.currentSnapshot = new Map, this._duration = r.duration, this._delay = r.delay || 0, this.time = this._duration + this._delay
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = [])
        }
        init() {
            this._buildPlayer(), this._preparePlayerBeforeStart()
        }
        _buildPlayer() {
            if (this._initialized) return;
            this._initialized = !0;
            let e = this.keyframes;
            this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : new Map;
            let n = () => this._onFinish();
            this.domPlayer.addEventListener("finish", n), this.onDestroy(() => {
                this.domPlayer.removeEventListener("finish", n)
            })
        }
        _preparePlayerBeforeStart() {
            this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
        }
        _convertKeyframesToObject(e) {
            let n = [];
            return e.forEach(r => {
                n.push(Object.fromEntries(r))
            }), n
        }
        _triggerWebAnimation(e, n, r) {
            return e.animate(this._convertKeyframesToObject(n), r)
        }
        onStart(e) {
            this._originalOnStartFns.push(e), this._onStartFns.push(e)
        }
        onDone(e) {
            this._originalOnDoneFns.push(e), this._onDoneFns.push(e)
        }
        onDestroy(e) {
            this._onDestroyFns.push(e)
        }
        play() {
            this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(e => e()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
        }
        pause() {
            this.init(), this.domPlayer.pause()
        }
        finish() {
            this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
        }
        reset() {
            this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
        }
        _resetDomPlayerState() {
            this.domPlayer && this.domPlayer.cancel()
        }
        restart() {
            this.reset(), this.play()
        }
        hasStarted() {
            return this._started
        }
        destroy() {
            this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = [])
        }
        setPosition(e) {
            this.domPlayer === void 0 && this.init(), this.domPlayer.currentTime = e * this.time
        }
        getPosition() {
            return +(this.domPlayer.currentTime ? ? 0) / this.time
        }
        get totalTime() {
            return this._delay + this._duration
        }
        beforeDestroy() {
            let e = new Map;
            this.hasStarted() && this._finalKeyframe.forEach((r, o) => {
                o !== "offset" && e.set(o, this._finished ? r : $u(this.element, o))
            }), this.currentSnapshot = e
        }
        triggerCallback(e) {
            let n = e === "start" ? this._onStartFns : this._onDoneFns;
            n.forEach(r => r()), n.length = 0
        }
    },
    Pu = class {
        validateStyleProperty(e) {
            return !0
        }
        validateAnimatableStyleProperty(e) {
            return !0
        }
        containsElement(e, n) {
            return Cp(e, n)
        }
        getParentElement(e) {
            return ju(e)
        }
        query(e, n, r) {
            return _p(e, n, r)
        }
        computeStyle(e, n, r) {
            return $u(e, n)
        }
        animate(e, n, r, o, i, s = []) {
            let a = o == 0 ? "both" : "forwards",
                u = {
                    duration: r,
                    delay: o,
                    fill: a
                };
            i && (u.easing = i);
            let l = new Map,
                c = s.filter(f => f instanceof ci);
            Db(r, o) && c.forEach(f => {
                f.currentSnapshot.forEach((p, g) => l.set(g, p))
            });
            let d = mb(n).map(f => new Map(f));
            d = Eb(e, d, l);
            let h = Jb(e, d);
            return new ci(e, d, u, h)
        }
    };

function Qx(t, e) {
    return t === "noop" ? new li(e, new Sp, new vu) : new li(e, new Pu, new Iu)
}
var wp = class {
        constructor(e, n) {
            this._driver = e;
            let r = [],
                o = [],
                i = Hu(e, n, r, o);
            if (r.length) throw QI(r);
            o.length && void 0, this._animationAst = i
        }
        buildTimelines(e, n, r, o, i) {
            let s = Array.isArray(n) ? cp(n) : n,
                a = Array.isArray(r) ? cp(r) : r,
                u = [];
            i = i || new wn;
            let l = zu(this._driver, e, this._animationAst, Vu, ni, s, a, o, i, u);
            if (u.length) throw ZI(u);
            return l
        }
    },
    ti = "@",
    Fp = "@.disabled",
    di = class {
        constructor(e, n, r, o) {
            this.namespaceId = e, this.delegate = n, this.engine = r, this._onDestroy = o, this.\u0275type = 0
        }
        get data() {
            return this.delegate.data
        }
        destroyNode(e) {
            this.delegate.destroyNode ? .(e)
        }
        destroy() {
            this.engine.destroy(this.namespaceId, this.delegate), this.engine.afterFlushAnimationsDone(() => {
                queueMicrotask(() => {
                    this.delegate.destroy()
                })
            }), this._onDestroy ? .()
        }
        createElement(e, n) {
            return this.delegate.createElement(e, n)
        }
        createComment(e) {
            return this.delegate.createComment(e)
        }
        createText(e) {
            return this.delegate.createText(e)
        }
        appendChild(e, n) {
            this.delegate.appendChild(e, n), this.engine.onInsert(this.namespaceId, n, e, !1)
        }
        insertBefore(e, n, r, o = !0) {
            this.delegate.insertBefore(e, n, r), this.engine.onInsert(this.namespaceId, n, e, o)
        }
        removeChild(e, n, r) {
            this.parentNode(n) && this.engine.onRemove(this.namespaceId, n, this.delegate)
        }
        selectRootElement(e, n) {
            return this.delegate.selectRootElement(e, n)
        }
        parentNode(e) {
            return this.delegate.parentNode(e)
        }
        nextSibling(e) {
            return this.delegate.nextSibling(e)
        }
        setAttribute(e, n, r, o) {
            this.delegate.setAttribute(e, n, r, o)
        }
        removeAttribute(e, n, r) {
            this.delegate.removeAttribute(e, n, r)
        }
        addClass(e, n) {
            this.delegate.addClass(e, n)
        }
        removeClass(e, n) {
            this.delegate.removeClass(e, n)
        }
        setStyle(e, n, r, o) {
            this.delegate.setStyle(e, n, r, o)
        }
        removeStyle(e, n, r) {
            this.delegate.removeStyle(e, n, r)
        }
        setProperty(e, n, r) {
            n.charAt(0) == ti && n == Fp ? this.disableAnimations(e, !!r) : this.delegate.setProperty(e, n, r)
        }
        setValue(e, n) {
            this.delegate.setValue(e, n)
        }
        listen(e, n, r) {
            return this.delegate.listen(e, n, r)
        }
        disableAnimations(e, n) {
            this.engine.disableAnimations(e, n)
        }
    },
    Ru = class extends di {
        constructor(e, n, r, o, i) {
            super(n, r, o, i), this.factory = e, this.namespaceId = n
        }
        setProperty(e, n, r) {
            n.charAt(0) == ti ? n.charAt(1) == "." && n == Fp ? (r = r === void 0 ? !0 : !!r, this.disableAnimations(e, r)) : this.engine.process(this.namespaceId, e, n.slice(1), r) : this.delegate.setProperty(e, n, r)
        }
        listen(e, n, r) {
            if (n.charAt(0) == ti) {
                let o = eC(e),
                    i = n.slice(1),
                    s = "";
                return i.charAt(0) != ti && ([i, s] = tC(i)), this.engine.listen(this.namespaceId, o, i, s, a => {
                    let u = a._data || -1;
                    this.factory.scheduleListenerCallback(u, r, a)
                })
            }
            return this.delegate.listen(e, n, r)
        }
    };

function eC(t) {
    switch (t) {
        case "body":
            return document.body;
        case "document":
            return document;
        case "window":
            return window;
        default:
            return t
    }
}

function tC(t) {
    let e = t.indexOf("."),
        n = t.substring(0, e),
        r = t.slice(e + 1);
    return [n, r]
}
var Ip = class {
    constructor(e, n, r) {
        this.delegate = e, this.engine = n, this._zone = r, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, n.onRemovalComplete = (o, i) => {
            i ? .removeChild(null, o)
        }
    }
    createRenderer(e, n) {
        let r = "",
            o = this.delegate.createRenderer(e, n);
        if (!e || !n ? .data ? .animation) {
            let l = this._rendererCache,
                c = l.get(o);
            if (!c) {
                let d = () => l.delete(o);
                c = new di(r, o, this.engine, d), l.set(o, c)
            }
            return c
        }
        let i = n.id,
            s = n.id + "-" + this._currentId;
        this._currentId++, this.engine.register(s, e);
        let a = l => {
            Array.isArray(l) ? l.forEach(a) : this.engine.registerTrigger(i, s, e, l.name, l)
        };
        return n.data.animation.forEach(a), new Ru(this, s, o, this.engine)
    }
    begin() {
        this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
    }
    _scheduleCountTask() {
        queueMicrotask(() => {
            this._microtaskId++
        })
    }
    scheduleListenerCallback(e, n, r) {
        if (e >= 0 && e < this._microtaskId) {
            this._zone.run(() => n(r));
            return
        }
        let o = this._animationCallbacksBuffer;
        o.length == 0 && queueMicrotask(() => {
            this._zone.run(() => {
                o.forEach(i => {
                    let [s, a] = i;
                    s(a)
                }), this._animationCallbacksBuffer = []
            })
        }), o.push([n, r])
    }
    end() {
        this._cdRecurDepth--, this._cdRecurDepth == 0 && this._zone.runOutsideAngular(() => {
            this._scheduleCountTask(), this.engine.flush(this._microtaskId)
        }), this.delegate.end && this.delegate.end()
    }
    whenRenderingDone() {
        return this.engine.whenRenderingDone()
    }
};
export {
    J as a, _i as b, j as c, Ni as d, xi as e, et as f, Sn as g, Mn as h, nt as i, Xp as j, eg as k, tg as l, qe as m, ng as n, Le as o, cg as p, wt as q, Oi as r, Fr as s, dg as t, Tn as u, Ll as v, hg as w, pg as x, Nn as y, Pi as z, gg as A, yg as B, Ri as C, ki as D, vg as E, Dg as F, Eg as G, wg as H, Ig as I, bg as J, m as K, Pc as L, R as M, kc as N, KT as O, k as P, x as Q, Z as R, E as S, Uc as T, zc as U, St as V, YT as W, Jc as X, fn as Y, dm as Z, pm as _, ad as $, at as aa, JT as ba, fa as ca, XT as da, eN as ea, tN as fa, nN as ga, fy as ha, ut as ia, Ro as ja, Se as ka, ge as la, on as ma, rN as na, ht as oa, oN as pa, Fy as qa, Ry as ra, ko as sa, nf as ta, iN as ua, ba as va, kt as wa, Ma as xa, sN as ya, aN as za, uN as Aa, lN as Ba, cN as Ca, pf as Da, pv as Ea, Vo as Fa, dN as Ga, mv as Ha, fN as Ia, hN as Ja, Bn as Ka, pN as La, de as Ma, gN as Na, Ot as Oa, sn as Pa, un as Qa, Wo as Ra, Lt as Sa, vn as Ta, vN as Ua, CE as Va, xE as Wa, Us as Xa, AE as Ya, kE as Za, VE as _a, UE as $a, nw as ab, rw as bb, DN as cb, EN as db, Oh as eb, Fh as fb, mw as gb, Rh as hb, kh as ib, Ew as jb, wN as kb, Sw as lb, IN as mb, bN as nb, CN as ob, xw as pb, Vh as qb, _N as rb, SN as sb, MN as tb, TN as ub, NN as vb, xN as wb, Pw as xb, $h as yb, Rw as zb, AN as Ab, kw as Bb, ON as Cb, FN as Db, PN as Eb, RN as Fb, kN as Gb, LN as Hb, jN as Ib, VN as Jb, BN as Kb, $N as Lb, qa as Mb, zw as Nb, Gh as Ob, Yn as Pb, qh as Qb, HN as Rb, Qh as Sb, UN as Tb, zN as Ub, GN as Vb, hI as Wb, pI as Xb, qN as Yb, WN as Zb, Ja as _b, Dx as $b, Zh as ac, Jn as bc, Ex as cc, Zo as dc, mI as ec, wx as fc, yI as gc, Ix as hc, bx as ic, Cx as jc, _x as kc, Sx as lc, Mx as mc, Tx as nc, wI as oc, bI as pc, Nx as qc, xx as rc, tp as sc, Lx as tc, jx as uc, cu as vc, Vx as wc, Bx as xc, $x as yc, _I as zc, ju as Ac, db as Bc, qx as Cc, Cp as Dc, _p as Ec, Sp as Fc, up as Gc, yu as Hc, vu as Ic, mb as Jc, Wx as Kc, Db as Lc, Iu as Mc, li as Nc, ci as Oc, Pu as Pc, Qx as Qc, wp as Rc, di as Sc, Ru as Tc, Ip as Uc
};