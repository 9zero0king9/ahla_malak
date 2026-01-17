/**
 * SEO Schema Generator
 * ينشئ structured data محسّنة لكل صفحة
 */

export const generateServiceSchema = (serviceName, description) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "BeautySalon",
      "name": "Ahla Malak Salon",
      "telephone": "+963940599162",
      "url": "https://ahlimalak.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Aleppo, Syria"
    }
  };
};

export const generateFAQSchema = (faqs) => {
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
};
