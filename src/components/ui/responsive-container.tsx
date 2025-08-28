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
      "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
      className
    )}>
      {children}
    </Component>
  );
}

export function ResponsiveGrid({ 
  children, 
  className,
  cols = { xs: 1, sm: 2, md: 2, lg: 3, xl: 4, "2xl": 5 }
}: { 
  children: ReactNode; 
  className?: string;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
}) {
  const gridCols = [
    `grid-cols-${cols.xs || 1}`,
    cols.sm ? `sm:grid-cols-${cols.sm}` : '',
    cols.md ? `md:grid-cols-${cols.md}` : '',
    cols.lg ? `lg:grid-cols-${cols.lg}` : '',
    cols.xl ? `xl:grid-cols-${cols.xl}` : '',
    cols["2xl"] ? `2xl:grid-cols-${cols["2xl"]}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={cn(
      `grid ${gridCols} gap-3 sm:gap-4 md:gap-6 lg:gap-8`,
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveText({ 
  children, 
  className,
  size = "base"
}: { 
  children: ReactNode; 
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
}) {
  const textSizes = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    base: "text-sm sm:text-base lg:text-lg",
    lg: "text-base sm:text-lg lg:text-xl",
    xl: "text-lg sm:text-xl lg:text-2xl",
    "2xl": "text-xl sm:text-2xl lg:text-3xl"
  };

  return (
    <div className={cn(textSizes[size], className)}>
      {children}
    </div>
  );
}

export function ResponsiveHeading({ 
  children, 
  className,
  level = 2,
  size = "default"
}: { 
  children: ReactNode; 
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "small" | "default" | "large" | "hero";
}) {
  const headingSizes = {
    small: "text-xl sm:text-2xl lg:text-3xl",
    default: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    large: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
    hero: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
  };

  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Component className={cn(
      `${headingSizes[size]} font-bold font-headline leading-tight`,
      className
    )}>
      {children}
    </Component>
  );
}

export function ResponsivePadding({ 
  children, 
  className,
  size = "default"
}: { 
  children: ReactNode; 
  className?: string;
  size?: "small" | "default" | "large" | "hero";
}) {
  const paddingSizes = {
    small: "py-4 sm:py-6 lg:py-8",
    default: "py-6 sm:py-8 lg:py-12 xl:py-16",
    large: "py-8 sm:py-12 lg:py-16 xl:py-20",
    hero: "py-12 sm:py-16 lg:py-20 xl:py-24"
  };

  return (
    <div className={cn(paddingSizes[size], className)}>
      {children}
    </div>
  );
}

export function ResponsiveMargin({ 
  children, 
  className,
  size = "default"
}: { 
  children: ReactNode; 
  className?: string;
  size?: "small" | "default" | "large";
}) {
  const marginSizes = {
    small: "my-4 sm:my-6 lg:my-8",
    default: "my-6 sm:my-8 lg:my-12 xl:my-16",
    large: "my-8 sm:my-12 lg:my-16 xl:my-20"
  };

  return (
    <div className={cn(marginSizes[size], className)}>
      {children}
    </div>
  );
}

export function ResponsiveFlex({ 
  children, 
  className,
  direction = "row",
  align = "start",
  justify = "start",
  wrap = true
}: { 
  children: ReactNode; 
  className?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
}) {
  const flexClasses = [
    "flex",
    direction === "row" ? "flex-row" : 
    direction === "col" ? "flex-col" : 
    direction === "row-reverse" ? "flex-row-reverse" : "flex-col-reverse",
    align === "start" ? "items-start" : 
    align === "center" ? "items-center" : 
    align === "end" ? "items-end" : 
    align === "stretch" ? "items-stretch" : "items-baseline",
    justify === "start" ? "justify-start" : 
    justify === "center" ? "justify-center" : 
    justify === "end" ? "justify-end" : 
    justify === "between" ? "justify-between" : 
    justify === "around" ? "justify-around" : "justify-evenly",
    wrap ? "flex-wrap" : "flex-nowrap",
    "gap-3 sm:gap-4 md:gap-6 lg:gap-8"
  ];

  return (
    <div className={cn(flexClasses.join(' '), className)}>
      {children}
    </div>
  );
}

export function ResponsiveCard({ 
  children, 
  className,
  padding = "default"
}: { 
  children: ReactNode; 
  className?: string;
  padding?: "small" | "default" | "large";
}) {
  const paddingSizes = {
    small: "p-3 sm:p-4 lg:p-6",
    default: "p-4 sm:p-6 lg:p-8",
    large: "p-6 sm:p-8 lg:p-10"
  };

  return (
    <div className={cn(
      "bg-white rounded-lg shadow-sm border border-border/50",
      paddingSizes[padding],
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveSection({ 
  children, 
  className,
  padding = "default",
  margin = "default"
}: { 
  children: ReactNode; 
  className?: string;
  padding?: "small" | "default" | "large" | "hero";
  margin?: "small" | "default" | "large";
}) {
  return (
    <section className={cn(className)}>
      <ResponsivePadding size={padding}>
        <ResponsiveMargin size={margin}>
          {children}
        </ResponsiveMargin>
      </ResponsivePadding>
    </section>
  );
}

export function ResponsiveButton({ 
  children, 
  className,
  size = "default",
  variant = "default"
}: { 
  children: ReactNode; 
  className?: string;
  size?: "small" | "default" | "large";
  variant?: "default" | "outline" | "ghost" | "destructive";
}) {
  const buttonSizes = {
    small: "px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base",
    default: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base lg:px-8 lg:py-4",
    large: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg lg:px-10 lg:py-5"
  };

  const buttonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
  };

  return (
    <button className={cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-target",
      buttonSizes[size],
      buttonVariants[variant],
      className
    )}>
      {children}
    </button>
  );
}

export function ResponsiveImage({ 
  src, 
  alt, 
  className,
  sizes = "100vw"
}: { 
  src: string; 
  alt: string; 
  className?: string;
  sizes?: string;
}) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={cn(
        "w-full h-auto object-cover",
        className
      )}
      sizes={sizes}
      loading="lazy"
    />
  );
}

export function ResponsiveSpacer({ 
  size = "default" 
}: { 
  size?: "small" | "default" | "large" | "hero";
}) {
  const spacerSizes = {
    small: "h-4 sm:h-6 lg:h-8",
    default: "h-6 sm:h-8 lg:h-12 xl:h-16",
    large: "h-8 sm:h-12 lg:h-16 xl:h-20",
    hero: "h-12 sm:h-16 lg:h-20 xl:h-24"
  };

  return <div className={spacerSizes[size]} />;
}
