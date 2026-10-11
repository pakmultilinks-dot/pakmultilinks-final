"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    eyebrow: "Wholesale Supply from Lahore",
    title: "Complete Hygiene Solutions for Every Workspace",
    subtitle: "Tissues, cleaning and washroom supplies by the carton for offices, schools and clinics.",
    primaryCta: { label: "Shop Products", href: "/shop" },
    secondaryCta: { label: "Get Bulk Quote", href: "/request-quote" },
    image: "/images/hero-clean-workspace.jpg",
  },
  {
    eyebrow: "Your Hygiene Partner",
    title: "Quality You Can See, Freshness You Can Trust",
    subtitle: "Premium brands at wholesale pricing, delivered across Lahore and Pakistan.",
    primaryCta: { label: "Browse Catalog", href: "/shop" },
    secondaryCta: { label: "Corporate Orders", href: "/corporate-orders" },
    image: "/images/hero-main-banner.jpg",
  },
  {
    eyebrow: "Tissue & Paper Wholesale",
    title: "Facial Tissues, Toilet Rolls & Napkins in Bulk",
    subtitle: "Rose Petal, Mambo and more at true wholesale rates.",
    primaryCta: { label: "Shop Tissue", href: "/shop?category=Tissue%20%26%20Paper%20Wholesale" },
    secondaryCta: { label: "Get a Quote", href: "/request-quote" },
    image: "/images/hero-tissue-pro.jpg",
  },
  {
    eyebrow: "Cleaning Essentials",
    title: "Professional Cleaning Supplies in Bulk",
    subtitle: "Detergents, disinfectants and tools for commercial spaces.",
    primaryCta: { label: "Shop Cleaning", href: "/shop?category=Cleaning%20Products" },
    secondaryCta: { label: "Bulk Pricing", href: "/request-quote" },
    image: "/images/hero-cleaning-pro.jpg",
  },
];

export default function MobileHero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIdx(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(idx + 1), [idx, goTo]);
  const prev = useCallback(() => goTo(idx - 1), [idx, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setPaused(false), 3000);
  };

  const slide = SLIDES[idx];

  return (
    <section
      className="md:hidden relative overflow-hidden bg-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-label="Featured promotions"
    >
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5 pb-14">
          <p
            key={`eyebrow-${idx}`}
            className="text-[11px] uppercase tracking-[0.18em] text-white/90 font-bold animate-[fadeSlideUp_0.5s_ease-out]"
          >
            {slide.eyebrow}
          </p>
          <h1
            key={`title-${idx}`}
            className="text-[26px] font-bold text-white mt-2 leading-[1.15] tracking-tight animate-[fadeSlideUp_0.5s_ease-out_0.1s_both]"
          >
            {slide.title}
          </h1>
          <p
            key={`subtitle-${idx}`}
            className="text-[14px] text-white/85 mt-2 leading-relaxed animate-[fadeSlideUp_0.5s_ease-out_0.2s_both]"
          >
            {slide.subtitle}
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center active:bg-black/50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center active:bg-black/50"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* CTAs */}
      <div className="px-4 py-4 bg-white">
        <div className="flex gap-3">
          <Link
            href={slide.primaryCta.href}
            className="flex-1 text-center bg-[#2fa84f] text-white font-semibold rounded-lg py-3.5 min-h-[52px] flex items-center justify-center text-[15px] active:bg-[#268a41] transition-colors"
          >
            {slide.primaryCta.label}
          </Link>
          <Link
            href={slide.secondaryCta.href}
            className="flex-1 text-center border border-[#114b2f] text-[#114b2f] font-semibold rounded-lg py-3.5 min-h-[52px] flex items-center justify-center text-[15px] active:bg-[#114b2f]/5 transition-colors"
          >
            {slide.secondaryCta.label}
          </Link>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-8 bg-[#2fa84f]" : "w-2 bg-gray-300 active:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
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
