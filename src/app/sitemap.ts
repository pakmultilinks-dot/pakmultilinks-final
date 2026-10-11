import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";

// Fixed date for stable lastModified signals (update when catalog changes)
const CATALOG_UPDATED = new Date("2026-10-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pakmultilinks.com";

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: CATALOG_UPDATED },
    { url: "/shop", priority: 0.9, changeFrequency: "weekly" as const, lastModified: CATALOG_UPDATED },
    { url: "/deals", priority: 0.8, changeFrequency: "weekly" as const, lastModified: CATALOG_UPDATED },
    { url: "/corporate-orders", priority: 0.8, changeFrequency: "monthly" as const, lastModified: new Date("2026-10-01") },
    { url: "/request-quote", priority: 0.7, changeFrequency: "monthly" as const, lastModified: new Date("2026-10-01") },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" as const, lastModified: new Date("2026-10-01") },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const, lastModified: new Date("2026-10-01") },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const, lastModified: new Date("2026-10-01") },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: new Date("2026-10-01") },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const, lastModified: new Date("2026-10-01") },
  ];

  const productPages = PRODUCTS.map((p) => ({
    url: `/product/${p.slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
    lastModified: CATALOG_UPDATED,
  }));

  return [...staticPages, ...productPages].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
