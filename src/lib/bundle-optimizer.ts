// Bundle optimization utilities for better performance

// Tree shaking configuration
export const treeShakingConfig = {
  // Mark packages as side-effect free
  sideEffects: [
    '*.css',
    '*.scss',
    '*.sass',
    '*.less',
    '*.styl',
    '*.vue',
    '*.svelte',
  ],
  
  // Packages that should be tree-shaken
  treeShakeable: [
    'lodash-es',
    'date-fns',
    'ramda',
    'rxjs',
    'moment',
  ],
  
  // Packages that should be excluded from tree shaking
  noTreeShake: [
    'react',
    'react-dom',
    'next',
  ],
};

// Bundle size limits
export const bundleLimits = {
  // Maximum chunk sizes
  maxChunkSize: 200000, // 200KB
  maxEntrySize: 400000, // 400KB
  
  // Critical path limits
  criticalPath: {
    js: 150000, // 150KB
    css: 50000, // 50KB
  },
  
  // Non-critical path limits
  nonCriticalPath: {
    js: 100000, // 100KB
    css: 30000, // 30KB
  },
};

// Code splitting strategies
export const codeSplittingStrategies = {
  // Split by feature
  byFeature: {
    'ai-features': ['ai-assistant', 'ai-chat'],
    'search-features': ['drug-search', 'search'],
    'admin-features': ['admin-*'],
    'ui-components': ['ui/*'],
  },
  
  // Split by vendor
  byVendor: {
    'react-vendor': ['react', 'react-dom', 'scheduler'],
    'ui-vendor': ['lucide-react', 'react-icons'],
    'utils-vendor': ['lodash', 'date-fns', 'ramda'],
  },
  
  // Split by route
  byRoute: {
    'home': ['/'],
    'resources': ['/resources/*'],
    'courses': ['/courses/*'],
    'admin': ['/admin/*'],
  },
};

// Dynamic import patterns
export const dynamicImportPatterns = {
  // Heavy components that should be lazy loaded
  heavyComponents: [
    'ai-assistant',
    'drug-search',
    'document-viewer',
    'admin-*',
    'chart',
    'carousel',
    'calendar',
  ],
  
  // Components that can be preloaded
  preloadableComponents: [
    'header',
    'footer',
    'navigation',
  ],
  
  // Components that should be loaded on demand
  onDemandComponents: [
    'modal',
    'tooltip',
    'popover',
    'dropdown',
  ],
};

// Bundle analysis utilities
export const bundleAnalysis = {
  // Analyze bundle composition
  analyzeComposition: () => {
    if (typeof window === 'undefined') return null;
    
    const scripts = Array.from(document.querySelectorAll('script[src*="_next/static/chunks/"]'));
    const styles = Array.from(document.querySelectorAll('link[href*="_next/static/css/"]'));
    
    return {
      totalScripts: scripts.length,
      totalStyles: styles.length,
      scriptSources: scripts.map(s => s.getAttribute('src')),
      styleSources: styles.map(s => s.getAttribute('href')),
    };
  },
  
  // Check if bundle is within limits
  checkBundleLimits: () => {
    if (typeof window === 'undefined') return null;
    
    const scripts = Array.from(document.querySelectorAll('script[src*="_next/static/chunks/"]'));
    const totalSize = scripts.length * 50000; // Estimate 50KB per script
    
    return {
      withinLimits: totalSize < bundleLimits.maxEntrySize,
      estimatedSize: totalSize,
      limit: bundleLimits.maxEntrySize,
    };
  },
  
  // Get performance metrics
  getPerformanceMetrics: () => {
    if (typeof window === 'undefined') return null;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
      loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
    };
  },
};

// Optimization recommendations
export const optimizationRecommendations = {
  // Based on bundle analysis
  getRecommendations: (analysis: any) => {
    const recommendations = [];
    
    if (analysis.totalScripts > 20) {
      recommendations.push('Consider reducing the number of JavaScript chunks');
    }
    
    if (analysis.estimatedSize > bundleLimits.maxEntrySize) {
      recommendations.push('Bundle size exceeds recommended limits - consider code splitting');
    }
    
    if (analysis.totalStyles > 5) {
      recommendations.push('Consider consolidating CSS files');
    }
    
    return recommendations;
  },
  
  // Performance optimizations
  performanceOptimizations: [
    'Use dynamic imports for heavy components',
    'Implement proper code splitting',
    'Optimize images and assets',
    'Use tree shaking to remove unused code',
    'Implement lazy loading for non-critical components',
    'Use CDN for static assets',
    'Implement service worker for caching',
  ],
};

// Bundle optimization utilities
export const bundleUtils = {
  // Preload critical resources
  preloadCritical: () => {
    if (typeof window === 'undefined') return;
    
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/favicon.ico',
      '/og-image.jpg',
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  },
  
  // Prefetch likely next pages
  prefetchNextPages: (currentPath: string) => {
    if (typeof window === 'undefined') return;
    
    const prefetchMap: Record<string, string[]> = {
      '/': ['/about', '/resources', '/case-studies'],
      '/resources': ['/resources/anatomy', '/resources/clinical-skills'],
      '/case-studies': ['/articles'],
    };
    
    const nextPages = prefetchMap[currentPath] || [];
    
    nextPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  },
  
  // Optimize images
  optimizeImages: () => {
    if (typeof window === 'undefined') return;
    
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const image = img as HTMLImageElement;
      image.loading = 'lazy';
      image.decoding = 'async';
      
      // Add WebP support
      if (!image.src.includes('.webp') && !image.src.includes('?')) {
        image.src += '?format=webp';
      }
    });
  },
};
