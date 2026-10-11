"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function StoreChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="pb-28 lg:pb-0">
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </div>
      <CartDrawer />
      <MobileBottomBar />
    </>
  );
}
