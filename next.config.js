/**
 * @type {import('next').NextConfig}
 */

const isProd = (process.env.NODE_ENV = "production");
const nextConfig = {
  basePath: isProd ? "/personal-portfolio" : "",
  assetPrefix: isProd ? "/personal-portfolio/" : "",
  trailingSlash: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
