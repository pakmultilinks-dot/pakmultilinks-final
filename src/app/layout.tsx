import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pak Multilinks Hygiene | Wholesale Hygiene Supplies Lahore",
    template: "%s | Pak Multilinks Hygiene",
  },
  description:
    "Wholesale tissue, hygiene and cleaning supplies by the carton in Lahore, Pakistan. Trusted supplier for offices, schools, clinics, restaurants and businesses.",
  keywords: ["wholesale tissue Lahore", "hygiene supplies Pakistan", "cleaning products wholesale", "tissue paper bulk", "Pak Multilinks"],
  openGraph: {
    type: "website",
    siteName: "Pak Multilinks Hygiene",
    title: "Pak Multilinks Hygiene | Wholesale Hygiene Supplies Lahore",
    description: "Wholesale tissue, hygiene and cleaning supplies by the carton. Your hygiene partner.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
