/* eslint-disable no-undef */
/**
 * @type {import('next').NextConfig}
 */
let nextConfig = {
  env: {
    // env for client side
    ROLLBAR_ID: process.env.ROLLBAR_ID,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};

try {
  // eslint-disable-next-line
  const withTM = require("next-transpile-modules")([]);
  nextConfig = withTM(nextConfig);
} catch (error) {
  console.log('');
}

module.exports = nextConfig;
