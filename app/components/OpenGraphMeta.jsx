/**
 * OpenGraph Component
 * لتحسين مشاركة الموقع على Social Media
 */

export const OpenGraphMeta = ({ 
  title = "Ahla Malak Salon",
  description = "صالون تجميل احترافي في حلب",
  image = "/assets/png/logo.png",
  url = "https://ahlimalak.com"
}) => {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ahla Malak Salon" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Facebook */}
      <meta property="fb:app_id" content="" />
      
      {/* WhatsApp */}
      <meta property="wa:phone_number" content="+963940599162" />
    </>
  );
};
