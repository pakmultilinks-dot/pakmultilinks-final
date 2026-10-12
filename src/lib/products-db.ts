"use client";

import { useEffect, useState } from "react";
import { PRODUCTS as STATIC_PRODUCTS, type Product } from "@/data/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(STATIC_PRODUCTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    // Fetch from the cached edge API instead of hitting Supabase directly
    // from every visitor's browser. The API caches for 1 hour.
    fetch("/api/products")
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (!cancelled && json && Array.isArray(json.products) && json.products.length >= STATIC_PRODUCTS.length) {
          setProducts(json.products);
        }
        if (!cancelled) setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading };
}
