'use client';

import { useEffect } from 'react';
import { MobileOptimizer } from './mobile-optimizer';
import { performanceUtils } from './performance-monitor';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  useEffect(() => {
    // Optimize image loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
        
        // Apply performance optimizations
        performanceUtils.optimizeImage(img as HTMLImageElement);
      });
    };

    // Optimize script loading
    const optimizeScripts = () => {
      const scripts = document.querySelectorAll('script[src*="googlesyndication"]');
      scripts.forEach((script) => {
        const scriptElement = script as HTMLScriptElement;
        if (!scriptElement.async) {
          scriptElement.async = true;
        }
        if (!scriptElement.defer) {
          scriptElement.defer = true;
        }
      });
    };

    // Optimize fonts
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[href*="fonts"]');
      fontLinks.forEach((link) => {
        const fontLink = link as HTMLLinkElement;
        fontLink.rel = 'preload';
        fontLink.as = 'font';
        fontLink.crossOrigin = 'anonymous';
      });
    };

    // Optimize CSS
    const optimizeCSS = () => {
      const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
      styleSheets.forEach((link) => {
        const styleLink = link as HTMLLinkElement;
        if (!styleLink.media) {
          styleLink.media = 'all';
        }
      });
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
        { href: '/favicon.ico', as: 'image' },
        { href: '/og-image.jpg', as: 'image' },
      ];

      criticalResources.forEach(({ href, as, type }) => {
        performanceUtils.preloadResource(href, as, type);
      });
    };

    // Handle console warnings
    const suppressConsoleWarnings = () => {
      const originalWarn = console.warn;
      const originalError = console.error;
      
      // Suppress specific warnings that are not critical
      console.warn = (...args) => {
        const message = args[0];
        if (typeof message === 'string') {
          // Suppress specific warnings
          if (message.includes('AdSense head tag') || 
              message.includes('link preload') ||
              message.includes('Images loaded lazily')) {
            return;
          }
        }
        originalWarn.apply(console, args);
      };

      // Suppress specific errors that are not critical
      console.error = (...args) => {
        const message = args[0];
        if (typeof message === 'string') {
          // Suppress specific errors
          if (message.includes('AdSense') || 
              message.includes('Tracking Prevention')) {
            return;
          }
        }
        originalError.apply(console, args);
      };
    };

    // Apply optimizations
    optimizeImages();
    optimizeScripts();
    optimizeFonts();
    optimizeCSS();
    preloadCriticalResources();
    suppressConsoleWarnings();

    // Cleanup function
    return () => {
      // Restore original console methods
      console.warn = console.warn;
      console.error = console.error;
    };
  }, []);

  return (
    <MobileOptimizer>
      {children}
    </MobileOptimizer>
  );
}

export default PerformanceOptimizer;
