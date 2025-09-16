'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { lazyLoading } from '@/lib/performance-utils';

interface LazyLoaderProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  onVisible?: () => void;
}

export function LazyLoader({
  children,
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  threshold = lazyLoading.threshold,
  rootMargin = lazyLoading.rootMargin,
  className = '',
  onVisible,
}: LazyLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, onVisible]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}

// Lazy load components
export function LazyComponent({ 
  children, 
  fallback,
  ...props 
}: LazyLoaderProps) {
  return (
    <LazyLoader fallback={fallback} {...props}>
      {children}
    </LazyLoader>
  );
}

// Lazy load images
export function LazyImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  ...props 
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <LazyLoader
      fallback={
        <div 
          className={`bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        />
      }
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </LazyLoader>
  );
}

// Lazy load sections
export function LazySection({ 
  children, 
  className = '',
  ...props 
}: LazyLoaderProps & { className?: string }) {
  return (
    <LazyLoader
      className={className}
      fallback={
        <div className={`animate-pulse ${className}`}>
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      }
      {...props}
    >
      {children}
    </LazyLoader>
  );
}

// Lazy load heavy components
export function LazyHeavyComponent({ 
  component: Component, 
  props = {},
  fallback,
  ...lazyProps 
}: {
  component: React.ComponentType<any>;
  props?: any;
  fallback?: ReactNode;
  [key: string]: any;
}) {
  return (
    <LazyLoader
      fallback={fallback}
      {...lazyProps}
    >
      <Component {...props} />
    </LazyLoader>
  );
}

// Preload critical resources
export function PreloadResources() {
  useEffect(() => {
    // Preload critical fonts
    const fontPreloads = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ];

    fontPreloads.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    // Preload critical images
    const imagePreloads = [
      '/favicon.ico',
      '/og-image.jpg',
    ];

    imagePreloads.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  return null;
}

// Intersection Observer hook
export function useIntersectionObserver(
  threshold = lazyLoading.threshold,
  rootMargin = lazyLoading.rootMargin
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
}
