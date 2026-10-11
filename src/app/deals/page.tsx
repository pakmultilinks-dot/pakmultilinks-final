import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals & Value Packs | Pak Multilinks Hygiene",
  description: "Wholesale deals and value packs on trusted hygiene brands. Bulk offers for businesses.",
  openGraph: {
    title: "Deals & Value Packs | Pak Multilinks Hygiene",
    url: "https://pakmultilinks.com/deals",
    type: "website",
  },
  alternates: {
    canonical: "https://pakmultilinks.com/deals",
  }
};

const PROMO_DEALS = [
  {
    image: "/images/deal-rose-petal-popup.jpg",
    alt: "Rose Petal Pop-Up Tissue - Best Seller, Ultra Soft, 24 boxes per carton",
    href: "/shop?q=rose+petal+pop-up",
  },
  {
    image: "/images/deal-maxob-8plus2.jpg",
    alt: "Rose Petal Maxob Tissue 8+2 Offer - Save Rs. 260, value pack for homes and businesses",
    href: "/shop?q=maxob",
  },
];

export default function DealsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.25em] text-[#114b2f] font-semibold text-center">Limited Time</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2 font-display">Deals & Value Packs</h1>
      <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
        Curated bundles with real product photos at wholesale value.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {PROMO_DEALS.map((deal) => (
          <Link
            key={deal.image}
            href={deal.href}
            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
          >
            <Image
              src={deal.image}
              alt={deal.alt}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto"
            />
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2fa84f] hover:bg-[#268a41] text-[#0b3a24] font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
        >
          Shop All Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </main>
  );
}
