"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Story", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Artists", href: "#stylists" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-luxury-black/95 py-4 shadow-2xl"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex flex-col items-center">
          <span className={`font-serif tracking-[0.4em] uppercase transition-all duration-500 ${scrolled ? "text-lg text-luxury-gold" : "text-2xl text-luxury-pearl"}`}>
            Ishrat&apos;s
          </span>
          <span className={`text-[8px] tracking-[0.6em] uppercase transition-all duration-500 font-sans mt-1 ${scrolled ? "opacity-0 h-0" : "opacity-60 text-luxury-pearl"}`}>
            Hair & Skin Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-pearl/70 hover:text-luxury-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-luxury-gold transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#booking"
            className={`px-8 py-2.5 border transition-all duration-700 tracking-[0.3em] text-[10px] uppercase font-bold ${
              scrolled 
                ? "border-luxury-gold bg-luxury-gold text-luxury-black hover:bg-transparent hover:text-luxury-gold" 
                : "border-luxury-pearl/20 text-luxury-pearl hover:border-luxury-gold hover:text-luxury-gold"
            }`}
          >
            Reservation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luxury-pearl flex flex-col gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-[1px] bg-luxury-pearl transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-[1px] bg-luxury-pearl transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-[1px] bg-luxury-pearl transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-luxury-black flex flex-col items-center justify-center space-y-10 md:hidden z-[-1]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl uppercase tracking-[0.5em] text-luxury-pearl hover:text-luxury-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-12 py-4 border border-luxury-gold text-luxury-gold tracking-[0.4em] text-xs uppercase"
            >
              Reservation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
