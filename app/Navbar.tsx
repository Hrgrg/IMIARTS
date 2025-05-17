'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => { setMounted(true); }, []);
  return (
    <nav className="relative w-full bg-[#34486bcc] backdrop-blur-md text-white flex items-center justify-between py-4 z-30 sticky top-0 overflow-x-hidden px-4 md:px-16">
      {/* Logo left */}
      <Link href="/" className="font-bold text-2xl tracking-wide whitespace-nowrap">IMI ARTS</Link>
      {/* Desktop links */}
      <div className="hidden md:flex gap-10 items-center text-lg">
        <Link href="/" className="hover:underline whitespace-nowrap">Home</Link>
        <Link href="#about" className="hover:underline whitespace-nowrap">About</Link>
        <Link href="#services" className="hover:underline whitespace-nowrap">Services</Link>
        <Link href="#project-process" className="hover:underline whitespace-nowrap">Project</Link>
        <Link href="#contact" className="hover:underline whitespace-nowrap">Contact</Link>
        <Link href="/admin" className="bg-[#44b6e9] text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition text-lg whitespace-nowrap text-center">Admin</Link>
      </div>
      {/* Mobile: Admin button + Hamburger */}
      <div className="flex md:hidden items-center gap-2">
        <Link href="/admin" className="bg-[#44b6e9] text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition text-base whitespace-nowrap text-center">Admin</Link>
        <button
          className="ml-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => {
            setMenuOpen(v => !v);
          }}
        >
          {/* Hamburger icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>
      {/* Mobile menu dropdown rendered in portal */}
      {mounted && menuOpen && typeof window !== 'undefined' && createPortal(
        <div className="fixed top-0 left-0 w-full min-h-[300px] z-[9999] bg-[#34486bcc] backdrop-blur-md flex flex-col items-center gap-4 py-8 md:hidden animate-fade-in">
          {/* Close button */}
          <button
            className="absolute top-4 right-6 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <button className="hover:underline whitespace-nowrap text-lg" onClick={() => { setMenuOpen(false); router.push('/'); }}>Home</button>
          <button className="hover:underline whitespace-nowrap text-lg" onClick={() => { setMenuOpen(false); router.push('#about'); }}>About</button>
          <button className="hover:underline whitespace-nowrap text-lg" onClick={() => { setMenuOpen(false); router.push('#services'); }}>Services</button>
          <button className="hover:underline whitespace-nowrap text-lg" onClick={() => { setMenuOpen(false); router.push('#project-process'); }}>Project</button>
          <button className="hover:underline whitespace-nowrap text-lg" onClick={() => { setMenuOpen(false); router.push('#contact'); }}>Contact</button>
        </div>,
        window.document.body
      )}
    </nav>
  );
} 