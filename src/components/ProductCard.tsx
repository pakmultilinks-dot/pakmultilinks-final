"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import QuickViewModal from "@/components/QuickViewModal";
import type { Product } from "@/data/products";

export function formatPrice(p: Product): string {
  return p.price != null ? `Rs ${p.price.toLocaleString("en-PK")}` : "Price on request";
}

export default function ProductCard({ product }: { product: Product }) {
  const { add, setDrawerOpen } = useCart();
  const [quickView, setQuickView] = useState(false);

  return (
    <>
      <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
        <div className="relative block aspect-square bg-gray-50 overflow-hidden">
          <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          <span className="absolute top-2 left-2 bg-amber-500 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full pointer-events-none">
            Available on request
          </span>
          <button
            onClick={() => setQuickView(true)}
            aria-label={`Quick view ${product.name}`}
            title="Quick view"
            className="absolute top-2 right-2 bg-white/95 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <p className="text-[11px] uppercase tracking-wide text-gray-500">{product.category}</p>
          <Link href={`/product/${product.slug}`} className="mt-1 font-semibold text-[15px] leading-snug hover:text-[#114b2f] line-clamp-2">
            {product.name}
          </Link>
          <p className="mt-1 text-xs text-gray-500">MOQ: {product.moq}</p>
          <p className="mt-2 text-lg font-bold text-[#114b2f]">{formatPrice(product)}</p>
          <div className="mt-3 flex gap-2 pt-1">
            <button
              onClick={() => { add(product); setDrawerOpen(true); }}
              className="flex-1 bg-[#114b2f] text-white text-sm font-semibold rounded-full py-2.5 hover:bg-[#0b3a24] transition-colors"
            >
              Add to cart
            </button>
            <button
              onClick={() => setQuickView(true)}
              className="px-4 py-2.5 text-sm font-medium border border-[#114b2f] text-[#114b2f] rounded-full hover:bg-[#e8f3ec] transition-colors"
              aria-label={`Quick view ${product.name}`}
            >
              Quick view
            </button>
          </div>
        </div>
      </div>
      <QuickViewModal product={quickView ? product : null} onClose={() => setQuickView(false)} />
    </>
  );
}
