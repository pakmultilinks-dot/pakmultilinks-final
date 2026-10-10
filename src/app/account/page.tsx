"use client";

import { useState } from "react";
import Link from "next/link";

const BENEFITS = [
  {
    title: "Faster re-orders",
    text: "One-click repeat of your usual cartons",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#114b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: "Saved quotations",
    text: "Your negotiated rates, always on file",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#114b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Order history",
    text: "Track every delivery in one place",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#114b2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.3 7 12 12 20.7 7"/>
        <line x1="12" y1="22" x2="12" y2="12"/>
      </svg>
    ),
  },
];

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b3a24]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Business Account</h1>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">Business accounts get faster re-orders and saved quotations.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#e8f3ec] flex items-center justify-center">{b.icon}</span>
              <div>
                <p className="font-bold text-gray-900">{b.title}</p>
                <p className="text-sm text-gray-600 mt-1">{b.text}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#e8f3ec] rounded-2xl p-5 text-sm text-[#114b2f]">
            <p className="font-semibold">Prefer WhatsApp?</p>
            <a href="https://wa.me/923006917385" className="font-bold underline underline-offset-2">Message us directly</a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        >
          {done ? (
            <div className="text-center py-8">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f3ec] text-[#114b2f] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </span>
              <p className="font-bold text-xl text-gray-900">Request received</p>
              <p className="text-sm text-gray-600 mt-2">We will contact <span className="font-medium text-gray-900">{email}</span> to set up your business account.</p>
              <Link href="/shop" className="inline-block mt-6 px-8 py-3 bg-[#114b2f] text-white text-sm font-semibold rounded-full hover:bg-[#0b3a24]">Continue shopping</Link>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold">Request a business account</h2>
              <p className="text-sm text-gray-600 mt-1 mb-6">We will set it up within one working day.</p>
              <label htmlFor="acc-email" className="block text-sm font-semibold mb-1.5">Work email</label>
              <input
                id="acc-email" type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#114b2f] focus:ring-2 focus:ring-[#114b2f]/15"
              />
              <button type="submit" className="w-full mt-4 bg-[#114b2f] text-white font-semibold rounded-full py-3.5 hover:bg-[#0b3a24] transition-colors shadow-md">
                Request business account
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}
