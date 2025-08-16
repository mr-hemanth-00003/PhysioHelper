'use client';
import Link from 'next/link';
import { Search, Menu, Wrench } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SearchDialog } from './search-dialog';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#articles', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isAdminRoute ? 'default' : 'ghost'}
                  size="icon"
                  aria-label="Admin Panel"
                >
                  <Wrench className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/admin/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/articles">Manage Articles</Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link href="/admin/tools">AI Tools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/settings">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-8 p-6">
                  <Link href="/" onClick={() => setSheetOpen(false)}>
                    <Logo />
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <SearchDialog open={isSearchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
