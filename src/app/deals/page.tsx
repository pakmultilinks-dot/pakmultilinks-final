import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CONTACT, DEFAULT_WA_MESSAGE } from "@/data/contact";

export const metadata: Metadata = {
  title: "Deals & Value Packs | Pak Multilinks Hygiene",
  description: "Wholesale deals and value packs on trusted hygiene brands. Family packs, combo deals and bulk offers.",
};

// Deal bundles using REAL product images from the catalog
const DEALS = [
  {
    name: "Family Starter Pack",
    tag: "Best Value",
    description: "Everything a household needs to start: tissues, soap, detergent, and cleaning essentials.",
    href: "/shop?search=family",
    products: [
      { name: "Rose Petal Pop-Up Tissues", image: "/products/1f3020be-5360-43d0-ba6e-0d42a06ee7bd.jpg" },
      { name: "Lux Soft Touch Soap", image: "/products/lux-soap-150g.jpg" },
      { name: "Surf Excel Detergent", image: "/products/surf-excel-detergent-powder-1kg.jpg" },
      { name: "Vim Dishwash Bar", image: "/products/vim-dishwash-bar-300g.jpg" },
    ],
  },
  {
    name: "Tissue Mega Deal",
    tag: "Bulk Savings",
    description: "Stock up on tissues by the carton: facial tissues, toilet rolls, and kitchen towels.",
    href: "/shop?category=Tissue%20%26%20Paper%20Wholesale",
    products: [
      { name: "Rose Petal Maxob 8+2", image: "/products/535ca8e5-e823-4ca1-8597-effca4811888.jpg" },
      { name: "Fay Facial Tissues", image: "/products/fay-facial-tissues-200.jpg" },
      { name: "Rose Petal Tulip", image: "/products/rose-petal-tulip-tissues-160.jpg" },
      { name: "Butterfly Toilet Roll", image: "/products/butterfly-toilet-roll.jpg" },
    ],
  },
  {
    name: "Cleaning Combo Deal",
    tag: "Complete Care",
    description: "Full facility cleaning pack: floor cleaner, bleach, glass cleaner, and dishwash.",
    href: "/shop?category=Cleaning%20Products",
    products: [
      { name: "Dettol Floor Cleaner", image: "/products/5764be5a-0d2a-41c5-8fb5-93f13911ebe4.jpg" },
      { name: "Robin Bleach", image: "/products/robin-bleach-1-5l.jpg" },
      { name: "Colin Glass Cleaner", image: "/products/colin-glass-cleaner-500ml.jpg" },
      { name: "Harpic Toilet Cleaner", image: "/products/b135a8bf-aec0-40f2-b0e2-8e6baaa52326.jpg" },
    ],
  },
  {
    name: "Personal Care Bundle",
    tag: "Daily Essentials",
    description: "Daily personal care: soaps, shampoo, toothpaste, and handwash for the whole family.",
    href: "/shop?category=Personal%20Care",
    products: [
      { name: "Lifebuoy Soap", image: "/products/lifebuoy-soap-145g.jpg" },
      { name: "Head & Shoulders", image: "/products/head-and-shoulders-shampoo-340ml.jpg" },
      { name: "Colgate Toothpaste", image: "/products/colgate-toothpaste-160g.jpg" },
      { name: "Dettol Handwash", image: "/products/dettol-handwash-200ml.jpg" },
    ],
  },
  {
    name: "Kitchen Essentials Pack",
    tag: "Home Must-Haves",
    description: "Kitchen must-haves: dishwash liquid, scouring pads, garbage bags, and cling film.",
    href: "/shop?category=Disposable%20Items",
    products: [
      { name: "Vim Dishwash Liquid", image: "/products/vim-dishwash-liquid-250ml.jpg" },
      { name: "Scotch-Brite Pads", image: "/products/scotch-brite-green-scouring-pads.jpg" },
      { name: "Black Garbage Bags", image: "/products/693f3b02-02a0-4c0a-bd4e-eb0751080013.jpg" },
      { name: "Cling Film Roll", image: "/products/4034ce74-1155-45e7-8036-af8558544160.jpg" },
    ],
  },
  {
    name: "Washroom Refresh Kit",
    tag: "Deep Clean",
    description: "Washroom deep clean: toilet brush, phenyl, air freshener, and rubber gloves.",
    href: "/shop?category=Washroom%20Supplies",
    products: [
      { name: "Commode Brush", image: "/products/19138fec-d08c-4773-8718-2b84e24831ec.jpg" },
      { name: "Harpic Bathroom Cleaner", image: "/products/harpic-bathroom-cleaner-500ml.jpg" },
      { name: "Ambipur Freshener", image: "/products/ambipur-air-freshener-lavender-300ml.jpg" },
      { name: "Rubber Gloves", image: "/products/household-rubber-gloves.jpg" },
    ],
  },
];

export default function DealsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.25em] text-[#114b2f] font-semibold text-center">Limited Time</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2 font-display">Deals & Value Packs</h1>
      <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
        Curated bundles of real products at wholesale value. Order any bundle on WhatsApp for a custom quotation.
      </p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEALS.map((deal) => (
          <div
            key={deal.name}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.18)] transition-all hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative bg-[#f6f5f1] p-4">
              <span className="absolute top-3 left-3 z-10 bg-[#114b2f] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {deal.tag}
              </span>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {deal.products.map((p) => (
                  <div key={p.name} className="bg-white rounded-2xl p-2 shadow-sm">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-contain"
                      loading="lazy"
                    />
                    <p className="text-[11px] font-medium text-gray-700 text-center mt-1 leading-tight px-1">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold font-display">{deal.name}</h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{deal.description}</p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  href={deal.href}
                  className="w-full text-center bg-[#114b2f] hover:bg-[#0b3a24] text-white font-semibold rounded-full py-3 transition-all"
                >
                  Shop This Bundle
                </Link>
                <a
                  href={CONTACT.zoher.waLink(`Assalam-o-Alaikum, I want the ${deal.name} deal. Please share wholesale pricing.`)}
                  target="_blank"
                  rel="noopener"
                  className="w-full text-center border-2 border-[#25D366] text-[#128C4B] font-semibold rounded-full py-2.5 hover:bg-green-50 transition-all"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#114b2f] hover:bg-[#0b3a24] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
        >
          Shop All Products
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </main>
  );
}
