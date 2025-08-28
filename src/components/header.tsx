
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from '@/components/logo';
import { useUser } from '@/contexts/user-context';
import { useBrowser } from '@/hooks/use-browser';
import { ResponsiveContainer, ResponsiveText, ResponsiveHeading } from '@/components/ui/responsive-container';
import { ResponsiveNavigation } from '@/components/ui/responsive-navigation';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  ChevronDown, 
  ChevronRight,
  Stethoscope,
  Brain,
  Dumbbell,
  Heart,
  BookOpen,
  Users,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Star,
  GraduationCap,
  BookOpenCheck,
  Microscope,
  ClipboardList,
  Library,
  Settings,
  LogOut
} from 'lucide-react';

export function Header() {
  const { user, logout } = useUser();
  const isBrowser = useBrowser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isBrowser) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrowser]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isBrowser) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, isBrowser]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Study Resources', href: '/resources', hasDropdown: true },
    { name: 'Practice Exams', href: '/exams' },
    { name: 'Drugs', href: '/drug-search' },
    { name: 'About', href: '/about' },
  ];

  const resourceDropdown = [
        { name: 'Clinical Skills', href: '/resources/clinical-skills', icon: ClipboardList, description: 'Practical techniques and assessment methods' },
    { name: 'Anatomy & Physiology', href: '/resources/anatomy', icon: Heart, description: 'Comprehensive study materials' },
    { name: 'Rehabilitation Protocols', href: '/rehabilitation-protocol', icon: Dumbbell, description: 'Treatment plans and exercise protocols' },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen, description: 'Real patient cases and clinical scenarios' },
    { name: 'Digital Library', href: '/resources/library', icon: Library, description: 'Textbooks and reference materials by year' }
  ];

  const quickLinks = [
    { name: 'Study Guides', href: '/study-guides', icon: BookOpen },
    { name: 'Digital Library', href: '/resources/library', icon: Library },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpenCheck },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isBrowser && isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top Utility Bar - Responsive */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-1.5 sm:py-2">
        <ResponsiveContainer>
          <div className="text-center animate-fade-in">
            <ResponsiveText size="xs" className="bg-white/20 px-2 sm:px-3 py-1 rounded border border-white/30 leading-tight">
              This resource is designed for use by healthcare professionals only.
            </ResponsiveText>
          </div>
        </ResponsiveContainer>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-border/50">
        <ResponsiveContainer>
          <div className="flex items-center justify-between h-10 sm:h-12 md:h-14 lg:h-16">
            {/* Logo - Responsive */}
            <Link href="/" className="group flex items-center gap-1.5 sm:gap-2 md:gap-3 animate-fade-in-left touch-target">
              <Logo />
              <div className="hidden sm:block">
                <div className="font-headline text-sm sm:text-base md:text-lg font-bold text-foreground leading-tight">
                  Physio<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Helper</span>
                </div>
                <div className="text-xs text-muted-foreground leading-tight">Student Learning Platform</div>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced Responsive */}
            <nav className="hidden xl:flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group animate-fade-in" style={{animationDelay: `${0.3 + index * 0.15}s`}}>
                  <Link 
                    href={item.href}
                    className="flex items-center gap-1.5 sm:gap-2 py-1 sm:py-1.5 text-foreground hover:text-primary transition-all duration-500 ease-out font-medium text-xs sm:text-sm touch-target"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-500 ease-out" />}
                  </Link>
                  
                  {/* Study Resources Dropdown - Enhanced Responsive */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 w-56 sm:w-64 md:w-72 bg-white rounded-xl shadow-xl border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform -translate-y-3 group-hover:translate-y-0">
                      <div className="p-2 sm:p-3">
                        <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                          {resourceDropdown.map((resource, resourceIndex) => (
                            <Link 
                              key={resource.name} 
                              href={resource.href}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-muted/50 transition-all duration-500 ease-out group animate-fade-in-up touch-target"
                              style={{animationDelay: `${resourceIndex * 0.1}s`}}
                            >
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0">
                                <resource.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-semibold text-foreground group-hover:text-primary transition-all duration-500 ease-out text-sm leading-tight">
                                  {resource.name}
                                </div>
                                <div className="text-xs text-muted-foreground leading-tight mt-0.5">
                                  {resource.description}
                                </div>
                              </div>
                              <ChevronRight className="h-3 w-3 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform duration-500 ease-out flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-2 pt-2 border-t border-border/50">
                          <div className="grid grid-cols-2 gap-1.5">
                            {quickLinks.map((link, linkIndex) => (
                              <Link 
                                key={link.name} 
                                href={link.href}
                                className="flex items-center gap-1.5 sm:gap-2 p-2 rounded-lg hover:bg-muted/50 transition-all duration-500 ease-out text-xs sm:text-sm animate-fade-in-up touch-target"
                                style={{animationDelay: `${linkIndex * 0.1}s`}}
                              >
                                <link.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                                <span className="font-medium truncate">{link.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions - Enhanced Responsive */}
            <div className="hidden xl:flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Search Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="btn-healthcare-outline h-7 sm:h-8 px-2 sm:px-3 text-xs animate-fade-in-right touch-target"
                style={{animationDelay: '0.6s'}}
              >
                <Search className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">Search</span>
              </Button>

              {/* CTA Buttons */}
              {user ? (
                <div className="relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 sm:h-8 px-2 sm:px-3 text-xs animate-fade-in-right touch-target flex items-center gap-2"
                    style={{animationDelay: '0.75s'}}
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  >
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                      <AvatarFallback className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {user.firstName[0]}{user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline">{user.firstName}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                  
                  {/* User Dropdown */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-border/50 py-2 z-50 animate-fade-in-up">
                      <div className="px-4 py-3 border-b border-border/30">
                        <p className="text-sm font-medium text-foreground">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="py-1">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          <User className="h-4 w-4" />
                          Dashboard
                        </Link>
                        <Link
                          href="/profile"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          <Settings className="h-4 w-4" />
                          Settings
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setIsUserDropdownOpen(false);
                          }}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/login">
                  <Button size="sm" className="btn-healthcare h-7 sm:h-8 px-2 sm:px-3 text-xs animate-fade-in-right touch-target" style={{animationDelay: '0.75s'}}>
                    <User className="h-3 w-3 mr-1" />
                    <span className="hidden sm:inline">Student Login</span>
                    <span className="sm:hidden">Login</span>
                  </Button>
                </Link>
              )}
            </div>

            {/* Tablet Navigation - Enhanced Responsive */}
            <nav className="hidden lg:flex xl:hidden items-center gap-2">
              {navigation.slice(0, 3).map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-foreground hover:text-primary transition-all duration-300 font-medium px-2 py-1 touch-target"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Enhanced Touch Target */}
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden touch-target p-2 animate-fade-in-right"
              style={{animationDelay: '0.9s'}}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </ResponsiveContainer>
      </div>

      {/* Search Bar - Enhanced Responsive */}
      {isSearchOpen && (
        <div className="bg-white/95 backdrop-blur-xl border-b border-border/50 py-2 sm:py-3 md:py-4 animate-slide-in-from-top">
          <ResponsiveContainer>
            <div className="relative max-w-2xl mx-auto animate-fade-in-up">
              <Search className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for case studies, clinical skills, exam prep, and more..."
                className="w-full pl-8 sm:pl-10 md:pl-12 pr-16 sm:pr-20 md:pr-24 py-2 sm:py-3 bg-muted/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-500 ease-out text-sm sm:text-base touch-target"
                autoFocus
              />
              <Button size="sm" className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 btn-healthcare text-xs sm:text-sm touch-target">
                Search
              </Button>
            </div>
          </ResponsiveContainer>
        </div>
      )}

      {/* Mobile Menu - Enhanced Responsive */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-border/50 animate-slide-in-from-top mobile-menu">
          <ResponsiveContainer className="py-3 sm:py-4 md:py-6">
            <nav className="space-y-2 sm:space-y-3 md:space-y-4">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 sm:py-3 text-foreground hover:text-primary transition-all duration-500 ease-out font-medium border-b border-border/30 last:border-b-0 animate-fade-in-up text-base sm:text-lg touch-target"
                    style={{animationDelay: `${0.3 + index * 0.15}s`}}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown for Study Resources */}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {resourceDropdown.map((resource, resourceIndex) => (
                        <Link
                          key={resource.name}
                          href={resource.href}
                          className="block py-2 px-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-muted/50 touch-target"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center gap-2">
                            <resource.icon className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{resource.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                {user ? (
                  <div className="space-y-2 sm:space-y-3">
                    <div className="px-3 py-2 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <Link href="/dashboard">
                                       <Button className="w-full btn-healthcare animate-fade-in-up text-sm touch-target" style={{animationDelay: '1.2s'}}>
                   <User className="h-4 w-4 mr-2" />
                   Dashboard
                 </Button>
               </Link>
               <Button 
                 variant="outline" 
                 className="w-full btn-healthcare-outline animate-fade-in-up text-sm touch-target" 
                 style={{animationDelay: '1.35s'}}
                 onClick={() => {
                   logout();
                   setIsMobileMenuOpen(false);
                 }}
               >
                 <LogOut className="h-4 w-4 mr-2" />
                 Sign Out
               </Button>
                  </div>
                ) : (
                  <div className="space-y-2 sm:space-y-3">
                                         <Link href="/login">
                       <Button className="w-full btn-healthcare animate-fade-in-up text-sm touch-target" style={{animationDelay: '1.2s'}}>
                         <User className="h-4 w-4 mr-2" />
                         Student Login
                       </Button>
                     </Link>
                     <Link href="/register">
                       <Button variant="outline" className="w-full btn-healthcare-outline animate-fade-in-up text-sm touch-target" style={{animationDelay: '1.35s'}}>
                         <User className="h-4 w-4 mr-2" />
                         Create Account
                       </Button>
                     </Link>
                  </div>
                )}
              </div>
            </nav>
          </ResponsiveContainer>
        </div>
      )}
    </header>
  );
}
