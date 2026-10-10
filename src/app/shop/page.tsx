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
