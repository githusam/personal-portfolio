/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  output: "export",
  distDir: "dist",
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

module.exports = nextConfig;
