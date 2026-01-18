'use client';

import React, { useState } from 'react';

/**
 * FAQ Component
 * محسّن للـ SEO مع الكلمات المفتاحية
 */

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "ما هو صالون أحلى ملاك؟",
      answer: "صالون أحلى ملاك هو صالون تجميل احترافي في حلب يقدم خدمات عالية الجودة في مجال العناية بالبشرة والشعر والأظافر مع فريق متخصص وذو خبرة."
    },
    {
      question: "ما هي الخدمات المتاحة في صالون أحلى ملاك؟",
      answer: "نقدم خدمات شاملة تشمل: تجميل وعناية الوجه، تجميل وعناية الشعر، تجميل الأظافر والمانيكير، إزالة الشعر بالشمع، بالإضافة إلى دورات تعليمية متخصصة."
    },
    {
      question: "هل يوجد دورات تدريبية في صالون أحلى ملاك؟",
      answer: "نعم، نقدم دورات تعليمية احترافية في مجال التجميل والعناية الشاملة بأيدي خبراء متخصصين."
    },
    {
      question: "كيفية الحجز في صالون أحلى ملاك؟",
      answer: "يمكنك التواصل معنا عبر الهاتف أو زيارة صفحة التواصل في الموقع أو من خلال صفحاتنا على وسائل التواصل الاجتماعي."
    },
    {
      question: "أين يقع صالون أحلى ملاك؟",
      answer: "يقع صالون تجميل أحلى ملاك في حلب، سيف الدولة، المولات، مفرق كلية العلوم، مقابل سنتر تيم."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          أسئلة شائعة - صالون أحلى ملاك
        </h2>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full p-4 text-right font-semibold text-gray-800 hover:bg-orange-50 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="text-orange-500 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-100 text-gray-700 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
