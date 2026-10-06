"use client";

import React, { useEffect, useCallback } from "react";
import { MapPin, Navigation, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CITIES, type City } from "@/lib/constants";
import { useCity } from "@/context/CityContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

/**
 * City selector popup shown on first visit.
 * Cannot be closed via backdrop click — must select a city.
 */
export function CitySelector() {
  const { showCitySelector, setCity, setShowCitySelector } = useCity();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Trap focus
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCitySelector) {
        // Allow Esc only if user has already selected a city before
        const saved = localStorage.getItem("kreeta-city");
        if (saved) setShowCitySelector(false);
      }
    },
    [showCitySelector, setShowCitySelector]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (showCitySelector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCitySelector]);

  return (
    <AnimatePresence>
      {showCitySelector && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-overlay backdrop-blur-sm z-[var(--z-modal-backdrop)]"
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-[var(--z-modal)] flex items-end md:items-center justify-center p-4">
            <motion.div
              initial={
                isMobile
                  ? { y: "100%", opacity: 1 }
                  : { scale: 0.96, opacity: 0 }
              }
              animate={
                isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }
              }
              exit={
                isMobile
                  ? { y: "100%", opacity: 1 }
                  : { scale: 0.96, opacity: 0 }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="city-selector-title"
              className={cn(
                "bg-white shadow-popup border border-border-light w-full max-w-md",
                isMobile
                  ? "rounded-t-[var(--radius-xl)] pb-safe"
                  : "rounded-[var(--radius-xl)]"
              )}
            >
              {/* Drag handle on mobile */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-border rounded-full" />
                </div>
              )}

              {/* Close button (only if already selected a city) */}
              {localStorage.getItem("kreeta-city") && (
                <button
                  onClick={() => setShowCitySelector(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-primary-50 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-text-muted" />
                </button>
              )}

              <div className="p-6 md:p-8">
                <h2
                  id="city-selector-title"
                  className="text-xl font-bold text-text mb-1 font-[family-name:var(--font-heading)]"
                >
                  Select your city
                </h2>
                <p className="text-sm text-text-secondary mb-6">
                  We will personalize services and availability for your
                  location.
                </p>

                {/* City grid */}
                <div className="grid grid-cols-2 gap-3">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => setCity(city)}
                      className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] border-2 border-border hover:border-primary hover:bg-primary-50 transition-all text-left group"
                    >
                      <MapPin className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors shrink-0" />
                      <span className="font-medium text-text group-hover:text-primary transition-colors">
                        {city}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Use location */}
                <button className="flex items-center justify-center gap-2 w-full mt-4 py-3 text-sm text-primary hover:text-primary-dark transition-colors">
                  <Navigation className="w-4 h-4" />
                  <span>Use my current location</span>
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
