import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Pak Multilinks Hygiene.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-sm text-gray-500 mt-2">Last updated: October 2026</p>

      <div className="mt-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Orders and Pricing</h2>
          <p>All prices are in Pakistani Rupees and are subject to change. Product availability and final pricing are confirmed when you request a quote. Minimum order quantities (MOQ) apply as listed on product pages.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Wholesale Terms</h2>
          <p>Products are supplied in carton quantities for business customers. Packing details are confirmed before fulfillment. Delivery is arranged across Lahore and Pakistan.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Contact</h2>
          <p>Pak Multilinks Hygiene, Shop No LG-9, Rehman Tower Main Market, Gulberg II, Lahore. Phone/WhatsApp: +92 300 6917 385. Email: zohair.shah8@gmail.com.</p>
        </section>
      </div>
    </div>
  );
}
