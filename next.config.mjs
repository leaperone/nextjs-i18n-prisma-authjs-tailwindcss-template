import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nextui.org' },
      { protocol: 'https', hostname: 'app.requestly.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.hdslb.com' },
      { protocol: 'https', hostname: '*.bitiful.net' },
      { protocol: 'https', hostname: 'workers.vrp.moe' },
      { protocol: 'https', hostname: '*.s3.bitiful.net' },
      { protocol: 'https', hostname: 'wsrv.nl' },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: 'frame-src *.cloudflare.com',
        },
      ],
    },
  ],
  experimental: { 
    serverComponentsExternalPackages: [
      '@aws-sdk/client-s3', '@aws-sdk/s3-request-presigner'
    ] 
  },
};

export default nextConfig;
