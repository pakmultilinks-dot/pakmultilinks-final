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
    bg: "/images/banner-workspace.jpg",
    link: "/shop",
  },
  {
    eyebrow: "Your Hygiene Partner",
    title: "Quality You Can See, Freshness You Can Trust",
    subtitle: "Premium tissue, hygiene and cleaning supplies by the carton. Trusted brands, wholesale pricing, delivered across Lahore and Pakistan.",
    primaryCta: { label: "Browse Catalog", href: "/shop" },
    secondaryCta: { label: "Corporate Orders", href: "/corporate-orders" },
    bg: "/images/banner-hygiene-solutions.jpg",
    link: "/shop",
  },
  {
    eyebrow: "Tissue & Paper Wholesale",
    title: "Facial Tissues, Toilet Rolls & Napkins in Bulk",
    subtitle: "Rose Petal, Mambo and more. Stock your business with premium paper products at true wholesale rates, supplied by the carton.",
    primaryCta: { label: "Shop Tissue & Paper", href: "/shop?category=Tissue%20%26%20Paper%20Wholesale" },
    secondaryCta: { label: "Get a Quote", href: "/request-quote" },
    bg: "/images/marketing-party-pack.jpg",
    link: "/shop",
  },
  {
    eyebrow: "Cleaning Products",
    title: "Floor Cleaners, Phenyl, Bleach & Detergents",
    subtitle: "Commercial-grade cleaning chemicals for spotless spaces. Sweep, Glint, Vim and more, packed for businesses of every size.",
    primaryCta: { label: "Shop Cleaning", href: "/shop?category=Cleaning%20Products" },
    secondaryCta: { label: "Bulk Pricing", href: "/request-quote" },
    bg: "/images/marketing-ciblure.jpg",
    link: "/shop",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => {
    setIdx(i);
    setAnimKey((k) => k + 1);
  };

  const slide = SLIDES[idx];

  return (
    <section className="relative w-full overflow-hidden bg-[#0b3a24]" aria-label="Featured">
      <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        {/* Background with crossfade */}
        {SLIDES.map((s, i) => (
          <div
            key={s.bg}
            className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== idx}
          >
            <Image
              src={s.bg}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3a24]/95 via-[#0b3a24]/70 to-[#0b3a24]/20" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
          <div key={animKey} className="max-w-2xl">
            <p className="hero-anim text-xs sm:text-sm uppercase tracking-[0.2em] text-green-300 font-semibold" style={{ animationDelay: "0ms" }}>
              {slide.eyebrow}
            </p>
            <h2 className="hero-anim mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ animationDelay: "120ms" }}>
              {slide.title}
            </h2>
            <p className="hero-anim mt-5 text-sm sm:text-lg text-white/85 leading-relaxed max-w-xl" style={{ animationDelay: "240ms" }}>
              {slide.subtitle}
            </p>
            <div className="hero-anim mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <Link
                href={slide.primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#114b2f] hover:bg-[#0d4229] text-white font-semibold rounded-full transition-all hover:scale-105 shadow-lg"
              >
                {slide.primaryCta.label}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 backdrop-blur transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-10 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 flex gap-8 text-white/70 text-xs">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
              Trusted Quality Brands
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
              Dedicated B2B Support
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
              A Cleaner, Healthier Tomorrow
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={() => goTo((idx - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => goTo((idx + 1) % SLIDES.length)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>

      <h1 className="sr-only">Pak Multilinks Hygiene - Wholesale Tissue and Hygiene Supplies Lahore</h1>

      <style jsx>{`
        .hero-anim {
          opacity: 0;
          animation: heroSlideUp 0.7s ease-out forwards;
        }
        @keyframes heroSlideUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
