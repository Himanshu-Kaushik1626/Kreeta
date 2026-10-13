"use client";

import React, { useEffect, useCallback } from "react";
import { MapPin, Navigation, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CITIES } from "@/lib/constants";
import { useCity } from "@/context/CityContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

/**
 * City selector popup shown on first visit.
 * Fully accessible and dismissible via backdrop click, Escape key, or Close button
 * to satisfy Google Ads and UX accessibility standards.
 */
export function CitySelector() {
  const { showCitySelector, setCity, dismissCitySelector } = useCity();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Trap focus / Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCitySelector) {
        dismissCitySelector();
      }
    },
    [showCitySelector, dismissCitySelector]
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
          {/* Backdrop (clickable to dismiss) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[var(--z-modal-backdrop)] cursor-pointer"
            onClick={dismissCitySelector}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-[var(--z-modal)] flex items-end md:items-center justify-center p-4 pointer-events-none">
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
                "bg-white shadow-popup border border-border-light w-full max-w-md pointer-events-auto relative",
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

              {/* Close button — always accessible for Google Ads compliance */}
              <button
                onClick={dismissCitySelector}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary-50 text-text-muted hover:text-text transition-colors z-10"
                aria-label="Close city selection"
              >
                <X className="w-4 h-4" />
              </button>

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
                      className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] border-2 border-border hover:border-primary hover:bg-primary-50 transition-all text-left group cursor-pointer"
                    >
                      <MapPin className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors shrink-0" />
                      <span className="font-medium text-text group-hover:text-primary transition-colors">
                        {city}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Use default / location */}
                <button
                  onClick={() => setCity("Delhi")}
                  className="flex items-center justify-center gap-2 w-full mt-4 py-3 text-sm text-primary hover:text-primary-dark transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Delhi NCR (Default Location)</span>
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
