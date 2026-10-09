"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    src: "/images/hero-banner.png",
    alt: "Pak Multilinks Hygiene warehouse - Quality you can see, freshness you can trust",
    link: "/shop",
  },
  {
    src: "/images/banner-hygiene-solutions.jpg",
    alt: "Complete hygiene solutions for every workspace",
    link: "/corporate-orders",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7f5]" aria-label="Featured">
      <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[640px]">
        {SLIDES.map((s, i) => (
          <Link
            key={s.src}
            href={s.link}
            aria-hidden={i !== idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
          >
            <Image src={s.src} alt={s.alt} fill priority={i === 0} className="object-cover" sizes="100vw" />
          </Link>
        ))}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={() => setIdx((idx - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setIdx((idx + 1) % SLIDES.length)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#114b2f] rounded-full p-2.5 shadow-md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#114b2f]" : "w-2 bg-white/70 hover:bg-white"}`}
          />
        ))}
      </div>

      <h1 className="sr-only">Pak Multilinks Hygiene - Wholesale Tissue and Hygiene Supplies Lahore</h1>
    </section>
  );
}
