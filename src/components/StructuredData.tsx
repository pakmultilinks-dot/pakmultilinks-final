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
        telephone: "+92-317-1678829",
        contactType: "sales",
        name: "Bilal Shah",
        areaServed: "PK",
        availableLanguage: ["en", "ur"],
      },
    ],
    sameAs: [],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5165,
      longitude: 74.3492,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [],
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

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Pak Multilinks Hygiene supply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pak Multilinks Hygiene supplies wholesale tissue and paper products (facial tissues, toilet rolls, napkins, kitchen towels), cleaning products (detergents, disinfectants, floor cleaners), washroom supplies (mops, brushes, cloths), personal care items (hand wash, sanitizers, gloves) and disposable items (cups, plates, cutlery, containers) by the carton to businesses in Lahore and across Pakistan.",
        },
      },
      {
        "@type": "Question",
        name: "Who can order from Pak Multilinks Hygiene?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Offices, schools, clinics, hospitals, restaurants, hotels, and any business that needs hygiene supplies in bulk. There is no minimum order for first-time business customers.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get a wholesale quotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send your product list via the request-quote page or WhatsApp (+92 300 6917 385 or +92 317 1678829) and receive a wholesale quotation within one working day.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Pak Multilinks Hygiene located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore, Pakistan. Delivery available across Lahore and Pakistan.",
        },
      },
      {
        "@type": "Question",
        name: "What brands does Pak Multilinks Hygiene carry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rose Petal tissue products, Hi-Jeen, Sweep cleaning products, and a full range of wholesale hygiene essentials from trusted manufacturers.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
