"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, QrCode, Crown, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenSignup?: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Photos", href: "/#gallery" },
  { name: "Amenities", href: "/amenities" },
  { name: "Schedule", href: "/schedule" },
  { name: "Calculator", href: "/calculator" },
  { name: "Leadership", href: "/trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar({ onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
      window.location.href = "/pricing";
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 px-4 md:px-8 py-4",
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-muted py-3 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden border border-primary/50 shadow-[0_0_15px_rgba(204,255,0,0.3)] bg-black p-0.5 shrink-0">
            <img 
              src="/images/gym/official_logo.jpg" 
              alt="Team Iron Fit Gym Official Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-none">
              Team Iron<span className="text-primary">Fit</span>
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary/90 mt-0.5">
              GYM &amp; Fitness
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-colors py-1 border-b-2",
                  isActive
                    ? "text-primary border-primary font-black"
                    : "text-white/70 border-transparent hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Member Access App Link */}
          <Link
            href="/member-pass"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary border border-muted hover:border-primary/50 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
          >
            <QrCode className="h-3.5 w-3.5 text-primary" /> QR Pass
          </Link>

          {/* Owner Protected Link */}
          <Link
            href="/owner-dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-primary hover:text-black transition-all"
          >
            <Lock className="h-3.5 w-3.5" /> Owner Portal
          </Link>

          <Button size="sm" className="text-black font-black uppercase tracking-wider px-5" onClick={handleJoinClick}>
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
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-muted p-6 flex flex-col gap-3 lg:hidden animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
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

          <Link
            href="/member-pass"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 bg-secondary text-primary font-bold uppercase tracking-wider rounded-xl border border-primary/40 text-sm mt-2"
          >
            <QrCode className="h-4 w-4" /> Member Digital QR Pass
          </Link>

          <Link
            href="/owner-dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 bg-primary text-black font-black uppercase tracking-wider rounded-xl text-sm"
          >
            <Lock className="h-4 w-4" /> Owner Sumit Khatri Private Portal
          </Link>
        </div>
      )}
    </nav>
  );
}
