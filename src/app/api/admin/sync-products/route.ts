import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PRODUCTS } from "@/data/products";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

// POST /api/admin/sync-products - Sync static catalog to Supabase
// Upserts all PRODUCTS from the static catalog. Does not delete.
export async function POST() {
  const supabase = getServiceClient();

  const rows = PRODUCTS.map((p) => ({
    name: p.name,
    slug: p.slug,
    image: p.image.startsWith("http") ? p.image : `https://pakmultilinks-final.vercel.app${p.image}`,
    category: p.category,
    brand: p.brand,
    moq: p.moq,
    price: p.price,
    in_stock: p.inStock,
  }));

  // Upsert in batches of 50
  let upserted = 0;
  const errors: string[] = [];
  for (let i = 0; i < rows.length; i += 50) {
    const batch = rows.slice(i, i + 50);
    const { error } = await supabase.from("products").upsert(batch, { onConflict: "slug" });
    if (error) {
      errors.push(error.message);
    } else {
      upserted += batch.length;
    }
  }

  // Get final count
  const { count } = await supabase.from("products").select("*", { count: "exact", head: true });

  return NextResponse.json({
    upserted,
    total_in_db: count,
    static_count: PRODUCTS.length,
    errors: errors.length > 0 ? errors : undefined,
  });
}
