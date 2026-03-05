import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords = 'web development, mobile apps, custom software, AI automation, digital solutions, software development company, app development, digital marketing, cyber security, graphical design',
  ogImage = 'https://www.devstudioco.com/og-image.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
  schema
}: SEOProps) {
  const siteUrl = 'https://www.devstudioco.com';
  const fullTitle = `${title} | The Development Studio`;
  const canonicalUrl = canonical || `${siteUrl}${window.location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'The Development Studio');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph Tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'The Development Studio', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@DevStudio');
    updateMetaTag('twitter:creator', '@DevStudio');

    // Additional SEO Tags
    updateMetaTag('application-name', 'The Development Studio');
    updateMetaTag('apple-mobile-web-app-title', 'Dev Studio');
    updateMetaTag('theme-color', '#FF6600');
    updateMetaTag('msapplication-TileColor', '#FF6600');

    // Language and Geographic
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'US');
    updateMetaTag('geo.placename', 'Global');

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Schema.org Structured Data
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Alternate Languages (for global reach)
    const addAlternateLink = (lang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    addAlternateLink('en', canonicalUrl);
    addAlternateLink('x-default', canonicalUrl);
    addAlternateLink('en-US', canonicalUrl);
    addAlternateLink('en-GB', canonicalUrl);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl, noindex, schema]);

  return null;
}

// Pre-configured SEO data for common pages
export const SEOData = {
  home: {
    title: 'Digital Solutions Company - Web, Mobile & AI Development',
    description: 'The Development Studio crafts premium web applications, mobile apps, custom software, AI automation, and digital solutions. Transform your vision into reality with our expert team.',
    keywords: 'web development company, mobile app development, custom software development, AI automation, digital transformation, software solutions, app development services, web design agency',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'The Development Studio',
      description: 'A Digital Solution Company specializing in web development, mobile apps, custom software, AI automation, and digital marketing.',
      url: 'https://www.devstudioco.com',
      logo: 'https://www.devstudioco.com/logo.png',
      foundingDate: '2020',
      slogan: 'Crafting Dreams into Design. Your Vision, Our Artistry.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 8438028227',
        contactType: 'customer service',
        email: 'hello@devstudioco.com',
        availableLanguage: ['English']
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Chennai'
      },
      sameAs: [
        'https://www.linkedin.com/company/devstudio',
        'https://twitter.com/devstudio',
        'https://github.com/devstudio',
        'https://www.facebook.com/devstudio'
      ],
      areaServed: 'Worldwide',
      serviceType: [
        'Web Development',
        'Mobile App Development',
        'Custom Software Development',
        'AI & Automation',
        'Cyber Security',
        'Digital Marketing',
        'Graphical Design'
      ]
    }
  },
  expertise: {
    title: 'Our Services - Web, Mobile, Software & AI Solutions',
    description: 'Comprehensive digital services including web development, mobile apps, custom software, AI automation, cyber security, digital marketing, and design. Enterprise-grade solutions.',
    keywords: 'web development services, mobile app services, custom software, AI automation services, cyber security, digital marketing, graphic design, software development',
  },
  industries: {
    title: 'Industries We Serve - FinTech, Healthcare, E-Commerce & More',
    description: 'Expert digital solutions for FinTech, Healthcare, E-Commerce, SaaS, Education, Logistics, Real Estate, and more. Industry-specific software development.',
    keywords: 'fintech software, healthcare software, ecommerce solutions, saas development, education technology, logistics software, industry solutions',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Industry-Specific Software Development',
      provider: {
        '@type': 'Organization',
        name: 'The Development Studio'
      },
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Industries',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FinTech Solutions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Software' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Platforms' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development' } }
        ]
      }
    }
  },
  connect: {
    title: 'Contact Us - Get Your Free Consultation Today',
    description: 'Ready to transform your digital presence? Contact The Development Studio for a free consultation. Let\'s discuss your project and bring your vision to life.',
    keywords: 'contact software company, free consultation, project quote, software development inquiry',
  },
  company: {
    title: 'About Us - Leading Digital Solution Company Since 2020',
    description: 'Learn about The Development Studio - a team of 50+ experts delivering 500+ projects with 99% success rate. Your trusted partner for digital transformation.',
    keywords: 'about software company, development team, software company profile, digital agency',
  }
};
