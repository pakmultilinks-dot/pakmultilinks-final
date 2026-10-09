"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/components/ProductCard";

const WA_NUMBER = "923006917385";

export default function CartPage() {
  const { items, setQty, remove, clear } = useCart();

  const waText = encodeURIComponent(
    "Assalam-o-Alaikum, I want to order:\n" +
      items.map((i) => `- ${i.product.name} x ${i.qty} carton(s)`).join("\n")
  );

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="text-gray-600 mt-3">Add products by the carton to get started.</p>
        <Link href="/shop" className="inline-block mt-6 px-8 py-3 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24]">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Cartons</h1>
        <button onClick={clear} className="text-sm text-red-600 hover:underline">Clear all</button>
      </div>
      <div className="mt-6 space-y-4">
        {items.map(({ product, qty }) => (
          <div key={product.slug} className="flex gap-4 border border-gray-200 rounded-2xl p-4">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl shrink-0" />
            <div className="flex-1 min-w-0">
              <Link href={`/product/${product.slug}`} className="font-semibold hover:text-[#114b2f]">{product.name}</Link>
              <p className="text-sm text-gray-500 mt-1">{product.category} &middot; {formatPrice(product)}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button onClick={() => setQty(product.slug, qty - 1)} aria-label="Decrease" className="w-9 h-9 hover:bg-gray-100 rounded-l-full">-</button>
                  <span className="w-8 text-center font-semibold text-sm">{qty}</span>
                  <button onClick={() => setQty(product.slug, qty + 1)} aria-label="Increase" className="w-9 h-9 hover:bg-gray-100 rounded-r-full">+</button>
                </div>
                <button onClick={() => remove(product.slug)} className="text-sm text-red-600 hover:underline">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-6">
        <p className="text-sm text-gray-600">Pricing is quoted after review of your quantities. Our team confirms packing and final rates before fulfilment.</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a href={`https://wa.me/${WA_NUMBER}?text=${waText}`} target="_blank" rel="noopener" className="flex-1 text-center bg-[#25D366] text-white font-semibold rounded-full py-3.5 hover:bg-[#1eb856]">Order on WhatsApp</a>
          <Link href="/request-quote" className="flex-1 text-center bg-[#114b2f] text-white font-semibold rounded-full py-3.5 hover:bg-[#0b3a24]">Request bulk quote</Link>
        </div>
      </div>
    </div>
  );
}
