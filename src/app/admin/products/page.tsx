"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export default function AdminProducts() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("admin_auth") !== "true") {
      router.push("/admin");
    } else {
      setAuthed(true);
    }
  }, [router]);

  if (!authed) return null;

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#0b3a24] text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-white/70 hover:text-white">← Dashboard</Link>
          <h1 className="text-xl font-bold">Products ({PRODUCTS.length})</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
        />

        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
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
