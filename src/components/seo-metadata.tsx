'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export function SEOMetadata({
  title = 'PhysioHelper - Physiotherapy Learning Platform',
  description = 'Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.',
  keywords = 'physiotherapy, physical therapy, rehabilitation, clinical skills, case studies, study guides, healthcare education, medical training, physio students, clinical practice',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes('PhysioHelper') ? title : `${title} | PhysioHelper`;
  const fullDescription = description || 'Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, and educational resources.';
  const canonicalUrl = canonical || 'https://physiohelper.com';
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `https://physiohelper.com${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PhysioHelper" />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PhysioHelper" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@physiohelper" />
      <meta name="twitter:creator" content="@physiohelper" />
      
      {/* Additional Meta Tags */}
      <meta name="application-name" content="PhysioHelper" />
      <meta name="apple-mobile-web-app-title" content="PhysioHelper" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}

// Predefined structured data for different page types
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PhysioHelper",
    "url": "https://physiohelper.com",
    "logo": "https://physiohelper.com/logo.png",
    "description": "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, and educational resources.",
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
    },
    "sameAs": [
      "https://www.facebook.com/physiohelper",
      "https://www.twitter.com/physiohelper",
      "https://www.linkedin.com/company/physiohelper",
      "https://www.youtube.com/physiohelper"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PhysioHelper",
    "url": "https://physiohelper.com",
    "description": "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, and educational resources.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://physiohelper.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  educationalOrganization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "PhysioHelper",
    "url": "https://physiohelper.com",
    "description": "Online educational platform for physiotherapy students and healthcare professionals.",
    "educationalLevel": "Higher Education",
    "teaches": [
      "Physiotherapy",
      "Physical Therapy",
      "Rehabilitation Sciences",
      "Clinical Skills",
      "Anatomy and Physiology"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Physiotherapy Certification",
      "description": "Professional physiotherapy education and training"
    }
  },
  
  course: (courseData: any) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.name || "Physiotherapy Course",
    "description": courseData.description || "Comprehensive physiotherapy learning course",
    "provider": {
      "@type": "Organization",
      "name": "PhysioHelper",
      "url": "https://physiohelper.com"
    },
    "courseMode": "online",
    "educationalLevel": "Higher Education",
    "inLanguage": "en",
    "isAccessibleForFree": courseData.isFree || false,
    "offers": courseData.price ? {
      "@type": "Offer",
      "price": courseData.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    } : undefined
  }),
  
  article: (articleData: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Organization",
      "name": "PhysioHelper"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PhysioHelper",
      "logo": {
        "@type": "ImageObject",
        "url": "https://physiohelper.com/logo.png"
      }
    },
    "datePublished": articleData.publishedDate,
    "dateModified": articleData.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleData.url
    },
    "image": articleData.image || "https://physiohelper.com/og-image.jpg"
  })
};
