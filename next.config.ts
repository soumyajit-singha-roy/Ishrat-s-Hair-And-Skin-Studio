import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Ishrat-s-Hair-And-Skin-Studio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
