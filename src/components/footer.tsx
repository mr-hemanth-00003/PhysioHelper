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
  Heart
} from 'lucide-react';
import Link from 'next/link';
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
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/favicon.ico" alt="PhysioHelper Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
              <div>
                <div className="font-bold text-lg sm:text-xl text-white">
                  Physio<span className="text-blue-400">Helper</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Student Learning Platform</div>
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
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="break-words">students@physiohelper.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>+91 7780440232</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>Tirupathi, 517101</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
              <span>&copy; {currentYear} PhysioHelper. All rights reserved.</span>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 text-center">
              <span>Site Designed and developed by AnandVerse Web Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
