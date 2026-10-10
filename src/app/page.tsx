import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const PARTNERS = [
  { name: "Lahore Garrison University", logo: "/images/partner-lgu.png" },
  { name: "Ramay Clinic", logo: "/images/partner-ramay.png" },
  { name: "Aroma Hair Salon", logo: "/images/partner-aroma.png" },
  { name: "Moon Banquet Hall", logo: "/images/partner-moon.png" },
];

const FEATURED = [
  "rose-petal-pop-up-tissues-ultra-soft",
  "rose-petal-maxob-toilet-roll-8-2-offer",
  "glint-glass-cleaner-500ml",
  "black-garbage-bags",
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

      {/* Trusted partners */}
      <section className="py-12 bg-[#f7faf8] overflow-hidden">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-8">Our Trusted Partners</h2>
        <div className="relative">
          <div className="flex w-max animate-marquee gap-8 px-4 items-start">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div key={i} className="shrink-0 flex flex-col items-center gap-3 w-36">
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                  <Image src={p.logo} alt={p.name} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f7faf8] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f7faf8] to-transparent pointer-events-none" />
        </div>
      </section>

      <Reveal>
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

      </Reveal>
      <Reveal>
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

      </Reveal>
      <Reveal>
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

      </Reveal>
      <Reveal>
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

      </Reveal>
      <Reveal>
{/* Price list */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Wholesale Price List</h2>
        <p className="text-center text-gray-600 text-sm mt-2">Quality products &middot; Best value &middot; Wholesale orders available</p>
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#114b2f] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Product</th>
                  <th className="text-left px-5 py-4 font-semibold hidden sm:table-cell">Category</th>
                  <th className="text-center px-5 py-4 font-semibold">MOQ</th>
                  <th className="text-right px-5 py-4 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.slice(0, 20).map((p, i) => (
                  <tr key={p.slug} className={`border-t border-gray-100 hover:bg-[#f7faf8] ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                    <td className="px-5 py-3.5">
                      <Link href={`/product/${p.slug}`} className="font-medium text-gray-900 hover:text-[#114b2f]">
                        {p.name}
                      </Link>
                      <p className="text-xs text-gray-500 sm:hidden mt-0.5">{p.category}</p>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 hidden sm:table-cell">{p.category}</td>
                    <td className="px-5 py-3.5 text-center text-gray-600">{p.moq}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-[#114b2f] whitespace-nowrap">
                      {p.price != null ? `Rs ${p.price.toLocaleString("en-PK")}` : "On request"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 bg-[#f7faf8] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">Showing 20 of {PRODUCTS.length} products. Full list available on request.</p>
            <div className="flex gap-3">
              <Link href="/shop" className="text-sm font-semibold text-[#114b2f] hover:underline">View all products</Link>
              <Link href="/request-quote" className="text-sm font-semibold bg-[#114b2f] text-white px-5 py-2 rounded-full hover:bg-[#0b3a24]">Get bulk quote</Link>
            </div>
          </div>
        </div>
      </section></Reveal>
    </>
  );
}
