'use client';

import { useEffect, useState } from 'react';
import { performanceMonitoring } from '@/lib/performance-utils';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  overallScore: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    overallScore: 0,
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const newMetrics: Partial<PerformanceMetrics> = {};

      // Measure LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element };
        newMetrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Measure FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          if ('processingStart' in fidEntry) {
            newMetrics.fid = fidEntry.processingStart - fidEntry.startTime;
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Measure CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!clsEntry.hadRecentInput && 'value' in clsEntry) {
            clsValue += clsEntry.value || 0;
          }
        }
        newMetrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Measure FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            newMetrics.fcp = entry.startTime;
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Measure TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      // Calculate overall score
      const calculateScore = () => {
        let score = 100;
        const thresholds = performanceMonitoring.thresholds;

        if (newMetrics.lcp && newMetrics.lcp > thresholds.LCP) {
          score -= Math.min(30, (newMetrics.lcp - thresholds.LCP) / 100);
        }
        if (newMetrics.fid && newMetrics.fid > thresholds.FID) {
          score -= Math.min(25, (newMetrics.fid - thresholds.FID) * 2);
        }
        if (newMetrics.cls && newMetrics.cls > thresholds.CLS) {
          score -= Math.min(20, (newMetrics.cls - thresholds.CLS) * 100);
        }
        if (newMetrics.fcp && newMetrics.fcp > thresholds.FCP) {
          score -= Math.min(15, (newMetrics.fcp - thresholds.FCP) / 100);
        }
        if (newMetrics.ttfb && newMetrics.ttfb > thresholds.TTFB) {
          score -= Math.min(10, (newMetrics.ttfb - thresholds.TTFB) / 100);
        }

        return Math.max(0, Math.round(score));
      };

      // Update metrics after a delay to allow all measurements
      setTimeout(() => {
        setMetrics(prev => {
          const updated = { ...prev, ...newMetrics };
          updated.overallScore = calculateScore();
          return updated as PerformanceMetrics;
        });
        setIsMonitoring(false);
      }, 3000);

      // Cleanup observers
      setTimeout(() => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      }, 5000);
    };

    setIsMonitoring(true);
    measurePerformance();
  }, []);

  // Send metrics to analytics
  useEffect(() => {
    if (metrics.overallScore > 0 && typeof window.gtag === 'function') {
      window.gtag('event', 'performance_metrics', {
        lcp: metrics.lcp,
        fid: metrics.fid,
        cls: metrics.cls,
        fcp: metrics.fcp,
        ttfb: metrics.ttfb,
        overall_score: metrics.overallScore,
        page_url: window.location.href,
        timestamp: new Date().toISOString(),
      });
    }
  }, [metrics]);

  // Development mode: Show performance metrics
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed top-4 right-4 bg-white border rounded-lg p-4 shadow-lg z-50 max-w-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm">Performance</h3>
          <span className={`text-lg font-bold ${
            metrics.overallScore >= 90 ? 'text-green-600' : 
            metrics.overallScore >= 70 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {isMonitoring ? '...' : `${metrics.overallScore}%`}
          </span>
        </div>
        
        {!isMonitoring && (
          <div className="text-xs space-y-1">
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={metrics.lcp && metrics.lcp > performanceMonitoring.thresholds.LCP ? 'text-red-600' : 'text-green-600'}>
                {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FID:</span>
              <span className={metrics.fid && metrics.fid > performanceMonitoring.thresholds.FID ? 'text-red-600' : 'text-green-600'}>
                {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={metrics.cls && metrics.cls > performanceMonitoring.thresholds.CLS ? 'text-red-600' : 'text-green-600'}>
                {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={metrics.fcp && metrics.fcp > performanceMonitoring.thresholds.FCP ? 'text-red-600' : 'text-green-600'}>
                {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={metrics.ttfb && metrics.ttfb > performanceMonitoring.thresholds.TTFB ? 'text-red-600' : 'text-green-600'}>
                {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}

// Performance optimization utilities
export const performanceUtils = {
  // Preload critical resources
  preloadResource: (href: string, as: string, type?: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  },

  // Prefetch next page
  prefetchPage: (href: string) => {
    if (typeof window === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  },

  // Defer non-critical JavaScript
  deferScript: (src: string) => {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  },

  // Optimize images
  optimizeImage: (img: HTMLImageElement) => {
    img.loading = 'lazy';
    img.decoding = 'async';
    
    // Add intersection observer for better loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          if (target.dataset.src) {
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
          }
          observer.unobserve(target);
        }
      });
    });
    
    observer.observe(img);
  },

  // Measure resource loading time
  measureResourceTime: (resourceName: string) => {
    if (typeof window === 'undefined') return;
    
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'resource_load_time', {
          resource_name: resourceName,
          load_time: Math.round(loadTime),
          timestamp: new Date().toISOString(),
        });
      }
      
      return loadTime;
    };
  },

  // Check if connection is slow
  isSlowConnection: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    const connection = (navigator as any).connection;
    if (!connection) return false;
    
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' ||
           connection.saveData === true;
  },

  // Adaptive loading based on connection
  adaptiveLoad: (fastCallback: () => void, slowCallback: () => void) => {
    if (performanceUtils.isSlowConnection()) {
      slowCallback();
    } else {
      fastCallback();
    }
  },
};
