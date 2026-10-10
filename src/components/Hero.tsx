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
    image: "/images/banner-workspace.jpg",
  },
  {
    eyebrow: "Your Hygiene Partner",
    title: "Quality You Can See, Freshness You Can Trust",
    subtitle: "Premium tissue, hygiene and cleaning supplies by the carton. Trusted brands, wholesale pricing, delivered across Lahore and Pakistan.",
    primaryCta: { label: "Browse Catalog", href: "/shop" },
    secondaryCta: { label: "Corporate Orders", href: "/corporate-orders" },
    image: "/images/banner-hygiene-solutions.jpg",
  },
  {
    eyebrow: "Tissue & Paper Wholesale",
    title: "Facial Tissues, Toilet Rolls & Napkins in Bulk",
    subtitle: "Rose Petal, Mambo and more. Stock your business with premium paper products at true wholesale rates, supplied by the carton.",
    primaryCta: { label: "Shop Tissue & Paper", href: "/shop" },
    secondaryCta: { label: "Get a Quote", href: "/request-quote" },
    image: "/images/hero-banner-2.jpg",
  },
  {
    eyebrow: "Bulk Deals & Value Packs",
    title: "Wholesale Deals on Trusted Brands",
    subtitle: "Rose Petal, Mambo, Sweep and more. Stock up with value packs and combo deals designed for businesses that buy by the carton.",
    primaryCta: { label: "View Deals", href: "/shop" },
    secondaryCta: { label: "Bulk Pricing", href: "/request-quote" },
    image: "/images/banner-workspace.jpg",
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

  const slide = SLIDES[idx];

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#f7faf8] to-[#e8f3ec]"
      aria-label="Featured"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 sm:py-16 lg:py-20 min-h-[420px] sm:min-h-[480px]">
          {/* Text side */}
          <div key={animKey} className="order-2 md:order-1">
            <p className="hero-anim text-xs sm:text-sm uppercase tracking-[0.2em] text-[#114b2f] font-semibold" style={{ animationDelay: "0ms" }}>
              {slide.eyebrow}
            </p>
            <h2 className="hero-anim mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b3a24] leading-tight font-serif-head" style={{ animationDelay: "120ms" }}>
              {slide.title}
            </h2>
            <p className="hero-anim mt-5 text-sm sm:text-base text-gray-600 leading-relaxed" style={{ animationDelay: "240ms" }}>
              {slide.subtitle}
            </p>
            <div className="hero-anim mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <Link
                href={slide.primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#114b2f] hover:bg-[#0b3a24] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
              >
                {slide.primaryCta.label}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-[#114b2f] font-semibold rounded-full border border-[#114b2f]/20 transition-all"
              >
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 md:order-2 relative">
            {SLIDES.map((s, i) => (
              <div
                key={s.title}
                className={`transition-opacity duration-700 ${i === idx ? "opacity-100 relative" : "opacity-0 absolute inset-0"}`}
                aria-hidden={i !== idx}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo((idx - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo((idx + 1) % SLIDES.length)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-gray-50 text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            className={`h-2 rounded-full transition-all cursor-pointer ${i === idx ? "w-8 bg-[#114b2f]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
        <button
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          onClick={(e) => { e.stopPropagation(); setPaused(!paused); }}
          className="ml-2 bg-[#114b2f]/10 hover:bg-[#114b2f]/20 text-[#114b2f] rounded-full p-1.5"
        >
          {paused ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>
          )}
        </button>
      </div>

      <div aria-live="polite" className="sr-only">
        Slide {idx + 1} of {SLIDES.length}: {slide.title}
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
