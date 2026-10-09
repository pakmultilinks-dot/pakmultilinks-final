"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const WA_NUMBER = "923006917385";

export default function CartDrawer() {
  const { items, drawerOpen, setDrawerOpen, setQty, remove, count } = useCart();

  if (!drawerOpen) return null;

  const waText = encodeURIComponent(
    "Assalam-o-Alaikum, I want to order:\n" +
      items.map((i) => `- ${i.product.name} x ${i.qty} carton(s)`).join("\n")
  );

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
      <aside className="absolute right-0 top-0 bottom-0 w-[430px] max-w-[92vw] bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-bold">Your Cartons ({count})</h2>
          <button onClick={() => setDrawerOpen(false)} aria-label="Close cart" className="p-2 hover:bg-gray-100 rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add products by the carton to get started.</p>
              <Link href="/shop" onClick={() => setDrawerOpen(false)} className="inline-block mt-4 px-6 py-2.5 bg-[#114b2f] text-white text-sm font-semibold rounded-full">Browse products</Link>
            </div>
          )}
          {items.map(({ product, qty }) => (
            <div key={product.slug} className="flex gap-3 border border-gray-200 rounded-xl p-3">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{product.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{qty} carton{qty > 1 ? "s" : ""} &middot; Quoted after review</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => setQty(product.slug, qty - 1)} aria-label="Decrease quantity" className="w-7 h-7 border rounded-full text-sm hover:bg-gray-100">-</button>
                  <span className="text-sm font-semibold w-6 text-center">{qty}</span>
                  <button onClick={() => setQty(product.slug, qty + 1)} aria-label="Increase quantity" className="w-7 h-7 border rounded-full text-sm hover:bg-gray-100">+</button>
                  <button onClick={() => remove(product.slug)} className="ml-auto text-xs text-red-600 hover:underline">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-2.5">
            <p className="text-xs text-gray-500 text-center">Pricing is quoted after review of quantities.</p>
            <Link href="/cart" onClick={() => setDrawerOpen(false)} className="block text-center w-full bg-[#114b2f] text-white font-semibold rounded-full py-3 hover:bg-[#0b3a24]">View cartons</Link>
            <a href={`https://wa.me/${WA_NUMBER}?text=${waText}`} target="_blank" rel="noopener" className="block text-center w-full border border-[#25D366] text-[#128C4B] font-semibold rounded-full py-3 hover:bg-green-50">Order on WhatsApp</a>
            <Link href="/request-quote" onClick={() => setDrawerOpen(false)} className="block text-center w-full text-sm text-[#114b2f] font-medium hover:underline py-1">Request bulk quote</Link>
          </div>
        )}
      </aside>
    </div>
  );
}
