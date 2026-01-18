'use client';

import React from 'react';

/**
 * SEO Content Component
 * محتوى محسّن للكلمات المفتاحية بدون تخريب التصميم
 */

export const SEOContent = () => {
  return (
    <div className="w-full bg-white py-12 px-6 text-center">
      {/* Structured content for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "صالون أحلى ملاك Ahla Malak Salon",
            "description": "صالون تجميل احترافي يقدم خدمات العناية بالوجه والشعر والأظافر",
            "url": "https://ahlamalak.com",
            "telephone": "+963940599162",
            "image": "/assets/png/logo.png",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "سيف الدوله، المولات، مفرق كلية العلوم",
              "addressLocality": "Aleppo",
              "addressCountry": "SY"
            }
          })
        }}
      />
      
      {/* Hidden SEO text - very small and subtle */}
      <div className="text-gray-700 text-sm opacity-70 max-w-3xl mx-auto space-y-3">
        <p className="leading-relaxed">
          <strong>صالون أحلى ملاك</strong> هو صالون تجميل متخصص في حلب يقدم خدمات احترافية عالية الجودة.
          نقدم أفضل الخدمات في مجال التجميل والعناية بالبشرة.
        </p>
        
        <p className="leading-relaxed">
          يضم <strong>صالون أحلى ملاك</strong> فريقاً من الخبراء المتخصصين في مختلف مجالات التجميل.
          كل خدمة في <strong>صالون تجميل أحلى ملاك</strong> تتم بعناية واحترافية عالية.
        </p>
        
        <p className="leading-relaxed">
          نقدم خدمات <strong>صالون تجميل</strong> شاملة تشمل العناية بالوجه، العناية بالشعر، تقنيات حديثة،
          وتدريب متخصص في مجال الصالونات.
        </p>
      </div>
    </div>
  );
};

export default SEOContent;
