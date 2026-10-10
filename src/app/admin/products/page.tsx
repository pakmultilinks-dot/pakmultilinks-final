"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";

export default function AdminProducts() {
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{PRODUCTS.length} products</p>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
      />

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Product</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Brand</th>
                <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Image</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.slug} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.slug}</p>
                  </td>
                  <td className="px-6 py-4 text-sm">{p.category}</td>
                  <td className="px-6 py-4 text-sm">{p.brand}</td>
                  <td className="px-6 py-4">
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-contain rounded" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
