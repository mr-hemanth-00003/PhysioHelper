// SEO utility functions for PhysioHelper

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

// Generate page-specific SEO data
export function generatePageSEO(
  page: string,
  customData?: Partial<PageSEO>
): PageSEO {
  const baseUrl = 'https://physiohelper.com';
  
  const seoData: Record<string, PageSEO> = {
    home: {
      title: 'PhysioHelper - Physiotherapy Learning Platform',
      description: 'Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.',
      keywords: 'physiotherapy, physical therapy, rehabilitation, clinical skills, case studies, study guides, healthcare education, medical training, physio students, clinical practice',
      canonical: baseUrl,
      ogType: 'website',
    },
    
    about: {
      title: 'About PhysioHelper - Leading Physiotherapy Education Platform',
      description: 'Learn about PhysioHelper, the comprehensive physiotherapy learning platform designed for students and healthcare professionals. Discover our mission to advance physiotherapy education.',
      keywords: 'about physiohelper, physiotherapy education, healthcare learning platform, physio students, medical education, clinical training',
      canonical: `${baseUrl}/about`,
      ogType: 'website',
    },
    
    contact: {
      title: 'Contact PhysioHelper - Get Support & Help',
      description: 'Contact PhysioHelper for support, questions, or feedback. Get help with your physiotherapy learning journey from our expert team.',
      keywords: 'contact physiohelper, physiotherapy support, healthcare education help, physio student support, medical training assistance',
      canonical: `${baseUrl}/contact`,
      ogType: 'website',
    },
    
    resources: {
      title: 'Physiotherapy Resources - Study Materials & Guides',
      description: 'Access comprehensive physiotherapy resources including anatomy guides, clinical skills training, study materials, and educational content for all academic levels.',
      keywords: 'physiotherapy resources, study materials, anatomy guides, clinical skills, physio study guides, healthcare education resources',
      canonical: `${baseUrl}/resources`,
      ogType: 'website',
    },
    
    'case-studies': {
      title: 'Clinical Case Studies - Physiotherapy Practice Cases',
      description: 'Explore real-world physiotherapy case studies to enhance your clinical reasoning and practical skills. Learn from diverse patient scenarios and treatment approaches.',
      keywords: 'physiotherapy case studies, clinical cases, physio practice, patient scenarios, clinical reasoning, physiotherapy examples',
      canonical: `${baseUrl}/case-studies`,
      ogType: 'website',
    },
    
    exams: {
      title: 'Physiotherapy Practice Exams - Test Your Knowledge',
      description: 'Take practice exams to test your physiotherapy knowledge and prepare for professional assessments. Comprehensive question banks for all academic levels.',
      keywords: 'physiotherapy exams, practice tests, physio assessment, medical exams, healthcare testing, physiotherapy quiz',
      canonical: `${baseUrl}/exams`,
      ogType: 'website',
    },
    
    'study-guides': {
      title: 'Physiotherapy Study Guides - Comprehensive Learning Materials',
      description: 'Access detailed study guides covering all aspects of physiotherapy education. From anatomy to clinical practice, enhance your learning with structured materials.',
      keywords: 'physiotherapy study guides, learning materials, physio education, study resources, healthcare study guides, medical learning',
      canonical: `${baseUrl}/study-guides`,
      ogType: 'website',
    },
    
    'rehabilitation-protocol': {
      title: 'Rehabilitation Protocols - Evidence-Based Treatment Guidelines',
      description: 'Access evidence-based rehabilitation protocols for various conditions. Learn standardized treatment approaches and clinical guidelines for physiotherapy practice.',
      keywords: 'rehabilitation protocols, physiotherapy guidelines, treatment protocols, clinical guidelines, physio protocols, evidence-based practice',
      canonical: `${baseUrl}/rehabilitation-protocol`,
      ogType: 'website',
    },
    
    'drug-search': {
      title: 'Drug Database - Physiotherapy Pharmacology Reference',
      description: 'Search comprehensive drug database for physiotherapy practice. Find medication information, interactions, and clinical considerations for patient care.',
      keywords: 'drug database, pharmacology, physiotherapy drugs, medication reference, drug interactions, clinical pharmacology',
      canonical: `${baseUrl}/drug-search`,
      ogType: 'website',
    },
    
    'course-materials': {
      title: 'Course Materials - Physiotherapy Learning Resources',
      description: 'Access course materials, lecture notes, and educational content for physiotherapy students. Comprehensive learning resources for all academic levels.',
      keywords: 'course materials, physiotherapy courses, learning resources, lecture notes, educational content, physio curriculum',
      canonical: `${baseUrl}/course-materials`,
      ogType: 'website',
    },
    
    'ai-assistant': {
      title: 'AI Assistant - Physiotherapy Learning Support',
      description: 'Get personalized learning support with our AI assistant. Ask questions, get explanations, and enhance your physiotherapy education with intelligent guidance.',
      keywords: 'AI assistant, physiotherapy AI, learning support, educational AI, physio chatbot, intelligent tutoring',
      canonical: `${baseUrl}/ai-assistant`,
      ogType: 'website',
    },
    
    articles: {
      title: 'Physiotherapy Articles - Latest Research & Insights',
      description: 'Read latest physiotherapy articles, research insights, and clinical updates. Stay informed with evidence-based content from healthcare professionals.',
      keywords: 'physiotherapy articles, physio research, clinical insights, healthcare articles, medical research, physiotherapy news',
      canonical: `${baseUrl}/articles`,
      ogType: 'website',
    },
    
    search: {
      title: 'Search PhysioHelper - Find Learning Resources',
      description: 'Search our comprehensive database of physiotherapy learning resources, case studies, study guides, and educational content.',
      keywords: 'search physiohelper, physiotherapy search, learning resources search, physio content search, educational search',
      canonical: `${baseUrl}/search`,
      ogType: 'website',
    },
    
    privacy: {
      title: 'Privacy Policy - PhysioHelper Data Protection',
      description: 'Read PhysioHelper\'s privacy policy to understand how we collect, use, and protect your personal information and learning data.',
      keywords: 'privacy policy, data protection, physiohelper privacy, user data, information security, GDPR compliance',
      canonical: `${baseUrl}/privacy`,
      ogType: 'website',
    },
    
    terms: {
      title: 'Terms of Service - PhysioHelper User Agreement',
      description: 'Review PhysioHelper\'s terms of service and user agreement. Understand your rights and responsibilities when using our learning platform.',
      keywords: 'terms of service, user agreement, physiohelper terms, platform terms, user rights, service agreement',
      canonical: `${baseUrl}/terms`,
      ogType: 'website',
    },
    
    'medical-disclaimers': {
      title: 'Medical Disclaimers - Important Health Information',
      description: 'Read important medical disclaimers and educational notices for PhysioHelper users. Understand the limitations and proper use of our educational content.',
      keywords: 'medical disclaimers, health information, educational disclaimers, medical advice, physiotherapy disclaimers, health warnings',
      canonical: `${baseUrl}/medical-disclaimers`,
      ogType: 'website',
    },
    
    'children-privacy': {
      title: 'Children\'s Privacy Policy - COPPA Compliance',
      description: 'Learn about PhysioHelper\'s children\'s privacy policy and how we protect the personal information of users under 13 years of age.',
      keywords: 'children privacy, COPPA compliance, kids privacy, child protection, family privacy, youth data protection',
      canonical: `${baseUrl}/children-privacy`,
      ogType: 'website',
    },
  };

  const defaultData = seoData[page] || seoData.home;
  
  return {
    ...defaultData,
    ...customData,
  };
}

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate course structured data
export function generateCourseStructuredData(course: {
  name: string;
  description: string;
  provider: string;
  price?: number;
  currency?: string;
  isFree?: boolean;
  duration?: string;
  level?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider
    },
    "courseMode": "online",
    "educationalLevel": course.level || "Higher Education",
    "inLanguage": "en",
    "isAccessibleForFree": course.isFree || false,
    "timeRequired": course.duration,
    "offers": course.price ? {
      "@type": "Offer",
      "price": course.price,
      "priceCurrency": course.currency || "INR",
      "availability": "https://schema.org/InStock"
    } : undefined
  };
}

// Generate article structured data
export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "PhysioHelper",
      "logo": {
        "@type": "ImageObject",
        "url": "https://physiohelper.com/logo.png"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "image": article.image || "https://physiohelper.com/og-image.jpg"
  };
}

// Generate local business structured data
export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "PhysioHelper",
    "description": "Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, and educational resources.",
    "url": "https://physiohelper.com",
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
  };
}

// Generate search action structured data
export function generateSearchActionStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PhysioHelper",
    "url": "https://physiohelper.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://physiohelper.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}
