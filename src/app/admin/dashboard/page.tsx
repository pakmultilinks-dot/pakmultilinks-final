"use client";

import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/data/products";

const STATS = [
  {
    label: "Products",
    value: PRODUCTS.length,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#114b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.3 7 12 12 20.7 7"/>
      </svg>
    ),
    bg: "bg-green-50",
    href: "/admin/products",
  },
  {
    label: "Categories",
    value: CATEGORIES.length,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>
      </svg>
    ),
    bg: "bg-blue-50",
    href: "/admin/categories",
  },
  {
    label: "Orders",
    value: 0,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    bg: "bg-amber-50",
    href: "/admin/orders",
  },
  {
    label: "Quotes",
    value: 0,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    bg: "bg-purple-50",
    href: "/admin/quotes",
  },
];

const QUICK_ACTIONS = [
  { label: "Add Product", href: "/admin/products", desc: "Add a new product to catalog", color: "hover:border-green-300" },
  { label: "Add Category", href: "/admin/categories", desc: "Create a new category", color: "hover:border-blue-300" },
  { label: "View Store", href: "/", desc: "See the live website", color: "hover:border-amber-300", external: true },
  { label: "Settings", href: "/admin/settings", desc: "Configure store settings", color: "hover:border-purple-300" },
];

export default function AdminDashboard() {
  const recentProducts = PRODUCTS.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-[#0b3a24] to-[#114b2f] rounded-2xl p-6 sm:p-8 text-white">
        <h2 className="text-xl sm:text-2xl font-bold">Welcome back</h2>
        <p className="text-white/70 mt-1 text-sm">Here is what is happening with your store today.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/admin/products" className="px-4 py-2 bg-white text-[#0b3a24] text-sm font-semibold rounded-lg hover:bg-green-50 transition-colors">
            Manage Products
          </Link>
          <Link href="/" target="_blank" className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors">
            View Store →
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s) => (
          <Link key={s.label} href={s.href} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center`}>
              {s.icon}
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-3">{s.value}</p>
            <p className="text-sm text-gray-600 mt-1">{s.label}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Recent Products</h3>
            <Link href="/admin/products" className="text-sm text-[#114b2f] font-medium hover:underline">View all →</Link>
          </div>
          <div className="mt-4 space-y-3">
            {recentProducts.map((p) => (
              <div key={p.slug} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <img src={p.image} alt={p.name} className="w-10 h-10 object-contain rounded-lg bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.category}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {p.inStock ? "In stock" : "Out of stock"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-lg">Quick Actions</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {QUICK_ACTIONS.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                {...(a.external ? { target: "_blank" } : {})}
                className={`p-4 border-2 border-gray-100 rounded-xl ${a.color} transition-all hover:shadow-sm`}
              >
                <p className="font-medium text-sm">{a.label}</p>
                <p className="text-xs text-gray-500 mt-1">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-lg">Products by Category</h3>
        <div className="mt-4 space-y-3">
          {CATEGORIES.map((c) => {
            const count = PRODUCTS.filter((p) => p.category === c.name).length;
            const pct = PRODUCTS.length > 0 ? Math.round((count / PRODUCTS.length) * 100) : 0;
            return (
              <div key={c.slug}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-gray-500">{count} products</span>
                </div>
                <div className="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#114b2f] rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
