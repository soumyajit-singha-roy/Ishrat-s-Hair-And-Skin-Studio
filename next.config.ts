import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Base path for GitHub Pages
  basePath: isProd ? "/Ishrat-s-Hair-And-Skin-Studio" : "",
  // Trailing slash is often required for static sites on GitHub Pages to handle paths correctly
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
