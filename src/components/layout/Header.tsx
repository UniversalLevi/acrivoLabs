"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "glass-panel-strong border-b border-neon-cyan/20 shadow-neon-blue"
          : "bg-dark-950/50 backdrop-blur-md border-b border-dark-800/50"
      )}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Acrivo Labs"
                fill
                className="object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Acrivo Labs
            </span>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
