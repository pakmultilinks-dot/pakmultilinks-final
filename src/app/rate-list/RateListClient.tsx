"use client";

import { useState } from "react";
import Image from "next/image";

const RATES: { name: string; spec: string; rate: string; image: string }[] = [
  { name: "FRESCO Body Spray Deo", spec: "175ml / 6 fragrances", rate: "Rs 550", image: "/rate-products/fresco-body-spray-deo.jpg" },
  { name: "AIR ENERGY Manual Air Freshener", spec: "300ml", rate: "Rs 295", image: "/rate-products/air-energy-manual-air-freshener.jpg" },
  { name: "FRESCO Manual Air Freshener", spec: "300ml", rate: "Rs 390", image: "/rate-products/fresco-manual-air-freshener.jpg" },
  { name: "FRESCO Premium Aerosol", spec: "250ml / auto dispenser", rate: "Rs 575", image: "/rate-products/fresco-premium-aerosol.jpg" },
  { name: "FRESCO Aerosol Refill Premium", spec: "300ml / auto dispenser", rate: "Rs 525", image: "/rate-products/fresco-aerosol-refill.jpg" },
  { name: "AIR ENERGY Aerosol Refill", spec: "300ml / auto dispenser", rate: "Rs 460", image: "/rate-products/air-energy-aerosol-refill.jpg" },
  { name: "FRESCO Air Freshener Dispenser", spec: "Empty / battery operated", rate: "Rs 2,400", image: "/rate-products/fresco-air-freshener-dispenser.jpg" },
  { name: "INSECTOGUARD Auto Flying Insect Killer", spec: "250ml / odorless", rate: "Rs 2,000", image: "/rate-products/insectoguard-insect-killer.jpg" },
  { name: "SHINEWELL Car Polish", spec: "400ml", rate: "Rs 525", image: "/rate-products/shinewell-car-polish.jpg" },
  { name: "SHINEWELL Furniture & Leather Polish", spec: "400ml", rate: "Rs 525", image: "/rate-products/shinewell-furniture-polish.jpg" },
  { name: "FRESCO Dish Wash Liquid", spec: "500ml / lemon", rate: "Rs 235", image: "/rate-products/fresco-dish-wash-liquid.jpg" },
  { name: "GERMICURE Toilet Cleaner", spec: "500ml", rate: "Rs 190", image: "/rate-products/germicure-toilet-cleaner.jpg" },
  { name: "GERMICURE Perfumed Phenyl", spec: "2.75 litre", rate: "Rs 220", image: "/rate-products/germicure-phenyl.jpg" },
  { name: "GERMICURE Hand Wash Liquid", spec: "500ml", rate: "Rs 230", image: "/rate-products/germicure-hand-wash.jpg" },
  { name: "FRESCO Hand Wash Liquid", spec: "500ml", rate: "Rs 325", image: "/rate-products/fresco-hand-wash.jpg" },
  { name: "FRESCO Manual Soap Dispenser AR-800", spec: "800ml", rate: "Rs 1,900", image: "/rate-products/fresco-soap-dispenser-ar800.jpg" },
  { name: "FRESCO Auto Soap/Sanitizer Dispenser V-410", spec: "600ml", rate: "Rs 4,400", image: "/rate-products/fresco-auto-dispenser-v410.jpg" },
  { name: "FRESCO Auto Soap Dispenser PL-1510", spec: "600ml", rate: "Rs 8,800", image: "/rate-products/fresco-auto-dispenser-pl1510.jpg" },
  { name: "Auto Hand Dryer (Plastic Body)", spec: "1500 watts", rate: "Rs 14,750", image: "/rate-products/auto-hand-dryer.jpg" },
  { name: "FRESCO Heavy Duty Hand Dryer V-182", spec: "1350 watts", rate: "Rs 35,000", image: "/rate-products/fresco-hand-dryer-v182.jpg" },
  { name: "FRESCO Jet Hand Dryer K2201", spec: "1900 watts", rate: "Rs 72,000", image: "/rate-products/fresco-jet-hand-dryer.jpg" },
  { name: "GERMICURE 3-Ply Face Mask", spec: "Box of 50", rate: "Rs 180", image: "/rate-products/germicure-face-mask.jpg" },
  { name: "SICURA Paper Coffee Cups", spec: "8oz / 240ml / 1,000 per carton", rate: "Rs 6,400", image: "/rate-products/paper-coffee-cups-8oz.jpg" },
  { name: "SICURA Paper Cups", spec: "6oz / 180ml / 2,000 per carton", rate: "Rs 6,200", image: "/rate-products/paper-cups-6oz.jpg" },
  { name: "SOFTEX Pop-Up Tissue", spec: "150 sheets / 2 ply", rate: "Rs 210", image: "/rate-products/softex-pop-up-tissue.jpg" },
  { name: "GLAD Pop-Up Tissue", spec: "150 sheets / 2 ply", rate: "Rs 160", image: "/rate-products/glad-pop-up-tissue.jpg" },
  { name: "SUPER SOFT Box Perfumed Tissue", spec: "100 sheets / 2 ply", rate: "Rs 220", image: "/rate-products/super-soft-perfumed-tissue.jpg" },
  { name: "SUPER SOFT Mini Soft Pack", spec: "150 sheets / 2 ply", rate: "Rs 195", image: "/rate-products/super-soft-mini-pack.jpg" },
  { name: "SUPER SOFT Non-Perfumed Tissue", spec: "275 sheets / 2 ply", rate: "Rs 380", image: "/rate-products/super-soft-non-perfumed.jpg" },
  { name: "SUPER SOFT Perfumed Soft Tissue", spec: "275 sheets / 2 ply", rate: "Rs 395", image: "/rate-products/super-soft-perfumed-soft.jpg" },
  { name: "SOFTEX Multi Color Tissue Pack", spec: "150 sheets / 2 ply", rate: "Rs 260", image: "/rate-products/softex-multicolor-tissue.jpg" },
];

