module.exports = {
  important: true,
  darkMode: "class",
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [/bg-/, /focus:ring/, /text-/],
    },
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
