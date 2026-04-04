/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow connections from the local IP for mobile testing
  allowedDevOrigins: ['192.168.1.3', 'localhost:3000'],
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Optimization for missing images
    unoptimized: true,
  },
};

export default nextConfig;
