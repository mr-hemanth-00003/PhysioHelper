'use client';

import { useEffect } from 'react';

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
    };

    loadScripts();
  }, []);

  // This component doesn't render anything
  return null;
}

