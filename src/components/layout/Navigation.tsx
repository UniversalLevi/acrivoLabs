"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg",
                isActive
                  ? "text-neon-cyan"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <span className="absolute inset-0 bg-neon-cyan/10 rounded-lg border border-neon-cyan/30" />
              )}
              {!isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-200 group-hover:w-3/4" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-text-secondary hover:text-neon-cyan transition-colors rounded-lg hover:bg-dark-800/50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass-panel-strong border-b border-neon-cyan/20 md:hidden z-50 animate-slide-up">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-all duration-200 py-3 px-4 rounded-lg",
                    isActive
                      ? "text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30"
                      : "text-text-secondary hover:text-text-primary hover:bg-dark-800/50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4"
            >
              <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-950 font-semibold hover:shadow-neon-blue transition-all duration-200 transform hover:scale-[1.02]">
                Start a Project
              </button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
