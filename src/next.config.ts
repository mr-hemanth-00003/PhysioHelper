
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Trigger rebuild to resolve HMR issue
  /* config options here */
  experimental: {
    turbo: {
      loaders: {
        // Handle .ico files with a Turbopack-compatible loader
        '.ico': ['raw-loader'],
      },
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
