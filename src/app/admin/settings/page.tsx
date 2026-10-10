"use client";

import { useState } from "react";
import { CONTACT } from "@/data/contact";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-sm text-gray-600">Store settings</p>

      <form onSubmit={handleSave} className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Store Name</label>
          <input type="text" defaultValue="Pak Multilinks Hygiene" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
          <input type="text" defaultValue={CONTACT.zoher.waNumber} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contact Email</label>
          <input type="email" defaultValue="info@pakmultilinks.com" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea defaultValue="Lahore, Pakistan" rows={2} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]" />
        </div>

        <button type="submit" className="w-full py-3 bg-[#114b2f] text-white font-medium rounded-lg hover:bg-[#0b3a24]">
          Save Settings
        </button>
        {saved && <p className="text-sm text-green-600 text-center">Settings saved!</p>}
      </form>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-semibold text-amber-900 text-sm">Change Admin Password</h3>
        <p className="text-sm text-amber-800 mt-1">
          The admin password is set via the <code className="bg-amber-100 px-1 rounded">ADMIN_PASSWORD</code> environment variable.
          Update it in <code className="bg-amber-100 px-1 rounded">.env.local</code> (local) or Vercel dashboard (production).
        </p>
      </div>
    </div>
  );
}
