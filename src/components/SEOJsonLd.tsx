import React from "react";

export default function SEOJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HWAH Industries",
    url: "https://hwah.net",
    logo: "https://hwah.net/icon.png",
    sameAs: [
      "https://www.linkedin.com/in/haroon-shafqat/",
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


