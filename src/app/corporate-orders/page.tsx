import Link from "next/link";

const STEPS = [
  {
    n: "1",
    title: "Share your list",
    text: "Send us the products and quantities your office, school, clinic or restaurant needs - by WhatsApp, phone or the quote form.",
  },
  {
    n: "2",
    title: "Get your quotation",
    text: "We confirm carton packing and share wholesale pricing, usually within one working day.",
  },
  {
    n: "3",
    title: "Scheduled delivery",
    text: "We pack and deliver on your schedule, with repeat-supply plans for regular customers.",
  },
];

const SECTORS = ["Offices & Corporate", "Industries & Warehouses", "Schools & Educational Institutes", "Healthcare & Clinics", "Hotels & Hospitality", "Restaurants & Cafes"];

export default function CorporateOrders() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Business supply</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2">Corporate Orders</h1>
      <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
        From tissues to total facility care - we supply the essentials that keep offices clean, safe, and ready every day. Bulk supply for offices, schools, clinics, restaurants, and commercial spaces.
      </p>

      {/* 3 steps */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {STEPS.map((s) => (
          <div key={s.n} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#114b2f] text-white text-2xl font-bold">{s.n}</span>
            <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      {/* Sectors */}
      <h2 className="text-2xl font-bold text-center mt-16">Who we supply</h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {SECTORS.map((s) => (
          <div key={s} className="bg-[#e8f3ec] rounded-xl px-6 py-5 text-center font-semibold text-[#114b2f] text-sm">{s}</div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/request-quote" className="inline-block px-10 py-4 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24] text-lg">
          Get a bulk quote
        </Link>
        <p className="mt-3 text-sm text-gray-600">or WhatsApp us at <a href="https://wa.me/923006917385" className="text-[#114b2f] font-semibold">+92 300 6917 385</a></p>
      </div>
    </div>
  );
}
