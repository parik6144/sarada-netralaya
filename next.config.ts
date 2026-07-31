import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone is for Docker/self-host. Vercel uses its own Next.js builder.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // `public/` is CDN-only on Vercel; the mail logo must be traced into the function.
  outputFileTracingIncludes: {
    '/api/**': ['./public/sarada-logo.png'],
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/acme-challenge/:token',
        destination: '/api/acme-challenge/:token',
      },
    ];
  },
};

export default nextConfig;
