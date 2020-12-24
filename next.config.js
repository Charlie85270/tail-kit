const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  distDir: "build",
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  webpack: (config) => {
    // extend your webpack configuration here
    return config;
  },
});
