'use client';

import { useEffect } from 'react';

interface SEOMonitorProps {
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
  pageType?: string;
  keywords?: string[];
}

export function SEOMonitor({ 
  pageTitle, 
  pageDescription, 
  pageUrl, 
  pageType = 'website',
  keywords = []
}: SEOMonitorProps) {
  useEffect(() => {
    // Track page views for SEO monitoring
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: pageUrl,
        page_path: new URL(pageUrl).pathname,
        content_group1: pageType,
      });
    }

    // Track SEO metrics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'seo_metrics', {
        page_title: pageTitle,
        page_description_length: pageDescription.length,
        page_url: pageUrl,
        keywords_count: keywords.length,
        page_type: pageType,
      });
    }
  }, [pageTitle, pageDescription, pageUrl, pageType, keywords]);

  return null;
}

// SEO Performance Metrics Component
export function SEOPerformanceMetrics() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      // First Contentful Paint (FCP)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                metric_name: 'FCP',
                metric_value: Math.round(entry.startTime),
                metric_rating: entry.startTime < 1800 ? 'good' : entry.startTime < 3000 ? 'needs_improvement' : 'poor',
              });
            }
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('LCP:', entry.startTime);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'LCP',
              metric_value: Math.round(entry.startTime),
              metric_rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs_improvement' : 'poor',
            });
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'FID',
              metric_value: Math.round(entry.processingStart - entry.startTime),
              metric_rating: (entry.processingStart - entry.startTime) < 100 ? 'good' : (entry.processingStart - entry.startTime) < 300 ? 'needs_improvement' : 'poor',
            });
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            metric_name: 'CLS',
            metric_value: Math.round(clsValue * 1000),
            metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor',
          });
        }
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  return null;
}

// SEO Health Check Component
export function SEOHealthCheck() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for essential SEO elements
      const checks = {
        title: document.title && document.title.length > 10 && document.title.length < 60,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content')?.length > 120 && document.querySelector('meta[name="description"]')?.getAttribute('content')?.length < 160,
        h1: document.querySelector('h1') !== null,
        canonical: document.querySelector('link[rel="canonical"]') !== null,
        ogTitle: document.querySelector('meta[property="og:title"]') !== null,
        ogDescription: document.querySelector('meta[property="og:description"]') !== null,
        ogImage: document.querySelector('meta[property="og:image"]') !== null,
        twitterCard: document.querySelector('meta[name="twitter:card"]') !== null,
        structuredData: document.querySelector('script[type="application/ld+json"]') !== null,
      };

      const score = Object.values(checks).filter(Boolean).length;
      const total = Object.keys(checks).length;
      const percentage = Math.round((score / total) * 100);

      console.log('SEO Health Check:', {
        score: `${score}/${total}`,
        percentage: `${percentage}%`,
        checks,
      });

      if (window.gtag) {
        window.gtag('event', 'seo_health_check', {
          seo_score: percentage,
          seo_checks_passed: score,
          seo_checks_total: total,
        });
      }
    }
  }, []);

  return null;
}

// SEO Error Tracking Component
export function SEOErrorTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track 404 errors
      const originalFetch = window.fetch;
      window.fetch = async (...args) => {
        try {
          const response = await originalFetch(...args);
          if (response.status === 404) {
            if (window.gtag) {
              window.gtag('event', 'seo_error', {
                error_type: '404',
                error_url: args[0],
                error_timestamp: new Date().toISOString(),
              });
            }
          }
          return response;
        } catch (error) {
          if (window.gtag) {
            window.gtag('event', 'seo_error', {
              error_type: 'fetch_error',
              error_message: error.message,
              error_timestamp: new Date().toISOString(),
            });
          }
          throw error;
        }
      };

      // Track JavaScript errors
      window.addEventListener('error', (event) => {
        if (window.gtag) {
          window.gtag('event', 'seo_error', {
            error_type: 'javascript_error',
            error_message: event.message,
            error_filename: event.filename,
            error_lineno: event.lineno,
            error_timestamp: new Date().toISOString(),
          });
        }
      });

      // Track unhandled promise rejections
      window.addEventListener('unhandledrejection', (event) => {
        if (window.gtag) {
          window.gtag('event', 'seo_error', {
            error_type: 'unhandled_promise_rejection',
            error_message: event.reason?.message || 'Unknown error',
            error_timestamp: new Date().toISOString(),
          });
        }
      });
    }
  }, []);

  return null;
}
