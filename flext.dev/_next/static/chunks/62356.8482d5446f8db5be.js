(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [62356],
  {
    62356: function () {
      !(function (n) {
        var t = n.util.clone(n.languages.javascript),
          e = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
          a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
          s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
        function g(n, t) {
          return RegExp(
            (n = n
              .replace(/<S>/g, function () {
                return e;
              })
              .replace(/<BRACES>/g, function () {
                return a;
              })
              .replace(/<SPREAD>/g, function () {
                return s;
              })),
            t
          );
        }
        (s = g(s).source),
          (n.languages.jsx = n.languages.extend("markup", t)),
          (n.languages.jsx.tag.pattern = g(
            /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
              .source
          )),
          (n.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
          (n.languages.jsx.tag.inside["attr-value"].pattern =
            /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
          (n.languages.jsx.tag.inside.tag.inside["class-name"] =
            /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
          (n.languages.jsx.tag.inside.comment = t.comment),
          n.languages.insertBefore(
            "inside",
            "attr-name",
            {
              spread: {
                pattern: g(/<SPREAD>/.source),
                inside: n.languages.jsx,
              },
            },
            n.languages.jsx.tag
          ),
          n.languages.insertBefore(
            "inside",
            "special-attr",
            {
              script: {
                pattern: g(/=<BRACES>/.source),
                alias: "language-javascript",
                inside: {
                  "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation",
                  },
                  rest: n.languages.jsx,
                },
              },
            },
            n.languages.jsx.tag
          );
        var o = function (n) {
            return n
              ? "string" == typeof n
                ? n
                : "string" == typeof n.content
                ? n.content
                : n.content.map(o).join("")
              : "";
          },
          c = function (t) {
            for (var e = [], a = 0; a < t.length; a++) {
              var s = t[a],
                g = !1;
              if (
                ("string" != typeof s &&
                  ("tag" === s.type &&
                  s.content[0] &&
                  "tag" === s.content[0].type
                    ? "</" === s.content[0].content[0].content
                      ? e.length > 0 &&
                        e[e.length - 1].tagName ===
                          o(s.content[0].content[1]) &&
                        e.pop()
                      : "/>" === s.content[s.content.length - 1].content ||
                        e.push({
                          tagName: o(s.content[0].content[1]),
                          openedBraces: 0,
                        })
                    : e.length > 0 &&
                      "punctuation" === s.type &&
                      "{" === s.content
                    ? e[e.length - 1].openedBraces++
                    : e.length > 0 &&
                      e[e.length - 1].openedBraces > 0 &&
                      "punctuation" === s.type &&
                      "}" === s.content
                    ? e[e.length - 1].openedBraces--
                    : (g = !0)),
                (g || "string" == typeof s) &&
                  e.length > 0 &&
                  0 === e[e.length - 1].openedBraces)
              ) {
                var r = o(s);
                a < t.length - 1 &&
                  ("string" == typeof t[a + 1] ||
                    "plain-text" === t[a + 1].type) &&
                  ((r += o(t[a + 1])), t.splice(a + 1, 1)),
                  a > 0 &&
                    ("string" == typeof t[a - 1] ||
                      "plain-text" === t[a - 1].type) &&
                    ((r = o(t[a - 1]) + r), t.splice(a - 1, 1), a--),
                  (t[a] = new n.Token("plain-text", r, null, r));
              }
              s.content && "string" != typeof s.content && c(s.content);
            }
          };
        n.hooks.add("after-tokenize", function (n) {
          ("jsx" === n.language || "tsx" === n.language) && c(n.tokens);
        });
      })(Prism);
    },
  },
]);
//# sourceMappingURL=62356.8482d5446f8db5be.js.map
