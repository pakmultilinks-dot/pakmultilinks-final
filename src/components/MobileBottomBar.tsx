"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

import { CONTACT, DEFAULT_WA_MESSAGE } from "@/data/contact";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const { count, setDrawerOpen } = useCart();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>
      ),
    },
    {
      label: "Catalog",
      href: "/shop",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${CONTACT.zoher.waNumber}?text=${encodeURIComponent(DEFAULT_WA_MESSAGE)}`,
      external: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.9 1.3-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-3.9-4.7-4.1-.2-.2-1.1-1.5-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.6c.2 0 .5.1.6.4l1 2.4c.1.1.1.3 0 .5-.1.2-.1.4-.3.6l-.6.7c-.1.1-.2.2-.1.5.1.2.4.8.9 1.3.6.7 1.2 1 2.1 1.4.3.1.4.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .1 0 .7-.2 1.3z"/></svg>
      ),
    },
    {
      label: "Cart",
      action: () => setDrawerOpen(true),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>
      ),
      badge: count,
    },
    {
      label: "Call",
      href: CONTACT.zoher.phoneHref,
      external: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      ),
    },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-5">
        {items.map((item) => {
          const isActive = item.href === pathname;
          const content = (
            <>
              <span className={`relative ${isActive ? "text-[#114b2f]" : "text-gray-500"}`}>
                {item.icon}
                {item.badge != null && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#114b2f] text-white text-[9px] font-bold rounded-full min-w-4 h-4 flex items-center justify-center px-0.5">
                    {item.badge}
                  </span>
                )}
              </span>
              <span className={`text-[10px] font-medium mt-0.5 ${isActive ? "text-[#114b2f]" : "text-gray-500"}`}>
                {item.label}
              </span>
            </>
          );

          const className = "flex flex-col items-center justify-center py-2.5";

          if (item.action) {
            return (
              <button key={item.label} onClick={item.action} className={className} aria-label={item.label}>
                {content}
              </button>
            );
          }

          if (item.external) {
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noopener" className={className} aria-label={item.label}>
                {content}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href!} className={className} aria-label={item.label}>
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
