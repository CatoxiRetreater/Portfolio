(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92888],
  {
    15787: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return u;
        },
      });
      var n = r(67294),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = n.createContext && n.createContext(i),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        s = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, n = Object.getOwnPropertySymbols(e);
              i < n.length;
              i++
            )
              0 > t.indexOf(n[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]]);
          return r;
        };
      function u(e) {
        return function (t) {
          return n.createElement(
            l,
            a({ attr: a({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return n.createElement(
                    t.tag,
                    a({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function l(e) {
        var t = function (t) {
          var r,
            i = e.attr,
            o = e.size,
            u = e.title,
            l = s(e, ["attr", "size", "title"]),
            c = o || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                i,
                l,
                {
                  className: r,
                  style: a(a({ color: e.color || t.color }, t.style), e.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              u && n.createElement("title", null, u),
              e.children
            )
          );
        };
        return void 0 !== o
          ? n.createElement(o.Consumer, null, function (e) {
              return t(e);
            })
          : t(i);
      }
    },
    65886: function (e, t, r) {
      var n = r(15787).w_;
      e.exports.u = function (e) {
        return n({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z",
              },
            },
          ],
        })(e);
      };
    },
    41416: function (e, t, r) {
      var n = r(15787).w_;
      e.exports.p = function (e) {
        return n({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
              },
            },
          ],
        })(e);
      };
    },
    32159: function (e, t, r) {
      var n = r(15787).w_;
      e.exports.n = function (e) {
        return n({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
            },
          ],
        })(e);
      };
    },
    6714: function (e, t, r) {
      var n = r(15787).w_;
      e.exports.m = function (e) {
        return n({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",
              },
            },
          ],
        })(e);
      };
    },
    86010: function (e, t, r) {
      "use strict";
      function n(e) {
        var t,
          r,
          i = "";
        if ("string" == typeof e || "number" == typeof e) i += e;
        else if ("object" == typeof e) {
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (r = n(e[t])) && (i && (i += " "), (i += r));
          else for (t in e) e[t] && (i && (i += " "), (i += t));
        }
        return i;
      }
      t.Z = function () {
        for (var e, t, r = 0, i = ""; r < arguments.length; )
          (e = arguments[r++]) && (t = n(e)) && (i && (i += " "), (i += t));
        return i;
      };
    },
    82010: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return l;
        },
        f: function () {
          return c;
        },
      });
      var n = r(67294);
      let i = ["light", "dark"],
        o = "(prefers-color-scheme: dark)",
        a = "undefined" == typeof window,
        s = (0, n.createContext)(void 0),
        u = { setTheme(e) {}, themes: [] },
        l = () => {
          var e;
          return null !== (e = (0, n.useContext)(s)) && void 0 !== e ? e : u;
        },
        c = (e) =>
          (0, n.useContext)(s)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(d, e),
        f = ["light", "dark"],
        d = ({
          forcedTheme: e,
          disableTransitionOnChange: t = !1,
          enableSystem: r = !0,
          enableColorScheme: a = !0,
          storageKey: u = "theme",
          themes: l = f,
          defaultTheme: c = r ? "system" : "light",
          attribute: d = "data-theme",
          value: y,
          children: g,
          nonce: b,
        }) => {
          let [w, x] = (0, n.useState)(() => p(u, c)),
            [E, O] = (0, n.useState)(() => p(u)),
            C = y ? Object.values(y) : l,
            S = (0, n.useCallback)((e) => {
              let n = e;
              if (!n) return;
              "system" === e && r && (n = v());
              let o = y ? y[n] : n,
                s = t ? m() : null,
                u = document.documentElement;
              if (
                ("class" === d
                  ? (u.classList.remove(...C), o && u.classList.add(o))
                  : o
                  ? u.setAttribute(d, o)
                  : u.removeAttribute(d),
                a)
              ) {
                let l = i.includes(c) ? c : null,
                  f = i.includes(n) ? n : l;
                u.style.colorScheme = f;
              }
              null == s || s();
            }, []),
            k = (0, n.useCallback)(
              (e) => {
                x(e);
                try {
                  localStorage.setItem(u, e);
                } catch (t) {}
              },
              [e]
            ),
            j = (0, n.useCallback)(
              (t) => {
                let n = v(t);
                O(n), "system" === w && r && !e && S("system");
              },
              [w, e]
            );
          (0, n.useEffect)(() => {
            let e = window.matchMedia(o);
            return e.addListener(j), j(e), () => e.removeListener(j);
          }, [j]),
            (0, n.useEffect)(() => {
              let e = (e) => {
                e.key === u && k(e.newValue || c);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [k]),
            (0, n.useEffect)(() => {
              S(null != e ? e : w);
            }, [e, w]);
          let P = (0, n.useMemo)(
            () => ({
              theme: w,
              setTheme: k,
              forcedTheme: e,
              resolvedTheme: "system" === w ? E : w,
              themes: r ? [...l, "system"] : l,
              systemTheme: r ? E : void 0,
            }),
            [w, k, e, E, r, l]
          );
          return n.createElement(
            s.Provider,
            { value: P },
            n.createElement(h, {
              forcedTheme: e,
              disableTransitionOnChange: t,
              enableSystem: r,
              enableColorScheme: a,
              storageKey: u,
              themes: l,
              defaultTheme: c,
              attribute: d,
              value: y,
              children: g,
              attrs: C,
              nonce: b,
            }),
            g
          );
        },
        h = (0, n.memo)(
          ({
            forcedTheme: e,
            storageKey: t,
            attribute: r,
            enableSystem: a,
            enableColorScheme: s,
            defaultTheme: u,
            value: l,
            attrs: c,
            nonce: f,
          }) => {
            let d = "system" === u,
              h =
                "class" === r
                  ? `var d=document.documentElement,c=d.classList;c.remove(${c
                      .map((e) => `'${e}'`)
                      .join(",")});`
                  : `var d=document.documentElement,n='${r}',s='setAttribute';`,
              p = s
                ? i.includes(u) && u
                  ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              m = (e, t = !1, n = !0) => {
                let o = l ? l[e] : e,
                  a = t ? e + "|| ''" : `'${o}'`,
                  u = "";
                return (
                  s &&
                    n &&
                    !t &&
                    i.includes(e) &&
                    (u += `d.style.colorScheme = '${e}';`),
                  "class" === r
                    ? (u += t || o ? `c.add(${a})` : "null")
                    : o && (u += `d[s](n,${a})`),
                  u
                );
              },
              v = e
                ? `!function(){${h}${m(e)}}()`
                : a
                ? `!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
                    "dark"
                  )}}else{${m("light")}}}else if(e){${
                    l ? `var x=${JSON.stringify(l)};` : ""
                  }${m(l ? "x[e]" : "e", !0)}}${
                    d ? "" : "else{" + m(u, !1, !1) + "}"
                  }${p}}catch(e){}}()`
                : `!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${
                    l ? `var x=${JSON.stringify(l)};` : ""
                  }${m(l ? "x[e]" : "e", !0)}}else{${m(
                    u,
                    !1,
                    !1
                  )};}${p}}catch(t){}}();`;
            return n.createElement("script", {
              nonce: f,
              dangerouslySetInnerHTML: { __html: v },
            });
          },
          () => !0
        ),
        p = (e, t) => {
          if (a) return;
          let r;
          try {
            r = localStorage.getItem(e) || void 0;
          } catch (n) {}
          return r || t;
        },
        m = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        v = (e) => (
          e || (e = window.matchMedia(o)), e.matches ? "dark" : "light"
        );
    },
    83454: function (e, t, r) {
      "use strict";
      var n, i;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(77663);
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(83458);
        },
      ]);
    },
    58237: function (e, t, r) {
      "use strict";
      r.d(t, {
        SX: function () {
          return rn;
        },
      });
      var n,
        i,
        o,
        a,
        s,
        u = r(9934),
        l = r(24083),
        c = r(32161),
        f = r(30819),
        d = r(30081),
        h = r(72379),
        p = r(89643);
      class m extends p.F {
        constructor(e) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.cache = e.cache),
            (this.logger = e.logger || f._),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.initialState =
              e.state ||
              (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== e.initialData,
                  n = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0,
                  i = void 0 !== t;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: i ? (null != n ? n : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: i ? "success" : "loading",
                  fetchStatus: "idle",
                };
              })(this.options)),
            (this.state = this.initialState),
            (this.meta = e.meta);
        }
        setOptions(e) {
          (this.options = { ...this.defaultOptions, ...e }),
            (this.meta = null == e ? void 0 : e.meta),
            this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.cache.remove(this);
        }
        setData(e, t) {
          let r = (0, c.oE)(this.state.data, e, this.options);
          return (
            this.dispatch({
              data: r,
              type: "success",
              dataUpdatedAt: null == t ? void 0 : t.updatedAt,
              manual: null == t ? void 0 : t.manual,
            }),
            r
          );
        }
        setState(e, t) {
          this.dispatch({ type: "setState", state: e, setStateOptions: t });
        }
        cancel(e) {
          var t;
          let r = this.promise;
          return (
            null == (t = this.retryer) || t.cancel(e),
            r ? r.then(c.ZT).catch(c.ZT) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some((e) => !1 !== e.options.enabled);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some((e) => e.getCurrentResult().isStale)
          );
        }
        isStaleByTime(e = 0) {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !(0, c.Kp)(this.state.dataUpdatedAt, e)
          );
        }
        onFocus() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        onOnline() {
          var e;
          let t = this.observers.find((e) => e.shouldFetchOnReconnect());
          t && t.refetch({ cancelRefetch: !1 }),
            null == (e = this.retryer) || e.continue();
        }
        addObserver(e) {
          -1 === this.observers.indexOf(e) &&
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.cache.notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          -1 !== this.observers.indexOf(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: "invalidate" });
        }
        fetch(e, t) {
          var r, n, i, o;
          if ("idle" !== this.state.fetchStatus) {
            if (this.state.dataUpdatedAt && null != t && t.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.promise)
              return (
                null == (i = this.retryer) || i.continueRetry(), this.promise
              );
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let a = this.observers.find((e) => e.options.queryFn);
            a && this.setOptions(a.options);
          }
          Array.isArray(this.options.queryKey);
          let s = (0, c.G9)(),
            u = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            l = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => {
                  if (s) return (this.abortSignalConsumed = !0), s.signal;
                },
              });
            };
          l(u);
          let f = () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1), this.options.queryFn(u))
                : Promise.reject("Missing queryFn"),
            d = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: f,
              meta: this.meta,
            };
          l(d),
            null == (r = this.options.behavior) || r.onFetch(d),
            (this.revertState = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !==
                (null == (n = d.fetchOptions) ? void 0 : n.meta)) &&
              this.dispatch({
                type: "fetch",
                meta: null == (o = d.fetchOptions) ? void 0 : o.meta,
              });
          let p = (e) => {
            if (
              (((0, h.DV)(e) && e.silent) ||
                this.dispatch({ type: "error", error: e }),
              !(0, h.DV)(e))
            ) {
              var t, r;
              null == (t = (r = this.cache.config).onError) ||
                t.call(r, e, this);
            }
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = (0, h.Mz)({
              fn: d.fetchFn,
              abort: null == s ? void 0 : s.abort.bind(s),
              onSuccess: (e) => {
                var t, r;
                if (void 0 === e) {
                  p(Error("Query data cannot be undefined"));
                  return;
                }
                this.setData(e),
                  null == (t = (r = this.cache.config).onSuccess) ||
                    t.call(r, e, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: p,
              onFail: () => {
                this.dispatch({ type: "failed" });
              },
              onPause: () => {
                this.dispatch({ type: "pause" });
              },
              onContinue: () => {
                this.dispatch({ type: "continue" });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(e) {
          (this.state = ((t) => {
            var r, n;
            switch (e.type) {
              case "failed":
                return { ...t, fetchFailureCount: t.fetchFailureCount + 1 };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...t,
                  fetchFailureCount: 0,
                  fetchMeta: null != (r = e.meta) ? r : null,
                  fetchStatus: (0, h.Kw)(this.options.networkMode)
                    ? "fetching"
                    : "paused",
                  ...(!t.dataUpdatedAt && { error: null, status: "loading" }),
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                  }),
                };
              case "error":
                let i = e.error;
                if ((0, h.DV)(i) && i.revert && this.revertState)
                  return { ...this.revertState };
                return {
                  ...t,
                  error: i,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            d.V.batch(() => {
              this.observers.forEach((t) => {
                t.onQueryUpdate(e);
              }),
                this.cache.notify({ query: this, type: "updated", action: e });
            });
        }
      }
      var v = r(33989);
      class y extends v.l {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.queries = []),
            (this.queriesMap = {});
        }
        build(e, t, r) {
          var n;
          let i = t.queryKey,
            o = null != (n = t.queryHash) ? n : (0, c.Rm)(i, t),
            a = this.get(o);
          return (
            a ||
              ((a = new m({
                cache: this,
                logger: e.getLogger(),
                queryKey: i,
                queryHash: o,
                options: e.defaultQueryOptions(t),
                state: r,
                defaultOptions: e.getQueryDefaults(i),
                meta: t.meta,
              })),
              this.add(a)),
            a
          );
        }
        add(e) {
          this.queriesMap[e.queryHash] ||
            ((this.queriesMap[e.queryHash] = e),
            this.queries.push(e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.queriesMap[e.queryHash];
          t &&
            (e.destroy(),
            (this.queries = this.queries.filter((t) => t !== e)),
            t === e && delete this.queriesMap[e.queryHash],
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          d.V.batch(() => {
            this.queries.forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.queriesMap[e];
        }
        getAll() {
          return this.queries;
        }
        find(e, t) {
          let [r] = (0, c.I6)(e, t);
          return (
            void 0 === r.exact && (r.exact = !0),
            this.queries.find((e) => (0, c._x)(r, e))
          );
        }
        findAll(e, t) {
          let [r] = (0, c.I6)(e, t);
          return Object.keys(r).length > 0
            ? this.queries.filter((e) => (0, c._x)(r, e))
            : this.queries;
        }
        notify(e) {
          d.V.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          d.V.batch(() => {
            this.queries.forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          d.V.batch(() => {
            this.queries.forEach((e) => {
              e.onOnline();
            });
          });
        }
      }
      var g = r(89886);
      class b extends v.l {
        constructor(e) {
          super(),
            (this.config = e || {}),
            (this.mutations = []),
            (this.mutationId = 0);
        }
        build(e, t, r) {
          let n = new g.m({
            mutationCache: this,
            logger: e.getLogger(),
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(t),
            state: r,
            defaultOptions: t.mutationKey
              ? e.getMutationDefaults(t.mutationKey)
              : void 0,
            meta: t.meta,
          });
          return this.add(n), n;
        }
        add(e) {
          this.mutations.push(e), this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          (this.mutations = this.mutations.filter((t) => t !== e)),
            this.notify({ type: "removed", mutation: e });
        }
        clear() {
          d.V.batch(() => {
            this.mutations.forEach((e) => {
              this.remove(e);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(e) {
          return (
            void 0 === e.exact && (e.exact = !0),
            this.mutations.find((t) => (0, c.X7)(e, t))
          );
        }
        findAll(e) {
          return this.mutations.filter((t) => (0, c.X7)(e, t));
        }
        notify(e) {
          d.V.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.mutations.filter((e) => e.state.isPaused);
          return d.V.batch(() =>
            e.reduce(
              (e, t) => e.then(() => t.continue().catch(c.ZT)),
              Promise.resolve()
            )
          );
        }
      }
      var w = r(15761),
        x = r(96474),
        E = r(9499);
      class O {
        constructor(e = {}) {
          (this.queryCache = e.queryCache || new y()),
            (this.mutationCache = e.mutationCache || new b()),
            (this.logger = e.logger || f._),
            (this.defaultOptions = e.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []);
        }
        mount() {
          (this.unsubscribeFocus = w.j.subscribe(() => {
            w.j.isFocused() &&
              (this.resumePausedMutations(), this.queryCache.onFocus());
          })),
            (this.unsubscribeOnline = x.N.subscribe(() => {
              x.N.isOnline() &&
                (this.resumePausedMutations(), this.queryCache.onOnline());
            }));
        }
        unmount() {
          var e, t;
          null == (e = this.unsubscribeFocus) || e.call(this),
            null == (t = this.unsubscribeOnline) || t.call(this);
        }
        isFetching(e, t) {
          let [r] = (0, c.I6)(e, t);
          return (
            (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length
          );
        }
        isMutating(e) {
          return this.mutationCache.findAll({ ...e, fetching: !0 }).length;
        }
        getQueryData(e, t) {
          var r;
          return null == (r = this.queryCache.find(e, t))
            ? void 0
            : r.state.data;
        }
        getQueriesData(e) {
          return this.getQueryCache()
            .findAll(e)
            .map(({ queryKey: e, state: t }) => {
              let r = t.data;
              return [e, r];
            });
        }
        setQueryData(e, t, r) {
          let n = this.queryCache.find(e),
            i = null == n ? void 0 : n.state.data,
            o = (0, c.SE)(t, i);
          if (void 0 === o) return;
          let a = (0, c._v)(e),
            s = this.defaultQueryOptions(a);
          return this.queryCache
            .build(this, s)
            .setData(o, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return d.V.batch(() =>
            this.getQueryCache()
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e, t) {
          var r;
          return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state;
        }
        removeQueries(e, t) {
          let [r] = (0, c.I6)(e, t),
            n = this.queryCache;
          d.V.batch(() => {
            n.findAll(r).forEach((e) => {
              n.remove(e);
            });
          });
        }
        resetQueries(e, t, r) {
          let [n, i] = (0, c.I6)(e, t, r),
            o = this.queryCache,
            a = { type: "active", ...n };
          return d.V.batch(
            () => (
              o.findAll(n).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(a, i)
            )
          );
        }
        cancelQueries(e, t, r) {
          let [n, i = {}] = (0, c.I6)(e, t, r);
          void 0 === i.revert && (i.revert = !0);
          let o = d.V.batch(() =>
            this.queryCache.findAll(n).map((e) => e.cancel(i))
          );
          return Promise.all(o).then(c.ZT).catch(c.ZT);
        }
        invalidateQueries(e, t, r) {
          let [n, i] = (0, c.I6)(e, t, r);
          return d.V.batch(() => {
            var e, t;
            if (
              (this.queryCache.findAll(n).forEach((e) => {
                e.invalidate();
              }),
              "none" === n.refetchType)
            )
              return Promise.resolve();
            let r = {
              ...n,
              type:
                null != (e = null != (t = n.refetchType) ? t : n.type)
                  ? e
                  : "active",
            };
            return this.refetchQueries(r, i);
          });
        }
        refetchQueries(e, t, r) {
          let [n, i] = (0, c.I6)(e, t, r),
            o = d.V.batch(() =>
              this.queryCache
                .findAll(n)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  var t;
                  return e.fetch(void 0, {
                    ...i,
                    cancelRefetch:
                      null == (t = null == i ? void 0 : i.cancelRefetch) || t,
                    meta: { refetchPage: n.refetchPage },
                  });
                })
            ),
            a = Promise.all(o).then(c.ZT);
          return (null != i && i.throwOnError) || (a = a.catch(c.ZT)), a;
        }
        fetchQuery(e, t, r) {
          let n = (0, c._v)(e, t, r),
            i = this.defaultQueryOptions(n);
          void 0 === i.retry && (i.retry = !1);
          let o = this.queryCache.build(this, i);
          return o.isStaleByTime(i.staleTime)
            ? o.fetch(i)
            : Promise.resolve(o.state.data);
        }
        prefetchQuery(e, t, r) {
          return this.fetchQuery(e, t, r).then(c.ZT).catch(c.ZT);
        }
        fetchInfiniteQuery(e, t, r) {
          let n = (0, c._v)(e, t, r);
          return (n.behavior = (0, E.Gm)()), this.fetchQuery(n);
        }
        prefetchInfiniteQuery(e, t, r) {
          return this.fetchInfiniteQuery(e, t, r).then(c.ZT).catch(c.ZT);
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations();
        }
        getQueryCache() {
          return this.queryCache;
        }
        getMutationCache() {
          return this.mutationCache;
        }
        getLogger() {
          return this.logger;
        }
        getDefaultOptions() {
          return this.defaultOptions;
        }
        setDefaultOptions(e) {
          this.defaultOptions = e;
        }
        setQueryDefaults(e, t) {
          let r = this.queryDefaults.find(
            (t) => (0, c.yF)(e) === (0, c.yF)(t.queryKey)
          );
          r
            ? (r.defaultOptions = t)
            : this.queryDefaults.push({ queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          if (!e) return;
          let t = this.queryDefaults.find((t) => (0, c.to)(e, t.queryKey));
          return null == t ? void 0 : t.defaultOptions;
        }
        setMutationDefaults(e, t) {
          let r = this.mutationDefaults.find(
            (t) => (0, c.yF)(e) === (0, c.yF)(t.mutationKey)
          );
          r
            ? (r.defaultOptions = t)
            : this.mutationDefaults.push({ mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          if (!e) return;
          let t = this.mutationDefaults.find((t) =>
            (0, c.to)(e, t.mutationKey)
          );
          return null == t ? void 0 : t.defaultOptions;
        }
        defaultQueryOptions(e) {
          if (null != e && e._defaulted) return e;
          let t = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            !t.queryHash &&
              t.queryKey &&
              (t.queryHash = (0, c.Rm)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.useErrorBoundary &&
              (t.useErrorBoundary = !!t.suspense),
            t
          );
        }
        defaultMutationOptions(e) {
          return null != e && e._defaulted
            ? e
            : {
                ...this.defaultOptions.mutations,
                ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear();
        }
      }
      var C = r(85945),
        S = r(67294);
      function k(e) {
        return e.state.isPaused;
      }
      function j(e) {
        return "success" === e.state.status;
      }
      let P = ({ children: e, options: t, state: r }) => (
        !(function (e, t = {}) {
          let r = (0, C.NL)({ context: t.context }),
            n = S.useRef(t);
          (n.current = t),
            S.useMemo(() => {
              e &&
                (function (e, t, r) {
                  if ("object" != typeof t || null === t) return;
                  let n = e.getMutationCache(),
                    i = e.getQueryCache(),
                    o = t.mutations || [],
                    a = t.queries || [];
                  o.forEach((t) => {
                    var i;
                    n.build(
                      e,
                      {
                        ...(null == r
                          ? void 0
                          : null == (i = r.defaultOptions)
                          ? void 0
                          : i.mutations),
                        mutationKey: t.mutationKey,
                      },
                      t.state
                    );
                  }),
                    a.forEach((t) => {
                      var n;
                      let o = i.get(t.queryHash);
                      if (o) {
                        o.state.dataUpdatedAt < t.state.dataUpdatedAt &&
                          o.setState(t.state);
                        return;
                      }
                      i.build(
                        e,
                        {
                          ...(null == r
                            ? void 0
                            : null == (n = r.defaultOptions)
                            ? void 0
                            : n.queries),
                          queryKey: t.queryKey,
                          queryHash: t.queryHash,
                        },
                        t.state
                      );
                    });
                })(r, e, n.current);
            }, [r, e]);
        })(r, t),
        e
      );
      var T = r(36115);
      function A() {
        return (A =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var M = 60103,
        _ = 60106,
        R = 60107,
        F = 60108,
        I = 60114,
        L = 60109,
        N = 60110,
        V = 60111,
        D = 60112,
        q = 60113,
        G = 60115,
        U = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var Q = Symbol.for;
        (M = Q("react.element")),
          (_ = Q("react.portal")),
          (R = Q("react.fragment")),
          (F = Q("react.strict_mode")),
          (I = Q("react.profiler")),
          (L = Q("react.provider")),
          (N = Q("react.context")),
          (V = Symbol.for("react.concurrent_mode")),
          (D = Q("react.forward_ref")),
          (q = Q("react.suspense")),
          (G = Q("react.memo")),
          (U = Q("react.lazy"));
      }
      var z = M,
        Z = _,
        H = R,
        B = F,
        $ = I,
        K = L,
        W = N,
        Y = V,
        X = D,
        J = q,
        ee = G,
        et = U,
        er = S.Children.toArray,
        en = function (e) {
          return null !== e && "object" == typeof e;
        },
        ei = function (e) {
          return er(e).filter(en);
        },
        eo = function (e, t) {
          return "object" == typeof t ? A({}, t, e) : e;
        },
        ea = new Map(),
        es = {},
        eu = void 0,
        el = void 0,
        ec = function () {
          return A({}, es);
        },
        ef = function () {
          return new Map(ea);
        },
        ed = function () {
          var e = eu;
          return (eu = void 0), e;
        },
        eh = function () {
          var e = el;
          return (el = void 0), e;
        },
        ep = function (e) {
          void 0 !== e && A(es, e);
        },
        em = function (e) {
          void 0 !== e && ea.set(e[0], e[1]);
        },
        ev = function (e) {
          (eu = void 0), (es = e);
        },
        ey = function (e) {
          (el = void 0), (ea = e);
        },
        eg = function (e) {
          var t = ea.get(e);
          return void 0 !== t ? t : e._currentValue;
        },
        eb = {},
        ew = function (e) {
          var t = e.contextType,
            r = e.contextTypes;
          if (t) return eg(t);
          if (!r) return eb;
          var n = {};
          for (var i in r) n[i] = es[i];
          return n;
        },
        ex = null,
        eE = function () {
          return ex;
        },
        eO = function (e) {
          ex = e || null;
        },
        eC = { current: { uniqueID: 0 } },
        eS =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        ek = null,
        ej = function (e) {
          ek = e;
        },
        eP = function () {
          if (null === ek)
            throw Error(
              "[react-ssr-prepass] Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)"
            );
          return ek;
        },
        eT = null,
        eA = null,
        eM = !1,
        e_ = null,
        eR = 0,
        eF = function (e) {
          eT = e;
        };
      function eI() {
        return null === eA
          ? null === eT
            ? (eT = eA = { memoizedState: null, queue: null, next: null })
            : (eA = eT)
          : null === eA.next
          ? (eA = eA.next = { memoizedState: null, queue: null, next: null })
          : (eA = eA.next);
      }
      function eL(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function eN(e, t, r) {
        var n,
          i = eP();
        null === (eA = eI()).queue &&
          ((n =
            e === eL
              ? "function" == typeof t
                ? t()
                : t
              : void 0 !== r
              ? r(t)
              : t),
          (eA.memoizedState = n));
        var o = eA.queue || (eA.queue = { last: null, dispatch: null }),
          a = o.dispatch || (o.dispatch = eq.bind(null, i, o));
        if (null !== e_) {
          var s = e_.get(o);
          if (void 0 !== s) {
            e_.delete(o);
            var u = eA.memoizedState,
              l = s;
            do (u = e(u, l.action)), (l = l.next);
            while (null !== l);
            eA.memoizedState = u;
          }
        }
        return [eA.memoizedState, a];
      }
      function eV(e, t) {
        eP();
        var r = void 0 === t ? null : t,
          n = (eA = eI()).memoizedState;
        if (
          null !== n &&
          null !== r &&
          (function (e, t) {
            if (null === t) return !1;
            for (var r = 0; r < t.length && r < e.length; r++)
              if (!eS(e[r], t[r])) return !1;
            return !0;
          })(r, n[1])
        )
          return n[0];
        var i = e();
        return (eA.memoizedState = [i, r]), i;
      }
      function eD() {
        return (
          eP(),
          (eA = eI()).memoizedState ||
            (eA.memoizedState = "R:" + (eC.current.uniqueID++).toString(36)),
          eA.memoizedState
        );
      }
      function eq(e, t, r) {
        if (e === ek) {
          eM = !0;
          var n = { action: r, next: null };
          null === e_ && (e_ = new Map());
          var i = e_.get(t);
          if (void 0 === i) e_.set(t, n);
          else {
            for (var o = i; null !== o.next; ) o = o.next;
            o.next = n;
          }
        }
      }
      function eG() {}
      function eU(e) {
        e();
      }
      var eQ = {
          readContext: function (e, t) {
            return eg(e);
          },
          useSyncExternalStore: function (e, t, r) {
            return t();
          },
          useContext: function (e, t) {
            return eP(), eg(e);
          },
          useMemo: eV,
          useReducer: eN,
          useRef: function (e) {
            eP();
            var t = (eA = eI()).memoizedState;
            if (null !== t) return t;
            var r = { current: e };
            return (eA.memoizedState = r), r;
          },
          useState: function (e) {
            return eN(eL, e);
          },
          useCallback: function (e, t) {
            return eV(function () {
              return e;
            }, t);
          },
          useMutableSource: function (e, t, r) {
            return eP(), t(e._source);
          },
          useTransition: function () {
            return [eU, !1];
          },
          useDeferredValue: function (e) {
            return e;
          },
          useOpaqueIdentifier: eD,
          useId: eD,
          unstable_useId: eD,
          unstable_useOpaqueIdentifier: eD,
          useLayoutEffect: eG,
          useImperativeHandle: eG,
          useEffect: eG,
          useDebugValue: eG,
        },
        ez = function (e) {
          var t = e._payload || e;
          return 0 === t._status
            ? t._result
            : 1 === t._status
            ? Promise.resolve(t._result)
            : 2 === t._status
            ? Promise.reject(t._result)
            : ((t._status = 0),
              (t._result = (t._ctor || t._result)()
                .then(function (e) {
                  (t._result = e),
                    "function" == typeof e
                      ? (t._status = 1)
                      : null !== e &&
                        "object" == typeof e &&
                        "function" == typeof e.default
                      ? ((t._result = e.default), (t._status = 1))
                      : (t._status = 2);
                })
                .catch(function (e) {
                  return (t._status = 2), (t._result = e), Promise.reject(e);
                })));
        },
        eZ = function (e, t, r) {
          var n = e._payload || e;
          return 1 === n._status ? (0, S.createElement)(n._result, t) : null;
        },
        eH = function (e, t, r) {
          return {
            contextMap: ec(),
            contextStore: ef(),
            id: eP(),
            hook: eT,
            kind: "frame.hooks",
            errorFrame: eE(),
            thenable: r,
            props: t,
            type: e,
          };
        },
        eB = function (e, t, r) {
          try {
            return (function (e, t, r) {
              eA = null;
              for (var n = e(t, r); eR < 25 && eM; )
                (eM = !1), (eR += 1), (eA = null), (n = e(t, r));
              return (eR = 0), (e_ = null), (eA = null), n;
            })(e, eo(t, e.defaultProps), ew(e));
          } catch (n) {
            if ("function" != typeof n.then) throw n;
            return r.push(eH(e, t, n)), null;
          }
        };
      function e$() {
        return !1;
      }
      function eK() {
        return null;
      }
      var eW = function (e, t) {
          var r,
            n = {
              _thrown: 0,
              queue: (r = []),
              isMounted: e$,
              enqueueForceUpdate: eK,
              enqueueReplaceState: function (e, t) {
                e._isMounted && ((r.length = 0), r.push(t));
              },
              enqueueSetState: function (e, t) {
                e._isMounted && r.push(t);
              },
            },
            i = eo(t, e.defaultProps),
            o = ew(e),
            a = new e(i, o, n);
          if (
            ((a.props = i),
            (a.context = o),
            (a.updater = n),
            (a._isMounted = !0),
            void 0 === a.state && (a.state = null),
            "function" == typeof a.componentDidCatch ||
              "function" == typeof e.getDerivedStateFromError)
          ) {
            var s = eY(e, a, null);
            (s.errorFrame = s), eO(s);
          }
          if ("function" == typeof e.getDerivedStateFromProps) {
            var u = (0, e.getDerivedStateFromProps)(a.props, a.state);
            null != u && (a.state = A({}, a.state, u));
          } else
            "function" == typeof a.componentWillMount
              ? a.componentWillMount()
              : "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount();
          return a;
        },
        eY = function (e, t, r) {
          return {
            contextMap: ec(),
            contextStore: ef(),
            errorFrame: eE(),
            thenable: r,
            kind: "frame.class",
            error: null,
            instance: t,
            type: e,
          };
        },
        eX = function (e, t, r) {
          !(function (e) {
            var t = e.updater.queue;
            if (t.length > 0) {
              for (var r = A({}, e.state), n = 0, i = t.length; n < i; n++) {
                var o = t[n],
                  a =
                    "function" == typeof o
                      ? o.call(e, r, e.props, e.context)
                      : o;
                null !== a && A(r, a);
              }
              (e.state = r), (t.length = 0);
            }
          })(t);
          var n = null;
          try {
            n = t.render();
          } catch (i) {
            if ("function" != typeof i.then) throw i;
            return r.push(eY(e, t, i)), null;
          }
          if (
            void 0 !== e.childContextTypes &&
            "function" == typeof t.getChildContext
          ) {
            var o = t.getChildContext();
            null !== o &&
              "object" == typeof o &&
              (function (e) {
                for (var t in ((eu = {}), e)) (eu[t] = es[t]), (es[t] = e[t]);
              })(o);
          }
          if (
            "function" != typeof t.getDerivedStateFromProps &&
            ("function" == typeof t.componentWillMount ||
              "function" == typeof t.UNSAFE_componentWillMount) &&
            "function" == typeof t.componentWillUnmount
          )
            try {
              t.componentWillUnmount();
            } catch (a) {}
          return (t._isMounted = !1), n;
        },
        eJ =
          S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentDispatcher,
        e0 = "function" == typeof setImmediate,
        e1 = function (e, t, r, n, i) {
          var o, a, s, u, l, c, f, d, h, p, m, v, y;
          return e.prototype && e.prototype.isReactComponent
            ? (ej(null),
              (c = eW(e, t)),
              (f = n(i, c)) ? (r.push(eY(e, c, f)), null) : eX(e, c, r))
            : (eF(null),
              ej({}),
              (y = n(i)) ? (r.push(eH(e, t, y)), null) : eB(e, t, r));
        },
        e2 = function (e, t, r) {
          switch (
            (function (e) {
              switch (e.$$typeof) {
                case Z:
                  return Z;
                case z:
                  switch (e.type) {
                    case Y:
                      return Y;
                    case H:
                      return H;
                    case $:
                      return $;
                    case B:
                      return B;
                    case J:
                      return J;
                    default:
                      switch (e.type && e.type.$$typeof) {
                        case et:
                          return et;
                        case ee:
                          return ee;
                        case W:
                          return W;
                        case K:
                          return K;
                        case X:
                          return X;
                        default:
                          return z;
                      }
                  }
                default:
                  return;
              }
            })(e)
          ) {
            case J:
            case B:
            case Y:
            case $:
            case H:
              return ei(e.props.children);
            case K:
              var n,
                i,
                o = e.props,
                a = o.children;
              return (
                (n = e.type._context),
                (i = o.value),
                (el = [n, ea.get(n)]),
                ea.set(n, i),
                ei(a)
              );
            case W:
              var s = e.props.children;
              if ("function" != typeof s) return [];
              var u = e.type,
                l = eg("object" == typeof u._context ? u._context : u);
              return ei(s(l));
            case et:
              var c,
                f,
                d,
                h =
                  ((c = e.type),
                  (f = e.props),
                  (c._payload || c)._status <= 0
                    ? (t.push({
                        kind: "frame.lazy",
                        contextMap: ec(),
                        contextStore: ef(),
                        errorFrame: eE(),
                        thenable: ez(c),
                        props: f,
                        type: c,
                      }),
                      null)
                    : eZ(c, f));
              return ei(h);
            case ee:
              return ei((0, S.createElement)(e.type.type, e.props));
            case X:
              var p = e.type,
                m = p.render,
                v = eo(e.props, p.defaultProps),
                y = (0, S.createElement)(m, v);
              return ei(y);
            case z:
              if ("string" == typeof e.type) return ei(e.props.children);
              var g = e1(e.type, e.props, t, r, e);
              return ei(g);
            default:
              return [];
          }
        },
        e5 = function (e, t, r, n, i, o) {
          var a = eJ.current,
            s = Date.now();
          try {
            for (eJ.current = eQ; e.length > 0; ) {
              var u = e[e.length - 1].shift();
              if (void 0 !== u) {
                var l = e2(u, i, o);
                e.push(l), t.push(ed()), r.push(eh()), n.push(eE());
              } else e.pop(), ep(t.pop()), em(r.pop()), eO(n.pop());
              if (e0 && Date.now() - s > 5) return !0;
            }
            return !1;
          } catch (f) {
            var c = eE();
            if (!c) throw f;
            return (c.error = f), i.unshift(c), !1;
          } finally {
            eJ.current = a;
          }
        },
        e3 = function (e, t, r, n) {
          return {
            contextMap: ec(),
            contextStore: ef(),
            errorFrame: eE(),
            thenable: null,
            kind: "frame.yield",
            traversalChildren: e,
            traversalMap: t,
            traversalStore: r,
            traversalErrorFrame: n,
          };
        },
        e4 = function (e, t, r) {
          var n = [e],
            i = [ed()],
            o = [eh()],
            a = [eE()];
          e5(n, i, o, a, t, r) && t.unshift(e3(n, i, o, a));
        },
        e6 = function (e, t, r) {
          if ("frame.yield" === e.kind)
            ej(null),
              ev(e.contextMap),
              ey(e.contextStore),
              eO(e.errorFrame),
              e5(
                e.traversalChildren,
                e.traversalMap,
                e.traversalStore,
                e.traversalErrorFrame,
                t,
                r
              ) &&
                t.unshift(
                  e3(
                    e.traversalChildren,
                    e.traversalMap,
                    e.traversalStore,
                    e.traversalErrorFrame
                  )
                );
          else {
            var n,
              i,
              o,
              a = eJ.current,
              s = null;
            eJ.current = eQ;
            try {
              "frame.class" === e.kind
                ? (s = (function (e, t) {
                    if (
                      (ej(null),
                      ev(t.contextMap),
                      ey(t.contextStore),
                      eO(t.errorFrame),
                      t.error)
                    ) {
                      if (++t.instance.updater._thrown >= 25) return null;
                      (t.instance._isMounted = !0),
                        "function" == typeof t.instance.componentDidCatch &&
                          t.instance.componentDidCatch(t.error),
                        "function" == typeof t.type.getDerivedStateFromError &&
                          t.instance.updater.enqueueSetState(
                            t.instance,
                            t.type.getDerivedStateFromError(t.error)
                          );
                    }
                    return eX(t.type, t.instance, e);
                  })(t, e))
                : "frame.hooks" === e.kind
                ? ((n = t),
                  (i = e),
                  eF(i.hook),
                  ej(i.id),
                  ev(i.contextMap),
                  ey(i.contextStore),
                  eO(i.errorFrame),
                  (s = eB(i.type, i.props, n)))
                : "frame.lazy" === e.kind &&
                  ((o = e),
                  ej(null),
                  ev(o.contextMap),
                  ey(o.contextStore),
                  eO(o.errorFrame),
                  (s = eZ(o.type, o.props)));
            } catch (l) {
              var u = eE();
              if (!u) throw l;
              (u.error = l), t.unshift(u), (s = null);
            } finally {
              eJ.current = a;
            }
            e4(ei(s), t, r);
          }
        };
      function e7(e, t) {
        setImmediate(e);
      }
      var e9 = function (e, t, r) {
          var n = e.shift();
          return n
            ? (e0 && "frame.yield" === n.kind && (n.thenable = new Promise(e7)),
              Promise.resolve(n.thenable).then(
                function () {
                  var i;
                  return (eC.current = r), e6(n, e, t), e9(e, t, r);
                },
                function (r) {
                  if (!n.errorFrame) throw r;
                  (n.errorFrame.error = r), e6(n.errorFrame, e, t);
                }
              ))
            : Promise.resolve();
        },
        e8 = function () {},
        te = function (e, t) {
          t || (t = e8);
          var r = [],
            n = (eC.current = { uniqueID: 0 });
          ev({}), ey(new Map()), eO(null);
          try {
            e4(ei(e), r, t);
          } catch (i) {
            return Promise.reject(i);
          }
          return e9(r, t, n);
        },
        tt = r(13566);
      function tr() {
        return (tr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function tn(e) {
        let t = e.state.error;
        if (t instanceof Error && "TRPCClientError" === t.name) {
          let r = { message: t.message, data: t.data, shape: t.shape };
          return { ...e, state: { ...e.state, error: r } };
        }
        return e;
      }
      var ti,
        to = (function () {
          function e() {
            (this.keyToValue = new Map()), (this.valueToKey = new Map());
          }
          return (
            (e.prototype.set = function (e, t) {
              this.keyToValue.set(e, t), this.valueToKey.set(t, e);
            }),
            (e.prototype.getByKey = function (e) {
              return this.keyToValue.get(e);
            }),
            (e.prototype.getByValue = function (e) {
              return this.valueToKey.get(e);
            }),
            (e.prototype.clear = function () {
              this.keyToValue.clear(), this.valueToKey.clear();
            }),
            e
          );
        })(),
        ta = (function () {
          function e(e) {
            (this.generateIdentifier = e), (this.kv = new to());
          }
          return (
            (e.prototype.register = function (e, t) {
              !this.kv.getByValue(e) &&
                (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
            }),
            (e.prototype.clear = function () {
              this.kv.clear();
            }),
            (e.prototype.getIdentifier = function (e) {
              return this.kv.getByValue(e);
            }),
            (e.prototype.getValue = function (e) {
              return this.kv.getByKey(e);
            }),
            e
          );
        })(),
        ts =
          ((ti = function (e, t) {
            return (ti =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function r() {
              this.constructor = e;
            }
            ti(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        tu = new ((function (e) {
          function t() {
            var t =
              e.call(this, function (e) {
                return e.name;
              }) || this;
            return (t.classToAllowedProps = new Map()), t;
          }
          return (
            ts(t, e),
            (t.prototype.register = function (t, r) {
              "object" == typeof r
                ? (r.allowProps &&
                    this.classToAllowedProps.set(t, r.allowProps),
                  e.prototype.register.call(this, t, r.identifier))
                : e.prototype.register.call(this, t, r);
            }),
            (t.prototype.getAllowedProps = function (e) {
              return this.classToAllowedProps.get(e);
            }),
            t
          );
        })(ta))(),
        tl = new ta(function (e) {
          var t;
          return null !== (t = e.description) && void 0 !== t ? t : "";
        }),
        tc = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        };
      function tf(e, t) {
        Object.entries(e).forEach(function (e) {
          var r = tc(e, 2),
            n = r[0];
          return t(r[1], n);
        });
      }
      function td(e, t) {
        return -1 !== e.indexOf(t);
      }
      function th(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (t(n)) return n;
        }
      }
      var tp = {},
        tm = {
          register: function (e) {
            tp[e.name] = e;
          },
          findApplicable: function (e) {
            return (function (e, t) {
              var r = (function (e) {
                if ("values" in Object) return Object.values(e);
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
                return t;
              })(e);
              if ("find" in r) return r.find(t);
              for (var n = 0; n < r.length; n++) {
                var i = r[n];
                if (t(i)) return i;
              }
            })(tp, function (t) {
              return t.isApplicable(e);
            });
          },
          findByName: function (e) {
            return tp[e];
          },
        },
        tv = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        ty = function (e, t) {
          for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
            e[i] = t[r];
          return e;
        },
        tg = [],
        tb = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          tg.push.apply(tg, ty([], tv(e)));
        },
        tw = function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        },
        tx = function (e) {
          return void 0 === e;
        },
        tE = function (e) {
          return (
            "Object" === tw(e) &&
            (null === Object.getPrototypeOf(e) ||
              (e !== Object.prototype &&
                e.constructor === Object &&
                Object.getPrototypeOf(e) === Object.prototype))
          );
        },
        tO = function (e) {
          return tE(e) && 0 === Object.keys(e).length;
        },
        tC = function (e) {
          return Array.isArray(e);
        },
        tS = function (e) {
          return e instanceof RegExp;
        },
        tk = function (e) {
          return e instanceof Map;
        },
        tj = function (e) {
          return e instanceof Set;
        },
        tP = function (e) {
          return "Symbol" === tw(e);
        },
        tT = function (e) {
          return e instanceof Date && !isNaN(e.valueOf());
        },
        tA = function (e) {
          return e instanceof Error;
        },
        tM = function (e) {
          return "number" == typeof e && isNaN(e);
        },
        t_ = function (e) {
          var t, r, n, i;
          return (
            "boolean" == typeof e ||
            null === e ||
            tx(e) ||
            ("number" == typeof e && !isNaN(e)) ||
            "string" == typeof e ||
            tP(e)
          );
        },
        tR = function (e) {
          return "bigint" == typeof e;
        },
        tF = function (e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        },
        tI = function (e) {
          return e instanceof URL;
        },
        tL = function (e) {
          return e.replace(/\./g, "\\.");
        },
        tN = function (e) {
          return e.map(String).map(tL).join(".");
        },
        tV = function (e) {
          for (var t = [], r = "", n = 0; n < e.length; n++) {
            var i = e.charAt(n);
            if ("\\" === i && "." === e.charAt(n + 1)) {
              (r += "."), n++;
              continue;
            }
            if ("." === i) {
              t.push(r), (r = "");
              continue;
            }
            r += i;
          }
          var o = r;
          return t.push(o), t;
        },
        tD = function () {
          return (tD =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        tq = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        tG = function (e, t) {
          for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
            e[i] = t[r];
          return e;
        };
      function tU(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      var tQ = [
        tU(
          tx,
          "undefined",
          function () {
            return null;
          },
          function () {}
        ),
        tU(
          tR,
          "bigint",
          function (e) {
            return e.toString();
          },
          function (e) {
            return "undefined" != typeof BigInt
              ? BigInt(e)
              : (console.error("Please add a BigInt polyfill."), e);
          }
        ),
        tU(
          tT,
          "Date",
          function (e) {
            return e.toISOString();
          },
          function (e) {
            return new Date(e);
          }
        ),
        tU(
          tA,
          "Error",
          function (e) {
            var t = { name: e.name, message: e.message };
            return (
              tg.forEach(function (r) {
                t[r] = e[r];
              }),
              t
            );
          },
          function (e) {
            var t = Error(e.message);
            return (
              (t.name = e.name),
              (t.stack = e.stack),
              tg.forEach(function (r) {
                t[r] = e[r];
              }),
              t
            );
          }
        ),
        tU(
          tS,
          "regexp",
          function (e) {
            return "" + e;
          },
          function (e) {
            var t;
            return RegExp(
              e.slice(1, e.lastIndexOf("/")),
              e.slice(e.lastIndexOf("/") + 1)
            );
          }
        ),
        tU(
          tj,
          "set",
          function (e) {
            return tG([], tq(e.values()));
          },
          function (e) {
            return new Set(e);
          }
        ),
        tU(
          tk,
          "map",
          function (e) {
            return tG([], tq(e.entries()));
          },
          function (e) {
            return new Map(e);
          }
        ),
        tU(
          function (e) {
            var t;
            return tM(e) || e === 1 / 0 || e === -1 / 0;
          },
          "number",
          function (e) {
            return tM(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
          },
          Number
        ),
        tU(
          function (e) {
            return 0 === e && 1 / e == -1 / 0;
          },
          "number",
          function () {
            return "-0";
          },
          Number
        ),
        tU(
          tI,
          "URL",
          function (e) {
            return e.toString();
          },
          function (e) {
            return new URL(e);
          }
        ),
      ];
      function tz(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      var tZ = tz(
          function (e) {
            return !!tP(e) && !!tl.getIdentifier(e);
          },
          function (e) {
            return ["symbol", tl.getIdentifier(e)];
          },
          function (e) {
            return e.description;
          },
          function (e, t) {
            var r = tl.getValue(t[1]);
            if (!r) throw Error("Trying to deserialize unknown symbol");
            return r;
          }
        ),
        tH = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce(function (e, t) {
          return (e[t.name] = t), e;
        }, {}),
        tB = tz(
          tF,
          function (e) {
            return ["typed-array", e.constructor.name];
          },
          function (e) {
            return tG([], tq(e));
          },
          function (e, t) {
            var r = tH[t[1]];
            if (!r) throw Error("Trying to deserialize unknown typed array");
            return new r(e);
          }
        );
      function t$(e) {
        return (
          null != e && !!e.constructor && !!tu.getIdentifier(e.constructor)
        );
      }
      var tK = tz(
          t$,
          function (e) {
            return ["class", tu.getIdentifier(e.constructor)];
          },
          function (e) {
            var t = tu.getAllowedProps(e.constructor);
            if (!t) return tD({}, e);
            var r = {};
            return (
              t.forEach(function (t) {
                r[t] = e[t];
              }),
              r
            );
          },
          function (e, t) {
            var r = tu.getValue(t[1]);
            if (!r)
              throw Error(
                "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"
              );
            return Object.assign(Object.create(r.prototype), e);
          }
        ),
        tW = tz(
          function (e) {
            return !!tm.findApplicable(e);
          },
          function (e) {
            return ["custom", tm.findApplicable(e).name];
          },
          function (e) {
            return tm.findApplicable(e).serialize(e);
          },
          function (e, t) {
            var r = tm.findByName(t[1]);
            if (!r) throw Error("Trying to deserialize unknown custom value");
            return r.deserialize(e);
          }
        ),
        tY = [tK, tZ, tW, tB],
        tX = function (e) {
          var t = th(tY, function (t) {
            return t.isApplicable(e);
          });
          if (t) return { value: t.transform(e), type: t.annotation(e) };
          var r = th(tQ, function (t) {
            return t.isApplicable(e);
          });
          if (r) return { value: r.transform(e), type: r.annotation };
        },
        tJ = {};
      tQ.forEach(function (e) {
        tJ[e.annotation] = e;
      });
      var t0 = function (e, t) {
          if (tC(t))
            switch (t[0]) {
              case "symbol":
                return tZ.untransform(e, t);
              case "class":
                return tK.untransform(e, t);
              case "custom":
                return tW.untransform(e, t);
              case "typed-array":
                return tB.untransform(e, t);
              default:
                throw Error("Unknown transformation: " + t);
            }
          else {
            var r = tJ[t];
            if (!r) throw Error("Unknown transformation: " + t);
            return r.untransform(e);
          }
        },
        t1 = function (e, t) {
          for (var r = e.keys(); t > 0; ) r.next(), t--;
          return r.next().value;
        };
      function t2(e) {
        if (td(e, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (td(e, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (td(e, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      var t5 = function (e, t, r) {
          if ((t2(t), 0 === t.length)) return r(e);
          for (var n = e, i = 0; i < t.length - 1; i++) {
            var o = t[i];
            if (tC(n)) n = n[+o];
            else if (tE(n)) n = n[o];
            else if (tj(n)) {
              var a = +o;
              n = t1(n, a);
            } else if (tk(n)) {
              if (i === t.length - 2) break;
              var a = +o,
                s = 0 == +t[++i] ? "key" : "value",
                u = t1(n, a);
              switch (s) {
                case "key":
                  n = u;
                  break;
                case "value":
                  n = n.get(u);
              }
            }
          }
          var l = t[t.length - 1];
          if (((tC(n) || tE(n)) && (n[l] = r(n[l])), tj(n))) {
            var c = t1(n, +l),
              f = r(c);
            c !== f && (n.delete(c), n.add(f));
          }
          if (tk(n)) {
            var a = +t[t.length - 2],
              d = t1(n, a),
              s = 0 == +l ? "key" : "value";
            switch (s) {
              case "key":
                var h = r(d);
                n.set(h, n.get(d)), h !== d && n.delete(d);
                break;
              case "value":
                n.set(d, r(n.get(d)));
            }
          }
          return e;
        },
        t3 = function (e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            i,
            o = r.call(e),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
              a.push(n.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return a;
        },
        t4 = function (e, t) {
          for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
            e[i] = t[r];
          return e;
        },
        t6 = function (e, t, r, n) {
          if (
            (void 0 === r && (r = []),
            void 0 === n && (n = []),
            !t_(e) &&
              ((i = e),
              (o = r),
              (s = (a = t).get(i)) ? s.push(o) : a.set(i, [o])),
            (u = e),
            !(tE(u) || tC(u) || tk(u) || tj(u) || t$(u)))
          ) {
            var i,
              o,
              a,
              s,
              u,
              l,
              c = tX(e);
            return c
              ? { transformedValue: c.value, annotations: [c.type] }
              : { transformedValue: e };
          }
          if (td(n, e)) return { transformedValue: null };
          var f = tX(e),
            d =
              null !== (l = null == f ? void 0 : f.value) && void 0 !== l
                ? l
                : e;
          t_(e) || (n = t4(t4([], t3(n)), [e]));
          var h = tC(d) ? [] : {},
            p = {};
          return (tf(d, function (e, i) {
            var o = t6(e, t, t4(t4([], t3(r)), [i]), n);
            (h[i] = o.transformedValue),
              tC(o.annotations)
                ? (p[i] = o.annotations)
                : tE(o.annotations) &&
                  tf(o.annotations, function (e, t) {
                    p[tL(i) + "." + t] = e;
                  });
          }),
          tO(p))
            ? { transformedValue: h, annotations: f ? [f.type] : void 0 }
            : { transformedValue: h, annotations: f ? [f.type, p] : p };
        };
      function t7(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      function t9(e) {
        return "Array" === t7(e);
      }
      (n = function (e) {
        return "Null" === t7(e);
      }),
        (i = function (e) {
          return "Undefined" === t7(e);
        }),
        (e) => n(e) || i(e) || (!!o && o(e)) || (!!a && a(e)) || (!!s && s(e));
      var t8 = function () {
          return (t8 =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        re = function (e) {
          var t,
            r,
            n,
            i = new Map(),
            o = t6(e, i),
            a = { json: o.transformedValue };
          o.annotations &&
            (a.meta = t8(t8({}, a.meta), { values: o.annotations }));
          var s =
            ((r = {}),
            (n = void 0),
            (i.forEach(function (e) {
              if (!(e.length <= 1)) {
                var t = t3(
                    e
                      .map(function (e) {
                        return e.map(String);
                      })
                      .sort(function (e, t) {
                        return e.length - t.length;
                      })
                  ),
                  i = t[0],
                  o = t.slice(1);
                0 === i.length ? (n = o.map(tN)) : (r[tN(i)] = o.map(tN));
              }
            }),
            n)
              ? tO(r)
                ? [n]
                : [n, r]
              : tO(r)
              ? void 0
              : r);
          return (
            s && (a.meta = t8(t8({}, a.meta), { referentialEqualities: s })), a
          );
        },
        rt = function (e) {
          var t,
            r,
            n = e.json,
            i = e.meta,
            o = (function e(t, r = {}) {
              var n;
              if (t9(t)) return t.map((t) => e(t, r));
              if (
                "Object" !== t7(t) ||
                t.constructor !== Object ||
                Object.getPrototypeOf(t) !== Object.prototype
              )
                return t;
              let i = Object.getOwnPropertyNames(t),
                o = Object.getOwnPropertySymbols(t);
              return [...i, ...o].reduce((n, i) => {
                if (t9(r.props) && !r.props.includes(i)) return n;
                let o = t[i],
                  a = e(o, r);
                return (
                  !(function (e, t, r, n, i) {
                    let o = {}.propertyIsEnumerable.call(n, t)
                      ? "enumerable"
                      : "nonenumerable";
                    "enumerable" === o && (e[t] = r),
                      i &&
                        "nonenumerable" === o &&
                        Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        });
                  })(n, i, a, t, r.nonenumerable),
                  n
                );
              }, {});
            })(n);
          return (
            (null == i ? void 0 : i.values) &&
              ((t = o),
              (function e(t, r, n) {
                if ((void 0 === n && (n = []), t)) {
                  if (!tC(t)) {
                    tf(t, function (t, i) {
                      return e(t, r, t4(t4([], t3(n)), t3(tV(i))));
                    });
                    return;
                  }
                  var i = t3(t, 2),
                    o = i[0],
                    a = i[1];
                  a &&
                    tf(a, function (t, i) {
                      e(t, r, t4(t4([], t3(n)), t3(tV(i))));
                    }),
                    r(o, n);
                }
              })((r = i.values), function (e, r) {
                t = t5(t, r, function (t) {
                  return t0(t, e);
                });
              }),
              (o = t)),
            (null == i ? void 0 : i.referentialEqualities) &&
              (o = (function (e, t) {
                function r(t, r) {
                  var n,
                    i,
                    o =
                      ((n = e),
                      (i = tV(r)),
                      t2(i),
                      i.forEach(function (e) {
                        n = n[e];
                      }),
                      n);
                  t.map(tV).forEach(function (t) {
                    e = t5(e, t, function () {
                      return o;
                    });
                  });
                }
                if (tC(t)) {
                  var n = t3(t, 2),
                    i = n[0],
                    o = n[1];
                  i.forEach(function (t) {
                    e = t5(e, tV(t), function () {
                      return e;
                    });
                  }),
                    o && tf(o, r);
                } else tf(t, r);
                return e;
              })(o, i.referentialEqualities)),
            o
          );
        },
        rr = {
          stringify: function (e) {
            return JSON.stringify(re(e));
          },
          parse: function (e) {
            return rt(JSON.parse(e));
          },
          serialize: re,
          deserialize: rt,
          registerClass: function (e, t) {
            return tu.register(e, t);
          },
          registerSymbol: function (e, t) {
            return tl.register(e, t);
          },
          registerCustom: function (e, t) {
            return tm.register(t8({ name: t }, e));
          },
          allowErrorProps: tb,
        };
      r(83454),
        (0, u.K5)({
          transformer: rr,
          links: [(0, l.N)({ url: "".concat("", "/api/trpc") })],
        }),
        (0, u.K5)({
          transformer: rr,
          links: [(0, u.ch)({ url: "".concat("", "/api/trpc") })],
        });
      var rn = (function (e) {
        let t = (0, tt.b)(),
          r = (function (e) {
            let { config: t } = e;
            return (r) => {
              let n = (0, T.x3)(),
                i = (i) => {
                  let [o] = (0, S.useState)(() => {
                      if (i.trpc) return i.trpc;
                      let r = t({}),
                        o = new O(r.queryClientConfig),
                        a = n.createClient(r);
                      return {
                        abortOnUnmount: r.abortOnUnmount,
                        queryClient: o,
                        trpcClient: a,
                        ssrState: !!e.ssr && "mounting",
                        ssrContext: null,
                      };
                    }),
                    {
                      queryClient: a,
                      trpcClient: s,
                      ssrState: u,
                      ssrContext: l,
                    } = o,
                    c = n.useDehydratedState(s, i.pageProps?.trpcState);
                  return S.createElement(
                    n.Provider,
                    {
                      abortOnUnmount: o.abortOnUnmount ?? !1,
                      client: s,
                      queryClient: a,
                      ssrState: u,
                      ssrContext: l,
                    },
                    S.createElement(
                      C.aH,
                      { client: a },
                      S.createElement(
                        P,
                        { state: c },
                        S.createElement(
                          r,
                          (function () {
                            return tr.apply(this, arguments);
                          })({}, i)
                        )
                      )
                    )
                  );
                };
              (r.getInitialProps || e.ssr) &&
                (i.getInitialProps = async (n) => {
                  let i = n.AppTree,
                    o = !!n.Component,
                    a = o ? n.ctx : n,
                    s = {};
                  if (r.getInitialProps) {
                    let u = await r.getInitialProps(n),
                      l = o ? u.pageProps ?? {} : u;
                    s = { ...l, ...s };
                  }
                  let c = (e) => (o ? { pageProps: e } : e);
                  if ("undefined" != typeof window || !e.ssr) return c(s);
                  let f = t({ ctx: a }),
                    d = (0, T.BJ)(f),
                    h = new O(f.queryClientConfig),
                    p = {
                      pageProps: s,
                      trpc: {
                        config: f,
                        trpcClient: d,
                        queryClient: h,
                        ssrState: "prepass",
                        ssrContext: a,
                      },
                    };
                  for (; await te((0, S.createElement)(i, p)), h.isFetching(); )
                    await new Promise((e) => {
                      let t = h.getQueryCache().subscribe((r) => {
                        0 === r?.query.getObserversCount() && (e(), t());
                      });
                    });
                  let m = (function (e, t = {}) {
                      let r = [],
                        n = [];
                      if (!1 !== t.dehydrateMutations) {
                        let i = t.shouldDehydrateMutation || k;
                        e.getMutationCache()
                          .getAll()
                          .forEach((e) => {
                            if (i(e)) {
                              var t;
                              r.push({
                                mutationKey: e.options.mutationKey,
                                state: e.state,
                              });
                            }
                          });
                      }
                      if (!1 !== t.dehydrateQueries) {
                        let o = t.shouldDehydrateQuery || j;
                        e.getQueryCache()
                          .getAll()
                          .forEach((e) => {
                            if (o(e)) {
                              var t;
                              n.push({
                                state: e.state,
                                queryKey: e.queryKey,
                                queryHash: e.queryHash,
                              });
                            }
                          });
                      }
                      return { mutations: r, queries: n };
                    })(h, { shouldDehydrateQuery: () => !0 }),
                    v = {
                      ...m,
                      queries: m.queries.map(tn),
                      mutations: m.mutations.map(tn),
                    };
                  s.trpcState = d.runtime.transformer.serialize(v);
                  let y = c(s),
                    g =
                      e.responseMeta?.({
                        ctx: a,
                        clientErrors: [...m.queries, ...m.mutations]
                          .map((e) => e.state.error)
                          .flatMap((e) =>
                            e instanceof Error && "TRPCClientError" === e.name
                              ? [e]
                              : []
                          ),
                      }) || {};
                  for (let [b, w] of Object.entries(g.headers || {}))
                    "string" == typeof w && a.res?.setHeader(b, w);
                  return g.status && a.res && (a.res.statusCode = g.status), y;
                });
              let o = r.displayName || r.name || "Component";
              return (i.displayName = `withTRPC(${o})`), i;
            };
          })(e),
          n = new Proxy(() => {}, {
            get(e, n) {
              if ("useContext" === n)
                return () => {
                  let e = t.useContext();
                  return (0, S.useMemo)(() => (0, tt.c)(e), [e]);
                };
              if ("withTRPC" === n) return r;
              if ("string" == typeof n) return (0, tt.a)(n, t);
              throw Error("Not supported");
            },
          });
        return n;
      })({
        config: function () {
          return {
            transformer: rr,
            links: [
              (0, u.u_)({
                condition: function (e) {
                  return !0 === e.context.skipBatch;
                },
                true: (0, u.ch)({ url: "".concat("", "/api/trpc") }),
                false: (0, l.N)({ url: "".concat("", "/api/trpc") }),
              }),
            ],
            queryClientConfig: {
              defaultOptions: { queries: { staleTime: 60 } },
            },
          };
        },
        ssr: !1,
      });
    },
    66581: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return o;
        },
      });
      var n = r(85893),
        i = r(67294);
      function o(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = (0, i.createContext)([e, function () {}]);
        return (
          "" !== t && (r.displayName = t),
          {
            Provider: function (t) {
              var o = t.init,
                a = t.children,
                s = (0, i.useState)(void 0 === o ? e : o),
                u = s[0],
                l = s[1],
                c = (0, i.useMemo)(
                  function () {
                    return [u, l];
                  },
                  [u]
                );
              return (0, n.jsx)(r.Provider, { value: c, children: a });
            },
            useStore: function () {
              return (0, i.useContext)(r);
            },
          }
        );
      }
    },
    55041: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return a;
        },
        j: function () {
          return o;
        },
      });
      var n = (0, r(66581).n)(!1, "GloballyMounted"),
        i = n.Provider,
        o = n.useStore,
        a = i;
    },
    80834: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return o;
        },
        O: function () {
          return a;
        },
      });
      var n = (0, r(66581).n)([], "PreloadedImages"),
        i = n.Provider,
        o = n.useStore,
        a = i;
    },
    34909: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return o;
        },
        p: function () {
          return a;
        },
      });
      var n = (0, r(66581).n)(!0, "Tooltip"),
        i = n.Provider,
        o = n.useStore,
        a = i;
    },
    47222: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return u;
        },
      });
      var n = r(85893),
        i = r(86010),
        o = r(67294),
        a = function (e, t) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          return n > 40
            ? null
            : (
                null == e
                  ? void 0
                  : null === (r = e.classList) || void 0 === r
                  ? void 0
                  : r.contains(t)
              )
            ? e
            : e.parentNode
            ? a(e.parentNode, t, n++)
            : null;
        },
        s = function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return r > 40
            ? null
            : (null == e ? void 0 : e.tagName) === t.toUpperCase()
            ? e
            : e.parentNode
            ? s(e.parentNode, t, r++)
            : null;
        },
        u = function (e) {
          var t = e.className,
            r = (0, o.useState)({
              width: 0,
              height: 0,
              left: 0,
              top: 0,
              opacity: 0,
              transition: "0.1s opacity",
              borderRadius: 0,
            }),
            a = r[0];
          r[1];
          var u = (0, o.useRef)(null),
            l = (0, o.useCallback)(function (e) {
              var t = e.width,
                r = e.top,
                n = e.left,
                i = e.opacity,
                o = e.transition,
                a = e.height,
                s = e.borderRadius,
                l = u.current;
              (l.style.width = "".concat(t, "px")),
                (l.style.height = "".concat(a, "px")),
                (l.style.left = "".concat(n, "px")),
                (l.style.top = "".concat(r, "px")),
                (l.style.transition = o),
                (l.style.opacity = i),
                (l.style.borderRadius = s);
            }, []),
            c = (0, o.useCallback)(
              function (e) {
                var t = u.current;
                if (
                  (e.target === e.currentTarget && l(a),
                  e.target !== e.currentTarget)
                ) {
                  var r = s(e.target, "A");
                  r &&
                    l({
                      width: r.offsetWidth,
                      height: r.offsetHeight,
                      left: r.offsetLeft,
                      top: r.offsetTop,
                      opacity: 1,
                      borderRadius: getComputedStyle(r).borderRadius,
                      transition: +t.style.opacity
                        ? "0.18s all, 0.1s opacity"
                        : "0s all, 0.1s 0.0.2s opacity",
                    });
                }
              },
              [a, l]
            ),
            f = (0, o.useCallback)(
              function (e) {
                var t,
                  r = u.current;
                if (
                  !(null == e
                    ? void 0
                    : null === (t = e.currentTarget) || void 0 === t
                    ? void 0
                    : t.matches(":focus-within"))
                ) {
                  l(a);
                  return;
                }
                var n = s(e.target, "A");
                n &&
                  l({
                    width: n.offsetWidth,
                    height: n.offsetHeight,
                    left: n.offsetLeft,
                    top: n.offsetTop,
                    borderRadius: getComputedStyle(n).borderRadius,
                    opacity: 1,
                    transition: +r.style.opacity
                      ? "0.18s all, 0.1s opacity"
                      : "0s all, 0.1s 0.0.2s opacity",
                  });
              },
              [a, l]
            ),
            d = (0, o.useCallback)(
              function () {
                l(a);
              },
              [a, l]
            );
          return (
            (0, o.useEffect)(
              function () {
                var e = u.current.parentElement,
                  t = e.querySelectorAll("a");
                return (
                  e.addEventListener("blur", f),
                  e.addEventListener("mouseover", c),
                  e.addEventListener("mouseleave", d),
                  t.forEach(function (e) {
                    e.addEventListener("focus", f);
                  }),
                  function () {
                    e.removeEventListener("blur", f),
                      e.removeEventListener("mouseover", c),
                      e.removeEventListener("mouseleave", d),
                      t.forEach(function (e) {
                        e.removeEventListener("focus", f);
                      });
                  }
                );
              },
              [f, c, d]
            ),
            (0, n.jsx)("div", {
              ref: u,
              className: (0, i.Z)(
                "button-border /*-translate-y-1/2*/ pointer-events-none absolute -z-10 select-none d:border-gray-300/50",
                void 0 === t ? "" : t
              ),
              style: { opacity: "0" },
            })
          );
        };
    },
    24614: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return f;
        },
      });
      var n = r(41799),
        i = r(69396),
        o = r(99534),
        a = r(85893),
        s = r(41664),
        u = r.n(s),
        l = r(67294),
        c = function (e) {
          if ("undefined" != typeof document) {
            var t, r, n, i;
            return (
              (null !==
                (n =
                  null == window
                    ? void 0
                    : null === (r = window.location) || void 0 === r
                    ? void 0
                    : r.hostname) && void 0 !== n
                ? n
                : "localhost") !==
              (function (e) {
                if (!/^https?:\/\//.test(e))
                  return null !==
                    (r =
                      null == window
                        ? void 0
                        : null === (t = window.location) || void 0 === t
                        ? void 0
                        : t.hostname) && void 0 !== r
                    ? r
                    : "localhost";
                var t,
                  r,
                  n = document.createElement("a");
                return (n.href = e), n.hostname;
              })(e)
            );
          }
          return (
            "localhost" !==
            (/^(https?:)?\/\//.test(e)
              ? e.replace(/^(https?:)?\/\//gi, "").split(/(\/|\\|\?)/gi)[0]
              : "localhost")
          );
        },
        f = function (e) {
          var t = e.children,
            r = e.href,
            s = e.as,
            f = e.replace,
            d = e.scroll,
            h = e.shallow,
            p = e.passHref,
            m = e.prefetch,
            v = e.locale,
            y = e.legacyBehavior,
            g = e.onClick,
            b = (0, o.Z)(e, [
              "children",
              "href",
              "as",
              "replace",
              "scroll",
              "shallow",
              "passHref",
              "prefetch",
              "locale",
              "legacyBehavior",
              "onClick",
            ]),
            w = (0, l.useCallback)(
              function (e) {
                if (window.self !== window.top && r) {
                  var t;
                  e.preventDefault(),
                    e.stopPropagation(),
                    null == window ||
                      null === (t = window.parent) ||
                      void 0 === t ||
                      t.postMessage(
                        { source: "theme-content", topic: "redirect", href: r },
                        "*"
                      );
                }
                g && g(e);
              },
              [r, g]
            );
          return (0, a.jsx)(a.Fragment, {
            children:
              r && !c(r)
                ? (0, a.jsx)(
                    u(),
                    (0, i.Z)(
                      (0, n.Z)(
                        {},
                        {
                          href: r,
                          as: s,
                          replace: f,
                          scroll: d,
                          shallow: h,
                          passHref: p,
                          prefetch: m,
                          locale: v,
                          legacyBehavior: y,
                        }
                      ),
                      {
                        href:
                          "string" == typeof r
                            ? r.replace(/^\/products\//gi, "/")
                            : r,
                        children: (0, a.jsx)(
                          "a",
                          (0, i.Z)((0, n.Z)({ onClick: w }, b), { children: t })
                        ),
                      }
                    )
                  )
                : r
                ? (0, a.jsx)(
                    "a",
                    (0, i.Z)(
                      (0, n.Z)(
                        {
                          href:
                            "string" == typeof r
                              ? r.replace(/^\/products\//gi, "/")
                              : r,
                          rel:
                            (null == b ? void 0 : b.target) === "_blank"
                              ? "noopener noreferrer"
                              : void 0,
                          onClick: g,
                        },
                        b
                      ),
                      { children: t }
                    )
                  )
                : (0, a.jsx)(
                    "span",
                    (0, i.Z)((0, n.Z)({ onClick: g }, b), { children: t })
                  ),
          });
        };
    },
    75964: function (e, t, r) {
      "use strict";
      r.d(t, {
        FN: function () {
          return $;
        },
        pm: function () {
          return B;
        },
      });
      var n = r(41799),
        i = r(69396),
        o = r(51351),
        a = r(29815),
        s = r(85893),
        u = r(67294),
        l = r(12351);
      let c = (0, u.createContext)(null);
      c.displayName = "OpenClosedContext";
      var f =
        (((O = f || {})[(O.Open = 0)] = "Open"),
        (O[(O.Closed = 1)] = "Closed"),
        O);
      function d() {
        return (0, u.useContext)(c);
      }
      function h({ value: e, children: t }) {
        return u.createElement(c.Provider, { value: e }, t);
      }
      var p = r(32984),
        m = r(41173);
      function v() {
        let e = (0, u.useRef)(!1);
        return (
          (0, m.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var y = r(3855),
        g = r(82180),
        b = r(23784);
      function w() {
        let e = [],
          t = [],
          r = {
            enqueue(e) {
              t.push(e);
            },
            addEventListener: (e, t, n, i) => (
              e.addEventListener(t, n, i),
              r.add(() => e.removeEventListener(t, n, i))
            ),
            requestAnimationFrame(...e) {
              let t = requestAnimationFrame(...e);
              return r.add(() => cancelAnimationFrame(t));
            },
            nextFrame: (...e) =>
              r.requestAnimationFrame(() => r.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let t = setTimeout(...e);
              return r.add(() => clearTimeout(t));
            },
            microTask(...e) {
              var t;
              let n = { current: !0 };
              return (
                (t = () => {
                  n.current && e[0]();
                }),
                "function" == typeof queueMicrotask
                  ? queueMicrotask(t)
                  : Promise.resolve()
                      .then(t)
                      .catch((e) =>
                        setTimeout(() => {
                          throw e;
                        })
                      ),
                r.add(() => {
                  n.current = !1;
                })
              );
            },
            add: (t) => (
              e.push(t),
              () => {
                let r = e.indexOf(t);
                if (r >= 0) {
                  let [n] = e.splice(r, 1);
                  n();
                }
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
            async workQueue() {
              for (let e of t.splice(0)) await e();
            },
          };
        return r;
      }
      function x(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function E(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var O,
        C,
        S = (((C = S || {}).Ended = "ended"), (C.Cancelled = "cancelled"), C);
      function k() {
        let [e] = (0, u.useState)(w);
        return (0, u.useEffect)(() => () => e.dispose(), [e]), e;
      }
      var j = r(73781);
      function P(e = "") {
        return e.split(" ").filter((e) => e.trim().length > 1);
      }
      let T = (0, u.createContext)(null);
      T.displayName = "TransitionContext";
      var A = (((Z = A || {}).Visible = "visible"), (Z.Hidden = "hidden"), Z);
      let M = (0, u.createContext)(null);
      function _(e) {
        return "children" in e
          ? _(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function R(e, t) {
        let r = (0, y.E)(e),
          n = (0, u.useRef)([]),
          i = v(),
          o = k(),
          a = (0, j.z)((e, t = l.l4.Hidden) => {
            let a = n.current.findIndex(({ el: t }) => t === e);
            -1 !== a &&
              ((0, p.E)(t, {
                [l.l4.Unmount]() {
                  n.current.splice(a, 1);
                },
                [l.l4.Hidden]() {
                  n.current[a].state = "hidden";
                },
              }),
              o.microTask(() => {
                var e;
                !_(n) && i.current && (null == (e = r.current) || e.call(r));
              }));
          }),
          s = (0, j.z)((e) => {
            let t = n.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : n.current.push({ el: e, state: "visible" }),
              () => a(e, l.l4.Unmount)
            );
          }),
          c = (0, u.useRef)([]),
          f = (0, u.useRef)(Promise.resolve()),
          d = (0, u.useRef)({ enter: [], leave: [], idle: [] }),
          h = (0, j.z)((e, r, n) => {
            c.current.splice(0),
              t &&
                (t.chains.current[r] = t.chains.current[r].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[r].push([
                  e,
                  new Promise((e) => {
                    c.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[r].push([
                  e,
                  new Promise((e) => {
                    Promise.all(d.current[r].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === r
                ? (f.current = f.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => n(r)))
                : n(r);
          }),
          m = (0, j.z)((e, t, r) => {
            Promise.all(d.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = c.current.shift()) || e();
              })
              .then(() => r(t));
          });
        return (0, u.useMemo)(
          () => ({
            children: n,
            register: s,
            unregister: a,
            onStart: h,
            onStop: m,
            wait: f,
            chains: d,
          }),
          [s, a, n, h, m, d, f]
        );
      }
      function F() {}
      M.displayName = "NestingContext";
      let I = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function L(e) {
        var t;
        let r = {};
        for (let n of I) r[n] = null != (t = e[n]) ? t : F;
        return r;
      }
      let N = l.AN.RenderStrategy,
        V = (0, l.yV)(function (e, t) {
          var r;
          let {
              beforeEnter: n,
              afterEnter: i,
              beforeLeave: o,
              afterLeave: a,
              enter: s,
              enterFrom: c,
              enterTo: d,
              entered: O,
              leave: C,
              leaveFrom: A,
              leaveTo: F,
              ...I
            } = e,
            V = (0, u.useRef)(null),
            D = (0, b.T)(V, t),
            q = I.unmount ? l.l4.Unmount : l.l4.Hidden,
            {
              show: G,
              appear: U,
              initial: Q,
            } = (function () {
              let e = (0, u.useContext)(T);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [z, Z] = (0, u.useState)(G ? "visible" : "hidden"),
            H = (function () {
              let e = (0, u.useContext)(M);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: B, unregister: $ } = H,
            K = (0, u.useRef)(null);
          (0, u.useEffect)(() => B(V), [B, V]),
            (0, u.useEffect)(() => {
              if (q === l.l4.Hidden && V.current) {
                if (G && "visible" !== z) {
                  Z("visible");
                  return;
                }
                return (0, p.E)(z, { hidden: () => $(V), visible: () => B(V) });
              }
            }, [z, V, B, $, G, q]);
          let W,
            Y = (0, y.E)({
              enter: P(s),
              enterFrom: P(c),
              enterTo: P(d),
              entered: P(O),
              leave: P(C),
              leaveFrom: P(A),
              leaveTo: P(F),
            }),
            X =
              ((r = {
                beforeEnter: n,
                afterEnter: i,
                beforeLeave: o,
                afterLeave: a,
              }),
              (W = (0, u.useRef)(L(r))),
              (0, u.useEffect)(() => {
                W.current = L(r);
              }, [r]),
              W),
            J = (0, g.H)();
          (0, u.useEffect)(() => {
            if (J && "visible" === z && null === V.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [V, z, J]);
          let ee = Q && !U,
            et = !J || ee || K.current === G ? "idle" : G ? "enter" : "leave",
            er = (0, j.z)((e) =>
              (0, p.E)(e, {
                enter: () => X.current.beforeEnter(),
                leave: () => X.current.beforeLeave(),
                idle() {},
              })
            ),
            en = (0, j.z)((e) =>
              (0, p.E)(e, {
                enter: () => X.current.afterEnter(),
                leave: () => X.current.afterLeave(),
                idle() {},
              })
            ),
            ei = R(() => {
              Z("hidden"), $(V);
            }, H);
          return (
            (function ({
              container: e,
              direction: t,
              classes: r,
              onStart: n,
              onStop: i,
            }) {
              let o = v(),
                a = k(),
                s = (0, y.E)(t);
              (0, m.e)(() => {
                let t = w();
                a.add(t.dispose);
                let u = e.current;
                if (u && "idle" !== s.current && o.current) {
                  var l, c, f, d, h;
                  let m, v, y, g, b, O, C;
                  return (
                    t.dispose(),
                    n.current(s.current),
                    t.add(
                      ((l = u),
                      (c = r.current),
                      (f = "enter" === s.current),
                      (d = (e) => {
                        t.dispose(),
                          (0, p.E)(e, {
                            [S.Ended]() {
                              i.current(s.current);
                            },
                            [S.Cancelled]() {},
                          });
                      }),
                      (v = f ? "enter" : "leave"),
                      (y = w()),
                      (g =
                        void 0 !== d
                          ? ((m = { called: !1 }),
                            (...e) => {
                              if (!m.called) return (m.called = !0), d(...e);
                            })
                          : () => {}),
                      "enter" === v &&
                        (l.removeAttribute("hidden"), (l.style.display = "")),
                      (b = (0, p.E)(v, {
                        enter: () => c.enter,
                        leave: () => c.leave,
                      })),
                      (O = (0, p.E)(v, {
                        enter: () => c.enterTo,
                        leave: () => c.leaveTo,
                      })),
                      (C = (0, p.E)(v, {
                        enter: () => c.enterFrom,
                        leave: () => c.leaveFrom,
                      })),
                      E(
                        l,
                        ...c.enter,
                        ...c.enterTo,
                        ...c.enterFrom,
                        ...c.leave,
                        ...c.leaveFrom,
                        ...c.leaveTo,
                        ...c.entered
                      ),
                      x(l, ...b, ...C),
                      y.nextFrame(() => {
                        E(l, ...C),
                          x(l, ...O),
                          (function (e, t) {
                            let r = w();
                            if (!e) return r.dispose;
                            let { transitionDuration: n, transitionDelay: i } =
                                getComputedStyle(e),
                              [o, a] = [n, i].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              });
                            if (o + a !== 0) {
                              let s = [];
                              s.push(
                                r.addEventListener(e, "transitionrun", (n) => {
                                  n.target === n.currentTarget &&
                                    (s.splice(0).forEach((e) => e()),
                                    s.push(
                                      r.addEventListener(
                                        e,
                                        "transitionend",
                                        (e) => {
                                          e.target === e.currentTarget &&
                                            (t("ended"),
                                            s.splice(0).forEach((e) => e()));
                                        }
                                      ),
                                      r.addEventListener(
                                        e,
                                        "transitioncancel",
                                        (e) => {
                                          e.target === e.currentTarget &&
                                            (t("cancelled"),
                                            s.splice(0).forEach((e) => e()));
                                        }
                                      )
                                    ));
                                })
                              );
                            } else t("ended");
                            r.add(() => t("cancelled")), r.dispose;
                          })(
                            l,
                            (e) => (
                              "ended" === e && (E(l, ...b), x(l, ...c.entered)),
                              g(e)
                            )
                          );
                      }),
                      y.dispose)
                    ),
                    t.dispose
                  );
                }
              }, [t]);
            })({
              container: V,
              classes: Y,
              direction: et,
              onStart: (0, y.E)((e) => {
                ei.onStart(V, e, er);
              }),
              onStop: (0, y.E)((e) => {
                ei.onStop(V, e, en),
                  "leave" !== e || _(ei) || (Z("hidden"), $(V));
              }),
            }),
            (0, u.useEffect)(() => {
              ee && (q === l.l4.Hidden ? (K.current = null) : (K.current = G));
            }, [G, ee, z]),
            u.createElement(
              M.Provider,
              { value: ei },
              u.createElement(
                h,
                { value: (0, p.E)(z, { visible: f.Open, hidden: f.Closed }) },
                (0, l.sY)({
                  ourProps: { ref: D },
                  theirProps: I,
                  defaultTag: "div",
                  features: N,
                  visible: "visible" === z,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        D = (0, l.yV)(function (e, t) {
          let { show: r, appear: n = !1, unmount: i, ...o } = e,
            a = (0, u.useRef)(null),
            s = (0, b.T)(a, t);
          (0, g.H)();
          let c = d();
          if (
            (void 0 === r &&
              null !== c &&
              (r = (0, p.E)(c, { [f.Open]: !0, [f.Closed]: !1 })),
            ![!0, !1].includes(r))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [h, v] = (0, u.useState)(r ? "visible" : "hidden"),
            y = R(() => {
              v("hidden");
            }),
            [w, x] = (0, u.useState)(!0),
            E = (0, u.useRef)([r]);
          (0, m.e)(() => {
            !1 !== w &&
              E.current[E.current.length - 1] !== r &&
              (E.current.push(r), x(!1));
          }, [E, r]);
          let O = (0, u.useMemo)(
            () => ({ show: r, appear: n, initial: w }),
            [r, n, w]
          );
          (0, u.useEffect)(() => {
            if (r) v("visible");
            else if (_(y)) {
              let e = a.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                v("hidden");
            } else v("hidden");
          }, [r, y]);
          let C = { unmount: i };
          return u.createElement(
            M.Provider,
            { value: y },
            u.createElement(
              T.Provider,
              { value: O },
              (0, l.sY)({
                ourProps: {
                  ...C,
                  as: u.Fragment,
                  children: u.createElement(V, { ref: s, ...C, ...o }),
                },
                theirProps: {},
                defaultTag: u.Fragment,
                features: N,
                visible: "visible" === h,
                name: "Transition",
              })
            )
          );
        }),
        q = (0, l.yV)(function (e, t) {
          let r = null !== (0, u.useContext)(T),
            n = null !== d();
          return u.createElement(
            u.Fragment,
            null,
            !r && n
              ? u.createElement(D, { ref: t, ...e })
              : u.createElement(V, { ref: t, ...e })
          );
        }),
        G = Object.assign(D, { Child: q, Root: D }),
        U = u.forwardRef(function ({ title: e, titleId: t, ...r }, n) {
          return u.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": t,
              },
              r
            ),
            e ? u.createElement("title", { id: t }, e) : null,
            u.createElement("path", {
              fillRule: "evenodd",
              d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
              clipRule: "evenodd",
            })
          );
        }),
        Q = u.forwardRef(function ({ title: e, titleId: t, ...r }, n) {
          return u.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": t,
              },
              r
            ),
            e ? u.createElement("title", { id: t }, e) : null,
            u.createElement("path", {
              fillRule: "evenodd",
              d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
              clipRule: "evenodd",
            })
          );
        }),
        z = u.forwardRef(function ({ title: e, titleId: t, ...r }, n) {
          return u.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: n,
                "aria-labelledby": t,
              },
              r
            ),
            e ? u.createElement("title", { id: t }, e) : null,
            u.createElement("path", {
              fillRule: "evenodd",
              d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
              clipRule: "evenodd",
            })
          );
        });
      var Z,
        H = r(12902),
        B = (0, r(36902).ZP)(function (e) {
          return {
            toasts: [],
            addToast: function (t) {
              e(
                (0, H.ZP)(function (e) {
                  var r = e.toasts.filter(function (e) {
                    return e.id !== t.id;
                  });
                  (r.length = Math.min(r.length, 4)),
                    (e.toasts = (0, a.Z)(r).concat([t]));
                })
              ),
                setTimeout(function () {
                  e(function (e) {
                    return e.toasts.some(function (e) {
                      var r = e.id,
                        n = e.timestamp;
                      return r === t.id && n === t.timestamp;
                    })
                      ? (0, i.Z)((0, n.Z)({}, e), {
                          toasts: e.toasts.filter(function (e) {
                            var r = e.id,
                              n = e.timestamp;
                            return r !== t.id || n !== t.timestamp;
                          }),
                        })
                      : e;
                  });
                }, 2500);
            },
            removeToast: function (t) {
              e(
                (0, H.ZP)(function (e) {
                  e.toasts = e.toasts.filter(function (e) {
                    return t !== e.id;
                  });
                })
              );
            },
          };
        }),
        $ = function (e) {
          var e =
              null !== e
                ? e
                : (0, o.Z)(TypeError("Cannot destructure undefined")),
            t = B(),
            r = t.toasts,
            n = t.removeToast;
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              "aria-live": "assertive",
              className:
                "pointer-events-none fixed inset-0 z-20 flex items-end px-4 py-6 sm:p-6",
              children: (0, s.jsx)("div", {
                className: "flex w-full flex-col items-center space-y-4",
                children: (0, a.Z)([, , , , ,]).map(function (e, t) {
                  var i = r[t];
                  return (0, s.jsx)(
                    G,
                    {
                      show: !!r[t],
                      as: u.Fragment,
                      enter: "transform ease-out duration-400 transition",
                      enterFrom: "translate-y-2 opacity-0 ",
                      enterTo: "translate-y-0 opacity-100",
                      leave: "transition ease-in duration-100",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, s.jsxs)("figure", {
                        className:
                          "button-border pointer-events-auto flex w-full max-w-sm overflow-hidden rounded-lg border-gray-400/30 bg-white p-4 shadow-xl shadow-gray-500/10",
                        children: [
                          (null == i ? void 0 : i.error)
                            ? (0, s.jsx)(U, {
                                className: "h-6 w-6 text-red-400",
                                "aria-hidden": "true",
                              })
                            : (0, s.jsx)(Q, {
                                className: "h-6 w-6 text-green-400",
                                "aria-hidden": "true",
                              }),
                          (0, s.jsx)("p", {
                            className:
                              "ml-3 w-0 flex-1 pt-0.5 text-sm font-medium text-gray-900",
                            children: null == i ? void 0 : i.message,
                          }),
                          (0, s.jsxs)("button", {
                            className:
                              " ml-4 flex inline-flex flex-shrink-0 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                            onClick: function () {
                              return n(null == i ? void 0 : i.id);
                            },
                            children: [
                              (0, s.jsx)("span", {
                                className: "sr-only",
                                children: "Close",
                              }),
                              (0, s.jsx)(z, {
                                className: "h-5 w-5",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t
                  );
                }),
              }),
            }),
          });
        };
    },
    71210: function (e, t) {
      "use strict";
      function r(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = r),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    48418: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(94941).Z;
      r(45753).default,
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(92648).Z,
        o = r(17273).Z,
        a = i(r(67294)),
        s = r(76273),
        u = r(22725),
        l = r(63462),
        c = r(21018),
        f = r(57190),
        d = r(71210),
        h = r(98684),
        p = {};
      function m(e, t, r, n) {
        if (e && s.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, r, n)).catch(function (e) {});
          var i = n && void 0 !== n.locale ? n.locale : e && e.locale;
          p[t + "%" + r + (i ? "%" + i : "")] = !0;
        }
      }
      var v = a.default.forwardRef(function (e, t) {
        var r,
          i,
          v = e.href,
          y = e.as,
          g = e.children,
          b = e.prefetch,
          w = e.passHref,
          x = e.replace,
          E = e.shallow,
          O = e.scroll,
          C = e.locale,
          S = e.onClick,
          k = e.onMouseEnter,
          j = e.onTouchStart,
          P = e.legacyBehavior,
          T = void 0 === P ? !0 !== Boolean(!1) : P,
          A = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = g),
          T &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = a.default.createElement("a", null, r));
        var M = !1 !== b,
          _ = a.default.useContext(l.RouterContext),
          R = a.default.useContext(c.AppRouterContext);
        R && (_ = R);
        var F = a.default.useMemo(
            function () {
              var e = n(s.resolveHref(_, v, !0), 2),
                t = e[0],
                r = e[1];
              return { href: t, as: y ? s.resolveHref(_, y) : r || t };
            },
            [_, v, y]
          ),
          I = F.href,
          L = F.as,
          N = a.default.useRef(I),
          V = a.default.useRef(L);
        T && (i = a.default.Children.only(r));
        var D = T ? i && "object" == typeof i && i.ref : t,
          q = n(f.useIntersection({ rootMargin: "200px" }), 3),
          G = q[0],
          U = q[1],
          Q = q[2],
          z = a.default.useCallback(
            function (e) {
              (V.current !== L || N.current !== I) &&
                (Q(), (V.current = L), (N.current = I)),
                G(e),
                D &&
                  ("function" == typeof D
                    ? D(e)
                    : "object" == typeof D && (D.current = e));
            },
            [L, D, I, Q, G]
          );
        a.default.useEffect(
          function () {
            var e = U && M && s.isLocalURL(I),
              t = void 0 !== C ? C : _ && _.locale,
              r = p[I + "%" + L + (t ? "%" + t : "")];
            e && !r && m(_, I, L, { locale: t });
          },
          [L, I, U, C, M, _]
        );
        var Z = {
          ref: z,
          onClick: function (e) {
            T || "function" != typeof S || S(e),
              T &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, i, o, u, l, c, f) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    ((!(h = (d = e).currentTarget.target) || "_self" === h) &&
                      !d.metaKey &&
                      !d.ctrlKey &&
                      !d.shiftKey &&
                      !d.altKey &&
                      (!d.nativeEvent || 2 !== d.nativeEvent.which) &&
                      s.isLocalURL(r))
                  ) {
                    e.preventDefault();
                    var d,
                      h,
                      p = function () {
                        "beforePopState" in t
                          ? t[i ? "replace" : "push"](r, n, {
                              shallow: o,
                              locale: l,
                              scroll: u,
                            })
                          : t[i ? "replace" : "push"](r, {
                              forceOptimisticNavigation: !f,
                            });
                      };
                    c ? a.default.startTransition(p) : p();
                  }
                })(e, _, I, L, x, E, O, C, Boolean(R), M);
          },
          onMouseEnter: function (e) {
            T || "function" != typeof k || k(e),
              T &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              !(!M && R) && s.isLocalURL(I) && m(_, I, L, { priority: !0 });
          },
          onTouchStart: function (e) {
            T || "function" != typeof j || j(e),
              T &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              !(!M && R) && s.isLocalURL(I) && m(_, I, L, { priority: !0 });
          },
        };
        if (!T || w || ("a" === i.type && !("href" in i.props))) {
          var H = void 0 !== C ? C : _ && _.locale,
            B =
              _ &&
              _.isLocaleDomain &&
              d.getDomainLocale(L, H, _.locales, _.domainLocales);
          Z.href = B || h.addBasePath(u.addLocale(L, H, _ && _.defaultLocale));
        }
        return T
          ? a.default.cloneElement(i, Z)
          : a.default.createElement("a", Object.assign({}, A, Z), r);
      });
      (t.default = v),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    57190: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(94941).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t,
            r = e.rootRef,
            l = e.rootMargin,
            c = e.disabled || !a,
            f = n(i.useState(!1), 2),
            d = f[0],
            h = f[1],
            p = n(i.useState(null), 2),
            m = p[0],
            v = p[1];
          return (
            i.useEffect(
              function () {
                if (a) {
                  if (!c && !d && m && m.tagName) {
                    var e, t, n, i, f, p, v;
                    return (
                      (t = function (e) {
                        return e && h(e);
                      }),
                      (f = (i = (function (e) {
                        var t,
                          r = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          n = u.find(function (e) {
                            return e.root === r.root && e.margin === r.margin;
                          });
                        if (n && (t = s.get(n))) return t;
                        var i = new Map();
                        return (
                          (t = {
                            id: r,
                            observer: new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = i.get(e.target),
                                  r =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && r && t(r);
                              });
                            }, e),
                            elements: i,
                          }),
                          u.push(r),
                          s.set(r, t),
                          t
                        );
                      })(
                        (n = {
                          root: null == r ? void 0 : r.current,
                          rootMargin: l,
                        })
                      )).id),
                      (p = i.observer),
                      (v = i.elements).set(m, t),
                      p.observe(m),
                      function () {
                        if ((v.delete(m), p.unobserve(m), 0 === v.size)) {
                          p.disconnect(), s.delete(f);
                          var e = u.findIndex(function (e) {
                            return e.root === f.root && e.margin === f.margin;
                          });
                          e > -1 && u.splice(e, 1);
                        }
                      }
                    );
                  }
                } else if (!d) {
                  var y = o.requestIdleCallback(function () {
                    return h(!0);
                  });
                  return function () {
                    return o.cancelIdleCallback(y);
                  };
                }
              },
              [m, c, l, r, d]
            ),
            [
              v,
              d,
              i.useCallback(function () {
                h(!1);
              }, []),
            ]
          );
        });
      var i = r(67294),
        o = r(9311),
        a = "function" == typeof IntersectionObserver,
        s = new Map(),
        u = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    21018: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var n = (0, r(92648).Z)(r(67294)),
        i = n.default.createContext(null);
      t.AppRouterContext = i;
      var o = n.default.createContext(null);
      t.LayoutRouterContext = o;
      var a = n.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
      var s = n.default.createContext(null);
      t.TemplateContext = s;
    },
    90638: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(96856).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var r = a.default,
            o = (null == t ? void 0 : t.suspense)
              ? {}
              : {
                  loading: function (e) {
                    return e.error, e.isLoading, e.pastDelay, null;
                  },
                };
          if (
            (n(e, Promise)
              ? (o.loader = function () {
                  return e;
                })
              : "function" == typeof e
              ? (o.loader = e)
              : "object" == typeof e && (o = i({}, o, e)),
            (o = i({}, o, t)).suspense && (delete o.ssr, delete o.loading),
            o.loadableGenerated &&
              delete (o = i({}, o, o.loadableGenerated)).loadableGenerated,
            "boolean" == typeof o.ssr && !o.suspense)
          ) {
            if (!o.ssr) return delete o.ssr, s(r, o);
            delete o.ssr;
          }
          return r(o);
        }),
        (t.noSSR = s);
      var i = r(6495).Z,
        o = r(92648).Z,
        a = (o(r(67294)), o(r(14302)));
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    16319: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var n = (0, r(92648).Z)(r(67294)).default.createContext(null);
      t.LoadableContext = n;
    },
    14302: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(79658).Z,
        i = r(7222).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = r(6495).Z,
        a = (0, r(92648).Z)(r(67294)),
        s = r(16319),
        u = r(67294).useSyncExternalStore,
        l = [],
        c = [],
        f = !1;
      function d(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var h = (function () {
        function e(t, r) {
          n(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          i(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ("number" == typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  "number" == typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = o(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function p(e) {
        return (function (e, t) {
          var r = function () {
              if (!p) {
                var t = new h(e, d);
                p = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return p.promise();
            },
            n = function () {
              r();
              var e = a.default.useContext(s.LoadableContext);
              e &&
                Array.isArray(d.modules) &&
                d.modules.forEach(function (t) {
                  e(t);
                });
            },
            i = function (e, t) {
              n();
              var r = u(p.subscribe, p.getCurrentValue, p.getCurrentValue);
              return (
                a.default.useImperativeHandle(
                  t,
                  function () {
                    return { retry: p.retry };
                  },
                  []
                ),
                a.default.useMemo(
                  function () {
                    var t;
                    return r.loading || r.error
                      ? a.default.createElement(d.loading, {
                          isLoading: r.loading,
                          pastDelay: r.pastDelay,
                          timedOut: r.timedOut,
                          error: r.error,
                          retry: p.retry,
                        })
                      : r.loaded
                      ? a.default.createElement(
                          (t = r.loaded) && t.__esModule ? t.default : t,
                          e
                        )
                      : null;
                  },
                  [e, r]
                )
              );
            },
            l = function (e, t) {
              return n(), a.default.createElement(d.lazy, o({}, e, { ref: t }));
            },
            d = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            );
          d.suspense && (d.lazy = a.default.lazy(d.loader));
          var p = null;
          if (!f) {
            var m = d.webpack ? d.webpack() : d.modules;
            m &&
              c.push(function (e) {
                var t = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var o, a = m[Symbol.iterator]();
                    !(t = (o = a.next()).done);
                    t = !0
                  ) {
                    var s = o.value;
                    if (-1 !== e.indexOf(s)) return r();
                  }
                } catch (u) {
                  (n = !0), (i = u);
                } finally {
                  try {
                    t || null == a.return || a.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              });
          }
          var v = d.suspense ? l : i;
          return (
            (v.preload = function () {
              return r();
            }),
            (v.displayName = "LoadableComponent"),
            a.default.forwardRef(v)
          );
        })(d, e);
      }
      function m(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return m(e, t);
        });
      }
      (p.preloadAll = function () {
        return new Promise(function (e, t) {
          m(l).then(e, t);
        });
      }),
        (p.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (f = !0), t();
            };
            m(c, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = p.preloadReady),
        (t.default = p);
    },
    83458: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return iG;
          },
        });
      var n,
        i,
        o,
        a,
        s = r(41799),
        u = r(69396),
        l = r(85893),
        c = r(58237),
        f = r(55041),
        d = (0, r(66581).n)([], "Notifications Store"),
        h = d.Provider,
        p = d.useStore,
        m = r(80834),
        v = r(34909),
        y = r(82010),
        g = r(67294);
      let b = (0, g.createContext)({ strict: !1 }),
        w = (e) => ({ isEnabled: (t) => e.some((e) => !!t[e]) }),
        x = {
          measureLayout: w(["layout", "layoutId", "drag"]),
          animation: w([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: w(["exit"]),
          drag: w(["drag", "dragControls"]),
          focus: w(["whileFocus"]),
          hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: w(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function E(e) {
        for (let t in e)
          "projectionNodeConstructor" === t
            ? (x.projectionNodeConstructor = e[t])
            : (x[t].Component = e[t]);
      }
      function O({ children: e, features: t, strict: r = !1 }) {
        let [, n] = (0, g.useState)(!C(t)),
          i = (0, g.useRef)(void 0);
        if (!C(t)) {
          let { renderer: o, ...a } = t;
          (i.current = o), E(a);
        }
        return (
          (0, g.useEffect)(() => {
            C(t) &&
              t().then(({ renderer: e, ...t }) => {
                E(t), (i.current = e), n(!0);
              });
          }, []),
          g.createElement(
            b.Provider,
            { value: { renderer: i.current, strict: r } },
            e
          )
        );
      }
      function C(e) {
        return "function" == typeof e;
      }
      function S(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      let k = (0, g.createContext)(null),
        j = (e) => Array.isArray(e);
      function P(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var T = r(70655),
        A = function () {},
        M = function () {};
      let _ = (e, t, r) => Math.min(Math.max(r, e), t);
      function R(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let F = ["duration", "bounce"],
        I = ["stiffness", "damping", "mass"];
      function L(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function N(e) {
        var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: i } = e,
          o = (0, T.__rest)(e, ["from", "to", "restSpeed", "restDelta"]);
        let a = { done: !1, value: t },
          {
            stiffness: s,
            damping: u,
            mass: l,
            velocity: c,
            duration: f,
            isResolvedFromDuration: d,
          } = (function (e) {
            let t = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!L(e, I) && L(e, F)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let i, o;
                A(e <= 1e4, "Spring duration must be 10 seconds or less");
                let a = 1 - t;
                (a = _(0.05, 1, a)),
                  (e = _(0.01, 10, e / 1e3)),
                  a < 1
                    ? ((i = (t) => {
                        let n = t * a,
                          i = n * e,
                          o = R(t, a);
                        return 0.001 - ((n - r) / o) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let n = t * a,
                          o = n * e,
                          s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          u = R(Math.pow(t, 2), a),
                          l = -i(t) + 0.001 > 0 ? -1 : 1;
                        return (l * ((o * r + r - s) * Math.exp(-o))) / u;
                      }))
                    : ((i = (t) => {
                        let n = Math.exp(-t * e),
                          i = (t - r) * e + 1;
                        return -0.001 + n * i;
                      }),
                      (o = (t) => {
                        let n = Math.exp(-t * e),
                          i = (r - t) * (e * e);
                        return n * i;
                      }));
                let s = 5 / e,
                  u = (function (e, t, r) {
                    let n = r;
                    for (let i = 1; i < 12; i++) n -= e(n) / t(n);
                    return n;
                  })(i, o, s);
                if (((e *= 1e3), isNaN(u)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let l = Math.pow(u, 2) * n;
                  return {
                    stiffness: l,
                    damping: 2 * a * Math.sqrt(n * l),
                    duration: e,
                  };
                }
              })(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), r), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(o),
          h = V,
          p = V;
        function m() {
          let e = c ? -(c / 1e3) : 0,
            n = r - t,
            o = u / (2 * Math.sqrt(s * l)),
            a = Math.sqrt(s / l) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(r - t) / 100, 0.4)), o < 1)
          ) {
            let f = R(a, o);
            (h = (t) =>
              r -
              Math.exp(-o * a * t) *
                (((e + o * a * n) / f) * Math.sin(f * t) +
                  n * Math.cos(f * t))),
              (p = (t) => {
                let r = Math.exp(-o * a * t);
                return (
                  o *
                    a *
                    r *
                    ((Math.sin(f * t) * (e + o * a * n)) / f +
                      n * Math.cos(f * t)) -
                  r *
                    (Math.cos(f * t) * (e + o * a * n) -
                      f * n * Math.sin(f * t))
                );
              });
          } else if (1 === o)
            h = (t) => r - Math.exp(-a * t) * (n + (e + a * n) * t);
          else {
            let d = a * Math.sqrt(o * o - 1);
            h = (t) => {
              let i = Math.min(d * t, 300);
              return (
                r -
                (Math.exp(-o * a * t) *
                  ((e + o * a * n) * Math.sinh(i) + d * n * Math.cosh(i))) /
                  d
              );
            };
          }
        }
        return (
          m(),
          {
            next(e) {
              let t = h(e);
              if (d) a.done = e >= f;
              else {
                let o = 1e3 * p(e),
                  s = Math.abs(r - t) <= i;
                a.done = Math.abs(o) <= n && s;
              }
              return (a.value = a.done ? r : t), a;
            },
            flipTarget() {
              (c = -c), ([t, r] = [r, t]), m();
            },
          }
        );
      }
      N.needsInterpolation = (e, t) =>
        "string" == typeof e || "string" == typeof t;
      let V = (e) => 0,
        D = (e, t, r) => {
          let n = t - e;
          return 0 === n ? 1 : (r - e) / n;
        },
        q = (e, t, r) => -r * e + r * t + e,
        G = (e, t) => (r) => Math.max(Math.min(r, t), e),
        U = (e) => (e % 1 ? Number(e.toFixed(5)) : e),
        Q = /(-)?([\d]*\.?[\d])+/g,
        z =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Z =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function H(e) {
        return "string" == typeof e;
      }
      let B = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        $ = Object.assign(Object.assign({}, B), { transform: G(0, 1) }),
        K = Object.assign(Object.assign({}, B), { default: 1 }),
        W = (e, t) => (r) =>
          Boolean(
            (H(r) && Z.test(r) && r.startsWith(e)) ||
              (t && Object.prototype.hasOwnProperty.call(r, t))
          ),
        Y = (e, t, r) => (n) => {
          if (!H(n)) return n;
          let [i, o, a, s] = n.match(Q);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [r]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        X = G(0, 255),
        J = Object.assign(Object.assign({}, B), {
          transform: (e) => Math.round(X(e)),
        }),
        ee = {
          test: W("rgb", "red"),
          parse: Y("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            J.transform(e) +
            ", " +
            J.transform(t) +
            ", " +
            J.transform(r) +
            ", " +
            U($.transform(n)) +
            ")",
        },
        et = {
          test: W("#"),
          parse: function (e) {
            let t = "",
              r = "",
              n = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substr(1, 2)),
                  (r = e.substr(3, 2)),
                  (n = e.substr(5, 2)),
                  (i = e.substr(7, 2)))
                : ((t = e.substr(1, 1)),
                  (r = e.substr(2, 1)),
                  (n = e.substr(3, 1)),
                  (i = e.substr(4, 1)),
                  (t += t),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: ee.transform,
        },
        er = (e) => ({
          test: (t) => H(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        en = er("deg"),
        ei = er("%"),
        eo = er("px"),
        ea = er("vh"),
        es = er("vw"),
        eu = Object.assign(Object.assign({}, ei), {
          parse: (e) => ei.parse(e) / 100,
          transform: (e) => ei.transform(100 * e),
        }),
        el = {
          test: W("hsl", "hue"),
          parse: Y("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            ei.transform(U(t)) +
            ", " +
            ei.transform(U(r)) +
            ", " +
            U($.transform(n)) +
            ")",
        };
      function ec(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      function ef({ hue: e, saturation: t, lightness: r, alpha: n }) {
        (e /= 360), (r /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((t /= 100)) {
          let s = r < 0.5 ? r * (1 + t) : r + t - r * t,
            u = 2 * r - s;
          (i = ec(u, s, e + 1 / 3)),
            (o = ec(u, s, e)),
            (a = ec(u, s, e - 1 / 3));
        } else i = o = a = r;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: n,
        };
      }
      let ed = (e, t, r) => {
          let n = e * e;
          return Math.sqrt(Math.max(0, r * (t * t - n) + n));
        },
        eh = [et, ee, el],
        ep = (e) => eh.find((t) => t.test(e)),
        em = (e) =>
          `'${e}' is not an animatable color. Use the equivalent color code instead.`,
        ev = (e, t) => {
          let r = ep(e),
            n = ep(t);
          M(!!r, em(e)), M(!!n, em(t));
          let i = r.parse(e),
            o = n.parse(t);
          r === el && ((i = ef(i)), (r = ee)),
            n === el && ((o = ef(o)), (n = ee));
          let a = Object.assign({}, i);
          return (e) => {
            for (let t in a) "alpha" !== t && (a[t] = ed(i[t], o[t], e));
            return (a.alpha = q(i.alpha, o.alpha, e)), r.transform(a);
          };
        },
        ey = {
          test: (e) => ee.test(e) || et.test(e) || el.test(e),
          parse: (e) =>
            ee.test(e) ? ee.parse(e) : el.test(e) ? el.parse(e) : et.parse(e),
          transform: (e) =>
            H(e)
              ? e
              : e.hasOwnProperty("red")
              ? ee.transform(e)
              : el.transform(e),
        },
        eg = "${c}",
        eb = "${n}";
      function ew(e) {
        "number" == typeof e && (e = `${e}`);
        let t = [],
          r = 0,
          n = e.match(z);
        n &&
          ((r = n.length), (e = e.replace(z, eg)), t.push(...n.map(ey.parse)));
        let i = e.match(Q);
        return (
          i && ((e = e.replace(Q, eb)), t.push(...i.map(B.parse))),
          { values: t, numColors: r, tokenised: e }
        );
      }
      function ex(e) {
        return ew(e).values;
      }
      function eE(e) {
        let { values: t, numColors: r, tokenised: n } = ew(e),
          i = t.length;
        return (e) => {
          let t = n;
          for (let o = 0; o < i; o++)
            t = t.replace(
              o < r ? eg : eb,
              o < r ? ey.transform(e[o]) : U(e[o])
            );
          return t;
        };
      }
      let eO = (e) => ("number" == typeof e ? 0 : e),
        eC = {
          test: function (e) {
            var t, r, n, i;
            return (
              isNaN(e) &&
              H(e) &&
              (null !==
                (r =
                  null === (t = e.match(Q)) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== r
                ? r
                : 0) +
                (null !==
                  (i =
                    null === (n = e.match(z)) || void 0 === n
                      ? void 0
                      : n.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: ex,
          createTransformer: eE,
          getAnimatableNone: function (e) {
            let t = ex(e),
              r = eE(e);
            return r(t.map(eO));
          },
        },
        eS = (e) => "number" == typeof e,
        ek = (e, t) => (r) => t(e(r)),
        ej = (...e) => e.reduce(ek);
      function eP(e, t) {
        return eS(e) ? (r) => q(e, t, r) : ey.test(e) ? ev(e, t) : e_(e, t);
      }
      let eT = (e, t) => {
          let r = [...e],
            n = r.length,
            i = e.map((e, r) => eP(e, t[r]));
          return (e) => {
            for (let t = 0; t < n; t++) r[t] = i[t](e);
            return r;
          };
        },
        eA = (e, t) => {
          let r = Object.assign(Object.assign({}, e), t),
            n = {};
          for (let i in r)
            void 0 !== e[i] && void 0 !== t[i] && (n[i] = eP(e[i], t[i]));
          return (e) => {
            for (let t in n) r[t] = n[t](e);
            return r;
          };
        };
      function eM(e) {
        let t = eC.parse(e),
          r = t.length,
          n = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < r; a++)
          n || "number" == typeof t[a] ? n++ : void 0 !== t[a].hue ? o++ : i++;
        return { parsed: t, numNumbers: n, numRGB: i, numHSL: o };
      }
      let e_ = (e, t) => {
          let r = eC.createTransformer(t),
            n = eM(e),
            i = eM(t),
            o =
              n.numHSL === i.numHSL &&
              n.numRGB === i.numRGB &&
              n.numNumbers >= i.numNumbers;
          return o
            ? ej(eT(n.parsed, i.parsed), r)
            : (A(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (r) => `${r > 0 ? t : e}`);
        },
        eR = (e, t) => (r) => q(e, t, r);
      function eF(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
        let o = e.length;
        M(
          o === t.length,
          "Both input and output ranges must be the same length"
        ),
          M(
            !n || !Array.isArray(n) || n.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          e[0] > e[o - 1] &&
            ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        let a = (function (e, t, r) {
            var n;
            let i = [],
              o =
                r ||
                ((n = e[0]),
                "number" == typeof n
                  ? eR
                  : "string" == typeof n
                  ? ey.test(n)
                    ? ev
                    : e_
                  : Array.isArray(n)
                  ? eT
                  : "object" == typeof n
                  ? eA
                  : void 0),
              a = e.length - 1;
            for (let s = 0; s < a; s++) {
              let u = o(e[s], e[s + 1]);
              if (t) {
                let l = Array.isArray(t) ? t[s] : t;
                u = ej(l, u);
              }
              i.push(u);
            }
            return i;
          })(t, n, i),
          s =
            2 === o
              ? (function ([e, t], [r]) {
                  return (n) => r(D(e, t, n));
                })(e, a)
              : (function (e, t) {
                  let r = e.length,
                    n = r - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= e[0]
                        ? (a = !0)
                        : i >= e[n] && ((o = n - 1), (a = !0)),
                      !a)
                    ) {
                      let s = 1;
                      for (; s < r && !(e[s] > i) && s !== n; s++);
                      o = s - 1;
                    }
                    let u = D(e[o], e[o + 1], i);
                    return t[o](u);
                  };
                })(e, a);
        return r ? (t) => s(_(e[0], e[o - 1], t)) : s;
      }
      let eI = (e) => (t) => 1 - e(1 - t),
        eL = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        eN = (e) => (t) => t * t * ((e + 1) * t - e),
        eV = 4 / 11,
        eD = 8 / 11,
        eq = (e) => e,
        eG = (e) => Math.pow(e, 2),
        eU = eI(eG),
        eQ = eL(eG),
        ez = (e) => 1 - Math.sin(Math.acos(e)),
        eZ = eI(ez),
        eH = eL(eZ),
        eB = eN(1.525),
        e$ = eI(eB),
        eK = eL(eB),
        eW = ((e) => {
          let t = eN(1.525);
          return (e) =>
            (e *= 2) < 1 ? 0.5 * t(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
        })(1.525),
        eY = 4356 / 361,
        eX = 35442 / 1805,
        eJ = 16061 / 1805,
        e0 = (e) => {
          if (1 === e || 0 === e) return e;
          let t = e * e;
          return e < eV
            ? 7.5625 * t
            : e < eD
            ? 9.075 * t - 9.9 * e + 3.4
            : e < 0.9
            ? eY * t - eX * e + eJ
            : 10.8 * e * e - 20.52 * e + 10.72;
        },
        e1 = eI(e0),
        e2 = (e) =>
          e < 0.5 ? 0.5 * (1 - e0(1 - 2 * e)) : 0.5 * e0(2 * e - 1) + 0.5;
      function e5({
        from: e = 0,
        to: t = 1,
        ease: r,
        offset: n,
        duration: i = 300,
      }) {
        var o, a;
        let s = { done: !1, value: e },
          u = Array.isArray(t) ? t : [e, t],
          l = (o =
            n && n.length === u.length
              ? n
              : (function (e) {
                  let t = e.length;
                  return e.map((e, r) => (0 !== r ? r / (t - 1) : 0));
                })(u)).map((e) => e * i);
        function c() {
          var e, t;
          return eF(l, u, {
            ease: Array.isArray(r)
              ? r
              : u.map(() => r || eQ).splice(0, u.length - 1),
          });
        }
        let f = c();
        return {
          next: (e) => ((s.value = f(e)), (s.done = e >= i), s),
          flipTarget() {
            u.reverse(), (f = c());
          },
        };
      }
      let e3 = {
          keyframes: e5,
          spring: N,
          decay: function ({
            velocity: e = 0,
            from: t = 0,
            power: r = 0.8,
            timeConstant: n = 350,
            restDelta: i = 0.5,
            modifyTarget: o,
          }) {
            let a = { done: !1, value: t },
              s = r * e,
              u = t + s,
              l = void 0 === o ? u : o(u);
            return (
              l !== u && (s = l - t),
              {
                next(e) {
                  let t = -s * Math.exp(-e / n);
                  return (
                    (a.done = !(t > i || t < -i)),
                    (a.value = a.done ? l : l + t),
                    a
                  );
                },
                flipTarget() {},
              }
            );
          },
        },
        e4 = (1 / 60) * 1e3,
        e6 =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        e7 =
          "undefined" != typeof window
            ? (e) => window.requestAnimationFrame(e)
            : (e) => setTimeout(() => e(e6()), e4),
        e9 = !0,
        e8 = !1,
        te = !1,
        tt = { delta: 0, timestamp: 0 },
        tr = ["read", "update", "preRender", "render", "postRender"],
        tn = tr.reduce(
          (e, t) => (
            (e[t] = (function (e) {
              let t = [],
                r = [],
                n = 0,
                i = !1,
                o = !1,
                a = new WeakSet(),
                s = {
                  schedule(e, o = !1, s = !1) {
                    let u = s && i,
                      l = u ? t : r;
                    return (
                      o && a.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), u && i && (n = t.length)),
                      e
                    );
                  },
                  cancel(e) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1), a.delete(e);
                  },
                  process(u) {
                    if (i) {
                      o = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([t, r] = [r, t]),
                      (r.length = 0),
                      (n = t.length))
                    )
                      for (let l = 0; l < n; l++) {
                        let c = t[l];
                        c(u), a.has(c) && (s.schedule(c), e());
                      }
                    (i = !1), o && ((o = !1), s.process(u));
                  },
                };
              return s;
            })(() => (e8 = !0))),
            e
          ),
          {}
        ),
        ti = tr.reduce((e, t) => {
          let r = tn[t];
          return (
            (e[t] = (e, t = !1, n = !1) => (e8 || tu(), r.schedule(e, t, n))), e
          );
        }, {}),
        to = tr.reduce((e, t) => ((e[t] = tn[t].cancel), e), {});
      tr.reduce((e, t) => ((e[t] = () => tn[t].process(tt)), e), {});
      let ta = (e) => tn[e].process(tt),
        ts = (e) => {
          (e8 = !1),
            (tt.delta = e9 ? e4 : Math.max(Math.min(e - tt.timestamp, 40), 1)),
            (tt.timestamp = e),
            (te = !0),
            tr.forEach(ta),
            (te = !1),
            e8 && ((e9 = !1), e7(ts));
        },
        tu = () => {
          (e8 = !0), (e9 = !0), te || e7(ts);
        },
        tl = () => tt;
      function tc(e, t, r = 0) {
        return e - t - r;
      }
      let tf = (e) => {
        let t = ({ delta: t }) => e(t);
        return { start: () => ti.update(t, !0), stop: () => to.update(t) };
      };
      function td(e) {
        var t,
          {
            from: r,
            autoplay: n = !0,
            driver: i = tf,
            elapsed: o = 0,
            repeat: a = 0,
            repeatType: s = "loop",
            repeatDelay: u = 0,
            onPlay: l,
            onStop: c,
            onComplete: f,
            onRepeat: d,
            onUpdate: h,
          } = e,
          p = (0, T.__rest)(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let { to: m } = p,
          v,
          y = 0,
          g = p.duration,
          b,
          w = !1,
          x = !0,
          E,
          O = (function (e) {
            if (Array.isArray(e.to)) return e5;
            if (e3[e.type]) return e3[e.type];
            let t = new Set(Object.keys(e));
            if (t.has("ease") || (t.has("duration") && !t.has("dampingRatio")));
            else if (
              t.has("dampingRatio") ||
              t.has("stiffness") ||
              t.has("mass") ||
              t.has("damping") ||
              t.has("restSpeed") ||
              t.has("restDelta")
            )
              return N;
            return e5;
          })(p);
        (null === (t = O.needsInterpolation) || void 0 === t
          ? void 0
          : t.call(O, r, m)) &&
          ((E = eF([0, 100], [r, m], { clamp: !1 })), (r = 0), (m = 100));
        let C = O(Object.assign(Object.assign({}, p), { from: r, to: m }));
        return (
          n &&
            (null == l || l(),
            (v = i(function e(t) {
              if ((x || (t = -t), (o += t), !w)) {
                let r = C.next(Math.max(0, o));
                (b = r.value), E && (b = E(b)), (w = x ? r.done : o <= 0);
              }
              if ((null == h || h(b), w)) {
                if ((0 === y && (null != g || (g = o)), y < a)) {
                  var n, i, l, c;
                  (n = o),
                    (i = g),
                    ((c = x) ? n >= i + u : n <= -u) &&
                      (y++,
                      "reverse" === s
                        ? (o = (function (e, t, r = 0, n = !0) {
                            return n ? tc(t + -e, t, r) : t - (e - t) + r;
                          })(o, g, u, (x = y % 2 == 0)))
                        : ((o = tc(o, g, u)), "mirror" === s && C.flipTarget()),
                      (w = !1),
                      d && d());
                } else v.stop(), f && f();
              }
            })).start()),
          {
            stop() {
              null == c || c(), v.stop();
            },
          }
        );
      }
      function th(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      let tp = (e) => 1e3 * e,
        tm = (e, t) => 1 - 3 * t + 3 * e,
        tv = (e, t) => 3 * t - 6 * e,
        ty = (e) => 3 * e,
        tg = (e, t, r) => ((tm(t, r) * e + tv(t, r)) * e + ty(t)) * e,
        tb = (e, t, r) => 3 * tm(t, r) * e * e + 2 * tv(t, r) * e + ty(t),
        tw = {
          linear: eq,
          easeIn: eG,
          easeInOut: eQ,
          easeOut: eU,
          circIn: ez,
          circInOut: eH,
          circOut: eZ,
          backIn: eB,
          backInOut: eK,
          backOut: e$,
          anticipate: eW,
          bounceIn: e1,
          bounceInOut: e2,
          bounceOut: e0,
        },
        tx = (e) => {
          if (Array.isArray(e)) {
            M(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, i] = e;
            return (function (e, t, r, n) {
              if (e === t && r === n) return eq;
              let i = new Float32Array(11);
              for (let o = 0; o < 11; ++o) i[o] = tg(0.1 * o, e, r);
              return (o) =>
                0 === o || 1 === o
                  ? o
                  : tg(
                      (function (t) {
                        let n = 0,
                          o = 1;
                        for (; 10 !== o && i[o] <= t; ++o) n += 0.1;
                        --o;
                        let a = (t - i[o]) / (i[o + 1] - i[o]),
                          s = n + 0.1 * a,
                          u = tb(s, e, r);
                        return u >= 0.001
                          ? (function (e, t, r, n) {
                              for (let i = 0; i < 8; ++i) {
                                let o = tb(t, r, n);
                                if (0 === o) break;
                                let a = tg(t, r, n) - e;
                                t -= a / o;
                              }
                              return t;
                            })(t, s, e, r)
                          : 0 === u
                          ? s
                          : (function (e, t, r, n, i) {
                              let o,
                                a,
                                s = 0;
                              do
                                (o = tg((a = t + (r - t) / 2), n, i) - e) > 0
                                  ? (r = a)
                                  : (t = a);
                              while (Math.abs(o) > 1e-7 && ++s < 10);
                              return a;
                            })(t, n, n + 0.1, e, r);
                      })(o),
                      t,
                      n
                    );
            })(t, r, n, i);
          }
          return "string" == typeof e
            ? (M(void 0 !== tw[e], `Invalid easing type '${e}'`), tw[e])
            : e;
        },
        tE = (e) => Array.isArray(e) && "number" != typeof e[0],
        tO = (e, t) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t && eC.test(t) && !t.startsWith("url("))
          ),
        tC = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        tS = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tk = () => ({ type: "keyframes", ease: "linear", duration: 0.3 }),
        tj = (e) => ({ type: "keyframes", duration: 0.8, values: e }),
        tP = {
          x: tC,
          y: tC,
          z: tC,
          rotate: tC,
          rotateX: tC,
          rotateY: tC,
          rotateZ: tC,
          scaleX: tS,
          scaleY: tS,
          scale: tS,
          opacity: tk,
          backgroundColor: tk,
          color: tk,
          default: tS,
        },
        tT = (e, t) => {
          let r;
          return { to: t, ...(j(t) ? tj : tP[e] || tP.default)(t) };
        },
        tA = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tM(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(Q) || [];
        if (!n) return e;
        let i = r.replace(n, ""),
          o = tA.has(t) ? 1 : 0;
        return n !== r && (o *= 100), t + "(" + o + i + ")";
      }
      let t_ = /([a-z-]*)\(.*?\)/g,
        tR = Object.assign(Object.assign({}, eC), {
          getAnimatableNone(e) {
            let t = e.match(t_);
            return t ? t.map(tM).join(" ") : e;
          },
        }),
        tF = { ...B, transform: Math.round },
        tI = {
          borderWidth: eo,
          borderTopWidth: eo,
          borderRightWidth: eo,
          borderBottomWidth: eo,
          borderLeftWidth: eo,
          borderRadius: eo,
          radius: eo,
          borderTopLeftRadius: eo,
          borderTopRightRadius: eo,
          borderBottomRightRadius: eo,
          borderBottomLeftRadius: eo,
          width: eo,
          maxWidth: eo,
          height: eo,
          maxHeight: eo,
          size: eo,
          top: eo,
          right: eo,
          bottom: eo,
          left: eo,
          padding: eo,
          paddingTop: eo,
          paddingRight: eo,
          paddingBottom: eo,
          paddingLeft: eo,
          margin: eo,
          marginTop: eo,
          marginRight: eo,
          marginBottom: eo,
          marginLeft: eo,
          rotate: en,
          rotateX: en,
          rotateY: en,
          rotateZ: en,
          scale: K,
          scaleX: K,
          scaleY: K,
          scaleZ: K,
          skew: en,
          skewX: en,
          skewY: en,
          distance: eo,
          translateX: eo,
          translateY: eo,
          translateZ: eo,
          x: eo,
          y: eo,
          z: eo,
          perspective: eo,
          transformPerspective: eo,
          opacity: $,
          originX: eu,
          originY: eu,
          originZ: eo,
          zIndex: tF,
          fillOpacity: $,
          strokeOpacity: $,
          numOctaves: tF,
        },
        tL = {
          ...tI,
          color: ey,
          backgroundColor: ey,
          outlineColor: ey,
          fill: ey,
          stroke: ey,
          borderColor: ey,
          borderTopColor: ey,
          borderRightColor: ey,
          borderBottomColor: ey,
          borderLeftColor: ey,
          filter: tR,
          WebkitFilter: tR,
        },
        tN = (e) => tL[e];
      function tV(e, t) {
        var r;
        let n = tN(e);
        return (
          n !== tR && (n = eC),
          null === (r = n.getAnimatableNone) || void 0 === r
            ? void 0
            : r.call(n, t)
        );
      }
      let tD = { current: !1 },
        tq = (e) => Boolean(e && "object" == typeof e && e.mix && e.toValue),
        tG = (e) => (j(e) ? e[e.length - 1] || 0 : e),
        tU = !1;
      function tQ(e) {
        return (
          0 === e ||
          ("string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" "))
        );
      }
      function tz(e) {
        return "number" == typeof e ? 0 : tV("", e);
      }
      function tZ(e, t) {
        return e[t] || e.default || e;
      }
      function tH(e, t, r, n = {}) {
        return (
          tD.current && (n = { type: !1 }),
          t.start((i) => {
            let o,
              a,
              s = (function (e, t, r, n, i) {
                let o = tZ(n, e) || {},
                  a = void 0 !== o.from ? o.from : t.get(),
                  s = tO(e, r);
                "none" === a && s && "string" == typeof r
                  ? (a = tV(e, r))
                  : tQ(a) && "string" == typeof r
                  ? (a = tz(r))
                  : !Array.isArray(r) &&
                    tQ(r) &&
                    "string" == typeof a &&
                    (r = tz(a));
                let u = tO(e, a);
                return (
                  A(
                    u === s,
                    `You are trying to animate ${e} from "${a}" to "${r}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${r} via the \`style\` property.`
                  ),
                  u && s && !1 !== o.type
                    ? function () {
                        var n, s, u, l;
                        let c = {
                          from: a,
                          to: r,
                          velocity: t.getVelocity(),
                          onComplete: i,
                          onUpdate: (e) => t.set(e),
                        };
                        return "inertia" === o.type || "decay" === o.type
                          ? (function ({
                              from: e = 0,
                              velocity: t = 0,
                              min: r,
                              max: n,
                              power: i = 0.8,
                              timeConstant: o = 750,
                              bounceStiffness: a = 500,
                              bounceDamping: s = 10,
                              restDelta: u = 1,
                              modifyTarget: l,
                              driver: c,
                              onUpdate: f,
                              onComplete: d,
                              onStop: h,
                            }) {
                              let p;
                              function m(e) {
                                return (
                                  (void 0 !== r && e < r) ||
                                  (void 0 !== n && e > n)
                                );
                              }
                              function v(e) {
                                return void 0 === r
                                  ? n
                                  : void 0 === n
                                  ? r
                                  : Math.abs(r - e) < Math.abs(n - e)
                                  ? r
                                  : n;
                              }
                              function y(e) {
                                null == p || p.stop(),
                                  (p = td(
                                    Object.assign(Object.assign({}, e), {
                                      driver: c,
                                      onUpdate(t) {
                                        var r;
                                        null == f || f(t),
                                          null === (r = e.onUpdate) ||
                                            void 0 === r ||
                                            r.call(e, t);
                                      },
                                      onComplete: d,
                                      onStop: h,
                                    })
                                  ));
                              }
                              function g(e) {
                                y(
                                  Object.assign(
                                    {
                                      type: "spring",
                                      stiffness: a,
                                      damping: s,
                                      restDelta: u,
                                    },
                                    e
                                  )
                                );
                              }
                              if (m(e)) g({ from: e, velocity: t, to: v(e) });
                              else {
                                let b = i * t + e;
                                void 0 !== l && (b = l(b));
                                let w = v(b),
                                  x = w === r ? -1 : 1,
                                  E,
                                  O,
                                  C = (e) => {
                                    (E = O),
                                      (O = e),
                                      (t = th(e - E, tl().delta)),
                                      ((1 === x && e > w) ||
                                        (-1 === x && e < w)) &&
                                        g({ from: e, to: w, velocity: t });
                                  };
                                y({
                                  type: "decay",
                                  from: e,
                                  velocity: t,
                                  timeConstant: o,
                                  power: i,
                                  restDelta: u,
                                  modifyTarget: l,
                                  onUpdate: m(b) ? C : void 0,
                                });
                              }
                              return {
                                stop: () => (null == p ? void 0 : p.stop()),
                              };
                            })({ ...c, ...o })
                          : td({
                              ...((n = o),
                              Array.isArray(c.to) &&
                                void 0 === n.duration &&
                                (n.duration = 0.8),
                              Array.isArray((l = c).to) &&
                                null === l.to[0] &&
                                ((l.to = [...l.to]), (l.to[0] = l.from)),
                              !(function ({
                                when: e,
                                delay: t,
                                delayChildren: r,
                                staggerChildren: n,
                                staggerDirection: i,
                                repeat: o,
                                repeatType: a,
                                repeatDelay: s,
                                from: u,
                                ...l
                              }) {
                                return !!Object.keys(l).length;
                              })(n) && (n = { ...n, ...tT(e, c.to) }),
                              {
                                ...c,
                                ...(function ({
                                  ease: e,
                                  times: t,
                                  yoyo: r,
                                  flip: n,
                                  loop: i,
                                  ...o
                                }) {
                                  let a = { ...o };
                                  return (
                                    t && (a.offset = t),
                                    o.duration && (a.duration = tp(o.duration)),
                                    o.repeatDelay &&
                                      (a.repeatDelay = tp(o.repeatDelay)),
                                    e && (a.ease = tE(e) ? e.map(tx) : tx(e)),
                                    "tween" === o.type &&
                                      (a.type = "keyframes"),
                                    (r || i || n) &&
                                      (A(
                                        !tU,
                                        "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
                                      ),
                                      (tU = !0),
                                      r
                                        ? (a.repeatType = "reverse")
                                        : i
                                        ? (a.repeatType = "loop")
                                        : n && (a.repeatType = "mirror"),
                                      (a.repeat = i || r || n || o.repeat)),
                                    "spring" !== o.type &&
                                      (a.type = "keyframes"),
                                    a
                                  );
                                })(n),
                              }),
                              onUpdate(e) {
                                c.onUpdate(e), o.onUpdate && o.onUpdate(e);
                              },
                              onComplete() {
                                c.onComplete(), o.onComplete && o.onComplete();
                              },
                            });
                      }
                    : function () {
                        let e = tG(r);
                        return (
                          t.set(e),
                          i(),
                          o.onUpdate && o.onUpdate(e),
                          o.onComplete && o.onComplete(),
                          { stop() {} }
                        );
                      }
                );
              })(e, t, r, n, i),
              u = (function (e, t) {
                var r, n;
                let i = tZ(e, t) || {};
                return null !==
                  (n = null !== (r = i.delay) && void 0 !== r ? r : e.delay) &&
                  void 0 !== n
                  ? n
                  : 0;
              })(n, e),
              l = () => (a = s());
            return (
              u ? (o = window.setTimeout(l, tp(u))) : l(),
              () => {
                clearTimeout(o), a && a.stop();
              }
            );
          })
        );
      }
      let tB = (e) => /^\-?\d*\.?\d+$/.test(e),
        t$ = (e) => /^0[^.\s]+$/.test(e);
      class tK {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          var t, r;
          return (
            -1 === (t = this.subscriptions).indexOf(e) && t.push(e),
            () =>
              (function (e, t) {
                let r = e.indexOf(t);
                r > -1 && e.splice(r, 1);
              })(this.subscriptions, e)
          );
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let i = 0; i < n; i++) {
                let o = this.subscriptions[i];
                o && o(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let tW = (e) => !isNaN(parseFloat(e));
      class tY {
        constructor(e) {
          (this.version = "7.3.6"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.updateSubscribers = new tK()),
            (this.velocityUpdateSubscribers = new tK()),
            (this.renderSubscribers = new tK()),
            (this.canTrackVelocity = !1),
            (this.updateAndNotify = (e, t = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: r, timestamp: n } = tl();
              this.lastUpdated !== n &&
                ((this.timeDelta = r),
                (this.lastUpdated = n),
                ti.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.updateSubscribers.notify(this.current),
                this.velocityUpdateSubscribers.getSize() &&
                  this.velocityUpdateSubscribers.notify(this.getVelocity()),
                t && this.renderSubscribers.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              ti.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.velocityUpdateSubscribers.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = tW(this.current));
        }
        onChange(e) {
          return this.updateSubscribers.add(e);
        }
        clearListeners() {
          this.updateSubscribers.clear();
        }
        onRenderRequest(e) {
          return e(this.get()), this.renderSubscribers.add(e);
        }
        attach(e) {
          this.passiveEffect = e;
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? th(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0), (this.stopAnimation = e(t));
            }).then(() => this.clearAnimation())
          );
        }
        stop() {
          this.stopAnimation && this.stopAnimation(), this.clearAnimation();
        }
        isAnimating() {
          return !!this.stopAnimation;
        }
        clearAnimation() {
          this.stopAnimation = null;
        }
        destroy() {
          this.updateSubscribers.clear(),
            this.renderSubscribers.clear(),
            this.stop();
        }
      }
      function tX(e) {
        return new tY(e);
      }
      let tJ = (e) => (t) => t.test(e),
        t0 = [
          B,
          eo,
          ei,
          en,
          es,
          ea,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        t1 = (e) => t0.find(tJ(e)),
        t2 = [...t0, ey, eC],
        t5 = (e) => t2.find(tJ(e));
      function t3(e, t, r, n = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          t
        );
      }
      function t4(e, t, r) {
        let n = e.getProps();
        return t3(
          n,
          t,
          void 0 !== r ? r : n.custom,
          (function (e) {
            let t = {};
            return e.forEachValue((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.forEachValue((e, r) => (t[r] = e.getVelocity())), t;
          })(e)
        );
      }
      function t6(e, t, r) {
        e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, tX(r));
      }
      function t7(e, t) {
        if (!t) return;
        let r = t[e] || t.default || t;
        return r.from;
      }
      let t9 = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        t8 = new Set(t9),
        re = (e) => !!(null == e ? void 0 : e.getVelocity);
      function rt(e) {
        return Boolean(re(e) && e.add);
      }
      function rr(e, t, r = {}) {
        var n;
        let i = t4(e, t, r.custom),
          { transition: o = e.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (o = r.transitionOverride);
        let a = i ? () => rn(e, i, r) : () => Promise.resolve(),
          s = (
            null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? (n = 0) => {
                let {
                  delayChildren: i = 0,
                  staggerChildren: a,
                  staggerDirection: s,
                } = o;
                return (function (e, t, r = 0, n = 0, i = 1, o) {
                  let a = [],
                    s = (e.variantChildren.size - 1) * n,
                    u = 1 === i ? (e = 0) => e * n : (e = 0) => s - e * n;
                  return (
                    Array.from(e.variantChildren)
                      .sort(ri)
                      .forEach((e, n) => {
                        a.push(
                          rr(e, t, { ...o, delay: r + u(n) }).then(() =>
                            e.notifyAnimationComplete(t)
                          )
                        );
                      }),
                    Promise.all(a)
                  );
                })(e, t, i + n, a, s, r);
              }
            : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), s(r.delay)]);
        {
          let [l, c] = "beforeChildren" === u ? [a, s] : [s, a];
          return l().then(c);
        }
      }
      function rn(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        var o;
        let {
            transition: a = e.getDefaultTransition(),
            transitionEnd: s,
            ...u
          } = e.makeTargetAnimatable(t),
          l = e.getValue("willChange");
        n && (a = n);
        let c = [],
          f =
            i &&
            (null === (o = e.animationState) || void 0 === o
              ? void 0
              : o.getState()[i]);
        for (let d in u) {
          let h = e.getValue(d),
            p = u[d];
          if (!h || void 0 === p || (f && ro(f, d))) continue;
          let m = { delay: r, ...a };
          e.shouldReduceMotion &&
            t8.has(d) &&
            (m = { ...m, type: !1, delay: 0 });
          let v = tH(d, h, p, m);
          rt(l) && (l.add(d), (v = v.then(() => l.remove(d)))), c.push(v);
        }
        return Promise.all(c).then(() => {
          s &&
            (function (e, t) {
              let r = t4(e, t),
                {
                  transitionEnd: n = {},
                  transition: i = {},
                  ...o
                } = r ? e.makeTargetAnimatable(r, !1) : {};
              for (let a in (o = { ...o, ...n })) {
                let s = tG(o[a]);
                t6(e, a, s);
              }
            })(e, s);
        });
      }
      function ri(e, t) {
        return e.sortNodePosition(t);
      }
      function ro({ protectedKeys: e, needsAnimating: t }, r) {
        let n = e.hasOwnProperty(r) && !0 !== t[r];
        return (t[r] = !1), n;
      }
      function ra(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      ((n_ = i || (i = {})).Animate = "animate"),
        (n_.Hover = "whileHover"),
        (n_.Tap = "whileTap"),
        (n_.Drag = "whileDrag"),
        (n_.Focus = "whileFocus"),
        (n_.InView = "whileInView"),
        (n_.Exit = "exit");
      let rs = [i.Animate, i.InView, i.Focus, i.Hover, i.Tap, i.Drag, i.Exit],
        ru = [...rs].reverse(),
        rl = rs.length;
      function rc(e, t) {
        return "string" == typeof t ? t !== e : !!Array.isArray(t) && !P(t, e);
      }
      function rf(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let rd = (e) => (t) => (e(t), null),
        rh = {
          animation: rd(({ visualElement: e, animate: t }) => {
            e.animationState ||
              (e.animationState = (function (e) {
                var t;
                let r = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          e.notifyAnimationStart(t);
                          let n;
                          if (Array.isArray(t)) {
                            let i = t.map((t) => rr(e, t, r));
                            n = Promise.all(i);
                          } else if ("string" == typeof t) n = rr(e, t, r);
                          else {
                            let o =
                              "function" == typeof t ? t4(e, t, r.custom) : t;
                            n = rn(e, o, r);
                          }
                          return n.then(() => e.notifyAnimationComplete(t));
                        })(e, t, r)
                      )
                    ),
                  n = {
                    [i.Animate]: rf(!0),
                    [i.InView]: rf(),
                    [i.Hover]: rf(),
                    [i.Tap]: rf(),
                    [i.Drag]: rf(),
                    [i.Focus]: rf(),
                    [i.Exit]: rf(),
                  },
                  o = !0,
                  a = (t, r) => {
                    let n = t4(e, r);
                    if (n) {
                      let { transition: i, transitionEnd: o, ...a } = n;
                      t = { ...t, ...a, ...o };
                    }
                    return t;
                  };
                function s(t, i) {
                  var s;
                  let u = e.getProps(),
                    l = e.getVariantContext(!0) || {},
                    c = [],
                    f = new Set(),
                    d = {},
                    h = 1 / 0;
                  for (let p = 0; p < rl; p++) {
                    let m = ru[p],
                      v = n[m],
                      y = null !== (s = u[m]) && void 0 !== s ? s : l[m],
                      g = ra(y),
                      b = m === i ? v.isActive : null;
                    !1 === b && (h = p);
                    let w = y === l[m] && y !== u[m] && g;
                    if (
                      (w && o && e.manuallyAnimateOnMount && (w = !1),
                      (v.protectedKeys = { ...d }),
                      (!v.isActive && null === b) ||
                        (!y && !v.prevProp) ||
                        S(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let x = rc(v.prevProp, y),
                      E =
                        x || (m === i && v.isActive && !w && g) || (p > h && g),
                      O = Array.isArray(y) ? y : [y],
                      C = O.reduce(a, {});
                    !1 === b && (C = {});
                    let { prevResolvedValues: k = {} } = v,
                      T = { ...k, ...C },
                      A = (e) => {
                        (E = !0), f.delete(e), (v.needsAnimating[e] = !0);
                      };
                    for (let M in T) {
                      let _ = C[M],
                        R = k[M];
                      d.hasOwnProperty(M) ||
                        (_ !== R
                          ? j(_) && j(R)
                            ? !P(_, R) || x
                              ? A(M)
                              : (v.protectedKeys[M] = !0)
                            : void 0 !== _
                            ? A(M)
                            : f.add(M)
                          : void 0 !== _ && f.has(M)
                          ? A(M)
                          : (v.protectedKeys[M] = !0));
                    }
                    (v.prevProp = y),
                      (v.prevResolvedValues = C),
                      v.isActive && (d = { ...d, ...C }),
                      o && e.blockInitialAnimation && (E = !1),
                      E &&
                        !w &&
                        c.push(
                          ...O.map((e) => ({
                            animation: e,
                            options: { type: m, ...t },
                          }))
                        );
                  }
                  if (f.size) {
                    let F = {};
                    f.forEach((t) => {
                      let r = e.getBaseTarget(t);
                      void 0 !== r && (F[t] = r);
                    }),
                      c.push({ animation: F });
                  }
                  let I = Boolean(c.length);
                  return (
                    o &&
                      !1 === u.initial &&
                      !e.manuallyAnimateOnMount &&
                      (I = !1),
                    (o = !1),
                    I ? r(c) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (t, r, i) {
                    var o;
                    if (n[t].isActive === r) return Promise.resolve();
                    null === (o = e.variantChildren) ||
                      void 0 === o ||
                      o.forEach((e) => {
                        var n;
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(t, r);
                      }),
                      (n[t].isActive = r);
                    let a = s(i, t);
                    for (let u in n) n[u].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (t) {
                    r = t(e);
                  },
                  getState: () => n,
                };
              })(e)),
              S(t) && (0, g.useEffect)(() => t.subscribe(e), [t]);
          }),
          exit: rd((e) => {
            let { custom: t, visualElement: r } = e,
              [n, o] = (function () {
                let e = (0, g.useContext)(k);
                if (null === e) return [!0, null];
                let { isPresent: t, onExitComplete: r, register: n } = e,
                  i = (0, g.useId)();
                (0, g.useEffect)(() => n(i), []);
                let o = () => r && r(i);
                return !t && r ? [!1, o] : [!0];
              })(),
              a = (0, g.useContext)(k);
            (0, g.useEffect)(() => {
              r.isPresent = n;
              let e =
                r.animationState &&
                r.animationState.setActive(i.Exit, !n, {
                  custom: (a && a.custom) || t,
                });
              e && !n && e.then(o);
            }, [n]);
          }),
        };
      function rp(e, t, r, n = { passive: !0 }) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
      }
      function rm(e, t, r, n) {
        (0, g.useEffect)(() => {
          let i = e.current;
          if (r && i) return rp(i, t, r, n);
        }, [e, t, r, n]);
      }
      let rv = { pageX: 0, pageY: 0 },
        ry = (e, t = !1) => {
          var r;
          let n = (t) =>
            e(
              t,
              (function (e, t = "page") {
                return {
                  point: !(function (e) {
                    let t = !!e.touches;
                    return t;
                  })(e)
                    ? (function (e, t = "page") {
                        return { x: e[t + "X"], y: e[t + "Y"] };
                      })(e, t)
                    : (function (e, t = "page") {
                        let r = e.touches[0] || e.changedTouches[0],
                          n = r || rv;
                        return { x: n[t + "X"], y: n[t + "Y"] };
                      })(e, t),
                };
              })(t)
            );
          return t
            ? (e) => {
                let t = e instanceof MouseEvent,
                  r = !t || (t && 0 === e.button);
                r && n(e);
              }
            : n;
        },
        rg = "undefined" != typeof document,
        rb = () => rg && null === window.onpointerdown,
        rw = () => rg && null === window.ontouchstart,
        rx = () => rg && null === window.onmousedown,
        rE = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        rO = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function rC(e) {
        if (rb());
        else if (rw()) return rO[e];
        else if (rx()) return rE[e];
        return e;
      }
      function rS(e, t, r, n) {
        return rp(e, rC(t), ry(r, "pointerdown" === t), n);
      }
      function rk(e, t, r, n) {
        return rm(e, rC(t), r && ry(r, "pointerdown" === t), n);
      }
      function rj(e) {
        let t = null;
        return () => {
          let r = () => {
            t = null;
          };
          return null === t && ((t = e), r);
        };
      }
      let rP = rj("dragHorizontal"),
        rT = rj("dragVertical");
      function rA() {
        let e = (function (e) {
          let t = !1;
          if ("y" === e) t = rT();
          else if ("x" === e) t = rP();
          else {
            let r = rP(),
              n = rT();
            r && n
              ? (t = () => {
                  r(), n();
                })
              : (r && r(), n && n());
          }
          return t;
        })(!0);
        return !e || (e(), !1);
      }
      function rM(e, t, r) {
        return (n, o) => {
          var a;
          !(
            ("undefined" != typeof PointerEvent && n instanceof PointerEvent
              ? "mouse" !== n.pointerType
              : !(n instanceof MouseEvent)) || rA()
          ) &&
            (e.animationState && e.animationState.setActive(i.Hover, t),
            r && r(n, o));
        };
      }
      let r_ = (e, t) => !!t && (e === t || r_(e, t.parentElement));
      var rR = r(83454);
      let rF = (void 0 === rR || rR.env, "production"),
        rI = new Set(),
        rL = new WeakMap(),
        rN = new WeakMap(),
        rV = (e) => {
          let t = rL.get(e.target);
          t && t(e);
        },
        rD = (e) => {
          e.forEach(rV);
        },
        rq = { some: 0, all: 1 };
      function rG(
        e,
        t,
        r,
        { root: n, margin: o, amount: a = "some", once: s }
      ) {
        (0, g.useEffect)(() => {
          if (!e) return;
          let u = {
              root: null == n ? void 0 : n.current,
              rootMargin: o,
              threshold: "number" == typeof a ? a : rq[a],
            },
            l = (e) => {
              let { isIntersecting: n } = e;
              if (
                t.isInView === n ||
                ((t.isInView = n), s && !n && t.hasEnteredView)
              )
                return;
              n && (t.hasEnteredView = !0),
                r.animationState && r.animationState.setActive(i.InView, n);
              let o = r.getProps(),
                a = n ? o.onViewportEnter : o.onViewportLeave;
              a && a(e);
            };
          return (function (e, t, r) {
            let n = (function ({ root: e, ...t }) {
              let r = e || document;
              rN.has(r) || rN.set(r, {});
              let n = rN.get(r),
                i = JSON.stringify(t);
              return (
                n[i] ||
                  (n[i] = new IntersectionObserver(rD, { root: e, ...t })),
                n[i]
              );
            })(t);
            return (
              rL.set(e, r),
              n.observe(e),
              () => {
                rL.delete(e), n.unobserve(e);
              }
            );
          })(r.getInstance(), u, l);
        }, [e, n, o, a]);
      }
      function rU(e, t, r, { fallback: n = !0 }) {
        (0, g.useEffect)(() => {
          if (e && n) {
            if ("production" !== rF) {
              var o, a, s;
              (a =
                "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                rI.has(a) || (console.warn(a), s && console.warn(s), rI.add(a));
            }
            requestAnimationFrame(() => {
              t.hasEnteredView = !0;
              let { onViewportEnter: e } = r.getProps();
              e && e(null),
                r.animationState && r.animationState.setActive(i.InView, !0);
            });
          }
        }, [e]);
      }
      let rQ = {
          inView: rd(function ({
            visualElement: e,
            whileInView: t,
            onViewportEnter: r,
            onViewportLeave: n,
            viewport: i = {},
          }) {
            let o = (0, g.useRef)({ hasEnteredView: !1, isInView: !1 }),
              a = Boolean(t || r || n);
            i.once && o.current.hasEnteredView && (a = !1);
            let s = "undefined" == typeof IntersectionObserver ? rU : rG;
            s(a, o.current, e, i);
          }),
          tap: rd(function ({
            onTap: e,
            onTapStart: t,
            onTapCancel: r,
            whileTap: n,
            visualElement: o,
          }) {
            var a;
            let s = (0, g.useRef)(!1),
              u = (0, g.useRef)(null),
              l = { passive: !(t || e || r || p) };
            function c() {
              u.current && u.current(), (u.current = null);
            }
            function f() {
              return (
                c(),
                (s.current = !1),
                o.animationState && o.animationState.setActive(i.Tap, !1),
                !rA()
              );
            }
            function d(t, n) {
              f() &&
                (r_(o.getInstance(), t.target) ? e && e(t, n) : r && r(t, n));
            }
            function h(e, t) {
              f() && r && r(e, t);
            }
            function p(e, r) {
              c(),
                !s.current &&
                  ((s.current = !0),
                  (u.current = ej(
                    rS(window, "pointerup", d, l),
                    rS(window, "pointercancel", h, l)
                  )),
                  o.animationState && o.animationState.setActive(i.Tap, !0),
                  t && t(e, r));
            }
            rk(o, "pointerdown", e || t || r || n ? p : void 0, l),
              (0, g.useEffect)(() => () => c(), []);
          }),
          focus: rd(function ({ whileFocus: e, visualElement: t }) {
            let { animationState: r } = t,
              n = () => {
                r && r.setActive(i.Focus, !0);
              },
              o = () => {
                r && r.setActive(i.Focus, !1);
              };
            rm(t, "focus", e ? n : void 0), rm(t, "blur", e ? o : void 0);
          }),
          hover: rd(function ({
            onHoverStart: e,
            onHoverEnd: t,
            whileHover: r,
            visualElement: n,
          }) {
            rk(n, "pointerenter", e || r ? rM(n, !0, e) : void 0, {
              passive: !e,
            }),
              rk(n, "pointerleave", t || r ? rM(n, !1, t) : void 0, {
                passive: !t,
              });
          }),
        },
        rz = { current: null },
        rZ = { current: !1 },
        rH = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ],
        rB = [
          "initial",
          "animate",
          "exit",
          "whileHover",
          "whileDrag",
          "whileTap",
          "whileFocus",
          "whileInView",
        ];
      function r$(e) {
        return S(e.animate) || rB.some((t) => ra(e[t]));
      }
      function rK(e) {
        return Boolean(r$(e) || e.variants);
      }
      function rW(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      let rY = Object.keys(x),
        rX = rY.length,
        rJ =
          ({
            treeType: e = "",
            build: t,
            getBaseTarget: r,
            makeTargetAnimatable: n,
            measureViewportBox: i,
            render: o,
            readValueFromInstance: a,
            removeValueFromRenderState: s,
            sortNodePosition: u,
            scrapeMotionValuesFromProps: l,
          }) =>
          (
            {
              parent: c,
              props: f,
              presenceId: d,
              blockInitialAnimation: h,
              visualState: p,
              reducedMotionConfig: m,
            },
            v = {}
          ) => {
            let y = !1,
              { latestValues: b, renderState: w } = p,
              E,
              O = (function () {
                let e = rH.map(() => new tK()),
                  t = {},
                  r = {
                    clearAllListeners: () => e.forEach((e) => e.clear()),
                    updatePropListeners(e) {
                      rH.forEach((n) => {
                        var i;
                        let o = "on" + n,
                          a = e[o];
                        null === (i = t[n]) || void 0 === i || i.call(t),
                          a && (t[n] = r[o](a));
                      });
                    },
                  };
                return (
                  e.forEach((e, t) => {
                    (r["on" + rH[t]] = (t) => e.add(t)),
                      (r["notify" + rH[t]] = (...t) => e.notify(...t));
                  }),
                  r
                );
              })(),
              C = new Map(),
              S = new Map(),
              k = {},
              j = { ...b },
              P;
            function T() {
              E && y && (A(), o(E, w, f.style, q.projection));
            }
            function A() {
              t(q, w, b, v, f);
            }
            function _() {
              O.notifyUpdate(b);
            }
            function R(e, t) {
              let r = t.onChange((t) => {
                  (b[e] = t), f.onUpdate && ti.update(_, !1, !0);
                }),
                n = t.onRenderRequest(q.scheduleRender);
              S.set(e, () => {
                r(), n();
              });
            }
            let { willChange: F, ...I } = l(f);
            for (let L in I) {
              let N = I[L];
              void 0 !== b[L] && re(N) && (N.set(b[L], !1), rt(F) && F.add(L));
            }
            let V = r$(f),
              D = rK(f),
              q = {
                treeType: e,
                current: null,
                depth: c ? c.depth + 1 : 0,
                parent: c,
                children: new Set(),
                presenceId: d,
                shouldReduceMotion: null,
                variantChildren: D ? new Set() : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(
                  null == c ? void 0 : c.isMounted()
                ),
                blockInitialAnimation: h,
                isMounted: () => Boolean(E),
                mount(e) {
                  (y = !0),
                    (E = q.current = e),
                    q.projection && q.projection.mount(e),
                    D &&
                      c &&
                      !V &&
                      (P = null == c ? void 0 : c.addVariantChild(q)),
                    C.forEach((e, t) => R(t, e)),
                    rZ.current ||
                      (function () {
                        if (((rZ.current = !0), rg)) {
                          if (window.matchMedia) {
                            let e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = () => (rz.current = e.matches);
                            e.addListener(t), t();
                          } else rz.current = !1;
                        }
                      })(),
                    (q.shouldReduceMotion =
                      "never" !== m && ("always" === m || rz.current)),
                    null == c || c.children.add(q),
                    q.setProps(f);
                },
                unmount() {
                  var e;
                  null === (e = q.projection) || void 0 === e || e.unmount(),
                    to.update(_),
                    to.render(T),
                    S.forEach((e) => e()),
                    null == P || P(),
                    null == c || c.children.delete(q),
                    O.clearAllListeners(),
                    (E = void 0),
                    (y = !1);
                },
                loadFeatures(e, t, r, n, i, o) {
                  let a = [];
                  "production" !== rF &&
                    r &&
                    t &&
                    M(
                      !1,
                      "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                    );
                  for (let s = 0; s < rX; s++) {
                    let u = rY[s],
                      { isEnabled: l, Component: f } = x[u];
                    l(e) &&
                      f &&
                      a.push(
                        (0, g.createElement)(f, {
                          key: u,
                          ...e,
                          visualElement: q,
                        })
                      );
                  }
                  if (!q.projection && i) {
                    q.projection = new i(
                      n,
                      q.getLatestValues(),
                      c && c.projection
                    );
                    let {
                      layoutId: d,
                      layout: h,
                      drag: p,
                      dragConstraints: m,
                      layoutScroll: v,
                    } = e;
                    q.projection.setOptions({
                      layoutId: d,
                      layout: h,
                      alwaysMeasureLayout: Boolean(p) || (m && rW(m)),
                      visualElement: q,
                      scheduleRender: () => q.scheduleRender(),
                      animationType: "string" == typeof h ? h : "both",
                      initialPromotionConfig: o,
                      layoutScroll: v,
                    });
                  }
                  return a;
                },
                addVariantChild(e) {
                  var t;
                  let r = q.getClosestVariantNode();
                  if (r)
                    return (
                      null === (t = r.variantChildren) ||
                        void 0 === t ||
                        t.add(e),
                      () => r.variantChildren.delete(e)
                    );
                },
                sortNodePosition: (t) =>
                  u && e === t.treeType
                    ? u(q.getInstance(), t.getInstance())
                    : 0,
                getClosestVariantNode: () =>
                  D ? q : null == c ? void 0 : c.getClosestVariantNode(),
                getLayoutId: () => f.layoutId,
                getInstance: () => E,
                getStaticValue: (e) => b[e],
                setStaticValue: (e, t) => (b[e] = t),
                getLatestValues: () => b,
                setVisibility(e) {
                  q.isVisible !== e && ((q.isVisible = e), q.scheduleRender());
                },
                makeTargetAnimatable: (e, t = !0) => n(q, e, f, t),
                measureViewportBox: () => i(E, f),
                addValue(e, t) {
                  q.hasValue(e) && q.removeValue(e),
                    C.set(e, t),
                    (b[e] = t.get()),
                    R(e, t);
                },
                removeValue(e) {
                  var t;
                  C.delete(e),
                    null === (t = S.get(e)) || void 0 === t || t(),
                    S.delete(e),
                    delete b[e],
                    s(e, w);
                },
                hasValue: (e) => C.has(e),
                getValue(e, t) {
                  let r = C.get(e);
                  return (
                    void 0 === r &&
                      void 0 !== t &&
                      ((r = tX(t)), q.addValue(e, r)),
                    r
                  );
                },
                forEachValue: (e) => C.forEach(e),
                readValue: (e) => (void 0 !== b[e] ? b[e] : a(E, e, v)),
                setBaseTarget(e, t) {
                  j[e] = t;
                },
                getBaseTarget(e) {
                  if (r) {
                    let t = r(f, e);
                    if (void 0 !== t && !re(t)) return t;
                  }
                  return j[e];
                },
                ...O,
                build: () => (A(), w),
                scheduleRender() {
                  ti.render(T, !1, !0);
                },
                syncRender: T,
                setProps(e) {
                  (e.transformTemplate || f.transformTemplate) &&
                    q.scheduleRender(),
                    (f = e),
                    O.updatePropListeners(e),
                    (k = (function (e, t, r) {
                      let { willChange: n } = t;
                      for (let i in t) {
                        let o = t[i],
                          a = r[i];
                        if (re(o)) e.addValue(i, o), rt(n) && n.add(i);
                        else if (re(a))
                          e.addValue(i, tX(o)), rt(n) && n.remove(i);
                        else if (a !== o) {
                          if (e.hasValue(i)) {
                            let s = e.getValue(i);
                            s.hasAnimated || s.set(o);
                          } else {
                            let u = e.getStaticValue(i);
                            e.addValue(i, tX(void 0 !== u ? u : o));
                          }
                        }
                      }
                      for (let l in r) void 0 === t[l] && e.removeValue(l);
                      return t;
                    })(q, l(f), k));
                },
                getProps: () => f,
                getVariant(e) {
                  var t;
                  return null === (t = f.variants) || void 0 === t
                    ? void 0
                    : t[e];
                },
                getDefaultTransition: () => f.transition,
                getTransformPagePoint: () => f.transformPagePoint,
                getVariantContext(e = !1) {
                  if (e) return null == c ? void 0 : c.getVariantContext();
                  if (!V) {
                    let t = (null == c ? void 0 : c.getVariantContext()) || {};
                    return void 0 !== f.initial && (t.initial = f.initial), t;
                  }
                  let r = {};
                  for (let n = 0; n < r1; n++) {
                    let i = r0[n],
                      o = f[i];
                    (ra(o) || !1 === o) && (r[i] = o);
                  }
                  return r;
                },
              };
            return q;
          },
        r0 = ["initial", ...rs],
        r1 = r0.length,
        r2 = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        r5 = (e, t) => t9.indexOf(e) - t9.indexOf(t);
      function r3(e) {
        return e.startsWith("--");
      }
      let r4 = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      function r6(e, t, r, n) {
        let {
          style: i,
          vars: o,
          transform: a,
          transformKeys: s,
          transformOrigin: u,
        } = e;
        s.length = 0;
        let l = !1,
          c = !1,
          f = !0;
        for (let d in t) {
          let h = t[d];
          if (r3(d)) {
            o[d] = h;
            continue;
          }
          let p = tI[d],
            m = r4(h, p);
          if (t8.has(d)) {
            if (((l = !0), (a[d] = m), s.push(d), !f)) continue;
            h !== (p.default || 0) && (f = !1);
          } else d.startsWith("origin") ? ((c = !0), (u[d] = m)) : (i[d] = m);
        }
        if (
          (l || n
            ? (i.transform = (function (
                { transform: e, transformKeys: t },
                {
                  enableHardwareAcceleration: r = !0,
                  allowTransformNone: n = !0,
                },
                i,
                o
              ) {
                let a = "";
                for (let s of (t.sort(r5), t)) a += `${r2[s] || s}(${e[s]}) `;
                return (
                  r && !e.z && (a += "translateZ(0)"),
                  (a = a.trim()),
                  o ? (a = o(e, i ? "" : a)) : n && i && (a = "none"),
                  a
                );
              })(e, r, f, n))
            : !t.transform && i.transform && (i.transform = "none"),
          c)
        ) {
          let { originX: v = "50%", originY: y = "50%", originZ: g = 0 } = u;
          i.transformOrigin = `${v} ${y} ${g}`;
        }
      }
      function r7(e) {
        return "string" == typeof e && e.startsWith("var(--");
      }
      let r9 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function r8(e, t, r = 1) {
        M(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [n, i] = (function (e) {
          let t = r9.exec(e);
          if (!t) return [,];
          let [, r, n] = t;
          return [r, n];
        })(e);
        if (!n) return;
        let o = window.getComputedStyle(t).getPropertyValue(n);
        return o ? o.trim() : r7(i) ? r8(i, t, r + 1) : i;
      }
      let ne = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        nt = (e) => ne.has(e),
        nr = (e) => Object.keys(e).some(nt),
        nn = (e, t) => {
          e.set(t, !1), e.set(t);
        },
        ni = (e) => e === B || e === eo;
      ((nR = o || (o = {})).width = "width"),
        (nR.height = "height"),
        (nR.left = "left"),
        (nR.right = "right"),
        (nR.top = "top"),
        (nR.bottom = "bottom");
      let no = (e, t) => parseFloat(e.split(", ")[t]),
        na =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return no(i[1], t);
            {
              let o = n.match(/^matrix\((.+)\)$/);
              return o ? no(o[1], e) : 0;
            }
          },
        ns = new Set(["x", "y", "z"]),
        nu = t9.filter((e) => !ns.has(e)),
        nl = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: na(4, 13),
          y: na(5, 14),
        },
        nc = (e, t, r) => {
          let n = t.measureViewportBox(),
            i = t.getInstance(),
            o = getComputedStyle(i),
            { display: a } = o,
            s = {};
          "none" === a && t.setStaticValue("display", e.display || "block"),
            r.forEach((e) => {
              s[e] = nl[e](n, o);
            }),
            t.syncRender();
          let u = t.measureViewportBox();
          return (
            r.forEach((r) => {
              let n = t.getValue(r);
              nn(n, s[r]), (e[r] = nl[r](u, o));
            }),
            e
          );
        },
        nf = (e, t, r = {}, n = {}) => {
          (t = { ...t }), (n = { ...n });
          let i = Object.keys(t).filter(nt),
            o = [],
            a = !1,
            s = [];
          if (
            (i.forEach((i) => {
              let u = e.getValue(i);
              if (!e.hasValue(i)) return;
              let l = r[i],
                c = t1(l),
                f = t[i],
                d;
              if (j(f)) {
                let h = f.length,
                  p = null === f[0] ? 1 : 0;
                c = t1((l = f[p]));
                for (let m = p; m < h; m++)
                  d
                    ? M(
                        t1(f[m]) === d,
                        "All keyframes must be of the same type"
                      )
                    : ((d = t1(f[m])),
                      M(
                        d === c || (ni(c) && ni(d)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else d = t1(f);
              if (c !== d) {
                if (ni(c) && ni(d)) {
                  let v = u.get();
                  "string" == typeof v && u.set(parseFloat(v)),
                    "string" == typeof f
                      ? (t[i] = parseFloat(f))
                      : Array.isArray(f) &&
                        d === eo &&
                        (t[i] = f.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == d ? void 0 : d.transform) &&
                  (0 === l || 0 === f)
                    ? 0 === l
                      ? u.set(d.transform(l))
                      : (t[i] = c.transform(f))
                    : (a ||
                        ((o = (function (e) {
                          let t = [];
                          return (
                            nu.forEach((r) => {
                              let n = e.getValue(r);
                              void 0 !== n &&
                                (t.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.syncRender(),
                            t
                          );
                        })(e)),
                        (a = !0)),
                      s.push(i),
                      (n[i] = void 0 !== n[i] ? n[i] : t[i]),
                      nn(u, f));
              }
            }),
            !s.length)
          )
            return { target: t, transitionEnd: n };
          {
            let u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              l = nc(t, e, s);
            return (
              o.length &&
                o.forEach(([t, r]) => {
                  e.getValue(t).set(r);
                }),
              e.syncRender(),
              rg && null !== u && window.scrollTo({ top: u }),
              { target: l, transitionEnd: n }
            );
          }
        },
        nd = (e, t, r, n) => {
          var i, o, a, s;
          let u = (function (e, { ...t }, r) {
            let n = e.getInstance();
            if (!(n instanceof Element)) return { target: t, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            e.forEachValue((e) => {
              let t = e.get();
              if (!r7(t)) return;
              let r = r8(t, n);
              r && e.set(r);
            }),
            t)) {
              let o = t[i];
              if (!r7(o)) continue;
              let a = r8(o, n);
              a && ((t[i] = a), r && void 0 === r[i] && (r[i] = o));
            }
            return { target: t, transitionEnd: r };
          })(e, t, n);
          return (
            (t = u.target),
            (n = u.transitionEnd),
            (o = t),
            (s = n),
            nr(o) ? nf(e, o, r, s) : { target: o, transitionEnd: s }
          );
        },
        nh = {};
      function np(e, { layout: t, layoutId: r }) {
        return (
          t8.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!nh[e] || "opacity" === e))
        );
      }
      function nm(e) {
        let { style: t } = e,
          r = {};
        for (let n in t) (re(t[n]) || np(n, e)) && (r[n] = t[n]);
        return r;
      }
      function nv(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let ny = {
          treeType: "dom",
          readValueFromInstance(e, t) {
            if (t8.has(t)) {
              let r = tN(t);
              return (r && r.default) || 0;
            }
            {
              var n;
              let i = window.getComputedStyle(e),
                o = (r3(t) ? i.getPropertyValue(t) : i[t]) || 0;
              return "string" == typeof o ? o.trim() : o;
            }
          },
          sortNodePosition: (e, t) =>
            2 & e.compareDocumentPosition(t) ? 1 : -1,
          getBaseTarget(e, t) {
            var r;
            return null === (r = e.style) || void 0 === r ? void 0 : r[t];
          },
          measureViewportBox(e, { transformPagePoint: t }) {
            var r, n;
            return (function ({ top: e, left: t, right: r, bottom: n }) {
              return { x: { min: t, max: r }, y: { min: e, max: n } };
            })(
              (function (e, t) {
                if (!t) return e;
                let r = t({ x: e.left, y: e.top }),
                  n = t({ x: e.right, y: e.bottom });
                return { top: r.y, left: r.x, bottom: n.y, right: n.x };
              })(e.getBoundingClientRect(), t)
            );
          },
          resetTransform(e, t, r) {
            let { transformTemplate: n } = r;
            (t.style.transform = n ? n({}, "") : "none"), e.scheduleRender();
          },
          restoreTransform(e, t) {
            e.style.transform = t.style.transform;
          },
          removeValueFromRenderState(e, { vars: t, style: r }) {
            delete t[e], delete r[e];
          },
          makeTargetAnimatable(
            e,
            { transition: t, transitionEnd: r, ...n },
            { transformValues: i },
            o = !0
          ) {
            let a = (function (e, t, r) {
              var n;
              let i = {};
              for (let o in e) {
                let a = t7(o, t);
                i[o] =
                  void 0 !== a
                    ? a
                    : null === (n = r.getValue(o)) || void 0 === n
                    ? void 0
                    : n.get();
              }
              return i;
            })(n, t || {}, e);
            if ((i && (r && (r = i(r)), n && (n = i(n)), a && (a = i(a))), o)) {
              !(function (e, t, r) {
                var n, i;
                let o = Object.keys(t).filter((t) => !e.hasValue(t)),
                  a = o.length;
                if (a)
                  for (let s = 0; s < a; s++) {
                    let u = o[s],
                      l = t[u],
                      c = null;
                    Array.isArray(l) && (c = l[0]),
                      null === c &&
                        (c =
                          null !==
                            (i =
                              null !== (n = r[u]) && void 0 !== n
                                ? n
                                : e.readValue(u)) && void 0 !== i
                            ? i
                            : t[u]),
                      null != c &&
                        ("string" == typeof c && (tB(c) || t$(c))
                          ? (c = parseFloat(c))
                          : !t5(c) && eC.test(l) && (c = tV(u, l)),
                        e.addValue(u, tX(c)),
                        void 0 === r[u] && (r[u] = c),
                        e.setBaseTarget(u, c));
                  }
              })(e, n, a);
              let s = nd(e, n, a, r);
              (r = s.transitionEnd), (n = s.target);
            }
            return { transition: t, transitionEnd: r, ...n };
          },
          scrapeMotionValuesFromProps: nm,
          build(e, t, r, n, i) {
            void 0 !== e.isVisible &&
              (t.style.visibility = e.isVisible ? "visible" : "hidden"),
              r6(t, r, n, i.transformTemplate);
          },
          render: nv,
        },
        ng = rJ(ny);
      function nb(e) {
        let t = nm(e);
        for (let r in e)
          if (re(e[r])) {
            let n = "x" === r || "y" === r ? "attr" + r.toUpperCase() : r;
            t[n] = e[r];
          }
        return t;
      }
      function nw(e, t, r) {
        return "string" == typeof e ? e : eo.transform(t + r * e);
      }
      let nx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nE = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nO(
        e,
        {
          attrX: t,
          attrY: r,
          originX: n,
          originY: i,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: s = 0,
          ...u
        },
        l,
        c
      ) {
        r6(e, u, l, c), (e.attrs = e.style), (e.style = {});
        let { attrs: f, style: d, dimensions: h } = e;
        f.transform && (h && (d.transform = f.transform), delete f.transform),
          h &&
            (void 0 !== n || void 0 !== i || d.transform) &&
            (d.transformOrigin = (function (e, t, r) {
              let n = nw(t, e.x, e.width),
                i = nw(r, e.y, e.height);
              return `${n} ${i}`;
            })(h, void 0 !== n ? n : 0.5, void 0 !== i ? i : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== r && (f.y = r),
          void 0 !== o &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? nx : nE;
              e[o.offset] = eo.transform(-n);
              let a = eo.transform(t),
                s = eo.transform(r);
              e[o.array] = `${a} ${s}`;
            })(f, o, a, s, !1);
      }
      let nC = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        nS = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
        ]);
      function nk(e, t, r, n) {
        for (let i in (nv(e, t, void 0, n), t.attrs))
          e.setAttribute(nS.has(i) ? i : nC(i), t.attrs[i]);
      }
      let nj = rJ({
          ...ny,
          getBaseTarget: (e, t) => e[t],
          readValueFromInstance(e, t) {
            var r;
            return t8.has(t)
              ? (null === (r = tN(t)) || void 0 === r ? void 0 : r.default) || 0
              : ((t = nS.has(t) ? t : nC(t)), e.getAttribute(t));
          },
          scrapeMotionValuesFromProps: nb,
          build(e, t, r, n, i) {
            nO(t, r, n, i.transformTemplate);
          },
          render: nk,
        }),
        nP = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function nT(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (nP.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let nA = (e, t) =>
          nT(e)
            ? nj(t, { enableHardwareAcceleration: !1 })
            : ng(t, { enableHardwareAcceleration: !0 }),
        nM = { renderer: nA, ...rh, ...rQ };
      var n_,
        nR,
        nF = function (e) {
          var t = e.children;
          return (0, l.jsx)(m.O, {
            children: (0, l.jsx)(f.H, {
              children: (0, l.jsx)(h, {
                children: (0, l.jsx)(y.f, {
                  attribute: "class",
                  children: (0, l.jsx)(O, {
                    features: nM,
                    children: (0, l.jsx)(v.p, { children: t }),
                  }),
                }),
              }),
            }),
          });
        },
        nI = r(828),
        nL = r(75964),
        nN = r(5152),
        nV = r.n(nN)()(
          function () {
            return r
              .e(24762)
              .then(r.bind(r, 24762))
              .then(function (e) {
                return e;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [24762];
              },
            },
            ssr: !1,
          }
        ),
        nD = function (e) {
          var t = e.children,
            r = (0, nI.Z)((0, v._)(), 1)[0],
            n = (0, g.useState)(!0),
            i = (n[0], n[1]),
            o = (0, nI.Z)((0, f.j)(), 2),
            a = o[0],
            s = o[1],
            u = (0, nI.Z)(p(), 2);
          return (
            u[0],
            u[1],
            (0, g.useEffect)(function () {
              var e = function () {
                setTimeout(function () {
                  i(!1),
                    setTimeout(function () {
                      i(!0);
                    }, 10);
                }, 200);
              };
              return (
                window.addEventListener("scroll", e),
                function () {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, g.useEffect)(
              function () {
                s(!0);
              },
              [s]
            ),
            (0, l.jsxs)(l.Fragment, {
              children: [
                t,
                (0, l.jsx)(nL.FN, {}),
                a && r
                  ? (0, l.jsx)(nV, {
                      place: "bottom",
                      effect: "solid",
                      wrapper: "span",
                      arrowColor: "white",
                      delayHide: 500,
                      clickable: !0,
                      className:
                        "relative !border-none !border-transparent !p-0",
                      getContent: function (e) {
                        return (0, l.jsx)("span", {
                          className:
                            "pointer-events-auto block h-[calc(100%+1px)] w-[calc(100%+1px)] max-w-[calc(100vw-32px)] select-none rounded-sm border-card bg-white py-2 px-5 text-slate-700 opacity-100 shadow-xl",
                          children: e,
                        });
                      },
                    })
                  : null,
              ],
            })
          );
        },
        nq = r(51351),
        nG = r(24614),
        nU = r(65886),
        nQ = r(41416),
        nz = r(32159),
        nZ = r(6714),
        nH = {
          github: {
            name: "GitHub",
            href: "https://github.com/FelixTellmann",
            Icon: function (e) {
              var t = e.className;
              return (0, l.jsx)(nQ.p, { className: void 0 === t ? "" : t });
            },
          },
          twitter: {
            name: "Twitter",
            href: "https://twitter.com/FelixTellmann",
            Icon: function (e) {
              var t = e.className;
              return (0, l.jsx)(nZ.m, { className: void 0 === t ? "" : t });
            },
          },
          facebook: {
            name: "Facebook",
            href: "https://www.facebook.com/felix.tellmann/",
            Icon: function (e) {
              var t = e.className;
              return (0, l.jsx)(nU.u, { className: void 0 === t ? "" : t });
            },
          },
          linkedin: {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/felixtellmann",
            Icon: function (e) {
              var t = e.className;
              return (0, l.jsx)(nz.n, { className: void 0 === t ? "" : t });
            },
          },
        },
        nB = function (e) {
          var e =
            null !== e
              ? e
              : (0, nq.Z)(TypeError("Cannot destructure undefined"));
          return (0, l.jsx)("footer", {
            className: "print:hidden",
            children: (0, l.jsxs)("div", {
              className:
                "mx-auto max-w-6xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",
              children: [
                (0, l.jsx)("div", {
                  className: "flex justify-center space-x-6 md:order-2",
                  children: Object.values(nH).map(function (e) {
                    var t = e.name,
                      r = e.Icon,
                      n = e.href;
                    return (0,
                    l.jsxs)(nG.r, { href: n, className: "p-1 text-gray-400 hover:text-gray-500 d:text-gray-600 d:hover:text-gray-500", children: [(0, l.jsx)("span", { className: "sr-only", children: t }), (0, l.jsx)(r, { className: "h-5 w-5", "aria-hidden": "true" })] }, t);
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "mt-8 md:order-1 md:mt-0",
                  children: (0, l.jsxs)("small", {
                    className:
                      "block text-center text-sm text-gray-400 d:text-gray-600",
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " Felix Tellmann, All rights reserved.",
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        n$ = r(86010),
        nK = r(47222);
      function nW() {
        return (nW = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nY = function (e) {
          return g.createElement(
            "svg",
            nW(
              {
                style: { minWidth: 60 },
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 354.67 354.67",
              },
              e
            ),
            a ||
              (a = g.createElement(
                "defs",
                null,
                g.createElement(
                  "linearGradient",
                  {
                    id: "logo_svg__b",
                    x1: 403.11,
                    y1: 477.84,
                    x2: 403.11,
                    y2: 714.12,
                    gradientTransform: "rotate(-15.25 -1271.853 1229.872)",
                    gradientUnits: "userSpaceOnUse",
                  },
                  g.createElement("stop", { offset: 0, stopColor: "#14fdee" }),
                  g.createElement("stop", { offset: 1, stopColor: "#01d0ff" })
                ),
                g.createElement(
                  "linearGradient",
                  {
                    id: "logo_svg__a",
                    x1: 355.36,
                    y1: 671.84,
                    x2: 393.92,
                    y2: 671.84,
                    gradientTransform: "rotate(-15.25 -1271.853 1229.872)",
                    gradientUnits: "userSpaceOnUse",
                  },
                  g.createElement("stop", { offset: 0, stopColor: "#0080af" }),
                  g.createElement("stop", { offset: 1, stopColor: "#33b0cc" })
                ),
                g.createElement("linearGradient", {
                  id: "logo_svg__c",
                  x1: 353.65,
                  y1: 542.43,
                  x2: 535.01,
                  y2: 580.98,
                  xlinkHref: "#logo_svg__a",
                }),
                g.createElement("linearGradient", {
                  id: "logo_svg__d",
                  x1: 356.77,
                  y1: 617.02,
                  x2: 458.4,
                  y2: 617.02,
                  xlinkHref: "#logo_svg__a",
                })
              )),
            g.createElement("path", {
              d: "m135.63 206.11.26.11h.07Zm-7.1-4.83c-.27-.28-.54-.57-.8-.87.27.3.53.59.8.87Zm0 0 .18.2.45.43.11.11.38.34.21.19.43.36c.25.2.49.4.75.59l.53.38c.18.14.37.26.57.39l.14.09a6.1 6.1 0 0 0 .54.34q.31.2.63.36l.47.25c.21.12.43.23.65.33l.67.3a21.92 21.92 0 0 1-6.71-4.66Zm7.36 4.94h.07l-.33-.14Zm-7.36-4.94.18.2.45.43.11.11.38.34.21.19.43.36c.25.2.49.4.75.59l.53.38c.18.14.37.26.57.39l.14.09a6.1 6.1 0 0 0 .54.34q.31.2.63.36l.47.25c.21.12.43.23.65.33l.67.3a21.92 21.92 0 0 1-6.71-4.66Zm0 0c-.27-.28-.54-.57-.8-.87.27.3.53.59.8.87ZM285.78 119c-8.56-8.79-15.94-17.38-29.5-13.79l-124.87 34.03c-18.48 5.2-34.23-15-24.19-31.39a20.92 20.92 0 0 1 7-7.07 20.42 20.42 0 0 1 4.61-2.16c1.17-.43 113.51-30.95 114.77-31.33a56 56 0 0 0-52.76-12.94l-69 18.82a56 56 0 0 0-39.4 39.75l-18.22 69.2a56 56 0 0 0 14.72 54c81.13 81 63.48 76.4 174 45.8a56 56 0 0 0 39.4-39.74L300.5 173a56 56 0 0 0-14.72-54Zm-138 151s-.05 0-.05-.05a21.17 21.17 0 0 1-6.31-11.95 8.52 8.52 0 0 1-.14-1 21.4 21.4 0 0 1 12.49-21.86c.32-.14.63-.28 1-.4a21.18 21.18 0 0 1 13.48-.61s0 0 .08 0a21.31 21.31 0 0 1 6.06 2.86A22.11 22.11 0 0 1 177 239s.05 0 .06.06a21.29 21.29 0 0 1 6.12 10.94c.08.34.15.69.2 1 .06.34.1.69.14 1A21.42 21.42 0 0 1 171 273.92a10.2 10.2 0 0 1-1 .4 21.28 21.28 0 0 1-13.49.61s-.05 0-.07 0a21.26 21.26 0 0 1-8.69-5Zm84.13-99.3a21.37 21.37 0 0 1-15.54 18.3l-66.46 18.12h-.16c-.38.11-.77.2-1.16.28l-.43.08a20.73 20.73 0 0 1-5.32.32c-.29 0-.59 0-.87-.07a8.62 8.62 0 0 1-.87-.11c-.29 0-.58-.08-.87-.14l-.83-.17c-.47-.1-.92-.22-1.38-.36l-.7-.22c-.23-.08-.46-.15-.68-.24l-.6-.23-.33-.14-.18-.08-.25-.11a21.8 21.8 0 0 1-6.67-4.64c-.27-.28-.54-.57-.8-.87a5.12 5.12 0 0 1-.36-.43c-.12-.14-.24-.29-.35-.44s-.24-.32-.36-.48-.28-.37-.41-.57a.44.44 0 0 1-.08-.11 1.3 1.3 0 0 1-.1-.15 19.85 19.85 0 0 1-2.68-6 21.29 21.29 0 0 1 14.92-26.11L204.78 148c11-3.22 23.7 3.57 26.51 14.81a20 20 0 0 1 .64 7.84Zm-96.3 35.46.26.11h.07Zm-7.1-4.83.18.2.45.43.11.11.38.34.21.19.43.36c.25.2.49.4.75.59l.53.38c.18.14.37.26.57.39l.14.09a6.1 6.1 0 0 0 .54.34q.31.2.63.36l.47.25c.21.12.43.23.65.33l.67.3a21.92 21.92 0 0 1-6.69-4.71Zm0 0c-.27-.28-.54-.57-.8-.87.29.25.55.54.82.82Z",
              style: { fill: "url(#logo_svg__b)" },
            }),
            g.createElement("path", {
              d: "M188.25 252.59c.08.35.15.7.2 1 .07.35.1.69.14 1.05a21.58 21.58 0 0 1-12.59 22c-.32.14-.64.29-1 .4a21.47 21.47 0 0 1-13.6.61s-.06 0-.08 0a21.75 21.75 0 0 1-7.17-3.66 21.3 21.3 0 0 0 2.32.82s0 0 .07 0a21.28 21.28 0 0 0 13.49-.61 10.2 10.2 0 0 0 1-.4 21.42 21.42 0 0 0 12.5-21.86c0-.34-.08-.69-.14-1 0-.35-.12-.7-.2-1a21.29 21.29 0 0 0-6.12-10.88s-.05 0-.06-.06a22.11 22.11 0 0 0-2.62-2.1 21.43 21.43 0 0 1 7.65 4.65s0 0 .05.05a21.42 21.42 0 0 1 6.16 10.99Z",
              style: { fill: "url(#logo_svg__a)" },
            }),
            g.createElement("path", {
              d: "m302.2 154.91-7.12-13.34c-5.58-10.61-18.26-15.67-29.95-14.33L131 143.12a19 19 0 0 1-15.26-5.35l-.25-.24a21.94 21.94 0 0 0 15.91 1.71l124.87-34.05c13.54-3.6 21 5 29.5 13.79a56 56 0 0 1 16.43 35.93Z",
              style: { fill: "url(#logo_svg__c)" },
            }),
            g.createElement("path", {
              d: "M231.93 170.65A21.37 21.37 0 0 1 216.37 189l-66.46 18.12a21.56 21.56 0 0 1-12.64-.34 21 21 0 0 0 8.91 1.24l69.11-5.13a21.28 21.28 0 0 0 16.64-32.19Z",
              style: { fill: "url(#logo_svg__d)" },
            }),
            g.createElement("path", {
              style: { fill: "none" },
              d: "M0 0h354.67v354.67H0z",
            })
          );
        },
        nX = {
          logo: { href: "/", title: (0, l.jsx)(nY, {}), alt: "Flext Logo" },
          nav: [
            { href: "/", title: "Home", alt: "Country roads..", desktop: !1 },
            {
              href: "/#about",
              title: "About",
              alt: "More about me.",
              desktop: !0,
            },
            {
              href: "/#portfolio",
              title: "Portfolio",
              alt: "Work I've done.",
              desktop: !0,
            },
            {
              href: "/books",
              title: "Books",
              alt: "Books I've read.",
              desktop: !0,
            },
            {
              href: "/resume",
              title: "Resume",
              alt: "My professional resume",
              desktop: !0,
            },
          ],
          profileNav: [],
        },
        nJ = r(11163),
        n0 = function () {
          var e = (0, nJ.useRouter)();
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("nav", {
              className:
                "sm:scrollbar-none header-nav group relative isolate mt-auto hidden h-full justify-center overflow-auto px-2 md:flex",
              children: [
                (0, l.jsx)(nK.d, {}),
                nX.nav
                  .filter(function (e) {
                    return e.desktop;
                  })
                  .map(function (t, r) {
                    var n = e.asPath.split(/[#?]/)[0] === t.href;
                    return (0,
                    l.jsx)("div", { className: "my-auto flex h-full items-center px-2", children: (0, l.jsx)(nG.r, { href: t.href, className: (0, n$.Z)("relative z-10 flex rounded-md border-2 border-transparent py-1.5 px-4 text-gray-500 outline-none transition-all hfa:text-gray-900 hfa:outline-none d:text-gray-300 d:hfa:text-gray-50", n && "border-gray-700/5 bg-gray-100 bg-clip-padding d:border-gray-50/10 d:bg-gray-800 group-hfa:bg-gray-200/30"), children: (0, l.jsx)("span", { className: "text-sm font-medium ", children: t.title }) }) }, t.href + t.title + r);
                  }),
              ],
            }),
          });
        },
        n1 = r(29815),
        n2 = function (e) {
          var t = e.active,
            r = e.border,
            n = e.size,
            i = e.onClick;
          return (0, l.jsxs)("button", {
            type: "button",
            onClick: i,
            className: "relative z-50 p-1",
            style: { "--nav-icon-size": n, "--nav-icon-border": r },
            children: [
              (0, l.jsx)("span", {
                className: "sr-only",
                children: "Mobile Navigation",
              }),
              (0, l.jsx)("i", {
                className: (0, n$.Z)("burger-menu", t && "active"),
                children: (0, l.jsx)("div", {}),
              }),
            ],
          });
        },
        n5 = function (e) {
          var t = e.showNav,
            r = e.setShowNav,
            n = (0, g.useCallback)(
              function () {
                r(function (e) {
                  return !e;
                });
              },
              [r]
            );
          return (0, l.jsxs)("div", {
            className: "md:hidden",
            children: [
              (0, l.jsx)(n2, {
                size: "24px",
                border: "2px",
                onClick: n,
                active: t,
              }),
              (0, l.jsxs)("div", {
                className: (0, n$.Z)(
                  " fixed top-0 left-0 h-screen w-full",
                  t
                    ? "nav-active opacity-100"
                    : "pointer-events-none select-none opacity-0 delay-[900ms]"
                ),
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "absolute inset-0 -z-50 grid grid-cols-[1rem_repeat(16,minmax(0,1fr))_1rem]",
                    children: (0, n1.Z)(Array(18)).map(function (e, r) {
                      return (0,
                      l.jsx)("div", { className: (0, n$.Z)("pointer-events-none relative h-full -translate-y-full select-none bg-slate-900 transition-all duration-300 ease-linear", 0 === r && "relative before:absolute b:top-0 b:right-0 b:h-full b:w-px b:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] b:bg-[length:1px_8px] b:opacity-20", 17 === r && "relative before:absolute b:top-0 b:left-0 b:h-full b:w-px b:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] b:bg-[length:1px_8px] b:opacity-20"), style: { transitionDelay: t ? "".concat(0.01 * r, "s") : "".concat(0.025 * r, "s"), "--tw-translate-y": t ? "0%" : "-100%" } }, r);
                    }),
                  }),
                  (0, l.jsxs)("section", {
                    className: "mt-28 p-8 spacing-24",
                    children: [
                      (0, l.jsx)("nav", {
                        className: "relative text-white spacing-6",
                        children: nX.nav.map(function (e, n) {
                          return (0, l.jsxs)(
                            nG.r,
                            {
                              href: e.href,
                              className:
                                "group flex items-baseline justify-between py-2 text-gray-300 opacity-0 opacity-0 transition-opacity delay-200 hfa:text-sky-400 [.nav-active_&]:opacity-100",
                              onClick: function () {
                                return r(!1);
                              },
                              children: [
                                (0, l.jsx)("span", {
                                  className:
                                    "-translate-x-[200%] text-[17px] font-medium [.nav-active_&]:translate-x-0",
                                  style: {
                                    transition: t
                                      ? "transform 0.15s ".concat(
                                          0.4 + 0.05 * n,
                                          "s"
                                        )
                                      : "transform 0.15s ".concat(
                                          0.05 * n,
                                          "s"
                                        ),
                                  },
                                  children: e.title,
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "mx-2 h-px flex-1 bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] opacity-0 transition-opacity [.nav-active_&]:opacity-40 [.nav-active_&]:delay-500",
                                }),
                                (0, l.jsx)("small", {
                                  className:
                                    "translate-x-[200%] text-gray-400 [.nav-active_&]:translate-x-0",
                                  style: {
                                    transition: t
                                      ? "transform 0.15s ".concat(
                                          0.4 + 0.05 * n,
                                          "s"
                                        )
                                      : "transform 0.15s ".concat(
                                          0.05 * n,
                                          "s"
                                        ),
                                  },
                                  children: e.alt,
                                }),
                              ],
                            },
                            e.href
                          );
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "flex translate-y-8 items-center justify-center opacity-0 [.nav-active_&]:translate-y-0 [.nav-active_&]:opacity-100 [.nav-active_&]:delay-500",
                        style: {
                          transition: t
                            ? "transform 0.15s 0.35s, opacity 0.2s 0.35s"
                            : "transform 0.15s ".concat(
                                0.05,
                                "s, opacity 0.2s 0.05s"
                              ),
                        },
                        children: (0, l.jsx)("button", {
                          className:
                            "button-rainbow whitespace-nowrap border-[4px] border-opacity-40 px-10 py-3 font-medium tracking-tight text-gray-900 ",
                          children: "Lets work",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      let n3 = (0, g.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
      function n4(e) {
        let t = (0, g.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
      function n6(e) {
        let t = n4(() => tX(e)),
          { isStatic: r } = (0, g.useContext)(n3);
        if (r) {
          let [, n] = (0, g.useState)(e);
          (0, g.useEffect)(() => t.onChange(n), []);
        }
        return t;
      }
      let n7 = (e) => "object" == typeof e && e.mix,
        n9 = (e) => (n7(e) ? e.mix : void 0),
        n8 = rg ? g.useLayoutEffect : g.useEffect;
      function ie(e, t, r, n) {
        let i =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  r = t ? 0 : -1,
                  n = e[0 + r],
                  i = e[1 + r],
                  o = e[2 + r],
                  a = e[3 + r],
                  s = eF(i, o, { mixer: n9(o[0]), ...a });
                return t ? s(n) : s;
              })(t, r, n);
        return Array.isArray(e) ? it(e, i) : it([e], ([e]) => i(e));
      }
      function it(e, t) {
        let r = n4(() => []);
        return (function (e, t) {
          var r, n;
          let i = n6(t()),
            o = () => i.set(t());
          return (
            o(),
            (n = () => ti.update(o, !1, !0)),
            n8(() => {
              let t = e.map((e) => e.onChange(n));
              return () => t.forEach((e) => e());
            }),
            i
          );
        })(e, () => {
          r.length = 0;
          let n = e.length;
          for (let i = 0; i < n; i++) r[i] = e[i].get();
          return t(r);
        });
      }
      let ir = (0, g.createContext)({});
      function ii(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let io = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        ia = 1,
        is = (0, g.createContext)({});
      class iu extends g.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: e, props: t } = this.props;
          return e && e.setProps(t), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      let il = (0, g.createContext)({}),
        ic = Symbol.for("motionComponentSymbol"),
        id = () => ({
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        });
      function ih(e, t, r) {
        for (let n in t) re(t[n]) || np(n, r) || (e[n] = t[n]);
      }
      function ip(e, t, r) {
        let n = {},
          i = (function (e, t, r) {
            let n = e.style || {},
              i = {};
            return (
              ih(i, n, e),
              Object.assign(
                i,
                (function ({ transformTemplate: e }, t, r) {
                  return (0, g.useMemo)(() => {
                    let n = id();
                    return (
                      r6(n, t, { enableHardwareAcceleration: !r }, e),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [t]);
                })(e, t, r)
              ),
              e.transformValues ? e.transformValues(i) : i
            );
          })(e, t, r);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((n.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
          (n.style = i),
          n
        );
      }
      let im = new Set([
        "initial",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onHoverStart",
        "onHoverEnd",
        "layoutScroll",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "animate",
        "exit",
        "variants",
        "whileHover",
        "whileTap",
        "whileFocus",
        "whileDrag",
        "whileInView",
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd",
      ]);
      function iv(e) {
        return im.has(e);
      }
      let iy = (e) => !iv(e);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (iy = (e) => (e.startsWith("on") ? !iv(e) : n(e)));
      } catch (ig) {}
      let ib = () => ({ ...id(), attrs: {} });
      function iw(e, t) {
        let r = (0, g.useMemo)(() => {
          let r = ib();
          return (
            nO(r, t, { enableHardwareAcceleration: !1 }, e.transformTemplate),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [t]);
        if (e.style) {
          let n = {};
          ih(n, e.style, e), (r.style = { ...n, ...r.style });
        }
        return r;
      }
      function ix(e) {
        let t = re(e) ? e.get() : e;
        return tq(t) ? t.toValue() : t;
      }
      let iE = (e) => (t, r) => {
          let n = (0, g.useContext)(ir),
            i = (0, g.useContext)(k),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: r,
                },
                n,
                i,
                o
              ) {
                let a = {
                  latestValues: (function (e, t, r, n) {
                    let i = {},
                      o = n(e);
                    for (let a in o) i[a] = ix(o[a]);
                    let { initial: s, animate: u } = e,
                      l = r$(e),
                      c = rK(e);
                    t &&
                      c &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === s && (s = t.initial),
                      void 0 === u && (u = t.animate));
                    let f = !!r && !1 === r.initial;
                    f = f || !1 === s;
                    let d = f ? u : s;
                    if (d && "boolean" != typeof d && !S(d)) {
                      let h = Array.isArray(d) ? d : [d];
                      h.forEach((t) => {
                        let r = t3(e, t);
                        if (!r) return;
                        let { transitionEnd: n, transition: o, ...a } = r;
                        for (let s in a) {
                          let u = a[s];
                          if (Array.isArray(u)) {
                            let l = f ? u.length - 1 : 0;
                            u = u[l];
                          }
                          null !== u && (i[s] = u);
                        }
                        for (let c in n) i[c] = n[c];
                      });
                    }
                    return i;
                  })(n, i, o, e),
                  renderState: t(),
                };
                return r && (a.mount = (e) => r(n, e, a)), a;
              })(e, t, n, i);
          return r ? o() : n4(o);
        },
        iO = {
          useVisualState: iE({
            scrapeMotionValuesFromProps: nb,
            createRenderState: ib,
            onMount(e, t, { renderState: r, latestValues: n }) {
              try {
                r.dimensions =
                  "function" == typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              nO(r, n, { enableHardwareAcceleration: !1 }, e.transformTemplate),
                nk(t, r);
            },
          }),
        },
        iC = {
          useVisualState: iE({
            scrapeMotionValuesFromProps: nm,
            createRenderState: id,
          }),
        },
        iS = (function (e) {
          function t(t, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              projectionNodeConstructor: r,
              useRender: n,
              useVisualState: i,
              Component: o,
            }) {
              e && E(e);
              let a = (0, g.forwardRef)(function (a, s) {
                var u, l, c;
                let f = {
                    ...(0, g.useContext)(n3),
                    ...a,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, g.useContext)(is).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(a),
                  },
                  { isStatic: d } = f,
                  h = null,
                  p = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if (r$(e)) {
                        let { initial: r, animate: n } = e;
                        return {
                          initial: !1 === r || ra(r) ? r : void 0,
                          animate: ra(n) ? n : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, g.useContext)(ir));
                    return (0, g.useMemo)(
                      () => ({ initial: t, animate: r }),
                      [ii(t), ii(r)]
                    );
                  })(a),
                  m = d
                    ? void 0
                    : n4(() => {
                        if (io.hasEverUpdated) return ia++;
                      }),
                  v = i(a, d);
                if (!d && rg) {
                  p.visualElement = (function (e, t, r, n) {
                    let i = (0, g.useContext)(ir).visualElement,
                      o = (0, g.useContext)(b),
                      a = (0, g.useContext)(k),
                      s = (0, g.useContext)(n3).reducedMotion,
                      u = (0, g.useRef)(void 0);
                    (n = n || o.renderer),
                      !u.current &&
                        n &&
                        (u.current = n(e, {
                          visualState: t,
                          parent: i,
                          props: r,
                          presenceId: a ? a.id : void 0,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: s,
                        }));
                    let l = u.current;
                    return (
                      n8(() => {
                        l && l.syncRender();
                      }),
                      (0, g.useEffect)(() => {
                        l &&
                          l.animationState &&
                          l.animationState.animateChanges();
                      }),
                      n8(() => () => l && l.notifyUnmount(), []),
                      l
                    );
                  })(o, v, f, t);
                  let y = (0, g.useContext)(b).strict,
                    w = (0, g.useContext)(il);
                  p.visualElement &&
                    (h = p.visualElement.loadFeatures(
                      f,
                      y,
                      e,
                      m,
                      r || x.projectionNodeConstructor,
                      w
                    ));
                }
                return g.createElement(
                  iu,
                  { visualElement: p.visualElement, props: f },
                  h,
                  g.createElement(
                    ir.Provider,
                    { value: p },
                    n(
                      o,
                      a,
                      m,
                      ((l = p.visualElement),
                      (c = s),
                      (0, g.useCallback)(
                        (e) => {
                          e && v.mount && v.mount(e),
                            l && (e ? l.mount(e) : l.unmount()),
                            c &&
                              ("function" == typeof c
                                ? c(e)
                                : rW(c) && (c.current = e));
                        },
                        [l]
                      )),
                      v,
                      d,
                      p.visualElement
                    )
                  )
                );
              });
              return (a[ic] = o), a;
            })(e(t, r));
          }
          if ("undefined" == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, {
            get: (e, n) => (r.has(n) || r.set(n, t(n)), r.get(n)),
          });
        })(function (e, { forwardMotionProps: t = !1 }, r, n, i) {
          let o = nT(e) ? iO : iC;
          return {
            ...o,
            preloadedFeatures: r,
            useRender: (function (e = !1) {
              let t = (t, r, n, i, { latestValues: o }, a) => {
                let s = nT(t) ? iw : ip,
                  u = s(r, o, a),
                  l = (function (e, t, r) {
                    let n = {};
                    for (let i in e)
                      (iy(i) ||
                        (!0 === r && iv(i)) ||
                        (!t && !iv(i)) ||
                        (e.draggable && i.startsWith("onDrag"))) &&
                        (n[i] = e[i]);
                    return n;
                  })(r, "string" == typeof t, e),
                  c = { ...l, ...u, ref: i };
                return (
                  n && (c["data-projection-id"] = n), (0, g.createElement)(t, c)
                );
              };
              return t;
            })(t),
            createVisualElement: n,
            projectionNodeConstructor: i,
            Component: e,
          };
        });
      var ik = function () {
          var e = (0, y.F)(),
            t = e.theme;
          e.setTheme;
          var r = "dark" === t,
            n = { checked: { scale: 0 }, unchecked: { scale: 1 } },
            i = n6(r ? 1 : 0),
            o = n6(r ? 0 : 1),
            a = ie(i, [0.6, 1], [0, 1]),
            s = ie(o, [0.6, 1], [0, 1]);
          return (0, l.jsx)(iS.div, {
            animate: r ? "checked" : "unchecked",
            children: (0, l.jsxs)(iS.svg, {
              width: "18",
              height: "18",
              viewBox: "0 0 25 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsx)(iS.path, {
                  d: "M12.4058 17.7625C15.1672 17.7625 17.4058 15.5239 17.4058 12.7625C17.4058 10.0011 15.1672 7.76251 12.4058 7.76251C9.64434 7.76251 7.40576 10.0011 7.40576 12.7625C7.40576 15.5239 9.64434 17.7625 12.4058 17.7625Z",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M12.4058 1.76251V3.76251",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M12.4058 21.7625V23.7625",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M4.62598 4.98248L6.04598 6.40248",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M18.7656 19.1225L20.1856 20.5425",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M1.40576 12.7625H3.40576",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M21.4058 12.7625H23.4058",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M4.62598 20.5425L6.04598 19.1225",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M18.7656 6.40248L20.1856 4.98248",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  variants: n,
                  custom: r,
                  transition: { duration: 0.7 },
                  style: { pathLength: s, scale: o },
                }),
                (0, l.jsx)(iS.path, {
                  d: "M21.1918 13.2013C21.0345 14.9035 20.3957 16.5257 19.35 17.8781C18.3044 19.2305 16.8953 20.2571 15.2875 20.8379C13.6797 21.4186 11.9398 21.5294 10.2713 21.1574C8.60281 20.7854 7.07479 19.9459 5.86602 18.7371C4.65725 17.5283 3.81774 16.0003 3.4457 14.3318C3.07367 12.6633 3.18451 10.9234 3.76526 9.31561C4.346 7.70783 5.37263 6.29868 6.72501 5.25307C8.07739 4.20746 9.69959 3.56862 11.4018 3.41132C10.4052 4.75958 9.92564 6.42077 10.0503 8.09273C10.175 9.76469 10.8957 11.3364 12.0812 12.5219C13.2667 13.7075 14.8384 14.4281 16.5104 14.5528C18.1823 14.6775 19.8435 14.1979 21.1918 13.2013Z",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transition: { duration: 0.7 },
                  variants: { checked: { scale: 1 }, unchecked: { scale: 0 } },
                  custom: r,
                  style: { pathLength: a, scale: i },
                }),
              ],
            }),
          });
        },
        ij = function (e) {
          var t = e.showNav,
            r = (0, y.F)(),
            n = r.theme,
            i = r.setTheme;
          return (0, l.jsxs)("nav", {
            className: "z-10 ml-auto flex gap-1 pl-4",
            children: [
              (0, l.jsxs)("button", {
                type: "button",
                className: (0, n$.Z)(
                  "rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900",
                  t ? "h:text-gray-200" : "h:text-gray-900"
                ),
                onClick: function () {
                  return i("dark" === n ? "light" : "dark");
                },
                children: [
                  (0, l.jsx)("span", {
                    className: "sr-only",
                    children: "Switch Color Theme",
                  }),
                  (0, l.jsx)(ik, {}),
                ],
              }),
              (0, l.jsxs)(nG.r, {
                href: "https://github.com/FelixTellmann",
                className: (0, n$.Z)(
                  "rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900",
                  t ? "h:text-gray-200" : "h:text-gray-900"
                ),
                children: [
                  (0, l.jsx)("span", {
                    className: "sr-only",
                    children: "Github",
                  }),
                  (0, l.jsx)(nQ.p, { className: "h-5 w-5" }),
                ],
              }),
              (0, l.jsx)(nG.r, {
                target: "_blank",
                href: "mailto:hello@flext.dev",
                className:
                  "button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-gray-500 md:flex",
                children: "Lets work",
              }),
            ],
          });
        },
        iP = function (e) {
          var e =
              null !== e
                ? e
                : (0, nq.Z)(TypeError("Cannot destructure undefined")),
            t = (0, g.useState)(!1),
            r = t[0],
            n = t[1];
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("header", {
                className:
                  "fixed inset-x-0 top-0 z-50 h-20 w-full border-b border-gray-800/10 bg-white/50 backdrop-blur d:border-gray-100/10 d:bg-gray-900/40 print:hidden",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "mx-auto flex h-full max-w-6xl grid-cols-[210px_1fr_210px] items-center gap-1 px-4 md:grid md:gap-4 md:px-8",
                    children: [
                      (0, l.jsxs)(nG.r, {
                        href: "/",
                        className: "z-10 w-min",
                        "data-tip": "Hi, I'm Felix. Welcome to my site.",
                        "data-delay-show": 2e3,
                        children: [
                          (0, l.jsx)("span", {
                            className: "sr-only",
                            children: "Flext.dev Logo",
                          }),
                          nX.logo.title,
                        ],
                      }),
                      (0, l.jsx)(n0, {}),
                      (0, l.jsx)(ij, { showNav: r }),
                      (0, l.jsx)(n5, { showNav: r, setShowNav: n }),
                      " ",
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "background pointer-events-none absolute inset-0 z-0 select-none ",
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className:
                  "pointer-events-none h-20 select-none transition print:hidden",
              }),
            ],
          });
        },
        iT = {
          title:
            "Felix Tellmann - Fullstack Developer - TS, Next, Tailwind, Shopify",
          url: "https://flext.dev",
          description:
            "I'm a self-taught Full-stack developer and entrepreneur living in Cape Town. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.",
          siteName: "Flext.dev",
          github: "https://github.com/FelixTellmann/flext",
          avatar: "https://avatars.githubusercontent.com/u/22034038",
          author: "Felix Tellmann",
          twitter: {
            handle: "@Tellmann",
            site: "@FelixTellmann",
            cardType: "summary_large_image",
          },
          openGraph: {
            type: "website",
            locale: "en_IE",
            url: "https://flext.dev",
            site_name: "Flext.dev",
            title: "Felix Tellmann",
            description:
              "Lets make things better with quality code - Learn Web Development / API's / Automations / Serverless / Architecture / and more.",
            images: [
              {
                url: "https://flext.dev/images/sharing-image.jpg",
                alt: "Felix Tellmann - Full-stack Engineer - Next.js, Typescript, Tailwindcss, Shopify",
                width: 1200,
                height: 630,
              },
            ],
          },
        },
        iA = r(9008),
        iM = r.n(iA);
      function i_() {
        return (i_ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function iR(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var iF,
        iI = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        iL = function (e, t, r) {
          void 0 === t && (t = []);
          var n = void 0 === r ? {} : r,
            i = n.defaultWidth,
            o = n.defaultHeight;
          return t.reduce(function (t, r, n) {
            return (
              t.push(
                g.createElement("meta", {
                  key: "og:" + e + ":0" + n,
                  property: "og:" + e,
                  content: r.url,
                })
              ),
              r.alt &&
                t.push(
                  g.createElement("meta", {
                    key: "og:" + e + ":alt0" + n,
                    property: "og:" + e + ":alt",
                    content: r.alt,
                  })
                ),
              r.secureUrl &&
                t.push(
                  g.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + n,
                    property: "og:" + e + ":secure_url",
                    content: r.secureUrl.toString(),
                  })
                ),
              r.type &&
                t.push(
                  g.createElement("meta", {
                    key: "og:" + e + ":type0" + n,
                    property: "og:" + e + ":type",
                    content: r.type.toString(),
                  })
                ),
              r.width
                ? t.push(
                    g.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: r.width.toString(),
                    })
                  )
                : i &&
                  t.push(
                    g.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: i.toString(),
                    })
                  ),
              r.height
                ? t.push(
                    g.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: r.height.toString(),
                    })
                  )
                : o &&
                  t.push(
                    g.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: o.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        iN = function (e) {
          var t,
            r,
            n,
            i,
            o,
            a = [];
          e.titleTemplate && (iI.templateTitle = e.titleTemplate);
          var s = "";
          e.title
            ? ((s = e.title),
              iI.templateTitle &&
                (s = iI.templateTitle.replace(/%s/g, function () {
                  return s;
                })))
            : e.defaultTitle && (s = e.defaultTitle),
            s && a.push(g.createElement("title", { key: "title" }, s));
          var u = e.noindex || iI.noindex || e.dangerouslySetAllPagesToNoIndex,
            l = e.nofollow || iI.nofollow || e.dangerouslySetAllPagesToNoFollow,
            c = "";
          if (e.robotsProps) {
            var f = e.robotsProps,
              d = f.nosnippet,
              h = f.maxSnippet,
              p = f.maxImagePreview,
              m = f.maxVideoPreview,
              v = f.noarchive,
              y = f.noimageindex,
              b = f.notranslate,
              w = f.unavailableAfter;
            c =
              (d ? ",nosnippet" : "") +
              (h ? ",max-snippet:" + h : "") +
              (p ? ",max-image-preview:" + p : "") +
              (v ? ",noarchive" : "") +
              (w ? ",unavailable_after:" + w : "") +
              (y ? ",noimageindex" : "") +
              (m ? ",max-video-preview:" + m : "") +
              (b ? ",notranslate" : "");
          }
          if (
            (u || l
              ? (e.dangerouslySetAllPagesToNoIndex && (iI.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (iI.nofollow = !0),
                a.push(
                  g.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (u ? "noindex" : "index") +
                      "," +
                      (l ? "nofollow" : "follow") +
                      c,
                  })
                ))
              : a.push(
                  g.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + c,
                  })
                ),
            e.description &&
              a.push(
                g.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.mobileAlternate &&
              a.push(
                g.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                a.push(
                  g.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                a.push(
                  g.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                a.push(
                  g.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                a.push(
                  g.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              a.push(
                g.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || s) &&
              a.push(
                g.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (i = e.openGraph) ? void 0 : i.title) || s,
                })
              ),
            ((null != (r = e.openGraph) && r.description) || e.description) &&
              a.push(
                g.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (o = e.openGraph) ? void 0 : o.description) ||
                    e.description,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                a.push(
                  g.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var x = e.openGraph.type.toLowerCase();
              a.push(
                g.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: x,
                })
              ),
                "profile" === x && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      a.push(
                        g.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      a.push(
                        g.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      a.push(
                        g.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      a.push(
                        g.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === x && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      a.push(
                        g.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      a.push(
                        g.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === x && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      a.push(
                        g.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      a.push(
                        g.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      a.push(
                        g.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      a.push(
                        g.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === x ||
                      "video.episode" === x ||
                      "video.tv_show" === x ||
                      "video.other" === x) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          a.push(
                            g.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            a.push(
                              g.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      a.push(
                        g.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      a.push(
                        g.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        a.push(
                          g.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      a.push(
                        g.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (iI.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (iI.defaultOpenGraphImageHeight =
                  e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                a.push.apply(
                  a,
                  iL("image", e.openGraph.images, {
                    defaultWidth: iI.defaultOpenGraphImageWidth,
                    defaultHeight: iI.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (iI.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (iI.defaultOpenGraphVideoHeight =
                  e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                a.push.apply(
                  a,
                  iL("video", e.openGraph.videos, {
                    defaultWidth: iI.defaultOpenGraphVideoWidth,
                    defaultHeight: iI.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.locale &&
                a.push(
                  g.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                a.push(
                  g.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              a.push(
                g.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, r, n;
                a.push(
                  g.createElement(
                    "meta",
                    i_(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null !=
                            (r = null != (n = e.keyOverride) ? n : e.name)
                              ? r
                              : e.property)
                            ? t
                            : e.httpEquiv),
                      },
                      e
                    )
                  )
                );
              }),
            null != (n = e.additionalLinkTags) &&
              n.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                a.push(
                  g.createElement(
                    "link",
                    i_(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                );
              }),
            a
          );
        },
        iV = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            iR(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                r = e.titleTemplate,
                n = e.defaultTitle,
                i = e.dangerouslySetAllPagesToNoIndex,
                o = e.dangerouslySetAllPagesToNoFollow,
                a = e.description,
                s = e.canonical,
                u = e.facebook,
                l = e.openGraph,
                c = e.additionalMetaTags,
                f = e.twitter,
                d = e.defaultOpenGraphImageWidth,
                h = e.defaultOpenGraphImageHeight,
                p = e.defaultOpenGraphVideoWidth,
                m = e.defaultOpenGraphVideoHeight,
                v = e.mobileAlternate,
                y = e.languageAlternates,
                b = e.additionalLinkTags,
                w = e.robotsProps;
              return g.createElement(
                iM(),
                null,
                iN({
                  title: t,
                  titleTemplate: r,
                  defaultTitle: n,
                  dangerouslySetAllPagesToNoIndex: void 0 !== i && i,
                  dangerouslySetAllPagesToNoFollow: void 0 !== o && o,
                  description: a,
                  canonical: s,
                  facebook: u,
                  openGraph: l,
                  additionalMetaTags: c,
                  twitter: f,
                  defaultOpenGraphImageWidth: d,
                  defaultOpenGraphImageHeight: h,
                  defaultOpenGraphVideoWidth: p,
                  defaultOpenGraphVideoHeight: m,
                  mobileAlternate: v,
                  languageAlternates: y,
                  additionalLinkTags: b,
                  robotsProps: w,
                })
              );
            }),
            t
          );
        })(g.Component);
      !(function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          iR(t, e),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.title,
              r = e.noindex,
              n = e.nofollow,
              i = e.robotsProps,
              o = e.description,
              a = e.canonical,
              s = e.openGraph,
              u = e.facebook,
              l = e.twitter,
              c = e.additionalMetaTags,
              f = e.titleTemplate,
              d = e.defaultTitle,
              h = e.mobileAlternate,
              p = e.languageAlternates,
              m = e.additionalLinkTags;
            return g.createElement(
              iM(),
              null,
              iN({
                title: t,
                noindex: void 0 !== r && r,
                nofollow: n,
                robotsProps: i,
                description: o,
                canonical: a,
                facebook: u,
                openGraph: s,
                additionalMetaTags: c,
                twitter: l,
                titleTemplate: f,
                defaultTitle: d,
                mobileAlternate: h,
                languageAlternates: p,
                additionalLinkTags: m,
              })
            );
          }),
          t
        );
      })(g.Component),
        RegExp(
          "[" +
            Object.keys(
              Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;",
              })
            ).join("") +
            "]",
          "g"
        ),
        r(76339);
      var iD = function (e) {
          var t = e.children;
          return (0, l.jsx)(nF, { children: (0, l.jsx)(nD, { children: t }) });
        },
        iq = function (e) {
          var t = e.pageProps,
            r = e.Component,
            n = (0, nJ.useRouter)(),
            i = (0, g.useState)(!0),
            o = i[0],
            a = i[1];
          return ((0, g.useEffect)(function () {
            window &&
              (a(!1),
              console.log(
                "%cHEY YOU! I see you sneaking in my code. This Page is custom built by Felix Tellmann. I mainly used Next.js, TailwindCSS, Typescript, Vercel, and TRPC as the main tech here. It's something I've worked hard on so please do not copy it directly. LEARN FROM IT AND MAKE IT YOUR OWN. Questions? Just drop me an email at hello@flext.dev! You can find the repo learning purposes for the site here: https://github.com/FelixTellmann/flext",
                "background: rgb(0,0,0);color: #fafafa;font-size: 24px;font-weight: bold;padding: 25px 10px;text-align: center;text-shadow: 2px 2px 0 rgba(45, 45, 45);"
              ));
          }, []),
          o)
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsxs)(iD, {
                children: [
                  (0, l.jsx)(
                    iV,
                    (0, u.Z)((0, s.Z)({}, iT), {
                      canonical: "".concat(iT.url).concat(n.asPath),
                      twitter: iT.twitter,
                      title: iT.title,
                      description: iT.description,
                      openGraph: iT.openGraph,
                    })
                  ),
                  (0, l.jsx)(iP, {}),
                  (0, l.jsx)("main", {
                    className: "min-h-screen print:!mx-auto print:!w-[1024px]",
                    children: (0, l.jsx)(r, (0, s.Z)({}, t)),
                  }),
                  (0, l.jsx)(nB, {}),
                ],
              });
        },
        iG = c.SX.withTRPC(iq);
    },
    76339: function () {},
    77663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                i = (e.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (n) {
                  r = a;
                }
              })();
              var u = [],
                l = !1,
                c = -1;
              function f() {
                l &&
                  n &&
                  ((l = !1),
                  n.length ? (u = n.concat(u)) : (c = -1),
                  u.length && d());
              }
              function d() {
                if (!l) {
                  var e = s(f);
                  l = !0;
                  for (var t = u.length; t; ) {
                    for (n = u, u = []; ++c < t; ) n && n[c].run();
                    (c = -1), (t = u.length);
                  }
                  (n = null),
                    (l = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === a || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (n) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                u.push(new h(e, t)), 1 !== u.length || l || s(d);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var i = r[e];
          if (void 0 !== i) return i.exports;
          var o = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e](o, o.exports, n), (a = !1);
          } finally {
            a && delete r[e];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(229);
        e.exports = i;
      })();
    },
    5152: function (e, t, r) {
      e.exports = r(90638);
    },
    9008: function (e, t, r) {
      e.exports = r(5443);
    },
    41664: function (e, t, r) {
      e.exports = r(48418);
    },
    11163: function (e, t, r) {
      e.exports = r(90387);
    },
    53250: function (e, t, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(67294),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = n.useState,
        a = n.useEffect,
        s = n.useLayoutEffect,
        u = n.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (n) {
          return !0;
        }
      }
      function c(e, t) {
        return t();
      }
      var f =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? c
          : function (e, t) {
              var r = t(),
                n = o({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                c = n[1];
              return (
                s(
                  function () {
                    (i.value = r), (i.getSnapshot = t), l(i) && c({ inst: i });
                  },
                  [e, r, t]
                ),
                a(
                  function () {
                    return (
                      l(i) && c({ inst: i }),
                      e(function () {
                        l(i) && c({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                u(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : f;
    },
    50139: function (e, t, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(67294),
        i = r(61688),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        s = n.useRef,
        u = n.useEffect,
        l = n.useMemo,
        c = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var f = s(null);
        if (null === f.current) {
          var d = { hasValue: !1, value: null };
          f.current = d;
        } else d = f.current;
        var h = a(
          e,
          (f = l(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (a = e), (e = n(e)), void 0 !== i && d.hasValue)
                  ) {
                    var t = d.value;
                    if (i(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), o(a, e))) return t;
                var r = n(e);
                return void 0 !== i && i(t, r) ? t : ((a = e), (s = r));
              }
              var a,
                s,
                u = !1,
                l = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, r, n, i]
          ))[0],
          f[1]
        );
        return (
          u(
            function () {
              (d.hasValue = !0), (d.value = h);
            },
            [h]
          ),
          c(h),
          h
        );
      };
    },
    61688: function (e, t, r) {
      "use strict";
      e.exports = r(53250);
    },
    52798: function (e, t, r) {
      "use strict";
      e.exports = r(50139);
    },
    36902: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return c;
        },
      });
      let n = (e) => {
          let t,
            r = new Set(),
            n = (e, n) => {
              let i = "function" == typeof e ? e(t) : e;
              if (i !== t) {
                let o = t;
                (t = (null != n ? n : "object" != typeof i)
                  ? i
                  : Object.assign({}, t, i)),
                  r.forEach((e) => e(t, o));
              }
            },
            i = () => t,
            o = (e) => (r.add(e), () => r.delete(e)),
            a = () => r.clear(),
            s = { setState: n, getState: i, subscribe: o, destroy: a };
          return (t = e(n, i, s)), s;
        },
        i = (e) => (e ? n(e) : n);
      var o = r(67294),
        a = r(52798);
      let { useSyncExternalStoreWithSelector: s } = a,
        u = (e) => {
          let t = "function" == typeof e ? i(e) : e,
            r = (e, r) =>
              (function (e, t = e.getState, r) {
                let n = s(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getState,
                  t,
                  r
                );
                return (0, o.useDebugValue)(n), n;
              })(t, e, r);
          return Object.assign(r, t), r;
        },
        l = (e) => (e ? u(e) : u);
      var c = l;
    },
    73781: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return o;
        },
      });
      var n = r(67294),
        i = r(3855);
      let o = function (e) {
        let t = (0, i.E)(e);
        return n.useCallback((...e) => t.current(...e), [t]);
      };
    },
    41173: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return o;
        },
      });
      var n = r(67294);
      let i = "undefined" == typeof window || "undefined" == typeof document,
        o = i ? n.useEffect : n.useLayoutEffect;
    },
    3855: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var n = r(67294),
        i = r(41173);
      function o(e) {
        let t = (0, n.useRef)(e);
        return (
          (0, i.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    82180: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return o;
        },
      });
      var n = r(67294);
      let i = { serverHandoffComplete: !1 };
      function o() {
        let [e, t] = (0, n.useState)(i.serverHandoffComplete);
        return (
          (0, n.useEffect)(() => {
            !0 !== e && t(!0);
          }, [e]),
          (0, n.useEffect)(() => {
            !1 === i.serverHandoffComplete && (i.serverHandoffComplete = !0);
          }, []),
          e
        );
      }
    },
    23784: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return a;
        },
      });
      var n = r(67294),
        i = r(73781);
      let o = Symbol();
      function a(...e) {
        let t = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          t.current = e;
        }, [e]);
        let r = (0, i.z)((e) => {
          for (let r of t.current)
            null != r && ("function" == typeof r ? r(e) : (r.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[o]))
          ? void 0
          : r;
      }
    },
    32984: function (e, t, r) {
      "use strict";
      function n(e, t, ...r) {
        if (e in t) {
          let i = t[e];
          return "function" == typeof i ? i(...r) : i;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, n), o);
      }
      r.d(t, {
        E: function () {
          return n;
        },
      });
    },
    12351: function (e, t, r) {
      "use strict";
      r.d(t, {
        AN: function () {
          return s;
        },
        l4: function () {
          return u;
        },
        oA: function () {
          return h;
        },
        sY: function () {
          return l;
        },
        yV: function () {
          return d;
        },
      });
      var n,
        i,
        o = r(67294),
        a = r(32984),
        s =
          (((n = s || {})[(n.None = 0)] = "None"),
          (n[(n.RenderStrategy = 1)] = "RenderStrategy"),
          (n[(n.Static = 2)] = "Static"),
          n),
        u =
          (((i = u || {})[(i.Unmount = 0)] = "Unmount"),
          (i[(i.Hidden = 1)] = "Hidden"),
          i);
      function l({
        ourProps: e,
        theirProps: t,
        slot: r,
        defaultTag: n,
        features: i,
        visible: o = !0,
        name: s,
      }) {
        let u = f(t, e);
        if (o) return c(u, r, n, s);
        let l = null != i ? i : 0;
        if (2 & l) {
          let { static: d = !1, ...h } = u;
          if (d) return c(h, r, n, s);
        }
        if (1 & l) {
          let { unmount: p = !0, ...m } = u;
          return (0, a.E)(p ? 0 : 1, {
            0: () => null,
            1: () =>
              c({ ...m, hidden: !0, style: { display: "none" } }, r, n, s),
          });
        }
        return c(u, r, n, s);
      }
      function c(e, t = {}, r, n) {
        let {
            as: i = r,
            children: a,
            refName: s = "ref",
            ...u
          } = p(e, ["unmount", "static"]),
          l = void 0 !== e.ref ? { [s]: e.ref } : {},
          c = "function" == typeof a ? a(t) : a;
        u.className &&
          "function" == typeof u.className &&
          (u.className = u.className(t));
        let d = {};
        if (t) {
          let m = !1,
            v = [];
          for (let [y, g] of Object.entries(t))
            "boolean" == typeof g && (m = !0), !0 === g && v.push(y);
          m && (d["data-headlessui-state"] = v.join(" "));
        }
        if (i === o.Fragment && Object.keys(h(u)).length > 0) {
          if (!(0, o.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${n} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(u).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          return (0, o.cloneElement)(
            c,
            Object.assign(
              {},
              f(c.props, h(p(u, ["ref"]))),
              d,
              l,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let r of e)
                          null != r &&
                            ("function" == typeof r ? r(t) : (r.current = t));
                      },
                };
              })(c.ref, l.ref)
            )
          );
        }
        return (0, o.createElement)(
          i,
          Object.assign(
            {},
            p(u, ["ref"]),
            i !== o.Fragment && l,
            i !== o.Fragment && d
          ),
          c
        );
      }
      function f(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          r = {};
        for (let n of e)
          for (let i in n)
            i.startsWith("on") && "function" == typeof n[i]
              ? (null != r[i] || (r[i] = []), r[i].push(n[i]))
              : (t[i] = n[i]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(r).map((e) => [e, void 0]))
          );
        for (let o in r)
          Object.assign(t, {
            [o](e, ...t) {
              let n = r[o];
              for (let i of n) {
                if (
                  (e instanceof Event ||
                    (null == e ? void 0 : e.nativeEvent) instanceof Event) &&
                  e.defaultPrevented
                )
                  return;
                i(e, ...t);
              }
            },
          });
        return t;
      }
      function d(e) {
        var t;
        return Object.assign((0, o.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function h(e) {
        let t = Object.assign({}, e);
        for (let r in t) void 0 === t[r] && delete t[r];
        return t;
      }
      function p(e, t = []) {
        let r = Object.assign({}, e);
        for (let n of t) n in r && delete r[n];
        return r;
      }
    },
    20943: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    13375: function (e, t, r) {
      "use strict";
      function n(e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    41799: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              n(e, t, r[t]);
            });
        }
        return e;
      }
      r.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    69396: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n);
                }
                return r;
              })(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              }),
          e
        );
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    99534: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    828: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(13375),
        i = r(91566);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (0, n.Z)(e, t) ||
          (0, i.Z)(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    51351: function (e, t, r) {
      "use strict";
      function n(e) {
        throw e;
      }
      r.d(t, {
        Z: function () {
          return n;
        },
      });
    },
    29815: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(20943),
        i = r(13375),
        o = r(91566);
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, n.Z)(e);
          })(e) ||
          (0, i.Z)(e) ||
          (0, o.Z)(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(20943);
      function i(e, t) {
        if (e) {
          if ("string" == typeof e) return (0, n.Z)(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r)
          )
            return Array.from(r);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return (0, n.Z)(e, t);
        }
      }
    },
    15761: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return a;
        },
      });
      var n = r(33989),
        i = r(32161);
      class o extends n.l {
        constructor() {
          super(),
            (this.setup = (e) => {
              if (!i.sk && window.addEventListener) {
                let t = () => e();
                return (
                  window.addEventListener("visibilitychange", t, !1),
                  window.addEventListener("focus", t, !1),
                  () => {
                    window.removeEventListener("visibilitychange", t),
                      window.removeEventListener("focus", t);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            null == (e = this.cleanup) || e.call(this), (this.cleanup = void 0);
          }
        }
        setEventListener(e) {
          var t;
          (this.setup = e),
            null == (t = this.cleanup) || t.call(this),
            (this.cleanup = e((e) => {
              "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
            }));
        }
        setFocused(e) {
          (this.focused = e), e && this.onFocus();
        }
        onFocus() {
          this.listeners.forEach((e) => {
            e();
          });
        }
        isFocused() {
          return "boolean" == typeof this.focused
            ? this.focused
            : "undefined" == typeof document ||
                [void 0, "visible", "prerender"].includes(
                  document.visibilityState
                );
        }
      }
      let a = new o();
    },
    9499: function (e, t, r) {
      "use strict";
      function n() {
        return {
          onFetch(e) {
            e.fetchFn = () => {
              var t, r, n, a, s, u;
              let l =
                  null == (t = e.fetchOptions)
                    ? void 0
                    : null == (r = t.meta)
                    ? void 0
                    : r.refetchPage,
                c =
                  null == (n = e.fetchOptions)
                    ? void 0
                    : null == (a = n.meta)
                    ? void 0
                    : a.fetchMore,
                f = null == c ? void 0 : c.pageParam,
                d = (null == c ? void 0 : c.direction) === "forward",
                h = (null == c ? void 0 : c.direction) === "backward",
                p = (null == (s = e.state.data) ? void 0 : s.pages) || [],
                m = (null == (u = e.state.data) ? void 0 : u.pageParams) || [],
                v = m,
                y = !1,
                g = (t) => {
                  Object.defineProperty(t, "signal", {
                    enumerable: !0,
                    get() {
                      var t, r;
                      return (
                        null != (t = e.signal) && t.aborted
                          ? (y = !0)
                          : null == (r = e.signal) ||
                            r.addEventListener("abort", () => {
                              y = !0;
                            }),
                        e.signal
                      );
                    },
                  });
                },
                b =
                  e.options.queryFn ||
                  (() => Promise.reject("Missing queryFn")),
                w = (e, t, r, n) => (
                  (v = n ? [t, ...v] : [...v, t]), n ? [r, ...e] : [...e, r]
                ),
                x = (t, r, n, i) => {
                  if (y) return Promise.reject("Cancelled");
                  if (void 0 === n && !r && t.length) return Promise.resolve(t);
                  let o = { queryKey: e.queryKey, pageParam: n, meta: e.meta };
                  g(o);
                  let a = b(o),
                    s = Promise.resolve(a).then((e) => w(t, n, e, i));
                  return s;
                },
                E;
              if (p.length) {
                if (d) {
                  let O = void 0 !== f,
                    C = O ? f : i(e.options, p);
                  E = x(p, O, C);
                } else if (h) {
                  let S = void 0 !== f,
                    k = S ? f : o(e.options, p);
                  E = x(p, S, k, !0);
                } else {
                  v = [];
                  let j = void 0 === e.options.getNextPageParam,
                    P = !l || !p[0] || l(p[0], 0, p);
                  E = P ? x([], j, m[0]) : Promise.resolve(w([], m[0], p[0]));
                  for (let T = 1; T < p.length; T++)
                    E = E.then((t) => {
                      let r = !l || !p[T] || l(p[T], T, p);
                      if (r) {
                        let n = j ? m[T] : i(e.options, t);
                        return x(t, j, n);
                      }
                      return Promise.resolve(w(t, m[T], p[T]));
                    });
                }
              } else E = x([]);
              let A = E.then((e) => ({ pages: e, pageParams: v }));
              return A;
            };
          },
        };
      }
      function i(e, t) {
        return null == e.getNextPageParam
          ? void 0
          : e.getNextPageParam(t[t.length - 1], t);
      }
      function o(e, t) {
        return null == e.getPreviousPageParam
          ? void 0
          : e.getPreviousPageParam(t[0], t);
      }
      function a(e, t) {
        if (e.getNextPageParam && Array.isArray(t)) {
          let r = i(e, t);
          return null != r && !1 !== r;
        }
      }
      function s(e, t) {
        if (e.getPreviousPageParam && Array.isArray(t)) {
          let r = o(e, t);
          return null != r && !1 !== r;
        }
      }
      r.d(t, {
        Gm: function () {
          return n;
        },
        Qy: function () {
          return a;
        },
        ZF: function () {
          return s;
        },
      });
    },
    30819: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return n;
        },
      });
      let n = console;
    },
    89886: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return u;
        },
        m: function () {
          return s;
        },
      });
      var n = r(30819),
        i = r(30081),
        o = r(89643),
        a = r(72379);
      class s extends o.F {
        constructor(e) {
          super(),
            (this.options = { ...e.defaultOptions, ...e.options }),
            (this.mutationId = e.mutationId),
            (this.mutationCache = e.mutationCache),
            (this.logger = e.logger || n._),
            (this.observers = []),
            (this.state = e.state || u()),
            (this.meta = e.meta),
            this.updateCacheTime(this.options.cacheTime),
            this.scheduleGc();
        }
        setState(e) {
          this.dispatch({ type: "setState", state: e });
        }
        addObserver(e) {
          -1 === this.observers.indexOf(e) &&
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: "observerAdded",
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          (this.observers = this.observers.filter((t) => t !== e)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: "observerRemoved",
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          this.observers.length ||
            ("loading" === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this));
        }
        continue() {
          return this.retryer
            ? (this.retryer.continue(), this.retryer.promise)
            : this.execute();
        }
        async execute() {
          var e, t, r, n, i, o, s, u, l, c, f, d, h, p, m, v;
          let y = "loading" === this.state.status;
          try {
            if (!y) {
              this.dispatch({
                type: "loading",
                variables: this.options.variables,
              }),
                null == (s = (u = this.mutationCache.config).onMutate) ||
                  s.call(u, this.state.variables, this);
              let g = await (null == (l = (c = this.options).onMutate)
                ? void 0
                : l.call(c, this.state.variables));
              g !== this.state.context &&
                this.dispatch({
                  type: "loading",
                  context: g,
                  variables: this.state.variables,
                });
            }
            let b = await (() => {
              var e;
              return (
                (this.retryer = (0, a.Mz)({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject("No mutationFn found"),
                  onFail: () => {
                    this.dispatch({ type: "failed" });
                  },
                  onPause: () => {
                    this.dispatch({ type: "pause" });
                  },
                  onContinue: () => {
                    this.dispatch({ type: "continue" });
                  },
                  retry: null != (e = this.options.retry) ? e : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            })();
            return (
              null == (e = (t = this.mutationCache.config).onSuccess) ||
                e.call(t, b, this.state.variables, this.state.context, this),
              await (null == (r = (n = this.options).onSuccess)
                ? void 0
                : r.call(n, b, this.state.variables, this.state.context)),
              await (null == (i = (o = this.options).onSettled)
                ? void 0
                : i.call(o, b, null, this.state.variables, this.state.context)),
              this.dispatch({ type: "success", data: b }),
              b
            );
          } catch (w) {
            try {
              throw (
                (null == (f = (d = this.mutationCache.config).onError) ||
                  f.call(d, w, this.state.variables, this.state.context, this),
                await (null == (h = (p = this.options).onError)
                  ? void 0
                  : h.call(p, w, this.state.variables, this.state.context)),
                await (null == (m = (v = this.options).onSettled)
                  ? void 0
                  : m.call(
                      v,
                      void 0,
                      w,
                      this.state.variables,
                      this.state.context
                    )),
                w)
              );
            } finally {
              this.dispatch({ type: "error", error: w });
            }
          }
        }
        dispatch(e) {
          (this.state = ((t) => {
            switch (e.type) {
              case "failed":
                return { ...t, failureCount: t.failureCount + 1 };
              case "pause":
                return { ...t, isPaused: !0 };
              case "continue":
                return { ...t, isPaused: !1 };
              case "loading":
                return {
                  ...t,
                  context: e.context,
                  data: void 0,
                  error: null,
                  isPaused: !(0, a.Kw)(this.options.networkMode),
                  status: "loading",
                  variables: e.variables,
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...t,
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  isPaused: !1,
                  status: "error",
                };
              case "setState":
                return { ...t, ...e.state };
            }
          })(this.state)),
            i.V.batch(() => {
              this.observers.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: "updated",
                  action: e,
                });
            });
        }
      }
      function u() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          isPaused: !1,
          status: "idle",
          variables: void 0,
        };
      }
    },
    30081: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return i;
        },
      });
      var n = r(32161);
      let i = (function () {
        let e = [],
          t = 0,
          r = (e) => {
            e();
          },
          i = (e) => {
            e();
          },
          o = (e) => {
            let r;
            t++;
            try {
              r = e();
            } finally {
              --t || u();
            }
            return r;
          },
          a = (i) => {
            t
              ? e.push(i)
              : (0, n.A4)(() => {
                  r(i);
                });
          },
          s =
            (e) =>
            (...t) => {
              a(() => {
                e(...t);
              });
            },
          u = () => {
            let t = e;
            (e = []),
              t.length &&
                (0, n.A4)(() => {
                  i(() => {
                    t.forEach((e) => {
                      r(e);
                    });
                  });
                });
          },
          l = (e) => {
            r = e;
          },
          c = (e) => {
            i = e;
          };
        return {
          batch: o,
          batchCalls: s,
          schedule: a,
          setNotifyFunction: l,
          setBatchNotifyFunction: c,
        };
      })();
    },
    96474: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return a;
        },
      });
      var n = r(33989),
        i = r(32161);
      class o extends n.l {
        constructor() {
          super(),
            (this.setup = (e) => {
              if (!i.sk && window.addEventListener) {
                let t = () => e();
                return (
                  window.addEventListener("online", t, !1),
                  window.addEventListener("offline", t, !1),
                  () => {
                    window.removeEventListener("online", t),
                      window.removeEventListener("offline", t);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var e;
            null == (e = this.cleanup) || e.call(this), (this.cleanup = void 0);
          }
        }
        setEventListener(e) {
          var t;
          (this.setup = e),
            null == (t = this.cleanup) || t.call(this),
            (this.cleanup = e((e) => {
              "boolean" == typeof e ? this.setOnline(e) : this.onOnline();
            }));
        }
        setOnline(e) {
          (this.online = e), e && this.onOnline();
        }
        onOnline() {
          this.listeners.forEach((e) => {
            e();
          });
        }
        isOnline() {
          return "boolean" == typeof this.online
            ? this.online
            : "undefined" == typeof navigator ||
                void 0 === navigator.onLine ||
                navigator.onLine;
        }
      }
      let a = new o();
    },
    89643: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return i;
        },
      });
      var n = r(32161);
      class i {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            (0, n.PN)(this.cacheTime) &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(e) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != e ? e : n.sk ? 1 / 0 : 3e5
          );
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
    },
    72379: function (e, t, r) {
      "use strict";
      r.d(t, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return s;
        },
        Mz: function () {
          return c;
        },
      });
      var n = r(15761),
        i = r(96474),
        o = r(32161);
      function a(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function s(e) {
        return (null != e ? e : "online") !== "online" || i.N.isOnline();
      }
      class u {
        constructor(e) {
          (this.revert = null == e ? void 0 : e.revert),
            (this.silent = null == e ? void 0 : e.silent);
        }
      }
      function l(e) {
        return e instanceof u;
      }
      function c(e) {
        let t = !1,
          r = 0,
          l = !1,
          c,
          f,
          d,
          h = new Promise((e, t) => {
            (f = e), (d = t);
          }),
          p = (t) => {
            l || (b(new u(t)), null == e.abort || e.abort());
          },
          m = () => {
            t = !0;
          },
          v = () => {
            t = !1;
          },
          y = () =>
            !n.j.isFocused() || ("always" !== e.networkMode && !i.N.isOnline()),
          g = (t) => {
            l ||
              ((l = !0),
              null == e.onSuccess || e.onSuccess(t),
              null == c || c(),
              f(t));
          },
          b = (t) => {
            l ||
              ((l = !0),
              null == e.onError || e.onError(t),
              null == c || c(),
              d(t));
          },
          w = () =>
            new Promise((t) => {
              (c = (e) => {
                if (l || !y()) return t(e);
              }),
                null == e.onPause || e.onPause();
            }).then(() => {
              (c = void 0), l || null == e.onContinue || e.onContinue();
            }),
          x = () => {
            if (l) return;
            let n;
            try {
              n = e.fn();
            } catch (i) {
              n = Promise.reject(i);
            }
            Promise.resolve(n)
              .then(g)
              .catch((n) => {
                var i, s;
                if (l) return;
                let u = null != (i = e.retry) ? i : 3,
                  c = null != (s = e.retryDelay) ? s : a,
                  f = "function" == typeof c ? c(r, n) : c,
                  d =
                    !0 === u ||
                    ("number" == typeof u && r < u) ||
                    ("function" == typeof u && u(r, n));
                if (t || !d) {
                  b(n);
                  return;
                }
                r++,
                  null == e.onFail || e.onFail(r, n),
                  (0, o.Gh)(f)
                    .then(() => {
                      if (y()) return w();
                    })
                    .then(() => {
                      t ? b(n) : x();
                    });
              });
          };
        return (
          s(e.networkMode) ? x() : w().then(x),
          {
            promise: h,
            cancel: p,
            continue() {
              null == c || c();
            },
            cancelRetry: m,
            continueRetry: v,
          }
        );
      }
    },
    33989: function (e, t, r) {
      "use strict";
      r.d(t, {
        l: function () {
          return n;
        },
      });
      class n {
        constructor() {
          (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.push(e),
            this.onSubscribe(),
            () => {
              (this.listeners = this.listeners.filter((t) => t !== e)),
                this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.length > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
    },
    32161: function (e, t, r) {
      "use strict";
      r.d(t, {
        A4: function () {
          return O;
        },
        G9: function () {
          return C;
        },
        Gh: function () {
          return E;
        },
        I6: function () {
          return c;
        },
        Kp: function () {
          return s;
        },
        PN: function () {
          return a;
        },
        Rm: function () {
          return h;
        },
        SE: function () {
          return o;
        },
        VS: function () {
          return y;
        },
        X7: function () {
          return d;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return u;
        },
        _x: function () {
          return f;
        },
        lV: function () {
          return l;
        },
        oE: function () {
          return S;
        },
        sk: function () {
          return n;
        },
        to: function () {
          return m;
        },
        yF: function () {
          return p;
        },
      });
      let n = "undefined" == typeof window;
      function i() {}
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function s(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function u(e, t, r) {
        return x(e)
          ? "function" == typeof t
            ? { ...r, queryKey: e, queryFn: t }
            : { ...t, queryKey: e }
          : e;
      }
      function l(e, t, r) {
        return x(e)
          ? "function" == typeof t
            ? { ...r, mutationKey: e, mutationFn: t }
            : { ...t, mutationKey: e }
          : "function" == typeof e
          ? { ...t, mutationFn: e }
          : { ...e };
      }
      function c(e, t, r) {
        return x(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
      }
      function f(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: o,
          queryKey: a,
          stale: s,
        } = e;
        if (x(a)) {
          if (n) {
            if (t.queryHash !== h(a, t.options)) return !1;
          } else {
            var u, l;
            if (((u = t.queryKey), (l = a), !v(u, l))) return !1;
          }
        }
        if ("all" !== r) {
          let c = t.isActive();
          if (("active" === r && !c) || ("inactive" === r && c)) return !1;
        }
        return (
          ("boolean" != typeof s || t.isStale() === s) &&
          (void 0 === i || i === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function d(e, t) {
        let { exact: r, fetching: n, predicate: i, mutationKey: o } = e;
        if (x(o)) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (p(t.options.mutationKey) !== p(o)) return !1;
          } else {
            var a, s;
            if (((a = t.options.mutationKey), (s = o), !v(a, s))) return !1;
          }
        }
        return (
          ("boolean" != typeof n || ("loading" === t.state.status) === n) &&
          (!i || !!i(t))
        );
      }
      function h(e, t) {
        let r = (null == t ? void 0 : t.queryKeyHashFn) || p;
        return r(e);
      }
      function p(e) {
        return JSON.stringify(e, (e, t) =>
          b(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function m(e, t) {
        return v(e, t);
      }
      function v(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((r) => !v(e[r], t[r])))
        );
      }
      function y(e, t) {
        if ((e && !t) || (t && !e)) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function g(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function b(e) {
        if (!w(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return !!(w(r) && r.hasOwnProperty("isPrototypeOf"));
      }
      function w(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function x(e) {
        return Array.isArray(e);
      }
      function E(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function O(e) {
        E(0).then(e);
      }
      function C() {
        if ("function" == typeof AbortController) return new AbortController();
      }
      function S(e, t, r) {
        return null != r.isDataEqual && r.isDataEqual(e, t)
          ? e
          : "function" == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? (function e(t, r) {
              if (t === r) return t;
              let n = g(t) && g(r);
              if (n || (b(t) && b(r))) {
                let i = n ? t.length : Object.keys(t).length,
                  o = n ? r : Object.keys(r),
                  a = o.length,
                  s = n ? [] : {},
                  u = 0;
                for (let l = 0; l < a; l++) {
                  let c = n ? l : o[l];
                  (s[c] = e(t[c], r[c])), s[c] === t[c] && u++;
                }
                return i === a && u === i ? t : s;
              }
              return r;
            })(e, t)
          : t;
      }
    },
    85945: function (e, t, r) {
      "use strict";
      r.d(t, {
        NL: function () {
          return s;
        },
        aH: function () {
          return u;
        },
      });
      var n = r(67294);
      let i = n.createContext(void 0),
        o = n.createContext(!1);
      function a(e, t) {
        return (
          e ||
          (t && "undefined" != typeof window
            ? (window.ReactQueryClientContext ||
                (window.ReactQueryClientContext = i),
              window.ReactQueryClientContext)
            : i)
        );
      }
      let s = ({ context: e } = {}) => {
          let t = n.useContext(a(e, n.useContext(o)));
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        u = ({
          client: e,
          children: t,
          context: r,
          contextSharing: i = !1,
        }) => {
          n.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          );
          let s = a(r, i);
          return n.createElement(
            o.Provider,
            { value: !r && i },
            n.createElement(s.Provider, { value: e }, t)
          );
        };
    },
    87167: function (e, t, r) {
      "use strict";
      function n() {
        return "undefined" != typeof window ? window : globalThis;
      }
      function i(e) {
        var t;
        let r = e.headers || (() => ({}));
        return {
          url: e.url,
          fetch: (function (e) {
            if (e) return e;
            let t = n(),
              r = t.fetch;
            if (r) return "function" == typeof r.bind ? r.bind(t) : r;
            throw Error("No fetch implementation found");
          })(e.fetch),
          AbortController:
            (t = e.AbortController) ?? n().AbortController ?? null,
          headers: "function" == typeof r ? r : () => r,
        };
      }
      r.d(t, {
        a: function () {
          return s;
        },
        h: function () {
          return u;
        },
        r: function () {
          return i;
        },
      });
      let o = { query: "GET", mutation: "POST" };
      function a(e) {
        return "input" in e
          ? e.runtime.transformer.serialize(e.input)
          : (function (e) {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                let n = e[r];
                t[r] = n;
              }
              return t;
            })(e.inputs.map((t) => e.runtime.transformer.serialize(t)));
      }
      function s(e) {
        let t = e.url + "/" + e.path,
          r = [];
        if (("inputs" in e && r.push("batch=1"), "query" === e.type)) {
          let n = a(e);
          void 0 !== n &&
            r.push(`input=${encodeURIComponent(JSON.stringify(n))}`);
        }
        return r.length && (t += "?" + r.join("&")), t;
      }
      function u(e) {
        let { type: t } = e,
          r = e.AbortController ? new e.AbortController() : null,
          n = new Promise((n, i) => {
            let u = s(e),
              l = (function (e) {
                if ("query" === e.type) return;
                let t = a(e);
                return void 0 !== t ? JSON.stringify(t) : void 0;
              })(e),
              c = {};
            Promise.resolve(e.headers())
              .then((n) => {
                if ("subscription" === t)
                  throw Error("Subscriptions should use wsLink");
                return e.fetch(u, {
                  method: o[t],
                  signal: r?.signal,
                  body: l,
                  headers: { "content-type": "application/json", ...n },
                });
              })
              .then((e) => ((c.response = e), e.json()))
              .then((e) => {
                n({ json: e, meta: c });
              })
              .catch(i);
          }),
          i = () => {
            r?.abort();
          };
        return { promise: n, cancel: i };
      }
    },
    9934: function (e, t, r) {
      "use strict";
      r.d(t, {
        BJ: function () {
          return h;
        },
        K5: function () {
          return m;
        },
        ch: function () {
          return f;
        },
        u_: function () {
          return s;
        },
      });
      var n = r(35372),
        i = r(94090);
      function o(e) {
        return (0, n.LO)((t) => {
          let r = (function t(r = 0, n = e.op) {
            let i = e.links[r];
            if (!i)
              throw Error(
                "No more links to execute - did you forget to add an ending link?"
              );
            let o = i({
              op: n,
              next(e) {
                let n = t(r + 1, e);
                return n;
              },
            });
            return o;
          })();
          return r.subscribe(t);
        });
      }
      function a(e) {
        return Array.isArray(e) ? e : [e];
      }
      function s(e) {
        return (t) => {
          let r = a(e.true).map((e) => e(t)),
            i = a(e.false).map((e) => e(t));
          return (t) =>
            (0, n.LO)((n) => {
              let a = e.condition(t.op) ? r : i;
              return o({ op: t.op, links: a }).subscribe(n);
            });
        };
      }
      var u = r(24083),
        l = r(9218),
        c = r(87167);
      function f(e) {
        let t = (0, c.r)(e);
        return (e) =>
          ({ op: r }) =>
            (0, n.LO)((n) => {
              let { path: o, input: a, type: s } = r,
                { promise: u, cancel: l } = (0, c.h)({
                  ...t,
                  runtime: e,
                  type: s,
                  path: o,
                  input: a,
                });
              return (
                u
                  .then((t) => {
                    let r = (0, i.t)(t.json, e);
                    if (!r.ok) {
                      n.error(i.T.from(r.error, { meta: t.meta }));
                      return;
                    }
                    n.next({ context: t.meta, result: r.result }), n.complete();
                  })
                  .catch((e) => n.error(i.T.from(e))),
                () => {
                  l();
                }
              );
            });
      }
      class d {
        $request({ type: e, input: t, path: r, context: i = {} }) {
          let a = o({
            links: this.links,
            op: {
              id: ++this.requestId,
              type: e,
              path: r,
              input: t,
              context: i,
            },
          });
          return a.pipe((0, n.BN)());
        }
        requestAsPromise(e) {
          let t = this.$request(e),
            { promise: r, abort: o } = (0, n.xA)(t),
            a = new Promise((t, n) => {
              e.signal?.addEventListener("abort", o),
                r
                  .then((e) => {
                    t(e.result.data);
                  })
                  .catch((e) => {
                    n(i.T.from(e));
                  });
            });
          return a;
        }
        query(e, t, r) {
          return this.requestAsPromise({
            type: "query",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        mutation(e, t, r) {
          return this.requestAsPromise({
            type: "mutation",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        subscription(e, t, r) {
          let n = this.$request({
            type: "subscription",
            path: e,
            input: t,
            context: r?.context,
          });
          return n.subscribe({
            next(e) {
              "started" === e.result.type
                ? r.onStarted?.()
                : "stopped" === e.result.type
                ? r.onStopped?.()
                : r.onData?.(e.result.data);
            },
            error(e) {
              r.onError?.(e);
            },
            complete() {
              r.onComplete?.();
            },
          });
        }
        constructor(e) {
          (this.requestId = 0),
            (this.runtime = {
              transformer: e.transformer
                ? "input" in e.transformer
                  ? {
                      serialize: e.transformer.input.serialize,
                      deserialize: e.transformer.output.deserialize,
                    }
                  : e.transformer
                : { serialize: (e) => e, deserialize: (e) => e },
            }),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      function h(e) {
        let t = new d({
          transformer: e.transformer,
          links: "links" in e ? e.links : [(0, u.N)(e)],
        });
        return t;
      }
      let p = { query: "query", mutate: "mutation", subscribe: "subscription" };
      function m(e) {
        let t = new d(e),
          r = (function (e) {
            let t = (0, l.c)(({ path: t, args: r }) => {
              let n = [...t],
                i = n.pop(),
                o = p[i],
                a = n.join(".");
              return e[o](a, ...r);
            });
            return t;
          })(t);
        return r;
      }
    },
    24083: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return u;
        },
      });
      var n = r(35372),
        i = r(94090),
        o = r(87167);
      let a = () => {
        throw Error(
          "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
        );
      };
      function s(e) {
        let t = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (t = null);
          };
        function i() {
          let r = (function (t) {
            let r = [[]],
              n = 0;
            for (;;) {
              let i = t[n];
              if (!i) break;
              let o = r[r.length - 1];
              if (i.aborted) {
                i.reject(Error("Aborted")), n++;
                continue;
              }
              let a = e.validate(o.concat(i).map((e) => e.key));
              if (a) {
                o.push(i), n++;
                continue;
              }
              if (0 === o.length) {
                i.reject(Error("Input is too big for a single dispatch")), n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(t);
          for (let i of (n(), r)) {
            if (!i.length) continue;
            let o = { items: i, cancel: a };
            for (let s of i) s.batch = o;
            let { promise: u, cancel: l } = e.fetch(o.items.map((e) => e.key));
            (o.cancel = l),
              u
                .then((e) => {
                  for (let t = 0; t < e.length; t++) {
                    let r = e[t],
                      n = o.items[t];
                    n.resolve(r), (n.batch = null);
                  }
                })
                .catch((e) => {
                  for (let t of o.items) t.reject(e), (t.batch = null);
                });
          }
        }
        return {
          load: function (e) {
            let n = { aborted: !1, key: e, batch: null, resolve: a, reject: a },
              o = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            r || (r = setTimeout(i));
            let s = () => {
              (n.aborted = !0),
                n.batch?.items.every((e) => e.aborted) &&
                  (n.batch.cancel(), (n.batch = null));
            };
            return { promise: o, cancel: s };
          },
        };
      }
      function u(e) {
        let t = (0, o.r)(e);
        return (r) => {
          let a = e.maxURLLength || 1 / 0,
            u = (e) => {
              let n = (n) => {
                  if (a === 1 / 0) return !0;
                  let i = n.map((e) => e.path).join(","),
                    s = n.map((e) => e.input),
                    u = (0, o.a)({
                      ...t,
                      runtime: r,
                      type: e,
                      path: i,
                      inputs: s,
                    });
                  return u.length <= a;
                },
                i = (n) => {
                  let i = n.map((e) => e.path).join(","),
                    a = n.map((e) => e.input),
                    { promise: s, cancel: u } = (0, o.h)({
                      ...t,
                      runtime: r,
                      type: e,
                      path: i,
                      inputs: a,
                    });
                  return {
                    promise: s.then((e) => {
                      let t = Array.isArray(e.json)
                          ? e.json
                          : n.map(() => e.json),
                        r = t.map((t) => ({ meta: e.meta, json: t }));
                      return r;
                    }),
                    cancel: u,
                  };
                };
              return { validate: n, fetch: i };
            },
            l = s(u("query")),
            c = s(u("mutation")),
            f = s(u("subscription")),
            d = { query: l, subscription: f, mutation: c };
          return ({ op: e }) =>
            (0, n.LO)((t) => {
              let n = d[e.type],
                { promise: o, cancel: a } = n.load(e);
              return (
                o
                  .then((e) => {
                    let n = (0, i.t)(e.json, r);
                    if (!n.ok) {
                      t.error(i.T.from(n.error, { meta: e.meta }));
                      return;
                    }
                    t.next({ context: e.meta, result: n.result }), t.complete();
                  })
                  .catch((e) => t.error(i.T.from(e))),
                () => {
                  a();
                }
              );
            });
        };
      }
    },
    94090: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return n;
        },
        t: function () {
          return i;
        },
      });
      class n extends Error {
        static from(e, t = {}) {
          return e instanceof Error
            ? "TRPCClientError" === e.name
              ? e
              : new n(e.message, { ...t, cause: e, result: null })
            : new n(e.error.message ?? "", { ...t, cause: void 0, result: e });
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = "TRPCClientError"),
            Object.setPrototypeOf(this, n.prototype);
        }
      }
      function i(e, t) {
        if ("error" in e) {
          let r = t.transformer.deserialize(e.error);
          return { ok: !1, error: { ...e, error: r } };
        }
        let n = {
          ...e.result,
          ...((!e.result.type || "data" === e.result.type) && {
            type: "data",
            data: t.transformer.deserialize(e.result.data),
          }),
        };
        return { ok: !0, result: n };
      }
    },
    13566: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return _;
        },
        b: function () {
          return N;
        },
        c: function () {
          return I;
        },
      });
      var n = r(9218),
        i = r(32161),
        o = r(30081),
        a = r(15761),
        s = r(33989),
        u = r(72379);
      class l extends s.l {
        constructor(e, t) {
          super(),
            (this.client = e),
            (this.options = t),
            (this.trackedProps = new Set()),
            (this.selectError = null),
            this.bindMethods(),
            this.setOptions(t);
        }
        bindMethods() {
          (this.remove = this.remove.bind(this)),
            (this.refetch = this.refetch.bind(this));
        }
        onSubscribe() {
          1 === this.listeners.length &&
            (this.currentQuery.addObserver(this),
            c(this.currentQuery, this.options) && this.executeFetch(),
            this.updateTimers());
        }
        onUnsubscribe() {
          this.listeners.length || this.destroy();
        }
        shouldFetchOnReconnect() {
          return f(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect
          );
        }
        shouldFetchOnWindowFocus() {
          return f(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus
          );
        }
        destroy() {
          (this.listeners = []),
            this.clearStaleTimeout(),
            this.clearRefetchInterval(),
            this.currentQuery.removeObserver(this);
        }
        setOptions(e, t) {
          let r = this.options,
            n = this.currentQuery;
          if (
            ((this.options = this.client.defaultQueryOptions(e)),
            (0, i.VS)(r, this.options) ||
              this.client
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.currentQuery,
                  observer: this,
                }),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled)
          )
            throw Error("Expected enabled to be a boolean");
          this.options.queryKey || (this.options.queryKey = r.queryKey),
            this.updateQuery();
          let o = this.hasListeners();
          o && d(this.currentQuery, n, this.options, r) && this.executeFetch(),
            this.updateResult(t),
            o &&
              (this.currentQuery !== n ||
                this.options.enabled !== r.enabled ||
                this.options.staleTime !== r.staleTime) &&
              this.updateStaleTimeout();
          let a = this.computeRefetchInterval();
          o &&
            (this.currentQuery !== n ||
              this.options.enabled !== r.enabled ||
              a !== this.currentRefetchInterval) &&
            this.updateRefetchInterval(a);
        }
        getOptimisticResult(e) {
          let t = this.client.getQueryCache().build(this.client, e);
          return this.createResult(t, e);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        trackResult(e) {
          let t = {};
          return (
            Object.keys(e).forEach((r) => {
              Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r), e[r]),
              });
            }),
            t
          );
        }
        getCurrentQuery() {
          return this.currentQuery;
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({ refetchPage: e, ...t } = {}) {
          return this.fetch({ ...t, meta: { refetchPage: e } });
        }
        fetchOptimistic(e) {
          let t = this.client.defaultQueryOptions(e),
            r = this.client.getQueryCache().build(this.client, t);
          return (
            (r.isFetchingOptimistic = !0),
            r.fetch().then(() => this.createResult(r, t))
          );
        }
        fetch(e) {
          var t;
          return this.executeFetch({
            ...e,
            cancelRefetch: null == (t = e.cancelRefetch) || t,
          }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(e) {
          this.updateQuery();
          let t = this.currentQuery.fetch(this.options, e);
          return (null != e && e.throwOnError) || (t = t.catch(i.ZT)), t;
        }
        updateStaleTimeout() {
          if (
            (this.clearStaleTimeout(),
            i.sk ||
              this.currentResult.isStale ||
              !(0, i.PN)(this.options.staleTime))
          )
            return;
          let e = (0, i.Kp)(
            this.currentResult.dataUpdatedAt,
            this.options.staleTime
          );
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult();
          }, e + 1);
        }
        computeRefetchInterval() {
          var e;
          return "function" == typeof this.options.refetchInterval
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery
              )
            : null != (e = this.options.refetchInterval) && e;
        }
        updateRefetchInterval(e) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = e),
            !i.sk &&
              !1 !== this.options.enabled &&
              (0, i.PN)(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || a.j.isFocused()) &&
                  this.executeFetch();
              }, this.currentRefetchInterval));
        }
        updateTimers() {
          this.updateStaleTimeout(),
            this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
          this.staleTimeoutId &&
            (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
        }
        clearRefetchInterval() {
          this.refetchIntervalId &&
            (clearInterval(this.refetchIntervalId),
            (this.refetchIntervalId = void 0));
        }
        createResult(e, t) {
          let r = this.currentQuery,
            n = this.options,
            o = this.currentResult,
            a = this.currentResultState,
            s = this.currentResultOptions,
            l = e !== r,
            f = l ? e.state : this.currentQueryInitialState,
            p = l ? this.currentResult : this.previousQueryResult,
            { state: m } = e,
            {
              dataUpdatedAt: v,
              error: y,
              errorUpdatedAt: g,
              fetchStatus: b,
              status: w,
            } = m,
            x = !1,
            E = !1,
            O;
          if (t._optimisticResults) {
            let C = this.hasListeners(),
              S = !C && c(e, t),
              k = C && d(e, r, t, n);
            (S || k) &&
              ((b = (0, u.Kw)(e.options.networkMode) ? "fetching" : "paused"),
              v || (w = "loading")),
              "isRestoring" === t._optimisticResults && (b = "idle");
          }
          if (
            t.keepPreviousData &&
            !m.dataUpdateCount &&
            null != p &&
            p.isSuccess &&
            "error" !== w
          )
            (O = p.data), (v = p.dataUpdatedAt), (w = p.status), (x = !0);
          else if (t.select && void 0 !== m.data) {
            if (
              o &&
              m.data === (null == a ? void 0 : a.data) &&
              t.select === this.selectFn
            )
              O = this.selectResult;
            else
              try {
                (this.selectFn = t.select),
                  (O = t.select(m.data)),
                  (O = (0, i.oE)(null == o ? void 0 : o.data, O, t)),
                  (this.selectResult = O),
                  (this.selectError = null);
              } catch (j) {
                this.selectError = j;
              }
          } else O = m.data;
          if (void 0 !== t.placeholderData && void 0 === O && "loading" === w) {
            let P;
            if (
              null != o &&
              o.isPlaceholderData &&
              t.placeholderData === (null == s ? void 0 : s.placeholderData)
            )
              P = o.data;
            else if (
              ((P =
                "function" == typeof t.placeholderData
                  ? t.placeholderData()
                  : t.placeholderData),
              t.select && void 0 !== P)
            )
              try {
                (P = t.select(P)),
                  (P = (0, i.oE)(null == o ? void 0 : o.data, P, t)),
                  (this.selectError = null);
              } catch (T) {
                this.selectError = T;
              }
            void 0 !== P && ((w = "success"), (O = P), (E = !0));
          }
          this.selectError &&
            ((y = this.selectError),
            (O = this.selectResult),
            (g = Date.now()),
            (w = "error"));
          let A = "fetching" === b,
            M = {
              status: w,
              fetchStatus: b,
              isLoading: "loading" === w,
              isSuccess: "success" === w,
              isError: "error" === w,
              data: O,
              dataUpdatedAt: v,
              error: y,
              errorUpdatedAt: g,
              failureCount: m.fetchFailureCount,
              errorUpdateCount: m.errorUpdateCount,
              isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
              isFetchedAfterMount:
                m.dataUpdateCount > f.dataUpdateCount ||
                m.errorUpdateCount > f.errorUpdateCount,
              isFetching: A,
              isRefetching: A && "loading" !== w,
              isLoadingError: "error" === w && 0 === m.dataUpdatedAt,
              isPaused: "paused" === b,
              isPlaceholderData: E,
              isPreviousData: x,
              isRefetchError: "error" === w && 0 !== m.dataUpdatedAt,
              isStale: h(e, t),
              refetch: this.refetch,
              remove: this.remove,
            };
          return M;
        }
        updateResult(e) {
          let t = this.currentResult,
            r = this.createResult(this.currentQuery, this.options);
          if (
            ((this.currentResultState = this.currentQuery.state),
            (this.currentResultOptions = this.options),
            (0, i.VS)(r, t))
          )
            return;
          this.currentResult = r;
          let n = { cache: !0 };
          (null == e ? void 0 : e.listeners) !== !1 &&
            (() => {
              if (!t) return !0;
              let { notifyOnChangeProps: e } = this.options;
              if ("all" === e || (!e && !this.trackedProps.size)) return !0;
              let r = new Set(null != e ? e : this.trackedProps);
              return (
                this.options.useErrorBoundary && r.add("error"),
                Object.keys(this.currentResult).some((e) => {
                  let n = this.currentResult[e] !== t[e];
                  return n && r.has(e);
                })
              );
            })() &&
            (n.listeners = !0),
            this.notify({ ...n, ...e });
        }
        updateQuery() {
          let e = this.client.getQueryCache().build(this.client, this.options);
          if (e === this.currentQuery) return;
          let t = this.currentQuery;
          (this.currentQuery = e),
            (this.currentQueryInitialState = e.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (null == t || t.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate(e) {
          let t = {};
          "success" === e.type
            ? (t.onSuccess = !e.manual)
            : "error" !== e.type || (0, u.DV)(e.error) || (t.onError = !0),
            this.updateResult(t),
            this.hasListeners() && this.updateTimers();
        }
        notify(e) {
          o.V.batch(() => {
            var t, r, n, i, o, a, s, u;
            e.onSuccess
              ? (null == (t = (r = this.options).onSuccess) ||
                  t.call(r, this.currentResult.data),
                null == (n = (i = this.options).onSettled) ||
                  n.call(i, this.currentResult.data, null))
              : e.onError &&
                (null == (o = (a = this.options).onError) ||
                  o.call(a, this.currentResult.error),
                null == (s = (u = this.options).onSettled) ||
                  s.call(u, void 0, this.currentResult.error)),
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.currentResult);
                }),
              e.cache &&
                this.client
                  .getQueryCache()
                  .notify({
                    query: this.currentQuery,
                    type: "observerResultsUpdated",
                  });
          });
        }
      }
      function c(e, t) {
        var r, n;
        return (
          (!1 !== t.enabled &&
            !e.state.dataUpdatedAt &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (e.state.dataUpdatedAt > 0 && f(e, t, t.refetchOnMount))
        );
      }
      function f(e, t, r) {
        if (!1 !== t.enabled) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && h(e, t));
        }
        return !1;
      }
      function d(e, t, r, n) {
        return (
          !1 !== r.enabled &&
          (e !== t || !1 === n.enabled) &&
          (!r.suspense || "error" !== e.state.status) &&
          h(e, r)
        );
      }
      function h(e, t) {
        return e.isStaleByTime(t.staleTime);
      }
      var p = r(67294),
        m = r(61688);
      let v = m.useSyncExternalStore,
        y,
        g = p.createContext(
          ((y = !1),
          {
            clearReset() {
              y = !1;
            },
            reset() {
              y = !0;
            },
            isReset: () => y,
          })
        ),
        b = () => p.useContext(g);
      var w = r(85945);
      function x(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      let E = p.createContext(!1),
        O = () => p.useContext(E);
      function C(e, t) {
        let r = (0, w.NL)({ context: e.context }),
          n = O(),
          i = b(),
          a = r.defaultQueryOptions(e);
        (a._optimisticResults = n ? "isRestoring" : "optimistic"),
          a.onError && (a.onError = o.V.batchCalls(a.onError)),
          a.onSuccess && (a.onSuccess = o.V.batchCalls(a.onSuccess)),
          a.onSettled && (a.onSettled = o.V.batchCalls(a.onSettled)),
          a.suspense && "number" != typeof a.staleTime && (a.staleTime = 1e3),
          (a.suspense || a.useErrorBoundary) &&
            !i.isReset() &&
            (a.retryOnMount = !1);
        let [s] = p.useState(() => new t(r, a)),
          u = s.getOptimisticResult(a);
        if (
          (v(
            p.useCallback(
              (e) => (n ? () => void 0 : s.subscribe(o.V.batchCalls(e))),
              [s, n]
            ),
            () => s.getCurrentResult(),
            () => s.getCurrentResult()
          ),
          p.useEffect(() => {
            i.clearReset();
          }, [i]),
          p.useEffect(() => {
            s.setOptions(a, { listeners: !1 });
          }, [a, s]),
          a.suspense && u.isLoading && u.isFetching && !n)
        )
          throw s
            .fetchOptimistic(a)
            .then(({ data: e }) => {
              null == a.onSuccess || a.onSuccess(e),
                null == a.onSettled || a.onSettled(e, null);
            })
            .catch((e) => {
              i.clearReset(),
                null == a.onError || a.onError(e),
                null == a.onSettled || a.onSettled(void 0, e);
            });
        if (
          u.isError &&
          !i.isReset() &&
          !u.isFetching &&
          x(a.useErrorBoundary, [u.error, s.getCurrentQuery()])
        )
          throw u.error;
        return a.notifyOnChangeProps ? u : s.trackResult(u);
      }
      E.Provider;
      var S = r(89886);
      class k extends s.l {
        constructor(e, t) {
          super(),
            (this.client = e),
            this.setOptions(t),
            this.bindMethods(),
            this.updateResult();
        }
        bindMethods() {
          (this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this));
        }
        setOptions(e) {
          let t = this.options;
          (this.options = this.client.defaultMutationOptions(e)),
            (0, i.VS)(t, this.options) ||
              this.client
                .getMutationCache()
                .notify({
                  type: "observerOptionsUpdated",
                  mutation: this.currentMutation,
                  observer: this,
                });
        }
        onUnsubscribe() {
          if (!this.listeners.length) {
            var e;
            null == (e = this.currentMutation) || e.removeObserver(this);
          }
        }
        onMutationUpdate(e) {
          this.updateResult();
          let t = { listeners: !0 };
          "success" === e.type
            ? (t.onSuccess = !0)
            : "error" === e.type && (t.onError = !0),
            this.notify(t);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        reset() {
          (this.currentMutation = void 0),
            this.updateResult(),
            this.notify({ listeners: !0 });
        }
        mutate(e, t) {
          return (
            (this.mutateOptions = t),
            this.currentMutation && this.currentMutation.removeObserver(this),
            (this.currentMutation = this.client
              .getMutationCache()
              .build(this.client, {
                ...this.options,
                variables: void 0 !== e ? e : this.options.variables,
              })),
            this.currentMutation.addObserver(this),
            this.currentMutation.execute()
          );
        }
        updateResult() {
          let e = this.currentMutation
              ? this.currentMutation.state
              : (0, S.R)(),
            t = {
              ...e,
              isLoading: "loading" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          this.currentResult = t;
        }
        notify(e) {
          o.V.batch(() => {
            if (this.mutateOptions) {
              var t, r, n, i, o, a, s, u;
              e.onSuccess
                ? (null == (t = (r = this.mutateOptions).onSuccess) ||
                    t.call(
                      r,
                      this.currentResult.data,
                      this.currentResult.variables,
                      this.currentResult.context
                    ),
                  null == (n = (i = this.mutateOptions).onSettled) ||
                    n.call(
                      i,
                      this.currentResult.data,
                      null,
                      this.currentResult.variables,
                      this.currentResult.context
                    ))
                : e.onError &&
                  (null == (o = (a = this.mutateOptions).onError) ||
                    o.call(
                      a,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    ),
                  null == (s = (u = this.mutateOptions).onSettled) ||
                    s.call(
                      u,
                      void 0,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    ));
            }
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.currentResult);
              });
          });
        }
      }
      function j() {}
      var P = r(9499);
      class T extends l {
        constructor(e, t) {
          super(e, t);
        }
        bindMethods() {
          super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
        }
        setOptions(e, t) {
          super.setOptions({ ...e, behavior: (0, P.Gm)() }, t);
        }
        getOptimisticResult(e) {
          return (e.behavior = (0, P.Gm)()), super.getOptimisticResult(e);
        }
        fetchNextPage({ pageParam: e, ...t } = {}) {
          return this.fetch({
            ...t,
            meta: { fetchMore: { direction: "forward", pageParam: e } },
          });
        }
        fetchPreviousPage({ pageParam: e, ...t } = {}) {
          return this.fetch({
            ...t,
            meta: { fetchMore: { direction: "backward", pageParam: e } },
          });
        }
        createResult(e, t) {
          var r, n, i, o, a, s;
          let { state: u } = e,
            l = super.createResult(e, t);
          return {
            ...l,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: (0, P.Qy)(t, null == (r = u.data) ? void 0 : r.pages),
            hasPreviousPage: (0, P.ZF)(
              t,
              null == (n = u.data) ? void 0 : n.pages
            ),
            isFetchingNextPage:
              "fetching" === u.fetchStatus &&
              (null == (i = u.fetchMeta)
                ? void 0
                : null == (o = i.fetchMore)
                ? void 0
                : o.direction) === "forward",
            isFetchingPreviousPage:
              "fetching" === u.fetchStatus &&
              (null == (a = u.fetchMeta)
                ? void 0
                : null == (s = a.fetchMore)
                ? void 0
                : s.direction) === "backward",
          };
        }
      }
      var A = r(9934);
      function M(e, t) {
        return void 0 === t ? [e] : [e, t];
      }
      function _(e, t) {
        return (0, n.c)((r) => {
          let n = r.args,
            i = [e, ...r.path],
            o = i.pop(),
            a = i.join(".");
          if ("useMutation" === o) return t[o](a, ...n);
          let [s, ...u] = n,
            l = M(a, s);
          return t[o](l, ...u);
        });
      }
      let R = [
          "queryClient",
          "client",
          "ssrContext",
          "ssrState",
          "abortOnUnmount",
        ],
        F = (0, p.createContext)(null);
      function I(e) {
        let t = new Proxy(() => {}, {
          get(t, r) {
            if ("string" != typeof r) throw Error("Not supported");
            return R.includes(r)
              ? e[r]
              : (0, n.c)(({ path: t, args: n }) => {
                  let i = [r, ...t],
                    o = i.pop(),
                    a = i.join("."),
                    {
                      queryKey: s,
                      rest: u,
                      updater: l,
                      input: c,
                    } = ((e) => {
                      if (["setData", "setInfiniteData"].includes(e)) {
                        let [t, r, ...i] = n,
                          o = M(a, r);
                        return { input: r, queryKey: o, updater: t, rest: i };
                      }
                      let [s, ...u] = n,
                        l = M(a, s);
                      return { input: s, queryKey: l, rest: u };
                    })(o);
                  return {
                    fetch: () => e.fetchQuery(s, ...u),
                    fetchInfinite: () => e.fetchInfiniteQuery(s, ...u),
                    prefetch: () => e.prefetchQuery(s, ...u),
                    prefetchInfinite: () => e.prefetchInfiniteQuery(s, ...u),
                    invalidate: () => e.invalidateQueries(s, ...u),
                    refetch: () => e.refetchQueries(s, ...u),
                    cancel: () => e.cancelQuery(s, ...u),
                    setData: () => e.setQueryData(s, l, ...u),
                    setInfiniteData: () => e.setInfiniteQueryData(s, c, ...u),
                    getData: () => e.getQueryData(s),
                    getInfiniteData: () => e.getInfiniteQueryData(s),
                  }[o]();
                });
          },
        });
        return t;
      }
      function L(e, t) {
        let [r, n] = e;
        return [r, n, t?.trpc];
      }
      function N() {
        let e = (e) => (0, A.BJ)(e),
          t = (e) => {
            let {
                abortOnUnmount: t = !1,
                client: r,
                queryClient: n,
                ssrContext: i,
              } = e,
              [o, a] = (0, p.useState)(e.ssrState ?? !1);
            return (
              (0, p.useEffect)(() => {
                a((e) => !!e && "mounted");
              }, []),
              p.createElement(
                F.Provider,
                {
                  value: {
                    abortOnUnmount: t,
                    queryClient: n,
                    client: r,
                    ssrContext: i || null,
                    ssrState: o,
                    fetchQuery: (0, p.useCallback)(
                      (e, t) => n.fetchQuery(e, () => r.query(...L(e, t)), t),
                      [r, n]
                    ),
                    fetchInfiniteQuery: (0, p.useCallback)(
                      (e, t) =>
                        n.fetchInfiniteQuery(
                          e,
                          ({ pageParam: n }) => {
                            let [i, o] = e,
                              a = { ...o, cursor: n };
                            return r.query(...L([i, a], t));
                          },
                          t
                        ),
                      [r, n]
                    ),
                    prefetchQuery: (0, p.useCallback)(
                      (e, t) =>
                        n.prefetchQuery(e, () => r.query(...L(e, t)), t),
                      [r, n]
                    ),
                    prefetchInfiniteQuery: (0, p.useCallback)(
                      (e, t) =>
                        n.prefetchInfiniteQuery(
                          e,
                          ({ pageParam: n }) => {
                            let [i, o] = e,
                              a = { ...o, cursor: n };
                            return r.query(...L([i, a], t));
                          },
                          t
                        ),
                      [r, n]
                    ),
                    invalidateQueries: (0, p.useCallback)(
                      (...e) => n.invalidateQueries(...e),
                      [n]
                    ),
                    refetchQueries: (0, p.useCallback)(
                      (...e) => n.refetchQueries(...e),
                      [n]
                    ),
                    cancelQuery: (0, p.useCallback)(
                      (e) => n.cancelQueries(e),
                      [n]
                    ),
                    setQueryData: (0, p.useCallback)(
                      (...e) => n.setQueryData(...e),
                      [n]
                    ),
                    getQueryData: (0, p.useCallback)(
                      (...e) => n.getQueryData(...e),
                      [n]
                    ),
                    setInfiniteQueryData: (0, p.useCallback)(
                      (...e) => n.setQueryData(...e),
                      [n]
                    ),
                    getInfiniteQueryData: (0, p.useCallback)(
                      (...e) => n.getQueryData(...e),
                      [n]
                    ),
                  },
                },
                e.children
              )
            );
          };
        function r() {
          return p.useContext(F);
        }
        function n(e, t) {
          let { queryClient: n, ssrState: i } = r();
          return i &&
            "mounted" !== i &&
            "error" === n.getQueryCache().find(e)?.state.status
            ? { retryOnMount: !1, ...t }
            : t;
        }
        let a = (e, t) => {
          let r = (0, p.useMemo)(
            () => (t ? e.runtime.transformer.deserialize(t) : t),
            [t, e]
          );
          return r;
        };
        return {
          Provider: t,
          createClient: e,
          useContext: r,
          useQuery: function (e, t) {
            let {
              abortOnUnmount: o,
              client: a,
              ssrState: s,
              queryClient: u,
              prefetchQuery: c,
            } = r();
            "undefined" != typeof window ||
              "prepass" !== s ||
              t?.trpc?.ssr === !1 ||
              t?.enabled === !1 ||
              u.getQueryCache().find(e) ||
              c(e, t);
            let f = n(e, t),
              d = t?.trpc?.abortOnUnmount ?? o;
            return (function (e, t, r) {
              let n = (0, i._v)(e, t, r);
              return C(n, l);
            })(
              e,
              (t) => {
                let r = {
                  ...f,
                  trpc: { ...f?.trpc, ...(d ? { signal: t.signal } : {}) },
                };
                return a.query(...L(e, r));
              },
              f
            );
          },
          useMutation: function (e, t) {
            let { client: n } = r();
            return (function (e, t, r) {
              let n = (0, i.lV)(e, t, void 0),
                a = (0, w.NL)({ context: n.context }),
                [s] = p.useState(() => new k(a, n));
              p.useEffect(() => {
                s.setOptions(n);
              }, [s, n]);
              let u = v(
                  p.useCallback((e) => s.subscribe(o.V.batchCalls(e)), [s]),
                  () => s.getCurrentResult(),
                  () => s.getCurrentResult()
                ),
                l = p.useCallback(
                  (e, t) => {
                    s.mutate(e, t).catch(j);
                  },
                  [s]
                );
              if (u.error && x(s.options.useErrorBoundary, [u.error]))
                throw u.error;
              return { ...u, mutate: l, mutateAsync: u.mutate };
            })((r) => {
              let i = Array.isArray(e) ? e[0] : e;
              return n.mutation(...L([i, r], t));
            }, t);
          },
          useSubscription: function (e, t) {
            let n = t?.enabled ?? !0,
              o = (0, i.yF)(e),
              { client: a } = r();
            return (0, p.useEffect)(() => {
              if (!n) return;
              let [r, i] = e,
                o = !1,
                s = a.subscription(r, i ?? void 0, {
                  onStarted() {
                    o || t.onStarted?.();
                  },
                  onData(e) {
                    o || t.onData(e);
                  },
                  onError(e) {
                    o || t.onError?.(e);
                  },
                });
              return () => {
                (o = !0), s.unsubscribe();
              };
            }, [o, n]);
          },
          useDehydratedState: a,
          useInfiniteQuery: function (e, t) {
            let [o, a] = e,
              {
                client: s,
                ssrState: u,
                prefetchInfiniteQuery: l,
                queryClient: c,
                abortOnUnmount: f,
              } = r();
            "undefined" != typeof window ||
              "prepass" !== u ||
              t?.trpc?.ssr === !1 ||
              t?.enabled === !1 ||
              c.getQueryCache().find(e) ||
              l(e, t);
            let d = n(e, t),
              h = t?.trpc?.abortOnUnmount ?? f;
            return (function (e, t, r) {
              let n = (0, i._v)(e, t, r);
              return C(n, T);
            })(
              e,
              (e) => {
                let t = {
                    ...d,
                    trpc: { ...d?.trpc, ...(h ? { signal: e.signal } : {}) },
                  },
                  r = { ...(a ?? {}), cursor: e.pageParam };
                return s.query(...L([o, r], t));
              },
              d
            );
          },
        };
      }
    },
    36115: function (e, t, r) {
      "use strict";
      r.d(t, {
        BJ: function () {
          return n.BJ;
        },
        x3: function () {
          return a;
        },
      });
      var n = r(9934),
        i = r(67294),
        o = r(13566);
      function a() {
        let e = (0, o.b)(),
          t = (function (e) {
            let t = new Proxy(() => {}, {
              get(t, r) {
                if ("useContext" === r)
                  return () => {
                    let t = e.useContext();
                    return (0, i.useMemo)(() => (0, o.c)(t), [t]);
                  };
                if (r in e) return e[r];
                if ("string" == typeof r) return (0, o.a)(r, e);
                throw Error("Not supported");
              },
            });
            return t;
          })(e);
        return { ...e, proxy: t };
      }
    },
    9218: function (e, t, r) {
      "use strict";
      r.d(t, {
        c: function () {
          return n;
        },
      });
      let n = (e) =>
        (function e(t, ...r) {
          let n = new Proxy(() => {}, {
            get(n, i) {
              if ("string" == typeof i) return e(t, ...r, i);
              throw Error("Not supported");
            },
            apply: (e, n, i) => t({ args: i, path: r }),
          });
          return n;
        })(e);
    },
    35372: function (e, t, r) {
      "use strict";
      function n(e) {
        return e;
      }
      function i(e) {
        let t = {
          subscribe(t) {
            let r = null,
              n = !1,
              i = !1,
              o = !1;
            function a() {
              if (null === r) {
                o = !0;
                return;
              }
              !i &&
                ((i = !0), "function" == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = e({
                next(e) {
                  !n && t.next?.(e);
                },
                error(e) {
                  !n && ((n = !0), t.error?.(e), a());
                },
                complete() {
                  !n && ((n = !0), t.complete?.(), a());
                },
              })),
              o && a(),
              { unsubscribe: a }
            );
          },
          pipe(...e) {
            var r;
            return (
              0 === e.length
                ? n
                : 1 === e.length
                ? e[0]
                : function (t) {
                    return e.reduce((e, t) => t(e), t);
                  }
            )(t);
          },
        };
        return t;
      }
      function o(e) {
        return (e) => {
          let t = 0,
            r = null,
            n = [];
          return {
            subscribe: (i) => (
              t++,
              n.push(i),
              r ||
                (r = e.subscribe({
                  next(e) {
                    for (let t of n) t.next?.(e);
                  },
                  error(e) {
                    for (let t of n) t.error?.(e);
                  },
                  complete() {
                    for (let e of n) e.complete?.();
                  },
                })),
              {
                unsubscribe() {
                  t--,
                    (function () {
                      if (0 === t && r) {
                        let e = r;
                        (r = null), e.unsubscribe();
                      }
                    })();
                  let e = n.findIndex((e) => e === i);
                  e > -1 && n.splice(e, 1);
                },
              }
            ),
          };
        };
      }
      r.d(t, {
        LO: function () {
          return i;
        },
        xA: function () {
          return s;
        },
        BN: function () {
          return o;
        },
      });
      class a extends Error {
        constructor(e) {
          super(e),
            (this.name = "ObservableAbortError"),
            Object.setPrototypeOf(this, a.prototype);
        }
      }
      function s(e) {
        let t,
          r = new Promise((r, n) => {
            let i = !1;
            function o() {
              !i &&
                ((i = !0),
                n(new a("This operation was aborted.")),
                s.unsubscribe());
            }
            let s = e.subscribe({
              next(e) {
                (i = !0), r(e), o();
              },
              error(e) {
                (i = !0), n(e), o();
              },
              complete() {
                (i = !0), o();
              },
            });
            t = o;
          });
        return { promise: r, abort: t };
      }
    },
    12902: function (e, t, r) {
      "use strict";
      function n(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (r.length
              ? " " +
                r
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function i(e) {
        return !!e && !!e[G];
      }
      function o(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              r === Object ||
              ("function" == typeof r && Function.toString.call(r) === U)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[q] ||
            !!e.constructor[q] ||
            c(e) ||
            f(e))
        );
      }
      function a(e, t, r) {
        void 0 === r && (r = !1),
          0 === s(e)
            ? (r ? Object.keys : Q)(e).forEach(function (n) {
                (r && "symbol" == typeof n) || t(n, e[n], e);
              })
            : e.forEach(function (r, n) {
                return t(n, r, e);
              });
      }
      function s(e) {
        var t = e[G];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : c(e)
          ? 2
          : f(e)
          ? 3
          : 0;
      }
      function u(e, t) {
        return 2 === s(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function l(e, t, r) {
        var n = s(e);
        2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : (e[t] = r);
      }
      function c(e) {
        return L && e instanceof Map;
      }
      function f(e) {
        return N && e instanceof Set;
      }
      function d(e) {
        return e.o || e.t;
      }
      function h(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = z(e);
        delete t[G];
        for (var r = Q(t), n = 0; n < r.length; n++) {
          var i = r[n],
            o = t[i];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[i],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function p(e, t) {
        return (
          void 0 === t && (t = !1),
          v(e) ||
            i(e) ||
            !o(e) ||
            (s(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
              a(
                e,
                function (e, t) {
                  return p(t, !0);
                },
                !0
              )),
          e
        );
      }
      function m() {
        n(2);
      }
      function v(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function y(e) {
        var t = Z[e];
        return t || n(18, e), t;
      }
      function g(e, t) {
        t && (y("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function b(e) {
        w(e), e.p.forEach(E), (e.p = null);
      }
      function w(e) {
        e === F && (F = e.l);
      }
      function x(e) {
        return (F = { p: [], l: F, h: e, m: !0, _: 0 });
      }
      function E(e) {
        var t = e[G];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function O(e, t) {
        t._ = t.p.length;
        var r = t.p[0],
          i = void 0 !== e && e !== r;
        return (
          t.h.g || y("ES5").S(t, e, i),
          i
            ? (r[G].P && (b(t), n(4)),
              o(e) && ((e = C(t, e)), t.l || k(t, e)),
              t.u && y("Patches").M(r[G].t, e, t.u, t.s))
            : (e = C(t, r, [])),
          b(t),
          t.u && t.v(t.u, t.s),
          e !== D ? e : void 0
        );
      }
      function C(e, t, r) {
        if (v(t)) return t;
        var n = t[G];
        if (!n)
          return (
            a(
              t,
              function (i, o) {
                return S(e, n, t, i, o, r);
              },
              !0
            ),
            t
          );
        if (n.A !== e) return t;
        if (!n.P) return k(e, n.t, !0), n.t;
        if (!n.I) {
          (n.I = !0), n.A._--;
          var i = 4 === n.i || 5 === n.i ? (n.o = h(n.k)) : n.o;
          a(3 === n.i ? new Set(i) : i, function (t, o) {
            return S(e, n, i, t, o, r);
          }),
            k(e, i, !1),
            r && e.u && y("Patches").R(n, r, e.u, e.s);
        }
        return n.o;
      }
      function S(e, t, r, n, a, s) {
        if (i(a)) {
          var c = C(
            e,
            a,
            s && t && 3 !== t.i && !u(t.D, n) ? s.concat(n) : void 0
          );
          if ((l(r, n, c), !i(c))) return;
          e.m = !1;
        }
        if (o(a) && !v(a)) {
          if (!e.h.F && e._ < 1) return;
          C(e, a), (t && t.A.l) || k(e, a);
        }
      }
      function k(e, t, r) {
        void 0 === r && (r = !1), e.h.F && e.m && p(t, r);
      }
      function j(e, t) {
        var r = e[G];
        return (r ? d(r) : e)[t];
      }
      function P(e, t) {
        if (t in e)
          for (var r = Object.getPrototypeOf(e); r; ) {
            var n = Object.getOwnPropertyDescriptor(r, t);
            if (n) return n;
            r = Object.getPrototypeOf(r);
          }
      }
      function T(e) {
        e.P || ((e.P = !0), e.l && T(e.l));
      }
      function A(e) {
        e.o || (e.o = h(e.t));
      }
      function M(e, t, r) {
        var n,
          i,
          o,
          a,
          s,
          u,
          l,
          d,
          h,
          p = c(t)
            ? y("MapSet").N(t, r)
            : f(t)
            ? y("MapSet").T(t, r)
            : e.g
            ? ((s = a =
                {
                  i: (o = Array.isArray(t)) ? 1 : 0,
                  A: r ? r.A : F,
                  P: !1,
                  I: !1,
                  D: {},
                  l: r,
                  t: t,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                }),
              (u = H),
              o && ((s = [a]), (u = B)),
              (d = (l = Proxy.revocable(s, u)).revoke),
              (h = l.proxy),
              (a.k = h),
              (a.j = d),
              h)
            : y("ES5").J(t, r);
        return (r ? r.A : F).p.push(p), p;
      }
      function _(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return h(e);
      }
      var R,
        F,
        I = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        L = "undefined" != typeof Map,
        N = "undefined" != typeof Set,
        V =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        D = I
          ? Symbol.for("immer-nothing")
          : (((R = {})["immer-nothing"] = !0), R),
        q = I ? Symbol.for("immer-draftable") : "__$immer_draftable",
        G = I ? Symbol.for("immer-state") : "__$immer_state",
        U = "" + Object.prototype.constructor,
        Q =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        z =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              Q(e).forEach(function (r) {
                t[r] = Object.getOwnPropertyDescriptor(e, r);
              }),
              t
            );
          },
        Z = {},
        H = {
          get: function (e, t) {
            if (t === G) return e;
            var r,
              n,
              i,
              a,
              s,
              l = d(e);
            if (!u(l, t))
              return (
                (r = e),
                (n = l),
                (s = P(n, (i = t)))
                  ? "value" in s
                    ? s.value
                    : null === (a = s.get) || void 0 === a
                    ? void 0
                    : a.call(r.k)
                  : void 0
              );
            var c = l[t];
            return e.I || !o(c)
              ? c
              : c === j(e.t, t)
              ? (A(e), (e.o[t] = M(e.A.h, c, e)))
              : c;
          },
          has: function (e, t) {
            return t in d(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(d(e));
          },
          set: function (e, t, r) {
            var n = P(d(e), t);
            if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
            if (!e.P) {
              var i,
                o,
                a = j(d(e), t),
                s = null == a ? void 0 : a[G];
              if (s && s.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
              if (
                (r === a ? 0 !== r || 1 / r == 1 / a : r != r && a != a) &&
                (void 0 !== r || u(e.t, t))
              )
                return !0;
              A(e), T(e);
            }
            return (
              (e.o[t] === r &&
                "number" != typeof r &&
                (void 0 !== r || t in e.o)) ||
              ((e.o[t] = r), (e.D[t] = !0), !0)
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== j(e.t, t) || t in e.t
                ? ((e.D[t] = !1), A(e), T(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var r = d(e),
              n = Reflect.getOwnPropertyDescriptor(r, t);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: n.enumerable,
                  value: r[t],
                }
              : n;
          },
          defineProperty: function () {
            n(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            n(12);
          },
        },
        B = {};
      a(H, function (e, t) {
        B[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (B.deleteProperty = function (e, t) {
          return B.set.call(this, e, t, void 0);
        }),
        (B.set = function (e, t, r) {
          return H.set.call(this, e[0], t, r, e[0]);
        });
      var $ = new ((function () {
          function e(e) {
            var t = this;
            (this.g = V),
              (this.F = !0),
              (this.produce = function (e, r, i) {
                if ("function" == typeof e && "function" != typeof r) {
                  var a,
                    s = r;
                  return (
                    (r = e),
                    function (e) {
                      var n = this;
                      void 0 === e && (e = s);
                      for (
                        var i = arguments.length,
                          o = Array(i > 1 ? i - 1 : 0),
                          a = 1;
                        a < i;
                        a++
                      )
                        o[a - 1] = arguments[a];
                      return t.produce(e, function (e) {
                        var t;
                        return (t = r).call.apply(t, [n, e].concat(o));
                      });
                    }
                  );
                }
                if (
                  ("function" != typeof r && n(6),
                  void 0 !== i && "function" != typeof i && n(7),
                  o(e))
                ) {
                  var u = x(t),
                    l = M(t, e, void 0),
                    c = !0;
                  try {
                    (a = r(l)), (c = !1);
                  } finally {
                    c ? b(u) : w(u);
                  }
                  return "undefined" != typeof Promise && a instanceof Promise
                    ? a.then(
                        function (e) {
                          return g(u, i), O(e, u);
                        },
                        function (e) {
                          throw (b(u), e);
                        }
                      )
                    : (g(u, i), O(a, u));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (a = r(e)) && (a = e),
                    a === D && (a = void 0),
                    t.F && p(a, !0),
                    i)
                  ) {
                    var f = [],
                      d = [];
                    y("Patches").M(e, a, f, d), i(f, d);
                  }
                  return a;
                }
                n(21, e);
              }),
              (this.produceWithPatches = function (e, r) {
                if ("function" == typeof e)
                  return function (r) {
                    for (
                      var n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    return t.produceWithPatches(r, function (t) {
                      return e.apply(void 0, [t].concat(i));
                    });
                  };
                var n,
                  i,
                  o = t.produce(e, r, function (e, t) {
                    (n = e), (i = t);
                  });
                return "undefined" != typeof Promise && o instanceof Promise
                  ? o.then(function (e) {
                      return [e, n, i];
                    })
                  : [o, n, i];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              o(e) || n(8),
                i(e) &&
                  ((t = e),
                  i(t) || n(22, t),
                  (e = (function e(t) {
                    if (!o(t)) return t;
                    var r,
                      n = t[G],
                      i = s(t);
                    if (n) {
                      if (!n.P && (n.i < 4 || !y("ES5").K(n))) return n.t;
                      (n.I = !0), (r = _(t, i)), (n.I = !1);
                    } else r = _(t, i);
                    return (
                      a(r, function (t, i) {
                        var o, a;
                        (n && (2 === s((o = n.t)) ? o.get(t) : o[t]) === i) ||
                          l(r, t, e(i));
                      }),
                      3 === i ? new Set(r) : r
                    );
                  })(t)));
              var t,
                r = x(this),
                u = M(this, e, void 0);
              return (u[G].C = !0), w(r), u;
            }),
            (t.finishDraft = function (e, t) {
              var r,
                n = (e && e[G]).A;
              return g(n, t), O(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.F = e;
            }),
            (t.setUseProxies = function (e) {
              e && !V && n(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              for (r = t.length - 1; r >= 0; r--) {
                var r,
                  n = t[r];
                if (0 === n.path.length && "replace" === n.op) {
                  e = n.value;
                  break;
                }
              }
              r > -1 && (t = t.slice(r + 1));
              var o = y("Patches").$;
              return i(e)
                ? o(e, t)
                : this.produce(e, function (e) {
                    return o(e, t);
                  });
            }),
            e
          );
        })())(),
        K = $.produce;
      $.produceWithPatches.bind($),
        $.setAutoFreeze.bind($),
        $.setUseProxies.bind($),
        $.applyPatches.bind($),
        $.createDraft.bind($),
        $.finishDraft.bind($),
        (t.ZP = K);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [49774, 40179], function () {
      return t(6840), t(90387);
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=_app-1a232fc4d6e283d2.js.map
