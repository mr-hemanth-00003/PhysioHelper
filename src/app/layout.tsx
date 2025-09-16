import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import ErrorBoundary from "@/components/error-boundary";
import PerformanceOptimizer from "@/components/performance-optimizer";

import { ClientProviders } from "@/components/client-providers";
import { ClientScripts } from "@/components/client-scripts";
import { StructuredData } from "@/components/structured-data";
import { PerformanceMonitor } from "@/components/performance-monitor";
import { PreloadResources } from "@/components/lazy-loader";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://physiohelper.com'),
  title: {
    default: "PhysioHelper - Physiotherapy Learning Platform",
    template: "%s | PhysioHelper"
  },
  description: "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.",
  keywords: "physiotherapy, physical therapy, rehabilitation, clinical skills, case studies, study guides, healthcare education, medical training, physio students, clinical practice, anatomy, physiology, therapeutic exercise, manual therapy",
  authors: [{ name: "PhysioHelper Team" }],
  creator: "PhysioHelper",
  publisher: "PhysioHelper",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://physiohelper.com',
  },
  other: {
    "google-adsense-account": "ca-pub-3347120637586448",
    "google-adsense-account-id": "ca-pub-3347120637586448",
  },
  openGraph: {
    title: "PhysioHelper - Physiotherapy Learning Platform",
    description: "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.",
    url: "https://physiohelper.com",
    siteName: "PhysioHelper",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PhysioHelper - Physiotherapy Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysioHelper - Physiotherapy Learning Platform",
    description: "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.",
    images: ["/og-image.jpg"],
    creator: "@physiohelper",
    site: "@physiohelper",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3347120637586448"
          crossOrigin="anonymous"
        ></script>
        
        {/* Scripts are loaded via ClientScripts component to prevent hydration mismatches */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 animated-bg"></div>
        
        {/* Floating Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl animate-float-delay-2"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-float-delay-4"></div>
        </div>

        {/* Client-side scripts to prevent hydration mismatches */}
        <ClientScripts />
        
        {/* Preload critical resources */}
        <PreloadResources />
        
        {/* Main Content */}
        <div className="relative z-10 pt-20">
          <ClientProviders>
            <PerformanceOptimizer>
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </PerformanceOptimizer>
          </ClientProviders>
        </div>
        
        {/* Structured Data - Client-side only */}
        <StructuredData />
        
        {/* Performance monitoring */}
        <PerformanceMonitor />
        
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
