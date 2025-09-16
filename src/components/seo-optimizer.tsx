'use client';

import { useEffect, useState } from 'react';
import { seoOptimization } from '@/lib/performance-utils';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEOOptimizer({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOOptimizerProps) {
  const [seoScore, setSeoScore] = useState(0);
  const [issues, setIssues] = useState<string[]>([]);

  useEffect(() => {
    // Validate and optimize SEO elements
    const validateSEO = () => {
      const newIssues: string[] = [];
      let score = 100;

      // Title validation
      if (title) {
        if (title.length < seoOptimization.metaTags.title.minLength) {
          newIssues.push(`Title too short (${title.length} chars, min ${seoOptimization.metaTags.title.minLength})`);
          score -= 20;
        } else if (title.length > seoOptimization.metaTags.title.maxLength) {
          newIssues.push(`Title too long (${title.length} chars, max ${seoOptimization.metaTags.title.maxLength})`);
          score -= 15;
        }
      } else {
        newIssues.push('Missing page title');
        score -= 30;
      }

      // Description validation
      if (description) {
        if (description.length < seoOptimization.metaTags.description.minLength) {
          newIssues.push(`Description too short (${description.length} chars, min ${seoOptimization.metaTags.description.minLength})`);
          score -= 20;
        } else if (description.length > seoOptimization.metaTags.description.maxLength) {
          newIssues.push(`Description too long (${description.length} chars, max ${seoOptimization.metaTags.description.maxLength})`);
          score -= 15;
        }
      } else {
        newIssues.push('Missing meta description');
        score -= 25;
      }

      // Keywords validation
      if (keywords.length === 0) {
        newIssues.push('No keywords provided');
        score -= 10;
      } else if (keywords.length > 10) {
        newIssues.push('Too many keywords (max 10 recommended)');
        score -= 5;
      }

      // Canonical URL validation
      if (!canonicalUrl) {
        newIssues.push('Missing canonical URL');
        score -= 15;
      }

      // H1 validation
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length === 0) {
        newIssues.push('Missing H1 tag');
        score -= 20;
      } else if (h1Elements.length > 1) {
        newIssues.push('Multiple H1 tags found (use only one)');
        score -= 10;
      }

      // Image alt text validation
      const images = document.querySelectorAll('img');
      let imagesWithoutAlt = 0;
      images.forEach((img) => {
        if (!img.alt || img.alt.trim() === '') {
          imagesWithoutAlt++;
        }
      });
      if (imagesWithoutAlt > 0) {
        newIssues.push(`${imagesWithoutAlt} images missing alt text`);
        score -= imagesWithoutAlt * 5;
      }

      // Internal links validation
      const internalLinks = document.querySelectorAll('a[href^="/"]');
      if (internalLinks.length === 0) {
        newIssues.push('No internal links found');
        score -= 10;
      }

      // External links validation
      const externalLinks = document.querySelectorAll('a[href^="http"]');
      externalLinks.forEach((link) => {
        if (!(link as HTMLAnchorElement).rel.includes('nofollow')) {
          // Add nofollow to external links for better SEO
          (link as HTMLAnchorElement).rel = 'nofollow noopener noreferrer';
        }
      });

      // Schema markup validation
      const schemaElements = document.querySelectorAll('script[type="application/ld+json"]');
      if (schemaElements.length === 0) {
        newIssues.push('No structured data found');
        score -= 15;
      }

      setIssues(newIssues);
      setSeoScore(Math.max(0, score));
    };

    // Run validation after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(validateSEO, 100);

    return () => clearTimeout(timeoutId);
  }, [title, description, keywords, canonicalUrl]);

  // Optimize images for SEO
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }

        // Ensure proper alt text
        if (!img.alt || img.alt.trim() === '') {
          img.alt = 'Image';
        }
      });
    };

    optimizeImages();
  }, []);

  // Add structured data
  useEffect(() => {
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [structuredData]);

  // Add canonical URL
  useEffect(() => {
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [canonicalUrl]);

  // Add meta robots
  useEffect(() => {
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow',
    ].join(', ');

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', robotsContent);
  }, [noindex, nofollow]);

  // Add Open Graph tags
  useEffect(() => {
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach(({ property, content }) => {
      if (content) {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (!ogTag) {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          document.head.appendChild(ogTag);
        }
        ogTag.setAttribute('content', content);
      }
    });
  }, [title, description, ogImage, canonicalUrl]);

  // Add Twitter Card tags
  useEffect(() => {
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      if (content) {
        let twitterTag = document.querySelector(`meta[name="${name}"]`);
        if (!twitterTag) {
          twitterTag = document.createElement('meta');
          twitterTag.setAttribute('name', name);
          document.head.appendChild(twitterTag);
        }
        twitterTag.setAttribute('content', content);
      }
    });
  }, [title, description, ogImage]);

  // Add keywords meta tag
  useEffect(() => {
    if (keywords.length > 0) {
      let keywordsTag = document.querySelector('meta[name="keywords"]');
      if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.setAttribute('content', keywords.join(', '));
    }
  }, [keywords]);

  // Development mode: Show SEO score and issues
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-white border rounded-lg p-4 shadow-lg z-50 max-w-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm">SEO Score</h3>
          <span className={`text-lg font-bold ${
            seoScore >= 90 ? 'text-green-600' : 
            seoScore >= 70 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {seoScore}%
          </span>
        </div>
        {issues.length > 0 && (
          <div className="text-xs text-gray-600">
            <p className="font-medium mb-1">Issues:</p>
            <ul className="list-disc list-inside space-y-1">
              {issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
}

// SEO optimization utilities
export const seoUtils = {
  // Generate meta description from content
  generateDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    const truncated = cleanContent.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  },

  // Generate title from content
  generateTitle: (content: string, maxLength: number = 60): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    const truncated = cleanContent.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  },

  // Extract keywords from content
  extractKeywords: (content: string, maxKeywords: number = 10): string[] => {
    const cleanContent = content.replace(/<[^>]*>/g, '').toLowerCase();
    const words = cleanContent.match(/\b\w{4,}\b/g) || [];
    
    const wordCount: Record<string, number> = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  },

  // Validate URL
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Generate breadcrumb structured data
  generateBreadcrumbSchema: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
};
