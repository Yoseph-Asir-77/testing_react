import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/testing_react",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;