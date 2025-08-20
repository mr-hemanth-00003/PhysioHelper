
'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import {
  LayoutDashboard,
  Newspaper,
  Settings,
  LogOut,
  ChevronLeft,
  Wand2,
  Users,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const adminNavLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'from-primary to-accent' },
  { href: '/admin/articles', label: 'Articles', icon: Newspaper, color: 'from-accent to-primary' },
  { href: '/admin/team', label: 'Team', icon: Users, color: 'from-primary-light to-primary' },
  { href: '/admin/tools', label: 'AI Tools', icon: Wand2, color: 'from-primary to-accent' },
  { href: '/admin/settings', label: 'Settings', icon: Settings, color: 'from-accent to-primary-light' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar className="border-r border-border/20 bg-sidebar-background">
          <SidebarHeader className="border-b border-border/20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-enhanced">
                <Logo />
              </div>
              <div>
                <div className="font-headline text-lg font-bold text-primary-foreground">
                  Physio<span className="text-accent-foreground">Helper</span>
                </div>
                <div className="text-xs text-primary-foreground/70">Admin Panel</div>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarMenu>
              {adminNavLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(link.href)}
                    tooltip={link.label}
                    className="group"
                  >
                    <Link href={link.href} className="relative overflow-hidden">
                      {pathname.startsWith(link.href) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg"></div>
                      )}
                      <div className="relative flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-sidebar-accent/50">
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                          pathname.startsWith(link.href)
                            ? "bg-gradient-to-br from-primary to-accent shadow-enhanced"
                            : `bg-gradient-to-br ${link.color} opacity-60 group-hover:opacity-100`
                        )}>
                          <link.icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className={cn(
                          "font-medium transition-colors duration-300",
                          pathname.startsWith(link.href)
                            ? "text-primary"
                            : "text-sidebar-foreground group-hover:text-primary"
                        )}>
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-border/20 p-4 space-y-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Back to Site" className="group">
                  <Link href="/" className="relative overflow-hidden">
                    <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-sidebar-accent/50">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <ChevronLeft className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-sidebar-foreground group-hover:text-primary transition-colors duration-300">
                        Back to Site
                      </span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Logout" className="group">
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-sidebar-accent/50 cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-br from-destructive to-red-500 rounded-lg flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <LogOut className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-sidebar-foreground group-hover:text-destructive transition-colors duration-300">
                      Logout
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <header className="flex h-16 items-center justify-between border-b border-border/20 bg-card/50 backdrop-blur-xl px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="md:hidden bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <h1 className="text-lg font-semibold text-foreground">Admin Panel</h1>
              </div>
            </div>
            
            {/* Admin Status */}
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-primary">Admin Active</span>
            </div>
          </header>
          
          <main className="flex-1 p-6 bg-gradient-to-br from-background via-card/20 to-background">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
