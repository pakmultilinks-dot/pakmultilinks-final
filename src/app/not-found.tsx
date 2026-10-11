import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Pak Multilinks Hygiene",
  description: "The page you are looking for does not exist. Browse our wholesale hygiene products instead.",
};

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl font-bold text-[#114b2f]">404</p>
      <h1 className="text-2xl font-bold mt-4">Page Not Found</h1>
      <p className="text-gray-600 mt-3 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="px-7 py-3 bg-[#114b2f] text-white font-semibold rounded-full hover:bg-[#0b3a24]"
        >
          Go Home
        </Link>
        <Link
          href="/shop"
          className="px-7 py-3 bg-white text-[#114b2f] font-semibold rounded-full border-2 border-[#114b2f]/20 hover:border-[#114b2f]/40"
        >
          Shop Products
        </Link>
      </div>
    </main>
  );
}
