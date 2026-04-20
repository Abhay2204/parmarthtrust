"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HandHeart, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "News & Impact", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-14 h-14 overflow-hidden rounded-full border border-gray-100">
              <Image
                src="/images/logo.jpg"
                alt="Parmarth Trust Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary-text leading-tight">
                Parmarth Trust
              </span>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Care & Rehabilitation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-bold text-secondary-text hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/donate" 
              className="bg-accent hover:bg-[#c94d25] text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center gap-2 shadow-sm"
            >
              <HandHeart size={18} />
              Help Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary-text hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="flex flex-col items-center gap-6 py-10 px-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-primary-text hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/donate"
              onClick={() => setIsMobileMenuOpen(false)} 
              className="w-full text-center bg-accent hover:bg-[#c94d25] text-white px-8 py-4 rounded-xl font-bold mt-4 flex justify-center items-center gap-2"
            >
              <HandHeart size={20} />
              Help Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
