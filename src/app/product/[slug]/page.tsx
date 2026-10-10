import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, PRODUCTS } from "@/data/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} - Wholesale`,
    description: `Buy ${product.name} wholesale in ${product.category}. ${product.brand} - MOQ ${product.moq}. Supplied by the carton across Lahore & Pakistan by Pak Multilinks Hygiene.`,
    openGraph: {
      title: `${product.name} | Pak Multilinks Hygiene`,
      description: `Wholesale ${product.category} - ${product.brand}. MOQ ${product.moq}.`,
      images: [{ url: product.image, alt: product.name }],
      type: "website",
    },
    alternates: {
      canonical: `https://pakmultilinks.com/product/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://pakmultilinks.com${product.image}`,
    description: `${product.name} - ${product.brand}. Wholesale ${product.category} supplied by the carton. MOQ: ${product.moq}.`,
    brand: { "@type": "Brand", name: product.brand },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `https://pakmultilinks.com/product/${product.slug}`,
      priceCurrency: "PKR",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Pak Multilinks Hygiene", url: "https://pakmultilinks.com" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ProductDetail product={product} related={related} />
    </>
  );
}
