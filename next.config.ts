import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/testing_react",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};


export default nextConfig;