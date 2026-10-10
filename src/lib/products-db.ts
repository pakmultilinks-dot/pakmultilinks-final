"use client";

import { useEffect, useState } from "react";
import { getSupabase, isSupabaseConfigured, DBProduct } from "@/lib/supabase";
import { PRODUCTS as STATIC_PRODUCTS, type Product } from "@/data/products";

// Convert DB product to app Product type
function toProduct(db: DBProduct): Product {
  // Extract relative path from full URL for local images
  let image = db.image;
  if (image.includes("pakmultilinks-final.vercel.app")) {
    image = image.replace("https://pakmultilinks-final.vercel.app", "");
  }
  return {
    name: db.name,
    slug: db.slug,
    image,
    category: db.category,
    brand: db.brand,
    moq: db.moq,
    price: db.price,
    inStock: db.in_stock,
  };
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(STATIC_PRODUCTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const client = getSupabase();
    if (!client) return;
    setLoading(true);
    client
      .from("products")
      .select("*")
      .eq("in_stock", true)
      .order("name")
      .then(({ data, error }: { data: DBProduct[] | null; error: any }) => {
        if (!error && data && data.length > 0) {
          setProducts(data.map(toProduct));
        }
        setLoading(false);
      });
  }, []);

  return { products, loading };
}

// Sync fetch for server components (falls back to static)
export async function getProducts(): Promise<Product[]> {
  const client = getSupabase();
  if (!client) return STATIC_PRODUCTS;
  try {
    const { data, error } = await client
      .from("products")
      .select("*")
      .eq("in_stock", true)
      .order("name");
    if (error || !data || data.length === 0) return STATIC_PRODUCTS;
    return (data as DBProduct[]).map(toProduct);
  } catch {
    return STATIC_PRODUCTS;
  }
}
