import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/quiz", destination: "/quizzes", permanent: true }]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Disable prefetching for better compatibility
  reactStrictMode: true,
};

export default nextConfig;
