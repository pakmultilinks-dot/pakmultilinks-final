import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PRODUCTS as STATIC_PRODUCTS } from "@/data/products";
import { cacheLife } from "next/cache";

// Cached product fetch: Supabase is hit at most once per hour,
// not on every visitor's page load.
async function getCachedProducts() {
  "use cache";
  cacheLife("hours");

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return { products: STATIC_PRODUCTS, source: "static" };
  }

  try {
    const supabase = createClient(url, key);
    // Select only the columns the storefront needs (no select *)
    const { data, error } = await supabase
      .from("products")
      .select("name,slug,image,category,brand,moq,price,in_stock")
      .eq("in_stock", true)
      .order("name");

    // Only trust DB if it has at least as many products as the static catalog
    if (error || !data || data.length < STATIC_PRODUCTS.length) {
      return { products: STATIC_PRODUCTS, source: "static" };
    }

    const products = data.map((db: any) => {
      let image = db.image as string;
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
    });

    return { products, source: "db" };
  } catch {
    return { products: STATIC_PRODUCTS, source: "static" };
  }
}

export async function GET() {
  const result = await getCachedProducts();
  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
