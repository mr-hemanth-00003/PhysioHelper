'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface AdSenseLoaderProps {
  clientId: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
}

export function AdSenseLoader({ 
  clientId, 
  strategy = 'lazyOnload' 
}: AdSenseLoaderProps) {
  const scriptLoaded = useRef(false);
  const scriptError = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Handle AdSense script loading
    const handleAdSenseLoad = () => {
      if (scriptLoaded.current) return;
      
      try {
        // Initialize AdSense if available
        if ((window as any).adsbygoogle) {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
          scriptLoaded.current = true;
        }
      } catch (error) {
        console.warn('AdSense initialization failed:', error);
        scriptError.current = true;
      }
    };

    // Check if script is already loaded
    if ((window as any).adsbygoogle) {
      handleAdSenseLoad();
    }

    // Listen for script load event
    const scriptElement = document.querySelector('script[src*="googlesyndication"]');
    if (scriptElement) {
      scriptElement.addEventListener('load', handleAdSenseLoad);
      scriptElement.addEventListener('error', () => {
        scriptError.current = true;
        console.warn('AdSense script failed to load');
      });
    }

    return () => {
      if (scriptElement) {
        scriptElement.removeEventListener('load', handleAdSenseLoad);
      }
    };
  }, [isClient]);

  // Don't render if there was an error
  if (scriptError.current) {
    return null;
  }

  return (
    <Script
      id="adsense-script"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy={strategy}
      onLoad={() => {
        scriptLoaded.current = true;
        // Suppress AdSense console warnings
        const originalWarn = console.warn;
        console.warn = (...args) => {
          const message = args[0];
          if (typeof message === 'string' && 
              (message.includes('AdSense head tag') || 
               message.includes('link preload'))) {
            return;
          }
          originalWarn.apply(console, args);
        };
      }}
      onError={() => {
        scriptError.current = true;
        console.warn('AdSense script failed to load');
      }}
    />
  );
}

export default AdSenseLoader;
