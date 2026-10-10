"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    eyebrow: "Wholesale supply from Lahore",
    title: "Complete Hygiene Solutions for Every Workspace",
    subtitle: "From tissues to total facility care. We supply the essentials that keep offices, schools, clinics, restaurants, and commercial spaces clean, safe, and ready every day.",
    primaryCta: { label: "Shop Products", href: "/shop" },
    secondaryCta: { label: "Get a Bulk Quote", href: "/request-quote" },
    image: "/images/hero-main-banner.jpg",
  },
];

export default function Hero() {
  const [animKey] = useState(0);
  const slide = SLIDES[0];

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Featured"
    >
      <div className="relative w-full">
        {/* Single banner image - full width */}
        <div className="relative w-full">
          <Image
            src={slide.image}
            alt="Pak Multilinks Hygiene - Complete hygiene solutions"
            width={1600}
            height={600}
            className="w-full h-auto"
            priority
          />
          {/* Text positioned on left empty area - below the logo */}
          <div className="absolute inset-0 flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
              <div key={animKey} className="max-w-lg">
                <p className="hero-anim text-xs sm:text-sm uppercase tracking-[0.2em] text-[#114b2f] font-semibold" style={{ animationDelay: "0ms" }}>
                  {slide.eyebrow}
                </p>
                <h2 className="hero-anim mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b3a24] leading-tight" style={{ animationDelay: "120ms" }}>
                  {slide.title}
                </h2>
                <p className="hero-anim mt-4 text-sm sm:text-base text-gray-700 leading-relaxed" style={{ animationDelay: "240ms" }}>
                  {slide.subtitle}
                </p>
                <div className="hero-anim mt-6 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
                  <Link
                    href={slide.primaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#114b2f] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg text-sm"
                  >
                    {slide.primaryCta.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white text-[#114b2f] font-semibold rounded-full border border-[#114b2f]/20 transition-all text-sm"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="sr-only">Pak Multilinks Hygiene - Wholesale Tissue and Hygiene Supplies Lahore</h1>

      <style jsx>{`
        .hero-anim {
          opacity: 0;
          animation: heroSlideUp 0.7s ease-out forwards;
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
