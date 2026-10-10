"use client";

export default function AdminDeals() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-sm text-gray-600">Manage promotional deals and banners</p>
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          </svg>
        </div>
        <h3 className="mt-4 font-semibold text-lg">Deals management</h3>
        <p className="text-sm text-gray-600 mt-2">Deal banners are managed via the <code className="bg-gray-100 px-1 rounded">public/images/</code> folder.</p>
      </div>
    </div>
  );
}
