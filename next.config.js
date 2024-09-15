const withCSS = require("@zeit/next-css");
const path = require("path");

const { i18n } = require('./next-i18next.config'); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n, // Add i18n configuration here
  async rewrites() {
    return [
      // Rewrites
      { source: "/", destination: "/Home" },
      { source: "/error", destination: "/GeneralError" }
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
   
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  experimental: { appDir: true },

  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes("_app")) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });
    return config;
  },
};

module.exports = nextConfig; 