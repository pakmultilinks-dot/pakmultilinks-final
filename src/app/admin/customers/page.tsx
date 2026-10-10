"use client";

export default function AdminCustomers() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-sm text-gray-600">Business accounts and customers</p>
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
        </div>
        <h3 className="mt-4 font-semibold text-lg">No customers yet</h3>
        <p className="text-sm text-gray-600 mt-2">Business account requests will appear here.</p>
      </div>
    </div>
  );
}
