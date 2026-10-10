import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Orders | Pak Multilinks Hygiene",
  description: "Bulk hygiene supply for offices, schools, clinics, restaurants. Get wholesale quotations within one working day.",
};

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
  { name: "Offices & Corporate", desc: "Daily essentials for productive workplaces", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>
  ) },
  { name: "Healthcare & Clinics", desc: "Hygiene-critical supplies for patient safety", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v6M9 11h6"/></svg>
  ) },
  { name: "Schools & Institutes", desc: "Safe, clean learning environments", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>
  ) },
  { name: "Hotels & Hospitality", desc: "Premium guest experience essentials", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M7 11h.01M17 11h.01"/></svg>
  ) },
  { name: "Restaurants & Cafes", desc: "Food-safe disposables and cleaning", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>
  ) },
  { name: "Industries & Warehouses", desc: "Heavy-duty cleaning for large facilities", icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg>
  ) },
];

const BENEFITS = [
  { title: "Wholesale pricing", desc: "True carton rates, no retail markup", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
  { title: "One supplier", desc: "Tissues, cleaners, disposables in one order", icon: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3.3 8.3L12 13l8.7-4.7M12 13v9" },
  { title: "Scheduled delivery", desc: "Repeat plans so you never run out", icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
  { title: "Dedicated support", desc: "Direct line to Zohair Ahmed", icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" },
];

export default function CorporateOrders() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0b3a24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-green-300 font-semibold">Business Supply Program</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Corporate Orders</h1>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">Bulk hygiene supply for offices, schools, clinics and restaurants.</p>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e8f3ec] text-[#114b2f] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={b.icon}/></svg>
              </span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
                <p className="text-xs text-gray-600 mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#114b2f] font-semibold">Simple Process</p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold">How it works</h2>
          <p className="text-gray-600 mt-2">Three simple steps to stock your workplace</p>
        </div>
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
      <section className="bg-[#0b3a24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-green-300 font-semibold">Industries</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">Who we supply</h2>
            <p className="text-white/70 mt-2">Trusted by workplaces across Lahore</p>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {SECTORS.map((s) => (
              <div key={s.name} className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl px-6 py-6 hover:bg-white/10 transition-all">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-green-300">{s.icon}</span>
                <p className="mt-4 font-semibold text-white">{s.name}</p>
                <p className="mt-1 text-sm text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
