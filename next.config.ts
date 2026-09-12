import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/uk", destination: "/", permanent: true },
      { source: "/uk/:path*", destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
