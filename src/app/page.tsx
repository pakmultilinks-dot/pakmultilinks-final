import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const PARTNERS = ["Dove", "Palmolive", "Clorox", "Gillette", "Pepsi", "Comfort", "Sensodyne", "Shell", "Surf Excel", "Careem", "Daraz", "Colgate"];

const FEATURED = [
  "rose-petal-pop-up-tissues-ultra-soft",
  "rose-petal-maxob-toilet-roll-8-2-offer",
  "glint-glass-cleaner-500ml",
  "black-garbage-bags",
  "dry-dust-mop-blue",
  "vim-dishwashing-powder-430g",
  "blue-nitrile-gloves",
  "air-freshener-fresh-linen-300ml",
];

export default function Home() {
  const featured = FEATURED.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);

  return (
    <>
      <Hero />

      {/* Feature strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            ["Supplied by the carton", "Bulk packing for businesses of every size."],
            ["Business orders welcome", "Send quantities, get a quotation within a day."],
            ["A person to talk to", "Call or WhatsApp Zohair Ahmed directly."],
          ].map(([t, d]) => (
            <div key={t} className="px-4">
              <p className="font-bold text-[#114b2f]">{t}</p>
              <p className="text-sm text-gray-600 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted partners marquee */}
      <section className="py-10 bg-[#f7faf8] overflow-hidden">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-6">Our Trusted Partners</h2>
        <div className="relative">
          <div className="flex w-max animate-marquee gap-4 px-4">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span key={i} className="shrink-0 bg-white border border-gray-200 rounded-full px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm whitespace-nowrap">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Find what you need</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-2">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/shop?category=${encodeURIComponent(c.name)}`}
              className="group bg-[#e8f3ec] hover:bg-[#114b2f] rounded-2xl p-6 text-center transition-colors"
            >
              <p className="font-bold text-[#114b2f] group-hover:text-white text-sm sm:text-base">{c.name}</p>
              <p className="mt-2 text-xs text-gray-600 group-hover:text-white/80 line-clamp-2 hidden sm:block">{c.description}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-[#114b2f] group-hover:text-white underline underline-offset-2">Browse</span>
            </Link>
          ))}
        </div>
      </section>

      {/* From our collection */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">For your everyday spaces</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-2">From Our Collection</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => p && <ProductCard key={p.slug} product={p} />)}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop" className="inline-block px-8 py-3 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24]">
            Shop all {PRODUCTS.length} products
          </Link>
        </div>
      </section>

      {/* Business banner */}
      <section className="bg-[#f2f1ec] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-500">For your business</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1d3a2a] leading-tight">
              A well-stocked workplace.<br />One less thing to worry about.
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-7 max-w-md">
              From offices and restaurants to schools and clinics, we help you arrange the everyday supplies your team needs. Send us your quantities for a quotation.
            </p>
            <Link href="/corporate-orders" className="inline-block mt-6 px-7 py-3 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24]">
              Explore business supply
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/banner-workspace.jpg" alt="Complete hygiene solutions for workspaces" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Deals &amp; Value Packs</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image src="/images/deal-family-starter.jpg" alt="Family Starter Pack - essential cleaning products deal" width={1145} height={1374} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image src="/images/deal-maxob.jpg" alt="Rose Petal Maxob 8+2 offer - best seller tissue deal" width={1254} height={1254} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Wholesale Price List</h2>
        <p className="text-center text-gray-600 text-sm mt-2">Quality products &middot; Best value &middot; Wholesale orders available</p>
        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image src="/images/price-list.jpg" alt="Pak Multilinks Hygiene products price list with wholesale rates" width={759} height={1600} className="w-full h-auto" />
        </div>
      </section>
    </>
  );
}
