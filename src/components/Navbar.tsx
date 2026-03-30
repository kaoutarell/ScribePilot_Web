"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/scribepilot-logo.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

const legalPaths = ["/consent", "/eula"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isLegalPage = legalPaths.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center text-xl">
          <Image src={logo} alt="ScribePilot" height={50} priority />
          <p className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">ScribePilot</p>
        </a>

        {/* Center links — desktop (hidden on legal pages) */}
        {!isLegalPage && (
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Right — desktop */}
        <div className="hidden md:flex items-center gap-3">
          {isLegalPage ? (
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary border border-border hover:border-border-hover px-4 py-2 rounded-lg transition-all group"
            >
              <svg
                width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform group-hover:-translate-x-0.5"
              >
                <path d="M15 8H1M7 2L1 8l6 6" />
              </svg>
              Back to home
            </a>
          ) : (
            <a
              href="#"
              className="text-sm font-medium bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </a>
          )}
        </div>

        {/* Mobile hamburger (hidden on legal pages) / back button */}
        {isLegalPage ? (
          <a
            href="/"
            className="md:hidden inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 8H1M7 2L1 8l6 6" />
            </svg>
            Home
          </a>
        ) : (
          <button
            className="md:hidden text-text-secondary hover:text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile menu (only on non-legal pages) */}
      {!isLegalPage && mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border px-6 pb-6">
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <a
                href="#"
                className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-lg text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
