
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Logo } from '@/components/logo';
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
  Library
} from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Study Resources', href: '/resources', hasDropdown: true },
    { name: 'Practice Exams', href: '/exams' },
    { name: 'Drugs', href: '/drugs' },
    { name: 'About', href: '/about' }
  ];

  const resourceDropdown = [
        { name: 'Clinical Skills', href: '/resources/clinical-skills', icon: ClipboardList, description: 'Practical techniques and assessment methods' },
    { name: 'Anatomy & Physiology', href: '/resources/anatomy', icon: Heart, description: 'Comprehensive study materials' },
    { name: 'Rehabilitation Protocols', href: '/rehabilitation-protocol', icon: Dumbbell, description: 'Treatment plans and exercise protocols' },
    { name: 'Case Studies', href: '/case-studies', icon: BookOpen, description: 'Real patient cases and clinical scenarios' }
  ];

  const quickLinks = [
    { name: 'Study Groups', href: '/study-groups', icon: Users },
    { name: 'Resource Library', href: '/library', icon: Library },
    { name: 'Success Stories', href: '/success-stories', icon: Award },
    { name: 'Student Support', href: '/support', icon: Phone }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-2">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <span className="text-xs bg-white/20 px-2 sm:px-3 py-1 rounded border border-white/30">
              This resource is designed for use by healthcare professionals only.
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-border/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2 sm:gap-3 animate-fade-in-left">
              <Logo />
              <div className="hidden sm:block">
                <div className="font-headline text-lg sm:text-xl font-bold text-foreground">
                  Physio<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Helper</span>
                </div>
                <div className="text-xs text-muted-foreground">Student Learning Platform</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 sm:gap-6">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group animate-fade-in" style={{animationDelay: `${0.3 + index * 0.15}s`}}>
                  <Link 
                    href={item.href}
                    className="flex items-center gap-2 py-1.5 text-foreground hover:text-primary transition-all duration-500 ease-out font-medium text-sm"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform duration-500 ease-out" />}
                  </Link>
                  
                  {/* Study Resources Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform -translate-y-3 group-hover:translate-y-0">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {resourceDropdown.map((resource, resourceIndex) => (
                            <Link 
                              key={resource.name} 
                              href={resource.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all duration-500 ease-out group animate-fade-in-up"
                              style={{animationDelay: `${resourceIndex * 0.1}s`}}
                            >
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out flex-shrink-0">
                                <resource.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-semibold text-foreground group-hover:text-primary transition-all duration-500 ease-out text-sm">
                                  {resource.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {resource.description}
                                </div>
                              </div>
                              <ChevronRight className="h-3 w-3 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform duration-500 ease-out flex-shrink-0" />
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <div className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link, linkIndex) => (
                              <Link 
                                key={link.name} 
                                href={link.href}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-all duration-500 ease-out text-xs animate-fade-in-up"
                                style={{animationDelay: `${linkIndex * 0.1}s`}}
                              >
                                <link.icon className="h-3 w-3 text-primary flex-shrink-0" />
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

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="btn-healthcare-outline h-8 px-3 text-xs animate-fade-in-right"
                style={{animationDelay: '0.6s'}}
              >
                <Search className="h-3 w-3 mr-1" />
                Search
              </Button>

              {/* CTA Buttons */}
              <Button size="sm" className="btn-healthcare h-8 px-3 text-xs animate-fade-in-right" style={{animationDelay: '0.75s'}}>
                <User className="h-3 w-3 mr-1" />
                Student Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-8 w-8 p-0 animate-fade-in-right"
              style={{animationDelay: '0.9s'}}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-white/95 backdrop-blur-xl border-b border-border/50 py-3 sm:py-4 animate-slide-in-from-top">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-2xl mx-auto animate-fade-in-up">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for case studies, clinical skills, exam prep, and more..."
                className="w-full pl-10 sm:pl-12 pr-20 sm:pr-24 py-2 sm:py-3 bg-muted/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-500 ease-out text-sm sm:text-base"
                autoFocus
              />
              <Button size="sm" className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 btn-healthcare text-xs sm:text-sm">
                Search
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border/50 animate-slide-in-from-top">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <nav className="space-y-3 sm:space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 sm:py-3 text-foreground hover:text-primary transition-all duration-500 ease-out font-medium border-b border-border/30 last:border-b-0 animate-fade-in-up text-base sm:text-lg"
                  style={{animationDelay: `${0.3 + index * 0.15}s`}}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3 sm:space-y-4">
                <Button className="w-full btn-healthcare animate-fade-in-up text-sm sm:text-base" style={{animationDelay: '1.2s'}}>
                  <User className="h-4 w-4 mr-2" />
                  Student Login
                </Button>
                <Button variant="outline" className="w-full btn-healthcare-outline animate-fade-in-up text-sm sm:text-base" style={{animationDelay: '1.35s'}}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
