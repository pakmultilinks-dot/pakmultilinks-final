"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CATEGORIES, PRODUCTS } from "@/data/products";

const WA_NUMBER = "923006917385";

export default function Header() {
  const { count, setDrawerOpen } = useCart();
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const [suggest, setSuggest] = useState<typeof PRODUCTS>([]);
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const router = useRouter();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("pm-theme") as "system" | "light" | "dark" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("pm-theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);

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
      {/* Announcement bar - dark green */}
      <div className="bg-[#114b2f] text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <p className="truncate">Tissue &amp; hygiene essentials &middot; Wholesale supply from Lahore</p>
          <p className="hidden sm:block whitespace-nowrap">Zohair Ahmed &middot; Call +92 300 6917 385</p>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 sm:gap-6">
          <button className="lg:hidden p-2 -ml-2" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/images/logo.jpg" alt="Pak Multilinks Hygiene - Corporate Supplies" width={220} height={60} className="h-10 sm:h-12 w-auto" priority />
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
            <div className="hidden sm:flex items-center border border-gray-200 rounded-full p-1">
              {(["system", "light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  aria-label={`${t} theme`}
                  title={`${t.charAt(0).toUpperCase() + t.slice(1)} theme`}
                  className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-full capitalize transition-colors ${theme === t ? "bg-[#114b2f] text-white" : "text-gray-500 hover:text-[#114b2f]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <Link href="/account" aria-label="Your account" className="p-2 rounded-full hover:bg-gray-100 hidden sm:block">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5"/></svg>
            </Link>
            <button onClick={() => setDrawerOpen(true)} aria-label="Open cart" className="relative p-2 rounded-full bg-[#114b2f] text-white hover:bg-[#0b3a24]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-white text-[10px] font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">{count}</span>
              )}
            </button>
            <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Assalam-o-Alaikum, I want to inquire about hygiene products.")}`} target="_blank" rel="noopener" aria-label="WhatsApp chat" className="p-2 rounded-full bg-[#25D366] text-white hover:bg-[#1eb856]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-3.2 4.1c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.9-.4-1.5-.7-2.1-1.4-.5-.5-.8-1.1-.9-1.3-.1-.3 0-.4.1-.5l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.5L9.4 6.6c-.2-.3-.4-.4-.6-.4z"/></svg>
            </a>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1">
            <Link href="/" className="px-4 py-3 text-sm font-medium hover:text-[#114b2f]">Home</Link>
            <Link href="/shop" className="px-4 py-3 text-sm font-medium hover:text-[#114b2f]">Shop</Link>
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropOpen((v) => !v)}
                aria-expanded={dropOpen}
                className="px-4 py-3 text-sm font-medium hover:text-[#114b2f] flex items-center gap-1"
              >
                Collections
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`transition-transform ${dropOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"/></svg>
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
            <Link href="/corporate-orders" className="px-4 py-3 text-sm font-medium hover:text-[#114b2f]">Corporate Orders</Link>
            <Link href="/about" className="px-4 py-3 text-sm font-medium hover:text-[#114b2f]">About Us</Link>
            <Link href="/contact" className="px-4 py-3 text-sm font-medium hover:text-[#114b2f]">Contact</Link>
            <Link href="/request-quote" className="ml-auto my-2 px-5 py-2 bg-[#114b2f] text-white text-sm font-semibold rounded-full hover:bg-[#0b3a24]">Get a quote</Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
            <div className="p-4 flex items-center justify-between border-b">
              <Image src="/images/logo.jpg" alt="Pak Multilinks Hygiene" width={160} height={44} className="h-9 w-auto" />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <form onSubmit={(e) => { submitSearch(e); setMobileOpen(false); }} className="p-4">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..." className="w-full border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#114b2f]" />
            </form>
            <nav className="px-2 pb-6">
              {[
                ["Home", "/"], ["Shop", "/shop"], ["Corporate Orders", "/corporate-orders"],
                ["About Us", "/about"], ["Contact", "/contact"], ["My Account", "/account"],
              ].map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium border-b border-gray-100 hover:text-[#114b2f]">{label}</Link>
              ))}
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
