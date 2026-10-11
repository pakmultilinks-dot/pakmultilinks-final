import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rate List | Pak Multilinks Hygiene Lahore",
  description: "Official rate list of Pak Multilinks Hygiene. Wholesale rates on air fresheners, dispensers, tissues, hand dryers and cleaning products. 5 to 10% off on bulk quotations.",
  keywords: ["Pak Multilinks rate list", "wholesale hygiene rates Lahore", "tissue rates Pakistan", "air freshener rates"],
  openGraph: {
    title: "Rate List | Pak Multilinks Hygiene Lahore",
    description: "Official wholesale rate list. Download the PDF or browse rates online.",
    url: "https://pakmultilinks.com/rate-list",
    type: "website",
  },
  alternates: {
    canonical: "https://pakmultilinks.com/rate-list",
  },
};

const RATES: { name: string; spec: string; rate: string }[] = [
  { name: "FRESCO Body Spray Deo", spec: "175ml / 6 fragrances", rate: "Rs 550" },
  { name: "AIR ENERGY Manual Air Freshener", spec: "300ml", rate: "Rs 295" },
  { name: "FRESCO Manual Air Freshener", spec: "300ml", rate: "Rs 390" },
  { name: "FRESCO Premium Aerosol", spec: "250ml / auto dispenser", rate: "Rs 575" },
  { name: "FRESCO Aerosol Refill Premium", spec: "300ml / auto dispenser", rate: "Rs 525" },
  { name: "AIR ENERGY Aerosol Refill", spec: "300ml / auto dispenser", rate: "Rs 460" },
  { name: "FRESCO Air Freshener Dispenser", spec: "Empty / battery operated", rate: "Rs 2,400" },
  { name: "INSECTOGUARD Auto Flying Insect Killer", spec: "250ml / odorless", rate: "Rs 2,000" },
  { name: "SHINEWELL Car Polish", spec: "400ml", rate: "Rs 525" },
  { name: "SHINEWELL Furniture & Leather Polish", spec: "400ml", rate: "Rs 525" },
  { name: "FRESCO Dish Wash Liquid", spec: "500ml / lemon", rate: "Rs 235" },
  { name: "GERMICURE Toilet Cleaner", spec: "500ml", rate: "Rs 190" },
  { name: "GERMICURE Perfumed Phenyl", spec: "2.75 litre", rate: "Rs 220" },
  { name: "GERMICURE Hand Wash Liquid", spec: "500ml", rate: "Rs 230" },
  { name: "FRESCO Hand Wash Liquid", spec: "500ml", rate: "Rs 325" },
  { name: "FRESCO Manual Soap Dispenser AR-800", spec: "800ml", rate: "Rs 1,900" },
  { name: "FRESCO Auto Soap/Sanitizer Dispenser V-410", spec: "600ml", rate: "Rs 4,400" },
  { name: "FRESCO Auto Soap Dispenser PL-1510", spec: "600ml", rate: "Rs 8,800" },
  { name: "Auto Hand Dryer (Plastic Body)", spec: "1500 watts", rate: "Rs 14,750" },
  { name: "FRESCO Heavy Duty Hand Dryer V-182", spec: "1350 watts", rate: "Rs 35,000" },
  { name: "FRESCO Jet Hand Dryer K2201", spec: "1900 watts", rate: "Rs 72,000" },
  { name: "GERMICURE 3-Ply Face Mask", spec: "Box of 50", rate: "Rs 180" },
  { name: "SICURA Paper Coffee Cups", spec: "8oz / 240ml / 1,000 per carton", rate: "Rs 6,400" },
  { name: "SICURA Paper Cups", spec: "6oz / 180ml / 2,000 per carton", rate: "Rs 6,200" },
  { name: "SOFTEX Pop-Up Tissue", spec: "150 sheets / 2 ply", rate: "Rs 210" },
  { name: "GLAD Pop-Up Tissue", spec: "150 sheets / 2 ply", rate: "Rs 160" },
  { name: "SUPER SOFT Box Perfumed Tissue", spec: "100 sheets / 2 ply", rate: "Rs 220" },
  { name: "SUPER SOFT Mini Soft Pack", spec: "150 sheets / 2 ply", rate: "Rs 195" },
  { name: "SUPER SOFT Non-Perfumed Tissue", spec: "275 sheets / 2 ply", rate: "Rs 380" },
  { name: "SUPER SOFT Perfumed Soft Tissue", spec: "275 sheets / 2 ply", rate: "Rs 395" },
  { name: "SOFTEX Multi Color Tissue Pack", spec: "150 sheets / 2 ply", rate: "Rs 260" },
];

export default function RateListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Discount marquee */}
      <div className="overflow-hidden bg-[#114b2f] text-white rounded-full py-2.5 mb-8">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-8 text-sm font-semibold">5% to 10% OFF on bulk quotations</span>
          <span className="mx-8 text-sm font-semibold">5% to 10% OFF on bulk quotations</span>
          <span className="mx-8 text-sm font-semibold">5% to 10% OFF on bulk quotations</span>
          <span className="mx-8 text-sm font-semibold">5% to 10% OFF on bulk quotations</span>
          <span className="mx-8 text-sm font-semibold">5% to 10% OFF on bulk quotations</span>
          <span className="mx-8 text-sm font-semibold">5% to 10% OFF on bulk quotations</span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#114b2f] font-semibold">Official Rates</p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 font-display">Rate List</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Wholesale rates we offer to our customers. Prices in Pakistani Rupees.
        </p>
        <a
          href="/rate-list.pdf"
          download="Pak-Multilinks-Rate-List.pdf"
          className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-[#114b2f] hover:bg-[#0b3a24] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </a>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#114b2f] text-white">
                <th className="text-left px-5 py-4 font-semibold w-12">#</th>
                <th className="text-left px-5 py-4 font-semibold">Product</th>
                <th className="text-left px-5 py-4 font-semibold hidden sm:table-cell">Specification</th>
                <th className="text-right px-5 py-4 font-semibold">Rate</th>
              </tr>
            </thead>
            <tbody>
              {RATES.map((r, i) => (
                <tr key={i} className={`border-t border-gray-100 hover:bg-[#f7faf8] ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                  <td className="px-5 py-3.5 text-gray-500">{i + 1}</td>
                  <td className="px-5 py-3.5">
                    <span className="font-medium text-gray-900">{r.name}</span>
                    <span className="block text-xs text-gray-500 sm:hidden mt-0.5">{r.spec}</span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600 hidden sm:table-cell">{r.spec}</td>
                  <td className="px-5 py-3.5 text-right font-bold text-[#114b2f] whitespace-nowrap">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-4 bg-[#f7faf8] border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Prices in Pakistani Rupees. Rates may vary with quantity. Contact us on WhatsApp for bulk quotations with 5% to 10% off.
          </p>
        </div>
      </div>
    </main>
  );
}
