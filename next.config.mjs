// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/:slug([a-zA-Z0-9_-]+)',
        destination: '/api/redirect/:slug',
      },
    ];
  },
};

export default nextConfig;