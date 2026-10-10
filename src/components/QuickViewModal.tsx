"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/components/ProductCard";
import type { Product } from "@/data/products";

const WA_NUMBER = "923006917385";

export default function QuickViewModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add, setDrawerOpen } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
    if (product) {
      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      document.body.style.overflow = "hidden";
      // Prevent iOS bounce
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      document.addEventListener("keydown", h);
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = "";
        document.removeEventListener("keydown", h);
      };
    }
  }, [product, onClose]);

  if (!product) return null;

  const waText = encodeURIComponent(`Assalam-o-Alaikum, I want to order ${product.name} (${qty} carton${qty > 1 ? "s" : ""}).`);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div role="dialog" aria-modal="true" aria-label={`Quick view: ${product.name}`} className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl my-auto max-h-[92vh] overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-2.5 shadow-md"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div className="grid md:grid-cols-2">
          <div className="relative bg-gray-50 min-h-[400px] md:min-h-[520px]">
            <Image src={product.image} alt={product.name} width={1000} height={1000} className="w-full h-full object-contain bg-[#f6f5f1] md:rounded-l-3xl p-2" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wide text-gray-500">{product.category} &middot; {product.brand}</p>
            <h2 className="text-xl sm:text-2xl font-bold mt-2">{product.name}</h2>
            <p className="mt-2 text-2xl font-bold text-[#114b2f]">{formatPrice(product)}</p>
            <div className="mt-4 space-y-1.5 text-sm text-gray-600">
              <p><span className="font-semibold text-gray-900">SKU:</span> PM-{product.slug.slice(0, 8).toUpperCase()}</p>
              <p><span className="font-semibold text-gray-900">MOQ:</span> {product.moq}</p>
              <p><span className="font-semibold text-gray-900">Packing:</span> Carton packing for wholesale orders</p>
              <p><span className="font-semibold text-gray-900">Availability:</span> <span className="text-green-600 font-medium">In stock</span></p>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Wholesale {product.category.toLowerCase()} supplied by the carton. Share your quantities and we will confirm packing and final pricing before fulfilment.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm font-medium">Qty:</span>
              <div className="flex items-center border border-gray-300 rounded-full">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity" className="w-9 h-9 hover:bg-gray-100 rounded-l-full">-</button>
                <span className="w-8 text-center font-semibold text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity" className="w-9 h-9 hover:bg-gray-100 rounded-r-full">+</button>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2.5">
              <button
                onClick={() => { add(product, qty); onClose(); setDrawerOpen(true); }}
                className="w-full bg-[#114b2f] text-white font-semibold rounded-full py-3 hover:bg-[#0b3a24]"
              >
                Add to Cart
              </button>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                target="_blank" rel="noopener"
                className="w-full text-center border-2 border-[#25D366] text-[#128C4B] font-semibold rounded-full py-2.5 hover:bg-green-50"
              >
                WhatsApp Order
              </a>
              <Link href={`/product/${product.slug}`} onClick={onClose} className="text-center text-sm text-[#114b2f] font-medium hover:underline py-1">
                View full details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
