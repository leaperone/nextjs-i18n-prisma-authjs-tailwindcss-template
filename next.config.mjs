/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {},
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'nextui.org' }],
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
  // serverExternalPackages: ['@aws-sdk/client-s3', '@aws-sdk/s3-request-presigner'], // TODO: Add this back when we have a way to handle the S3 bucket
};

export default nextConfig;
