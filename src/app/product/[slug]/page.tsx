"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard, { formatPrice } from "@/components/ProductCard";

const WA_NUMBER = "923006917385";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  const { add, setDrawerOpen } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const waText = encodeURIComponent(`Assalam-o-Alaikum, I want to order ${product.name} (${qty} carton${qty > 1 ? "s" : ""}).`);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#114b2f]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-[#114b2f]">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[#114b2f]">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
          <Image src={product.image} alt={product.name} width={800} height={800} className="w-full h-auto object-cover" priority />
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Available on request</span>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">{product.category} &middot; {product.brand}</p>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2">{product.name}</h1>
          <p className="mt-3 text-3xl font-bold text-[#114b2f]">{formatPrice(product)}</p>
          <p className="mt-2 text-sm text-gray-600">MOQ: {product.moq} &middot; Carton packing confirmed on request</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium">Cartons:</span>
            <div className="flex items-center border border-gray-300 rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease" className="w-10 h-10 text-lg hover:bg-gray-100 rounded-l-full">-</button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase" className="w-10 h-10 text-lg hover:bg-gray-100 rounded-r-full">+</button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { add(product, qty); setDrawerOpen(true); }}
              className="flex-1 bg-[#114b2f] text-white font-semibold rounded-full py-3.5 hover:bg-[#0b3a24]"
            >
              Add to cart
            </button>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
              target="_blank" rel="noopener"
              className="flex-1 text-center border-2 border-[#25D366] text-[#128C4B] font-semibold rounded-full py-3 hover:bg-green-50"
            >
              WhatsApp order
            </a>
          </div>
          <Link href="/request-quote" className="block text-center mt-3 text-sm text-[#114b2f] font-medium hover:underline">
            Get a bulk quote for this product
          </Link>

          <div className="mt-8 border-t pt-6 space-y-3 text-sm text-gray-600">
            <p><span className="font-semibold text-gray-900">Supply:</span> Wholesale cartons, delivered across Lahore &amp; Pakistan</p>
            <p><span className="font-semibold text-gray-900">Packing:</span> Confirmed on request before fulfilment</p>
            <p><span className="font-semibold text-gray-900">Pricing:</span> Final quotation shared after reviewing quantities</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Related products</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
