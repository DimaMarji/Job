const withCSS = require("@zeit/next-css");
module.exports = withCSS();
/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      // { source: "/ggg", destination: "/Home" },
      { source: "/", destination: "/Home" },
      { source: "/about-us", destination: "/AboutUs" },
      { source: "/blogs", destination: "/Blogs" },
      {
        source: "/services/:serviceName/:subServiceName",
        destination: "/Services/:serviceName/:subServiceName",
      },
      { source: "/contact-us", destination: "/ContactUs" },
      {
        source: "/jobs-list",
        destination: "/JobList",
      },
      {
        source: "/our-process/ui-ux-process",
        destination: "/OurProcess/UIUXProcess",
      },
      // Errors
      {
        source: "/error",
        destination: "/GeneralError",
      }
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "websiteback.zcoderz.com",
      },
    ],
  },
  // devIndicators: {
  //   buildActivity: false,
  // },
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
