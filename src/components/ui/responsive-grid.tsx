'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    large?: number;
  };
  gap?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    large?: string;
  };
  as?: keyof JSX.IntrinsicElements;
}

const defaultCols = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
  large: 4
};

const defaultGap = {
  mobile: 'gap-4',
  tablet: 'gap-6',
  desktop: 'gap-8',
  large: 'gap-8'
};

export function ResponsiveGrid({
  children,
  className,
  cols = defaultCols,
  gap = defaultGap,
  as: Component = 'div'
}: ResponsiveGridProps) {
  const gridCols = {
    mobile: `grid-cols-${cols.mobile || defaultCols.mobile}`,
    tablet: `sm:grid-cols-${cols.tablet || defaultCols.tablet}`,
    desktop: `lg:grid-cols-${cols.desktop || defaultCols.desktop}`,
    large: `xl:grid-cols-${cols.large || defaultCols.large}`
  };

  const gridGap = {
    mobile: gap.mobile || defaultGap.mobile,
    tablet: `sm:${gap.tablet || defaultGap.tablet}`,
    desktop: `lg:${gap.desktop || defaultGap.desktop}`,
    large: `xl:${gap.large || defaultGap.large}`
  };

  return (
    <Component
      className={cn(
        'grid',
        gridCols.mobile,
        gridCols.tablet,
        gridCols.desktop,
        gridCols.large,
        gridGap.mobile,
        gridGap.tablet,
        gridGap.desktop,
        gridGap.large,
        className
      )}
    >
      {children}
    </Component>
  );
}
