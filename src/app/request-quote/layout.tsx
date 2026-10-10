import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Pak Multilinks Hygiene",
  description: "Get a wholesale quotation for hygiene products. Send your product list and quantities for bulk pricing.",
  alternates: { canonical: "https://pakmultilinks.com/request-quote" },
};

export default function RequestQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
