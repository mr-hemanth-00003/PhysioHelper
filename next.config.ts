
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Trigger rebuild to resolve HMR issue
  /* config options here */
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
  webpack: (config, { isServer }) => {
    // Prevent webpack from trying to process fonts and icons as modules
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    
    // find the rule that handles SVG files and exclude favicon.ico
    const svgRule = config.module.rules.find((rule) => {
        return typeof rule === 'object' && rule.test instanceof RegExp && rule.test.test('.svg');
    });

    if (svgRule && typeof svgRule === 'object') {
        svgRule.exclude = [/\.ico$/i];
    }
    
    // add a rule to handle .ico files
    config.module.rules.push({
        test: /\.ico$/i,
        type: 'asset/resource',
        generator: {
            filename: '[name][ext]'
        }
    });

    return config;
  },
};

export default nextConfig;
