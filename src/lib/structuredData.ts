/**
 * Utility functions for generating structured data
 * Based on Schema.org standards
 */

import environmentConfig from "./environmentConfig";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Create breadcrumb structured data
 * @param items Array of breadcrumb items
 * @returns Schema.org BreadcrumbList JSON-LD
 */
export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${environmentConfig.baseUrl}${item.url}`,
    })),
  };
};

/**
 * Create FAQ structured data
 * @param questions Array of question/answer pairs
 * @returns Schema.org FAQPage JSON-LD
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export const createFAQSchema = (questions: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

/**
 * Create organization structured data
 * @returns Schema.org Organization JSON-LD
 */
export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: environmentConfig.siteName,
    url: environmentConfig.baseUrl,
    logo: `${environmentConfig.baseUrl}/logo.png`,
    description: environmentConfig.defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Seiyun",
      addressLocality: "Hadramout",
      addressRegion: "Hadramout",
      addressCountry: "Yemen",
    },
    sameAs: [
      "https://www.facebook.com/kindamedical",
      "https://www.twitter.com/kindamedical",
      "https://www.linkedin.com/company/kindamedical",
    ],
  };
};

/**
 * Create WebPage structured data
 * @param title Page title
 * @param description Page description
 * @param url Page URL
 * @returns Schema.org WebPage JSON-LD
 */
export const createWebPageSchema = (
  title: string = environmentConfig.defaultTitle,
  description: string = environmentConfig.defaultDescription,
  url: string = environmentConfig.baseUrl
) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: environmentConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${environmentConfig.baseUrl}/logo.png`,
      },
    },
  };
};

export default {
  createBreadcrumbSchema,
  createFAQSchema,
  createOrganizationSchema,
  createWebPageSchema,
};
