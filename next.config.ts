import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  experimental: { inlineCss: true, globalNotFound: true },
  trailingSlash: true,
  images: { deviceSizes: [480, 960, 1600], imageSizes: [] },
};
export default nextConfig;
