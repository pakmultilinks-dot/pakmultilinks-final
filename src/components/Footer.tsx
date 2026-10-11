import Link from "next/link";
import { CONTACT, DEFAULT_WA_MESSAGE } from "@/data/contact";
import Image from "next/image";

const QUICK_LINKS = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["Deals", "/deals"],
  ["Rate List", "/rate-list"],
  ["Corporate Orders", "/corporate-orders"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
  ["Request a Quote", "/request-quote"],
];

const COLLECTIONS = [
  "Tissue & Paper Wholesale",
  "Washroom Supplies",
  "Cleaning Products",
  "Disposable Items",
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594928463773";
const INSTAGRAM_URL = "https://instagram.com/pakmultilinks";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
      {children}
      <span className="mt-2 block h-0.5 w-8 rounded-full bg-[#4ad80a]" aria-hidden="true" />
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#114b2f] text-white mt-16">
      {/* Leaf-green top accent */}
      <div className="h-1 bg-[#4ad80a]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        {/* Mobile: brand first, then 2-col link grid, then contact */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-8">
          {/* Brand */}
          <div>
            <span className="inline-block rounded-xl bg-white p-2">
              <Image
                src="/images/logo.jpg"
                alt="Pak Multilinks Hygiene - Corporate Supplies"
                width={280}
                height={78}
                className="h-14 w-auto"
              />
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-xs">
              Your hygiene partner for corporate Pakistan. Wholesale tissue,
              cleaning and hygiene supplies by the carton for offices, schools,
              clinics and commercial spaces.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener"
                aria-label="Pak Multilinks on Facebook"
                className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#4ad80a] hover:text-[#0b3a24]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Pak Multilinks on Instagram"
                className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#4ad80a] hover:text-[#0b3a24]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href={CONTACT.zoher.waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener"
                aria-label="Chat with Pak Multilinks on WhatsApp"
                className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-[#4ad80a] hover:text-[#0b3a24]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.9 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.2-.2-1.1-1.5-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.6c.2 0 .5.1.6.4l1 2.4c.1.1.1.3 0 .5-.1.2-.1.4-.3.6l-.6.7c-.1.1-.2.2-.1.5.1.2.4.8.9 1.3.6.7 1.2 1 2.1 1.4.3.1.4.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .1 0 .7-.2 1.3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links + Collections side by side on mobile */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            <div>
              <SectionHeading>Quick Links</SectionHeading>
              <ul className="mt-5 space-y-3">
                {QUICK_LINKS.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="inline-block py-1 text-sm text-white/75 transition-colors hover:text-[#4ad80a]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading>Collections</SectionHeading>
              <ul className="mt-5 space-y-3">
                {COLLECTIONS.map((c) => (
                  <li key={c}>
                    <Link
                      href={`/shop?category=${encodeURIComponent(c)}`}
                      className="inline-block py-1 text-sm text-white/75 transition-colors hover:text-[#4ad80a]"
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <SectionHeading>Get in Touch</SectionHeading>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#4ad80a]" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>
                  <span className="block text-white/60 text-xs uppercase tracking-wide">Phone / WhatsApp</span>
                  <a href={CONTACT.zoher.phoneHref} className="mt-0.5 inline-block font-semibold text-white hover:text-[#4ad80a] transition-colors">
                    {CONTACT.zoher.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#4ad80a]" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                <span>
                  <span className="block text-white/60 text-xs uppercase tracking-wide">Email</span>
                  <a href="mailto:zohair.shah8@gmail.com" className="mt-0.5 inline-block break-all text-white hover:text-[#4ad80a] transition-colors">
                    zohair.shah8@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#4ad80a]" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>
                  <span className="block text-white/60 text-xs uppercase tracking-wide">Visit Us</span>
                  <span className="mt-0.5 block leading-relaxed">
                    Shop No LG-9, Rehman Tower Main Market,
                    Gulberg II, Lahore
                  </span>
                </span>
              </li>
            </ul>
            <a
              href="/request-quote"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#4ad80a] px-7 py-3 text-sm font-bold text-[#0b3a24] transition-all hover:bg-[#3db009] w-full sm:w-auto"
            >
              Request Bulk Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; 2026 Pak Multilinks Hygiene. All rights reserved.
          </p>
          <nav className="flex items-center gap-1" aria-label="Legal">
            <Link href="/faq" className="px-3 py-2 hover:text-white transition-colors">FAQ</Link>
            <span className="text-white/25" aria-hidden="true">|</span>
            <Link href="/privacy" className="px-3 py-2 hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/25" aria-hidden="true">|</span>
            <Link href="/terms" className="px-3 py-2 hover:text-white transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
