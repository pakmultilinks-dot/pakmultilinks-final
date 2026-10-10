"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

interface WishCtx {
  ids: string[];
  toggle: (p: Product) => void;
  has: (slug: string) => boolean;
  clear: () => void;
  count: number;
}

const Ctx = createContext<WishCtx | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pm-wishlist");
      if (raw) setIds(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("pm-wishlist", JSON.stringify(ids));
    } catch {}
  }, [ids]);

  const toggle = (p: Product) => {
    setIds((prev) =>
      prev.includes(p.slug) ? prev.filter((id) => id !== p.slug) : [...prev, p.slug]
    );
  };

  const has = (slug: string) => ids.includes(slug);
  const clear = () => setIds([]);

  return (
    <Ctx.Provider value={{ ids, toggle, has, clear, count: ids.length }}>
      {children}
    </Ctx.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
