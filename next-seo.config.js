module.exports = {
  // Site Configuration
  siteUrl: 'https://physiohelper.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  
  // Sitemap Configuration
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  
  // Robots.txt Configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/',
          '/profile/',
          '/login/',
          '/register/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/dashboard/',
          '/profile/',
          '/login/',
          '/register/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://physiohelper.com/sitemap.xml',
    ],
  },
  
  // Default SEO Configuration
  defaultTitle: 'PhysioHelper - Physiotherapy Learning Platform',
  titleTemplate: '%s | PhysioHelper',
  description: 'Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.',
  canonical: 'https://physiohelper.com',
  
  // Open Graph Configuration
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://physiohelper.com',
    siteName: 'PhysioHelper',
    title: 'PhysioHelper - Physiotherapy Learning Platform',
    description: 'Comprehensive physiotherapy learning platform with clinical case studies, rehabilitation protocols, study guides, and educational resources for healthcare students and professionals.',
    images: [
      {
        url: 'https://physiohelper.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PhysioHelper - Physiotherapy Learning Platform',
      },
    ],
  },
  
  // Twitter Configuration
  twitter: {
    handle: '@physiohelper',
    site: '@physiohelper',
    cardType: 'summary_large_image',
  },
  
  // Additional Meta Tags
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'physiotherapy, physical therapy, rehabilitation, clinical skills, case studies, study guides, healthcare education, medical training, physio students, clinical practice, anatomy, physiology, therapeutic exercise, manual therapy',
    },
    {
      name: 'author',
      content: 'PhysioHelper Team',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'application-name',
      content: 'PhysioHelper',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'PhysioHelper',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
  ],
  
  // Additional Link Tags
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://www.google-analytics.com',
    },
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
    },
  ],
};
