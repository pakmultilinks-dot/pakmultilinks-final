import Link from "next/link";
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
    title: "Tissue Mega Deal",
    desc: "Buy by the carton, save more on facial tissues, toilet rolls and napkins.",
    href: "/shop?category=Tissue%20%26%20Paper%20Wholesale",
  },
  {
    title: "Cleaning Combo Deal",
    desc: "Complete facility care pack with detergents, disinfectants and tools.",
    href: "/shop?category=Cleaning%20Products",
  },
  {
    title: "Washroom Refresh Kit",
    desc: "Deep clean essentials for commercial washrooms.",
    href: "/shop?category=Washroom%20Supplies",
  },
  {
    title: "Disposable Essentials Pack",
    desc: "Garbage bags, gloves and other must-haves for every business.",
    href: "/shop?category=Disposable%20Items",
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROMO_DEALS.map((deal) => (
          <Link
            key={deal.title}
            href={deal.href}
            className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-[#2fa84f] hover:shadow-md transition-all"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#2fa84f] font-bold">Limited Time</p>
            <h3 className="text-xl font-bold text-[#0b3a24] mt-2">{deal.title}</h3>
            <p className="text-gray-600 mt-2 text-[15px] leading-relaxed">{deal.desc}</p>
            <span className="inline-flex items-center gap-2 text-[#114b2f] font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
              Shop this deal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
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
