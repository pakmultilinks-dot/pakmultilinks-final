export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pakmultilinks.com/#organization",
    name: "Pak Multilinks Hygiene",
    alternateName: "Pak Multilinks",
    url: "https://pakmultilinks.com",
    logo: "https://pakmultilinks.com/images/logo.jpg",
    slogan: "Your Hygiene Partner",
    description:
      "Pak Multilinks Hygiene is Lahore's trusted wholesale supplier of tissue, hygiene and cleaning products by the carton. Serving offices, schools, clinics, restaurants and businesses across Pakistan.",
    foundingLocation: {
      "@type": "Place",
      name: "Lahore, Pakistan",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92-300-6917385",
        contactType: "sales",
        name: "Zoher Ahmed",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+92-325-8166829",
        contactType: "sales",
        name: "Bilal Shah",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61594928463773",
      "https://instagram.com/pakmultilinks",
      "https://linkedin.com/company/pakmultilinks",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pakmultilinks.com/#localbusiness",
    name: "Pak Multilinks Hygiene",
    image: "https://pakmultilinks.com/images/logo.jpg",
    url: "https://pakmultilinks.com",
    telephone: "+92-300-6917385",
    email: "zohair.shah8@gmail.com",
    priceRange: "Wholesale",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No LG-9, Rehman Tower Main Market Gulberg II",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61594928463773",
      "https://instagram.com/pakmultilinks",
      "https://linkedin.com/company/pakmultilinks",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pakmultilinks.com/#website",
    url: "https://pakmultilinks.com",
    name: "Pak Multilinks Hygiene",
    publisher: { "@id": "https://pakmultilinks.com/#organization" },
    inLanguage: "en-PK",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
