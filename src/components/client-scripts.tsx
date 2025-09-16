'use client';

import { useEffect } from 'react';
import { ServiceWorkerRegister } from './service-worker-register';

export function ClientScripts() {
  useEffect(() => {
    // Only run on client-side to prevent hydration mismatches
    const loadScripts = () => {
      // Load Google AdSense script if not already loaded
      if (!document.querySelector('script[src*="googlesyndication"]')) {
        const adsenseScript = document.createElement('script');
        adsenseScript.async = true;
        adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3347120637586448';
        adsenseScript.crossOrigin = 'anonymous';
        document.head.appendChild(adsenseScript);
      }

      // Load reCAPTCHA Enterprise script if not already loaded
      if (!document.querySelector('script[src*="recaptcha/enterprise"]')) {
        const recaptchaScript = document.createElement('script');
        recaptchaScript.async = true;
        recaptchaScript.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LfmxrQrAAAAAN2F0ug_O9MyVSR3mgURWBNRlewI';
        document.head.appendChild(recaptchaScript);
      }

      // Preload critical resources
      const criticalResources = [
        { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/favicon.ico', as: 'image' },
        { href: '/og-image.jpg', as: 'image' },
      ];

      criticalResources.forEach(({ href, as, type, crossOrigin }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = href;
          link.as = as;
          if (type) link.type = type;
          if (crossOrigin) link.crossOrigin = crossOrigin;
          document.head.appendChild(link);
        }
      });

      // Prefetch likely next pages
      const prefetchPages = ['/about', '/resources', '/case-studies'];
      prefetchPages.forEach(page => {
        if (!document.querySelector(`link[href="${page}"]`)) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        }
      });
    };

    loadScripts();
  }, []);

  return (
    <>
      <ServiceWorkerRegister />
    </>
  );
}

