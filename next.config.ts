
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // TypeScript and ESLint configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
    optimizeCss: true,
    optimizeServerReact: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },

  // Server external packages (moved from experimental)
  serverExternalPackages: ['sharp'],

  // Turbopack configuration (stable)
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/app': './src/app',
    },
  },

  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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

  // Webpack configuration for better performance
  webpack: (config, { dev, isServer, webpack }) => {
    // Advanced bundle optimization
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 5000,
        maxSize: 150000,
        minChunks: 1,
        maxAsyncRequests: 50,
        maxInitialRequests: 50,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            enforce: true,
            maxSize: 100000,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react',
            priority: 20,
            chunks: 'all',
            enforce: true,
            maxSize: 80000,
          },
          ui: {
            test: /[\\/]src[\\/]components[\\/]ui[\\/]/,
            name: 'ui',
            priority: 10,
            chunks: 'all',
            enforce: true,
            maxSize: 80000,
          },
          icons: {
            test: /[\\/]node_modules[\\/](lucide-react|react-icons)[\\/]/,
            name: 'icons',
            priority: 15,
            chunks: 'all',
            enforce: true,
            maxSize: 30000,
          },
          utils: {
            test: /[\\/]src[\\/](lib|utils|hooks)[\\/]/,
            name: 'utils',
            priority: 5,
            chunks: 'all',
            enforce: true,
            maxSize: 80000,
          },
          pages: {
            test: /[\\/]src[\\/]app[\\/]/,
            name: 'pages',
            priority: 1,
            chunks: 'all',
            enforce: true,
            maxSize: 120000,
          },
        },
      };
    }

    // Tree shaking optimization
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;
    config.optimization.providedExports = true;

    // Module concatenation
    config.optimization.concatenateModules = !dev;

    // Dead code elimination
    config.optimization.flagIncludedChunks = true;

    // Module resolution optimization
    config.resolve = config.resolve || {};
    config.resolve.modules = ['node_modules'];
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };

    // Handle AdSense scripts
    config.externals = config.externals || [];
    config.externals.push({
      'googlesyndication': 'googlesyndication',
    });

    // Add performance hints with stricter limits
    config.performance = {
      hints: dev ? false : 'warning',
      maxEntrypointSize: 300000, // 300KB
      maxAssetSize: 300000, // 300KB
    };

    // Add bundle analyzer in development
    if (dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true,
        })
      );
    }

    // Add aggressive optimizations for production
    if (!dev) {
      // Enable module concatenation
      config.optimization.concatenateModules = true;
      
      // Enable scope hoisting
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Add compression
      const CompressionPlugin = require('compression-webpack-plugin');
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 8192,
          minRatio: 0.8,
        })
      );
      
      // Add Terser plugin for better minification
      const TerserPlugin = require('terser-webpack-plugin');
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log', 'console.info', 'console.debug'],
            },
            mangle: true,
          },
          extractComments: false,
        }),
      ];
    }

    return config;
  },

  // Headers for better performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=3600',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:jpg|jpeg|png|gif|webp|avif|svg|ico))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:css|js))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Powered by header
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,

  // Swc minification is enabled by default in Next.js 13+
};

export default nextConfig;
