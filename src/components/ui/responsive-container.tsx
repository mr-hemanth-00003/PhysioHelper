'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full'
};

const paddingClasses = {
  none: '',
  sm: 'px-2 sm:px-4 md:px-6',
  md: 'px-4 sm:px-6 md:px-8',
  lg: 'px-6 sm:px-8 md:px-12',
  xl: 'px-8 sm:px-12 md:px-16'
};

export function ResponsiveContainer({
  children,
  className,
  as: Component = 'div',
  maxWidth = '7xl',
  padding = 'md',
  center = true
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        'w-full',
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        center && 'mx-auto',
        className
      )}
    >
      {children}
    </Component>
  );
}
