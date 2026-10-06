"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  CreditCard,
  CalendarCheck,
  Phone,
  MapPin,
  Stethoscope,
  HeartPulse,
} from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { PHONE, PHONE_RAW } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { MobileDrawer } from "./MobileDrawer";

/**
 * Main navigation bar with proper spacing, attractive typography,
 * functional mega-menus for Services, Equipment, and Cities.
 */
export function MainNav() {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener for sticky header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setMegaMenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMegaMenuEnter = (label: string) => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(label);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(null), 200);
  };

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-[100] bg-white transition-all duration-300",
          scrolled ? "shadow-md py-2.5" : "py-3.5 border-b border-border-light"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 logo-animate group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-border-light group-hover:shadow transition-shadow">
              <Image
                src="/images/brand/logo.jpeg"
                alt="Kreeta Nursing Service"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-extrabold text-primary leading-none tracking-tight font-[family-name:var(--font-heading)] flex items-center gap-1">
                Kreeta
              </span>
              <p className="text-[11px] font-semibold tracking-wider text-text-secondary uppercase mt-0.5">
                Nursing Service
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            ref={megaMenuRef}
          >
            {mainNavItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = megaMenuOpen === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleMegaMenuEnter(item.label)}
                  onMouseLeave={() => hasChildren && handleMegaMenuLeave()}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 xl:px-3.5 py-2 rounded-xl text-[14px] xl:text-[15px] font-semibold text-slate-700 transition-all duration-150 inline-flex items-center gap-1",
                      "hover:text-primary hover:bg-primary-50/80",
                      isOpen && "text-primary bg-primary-50"
                    )}
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu for Services */}
                  {hasChildren && isOpen && item.label === "Services" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 min-w-[580px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMegaMenuEnter(item.label)}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <Stethoscope className="w-5 h-5 text-primary" />
                          <span className="font-bold text-slate-800 text-sm">
                            Clinical & Home Nursing Services
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                          24x7 Available
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-primary-50 text-slate-600 hover:text-primary text-xs font-medium transition-colors group"
                            onClick={() => setMegaMenuOpen(null)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                        <p className="text-xs text-slate-500">
                          Need emergency assistance? Call{" "}
                          <strong className="text-primary">{PHONE}</strong>
                        </p>
                        <Link
                          href="/services"
                          className="text-xs font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1"
                          onClick={() => setMegaMenuOpen(null)}
                        >
                          All Services →
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Dropdown Menu for Equipment */}
                  {hasChildren && isOpen && item.label === "Equipment" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 min-w-[340px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMegaMenuEnter(item.label)}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
                        <HeartPulse className="w-4 h-4 text-primary" />
                        <span className="font-bold text-slate-800 text-xs">
                          Medical Equipment on Rent & Sale
                        </span>
                      </div>

                      <div className="space-y-1">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-primary-50 text-slate-700 hover:text-primary text-xs font-medium transition-colors"
                            onClick={() => setMegaMenuOpen(null)}
                          >
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dropdown Menu for Cities */}
                  {hasChildren && isOpen && item.label === "Cities" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 min-w-[280px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMegaMenuEnter(item.label)}
                      onMouseLeave={handleMegaMenuLeave}
                    >
                      <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-bold text-slate-800 text-xs">
                          Delhi NCR Service Coverage
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-50 text-slate-700 hover:text-primary text-xs font-medium transition-colors"
                            onClick={() => setMegaMenuOpen(null)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Quick 24x7 Call badge on 2XL displays */}
            <a
              href={`tel:${PHONE_RAW}`}
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-50 text-primary border border-primary-100 text-xs font-bold hover:bg-primary-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-secondary" />
              <span>{PHONE}</span>
            </a>

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-primary hover:bg-primary-50 transition-all hidden md:flex"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Cart Link with Live Item Counter Badge */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-primary hover:bg-primary-50 transition-all flex items-center justify-center"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5 text-slate-700 hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-accent text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md animate-scaleIn border-2 border-white pointer-events-none">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Book Now Button */}
            <Link href="/booking" className="hidden sm:block">
              <Button
                variant="accent"
                size="sm"
                icon={<CalendarCheck className="w-4 h-4" />}
                className="font-bold shadow-md shadow-accent/25 hover:shadow-lg rounded-xl"
              >
                Book Now
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-primary-50 transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-3 pt-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="search"
                placeholder="Search services, medical equipment, lab tests, cities..."
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all outline-none text-sm"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
