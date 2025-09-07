'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="responsive-container py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* 404 Illustration */}
            <div className="relative">
              <div className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-slate-200 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
            </div>
            
            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Page Not Found
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/">
                <Button className="btn-healthcare text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  <Home className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="btn-healthcare-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Go Back
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Pages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                <Link href="/courses" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Courses</span>
                </Link>
                <Link href="/resources" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Resources</span>
                </Link>
                <Link href="/drug-search" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Drug Search</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
