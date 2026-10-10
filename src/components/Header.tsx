"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CATEGORIES, PRODUCTS } from "@/data/products";

const WA_BILAL = "923258166829";
const WA_ZOHER = "923006917385";

export default function Header() {
  const { count, setDrawerOpen } = useCart();
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [suggest, setSuggest] = useState<typeof PRODUCTS>([]);
  const router = useRouter();
  const pathname = usePathname();
  const dropRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLink = (href: string, label: string) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        className={`relative px-4 py-3 text-sm font-semibold whitespace-nowrap shrink-0 transition-all rounded-lg mx-0.5 ${
          active
            ? "text-[#114b2f] bg-[#e8f3ec] shadow-[inset_0_-3px_0_#114b2f]"
            : "text-gray-700 hover:text-[#114b2f] hover:bg-gray-50"
        }`}
      >
        {label}
      </Link>
    );
  };

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    if (q.trim().length < 2) { setSuggest([]); return; }
    const needle = q.toLowerCase();
    setSuggest(PRODUCTS.filter((p) => p.name.toLowerCase().includes(needle) || p.category.toLowerCase().includes(needle)).slice(0, 6));
  }, [q]);

  const submitSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSuggest([]);
    router.push(`/shop?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <>
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 sm:gap-6">
          <button className="lg:hidden p-2 -ml-2" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/images/logo.jpg" alt="Pak Multilinks Hygiene - Corporate Supplies" width={400} height={112} className="h-16 sm:h-20 w-auto" priority />
          </Link>

          {/* Search */}
          <form onSubmit={submitSearch} className="hidden md:flex flex-1 max-w-xl relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products, categories..."
              className="w-full border border-gray-300 rounded-full pl-5 pr-12 py-2.5 text-sm focus:outline-none focus:border-[#114b2f] focus:ring-1 focus:ring-[#114b2f]"
            />
            <button type="submit" aria-label="Search" className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#114b2f] text-white rounded-full p-2 hover:bg-[#0b3a24]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            </button>
            {suggest.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                {suggest.map((p) => (
                  <Link key={p.slug} href={`/product/${p.slug}`} onClick={() => setSuggest([])} className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50">
                    <img src={p.image} alt="" className="w-10 h-10 object-cover rounded" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </form>

          <div className="flex items-center gap-1 sm:gap-3 ml-auto">
            <button onClick={() => setMobileOpen(true)} aria-label="Search products" className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            </button>
            <button onClick={() => setDrawerOpen(true)} aria-label="Open cart" className="relative p-2 rounded-full bg-[#114b2f] text-white hover:bg-[#0b3a24]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-white text-[10px] font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">{count}</span>
              )}
            </button>
            <a href={`https://wa.me/${WA_ZOHER}?text=${encodeURIComponent("Assalam-o-Alaikum, I want to inquire about hygiene products.")}`} target="_blank" rel="noopener" aria-label="WhatsApp Zoher Ahmed" title="Zoher Ahmed" className="flex items-center gap-2 pl-2 pr-3 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#1eb856] transition-all hover:scale-105 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-3.2 4.1c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.9-.4-1.5-.7-2.1-1.4-.5-.5-.8-1.1-.9-1.3-.1-.3 0-.4.1-.5l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.5L9.4 6.6c-.2-.3-.4-.4-.6-.4z"/></svg>
              <span className="hidden sm:block text-xs font-bold leading-tight">Zoher Ahmed</span>
            </a>
            <a href={`https://wa.me/${WA_BILAL}?text=${encodeURIComponent("Assalam-o-Alaikum, I want to inquire about hygiene products.")}`} target="_blank" rel="noopener" aria-label="WhatsApp Bilal Shah" title="Bilal Shah" className="flex items-center gap-2 pl-2 pr-3 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#1eb856] transition-all hover:scale-105 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-3.2 4.1c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.9-.4-1.5-.7-2.1-1.4-.5-.5-.8-1.1-.9-1.3-.1-.3 0-.4.1-.5l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.5L9.4 6.6c-.2-.3-.4-.4-.6-.4z"/></svg>
              <span className="hidden sm:block text-xs font-bold leading-tight">Bilal Shah<br/><span className="font-normal opacity-90">BDO</span></span>
            </a>
            {/* Social icons */}
            <div className="hidden md:flex items-center gap-1.5 ml-1">
              <a href="https://facebook.com/pakmultilinks" target="_blank" rel="noopener" aria-label="Facebook" className="p-2 rounded-full text-gray-500 hover:text-[#1877F2] hover:bg-blue-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com/pakmultilinks" target="_blank" rel="noopener" aria-label="Instagram" className="p-2 rounded-full text-gray-500 hover:text-[#E4405F] hover:bg-pink-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com/company/pakmultilinks" target="_blank" rel="noopener" aria-label="LinkedIn" className="p-2 rounded-full text-gray-500 hover:text-[#0A66C2] hover:bg-blue-50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Nav - desktop only */}
        <nav className="desktop-nav border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-0 py-1">
            <div className="flex items-center gap-0 flex-1 min-w-0">
              {navLink("/", "Home")}
              {navLink("/shop", "Shop")}
              <div className="relative shrink-0" ref={dropRef}>
                <button
                  onClick={() => setDropOpen((v) => !v)}
                  aria-expanded={dropOpen}
                  className={`px-4 py-3 text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap transition-all rounded-lg mx-0.5 ${
                    pathname.startsWith("/shop?category") || dropOpen
                      ? "text-[#114b2f] bg-[#e8f3ec]"
                      : "text-gray-700 hover:text-[#114b2f] hover:bg-gray-50"
                  }`}
                >
                  Collections
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={`transition-transform ${dropOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"/></svg>
                </button>
              {dropOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/shop?category=${encodeURIComponent(c.name)}`}
                      onClick={() => setDropOpen(false)}
                      className="block px-5 py-2.5 text-sm hover:bg-[#e8f3ec] hover:text-[#114b2f]"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLink("/corporate-orders", "Corporate Orders")}
            {navLink("/deals", "Deals")}
            {navLink("/about", "About Us")}
            {navLink("/contact", "Contact")}
            </div>
            <Link href="/request-quote" className="ml-2 my-2 px-5 py-2.5 bg-gradient-to-r from-[#114b2f] to-[#0b3a24] text-white text-sm font-bold rounded-full hover:shadow-[0_8px_20px_rgba(17,75,47,0.3)] hover:scale-105 transition-all whitespace-nowrap shrink-0">Get a quote</Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
            <div className="p-4 flex items-center justify-between border-b">
              <Image src="/images/logo.jpg" alt="Pak Multilinks Hygiene" width={220} height={60} className="h-12 w-auto" />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <form onSubmit={(e) => { submitSearch(e); setMobileOpen(false); }} className="p-4">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="w-full border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#114b2f]" />
            </form>
            <nav className="px-2 pb-6">
              {[
                ["Home", "/"], ["Shop", "/shop"], ["Deals", "/deals"], ["Corporate Orders", "/corporate-orders"],
                ["About Us", "/about"], ["Contact", "/contact"],
              ].map(([label, href]) => {
                const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)} className={`block px-4 py-3 text-sm font-semibold border-b border-gray-100 ${active ? "text-[#114b2f] bg-[#e8f3ec]" : "text-gray-700 hover:text-[#114b2f]"}`}>{label}</Link>
                );
              })}
              <p className="px-4 pt-4 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">Collections</p>
              {CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/shop?category=${encodeURIComponent(c.name)}`} onClick={() => setMobileOpen(false)} className="block px-6 py-2.5 text-sm text-gray-700 hover:text-[#114b2f]">{c.name}</Link>
              ))}
              <Link href="/request-quote" onClick={() => setMobileOpen(false)} className="block mx-4 mt-4 text-center px-5 py-3 bg-[#114b2f] text-white text-sm font-semibold rounded-full">Request bulk quote</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
