"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Active link logic — work case study pages count as /work active
  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "linear-gradient(90deg, #F9F7F4 0%, #F5EDE8 50%, #F9F7F4 100%)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
      >
        <div className="content-wrapper flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a
            href="/"
            className="text-[18px] font-semibold no-underline transition-colors duration-200"
            style={{
              fontFamily: "var(--font-display)",
              color: scrolled ? "var(--color-accent)" : "var(--color-text)",
            }}
          >
            Fasih Ahmad Khan
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium no-underline transition-colors duration-200"
                style={{
                  color: isActive(link.href)
                    ? "var(--color-accent)"
                    : "var(--color-muted)",
                  borderBottom: isActive(link.href)
                    ? "1px solid var(--color-accent)"
                    : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </a>
            ))}
            <Button href="/contact" variant="ghost">
              Get Your Site Built
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center cursor-pointer"
            style={{ color: "var(--color-text)" }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {/* Drawer header */}
          <div
            className="content-wrapper flex items-center justify-between h-[64px]"
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            <a
              href="/"
              className="text-[18px] font-semibold no-underline"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
              }}
            >
              Fasih Ahmad Khan
            </a>
            <button
              className="cursor-pointer"
              style={{
                color: "var(--color-text)",
                background: "none",
                border: "none",
              }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-[8px] p-[32px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] font-medium no-underline py-[8px] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isActive(link.href)
                    ? "var(--color-accent)"
                    : "var(--color-text)",
                  borderBottom: isActive(link.href)
                    ? "1px solid var(--color-accent)"
                    : "1px solid transparent",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: "32px" }}>
              <Button href="/contact" variant="filled">
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
