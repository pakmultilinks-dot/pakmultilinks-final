"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function AdminDashboard() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("admin_auth") !== "true") {
      router.push("/admin");
    } else {
      setAuthed(true);
    }
  }, [router]);

  if (!authed) return null;

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0b3a24] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
          Logout
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#114b2f]">{PRODUCTS.length}</p>
            <p className="text-sm text-gray-600 mt-1">Products</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#114b2f]">{CATEGORIES.length}</p>
            <p className="text-sm text-gray-600 mt-1">Categories</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#114b2f]">0</p>
            <p className="text-sm text-gray-600 mt-1">Orders</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-[#114b2f]">0</p>
            <p className="text-sm text-gray-600 mt-1">Quotes</p>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Link href="/admin/products" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg">Products</h3>
            <p className="text-sm text-gray-600 mt-1">Manage {PRODUCTS.length} products</p>
          </Link>
          <Link href="/admin/categories" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg">Categories</h3>
            <p className="text-sm text-gray-600 mt-1">Manage {CATEGORIES.length} categories</p>
          </Link>
          <Link href="/admin/orders" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg">Orders</h3>
            <p className="text-sm text-gray-600 mt-1">View customer orders</p>
          </Link>
        </div>

        {/* Note */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-semibold text-amber-900">Note</h3>
          <p className="text-sm text-amber-800 mt-2">
            This is a basic admin panel. Product changes made here are for viewing only.
            To permanently update products, edit <code className="bg-amber-100 px-1 rounded">src/data/products.ts</code> directly.
            A full database-backed admin requires backend setup.
          </p>
        </div>
      </div>
    </div>
  );
}
