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
      <div className="container max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/favicon.ico" alt="PhysioHelper Logo" className="w-10 h-10 rounded-lg" />
              <div>
                <div className="font-bold text-xl text-white">
                  Physio<span className="text-blue-400">Helper</span>
                </div>
                <div className="text-sm text-slate-400">Student Learning Platform</div>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Empowering physiotherapy students with comprehensive learning resources, 
              clinical case studies, and practical learning resources.
            </p>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wide">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>students@physiohelper.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 7780440232</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tirupathi, 517101</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>&copy; {currentYear} PhysioHelper. All rights reserved.</span>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Site Designed and developed by AnandVerse Web Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
