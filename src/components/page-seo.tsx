'use client';

import { generatePageSEO, generateBreadcrumbStructuredData } from '@/lib/seo-utils';

interface PageSEOProps {
  page: string;
  customData?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
    nofollow?: boolean;
    breadcrumbs?: Array<{name: string, url: string}>;
    structuredData?: object;
  };
}

export function PageSEO({ page, customData }: PageSEOProps) {
  const seoData = generatePageSEO(page, customData);
  
  // Generate breadcrumb structured data if provided
  const breadcrumbStructuredData = customData?.breadcrumbs 
    ? generateBreadcrumbStructuredData(customData.breadcrumbs)
    : null;

  return (
    <>
      {/* Page-specific meta tags */}
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords} />
      <link rel="canonical" href={seoData.canonical} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.canonical} />
      <meta property="og:image" content={seoData.ogImage || '/og-image.jpg'} />
      <meta property="og:type" content={seoData.ogType || 'website'} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.ogImage || '/og-image.jpg'} />
      
      {/* Robots meta tag */}
      <meta name="robots" content={`${seoData.noindex ? 'noindex' : 'index'}, ${seoData.nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Structured Data */}
      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
      )}
      
      {customData?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(customData.structuredData),
          }}
        />
      )}
    </>
  );
}

// Pre-built SEO components for common pages
export function HomePageSEO() {
  return (
    <PageSEO 
      page="home"
      customData={{
        structuredData: {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "PhysioHelper",
          "url": "https://physiohelper.com",
          "description": "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, and educational resources.",
          "logo": "https://physiohelper.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9398157255",
            "contactType": "customer service",
            "email": "students@physiohelper.com",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "India"
          }
        }
      }}
    />
  );
}

export function AboutPageSEO() {
  return (
    <PageSEO 
      page="about"
      customData={{
        breadcrumbs: [
          { name: "Home", url: "https://physiohelper.com" },
          { name: "About", url: "https://physiohelper.com/about" }
        ]
      }}
    />
  );
}

export function ResourcesPageSEO() {
  return (
    <PageSEO 
      page="resources"
      customData={{
        breadcrumbs: [
          { name: "Home", url: "https://physiohelper.com" },
          { name: "Resources", url: "https://physiohelper.com/resources" }
        ]
      }}
    />
  );
}

export function CaseStudiesPageSEO() {
  return (
    <PageSEO 
      page="case-studies"
      customData={{
        breadcrumbs: [
          { name: "Home", url: "https://physiohelper.com" },
          { name: "Case Studies", url: "https://physiohelper.com/case-studies" }
        ]
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <PageSEO 
      page="contact"
      customData={{
        breadcrumbs: [
          { name: "Home", url: "https://physiohelper.com" },
          { name: "Contact", url: "https://physiohelper.com/contact" }
        ],
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact PhysioHelper",
          "description": "Contact PhysioHelper for support, questions, or feedback. Get help with your physiotherapy learning journey from our expert team.",
          "url": "https://physiohelper.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "PhysioHelper",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9398157255",
              "contactType": "customer service",
              "email": "students@physiohelper.com",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            }
          }
        }
      }}
    />
  );
}
