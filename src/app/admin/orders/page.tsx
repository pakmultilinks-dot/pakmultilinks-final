"use client";

export default function AdminOrders() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-sm text-gray-600">Customer orders from the website</p>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </div>
        <h3 className="mt-4 font-semibold text-lg">No orders yet</h3>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
          Orders placed through the website will appear here. Customers currently order via WhatsApp or the quote form.
        </p>
      </div>
    </div>
  );
}
