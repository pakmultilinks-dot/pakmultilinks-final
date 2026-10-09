import Link from "next/link";
import Image from "next/image";

const INFO_LINKS = [
  ["Our story", "/about"],
  ["Business orders", "/corporate-orders"],
  ["Contact us", "/contact"],
  ["My account", "/account"],
  ["Request a quote", "/request-quote"],
];

const COLLECTIONS = [
  "Tissue & Paper Wholesale",
  "Washroom Supplies",
  "Cleaning Products",
  "Personal Care",
  "Disposable Items",
];

export default function Footer() {
  return (
    <footer className="bg-[#0b3a24] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Image src="/images/logo.jpg" alt="Pak Multilinks Hygiene" width={200} height={56} className="h-11 w-auto rounded" />
          <p className="mt-4 text-sm text-white/80 leading-relaxed">
            Your hygiene partner. Wholesale tissue, hygiene and cleaning supplies by the carton, delivered across Lahore and Pakistan.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Information</h3>
          <ul className="space-y-2.5">
            {INFO_LINKS.map(([label, href]) => (
              <li key={href}><Link href={href} className="text-sm text-white/80 hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Collections</h3>
          <ul className="space-y-2.5">
            {COLLECTIONS.map((c) => (
              <li key={c}><Link href={`/shop?category=${encodeURIComponent(c)}`} className="text-sm text-white/80 hover:text-white">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Get in touch</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>Phone / WhatsApp: <a href="tel:+923006917385" className="hover:text-white font-medium">+92 300 6917 385</a></li>
            <li>Email: <a href="mailto:zohair.shah8@gmail.com" className="hover:text-white">zohair.shah8@gmail.com</a></li>
            <li>Shop No LG-9, Rehman Tower Main Market Gulberg II, Lahore</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>&copy; 2026 Pak Multilinks Hygiene. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
