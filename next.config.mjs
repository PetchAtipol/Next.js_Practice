/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ✅ Required for static export
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        // port: '',
        // pathname: '/account123/**',
        // search: '',
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
