import React from "react";

export default function SEOJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HWAH Industries LLC",
    url: "https://www.hwah.net",
    logo: "https://www.hwah.net/brand/hwah-logo-gold.jpg",
    email: "hrn@hwah.net",
    sameAs: [
      "https://www.linkedin.com/in/haroon-shafqat/",
      "https://github.com/hrunx"
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      email: "hrn@hwah.net",
      contactType: "customer support",
    }],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}


