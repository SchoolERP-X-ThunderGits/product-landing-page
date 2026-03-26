/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com'],
      unoptimized: true, // <-- ADD THIS LINE
    },
};

export default nextConfig;
