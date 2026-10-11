import { Metadata } from "next";
import RateListClient from "./RateListClient";

export const metadata: Metadata = {
  title: "Rate List | Pak Multilinks Hygiene Lahore",
  description: "Official rate list of Pak Multilinks Hygiene. Wholesale rates on air fresheners, dispensers, tissues, hand dryers and cleaning products. 5 to 10% off on bulk quotations.",
  keywords: ["Pak Multilinks rate list", "wholesale hygiene rates Lahore", "tissue rates Pakistan", "air freshener rates"],
  openGraph: {
    title: "Rate List | Pak Multilinks Hygiene Lahore",
    description: "Official wholesale rate list. Download the PDF or browse rates online.",
    url: "https://pakmultilinks.com/rate-list",
    type: "website",
  },
  alternates: {
    canonical: "https://pakmultilinks.com/rate-list",
  },
};

export default function RateListPage() {
  return <RateListClient />;
}
