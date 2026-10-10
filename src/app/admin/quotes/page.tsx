"use client";

import { useState, useEffect } from "react";

interface Quote {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}

const STORAGE_KEY = "admin_quotes";

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setQuotes(JSON.parse(stored));
    } catch {}
  }, []);

  const handleDelete = (id: string) => {
    const updated = quotes.filter((q) => q.id !== id);
    setQuotes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-sm text-gray-600">{quotes.length} quote requests</p>

      {quotes.length === 0 ? (
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-lg">No quote requests</h3>
          <p className="text-sm text-gray-600 mt-2">Quote form submissions will appear here.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {quotes.map((q) => (
            <div key={q.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{q.name}</h3>
                  <p className="text-sm text-gray-600">{q.email} · {q.phone}</p>
                  <p className="text-xs text-gray-500 mt-1">{q.date}</p>
                </div>
                <button onClick={() => handleDelete(q.id)} className="px-3 py-1.5 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100">Delete</button>
              </div>
              <p className="text-sm text-gray-700 mt-3 bg-gray-50 rounded-lg p-3">{q.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
