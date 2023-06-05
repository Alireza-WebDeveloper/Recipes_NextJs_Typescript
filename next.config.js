/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: `${process.env.NEXT_PUBLIC_Protocol}`,
        hostname: `${process.env.NEXT_PUBLIC_HOST}`,
        port: `${process.env.NEXT_PUBLIC_API_PORT}`,
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
