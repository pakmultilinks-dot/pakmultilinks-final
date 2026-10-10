"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper auth
    if (password === "pakmultilinks2024") {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b3a24] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0b3a24]">Admin Login</h1>
          <p className="text-gray-600 mt-2 text-sm">Pak Multilinks Hygiene</p>
        </div>
        <form onSubmit={handleLogin} className="mt-8">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#114b2f]"
            placeholder="Enter admin password"
            required
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-[#114b2f] text-white font-semibold rounded-lg hover:bg-[#0b3a24] transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
