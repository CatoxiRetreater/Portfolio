(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61608],
  {
    79361: function (e, t) {
      "use strict";
      t.Z = function (e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      };
    },
    98461: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = i(79361).Z,
        r = i(94941).Z,
        a = i(53929).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t,
            i,
            l,
            c = e.src,
            b = e.sizes,
            S = e.unoptimized,
            z = void 0 !== S && S,
            C = e.priority,
            E = void 0 !== C && C,
            I = e.loading,
            j = e.className,
            _ = e.quality,
            k = e.width,
            L = e.height,
            x = e.fill,
            O = e.style,
            R = e.onLoadingComplete,
            N = e.placeholder,
            A = void 0 === N ? "empty" : N,
            q = e.blurDataURL,
            M = s(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            B = u.useContext(h.ImageConfigContext),
            P = u.useMemo(
              function () {
                var e = m || B || g.imageConfigDefault,
                  t = a(e.deviceSizes)
                    .concat(a(e.imageSizes))
                    .sort(function (e, t) {
                      return e - t;
                    }),
                  i = e.deviceSizes.sort(function (e, t) {
                    return e - t;
                  });
                return o({}, e, { allSizes: t, deviceSizes: i });
              },
              [B]
            ),
            Z = w;
          if ("loader" in M) {
            if (M.loader) {
              var D = M.loader;
              Z = function (e) {
                e.config;
                var t = s(e, ["config"]);
                return D(t);
              };
            }
            delete M.loader;
          }
          var W = "",
            T = v(k),
            U = v(L);
          if (
            (function (e) {
              var t;
              return "object" == typeof e && (p(e) || void 0 !== e.src);
            })(c)
          ) {
            var F = p(c) ? c.default : c;
            if (!F.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(F)
                )
              );
            if (!F.height || !F.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(F)
                )
              );
            if (
              ((t = F.blurWidth),
              (i = F.blurHeight),
              (q = q || F.blurDataURL),
              (W = F.src),
              !x)
            ) {
              if (T || U) {
                if (T && !U) {
                  var G = T / F.width;
                  U = Math.round(F.height * G);
                } else if (!T && U) {
                  var H = U / F.height;
                  T = Math.round(F.width * H);
                }
              } else (T = F.width), (U = F.height);
            }
          }
          c = "string" == typeof c ? c : W;
          var V = !E && ("lazy" === I || void 0 === I);
          (c.startsWith("data:") || c.startsWith("blob:")) &&
            ((z = !0), (V = !1)),
            P.unoptimized && (z = !0);
          var J = r(u.useState(!1), 2),
            $ = J[0],
            K = J[1],
            Q = r(u.useState(!1), 2),
            X = Q[0],
            Y = Q[1],
            ee = v(_),
            et = Object.assign(
              x
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }
                : {},
              X ? {} : { color: "transparent" },
              O
            ),
            ei =
              "blur" === A && q && !$
                ? {
                    backgroundSize: et.objectFit || "cover",
                    backgroundPosition: et.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        f.getImageBlurSvg({
                          widthInt: T,
                          heightInt: U,
                          blurWidth: t,
                          blurHeight: i,
                          blurDataURL: q,
                        }),
                        '")'
                      ),
                  }
                : {},
            en = (function (e) {
              var t = e.config,
                i = e.src,
                n = e.unoptimized,
                r = e.width,
                o = e.quality,
                l = e.sizes,
                c = e.loader;
              if (n) return { src: i, srcSet: void 0, sizes: void 0 };
              var s = (function (e, t, i) {
                  var n = e.deviceSizes,
                    r = e.allSizes;
                  if (i) {
                    for (
                      var o = /(^|\s)(1?\d?\d)vw/g, l = [];
                      (c = o.exec(i));
                      c
                    )
                      l.push(parseInt(c[2]));
                    if (l.length) {
                      var c,
                        s,
                        u = 0.01 * (s = Math).min.apply(s, a(l));
                      return {
                        widths: r.filter(function (e) {
                          return e >= n[0] * u;
                        }),
                        kind: "w",
                      };
                    }
                    return { widths: r, kind: "w" };
                  }
                  return "number" != typeof t
                    ? { widths: n, kind: "w" }
                    : {
                        widths: a(
                          new Set(
                            [t, 2 * t].map(function (e) {
                              return (
                                r.find(function (t) {
                                  return t >= e;
                                }) || r[r.length - 1]
                              );
                            })
                          )
                        ),
                        kind: "x",
                      };
                })(t, r, l),
                u = s.widths,
                d = s.kind,
                f = u.length - 1;
              return {
                sizes: l || "w" !== d ? l : "100vw",
                srcSet: u
                  .map(function (e, n) {
                    return ""
                      .concat(
                        c({ config: t, src: i, quality: o, width: e }),
                        " "
                      )
                      .concat("w" === d ? e : n + 1)
                      .concat(d);
                  })
                  .join(", "),
                src: c({ config: t, src: i, quality: o, width: u[f] }),
              };
            })({
              config: P,
              src: c,
              unoptimized: z,
              width: T,
              quality: ee,
              sizes: b,
              loader: Z,
            }),
            er = c,
            ea = "imagesizes";
          ea = "imageSizes";
          var eo =
              (n((l = {}), "imageSrcSet", en.srcSet),
              n(l, ea, en.sizes),
              n(l, "crossOrigin", M.crossOrigin),
              l),
            el = u.useRef(R);
          u.useEffect(
            function () {
              el.current = R;
            },
            [R]
          );
          var ec = o(
            {
              isLazy: V,
              imgAttributes: en,
              heightInt: U,
              widthInt: T,
              qualityInt: ee,
              className: j,
              imgStyle: et,
              blurStyle: ei,
              loading: I,
              config: P,
              fill: x,
              unoptimized: z,
              placeholder: A,
              loader: Z,
              srcString: er,
              onLoadingCompleteRef: el,
              setBlurComplete: K,
              setShowAltText: Y,
            },
            M
          );
          return u.default.createElement(
            u.default.Fragment,
            null,
            u.default.createElement(y, Object.assign({}, ec)),
            E
              ? u.default.createElement(
                  d.default,
                  null,
                  u.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + en.src + en.srcSet + en.sizes,
                        rel: "preload",
                        as: "image",
                        href: en.srcSet ? void 0 : en.src,
                      },
                      eo
                    )
                  )
                )
              : null
          );
        });
      var o = i(6495).Z,
        l = i(92648).Z,
        c = i(91598).Z,
        s = i(17273).Z,
        u = c(i(67294)),
        d = l(i(5443)),
        f = i(42730),
        g = i(99309),
        h = i(59977);
      i(63794);
      var m = {
        deviceSizes: [
          320, 460, 540, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
        ],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !0,
        unoptimized: !1,
      };
      function p(e) {
        return void 0 !== e.default;
      }
      function v(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function b(e, t, i, n, r) {
        e &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              e.parentNode &&
                ("blur" === i && r(!0),
                (null == n ? void 0 : n.current) && n.current(e));
            }));
      }
      var y = function (e) {
        var t = e.imgAttributes,
          i = e.heightInt,
          n = e.widthInt,
          r = (e.qualityInt, e.className),
          a = e.imgStyle,
          l = e.blurStyle,
          c = e.isLazy,
          d = e.fill,
          f = e.placeholder,
          g = e.loading,
          h = e.srcString,
          m = (e.config, e.unoptimized, e.loader, e.onLoadingCompleteRef),
          p = e.setBlurComplete,
          v = e.setShowAltText,
          y = e.onLoad,
          w = e.onError,
          S = s(e, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "fill",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setShowAltText",
            "onLoad",
            "onError",
          ]);
        return (
          (g = c ? "lazy" : g),
          u.default.createElement(
            u.default.Fragment,
            null,
            u.default.createElement(
              "img",
              Object.assign({}, S, t, {
                width: n,
                height: i,
                decoding: "async",
                "data-nimg": "future".concat(d ? "-fill" : ""),
                className: r,
                loading: g,
                style: o({}, a, l),
                ref: u.useCallback(
                  function (e) {
                    e && (w && (e.src = e.src), e.complete && b(e, h, f, m, p));
                  },
                  [h, f, m, p, w]
                ),
                onLoad: function (e) {
                  b(e.currentTarget, h, f, m, p), y && y(e);
                },
                onError: function (e) {
                  v(!0), "blur" === f && p(!0), w && w(e);
                },
              })
            )
          )
        );
      };
      function w(e) {
        var t = e.config,
          i = e.src,
          n = e.width,
          r = e.quality;
        return i.endsWith(".svg") && !t.dangerouslyAllowSVG
          ? i
          : ""
              .concat(t.path, "?url=")
              .concat(encodeURIComponent(i), "&w=")
              .concat(n, "&q=")
              .concat(r || 75);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    42730: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          var t = e.widthInt,
            i = e.heightInt,
            n = e.blurWidth,
            r = e.blurHeight,
            a = e.blurDataURL,
            o = a.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
            .concat(n || t, " ")
            .concat(
              r || i,
              "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
            )
            .concat(n && r ? "1" : "20", "'/%3E")
            .concat(
              o,
              "%3C/filter%3E%3Cimage filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
            )
            .concat(a, "'/%3E%3C/svg%3E");
        });
    },
    61608: function (e, t, i) {
      e.exports = i(98461);
    },
  },
]);
//# sourceMappingURL=61608-c79210ea31d87b05.js.map