export default function RateListClient() {
  const [lightbox, setLightbox] = useState<{ image: string; name: string } | null>(null);

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
          Wholesale rates we offer to our customers. Prices in Pakistani Rupees. Tap any product image to view it large.
        </p>
        <a
          href="/rate-list.pdf"
          download="Pak-Multilinks-Rate-List.pdf"
          className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-[#2fa84f] hover:bg-[#268a41] text-[#0b3a24] font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
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
                <th className="text-left px-3 sm:px-5 py-4 font-semibold">Product</th>
                <th className="text-left px-5 py-4 font-semibold hidden md:table-cell">Specification</th>
                <th className="text-right px-3 sm:px-5 py-4 font-semibold">Rate</th>
              </tr>
            </thead>
            <tbody>
              {RATES.map((r, i) => (
                <tr key={i} className={`border-t border-gray-100 hover:bg-[#f7faf8] ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                  <td className="px-3 sm:px-5 py-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setLightbox({ image: r.image, name: r.name })}
                        className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center cursor-pointer hover:border-[#114b2f] hover:shadow-md transition-all"
                        aria-label={`View ${r.name} image`}
                      >
                        <Image
                          src={r.image}
                          alt={r.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-contain p-2"
                        />
                      </button>
                      <div className="min-w-0">
                        <span className="font-semibold text-gray-900">{r.name}</span>
                        <span className="block text-xs text-gray-500 md:hidden mt-1">{r.spec}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600 hidden md:table-cell">{r.spec}</td>
                  <td className="px-3 sm:px-5 py-4 text-right font-bold text-[#114b2f] text-base whitespace-nowrap">{r.rate}</td>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-2.5 z-10"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
            <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center min-h-[200px]">
              <img
                src={lightbox.image}
                alt={lightbox.name}
                className="max-w-full h-auto"
                style={{ maxHeight: "50vh" }}
              />
            </div>
            <p className="text-center font-semibold mt-4">{lightbox.name}</p>
          </div>
        </div>
      )}
    </main>
  );
}
