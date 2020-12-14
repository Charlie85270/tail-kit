module.exports = {
  important: true,
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
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
