/**
 * Performance Hints
 * بيضيف hints للـ browser لتحسين الأداء
 */

export const PerformanceHints = () => {
  return (
    <>
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.facebook.com" />
      <link rel="dns-prefetch" href="https://www.instagram.com" />
      
      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Prefetch popular routes */}
      <link rel="prefetch" href="/services" as="document" />
      <link rel="prefetch" href="/aboutus" as="document" />
      <link rel="prefetch" href="/contact" as="document" />
    </>
  );
};

export default PerformanceHints;
