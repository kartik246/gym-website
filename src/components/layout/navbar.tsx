"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenSignup?: () => void;
}

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Amenities", href: "#amenities" },
  { name: "Schedule", href: "#schedule" },
  { name: "Calculator", href: "#bmi-calc" },
  { name: "Coaches", href: "#trainers" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar({ onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinClick = () => {
    if (onOpenSignup) {
      onOpenSignup();
    } else {
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 px-4 md:px-8 py-4",
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-muted py-3 shadow-xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="text-2xl font-black uppercase tracking-tighter text-white">
            Power<span className="text-primary">Gym</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="text-black font-black uppercase tracking-wider px-6" onClick={handleJoinClick}>
            Join Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-muted p-6 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-widest text-white hover:text-primary py-2 border-b border-muted/40"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="w-full text-black font-black uppercase tracking-wider mt-2" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleJoinClick();
            }}
          >
            Join Now
          </Button>
        </div>
      )}
    </nav>
  );
}
