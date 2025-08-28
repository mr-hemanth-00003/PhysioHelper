'use client';

import { useEffect } from 'react';

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
      });
    };

    // Optimize script loading
    const optimizeScripts = () => {
      const scripts = document.querySelectorAll('script[src*="googlesyndication"]');
      scripts.forEach((script) => {
        if (!script.async) {
          script.async = true;
        }
        if (!script.defer) {
          script.defer = true;
        }
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
    suppressConsoleWarnings();

    // Cleanup function
    return () => {
      // Restore original console methods
      console.warn = console.warn;
      console.error = console.error;
    };
  }, []);

  return <>{children}</>;
}

export default PerformanceOptimizer;
