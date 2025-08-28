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

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3B82F6',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://physiohelper.com'),
  title: "PhysioHelper - AI-Powered Healthcare Platform",
  description: "Professional healthcare guidance powered by artificial intelligence. Get personalized assessments, expert advice, and comprehensive wellness plans.",
  keywords: "healthcare, physiotherapy, AI, wellness, rehabilitation, physical therapy, mental health, preventive care",
  authors: [{ name: "PhysioHelper Team" }],
  creator: "PhysioHelper",
  publisher: "PhysioHelper",
  robots: "index, follow",
  other: {
    "google-adsense-account": "ca-pub-3347120637586448",
    "google-adsense-account-id": "ca-pub-3347120637586448",
  },
  openGraph: {
    title: "PhysioHelper - AI-Powered Healthcare Platform",
    description: "Professional healthcare guidance powered by artificial intelligence. Get personalized assessments, expert advice, and comprehensive wellness plans.",
    url: "https://physiohelper.com",
    siteName: "PhysioHelper",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PhysioHelper - AI-Powered Healthcare Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysioHelper - AI-Powered Healthcare Platform",
    description: "Professional healthcare guidance powered by artificial intelligence. Get personalized assessments, expert advice, and comprehensive wellness plans.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
        
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
