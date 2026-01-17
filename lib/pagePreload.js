/**
 * Page Preloading Strategy
 * بيحمّل الصفحات والموارد مسبقاً
 */

'use client';

import { useEffect } from 'react';

export const usePagePreload = () => {
  useEffect(() => {
    // Preload critical pages
    const criticalPages = [
      '/services',
      '/aboutus',
      '/contact',
      '/services/ders',
      '/services/mumbakim',
      '/services/sacbakim',
      '/services/tirnakbakim',
      '/services/yuzbakim',
    ];

    // Preload links on hover
    const preloadLink = (url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = 'document';
      document.head.appendChild(link);
    };

    // Preload visible links on intersection
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.href) {
            preloadLink(entry.target.href);
          }
        });
      });

      document.querySelectorAll('a').forEach((link) => {
        observer.observe(link);
      });

      return () => observer.disconnect();
    }
  }, []);
};

export default usePagePreload;
