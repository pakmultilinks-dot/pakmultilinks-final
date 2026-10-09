"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center">My Account</h1>
      <p className="text-center text-gray-600 text-sm mt-2">Business accounts get faster re-orders and saved quotations.</p>
      <form
        onSubmit={(e) => { e.preventDefault(); setDone(true); }}
        className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4"
      >
        {done ? (
          <div className="text-center py-6">
            <p className="font-bold text-lg text-[#114b2f]">Request received</p>
            <p className="text-sm text-gray-600 mt-2">We will contact <span className="font-medium">{email}</span> to set up your business account.</p>
            <Link href="/shop" className="inline-block mt-4 text-sm text-[#114b2f] font-semibold underline">Continue shopping</Link>
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="acc-email" className="block text-sm font-medium mb-1.5">Work email</label>
              <input id="acc-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#114b2f]" />
            </div>
            <button type="submit" className="w-full bg-[#114b2f] text-white font-semibold rounded-full py-3 hover:bg-[#0b3a24]">Request business account</button>
            <p className="text-xs text-gray-500 text-center">Prefer WhatsApp? <a href="https://wa.me/923006917385" className="text-[#114b2f] font-semibold">Message us directly</a></p>
          </>
        )}
      </form>
    </div>
  );
}
