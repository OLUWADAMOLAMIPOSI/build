"use client";
import Link from "next/link";
import { useState } from "react";

const NavBarpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-yellow-600 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>Experienced & Trusted Construction Partner</span>
          <span>📞 +234 801 234 5678 | 📍 Lagos, Nigeria</span>
        </div>
      </div>
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">BuildPro</h1>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <Link href="/about" className="hover:text-yellow-400">About</Link>
            <a href="/service" className="hover:text-yellow-400">Services</a>
            <a href="/project" className="hover:text-yellow-400">Projects</a>
            <a href="/blog" className="hover:text-yellow-400">Blog</a>
            <a href="/contact" className="hover:text-yellow-400">Contact</a>
          </div>

          <a
            href="/contact"
            className="hidden md:inline-block bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400"
          >
            Get A Quote
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-blue-800 text-white flex flex-col gap-4 px-6 py-4">
            <a href="/" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-400">Home</a>
            <a href="/about" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-400">About</a>
            <a href="/service" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-400">Services</a>
            <a href="/project" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-400">Projects</a>
            <a href="/blog" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-400">Blog</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-400">Contact</a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400 text-center"
            >
              Get A Quote
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBarpage;
