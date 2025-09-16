// Global type declarations for PhysioHelper

// Google Analytics gtag function
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
  }
}

// Google AdSense
declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

// Google Tag Manager
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export {};
