/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["musicmeta-phinf.pstatic.net"],
  },
};

module.exports = nextConfig;
