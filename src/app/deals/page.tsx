import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals & Value Packs | Pak Multilinks Hygiene",
  description: "Wholesale deals and value packs on trusted hygiene brands. Family packs, combo deals and bulk offers.",
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
    image: "/images/deal-family-starter.jpg",
    alt: "Family Starter Pack - essential cleaning products with real product photos",
    href: "/shop?q=family",
  },
  {
    image: "/images/deal-tissue-mega.jpg",
    alt: "Tissue Mega Deal - buy by the carton, save more",
    href: "/shop?category=Tissue%20%26%20Paper%20Wholesale",
  },
  {
    image: "/images/deal-cleaning-combo.jpg",
    alt: "Cleaning Combo Deal - complete facility care pack",
    href: "/shop?category=Cleaning%20Products",
  },
  {
    image: "/images/deal-personal-care.jpg",
    alt: "Office Hygiene Bundle - complete workplace hygiene essentials",
    href: "/shop?category=Washroom%20Supplies",
  },
  {
    image: "/images/deal-kitchen.jpg",
    alt: "Kitchen Essentials Pack - must-haves for every kitchen",
    href: "/shop?category=Disposable%20Items",
  },
  {
    image: "/images/deal-washroom.jpg",
    alt: "Washroom Refresh Kit - deep clean for your washroom",
    href: "/shop?category=Washroom%20Supplies",
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PROMO_DEALS.map((deal) => (
          <Link
            key={deal.image}
            href={deal.href}
            className="group block rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.18)] transition-all hover:-translate-y-1 bg-white w-full"
          >
            <div className="relative overflow-hidden">
              <Image
                src={deal.image}
                alt={deal.alt}
                width={1200}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3fc20c] hover:bg-[#35a80a] text-[#0b3a24] font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
        >
          Shop All Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </main>
  );
}
