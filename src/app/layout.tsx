import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import StoreChrome from "@/components/StoreChrome";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pakmultilinks.com"),
  title: {
    default: "Pak Multilinks Hygiene | Wholesale Hygiene Supplies Lahore",
    template: "%s | Pak Multilinks Hygiene",
  },
  description:
    "Pak Multilinks Hygiene is Lahore's trusted wholesale supplier of tissue, hygiene and cleaning products by the carton. Serving offices, schools, clinics, restaurants and businesses across Pakistan since day one. Your Hygiene Partner.",
  keywords: [
    "wholesale tissue Lahore",
    "hygiene supplies Pakistan",
    "cleaning products wholesale Lahore",
    "tissue paper bulk supplier",
    "Pak Multilinks",
    "corporate hygiene supplies",
    "disposable items wholesale",
    "Rose Petal wholesale",
    "office cleaning supplies Pakistan",
  ],
  authors: [{ name: "Pak Multilinks Hygiene" }],
  creator: "Pak Multilinks Hygiene",
  publisher: "Pak Multilinks Hygiene",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Pak Multilinks Hygiene",
    title: "Pak Multilinks Hygiene | Wholesale Hygiene Supplies Lahore",
    description: "Wholesale tissue, hygiene and cleaning supplies by the carton in Lahore, Pakistan. Trusted supplier for offices, schools, clinics, restaurants and businesses. Your Hygiene Partner.",
    url: "https://pakmultilinks.com",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1600,
        height: 536,
        alt: "Pak Multilinks Hygiene - Corporate Supplies",
      },
    ],
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pak Multilinks Hygiene | Wholesale Hygiene Supplies Lahore",
    description: "Wholesale tissue, hygiene and cleaning supplies by the carton. Your Hygiene Partner.",
    images: ["/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://pakmultilinks.com",
  },
  category: "Wholesale Hygiene Supplies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <CartProvider>
          <WishlistProvider>
            <StoreChrome>{children}</StoreChrome>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
