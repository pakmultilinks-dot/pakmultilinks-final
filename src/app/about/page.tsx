import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "About Us",
  description: "Pak Multilinks Hygiene - your wholesale hygiene partner in Lahore. Supplying offices, schools, clinics and businesses since 2010.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 text-center">Our story</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-2">About Pak Multilinks Hygiene</h1>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/hero-banner.png" alt="Pak Multilinks Hygiene warehouse and product range" width={1536} height={1024} className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#114b2f]">Your Hygiene Partner</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Pak Multilinks Hygiene is a wholesale supplier of tissue, hygiene and cleaning products based in Lahore, Pakistan. We supply homes, offices, schools, clinics, restaurants and commercial spaces - by the carton, at wholesale rates.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From facial tissues and toilet rolls to floor cleaners, mops and disposable items, we keep your workplace stocked with quality essentials so it is one less thing to worry about.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ["Premium Quality", "Trusted brands and reliable supply."],
              ["Pure & Safe", "Hygienic products for every space."],
              ["Bulk Orders", "Carton packing for businesses."],
              ["Trusted Partner", "A person to talk to, not a portal."],
            ].map(([t, d]) => (
              <div key={t} className="bg-[#e8f3ec] rounded-xl p-4">
                <p className="font-bold text-[#114b2f] text-sm">{t}</p>
                <p className="text-xs text-gray-600 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-2xl overflow-hidden shadow-lg">
        <Image src="/images/banner-hygiene-solutions.jpg" alt="Complete hygiene solutions for every workspace" width={1600} height={533} className="w-full h-auto" />
      </div>

      <div className="text-center mt-12">
        <Link href="/contact" className="inline-block px-8 py-3 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24]">Contact us</Link>
      </div>
    </div>
  );
}
