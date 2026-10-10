"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    eyebrow: "Wholesale supply from Lahore",
    title: "Complete Hygiene Solutions for Every Workspace",
    subtitle: "From tissues to total facility care. We supply the essentials that keep offices, schools, clinics, restaurants, and commercial spaces clean, safe, and ready every day.",
    primaryCta: { label: "Shop Products", href: "/shop" },
    secondaryCta: { label: "Get a Bulk Quote", href: "/request-quote" },
    image: "/images/hero-clean-workspace.jpg",
  },
  {
    eyebrow: "Your Hygiene Partner",
    title: "Quality You Can See, Freshness You Can Trust",
    subtitle: "Premium tissue, hygiene and cleaning supplies by the carton. Trusted brands, wholesale pricing, delivered across Lahore and Pakistan.",
    primaryCta: { label: "Browse Catalog", href: "/shop" },
    secondaryCta: { label: "Corporate Orders", href: "/corporate-orders" },
    image: "/images/hero-main-banner.jpg",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const goTo = (i: number) => {
    setIdx(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Featured"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={i === idx ? "relative" : "hidden"}
          aria-hidden={i !== idx}
        >
          <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden">
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 flex items-center pt-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
                <div key={`${i}-${animKey}`} className="max-w-lg">
                  <p className="hero-anim text-xs sm:text-sm uppercase tracking-[0.2em] text-[#114b2f] font-semibold">
                    {s.eyebrow}
                  </p>
                  <h2 className="hero-anim mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b3a24] leading-tight">
                    {s.title}
                  </h2>
                  <p className="hero-anim mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {s.subtitle}
                  </p>
                  <div className="hero-anim mt-6 flex flex-wrap gap-3">
                    <Link
                      href={s.primaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#114b2f] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg text-sm"
                    >
                      {s.primaryCta.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                    <Link
                      href={s.secondaryCta.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white text-[#114b2f] font-semibold rounded-full border border-[#114b2f]/20 transition-all text-sm"
                    >
                      {s.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        aria-label="Previous slide"
        onClick={() => goTo((idx - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo((idx + 1) % SLIDES.length)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            className={`h-2 rounded-full transition-all cursor-pointer ${i === idx ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
        <button
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          onClick={(e) => { e.stopPropagation(); setPaused(!paused); }}
          className="ml-1 text-white/80 hover:text-white"
        >
          {paused ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
          )}
        </button>
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
