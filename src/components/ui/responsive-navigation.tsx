'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  BookOpen,
  Target,
  FileText,
  Users,
  Settings,
  LogOut,
  User
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  external?: boolean;
}

interface ResponsiveNavigationProps {
  items: NavigationItem[];
  className?: string;
  variant?: 'header' | 'sidebar' | 'footer';
  onItemClick?: (href: string) => void;
}

export function ResponsiveNavigation({ 
  items, 
  className,
  variant = 'header',
  onItemClick 
}: ResponsiveNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (href: string) => {
    if (onItemClick) {
      onItemClick(href);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const renderNavigationItem = (item: NavigationItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;
    const isDropdownOpen = activeDropdown === item.label;

    if (variant === 'header' && isMobile) {
      return (
        <div key={index} className="w-full">
          {hasChildren ? (
            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex w-full items-center justify-between py-3 px-4 text-left text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="h-5 w-5" />}
                  {item.label}
                </div>
                {isDropdownOpen ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="ml-6 space-y-1">
                  {item.children!.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      onClick={() => handleItemClick(child.href)}
                      className="flex w-full items-center gap-3 py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                    >
                      {child.icon && <child.icon className="h-4 w-4" />}
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => handleItemClick(item.href)}
              className="flex w-full items-center gap-3 py-3 px-4 text-left text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              {item.icon && <item.icon className="h-5 w-5" />}
              {item.label}
            </button>
          )}
        </div>
      );
    }

    if (variant === 'header' && !isMobile) {
      return (
        <div key={index} className="relative group">
          {hasChildren ? (
            <div className="relative">
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex items-center gap-2 py-2 px-3 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md"
              >
                {item.label}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {item.children!.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      onClick={() => handleItemClick(child.href)}
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      {child.icon && <child.icon className="h-4 w-4" />}
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => handleItemClick(item.href)}
              className="py-2 px-3 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md"
            >
              {item.label}
            </button>
          )}
        </div>
      );
    }

    if (variant === 'sidebar') {
      return (
        <div key={index} className="w-full">
          {hasChildren ? (
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown(item.label)}
                className="flex w-full items-center justify-between py-2 px-3 text-left text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </div>
                {isDropdownOpen ? (
                  <ChevronDown className="h-4 w-4 transition-transform" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="ml-4 space-y-1">
                  {item.children!.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      onClick={() => handleItemClick(child.href)}
                      className="flex w-full items-center gap-3 py-1.5 px-3 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {child.icon && <child.icon className="h-3 w-3" />}
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => handleItemClick(item.href)}
              className="flex w-full items-center gap-3 py-2 px-3 text-left text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.label}
            </button>
          )}
        </div>
      );
    }

    if (variant === 'footer') {
      return (
        <div key={index} className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">{item.label}</h4>
          {hasChildren && (
            <div className="space-y-1">
              {item.children!.map((child, childIndex) => (
                <button
                  key={childIndex}
                  onClick={() => handleItemClick(child.href)}
                  className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {child.label}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  if (variant === 'header' && isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close navigation</span>
              </Button>
            </div>
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {items.map(renderNavigationItem)}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  if (variant === 'header' && !isMobile) {
    return (
      <nav className={cn("hidden lg:flex items-center gap-1", className)}>
        {items.map(renderNavigationItem)}
      </nav>
    );
  }

  if (variant === 'sidebar') {
    return (
      <nav className={cn("w-full space-y-1", className)}>
        {items.map(renderNavigationItem)}
      </nav>
    );
  }

  if (variant === 'footer') {
    return (
      <nav className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6", className)}>
        {items.map(renderNavigationItem)}
      </nav>
    );
  }

  return null;
}

export function ResponsiveMobileMenu({ 
  items, 
  className,
  onItemClick 
}: Omit<ResponsiveNavigationProps, 'variant'>) {
  return (
    <ResponsiveNavigation
      items={items}
      variant="header"
      className={className}
      onItemClick={onItemClick}
    />
  );
}

export function ResponsiveSidebar({ 
  items, 
  className,
  onItemClick 
}: Omit<ResponsiveNavigationProps, 'variant'>) {
  return (
    <ResponsiveNavigation
      items={items}
      variant="sidebar"
      className={className}
      onItemClick={onItemClick}
    />
  );
}

export function ResponsiveFooterNav({ 
  items, 
  className,
  onItemClick 
}: Omit<ResponsiveNavigationProps, 'variant'>) {
  return (
    <ResponsiveNavigation
      items={items}
      variant="footer"
      className={className}
      onItemClick={onItemClick}
    />
  );
}
