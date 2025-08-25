'use client';

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function ResponsiveContainer({ 
  children, 
  className,
  as: Component = "div" 
}: ResponsiveContainerProps) {
  return (
    <Component className={cn(
      "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}>
      {children}
    </Component>
  );
}

export function ResponsiveGrid({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveText({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn(
      "text-sm sm:text-base lg:text-lg",
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveHeading({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <h2 className={cn(
      "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-headline",
      className
    )}>
      {children}
    </h2>
  );
}

export function ResponsivePadding({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn(
      "py-8 sm:py-12 lg:py-16 xl:py-20",
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveMargin({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <div className={cn(
      "my-6 sm:my-8 lg:my-12 xl:my-16",
      className
    )}>
      {children}
    </div>
  );
}
