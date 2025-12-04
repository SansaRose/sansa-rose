import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Disable prefetching for better compatibility
  reactStrictMode: true,
};

export default nextConfig;
