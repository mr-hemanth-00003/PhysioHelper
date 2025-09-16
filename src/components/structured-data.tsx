'use client';

import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Add structured data to the document head
    const addStructuredData = (data: object, id: string) => {
      // Remove existing script if it exists
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script element
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Educational Organization structured data
    addStructuredData({
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
      },
      "sameAs": [
        "https://www.facebook.com/physiohelper",
        "https://www.twitter.com/physiohelper",
        "https://www.linkedin.com/company/physiohelper",
        "https://www.youtube.com/physiohelper"
      ]
    }, 'structured-data-organization');

    // Website structured data
    addStructuredData({
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
    }, 'structured-data-website');

    // Cleanup function
    return () => {
      const orgScript = document.getElementById('structured-data-organization');
      const websiteScript = document.getElementById('structured-data-website');
      if (orgScript) orgScript.remove();
      if (websiteScript) websiteScript.remove();
    };
  }, []);

  return null;
}
