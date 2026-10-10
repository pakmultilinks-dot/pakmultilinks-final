// Central contact configuration - single source of truth
// Update phone numbers here and they propagate site-wide

export const CONTACT = {
  // Zoher Ahmed - Founder and Sales Manager
  zoher: {
    name: "Zoher Ahmed",
    role: "Founder and Sales Manager",
    phone: "+92 300 6917 385",
    phoneHref: "tel:+923006917385",
    waNumber: "923006917385",
    waLink: (message: string) =>
      `https://wa.me/923006917385?text=${encodeURIComponent(message)}`,
  },
  // M. Bilal Shah - Business Development Officer
  bilal: {
    name: "M. Bilal Shah",
    shortName: "Bilal Shah",
    role: "Business Development Officer",
    phone: "+92 325 8166829",
    phoneHref: "tel:+923258166829",
    waNumber: "923258166829",
    waLink: (message: string) =>
      `https://wa.me/923258166829?text=${encodeURIComponent(message)}`,
    email: "bilalshah2237463@gmail.com",
  },
  address: "Shop No LG-9, Rehman Tower Main Market Gulburg II, Lahore",
  email: "zohair.shah8@gmail.com",
} as const;

export const DEFAULT_WA_MESSAGE =
  "Assalam-o-Alaikum, I want to inquire about hygiene products.";
