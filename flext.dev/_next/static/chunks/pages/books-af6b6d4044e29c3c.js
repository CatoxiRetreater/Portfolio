(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [84672],
  {
    40964: function (t, e, r) {
      var n = r(82661);
      function a(t, e) {
        var r = new n(t, e);
        return function (t) {
          return r.convert(t);
        };
      }
      (a.BIN = "01"),
        (a.OCT = "01234567"),
        (a.DEC = "0123456789"),
        (a.HEX = "0123456789abcdef"),
        (t.exports = a);
    },
    82661: function (t) {
      "use strict";
      function e(t, e) {
        if (!t || !e || !t.length || !e.length) throw Error("Bad alphabet");
        (this.srcAlphabet = t), (this.dstAlphabet = e);
      }
      (e.prototype.convert = function (t) {
        var e,
          r,
          n,
          a = {},
          o = this.srcAlphabet.length,
          i = this.dstAlphabet.length,
          s = t.length,
          c = "string" == typeof t ? "" : [];
        if (!this.isValid(t))
          throw Error(
            'Number "' +
              t +
              '" contains of non-alphabetic digits (' +
              this.srcAlphabet +
              ")"
          );
        if (this.srcAlphabet === this.dstAlphabet) return t;
        for (e = 0; e < s; e++) a[e] = this.srcAlphabet.indexOf(t[e]);
        do {
          for (e = 0, r = 0, n = 0; e < s; e++)
            (r = r * o + a[e]) >= i
              ? ((a[n++] = parseInt(r / i, 10)), (r %= i))
              : n > 0 && (a[n++] = 0);
          (s = n), (c = this.dstAlphabet.slice(r, r + 1).concat(c));
        } while (0 !== n);
        return c;
      }),
        (e.prototype.isValid = function (t) {
          for (var e = 0; e < t.length; ++e)
            if (-1 === this.srcAlphabet.indexOf(t[e])) return !1;
          return !0;
        }),
        (t.exports = e);
    },
    67616: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/books",
        function () {
          return r(66930);
        },
      ]);
    },
    13195: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return g;
        },
      });
      var n = r(41799),
        a = r(69396),
        o = r(99534),
        i = r(85893),
        s = r(828),
        c = r(29815),
        u = r(55041),
        l = r(80834),
        d = r(67294),
        h = function () {
          var t = (0, s.Z)((0, u.j)(), 1)[0],
            e = (0, s.Z)((0, l.M)(), 2),
            r = e[0],
            n = e[1];
          return (0, d.useCallback)(
            function (e) {
              var a = e.src,
                o = e.width,
                i = e.quality,
                s = void 0 === i ? 75 : i;
              if (t) {
                var u = ""
                    .concat(a.replace(/^\/\//, "https://"), "_")
                    .concat(o, "_")
                    .concat(s),
                  l = [
                    16, 32, 48, 64, 96, 128, 256, 384, 460, 640, 750, 828, 1080,
                    1200, 1920, 2048, 3840,
                  ].filter(function (t) {
                    return t >= o;
                  })[0],
                  d = [
                    16, 32, 48, 64, 96, 128, 256, 384, 460, 640, 750, 828, 1080,
                    1200, 1920, 2048, 3840,
                  ].filter(function (t) {
                    return t >= 2 * o;
                  })[0],
                  h = "/_next/image?url="
                    .concat(
                      encodeURIComponent(a.replace(/^\/\//, "https://")),
                      "&w="
                    )
                    .concat(l, "&q=")
                    .concat(s, " 1x, /_next/image?url=")
                    .concat(
                      encodeURIComponent(a.replace(/^\/\//, "https://")),
                      "&w="
                    )
                    .concat(d, "&q=")
                    .concat(s, " 2x");
                if (r.includes(u)) return;
                n(function (t) {
                  return (0, c.Z)(t).concat([u]);
                });
                var f = document.createElement("link");
                (f.rel = "preload"),
                  (f.as = "image"),
                  (f.imageSrcset = h),
                  document.head.appendChild(f);
              }
            },
            [t, r, n]
          );
        },
        f = r(61608),
        p = r.n(f),
        g = function (t) {
          var e = t.pixelDensity,
            r = void 0 === e ? 1 : e,
            s = t.preload,
            c = (0, o.Z)(t, ["pixelDensity", "preload"]),
            u = h(),
            l = c.src,
            f = c.width,
            g = c.height,
            v = c.maxWidth,
            m = c.maxHeight,
            x = c.aspectRatio,
            y = (0, o.Z)(c, [
              "src",
              "width",
              "height",
              "maxWidth",
              "maxHeight",
              "aspectRatio",
            ]),
            w = null != x ? x : +f / +g;
          return ((0, d.useEffect)(
            function () {
              l &&
                "string" == typeof l &&
                (s &&
                  u({
                    src: l,
                    quality: c.quality ? +c.quality : 75,
                    width: v || (m ? m * w : +f),
                  }),
                s || u({ src: l, quality: 1, width: 32 }));
            },
            [w, m, v, s, u, c.quality, l, f]
          ),
          l && "undefined" !== l)
            ? (0, i.jsx)(
                p(),
                (0, a.Z)((0, n.Z)({}, y), {
                  priority: ("string" != typeof l && s) || y.priority,
                  placeholder: s ? void 0 : "blur",
                  blurDataURL:
                    "string" != typeof l || s
                      ? void 0
                      : "/_next/image?url=".concat(
                          encodeURIComponent(
                            l.replace(/^(http:)?\/\//, "https://")
                          ),
                          "&w=32&q=1"
                        ),
                  src:
                    "string" == typeof l
                      ? l.replace(/^(http:)?\/\//, "https://")
                      : l,
                  width: Math.round(+(v || (m ? m * w : f)) * r),
                  height: Math.round(+(m || (v ? v / w : g)) * r),
                })
              )
            : null;
        };
    },
    66930: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          BookList: function () {
            return w;
          },
          __N_SSG: function () {
            return y;
          },
        });
      var n = r(47568),
        a = r(41799),
        o = r(69396),
        i = r(29815),
        s = r(70655),
        c = r(85893),
        u = r(71644),
        l = r(86010),
        d = r(58237),
        h = r(13195),
        f = r(24614),
        p = r(67294),
        g = r(7597),
        v = r.n(g),
        m = function (t) {
          var e = t.rating,
            r = v().generate();
          return (0, c.jsx)("figure", {
            className: "flex h-[22px] items-center justify-center",
            children: (0, i.Z)([, , , , ,]).map(function (t, n) {
              var a = e / (n + 1) >= 1 ? 100 : Math.max((e - n) * 100, 0);
              return (0,
              c.jsxs)("svg", { className: "h-full w-auto", fill: "url(#".concat(r, "-").concat(n, ")"), viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: [(0, c.jsx)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }), (0, c.jsxs)("linearGradient", { id: "".concat(r, "-").concat(n), children: [(0, c.jsx)("stop", { offset: "0%", className: (0, l.Z)("[stop-color:theme(colors.yellow.500)]") }), (0, c.jsx)("stop", { offset: "".concat(a, "%"), className: (0, l.Z)("[stop-color:theme(colors.yellow.500)]") }), (0, c.jsx)("stop", { offset: "".concat(a, "%"), className: (0, l.Z)("[stop-color:theme(colors.gray.300)]") }), (0, c.jsx)("stop", { offset: "100%", className: (0, l.Z)("[stop-color:theme(colors.gray.300)]") })] })] }, "".concat(r, "-").concat(n));
            }),
          });
        },
        x = function (t) {
          var e,
            r,
            i,
            l,
            g = (0, p.useState)(
              (0, o.Z)((0, a.Z)({}, t.book), { upvoted: !1 })
            ),
            v = g[0],
            x = g[1],
            y = d.SX.books.upvote.useMutation().mutate,
            w = (0, p.useCallback)(
              ((l = (0, n.Z)(function (t) {
                return (0, s.__generator)(this, function (e) {
                  return (
                    x(function (t) {
                      return (0,
                      o.Z)((0, a.Z)({}, t), { votes: t.votes + 1, upvoted: !0 });
                    }),
                    y({ id: t }),
                    [2]
                  );
                });
              })),
              function (t) {
                return l.apply(this, arguments);
              }),
              [y]
            );
          return (0, c.jsxs)("figure", {
            className: "group spacing-2",
            children: [
              (0, c.jsxs)("div", {
                className: "relative grid",
                children: [
                  (0, c.jsx)("picture", {
                    className:
                      "aspect-[0.666] overflow-hidden rounded-md drop-shadow",
                    children: (0, c.jsx)(h.E, {
                      preload: t.preload,
                      src: null !== (e = v.image) && void 0 !== e ? e : "",
                      maxWidth: 360,
                      width: 360,
                      height: 549,
                      alt: v.name,
                      className:
                        "-m-0.5 h-[calc(100%+0.25rem)] w-[calc(100%+0.25rem)] max-w-none object-cover object-center group-hfa:saturate-150",
                    }),
                  }),
                  (0, c.jsxs)("footer", {
                    className: "absolute -bottom-2 right-4 flex gap-2",
                    children: [
                      v.rating
                        ? (0, c.jsx)("div", {
                            className:
                              "rounded-md bg-white py-1 px-2 drop-shadow-md",
                            children: (0, c.jsx)(m, { rating: v.rating }),
                          })
                        : null,
                      (0, c.jsxs)("button", {
                        className:
                          "flex items-center justify-center gap-1 rounded-md bg-white py-1 px-1.5 text-gray-300 drop-shadow-md transition-all h:text-red-500",
                        disabled: v.upvoted,
                        onClick: function () {
                          return w(v.id);
                        },
                        children: [
                          (0, c.jsx)(u.Z, { className: "h-5 w-5 " }),
                          (0, c.jsx)("span", {
                            className: "text-sm font-semibold",
                            children: v.votes,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsxs)("figcaption", {
                className: "",
                children: [
                  (0, c.jsx)("h2", {
                    children: (0, c.jsx)(f.r, {
                      href: null !== (r = v.url) && void 0 !== r ? r : "",
                      className:
                        "text-[15px] font-semibold text-gray-900 hfa:underline d:text-gray-100",
                      children: v.name,
                    }),
                  }),
                  (0, c.jsxs)("h3", {
                    children: [
                      " ",
                      (0, c.jsx)(f.r, {
                        href:
                          null !== (i = v.author_url) && void 0 !== i ? i : "",
                        className:
                          "text-[15px] tracking-tight text-gray-900 hfa:underline d:text-gray-400",
                        children: v.author,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        y = !0,
        w = function (t) {
          return (0, c.jsx)(c.Fragment, {
            children: (0, c.jsxs)("section", {
              className: "relative mx-auto max-w-6xl px-4 py-16 md:px-8",
              children: [
                (0, c.jsxs)("header", {
                  className: "pb-16",
                  children: [
                    (0, c.jsx)("div", {
                      className: "heading-pre",
                      children: "Reading list",
                    }),
                    (0, c.jsx)("h1", {
                      className: "heading-2xl -ml-1",
                      children: "Collection of books that I've read",
                    }),
                    (0, c.jsx)("div", {
                      className: "relative -mx-4 overflow-x-auto px-4 pb-2",
                    }),
                  ],
                }),
                (0, c.jsx)("main", {
                  className:
                    "grid w-full grid-cols-2 gap-8 gap-y-16 sm:gap-16 sm:gap-y-24 md:grid-cols-3",
                  children: t.books
                    .sort(function (t, e) {
                      return e.votes - t.votes;
                    })
                    .map(function (t, e) {
                      return (0, c.jsx)(x, { book: t, preload: e < 10 }, t.id);
                    }),
                }),
              ],
            }),
          });
        };
      e.default = w;
    },
    7597: function (t, e, r) {
      let { v4: n } = r(97466),
        a = r(40964),
        o = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        i = { consistentLength: !0 },
        s,
        c = (t, e, r) => {
          let n = e(t.toLowerCase().replace(/-/g, ""));
          return r && r.consistentLength
            ? n.padStart(r.shortIdLength, r.paddingChar)
            : n;
        },
        u = (t, e) => {
          let r = e(t).padStart(32, "0"),
            n = r.match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
          return [n[1], n[2], n[3], n[4], n[5]].join("-");
        },
        l = (t) => Math.ceil(Math.log(3402823669209385e23) / Math.log(t));
      t.exports = (() => {
        let t = (t, e) => {
          let r = t || o,
            s = { ...i, ...e };
          if ([...new Set(Array.from(r))].length !== r.length)
            throw Error(
              "The provided Alphabet has duplicate characters resulting in unreliable results"
            );
          let d = l(r.length),
            h = {
              shortIdLength: d,
              consistentLength: s.consistentLength,
              paddingChar: r[0],
            },
            f = a(a.HEX, r),
            p = a(r, a.HEX),
            g = () => c(n(), f, h),
            v = {
              new: g,
              generate: g,
              uuid: n,
              fromUUID: (t) => c(t, f, h),
              toUUID: (t) => u(t, p),
              alphabet: r,
              maxLength: d,
            };
          return Object.freeze(v), v;
        };
        return (
          (t.constants = {
            flickrBase58: o,
            cookieBase90:
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
          }),
          (t.uuid = n),
          (t.generate = () => (s || (s = t(o).generate), s())),
          t
        );
      })();
    },
    97466: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          NIL: function () {
            return k;
          },
          parse: function () {
            return v;
          },
          stringify: function () {
            return h;
          },
          v1: function () {
            return g;
          },
          v3: function () {
            return C;
          },
          v4: function () {
            return E;
          },
          v5: function () {
            return _;
          },
          validate: function () {
            return u;
          },
          version: function () {
            return Z;
          },
        });
      var n,
        a,
        o,
        i = new Uint8Array(16);
      function s() {
        if (
          !n &&
          !(n =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return n(i);
      }
      for (
        var c =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          u = function (t) {
            return "string" == typeof t && c.test(t);
          },
          l = [],
          d = 0;
        d < 256;
        ++d
      )
        l.push((d + 256).toString(16).substr(1));
      var h = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              l[t[e + 0]] +
              l[t[e + 1]] +
              l[t[e + 2]] +
              l[t[e + 3]] +
              "-" +
              l[t[e + 4]] +
              l[t[e + 5]] +
              "-" +
              l[t[e + 6]] +
              l[t[e + 7]] +
              "-" +
              l[t[e + 8]] +
              l[t[e + 9]] +
              "-" +
              l[t[e + 10]] +
              l[t[e + 11]] +
              l[t[e + 12]] +
              l[t[e + 13]] +
              l[t[e + 14]] +
              l[t[e + 15]]
            ).toLowerCase();
          if (!u(r)) throw TypeError("Stringified UUID is invalid");
          return r;
        },
        f = 0,
        p = 0,
        g = function (t, e, r) {
          var n = (e && r) || 0,
            i = e || Array(16),
            c = (t = t || {}).node || a,
            u = void 0 !== t.clockseq ? t.clockseq : o;
          if (null == c || null == u) {
            var l = t.random || (t.rng || s)();
            null == c && (c = a = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]),
              null == u && (u = o = ((l[6] << 8) | l[7]) & 16383);
          }
          var d = void 0 !== t.msecs ? t.msecs : Date.now(),
            g = void 0 !== t.nsecs ? t.nsecs : p + 1,
            v = d - f + (g - p) / 1e4;
          if (
            (v < 0 && void 0 === t.clockseq && (u = (u + 1) & 16383),
            (v < 0 || d > f) && void 0 === t.nsecs && (g = 0),
            g >= 1e4)
          )
            throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (f = d), (p = g), (o = u);
          var m = ((268435455 & (d += 122192928e5)) * 1e4 + g) % 4294967296;
          (i[n++] = (m >>> 24) & 255),
            (i[n++] = (m >>> 16) & 255),
            (i[n++] = (m >>> 8) & 255),
            (i[n++] = 255 & m);
          var x = ((d / 4294967296) * 1e4) & 268435455;
          (i[n++] = (x >>> 8) & 255),
            (i[n++] = 255 & x),
            (i[n++] = ((x >>> 24) & 15) | 16),
            (i[n++] = (x >>> 16) & 255),
            (i[n++] = (u >>> 8) | 128),
            (i[n++] = 255 & u);
          for (var y = 0; y < 6; ++y) i[n + y] = c[y];
          return e || h(i);
        },
        v = function (t) {
          if (!u(t)) throw TypeError("Invalid UUID");
          var e,
            r = new Uint8Array(16);
          return (
            (r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
            (r[1] = (e >>> 16) & 255),
            (r[2] = (e >>> 8) & 255),
            (r[3] = 255 & e),
            (r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
            (r[5] = 255 & e),
            (r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
            (r[7] = 255 & e),
            (r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
            (r[9] = 255 & e),
            (r[10] =
              ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
            (r[11] = (e / 4294967296) & 255),
            (r[12] = (e >>> 24) & 255),
            (r[13] = (e >>> 16) & 255),
            (r[14] = (e >>> 8) & 255),
            (r[15] = 255 & e),
            r
          );
        };
      function m(t, e, r) {
        function n(t, n, a, o) {
          if (
            ("string" == typeof t &&
              (t = (function (t) {
                t = unescape(encodeURIComponent(t));
                for (var e = [], r = 0; r < t.length; ++r)
                  e.push(t.charCodeAt(r));
                return e;
              })(t)),
            "string" == typeof n && (n = v(n)),
            16 !== n.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)"
            );
          var i = new Uint8Array(16 + t.length);
          if (
            (i.set(n),
            i.set(t, n.length),
            ((i = r(i))[6] = (15 & i[6]) | e),
            (i[8] = (63 & i[8]) | 128),
            a)
          ) {
            o = o || 0;
            for (var s = 0; s < 16; ++s) a[o + s] = i[s];
            return a;
          }
          return h(i);
        }
        try {
          n.name = t;
        } catch (a) {}
        return (
          (n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
          (n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
          n
        );
      }
      function x(t) {
        return (((t + 64) >>> 9) << 4) + 14 + 1;
      }
      function y(t, e) {
        var r = (65535 & t) + (65535 & e);
        return (((t >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
      }
      function w(t, e, r, n, a, o) {
        var i, s;
        return y(((i = y(y(e, t), y(n, o))) << a) | (i >>> (32 - a)), r);
      }
      function b(t, e, r, n, a, o, i) {
        return w((e & r) | (~e & n), t, e, a, o, i);
      }
      function j(t, e, r, n, a, o, i) {
        return w((e & n) | (r & ~n), t, e, a, o, i);
      }
      function N(t, e, r, n, a, o, i) {
        return w(e ^ r ^ n, t, e, a, o, i);
      }
      function A(t, e, r, n, a, o, i) {
        return w(r ^ (e | ~n), t, e, a, o, i);
      }
      var C = m("v3", 48, function (t) {
          if ("string" == typeof t) {
            var e = unescape(encodeURIComponent(t));
            t = new Uint8Array(e.length);
            for (var r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r);
          }
          return (function (t) {
            for (
              var e = [], r = 32 * t.length, n = "0123456789abcdef", a = 0;
              a < r;
              a += 8
            ) {
              var o = (t[a >> 5] >>> a % 32) & 255,
                i = parseInt(n.charAt((o >>> 4) & 15) + n.charAt(15 & o), 16);
              e.push(i);
            }
            return e;
          })(
            (function (t, e) {
              (t[e >> 5] |= 128 << e % 32), (t[x(e) - 1] = e);
              for (
                var r = 1732584193,
                  n = -271733879,
                  a = -1732584194,
                  o = 271733878,
                  i = 0;
                i < t.length;
                i += 16
              ) {
                var s = r,
                  c = n,
                  u = a,
                  l = o;
                (r = b(r, n, a, o, t[i], 7, -680876936)),
                  (o = b(o, r, n, a, t[i + 1], 12, -389564586)),
                  (a = b(a, o, r, n, t[i + 2], 17, 606105819)),
                  (n = b(n, a, o, r, t[i + 3], 22, -1044525330)),
                  (r = b(r, n, a, o, t[i + 4], 7, -176418897)),
                  (o = b(o, r, n, a, t[i + 5], 12, 1200080426)),
                  (a = b(a, o, r, n, t[i + 6], 17, -1473231341)),
                  (n = b(n, a, o, r, t[i + 7], 22, -45705983)),
                  (r = b(r, n, a, o, t[i + 8], 7, 1770035416)),
                  (o = b(o, r, n, a, t[i + 9], 12, -1958414417)),
                  (a = b(a, o, r, n, t[i + 10], 17, -42063)),
                  (n = b(n, a, o, r, t[i + 11], 22, -1990404162)),
                  (r = b(r, n, a, o, t[i + 12], 7, 1804603682)),
                  (o = b(o, r, n, a, t[i + 13], 12, -40341101)),
                  (a = b(a, o, r, n, t[i + 14], 17, -1502002290)),
                  (n = b(n, a, o, r, t[i + 15], 22, 1236535329)),
                  (r = j(r, n, a, o, t[i + 1], 5, -165796510)),
                  (o = j(o, r, n, a, t[i + 6], 9, -1069501632)),
                  (a = j(a, o, r, n, t[i + 11], 14, 643717713)),
                  (n = j(n, a, o, r, t[i], 20, -373897302)),
                  (r = j(r, n, a, o, t[i + 5], 5, -701558691)),
                  (o = j(o, r, n, a, t[i + 10], 9, 38016083)),
                  (a = j(a, o, r, n, t[i + 15], 14, -660478335)),
                  (n = j(n, a, o, r, t[i + 4], 20, -405537848)),
                  (r = j(r, n, a, o, t[i + 9], 5, 568446438)),
                  (o = j(o, r, n, a, t[i + 14], 9, -1019803690)),
                  (a = j(a, o, r, n, t[i + 3], 14, -187363961)),
                  (n = j(n, a, o, r, t[i + 8], 20, 1163531501)),
                  (r = j(r, n, a, o, t[i + 13], 5, -1444681467)),
                  (o = j(o, r, n, a, t[i + 2], 9, -51403784)),
                  (a = j(a, o, r, n, t[i + 7], 14, 1735328473)),
                  (n = j(n, a, o, r, t[i + 12], 20, -1926607734)),
                  (r = N(r, n, a, o, t[i + 5], 4, -378558)),
                  (o = N(o, r, n, a, t[i + 8], 11, -2022574463)),
                  (a = N(a, o, r, n, t[i + 11], 16, 1839030562)),
                  (n = N(n, a, o, r, t[i + 14], 23, -35309556)),
                  (r = N(r, n, a, o, t[i + 1], 4, -1530992060)),
                  (o = N(o, r, n, a, t[i + 4], 11, 1272893353)),
                  (a = N(a, o, r, n, t[i + 7], 16, -155497632)),
                  (n = N(n, a, o, r, t[i + 10], 23, -1094730640)),
                  (r = N(r, n, a, o, t[i + 13], 4, 681279174)),
                  (o = N(o, r, n, a, t[i], 11, -358537222)),
                  (a = N(a, o, r, n, t[i + 3], 16, -722521979)),
                  (n = N(n, a, o, r, t[i + 6], 23, 76029189)),
                  (r = N(r, n, a, o, t[i + 9], 4, -640364487)),
                  (o = N(o, r, n, a, t[i + 12], 11, -421815835)),
                  (a = N(a, o, r, n, t[i + 15], 16, 530742520)),
                  (n = N(n, a, o, r, t[i + 2], 23, -995338651)),
                  (r = A(r, n, a, o, t[i], 6, -198630844)),
                  (o = A(o, r, n, a, t[i + 7], 10, 1126891415)),
                  (a = A(a, o, r, n, t[i + 14], 15, -1416354905)),
                  (n = A(n, a, o, r, t[i + 5], 21, -57434055)),
                  (r = A(r, n, a, o, t[i + 12], 6, 1700485571)),
                  (o = A(o, r, n, a, t[i + 3], 10, -1894986606)),
                  (a = A(a, o, r, n, t[i + 10], 15, -1051523)),
                  (n = A(n, a, o, r, t[i + 1], 21, -2054922799)),
                  (r = A(r, n, a, o, t[i + 8], 6, 1873313359)),
                  (o = A(o, r, n, a, t[i + 15], 10, -30611744)),
                  (a = A(a, o, r, n, t[i + 6], 15, -1560198380)),
                  (n = A(n, a, o, r, t[i + 13], 21, 1309151649)),
                  (r = A(r, n, a, o, t[i + 4], 6, -145523070)),
                  (o = A(o, r, n, a, t[i + 11], 10, -1120210379)),
                  (a = A(a, o, r, n, t[i + 2], 15, 718787259)),
                  (n = A(n, a, o, r, t[i + 9], 21, -343485551)),
                  (r = y(r, s)),
                  (n = y(n, c)),
                  (a = y(a, u)),
                  (o = y(o, l));
              }
              return [r, n, a, o];
            })(
              (function (t) {
                if (0 === t.length) return [];
                for (
                  var e = 8 * t.length, r = new Uint32Array(x(e)), n = 0;
                  n < e;
                  n += 8
                )
                  r[n >> 5] |= (255 & t[n / 8]) << n % 32;
                return r;
              })(t),
              8 * t.length
            )
          );
        }),
        E = function (t, e, r) {
          var n = (t = t || {}).random || (t.rng || s)();
          if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
            r = r || 0;
            for (var a = 0; a < 16; ++a) e[r + a] = n[a];
            return e;
          }
          return h(n);
        };
      function U(t, e, r, n) {
        switch (t) {
          case 0:
            return (e & r) ^ (~e & n);
          case 1:
          case 3:
            return e ^ r ^ n;
          case 2:
            return (e & r) ^ (e & n) ^ (r & n);
        }
      }
      function I(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      var _ = m("v5", 80, function (t) {
          var e = [1518500249, 1859775393, 2400959708, 3395469782],
            r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof t) {
            var n = unescape(encodeURIComponent(t));
            t = [];
            for (var a = 0; a < n.length; ++a) t.push(n.charCodeAt(a));
          } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
          t.push(128);
          for (
            var o = Math.ceil((t.length / 4 + 2) / 16), i = Array(o), s = 0;
            s < o;
            ++s
          ) {
            for (var c = new Uint32Array(16), u = 0; u < 16; ++u)
              c[u] =
                (t[64 * s + 4 * u] << 24) |
                (t[64 * s + 4 * u + 1] << 16) |
                (t[64 * s + 4 * u + 2] << 8) |
                t[64 * s + 4 * u + 3];
            i[s] = c;
          }
          (i[o - 1][14] = ((t.length - 1) * 8) / 4294967296),
            (i[o - 1][14] = Math.floor(i[o - 1][14])),
            (i[o - 1][15] = ((t.length - 1) * 8) & 4294967295);
          for (var l = 0; l < o; ++l) {
            for (var d = new Uint32Array(80), h = 0; h < 16; ++h)
              d[h] = i[l][h];
            for (var f = 16; f < 80; ++f)
              d[f] = I(d[f - 3] ^ d[f - 8] ^ d[f - 14] ^ d[f - 16], 1);
            for (
              var p = r[0], g = r[1], v = r[2], m = r[3], x = r[4], y = 0;
              y < 80;
              ++y
            ) {
              var w = Math.floor(y / 20),
                b = (I(p, 5) + U(w, g, v, m) + x + e[w] + d[y]) >>> 0;
              (x = m), (m = v), (v = I(g, 30) >>> 0), (g = p), (p = b);
            }
            (r[0] = (r[0] + p) >>> 0),
              (r[1] = (r[1] + g) >>> 0),
              (r[2] = (r[2] + v) >>> 0),
              (r[3] = (r[3] + m) >>> 0),
              (r[4] = (r[4] + x) >>> 0);
          }
          return [
            (r[0] >> 24) & 255,
            (r[0] >> 16) & 255,
            (r[0] >> 8) & 255,
            255 & r[0],
            (r[1] >> 24) & 255,
            (r[1] >> 16) & 255,
            (r[1] >> 8) & 255,
            255 & r[1],
            (r[2] >> 24) & 255,
            (r[2] >> 16) & 255,
            (r[2] >> 8) & 255,
            255 & r[2],
            (r[3] >> 24) & 255,
            (r[3] >> 16) & 255,
            (r[3] >> 8) & 255,
            255 & r[3],
            (r[4] >> 24) & 255,
            (r[4] >> 16) & 255,
            (r[4] >> 8) & 255,
            255 & r[4],
          ];
        }),
        k = "00000000-0000-0000-0000-000000000000",
        Z = function (t) {
          if (!u(t)) throw TypeError("Invalid UUID");
          return parseInt(t.substr(14, 1), 16);
        };
    },
    71644: function (t, e, r) {
      "use strict";
      var n = r(67294);
      let a = n.forwardRef(function ({ title: t, titleId: e, ...r }, a) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: a,
              "aria-labelledby": e,
            },
            r
          ),
          t ? n.createElement("title", { id: e }, t) : null,
          n.createElement("path", {
            d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z",
          })
        );
      });
      e.Z = a;
    },
    47568: function (t, e, r) {
      "use strict";
      function n(t, e, r, n, a, o, i) {
        try {
          var s = t[o](i),
            c = s.value;
        } catch (u) {
          r(u);
          return;
        }
        s.done ? e(c) : Promise.resolve(c).then(n, a);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (a, o) {
            var i = t.apply(e, r);
            function s(t) {
              n(i, a, o, s, c, "next", t);
            }
            function c(t) {
              n(i, a, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
      r.d(e, {
        Z: function () {
          return a;
        },
      });
    },
  },
  function (t) {
    t.O(0, [61608, 49774, 92888, 40179], function () {
      return t((t.s = 67616));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=books-af6b6d4044e29c3c.js.map
