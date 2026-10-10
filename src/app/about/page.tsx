import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Pak Multilinks Hygiene - your wholesale hygiene partner in Lahore. Supplying offices, schools, clinics and businesses with quality essentials.",
};

const STATS = [
  { value: "66+", label: "Products in catalog" },
  { value: "5", label: "Product categories" },
  { value: "100+", label: "Businesses supplied" },
  { value: "24h", label: "Quote turnaround" },
];

const VALUES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    ),
    title: "Premium Quality",
    text: "Trusted brands, genuine products, reliable supply chain.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "Pure & Safe",
    text: "Hygienic products certified for commercial spaces.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>
    ),
    title: "Bulk Orders",
    text: "Carton packing with wholesale pricing for businesses.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Trusted Partner",
    text: "A real person to talk to, not just an online portal.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b3a24]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-600 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-green-300 font-semibold">Our Story</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white">About Pak Multilinks Hygiene</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your hygiene partner in Lahore. Wholesale tissue, cleaning and hygiene supplies by the carton.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Who we are</h2>
        <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
          <p>
            Pak Multilinks Hygiene is a wholesale supplier of tissue, hygiene and cleaning products based in Lahore, Pakistan. We supply homes, offices, schools, clinics, restaurants and commercial spaces, by the carton, at true wholesale rates.
          </p>
          <p>
            From Rose Petal facial tissues and toilet rolls to Sweep floor cleaners, Glint glass cleaners and disposable essentials, we keep your workplace stocked with quality products so hygiene is one less thing to worry about.
          </p>
          <p>
            What sets us apart is personal service. When you order from Pak Multilinks, you talk to a real person who understands your business needs, confirms carton packing, and arranges delivery on your schedule.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#f7faf8] border border-gray-100 rounded-2xl p-6 text-center">
              <p className="text-3xl font-extrabold text-[#114b2f]">{s.value}</p>
              <p className="mt-1 text-xs text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7faf8] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Why businesses choose us</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8f3ec] text-[#114b2f]">
                  {v.icon}
                </span>
                <h3 className="mt-4 font-bold text-gray-900">{v.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block px-8 py-3.5 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24] transition-colors shadow-md">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
