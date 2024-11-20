/** @type {import('next').NextConfig} **/
const nextConfig = {
    images: {
        domains: ['senticabathware.com'],
    },
    eslint: {
    // This allows production builds to successfully complete even if the project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
