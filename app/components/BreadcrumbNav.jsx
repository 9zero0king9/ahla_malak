import Image from 'next/image';

/**
 * Breadcrumb Navigation
 * بتحسّن SEO وتوضح البنية للمستخدم و Google
 */

export const BreadcrumbNav = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://ahlimalak.com${item.url}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="breadcrumb mb-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <a href={item.url} className="text-red-800 hover:underline">
                {item.label}
              </a>
              {index < items.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;
