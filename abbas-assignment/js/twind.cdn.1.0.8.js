var twind = (function (e) {
  "use strict";
  let t;
  function r() {
    return (r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        }
        return e;
      }).apply(this, arguments);
  }
  function o() {
    return r.apply(this, arguments);
  }
  function n(e, t) {
    if (null == e) return {};
    var r,
      o,
      n = {},
      i = Object.keys(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
    return n;
  }
  function i(e) {
    return [...e.v, (e.i ? "!" : "") + e.n].join(":");
  }
  let a =
    ("undefined" != typeof CSS && CSS.escape) ||
    ((e) =>
      e
        .replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&")
        .replace(/^\d/, "\\3$& "));
  function l(e) {
    for (var t = 9, r = e.length; r--; )
      t = Math.imul(t ^ e.charCodeAt(r), 1597334677);
    return "#" + ((t ^ (t >>> 9)) >>> 0).toString(36);
  }
  function s(e, t = "@media ") {
    return (
      t +
      c(e)
        .map(
          (e) => (
            "string" == typeof e && (e = { min: e }),
            e.raw ||
              Object.keys(e)
                .map((t) => `(${t}-width:${e[t]})`)
                .join(" and ")
          ),
        )
        .join(",")
    );
  }
  function c(e = []) {
    return Array.isArray(e) ? e : null == e ? [] : [e];
  }
  function d(e) {
    return e;
  }
  function f() {}
  let p = {
    d: 0,
    b: 134217728,
    c: 268435456,
    a: 671088640,
    u: 805306368,
    o: 939524096,
  };
  function u(e) {
    var t;
    return (null == (t = e.match(/[-=:;]/g)) ? void 0 : t.length) || 0;
  }
  function g(e) {
    return (
      (Math.min(
        /(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)
          ? Math.max(
              0,
              29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43,
            )
          : 0,
        15,
      ) <<
        22) |
      (Math.min(u(e), 15) << 18)
    );
  }
  let m = [
    "rst-c",
    "st-ch",
    "h-chi",
    "y-lin",
    "nk",
    "sited",
    "ecked",
    "pty",
    "ad-on",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "tiona",
    "quire",
  ];
  function b({ n: e, i: t, v: r = [] }, o, n, a) {
    for (let l of (e && (e = i({ n: e, i: t, v: r })), (a = [...c(a)]), r)) {
      let d = o.theme("screens", l);
      for (let f of c((d && s(d)) || o.v(l))) {
        var p;
        a.push(f),
          (n |= d
            ? 67108864 | g(f)
            : "dark" == l
            ? 1073741824
            : "@" == f[0]
            ? g(f)
            : ((p = f),
              1 <<
                ~(
                  (/:([a-z-]+)/.test(p) && ~m.indexOf(RegExp.$1.slice(2, 7))) ||
                  -18
                )));
      }
    }
    return { n: e, p: n, r: a, i: t };
  }
  let h = new Map();
  function x(e) {
    if (e.d) {
      let t = [],
        r = w(
          e.r.reduce(
            (e, r) =>
              "@" == r[0]
                ? (t.push(r), e)
                : r
                ? w(e, (e) =>
                    w(r, (t) => {
                      let r = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(t);
                      if (r) {
                        let o = e.indexOf(r[1]);
                        return ~o
                          ? e.slice(0, o) + r[0] + e.slice(o + r[1].length)
                          : y(e, t);
                      }
                      return y(t, e);
                    }),
                  )
                : e,
            "&",
          ),
          (t) => y(t, e.n ? "." + a(e.n) : ""),
        );
      return (
        r && t.push(r.replace(/:merge\((.+?)\)/g, "$1")),
        t.reduceRight((e, t) => t + "{" + e + "}", e.d)
      );
    }
  }
  function w(e, t) {
    return e.replace(
      / *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,
      (e, r, o) => t(r) + o,
    );
  }
  function y(e, t) {
    return e.replace(/&/g, t);
  }
  let v = new Intl.Collator("en", { numeric: !0 });
  function k(e, t) {
    for (var r = 0, o = e.length; r < o; ) {
      let n = (o + r) >> 1;
      0 >= $(e[n], t) ? (r = n + 1) : (o = n);
    }
    return o;
  }
  function $(e, t) {
    let r = e.p & p.o;
    return r == (t.p & p.o) && (r == p.b || r == p.o)
      ? 0
      : e.p - t.p ||
          e.o - t.o ||
          v.compare(S(e.n), S(t.n)) ||
          v.compare(C(e.n), C(t.n));
  }
  function S(e) {
    return (e || "").split(/:/).pop().split("/").pop() || "\0";
  }
  function C(e) {
    return (
      (e || "").replace(/\W/g, (e) =>
        String.fromCharCode(127 + e.charCodeAt(0)),
      ) + "\0"
    );
  }
  function z(e, t) {
    return Math.round(parseInt(e, 16) * t);
  }
  function A(e, t = {}) {
    if ("function" == typeof e) return e(t);
    let { opacityValue: r = "1", opacityVariable: o } = t,
      n = o ? `var(${o})` : r;
    if (e.includes("<alpha-value>")) return e.replace("<alpha-value>", n);
    if ("#" == e[0] && (4 == e.length || 7 == e.length)) {
      let i = (e.length - 1) / 3,
        a = [17, 1, 0.062272][i - 1];
      return `rgba(${[
        z(e.substr(1, i), a),
        z(e.substr(1 + i, i), a),
        z(e.substr(1 + 2 * i, i), a),
        n,
      ]})`;
    }
    return "1" == n
      ? e
      : "0" == n
      ? "#0000"
      : e.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n})`);
  }
  function F(e, t, r, o, n = []) {
    return (function e(t, { n: r, p: o, r: n = [], i: i }, a) {
      let d = [],
        f = "",
        m = 0,
        b = 0;
      for (let h in t || {}) {
        var w, y;
        let v = t[h];
        if ("@" == h[0]) {
          if (!v) continue;
          if ("a" == h[1]) {
            d.push(...W(r, o, M("" + v), a, o, n, i, !0));
            continue;
          }
          if ("l" == h[1]) {
            for (let k of c(v))
              d.push(
                ...e(
                  k,
                  {
                    n: r,
                    p: ((w = p[h[7]]), (o & ~p.o) | w),
                    r: "d" == h[7] ? [] : n,
                    i: i,
                  },
                  a,
                ),
              );
            continue;
          }
          if ("i" == h[1]) {
            d.push(
              ...c(v).map((e) => ({ p: -1, o: 0, r: [], d: h + " " + e })),
            );
            continue;
          }
          if ("k" == h[1]) {
            d.push({
              p: p.d,
              o: 0,
              r: [h],
              d: e(v, { p: p.d }, a).map(x).join(""),
            });
            continue;
          }
          if ("f" == h[1]) {
            d.push(
              ...c(v).map((t) => ({
                p: p.d,
                o: 0,
                r: [h],
                d: e(t, { p: p.d }, a).map(x).join(""),
              })),
            );
            continue;
          }
        }
        if ("object" != typeof v || Array.isArray(v))
          "label" == h && v
            ? (r = v + l(JSON.stringify([o, i, t])))
            : (v || 0 === v) &&
              ((h = h.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase())),
              (b += 1),
              (m = Math.max(
                m,
                "-" == (y = h)[0]
                  ? 0
                  : u(y) +
                      (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(
                        y,
                      )
                        ? +!!RegExp.$1 || -!!RegExp.$2
                        : 0) +
                      1,
              )),
              (f +=
                (f ? ";" : "") +
                c(v)
                  .map((e) =>
                    a.s(h, O("" + e, a.theme) + (i ? " !important" : "")),
                  )
                  .join(";")));
        else if ("@" == h[0] || h.includes("&")) {
          let S = o;
          "@" == h[0] &&
            ((h = h.replace(/\bscreen\(([^)]+)\)/g, (e, t) => {
              let r = a.theme("screens", t);
              return r ? ((S |= 67108864), s(r, "")) : e;
            })),
            (S |= g(h))),
            d.push(...e(v, { n: r, p: S, r: [...n, h], i: i }, a));
        } else d.push(...e(v, { p: o, r: [...n, h] }, a));
      }
      return (
        d.unshift({
          n: r,
          p: o,
          o: Math.max(0, 15 - b) + 1.5 * Math.min(m || 15, 15),
          r: n,
          d: f,
        }),
        d.sort($)
      );
    })(e, b(t, r, o, n), r);
  }
  function O(e, t) {
    return e.replace(
      /theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,
      (e, r, o, n, i = "") => {
        let a = t(o, i);
        return "function" == typeof a && /color|fill|stroke/i.test(o)
          ? A(a)
          : "" + c(a).filter((e) => Object(e) !== e);
      },
    );
  }
  function j(e, t) {
    let r;
    let n = [];
    for (let i of e)
      i.d && i.n
        ? (null == r ? void 0 : r.p) == i.p && "" + r.r == "" + i.r
          ? ((r.c = [r.c, i.c].filter(Boolean).join(" ")),
            (r.d = r.d + ";" + i.d))
          : n.push((r = o({}, i, { n: i.n && t })))
        : n.push(o({}, i, { n: i.n && t }));
    return n;
  }
  function T(e, t, r = p.u, n, a) {
    let l = [];
    for (let s of e)
      for (let d of (function (e, t, r, n, a) {
        var l;
        e = o({}, e, { i: e.i || a });
        let s = (function (e, t) {
          let r = h.get(e.n);
          return r ? r(e, t) : t.r(e.n, "dark" == e.v[0]);
        })(e, t);
        return s
          ? "string" == typeof s
            ? (({ r: n, p: r } = b(e, t, r, n)), j(T(M(s), t, r, n, e.i), e.n))
            : Array.isArray(s)
            ? s.map((e) => {
                var t, i;
                return o({ o: 0 }, e, {
                  r: [...c(n), ...c(e.r)],
                  p: ((t = r), (i = null != (l = e.p) ? l : r), (t & ~p.o) | i),
                });
              })
            : F(s, e, t, r, n)
          : [{ c: i(e), p: 0, o: 0, r: [] }];
      })(s, t, r, n, a))
        l.splice(k(l, d), 0, d);
    return l;
  }
  function W(e, t, r, n, i, a, l, s) {
    return j(
      (s ? r.flatMap((e) => T([e], n, i, a, l)) : T(r, n, i, a, l)).map((e) =>
        e.p & p.o && (e.n || t == p.b)
          ? o({}, e, { p: (e.p & ~p.o) | t, o: 0 })
          : e,
      ),
      e,
    );
  }
  function D(e, t) {
    if ("(" != e[e.length - 1]) {
      let r = [],
        o = !1,
        n = !1,
        i = "";
      for (let a of e)
        if (!("(" == a || /[~@]$/.test(a))) {
          if (("!" == a[0] && ((a = a.slice(1)), (o = !o)), a.endsWith(":"))) {
            r["dark:" == a ? "unshift" : "push"](a.slice(0, -1));
            continue;
          }
          "-" == a[0] && ((a = a.slice(1)), (n = !n)),
            a.endsWith("-") && (a = a.slice(0, -1)),
            a && "&" != a && (i += (i && "-") + a);
        }
      i && (n && (i = "-" + i), t[0].push({ n: i, v: r.filter(E), i: o }));
    }
  }
  function E(e, t, r) {
    return r.indexOf(e) == t;
  }
  let R = new Map();
  function M(e) {
    let t = R.get(e);
    if (!t) {
      let r = [],
        o = [[]],
        n = 0,
        a = 0,
        s = null,
        c = 0,
        d = (t, i = 0) => {
          n != c && (r.push(e.slice(n, c + i)), t && D(r, o)), (n = c + 1);
        };
      for (; c < e.length; c++) {
        let f = e[c];
        if (a) "\\" != e[c - 1] && (a += +("[" == f) || -("]" == f));
        else if ("[" == f) a += 1;
        else if (s)
          "\\" != e[c - 1] &&
            s.test(e.slice(c)) &&
            ((s = null), (n = c + RegExp.lastMatch.length));
        else if (
          "/" == f &&
          "\\" != e[c - 1] &&
          ("*" == e[c + 1] || "/" == e[c + 1])
        )
          s = "*" == e[c + 1] ? /^\*\// : /^[\r\n]/;
        else if ("(" == f) d(), r.push(f);
        else if (":" == f) ":" != e[c + 1] && d(!1, 1);
        else if (/[\s,)]/.test(f)) {
          d(!0);
          let u = r.lastIndexOf("(");
          if (")" == f) {
            let g = r[u - 1];
            if (/[~@]$/.test(g)) {
              let m = o.shift();
              (r.length = u), D([...r, "#"], o);
              let { v: x } = o[0].pop();
              for (let w of m)
                w.v.splice(+("dark" == w.v[0]) - +("dark" == x[0]), x.length);
              D(
                [
                  ...r,
                  (function (e, t, r, o) {
                    var n;
                    return (
                      (n = (e, n) => {
                        let { n: i, p: a, r: l, i: s } = b(e, n, t);
                        return r && W(i, t, r, n, a, l, s, o);
                      }),
                      h.set(e, n),
                      e
                    );
                  })(
                    g.length > 1
                      ? g.slice(0, -1) + l(JSON.stringify([g, m]))
                      : g +
                          "(" +
                          (function (e, t = ",") {
                            return e.map(i).join(t);
                          })(m) +
                          ")",
                    p.a,
                    m,
                    /@$/.test(g),
                  ),
                ],
                o,
              );
            }
            u = r.lastIndexOf("(", u - 1);
          }
          r.length = u + 1;
        } else /[~@]/.test(f) && "(" == e[c + 1] && o.unshift([]);
      }
      d(!0), R.set(e, (t = o[0]));
    }
    return t;
  }
  function L(e, t, r) {
    return [e, V(t, r)];
  }
  function V(e, t) {
    return "function" == typeof e
      ? e
      : "string" == typeof e && /^[\w-]+$/.test(e)
      ? (r, o) => ({ [e]: t ? t(r, o) : U(r, 1) })
      : (t) => e || { [t[1]]: U(t, 2) };
  }
  function U(e, t, r = e.slice(t).find(Boolean) || e.$$ || e.input) {
    return "-" == e.input[0] ? `calc(${r} * -1)` : r;
  }
  function I(e, t, r, o) {
    return [
      e,
      (function (e, t, r) {
        let o =
          "string" == typeof t
            ? (e, o) => ({ [t]: r ? r(e, o) : e._ })
            : t || (({ 1: e, _: t }, r, o) => ({ [e || o]: t }));
        return (t, r) => {
          var n;
          let i = P(e || t[1]),
            a = null != (n = r.theme(i, t.$$)) ? n : _(t.$$, i, r);
          if (null != a) return (t._ = U(t, 0, a)), o(t, r, i);
        };
      })(t, r, o),
    ];
  }
  function B(e, t = {}, r) {
    return [
      e,
      (function (e = {}, t) {
        return (r, o) => {
          let { section: n = P(r[0]).replace("-", "") + "Color" } = e,
            [i, a] = (
              r.$$.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []
            ).slice(1);
          if (!i) return;
          let l = o.theme(n, i) || _(i, n, o);
          if (!l || "object" == typeof l) return;
          let {
              opacityVariable: s = `--tw-${r[0].replace(/-$/, "")}-opacity`,
              opacitySection: c = n.replace("Color", "Opacity"),
              property: d = n,
              selector: f,
            } = e,
            p = o.theme(c, a || "DEFAULT") || (a && _(a, c, o)),
            u =
              t ||
              (({ _: e }) => {
                let t = N(d, e);
                return f ? { [f]: t } : t;
              });
          r._ = {
            value: A(l, {
              opacityVariable: s || void 0,
              opacityValue: p || void 0,
            }),
            color: (e) => A(l, e),
            opacityVariable: s || void 0,
            opacityValue: p || void 0,
          };
          let g = u(r, o);
          if (!r.dark) {
            let m = o.d(n, i, l);
            m &&
              m !== l &&
              ((r._ = {
                value: A(m, {
                  opacityVariable: s || void 0,
                  opacityValue: p || "1",
                }),
                color: (e) => A(m, e),
                opacityVariable: s || void 0,
                opacityValue: p || void 0,
              }),
              (g = { "&": g, [o.v("dark")]: u(r, o) }));
          }
          return g;
        };
      })(t, r),
    ];
  }
  function N(e, t) {
    let r = {};
    return (
      "string" == typeof t
        ? (r[e] = t)
        : (t.opacityVariable &&
            t.value.includes(t.opacityVariable) &&
            (r[t.opacityVariable] = t.opacityValue || "1"),
          (r[e] = t.value)),
      r
    );
  }
  function _(e, t, r) {
    if ("[" == e[0] && "]" == e.slice(-1)) {
      if (((e = H(O(e.slice(1, -1), r.theme))), !t)) return e;
      if (
        !(
          (/color|fill|stroke/i.test(t) &&
            !(
              /^color:/.test(e) ||
              /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e)
            )) ||
          (/image/i.test(t) && !(/^image:/.test(e) || /^[a-z-]+\(/.test(e))) ||
          (/weight/i.test(t) &&
            !(/^(number|any):/.test(e) || /^\d+$/.test(e))) ||
          (/position/i.test(t) && /^(length|size):/.test(e))
        )
      )
        return e.replace(/^[a-z-]+:/, "");
    }
  }
  function P(e) {
    return e.replace(/-./g, (e) => e[1].toUpperCase());
  }
  function H(e) {
    return e.includes("url(")
      ? e.replace(
          /(.*?)(url\(.*?\))(.*?)/g,
          (e, t = "", r, o = "") => H(t) + r + H(o),
        )
      : e
          .replace(
            /(^|[^\\])_+/g,
            (e, t) => t + " ".repeat(e.length - t.length),
          )
          .replace(/\\_/g, "_")
          .replace(/(calc|min|max|clamp)\(.+\)/g, (e) =>
            e.replace(
              /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
              "$1 $2 ",
            ),
          );
  }
  function q(e) {
    var { presets: t = [] } = e,
      r = n(e, ["presets"]);
    let i = {
      darkMode: void 0,
      darkColor: void 0,
      preflight: !1 !== r.preflight && [],
      theme: {},
      variants: c(r.variants),
      rules: c(r.rules),
      ignorelist: c(r.ignorelist),
      hash: void 0,
      stringify: (e, t) => e + ":" + t,
      finalize: [],
    };
    for (let a of c([
      ...t,
      {
        darkMode: r.darkMode,
        darkColor: r.darkColor,
        preflight: !1 !== r.preflight && c(r.preflight),
        theme: r.theme,
        hash: r.hash,
        stringify: r.stringify,
        finalize: r.finalize,
      },
    ])) {
      let {
        preflight: l,
        darkMode: s = i.darkMode,
        darkColor: d = i.darkColor,
        theme: f,
        variants: p,
        rules: u,
        ignorelist: g,
        hash: m = i.hash,
        stringify: b = i.stringify,
        finalize: h,
      } = "function" == typeof a ? a(i) : a;
      i = {
        preflight: !1 !== i.preflight && !1 !== l && [...i.preflight, ...c(l)],
        darkMode: s,
        darkColor: d,
        theme: o({}, i.theme, f, {
          extend: o({}, i.theme.extend, null == f ? void 0 : f.extend),
        }),
        variants: [...i.variants, ...c(p)],
        rules: [...i.rules, ...c(u)],
        ignorelist: [...i.ignorelist, ...c(g)],
        hash: m,
        stringify: b,
        finalize: [...i.finalize, ...c(h)],
      };
    }
    return i;
  }
  function G(e, t, r, o, n, i) {
    for (let a of t) {
      let l = r.get(a);
      l || r.set(a, (l = o(a)));
      let s = l(e, n, i);
      if (s) return s;
    }
  }
  function Y(e) {
    var t;
    return X(e[0], "function" == typeof (t = e[1]) ? t : () => t);
  }
  function J(e) {
    var t, r;
    return Array.isArray(e) ? X(e[0], V(e[1], e[2])) : X(e, V(t, r));
  }
  function X(e, t) {
    return Z(e, (e, r, o, n) => {
      let i = r.exec(e);
      if (i) return (i.$$ = e.slice(i[0].length)), (i.dark = n), t(i, o);
    });
  }
  function Z(e, t) {
    let r = c(e).map(K);
    return (e, o, n) => {
      for (let i of r) {
        let a = t(e, i, o, n);
        if (a) return a;
      }
    };
  }
  function K(e) {
    return "string" == typeof e
      ? RegExp("^" + e + (e.includes("$") || "-" == e.slice(-1) ? "" : "$"))
      : e;
  }
  function Q(e) {
    let t = document.querySelector(e || 'style[data-twind=""]');
    return (
      (t && "STYLE" == t.tagName) ||
        ((t = document.createElement("style")), document.head.prepend(t)),
      (t.dataset.twind = "claimed"),
      t
    );
  }
  function ee(e, t) {
    let r = e
      ? (function (e) {
          let t = e && "string" != typeof e ? e : Q(e);
          return {
            target: t,
            snapshot() {
              let e = Array.from(t.childNodes, (e) => e.textContent);
              return () => {
                this.clear(), e.forEach(this.insert);
              };
            },
            clear() {
              t.textContent = "";
            },
            destroy() {
              t.remove();
            },
            insert(e, r) {
              t.insertBefore(
                document.createTextNode(e),
                t.childNodes[r] || null,
              );
            },
            resume: f,
          };
        })()
      : (function (e) {
          let t = (null == e ? void 0 : e.cssRules)
            ? e
            : (e && "string" != typeof e ? e : Q(e)).sheet;
          return {
            target: t,
            snapshot() {
              let e = Array.from(t.cssRules, (e) => e.cssText);
              return () => {
                this.clear(), e.forEach(this.insert);
              };
            },
            clear() {
              for (let e = t.cssRules.length; e--; ) t.deleteRule(e);
            },
            destroy() {
              var e;
              null == (e = t.ownerNode) || e.remove();
            },
            insert(e, r) {
              try {
                t.insertRule(e, r);
              } catch (o) {
                t.insertRule(":root{}", r);
              }
            },
            resume: f,
          };
        })();
    return t || (r.resume = et), r;
  }
  function et(e, t) {
    var r, o;
    let n =
        ((r = this.target).ownerNode || r).textContent ||
        (r.cssRules ? Array.from(r.cssRules, (e) => e.cssText) : c(r)).join(""),
      i = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;
    if (i.test(n)) {
      let a;
      for (let l of ((i.lastIndex = 0),
      this.clear(),
      document.querySelectorAll("[class]")))
        e(l.getAttribute("class"));
      for (
        ;
        (o = i.exec(n)),
          a &&
            t(n.slice(a.index + a[0].length, null == o ? void 0 : o.index), {
              p: parseInt(a[1], 36),
              o: parseInt(a[2], 36) / 2,
              n: a[3],
            }),
          (a = o);

      );
    }
  }
  let er = new Proxy(f, {
    apply: (e, r, o) => t(o[0]),
    get(e, r) {
      let o = t[r];
      return "function" == typeof o
        ? function () {
            return o.apply(t, arguments);
          }
        : o;
    },
  });
  var eo = new Map([
    ["align-self", "-ms-grid-row-align"],
    ["color-adjust", "-webkit-print-color-adjust"],
    ["column-gap", "grid-column-gap"],
    ["forced-color-adjust", "-ms-high-contrast-adjust"],
    ["gap", "grid-gap"],
    ["grid-template-columns", "-ms-grid-columns"],
    ["grid-template-rows", "-ms-grid-rows"],
    ["justify-self", "-ms-grid-column-align"],
    ["margin-inline-end", "-webkit-margin-end"],
    ["margin-inline-start", "-webkit-margin-start"],
    ["mask-border", "-webkit-mask-box-image"],
    ["mask-border-outset", "-webkit-mask-box-image-outset"],
    ["mask-border-slice", "-webkit-mask-box-image-slice"],
    ["mask-border-source", "-webkit-mask-box-image-source"],
    ["mask-border-repeat", "-webkit-mask-box-image-repeat"],
    ["mask-border-width", "-webkit-mask-box-image-width"],
    ["overflow-wrap", "word-wrap"],
    ["padding-inline-end", "-webkit-padding-end"],
    ["padding-inline-start", "-webkit-padding-start"],
    ["print-color-adjust", "color-adjust"],
    ["row-gap", "grid-row-gap"],
    ["scroll-margin-bottom", "scroll-snap-margin-bottom"],
    ["scroll-margin-left", "scroll-snap-margin-left"],
    ["scroll-margin-right", "scroll-snap-margin-right"],
    ["scroll-margin-top", "scroll-snap-margin-top"],
    ["scroll-margin", "scroll-snap-margin"],
    ["text-combine-upright", "-ms-text-combine-horizontal"],
  ]);
  let en = [
      ["-webkit-", 1],
      ["-moz-", 2],
      ["-ms-", 4],
    ],
    ei = {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      columns: {
        auto: "auto",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      spacing: o(
        { px: "1px", 0: "0px" },
        es(4, "rem", 4, 0.5, 0.5),
        es(12, "rem", 4, 5),
        { 14: "3.5rem" },
        es(64, "rem", 4, 16, 4),
        { 72: "18rem", 80: "20rem", 96: "24rem" },
      ),
      durations: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms",
      },
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        bounce: "bounce 1s infinite",
      },
      aspectRatio: { auto: "auto", square: "1/1", video: "16/9" },
      backdropBlur: ec("blur"),
      backdropBrightness: ec("brightness"),
      backdropContrast: ec("contrast"),
      backdropGrayscale: ec("grayscale"),
      backdropHueRotate: ec("hueRotate"),
      backdropInvert: ec("invert"),
      backdropOpacity: ec("opacity"),
      backdropSaturate: ec("saturate"),
      backdropSepia: ec("sepia"),
      backgroundColor: ec("colors"),
      backgroundImage: { none: "none" },
      backgroundOpacity: ec("opacity"),
      backgroundSize: { auto: "auto", cover: "cover", contain: "contain" },
      blur: {
        none: "none",
        0: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      brightness: o({}, es(200, "", 100, 0, 50), es(110, "", 100, 90, 5), {
        75: "0.75",
        125: "1.25",
      }),
      borderColor: ({ theme: e }) =>
        o({ DEFAULT: e("colors.gray.200", "currentColor") }, e("colors")),
      borderOpacity: ec("opacity"),
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "1/2": "50%",
        full: "9999px",
      },
      borderSpacing: ec("spacing"),
      borderWidth: o({ DEFAULT: "1px" }, el(8, "px")),
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
        "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)",
        none: "0 0 #0000",
      },
      boxShadowColor: ec("colors"),
      caretColor: ec("colors"),
      accentColor: ({ theme: e }) => o({ auto: "auto" }, e("colors")),
      contrast: o({}, es(200, "", 100, 0, 50), { 75: "0.75", 125: "1.25" }),
      content: { none: "none" },
      divideColor: ec("borderColor"),
      divideOpacity: ec("borderOpacity"),
      divideWidth: ec("borderWidth"),
      dropShadow: {
        sm: "0 1px 1px rgba(0,0,0,0.05)",
        DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
        md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
        lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
        xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
        "2xl": "0 25px 25px rgba(0,0,0,0.15)",
        none: "0 0 #0000",
      },
      fill: ({ theme: e }) => o({}, e("colors"), { none: "none" }),
      grayscale: { DEFAULT: "100%", 0: "0" },
      hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg",
      },
      invert: { DEFAULT: "100%", 0: "0" },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexBasis: ({ theme: e }) =>
        o({}, e("spacing"), ea(2, 6), ea(12, 12), {
          auto: "auto",
          full: "100%",
        }),
      flexGrow: { DEFAULT: 1, 0: 0 },
      flexShrink: { DEFAULT: 1, 0: 0 },
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(
          ",",
        ),
        serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(
          ",",
        ),
        mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(
          ",",
        ),
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      gap: ec("spacing"),
      gradientColorStops: ec("colors"),
      gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0,1fr)",
      },
      gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0,1fr)",
      },
      gridColumn: { auto: "auto", "span-full": "1 / -1" },
      gridRow: { auto: "auto", "span-full": "1 / -1" },
      gridTemplateColumns: { none: "none" },
      gridTemplateRows: { none: "none" },
      height: ({ theme: e }) =>
        o({}, e("spacing"), ea(2, 6), {
          min: "min-content",
          max: "max-content",
          fit: "fit-content",
          auto: "auto",
          full: "100%",
          screen: "100vh",
        }),
      inset: ({ theme: e }) =>
        o({}, e("spacing"), ea(2, 4), { auto: "auto", full: "100%" }),
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%,100%": { transform: "scale(2)", opacity: "0" },
        },
        pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: o({}, es(10, "rem", 4, 3), {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      }),
      margin: ({ theme: e }) => o({ auto: "auto" }, e("spacing")),
      maxHeight: ({ theme: e }) =>
        o(
          {
            full: "100%",
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            screen: "100vh",
          },
          e("spacing"),
        ),
      maxWidth: ({ theme: e, breakpoints: t }) =>
        o({}, t(e("screens")), {
          none: "none",
          0: "0rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
          full: "100%",
          min: "min-content",
          max: "max-content",
          fit: "fit-content",
          prose: "65ch",
        }),
      minHeight: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        screen: "100vh",
      },
      minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
      },
      opacity: o({}, es(100, "", 100, 0, 10), {
        5: "0.05",
        25: "0.25",
        75: "0.75",
        95: "0.95",
      }),
      order: { first: "-9999", last: "9999", none: "0" },
      padding: ec("spacing"),
      placeholderColor: ec("colors"),
      placeholderOpacity: ec("opacity"),
      outlineColor: ec("colors"),
      outlineOffset: el(8, "px"),
      outlineWidth: el(8, "px"),
      ringColor: ({ theme: e }) => o({}, e("colors"), { DEFAULT: "#3b82f6" }),
      ringOffsetColor: ec("colors"),
      ringOffsetWidth: el(8, "px"),
      ringOpacity: ({ theme: e }) => o({}, e("opacity"), { DEFAULT: "0.5" }),
      ringWidth: o({ DEFAULT: "3px" }, el(8, "px")),
      rotate: o({}, el(2, "deg"), el(12, "deg", 3), el(180, "deg", 45)),
      saturate: es(200, "", 100, 0, 50),
      scale: o({}, es(150, "", 100, 0, 50), es(110, "", 100, 90, 5), {
        75: "0.75",
        125: "1.25",
      }),
      scrollMargin: ec("spacing"),
      scrollPadding: ec("spacing"),
      sepia: { 0: "0", DEFAULT: "100%" },
      skew: o({}, el(2, "deg"), el(12, "deg", 3)),
      space: ec("spacing"),
      stroke: ({ theme: e }) => o({}, e("colors"), { none: "none" }),
      strokeWidth: es(2),
      textColor: ec("colors"),
      textDecorationColor: ec("colors"),
      textDecorationThickness: o(
        { "from-font": "from-font", auto: "auto" },
        el(8, "px"),
      ),
      textUnderlineOffset: o({ auto: "auto" }, el(8, "px")),
      textIndent: ec("spacing"),
      textOpacity: ec("opacity"),
      transitionDuration: ({ theme: e }) =>
        o({}, e("durations"), { DEFAULT: "150ms" }),
      transitionDelay: ec("durations"),
      transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT:
          "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
        colors:
          "color,background-color,border-color,text-decoration-color,fill,stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
        linear: "linear",
        in: "cubic-bezier(0.4,0,1,1)",
        out: "cubic-bezier(0,0,0.2,1)",
        "in-out": "cubic-bezier(0.4,0,0.2,1)",
      },
      translate: ({ theme: e }) =>
        o({}, e("spacing"), ea(2, 4), { full: "100%" }),
      width: ({ theme: e }) =>
        o(
          {
            min: "min-content",
            max: "max-content",
            fit: "fit-content",
            screen: "100vw",
          },
          e("flexBasis"),
        ),
      willChange: { scroll: "scroll-position" },
      zIndex: o({}, es(50, "", 1, 0, 10), { auto: "auto" }),
    };
  function ea(e, t) {
    let r = {};
    do
      for (var o = 1; o < e; o++)
        r[`${o}/${e}`] = Number(((o / e) * 100).toFixed(6)) + "%";
    while (++e <= t);
    return r;
  }
  function el(e, t, r = 0) {
    let o = {};
    for (; r <= e; r = 2 * r || 1) o[r] = r + t;
    return o;
  }
  function es(e, t = "", r = 1, o = 0, n = 1, i = {}) {
    for (; o <= e; o += n) i[o] = o / r + t;
    return i;
  }
  function ec(e) {
    return ({ theme: t }) => t(e);
  }
  let ed = {
      "*,::before,::after": {
        boxSizing: "border-box",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "theme(borderColor.DEFAULT, currentColor)",
      },
      "::before,::after": { "--tw-content": "''" },
      html: {
        lineHeight: 1.5,
        WebkitTextSizeAdjust: "100%",
        MozTabSize: "4",
        tabSize: 4,
        fontFamily: `theme(fontFamily.sans, ${ei.fontFamily.sans})`,
        fontFeatureSettings:
          "theme(fontFamily.sans[1].fontFeatureSettings, normal)",
      },
      body: { margin: "0", lineHeight: "inherit" },
      hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
      "abbr:where([title])": { textDecoration: "underline dotted" },
      "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
      a: { color: "inherit", textDecoration: "inherit" },
      "b,strong": { fontWeight: "bolder" },
      "code,kbd,samp,pre": {
        fontFamily: `theme(fontFamily.mono, ${ei.fontFamily.mono})`,
        fontFeatureSettings:
          "theme(fontFamily.mono[1].fontFeatureSettings, normal)",
        fontSize: "1em",
      },
      small: { fontSize: "80%" },
      "sub,sup": {
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        verticalAlign: "baseline",
      },
      sub: { bottom: "-0.25em" },
      sup: { top: "-0.5em" },
      table: {
        textIndent: "0",
        borderColor: "inherit",
        borderCollapse: "collapse",
      },
      "button,input,optgroup,select,textarea": {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: "inherit",
        color: "inherit",
        margin: "0",
        padding: "0",
      },
      "button,select": { textTransform: "none" },
      "button,[type='button'],[type='reset'],[type='submit']": {
        WebkitAppearance: "button",
        backgroundColor: "transparent",
        backgroundImage: "none",
      },
      ":-moz-focusring": { outline: "auto" },
      ":-moz-ui-invalid": { boxShadow: "none" },
      progress: { verticalAlign: "baseline" },
      "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
        height: "auto",
      },
      "[type='search']": {
        WebkitAppearance: "textfield",
        outlineOffset: "-2px",
      },
      "::-webkit-search-decoration": { WebkitAppearance: "none" },
      "::-webkit-file-upload-button": {
        WebkitAppearance: "button",
        font: "inherit",
      },
      summary: { display: "list-item" },
      "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" },
      fieldset: { margin: "0", padding: "0" },
      legend: { padding: "0" },
      "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" },
      textarea: { resize: "vertical" },
      "input::placeholder,textarea::placeholder": {
        opacity: 1,
        color: "theme(colors.gray.400, #9ca3af)",
      },
      'button,[role="button"]': { cursor: "pointer" },
      ":disabled": { cursor: "default" },
      "img,svg,video,canvas,audio,iframe,embed,object": {
        display: "block",
        verticalAlign: "middle",
      },
      "img,video": { maxWidth: "100%", height: "auto" },
      "[hidden]": { display: "none" },
    },
    ef = [
      L("\\[([-\\w]+):(.+)]", ({ 1: e, 2: t }, r) => ({
        "@layer overrides": { "&": { [e]: _(`[${t}]`, "", r) } },
      })),
      L("(group|peer)([~/][^-[]+)?", ({ input: e }, { h: t }) => [{ c: t(e) }]),
      I("aspect-", "aspectRatio"),
      L("container", (e, { theme: t }) => {
        let {
            screens: r = t("screens"),
            center: n,
            padding: i,
          } = t("container"),
          a = o(
            {
              width: "100%",
              marginRight: n && "auto",
              marginLeft: n && "auto",
            },
            d("xs"),
          );
        for (let l in r) {
          let c = r[l];
          "string" == typeof c && (a[s(c)] = { "&": o({ maxWidth: c }, d(l)) });
        }
        return a;
        function d(e) {
          let t = i && ("string" == typeof i ? i : i[e] || i.DEFAULT);
          if (t) return { paddingRight: t, paddingLeft: t };
        }
      }),
      I("content-", "content", ({ _: e }) => ({
        "--tw-content": e,
        content: "var(--tw-content)",
      })),
      L("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"),
      L("box-(border|content)", "boxSizing", ({ 1: e }) => e + "-box"),
      L("hidden", { display: "none" }),
      L("table-(auto|fixed)", "tableLayout"),
      L(
        [
          "(block|flex|table|grid|inline|contents|flow-root|list-item)",
          "(inline-(block|flex|table|grid))",
          "(table-(caption|cell|column|row|(column|row|footer|header)-group))",
        ],
        "display",
      ),
      "(float)-(left|right|none)",
      "(clear)-(left|right|none|both)",
      "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)",
      "(isolation)-(auto)",
      L("isolate", "isolation"),
      L("object-(contain|cover|fill|none|scale-down)", "objectFit"),
      I("object-", "objectPosition"),
      L(
        "object-(top|bottom|center|(left|right)(-(top|bottom))?)",
        "objectPosition",
        ep,
      ),
      L("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e = "", 2: t }) => ({
        ["overscroll-behavior" + e]: t,
      })),
      L("(static|fixed|absolute|relative|sticky)", "position"),
      I("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e, _: t }) => ({
        top: "-x" != e && t,
        right: "-y" != e && t,
        bottom: "-x" != e && t,
        left: "-y" != e && t,
      })),
      I("-?(top|bottom|left|right)(?:$|-)", "inset"),
      L("(visible|collapse)", "visibility"),
      L("invisible", { visibility: "hidden" }),
      I("-?z-", "zIndex"),
      L("flex-((row|col)(-reverse)?)", "flexDirection", eu),
      L("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"),
      I("(flex-(?:grow|shrink))(?:$|-)"),
      I("(flex)-"),
      I("grow(?:$|-)", "flexGrow"),
      I("shrink(?:$|-)", "flexShrink"),
      I("basis-", "flexBasis"),
      I("-?(order)-"),
      "-?(order)-(\\d+)",
      I("grid-cols-", "gridTemplateColumns"),
      L("grid-cols-(\\d+)", "gridTemplateColumns", e$),
      I("col-", "gridColumn"),
      L("col-(span)-(\\d+)", "gridColumn", ek),
      I("col-start-", "gridColumnStart"),
      L("col-start-(auto|\\d+)", "gridColumnStart"),
      I("col-end-", "gridColumnEnd"),
      L("col-end-(auto|\\d+)", "gridColumnEnd"),
      I("grid-rows-", "gridTemplateRows"),
      L("grid-rows-(\\d+)", "gridTemplateRows", e$),
      I("row-", "gridRow"),
      L("row-(span)-(\\d+)", "gridRow", ek),
      I("row-start-", "gridRowStart"),
      L("row-start-(auto|\\d+)", "gridRowStart"),
      I("row-end-", "gridRowEnd"),
      L("row-end-(auto|\\d+)", "gridRowEnd"),
      L("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e) => ep(eu(e))),
      L("grid-flow-(dense)", "gridAutoFlow"),
      I("auto-cols-", "gridAutoColumns"),
      I("auto-rows-", "gridAutoRows"),
      I("gap-x(?:$|-)", "gap", "columnGap"),
      I("gap-y(?:$|-)", "gap", "rowGap"),
      I("gap(?:$|-)", "gap"),
      "(justify-(?:items|self))-",
      L("justify-", "justifyContent", eb),
      L("(content|items|self)-", (e) => ({ ["align-" + e[1]]: eb(e) })),
      L("(place-(content|items|self))-", ({ 1: e, $$: t }) => ({
        [e]: ("wun".includes(t[3]) ? "space-" : "") + t,
      })),
      I("p([xytrbl])?(?:$|-)", "padding", eh("padding")),
      I("-?m([xytrbl])?(?:$|-)", "margin", eh("margin")),
      I("-?space-(x|y)(?:$|-)", "space", ({ 1: e, _: t }) => ({
        "&>:not([hidden])~:not([hidden])": {
          [`--tw-space-${e}-reverse`]: "0",
          ["margin-" +
          { y: "top", x: "left" }[
            e
          ]]: `calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,
          ["margin-" +
          { y: "bottom", x: "right" }[
            e
          ]]: `calc(${t} * var(--tw-space-${e}-reverse))`,
        },
      })),
      L("space-(x|y)-reverse", ({ 1: e }) => ({
        "&>:not([hidden])~:not([hidden])": { [`--tw-space-${e}-reverse`]: "1" },
      })),
      I("w-", "width"),
      I("min-w-", "minWidth"),
      I("max-w-", "maxWidth"),
      I("h-", "height"),
      I("min-h-", "minHeight"),
      I("max-h-", "maxHeight"),
      I("font-", "fontWeight"),
      I("font-", "fontFamily", ({ _: e }) =>
        "string" == typeof (e = c(e))[1]
          ? { fontFamily: em(e) }
          : o({ fontFamily: em(e[0]) }, e[1]),
      ),
      L("antialiased", {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }),
      L("subpixel-antialiased", {
        WebkitFontSmoothing: "auto",
        MozOsxFontSmoothing: "auto",
      }),
      L("italic", "fontStyle"),
      L("not-italic", { fontStyle: "normal" }),
      L(
        "(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",
        ({ 1: e, 2: t = "", 3: r }) =>
          "normal" == t
            ? { fontVariantNumeric: "normal" }
            : o(
                {
                  ["--tw-" +
                  (r
                    ? "numeric-fraction"
                    : "pt".includes(t[0])
                    ? "numeric-spacing"
                    : t
                    ? "numeric-figure"
                    : e)]: e,
                  fontVariantNumeric:
                    "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",
                },
                eS({
                  "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)",
                  "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)",
                  "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)",
                  "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)",
                  "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)",
                }),
              ),
      ),
      I("tracking-", "letterSpacing"),
      I("leading-", "lineHeight"),
      L("list-(inside|outside)", "listStylePosition"),
      I("list-", "listStyleType"),
      L("list-", "listStyleType"),
      I("placeholder-opacity-", "placeholderOpacity", ({ _: e }) => ({
        "&::placeholder": { "--tw-placeholder-opacity": e },
      })),
      B("placeholder-", { property: "color", selector: "&::placeholder" }),
      L("text-(left|center|right|justify|start|end)", "textAlign"),
      L("text-(ellipsis|clip)", "textOverflow"),
      I("text-opacity-", "textOpacity", "--tw-text-opacity"),
      B("text-", { property: "color" }),
      I("text-", "fontSize", ({ _: e }) =>
        "string" == typeof e
          ? { fontSize: e }
          : o(
              { fontSize: e[0] },
              "string" == typeof e[1] ? { lineHeight: e[1] } : e[1],
            ),
      ),
      I("indent-", "textIndent"),
      L("(overline|underline|line-through)", "textDecorationLine"),
      L("no-underline", { textDecorationLine: "none" }),
      I("underline-offset-", "textUnderlineOffset"),
      B("decoration-", {
        section: "textDecorationColor",
        opacityVariable: !1,
        opacitySection: "opacity",
      }),
      I("decoration-", "textDecorationThickness"),
      L("decoration-", "textDecorationStyle"),
      L("(uppercase|lowercase|capitalize)", "textTransform"),
      L("normal-case", { textTransform: "none" }),
      L("truncate", {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }),
      L("align-", "verticalAlign"),
      L("whitespace-", "whiteSpace"),
      L("break-normal", { wordBreak: "normal", overflowWrap: "normal" }),
      L("break-words", { overflowWrap: "break-word" }),
      L("break-all", { wordBreak: "break-all" }),
      L("break-keep", { wordBreak: "keep-all" }),
      B("caret-", { opacityVariable: !1, opacitySection: "opacity" }),
      B("accent-", { opacityVariable: !1, opacitySection: "opacity" }),
      L(
        "bg-gradient-to-([trbl]|[tb][rl])",
        "backgroundImage",
        ({ 1: e }) =>
          `linear-gradient(to ${eg(e, " ")},var(--tw-gradient-stops))`,
      ),
      B(
        "from-",
        {
          section: "gradientColorStops",
          opacityVariable: !1,
          opacitySection: "opacity",
        },
        ({ _: e }) => ({
          "--tw-gradient-from": e.value,
          "--tw-gradient-to": e.color({ opacityValue: "0" }),
          "--tw-gradient-stops":
            "var(--tw-gradient-from),var(--tw-gradient-to)",
        }),
      ),
      B(
        "via-",
        {
          section: "gradientColorStops",
          opacityVariable: !1,
          opacitySection: "opacity",
        },
        ({ _: e }) => ({
          "--tw-gradient-to": e.color({ opacityValue: "0" }),
          "--tw-gradient-stops": `var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`,
        }),
      ),
      B("to-", {
        section: "gradientColorStops",
        property: "--tw-gradient-to",
        opacityVariable: !1,
        opacitySection: "opacity",
      }),
      L("bg-(fixed|local|scroll)", "backgroundAttachment"),
      L(
        "bg-origin-(border|padding|content)",
        "backgroundOrigin",
        ({ 1: e }) => e + "-box",
      ),
      L(
        ["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"],
        "backgroundRepeat",
      ),
      L("bg-blend-", "backgroundBlendMode"),
      L(
        "bg-clip-(border|padding|content|text)",
        "backgroundClip",
        ({ 1: e }) => e + ("text" == e ? "" : "-box"),
      ),
      I("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"),
      B("bg-", { section: "backgroundColor" }),
      I("bg-", "backgroundImage"),
      I("bg-", "backgroundPosition"),
      L(
        "bg-(top|bottom|center|(left|right)(-(top|bottom))?)",
        "backgroundPosition",
        ep,
      ),
      I("bg-", "backgroundSize"),
      I("rounded(?:$|-)", "borderRadius"),
      I(
        "rounded-([trbl]|[tb][rl])(?:$|-)",
        "borderRadius",
        ({ 1: e, _: t }) => {
          let r = {
            t: ["tl", "tr"],
            r: ["tr", "br"],
            b: ["bl", "br"],
            l: ["bl", "tl"],
          }[e] || [e, e];
          return {
            [`border-${eg(r[0])}-radius`]: t,
            [`border-${eg(r[1])}-radius`]: t,
          };
        },
      ),
      L("border-(collapse|separate)", "borderCollapse"),
      I("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"),
      L("border-(solid|dashed|dotted|double|none)", "borderStyle"),
      I("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e, _: t }) =>
        o(
          {},
          eS({ "--tw-border-spacing-x": "0", "--tw-border-spacing-y": "0" }),
          {
            ["--tw-border-spacing" + (e || "-x")]: t,
            ["--tw-border-spacing" + (e || "-y")]: t,
            "border-spacing":
              "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
          },
        ),
      ),
      B(
        "border-([xytrbl])-",
        { section: "borderColor" },
        eh("border", "Color"),
      ),
      B("border-"),
      I("border-([xytrbl])(?:$|-)", "borderWidth", eh("border", "Width")),
      I("border(?:$|-)", "borderWidth"),
      I("divide-opacity(?:$|-)", "divideOpacity", ({ _: e }) => ({
        "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": e },
      })),
      L("divide-(solid|dashed|dotted|double|none)", ({ 1: e }) => ({
        "&>:not([hidden])~:not([hidden])": { borderStyle: e },
      })),
      L("divide-([xy]-reverse)", ({ 1: e }) => ({
        "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + e]: "1" },
      })),
      I("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e, _: t }) => {
        let r = { x: "lr", y: "tb" }[e];
        return {
          "&>:not([hidden])~:not([hidden])": {
            [`--tw-divide-${e}-reverse`]: "0",
            [`border-${eg(
              r[0],
            )}Width`]: `calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,
            [`border-${eg(
              r[1],
            )}Width`]: `calc(${t} * var(--tw-divide-${e}-reverse))`,
          },
        };
      }),
      B("divide-", {
        property: "borderColor",
        selector: "&>:not([hidden])~:not([hidden])",
      }),
      I("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"),
      B("ring-offset-", {
        property: "--tw-ring-offset-color",
        opacityVariable: !1,
      }),
      I("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"),
      L("ring-inset", { "--tw-ring-inset": "inset" }),
      B("ring-", { property: "--tw-ring-color" }),
      I("ring(?:$|-)", "ringWidth", ({ _: e }, { theme: t }) =>
        o(
          {},
          eS({
            "--tw-ring-offset-shadow": "0 0 #0000",
            "--tw-ring-shadow": "0 0 #0000",
            "--tw-shadow": "0 0 #0000",
            "--tw-shadow-colored": "0 0 #0000",
            "&": {
              "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
              "--tw-ring-offset-color": A(t("ringOffsetColor", "", "#fff")),
              "--tw-ring-color": A(t("ringColor", "", "#93c5fd"), {
                opacityVariable: "--tw-ring-opacity",
              }),
              "--tw-ring-opacity": t("ringOpacity", "", "0.5"),
            },
          }),
          {
            "--tw-ring-offset-shadow":
              "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
            "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
            boxShadow:
              "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
          },
        ),
      ),
      B(
        "shadow-",
        {
          section: "boxShadowColor",
          opacityVariable: !1,
          opacitySection: "opacity",
        },
        ({ _: e }) => ({
          "--tw-shadow-color": e.value,
          "--tw-shadow": "var(--tw-shadow-colored)",
        }),
      ),
      I("shadow(?:$|-)", "boxShadow", ({ _: e }) =>
        o(
          {},
          eS({
            "--tw-ring-offset-shadow": "0 0 #0000",
            "--tw-ring-shadow": "0 0 #0000",
            "--tw-shadow": "0 0 #0000",
            "--tw-shadow-colored": "0 0 #0000",
          }),
          {
            "--tw-shadow": em(e),
            "--tw-shadow-colored": em(e).replace(
              /([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,
              "$1var(--tw-shadow-color)$2",
            ),
            boxShadow:
              "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)",
          },
        ),
      ),
      I("(opacity)-"),
      L("mix-blend-", "mixBlendMode"),
      ...ex(),
      ...ex("backdrop-"),
      I("transition(?:$|-)", "transitionProperty", (e, { theme: t }) => ({
        transitionProperty: em(e),
        transitionTimingFunction:
          "none" == e._ ? void 0 : em(t("transitionTimingFunction", "")),
        transitionDuration:
          "none" == e._ ? void 0 : em(t("transitionDuration", "")),
      })),
      I("duration(?:$|-)", "transitionDuration", "transitionDuration", em),
      I(
        "ease(?:$|-)",
        "transitionTimingFunction",
        "transitionTimingFunction",
        em,
      ),
      I("delay(?:$|-)", "transitionDelay", "transitionDelay", em),
      I("animate(?:$|-)", "animation", (e, { theme: t, h: r, e: o }) => {
        let n = em(e),
          i = n.split(" "),
          a = t("keyframes", i[0]);
        return a
          ? { ["@keyframes " + (i[0] = o(r(i[0])))]: a, animation: i.join(" ") }
          : { animation: n };
      }),
      "(transform)-(none)",
      L("transform", ey),
      L("transform-(cpu|gpu)", ({ 1: e }) => ({
        "--tw-transform": ev("gpu" == e),
      })),
      I("scale(-[xy])?-", "scale", ({ 1: e, _: t }) =>
        o(
          { ["--tw-scale" + (e || "-x")]: t, ["--tw-scale" + (e || "-y")]: t },
          ey(),
        ),
      ),
      I("-?(rotate)-", "rotate", ew),
      I("-?(translate-[xy])-", "translate", ew),
      I("-?(skew-[xy])-", "skew", ew),
      L(
        "origin-(center|((top|bottom)(-(left|right))?)|left|right)",
        "transformOrigin",
        ep,
      ),
      "(appearance)-",
      I("(columns)-"),
      "(columns)-(\\d+)",
      "(break-(?:before|after|inside))-",
      I("(cursor)-"),
      "(cursor)-",
      L("snap-(none)", "scroll-snap-type"),
      L("snap-(x|y|both)", ({ 1: e }) =>
        o({}, eS({ "--tw-scroll-snap-strictness": "proximity" }), {
          "scroll-snap-type": e + " var(--tw-scroll-snap-strictness)",
        }),
      ),
      L("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"),
      L("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"),
      L("snap-(normal|always)", "scroll-snap-stop"),
      L("scroll-(auto|smooth)", "scroll-behavior"),
      I("scroll-p([xytrbl])?(?:$|-)", "padding", eh("scroll-padding")),
      I("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", eh("scroll-margin")),
      L("touch-(auto|none|manipulation)", "touch-action"),
      L(
        "touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",
        ({ 1: e, 2: t, 3: r }) =>
          o(
            {},
            eS({
              "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-touch-action":
                "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)",
            }),
            {
              [`--tw-${t ? "pan-x" : r ? "pan-y" : e}`]: e,
              "touch-action": "var(--tw-touch-action)",
            },
          ),
      ),
      L("outline-none", {
        outline: "2px solid transparent",
        "outline-offset": "2px",
      }),
      L("outline", { outlineStyle: "solid" }),
      L("outline-(dashed|dotted|double)", "outlineStyle"),
      I("-?(outline-offset)-"),
      B("outline-", { opacityVariable: !1, opacitySection: "opacity" }),
      I("outline-", "outlineWidth"),
      "(pointer-events)-",
      I("(will-change)-"),
      "(will-change)-",
      [
        "resize(?:-(none|x|y))?",
        "resize",
        ({ 1: e }) => ({ x: "horizontal", y: "vertical" })[e] || e || "both",
      ],
      L("select-(none|text|all|auto)", "userSelect"),
      B("fill-", {
        section: "fill",
        opacityVariable: !1,
        opacitySection: "opacity",
      }),
      B("stroke-", {
        section: "stroke",
        opacityVariable: !1,
        opacitySection: "opacity",
      }),
      I("stroke-", "strokeWidth"),
      L("sr-only", {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        clip: "rect(0,0,0,0)",
        borderWidth: "0",
      }),
      L("not-sr-only", {
        position: "static",
        width: "auto",
        height: "auto",
        padding: "0",
        margin: "0",
        overflow: "visible",
        whiteSpace: "normal",
        clip: "auto",
      }),
    ];
  function ep(e) {
    return ("string" == typeof e ? e : e[1]).replace(/-/g, " ").trim();
  }
  function eu(e) {
    return ("string" == typeof e ? e : e[1]).replace("col", "column");
  }
  function eg(e, t = "-") {
    let r = [];
    for (let o of e)
      r.push({ t: "top", r: "right", b: "bottom", l: "left" }[o]);
    return r.join(t);
  }
  function em(e) {
    return e && "" + (e._ || e);
  }
  function eb({ $$: e }) {
    return (
      ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[
        e[3] || ""
      ] || "") + e
    );
  }
  function eh(e, t = "") {
    return ({ 1: r, _: n }) => {
      let i = { x: "lr", y: "tb" }[r] || r + r;
      return i
        ? o({}, N(e + "-" + eg(i[0]) + t, n), N(e + "-" + eg(i[1]) + t, n))
        : N(e + t, n);
    };
  }
  function ex(e = "") {
    let t = [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        e && "opacity",
        "saturate",
        "sepia",
        !e && "drop-shadow",
      ].filter(Boolean),
      r = {};
    for (let n of t) r[`--tw-${e}${n}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return (
      (r = o({}, eS(r), {
        [`${e}filter`]: t.map((t) => `var(--tw-${e}${t})`).join(" "),
      })),
      [
        `(${e}filter)-(none)`,
        L(`${e}filter`, r),
        ...t.map((t) =>
          I(
            `${"h" == t[0] ? "-?" : ""}(${e}${t})(?:$|-)`,
            t,
            ({ 1: e, _: n }) =>
              o(
                {
                  [`--tw-${e}`]: c(n)
                    .map((e) => `${t}(${e})`)
                    .join(" "),
                },
                r,
              ),
          ),
        ),
      ]
    );
  }
  function ew({ 1: e, _: t }) {
    return o({ ["--tw-" + e]: t }, ey());
  }
  function ey() {
    return o(
      {},
      eS({
        "--tw-translate-x": "0",
        "--tw-translate-y": "0",
        "--tw-rotate": "0",
        "--tw-skew-x": "0",
        "--tw-skew-y": "0",
        "--tw-scale-x": "1",
        "--tw-scale-y": "1",
        "--tw-transform": ev(),
      }),
      { transform: "var(--tw-transform)" },
    );
  }
  function ev(e) {
    return [
      e
        ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)"
        : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))",
      "rotate(var(--tw-rotate))",
      "skewX(var(--tw-skew-x))",
      "skewY(var(--tw-skew-y))",
      "scaleX(var(--tw-scale-x))",
      "scaleY(var(--tw-scale-y))",
    ].join(" ");
  }
  function ek({ 1: e, 2: t }) {
    return `${e} ${t} / ${e} ${t}`;
  }
  function e$({ 1: e }) {
    return `repeat(${e},minmax(0,1fr))`;
  }
  function eS(e) {
    return { "@layer defaults": { "*,::before,::after": e, "::backdrop": e } };
  }
  let eC = [
      ["sticky", "@supports ((position: -webkit-sticky) or (position:sticky))"],
      ["motion-reduce", "@media (prefers-reduced-motion:reduce)"],
      ["motion-safe", "@media (prefers-reduced-motion:no-preference)"],
      ["print", "@media print"],
      ["(portrait|landscape)", ({ 1: e }) => `@media (orientation:${e})`],
      ["contrast-(more|less)", ({ 1: e }) => `@media (prefers-contrast:${e})`],
      [
        "(first-(letter|line)|placeholder|backdrop|before|after)",
        ({ 1: e }) => `&::${e}`,
      ],
      ["(marker|selection)", ({ 1: e }) => `& *::${e},&::${e}`],
      ["file", "&::file-selector-button"],
      ["(first|last|only)", ({ 1: e }) => `&:${e}-child`],
      ["even", "&:nth-child(2n)"],
      ["odd", "&:nth-child(odd)"],
      ["open", "&[open]"],
      [
        "(aria|data)-",
        ({ 1: e, $$: t }, r) =>
          t && `&[${e}-${r.theme(e, t) || _(t, "", r) || `${t}="true"`}]`,
      ],
      [
        "((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",
        (
          { 2: e, 3: t = "", 4: r, 5: o = "", 6: n = t },
          { e: i, h: a, v: l },
        ) => {
          let s = H(o) || ("[" == r[0] ? r : l(r.slice(1)));
          return `${(s.includes("&") ? s : "&" + s).replace(
            /&/g,
            `:merge(.${i(a(e + n))})`,
          )}${"p" == e[0] ? "~" : " "}&`;
        },
      ],
      ["(ltr|rtl)", ({ 1: e }) => `[dir="${e}"] &`],
      [
        "supports-",
        ({ $$: e }, t) => {
          if ((e && (e = t.theme("supports", e) || _(e, "", t)), e))
            return (
              e.includes(":") || (e += ":var(--tw)"),
              /^\w*\s*\(/.test(e) || (e = `(${e})`),
              `@supports ${e.replace(/\b(and|or|not)\b/g, " $1 ").trim()}`
            );
        },
      ],
      [
        "max-",
        ({ $$: e }, t) => {
          if (
            (e && (e = t.theme("screens", e) || _(e, "", t)),
            "string" == typeof e)
          )
            return `@media not all and (min-width:${e})`;
        },
      ],
      [
        "min-",
        ({ $$: e }, t) => (
          e && (e = _(e, "", t)), e && `@media (min-width:${e})`
        ),
      ],
      [
        /^\[(.+)]$/,
        ({ 1: e }) => /[&@]/.test(e) && H(e).replace(/[}]+$/, "").split("{"),
      ],
    ],
    ez = {
      __proto__: null,
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
      },
      fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
      },
    },
    eA = o({}, ei, { colors: ez }),
    eF = (function (e) {
      if (document.currentScript) {
        let t = () => r.disconnect(),
          r = new MutationObserver((r) => {
            for (let { target: o } of r)
              if (o === document.body) return e(), t();
          });
        return (
          r.observe(document.documentElement, { childList: !0, subtree: !0 }), t
        );
      }
      return f;
    })(eO);
  function eO(e = {}, r) {
    var { disablePreflight: i } = e,
      s = n(e, ["disablePreflight"]);
    return (
      eF(),
      (function (e, r = !0) {
        var i;
        let s = q(e);
        return (function (e = {}, r = ee, i) {
          return (
            null == t || t.destroy(),
            (t = (function (e = er, t = document.documentElement) {
              if (t) {
                let r = (function (e) {
                  let t = new MutationObserver(r);
                  return {
                    observe(e) {
                      t.observe(e, {
                        attributeFilter: ["class"],
                        subtree: !0,
                        childList: !0,
                      }),
                        o(e),
                        r([{ target: e, type: "" }]);
                    },
                    disconnect() {
                      t.disconnect();
                    },
                  };
                  function r(e) {
                    for (let { type: r, target: n } of e)
                      if ("a" == r[0]) o(n);
                      else for (let i of n.querySelectorAll("[class]")) o(i);
                    t.takeRecords();
                  }
                  function o(t) {
                    var r, o;
                    let n;
                    let i =
                      null == t.getAttribute ? void 0 : t.getAttribute("class");
                    i &&
                      (r = i) != (o = n = e(i)) &&
                      "" + r.split(" ").sort() != "" + o.split(" ").sort() &&
                      t.setAttribute("class", n);
                  }
                })(e);
                r.observe(t);
                let { destroy: o } = e;
                e.destroy = () => {
                  r.disconnect(), o.call(e);
                };
              }
              return e;
            })(
              (function (e, t) {
                let r = q(e),
                  i = (function ({
                    theme: e,
                    darkMode: t,
                    darkColor: r = f,
                    variants: i,
                    rules: s,
                    hash: p,
                    stringify: u,
                    ignorelist: g,
                    finalize: m,
                  }) {
                    let b = new Map(),
                      h = new Map(),
                      x = new Map(),
                      w = new Map(),
                      y = Z(g, (e, t) => t.test(e));
                    i.push([
                      "dark",
                      Array.isArray(t) || "class" == t
                        ? `${c(t)[1] || ".dark"} &`
                        : "string" == typeof t && "media" != t
                        ? t
                        : "@media (prefers-color-scheme:dark)",
                    ]);
                    let v = "function" == typeof p ? (e) => p(e, l) : p ? l : d;
                    v !== d &&
                      m.push((e) => {
                        var t;
                        return o({}, e, {
                          n: e.n && v(e.n),
                          d:
                            null == (t = e.d)
                              ? void 0
                              : t.replace(
                                  /--(tw(?:-[\w-]+)?)\b/g,
                                  (e, t) => "--" + v(t).replace("#", ""),
                                ),
                        });
                      });
                    let k = {
                      theme: (function (e) {
                        var { extend: t = {} } = e,
                          r = n(e, ["extend"]);
                        let o = {},
                          i = {
                            get colors() {
                              return a("colors");
                            },
                            theme: a,
                            negative: () => ({}),
                            breakpoints(e) {
                              let t = {};
                              for (let r in e)
                                "string" == typeof e[r] &&
                                  (t["screen-" + r] = e[r]);
                              return t;
                            },
                          };
                        return a;
                        function a(e, n, i, s) {
                          if (e) {
                            var c, d;
                            if (
                              (({ 1: e, 2: s } =
                                /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(e) || [
                                  ,
                                  e,
                                ]),
                              /[.[]/.test(e))
                            ) {
                              let f = [];
                              e.replace(
                                /\[([^\]]+)\]|([^.[]+)/g,
                                (e, t, r = t) => f.push(r),
                              ),
                                (e = f.shift()),
                                (i = n),
                                (n = f.join("-"));
                            }
                            let p =
                              o[e] ||
                              Object.assign(
                                Object.assign((o[e] = {}), l(r, e)),
                                l(t, e),
                              );
                            if (null == n) return p;
                            n || (n = "DEFAULT");
                            let u =
                              null !=
                              (d =
                                null != (c = p[n])
                                  ? c
                                  : n
                                      .split("-")
                                      .reduce(
                                        (e, t) => (null == e ? void 0 : e[t]),
                                        p,
                                      ))
                                ? d
                                : i;
                            return s ? A(u, { opacityValue: O(s, a) }) : u;
                          }
                          let g = {};
                          for (let m of [...Object.keys(r), ...Object.keys(t)])
                            g[m] = a(m);
                          return g;
                        }
                        function l(e, t) {
                          let r = e[t];
                          return ("function" == typeof r && (r = r(i)),
                          r && /color|fill|stroke/i.test(t))
                            ? (function e(t, r = []) {
                                let o = {};
                                for (let n in t) {
                                  let i = t[n],
                                    a = [...r, n];
                                  (o[a.join("-")] = i),
                                    "DEFAULT" == n &&
                                      ((a = r), (o[r.join("-")] = i)),
                                    "object" == typeof i &&
                                      Object.assign(o, e(i, a));
                                }
                                return o;
                              })(r)
                            : r;
                        }
                      })(e),
                      e: a,
                      h: v,
                      s: (e, t) => u(e, t, k),
                      d: (e, t, o) => r(e, t, k, o),
                      v: (e) => (
                        b.has(e) || b.set(e, G(e, i, h, Y, k) || "&:" + e),
                        b.get(e)
                      ),
                      r(e, t) {
                        let r = JSON.stringify([e, t]);
                        return (
                          x.has(r) || x.set(r, !y(e, k) && G(e, s, w, J, k, t)),
                          x.get(r)
                        );
                      },
                      f: (e) => m.reduce((e, t) => t(e, k), e),
                    };
                    return k;
                  })(r),
                  s = new Map(),
                  u = [],
                  g = new Set();
                function m(e) {
                  let r = i.f(e),
                    o = x(r);
                  if (o && !g.has(o)) {
                    g.add(o);
                    let n = k(u, e);
                    t.insert(o, n, e), u.splice(n, 0, e);
                  }
                  return r.n;
                }
                return (
                  t.resume(
                    (e) => s.set(e, e),
                    (e, r) => {
                      t.insert(e, u.length, r), u.push(r), g.add(e);
                    },
                  ),
                  Object.defineProperties(
                    function (e) {
                      if (!s.size)
                        for (let t of c(r.preflight))
                          "function" == typeof t && (t = t(i)),
                            t &&
                              ("string" == typeof t
                                ? W("", p.b, M(t), i, p.b, [], !1, !0)
                                : F(t, {}, i, p.b)
                              ).forEach(m);
                      e = "" + e;
                      let o = s.get(e);
                      if (!o) {
                        let n = new Set();
                        for (let a of T(M(e), i)) n.add(a.c).add(m(a));
                        (o = [...n].filter(Boolean).join(" ")),
                          s.set(e, o).set(o, o);
                      }
                      return o;
                    },
                    Object.getOwnPropertyDescriptors({
                      get target() {
                        return t.target;
                      },
                      theme: i.theme,
                      config: r,
                      snapshot() {
                        let e = t.snapshot(),
                          r = new Set(g),
                          o = new Map(s),
                          n = [...u];
                        return () => {
                          e(), (g = r), (s = o), (u = n);
                        };
                      },
                      clear() {
                        t.clear(), (g = new Set()), (s = new Map()), (u = []);
                      },
                      destroy() {
                        this.clear(), t.destroy();
                      },
                    }),
                  )
                );
              })(e, "function" == typeof r ? r() : r),
              void 0,
            ))
          );
        })(o({}, s, { hash: null != (i = s.hash) ? i : r }), () => ee(!r));
      })(
        q(
          o({}, s, {
            presets: [
              ({ stringify: e }) => ({
                stringify(t, r, o) {
                  var n, i;
                  let a = "",
                    l = eo.get(t);
                  l && (a += e(l, r, o) + ";");
                  let s = (n =
                      /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(
                        t,
                      ))
                      ? n[1]
                        ? 1
                        : n[2]
                        ? 2
                        : n[3]
                        ? 3
                        : 5
                      : 0,
                    c = (i =
                      /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(
                        t,
                      ))
                      ? i[1]
                        ? /^sti/i.test(r)
                          ? 1
                          : 0
                        : i[2]
                        ? /^pat/i.test(r)
                          ? 1
                          : 0
                        : i[3]
                        ? /^image-/i.test(r)
                          ? 1
                          : 0
                        : i[4]
                        ? "-" === r[3]
                          ? 2
                          : 0
                        : /^(?:inline-)?grid$/i.test(r)
                        ? 4
                        : 0
                      : 0;
                  for (let d of en)
                    s & d[1] && (a += e(d[0] + t, r, o) + ";"),
                      c & d[1] && (a += e(t, d[0] + r, o) + ";");
                  return a + e(t, r, o);
                },
              }),
              (function ({ disablePreflight: e } = {}) {
                return (function ({ colors: e, disablePreflight: t } = {}) {
                  return {
                    preflight: t ? void 0 : ed,
                    theme: o({}, ei, {
                      colors: o(
                        {
                          inherit: "inherit",
                          current: "currentColor",
                          transparent: "transparent",
                          black: "#000",
                          white: "#fff",
                        },
                        e,
                      ),
                    }),
                    variants: eC,
                    rules: ef,
                    finalize: (e) =>
                      e.n &&
                      e.d &&
                      e.r.some((e) => /^&::(before|after)$/.test(e)) &&
                      !/(^|;)content:/.test(e.d)
                        ? o({}, e, { d: "content:var(--tw-content);" + e.d })
                        : e,
                  };
                })({ colors: ez, disablePreflight: e });
              })({ disablePreflight: i }),
              ...c(s.presets),
            ],
          }),
        ),
        r,
      )
    );
  }
  return (
    (e.install = eO),
    (e.presetTailwind_colors = ez),
    (e.presetTailwind_defaultTheme = eA),
    e
  );
})({}); //# sourceMappingURL=cdn.global.js.map
