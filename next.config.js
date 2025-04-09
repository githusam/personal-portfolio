/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: "/personal-portfolio",
  assetPrefix: "/personal-portfolio/",
  trailingSlash: true,
  output: "export",
  distDir: "dist",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/personal-portfolio",
  },
};

module.exports = nextConfig;
