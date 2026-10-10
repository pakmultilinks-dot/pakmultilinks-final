import type { Metadata } from "next";
import Link from "next/link";

const STEPS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>
    ),
    title: "Share your list",
    text: "Send us the products and quantities your office, school, clinic or restaurant needs by WhatsApp, phone or the quote form.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: "Get your quotation",
    text: "We confirm carton packing and share wholesale pricing, usually within one working day.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
    title: "Scheduled delivery",
    text: "We pack and deliver on your schedule, with repeat-supply plans for regular customers.",
  },
];

const SECTORS = [
  { name: "Offices & Corporate", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>
  ) },
  { name: "Industries & Warehouses", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg>
  ) },
  { name: "Schools & Institutes", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>
  ) },
  { name: "Healthcare & Clinics", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v6M9 11h6"/></svg>
  ) },
  { name: "Hotels & Hospitality", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M7 11h.01M17 11h.01"/></svg>
  ) },
  { name: "Restaurants & Cafes", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
  ) },
];


export const metadata: Metadata = {
  title: "Corporate Orders",
  description: "Bulk hygiene supply for offices, schools, clinics, restaurants. Get wholesale quotations within one working day.",
};

export default function CorporateOrders() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b3a24]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-600 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-green-300 font-semibold">Business Supply</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white">Corporate Orders</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            From tissues to total facility care, we supply the essentials that keep offices clean, safe, and ready every day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/request-quote" className="px-8 py-3.5 bg-white text-[#114b2f] font-semibold rounded-full hover:bg-green-50 transition-colors shadow-lg">
              Get a bulk quote
            </Link>
            <a href="https://wa.me/923006917385" target="_blank" rel="noopener" className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">How it works</h2>
        <p className="text-center text-gray-600 mt-2">Three simple steps to stock your workplace</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5 bg-gradient-to-r from-[#114b2f]/20 via-[#114b2f]/40 to-[#114b2f]/20" />
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(17,75,47,0.12)] hover:-translate-y-1 transition-all">
              <div className="relative inline-flex">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#114b2f] to-[#0b3a24] text-white shadow-lg">
                  {s.icon}
                </span>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-[#f7faf8] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Who we supply</h2>
          <p className="text-center text-gray-600 mt-2">Supplying workplaces across Lahore</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {SECTORS.map((s) => (
              <div key={s.name} className="group bg-white rounded-2xl border border-gray-100 px-6 py-6 text-center shadow-sm hover:shadow-md hover:border-[#114b2f]/20 transition-all">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e8f3ec] text-[#114b2f]">{s.icon}</span>
                <p className="mt-3 font-semibold text-gray-800 text-sm group-hover:text-[#114b2f] transition-colors">{s.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/request-quote" className="inline-block px-10 py-4 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24] text-lg shadow-lg hover:shadow-xl transition-all">
              Get a bulk quote
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              or WhatsApp us at <a href="https://wa.me/923006917385" className="text-[#114b2f] font-semibold hover:underline">+92 300 6917 385</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
