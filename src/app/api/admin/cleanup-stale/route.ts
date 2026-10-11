import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PRODUCTS } from "@/data/products";

export const dynamic = "force-dynamic";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

// POST /api/admin/cleanup-stale - Delete DB products not in static catalog
// Used to remove household items that were deleted from the catalog.
export async function POST() {
  const supabase = getServiceClient();
  const staticSlugs = new Set(PRODUCTS.map((p) => p.slug));

  const { data, error } = await supabase.from("products").select("slug, name");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const stale = (data || []).filter((p) => !staticSlugs.has(p.slug));
  const deleted: string[] = [];

  for (const p of stale) {
    const { error: delError } = await supabase.from("products").delete().eq("slug", p.slug);
    if (!delError) deleted.push(p.slug);
  }

  const { count } = await supabase.from("products").select("*", { count: "exact", head: true });

  return NextResponse.json({
    deleted: deleted.length,
    deleted_slugs: deleted,
    total_in_db: count,
  });
}
