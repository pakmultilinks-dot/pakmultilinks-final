"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import type { Product } from "@/data/products";
import { PRODUCTS } from "@/data/products";

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pm-cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        // Remove cart items for products no longer in the catalog
        const validSlugs = new Set(PRODUCTS.map((p) => p.slug));
        const cleaned = Array.isArray(parsed) ? parsed.filter((item: any) => validSlugs.has(item.slug)) : [];
        setItems(cleaned);
        if (cleaned.length !== parsed.length) {
          localStorage.setItem("pm-cart", JSON.stringify(cleaned));
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("pm-cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const value = useMemo<CartCtx>(() => ({
    items,
    add: (p, qty = 1) =>
      setItems((prev) => {
        const found = prev.find((i) => i.product.slug === p.slug);
        if (found)
          return prev.map((i) =>
            i.product.slug === p.slug ? { ...i, qty: i.qty + qty } : i
          );
        return [...prev, { product: p, qty }];
      }),
    remove: (slug) => setItems((prev) => prev.filter((i) => i.product.slug !== slug)),
    setQty: (slug, qty) =>
      setItems((prev) =>
        qty <= 0
          ? prev.filter((i) => i.product.slug !== slug)
          : prev.map((i) => (i.product.slug === slug ? { ...i, qty } : i))
      ),
    clear: () => setItems([]),
    count: items.reduce((n, i) => n + i.qty, 0),
    drawerOpen,
    setDrawerOpen,
  }), [items, drawerOpen]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart(): CartCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
