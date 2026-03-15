"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Clubs & Staffs", href: "/clubs" },
  { label: "Athlètes", href: "/athletes" },
  { label: "Entreprises", href: "/executive" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => setOpen(false), []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, closeMenu]);

  return (
    <nav role="navigation" aria-label="Navigation principale" className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded border border-cyan-accent/50 flex items-center justify-center group-hover:glow-border transition-all">
            <span className="text-cyan-accent font-bold text-base">PR</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-text-primary font-semibold tracking-wide text-xl">
              <span className="text-cyan-accent font-bold">PR</span>ofiling
            </span>
            <span className="text-gray-400 text-[11px] font-light tracking-[0.2em] uppercase">
              Personal Record
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const isActive = !isAnchor && pathname === link.href;
            const Component = isAnchor ? "a" : Link;

            return (
              <Component
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-cyan-accent"
                    : "text-text-secondary hover:text-cyan-accent"
                }`}
              >
                {link.label}
              </Component>
            );
          })}
          <a
            href="#contact"
            className="bg-cyan-accent text-bg-primary px-5 py-2 rounded text-sm font-semibold hover:bg-cyan-accent/90 transition-colors"
          >
            Réserver
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-bg-secondary/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const isActive = !isAnchor && pathname === link.href;
            const Component = isAnchor ? "a" : Link;

            return (
              <Component
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive
                    ? "text-cyan-accent"
                    : "text-text-secondary hover:text-cyan-accent"
                }`}
              >
                {link.label}
              </Component>
            );
          })}
          <a
            href="#contact"
            onClick={closeMenu}
            className="block bg-cyan-accent text-bg-primary px-5 py-2.5 rounded text-sm font-semibold text-center mt-3"
          >
            Réserver
          </a>
        </div>
      )}
    </nav>
  );
}
