import { Suspense } from "react";
import ShopClient from "./ShopClient";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Wholesale Products | Pak Multilinks Hygiene Lahore",
  description: "Browse 125 wholesale hygiene products. Tissue, cleaning supplies, washroom essentials by the carton in Lahore.",
  openGraph: {
    title: "Shop Wholesale Products | Pak Multilinks Hygiene Lahore",
    url: "https://pakmultilinks.com/shop",
    type: "website",
  },
  alternates: {
    canonical: "https://pakmultilinks.com/shop",
  }
};

// Server-rendered product grid for SEO and no-JS fallback
function ServerProductGrid() {
  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
// cache-bust 1791666512
