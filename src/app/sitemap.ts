import { MetadataRoute } from "next";
import { PRODUCTS, CATEGORIES } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pakmultilinks.com";

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/shop", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/deals", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/corporate-orders", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/request-quote", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/cart", priority: 0.3, changeFrequency: "never" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const productPages = PRODUCTS.map((p) => ({
    url: `/product/${p.slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `/shop?category=${encodeURIComponent(c.name)}`,
    priority: 0.6,
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...productPages, ...categoryPages].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
