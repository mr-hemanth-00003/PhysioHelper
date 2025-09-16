'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { imageOptimization } from '@/lib/performance-utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: 'hero' | 'content' | 'thumbnail' | 'avatar';
  className?: string;
  sizes?: string;
  fill?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 'content',
  className = '',
  sizes,
  fill = false,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || imageOptimization.sizes.mobile;

  // Get quality value
  const imageQuality = imageOptimization.quality[quality];

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width || 400, height || 300);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || '200px' }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width: width || '100%', height: height || '200px' }}
        />
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={imageQuality}
        sizes={responsiveSizes}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        // Performance optimizations
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // SEO optimizations
        title={alt}
        // Accessibility
        role="img"
        aria-label={alt}
      />
    </div>
  );
}

// Generate a simple blur data URL
function generateBlurDataURL(width: number, height: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a simple gradient blur
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL('image/jpeg', 0.1);
}

// Preload critical images
export function PreloadImage({ src, as = 'image' }: { src: string; as?: string }) {
  return (
    <link
      rel="preload"
      href={src}
      as={as}
      type={as === 'image' ? 'image/webp' : undefined}
    />
  );
}

// Image gallery with lazy loading
export function ImageGallery({ images }: { images: Array<{ src: string; alt: string; width: number; height: number }> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality="content"
          priority={index < 3} // Prioritize first 3 images
        />
      ))}
    </div>
  );
}
