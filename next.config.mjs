import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['framer-motion'] = require.resolve('framer-motion');
    return config;
  },
};

export default nextConfig;
