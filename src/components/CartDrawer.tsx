"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { CONTACT } from "@/data/contact";

export default function CartDrawer() {
  const { items, drawerOpen, setDrawerOpen, setQty, remove, count } = useCart();

  // Slugs of products still in the catalog
  const liveSlugs = useMemo(() => new Set(PRODUCTS.map((p) => p.slug)), []);

  // Clean up cart items whose product was removed from the catalog
  // (e.g. products deleted from src/data/products still sitting in localStorage)
  useEffect(() => {
    if (!drawerOpen) return;
    const stale = items.filter((i) => !liveSlugs.has(i.product.slug));
    if (stale.length > 0) {
      stale.forEach((i) => remove(i.product.slug));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  if (!drawerOpen) return null;

  const waText = encodeURIComponent(
    "Assalam-o-Alaikum, I want to order:\n" +
      items.map((i) => `- ${i.product.name} x ${i.qty} carton(s)`).join("\n")
  );

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
      <aside
        className="absolute right-0 top-0 bottom-0 w-full sm:w-[430px] sm:max-w-[92vw] bg-white shadow-2xl flex flex-col"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-lg sm:text-xl font-bold">Your Cartons ({count})</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close cart"
            className="w-11 h-11 flex items-center justify-center hover:bg-gray-100 rounded-full"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-3">
          {items.length === 0 && (
            <div className="text-center py-16 px-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#eef7ec] flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3fc20c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <p className="text-lg font-bold mt-5">Your cart is empty</p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Browse our corporate hygiene catalog and add products by the carton to request a bulk quote.
              </p>
              <Link
                href="/shop"
                onClick={() => setDrawerOpen(false)}
                className="inline-block mt-6 px-8 py-3 bg-[#3fc20c] text-[#0b3a24] text-sm font-semibold rounded-full hover:bg-[#35a80a]"
              >
                Browse products
              </Link>
            </div>
          )}

          {items.map(({ product, qty }) => (
            <div key={product.slug} className="flex gap-4 border border-gray-200 rounded-2xl p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-xl shrink-0 bg-gray-50"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold leading-snug line-clamp-2">{product.name}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {qty} carton{qty > 1 ? "s" : ""} &middot; Quoted after review
                </p>
                <div className="mt-2.5 flex items-center gap-2.5">
                  <button
                    onClick={() => setQty(product.slug, qty - 1)}
                    aria-label={`Decrease quantity of ${product.name}`}
                    className="w-11 h-11 shrink-0 border border-gray-300 rounded-full text-xl leading-none hover:bg-gray-100 active:bg-gray-200"
                  >
                    &minus;
                  </button>
                  <span className="text-base font-semibold w-8 text-center tabular-nums">{qty}</span>
                  <button
                    onClick={() => setQty(product.slug, qty + 1)}
                    aria-label={`Increase quantity of ${product.name}`}
                    className="w-11 h-11 shrink-0 border border-gray-300 rounded-full text-xl leading-none hover:bg-gray-100 active:bg-gray-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => remove(product.slug)}
                    aria-label={`Remove ${product.name} from cart`}
                    className="ml-auto px-3 py-2 text-sm text-red-600 font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div
            className="border-t border-gray-100 px-4 sm:px-5 pt-4 space-y-2.5 shrink-0"
            style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
          >
            <p className="text-xs text-gray-500 text-center">Pricing is quoted after review of quantities.</p>
            <Link
              href="/cart"
              onClick={() => setDrawerOpen(false)}
              className="block text-center w-full bg-[#3fc20c] text-[#0b3a24] font-semibold rounded-full py-3.5 hover:bg-[#35a80a]"
            >
              View cartons
            </Link>
            <a
              href={`https://wa.me/${CONTACT.zoher.waNumber}?text=${waText}`}
              target="_blank"
              rel="noopener"
              className="block text-center w-full border border-[#25D366] text-[#128C4B] font-semibold rounded-full py-3.5 hover:bg-green-50"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/request-quote"
              onClick={() => setDrawerOpen(false)}
              className="block text-center w-full text-sm text-[#114b2f] font-medium hover:underline py-1.5"
            >
              Request bulk quote
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
