'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ResponsiveContainer } from './responsive-container';
import { ResponsiveSpacer } from './responsive-container';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { 
  Menu, 
  X, 
  ChevronLeft,
  Home,
  BookOpen,
  Target,
  FileText,
  Users,
  Settings,
  LogOut,
  User,
  Search,
  Bell
} from 'lucide-react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  showSidebar?: boolean;
  sidebarWidth?: 'sm' | 'md' | 'lg';
}

export function ResponsiveLayout({
  children,
  className,
  sidebar,
  header,
  footer,
  showSidebar = false,
  sidebarWidth = 'md'
}: ResponsiveLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sidebarWidths = {
    sm: 'w-64',
    md: 'w-72',
    lg: 'w-80'
  };

  const renderSidebar = () => {
    if (!sidebar) return null;

    if (isMobile) {
      return (
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className={`${sidebarWidths[sidebarWidth]} p-0`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSidebarOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close sidebar</span>
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                {sidebar}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      );
    }

    if (isTablet && showSidebar) {
      return (
        <div className={`${sidebarWidths[sidebarWidth]} border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(false)}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {sidebar}
            </div>
          </div>
        </div>
      );
    }

    if (showSidebar) {
      return (
        <div className={`${sidebarWidths[sidebarWidth]} border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block`}>
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Navigation</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {sidebar}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderHeader = () => {
    if (!header) return null;

    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ResponsiveContainer>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              {showSidebar && renderSidebar()}
              {header}
            </div>
          </div>
        </ResponsiveContainer>
      </header>
    );
  };

  const renderFooter = () => {
    if (!footer) return null;

    return (
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <ResponsiveContainer>
          <div className="py-8">
            {footer}
          </div>
        </ResponsiveContainer>
      </footer>
    );
  };

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {renderHeader()}
      <main className="flex-1">
        {showSidebar && !isMobile ? (
          <div className="flex">
            {renderSidebar()}
            <div className="flex-1">
              <ResponsiveContainer>
                {children}
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <ResponsiveContainer>
            {children}
          </ResponsiveContainer>
        )}
      </main>
      {renderFooter()}
    </div>
  );
}

export function ResponsiveSidebarLayout({
  children,
  sidebar,
  className,
  sidebarWidth = 'md'
}: Omit<ResponsiveLayoutProps, 'showSidebar'>) {
  return (
    <ResponsiveLayout
      sidebar={sidebar}
      showSidebar={true}
      sidebarWidth={sidebarWidth}
      className={className}
    >
      {children}
    </ResponsiveLayout>
  );
}

export function ResponsiveHeaderLayout({
  children,
  header,
  className
}: Omit<ResponsiveLayoutProps, 'showSidebar' | 'sidebar' | 'sidebarWidth'>) {
  return (
    <ResponsiveLayout
      header={header}
      className={className}
    >
      {children}
    </ResponsiveLayout>
  );
}

export function ResponsiveFullLayout({
  children,
  sidebar,
  header,
  footer,
  className,
  sidebarWidth = 'md'
}: Omit<ResponsiveLayoutProps, 'showSidebar'>) {
  return (
    <ResponsiveLayout
      sidebar={sidebar}
      header={header}
      footer={footer}
      showSidebar={true}
      sidebarWidth={sidebarWidth}
      className={className}
    >
      {children}
    </ResponsiveLayout>
  );
}

export function ResponsiveGridLayout({
  children,
  className,
  cols = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }
}: {
  children: React.ReactNode;
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
      `grid ${gridCols} gap-4 sm:gap-6 lg:gap-8`,
      className
    )}>
      {children}
    </div>
  );
}

export function ResponsiveCardGrid({
  children,
  className,
  cols = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }
}: {
  children: React.ReactNode;
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
  return (
    <ResponsiveGridLayout cols={cols} className={cn("space-y-4 sm:space-y-6 lg:space-y-8", className)}>
      {children}
    </ResponsiveGridLayout>
  );
}
