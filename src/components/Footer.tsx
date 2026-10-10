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
          <Image src="/images/logo.jpg" alt="Pak Multilinks Hygiene" width={280} height={78} className="h-16 w-auto rounded" />
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
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com/pakmultilinks" target="_blank" rel="noopener" aria-label="Facebook" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/pakmultilinks" target="_blank" rel="noopener" aria-label="Instagram" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/923006917385" target="_blank" rel="noopener" aria-label="WhatsApp" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.9 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.2-.2-1.1-1.5-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.6c.2 0 .5.1.6.4l1 2.4c.1.1.1.3 0 .5-.1.2-.1.4-.3.6l-.6.7c-.1.1-.2.2-.1.5.1.2.4.8.9 1.3.6.7 1.2 1 2.1 1.4.3.1.4.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .1 0 .7-.2 1.3z"/></svg>
            </a>
          </div>
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
