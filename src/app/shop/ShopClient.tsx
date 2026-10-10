"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function ShopClient() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState(params.get("category") ?? "");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (q.trim()) {
      const n = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(n) || p.category.toLowerCase().includes(n));
    }
    if (cat) list = list.filter((p) => p.category === cat);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "price-low") list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sort === "price-high") list.sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    return list;
  }, [q, cat, sort]);

  return (
    <>
      <div className="mt-6 flex flex-col md:flex-row gap-3">
        <input
          name="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name or category..."
          className="flex-1 border border-gray-300 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-[#114b2f]"
        />
        <select name="category" value={cat} onChange={(e) => setCat(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#114b2f]">
          <option value="">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name} ({PRODUCTS.filter((p) => p.category === c.name).length})</option>
          ))}
        </select>
        <select name="sort" value={sort} onChange={(e) => setSort(e.target.value)} className="border border-gray-300 rounded-full px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#114b2f]">
          <option value="featured">Sort: Featured</option>
          <option value="name">Sort: Name A-Z</option>
          <option value="price-low">Sort: Price low to high</option>
          <option value="price-high">Sort: Price high to low</option>
        </select>
        {(q || cat) && (
          <button onClick={() => { setQ(""); setCat(""); }} className="text-sm text-[#114b2f] font-medium underline underline-offset-2 px-2">
            Clear filters
          </button>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-600">{filtered.length} product{filtered.length === 1 ? "" : "s"} found</p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-medium">No products match your search</p>
          <button onClick={() => { setQ(""); setCat(""); }} className="mt-3 text-[#114b2f] font-medium underline">Clear filters</button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      )}
    </>
  );
}
