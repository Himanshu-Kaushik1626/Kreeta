"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ChevronDown, ChevronRight, Phone, MapPin, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavItems } from "@/data/navigation";
import { PHONE, PHONE_RAW } from "@/lib/constants";
import { useCity } from "@/context/CityContext";
import { useCart } from "@/context/CartContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Mobile slide-in navigation drawer.
 */
export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const { selectedCity, setShowCitySelector } = useCity();
  const { cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-overlay z-[200] lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[201] lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border-light">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/images/brand/logo.jpeg"
                    alt="Kreeta"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-primary">Kreeta</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-[var(--radius-md)] hover:bg-primary-50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>

            {/* City & Phone */}
            <div className="p-4 space-y-2 border-b border-border-light">
              <button
                onClick={() => {
                  setShowCitySelector(true);
                  onClose();
                }}
                className="flex items-center gap-2 w-full p-3 rounded-[var(--radius-md)] bg-primary-50 text-primary text-sm font-medium"
              >
                <MapPin className="w-4 h-4" />
                <span>{selectedCity || "Select your city"}</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </button>
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center gap-2 w-full p-3 rounded-[var(--radius-md)] bg-accent/10 text-accent text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE}</span>
              </a>
            </div>

            {/* Nav Links */}
            <div className="p-4 space-y-1">
              {mainNavItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full p-3 rounded-[var(--radius-md)] text-text hover:bg-primary-50 hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            expandedItem === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-1 space-y-0.5">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="block p-2.5 pl-4 text-sm text-text-secondary hover:text-primary hover:bg-primary-50 rounded-[var(--radius-sm)] transition-colors border-l-2 border-border-light hover:border-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block p-3 rounded-[var(--radius-md)] font-medium text-text hover:bg-primary-50 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 mt-auto space-y-3 border-t border-border-light">
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center justify-between w-full py-3 px-4 bg-primary-50 text-primary border border-primary-200 font-bold rounded-[var(--radius-md)] hover:bg-primary-100 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> My Shopping Cart
                </span>
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-extrabold">
                  {cartCount} items
                </span>
              </Link>

              <Link
                href="/booking"
                onClick={onClose}
                className="block w-full py-3 px-4 bg-accent text-white text-center font-semibold rounded-[var(--radius-md)] hover:bg-accent-hover transition-colors"
              >
                Book Now
              </Link>
              <a
                href={`https://wa.me/918865888772?text=${encodeURIComponent("Hi Kreeta Nursing Service, I need home healthcare assistance.")}`}
                onClick={onClose}
                className="block w-full py-3 px-4 bg-emerald-600 text-white text-center font-semibold rounded-[var(--radius-md)] hover:bg-emerald-700 transition-colors text-sm"
              >
                💬 Chat on WhatsApp
              </a>
              <p className="text-[11px] text-center text-text-muted">
                💵 Payment: Cash on Delivery (COD) Only
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
