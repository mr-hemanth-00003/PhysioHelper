'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveTextProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    large?: string;
  };
  weight?: string;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
}

const defaultSizes = {
  mobile: 'text-sm',
  tablet: 'sm:text-base',
  desktop: 'lg:text-lg',
  large: 'xl:text-xl'
};

export function ResponsiveText({
  children,
  className,
  as: Component = 'p',
  size = defaultSizes,
  weight = 'font-normal',
  color = 'text-foreground',
  align = 'left'
}: ResponsiveTextProps) {
  const textSizes = {
    mobile: size.mobile || defaultSizes.mobile,
    tablet: size.tablet || defaultSizes.tablet,
    desktop: size.desktop || defaultSizes.desktop,
    large: size.large || defaultSizes.large
  };

  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  return (
    <Component
      className={cn(
        textSizes.mobile,
        textSizes.tablet,
        textSizes.desktop,
        textSizes.large,
        weight,
        color,
        textAlign[align],
        className
      )}
    >
      {children}
    </Component>
  );
}
