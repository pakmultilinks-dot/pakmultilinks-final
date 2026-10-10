import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Pak Multilinks Hygiene - Wholesale Hygiene Supplies Lahore",
  description: "Frequently asked questions about wholesale tissue, cleaning products, and hygiene supplies in Lahore. MOQ, delivery, pricing, and ordering info for businesses.",
  alternates: { canonical: "https://pakmultilinks.com/faq" },
};

const FAQS = [
  {
    q: "Where is Pak Multilinks located?",
    a: "Shop No LG-9, Rehman Tower, Main Market Gulberg II, Lahore, Pakistan. We supply wholesale hygiene products across Lahore and all of Pakistan.",
  },
  {
    q: "What products does Pak Multilinks sell?",
    a: "We wholesale tissue and paper products (facial tissues, toilet rolls, kitchen towels), washroom supplies (mops, brushes, dispensers), cleaning products (floor cleaners, bleach, detergents, dishwash), personal care (soaps, shampoos, toothpaste, handwash), and disposable items (cups, plates, garbage bags). Over 150 real products from brands like Dettol, Harpic, Vim, Surf Excel, Rose Petal, and more.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our standard MOQ is 1 carton per product. For bulk corporate orders, contact us for customized quantities and pricing.",
  },
  {
    q: "Do you deliver outside Lahore?",
    a: "Yes, we supply across Pakistan. Delivery charges and timelines depend on order size and destination. Contact us on WhatsApp for a delivery quote.",
  },
  {
    q: "How do I place an order?",
    a: "Browse the shop, add products to your cart, and check out. You can also order directly on WhatsApp at +92 300 6917 385 (Zoher Ahmed) or +92 325 8166829 (Bilal Shah, BDO), or request a quotation through our contact page.",
  },
  {
    q: "Do you offer corporate and bulk pricing?",
    a: "Yes. We specialize in corporate orders for offices, hotels, restaurants, hospitals, and institutions. Share your product list and quantities for a customized wholesale quotation.",
  },
  {
    q: "Are your products genuine?",
    a: "Yes, we supply genuine products from authorized distributors. Every product listing shows real packaging photos, never stock or AI-generated images.",
  },
  {
    q: "How can I get a price quotation?",
    a: "Use the quotation form on our contact page, or WhatsApp your product list to either of our team members. We confirm packing and final pricing before fulfilment.",
  },
  {
    q: "What are your business hours?",
    a: "Our shop at Rehman Tower, Gulberg II, Lahore is open Monday to Saturday. WhatsApp messages are answered as quickly as possible.",
  },
  {
    q: "Do you have deals or bundle offers?",
    a: "Yes, check our Deals page for promotional bundle offers on tissue packs, cleaning combos, and family starter packs.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p className="text-xs uppercase tracking-[0.2em] text-[#114b2f] font-bold">Help Center</p>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold mt-2">Frequently Asked Questions</h1>
      <p className="text-gray-600 mt-3">Everything businesses ask us about wholesale hygiene supply in Lahore and Pakistan.</p>
      <div className="mt-8 space-y-4">
        {FAQS.map((f, i) => (
          <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              {f.q}
              <span className="text-[#114b2f] text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 bg-[#f0f7f2] rounded-2xl p-6 text-center">
        <p className="font-semibold">Still have questions?</p>
        <p className="text-sm text-gray-600 mt-1">Chat with us on WhatsApp for instant answers.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a href="https://wa.me/923006917385" target="_blank" rel="noopener" className="px-5 py-2.5 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-[#1eb856]">WhatsApp Zoher Ahmed</a>
          <a href="https://wa.me/923258166829" target="_blank" rel="noopener" className="px-5 py-2.5 bg-[#25D366] text-white text-sm font-bold rounded-full hover:bg-[#1eb856]">WhatsApp Bilal Shah</a>
        </div>
      </div>
    </main>
  );
}
