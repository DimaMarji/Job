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
        source: "/job-details/:jobId",
        destination: "/JobList/:jobId",
      },    {
        source: "/companies-list",
        destination: "/CompaniesList",
    },
  {
    source: "/company-details/:companyId",
    destination: "/CompaniesList/:companyId",
  },
        {
            source: '/login',
            destination: '/Login',
        },

      { source: "/error", destination: "/GeneralError" }
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web.syriajob.com",
      }, {
        protocol: "https",
        hostname: "test.syriajob.com",
      },
    ],
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