import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PRODUCTS, getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Deals & Value Packs | Pak Multilinks Hygiene",
  description: "Wholesale deals and value packs on trusted hygiene brands. Family packs, combo deals and bulk offers.",
};

// Curated deals using real product images - no duplicates
const DEALS = [
  { slug: "rose-petal-party-pack", badge: "Best Seller", discount: "Bulk Savings" },
  { slug: "hi-jeen-tissues-rose-petal", badge: "Value Pack", discount: "Carton Deal" },
  { slug: "sweep-liquid-cleaner-1200ml-fresh-lemon", badge: "Combo Offer", discount: "Bulk Savings" },
  { slug: "food-takeaway-containers", badge: "Business Pack", discount: "Carton Deal" },
  { slug: "colorful-paper-napkins", badge: "Value Pack", discount: "Bulk Savings" },
  { slug: "straw-broom", badge: "Essential", discount: "Carton Deal" },
];

export default function DealsPage() {
  const deals = DEALS.map((d) => ({ ...d, product: getProduct(d.slug) })).filter((d) => d.product);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.25em] text-[#114b2f] font-semibold text-center">Limited Time</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2">Deals & Value Packs</h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {deals.map(({ product, badge, discount }) => (
          <Link
            key={product!.slug}
            href={`/product/${product!.slug}`}
            className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_50px_rgba(17,75,47,0.15)] transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
              <Image
                src={product!.image}
                alt={product!.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1.5 bg-[#114b2f] text-white text-xs font-bold rounded-full shadow-lg">{badge}</span>
                <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg">{discount}</span>
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">{product!.category}</p>
                <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-[#114b2f] transition-colors">{product!.name}</h3>
                <p className="mt-1 text-sm text-gray-600">MOQ: {product!.moq}</p>
              </div>
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#114b2f] text-white flex items-center justify-center group-hover:bg-[#0b3a24] group-hover:scale-110 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </Link>
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
