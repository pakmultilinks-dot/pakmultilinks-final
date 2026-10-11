import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PRODUCTS } from "@/data/products";

export const dynamic = "force-dynamic";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

// GET /api/admin/list-extra - List DB products not in static catalog
export async function GET() {
  const supabase = getServiceClient();
  const staticSlugs = new Set(PRODUCTS.map((p) => p.slug));

  const { data, error } = await supabase.from("products").select("slug, name, category");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const extra = (data || []).filter((p) => !staticSlugs.has(p.slug));
  return NextResponse.json({ extra, count: extra.length });
}
