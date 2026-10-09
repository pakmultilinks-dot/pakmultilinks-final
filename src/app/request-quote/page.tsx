"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function RequestQuotePage() {
  const { items, clear } = useCart();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", city: "", notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "NEW BULK QUOTE REQUEST",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `City: ${form.city}`,
      `Notes: ${form.notes}`,
      "",
      "Requested items:",
      ...items.map((i) => `- ${i.product.name} x ${i.qty} carton(s)`),
    ];
    const wa = `https://wa.me/923006917385?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(wa, "_blank");
    setSent(true);
    clear();
  };

  if (sent) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#e8f3ec] flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#114b2f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h1 className="text-3xl font-bold mt-6">Quote request sent</h1>
        <p className="text-gray-600 mt-3">Your request opened in WhatsApp. Our team will confirm packing and share wholesale pricing, usually within one working day.</p>
      </div>
    );
  }

  const inputCls = "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#114b2f] focus:ring-1 focus:ring-[#114b2f]";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Bulk pricing</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2">Request a Quote</h1>
      <p className="text-center text-gray-600 mt-3">Tell us what you need. We confirm carton packing and share wholesale rates.</p>

      <form onSubmit={submit} className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="q-name" className="block text-sm font-medium mb-1.5">Full name *</label>
            <input id="q-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="q-company" className="block text-sm font-medium mb-1.5">Company *</label>
            <input id="q-company" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Company / organization" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="q-phone" className="block text-sm font-medium mb-1.5">Phone *</label>
            <input id="q-phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="03xx xxxxxxx" />
          </div>
          <div>
            <label htmlFor="q-email" className="block text-sm font-medium mb-1.5">Email</label>
            <input id="q-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@company.com" />
          </div>
        </div>
        <div>
          <label htmlFor="q-city" className="block text-sm font-medium mb-1.5">City *</label>
          <input id="q-city" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} placeholder="Lahore" />
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Items in your request {items.length > 0 && `(${items.length})`}</p>
          {items.length === 0 ? (
            <p className="text-sm text-gray-500 bg-gray-50 rounded-xl p-4">
              Your cart is empty. <a href="/shop" className="text-[#114b2f] font-semibold underline">Browse products</a> and add cartons, or describe what you need in the notes below.
            </p>
          ) : (
            <ul className="divide-y border border-gray-200 rounded-xl overflow-hidden">
              {items.map((i) => (
                <li key={i.product.slug} className="flex items-center gap-3 px-4 py-3 text-sm">
                  <img src={i.product.image} alt="" className="w-10 h-10 object-cover rounded" />
                  <span className="flex-1 font-medium truncate">{i.product.name}</span>
                  <span className="text-gray-500">{i.qty} carton{i.qty > 1 ? "s" : ""}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <label htmlFor="q-notes" className="block text-sm font-medium mb-1.5">Notes / product list</label>
          <textarea id="q-notes" rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={inputCls} placeholder="List products and quantities, delivery schedule, anything else..." />
          <p className="mt-2 text-xs text-gray-500">Available products include: {PRODUCTS.slice(0, 8).map((p) => p.name).join(", ")}, and {PRODUCTS.length - 8} more.</p>
        </div>

        <button type="submit" className="w-full bg-[#114b2f] text-white font-semibold rounded-full py-3.5 hover:bg-[#0b3a24] text-lg">
          Send quote request
        </button>
        <p className="text-xs text-gray-500 text-center">This opens WhatsApp with your request pre-filled. No account needed.</p>
      </form>
    </div>
  );
}
