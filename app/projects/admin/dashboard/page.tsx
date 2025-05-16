"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Demo: In-memory contact submissions and password (replace with backend in production)
const initialSubmissions = [
  {
    date: "May 12th, 2025 11:37 PM",
    name: "ANIE VARSHA IJ",
    email: "anievarsha@gmail.com",
    phone: "9345878075",
    service: "web",
    message: "please reply",
    status: "new",
  },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("submissions");
  const [submissions, setSubmissions] = useState([]);
  const [adminUser, setAdminUser] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passMsg, setPassMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("imiarts_admin") !== "loggedin") {
      router.push("/admin");
    }
    // Load submissions from localStorage
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("imiarts_contact_submissions") || "[]");
      setSubmissions(stored);
    }
  }, [router]);

  function handleMarkAsRead(idx: number) {
    setSubmissions(submissions => {
      const updated = submissions.map((s, i) => i === idx ? { ...s, status: "read" } : s);
      localStorage.setItem("imiarts_contact_submissions", JSON.stringify(updated));
      return updated;
    });
  }

  function handleLogout() {
    localStorage.removeItem("imiarts_admin");
    router.push("/admin");
  }

  function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPassMsg("");
    if (oldPass !== password) {
      setPassMsg("Current password is incorrect.");
      return;
    }
    if (newPass.length < 6) {
      setPassMsg("New password must be at least 6 characters.");
      return;
    }
    if (newPass !== confirmPass) {
      setPassMsg("New passwords do not match.");
      return;
    }
    setPassword(newPass);
    setOldPass(""); setNewPass(""); setConfirmPass("");
    setPassMsg("Password changed successfully!");
  }

  return (
    <div className="min-h-screen bg-[#f7fafd] p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#222]">Admin Dashboard</h1>
          <p className="text-gray-500">Logged in as {adminUser}</p>
        </div>
        <button onClick={handleLogout} className="border border-gray-300 rounded px-4 py-2 text-[#222] hover:bg-gray-100">Logout</button>
      </div>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("submissions")}
          className={`px-4 py-2 rounded bg-white border ${tab === "submissions" ? "border-[#2196f3] font-bold" : "border-gray-200"} flex items-center gap-2`}
        >
          Contact Submissions
          {submissions.some(s => s.status === "new") && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">{submissions.filter(s => s.status === "new").length} new</span>
          )}
        </button>
        <button onClick={() => setTab("settings")}
          className={`px-4 py-2 rounded bg-white border ${tab === "settings" ? "border-[#2196f3] font-bold" : "border-gray-200"}`}
        >Settings</button>
      </div>
      {tab === "submissions" && (
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-2 text-[#222]">Contact Form Submissions</h2>
          <p className="text-gray-500 mb-4">View and manage contact form submissions from your website</p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left">
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Phone</th>
                  <th className="py-2 px-4">Service</th>
                  <th className="py-2 px-4">Message</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, idx) => (
                  <tr key={idx} className={s.status === "new" ? "bg-green-100" : ""}>
                    <td className="py-2 px-4">{s.date}</td>
                    <td className="py-2 px-4 font-bold">{s.name}</td>
                    <td className="py-2 px-4">{s.email}</td>
                    <td className="py-2 px-4">{s.phone}</td>
                    <td className="py-2 px-4">{s.service}</td>
                    <td className="py-2 px-4">{s.message}</td>
                    <td className="py-2 px-4">
                      {s.status === "new" ? <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">New</span> : <span className="text-gray-400">Read</span>}
                    </td>
                    <td className="py-2 px-4">
                      {s.status === "new" && (
                        <button onClick={() => handleMarkAsRead(idx)} className="text-[#222] font-semibold hover:underline">Mark as Read</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab === "settings" && (
        <div className="bg-white rounded-xl shadow p-6 max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-[#222]">Change Password</h2>
          <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
            <input type="password" placeholder="Current Password" value={oldPass} onChange={e => setOldPass(e.target.value)} className="border border-gray-300 rounded px-4 py-2" required />
            <input type="password" placeholder="New Password" value={newPass} onChange={e => setNewPass(e.target.value)} className="border border-gray-300 rounded px-4 py-2" required />
            <input type="password" placeholder="Confirm New Password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} className="border border-gray-300 rounded px-4 py-2" required />
            {passMsg && <div className={`text-sm ${passMsg.includes("success") ? "text-green-600" : "text-red-500"}`}>{passMsg}</div>}
            <button type="submit" className="bg-[#2196f3] text-white rounded px-4 py-2 font-semibold text-lg mt-2 hover:bg-[#1976d2] transition">Change Password</button>
          </form>
        </div>
      )}
    </div>
  );
} 