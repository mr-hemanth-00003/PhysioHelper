// Performance optimization utilities for PhysioHelper

// Image optimization utilities
export const imageOptimization = {
  // Responsive image sizes for different breakpoints
  sizes: {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw',
  },
  
  // Quality settings for different image types
  quality: {
    hero: 90,
    content: 80,
    thumbnail: 70,
    avatar: 75,
  },
  
  // Format preferences (WebP and AVIF for better compression)
  formats: ['image/avif', 'image/webp', 'image/jpeg'],
  
  // Placeholder generation
  placeholder: 'blur' as const,
};

// Lazy loading configuration
export const lazyLoading = {
  // Intersection Observer options
  rootMargin: '50px',
  threshold: 0.1,
  
  // Preload critical resources
  criticalResources: [
    '/fonts/inter-var.woff2',
    '/favicon.ico',
  ],
};

// Code splitting strategies
export const codeSplitting = {
  // Dynamic imports for heavy components
  heavyComponents: [
    'ai-assistant',
    'drug-search',
    'document-viewer',
  ],
  
  // Route-based splitting
  routes: {
    critical: ['/', '/about', '/contact'],
    secondary: ['/resources', '/case-studies'],
    heavy: ['/ai-assistant', '/drug-search', '/dashboard'],
  },
};

// Caching strategies
export const caching = {
  // Static assets cache
  staticAssets: {
    maxAge: 31536000, // 1 year
    immutable: true,
  },
  
  // API responses cache
  apiResponses: {
    maxAge: 3600, // 1 hour
    staleWhileRevalidate: 86400, // 1 day
  },
  
  // Page cache
  pages: {
    maxAge: 300, // 5 minutes
    staleWhileRevalidate: 3600, // 1 hour
  },
};

// Performance monitoring
export const performanceMonitoring = {
  // Core Web Vitals thresholds
  thresholds: {
    LCP: 2500, // Largest Contentful Paint
    FID: 100,  // First Input Delay
    CLS: 0.1,  // Cumulative Layout Shift
    FCP: 1800, // First Contentful Paint
    TTFB: 600, // Time to First Byte
  },
  
  // Performance budgets
  budgets: {
    js: 250000, // 250KB
    css: 50000, // 50KB
    images: 1000000, // 1MB
    fonts: 100000, // 100KB
  },
};

// SEO optimization utilities
export const seoOptimization = {
  // Meta tag optimization
  metaTags: {
    title: {
      minLength: 30,
      maxLength: 60,
      optimalLength: 50,
    },
    description: {
      minLength: 120,
      maxLength: 160,
      optimalLength: 150,
    },
  },
  
  // Structured data validation
  structuredData: {
    required: ['Organization', 'WebSite'],
    optional: ['BreadcrumbList', 'FAQPage', 'Article'],
  },
  
  // Image SEO
  images: {
    altText: {
      required: true,
      minLength: 5,
      maxLength: 125,
    },
    fileName: {
      descriptive: true,
      lowercase: true,
      hyphens: true,
    },
  },
};

// Mobile optimization
export const mobileOptimization = {
  // Touch targets
  touchTargets: {
    minSize: 44, // 44px minimum
    spacing: 8,  // 8px spacing
  },
  
  // Viewport optimization
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // Font optimization
  fonts: {
    display: 'swap',
    preload: true,
    fallback: 'system-ui, -apple-system, sans-serif',
  },
};

// Bundle optimization
export const bundleOptimization = {
  // Tree shaking configuration
  treeShaking: {
    sideEffects: false,
    usedExports: true,
  },
  
  // Minification settings
  minification: {
    removeConsole: true,
    removeDebugger: true,
    dropComments: true,
  },
  
  // Compression
  compression: {
    gzip: true,
    brotli: true,
    level: 6,
  },
};

// Critical CSS extraction
export const criticalCSS = {
  // Critical above-the-fold styles
  critical: [
    'globals.css',
    'components/ui/button.css',
    'components/ui/card.css',
    'components/header.css',
  ],
  
  // Non-critical styles to lazy load
  nonCritical: [
    'components/admin-*.css',
    'pages/dashboard.css',
    'components/ai-assistant.css',
  ],
};

// Preloading strategies
export const preloading = {
  // Critical resources to preload
  critical: [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    { href: '/favicon.ico', as: 'image' },
  ],
  
  // Route-based preloading
  routes: {
    '/': ['/resources', '/case-studies'],
    '/resources': ['/resources/anatomy', '/resources/clinical-skills'],
    '/case-studies': ['/articles'],
  },
};

// Service Worker configuration
export const serviceWorker = {
  // Cache strategies
  strategies: {
    static: 'CacheFirst',
    api: 'NetworkFirst',
    images: 'CacheFirst',
    fonts: 'CacheFirst',
  },
  
  // Cache versioning
  version: '1.0.0',
  
  // Offline fallbacks
  offline: {
    page: '/offline',
    image: '/placeholder.jpg',
  },
};

// Performance metrics collection
export const metricsCollection = {
  // Web Vitals collection
  webVitals: {
    enabled: true,
    sampleRate: 1.0,
    debug: false,
  },
  
  // Custom metrics
  customMetrics: [
    'page_load_time',
    'interaction_time',
    'resource_load_time',
  ],
  
  // Reporting
  reporting: {
    endpoint: '/api/metrics',
    batchSize: 10,
    flushInterval: 5000,
  },
};
