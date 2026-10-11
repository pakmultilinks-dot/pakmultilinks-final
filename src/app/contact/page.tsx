import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Pak Multilinks Hygiene Lahore",
  description: "Contact Pak Multilinks Hygiene in Lahore for wholesale tissue, cleaning and hygiene supplies. Call or WhatsApp Zoher Ahmed or Bilal Shah for bulk quotations.",
  keywords: ["contact Pak Multilinks", "wholesale hygiene supplier Lahore contact", "bulk tissue supplier phone", "Zoher Ahmed", "Bilal Shah"],
  openGraph: {
    title: "Contact Us | Pak Multilinks Hygiene Lahore",
    description: "Contact Pak Multilinks Hygiene in Lahore for wholesale tissue, cleaning and hygiene supplies by the carton.",
    url: "https://pakmultilinks.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://pakmultilinks.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
