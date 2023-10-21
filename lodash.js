/*!
 Lo-Dash 0.10.0 lodash.com/license
 Underscore.js 1.4.2 underscorejs.org/LICENSE
*/
(function (e, t) {
  function s(e) {
    if (e && e.__wrapped__) return e;
    if (!(this instanceof s)) return new s(e);
    this.__wrapped__ = e;
  }
  function o(e, t, n) {
    t || (t = 0);
    var r = e.length,
      i = r - t >= (n || Z);
    if (i)
      for (var s = {}, n = t - 1; ++n < r; ) {
        var o = e[n] + "";
        (bt.call(s, o) ? s[o] : (s[o] = [])).push(e[n]);
      }
    return function (n) {
      if (i) {
        var r = n + "";
        return bt.call(s, r) && -1 < q(s[r], n);
      }
      return -1 < q(e, n, t);
    };
  }
  function u(e) {
    return e.charCodeAt(0);
  }
  function a(e, n) {
    var r = e.b,
      i = n.b,
      e = e.a,
      n = n.a;
    if (e !== n) {
      if (e > n || e === t) return 1;
      if (e < n || n === t) return -1;
    }
    return r < i ? -1 : 1;
  }
  function f(e, t, n) {
    function r() {
      var u = arguments,
        a = s ? this : t;
      return (
        i || (e = t[o]),
        n.length && (u = u.length ? n.concat(St.call(u)) : n),
        this instanceof r
          ? ((d.prototype = e.prototype),
            (a = new d()),
            (u = e.apply(a, u)),
            T(u) ? u : a)
          : e.apply(a, u)
      );
    }
    var i = x(e),
      s = !n,
      o = t;
    return s && (n = t), i || (t = e), r;
  }
  function l(e, n) {
    return e
      ? "function" != typeof e
        ? function (t) {
            return t[e];
          }
        : n !== t
        ? function (t, r, i) {
            return e.call(n, t, r, i);
          }
        : e
      : X;
  }
  function c() {
    for (
      var e = {
          b: "",
          c: "",
          e: qt,
          f: Qt,
          g: "",
          h: zt,
          i: Vt,
          j: dt,
          k: "",
          l: n,
        },
        t,
        r = 0;
      (t = arguments[r]);
      r++
    )
      for (var i in t) e[i] = t[i];
    (t = e.a),
      (e.d = /^[^,]+/.exec(t)[0]),
      (r =
        "var i,x,l=" +
        e.d +
        ",t=" +
        e.d +
        ";if(!" +
        e.d +
        ")return t;" +
        e.k +
        ";"),
      e.b
        ? ((r += "var m=l.length;i=-1;if(typeof m=='number'){"),
          e.i && (r += "if(k(l)){l=l.split('')}"),
          (r += "while(++i<m){x=l[i];" + e.b + "}}else {"))
        : e.h &&
          (r +=
            "var m=l.length;i=-1;if(m&&j(l)){while(++i<m){x=l[i+=''];" +
            e.g +
            "}}else {"),
      e.e || (r += "var u=typeof l=='function'&&s.call(l,'prototype');");
    if (e.f && e.l)
      (r += "var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];"),
        e.e || (r += "if(!(u&&i=='prototype')){"),
        (r += "x=l[i];" + e.g + ""),
        e.e || (r += "}");
    else {
      r += "for(i in l){";
      if (!e.e || e.l)
        (r += "if("),
          e.e || (r += "!(u&&i=='prototype')"),
          !e.e && e.l && (r += "&&"),
          e.l && (r += "h.call(l,i)"),
          (r += "){");
      r += "x=l[i];" + e.g + ";";
      if (!e.e || e.l) r += "}";
    }
    r += "}";
    if (e.e) {
      r += "var f=l.constructor;";
      for (i = 0; 7 > i; i++)
        (r += "i='" + e.j[i] + "';if("),
          "constructor" == e.j[i] && (r += "!(f&&f.prototype===l)&&"),
          (r += "h.call(l,i)){x=l[i];" + e.g + "}");
    }
    if (e.b || e.h) r += "}";
    return (
      (r += e.c + ";return t"),
      Function("e,h,j,k,p,n,s", "return function(" + t + "){" + r + "}")(
        l,
        bt,
        m,
        N,
        Yt,
        Lt,
        Et
      )
    );
  }
  function h(e) {
    return "\\" + Zt[e];
  }
  function p(e) {
    return un[e];
  }
  function d() {}
  function v(e) {
    return an[e];
  }
  function m(e) {
    return xt.call(e) == _t;
  }
  function g(e) {
    var t = i;
    if (!e || "object" != typeof e || m(e)) return t;
    var n = e.constructor;
    return (!$t ||
      "function" == typeof e.toString ||
      "string" != typeof (e + "")) &&
      (!x(n) || n instanceof n)
      ? Rt
        ? (sn(e, function (e, n, r) {
            return (t = !bt.call(r, n)), i;
          }),
          t === i)
        : (sn(e, function (e, n) {
            t = n;
          }),
          t === i || bt.call(e, t))
      : t;
  }
  function y(e) {
    var t = [];
    return (
      on(e, function (e, n) {
        t.push(n);
      }),
      t
    );
  }
  function b(e, t, n, s, o) {
    if (e == r) return e;
    n && (t = i);
    if ((n = T(e))) {
      var u = xt.call(e);
      if (!Gt[u] || (Wt && m(e))) return e;
      var a = u == Dt,
        n = a || (u == jt ? cn(e) : n);
    }
    if (!n || !t) return n ? (a ? St.call(e) : rn({}, e)) : e;
    n = e.constructor;
    switch (u) {
      case Pt:
      case Ht:
        return new n(+e);
      case Bt:
      case It:
        return new n(e);
      case Ft:
        return n(e.source, ot.exec(e));
    }
    s || (s = []), o || (o = []);
    for (u = s.length; u--; ) if (s[u] == e) return o[u];
    var f = a ? n(e.length) : {};
    return (
      s.push(e),
      o.push(f),
      (a ? pn : on)(e, function (e, n) {
        f[n] = b(e, t, r, s, o);
      }),
      f
    );
  }
  function w(e) {
    var t = [];
    return (
      sn(e, function (e, n) {
        x(e) && t.push(n);
      }),
      t.sort()
    );
  }
  function E(e) {
    var t = {};
    return (
      on(e, function (e, n) {
        t[e] = n;
      }),
      t
    );
  }
  function S(e, t, s, o) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (e == r || t == r) return e === t;
    var u = xt.call(e);
    if (u != xt.call(t)) return i;
    switch (u) {
      case Pt:
      case Ht:
        return +e == +t;
      case Bt:
        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
      case Ft:
      case It:
        return e == t + "";
    }
    var a = u == Dt || u == _t;
    if (Wt && !a && (a = m(e)) && !m(t)) return i;
    if (!a) {
      if (e.__wrapped__ || t.__wrapped__)
        return S(e.__wrapped__ || e, t.__wrapped__ || t);
      if (
        u != jt ||
        ($t &&
          (("function" != typeof e.toString && "string" == typeof (e + "")) ||
            ("function" != typeof t.toString && "string" == typeof (t + ""))))
      )
        return i;
      var u = e.constructor,
        f = t.constructor;
      if (u != f && (!x(u) || !(u instanceof u && x(f) && f instanceof f)))
        return i;
    }
    s || (s = []), o || (o = []);
    for (u = s.length; u--; ) if (s[u] == e) return o[u] == t;
    var u = -1,
      f = n,
      l = 0;
    s.push(e), o.push(t);
    if (a) {
      l = e.length;
      if ((f = l == t.length)) for (; l-- && (f = S(e[l], t[l], s, o)); );
      return f;
    }
    for (var c in e)
      if (bt.call(e, c) && (l++, !bt.call(t, c) || !S(e[c], t[c], s, o)))
        return i;
    for (c in t) if (bt.call(t, c) && !l--) return i;
    if (qt)
      for (; 7 > ++u; )
        if (
          ((c = dt[u]),
          bt.call(e, c) && (!bt.call(t, c) || !S(e[c], t[c], s, o)))
        )
          return i;
    return n;
  }
  function x(e) {
    return "function" == typeof e;
  }
  function T(e) {
    return e ? Yt[typeof e] : i;
  }
  function N(e) {
    return xt.call(e) == It;
  }
  function C(e, t, n) {
    var i = arguments,
      s = 0,
      o = 2,
      u = i[3],
      a = i[4];
    n !== Y && ((u = []), (a = []), "number" != typeof n && (o = i.length));
    for (; ++s < o; )
      on(i[s], function (t, n) {
        var i, s, o;
        if (t && ((s = ln(t)) || cn(t))) {
          for (var f = u.length; f--; ) if ((i = u[f] == t)) break;
          i
            ? (e[n] = a[f])
            : (u.push(t),
              a.push((o = ((o = e[n]), s) ? (ln(o) ? o : []) : cn(o) ? o : {})),
              (e[n] = C(o, t, Y, u, a)));
        } else t != r && (e[n] = t);
      });
    return e;
  }
  function k(e) {
    var t = [];
    return (
      on(e, function (e) {
        t.push(e);
      }),
      t
    );
  }
  function L(e, t, n) {
    var r = -1,
      s = e ? e.length : 0,
      o = i,
      n = (0 > n ? At(0, s + n) : n) || 0;
    return (
      "number" == typeof s
        ? (o = -1 < (N(e) ? e.indexOf(t, n) : q(e, t, n)))
        : pn(e, function (e) {
            if (++r >= n) return !(o = e === t);
          }),
      o
    );
  }
  function A(e, t, r) {
    var i = n,
      t = l(t, r);
    if (ln(e))
      for (var r = -1, s = e.length; ++r < s && (i = !!t(e[r], r, e)); );
    else
      pn(e, function (e, n, r) {
        return (i = !!t(e, n, r));
      });
    return i;
  }
  function O(e, t, n) {
    var r = [],
      t = l(t, n);
    if (ln(e))
      for (var n = -1, i = e.length; ++n < i; ) {
        var s = e[n];
        t(s, n, e) && r.push(s);
      }
    else
      pn(e, function (e, n, i) {
        t(e, n, i) && r.push(e);
      });
    return r;
  }
  function M(e, t, n) {
    var r,
      t = l(t, n);
    return (
      pn(e, function (e, n, s) {
        if (t(e, n, s)) return (r = e), i;
      }),
      r
    );
  }
  function _(e, t, n) {
    var r = -1,
      i = e ? e.length : 0,
      s = Array("number" == typeof i ? i : 0),
      t = l(t, n);
    if (ln(e)) for (; ++r < i; ) s[r] = t(e[r], r, e);
    else
      pn(e, function (e, n, i) {
        s[++r] = t(e, n, i);
      });
    return s;
  }
  function D(e, t, n) {
    var r = -Infinity,
      i = -1,
      s = e ? e.length : 0,
      o = r;
    if (t || !ln(e))
      (t = !t && N(e) ? u : l(t, n)),
        pn(e, function (e, n, i) {
          (n = t(e, n, i)), n > r && ((r = n), (o = e));
        });
    else for (; ++i < s; ) e[i] > o && (o = e[i]);
    return o;
  }
  function P(e, t) {
    var n = [];
    return (
      pn(e, function (e) {
        n.push(e[t]);
      }),
      n
    );
  }
  function H(e, t, n, r) {
    var s = 3 > arguments.length,
      t = l(t, r);
    return (
      pn(e, function (e, r, o) {
        n = s ? ((s = i), e) : t(n, e, r, o);
      }),
      n
    );
  }
  function B(e, t, n, r) {
    var s = e,
      o = e ? e.length : 0,
      u = 3 > arguments.length;
    if ("number" != typeof o)
      var a = hn(e),
        o = a.length;
    else Vt && N(e) && (s = e.split(""));
    return (
      pn(e, function (e, f, l) {
        (f = a ? a[--o] : --o),
          (n = u ? ((u = i), s[f]) : t.call(r, n, s[f], f, l));
      }),
      n
    );
  }
  function j(e, t, n) {
    var r,
      t = l(t, n);
    if (ln(e))
      for (var n = -1, i = e.length; ++n < i && !(r = t(e[n], n, e)); );
    else
      pn(e, function (e, n, i) {
        return !(r = t(e, n, i));
      });
    return !!r;
  }
  function F(e, t, n) {
    if (e) return t == r || n ? e[0] : St.call(e, 0, t);
  }
  function I(e, t) {
    for (var n = -1, r = e ? e.length : 0, i = []; ++n < r; ) {
      var s = e[n];
      ln(s) ? wt.apply(i, t ? s : I(s)) : i.push(s);
    }
    return i;
  }
  function q(e, t, n) {
    var r = -1,
      i = e ? e.length : 0;
    if ("number" == typeof n) r = (0 > n ? At(0, i + n) : n || 0) - 1;
    else if (n) return (r = U(e, t)), e[r] === t ? r : -1;
    for (; ++r < i; ) if (e[r] === t) return r;
    return -1;
  }
  function R(e, t, n) {
    return e ? St.call(e, t == r || n ? 1 : t) : [];
  }
  function U(e, t, n, r) {
    for (
      var i = 0, s = e ? e.length : i, n = n ? l(n, r) : X, t = n(t);
      i < s;

    )
      (r = (i + s) >>> 1), n(e[r]) < t ? (i = r + 1) : (s = r);
    return i;
  }
  function z(e, t, n, r) {
    var s = -1,
      o = e ? e.length : 0,
      u = [],
      a = u;
    "function" == typeof t && ((r = n), (n = t), (t = i));
    var f = !t && 74 < o;
    if (f) var c = {};
    n && ((a = []), (n = l(n, r)));
    for (; ++s < o; ) {
      var r = e[s],
        h = n ? n(r, s, e) : r;
      f && (a = bt.call(c, h + "") ? c[h] : (c[h] = []));
      if (t ? !s || a[a.length - 1] !== h : 0 > q(a, h))
        (n || f) && a.push(h), u.push(r);
    }
    return u;
  }
  function W(e, t) {
    return Kt || (Tt && 2 < arguments.length)
      ? Tt.call.apply(Tt, arguments)
      : f(e, t, St.call(arguments, 2));
  }
  function X(e) {
    return e;
  }
  function V(e) {
    pn(w(e), function (t) {
      var r = (s[t] = e[t]);
      s.prototype[t] = function () {
        var e = [this.__wrapped__];
        return (
          wt.apply(e, arguments),
          (e = r.apply(s, e)),
          this.__chain__ && ((e = new s(e)), (e.__chain__ = n)),
          e
        );
      };
    });
  }
  var n = !0,
    r = null,
    i = !1,
    $ = "object" == typeof exports && exports,
    J = "object" == typeof global && global;
  J.global === J && (e = J);
  var K = [],
    Q = new (function () {})(),
    G = 0,
    Y = Q,
    Z = 30,
    et = e._,
    tt =
      /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,
    nt = /&(?:amp|lt|gt|quot|#x27);/g,
    rt = /\b__p\+='';/g,
    it = /\b(__p\+=)''\+/g,
    st = /(__e\(.*?\)|\b__t\))\+'';/g,
    ot = /\w*$/,
    ut = /(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g,
    at = RegExp(
      "^" +
        (Q.valueOf + "")
          .replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&")
          .replace(/valueOf|for [^\]]+/g, ".+?") +
        "$"
    ),
    ft = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g,
    lt = /<%=([\s\S]+?)%>/g,
    ct = /($^)/,
    ht = /[&<>"']/g,
    pt = /['\n\r\t\u2028\u2029\\]/g,
    dt =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      ),
    vt = Math.ceil,
    mt = K.concat,
    gt = Math.floor,
    yt = at.test((yt = Object.getPrototypeOf)) && yt,
    bt = Q.hasOwnProperty,
    wt = K.push,
    Et = Q.propertyIsEnumerable,
    St = K.slice,
    xt = Q.toString,
    Tt = at.test((Tt = St.bind)) && Tt,
    Nt = at.test((Nt = Array.isArray)) && Nt,
    Ct = e.isFinite,
    kt = e.isNaN,
    Lt = at.test((Lt = Object.keys)) && Lt,
    At = Math.max,
    Ot = Math.min,
    Mt = Math.random,
    _t = "[object Arguments]",
    Dt = "[object Array]",
    Pt = "[object Boolean]",
    Ht = "[object Date]",
    Bt = "[object Number]",
    jt = "[object Object]",
    Ft = "[object RegExp]",
    It = "[object String]",
    qt,
    Rt,
    Ut = ((Ut = { 0: 1, length: 1 }), K.splice.call(Ut, 0, 1), Ut[0]),
    zt = n;
  (function () {
    function e() {
      this.x = 1;
    }
    var t = [];
    e.prototype = { valueOf: 1, y: 1 };
    for (var n in new e()) t.push(n);
    for (n in arguments) zt = !n;
    (qt = !/valueOf/.test(t)), (Rt = "x" != t[0]);
  })(1);
  var Wt = !m(arguments),
    Xt = "x" != St.call("x")[0],
    Vt = "xx" != "x"[0] + Object("x")[0];
  try {
    var $t = ("[object Object]", xt.call(e.document || 0) == jt);
  } catch (Jt) {}
  var Kt = Tt && /\n|Opera/.test(Tt + xt.call(e.opera)),
    Qt = Lt && /^.+$|true/.test(Lt + !!e.attachEvent),
    Gt = {};
  (Gt[_t] = Gt["[object Function]"] = i),
    (Gt[Dt] = Gt[Pt] = Gt[Ht] = Gt[Bt] = Gt[jt] = Gt[Ft] = Gt[It] = n);
  var Yt = {
      boolean: i,
      function: n,
      object: n,
      number: i,
      string: i,
      undefined: i,
    },
    Zt = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "	": "t",
      "\u2028": "u2028",
      "\u2029": "u2029",
    };
  s.templateSettings = {
    escape: /<%-([\s\S]+?)%>/g,
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: lt,
    variable: "",
  };
  var en = {
      a: "o,v,g",
      k: "for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",
      g: "t[i]=x",
      c: "}}",
    },
    tn = {
      a: "d,c,w",
      k: "c=e(c,w)",
      b: "if(c(x,i,d)===false)return t",
      g: "if(c(x,i,d)===false)return t",
    },
    nn = { b: r },
    rn = c(en);
  Wt &&
    (m = function (e) {
      return e ? bt.call(e, "callee") : i;
    });
  var sn = c(tn, nn, { l: i }),
    on = c(tn, nn),
    un = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
    },
    an = E(un),
    fn = c(en, { g: "if(t[i]==null)" + en.g }),
    ln =
      Nt ||
      function (e) {
        return xt.call(e) == Dt;
      };
  x(/x/) &&
    (x = function (e) {
      return "[object Function]" == xt.call(e);
    });
  var cn = yt
      ? function (e) {
          if (!e || "object" != typeof e) return i;
          var t = e.valueOf,
            n = "function" == typeof t && (n = yt(t)) && yt(n);
          return n ? e == n || (yt(e) == n && !m(e)) : g(e);
        }
      : g,
    hn = Lt
      ? function (e) {
          return "function" == typeof e && Et.call(e, "prototype")
            ? y(e)
            : T(e)
            ? Lt(e)
            : [];
        }
      : y,
    pn = c(tn);
  (s.VERSION = "0.10.0"),
    (s.assign = rn),
    (s.after = function (e, t) {
      return 1 > e
        ? t()
        : function () {
            if (1 > --e) return t.apply(this, arguments);
          };
    }),
    (s.bind = W),
    (s.bindAll = function (e) {
      for (
        var t = arguments,
          n = 1 < t.length ? 0 : ((t = w(e)), -1),
          r = t.length;
        ++n < r;

      ) {
        var i = t[n];
        e[i] = W(e[i], e);
      }
      return e;
    }),
    (s.bindKey = function (e, t) {
      return f(e, t, St.call(arguments, 2));
    }),
    (s.chain = function (e) {
      return (e = new s(e)), (e.__chain__ = n), e;
    }),
    (s.clone = b),
    (s.compact = function (e) {
      for (var t = -1, n = e ? e.length : 0, r = []; ++t < n; ) {
        var i = e[t];
        i && r.push(i);
      }
      return r;
    }),
    (s.compose = function () {
      var e = arguments;
      return function () {
        for (var t = arguments, n = e.length; n--; ) t = [e[n].apply(this, t)];
        return t[0];
      };
    }),
    (s.contains = L),
    (s.countBy = function (e, t, n) {
      var r = {},
        t = l(t, n);
      return (
        pn(e, function (e, n, i) {
          (n = t(e, n, i)), bt.call(r, n) ? r[n]++ : (r[n] = 1);
        }),
        r
      );
    }),
    (s.debounce = function (e, t, n) {
      function i() {
        (a = r), n || (o = e.apply(u, s));
      }
      var s, o, u, a;
      return function () {
        var r = n && !a;
        return (
          (s = arguments),
          (u = this),
          clearTimeout(a),
          (a = setTimeout(i, t)),
          r && (o = e.apply(u, s)),
          o
        );
      };
    }),
    (s.defaults = fn),
    (s.defer = function (e) {
      var n = St.call(arguments, 1);
      return setTimeout(function () {
        e.apply(t, n);
      }, 1);
    }),
    (s.delay = function (e, n) {
      var r = St.call(arguments, 2);
      return setTimeout(function () {
        e.apply(t, r);
      }, n);
    }),
    (s.difference = function (e) {
      for (
        var t = -1,
          n = e ? e.length : 0,
          r = mt.apply(K, arguments),
          r = o(r, n),
          i = [];
        ++t < n;

      ) {
        var s = e[t];
        r(s) || i.push(s);
      }
      return i;
    }),
    (s.escape = function (e) {
      return e == r ? "" : (e + "").replace(ht, p);
    }),
    (s.every = A),
    (s.filter = O),
    (s.find = M),
    (s.first = F),
    (s.flatten = I),
    (s.forEach = pn),
    (s.forIn = sn),
    (s.forOwn = on),
    (s.functions = w),
    (s.groupBy = function (e, t, n) {
      var r = {},
        t = l(t, n);
      return (
        pn(e, function (e, n, i) {
          (n = t(e, n, i)), (bt.call(r, n) ? r[n] : (r[n] = [])).push(e);
        }),
        r
      );
    }),
    (s.has = function (e, t) {
      return e ? bt.call(e, t) : i;
    }),
    (s.identity = X),
    (s.indexOf = q),
    (s.initial = function (e, t, n) {
      return e ? St.call(e, 0, -(t == r || n ? 1 : t)) : [];
    }),
    (s.intersection = function (e) {
      var t = arguments,
        n = t.length,
        r = {},
        i = [];
      return (
        pn(e, function (e) {
          if (0 > q(i, e)) {
            for (var s = n; --s; ) if (!(r[s] || (r[s] = o(t[s])))(e)) return;
            i.push(e);
          }
        }),
        i
      );
    }),
    (s.invert = E),
    (s.invoke = function (e, t) {
      var n = St.call(arguments, 2),
        r = "function" == typeof t,
        i = [];
      return (
        pn(e, function (e) {
          i.push((r ? t : e[t]).apply(e, n));
        }),
        i
      );
    }),
    (s.isArguments = m),
    (s.isArray = ln),
    (s.isBoolean = function (e) {
      return e === n || e === i || xt.call(e) == Pt;
    }),
    (s.isDate = function (e) {
      return xt.call(e) == Ht;
    }),
    (s.isElement = function (e) {
      return e ? 1 === e.nodeType : i;
    }),
    (s.isEmpty = function (e) {
      var t = n;
      if (!e) return t;
      var r = xt.call(e),
        s = e.length;
      return r == Dt ||
        r == It ||
        r == _t ||
        (Wt && m(e)) ||
        (r == jt && "number" == typeof s && x(e.splice))
        ? !s
        : (on(e, function () {
            return (t = i);
          }),
          t);
    }),
    (s.isEqual = S),
    (s.isFinite = function (e) {
      return Ct(e) && !kt(parseFloat(e));
    }),
    (s.isFunction = x),
    (s.isNaN = function (e) {
      return xt.call(e) == Bt && e != +e;
    }),
    (s.isNull = function (e) {
      return e === r;
    }),
    (s.isNumber = function (e) {
      return xt.call(e) == Bt;
    }),
    (s.isObject = T),
    (s.isPlainObject = cn),
    (s.isRegExp = function (e) {
      return xt.call(e) == Ft;
    }),
    (s.isString = N),
    (s.isUndefined = function (e) {
      return e === t;
    }),
    (s.keys = hn),
    (s.last = function (e, t, n) {
      if (e) {
        var i = e.length;
        return t == r || n ? e[i - 1] : St.call(e, -t || i);
      }
    }),
    (s.lastIndexOf = function (e, t, n) {
      var r = e ? e.length : 0;
      for (
        "number" == typeof n && (r = (0 > n ? At(0, r + n) : Ot(n, r - 1)) + 1);
        r--;

      )
        if (e[r] === t) return r;
      return -1;
    }),
    (s.map = _),
    (s.max = D),
    (s.memoize = function (e, t) {
      var n = {};
      return function () {
        var r = t ? t.apply(this, arguments) : arguments[0];
        return bt.call(n, r) ? n[r] : (n[r] = e.apply(this, arguments));
      };
    }),
    (s.merge = C),
    (s.min = function (e, t, n) {
      var r = Infinity,
        i = -1,
        s = e ? e.length : 0,
        o = r;
      if (t || !ln(e))
        (t = !t && N(e) ? u : l(t, n)),
          pn(e, function (e, n, i) {
            (n = t(e, n, i)), n < r && ((r = n), (o = e));
          });
      else for (; ++i < s; ) e[i] < o && (o = e[i]);
      return o;
    }),
    (s.mixin = V),
    (s.noConflict = function () {
      return (e._ = et), this;
    }),
    (s.object = function (e, t) {
      for (var n = -1, r = e ? e.length : 0, i = {}; ++n < r; ) {
        var s = e[n];
        t ? (i[s] = t[n]) : (i[s[0]] = s[1]);
      }
      return i;
    }),
    (s.omit = function (e, t, n) {
      var r = "function" == typeof t,
        i = {};
      if (r) t = l(t, n);
      else var s = mt.apply(K, arguments);
      return (
        sn(e, function (e, n, o) {
          if (r ? !t(e, n, o) : 0 > q(s, n, 1)) i[n] = e;
        }),
        i
      );
    }),
    (s.once = function (e) {
      var t,
        s = i;
      return function () {
        return s ? t : ((s = n), (t = e.apply(this, arguments)), (e = r), t);
      };
    }),
    (s.pairs = function (e) {
      var t = [];
      return (
        on(e, function (e, n) {
          t.push([n, e]);
        }),
        t
      );
    }),
    (s.partial = function (e) {
      return f(e, St.call(arguments, 1));
    }),
    (s.pick = function (e, t, n) {
      var r = {};
      if ("function" != typeof t)
        for (var i = 0, s = mt.apply(K, arguments), o = s.length; ++i < o; ) {
          var u = s[i];
          u in e && (r[u] = e[u]);
        }
      else
        (t = l(t, n)),
          sn(e, function (e, n, i) {
            t(e, n, i) && (r[n] = e);
          });
      return r;
    }),
    (s.pluck = P),
    (s.random = function (e, t) {
      return (
        e == r && t == r && (t = 1),
        (e = +e || 0),
        t == r && ((t = e), (e = 0)),
        e + gt(Mt() * ((+t || 0) - e + 1))
      );
    }),
    (s.range = function (e, t, n) {
      (e = +e || 0), (n = +n || 1), t == r && ((t = e), (e = 0));
      for (var i = -1, t = At(0, vt((t - e) / n)), s = Array(t); ++i < t; )
        (s[i] = e), (e += n);
      return s;
    }),
    (s.reduce = H),
    (s.reduceRight = B),
    (s.reject = function (e, t, n) {
      return (
        (t = l(t, n)),
        O(e, function (e, n, r) {
          return !t(e, n, r);
        })
      );
    }),
    (s.rest = R),
    (s.result = function (e, t) {
      var n = e ? e[t] : r;
      return x(n) ? e[t]() : n;
    }),
    (s.shuffle = function (e) {
      var t = -1,
        n = Array(e ? e.length : 0);
      return (
        pn(e, function (e) {
          var r = gt(Mt() * (++t + 1));
          (n[t] = n[r]), (n[r] = e);
        }),
        n
      );
    }),
    (s.size = function (e) {
      var t = e ? e.length : 0;
      return "number" == typeof t ? t : hn(e).length;
    }),
    (s.some = j),
    (s.sortBy = function (e, t, n) {
      var r = [],
        t = l(t, n);
      pn(e, function (e, n, i) {
        r.push({ a: t(e, n, i), b: n, c: e });
      }),
        (e = r.length);
      for (r.sort(a); e--; ) r[e] = r[e].c;
      return r;
    }),
    (s.sortedIndex = U),
    (s.tap = function (e, t) {
      return t(e), e;
    }),
    (s.template = function (e, t, n) {
      e || (e = ""), n || (n = {});
      var r,
        i,
        o = s.templateSettings,
        u = 0,
        a = n.interpolate || o.interpolate || ct,
        f = "__p += '",
        l = n.variable || o.variable,
        c = l;
      e.replace(
        RegExp(
          (n.escape || o.escape || ct).source +
            "|" +
            a.source +
            "|" +
            (a === lt ? ft : ct).source +
            "|" +
            (n.evaluate || o.evaluate || ct).source +
            "|$",
          "g"
        ),
        function (t, n, i, s, o, a) {
          i || (i = s),
            (f += e.slice(u, a).replace(pt, h)),
            (f += n
              ? "'+__e(" + n + ")+'"
              : o
              ? "';" + o + ";__p+='"
              : i
              ? "'+((__t=(" + i + "))==null?'':__t)+'"
              : ""),
            r || (r = o || tt.test(n || i)),
            (u = a + t.length);
        }
      ),
        (f += "';"),
        c ||
          ((l = "obj"),
          r
            ? (f = "with(" + l + "){" + f + "}")
            : ((n = RegExp("(\\(\\s*)" + l + "\\." + l + "\\b", "g")),
              (f = f.replace(ut, "$&" + l + ".").replace(n, "$1__d")))),
        (f = (r ? f.replace(rt, "") : f).replace(it, "$1").replace(st, "$1;")),
        (f =
          "function(" +
          l +
          "){" +
          (c ? "" : l + "||(" + l + "={});") +
          "var __t,__p='',__e=_.escape" +
          (r
            ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"
            : (c ? "" : ",__d=" + l + "." + l + "||" + l) + ";") +
          f +
          "return __p}");
      try {
        i = Function("_", "return " + f)(s);
      } catch (p) {
        throw ((p.source = f), p);
      }
      return t ? i(t) : ((i.source = f), i);
    }),
    (s.throttle = function (e, t) {
      function n() {
        (a = new Date()), (u = r), (s = e.apply(o, i));
      }
      var i,
        s,
        o,
        u,
        a = 0;
      return function () {
        var r = new Date(),
          f = t - (r - a);
        return (
          (i = arguments),
          (o = this),
          0 >= f
            ? (clearTimeout(u), (a = r), (s = e.apply(o, i)))
            : u || (u = setTimeout(n, f)),
          s
        );
      };
    }),
    (s.times = function (e, t, n) {
      for (var e = +e || 0, r = -1, i = Array(e); ++r < e; )
        i[r] = t.call(n, r);
      return i;
    }),
    (s.toArray = function (e) {
      return e && "number" == typeof e.length
        ? (Xt ? N(e) : "string" == typeof e)
          ? e.split("")
          : St.call(e)
        : k(e);
    }),
    (s.unescape = function (e) {
      return e == r ? "" : (e + "").replace(nt, v);
    }),
    (s.union = function () {
      return z(mt.apply(K, arguments));
    }),
    (s.uniq = z),
    (s.uniqueId = function (e) {
      var t = G++;
      return e ? e + t : t;
    }),
    (s.values = k),
    (s.where = function (e, t) {
      var n = hn(t);
      return O(e, function (e) {
        for (var r = n.length; r--; ) {
          var i = e[n[r]] === t[n[r]];
          if (!i) break;
        }
        return !!i;
      });
    }),
    (s.without = function (e) {
      for (
        var t = -1, n = e ? e.length : 0, r = o(arguments, 1, 20), i = [];
        ++t < n;

      ) {
        var s = e[t];
        r(s) || i.push(s);
      }
      return i;
    }),
    (s.wrap = function (e, t) {
      return function () {
        var n = [e];
        return wt.apply(n, arguments), t.apply(this, n);
      };
    }),
    (s.zip = function (e) {
      for (
        var t = -1, n = e ? D(P(arguments, "length")) : 0, r = Array(n);
        ++t < n;

      )
        r[t] = P(arguments, t);
      return r;
    }),
    (s.all = A),
    (s.any = j),
    (s.collect = _),
    (s.detect = M),
    (s.drop = R),
    (s.each = pn),
    (s.extend = rn),
    (s.foldl = H),
    (s.foldr = B),
    (s.head = F),
    (s.include = L),
    (s.inject = H),
    (s.methods = w),
    (s.select = O),
    (s.tail = R),
    (s.take = F),
    (s.unique = z),
    V(s),
    (s.prototype.chain = function () {
      return (this.__chain__ = n), this;
    }),
    (s.prototype.value = function () {
      return this.__wrapped__;
    }),
    pn("pop push reverse shift sort splice unshift".split(" "), function (e) {
      var t = K[e];
      s.prototype[e] = function () {
        var e = this.__wrapped__;
        return (
          t.apply(e, arguments),
          Ut && e.length === 0 && delete e[0],
          this.__chain__ && ((e = new s(e)), (e.__chain__ = n)),
          e
        );
      };
    }),
    pn(["concat", "join", "slice"], function (e) {
      var t = K[e];
      s.prototype[e] = function () {
        var e = t.apply(this.__wrapped__, arguments);
        return this.__chain__ && ((e = new s(e)), (e.__chain__ = n)), e;
      };
    }),
    typeof define == "function" && typeof define.amd == "object" && define.amd
      ? ((e._ = s),
        define(function () {
          return s;
        }))
      : $
      ? "object" == typeof module && module && module.exports == $
        ? ((module.exports = s)._ = s)
        : ($._ = s)
      : (e._ = s);
})(this);
