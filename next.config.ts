import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone is for Docker/self-host. Vercel uses its own Next.js builder.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
