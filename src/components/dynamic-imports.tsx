// Dynamic imports for better code splitting and bundle optimization

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Common loading component
const LoadingSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500 text-sm">Loading...</div>
  </div>
);

// Lazy load heavy components with aggressive splitting
export const LazyAIAssistant = dynamic(() => import('./ai-assistant'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyDrugSearch = dynamic(() => import('./drug-search'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyDocumentViewer = dynamic(() => import('./document-viewer'), {
  loading: LoadingSkeleton,
  ssr: false,
});

// Lazy load admin components
export const LazyAdminLayout = dynamic(() => import('./admin-layout'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyAdminDashboard = dynamic(() => import('./admin-dashboard'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyAdminUsers = dynamic(() => import('./admin-users'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyAdminSettings = dynamic(() => import('./admin-settings'), {
  loading: LoadingSkeleton,
  ssr: false,
});

// Lazy load UI components that are not critical
export const LazyChart = dynamic(() => import('./ui/chart'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyCarousel = dynamic(() => import('./ui/carousel'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyCalendar = dynamic(() => import('./ui/calendar'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyMenubar = dynamic(() => import('./ui/menubar'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazySheet = dynamic(() => import('./ui/sheet'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazySidebar = dynamic(() => import('./ui/sidebar'), {
  loading: LoadingSkeleton,
  ssr: false,
});

// Lazy load performance monitoring components
export const LazyPerformanceMonitor = dynamic(() => import('./performance-monitor'), {
  loading: () => null,
  ssr: false,
});

export const LazySEOOptimizer = dynamic(() => import('./seo-optimizer'), {
  loading: () => null,
  ssr: false,
});

// Lazy load heavy pages
export const LazyArticlesPage = dynamic(() => import('../app/articles/page'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyCaseStudiesPage = dynamic(() => import('../app/case-studies/page'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyCourseMaterialsPage = dynamic(() => import('../app/course-materials/page'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyExamsPage = dynamic(() => import('../app/exams/page'), {
  loading: LoadingSkeleton,
  ssr: false,
});

export const LazyStudyGuidesPage = dynamic(() => import('../app/study-guides/page'), {
  loading: LoadingSkeleton,
  ssr: false,
});

// Utility function to create lazy components with custom loading
export function createLazyComponent<T = {}>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  loadingComponent?: ComponentType
) {
  return dynamic(importFunc, {
    loading: loadingComponent || (() => <div className="animate-pulse bg-gray-200 h-32 rounded" />),
    ssr: false,
  });
}

// Preload critical components
export function preloadCriticalComponents() {
  if (typeof window !== 'undefined') {
    // Preload components that are likely to be used
    import('./ai-assistant');
    import('./drug-search');
    import('./document-viewer');
  }
}

// Bundle analyzer helper
export function analyzeBundle() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    console.log('Bundle Analysis:');
    console.log('Total JS chunks:', document.querySelectorAll('script[src*="_next/static/chunks/"]').length);
    console.log('Total CSS chunks:', document.querySelectorAll('link[href*="_next/static/css/"]').length);
  }
}
