(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [21029],
  {
    21029: function () {
      var e, a, t;
      (a = (e = Prism).util.clone(e.languages.typescript)),
        (e.languages.tsx = e.languages.extend("jsx", a)),
        delete e.languages.tsx.parameter,
        delete e.languages.tsx["literal-property"],
        ((t = e.languages.tsx.tag).pattern = RegExp(
          /(^|[^\w$]|(?=<\/))/.source + "(?:" + t.pattern.source + ")",
          t.pattern.flags
        )),
        (t.lookbehind = !0);
    },
  },
]);
//# sourceMappingURL=21029.bd431904ec3dad6f.js.map
