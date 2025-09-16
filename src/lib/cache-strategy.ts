// Advanced caching strategies for PhysioHelper

import { caching } from './performance-utils';

// Cache configuration for different resource types
export const cacheConfig = {
  // Static assets (images, fonts, CSS, JS)
  static: {
    'Cache-Control': `public, max-age=${caching.staticAssets.maxAge}, immutable`,
    'Expires': new Date(Date.now() + caching.staticAssets.maxAge * 1000).toUTCString(),
  },
  
  // API responses
  api: {
    'Cache-Control': `public, max-age=${caching.apiResponses.maxAge}, s-maxage=${caching.apiResponses.staleWhileRevalidate}`,
    'Vary': 'Accept-Encoding',
  },
  
  // HTML pages
  pages: {
    'Cache-Control': `public, max-age=${caching.pages.maxAge}, s-maxage=${caching.pages.staleWhileRevalidate}`,
    'Vary': 'Accept-Encoding, Accept',
  },
  
  // Dynamic content
  dynamic: {
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
};

// Service Worker cache strategies
export const swCacheStrategies = {
  // Cache first for static assets
  cacheFirst: (request: Request) => {
    return caches.match(request).then((response) => {
      return response || fetch(request).then((fetchResponse) => {
        const responseClone = fetchResponse.clone();
        caches.open('static-v1').then((cache) => {
          cache.put(request, responseClone);
        });
        return fetchResponse;
      });
    });
  },
  
  // Network first for API calls
  networkFirst: (request: Request) => {
    return fetch(request).then((response) => {
      const responseClone = response.clone();
      caches.open('api-v1').then((cache) => {
        cache.put(request, responseClone);
      });
      return response;
    }).catch(() => {
      return caches.match(request);
    });
  },
  
  // Stale while revalidate for pages
  staleWhileRevalidate: (request: Request) => {
    return caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open('pages-v1').then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      });
      
      return cachedResponse || fetchPromise;
    });
  },
};

// Browser cache headers
export function getCacheHeaders(type: keyof typeof cacheConfig) {
  return cacheConfig[type];
}

// Cache invalidation strategies
export const cacheInvalidation = {
  // Version-based invalidation
  versioned: (version: string) => ({
    'Cache-Control': `public, max-age=31536000, immutable`,
    'ETag': `"${version}"`,
  }),
  
  // Time-based invalidation
  timeBased: (maxAge: number) => ({
    'Cache-Control': `public, max-age=${maxAge}`,
    'Last-Modified': new Date().toUTCString(),
  }),
  
  // Content-based invalidation
  contentBased: (content: string) => {
    const hash = btoa(content).slice(0, 8);
    return {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'ETag': `"${hash}"`,
    };
  },
};

// CDN cache configuration
export const cdnCache = {
  // Cloudflare cache rules
  cloudflare: {
    static: {
      'Cache-Control': 'public, max-age=31536000',
      'Cloudflare-CDN-Cache-Control': 'max-age=31536000',
    },
    dynamic: {
      'Cache-Control': 'public, max-age=300',
      'Cloudflare-CDN-Cache-Control': 'max-age=300',
    },
  },
  
  // AWS CloudFront cache behaviors
  cloudfront: {
    static: {
      'Cache-Control': 'public, max-age=31536000',
      'CloudFront-Cache-Control': 'max-age=31536000',
    },
    dynamic: {
      'Cache-Control': 'public, max-age=300',
      'CloudFront-Cache-Control': 'max-age=300',
    },
  },
};

// Memory cache for client-side
class MemoryCache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  
  set(key: string, data: any, ttl: number = 300000) { // 5 minutes default
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }
  
  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }
  
  delete(key: string) {
    this.cache.delete(key);
  }
  
  clear() {
    this.cache.clear();
  }
  
  size() {
    return this.cache.size;
  }
}

export const memoryCache = new MemoryCache();

// Cache warming strategies
export const cacheWarming = {
  // Preload critical resources
  preloadCritical: async () => {
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/favicon.ico',
      '/og-image.jpg',
    ];
    
    for (const resource of criticalResources) {
      try {
        await fetch(resource, { method: 'HEAD' });
      } catch (error) {
        console.warn(`Failed to preload ${resource}:`, error);
      }
    }
  },
  
  // Prefetch likely next pages
  prefetchNextPages: async (currentPath: string) => {
    const prefetchMap: Record<string, string[]> = {
      '/': ['/about', '/resources', '/case-studies'],
      '/resources': ['/resources/anatomy', '/resources/clinical-skills'],
      '/case-studies': ['/articles'],
    };
    
    const nextPages = prefetchMap[currentPath] || [];
    
    for (const page of nextPages) {
      try {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      } catch (error) {
        console.warn(`Failed to prefetch ${page}:`, error);
      }
    }
  },
};

// Cache performance monitoring
export const cacheMonitoring = {
  // Track cache hit rates
  hitRates: new Map<string, { hits: number; misses: number }>(),
  
  recordHit(key: string) {
    const stats = this.hitRates.get(key) || { hits: 0, misses: 0 };
    stats.hits++;
    this.hitRates.set(key, stats);
  },
  
  recordMiss(key: string) {
    const stats = this.hitRates.get(key) || { hits: 0, misses: 0 };
    stats.misses++;
    this.hitRates.set(key, stats);
  },
  
  getHitRate(key: string) {
    const stats = this.hitRates.get(key);
    if (!stats) return 0;
    return stats.hits / (stats.hits + stats.misses);
  },
  
  getAllStats() {
    const stats: Record<string, number> = {};
    for (const [key] of this.hitRates) {
      stats[key] = this.getHitRate(key);
    }
    return stats;
  },
};
