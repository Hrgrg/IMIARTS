"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("imiarts_admin", "loggedin");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fafd]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-[#222]">Admin Login</h1>
        <p className="mb-6 text-gray-500">Login to access the admin dashboard</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold text-[#222]">Username</label>
          <input type="text" className="border border-gray-300 rounded px-4 py-2 mb-2" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} required />
          <label className="font-semibold text-[#222]">Password</label>
          <input type="password" className="border border-gray-300 rounded px-4 py-2 mb-2" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-[#2196f3] text-white rounded px-4 py-2 font-semibold text-lg mt-2 hover:bg-[#1976d2] transition">Login</button>
        </form>
        <p className="text-gray-400 text-sm mt-6">Use <b>admin</b>/<b>admin123</b> for the default admin account</p>
      </div>
    </div>
  );
} 