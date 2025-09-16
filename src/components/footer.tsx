'use client';

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  Clock,
  Stethoscope,
  Brain,
  Dumbbell,
  BookOpen,
  GraduationCap,
  Microscope,
  ClipboardList,
  Users,
  Zap,
  Star,
  Award,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from './ui/badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Practice Exams', href: '/exams' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'YouTube', href: '#', icon: Youtube }
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="responsive-container py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Main Footer Content - Enhanced Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
          {/* Brand Section - Enhanced Responsive */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/favicon.ico" 
                alt="PhysioHelper Logo" 
                width={40}
                height={40}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg"
                priority
              />
              <div>
                <div className="font-bold text-base sm:text-lg md:text-xl text-white leading-tight">
                  Physio<span className="text-blue-400">Helper</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 leading-tight">Student Learning Platform</div>
              </div>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Empowering physiotherapy students with comprehensive learning resources, 
              clinical case studies, and practical learning resources.
            </p>
            
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200 touch-target"
                  aria-label={social.name}
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - Enhanced Responsive */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm touch-target block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced Responsive */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5" />
                <span className="break-words leading-tight">students@physiohelper.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>+91 7780440232</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5" />
                <span className="break-words leading-tight">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>Mon-Fri: 9AM-6PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Footer Sections - Enhanced Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Features Section */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Features</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                <span>Clinical Skills Training</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                <span>Case Study Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Dumbbell className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span>Rehabilitation Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400 flex-shrink-0" />
                <span>Digital Library</span>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Resources</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                <span>Study Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                <span>Research Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <ClipboardList className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-400 flex-shrink-0" />
                <span>Assessment Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-pink-400 flex-shrink-0" />
                <span>Community Forum</span>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Support</h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
                <span>24/7 Help Center</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                <span>Premium Features</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                <span>Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span>Global Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Enhanced Responsive */}
        <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Stay Updated</h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto">
              Get the latest updates on new features, case studies, and learning resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base touch-target"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 text-sm sm:text-base touch-target">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer - Enhanced Responsive */}
        <div className="border-t border-slate-800 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <p className="text-slate-400 text-xs sm:text-sm">
                © {currentYear} PhysioHelper. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-1 sm:mt-2">
                <Link href="/privacy" className="text-slate-400 hover:text-white text-xs transition-colors duration-200 touch-target">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white text-xs transition-colors duration-200 touch-target">
                  Terms of Service
                </Link>
                <Link href="/medical-disclaimers" className="text-slate-400 hover:text-white text-xs transition-colors duration-200 touch-target">
                  Medical Disclaimers
                </Link>
                <Link href="/children-privacy" className="text-slate-400 hover:text-white text-xs transition-colors duration-200 touch-target">
                  Children's Privacy
                </Link>
                <Link href="/cookies" className="text-slate-400 hover:text-white text-xs transition-colors duration-200 touch-target">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 animate-pulse" />
              <span>for healthcare students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
