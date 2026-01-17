import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahla Malak Salon | خدمات تجميل احترافية",
  description: "صالون أحلى ملك - خدمات تجميل شاملة: تجميل الوجه، العناية بالشعر، وتقنيات حديثة. احجز موعدك الآن!",
  keywords: "صالون تجميل، خدمات العناية بالبشرة، قص الشعر، صالون النساء",
  openGraph: {
    title: "Ahla Malak Salon",
    description: "صالون تجميل احترافي بخدمات عالية الجودة",
    url: "https://ahlimalak.com",
    siteName: "Ahla Malak Salon",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Ahla Malak Salon",
    "description": "صالون تجميل احترافي بخدمات عالية الجودة في حلب",
    "url": "https://ahlimalak.com",
    "telephone": ["+963940599162", "+963945882802"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "سيف الدوله، المولات، مفرق كلية العلوم، مقابل سنتر تيم",
      "addressLocality": "Aleppo",
      "addressRegion": "Aleppo",
      "postalCode": "",
      "addressCountry": "SY"
    },
    "sameAs": [
      "https://www.facebook.com/share/16NgaTAmMX/",
      "https://www.instagram.com/ahlamalak2024"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Aleppo, Syria"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.2074",
      "longitude": "37.1600"
    }
  };

  return (
    <html lang="ar">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/assets/png/logo.png" />
        <link rel="preload" as="style" href="/globals.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Geo Tags for Aleppo */}
        <meta name="geo.position" content="36.2074;37.1600" />
        <meta name="ICBM" content="36.2074, 37.1600" />
        <meta name="geo.region" content="SY-ALX" />
        <meta name="geo.placename" content="Aleppo, Syria" />
        
        {/* Additional SEO */}
        <meta name="language" content="ar" />
        <meta name="author" content="Ahla Malak Salon" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ahlimalak.com/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
