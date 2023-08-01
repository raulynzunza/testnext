/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "_static",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
