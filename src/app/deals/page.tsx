import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deals & Value Packs | Pak Multilinks Hygiene",
  description: "Wholesale deals and value packs on trusted hygiene brands. Family packs, combo deals and bulk offers.",
};

export default function DealsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center font-serif-head">Deals & Value Packs</h1>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        Wholesale deals on trusted brands. Stock up with value packs and combo offers designed for businesses that buy by the carton.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
        <Link href="/shop?search=family" className="relative rounded-2xl overflow-hidden shadow-lg group block">
          <Image
            src="/images/deal-family-starter.jpg"
            alt="Family Starter Pack - essential cleaning products deal"
            width={1145}
            height={1374}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <Link href="/product/rose-petal-maxob-toilet-roll-8-2-offer" className="relative rounded-2xl overflow-hidden shadow-lg group block">
          <Image
            src="/images/deal-maxob.jpg"
            alt="Rose Petal Maxob 8+2 offer - best seller tissue deal"
            width={1254}
            height={1254}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#114b2f] hover:bg-[#0b3a24] text-white font-semibold rounded-full transition-all"
        >
          Shop All Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </main>
  );
}
