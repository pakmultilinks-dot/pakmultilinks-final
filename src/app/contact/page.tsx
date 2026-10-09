import Image from "next/image";

const WA_NUMBER = "923006917385";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Get in touch</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2">Contact Us</h1>
      <p className="text-center text-gray-600 mt-3">Call, WhatsApp or email - a real person will respond.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ["Phone / WhatsApp", "+92 300 6917 385", `https://wa.me/${WA_NUMBER}`, "Chat now"],
          ["Email", "zohair.shah8@gmail.com", "mailto:zohair.shah8@gmail.com", "Send email"],
          ["Visit us", "Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore", "https://maps.google.com/?q=Rehman+Tower+Gulberg+II+Lahore", "Open map"],
        ].map(([t, d, href, cta]) => (
          <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="block bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <p className="font-bold text-[#114b2f]">{t}</p>
            <p className="mt-2 text-sm text-gray-700 break-words">{d}</p>
            <span className="inline-block mt-4 text-sm font-semibold text-[#114b2f] underline underline-offset-2">{cta}</span>
          </a>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mt-16">Our Team</h2>
      <p className="text-center text-gray-600 text-sm mt-2">Save our cards - reach out anytime for orders and quotations.</p>

      {/* Business cards displayed FULL and CENTERED, never cropped */}
      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <figure className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/card-zohair.jpg" alt="Zohair Ahmed - Founder and Sales Head, Pak Multilinks Hygiene. Phone +92 300 6917 385, +92 312 1091 848. Email zohair.shah8@gmail.com. Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore." width={1600} height={912} className="w-full h-auto" />
          </div>
          <figcaption className="mt-4 text-center">
            <p className="font-bold">Zohair Ahmed</p>
            <p className="text-sm text-gray-600">Founder &amp; Sales Head</p>
          </figcaption>
        </figure>
        <figure className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="rounded-xl overflow-hidden">
            <Image src="/images/card-bilal.jpg" alt="M. Bilal Shah - BDO, Pak Multilinks Hygiene. Phone 0325 8166829. Email bilalshah2237463@gmail.com. Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore." width={1600} height={900} className="w-full h-auto" />
          </div>
          <figcaption className="mt-4 text-center">
            <p className="font-bold">M. Bilal Shah</p>
            <p className="text-sm text-gray-600">BDO</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
