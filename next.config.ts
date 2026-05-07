import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Standard basePath configuration for GitHub Pages
  basePath: isProd ? "/Ishrat-s-Hair-And-Skin-Studio" : "",
  // assetPrefix is often redundant when basePath is set, removing to avoid potential conflicts
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
