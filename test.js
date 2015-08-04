!function(e, t) {
    function n(e) {
        var t = e.length, n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function a(e) {
        var t = Ct[e] = {};
        return ct.each(e.match(lt) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function i(e, n, a, i) {
        if (ct.acceptData(e)) {
            var r, o, s = ct.expando, c = "string" == typeof n, u = e.nodeType, l = u ? ct.cache : e, d = u ? e[s] : e[s] && s;
            if (d && l[d] && (i || l[d].data) || !c || a !== t)
                return d || (u ? e[s] = d = Z.pop() || ct.guid++ : d = s), l[d] || (l[d] = {}, u || (l[d].toJSON = ct.noop)), ("object" == typeof n || "function" == typeof n) && (i ? l[d] = ct.extend(l[d], n) : l[d].data = ct.extend(l[d].data, n)), r = l[d], i || (r.data || (r.data = {}), r = r.data), a !== t && (r[ct.camelCase(n)] = a), c ? (o = r[n], null == o && (o = r[ct.camelCase(n)])) : o = r, o
        }
    }
    function r(e, t, n) {
        if (ct.acceptData(e)) {
            var a, i, r, o = e.nodeType, c = o ? ct.cache : e, u = o ? e[ct.expando] : ct.expando;
            if (c[u]) {
                if (t && (r = n ? c[u] : c[u].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in r ? t = [t] : (t = ct.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (a = 0, i = t.length; i > a; a++)
                        delete r[t[a]];
                    if (!(n ? s : ct.isEmptyObject)(r))
                        return
                }
                (n || (delete c[u].data, s(c[u]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || c != c.window ? delete c[u] : c[u] = null)
            }
        }
    }
    function o(e, n, a) {
        if (a === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(jt, "-$1").toLowerCase();
            if (a = e.getAttribute(i), "string" == typeof a) {
                try {
                    a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : wt.test(a) ? ct.parseJSON(a) : a
                } catch (r) {
                }
                ct.data(e, n, a)
            } else
                a = t
        }
        return a
    }
    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c() {
        return !0
    }
    function u() {
        return !1
    }
    function l(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function d(e, t, n) {
        if (t = t || 0, ct.isFunction(t))
            return ct.grep(e, function(e, a) {
                var i = !!t.call(e, a, e);
                return i === n
            });
        if (t.nodeType)
            return ct.grep(e, function(e) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var a = ct.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t))
                return ct.filter(t, a, !n);
            t = ct.filter(t, a)
        }
        return ct.grep(e, function(e) {
            return ct.inArray(e, t) >= 0 === n
        })
    }
    function f(e) {
        var t = Vt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function p(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }
    function m(e) {
        var t = rn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function v(e, t) {
        for (var n, a = 0; null != (n = e[a]); a++)
            ct._data(n, "globalEval", !t || ct._data(t[a], "globalEval"))
    }
    function g(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, a, i, r = ct._data(e), o = ct._data(t, r), s = r.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)
                    for (a = 0, i = s[n].length; i > a; a++)
                        ct.event.add(t, n, s[n][a])
            }
            o.data && (o.data = ct.extend({}, o.data))
        }
    }
    function b(e, t) {
        var n, a, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                i = ct._data(t);
                for (a in i.events)
                    ct.removeEvent(t, a, i.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function y(e, n) {
        var a, i, r = 0, o = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!o)
            for (o = [], a = e.childNodes || e; null != (i = a[r]); r++)
                !n || ct.nodeName(i, n) ? o.push(i) : ct.merge(o, y(i, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], o) : o
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function _(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), a = t, i = jn.length; i--; )
            if (t = jn[i] + n, t in e)
                return t;
        return a
    }
    function k(e, t) {
        return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }
    function C(e, t) {
        for (var n, a, i, r = [], o = 0, s = e.length; s > o; o++)
            a = e[o], a.style && (r[o] = ct._data(a, "olddisplay"), n = a.style.display, t ? (r[o] || "none" !== n || (a.style.display = ""), "" === a.style.display && k(a) && (r[o] = ct._data(a, "olddisplay", S(a.nodeName)))) : r[o] || (i = k(a), (n && "none" !== n || !i) && ct._data(a, "olddisplay", i ? n : ct.css(a, "display"))));
        for (o = 0; s > o; o++)
            a = e[o], a.style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? r[o] || "" : "none"));
        return e
    }
    function w(e, t, n) {
        var a = bn.exec(t);
        return a ? Math.max(0, a[1] - (n || 0)) + (a[2] || "px") : t
    }
    function j(e, t, n, a, i) {
        for (var r = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2)
            "margin" === n && (o += ct.css(e, n + wn[r], !0, i)), a ? ("content" === n && (o -= ct.css(e, "padding" + wn[r], !0, i)), "margin" !== n && (o -= ct.css(e, "border" + wn[r] + "Width", !0, i))) : (o += ct.css(e, "padding" + wn[r], !0, i), "padding" !== n && (o += ct.css(e, "border" + wn[r] + "Width", !0, i)));
        return o
    }
    function T(e, t, n) {
        var a = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, r = dn(e), o = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if (i = fn(e, t, r), (0 > i || null == i) && (i = e.style[t]), yn.test(i))
                return i;
            a = o && (ct.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (o ? "border" : "content"), a, r) + "px"
    }
    function S(e) {
        var t = J, n = _n[e];
        return n || (n = q(e, t), "none" !== n && n || (ln = (ln || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ln[0].contentWindow || ln[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = q(e, t), ln.detach()), _n[e] = n), n
    }
    function q(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body), a = ct.css(n[0], "display");
        return n.remove(), a
    }
    function N(e, t, n, a) {
        var i;
        if (ct.isArray(t))
            ct.each(t, function(t, i) {
                n || Sn.test(e) ? a(e, i) : N(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, a)
            });
        else if (n || "object" !== ct.type(t))
            a(e, t);
        else
            for (i in t)
                N(e + "[" + i + "]", t[i], n, a)
    }
    function A(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var a, i = 0, r = t.toLowerCase().match(lt) || [];
            if (ct.isFunction(n))
                for (; a = r[i++]; )
                    "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
        }
    }
    function M(e, n, a, i) {
        function r(c) {
            var u;
            return o[c] = !0, ct.each(e[c] || [], function(e, c) {
                var l = c(n, a, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : t : (n.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {}, s = e === zn;
        return r(n.dataTypes[0]) || !o["*"] && r("*")
    }
    function E(e, n) {
        var a, i, r = ct.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((r[i] ? e : a || (a = {}))[i] = n[i]);
        return a && ct.extend(!0, e, a), e
    }
    function D(e, n, a) {
        var i, r, o, s, c = e.contents, u = e.dataTypes, l = e.responseFields;
        for (s in l)
            s in a && (n[l[s]] = a[s]);
        for (; "*" === u[0]; )
            u.shift(), r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
        if (r)
            for (s in c)
                if (c[s] && c[s].test(r)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in a)
            o = u[0];
        else {
            for (s in a) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== u[0] && u.unshift(o), a[o]) : t
    }
    function O(e, t) {
        var n, a, i, r, o = {}, s = 0, c = e.dataTypes.slice(), u = c[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), c[1])
            for (i in e.converters)
                o[i.toLowerCase()] = e.converters[i];
        for (; a = c[++s]; )
            if ("*" !== a) {
                if ("*" !== u && u !== a) {
                    if (i = o[u + " " + a] || o["* " + a], !i)
                        for (n in o)
                            if (r = n.split(" "), r[1] === a && (i = o[u + " " + r[0]] || o["* " + r[0]])) {
                                i === !0 ? i = o[n] : o[n] !== !0 && (a = r[0], c.splice(s--, 0, a));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"])
                            t = i(t);
                        else
                            try {
                                t = i(t)
                            } catch (l) {
                                return {state: "parsererror",error: i ? l : "No conversion from " + u + " to " + a}
                            }
                }
                u = a
            }
        return {state: "success",data: t}
    }
    function L() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }
    function P() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }
    function H() {
        return setTimeout(function() {
            Zn = t
        }), Zn = ct.now()
    }
    function B(e, t) {
        ct.each(t, function(t, n) {
            for (var a = (ra[t] || []).concat(ra["*"]), i = 0, r = a.length; r > i; i++)
                if (a[i].call(e, t, n))
                    return
        })
    }
    function I(e, t, n) {
        var a, i, r = 0, o = ia.length, s = ct.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (i)
                return !1;
            for (var t = Zn || H(), n = Math.max(0, u.startTime + u.duration - t), a = n / u.duration || 0, r = 1 - a, o = 0, c = u.tweens.length; c > o; o++)
                u.tweens[o].run(r);
            return s.notifyWith(e, [u, r, n]), 1 > r && c ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({elem: e,props: ct.extend({}, t),opts: ct.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Zn || H(),duration: n.duration,tweens: [],createTween: function(t, n) {
                var a = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(a), a
            },stop: function(t) {
                var n = 0, a = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; a > n; n++)
                    u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
            }}), l = u.props;
        for (F(l, u.opts.specialEasing); o > r; r++)
            if (a = ia[r].call(u, e, l, u.opts))
                return a;
        return B(u, l), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(c, {elem: e,anim: u,queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function F(e, t) {
        var n, a, i, r, o;
        for (i in e)
            if (a = ct.camelCase(i), r = t[a], n = e[i], ct.isArray(n) && (r = n[1], n = e[i] = n[0]), i !== a && (e[a] = n, delete e[i]), o = ct.cssHooks[a], o && "expand" in o) {
                n = o.expand(n), delete e[a];
                for (i in n)
                    i in e || (e[i] = n[i], t[i] = r)
            } else
                t[a] = r
    }
    function R(e, t, n) {
        var a, i, r, o, s, c, u, l, d, f = this, p = e.style, h = {}, m = [], v = e.nodeType && k(e);
        n.queue || (l = ct._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, d = l.empty.fire, l.empty.fire = function() {
            l.unqueued || d()
        }), l.unqueued++, f.always(function() {
            f.always(function() {
                l.unqueued--, ct.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ct.support.shrinkWrapBlocks || f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], ta.exec(o)) {
                if (delete t[i], c = c || "toggle" === o, o === (v ? "hide" : "show"))
                    continue;
                m.push(i)
            }
        if (r = m.length) {
            s = ct._data(e, "fxshow") || ct._data(e, "fxshow", {}), "hidden" in s && (v = s.hidden), c && (s.hidden = !v), v ? ct(e).show() : f.done(function() {
                ct(e).hide()
            }), f.done(function() {
                var t;
                ct._removeData(e, "fxshow");
                for (t in h)
                    ct.style(e, t, h[t])
            });
            for (i = 0; r > i; i++)
                a = m[i], u = f.createTween(a, v ? s[a] : 0), h[a] = s[a] || ct.style(e, a), a in s || (s[a] = u.start, v && (u.end = u.start, u.start = "width" === a || "height" === a ? 1 : 0))
        }
    }
    function $(e, t, n, a, i) {
        return new $.prototype.init(e, t, n, a, i)
    }
    function W(e, t) {
        var n, a = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = wn[i], a["margin" + n] = a["padding" + n] = e;
        return t && (a.opacity = a.width = e), a
    }
    function z(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X, V, Y = typeof t, J = e.document, U = e.location, G = e.jQuery, K = e.$, Q = {}, Z = [], et = "1.9.1", tt = Z.concat, nt = Z.push, at = Z.slice, it = Z.indexOf, rt = Q.toString, ot = Q.hasOwnProperty, st = et.trim, ct = function(e, t) {
        return new ct.fn.init(e, t, V)
    }, ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, lt = /\S+/g, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^[\],:{}\s]*$/, mt = /(?:^|:|,)(?:\s*\[)+/g, vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, gt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bt = /^-ms-/, yt = /-([\da-z])/gi, xt = function(e, t) {
        return t.toUpperCase()
    }, _t = function(e) {
        (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (kt(), ct.ready())
    }, kt = function() {
        J.addEventListener ? (J.removeEventListener("DOMContentLoaded", _t, !1), e.removeEventListener("load", _t, !1)) : (J.detachEvent("onreadystatechange", _t), e.detachEvent("onload", _t))
    };
    ct.fn = ct.prototype = {jquery: et,constructor: ct,init: function(e, n, a) {
            var i, r;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !i || !i[1] && n)
                    return !n || n.jquery ? (n || a).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), pt.test(i[1]) && ct.isPlainObject(n))
                        for (i in n)
                            ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (r = J.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2])
                        return a.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? a.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
        },selector: "",length: 0,size: function() {
            return this.length
        },toArray: function() {
            return at.call(this)
        },get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },pushStack: function(e) {
            var t = ct.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },each: function(e, t) {
            return ct.each(this, e, t)
        },ready: function(e) {
            return ct.ready.promise().done(e), this
        },slice: function() {
            return this.pushStack(at.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },map: function(e) {
            return this.pushStack(ct.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: nt,sort: [].sort,splice: [].splice}, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
        var e, n, a, i, r, o, s = arguments[0] || {}, c = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, c = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), u === c && (s = this, --c); u > c; c++)
            if (null != (r = arguments[c]))
                for (i in r)
                    e = s[i], a = r[i], s !== a && (l && a && (ct.isPlainObject(a) || (n = ct.isArray(a))) ? (n ? (n = !1, o = e && ct.isArray(e) ? e : []) : o = e && ct.isPlainObject(e) ? e : {}, s[i] = ct.extend(l, o, a)) : a !== t && (s[i] = a));
        return s
    }, ct.extend({noConflict: function(t) {
            return e.$ === ct && (e.$ = K), t && e.jQuery === ct && (e.jQuery = G), ct
        },isReady: !1,readyWait: 1,holdReady: function(e) {
            e ? ct.readyWait++ : ct.ready(!0)
        },ready: function(e) {
            if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                if (!J.body)
                    return setTimeout(ct.ready);
                ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (X.resolveWith(J, [ct]), ct.fn.trigger && ct(J).trigger("ready").off("ready"))
            }
        },isFunction: function(e) {
            return "function" === ct.type(e)
        },isArray: Array.isArray || function(e) {
            return "array" === ct.type(e)
        },isWindow: function(e) {
            return null != e && e == e.window
        },isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[rt.call(e)] || "object" : typeof e
        },isPlainObject: function(e) {
            if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var a;
            for (a in e)
                ;
            return a === t || ot.call(e, a)
        },isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },error: function(e) {
            throw Error(e)
        },parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || J;
            var a = pt.exec(e), i = !n && [];
            return a ? [t.createElement(a[1])] : (a = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], a.childNodes))
        },parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && ht.test(n.replace(vt, "@").replace(gt, "]").replace(mt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
        },parseXML: function(n) {
            var a, i;
            if (!n || "string" != typeof n)
                return null;
            try {
                e.DOMParser ? (i = new DOMParser, a = i.parseFromString(n, "text/xml")) : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(n))
            } catch (r) {
                a = t
            }
            return a && a.documentElement && !a.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), a
        },noop: function() {
        },globalEval: function(t) {
            t && ct.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },camelCase: function(e) {
            return e.replace(bt, "ms-").replace(yt, xt)
        },nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function(e, t, a) {
            var i, r = 0, o = e.length, s = n(e);
            if (a) {
                if (s)
                    for (; o > r && (i = t.apply(e[r], a), i !== !1); r++)
                        ;
                else
                    for (r in e)
                        if (i = t.apply(e[r], a), i === !1)
                            break
            } else if (s)
                for (; o > r && (i = t.call(e[r], r, e[r]), i !== !1); r++)
                    ;
            else
                for (r in e)
                    if (i = t.call(e[r], r, e[r]), i === !1)
                        break;
            return e
        },trim: st && !st.call(" ") ? function(e) {
            return null == e ? "" : st.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(dt, "")
        },makeArray: function(e, t) {
            var a = t || [];
            return null != e && (n(Object(e)) ? ct.merge(a, "string" == typeof e ? [e] : e) : nt.call(a, e)), a
        },inArray: function(e, t, n) {
            var a;
            if (t) {
                if (it)
                    return it.call(t, e, n);
                for (a = t.length, n = n ? 0 > n ? Math.max(0, a + n) : n : 0; a > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },merge: function(e, n) {
            var a = n.length, i = e.length, r = 0;
            if ("number" == typeof a)
                for (; a > r; r++)
                    e[i++] = n[r];
            else
                for (; n[r] !== t; )
                    e[i++] = n[r++];
            return e.length = i, e
        },grep: function(e, t, n) {
            var a, i = [], r = 0, o = e.length;
            for (n = !!n; o > r; r++)
                a = !!t(e[r], r), n !== a && i.push(e[r]);
            return i
        },map: function(e, t, a) {
            var i, r = 0, o = e.length, s = n(e), c = [];
            if (s)
                for (; o > r; r++)
                    i = t(e[r], r, a), null != i && (c[c.length] = i);
            else
                for (r in e)
                    i = t(e[r], r, a), null != i && (c[c.length] = i);
            return tt.apply([], c)
        },guid: 1,proxy: function(e, n) {
            var a, i, r;
            return "string" == typeof n && (r = e[n], n = e, e = r), ct.isFunction(e) ? (a = at.call(arguments, 2), i = function() {
                return e.apply(n || this, a.concat(at.call(arguments)))
            }, i.guid = e.guid = e.guid || ct.guid++, i) : t
        },access: function(e, n, a, i, r, o, s) {
            var c = 0, u = e.length, l = null == a;
            if ("object" === ct.type(a)) {
                r = !0;
                for (c in a)
                    ct.access(e, n, c, a[c], !0, o, s)
            } else if (i !== t && (r = !0, ct.isFunction(i) || (s = !0), l && (s ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                return l.call(ct(e), n)
            })), n))
                for (; u > c; c++)
                    n(e[c], a, s ? i : i.call(e[c], c, n(e[c], a)));
            return r ? e : l ? n.call(e) : u ? n(e[0], a) : o
        },now: function() {
            return (new Date).getTime()
        }}), ct.ready.promise = function(t) {
        if (!X)
            if (X = ct.Deferred(), "complete" === J.readyState)
                setTimeout(ct.ready);
            else if (J.addEventListener)
                J.addEventListener("DOMContentLoaded", _t, !1), e.addEventListener("load", _t, !1);
            else {
                J.attachEvent("onreadystatechange", _t), e.attachEvent("onload", _t);
                var n = !1;
                try {
                    n = null == e.frameElement && J.documentElement
                } catch (a) {
                }
                n && n.doScroll && function i() {
                    if (!ct.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        kt(), ct.ready()
                    }
                }()
            }
        return X.promise(t)
    }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }), V = ct(J);
    var Ct = {};
    ct.Callbacks = function(e) {
        e = "string" == typeof e ? Ct[e] || a(e) : ct.extend({}, e);
        var n, i, r, o, s, c, u = [], l = !e.once && [], d = function(t) {
            for (i = e.memory && t, r = !0, s = c || 0, c = 0, o = u.length, n = !0; u && o > s; s++)
                if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    i = !1;
                    break
                }
            n = !1, u && (l ? l.length && d(l.shift()) : i ? u = [] : f.disable())
        }, f = {add: function() {
                if (u) {
                    var t = u.length;
                    !function a(t) {
                        ct.each(t, function(t, n) {
                            var i = ct.type(n);
                            "function" === i ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && a(n)
                        })
                    }(arguments), n ? o = u.length : i && (c = t, d(i))
                }
                return this
            },remove: function() {
                return u && ct.each(arguments, function(e, t) {
                    for (var a; (a = ct.inArray(t, u, a)) > -1; )
                        u.splice(a, 1), n && (o >= a && o--, s >= a && s--)
                }), this
            },has: function(e) {
                return e ? ct.inArray(e, u) > -1 : !!u && !!u.length
            },empty: function() {
                return u = [], this
            },disable: function() {
                return u = l = i = t, this
            },disabled: function() {
                return !u
            },lock: function() {
                return l = t, i || f.disable(), this
            },locked: function() {
                return !l
            },fireWith: function(e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !u || r && !l || (n ? l.push(t) : d(t)), this
            },fire: function() {
                return f.fireWith(this, arguments), this
            },fired: function() {
                return !!r
            }};
        return f
    }, ct.extend({Deferred: function(e) {
            var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]], n = "pending", a = {state: function() {
                    return n
                },always: function() {
                    return i.done(arguments).fail(arguments), this
                },then: function() {
                    var e = arguments;
                    return ct.Deferred(function(n) {
                        ct.each(t, function(t, r) {
                            var o = r[0], s = ct.isFunction(e[t]) && e[t];
                            i[r[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === a ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                },promise: function(e) {
                    return null != e ? ct.extend(e, a) : a
                }}, i = {};
            return a.pipe = a.then, ct.each(t, function(e, r) {
                var o = r[2], s = r[3];
                a[r[1]] = o.add, s && o.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function() {
                    return i[r[0] + "With"](this === i ? a : this, arguments), this
                }, i[r[0] + "With"] = o.fireWith
            }), a.promise(i), e && e.call(i, i), i
        },when: function(e) {
            var t, n, a, i = 0, r = at.call(arguments), o = r.length, s = 1 !== o || e && ct.isFunction(e.promise) ? o : 0, c = 1 === s ? e : ct.Deferred(), u = function(e, n, a) {
                return function(i) {
                    n[e] = this, a[e] = arguments.length > 1 ? at.call(arguments) : i, a === t ? c.notifyWith(n, a) : --s || c.resolveWith(n, a)
                }
            };
            if (o > 1)
                for (t = Array(o), n = Array(o), a = Array(o); o > i; i++)
                    r[i] && ct.isFunction(r[i].promise) ? r[i].promise().done(u(i, a, r)).fail(c.reject).progress(u(i, n, t)) : --s;
            return s || c.resolveWith(a, r), c.promise()
        }}), ct.support = function() {
        var t, n, a, i, r, o, s, c, u, l, d = J.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), a = d.getElementsByTagName("a")[0], !n || !a || !n.length)
            return {};
        r = J.createElement("select"), s = r.appendChild(J.createElement("option")), i = d.getElementsByTagName("input")[0], a.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: "t" !== d.className,leadingWhitespace: 3 === d.firstChild.nodeType,tbody: !d.getElementsByTagName("tbody").length,htmlSerialize: !!d.getElementsByTagName("link").length,style: /top/.test(a.getAttribute("style")),hrefNormalized: "/a" === a.getAttribute("href"),opacity: /^0.5/.test(a.style.opacity),cssFloat: !!a.style.cssFloat,checkOn: !!i.value,optSelected: s.selected,enctype: !!J.createElement("form").enctype,html5Clone: "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML,boxModel: "CSS1Compat" === J.compatMode,deleteExpando: !0,noCloneEvent: !0,inlineBlockNeedsLayout: !1,shrinkWrapBlocks: !1,reliableMarginRight: !0,boxSizingReliable: !0,pixelPosition: !1}, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = J.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), o = J.createDocumentFragment(), o.appendChild(i), t.appendChecked = i.checked, t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (l in {submit: !0,change: !0,focusin: !0})
            d.setAttribute(c = "on" + l, "t"), t[l + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, ct(function() {
            var n, a, i, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", o = J.getElementsByTagName("body")[0];
            o && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, a = d.appendChild(J.createElement("div")), a.style.cssText = d.style.cssText = r, a.style.marginRight = a.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight)), typeof d.style.zoom !== Y && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = d = i = a = null)
        }), n = r = o = s = a = i = null, t
    }();
    var wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, jt = /([A-Z])/g;
    ct.extend({cache: {},expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),noData: {embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet: !0},hasData: function(e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !s(e)
        },data: function(e, t, n) {
            return i(e, t, n)
        },removeData: function(e, t) {
            return r(e, t)
        },_data: function(e, t, n) {
            return i(e, t, n, !0)
        },_removeData: function(e, t) {
            return r(e, t, !0)
        },acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }}), ct.fn.extend({data: function(e, n) {
            var a, i, r = this[0], s = 0, c = null;
            if (e === t) {
                if (this.length && (c = ct.data(r), 1 === r.nodeType && !ct._data(r, "parsedAttrs"))) {
                    for (a = r.attributes; a.length > s; s++)
                        i = a[s].name, i.indexOf("data-") || (i = ct.camelCase(i.slice(5)), o(r, i, c[i]));
                    ct._data(r, "parsedAttrs", !0)
                }
                return c
            }
            return "object" == typeof e ? this.each(function() {
                ct.data(this, e)
            }) : ct.access(this, function(n) {
                return n === t ? r ? o(r, e, ct.data(r, e)) : null : (this.each(function() {
                    ct.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },removeData: function(e) {
            return this.each(function() {
                ct.removeData(this, e)
            })
        }}), ct.extend({queue: function(e, n, a) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ct._data(e, n), a && (!i || ct.isArray(a) ? i = ct._data(e, n, ct.makeArray(a)) : i.push(a)), i || []) : t
        },dequeue: function(e, t) {
            t = t || "fx";
            var n = ct.queue(e, t), a = n.length, i = n.shift(), r = ct._queueHooks(e, t), o = function() {
                ct.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), a--), r.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, o, r)), !a && r && r.empty.fire()
        },_queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {empty: ct.Callbacks("once memory").add(function() {
                    ct._removeData(e, t + "queue"), ct._removeData(e, n)
                })})
        }}), ct.fn.extend({queue: function(e, n) {
            var a = 2;
            return "string" != typeof e && (n = e, e = "fx", a--), a > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        },dequeue: function(e) {
            return this.each(function() {
                ct.dequeue(this, e)
            })
        },delay: function(e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var a = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(a)
                }
            })
        },clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },promise: function(e, n) {
            var a, i = 1, r = ct.Deferred(), o = this, s = this.length, c = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; )
                a = ct._data(o[s], e + "queueHooks"), a && a.empty && (i++, a.empty.add(c));
            return c(), r.promise(n)
        }});
    var Tt, St, qt = /[\t\r\n]/g, Nt = /\r/g, At = /^(?:input|select|textarea|button|object)$/i, Mt = /^(?:a|area)$/i, Et = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Dt = /^(?:checked|selected)$/i, Ot = ct.support.getSetAttribute, Lt = ct.support.input;
    ct.fn.extend({attr: function(e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        },removeAttr: function(e) {
            return this.each(function() {
                ct.removeAttr(this, e)
            })
        },prop: function(e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        },removeProp: function(e) {
            return e = ct.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        },addClass: function(e) {
            var t, n, a, i, r, o = 0, s = this.length, c = "string" == typeof e && e;
            if (ct.isFunction(e))
                return this.each(function(t) {
                    ct(this).addClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(lt) || []; s > o; o++)
                    if (n = this[o], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(qt, " ") : " ")) {
                        for (r = 0; i = t[r++]; )
                            0 > a.indexOf(" " + i + " ") && (a += i + " ");
                        n.className = ct.trim(a)
                    }
            return this
        },removeClass: function(e) {
            var t, n, a, i, r, o = 0, s = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e))
                return this.each(function(t) {
                    ct(this).removeClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(lt) || []; s > o; o++)
                    if (n = this[o], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(qt, " ") : "")) {
                        for (r = 0; i = t[r++]; )
                            for (; a.indexOf(" " + i + " ") >= 0; )
                                a = a.replace(" " + i + " ", " ");
                        n.className = e ? ct.trim(a) : ""
                    }
            return this
        },toggleClass: function(e, t) {
            var n = typeof e, a = "boolean" == typeof t;
            return this.each(ct.isFunction(e) ? function(n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var i, r = 0, o = ct(this), s = t, c = e.match(lt) || []; i = c[r++]; )
                        s = a ? s : !o.hasClass(i), o[s ? "addClass" : "removeClass"](i);
                else
                    (n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, a = this.length; a > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(qt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },val: function(e) {
            var n, a, i, r = this[0];
            return arguments.length ? (i = ct.isFunction(e), this.each(function(n) {
                var r, o = ct(this);
                1 === this.nodeType && (r = i ? e.call(this, n, o.val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ct.isArray(r) && (r = ct.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), a = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], a && "set" in a && a.set(this, r, "value") !== t || (this.value = r))
            })) : r ? (a = ct.valHooks[r.type] || ct.valHooks[r.nodeName.toLowerCase()], a && "get" in a && (n = a.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)) : void 0
        }}), ct.extend({valHooks: {option: {get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }},select: {get: function(e) {
                    for (var t, n, a = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, o = r ? null : [], s = r ? i + 1 : a.length, c = 0 > i ? s : r ? i : 0; s > c; c++)
                        if (n = a[c], !(!n.selected && c !== i || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ct(n).val(), r)
                                return t;
                            o.push(t)
                        }
                    return o
                },set: function(e, t) {
                    var n = ct.makeArray(t);
                    return ct(e).find("option").each(function() {
                        this.selected = ct.inArray(ct(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }}},attr: function(e, n, a) {
            var i, r, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === Y ? ct.prop(e, n, a) : (r = 1 !== s || !ct.isXMLDoc(e), r && (n = n.toLowerCase(), i = ct.attrHooks[n] || (Et.test(n) ? St : Tt)), a === t ? i && r && "get" in i && null !== (o = i.get(e, n)) ? o : (typeof e.getAttribute !== Y && (o = e.getAttribute(n)), null == o ? t : o) : null !== a ? i && r && "set" in i && (o = i.set(e, a, n)) !== t ? o : (e.setAttribute(n, a + ""), a) : (ct.removeAttr(e, n), t)) : void 0
        },removeAttr: function(e, t) {
            var n, a, i = 0, r = t && t.match(lt);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    a = ct.propFix[n] || n, Et.test(n) ? !Ot && Dt.test(n) ? e[ct.camelCase("default-" + n)] = e[a] = !1 : e[a] = !1 : ct.attr(e, n, ""), e.removeAttribute(Ot ? n : a)
        },attrHooks: {type: {set: function(e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }}},propFix: {tabindex: "tabIndex",readonly: "readOnly","for": "htmlFor","class": "className",maxlength: "maxLength",cellspacing: "cellSpacing",cellpadding: "cellPadding",rowspan: "rowSpan",colspan: "colSpan",usemap: "useMap",frameborder: "frameBorder",contenteditable: "contentEditable"},prop: function(e, n, a) {
            var i, r, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !ct.isXMLDoc(e), o && (n = ct.propFix[n] || n, r = ct.propHooks[n]), a !== t ? r && "set" in r && (i = r.set(e, a, n)) !== t ? i : e[n] = a : r && "get" in r && null !== (i = r.get(e, n)) ? i : e[n]) : void 0
        },propHooks: {tabIndex: {get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : t
                }}}}), St = {get: function(e, n) {
            var a = ct.prop(e, n), i = "boolean" == typeof a && e.getAttribute(n), r = "boolean" == typeof a ? Lt && Ot ? null != i : Dt.test(n) ? e[ct.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return r && r.value !== !1 ? n.toLowerCase() : t
        },set: function(e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : Lt && Ot || !Dt.test(n) ? e.setAttribute(!Ot && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }}, Lt && Ot || (ct.attrHooks.value = {get: function(e, n) {
            var a = e.getAttributeNode(n);
            return ct.nodeName(e, "input") ? e.defaultValue : a && a.specified ? a.value : t
        },set: function(e, n, a) {
            return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : Tt && Tt.set(e, n, a)
        }}), Ot || (Tt = ct.valHooks.button = {get: function(e, n) {
            var a = e.getAttributeNode(n);
            return a && ("id" === n || "name" === n || "coords" === n ? "" !== a.value : a.specified) ? a.value : t
        },set: function(e, n, a) {
            var i = e.getAttributeNode(a);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(a)), i.value = n += "", "value" === a || n === e.getAttribute(a) ? n : t
        }}, ct.attrHooks.contenteditable = {get: Tt.get,set: function(e, t, n) {
            Tt.set(e, "" === t ? !1 : t, n)
        }}, ct.each(["width", "height"], function(e, n) {
        ct.attrHooks[n] = ct.extend(ct.attrHooks[n], {set: function(e, a) {
                return "" === a ? (e.setAttribute(n, "auto"), a) : t
            }})
    })), ct.support.hrefNormalized || (ct.each(["href", "src", "width", "height"], function(e, n) {
        ct.attrHooks[n] = ct.extend(ct.attrHooks[n], {get: function(e) {
                var a = e.getAttribute(n, 2);
                return null == a ? t : a
            }})
    }), ct.each(["href", "src"], function(e, t) {
        ct.propHooks[t] = {get: function(e) {
                return e.getAttribute(t, 4)
            }}
    })), ct.support.style || (ct.attrHooks.style = {get: function(e) {
            return e.style.cssText || t
        },set: function(e, t) {
            return e.style.cssText = t + ""
        }}), ct.support.optSelected || (ct.propHooks.selected = ct.extend(ct.propHooks.selected, {get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }})), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.support.checkOn || ct.each(["radio", "checkbox"], function() {
        ct.valHooks[this] = {get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }}
    }), ct.each(["radio", "checkbox"], function() {
        ct.valHooks[this] = ct.extend(ct.valHooks[this], {set: function(e, n) {
                return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
            }})
    });
    var Pt = /^(?:input|select|textarea)$/i, Ht = /^key/, Bt = /^(?:mouse|contextmenu)|click/, It = /^(?:focusinfocus|focusoutblur)$/, Ft = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {global: {},add: function(e, n, a, i, r) {
            var o, s, c, u, l, d, f, p, h, m, v, g = ct._data(e);
            if (g) {
                for (a.handler && (u = a, a = u.handler, r = u.selector), a.guid || (a.guid = ct.guid++), (s = g.events) || (s = g.events = {}), (d = g.handle) || (d = g.handle = function(e) {
                    return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), n = (n || "").match(lt) || [""], c = n.length; c--; )
                    o = Ft.exec(n[c]) || [], h = v = o[1], m = (o[2] || "").split(".").sort(), l = ct.event.special[h] || {}, h = (r ? l.delegateType : l.bindType) || h, l = ct.event.special[h] || {}, f = ct.extend({type: h,origType: v,data: i,handler: a,guid: a.guid,selector: r,needsContext: r && ct.expr.match.needsContext.test(r),namespace: m.join(".")}, u), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, l.setup && l.setup.call(e, i, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = a.guid)), r ? p.splice(p.delegateCount++, 0, f) : p.push(f), ct.event.global[h] = !0;
                e = null
            }
        },remove: function(e, t, n, a, i) {
            var r, o, s, c, u, l, d, f, p, h, m, v = ct.hasData(e) && ct._data(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(lt) || [""], u = t.length; u--; )
                    if (s = Ft.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ct.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = f.length; r--; )
                            o = f[r], !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || a && a !== o.selector && ("**" !== a || !o.selector) || (f.splice(r, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(e, o));
                        c && !f.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || ct.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l)
                            ct.event.remove(e, p + t[u], n, a, !0);
                ct.isEmptyObject(l) && (delete v.handle, ct._removeData(e, "events"))
            }
        },trigger: function(n, a, i, r) {
            var o, s, c, u, l, d, f, p = [i || J], h = ot.call(n, "type") ? n.type : n, m = ot.call(n, "namespace") ? n.namespace.split(".") : [];
            if (c = d = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !It.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), a = null == a ? [n] : ct.makeArray(a, [n]), l = ct.event.special[h] || {}, r || !l.trigger || l.trigger.apply(i, a) !== !1)) {
                if (!r && !l.noBubble && !ct.isWindow(i)) {
                    for (u = l.delegateType || h, It.test(u + h) || (c = c.parentNode); c; c = c.parentNode)
                        p.push(c), d = c;
                    d === (i.ownerDocument || J) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0; (c = p[f++]) && !n.isPropagationStopped(); )
                    n.type = f > 1 ? u : l.bindType || h, o = (ct._data(c, "events") || {})[n.type] && ct._data(c, "handle"), o && o.apply(c, a), o = s && c[s], o && ct.acceptData(c) && o.apply && o.apply(c, a) === !1 && n.preventDefault();
                if (n.type = h, !(r || n.isDefaultPrevented() || l._default && l._default.apply(i.ownerDocument, a) !== !1 || "click" === h && ct.nodeName(i, "a") || !ct.acceptData(i) || !s || !i[h] || ct.isWindow(i))) {
                    d = i[s], d && (i[s] = null), ct.event.triggered = h;
                    try {
                        i[h]()
                    } catch (v) {
                    }
                    ct.event.triggered = t, d && (i[s] = d)
                }
                return n.result
            }
        },dispatch: function(e) {
            e = ct.event.fix(e);
            var n, a, i, r, o, s = [], c = at.call(arguments), u = (ct._data(this, "events") || {})[e.type] || [], l = ct.event.special[e.type] || {};
            if (c[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = ct.event.handlers.call(this, e, u), n = 0; (r = s[n++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, a = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, c), a !== t && (e.result = a) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },handlers: function(e, n) {
            var a, i, r, o, s = [], c = n.delegateCount, u = e.target;
            if (c && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], o = 0; c > o; o++)
                            i = n[o], a = i.selector + " ", r[a] === t && (r[a] = i.needsContext ? ct(a, this).index(u) >= 0 : ct.find(a, this, null, [u]).length), r[a] && r.push(i);
                        r.length && s.push({elem: u,handlers: r})
                    }
            return n.length > c && s.push({elem: this,handlers: n.slice(c)}), s
        },fix: function(e) {
            if (e[ct.expando])
                return e;
            var t, n, a, i = e.type, r = e, o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Bt.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), a = o.props ? this.props.concat(o.props) : this.props, e = new ct.Event(r), t = a.length; t--; )
                n = a[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || J), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, r) : e
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
                var a, i, r, o = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || J, r = i.documentElement, a = i.body, e.pageX = n.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }},special: {load: {noBubble: !0},click: {trigger: function() {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }},focus: {trigger: function() {
                    if (this !== J.activeElement && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === J.activeElement && this.blur ? (this.blur(), !1) : t
                },delegateType: "focusout"},beforeunload: {postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }}},simulate: function(e, t, n, a) {
            var i = ct.extend(new ct.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
            a ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }}, ct.removeEvent = J.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var a = "on" + t;
        e.detachEvent && (typeof e[a] === Y && (e[a] = null), e.detachEvent(a, n))
    }, ct.Event = function(e, n) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? c : u) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
    }, ct.Event.prototype = {isDefaultPrevented: u,isPropagationStopped: u,isImmediatePropagationStopped: u,preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = c, this.stopPropagation()
        }}, ct.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
        ct.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
                var n, a = this, i = e.relatedTarget, r = e.handleObj;
                return (!i || i !== a && !ct.contains(a, i)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }}
    }), ct.support.submitBubbles || (ct.event.special.submit = {setup: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, a = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                a && !ct._data(a, "submitBubbles") && (ct.event.add(a, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ct._data(a, "submitBubbles", !0))
            }), t)
        },postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        },teardown: function() {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
        }}), ct.support.changeBubbles || (ct.event.special.change = {setup: function() {
            return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Pt.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), t)
        },handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },teardown: function() {
            return ct.event.remove(this, "._change"), !Pt.test(this.nodeName)
        }}), ct.support.focusinBubbles || ct.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = 0, a = function(e) {
            ct.event.simulate(t, e.target, ct.event.fix(e), !0)
        };
        ct.event.special[t] = {setup: function() {
                0 === n++ && J.addEventListener(e, a, !0)
            },teardown: function() {
                0 === --n && J.removeEventListener(e, a, !0)
            }}
    }), ct.fn.extend({on: function(e, n, a, i, r) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof n && (a = a || n, n = t);
                for (o in e)
                    this.on(o, n, a, e[o], r);
                return this
            }
            if (null == a && null == i ? (i = n, a = n = t) : null == i && ("string" == typeof n ? (i = a, a = t) : (i = a, a = n, n = t)), i === !1)
                i = u;
            else if (!i)
                return this;
            return 1 === r && (s = i, i = function(e) {
                return ct().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ct.guid++)), this.each(function() {
                ct.event.add(this, e, i, a, n)
            })
        },one: function(e, t, n, a) {
            return this.on(e, t, n, a, 1)
        },off: function(e, n, a) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, n, e[r]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (a = n, n = t), a === !1 && (a = u), this.each(function() {
                ct.event.remove(this, e, a, n)
            })
        },bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },unbind: function(e, t) {
            return this.off(e, null, t)
        },delegate: function(e, t, n, a) {
            return this.on(t, e, n, a)
        },undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },trigger: function(e, t) {
            return this.each(function() {
                ct.event.trigger(e, t, this)
            })
        },triggerHandler: function(e, n) {
            var a = this[0];
            return a ? ct.event.trigger(e, n, a, !0) : t
        }}), function(e, t) {
        function n(e) {
            return ht.test(e + "")
        }
        function a() {
            var e, t = [];
            return e = function(n, a) {
                return t.push(n += " ") > w.cacheLength && delete e[t.shift()], e[n] = a
            }
        }
        function i(e) {
            return e[I] = !0, e
        }
        function r(e) {
            var t = M.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            }finally {
                t = null
            }
        }
        function o(e, t, n, a) {
            var i, r, o, s, c, u, l, p, h, m;
            if ((t ? t.ownerDocument || t : F) !== M && A(t), t = t || M, n = n || [], !e || "string" != typeof e)
                return n;
            if (1 !== (s = t.nodeType) && 9 !== s)
                return [];
            if (!D && !a) {
                if (i = mt.exec(e))
                    if (o = i[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(o), !r || !r.parentNode)
                                return n;
                            if (r.id === o)
                                return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && H(t, r) && r.id === o)
                            return n.push(r), n
                    } else {
                        if (i[2])
                            return K.apply(n, Q.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = i[3]) && R.getByClassName && t.getElementsByClassName)
                            return K.apply(n, Q.call(t.getElementsByClassName(o), 0)), n
                    }
                if (R.qsa && !O.test(e)) {
                    if (l = !0, p = I, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = d(e), (l = t.getAttribute("id")) ? p = l.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = u.length; c--; )
                            u[c] = p + f(u[c]);
                        h = pt.test(e) && t.parentNode || t, m = u.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, Q.call(h.querySelectorAll(m), 0)), n
                        } catch (v) {
                        }finally {
                            l || t.removeAttribute("id")
                        }
                }
            }
            return x(e.replace(ot, "$1"), t, n, a)
        }
        function s(e, t) {
            var n = t && e, a = n && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (a)
                return a;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, a) {
                    for (var i, r = e([], n.length, t), o = r.length; o--; )
                        n[i = r[o]] && (n[i] = !(a[i] = n[i]))
                })
            })
        }
        function d(e, t) {
            var n, a, i, r, s, c, u, l = X[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (s = e, c = [], u = w.preFilter; s; ) {
                (!n || (a = st.exec(s))) && (a && (s = s.slice(a[0].length) || s), c.push(i = [])), n = !1, (a = ut.exec(s)) && (n = a.shift(), i.push({value: n,type: a[0].replace(ot, " ")}), s = s.slice(n.length));
                for (r in w.filter)
                    !(a = ft[r].exec(s)) || u[r] && !(a = u[r](a)) || (n = a.shift(), i.push({value: n,type: r,matches: a}), s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? o.error(e) : X(e, c).slice(0)
        }
        function f(e) {
            for (var t = 0, n = e.length, a = ""; n > t; t++)
                a += e[t].value;
            return a
        }
        function p(e, t, n) {
            var a = t.dir, i = n && "parentNode" === a, r = W++;
            return t.first ? function(t, n, r) {
                for (; t = t[a]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, r)
            } : function(t, n, o) {
                var s, c, u, l = $ + " " + r;
                if (o) {
                    for (; t = t[a]; )
                        if ((1 === t.nodeType || i) && e(t, n, o))
                            return !0
                } else
                    for (; t = t[a]; )
                        if (1 === t.nodeType || i)
                            if (u = t[I] || (t[I] = {}), (c = u[a]) && c[0] === l) {
                                if ((s = c[1]) === !0 || s === C)
                                    return s === !0
                            } else if (c = u[a] = [l], c[1] = e(t, n, o) || C, c[1] === !0)
                                return !0
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, a) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, a))
                        return !1;
                return !0
            } : e[0]
        }
        function m(e, t, n, a, i) {
            for (var r, o = [], s = 0, c = e.length, u = null != t; c > s; s++)
                (r = e[s]) && (!n || n(r, a, i)) && (o.push(r), u && t.push(s));
            return o
        }
        function v(e, t, n, a, r, o) {
            return a && !a[I] && (a = v(a)), r && !r[I] && (r = v(r, o)), i(function(i, o, s, c) {
                var u, l, d, f = [], p = [], h = o.length, v = i || y(t || "*", s.nodeType ? [s] : s, []), g = !e || !i && t ? v : m(v, f, e, s, c), b = n ? r || (i ? e : h || a) ? [] : o : g;
                if (n && n(g, b, s, c), a)
                    for (u = m(b, p), a(u, [], s, c), l = u.length; l--; )
                        (d = u[l]) && (b[p[l]] = !(g[p[l]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], l = b.length; l--; )
                                (d = b[l]) && u.push(g[l] = d);
                            r(null, b = [], u, c)
                        }
                        for (l = b.length; l--; )
                            (d = b[l]) && (u = r ? Z.call(i, d) : f[l]) > -1 && (i[u] = !(o[u] = d))
                    }
                } else
                    b = m(b === o ? b.splice(h, b.length) : b), r ? r(null, o, b, c) : K.apply(o, b)
            })
        }
        function g(e) {
            for (var t, n, a, i = e.length, r = w.relative[e[0].type], o = r || w.relative[" "], s = r ? 1 : 0, c = p(function(e) {
                return e === t
            }, o, !0), u = p(function(e) {
                return Z.call(t, e) > -1
            }, o, !0), l = [function(e, n, a) {
                    return !r && (a || n !== N) || ((t = n).nodeType ? c(e, n, a) : u(e, n, a))
                }]; i > s; s++)
                if (n = w.relative[e[s].type])
                    l = [p(h(l), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                        for (a = ++s; i > a && !w.relative[e[a].type]; a++)
                            ;
                        return v(s > 1 && h(l), s > 1 && f(e.slice(0, s - 1)).replace(ot, "$1"), n, a > s && g(e.slice(s, a)), i > a && g(e = e.slice(a)), i > a && f(e))
                    }
                    l.push(n)
                }
            return h(l)
        }
        function b(e, t) {
            var n = 0, a = t.length > 0, r = e.length > 0, s = function(i, s, c, u, l) {
                var d, f, p, h = [], v = 0, g = "0", b = i && [], y = null != l, x = N, _ = i || r && w.find.TAG("*", l && s.parentNode || s), k = $ += null == x ? 1 : Math.random() || .1;
                for (y && (N = s !== M && s, C = n); null != (d = _[g]); g++) {
                    if (r && d) {
                        for (f = 0; p = e[f++]; )
                            if (p(d, s, c)) {
                                u.push(d);
                                break
                            }
                        y && ($ = k, C = ++n)
                    }
                    a && ((d = !p && d) && v--, i && b.push(d))
                }
                if (v += g, a && g !== v) {
                    for (f = 0; p = t[f++]; )
                        p(b, h, s, c);
                    if (i) {
                        if (v > 0)
                            for (; g--; )
                                b[g] || h[g] || (h[g] = G.call(u));
                        h = m(h)
                    }
                    K.apply(u, h), y && !i && h.length > 0 && v + t.length > 1 && o.uniqueSort(u)
                }
                return y && ($ = k, N = x), b
            };
            return a ? i(s) : s
        }
        function y(e, t, n) {
            for (var a = 0, i = t.length; i > a; a++)
                o(e, t[a], n);
            return n
        }
        function x(e, t, n, a) {
            var i, r, o, s, c, u = d(e);
            if (!a && 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && 9 === t.nodeType && !D && w.relative[r[1].type]) {
                    if (t = w.find.ID(o.matches[0].replace(xt, _t), t)[0], !t)
                        return n;
                    e = e.slice(r.shift().value.length)
                }
                for (i = ft.needsContext.test(e) ? 0 : r.length; i-- && (o = r[i], !w.relative[s = o.type]); )
                    if ((c = w.find[s]) && (a = c(o.matches[0].replace(xt, _t), pt.test(r[0].type) && t.parentNode || t))) {
                        if (r.splice(i, 1), e = a.length && f(r), !e)
                            return K.apply(n, Q.call(a, 0)), n;
                        break
                    }
            }
            return S(e, u)(a, t, D, n, pt.test(e)), n
        }
        function _() {
        }
        var k, C, w, j, T, S, q, N, A, M, E, D, O, L, P, H, B, I = "sizzle" + -new Date, F = e.document, R = {}, $ = 0, W = 0, z = a(), X = a(), V = a(), Y = typeof t, J = 1 << 31, U = [], G = U.pop, K = U.push, Q = U.slice, Z = U.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), at = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + at + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", rt = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", ot = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = RegExp("^" + et + "*," + et + "*"), ut = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), lt = RegExp(rt), dt = RegExp("^" + nt + "$"), ft = {ID: RegExp("^#(" + tt + ")"),CLASS: RegExp("^\\.(" + tt + ")"),NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),ATTR: RegExp("^" + it),PSEUDO: RegExp("^" + rt),CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")}, pt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, bt = /'|\\/g, yt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, _t = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        };
        try {
            Q.call(F.documentElement.childNodes, 0)[0].nodeType
        } catch (kt) {
            Q = function(e) {
                for (var t, n = []; t = this[e++]; )
                    n.push(t);
                return n
            }
        }
        T = o.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = o.setDocument = function(e) {
            var a = e ? e.ownerDocument || e : F;
            return a !== M && 9 === a.nodeType && a.documentElement ? (M = a, E = a.documentElement, D = T(a), R.tagNameNoComments = r(function(e) {
                return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
            }), R.attributes = r(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), R.getByClassName = r(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), R.getByName = r(function(e) {
                e.id = I + 0, e.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>", E.insertBefore(e, E.firstChild);
                var t = a.getElementsByName && a.getElementsByName(I).length === 2 + a.getElementsByName(I + 0).length;
                return R.getIdNotName = !a.getElementById(I), E.removeChild(e), t
            }), w.attrHandle = r(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Y && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {href: function(e) {
                    return e.getAttribute("href", 2)
                },type: function(e) {
                    return e.getAttribute("type")
                }}, R.getIdNotName ? (w.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && !D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(xt, _t);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (w.find.ID = function(e, n) {
                if (typeof n.getElementById !== Y && !D) {
                    var a = n.getElementById(e);
                    return a ? a.id === e || typeof a.getAttributeNode !== Y && a.getAttributeNode("id").value === e ? [a] : t : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(xt, _t);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = R.tagNameNoComments ? function(e, n) {
                return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
            } : function(e, t) {
                var n, a = [], i = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++]; )
                        1 === n.nodeType && a.push(n);
                    return a
                }
                return r
            }, w.find.NAME = R.getByName && function(e, n) {
                return typeof n.getElementsByName !== Y ? n.getElementsByName(name) : t
            }, w.find.CLASS = R.getByClassName && function(e, n) {
                return typeof n.getElementsByClassName === Y || D ? t : n.getElementsByClassName(e)
            }, L = [], O = [":focus"], (R.qsa = n(a.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || O.push(":checked")
            }), r(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && O.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (R.matchesSelector = n(P = E.matchesSelector || E.mozMatchesSelector || E.webkitMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && r(function(e) {
                R.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), L.push("!=", rt)
            }), O = RegExp(O.join("|")), L = RegExp(L.join("|")), H = n(E.contains) || E.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode;
                return e === a || !!a && 1 === a.nodeType && !!(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }, B = E.compareDocumentPosition ? function(e, t) {
                var n;
                return e === t ? (q = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === a || H(F, e) ? -1 : t === a || H(F, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var n, i = 0, r = e.parentNode, o = t.parentNode, c = [e], u = [t];
                if (e === t)
                    return q = !0, 0;
                if (!r || !o)
                    return e === a ? -1 : t === a ? 1 : r ? -1 : o ? 1 : 0;
                if (r === o)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    c.unshift(n);
                for (n = t; n = n.parentNode; )
                    u.unshift(n);
                for (; c[i] === u[i]; )
                    i++;
                return i ? s(c[i], u[i]) : c[i] === F ? -1 : u[i] === F ? 1 : 0
            }, q = !1, [0, 0].sort(B), R.detectDuplicates = q, M) : M
        }, o.matches = function(e, t) {
            return o(e, null, null, t)
        }, o.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== M && A(e), t = t.replace(yt, "='$1']"), !(!R.matchesSelector || D || L && L.test(t) || O.test(t)))
                try {
                    var n = P.call(e, t);
                    if (n || R.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (a) {
                }
            return o(t, M, null, [e]).length > 0
        }, o.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && A(e), H(e, t)
        }, o.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== M && A(e), D || (t = t.toLowerCase()), (n = w.attrHandle[t]) ? n(e) : D || R.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, o.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, o.uniqueSort = function(e) {
            var t, n = [], a = 1, i = 0;
            if (q = !R.detectDuplicates, e.sort(B), q) {
                for (; t = e[a]; a++)
                    t === e[a - 1] && (i = n.push(a));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return e
        }, j = o.getText = function(e) {
            var t, n = "", a = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += j(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[a]; a++)
                    n += j(t);
            return n
        }, w = o.selectors = {cacheLength: 50,createPseudo: i,match: ft,find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
                    return e[1] = e[1].replace(xt, _t), e[3] = (e[4] || e[5] || "").replace(xt, _t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
                },PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ft.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && lt.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }},filter: {TAG: function(e) {
                    return "*" === e ? function() {
                        return !0
                    } : (e = e.replace(xt, _t).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                },ATTR: function(e, t, n) {
                    return function(a) {
                        var i = o.attr(a, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },CHILD: function(e, t, n, a, i) {
                    var r = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === a && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, c) {
                        var u, l, d, f, p, h, m = r !== o ? "nextSibling" : "previousSibling", v = t.parentNode, g = s && t.nodeName.toLowerCase(), b = !c && !s;
                        if (v) {
                            if (r) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [o ? v.firstChild : v.lastChild], o && b) {
                                for (l = v[I] || (v[I] = {}), u = l[e] || [], p = u[0] === $ && u[1], f = u[0] === $ && u[2], d = p && v.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        l[e] = [$, p, f];
                                        break
                                    }
                            } else if (b && (u = (t[I] || (t[I] = {}))[e]) && u[0] === $)
                                f = u[1];
                            else
                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++f || (b && ((d[I] || (d[I] = {}))[e] = [$, f]), d !== t)); )
                                    ;
                            return f -= i, f === a || 0 === f % a && f / a >= 0
                        }
                    }
                },PSEUDO: function(e, t) {
                    var n, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                    return a[I] ? a(t) : a.length > 1 ? (n = [e, e, "", t], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, r = a(e, t), o = r.length; o--; )
                            i = Z.call(e, r[o]), e[i] = !(n[i] = r[o])
                    }) : function(e) {
                        return a(e, 0, n)
                    }) : a
                }},pseudos: {not: i(function(e) {
                    var t = [], n = [], a = S(e.replace(ot, "$1"));
                    return a[I] ? i(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; )
                            (r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, a(t, null, r, n), !n.pop()
                    }
                }),has: i(function(e) {
                    return function(t) {
                        return o(e, t).length > 0
                    }
                }),contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || j(t)).indexOf(e) > -1
                    }
                }),lang: i(function(e) {
                    return dt.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(xt, _t).toLowerCase(), function(t) {
                        var n;
                        do
                            if (n = D ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },root: function(e) {
                    return e === E
                },focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },enabled: function(e) {
                    return e.disabled === !1
                },disabled: function(e) {
                    return e.disabled === !0
                },checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },parent: function(e) {
                    return !w.pseudos.empty(e)
                },header: function(e) {
                    return gt.test(e.nodeName)
                },input: function(e) {
                    return vt.test(e.nodeName)
                },button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },first: l(function() {
                    return [0]
                }),last: l(function(e, t) {
                    return [t - 1]
                }),eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),lt: l(function(e, t, n) {
                    for (var a = 0 > n ? n + t : n; --a >= 0; )
                        e.push(a);
                    return e
                }),gt: l(function(e, t, n) {
                    for (var a = 0 > n ? n + t : n; t > ++a; )
                        e.push(a);
                    return e
                })}};
        for (k in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            w.pseudos[k] = c(k);
        for (k in {submit: !0,reset: !0})
            w.pseudos[k] = u(k);
        S = o.compile = function(e, t) {
            var n, a = [], i = [], r = V[e + " "];
            if (!r) {
                for (t || (t = d(e)), n = t.length; n--; )
                    r = g(t[n]), r[I] ? a.push(r) : i.push(r);
                r = V(e, b(i, a))
            }
            return r
        }, w.pseudos.nth = w.pseudos.eq, w.filters = _.prototype = w.pseudos, w.setFilters = new _, A(), o.attr = ct.attr, ct.find = o, ct.expr = o.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = o.uniqueSort, ct.text = o.getText, ct.isXMLDoc = o.isXML, ct.contains = o.contains
    }(e);
    var Rt = /Until$/, $t = /^(?:parents|prev(?:Until|All))/, Wt = /^.[^:#\[\.,]*$/, zt = ct.expr.match.needsContext, Xt = {children: !0,contents: !0,next: !0,prev: !0};
    ct.fn.extend({find: function(e) {
            var t, n, a, i = this.length;
            if ("string" != typeof e)
                return a = this, this.pushStack(ct(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (ct.contains(a[t], this))
                            return !0
                }));
            for (n = [], t = 0; i > t; t++)
                ct.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ct.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },has: function(e) {
            var t, n = ct(e, this), a = n.length;
            return this.filter(function() {
                for (t = 0; a > t; t++)
                    if (ct.contains(this, n[t]))
                        return !0
            })
        },not: function(e) {
            return this.pushStack(d(this, e, !1))
        },filter: function(e) {
            return this.pushStack(d(this, e, !0))
        },is: function(e) {
            return !!e && ("string" == typeof e ? zt.test(e) ? ct(e, this.context).index(this[0]) >= 0 : ct.filter(e, this).length > 0 : this.filter(e).length > 0)
        },closest: function(e, t) {
            for (var n, a = 0, i = this.length, r = [], o = zt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > a; a++)
                for (n = this[a]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                    if (o ? o.index(n) > -1 : ct.find.matchesSelector(n, e)) {
                        r.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(r.length > 1 ? ct.unique(r) : r)
        },index: function(e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e), a = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(a))
        },addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }}), ct.fn.andSelf = ct.fn.addBack, ct.each({parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },parents: function(e) {
            return ct.dir(e, "parentNode")
        },parentsUntil: function(e, t, n) {
            return ct.dir(e, "parentNode", n)
        },next: function(e) {
            return l(e, "nextSibling")
        },prev: function(e) {
            return l(e, "previousSibling")
        },nextAll: function(e) {
            return ct.dir(e, "nextSibling")
        },prevAll: function(e) {
            return ct.dir(e, "previousSibling")
        },nextUntil: function(e, t, n) {
            return ct.dir(e, "nextSibling", n)
        },prevUntil: function(e, t, n) {
            return ct.dir(e, "previousSibling", n)
        },siblings: function(e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        },children: function(e) {
            return ct.sibling(e.firstChild)
        },contents: function(e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
        }}, function(e, t) {
        ct.fn[e] = function(n, a) {
            var i = ct.map(this, t, n);
            return Rt.test(e) || (a = n), a && "string" == typeof a && (i = ct.filter(a, i)), i = this.length > 1 && !Xt[e] ? ct.unique(i) : i, this.length > 1 && $t.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ct.extend({filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ct.find.matchesSelector(t[0], e) ? [t[0]] : [] : ct.find.matches(e, t)
        },dir: function(e, n, a) {
            for (var i = [], r = e[n]; r && 9 !== r.nodeType && (a === t || 1 !== r.nodeType || !ct(r).is(a)); )
                1 === r.nodeType && i.push(r), r = r[n];
            return i
        },sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }});
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Yt = / jQuery\d+="(?:null|\d+)"/g, Jt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"), Ut = /^\s+/, Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kt = /<([\w:]+)/, Qt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, an = /^$|\/(?:java|ecma)script/i, rn = /^true\/(.*)/, on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, cn = f(J), un = cn.appendChild(J.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ct.fn.extend({text: function(e) {
            return ct.access(this, function(e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e))
            }, null, e, arguments.length)
        },wrapAll: function(e) {
            if (ct.isFunction(e))
                return this.each(function(t) {
                    ct(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },wrapInner: function(e) {
            return this.each(ct.isFunction(e) ? function(t) {
                ct(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ct(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },wrap: function(e) {
            var t = ct.isFunction(e);
            return this.each(function(n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        },append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },remove: function(e, t) {
            for (var n, a = 0; null != (n = this[a]); a++)
                (!e || ct.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ct.cleanData(y(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && v(y(n, "script")), n.parentNode.removeChild(n)));
            return this
        },empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(y(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ct.clone(this, e, t)
            })
        },html: function(e) {
            return ct.access(this, function(e) {
                var n = this[0] || {}, a = 0, i = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(Yt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Jt.test(e) || !ct.support.leadingWhitespace && Ut.test(e) || sn[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; i > a; a++)
                            n = this[a] || {}, 1 === n.nodeType && (ct.cleanData(y(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (r) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },replaceWith: function(e) {
            var t = ct.isFunction(e);
            return t || "string" == typeof e || (e = ct(e).not(this).detach()), this.domManip([e], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (ct(this).remove(), n.insertBefore(e, t))
            })
        },detach: function(e) {
            return this.remove(e, !0)
        },domManip: function(e, n, a) {
            e = tt.apply([], e);
            var i, r, o, s, c, u, l = 0, d = this.length, f = this, v = d - 1, g = e[0], b = ct.isFunction(g);
            if (b || !(1 >= d || "string" != typeof g || ct.support.checkClone) && nn.test(g))
                return this.each(function(i) {
                    var r = f.eq(i);
                    b && (e[0] = g.call(this, i, n ? r.html() : t)), r.domManip(e, n, a)
                });
            if (d && (u = ct.buildFragment(e, this[0].ownerDocument, !1, this), i = u.firstChild, 1 === u.childNodes.length && (u = i), i)) {
                for (n = n && ct.nodeName(i, "tr"), s = ct.map(y(u, "script"), h), o = s.length; d > l; l++)
                    r = u, l !== v && (r = ct.clone(r, !0, !0), o && ct.merge(s, y(r, "script"))), a.call(n && ct.nodeName(this[l], "table") ? p(this[l], "tbody") : this[l], r, l);
                if (o)
                    for (c = s[s.length - 1].ownerDocument, ct.map(s, m), l = 0; o > l; l++)
                        r = s[l], an.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(c, r) && (r.src ? ct.ajax({url: r.src,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0}) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(on, "")));
                u = i = null
            }
            return this
        }}), ct.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        ct.fn[e] = function(e) {
            for (var n, a = 0, i = [], r = ct(e), o = r.length - 1; o >= a; a++)
                n = a === o ? this : this.clone(!0), ct(r[a])[t](n), nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ct.extend({clone: function(e, t, n) {
            var a, i, r, o, s, c = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(r = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                for (a = y(r), s = y(e), o = 0; null != (i = s[o]); ++o)
                    a[o] && b(i, a[o]);
            if (t)
                if (n)
                    for (s = s || y(e), a = a || y(r), o = 0; null != (i = s[o]); o++)
                        g(i, a[o]);
                else
                    g(e, r);
            return a = y(r, "script"), a.length > 0 && v(a, !c && y(e, "script")), a = s = i = null, r
        },buildFragment: function(e, t, n, a) {
            for (var i, r, o, s, c, u, l, d = e.length, p = f(t), h = [], m = 0; d > m; m++)
                if (r = e[m], r || 0 === r)
                    if ("object" === ct.type(r))
                        ct.merge(h, r.nodeType ? [r] : r);
                    else if (Zt.test(r)) {
                        for (s = s || p.appendChild(t.createElement("div")), c = (Kt.exec(r) || ["", ""])[1].toLowerCase(), l = sn[c] || sn._default, s.innerHTML = l[1] + r.replace(Gt, "<$1></$2>") + l[2], i = l[0]; i--; )
                            s = s.lastChild;
                        if (!ct.support.leadingWhitespace && Ut.test(r) && h.push(t.createTextNode(Ut.exec(r)[0])), !ct.support.tbody)
                            for (r = "table" !== c || Qt.test(r) ? "<table>" !== l[1] || Qt.test(r) ? 0 : s : s.firstChild, i = r && r.childNodes.length; i--; )
                                ct.nodeName(u = r.childNodes[i], "tbody") && !u.childNodes.length && r.removeChild(u);
                        for (ct.merge(h, s.childNodes), s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = p.lastChild
                    } else
                        h.push(t.createTextNode(r));
            for (s && p.removeChild(s), ct.support.appendChecked || ct.grep(y(h, "input"), x), m = 0; r = h[m++]; )
                if ((!a || -1 === ct.inArray(r, a)) && (o = ct.contains(r.ownerDocument, r), s = y(p.appendChild(r), "script"), o && v(s), n))
                    for (i = 0; r = s[i++]; )
                        an.test(r.type || "") && n.push(r);
            return s = null, p
        },cleanData: function(e, t) {
            for (var n, a, i, r, o = 0, s = ct.expando, c = ct.cache, u = ct.support.deleteExpando, l = ct.event.special; null != (n = e[o]); o++)
                if ((t || ct.acceptData(n)) && (i = n[s], r = i && c[i])) {
                    if (r.events)
                        for (a in r.events)
                            l[a] ? ct.event.remove(n, a) : ct.removeEvent(n, a, r.handle);
                    c[i] && (delete c[i], u ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, Z.push(i))
                }
        }});
    var ln, dn, fn, pn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, mn = /^(top|right|bottom|left)$/, vn = /^(none|table(?!-c[ea]).+)/, gn = /^margin/, bn = RegExp("^(" + ut + ")(.*)$", "i"), yn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"), xn = RegExp("^([+-])=(" + ut + ")", "i"), _n = {BODY: "block"}, kn = {position: "absolute",visibility: "hidden",display: "block"}, Cn = {letterSpacing: 0,fontWeight: 400}, wn = ["Top", "Right", "Bottom", "Left"], jn = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({css: function(e, n) {
            return ct.access(this, function(e, n, a) {
                var i, r, o = {}, s = 0;
                if (ct.isArray(n)) {
                    for (r = dn(e), i = n.length; i > s; s++)
                        o[n[s]] = ct.css(e, n[s], !1, r);
                    return o
                }
                return a !== t ? ct.style(e, n, a) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        },show: function() {
            return C(this, !0)
        },hide: function() {
            return C(this)
        },toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : k(this)) ? ct(this).show() : ct(this).hide()
            })
        }}), ct.extend({cssHooks: {opacity: {get: function(e, t) {
                    if (t) {
                        var n = fn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": ct.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, a, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, c = ct.camelCase(n), u = e.style;
                if (n = ct.cssProps[c] || (ct.cssProps[c] = _(u, c)), s = ct.cssHooks[n] || ct.cssHooks[c], a === t)
                    return s && "get" in s && (r = s.get(e, !1, i)) !== t ? r : u[n];
                if (o = typeof a, "string" === o && (r = xn.exec(a)) && (a = (r[1] + 1) * r[2] + parseFloat(ct.css(e, n)), o = "number"), !(null == a || "number" === o && isNaN(a) || ("number" !== o || ct.cssNumber[c] || (a += "px"), ct.support.clearCloneStyle || "" !== a || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (a = s.set(e, a, i)) === t)))
                    try {
                        u[n] = a
                    } catch (l) {
                    }
            }
        },css: function(e, n, a, i) {
            var r, o, s, c = ct.camelCase(n);
            return n = ct.cssProps[c] || (ct.cssProps[c] = _(e.style, c)), s = ct.cssHooks[n] || ct.cssHooks[c], s && "get" in s && (o = s.get(e, !0, a)), o === t && (o = fn(e, n, i)), "normal" === o && n in Cn && (o = Cn[n]), "" === a || a ? (r = parseFloat(o), a === !0 || ct.isNumeric(r) ? r || 0 : o) : o
        },swap: function(e, t, n, a) {
            var i, r, o = {};
            for (r in t)
                o[r] = e.style[r], e.style[r] = t[r];
            i = n.apply(e, a || []);
            for (r in t)
                e.style[r] = o[r];
            return i
        }}), e.getComputedStyle ? (dn = function(t) {
        return e.getComputedStyle(t, null)
    }, fn = function(e, n, a) {
        var i, r, o, s = a || dn(e), c = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== c || ct.contains(e.ownerDocument, e) || (c = ct.style(e, n)), yn.test(c) && gn.test(n) && (i = u.width, r = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = c, c = s.width, u.width = i, u.minWidth = r, u.maxWidth = o)), c
    }) : J.documentElement.currentStyle && (dn = function(e) {
        return e.currentStyle
    }, fn = function(e, n, a) {
        var i, r, o, s = a || dn(e), c = s ? s[n] : t, u = e.style;
        return null == c && u && u[n] && (c = u[n]), yn.test(c) && !mn.test(n) && (i = u.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : c, c = u.pixelLeft + "px", u.left = i, o && (r.left = o)), "" === c ? "auto" : c
    }), ct.each(["height", "width"], function(e, n) {
        ct.cssHooks[n] = {get: function(e, a, i) {
                return a ? 0 === e.offsetWidth && vn.test(ct.css(e, "display")) ? ct.swap(e, kn, function() {
                    return T(e, n, i)
                }) : T(e, n, i) : t
            },set: function(e, t, a) {
                var i = a && dn(e);
                return w(e, t, a ? j(e, n, a, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
            }}
    }), ct.support.opacity || (ct.cssHooks.opacity = {get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },set: function(e, t) {
            var n = e.style, a = e.currentStyle, i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", r = a && a.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(r.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || a && !a.filter) || (n.filter = pn.test(r) ? r.replace(pn, i) : r + " " + i)
        }}), ct(function() {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {get: function(e, n) {
                return n ? ct.swap(e, {display: "inline-block"}, fn, [e, "marginRight"]) : t
            }}), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(e, n) {
            ct.cssHooks[n] = {get: function(e, a) {
                    return a ? (a = fn(e, n), yn.test(a) ? ct(e).position()[n] + "px" : a) : t
                }}
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function(e) {
        return !ct.expr.filters.hidden(e)
    }), ct.each({margin: "",padding: "",border: "Width"}, function(e, t) {
        ct.cssHooks[e + t] = {expand: function(n) {
                for (var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > a; a++)
                    i[e + wn[a] + t] = r[a] || r[a - 2] || r[0];
                return i
            }}, gn.test(e) || (ct.cssHooks[e + t].set = w)
    });
    var Tn = /%20/g, Sn = /\[\]$/, qn = /\r?\n/g, Nn = /^(?:submit|button|image|reset|file)$/i, An = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({serialize: function() {
            return ct.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && An.test(this.nodeName) && !Nn.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function(e) {
                    return {name: t.name,value: e.replace(qn, "\r\n")}
                }) : {name: t.name,value: n.replace(qn, "\r\n")}
            }).get()
        }}), ct.param = function(e, n) {
        var a, i = [], r = function(e, t) {
            t = ct.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e))
            ct.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (a in e)
                N(a, e[a], n, r);
        return i.join("&").replace(Tn, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ct.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ct.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Mn, En, Dn = ct.now(), On = /\?/, Ln = /#.*$/, Pn = /([?&])_=[^&]*/, Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, In = /^(?:GET|HEAD)$/, Fn = /^\/\//, Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, $n = ct.fn.load, Wn = {}, zn = {}, Xn = "*/".concat("*");
    try {
        En = U.href
    } catch (Vn) {
        En = J.createElement("a"), En.href = "", En = En.href
    }
    Mn = Rn.exec(En.toLowerCase()) || [], ct.fn.load = function(e, n, a) {
        if ("string" != typeof e && $n)
            return $n.apply(this, arguments);
        var i, r, o, s = this, c = e.indexOf(" ");
        return c >= 0 && (i = e.slice(c, e.length), e = e.slice(0, c)), ct.isFunction(n) ? (a = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && ct.ajax({url: e,type: o,dataType: "html",data: n}).done(function(e) {
            r = arguments, s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
        }).complete(a && function(e, t) {
            s.each(a, r || [e.responseText, t, e])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ct.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ct.each(["get", "post"], function(e, n) {
        ct[n] = function(e, a, i, r) {
            return ct.isFunction(a) && (r = r || i, i = a, a = t), ct.ajax({url: e,type: n,dataType: r,data: a,success: i})
        }
    }), ct.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: En,type: "GET",isLocal: Bn.test(Mn[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Xn,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText"},converters: {"* text": e.String,"text html": !0,"text json": ct.parseJSON,"text xml": ct.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
            return t ? E(E(e, ct.ajaxSettings), t) : E(ct.ajaxSettings, e)
        },ajaxPrefilter: A(Wn),ajaxTransport: A(zn),ajax: function(e, n) {
            function a(e, n, a, i) {
                var r, d, b, y, _, C = n;
                2 !== x && (x = 2, c && clearTimeout(c), l = t, s = i || "", k.readyState = e > 0 ? 4 : 0, a && (y = D(f, k, a)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (_ = k.getResponseHeader("Last-Modified"), _ && (ct.lastModified[o] = _), _ = k.getResponseHeader("etag"), _ && (ct.etag[o] = _)), 204 === e ? (r = !0, C = "nocontent") : 304 === e ? (r = !0, C = "notmodified") : (r = O(f, y), C = r.state, d = r.data, b = r.error, r = !b)) : (b = C, (e || !C) && (C = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || C) + "", r ? m.resolveWith(p, [d, C, k]) : m.rejectWith(p, [k, C, b]), k.statusCode(g), g = t, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [k, f, r ? d : b]), v.fireWith(p, [k, C]), u && (h.trigger("ajaxComplete", [k, f]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, r, o, s, c, u, l, d, f = ct.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? ct(p) : ct.event, m = ct.Deferred(), v = ct.Callbacks("once memory"), g = f.statusCode || {}, b = {}, y = {}, x = 0, _ = "canceled", k = {readyState: 0,getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!d)
                            for (d = {}; t = Hn.exec(s); )
                                d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },getAllResponseHeaders: function() {
                    return 2 === x ? s : null
                },setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, b[e] = t), this
                },overrideMimeType: function(e) {
                    return x || (f.mimeType = e), this
                },statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            k.always(e[k.status]);
                    return this
                },abort: function(e) {
                    var t = e || _;
                    return l && l.abort(t), a(0, t), this
                }};
            if (m.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || En) + "").replace(Ln, "").replace(Fn, Mn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(lt) || [""], null == f.crossDomain && (i = Rn.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Mn[1] && i[2] === Mn[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Mn[3] || ("http:" === Mn[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), M(Wn, f, n, k), 2 === x)
                return k;
            u = f.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !In.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (On.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Pn.test(o) ? o.replace(Pn, "$1_=" + Dn++) : o + (On.test(o) ? "&" : "?") + "_=" + Dn++)), f.ifModified && (ct.lastModified[o] && k.setRequestHeader("If-Modified-Since", ct.lastModified[o]), ct.etag[o] && k.setRequestHeader("If-None-Match", ct.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : f.accepts["*"]);
            for (r in f.headers)
                k.setRequestHeader(r, f.headers[r]);
            if (!f.beforeSend || f.beforeSend.call(p, k, f) !== !1 && 2 !== x) {
                _ = "abort";
                for (r in {success: 1,error: 1,complete: 1})
                    k[r](f[r]);
                if (l = M(zn, f, n, k)) {
                    k.readyState = 1, u && h.trigger("ajaxSend", [k, f]), f.async && f.timeout > 0 && (c = setTimeout(function() {
                        k.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, l.send(b, a)
                    } catch (C) {
                        if (!(2 > x))
                            throw C;
                        a(-1, C)
                    }
                } else
                    a(-1, "No Transport");
                return k
            }
            return k.abort()
        },getScript: function(e, n) {
            return ct.get(e, t, n, "script")
        },getJSON: function(e, t, n) {
            return ct.get(e, t, n, "json")
        }}), ct.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
                return ct.globalEval(e), e
            }}}), ct.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, a = J.head || ct("head")[0] || J.documentElement;
            return {send: function(t, i) {
                    n = J.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, a.insertBefore(n, a.firstChild)
                },abort: function() {
                    n && n.onload(t, !0)
                }}
        }
    });
    var Yn = [], Jn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var e = Yn.pop() || ct.expando + "_" + Dn++;
            return this[e] = !0, e
        }}), ct.ajaxPrefilter("json jsonp", function(n, a, i) {
        var r, o, s, c = n.jsonp !== !1 && (Jn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
        return c || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, c ? n[c] = n[c].replace(Jn, "$1" + r) : n.jsonp !== !1 && (n.url += (On.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
            return s || ct.error(r + " was not called"), s[0]
        }, n.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            e[r] = o, n[r] && (n.jsonpCallback = a.jsonpCallback, Yn.push(r)), s && ct.isFunction(o) && o(s[0]), s = o = t
        }), "script") : t
    });
    var Un, Gn, Kn = 0, Qn = e.ActiveXObject && function() {
        var e;
        for (e in Un)
            Un[e](t, !0)
    };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && L() || P()
    } : L, Gn = ct.ajaxSettings.xhr(), ct.support.cors = !!Gn && "withCredentials" in Gn, Gn = ct.support.ajax = !!Gn, Gn && ct.ajaxTransport(function(n) {
        if (!n.crossDomain || ct.support.cors) {
            var a;
            return {send: function(i, r) {
                    var o, s, c = n.xhr();
                    if (n.username ? c.open(n.type, n.url, n.async, n.username, n.password) : c.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields)
                            c[s] = n.xhrFields[s];
                    n.mimeType && c.overrideMimeType && c.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)
                            c.setRequestHeader(s, i[s])
                    } catch (u) {
                    }
                    c.send(n.hasContent && n.data || null), a = function(e, i) {
                        var s, u, l, d;
                        try {
                            if (a && (i || 4 === c.readyState))
                                if (a = t, o && (c.onreadystatechange = ct.noop, Qn && delete Un[o]), i)
                                    4 !== c.readyState && c.abort();
                                else {
                                    d = {}, s = c.status, u = c.getAllResponseHeaders(), "string" == typeof c.responseText && (d.text = c.responseText);
                                    try {
                                        l = c.statusText
                                    } catch (f) {
                                        l = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (p) {
                            i || r(-1, p)
                        }
                        d && r(s, l, d, u)
                    }, n.async ? 4 === c.readyState ? setTimeout(a) : (o = ++Kn, Qn && (Un || (Un = {}, ct(e).unload(Qn)), Un[o] = a), c.onreadystatechange = a) : a()
                },abort: function() {
                    a && a(t, !0)
                }}
        }
    });
    var Zn, ea, ta = /^(?:toggle|show|hide)$/, na = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"), aa = /queueHooks$/, ia = [R], ra = {"*": [function(e, t) {
                var n, a, i = this.createTween(e, t), r = na.exec(t), o = i.cur(), s = +o || 0, c = 1, u = 20;
                if (r) {
                    if (n = +r[2], a = r[3] || (ct.cssNumber[e] ? "" : "px"), "px" !== a && s) {
                        s = ct.css(i.elem, e, !0) || n || 1;
                        do
                            c = c || ".5", s /= c, ct.style(i.elem, e, s + a);
                        while (c !== (c = i.cur() / o) && 1 !== c && --u)
                    }
                    i.unit = a, i.start = s, i.end = r[1] ? s + (r[1] + 1) * n : n
                }
                return i
            }]};
    ct.Animation = ct.extend(I, {tweener: function(e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, a = 0, i = e.length; i > a; a++)
                n = e[a], ra[n] = ra[n] || [], ra[n].unshift(t)
        },prefilter: function(e, t) {
            t ? ia.unshift(e) : ia.push(e)
        }}), ct.Tween = $, $.prototype = {constructor: $,init: function(e, t, n, a, i, r) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = r || (ct.cssNumber[n] ? "" : "px")
        },cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }}, $.prototype.init.prototype = $.prototype, $.propHooks = {_default: {get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },set: function(e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }}}, $.propHooks.scrollTop = $.propHooks.scrollLeft = {set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }}, ct.each(["toggle", "show", "hide"], function(e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function(e, a, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, a, i)
        }
    }), ct.fn.extend({fadeTo: function(e, t, n, a) {
            return this.filter(k).css("opacity", 0).show().end().animate({opacity: t}, e, n, a)
        },animate: function(e, t, n, a) {
            var i = ct.isEmptyObject(e), r = ct.speed(t, n, a), o = function() {
                var t = I(this, ct.extend({}, e), r);
                o.finish = function() {
                    t.stop(!0)
                }, (i || ct._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
        },stop: function(e, n, a) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(a)
            };
            return "string" != typeof e && (a = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", r = ct.timers, o = ct._data(this);
                if (n)
                    o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && aa.test(n) && i(o[n]);
                for (n = r.length; n--; )
                    r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(a), t = !1, r.splice(n, 1));
                (t || !a) && ct.dequeue(this, e)
            })
        },finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ct._data(this), a = n[e + "queue"], i = n[e + "queueHooks"], r = ct.timers, o = a ? a.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; o > t; t++)
                    a[t] && a[t].finish && a[t].finish.call(this);
                delete n.finish
            })
        }}), ct.each({slideDown: W("show"),slideUp: W("hide"),slideToggle: W("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        ct.fn[e] = function(e, n, a) {
            return this.animate(t, e, n, a)
        }
    }), ct.speed = function(e, t, n) {
        var a = e && "object" == typeof e ? ct.extend({}, e) : {complete: n || !n && t || ct.isFunction(e) && e,duration: e,easing: n && t || t && !ct.isFunction(t) && t};
        return a.duration = ct.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in ct.fx.speeds ? ct.fx.speeds[a.duration] : ct.fx.speeds._default, (null == a.queue || a.queue === !0) && (a.queue = "fx"), a.old = a.complete, a.complete = function() {
            ct.isFunction(a.old) && a.old.call(this), a.queue && ct.dequeue(this, a.queue)
        }, a
    }, ct.easing = {linear: function(e) {
            return e
        },swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }}, ct.timers = [], ct.fx = $.prototype.init, ct.fx.tick = function() {
        var e, n = ct.timers, a = 0;
        for (Zn = ct.now(); n.length > a; a++)
            e = n[a], e() || n[a] !== e || n.splice(a--, 1);
        n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function(e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function() {
        ea || (ea = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function() {
        clearInterval(ea), ea = null
    }, ct.fx.speeds = {slow: 600,fast: 200,_default: 400}, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(e) {
        return ct.grep(ct.timers, function(t) {
            return e === t.elem
        }).length
    }), ct.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                ct.offset.setOffset(this, e, t)
            });
        var n, a, i = {top: 0,left: 0}, r = this[0], o = r && r.ownerDocument;
        return o ? (n = o.documentElement, ct.contains(n, r) ? (typeof r.getBoundingClientRect !== Y && (i = r.getBoundingClientRect()), a = z(o), {top: i.top + (a.pageYOffset || n.scrollTop) - (n.clientTop || 0),left: i.left + (a.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : i) : void 0
    }, ct.offset = {setOffset: function(e, t, n) {
            var a = ct.css(e, "position");
            "static" === a && (e.style.position = "relative");
            var i, r, o = ct(e), s = o.offset(), c = ct.css(e, "top"), u = ct.css(e, "left"), l = ("absolute" === a || "fixed" === a) && ct.inArray("auto", [c, u]) > -1, d = {}, f = {};
            l ? (f = o.position(), i = f.top, r = f.left) : (i = parseFloat(c) || 0, r = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : o.css(d)
        }}, ct.fn.extend({position: function() {
            if (this[0]) {
                var e, t, n = {top: 0,left: 0}, a = this[0];
                return "fixed" === ct.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - ct.css(a, "marginTop", !0),left: t.left - n.left - ct.css(a, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || J.documentElement; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position"); )
                    e = e.offsetParent;
                return e || J.documentElement
            })
        }}), ct.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
        var a = /Y/.test(n);
        ct.fn[e] = function(i) {
            return ct.access(this, function(e, i, r) {
                var o = z(e);
                return r === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(a ? ct(o).scrollLeft() : r, a ? r : ct(o).scrollTop()) : e[i] = r, t)
            }, e, i, arguments.length, null)
        }
    }), ct.each({Height: "height",Width: "width"}, function(e, n) {
        ct.each({padding: "inner" + e,content: n,"": "outer" + e}, function(a, i) {
            ct.fn[i] = function(i, r) {
                var o = arguments.length && (a || "boolean" != typeof i), s = a || (i === !0 || r === !0 ? "margin" : "border");
                return ct.access(this, function(n, a, i) {
                    var r;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : i === t ? ct.css(n, a, s) : ct.style(n, a, i, s)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return ct
    })
}(window);
var Yousi_tool = function() {
    this.cropCache = void 0
};
if (Yousi_tool.prototype.contains = function(e, t) {
    for (var n = e.length; n--; )
        if (e[n] === t)
            return n;
    return -1
}, Yousi_tool.prototype.getDate = function(e) {
    var t = new Date, n = {"m+": t.getMonth() + 1,"d+": t.getDate(),"h+": t.getHours(),"i+": t.getMinutes(),"s+": t.getSeconds(),"q+": Math.floor((t.getMonth() + 3) / 3),S: t.getMilliseconds()};
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var a in n)
        new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[a] : ("00" + n[a]).substr(("" + n[a]).length)));
    return e
}, Yousi_tool.prototype.arrayUnique = function(e) {
    for (var t = {}, n = [], a = 0; a < e.length; a++)
        t[e[a]] || (t[e[a]] = !0, n.push(e[a]));
    return n
}, Yousi_tool.prototype.crop = function(e) {
    function t(t) {
        var n = $(e.cropShowImg);
        if (parseInt(t.w) > 0) {
            var r = e.width / t.w, l = e.height / t.h;
            o = Math.round(r * a) + "px", s = Math.round(l * i) + "px", c = "-" + Math.round(r * t.x) + "px", u = "-" + Math.round(l * t.y) + "px", n.css({width: o,height: s,marginLeft: c,marginTop: u})
        }
    }
    function n(t) {
        var n = [t.w, t.h, t.x, t.y];
        $("input[name=" + e.inputPoint + "]").attr("value", n.join(","))
    }
    var a, i, r, o, s, c, u, l = (e.aspectRatio || !1, e.boxWidth || 400, e.boxHeight || 200, e.minSize || [0, 0], e.maxSize || [9999, 9999], e.width, e.height, this);
    if (l.cropCache && (l.cropCache.destroy(), $(e.cropImg).attr("style", "")), e.url) {
        $(e.cropImg).attr("src", e.url), $(e.cropShowImg).attr("src", e.url), $(e.img).attr("src", r), e.initFunc();
        var d = $(e.cropImg), f = d.clone();
        d.after(f), d.remove(), f.Jcrop({aspectRatio: e.aspectRatio,boxWidth: e.boxWidth,boxHeight: e.boxHeight,maxSize: e.maxSize,minSize: e.minSize,onSelect: n,onChange: t}, function() {
            setTimeout(function() {
                var e = $(".jcrop-holder").parent().width(), t = $(".jcrop-holder").parent().height(), n = $(".jcrop-holder").width(), a = $(".jcrop-holder").height();
                $(".jcrop-holder").css("margin-left", (e - n) / 2), $(".jcrop-holder").css("margin-top", (t - a) / 2)
            }, 0), l.cropCache = this, l.cropCache.animateTo(e.autoPosition);
            var t = this.getBounds();
            a = t[0], i = t[1]
        })
    }
    $(e.submitBtn).click(function() {
        $(e.img).attr("src", e.url), $("input[name=" + e.pathInput + "]").val(e.path), $("input[name=" + e.nameInput + "]").val(e.name);
        var t = $(e.img);
        t.css({width: o,height: s,marginLeft: c,marginTop: u}), l.cropCache.destroy(), ("" == $("input[name=" + e.inputPoint + "]").val() || void 0 == $("input[name=" + e.inputPoint + "]").val()) && $("input[name=" + e.inputPoint + "]").attr("value", e.defaultArea), e.subFun()
    }), $(document).on("click", e.cancleBtn, function() {
        l.cropCache.destroy(), e.canFun()
    })
}, Yousi_tool.prototype.count_down = function() {
    var e = function(e, t, n, a) {
        this.time = Math.floor((t - e) / 1e3), this.countFunc = n, this.endFunc = a, this.flag = "t" + Date.parse(new Date)
    };
    return e.prototype.start = function() {
        var e = this;
        e.flag = setInterval(function() {
            if (e.time < 0)
                clearInterval(e.flag), e.endFunc(), console.log("计时结束");
            else {
                var t, n, a, i;
                a = Math.floor(e.time / 60 / 60 / 24) < 10 ? "0" + Math.floor(e.time / 60 / 60 / 24) : Math.floor(e.time / 60 / 60 / 24), n = Math.floor(e.time / 60 / 60 % 24) < 10 ? "0" + Math.floor(e.time / 60 / 60 % 24) : Math.floor(e.time / 60 / 60 % 24), t = Math.floor(e.time / 60 % 60) < 10 ? "0" + Math.floor(e.time / 60 % 60) : Math.floor(e.time / 60 % 60), i = Math.floor(e.time % 60) < 10 ? "0" + Math.floor(e.time % 60) : Math.floor(e.time % 60), e.countFunc(i, t, n, a), e.time--
            }
        }, 1e3)
    }, e
}, Yousi_tool.prototype.prop = function(e, t, n, a) {
    var i, r = $(".prop");
    n && r.find(".prop_h").text(n), a && r.find(".prop_text").text(a), r.addClass(e).removeClass("fn-hide"), t && (i = setTimeout(function() {
        r.removeClass(e).addClass("fn-hide"), r.find(".prop_h").text(""), r.find(".prop_text").text("")
    }, t)), r.find(".close").on("click", function() {
        clearTimeout(i), r.removeClass(e).addClass("fn-hide"), r.find(".prop_h").text(""), r.find(".prop_text").text("")
    })
}, Yousi_tool.prototype.reg = function() {
    var e = {phone: /^1[3,4,5,7,8][0-9]{1}[0-9]{8}$/,name: /^[A-Za-z0-9]{6,20}$/,safe_code: /^[0-9]{6}$/,realname: /^[\u4e00-\u9fa5]+$/,idcard: /(^[0-9]{17}[0-9xX]$)|(^[0-9]{15}$)/,email: /^[a-z0-9]([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]+(-?[a-z0-9]+)?)(\.[a-z0-9]+(-?[a-z0-9]+))*[\.][a-z]{2,4}$/i,password: /^[A-Za-z0-9]{6,20}$/,number: /^[1-9]+$/,verify: /^[0-9]{5}$/}, t = {phone: {0: "手机号不能为空",1: "手机号码格式错误，请输入11数字位手机号"},name: {0: "账户名不能为空",1: "账户名格式错误，请输入6~20位字母或数字"},safe_code: {0: "安全码不能为空",1: "安全码错误，请输入6位数字"},realname: {0: "姓名不能为空",1: "请输入中文姓名"},idcard: {0: "身份证不能为空",1: "身份证格式错误"},email: {0: "邮箱不能为空",1: "邮箱格式错误"},password: {0: "密码不能为空",1: "密码格式错误，请输入6~20字母或数字"},number: {0: "小时不能为空",1: "小时格式错误，请输入至少1位大于0的数字"},verify: {0: "验证码不能为空",1: "验证码格式有误，请输入5位数字"}};
    return {reg: e,info: t}
}, Yousi_tool.prototype.checkReg = function(e, t, n) {
    var a = this.reg();
    if (n)
        for (i in a.reg)
            a[i] == e && (a.reg[i] = n);
    return "" == t || void 0 == t || 0 == t.length ? a.info[e][0] : a.reg[e].test(t) ? !0 : a.info[e][1]
}, "undefined" != typeof module && module.exports)
    exports.yousi_tool = new Yousi_tool;
else if ("function" == typeof define) {
    var yousi_tool = new Yousi_tool;
    define("common/ys_core", yousi_tool)
} else
    var yousi_tool = new Yousi_tool;
define("common/input", ["jquery", "common/ys_core"], function(e, t) {
    var n = function() {
        e(document).on("blur", "input, textarea", function() {
            if (e(this).attr("required")) {
                var n = e(this).attr("name"), a = e(this).val(), i = t.reg();
                if ((e(this).siblings("input[name=password]").length > 0 || e(this).siblings("input[name=new_password]").length > 0) && (n = "password"), "new_password" == n && (n = "password"), i.reg[n]) {
                    var r = t.checkReg(n, a), o = e(this).parent(".mul_input");
                    r !== !0 ? (e(this).addClass("error").siblings(".errorMsg").text(r), o.length > 0 && e(this).siblings("input").addClass("error")) : (e(this).removeClass("error").siblings(".errorMsg").text(""), o.length > 0 && e(this).siblings("input").removeClass("error"))
                } else
                    "" == a || void 0 == a ? e(this).addClass("error").siblings(".errorMsg").text("不能为空") : e(this).removeClass("error").siblings(".errorMsg").text("")
            }
        }), e("input, textarea").focus(function() {
            e(this).removeClass("error"), e(this).siblings("input").removeClass("error"), e(this).siblings(".errorMsg").text("")
        }), e(".mul_input").on("click", "i", function() {
            var t = e(this).parent();
            t.find("input").toggleClass("fn-hide"), t.find("i.fa").toggleClass("fn-hide")
        }), e(".mul_input").on("keyup", "input", function() {
            e(this).siblings("input").val(e(this).val())
        })
    }();
    return n
}), define("common/radio", ["jquery"], function(e) {
    var t = function() {
        e(document).on("click", "label.radio", function() {
            return e(this).siblings("input").val(e(this).attr("data-value")), e(this).find("i.fa").removeClass("fa-circle-o").addClass("fa-dot-circle-o"), e(this).siblings("label.radio").find("i.fa").removeClass("fa-dot-circle-o").addClass("fa-circle-o"), !1
        })
    }();
    return t
}), define("common/select", ["jquery"], function(e) {
    var t = function() {
        e(document).on("mouseenter", ".select", function() {
            e(this).find(".select_ctn").show()
        }), e(document).on("mouseleave", ".select", function() {
            e(this).find(".select_ctn").hide()
        }), e(document).on("click", ".select .select_ctn li", function() {
            var t = e(this), n = t.parents(".select_ctn");
            setTimeout(function() {
                n.siblings("input[type=hidden]").val(t.attr("data-value")), n.siblings("span").text(t.text()), n.parent(".select").mouseleave()
            }, 0)
        })
    }();
    return t
}), define("common/checked", ["jquery"], function(e) {
    var t = function() {
        e(document).on("click", "span.checked", function() {
            e(this).toggleClass("active");
            var t = e(this).parent().find("span.checked.active"), n = e(this).siblings("input[type=hidden]"), a = [];
            e.each(t, function(t, n) {
                a.push(e(n).attr("data-value"))
            }), n.val(a)
        })
    }();
    return t
}), define("common/prop", ["jquery"], function(e) {
    e(document).on("click", ".prop .close", function() {
        e(this).parent().addClass("fn-hide"), e(".shadow").addClass("fn-hide")
    }), e(document).on("mousedown", "#evaluate .close", function() {
        var t = e("#evaluate").attr("data-type");
        "listen" == t && (location.href = "/student/order/type/valid")
    }), window.alert = function(t, n) {
        if (!e("#alert").length) {
            var a = "";
            a += '<div id="alert" class="alert prop fn-hide">', a += '    <i class="fa fa-times close"></i>', a += '    <div class="switch_title_line">', a += '        <span class="active">提示信息</span>', a += "    </div>", a += '    <div class="ctn">', a += '        <div class="text">', a += "        </div>", a += '        <button class="submit">确定</button>', a += '        <span class="errorMsg"></span>', a += "    </div>", a += "</div>", e("body").append(a)
        }
        var i = e("#alert"), r = i.find(".close"), o = i.find(".switch_title_line span"), s = i.find(".text"), c = i.find(".submit");
        o.html(t), s.html(n), c.on("click", function() {
            r.trigger("click")
        }), i.removeClass("fn-hide"), e(".shadow").removeClass("fn-hide")
    }, window.confirm = function(t, n, a, i, r) {
        if (!e("#confirm").length) {
            var o = "";
            o += '<div id="confirm" class="confirm prop fn-hide" >', o += '    <i class="fa fa-times close"></i>', o += '    <div class="switch_title_line">', o += '        <span class="active"></span>', o += "    </div>", o += '    <div class="ctn clearfix">', o += '        <div class="text"> ', o += "        </div>", o += '        <div class="control fn-clear">', o += '            <button class="fn-left cancel">取消</button>', o += '            <button class="fn-right submit">确定</button>', o += '            <div class="errorMsg fn-right"></div>', o += '            <div class="successMsg fn-right"></div>', o += "        </div>", o += "    </div>", o += "</div>", e("body").append(o)
        }
        var s = e("#confirm"), c = s.find(".close"), u = s.find(".switch_title_line span"), l = s.find(".text"), d = s.find(".errorMsg"), f = s.find(".successMsg"), p = s.find(".submit"), h = s.find(".cancel");
        d.text(""), f.text(""), u.html(t), l.html(n), p.off("click"), p.on("click", function() {
            p.hasClass("disabled") || i(a, p, d, f)
        }), h.on("click", function() {
            r ? r() : c.trigger("click")
        }), s.removeClass("fn-hide"), e(".shadow").removeClass("fn-hide")
    }
}), define("index/createEle", ["jquery"], function(e) {
    var t = function(t) {
        var n = "";
        return e.each(t, function(e) {
            n += 0 == e ? '<span data-value="' + e + '" class="active"></span>' : '<span data-value="' + e + '"></span>'
        }), n
    };
    return {createSlideBtn: t}
}), define("index/slideFunc", ["jquery"], function(e) {
    var t = function(e, t, n, a, i) {
        this.li = e, this.btn = t, this.left = n, this.right = a, this.time = i || 4500, this.slideTime = 500, this.flag = void 0, this.curIndex = 0
    };
    return t.prototype.scroll = function() {
        var t = this, n = t.li.length;
        t.li.eq(0).css({opacity: "1","z-index": "4"}).siblings().css({opacity: "0","z-index": "1"});
        var a = function() {
            var n = t.li.stop(!0, !0).eq(t.curIndex).animate({opacity: "1","z-index": "4"}, t.slideTime).siblings().animate({opacity: "0","z-index": "1"}, t.slideTime).promise(), a = function() {
                t.btn.eq(t.curIndex).addClass("active").siblings().removeClass("active")
            };
            e.when(n.then(a))
        }, i = function() {
            t.flag = setInterval(function() {
                t.curIndex + 1 == n ? t.curIndex = 0 : t.curIndex++, a()
            }, t.time)
        };
        i(), t.btn.on("click", function() {
            clearInterval(t.flag);
            var n = e(this);
            t.curIndex = n.attr("data-value"), a(), i()
        }), t.li.on("mouseenter", function() {
            clearInterval(t.flag)
        }), t.li.on("mouseleave", function() {
            i()
        }), t.left.on("click", function() {
            clearInterval(t.flag), 0 == t.curIndex ? t.curIndex = n - 1 : t.curIndex--, a(), i()
        }), t.right.on("click", function() {
            clearInterval(t.flag), t.curIndex == n - 1 ? t.curIndex = 0 : t.curIndex++, a(), i()
        })
    }, t
}), define("common/ajaxRequest", ["jquery"], function(e) {
    var t = function(t, n, a) {
        var i = e.Deferred();
        return e.ajax({type: a || "POST",url: t,data: n,success: i.resolve,error: i.reject}), i.promise()
    };
    return t
}), define("common/doAjax", ["jquery", "common/ajaxRequest"], function(e, t) {
    var n = function(e) {
        if (!e.before || e.before()) {
            var n = t(e.url, e.data, e.type);
            n.done(function(t) {
                200 == t.code ? e.done(t) : e.fail && e.fail(t)
            }).fail(function(t) {
                e.fail && (t.desc = "网络请求有错误，请重试", e.fail(t))
            })
        }
    };
    return n
}), define("common/point", ["jquery"], function(e) {
    var t = function(e, t, n) {
        this.type = e, this.text = t, this.time = n || 2e3, this.flag = void 0
    };
    return t.prototype.createEle = function() {
        var t = this, n = e("<div></div>");
        n.text(t.text), "add" == t.type ? n.addClass("prop_points add") : "minus" == t.type && n.addClass("prop_points minus"), e(".points").length > 0 ? e(".points").eq(0).before(n) : e("body").append(n), n.css("margin-left", -1 * n.width() / 2), setTimeout(function() {
            n.animate({top: "0",opacity: "0"}, 300, function() {
                n.remove()
            })
        }, t.time)
    }, window.Point = t, t
}), define("login/login", ["jquery", "common/doAjax", "common/ys_core", "common/point"], function(e, t, n, a) {
    var i = function(e, i) {
        if (!e.find(".submit").hasClass("disabled")) {
            var r = e, o = e.find(".submit"), s = o.text(), c = r.find("input[name=phone]"), u = r.find("input[name=password]"), l = u.siblings("input.txt"), d = c.siblings(".errorMsg"), f = u.siblings(".errorMsg"), p = o.siblings(".errorMsg"), h = c.val(), m = u.val(), v = function() {
                d.text(""), f.text(""), p.text(""), c.removeClass("error"), u.removeClass("error"), l.removeClass("error");
                var e = n.checkReg("phone", h), t = n.checkReg("password", m);
                return e !== !0 ? (d.text(e), c.addClass("error"), !1) : t !== !0 ? (f.text(t), u.addClass("error"), l.addClass("error"), !1) : (o.text("登录中").addClass("disabled"), !0)
            }, g = function(e) {
                if (e.data.score) {
                    var t = new a(e.data.score.type, e.data.score.info);
                    t.createEle(), setTimeout(function() {
                        location.href = e.data.url
                    }, 2500)
                } else
                    location.href = e.data.url
            }, b = function(e) {
                p.text(e.desc), o.text(s).removeClass("disabled")
            };
            t({before: v,url: i,data: {name: h,pwd: m},done: g,fail: b})
        }
    };
    return i
}), define("common/countDown", ["jquery"], function() {
    var e = function(e, t, n) {
        this.time = n || 120, this.flag = void 0, this.proFunc = e, this.sucFunc = t
    };
    return e.prototype.start = function() {
        var e = this;
        e.time--, e.time > -1 ? (e.proFunc(), e.flag = setTimeout(function() {
            e.start()
        }, 1e3)) : (e.sucFunc(), clearTimeout(e.flag))
    }, e
}), define("login/register", ["jquery", "common/doAjax", "common/ys_core", "common/countDown"], function(e, t, n) {
    var a = function(e, a) {
        if (!e.find(".submit").hasClass("disabled")) {
            var i = e, r = e.find(".submit"), o = r.text(), s = i.find("input[name=inschool]"), c = i.find("input[name=phone]"), u = i.find("input[name=verify]"), l = i.find("input[name=password]"), d = l.siblings("input.txt"), f = c.siblings(".errorMsg"), p = i.find(".verifyMsg"), h = u.siblings(".errorMsg"), m = l.siblings(".errorMsg"), v = r.siblings(".errorMsg"), g = c.val(), b = u.val(), y = l.val(), x = s.val(), _ = function() {
                f.text(""), h.text(""), m.text(""), v.text(""), p.text(""), c.removeClass("error"), l.removeClass("error"), u.removeClass("error"), d.removeClass("error");
                var e = n.checkReg("phone", g), t = n.checkReg("verify", b), a = n.checkReg("password", y);
                return !s.length || "" != x && void 0 != x ? e !== !0 ? (f.text(e), c.addClass("error"), !1) : t !== !0 ? (h.text(t), u.addClass("error"), !1) : a !== !0 ? (m.text(a), l.addClass("error"), d.addClass("error"), !1) : (r.text("请求中").addClass("disabled"), !0) : (v.text("请选择学校"), !1)
            }, k = function(e) {
                e.data.score || (location.href = e.data.url)
            }, C = function(e) {
                v.text(e.desc), r.text(o).removeClass("disabled")
            };
            t({before: _,url: a,data: {phone: g,verify: b,pwd: y,inschool: x},done: k,fail: C})
        }
    };
    return a
}), define("login/getVerify", ["jquery", "common/doAjax", "common/ys_core", "common/countDown"], function(e, t, n, a) {
    var i = function(e, i) {
        if (!e.hasClass("disabled")) {
            var r = e.parents(".form"), o = e.text(), s = r.find("input[name=phone]"), c = r.find("input[name=verify]"), u = s.siblings(".errorMsg"), l = c.siblings(".errorMsg"), d = r.find(".verifyMsg"), f = s.val(), p = function() {
                if (u.text(""), l.text(""), s.removeClass("error"), r.find("input[name=phone]").length) {
                    var t = n.checkReg("phone", f);
                    if (t !== !0)
                        return u.text(t), s.addClass("error"), !1
                }
                return e.text("请求中").addClass("disabled"), !0
            }, h = function(t) {
                d.text("");
                var n = new a(function() {
                    e.text(this.time + "后再次获取")
                }, function() {
                    e.removeClass("disabled").text(o)
                });
                n.start(), d.text(t.data.content)
            }, m = function(t) {
                r.find("input[name=phone]").length ? u.text(t.desc) : l.text(t.desc), e.text(o).removeClass("disabled")
            };
            t({before: p,url: i,data: {phone: f},done: h,fail: m})
        }
    };
    return i
}), define("common/checkBrower", [], function() {
    return browser = {versions: function() {
            {
                var e = navigator.userAgent;
                navigator.appVersion
            }
            return {trident: e.indexOf("Trident") > -1,presto: e.indexOf("Presto") > -1,webKit: e.indexOf("AppleWebKit") > -1,gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),mobile: !!e.match(/AppleWebKit.*Mobile.*/),ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,iPhone: e.indexOf("iPhone") > -1,iPad: e.indexOf("iPad") > -1,webApp: -1 == e.indexOf("Safari"),weixin: e.indexOf("MicroMessenger") > -1,qq: " qq" == e.match(/\sQQ/i)}
        }(),language: (navigator.browserLanguage || navigator.language).toLowerCase()}
}), define("release/price_one_hour", ["jquery"], function(e) {
    var t = function() {
        var t = e("input[name=subject_category]").val() || 0, n = e("input[name=special_requirement]").val(), a = parseInt(e("input[name=directnumber]").val()), i = parseInt(e("input[name=add_price]").val()), r = parseInt(e("input[name=self_price]").val()), o = e(".select_grade span").text(), s = parseInt(e("input[name=schools_price]").val()) || 0, c = "", u = 0;
        if (0 != s) {
            if ("0" == t) {
                var l = 0;
                if (l = s, c += " (<small>" + o + "</small> " + l, u += parseFloat(l), "" != n && void 0 != n && "{}" != n) {
                    n = JSON.parse(n);
                    for (var d in n)
                        c += " + <small>" + n[d] + "</small>" + d, u += parseFloat(d)
                }
                "" != i && void 0 != i && "0" != i && (c += " + <small>加价</small> " + i, u += parseFloat(i))
            } else
                c += "(<small>自主定价</small>" + r, u += r;
            a > 1 && (c += " + <small>多人辅导</small> " + u * (parseFloat(a) - 1) / 2, u += parseFloat(u * (parseFloat(a) - 1) / 2)), e("#step2 .edit .total_price, #step2 .show .total_price").html("<strong>" + u + "元</strong>" + c + ") *小时数")
        }
    };
    return t
}), define("release/subject_releative_isshow", ["jquery"], function(e) {
    var t = function() {
        var t = e("#main_subject"), n = e("#step2 .edit"), a = t.find(".main_subject_title input").val() || 0;
        0 == a ? (n.find("dl.specail_subject, dl.add_price").removeClass("fn-hide"), n.find("dl.self_price").addClass("fn-hide")) : (n.find("dl.specail_subject, dl.add_price").addClass("fn-hide"), n.find("dl.self_price").removeClass("fn-hide"))
    };
    return t
}), define("release/subject_setValue", ["jquery", "release/subject_releative_isshow"], function(e) {
    var t = function() {
        setTimeout(function() {
            var t = e("#main_subject"), n = t.find(".main_subject_title"), a = n.find("input[name=subject_category]") || 0, i = (t.find(".main_subject_ctn"), t.find("input[name=subject]")), r = t.find("span.checked.active"), o = {};
            4 == a.val() ? o[a.val()] = t.find("input[name=othersSubjectText]").val() : e.each(r, function(n, a) {
                o[e(a).attr("data-value")] = "42" == e(a).attr("data-value") ? t.find("input[name=othersSubjectText]").val() : e.trim(e(a).text()), e(a).siblings(".errorMsg").text(n > 1 ? "勾选科目超过2门，建议分开下单" : "")
            }), i.val(JSON.stringify(o))
        }, 3)
    };
    return t
}), define("release/subject_specail_setvalue", ["jquery"], function(e) {
    var t = function() {
        var t = e("#step2").find("input[name=special_id]"), n = t.parent().find("span.active");
        for (len = n.length, obj = []; len > 0; len--)
            obj.push(n.eq(len - 1).attr("data-id"));
        t.val(obj)
    }, n = function() {
        var t = e("#step2").find("input[name=special_requirement]"), n = t.parent().find("span.active");
        for (len = n.length, obj = {}; len > 0; len--)
            obj[n.eq(len - 1).attr("data-value")] = e.trim(n.eq(len - 1).text());
        t.val(JSON.stringify(obj))
    };
    return {setSpecialID: t,setSpecialValue: n}
}), define("release/release", ["jquery", "common/doAjax", "release/price_one_hour", "release/subject_setValue", "release/subject_specail_setvalue"], function(e, t, n, a, i) {
    e(".release .step .swicth_edit_show").click(function() {
        return e(this).parent("h2").siblings(".edit").removeClass("fn-hide").siblings(".show").addClass("fn-hide"), e(this).addClass("fn-hide"), e("#submitWrap").addClass("fn-hide"), !1
    }), e(document).on("click", ".select_add_price li", function() {
        setTimeout(function() {
            n()
        }, 5)
    }), e(document).on("click", ".mul_person_select li", function() {
        setTimeout(function() {
            n()
        }, 5)
    }), e(document).on("click", ".specail_subject span.checked", function() {
        setTimeout(function() {
            i.setSpecialID(), i.setSpecialValue(), setTimeout(function() {
                n()
            }, 5)
        }, 2)
    }), e(document).on("click", ".select_add_price li", function() {
        setTimeout(function() {
            n()
        }, 5)
    }), e(".release_school").on("click", "span.checked", function() {
        setTimeout(function() {
            var t = e(".release_school span.checked.active"), a = 0;
            e.each(t, function(t, n) {
                parseInt(e(n).attr("data-price")) > a && (a = parseInt(e(n).attr("data-price")))
            }), e("input[name=schools_price]").val(a), setTimeout(function() {
                n()
            }, 5)
        }, 1)
    })
}), define("release/step1_show", ["jquery"], function(e) {
    var t = function() {
        var t = e("#step1"), n = e("input[name=nickname]").val(), a = e("input[name=parentname]").val(), i = t.find(".radio .fa-dot-circle-o").parent().text(), r = e("input[name=grade]").siblings("span").text(), o = e("input[name=phone]").val(), s = e(".address_span span").text(), c = t.find(".show");
        c.find(".name").text(n), c.find(".parentname").text(a), c.find(".sex").text(i), c.find(".grade").text(r), c.find(".phone").text(o), c.find(".address").text(s), t.find(".edit").addClass("fn-hide"), t.find(".guide").addClass("active"), t.find(".swicth_edit_show").removeClass("fn-hide"), c.removeClass("fn-hide")
    };
    return t
}), define("release/get_subject", ["jquery", "common/doAjax"], function(e, t) {
    var n = function() {
        var n = e("input[name=grade]").val(), a = e("input[name=subject_category]").val();
        t({done: function(t) {
                var n = '<input type="hidden" name="subject">';
                e.each(t.data, function(e, t) {
                    n += '<span class="checked" data-value="' + t.id + '"><i class="fa fa-check-square-o"></i><i class="fa fa-square-o"></i>' + t.name + "</span>", 42 == t.id && (n += '<input type="text" name="othersSubjectText" placeholder="最长10个汉字或20个字母" class="subject_others">')
                }), n += '<p class="errorMsg"></p>', e("#main_subject").html(n), "0" == a && e("input[name=subject]").val("")
            },fail: function(e) {
                alert("获取科目失败", e.desc)
            },url: "/Account/getSubjects",data: {grade: n}})
    };
    return n
}), define("release/create_schools", ["jquery"], function(e) {
    var t = function(t) {
        e("#release_school_price_tips").siblings("span").remove();
        var n = "";
        e.each(t, function(e, t) {
            n += '<span data-value="' + t.id + '" data-price="' + t.price + '" class="checked">', n += '<i class="fa fa-check-square-o"></i>', n += '<i class="fa fa-square-o"></i>', n += t.name + "(" + t.price + "元/时)", n += "</span>"
        }), e("#release_school_price_tips").before(n)
    };
    return t
}), define("release/step1_submit", ["jquery", "common/ys_core", "common/doAjax", "release/step1_show", "release/get_subject", "release/create_schools"], function(e, t, n, a, i, r) {
    e("#step1 .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var o = e("input[name=nickname]").val(), s = e("input[name=parentname]").val(), c = (e("input[name=student_sex]").val(), e("input[name=grade]").val()), u = e("input[name=phone]").val(), l = e("input[name=address]").val(), d = (e("input[name=coordinate]").val(), e("input[name=province]").val(), e("input[name=city]").val(), e("input[name=area]").val(), e("input[name=checkteachers]").val()), f = e(this), p = (f.text(), f.siblings(".errorMsg"));
            n({before: function() {
                    if (p.text(""), "" == o || void 0 == o)
                        return p.text("姓名不能为空"), !1;
                    if ("" == s || void 0 == s)
                        return p.text("父母姓名不能为空"), !1;
                    var e = t.checkReg("phone", u);
                    return 1 != e ? (p.text(e), !1) : "" == l || void 0 == l ? (p.text("地址不能为空"), !1) : (f.addClass("disabled"), !0)
                },done: function(t) {
                    console.log(t), f.removeClass("disabled"), i(), a(), e("#step2 .edit").removeClass("fn-hide"), e("#step2 .show").addClass("fn-hide"), e("#step2 .edit .total_price").html("<strong>0元</strong>"), "" != d && void 0 != d ? 0 == t.data[0].desc ? e("input[name=schools_price]").val(t.data[0].price) : alert("提示", t.data[0].desc) : r(t.data)
                },fail: function() {
                    f.removeClass("disabled")
                },url: "/student/getSchoolPrice",data: {grade: c,tid: d}})
        }
    })
}), define("release/subject_chose", ["jquery", "release/subject_setValue", "release/price_one_hour"], function(e, t, n) {
    e(document).on("click", "#main_subject span.checked", function() {
        var a = e(this);
        setTimeout(function() {
            var i = a.siblings(".errorMsg"), r = e("#main_subject input[name=othersSubjectText]");
            i.text(""), r.removeClass("error"), "42" == a.attr("data-value") ? a.hasClass("active") ? e("input[name=othersSubjectText]").focus() : (e("input[name=othersSubjectText]").val(""), e("input[name=othersSubjectText]").siblings(".errorMsg").text(""), e("input[name=othersSubjectText]").attr("flag", "true"), t(), setTimeout(function() {
                n()
            }, 5)) : (t(), setTimeout(function() {
                n()
            }, 5)), e(".subject_wrap span.active").length > 2 && i.text("您辅导科目过多，建议您按文理科分两个订单发布")
        }, 3)
    }), e(document).on("blur", "#main_subject input[name=othersSubjectText]", function() {
        var a = e(this), i = e.trim(a.val()), r = a.siblings(".errorMsg");
        r.text(""), a.removeClass("error"), e("#main_subject input[name=subject]").val(""), "" == i || void 0 == i ? (e("input[name=othersSubjectText]").prev().removeClass("active"), e("input[name=othersSubjectText]").attr("flag", "true"), t()) : i.replace(/[^\x00-\xff]/g, "**").length > 20 ? (r.text("最长10个汉字或20个字母"), e("input[name=othersSubjectText]").attr("flag", "false"), a.addClass("error")) : (e("input[name=othersSubjectText]").attr("flag", "true"), e("#main_subject").find(".errorMsg").text(""), t(), setTimeout(function() {
            n()
        }, 5))
    }), e(document).on("focus", "#main_subject input[name=othersSubjectText]", function() {
        var t = e(this);
        setTimeout(function() {
            if (e("input[name=othersSubjectText]").prev().addClass("active"), e(".subject_wrap span.active").length > 2) {
                var n = t.siblings(".errorMsg");
                n.text("您辅导科目过多，建议您按文理科分两个订单发布")
            }
        }, 3)
    })
}), define("release/subject_set_txt", ["jquery"], function() {
    var e = function(e) {
        var t = e.val(), n = [];
        if ("" == t || void 0 == t || "{}" == t)
            return "";
        var a = JSON.parse(t);
        for (var i in a)
            n.push(a[i]);
        return n.join("，")
    };
    return e
}), define("release/step2_show", ["jquery", "release/subject_set_txt"], function(e, t) {
    var n = function() {
        var n = e("#step2"), a = e("input[name=checkteachers]").val(), i = e("input[name=teacher_sex]").val(), r = e("input[name=subject_category]").val() || 0, o = e("textarea[name=requirement_decs]").val(), s = e("input[name=directnumber]").val(), c = e("input[name=schools_price]").siblings("span.checked.active"), u = e("input[name=add_price]").val(), l = e("input[name=self_price]").val(), i = e("input[name=teacher_sex]").parent().find(".fa-dot-circle-o").parent().text(), d = "", f = "", p = n.find(".show");
        if (d = t(e("input[name=subject]")), 0 != s ? (p.find(".directnumber").text(s + "人"), p.find(".directnumber").parent().removeClass("fn-hide")) : p.find(".directnumber").parent().addClass("fn-hide"), f = t(e("input[name=special_requirement]")), "" != a && void 0 != a && p.find(".appoint_tutor").removeClass("fn-hide").find("dd").text(e("input[name=checkteachers]").siblings(".fn-right").find("h4 a").text()), p.find(".appoint_tutor_sex dd").text(e.trim(i)), 0 == r ? p.find(".self_price_show").addClass("fn-hide") : p.find(".self_price_show").removeClass("fn-hide").text("<strong>" + l + "</strong>元/小时"), p.find(".subject").text(d), p.find(".desc").text(o), 0 != u ? (p.find(".addPrice dd").text("+" + u + "元/小时"), p.find(".addPrice").removeClass("fn-hide")) : p.find(".addPrice").addClass("fn-hide"), p.find(".special").text("" == f ? "无" : f), c.length) {
            var h = "";
            e.each(c, function(t, n) {
                h += e.trim(e(n).text())
            }), p.find(".schoolsstr").text(h)
        }
    };
    return n
}), define("release/step2_submit", ["jquery", "common/ys_core", "release/step2_show"], function(e, t, n) {
    e("#step2 .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var t = (e("input[name=teacher_sex]").val(), e("input[name=subject]").val()), a = e("input[name=othersSubjectText]").attr("flag"), i = (e("input[name=special_id]").val(), e("input[name=directnumber]").val(), e("input[name=add_price]").val(), e("input[name=schools]").val()), r = e("textarea[name=requirement_decs]").val(), o = e(this), s = o.siblings(".errorMsg");
            return s.text(""), "false" == a ? (s.text("辅导科目选择有误"), !1) : "{}" == t || "" == t || void 0 == t ? (s.text("辅导科目不能为空"), !1) : "" == r || void 0 == r ? (s.text("详细需求要求不能为空"), !1) : "" == i || void 0 == i ? (s.text("必须勾选发布高校"), !1) : (n(), e("#step2 .edit").addClass("fn-hide"), e("#step2 .show").removeClass("fn-hide"), e("#step2 .swicth_edit_show").removeClass("fn-hide"), e("#step2 .guide").addClass("active"), e("#step1 .edit").hasClass("fn-hide") && e(".total_submit").removeClass("fn-hide"), void 0)
        }
    })
}), define("release/submit", ["jquery", "common/doAjax"], function(e, t) {
    e("#submitWrap .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e(this), a = n.text();
            data = {}, errorMsg = n.siblings(".errorMsg"), checkteachers = e("input[name=checkteachers]").val() || 0, schools = e("input[name=schools]").val(), teach_subject = e("input[name=subject]").val(), sex = e("input[name=teacher_sex]").val(), add_price = e("input[name=add_price]").val(), special_requirement = e("input[name=special_id]").val(), directnumber = e("input[name=directnumber]").val(), nickname = e("input[name=nickname]").val(), parentname = e("input[name=parentname]").val(), student_sex = e("input[name=student_sex]").val(), grade = e("input[name=grade]").val(), s_sex = e("input[name=s_sex]").val(), phone = e("input[name=phone]").val(), address = e("input[name=address]").val(), coordinate = e("input[name=coordinate]").val(), province = e("input[name=province]").val(), city = e("input[name=city]").val(), area = e("input[name=area]").val(), requirement_decs = e("textarea[name=requirement_decs]").val(), t({before: function() {
                    return n.text("提交中").addClass("disabled"), !0
                },done: function(e) {
                    location.href = "/student/pay/type/listen/rid/" + e.data.rid + "/order/" + e.data.order, n.text(a).removeClass("disabled")
                },fail: function() {
                    errorMsg.text(data.desc), n.text(a).removeClass("disabled")
                },url: "/StudentOrder/makeDemandOrder",data: {checkteachers: checkteachers,schools: schools,teach_subject: teach_subject,sex: sex,add_price: add_price,special_requirement: special_requirement,directnumber: directnumber,requirement_decs: requirement_decs,nickname: nickname,parentname: parentname,student_sex: student_sex,grade: grade,phone: phone,address: address,coordinate: coordinate,province: province,city: city,msex: s_sex,area: area}})
        }
    })
}), define("tutor_info/scroll", ["jquery"], function(e) {
    var t = [], n = function(n) {
        t = n || t;
        var a = e(document).scrollTop(), i = (e(".main .inner").offset().top, e("#scroll_title"));
        if (a > 440 ? i.css("position", "fixed") : i.css("position", "relative"), e.each(t, function(t, n) {
            var i = e("#" + n).offset().top, r = parseInt(e("#" + n).css("padding-top")) + 6;
            a >= i - r && e("#scroll_title span").eq(t).addClass("active").siblings("span").removeClass("active")
        }), e("#tutor_info_appoint_top").length) {
            var r = e("#tutor_info_appoint_top").offset().top + e("#tutor_info_appoint_top").height();
            a > r ? e("#appoint_tutor_bottom").addClass("active") : e("#appoint_tutor_bottom").removeClass("active")
        }
    }, a = function() {
        e(document).scroll(function() {
            n()
        })
    };
    return e("#scroll_title").on("click", "span", function() {
        var t = e(this), n = t.attr("data-id"), a = e("#scroll_title").css("position"), i = e("#scroll_title").height();
        return t.addClass("active").siblings().removeClass("active"), e("body, html").animate("relative" == a ? {scrollTop: e("#" + n).offset().top - i - 40} : {scrollTop: e("#" + n).offset().top - i}), !1
    }), {init: n,scroll: a}
}), define("common/createPage", ["jquery"], function(e) {
    var t = function(t, i) {
        t = parseInt(t), i = parseInt(i);
        var r = e("<div></div>");
        return r.append(e('<a class="noborder" href="#" data-index="prev">上一页</a>')), 11 > i ? n(1, i, r, t) : 5 > t ? (n(1, t + 1, r, t), a(r), n(i - 1, i, r, t)) : t >= 5 && i - 5 >= t ? (n(1, 2, r, t), a(r), n(t - 1, t + 1, r, t), a(r), n(i - 1, i, r, t)) : t > i - 5 && (n(1, 2, r, t), a(r), n(t - 1, i, r, t)), r.append(e('<a class="noborder" data-value="next" href="#">下一页</a>')), r
    }, n = function(t, n, a, i) {
        for (var r = t; n >= r; r++) {
            var o = e('<a href="#"></a>');
            o.attr("data-index", r), o.text(r), r == i && o.addClass("current"), a.append(o)
        }
    }, a = function(e) {
        e.append("...")
    };
    return t
}), define("tutor_info/getEvaluate", ["jquery", "common/doAjax", "common/createPage"], function(e, t, n) {
    var a = {index: 1,total: 1}, i = function(e) {
        var t = "", n = void 0;
        return n = "" != e.photo && void 0 != e.photo ? e.photo : "/Public/images/member_default.png", t += '<li class="fn-clear">', t += ' <div class="fn-left">', t += "      <img src=" + n + ' width="82" height="82" alt="' + e.name + '">', t += e.name + "家长", t += "    </div>", t += ' <div class="fn-right">', t += '     <div class="top fn-clear">', t += '         <div class="top_left fn-left">', t += e.subject, t += "         </div>", t += '         <div class="top_mid fn-left">', t += r(e.star), t += "          </div>", t += '         <div class="top_right fn-right">', t += e.time, t += "          </div>", t += "     </div>", t += '     <div class="evalute_ctn">', t += e.info, t += "     </div>", t += " </div>", t += "</li>"
    }, r = function(e) {
        for (var t = "", n = 0; 5 > n; n++)
            t += e > n ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
        return t
    }, o = function(r) {
        var o = e("input[name=checkteachers]").val();
        t({type: "GET",done: function(t) {
                a.index = t.data.p, a.total = t.data.totalPage;
                var o = t.data.list, s = e("#evalute_ctn ul");
                s.html(""), o.length ? (e("#evalute_ctn .placeholders").addClass("fn-hide"), e.each(o, function(e, t) {
                    s.append(i(t))
                }), e("#evaluePage").html(a.total < 2 ? "" : n(a.index, a.total)), "init" != r && e("#scroll_title span").eq(3).trigger("click")) : e("#evalute_ctn .placeholders").removeClass("fn-hide")
            },fail: function(e) {
                alert(e.desc)
            },url: "/account/getAppraise",data: {tid: o,p: a.index}})
    }, s = function() {
        o("init")
    }, c = function() {
        parseInt(a.index) + 1 > a.total || (a.index++, o())
    }, u = function() {
        1 != a.index && (a.index--, o())
    }, l = function(e) {
        a.index = parseInt(e), o()
    };
    return {init: s,next: c,prev: u,jump: l}
}), define("app/app", ["jquery"], function(e) {
    e("#app #tutor_icon .demand_icon").click(function() {
        e("#app #tutor_icon, #app #tutor_ctn, #app #tutor_pic").addClass("fn-hide"), e("#app #parent_icon, #app #parent_ctn, #app #parent_pic").removeClass("fn-hide")
    }), e("#app #parent_icon .tutor_icon").click(function() {
        e("#app #tutor_icon, #app #tutor_ctn, #app #tutor_pic").removeClass("fn-hide"), e("#app #parent_icon, #app #parent_ctn, #app #parent_pic").addClass("fn-hide")
    }), setTimeout(function() {
        var t = e("input[name=tutorFlag]");
        t.length > 0 && e("#app #parent_icon .tutor_icon").trigger("click")
    }, 0)
}), define("other/other", ["jquery", "common/countDown"], function(e, t) {
    var n = e(".noajax_page_count");
    if (e(".noajax_page_count").length) {
        var a = new t(function() {
            n.text(this.time)
        }, function() {
            n.text(0), location.href = history.back(-1)
        }, 4);
        a.start()
    }
}), define("tutors/mul_filter", ["jquery"], function(e) {
    !function() {
        if (0 != e(".filter input[name=subject]").length) {
            var t = e(".filter input[name=subject]").val(), n = e(".filter input[name=subject]").siblings("a"), a = t.split(",");
            e.each(a, function(t, a) {
                e.each(n, function(t, n) {
                    a == e(n).find("span").attr("data-value") && (e(n).addClass("active"), e(n).find("span").addClass("active"))
                })
            })
        }
    }();
    e(document).on("click", ".filter .mul_btn", function() {
        return e(this).parent().addClass("mul_active"), e(this).parent().animate({height: "95px"}, 300), !1
    }), e(document).on("click", ".filter .mul_control .cancel", function() {
        return console.log("2222222"), e(this).parent().parent().removeClass("mul_active"), e(this).parent().parent().animate({height: "30px"}, 300), !1
    }), e(document).on("click", ".mul_active a", function() {
        var t = e(this).find("span");
        return t.trigger("click"), !1
    }), e(document).on("click", ".mul_active a span", function() {
        return !1
    }), e(document).on("click", ".filter .mul_control .submit", function() {
        var t = e(this).parents(".mul_active"), n = t.find("span.active"), a = [];
        if (0 != n.length) {
            e.each(n, function(t, n) {
                a.push(e(n).attr("data-value"))
            }), console.log(location.href);
            var i = location.href, r = i.match(/^(http).*(subject\/)/), o = i.match(/(\/sex).*/);
            return location.href = r[0] + a.join(",") + o[0], !1
        }
    }), e(document).on("click", ".filter .get_more", function() {
        var t = e(this), n = t.parent();
        return 30 == n.height() ? (n.animate({height: "54px"}, 300), t.text("缩回>")) : (n.animate({height: "30px"}, 300), t.text("更多>")), !1
    })
}), define("tutors/gotoBack", ["jquery"], function(e) {
    e("#tutors_goto_top").click(function() {
        e("body, html").animate({scrollTop: 0}, 300)
    }), e(document).scroll(function() {
        var t = e(document).scrollTop();
        t > 690 ? e("#tutors_goto_top").removeClass("fn-hide") : e("#tutors_goto_top").addClass("fn-hide")
    })
}), define("tutors/change_address", ["jquery", "common/doAjax"], function(e, t) {
    e("#tutors_edit_map").click(function() {
        return e(".shadow, #tutors_map").removeClass("fn-hide"), e("#tutors_map input[name=searchMap]").focus(), !1
    }), e("#tutors_map .submit").click(function() {
        var n = e("#tutors_map"), a = e(this), i = a.text(), r = a.siblings(".errorMsg"), o = n.find("input[name=address]").val(), s = n.find("input[name=coordinate]").val(), c = n.find("input[name=province]").val(), u = n.find("input[name=city]").val(), l = n.find("input[name=area]").val();
        t({before: function() {
                return r.text(""), "" == o || void 0 == o ? (r.text("请编辑地址后再提交"), !1) : (a.text("提交中").addClass("disabled"), !0)
            },done: function() {
                e("#tutors_address").text(o), window.location.reload()
            },fail: function(e) {
                r.text(e.desc), a.text(i).removeClass("disabled")
            },url: "/student/updaddress",data: {address: o,coordinate: s,province: c,city: u,area: l}})
    })
}), define("finance/switch", ["jquery"], function(e) {
    e("#add_account_btn").click(function() {
        e("#add_account_show, .shadow").removeClass("fn-hide")
    }), e("#add_account_show .switch").click(function() {
        return e(this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up"), e("#account_bank_list").toggleClass("fn-hide"), !1
    }), e("#account_bank_list").on("click", "li", function() {
        var t = e(this), n = t.attr("data-bank"), a = t.attr("data-bank-code");
        "alipay" == a ? e(".account_city, .account_bank").addClass("fn-hide") : e(".account_city, .account_bank").removeClass("fn-hide"), e("input[name=banklogo]").val(n), e("input[name=banktype]").val(a), e("#add_account_show .default em").removeAttr("class").addClass("banklogo").addClass(n), e("#account_bank_list").addClass("fn-hide")
    })
}), define("finance/switch_bank", ["jquery", "common/doAjax"], function(e, t) {
    e("#account-list").on("click", "tr td.width-1", function() {
        var n = e(this), a = n.parent(), i = a.attr("data-value"), r = e(".loading");
        t({before: function() {
                return r.removeClass("fn-hide"), !0
            },done: function() {
                e("#account-list td.width-1 i").removeClass("fa-dot-circle-o").addClass("fa-circle-o"), n.find("i").removeClass("fa-circle-o").addClass("fa-dot-circle-o"), r.addClass("fn-hide")
            },fail: function() {
                r.addClass("fn-hide")
            },url: "/teacher/setBankAccountDefault",data: {account: i}})
    })
}), define("finance/bank", {alipay: "zfbLogo",CMB: "zhaoshangbankLogo",CCB: "jianshebankLogo",ICBCB2C: "gongshangbankLogo",GDB: "guangfabankLogo",BOCB2C: "zhongguobankLogo",SPDB: "shanghaipudongbankLogo",POSTGC: "youzhengbankLogo",ABC: "zhongguonongyebankLogo",CIB: "xingyebankLogo",FDB: "fudianbankLogo",CITIC: "zhongxinbankLogo",HZCBB2C: "hangzhoubankLogo",SHBANK: "shanghaibankLogo",NBBANK: "ningbobankLogo",SPABANK: "pingankLogo","CMB-DEBIT": "zhaoshangbankLogo","CCB-DEBIT": "jianshebankLogo","ICBC-DEBIT": "gongshangbankLogo","COMM-DEBIT": "jiaotongbankLogo","GDB-DEBIT": "guangfabankLogo","BOC-DEBIT": "zhongguobankLogo","CEB-DEBIT": "guangdabankLogo","SPDB-DEBIT": "shanghaipudongbankLogo","PSBC-DEBIT": "youzhengbankLogo",BJBANK: "beijingbankLogo",SHRCB: "shanghainongshangbankLogo","WZCBB2C-DEBIT": "wenzhoubankLogo",CMBC: "minshengbankLogo",BJRCB: "beijingshangyebankLogo"}), define("finance/add_bank", ["jquery", "common/doAjax", "finance/bank"], function(e, t, n) {
    e("#add_account_show .submit").click(function() {
        var n = e("input[name=account_name]").val(), a = e("input[name=account_no]").val(), i = e("input[name=account_city]").val(), r = e("input[name=account_brance]").val(), o = e("input[name=banktype]").val(), s = e("input[name=banklogo]").val(), c = e(this), u = c.text(), l = c.siblings(".errorMsg"), d = {};
        d = "alipay" == o ? {account_name: n,account_no: a,banktype: o,banklogo: s} : {account_city: i,account_brance: r,account_name: n,account_no: a,banktype: o,banklogo: s}, t({before: function() {
                if (l.text(""), "" == a || void 0 == a)
                    return l.text("账户号码不能为空"), !1;
                if ("" == n || void 0 == n)
                    return l.text("账户姓名不能为空"), !1;
                if ("alipay" != o) {
                    if ("" == i || void 0 == i)
                        return l.text("开户城市不能为空"), !1;
                    if ("" == r || void 0 == r)
                        return l.text("开户支行不能为空"), !1
                }
                return c.text("添加中").addClass("disabled"), !0
            },done: function() {
                window.location.reload(), e(".prop .close").trigger("click"), c.text(u).removeClass("disabled")
            },fail: function(e) {
                l.text(e.desc), c.text(u).removeClass("disabled")
            },url: "/teacher/addBankAccount",data: d})
    });
    !function() {
        var t = e("em.banklogo");
        e.each(t, function(t, a) {
            var i = e(a).attr("data-value");
            n[i] && (e(a).attr("class", "banklogo"), e(a).addClass(n[i]))
        })
    }()
}), define("finance/delete_bank", ["jquery", "common/doAjax"], function(e, t) {
    e(document).on("click", "#account-list tr i.close", function() {
        var t = e(this).parents("tr").attr("data-value");
        return confirm("删除银行账户", "删除后不可恢复，确定要删除该银行账户吗？", {id: t}, n), !1
    });
    var n = function(e, n, a, i) {
        t({before: function() {
                return a.text(""), i.text(""), n.addClass("disabled"), !0
            },done: function() {
                i.text("删除成功"), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },fail: function(e) {
                a.text(e.desc), n.removeClass("disabled")
            },url: "/teacher/deleteBankAccount",data: {bank: e.id}})
    }
}), define("finance/submit", ["jquery", "common/doAjax"], function(e, t) {
    e("#withdraw_btn").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e(this), a = n.text(), i = n.siblings(".errorMsg"), r = e("input[name=amount]").val(), o = e("input[name=verify]").val(), s = parseInt(e("#access_money").text()), i = n.siblings(".errorMsg"), c = n.siblings(".successMsg");
            t({before: function() {
                    if (i.text(""), "" == r || void 0 == r)
                        return i.text("请输入提现金额"), !1;
                    if (r = parseInt(r), !r && 0 !== r)
                        return i.text("提现金额必须为数字"), !1;
                    if (0 >= r)
                        return i.text("提现金额必须大于0"), !1;
                    if (r > s)
                        return i.text("提现金额不能大于可提现金额"), !1;
                    var e = yousi_tool.checkReg("verify", o);
                    return e !== !0 ? (i.text(e), !1) : (n.text("申请中").addClass("disabled"), !0)
                },done: function() {
                    c.text("申请成功处理中，请耐心等待"), location.href = "/teacher/applylist.html"
                },fail: function(e) {
                    i.text(e.desc), n.text(a).removeClass("disabled")
                },url: "/teacher/getMoney",data: {verify: o,amount: r}})
        }
    })
}), define("order/order_accept", ["jquery", "common/doAjax"], function(e, t) {
    e(document).on("click", "#accept_order", function() {
        var t = e(this).attr("data-value");
        return confirm("接单", "你确定将要接取该订单吗", {id: t}, n), !1
    });
    var n = function(e, n, a, i) {
        t({before: function() {
                return a.text(""), i.text(""), n.addClass("disabled"), !0
            },done: function(e) {
                i.text("接单成功， 跳转中"), setTimeout(function() {
                    location.href = e.data.url
                }, 2e3)
            },fail: function(e) {
                a.text(e.desc), n.removeClass("disabled")
            },url: "/TeacherOrder/getOrder",data: {rid: e.id}})
    }
}), define("order/order_scroll", ["jquery"], function(e) {
    if (e(".order_detail").length) {
        var t = function() {
            var t = e(document).scrollTop(), n = e(".order_detail"), a = n.offset().top;
            n.children(".title").css(t > a ? {position: "fixed","box-shadow": "0 3px 5px #ddd"} : {position: "relative","box-shadow": "none"})
        };
        e(document).scroll(function() {
            t()
        }), t()
    }
}), define("evaluate/star", ["jquery"], function(e) {
    e("#evaluate_star").on("mouseenter", "i", function() {
        var t = e(this), n = e("#evaluate_star i"), a = e("#evaluate_star span"), i = n.index(t);
        n.removeClass("fa-star").addClass("fa-star-o");
        for (var r = 0; i >= r; r++)
            n.eq(r).addClass("fa-star").removeClass("fa-star-o");
        switch (i) {
            case 0:
                a.text("很差");
                break;
            case 1:
                a.text("不太满意");
                break;
            case 2:
                a.text("一般");
                break;
            case 3:
                a.text("满意");
                break;
            case 4:
                a.text("非常满意");
                break;
            default:
                a.text("")
        }
    }), e("#evaluate_star").on("mouseleave", function() {
        t()
    }), e("#evaluate_star").on("click", "i", function() {
        var t = e(this), n = e("#evaluate_star i"), a = e("#evaluate_star span"), i = n.index(t);
        n.removeClass("fa-star").addClass("fa-star-o");
        for (var r = 0; i >= r; r++)
            n.eq(r).addClass("fa-star").removeClass("fa-star-o");
        switch (e("#evaluate input[name=evaluate]").val(i + 1), i) {
            case 0:
                a.text("很差");
                break;
            case 1:
                a.text("不太满意");
                break;
            case 2:
                a.text("一般");
                break;
            case 3:
                a.text("满意");
                break;
            case 4:
                a.text("非常满意");
                break;
            default:
                a.text("")
        }
    });
    var t = function() {
        {
            var t = e("#evaluate input[name=evaluate]").val(), n = e("#evaluate_star i"), a = e("#evaluate_star span");
            n.index(self)
        }
        n.removeClass("fa-star").addClass("fa-star-o");
        for (var i = 0; t > i; i++)
            n.eq(i).addClass("fa-star").removeClass("fa-star-o");
        switch (parseInt(t) - 1) {
            case 0:
                a.text("很差");
                break;
            case 1:
                a.text("不太满意");
                break;
            case 2:
                a.text("一般");
                break;
            case 3:
                a.text("满意");
                break;
            case 4:
                a.text("非常满意");
                break;
            default:
                a.text("")
        }
    }
}), define("evaluate/edit", ["jquery"], function(e) {
    e("#evaluate").on("click", "span.tag", function() {
        var t = e(this).text(), n = e("textarea[name=evaluate_txt]").val(), a = "";
        return a = "" == n || void 0 == n ? t : n + "，" + t, e("textarea[name=evaluate_txt]").val(a), !1
    })
}), define("evaluate/submit", ["jquery", "common/doAjax"], function(e, t) {
    e("#evaluate .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e("#evaluate"), a = e(this), i = a.text(), r = n.attr("data-value"), o = a.siblings(".errorMsg"), s = a.siblings(".successMsg"), c = e("#evaluate").attr("data-type"), u = n.find("input[name=evaluate]").val(), l = n.find("textarea[name=evaluate_txt]").val();
            t({before: function() {
                    return o.text(""), "0" == u ? (o.text("请选择等级"), !1) : "" == l ? (o.text("家长评语不能为空"), !1) : l.replace(/[^\x00-\xff]/g, "**").length > 500 ? (o.text("家长评语至多500个字"), !1) : (a.text("请求中").addClass("disabled"), !0)
                },done: function() {
                    s.text("评价成功"), setTimeout(function() {
                        "listen" == c ? location.href = "/student/order/type/valid" : window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    o.text(e.desc), a.text(i).removeClass("disabled")
                },url: "/student/makeAppraise",data: {star: u,info: l,hid: r}})
        }
    })
}), define("common/confirmAjax", ["jquery", "common/doAjax", "common/point"], function(e, t, n) {
    var a = function(a, i, r) {
        var o = e("#confirm .submit"), s = o.text(), c = o.siblings(".errorMsg"), u = o.siblings(".successMsg");
        t({before: function() {
                return c.text(""), o.text("提交中").addClass("disabled"), !0
            },done: function(e) {
                if (e.data.score) {
                    var t = new n(e.data.score.type, e.data.score.info);
                    t.createEle(), setTimeout(function() {
                        r ? r() : window.location.reload()
                    }, 2500)
                } else
                    r ? (u.text("提交成功，跳转中"), setTimeout(function() {
                        r(e), o.text(s).removeClass("disabled")
                    }, 2e3)) : (u.text("提交成功，跳转中"), setTimeout(function() {
                        window.location.reload()
                    }, 2e3))
            },fail: function(e) {
                c.text(e.desc), o.text(s).removeClass("disabled")
            },url: a,data: {rid: i}})
    };
    return a
}), define("parent/order", ["jquery", "common/doAjax", "common/confirmAjax"], function(e, t) {
    e(document).on("click", ".parent_order .appoint_to_open", function() {
        var n = e(this).parents("li").attr("data-value");
        if (void 0 == n)
            return alert("公开订单", "没有获取到订单号，请刷新页面再次尝试"), !1;
        return t({done: function(t) {
                e("#openOrder").attr("data-value", n), e("#openOrder .text span.checked").remove();
                var a = '<input type="hidden" name="openorders">';
                e.each(t.data, function(e, t) {
                    a += '<span data-value="' + t.id + '" class="checked"><i class="fa fa-check-square-o"></i><i class="fa fa-square-o"></i>' + t.name + "</span>"
                }), e("#openOrder .text").html(a), e("#openOrder, .shadow").removeClass("fn-hide")
            },fail: function(e) {
                alert("提示", e.desc)
            },url: "/studentOrder/getSchoolPrice",data: {rid: n}}), !1
    }), e("#openOrder .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e(this), a = n.text(), i = n.siblings(".errorMsg"), r = n.siblings(".successMsg"), o = e("#openOrder").attr("data-value"), s = e("#openOrder input[name=openorders]").val();
            t({before: function() {
                    return i.text(""), "" == s || void 0 == s ? (i.text("必须选择发布高校"), !1) : (n.text("提交中").addClass("disabled"), !0)
                },done: function() {
                    r.text("公开成功，跳转中..."), setTimeout(function() {
                        window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    i.text(e.desc), n.text(a).removeClass("disabled")
                },url: "/StudentOrder/openOrder",data: {rid: o,schools: s}})
        }
    })
}), define("parent/getorder_detail", ["jquery", "common/doAjax"], function(e, t) {
    var n = function(n) {
        t({done: function(t) {
                var s = e("#change_order");
                s.find("input[name=phone]").val(t.data.phone), s.find("textarea[name=desc]").val(t.data.teacher_qualification), s.find("input[name=sex]").val(t.data.tsex), s.find("input[name=subject]").val(JSON.stringify(t.data.weaksubject)), a();
                var c = t.data.subjects;
                s.find(".tutorObjs").find("span.checked").remove(), s.find(".tutorObjs").find("input[name=othersSubjectText]").remove();
                for (var u = 0; u < c.length; u++) {
                    var l = '<span class="checked" data-value="' + c[u].id + '" ><i class="fa fa-check-square-o"></i><i class="fa fa-square-o"></i>' + c[u].name + "</span>";
                    "42" == c[u].id && (l += '<input type="text" name="othersSubjectText" placeholder="最长10个汉字或20个字母" style="position:relative;width:180px; text-indent:10px" class="input">'), s.find(".tutorObjs").find(".errorMsg").before(l)
                }
                r(s.find("input[name=sex]")), o(s.find("input[name=subject]")), s.attr("data-value", n), i(), e("#change_order, .shadow").removeClass("fn-hide")
            },fail: function(e) {
                return alert("订单提示", e.desc)
            },data: {rid: n},url: "/StudentOrder/getUpdData"})
    }, a = function() {
        for (var t = e("#change_order"), n = t.find(".tutor_sex label"), a = t.find(".tutor_sex input[name=sex]").val(), i = n.length; i > 0; i--)
            n.eq(i - 1).attr("data-value") == a ? n.eq(i - 1).find("i.fa").removeClass("fa-circle-o").addClass("fa-dot-circle-o") : n.eq(i - 1).find("i.fa").removeClass("fa-dot-circle-o").addClass("fa-circle-o")
    }, i = function() {
        var t = e("input[name=subject]").val(), n = e("input[name=subject]").siblings("span.checked");
        if ("{}" != t && "" != t && void 0 != t) {
            t = JSON.parse(t);
            for (var a in t)
                for (var i = 0; i < n.length; i++)
                    a == n.eq(i).attr("data-value") && (n.eq(i).addClass("active"), "42" == a && (e("input[name=othersSubjectText]").val(t[a]), e("input[name=othersSubjectText]").attr("flag", "true")))
        }
    }, r = function(e) {
        for (var t = e.val(), n = e.siblings("label"), a = n.length; a > 0; a--)
            if (t == n.eq(a - 1).attr("data-value")) {
                n.eq(a - 1).find("i").removeClass("fa-circle-o").addClass("fa-dot-circle-o"), n.eq(a - 1).siblings().find("i").removeClass("fa-dot-circle-o").addClass("fa-circle-o");
                break
            }
    }, o = function(e) {
        for (var t = JSON.parse(e.val()), n = e.siblings("span"), a = n.length; a > 0; a--)
            for (var i in t)
                i == n.eq(a - 1).attr("data-value") && n.eq(a - 1).addClass("active")
    };
    return n
}), define("parent/change_order", ["jquery", "parent/getorder_detail"], function(e, t) {
    e(document).on("click", ".parent_order .change_order_btn", function() {
        var n = e(this).parents("li").attr("data-value");
        return n ? (t(n), !1) : (alert("订单提示", "没有获取到订单号，请刷新页面重新操作"), !1)
    }), e("#change_order").on("click", ".tutorObjs span.checked", function() {
        var t = e(this);
        return setTimeout(function() {
            "42" == t.attr("data-value") ? t.hasClass("active") ? (t.toggleClass("active"), e("input[name=othersSubjectText]").val(""), e("input[name=othersSubjectText]").siblings(".errorMsg").text(""), n()) : (t.toggleClass("active"), e("input[name=othersSubjectText]").focus()) : (t.toggleClass("active"), n())
        }, 10), !1
    }), e(document).on("blur", ".change_order input[name=othersSubjectText]", function() {
        {
            var t = e(this), a = e.trim(t.val()), i = t.siblings(".errorMsg");
            t.attr("flag")
        }
        i.text(""), "" == a || void 0 == a ? (e("input[name=othersSubjectText]").prev().removeClass("active"), e("input[name=othersSubjectText]").attr("flag", "true"), n()) : a.replace(/[^\x00-\xff]/g, "**").length > 20 ? (i.text("最长4个汉字或8个字母"), e("input[name=othersSubjectText]").attr("flag", "false")) : (e("input[name=othersSubjectText]").attr("flag", "true"), n())
    }), e(document).on("focus", ".change_order input[name=othersSubjectText]", function() {
        e("input[name=othersSubjectText]").prev().addClass("active")
    });
    var n = function() {
        var t = e("#change_order input[name=subject]"), n = t.parent().find("span.active");
        for (len = n.length, obj = {}; len > 0; len--)
            42 == n.eq(len - 1).attr("data-value") ? "true" == e("input[name=othersSubjectText]").attr("flag") && (obj[42] = e("input[name=othersSubjectText]").val()) : obj[n.eq(len - 1).attr("data-value")] = n.eq(len - 1).text();
        t.val(JSON.stringify(obj))
    }
}), define("parent/change_order_submit", ["jquery", "common/doAjax"], function(e, t) {
    e("#change_order .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e("#change_order").attr("data-value"), a = e("#change_order"), i = e(this), r = i.text(), o = i.siblings(".errorMsg"), s = i.siblings(".successMsg"), c = a.find("input[name=phone]").val(), u = a.find("input[name=sex]").val(), l = a.find("input[name=subject]").val(), d = a.find("textarea[name=desc]").val(), f = e("input[name=othersSubjectText]").attr("flag");
            t({before: function() {
                    o.text("");
                    var e = yousi_tool.checkReg("phone", c);
                    if (e !== !0)
                        return o.text(e), !1;
                    var t = JSON.parse(l), n = !0;
                    for (var a in t)
                        n = !1;
                    return n ? (o.text("薄弱学科不能为空"), !1) : "false" == f ? (o.text("薄弱学科的其他选择有误"), !1) : "" == d || void 0 == d ? (o.text("描述不能为空"), !1) : (i.text("提交中").addClass("disabled"), !0)
                },done: function() {
                    s.text("修改成功"), setTimeout(function() {
                        window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    o.text(e.desc), i.txt(r).removeClass("disabled")
                },data: {rid: n,r_phone: c,tsex: u,teacher_qualification: d,weaksubject: l},url: "/StudentOrder/updateDemandOrder"})
        }
    })
}), define("parent/backmoney_edit_data", ["jquery", "common/doAjax"], function(e, t) {
    var n = function(e, n) {
        t({done: function(e) {
                n(e)
            },fail: function(e) {
                alert("退款错误提示", e.desc)
            },url: "/StudentOrder/getbackmoney",data: {rid: e}})
    };
    return n
}), define("parent/backmoney_edit", ["jquery", "parent/backmoney_edit_data"], function(e, t) {
    var n = function(t) {
        var n = '<input type="hidden" name="backMoneyReason" value="">';
        e.each(t, function(e, t) {
            n += '<span data-value="' + t.id + '" class="checked"><i class="fa fa-check-square-o"></i><i class="fa fa-square-o"></i>' + t.desc + "</span>"
        }), n += '<input type="text" name="backMoneyReasonTxt">', e("#backmoney .text div").html(n)
    };
    e(document).on("click", ".parent_order .close_order", function() {
        var a = e(this).parents("li").attr("data-value");
        return t(a, function(t) {
            e("#backmoney .text strong").text(t.data.backmoney), e("#backmoney").attr("data-value", a), e("#backmoney .switch_title_line span").text("退款"), n(t.data.backdesc), e("#backmoney, .shadow").removeClass("fn-hide")
        }), !1
    }), e(document).on("click", ".parent_order .back_money", function() {
        var a = e(this).parents("li").attr("data-value");
        return t(a, function(t) {
            e("#backmoney .text strong").text(t.data.backmoney), e("#backmoney").attr("data-value", a), e("#backmoney .switch_title_line span").text("关闭订单"), n(t.data.backdesc), e("#backmoney, .shadow").removeClass("fn-hide")
        }), !1
    }), e(document).on("click", ".parent_order .agree_give_up", function() {
        var n = e(this).parents("li").attr("data-value");
        return t(n, function(t) {
            e("#backmoney").attr("data-value", n), e("#backmoney .switch_title_line span").text("同意放弃"), e("#backmoney .text p").html(""), e("#backmoney .text div").html("同意后，将会退还您<strong> " + t.data.backmoney + "元 </strong>你确认将要同意家教放弃订单？"), e("#backmoney").attr("data-type", "agree"), e("#backmoney .submit").removeClass("disabled"), e("#backmoney, .shadow").removeClass("fn-hide")
        }), !1
    }), e(document).on("click", ".back_money span.checked", function() {
        var t = e(this);
        setTimeout(function() {
            var e = t.parents(".back_money").find("span.checked.active"), n = e.length, a = t.parents(".back_money");
            0 == n ? a.find(".submit").addClass("disabled") : a.find(".submit").removeClass("disabled"), !t.hasClass("active") && "8" == t.attr("data-value") && a.find("input[name=backMoneyReasonTxt]").val(""), t.hasClass("active") && "8" == t.attr("data-value") && a.find("input[name=backMoneyReasonTxt]").focus()
        }, 1)
    }), e("#backmoney").on("focus", "input[name=backMoneyReasonTxt]", function() {
        var t = e(this).parents(".back_money"), n = t.find("span.checked");
        n.eq(n.length - 1).addClass("active");
        for (var n = t.find("span.active"), a = n.length, i = [], r = t.find("input[name=backMoneyReason]"); a > 0; a--)
            i.push(n.eq(a - 1).attr("data-value"));
        r.val(i), t.find(".submit").removeClass("disabled")
    }), e("#backmoney").on("blur", "input[name=backMoneyReasonTxt]", function() {
        var t = e(this).val(), n = e(this).parents("#backmoney");
        ("" == t || void 0 == t) && n.find("span.checked").eq(n.find("span.checked").length - 1).trigger("click")
    })
}), define("parent/backmoney_submit", ["jquery", "common/doAjax"], function(e, t) {
    e("#backmoney .submit").click(function() {
        var n = e(this), a = n.text(), i = n.siblings(".errorMsg"), r = n.siblings(".successMsg"), o = e(this).parents(".back_money"), s = o.attr("data-value"), c = o.attr("data-type"), u = o.find("input[name=backMoneyReason]").val(), l = o.find("input[name=backMoneyReasonTxt]").val();
        return t("agree" == c ? {before: function() {
                return i.text(""), n.text("提交中").addClass("disabled"), !0
            },done: function() {
                r.text("提交成功，退款审核中"), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },fail: function(e) {
                i.text(e.desc), n.text(a).removeClass("disabled")
            },data: {rid: s,desc: "教员申请放弃"},url: "/StudentOrder/backMoney"} : {before: function() {
                return i.text(""), "" == u || void 0 == u ? (i.text("退款原因不能为空"), !1) : (n.text("提交中").addClass("disabled"), !0)
            },done: function() {
                r.text("提交成功，请等待审核"), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },fail: function(e) {
                i.text(e.desc), n.text(a).removeClass("disabled")
            },data: {rid: s,values: u,desc: l},url: "/StudentOrder/backMoney"}), !1
    })
}), define("parent/appoint_show", ["jquery"], function(e) {
    e(document).on("click", ".parent_order .appoint_again_btn", function() {
        var t = e(this).parents("li").attr("data-value");
        return e("#appoint_again").attr("data-value", t), e("#appoint_again, .shadow").removeClass("fn-hide"), e("#appoint_again input").focus(), !1
    }), e("#appoint_again .removePic").click(function() {
        var t = e("#appoint_again");
        t.find("img").attr("src", ""), t.find("input[name=appoint_tutor]").val(""), t.find(".show fn-right h4").text(""), t.find(".show fn-right p").text(""), t.find(".submit").addClass("fn-hide"), t.find(".show").addClass("fn-hide")
    })
}), define("parent/appoint_get_tutor", ["jquery", "common/doAjax"], function(e, t) {
    e("#appoint_again .get_appoint_tutor").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e("#appoint_again"), a = e(this), i = a.siblings(".errorMsg"), r = parseInt(n.find("input[name=tutor_id]").val());
            t({before: function() {
                    return i.text(""), "" == r || void 0 == r ? (i.text("教员编号不能为空"), !1) : (a.addClass("disabled"), !0)
                },done: function(e) {
                    n.find(".show img").attr("src", e.data.photo), n.find(".show h4").text(e.data.nickname), n.find(".show .fn-right p").text(e.data.schoolname), n.find(".show input[name=appoint_tutor]").val(r), a.removeClass("disabled"), n.find(".show").removeClass("fn-hide"), n.find(".submit").text("确定指定" + e.data.nickname).removeClass("fn-hide")
                },fail: function(e) {
                    i.text(e.desc), a.removeClass("disabled")
                },url: "/student/getTeacherInfo",data: {tid: r}})
        }
    })
}), define("parent/appoint_submit", ["jquery", "common/doAjax"], function(e, t) {
    e("#appoint_again .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e(this), a = n.text(), i = n.siblings(".errorMsg"), r = n.siblings(".successMsg"), o = e("#appoint_again"), s = o.attr("data-value"), c = o.find("input[name=appoint_tutor]").val();
            t({before: function() {
                    return i.text(""), (0 == c || void 0 == c) && i.text("没有选择家教"), n.text("提交中").addClass("disabled"), !0
                },done: function() {
                    r.text("重新指定成功，跳转中..."), setTimeout(function() {
                        window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    i.text(e.desc), n.text(a).removeClass("disabled")
                },url: "/StudentOrder/replaceTeachers",data: {rid: s,peoples: c}})
        }
    })
}), define("parent/close_no_pay", ["jquery", "common/confirmAjax"], function(e, t) {
    var n = function(e) {
        t("/StudentOrder/noPaycCloseOrder", e)
    };
    e(document).on("click", ".parent_order .no_pay_close", function() {
        var t = e(this).parents("li").attr("data-value");
        return void 0 == t ? (alert("关闭订单", "没有获取到订单号，请刷新页面再次尝试"), !1) : (confirm("关闭订单", "您确定关闭此订单吗？", t, n), !1)
    })
}), define("parent/refuse_audition", ["jquery", "common/confirmAjax"], function(e, t) {
    var n = function(e) {
        t("/StudentOrder/removeListen", e)
    };
    e(document).on("click", ".parent_order .refuse_audition", function() {
        var t = e(this).parents("li").attr("data-value");
        return void 0 == t ? (alert("放弃试听", "没有获取到订单号，请刷新页面再次尝试"), !1) : (confirm("放弃试听", "放弃试听后，您的订单将需要重新找教员，您确定放弃试听吗？", t, n), !1)
    })
}), define("parent/hire", ["jquery", "common/doAjax"], function(e, t) {
    var n = function(n) {
        var a = e("#confirm .submit"), i = a.text(), r = a.siblings(".errorMsg"), o = a.siblings(".successMsg");
        console.log(n), t({before: function() {
                return r.text(""), a.text("提交中").addClass("disabled"), !0
            },done: function() {
                o.text("提交成功，跳转中"), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },fail: function(e) {
                r.text(e.desc), a.text(i).removeClass("disabled")
            },url: "/StudentOrder/changeEmploy",data: {rid: n,hireStatus: "hire"}})
    }, a = function(n) {
        var a = e("#confirm .submit"), i = a.text(), r = a.siblings(".errorMsg"), o = a.siblings(".successMsg");
        t({before: function() {
                return r.text(""), a.text("提交中").addClass("disabled"), !0
            },done: function() {
                o.text("提交成功，跳转中"), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },fail: function(e) {
                r.text(e.desc), a.text(i).removeClass("disabled")
            },url: "/StudentOrder/changeEmploy",data: {rid: n,hireStatus: "unhire"}})
    };
    e(document).on("click", ".parent_order .hire", function() {
        var t = e(this).parents("li").attr("data-value");
        return void 0 == t ? (alert("聘用", "没有获取到订单号，请刷新页面再次尝试"), !1) : (confirm("聘用", "聘用后，请及时购买课时包。您确定聘用该教员吗？", t, n), !1)
    }), e(document).on("click", ".parent_order .unhire", function() {
        var t = e(this).parents("li").attr("data-value");
        return void 0 == t ? (alert("不聘用", "没有获取到订单号，请刷新页面再次尝试"), !1) : (confirm("不聘用", "很遗憾未能给您带来满意的服务，您确定不聘用该教员吗？", t, a), !1)
    })
}), define("parent/complain", ["jquery"], function(e) {
    e(document).on("click", ".parent_order .complain", function() {
        return alert("投诉", "请您与客服联系进行投诉。客服电话：400-876-0803 （值班时间：工作日早9:00-晚6:00）"), !1
    })
}), define("parent/end_class", ["jquery", "common/doAjax"], function(e, t) {
    e(document).on("click", ".course .end_audition_btn", function() {
        var t = e(this).parents("li").attr("data-value"), n = e(this).parents("li").attr("data-course-value");
        if (void 0 == t)
            return alert("试听结课", "没有获取到订单号，请刷新页面再次尝试"), !1;
        var a = e("#end_course");
        return a.find(".switch_title_line span").text("试听结课"), a.find(".errorMsg").text(""), a.find("input").val(""), a.attr("data-url", "/StudentOrder/endTeachOrder"), a.attr("data-value", t), a.attr("data-course-id", n), a.find(".end_course").addClass("fn-hide"), e("#end_course, .shadow").removeClass("fn-hide"), !1
    }), e(document).on("click", ".course .end_course_btn", function() {
        var n = e(this).parents("li").attr("data-value"), a = e(this).parents("li").attr("data-course-value");
        return void 0 == n ? (alert("试听结课", "没有获取到订单号，请刷新页面再次尝试"), !1) : (t({done: function(t) {
                var i = e("#end_course");
                i.find(".errorMsg").text(""), i.find(".switch_title_line span").text("正常结课"), i.find("input").val(""), i.attr("data-url", "/StudentOrder/finishedTeach"), i.attr("data-value", n), i.attr("data-course-id", a), i.find(".end_course dd").text(t.data.hours + "小时"), i.find(".end_course").removeClass("fn-hide"), e("#end_course, .shadow").removeClass("fn-hide")
            },fail: function(e) {
                alert("结课错误", e.desc)
            },url: "/StudentOrder/finishedBefore",data: {rid: n}}), !1)
    }), e("#end_course .submit").click(function() {
        var n = e(this), a = n.text(), i = n.siblings(".errorMsg"), r = (n.siblings(".successMSg"), e("#end_course")), o = r.attr("data-value"), s = r.attr("data-url"), c = r.attr("data-course-id"), u = r.find("input[name=safe_code]").val();
        return t({before: function() {
                i.text("");
                var e = yousi_tool.checkReg("safe_code", u);
                return e !== !0 ? (i.text(e), !1) : (n.text("提交中").addClass("disabled"), !0)
            },done: function() {
                e("#end_course, .shadow").addClass("fn-hide"), e("#evaluate").attr("data-value", c), e("#evaluate").attr("data-type", "listen"), e("#evaluate, .shadow").removeClass("fn-hide")
            },fail: function(e) {
                i.text(e.desc), n.text(a).removeClass("disabled")
            },url: s,data: {rid: o,safe_code: u}}), !1
    })
}), define("course/getOrderRecord", ["jquery", "common/doAjax"], function(e, t) {
    var n = function(n, r, o) {
        t({done: function(t) {
                var n = t.data;
                e.each(n, function(e, t) {
                    "parent" == o ? r.append(a(t)) : "tutor" == o && r.append(i(t))
                })
            },fail: function(e) {
                show("获取授课记录失败", e.desc)
            },url: "parent" == o ? "/student/getClassLog" : "/teacher/getClassLog",data: {rid: n}})
    }, a = function(e) {
        var t = "";
        return t += '<tr data-value="' + e.hid + '">', t += "<td>课程编号：" + e.hid + "</td>", t += "<td>", t += '  <a href="#" alt="' + e.name + '资料" title="' + e.name + '个人资料">', t += '     <img src="' + e.photo + '" width="30" alt="头像">', t += "    </a>", t += "</td>", t += "<td>" + e.name + "</td>", t += "<td>" + e.teach_type + "</td>", t += "<td>" + e.hours + "</td>", t += "<td>" + e.time + "</td>", t += '<td class="control">', "1" == e.appraise_status ? t += '<a target="_blank" href="/Account/show/' + e.tid + '/type/appraise#ahcor">查看评价</a>' : "0" == e.appraise_status && (t += '<a href="#" class="active evaluate_goto_btn">评价</a>'), t += "</td>", t += "</tr>"
    }, i = function(e) {
        var t = "", n = void 0;
        return n = "" == e.photo || void 0 == e.photo ? "/Public/images/member_default.png" : e.photo, t += '<tr data-value="' + e.hid + '">', t += "<td>课程编号：" + e.hid + "</td>", t += "<td>", t += '        <img src="' + n + '" width="30" alt="头像">', t += "</td>", t += "<td>" + e.name + "</td>", t += "<td>" + e.teach_type + "</td>", t += "<td>" + e.hours + "</td>", t += "<td>" + e.time + "</td>", t += '<td class="control">', "1" == e.appraise_status ? t += '<a target="_blank" href="/Account/show/' + e.tid + '/type/appraise#ahcor">查看评价</a>' : "0" == e.appraise_status && (t += '<a href="#">等待评价</a>'), t += "</td>", t += "</tr>"
    };
    return n
}), define("course/course", ["jquery", "common/doAjax", "course/getOrderRecord"], function(e, t, n) {
    e(document).on("click", ".course_record li .top .fa", function() {
        var t = e("input[name=logined]").val(), a = e(this), i = a.parents("li"), r = i.attr("data-value"), o = i.find("table tbody");
        a.hasClass("fa-chevron-circle-up") ? (n(r, o, t), o.parents(".table").removeClass("hidden"), a.toggleClass("fa-chevron-circle-up fa-chevron-circle-down")) : (o.parents(".table").addClass("hidden"), a.toggleClass("fa-chevron-circle-up fa-chevron-circle-down"), o.find("tr").remove().toggleClass("hidden"))
    }), e(".course_record").length && e(".course_record li").eq(0).find(".top .fa").trigger("click"), e(document).on("click", ".record .evaluate_goto_btn", function() {
        var t = e(this).parents("tr").attr("data-value");
        e("#evaluate").attr("data-value", t).removeClass("fn-hide"), e(".shadow").removeClass("fn-hide")
    })
}), define("tutor/order", ["jquery", "common/ys_core", "common/confirmAjax"], function(e, t, n) {
    var a = function() {
        for (var n = e(".count_time"), a = e("input[name=tutorFlag]").val(), i = n.length; i > 0; i--) {
            var r = n.eq(i - 1);
            !function(e) {
                var n = new Date(e.attr("data-start-time")).getTime(), i = new Date(e.attr("data-end-time")).getTime(), r = t.count_down(), o = new r(n, i, function(t, n, i) {
                    e.text("tutorFlag" == a ? "剩余时间：" + i + ":" + n + ":" + t : i + ":" + n + ":" + t + " 后可再次操作")
                }, function() {
                    if ("tutorFlag" == a)
                        window.location.reload();
                    else {
                        e.siblings(".fn-left").text("提示：指定教员未响应，可重新指定。"), e.html("");
                        var t = e.parents("li");
                        t.find("table td.col-3").html('<a class="btn appoint_again_btn" href="javascript:;">再次指定</a><a class="btn status1 appoint_to_open" href="javascript:;">公开订单</a>')
                    }
                });
                o.start()
            }(r)
        }
    };
    a(), e(document).on("click", ".tutor_order .type_audition_time", function() {
        var t = e(this), n = t.parents("li"), a = n.attr("data-value");
        return e("#audition_time").attr("data-value", a), e("#audition_time").attr("data-url", "/TeacherOrder/confirmTeach"), e("#audition_time .switch_title_line span").text("输入试教时间"), e("#audition_time").attr("data-type", "type"), e("#audition_time").find("input").val(""), e("#audition_time").find(".errorMsg").text(""), e("#audition_time, .shadow").removeClass("fn-hide"), !1
    }), e(document).on("click", ".tutor_order .change_audition_time", function() {
        var t = e(this), n = t.parents("li"), a = n.attr("data-value");
        return e("#audition_time").attr("data-value", a), e("#audition_time").attr("data-url", "/TeacherOrder/updateListentime"), e("#audition_time .switch_title_line span").text("修改试教时间"), e("#audition_time").find("input").val(""), e("#audition_time").find(".errorMsg").text(""), e("#audition_time").attr("data-type", "change"), e("#audition_time, .shadow").removeClass("fn-hide"), !1
    }), e(document).on("click", ".tutor_order .give_up_order", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("放弃订单", "您确定要放弃此订单吗？", t, i), !1
    });
    var i = function(e) {
        n("/TeacherOrder/giveupOrder", e)
    };
    e(document).on("click", ".tutor_order .apply_give_up", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("放弃订单", "放弃订单前，请先征得家长同意；您确定要放弃订单吗？", t, r), !1
    });
    var r = function(e) {
        n("/TeacherOrder/removeOrder", e)
    };
    e(document).on("click", ".tutor_order .cancel_give_up", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("撤销放弃", "您确定要撤销放弃此订单吗？", t, o), !1
    });
    var o = function(e) {
        n("/TeacherOrder/revokeOrder", e)
    };
    e(document).on("click", ".tutor_order .goto_audition", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("去试教", "您确定要去试教吗？", t, s), !1
    });
    var s = function(e) {
        n("/TeacherOrder/beginToTeach", e)
    };
    e(document).on("click", ".tutor_order .cancel_audition", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("取消试教", "取消授课前，请先征得家长同意；您确定要取消授课吗？", t, c), !1
    });
    var c = function(e) {
        n("/TeacherOrder/removeTeach", e)
    };
    e(document).on("click", ".tutor_order .begain_course", function() {
        var t = e(this), n = t.parents("li"), a = n.attr("data-value");
        return e("#course_time").attr("data-value", a), e("#course_time").attr("data-url", "/TeacherOrder/beginToTeach"), e("#course_time .switch_title_line span").text("去授课"), e("#course_time").attr("data-type", "type"), e("#course_time").find("input").val(""), e("#course_time").find(".errorMsg").text(""), e("#course_time, .shadow").removeClass("fn-hide"), !1
    }), e(document).on("click", ".tutor_order .change_course_time, .course .change_course_time", function() {
        var t = e(this), n = t.parents("li"), a = n.attr("data-value");
        return e("#course_time").attr("data-value", a), e("#course_time").attr("data-url", "/TeacherOrder/updateTeachHours"), e("#course_time .switch_title_line span").text("修改授课时长"), e("#course_time").attr("data-type", "change"), e("#course_time").find("input").val(""), e("#course_time").find(".errorMsg").text(""), e("#course_time, .shadow").removeClass("fn-hide"), !1
    }), e(document).on("click", ".tutor_order .cancel_course, .course .cancel_course", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("取消试教", "取消授课前，请先征得家长同意；您确定要取消授课吗？", t, u), !1
    });
    var u = function(e) {
        n("/TeacherOrder/removeTeach", e)
    };
    e(document).on("click", ".tutor_order .accept_order", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("接单", "您确定要接单吗？", t, l), !1
    });
    var l = function(e) {
        n("/TeacherOrder/getOrder", e, function() {
            location.href = "/teacher/order/type/valid"
        })
    };
    e(document).on("click", ".tutor_order .refuse_order", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("拒绝", "您确定要拒绝此订单吗？", t, d), !1
    });
    var d = function(e) {
        n("/TeacherOrder/refuseOrder", e)
    }
}), define("tutor/audition_time_submit", ["jquery", "common/doAjax", "common/point"], function(e, t, n) {
    e("#audition_time").on("click", ".submit", function() {
        if (!e(this).hasClass("active")) {
            var a = e(this), i = e("#audition_time"), r = a.text(), o = e.trim(i.find("input[name=listentime]").val()), s = a.siblings(".errorMsg"), c = a.siblings(".suucessMSg"), u = i.attr("data-value"), l = i.attr("data-url");
            t({before: function() {
                    return s.text(""), void 0 == o || "" == o ? (s.text("试听时间不能为空"), !1) : (a.text("提交中").addClass("disabled"), !0)
                },done: function(e) {
                    if (e.data.score) {
                        c.text("确认试听时间成功");
                        var t = new n(e.data.score.type, e.data.score.info);
                        t.createEle(), setTimeout(function() {
                            window.location.reload()
                        }, 2e3)
                    } else
                        c.text("修改试听时间成功，跳转中..."), window.location.reload()
                },fail: function(e) {
                    s.text(e.desc), a.text(r).removeClass("disabled")
                },url: l,data: {rid: u,listentime: o}})
        }
    })
}), define("tutor/course_time_submit", ["jquery", "common/doAjax", "common/point"], function(e, t) {
    e("#course_time").on("click", ".submit", function() {
        if (!e(this).hasClass("active")) {
            var n = e(this), a = e("#course_time"), i = n.text(), r = e.trim(a.find("input[name=course_time]").val()), o = n.siblings(".errorMsg"), s = n.siblings(".suucessMSg"), c = a.attr("data-value"), u = a.attr("data-url");
            t({before: function() {
                    return o.text(""), void 0 == r || "" == r ? (o.text("授课时长不能为空"), !1) : /^[1-9][0-9]*/.test(parseInt(r)) ? (n.text("提交中").addClass("disabled"), !0) : (o.text("授课时长必须为大于0的数字"), !1)
                },done: function() {
                    s.text("修改试听时间成功，跳转中..."), window.location.reload()
                },fail: function(e) {
                    o.text(e.desc), n.text(i).removeClass("disabled")
                },url: u,data: {rid: c,hours: r}})
        }
    })
}), define("pay/set_discount_price", ["jquery"], function(e) {
    var t = function() {
        var t = e("#buy_discounts"), n = parseInt(t.find("input[name=discountHours]").val()), a = parseFloat(t.find(".per_hour").attr("data-value")), i = t.find("input[name=add_price]").val(), r = "", o = "", s = parseInt(t.find("input[name=intermediary]").val());
        "" != i && void 0 != i ? (i = parseInt(i), r = "<strong> " + (a + i) + "元</strong> = " + a + " + " + i, o = a + i + "元 * " + n + (100 == s ? " + 100元 " : "") + " = <strong>" + (n * (a + i) + s) + "元</strong>") : (r = "<strong> " + a + "元</strong> ", o = a + "元 * " + n + (100 == s ? " + 100元 " : "") + " = <strong>" + (n * a + s) + "元</strong>"), t.find(".per_hour").html(r), t.find(".discount_total").html(o)
    };
    return t
}), define("pay/set_discount_add", ["jquery"], function(e) {
    var t = function() {
        var t = e("#add_discount"), n = parseInt(t.find("input[name=add_discount_pirce]").val()), a = parseFloat(t.find(".discounts").attr("data-value"));
        t.find(".add_discounts").html("<strong>" + n * a + "元</strong> = " + n + "元 * " + a)
    };
    return t
}), define("pay/step1_callback", ["jquery"], function(e) {
    var t = function(t) {
        console.log(t);
        var n = e("#payPop");
        for (var a in t)
            n.find("." + a).text(t[a]);
        e("input[name=pid]").val(t.id), e("input[name=discountHoursPayagain]").length && e("input[name=discountHoursPayagain]").val(e("input[name=discountHours]").val()), e("#payEndWrap input[name=addPrice]").val(e("input[name=audition_add_price]").val()), "" != e("input[name=audition_add_price]").val() && void 0 != e("input[name=audition_add_price]").val() ? e("#payEndWrap input[name=addPrice]").val(e("input[name=audition_add_price]").val()) : "" != e("input[name=add_discount_pirce]").val() && void 0 != e("input[name=add_discount_pirce]").val() && e("#payEndWrap input[name=addPrice]").val(e("input[name=add_discount_pirce]").val())
    };
    return t
}), define("pay/pay_step1_submit", ["jquery", "common/doAjax", "pay/step1_callback"], function(e, t, n) {
    var a = function(a, i, r) {
        if (!i.hasClass("disabled")) {
            var o = i.text();
            t({before: function() {
                    return i.text("提交中").addClass("disabled"), !0
                },done: function(t) {
                    n(t.data), e("#payPop,.shadow").removeClass("fn-hide"), i.text(o).removeClass("disabled")
                },fail: function(e) {
                    r.text(e.desc), i.text(o).removeClass("disabled")
                },url: "/studentOrder/makePayOrder",data: a})
        }
    };
    return a
}), define("pay/pay", ["jquery", "pay/set_discount_price", "pay/set_discount_add", "pay/pay_step1_submit"], function(e, t, n, a) {
    e("#audition_pay .contract span").click(function() {
        return e(this).toggleClass("active"), e(this).hasClass("active") ? e("#audition_pay .submit").removeClass("disabled") : e("#audition_pay .submit").addClass("disabled"), !1
    }), e("#audition_pay .contract a").click(function() {
        return e("#parent_contract, .shadow").removeClass("fn-hide"), !1
    }), e("#parent_contract button").click(function() {
        return e("#audition_pay .contract span").addClass("active"), e("#audition_pay .submit").removeClass("disabled"), e("#parent_contract, .shadow").addClass("fn-hide"), !1
    }), e("#add_audition").on("click", ".select li", function() {
        setTimeout(function() {
            var t = parseInt(e("#add_audition").find("input[name=audition_add_price]").val());
            e("#add_audition").find(".audition_add_total").html("<strong>" + 2 * t + "元</strong> = " + t + "元 * 2"), e("#add_audition").find("input[name=amount]").val(2 * t)
        }, 50)
    }), e("#buy_discounts").on("click", ".select li", function() {
        setTimeout(function() {
            t()
        }, 50)
    }), t(), e("#add_discount").on("click", ".select li", function() {
        setTimeout(function() {
            n()
        }, 50)
    }), n(), e("#audition_pay .submit").click(function() {
        var t = e("#audition_pay"), n = t.find("input[name=rid]").val(), i = e(this), r = t.find("input[name=paymethod]").val(), o = t.find("input[name=bank]").val(), s = {rid: n,paymethod: r,bank: o,type: "listen"}, c = e(this).siblings(".errorMsg");
        return c.text(""), "" == n ? (c.text("没有获取到订单号"), !1) : "" == r ? (c.text("请选择支付方式"), !1) : "bankpay" == r && "" == o ? (c.text("请选择支付方式"), !1) : void a(s, i, c)
    }), e("#add_audition .submit").click(function() {
        var t = e("#add_audition"), n = t.find("input[name=rid]").val(), i = t.find("input[name=audition_add_price]").val(), r = t.find("input[name=paymethod]").val(), o = t.find("input[name=bank]").val(), s = e("#payPop input[name=nowPrice]").val(), c = e(this), u = {rid: n,add_price: i,paymethod: r,bank: o,nowPrice: s,type: "listenadd"}, l = e(this).siblings(".errorMsg");
        return l.text(""), "" == n ? (l.text("没有获取到订单号"), !1) : "" == r ? (l.text("请选择支付方式"), !1) : "bankpay" == r && "" == o ? (l.text("请选择支付方式"), !1) : void a(u, c, l)
    }), e("#buy_discounts .submit").click(function() {
        var t = e("#buy_discounts"), n = t.find("input[name=rid]").val(), i = t.find("input[name=add_price]").val(), r = t.find("input[name=discountHours]").val(), o = t.find("input[name=paymethod]").val(), s = t.find("input[name=bank]").val(), c = e("input[name=oldDiscount]").val(), u = e(this), l = {rid: n,add_price: i,discountHours: r,paymethod: o,bank: s,oldDiscount: c,type: "routine"}, d = e(this).siblings(".errorMsg");
        return d.text(""), "" == n ? (d.text("没有获取到订单号"), !1) : "" == o ? (d.text("请选择支付方式"), !1) : "bankpay" == o && "" == s ? (d.text("请选择支付方式"), !1) : void a(l, u, d)
    }), e("#add_discount .submit").click(function() {
        var t = e("#add_discount"), n = t.find("input[name=rid]").val(), i = t.find("input[name=add_discount_pirce]").val(), r = t.find("input[name=paymethod]").val(), o = e("input[name=nowPrice]").val(), s = t.find("input[name=bank]").val(), c = e(this), u = {rid: n,add_price: i,paymethod: r,nowPrice: o,bank: s,type: "premium"}, l = e(this).siblings(".errorMsg");
        return l.text(""), "" == n ? (l.text("没有获取到订单号"), !1) : "" == r ? (l.text("请选择支付方式"), !1) : "bankpay" == r && "" == s ? (l.text("请选择支付方式"), !1) : void a(u, c, l)
    }), e("#half_audition .submit").click(function() {
        var t = e("#half_audition"), n = t.find("input[name=rid]").val(), i = t.find("input[name=paymethod]").val(), r = t.find("input[name=bank]").val(), o = t.find("input[name=nowPrice]").val(), s = e(this), c = {rid: n,paymethod: i,bank: r,nowPrice: o,type: "activation"}, u = e(this).siblings(".errorMsg");
        return u.text(""), "" == n ? (u.text("没有获取到订单号"), !1) : "" == i ? (u.text("请选择支付方式"), !1) : "bankpay" == i && "" == r ? (u.text("请选择支付方式"), !1) : void a(c, s, u)
    }), e("#payPop .submit").click(function() {
        var t = e("input[name=pid]").val(), n = e(this), a = n.siblings(".errorMsg");
        e.ajax({type: "POST",async: !1,url: "/studentOrder/makeToPayOrder",timeout: 3e3,data: {pid: t},beforeSend: function() {
                n.attr("disabled", "disabled")
            },success: function(t) {
                200 == t.code ? (e("input[name=sno]").val(t.data.sn), e("#submitDoalipay").submit()) : (a.text(t.desc), n.removeAttr("disabled"))
            },error: function() {
                n.removeAttr("disabled"), a.text("网络请求错误，请检查网络后重新尝试")
            }}), e("#payPop").addClass("fn-hide"), e("#payEndWrap").removeClass("fn-hide")
    }), e("#bank_pop li").click(function() {
        "true" == e("input[name=continuetopayInput]").val() && setTimeout(function() {
            var t = e("input[name=rid]").val(), n = (e("input[name=audition_add_price]").val(), e("input[name=oldDiscount]").val()), a = e("input[name=discountHours]").val(), i = e("input[name=nowPrice]").val(), r = e("input[name=type]").val(), o = e("input[name=addPrice]").val(), s = e("input[name=paymethod]").val(), c = e("input[name=bank]").val(), u = (e(this), {rid: t,paymethod: s,bank: c,nowPrice: i,oldDiscount: n,oldDiscount: n,type: r,add_price: o,discountHours: a});
            e.ajax({type: "POST",url: "/studentOrder/makePayOrder",timeout: 3e3,data: u,beforeSend: function() {
                },success: function(t) {
                    if (200 == t.code) {
                        var n = t.data.id;
                        e.ajax({type: "POST",async: !1,url: "/studentOrder/makeToPayOrder",timeout: 3e3,data: {pid: n},beforeSend: function() {
                            },success: function(t) {
                                200 == t.code ? (e("input[name=sno]").val(t.data.sn), e("#continueSubmitDoalipay").submit()) : alert(t.desc)
                            },error: function() {
                                showAlert("网络请求错误，请检查网络后重新尝试")
                            }})
                    } else
                        alert(t.desc), 560 == t.code && setTimeout(function() {
                            location.href = t.data.url
                        }, 4e3)
                },error: function() {
                    alert("网络请求错误，请检查网络后重新尝试")
                }})
        }, 0)
    })
}), define("pay/chose_bank", ["jquery"], function(e) {
    e(".change_bank_btn").click(function() {
        return e("#bank_pop, .shadow").removeClass("fn-hide"), !1
    }), e("#bank_pop h3 span").click(function() {
        e("#bank_pop h3 span").toggleClass("active"), e("#bank_pop .bankcard").toggleClass("fn-hide")
    }), e("#bank_pop").on("click", "li", function() {
        var t = e(this), n = t.attr("tag"), a = t.find("em").attr("class"), i = t.attr("data-name");
        return "alipay" == n ? (e("input[name=paymethod]").val("alipay"), e("input[name=bank]").val("")) : (e("input[name=paymethod]").val("bankPay"), e("input[name=bank]").val(n)), e(".pay em.banklogo, #payPop em.banklogo").attr("class", a), e("#bank_pop, .shadow").addClass("fn-hide"), e("#continueToPay").val("去" + i + "支付"), !1
    })
}), define("tutors/teacher_guide", ["jquery", "common/doAjax"], function(e, t) {
    e("#teacher_guide").on("click", ".submit_check", function() {
        var n = e(this), a = n.text();
        if (!n.hasClass("disabled"))
            return t({before: function() {
                    return n.text("提交中").addClass("disabled"), !0
                },done: function() {
                    window.location.reload()
                },fail: function(e) {
                    alert("家教审核", e.desc), n.text(a).removeClass("disabled")
                },url: "/teacher/submitAudit",data: {}}), !1
    }), e("#teacher_guide").on("click", ".appoint_exercise", function() {
        var n = e(this), a = n.text();
        if (!n.hasClass("disabled"))
            return t({before: function() {
                    return n.text("提交中").addClass("disabled"), !0
                },done: function() {
                    window.location.reload()
                },fail: function(e) {
                    alert("预约培训", e.desc), n.text(a).removeClass("disabled")
                },url: "/teacher/againTrain",data: {}}), !1
    }), e("#teacher_guide").on("click", ".closeGuide", function() {
        var n = e(this), a = n.text();
        if (!n.hasClass("disabled"))
            return t({before: function() {
                    return n.text("提交中").addClass("disabled"), !0
                },done: function() {
                    window.location.reload()
                },fail: function(e) {
                    alert("预约培训", e.desc), n.text(a).removeClass("disabled")
                },url: "/teacher/closeGuide",data: {}}), !1
    })
}), define("letter/letter", ["jquery", "common/doAjax"], function(e, t) {
    e(document).on("click", ".news .list li .fn-right a.tutor_delete", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("删除消息", "你确认删除该消息吗", t, n), !1
    }), e(document).on("click", ".news .list li .fn-right a.parent_delete", function() {
        var t = e(this).parents("li").attr("data-value");
        return confirm("删除消息", "你确认删除该消息吗", t, a), !1
    });
    var n = function(e, n, a, i) {
        n.text();
        t({before: function() {
                return a.text(""), n.addClass("disabled").text("提交中"), !0
            },done: function() {
                i.text("删除成功, 跳转中..."), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },error: function(e) {
                a.text(e.desc)
            },url: "/teacher/deleteMessage",data: {id: e}})
    }, a = function(e, n, a, i) {
        n.text();
        t({before: function() {
                return a.text(""), n.addClass("disabled").text("提交中"), !0
            },done: function() {
                i.text("删除成功, 跳转中..."), setTimeout(function() {
                    window.location.reload()
                }, 2e3)
            },error: function(e) {
                a.text(e.desc)
            },url: "/student/deleteMessage",data: {id: e}})
    }
}), define("exam/answer", [], function() {
    var e = {value: [],getValue: function() {
            return this.value
        },setValue: function(e, t) {
            for (var n = this.value, a = 0; a < n.length; a++)
                n[a].key == e && n.splice(a, 1);
            this.value = n;
            var i = {key: e,val: t};
            this.value.push(i)
        },getLen: function() {
            return this.value.length
        }};
    return e
}), define("exam/exam", ["jquery", "exam/answer", "common/doAjax"], function(e, t, n) {
    e("#exam #exam_tips .goto_exam").click(function() {
        e("#exam #exam_tips").addClass("fn-hide"), e("#exam .catalog").eq(0).trigger("click")
    }), e("#exam").on("click", ".exam_left_ctn h2", function() {
        return e(this).next().toggleClass("fn-hide"), !1
    }), e("#exam").on("click", ".exam_left_ctn li p", function() {
        return e(this).siblings().toggleClass("fn-hide"), !1
    }), e("#exam").on("click", ".exam_left_ctn .catalog", function() {
        e("#exam .catalog").removeClass("active"), e(this).addClass("active");
        var t = e(this).attr("data-ctn");
        return e("#exam_list>div").addClass("fn-hide"), e("#exam_list").find("#" + t).removeClass("fn-hide"), !1
    }), e(document).on("click", "#exam_list>div .submit_wrap_video button", function() {
        {
            var t = e("#exam .catalog"), n = e("#exam .catalog.active").attr("data-ctn"), a = 0;
            t.length
        }
        e.each(t, function(t, i) {
            n == e(i).attr("data-ctn") && (a = t)
        }), t.eq(a + 1).trigger("click")
    }), e(document).on("click", "#exam_list>div label.radio", function() {
        var a = e(this);
        return setTimeout(function() {
            var i = a.parent().attr("id"), r = a.siblings("input[type=hidden]").val();
            t.setValue(i, r), n({done: function() {
                    e("#exam .catalog.active").addClass("over_catalog").removeClass("error_catalog")
                },fail: function() {
                    e("#exam .catalog.active").addClass("error_catalog").removeClass("over_catalog")
                },url: "/teacher/checkExam",data: {id: i,answer: r}})
        }, 5), !1
    }), e(document).on("click", "#exam_list>div .submit_wrap button", function() {
        var n = e(this), a = n.parent().siblings("input[type=hidden]").val();
        if (void 0 == a || "" == a)
            return void alert("提示", "请勾选后再提交");
        var i = e("#exam .catalog"), r = e("#exam .catalog.active").attr("data-ctn"), o = 0, s = i.length;
        e.each(i, function(t, n) {
            r == e(n).attr("data-ctn") && (o = t)
        });
        var c = e("input[name=examCount]").val(), u = t.getLen();
        return console.log(c, u), c != u ? s > o + 1 ? i.eq(o + 1).trigger("click") : alert("提示", "您有题目未完成，小标题为黑色是未完成的题目") : (e("#end_class").removeClass("fn-hide").siblings("div").addClass("fn-hide"), e("#exam_submit").removeClass("fn-hide"), e("#exam .catalog.active").removeClass("active").addClass("over_catalog")), !1
    }), e("#exam_submit button").click(function() {
        if (!e(this).hasClass("disabled")) {
            var a = e("input[name=examCount]").val(), i = e(".error_catalog"), r = t.getLen(), o = e(this);
            return a != r ? void alert("提示", "您有题目未完成，小标题为黑色是未完成的题目") : i.length ? void alert("提示", "您有题目选择错误，小标题为红色的是答错的题目") : void n({before: function() {
                    return o.addClass("disabled"), !0
                },done: function() {
                    e("input[name=answer]").val(JSON.stringify(t.getValue())), e("#exam_form").submit()
                },fail: function(e) {
                    o.removeClass("disabled"), alert("提示", e.desc)
                },url: "/exam/check",data: {answer: JSON.stringify(t.getValue())}})
        }
    })
}), define("myset/setProvince", ["jquery", "common/doAjax"], function(e, t) {
    e("#province").on("click", "li", function() {
        var n = e(this).attr("data-value");
        setTimeout(function() {
            t({url: "/Account/getCity",data: {province: n},done: function(t) {
                    e("#city ul").html(""), e("#city input").val(""), e("#area ul").html(""), e("#area input").val(""), e("#city span, #area span").text("请选择"), e.each(t.data, function(t, n) {
                        var a = e("<li></li>");
                        a.text(n.p_name), a.attr("data-value", n.p_id), e("#city ul").append(a)
                    })
                },fail: function() {
                    alert("提示", data.desc)
                }})
        }, 3)
    }), e("#city").on("click", "li", function() {
        var n = e(this).attr("data-value");
        setTimeout(function() {
            t({url: "/Account/getArea",data: {city: n},done: function(t) {
                    e("#area ul").html(""), e("#area input").val(""), e("#area span").text("请选择"), e.each(t.data, function(n) {
                        var a = e("<li></li>");
                        a.text(t.data[n].p_name), a.attr("data-value", t.data[n].p_id), e("#area ul").append(a)
                    })
                },fail: function() {
                }})
        }, 3)
    })
}), define("myset/setSchool", ["jquery", "common/doAjax"], function(e, t) {
    e("#myset_school").on("click", "li", function() {
        var n = e(this).attr("data-value");
        setTimeout(function() {
            t({url: "/account/schoolInfo",data: {school: n},done: function(t) {
                    e("#myset_school_area ul").html(""), e("#myset_school_area input").val(""), e("#myset_school_deparemnt ul").html(""), e("#myset_school_deparemnt input").val(""), e("#myset_school_deparemnt span, #myset_school_area span").text("请选择"), e.each(t.data.department, function(t, n) {
                        var a = e("<li></li>");
                        a.text(n.name), a.attr("data-value", n.id), e("#myset_school_deparemnt ul").append(a)
                    }), e.each(t.data.schoolarea, function(t, n) {
                        var a = e("<li></li>");
                        a.text(n.name), a.attr("data-value", n.id), e("#myset_school_area ul").append(a)
                    })
                },fail: function() {
                    alert("提示", data.desc)
                }})
        }, 3)
    })
}), define("myset/tutor_info", ["jquery", "common/doAjax"], function(e, t) {
    e("#tutor_info .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e(this), a = n.text(), i = n.siblings(".errorMsg"), r = n.siblings(".successMsg"), o = e("input[name=nickname]").val(), s = e("input[name=sex]").val(), c = e("input[name=school]").val(), u = e("input[name=department]").val(), l = e("input[name=schoolarea]").val(), d = e("input[name=school_year]").val(), f = e("input[name=degree]").val(), p = e("input[name=province]").val(), h = e("input[name=city]").val(), m = e("input[name=area]").val(), v = e("input[name=photo_name]").val(), g = e("input[name=photo_path]").val(), b = e("input[name=photo_site]").val(), y = e("input[name=card_photo_name]").val(), x = e("input[name=card_photo_path]").val(), _ = e("input[name=card_photo_site]").val(), k = e("#photo_img").attr("src"), C = e("#card_photo").attr("src");
            return t({before: function() {
                    return i.text(""), r.text(""), "" == o || void 0 == o ? (i.text("名称不能为空"), !1) : u ? l ? d && f ? p && h && m ? "" == k || void 0 == b ? (i.text("请上传头像"), !1) : "" == C || void 0 == C ? (i.text("请上传证件"), !1) : (n.text("提交中").addClass("disabled"), !0) : (i.text("生源地条件不完整"), !1) : (i.text("入学条件不完整"), !1) : (i.text("请选择校区"), !1) : (i.text("请选择院系"), !1)
                },done: function() {
                    r.text("提交成功"), setTimeout(function() {
                        e("#teacher_guide .step2 .tutorInfo").length ? e("#teacher_guide .step2 .tutorInfo").hasClass("active") ? window.location.reload() : location.href = "/teacher/myset/sign/tutorinfo" : window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    i.text(e.desc), n.text(a).removeClass("disabled")
                },url: "/Teacher/updateInfo",data: {nickname: o,sex: s,inschool: c,department: u,schoolarea: l,school_year: d,degree: f,province: p,city: h,area: m,photo_name: v,photo_path: g,photo_site: b,card_photo_name: y,card_photo_path: x,card_photo_site: _}}), !1
        }
    })
}), define("myset/parent_info", ["jquery", "common/doAjax"], function(e, t) {
    e("#parent_info .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var n = e(this), a = n.text(), i = e("#parent_info"), r = e("#parent_info").attr("data-url"), o = n.siblings(".errorMsg"), s = n.siblings(".successMsg"), c = i.find("input[name=nickname]").val(), u = i.find("input[name=parentname]").val(), l = i.find("input[name=sex]").val(), d = i.find("input[name=birthday]").val(), f = i.find("input[name=grade]").val(), p = i.find("input[name=photo_name]").val(), h = i.find("input[name=photo_path]").val(), m = i.find("input[name=photo_site]").val(), v = i.find("input[name=address]").val(), g = i.find("input[name=coordinate]").val(), b = i.find("input[name=province]").val(), y = i.find("input[name=city]").val(), x = i.find("input[name=area]").val();
            return t({before: function() {
                    if (o.text(""), s.text(""), "" == u || void 0 == u)
                        return o.text("家长姓名不能为空"), !1;
                    if ("" == c || void 0 == c)
                        return o.text("学生姓名不能为空"), !1;
                    if ("" == l || void 0 == l)
                        return o.text("学生性别不能为空"), !1;
                    if ("" == f || void 0 == f)
                        return o.text("学生年级不能为空"), !1;
                    if (i.find("input[name=birthday]").length && ("" == d || void 0 == d))
                        return o.text("生日不能为空"), !1;
                    var t = !1;
                    return e.each([v, g, b, y, x], function(e, n) {
                        (void 0 == n || "" == n) && (t = !0)
                    }), t ? (o.text("家庭地址不能为空"), !1) : (n.text("提交中").addClass("disabled"), !0)
                },done: function() {
                    s.text("提交成功"), setTimeout(function() {
                        s.text(""), window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    o.text(e.desc), n.text(a).removeClass("disabled")
                },url: r,data: {nickname: c,parentname: u,sex: l,birthday: d,grade: f,photo_name: p,photo_path: h,photo_site: m,address: v,coordinate: g,province: b,city: y,area: x}}), !1
        }
    })
}), define("myset/resetSafeCode", ["jquery", "common/doAjax"], function(e, t) {
    var n = function(n, a) {
        var i;
        i = e("reset" == n ? "#setSafeCode" : "#safe_code"), i.on("click", ".submit", function() {
            if (!e(this).hasClass("disabled")) {
                var r = i.find("input[name=safe_code]").val(), o = e(this).siblings(".errorMsg"), s = {}, c = e(this), u = c.text();
                if ("reset" == n) {
                    var l = i.find("input[name=verify]").val(), d = c.siblings(".successMsg");
                    s = {safe_code: r,verify: l}
                } else
                    s = {safe_code: r};
                t({before: function() {
                        o.text("");
                        var e = yousi_tool.checkReg("safe_code", r);
                        if (1 != e)
                            return o.text(e), !1;
                        if ("reset" == n) {
                            d.text("");
                            var t = yousi_tool.checkReg("verify", l);
                            if (1 != t)
                                return o.text(t), !1
                        }
                        return c.text("提交中").addClass("disabled"), !0
                    },done: function(e) {
                        e.data.url && (location.href = e.data.url), "reset" == n && (d.text("设定成功"), setTimeout(function() {
                            window.location.reload()
                        }, 2e3))
                    },fail: function(e) {
                        o.text(e.desc), c.text(u).removeClass("disabled")
                    },url: a,data: s})
            }
        })
    };
    return n
}), define("myset/subject_input_control", ["jquery"], function(e) {
    var t = function() {
        for (var t = e("#subject_wrap"), n = t.children("ul").children("li"), a = n.length, i = [], r = 0; a > r; r++) {
            var o = n.eq(r), s = o.attr("data-value");
            if (-1 != e.inArray(s, i))
                return o.find(".errorMsg").text("学科重复，请重新选择"), !1;
            o.find(".errorMsg").text(""), i.push(s)
        }
        return !0
    }, n = function() {
        for (var t = e("#subject_wrap"), n = t.children("ul").children("li"), a = n.length, i = 0; a > i; i++) {
            var r = n.eq(i), o = r.find(".errorMsg"), s = r.find("textarea"), c = r.find("textarea").val();
            if ("" == c || void 0 == c)
                return o.text("学科解读不能为空"), s.addClass("error"), !1;
            if (c.replace(/[^\x00-\xff]/g, "**").length < 60)
                return s.addClass("error"), o.text("学科解读不能少于30字"), !1;
            r.find("textarea").removeClass("error"), r.find(".errorMsg").text("")
        }
        return !0
    }, a = function() {
        for (var t = e("input[name=understand_key]"), n = e("input[name=understand_value]"), a = e("input[name=teach_subject]"), i = e("#subject_wrap"), r = i.children("ul").children("li"), o = r.length, s = [], c = [], u = 0; o > u; u++)
            s.push(r.eq(u).attr("data-value")), c.push(r.eq(u).find("textarea").val());
        t.val(s), a.val(s), n.val(c.join("#@#"))
    };
    return {setSubjectValue: function() {
            t() && n() && a()
        },checkSubjectIsRepeat: t,checkSubjectTxt: n}
}), define("myset/slogan_check", ["jquery"], function(e) {
    var t = function() {
        var t = e("input[name=slogan]").val(), n = e("input[name=slogan]"), a = n.siblings(".errorMsg");
        return a.text(""), n.removeClass("error"), "" == t || void 0 == t ? (a.text("教学宣言不能为空"), n.addClass("error"), !1) : t.replace(/[^\x00-\xff]/g, "**").length > 32 ? (n.addClass("error"), a.text("教学宣言最长16个汉字"), !1) : !0
    };
    return t
}), define("myset/tutor_teach_info", ["jquery", "common/doAjax", "myset/subject_input_control", "myset/slogan_check"], function(e, t, n, a) {
    e("#tutor_teach_info .submit").click(function() {
        if (!e(this).hasClass("disabled")) {
            var i = e(this), r = i.text(), o = i.siblings(".errorMsg"), s = i.siblings(".successMsg"), c = e("input[name=teach_range]").val(), u = e("input[name=teach_area]").val(), l = "", d = "", f = "", p = e("input[name=slogan]").val(), h = e("textarea[name=experience]").val(), m = e("textarea[name=prize]").val(), v = e("textarea[name=interest]").val();
            return o.text(""), s.text(""), "" == c || void 0 == c ? void o.text("请选择授课范围") : "" == u || void 0 == u ? void o.text("请选择授课区域") : n.checkSubjectIsRepeat() ? n.checkSubjectTxt() ? a() ? "" == h || void 0 == h ? void o.text("请填写教育经历") : (n.setSubjectValue(), l = e("input[name=understand_key]").val(), d = e("input[name=understand_value]").val(), f = e("input[name=teach_subject]").val(), t({before: function() {
                    return s.text(""), i.text("提交中").addClass("disabled"), !0
                },done: function() {
                    s.text("提交成功"), i.text(r).removeClass("disabled"), setTimeout(function() {
                        e("#teacher_guide .step2 .teacher_guide_myset").length ? e("#teacher_guide .step2 .teacher_guide_myset").hasClass("active") ? window.location.reload() : location.href = "/teacher/myset/sign/set" : window.location.reload()
                    }, 2e3)
                },fail: function(e) {
                    o.text(e.desc), i.text(r).removeClass("disabled")
                },url: "/teacher/updateTeachInfo",data: {teach_range: c,teach_area: u,understand_key: l,understand_value: d,teach_subject: f,slogan: p,experience: h,prize: m,interest: v}}), void 0) : void o.text("教学宣言出错，请重新编辑") : void o.text("学科解读出错，请重新编辑") : void o.text("授课科目重复，请重新选择")
        }
    })
}), define("myset/subject_input", ["jquery", "myset/subject_input_control"], function(e, t) {
    e("#subject_wrap").on("click", "i.close", function() {
        var n = e("#subject_wrap>ul>li").length;
        n > 1 && (e(this).parent().remove(), t.setSubjectValue())
    }), e("#add_subject").click(function() {
        var n = e("#subject_wrap>ul"), a = n.children("li").eq(0).clone();
        n.append(a);
        var i = a.find(".select li");
        return n.children("li").eq(n.children("li").length - 1).find("textarea").text(""), i.eq(0).trigger("click"), t.setSubjectValue(), !1
    }), e("#subject_wrap").on("click", ".select li", function() {
        var n = e(this), a = n.attr("data-value"), i = e(this).parents("li");
        i.attr("data-value", a), t.setSubjectValue()
    }), e("#subject_wrap").on("blur", "li textarea", function() {
        t.setSubjectValue()
    }), e("#subject_wrap").on("blur", "li textarea", function() {
        t.setSubjectValue()
    })
}), define("myset/resetPwd", ["jquery", "common/doAjax"], function(e, t) {
    var n = function(n, a) {
        n.on("click", ".submit", function() {
            if (!e(this).hasClass("disabled")) {
                var i = n.find("input[name=password]").val(), r = n.find("input[name=new_password]").val(), o = e(this).siblings(".errorMsg"), s = e(this).siblings(".successMsg"), c = e(this), u = c.text();
                t({before: function() {
                        o.text(""), s.text("");
                        var e = yousi_tool.checkReg("password", i), t = yousi_tool.checkReg("password", r);
                        return 1 != e ? (o.text("原" + e), !1) : 1 != t ? (o.text("新" + t), !1) : (c.text("提交中").addClass("disabled"), !0)
                    },done: function() {
                        s.text("修改成功"), setTimeout(function() {
                            window.location.reload()
                        }, 2e3)
                    },fail: function(e) {
                        o.text(e.desc), c.text(u).removeClass("disabled")
                    },url: a,data: {oldpwd: i,newpwd: r}})
            }
        })
    };
    return n
}), define("myset/area_init", ["jquery"], function(e) {
    var t = function() {
        var t = e(".area_subject_info");
        e.each(t, function(t, n) {
            var a = e(n), i = a.find("span"), r = a.find("input").val(), o = r.split(",");
            e.each(i, function(t, n) {
                var a = e(n).attr("data-value");
                e.inArray(a, o) > -1 && e(n).addClass("active")
            })
        })
    };
    return t
}), define("myset/resetStatus", ["jquery", "common/doAjax"], function(e, t) {
    e("#change_status .submit").click(function() {
        var n = e("input[name=is_search]").val(), a = e(this).siblings(".errorMsg"), i = e(this).siblings(".successMsg"), r = e(this), o = r.text();
        t({before: function() {
                return a.text(""), i.text(""), r.text("提交中").addClass("disabled"), !0
            },done: function() {
                i.text("修改成功"), r.text(o).removeClass("disabled")
            },fail: function(e) {
                a.text(e.desc), r.text(o).removeClass("disabled")
            },url: "/teacher/teachStatus",data: {is_search: n}})
    })
}), define("myset/safecode_keyboard", ["jquery"], function(e) {
    var t = e("#safecode_keyboard"), n = t.find("input[name=safe_code]"), a = t.find(".safecode_show"), i = (t.find(".safecode_type"), e(".submit").siblings(".errorMsg")), r = [];
    t.on("click", ".safecode_type li", function() {
        var t = e(this), o = (e.trim(n.val()), t.attr("data-value"));
        if (i.text(""), "reset" == o)
            n.val(""), r = [];
        else if ("back" == o)
            r.pop(), n.val(r.join(""));
        else {
            if (r.length > 5)
                return;
            if (0 == r.length && 0 == o)
                return void i.text("安全码首位数字不能为0");
            r.push(o), n.val(r.join(""))
        }
        a.find("li").text(""), e.each(r, function(e, t) {
            a.find("li").eq(e).text(t)
        })
    })
}), require.config({baseUrl: "/Public/js/web",paths: {jquery: "common/jquery"}}), require(["common/input", "common/radio", "common/select", "common/checked", "common/prop"], function() {
}), require(["jquery", "index/createEle", "index/slideFunc"], function(e, t, n) {
    e("#slide_btn").html(t.createSlideBtn(e("#slide ul li")));
    var a = new n(e("#slide ul li"), e("#slide_btn span"), e("#slide_dir .slide_left"), e("#slide_dir .slide_right"));
    a.scroll(), e("#quick_access .quick_access_nav ul li").mouseenter(function() {
        e(this).addClass("active").siblings().removeClass("active");
        var t = e("#quick_access .quick_access_nav ul li").index(e(this));
        return e("#quick_access .quick_access_inner .quick_access_inner_ctn").eq(t).removeClass("fn-hide").siblings().addClass("fn-hide"), !1
    }), e("#parent_giude span").click(function() {
        e("#parent_giude").addClass("active")
    })
}), require(["jquery", "login/login", "login/register", "login/getVerify", "common/checkBrower"], function(e, t, n, a, i) {
    e("#parent_login .submit").click(function() {
        return t(e("#parent_login"), "/Account/login"), !1
    }), e("#tutor_login .submit").click(function() {
        return t(e("#tutor_login"), "/Account/teacherlogin"), !1
    }), e("#parent_register .submit").click(function() {
        return n(e("#parent_register"), "/Account/register"), !1
    }), e("#tutor_register .submit").click(function() {
        return n(e("#tutor_register"), "/Account/teacherRegister"), !1
    }), e("#parent_getpwd .submit").click(function() {
        return n(e("#parent_getpwd"), "/Account/updMemberPwd"), !1
    }), e("#tutor_getpwd .submit").click(function() {
        return n(e("#tutor_getpwd"), "/Account/updTeacherPwd"), !1
    }), e("#parent_verify").click(function() {
        return a(e("#parent_verify"), "/Account/sendverify"), !1
    }), e("#parent_verify_logined").click(function() {
        return a(e("#parent_verify_logined"), "/Account/backPwdsendverify"), !1
    }), e("#parent_verify_safecode").click(function() {
        return a(e("#parent_verify_safecode"), "/Student/getSafeVerify"), !1
    }), e("#tutor_verify").click(function() {
        return a(e("#tutor_verify"), "/Account/teacherSendverify"), !1
    }), e("#tutor_verify_logined").click(function() {
        return a(e("#tutor_verify_logined"), "/Account/backPwdteacherSendverify"), !1
    }), e("#tutor_verify_money").click(function() {
        return a(e("#tutor_verify_money"), "/teacher/getCashVerify"), !1
    }), e("#parentRegister").click(function() {
        return i.versions.ios || i.versions.android ? (alert("提示", "手机平板暂不支持下单，请使用电脑访问优思家教(www.yousi.com)进行注册、下单、请名校家教"), !1) : void 0
    })
}), require(["jquery", "release/release", "release/step1_submit", "release/subject_chose", "release/step2_submit", "release/submit"], function() {
    $("#parent_goto_release, #parent_giude_logined").click(function() {
        return $("#release_prop, .shadow").removeClass("fn-hide"), !1
    })
}), require(["jquery", "tutor_info/scroll", "tutor_info/getEvaluate"], function(e, t, n) {
    e("#evaluePage").length > 0 && (n.init(), t.init(["basic_detail", "resume", "subject_point", "evalute_list"]), t.scroll()), e("#evaluePage").on("click", "a", function() {
        if (e(this).hasClass("current"))
            return !1;
        var t = e(this).attr("data-value");
        return "prev" == t ? n.prev() : "next" == t ? n.next() : n.jump(parseInt(e(this).text())), !1
    }), e("#tutor_info_appoint_bottom, #tutor_info_appoint_top").click(function() {
        var t = e("input[name=parentFlag]").val();
        "parentFlag" == t ? e("#tutorSearchRight").submit() : alert("提示", "登录后才能指定心仪的教员")
    })
}), require(["app/app"], function() {
}), require(["other/other"], function() {
}), require(["jquery", "tutors/mul_filter", "tutors/gotoBack", "tutors/change_address"], function(e) {
    e("#tutors .list").on("click", "tr .control .appoint_current", function() {
        var t = e("input[name=parentFlag]").val();
        "parentFlag" == t ? (e("input[name=checkteachers]").val(e(this).parents("tr").attr("data-value")), e("#tutorSearchRight").submit()) : alert("提示", "登录后才能指定心仪的教员")
    })
}), require(["finance/switch", "finance/switch_bank", "finance/add_bank", "finance/delete_bank", "finance/submit"], function() {
}), require(["order/order_accept", "order/order_scroll"], function() {
}), require(["evaluate/star", "evaluate/edit", "evaluate/submit"], function() {
}), require(["parent/order", "parent/change_order", "parent/change_order_submit", "parent/backmoney_edit", "parent/backmoney_submit", "parent/appoint_show", "parent/appoint_get_tutor", "parent/appoint_submit", "parent/close_no_pay", "parent/refuse_audition", "parent/hire", "parent/complain", "parent/end_class"], function() {
}), require(["course/course"], function() {
}), require(["tutor/order", "tutor/audition_time_submit", "tutor/course_time_submit"], function() {
}), require(["pay/pay", "pay/chose_bank"], function() {
}), require(["jquery", "tutors/teacher_guide"], function() {
}), require(["letter/letter"], function() {
}), require(["exam/exam"], function() {
}), require(["myset/setProvince", "myset/setSchool", "myset/tutor_info", "myset/parent_info", "myset/resetSafeCode", "myset/tutor_teach_info", "myset/subject_input", "myset/slogan_check", "myset/resetPwd", "myset/area_init", "myset/resetStatus", "myset/safecode_keyboard"], function(e, t, n, a, i, r, o, s, c, u) {
    u(), $("input[name=slogan]").blur(function() {
        s()
    }), c($("#tutor_reset_pwd"), "/teacher/setNewPwd"), c($("#parent_reset_pwd"), "/Student/updatePwd"), i("reset", "/student/updateSafecode"), i("set", "/Index/makeSafecode")
}), define("main", function() {
});
