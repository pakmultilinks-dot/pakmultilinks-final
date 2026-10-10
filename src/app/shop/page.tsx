import { Suspense } from "react";
import ShopClient from "./ShopClient";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop All Products",
  description: "Browse 66 wholesale hygiene products. Tissue, cleaning supplies, washroom essentials by the carton in Lahore.",
};

// Server-rendered product grid for SEO and no-JS fallback
function ServerProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-xs uppercase tracking-[0.15em] text-gray-500">Professional hygiene supplies</p>
      <h1 className="text-3xl font-bold mt-2">Shop all products</h1>
      <p className="text-sm text-gray-600 mt-2">Browse wholesale hygiene products supplied in cartons. Packing and pricing are confirmed before fulfilment.</p>

      <Suspense fallback={<ServerProductGrid />}>
        <ShopClient />
      </Suspense>

      {/* No-JS fallback: server-rendered grid */}
      <noscript>
        <ServerProductGrid />
      </noscript>
    </div>
  );
}
