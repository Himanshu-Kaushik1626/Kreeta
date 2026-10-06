"use client";

import React, { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cookie consent banner at the bottom of the page.
 */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kreeta-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("kreeta-cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("kreeta-cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 md:bottom-4 left-0 md:left-4 right-0 md:right-4 z-50 md:max-w-lg"
        >
          <div className="bg-white border border-border shadow-xl rounded-t-[var(--radius-lg)] md:rounded-[var(--radius-lg)] p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-text leading-relaxed">
                We use cookies to improve your experience.{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline hover:text-primary-dark"
                >
                  Privacy Policy
                </Link>
              </p>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={accept}
                  className="px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-[var(--radius-sm)] hover:bg-primary-light transition-colors"
                >
                  Accept
                </button>
                <button
                  onClick={decline}
                  className="px-4 py-1.5 text-sm text-text-secondary hover:text-text transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
