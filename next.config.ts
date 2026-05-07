import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Hardcoded basePath to guarantee it is applied during build
  basePath: "/Ishrat-s-Hair-And-Skin-Studio",
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
