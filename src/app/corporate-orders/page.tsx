import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="bg-[#0b3a24] flex items-center">
            <div className="px-6 sm:px-12 py-16 sm:py-20 max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-green-300 font-semibold">Business Supply Program</p>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                One supplier for your entire facility
              </h1>
              <p className="mt-5 text-white/80 leading-relaxed">
                From tissues to total facility care. We supply the essentials that keep offices, schools, clinics and restaurants clean, safe, and ready every day. Wholesale pricing, scheduled delivery, one invoice.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/request-quote" className="px-8 py-3.5 bg-white text-[#114b2f] font-semibold rounded-full hover:bg-green-50 transition-all hover:scale-105 shadow-lg">
                  Get a bulk quote
                </Link>
                <a href="https://wa.me/923006917385" target="_blank" rel="noopener" className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[500px]">
            <Image
              src="/images/banner-workspace.jpg"
              alt="Corporate hygiene supplies"
              fill
              className="object-cover"
            />
          </div>
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Ready to stock your workplace?</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Send us your product list and get a wholesale quotation within one working day. No minimum order for first-time business customers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/request-quote" className="px-10 py-4 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24] text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get a bulk quote
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Prefer to talk? Call or WhatsApp <a href="https://wa.me/923006917385" className="text-[#114b2f] font-semibold hover:underline">Zohair Ahmed at +92 300 6917 385</a>
        </p>
      </section>
    </>
  );
}
