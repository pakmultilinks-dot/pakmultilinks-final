import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { PRODUCTS, CATEGORIES } from "@/data/products";

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
            ["A person to talk to", "Call or WhatsApp Zoher Ahmed directly."],
          ].map(([t, d]) => (
            <div key={t} className="px-4">
              <p className="font-bold text-[#114b2f]">{t}</p>
              <p className="text-sm text-gray-600 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Reveal>
{/* Shop by category */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Find what you need</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-2 font-serif-head">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => {
            const catImages: Record<string, string> = {
              "Tissue & Paper Wholesale": "/products/1083fd45-8b0f-4208-8af7-e30a14eed5a1.jpg",
              "Washroom Supplies": "/products/19138fec-d08c-4773-8718-2b84e24831ec.jpg",
              "Cleaning Products": "/products/118712e4-11a6-451d-83ff-89823a258a5c.jpg",
              "Disposable Items": "/products/35ee928a-1f93-408c-997e-e88e41e76988.jpg",
            };
            return (
            <Link
              key={c.slug}
              href={`/shop?category=${encodeURIComponent(c.name)}`}
              className="group bg-white border border-gray-200 hover:border-[#114b2f]/30 rounded-2xl overflow-hidden text-center transition-all hover:shadow-lg"
            >
              <div className="aspect-square bg-[#f6f5f1] overflow-hidden">
                <img
                  src={catImages[c.name] || "/products/1083fd45-8b0f-4208-8af7-e30a14eed5a1.jpg"}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#114b2f] text-sm sm:text-base leading-tight">{c.name}</p>
                <p className="mt-2 text-xs text-gray-600 line-clamp-2 hidden sm:block">{c.description}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-[#114b2f] underline underline-offset-2">Browse →</span>
              </div>
            </Link>
            );
          })}
        </div>
      </section>

      </Reveal>
      <Reveal>
{/* From our collection */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">For your everyday spaces</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-2 font-serif-head">From Our Collection</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => p && <ProductCard key={p.slug} product={p} />)}
        </div>
        <div className="text-center mt-8">
          <Link href="/shop" className="inline-block px-8 py-3 bg-[#3fc20c] text-[#0b3a24] font-semibold rounded-full hover:bg-[#35a80a]">
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
            <Link href="/corporate-orders" className="inline-block mt-6 px-7 py-3 bg-[#3fc20c] text-[#0b3a24] font-semibold rounded-full hover:bg-[#35a80a]">
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
      <section className="bg-gradient-to-b from-[#f4f9f6] via-white to-white border-y border-[#114b2f]/10">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-white font-bold bg-[#114b2f] px-5 py-2 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
              Limited Time Offers
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 font-serif-head text-[#0b3a24]">Deals &amp; Value Packs</h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl mx-auto">Real product bundles at wholesale value. Big savings when you buy by the carton.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Link href="/deals" className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.2)] transition-all hover:-translate-y-1 group block bg-white">
              <Image src="/images/deal-family-starter.jpg" alt="Family Starter Pack deal" width={1200} height={600} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
            </Link>
            <Link href="/deals" className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.2)] transition-all hover:-translate-y-1 group block bg-white">
              <Image src="/images/deal-tissue-mega.jpg" alt="Tissue Mega Deal" width={1200} height={600} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
            </Link>
            <Link href="/deals" className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.2)] transition-all hover:-translate-y-1 group block bg-white">
              <Image src="/images/deal-cleaning-combo.jpg" alt="Cleaning Combo Deal" width={1200} height={600} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
            </Link>
            <Link href="/deals" className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.2)] transition-all hover:-translate-y-1 group block bg-white">
              <Image src="/images/deal-personal-care.jpg" alt="Office Hygiene Bundle deal" width={1200} height={600} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link href="/deals" className="inline-flex items-center gap-2 px-8 py-4 bg-[#3fc20c] hover:bg-[#35a80a] text-[#0b3a24] font-semibold rounded-full transition-all hover:scale-105 shadow-lg text-base">
              View All 6 Deals
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      </Reveal>
      <Reveal>
{/* Product list */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center font-serif-head">Our Products</h2>
        <p className="text-center text-gray-600 text-sm mt-2">Quality products &middot; Best value &middot; Wholesale orders available</p>
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#114b2f] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Product</th>
                  <th className="text-left px-5 py-4 font-semibold hidden sm:table-cell">Category</th>
                  <th className="text-center px-5 py-4 font-semibold">MOQ</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 bg-[#f7faf8] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">Showing 20 of {PRODUCTS.length} products.</p>
            <div className="flex gap-3">
              <Link href="/shop" className="text-sm font-semibold text-[#114b2f] hover:underline">View all products</Link>
              <Link href="/request-quote" className="text-sm font-semibold bg-[#3fc20c] text-[#0b3a24] px-5 py-2 rounded-full hover:bg-[#35a80a]">Get bulk quote</Link>
            </div>
          </div>
        </div>
      </section></Reveal>
    </>
  );
}
