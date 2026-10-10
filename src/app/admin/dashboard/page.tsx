"use client";

import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-3xl font-bold text-[#114b2f]">{PRODUCTS.length}</p>
          <p className="text-sm text-gray-600 mt-1">Products</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-3xl font-bold text-[#114b2f]">{CATEGORIES.length}</p>
          <p className="text-sm text-gray-600 mt-1">Categories</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-3xl font-bold text-[#114b2f]">0</p>
          <p className="text-sm text-gray-600 mt-1">Orders</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-3xl font-bold text-[#114b2f]">0</p>
          <p className="text-sm text-gray-600 mt-1">Quotes</p>
        </div>
      </div>

      {/* Quick links */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <Link href="/admin/products" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg">Products</h3>
          <p className="text-sm text-gray-600 mt-1">Manage {PRODUCTS.length} products</p>
        </Link>
        <Link href="/admin/categories" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg">Categories</h3>
          <p className="text-sm text-gray-600 mt-1">Manage {CATEGORIES.length} categories</p>
        </Link>
        <Link href="/admin/orders" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
  );
}
