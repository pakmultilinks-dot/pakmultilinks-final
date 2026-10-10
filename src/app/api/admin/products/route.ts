import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(url, key);
}

// GET /api/admin/products - list all products
export async function GET() {
  const supabase = getServiceClient();
  const { data, error } = await supabase.from("products").select("*").order("name");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ products: data });
}

// POST /api/admin/products - create product
export async function POST(req: NextRequest) {
  const supabase = getServiceClient();
  const body = await req.json();
  const { data, error } = await supabase.from("products").insert(body).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data });
}

// PUT /api/admin/products - update product
export async function PUT(req: NextRequest) {
  const supabase = getServiceClient();
  const body = await req.json();
  const { slug, ...updates } = body;
  const { data, error } = await supabase.from("products").update(updates).eq("slug", slug).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ product: data });
}

// DELETE /api/admin/products?slug=xxx - delete product
export async function DELETE(req: NextRequest) {
  const supabase = getServiceClient();
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "Slug required" }, { status: 400 });
  const { error } = await supabase.from("products").delete().eq("slug", slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
