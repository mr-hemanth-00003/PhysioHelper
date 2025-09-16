'use client';

import { useEffect, useState } from 'react';
import { mobileOptimization } from '@/lib/performance-utils';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

export function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isMobileDevice || (isTouchDevice && isSmallScreen));
    };

    // Detect slow connection
    const checkConnection = () => {
      const connection = (navigator as any).connection;
      if (connection) {
        const isSlow = connection.effectiveType === 'slow-2g' || 
                      connection.effectiveType === '2g' ||
                      connection.saveData === true;
        setIsSlowConnection(isSlow);
      }
    };

    // Initial check
    checkMobile();
    checkConnection();

    // Listen for resize events
    const handleResize = () => {
      checkMobile();
    };

    // Listen for connection changes
    const handleConnectionChange = () => {
      checkConnection();
    };

    window.addEventListener('resize', handleResize);
    if ((navigator as any).connection) {
      (navigator as any).connection.addEventListener('change', handleConnectionChange);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if ((navigator as any).connection) {
        (navigator as any).connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, []);

  // Optimize for mobile
  useEffect(() => {
    if (isMobile) {
      // Optimize viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          `width=${mobileOptimization.viewport.width}, ` +
          `initial-scale=${mobileOptimization.viewport.initialScale}, ` +
          `maximum-scale=${mobileOptimization.viewport.maximumScale}, ` +
          `user-scalable=${mobileOptimization.viewport.userScalable}`
        );
      }

      // Optimize touch targets
      const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
      touchTargets.forEach((target) => {
        const element = target as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        const minSize = mobileOptimization.touchTargets.minSize;
        
        if (parseInt(computedStyle.minHeight) < minSize) {
          element.style.minHeight = `${minSize}px`;
        }
        if (parseInt(computedStyle.minWidth) < minSize) {
          element.style.minWidth = `${minSize}px`;
        }
      });

      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        image.loading = 'lazy';
        image.decoding = 'async';
        
        // Add mobile-specific attributes
        image.setAttribute('data-mobile-optimized', 'true');
      });

      // Optimize fonts for mobile
      const style = document.createElement('style');
      style.textContent = `
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body {
          font-display: ${mobileOptimization.fonts.display};
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        /* Improve touch scrolling */
        .scroll-container {
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }
        
        /* Optimize tap highlights */
        button, a, input, select, textarea {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          -webkit-touch-callout: none;
        }
        
        /* Prevent zoom on input focus */
        input, select, textarea {
          font-size: 16px;
        }
      `;
      document.head.appendChild(style);
    }
  }, [isMobile]);

  // Optimize for slow connections
  useEffect(() => {
    if (isSlowConnection) {
      // Reduce image quality
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        if (image.src.includes('?')) {
          image.src += '&quality=60';
        } else {
          image.src += '?quality=60';
        }
      });

      // Defer non-critical resources
      const nonCriticalScripts = document.querySelectorAll('script[data-defer]');
      nonCriticalScripts.forEach((script) => {
        script.setAttribute('defer', 'true');
      });

      // Reduce animations
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [isSlowConnection]);

  return (
    <div className={`mobile-optimized ${isMobile ? 'mobile-device' : ''} ${isSlowConnection ? 'slow-connection' : ''}`}>
      {children}
    </div>
  );
}

// Mobile optimization utilities
export const mobileUtils = {
  // Check if device is mobile
  isMobile: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    
    return isMobileDevice || (isTouchDevice && isSmallScreen);
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

  // Get device type
  getDeviceType: (): 'mobile' | 'tablet' | 'desktop' => {
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  },

  // Optimize image for device
  optimizeImageForDevice: (src: string, deviceType: 'mobile' | 'tablet' | 'desktop'): string => {
    const sizes = {
      mobile: 'w_400',
      tablet: 'w_800',
      desktop: 'w_1200',
    };
    
    if (src.includes('?')) {
      return `${src}&${sizes[deviceType]}`;
    } else {
      return `${src}?${sizes[deviceType]}`;
    }
  },

  // Add mobile-specific classes
  addMobileClasses: (element: HTMLElement) => {
    if (mobileUtils.isMobile()) {
      element.classList.add('mobile-optimized');
    }
    if (mobileUtils.isSlowConnection()) {
      element.classList.add('slow-connection');
    }
  },

  // Optimize touch events
  optimizeTouchEvents: (element: HTMLElement) => {
    element.style.touchAction = 'manipulation';
    (element.style as any).webkitTouchCallout = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.userSelect = 'none';
  },

  // Prevent zoom on input focus
  preventZoomOnFocus: () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
      });
      
      input.addEventListener('blur', () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
        }
      });
    });
  },
};
