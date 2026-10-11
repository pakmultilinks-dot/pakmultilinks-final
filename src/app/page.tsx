import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import MobileHero from "@/components/MobileHero";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const PARTNERS = [
  { name: "Lahore Garrison University", logo: "/images/partner-lgu.png" },
  { name: "Ramy Clinic", logo: "/images/partner-ramy-clinic.png" },
  { name: "Aroma Hair Salon", logo: "/images/partner-aroma.png" },
  { name: "Moon Banquet Halls", logo: "/images/partner-moon-hall.png" },
];

const FEATURED = [
  "rose-petal-pop-up-tissues-ultra-soft",
  "rose-petal-maxob-toilet-roll-8-2-offer",
  "glint-glass-cleaner-500ml",
  "black-garbage-bags",
];

const FEATURES = [
  {
    title: "Supplied by the carton",
    desc: "Bulk packing for businesses of every size.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/></svg>
    ),
  },
  {
    title: "Business orders welcome",
    desc: "Send quantities, get a quotation within a day.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>
    ),
  },
  {
    title: "A person to talk to",
    desc: "Call or WhatsApp Zoher Ahmed directly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
  },
];

export default function Home() {
  const featured = FEATURED.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);

  return (
    <>
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="md:hidden">
        <MobileHero />
      </div>

      {/* Trusted partners */}
      <section className="py-12 bg-[#f7faf8]">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 font-serif-head">Our Trusted Partners</h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                  <Image src={p.logo} alt={p.name} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-4 px-2 sm:px-4 sm:flex-col sm:items-center sm:text-center">
              <span className="shrink-0 w-12 h-12 rounded-2xl bg-[#2fa84f]/15 text-[#0b3a24] flex items-center justify-center">
                {f.icon}
              </span>
              <div>
                <p className="font-bold text-[#114b2f] text-[15px] sm:text-base">{f.title}</p>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Reveal>
{/* Shop by category */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-14">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Find what you need</p>
        <h2 className="text-[26px] sm:text-3xl font-bold text-center mt-2 font-serif-head">Shop by Category</h2>
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
              className="group bg-white border border-gray-200 hover:border-[#114b2f]/30 rounded-2xl overflow-hidden text-center transition-all hover:shadow-lg flex flex-col"
            >
              <div className="aspect-square bg-[#f6f5f1] overflow-hidden">
                <img
                  src={catImages[c.name] || "/products/1083fd45-8b0f-4208-8af7-e30a14eed5a1.jpg"}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col items-center flex-1">
                <p className="font-bold text-[#114b2f] text-[15px] sm:text-base leading-snug min-h-[2.75rem] flex items-center">{c.name}</p>
                <p className="mt-2 text-xs text-gray-600 line-clamp-2 hidden sm:block">{c.description}</p>
                <span className="inline-block mt-auto pt-3 text-xs font-semibold text-[#114b2f] underline underline-offset-2">Browse →</span>
              </div>
            </Link>
            );
          })}
        </div>
      </section>

      </Reveal>
      <Reveal>
{/* From our collection */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-14">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">For your everyday spaces</p>
        <h2 className="text-[26px] sm:text-3xl font-bold text-center mt-2 font-serif-head">From Our Collection</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((p) => p && <ProductCard key={p.slug} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/shop" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[52px] bg-[#2fa84f] text-[#0b3a24] font-semibold rounded-full hover:bg-[#268a41] text-base">
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
            <Link href="/corporate-orders" className="inline-flex items-center justify-center mt-6 px-7 py-4 min-h-[52px] bg-[#2fa84f] text-[#0b3a24] font-semibold rounded-full hover:bg-[#268a41]">
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
{/* Deals - compact teaser */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#114b2f] font-bold">Limited Time Offers</p>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-[#0b3a24] tracking-tight">Deals & Value Packs</h2>
            </div>
            <Link href="/deals" className="hidden sm:inline-flex items-center gap-2 text-[#114b2f] font-semibold text-sm hover:underline">
              View all
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <Link href="/deals" className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all sm:col-span-2">
              <Image src="/images/deal-family-starter-pack.jpg" alt="Family Starter Pack - Deal Price Rs. 799" width={1200} height={800} sizes="(max-width: 640px) 100vw, 800px" className="w-full h-auto" />
            </Link>
            <Link href="/deals" className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image src="/images/deal-rose-petal-popup.jpg" alt="Rose Petal Pop-Up Tissue - Best Seller" width={600} height={400} sizes="(max-width: 640px) 100vw, 50vw" className="w-full h-auto" />
            </Link>
            <Link href="/deals" className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image src="/images/deal-maxob-8plus2.jpg" alt="Rose Petal Maxob 8+2 Offer" width={600} height={400} sizes="(max-width: 640px) 100vw, 50vw" className="w-full h-auto" />
            </Link>
          </div>
        </div>
      </section>

      </Reveal>
    </>
  );
}
