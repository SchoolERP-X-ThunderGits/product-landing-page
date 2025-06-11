/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Keep this line for static export
    images: {
      domains: ['images.unsplash.com'],
      unoptimized: true, // <-- ADD THIS LINE
    },
};

export default nextConfig;