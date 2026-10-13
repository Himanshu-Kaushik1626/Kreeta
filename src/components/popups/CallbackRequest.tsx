"use client";

import React, { useState, useEffect, useCallback } from "react";
import { X, Phone, MessageCircle, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { WHATSAPP_PHONE, WHATSAPP_URL } from "@/lib/constants";
import { isValidPhone, cn } from "@/lib/utils";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import {
  isLeadFormSuppressed,
  suppressAllLeadForms,
  claimLeadPopup,
  releaseLeadPopup,
} from "@/lib/popupState";

/**
 * Callback request popup.
 * Triggers on desktop exit-intent or long dwell time (50s).
 * Once cancelled or submitted, it is permanently silenced across all sessions.
 */
export function CallbackRequest() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const dismiss = useCallback(() => {
    setShow(false);
    releaseLeadPopup("callback");
    // Permanently suppress all lead popups once user cancels
    suppressAllLeadForms(false);
  }, []);

  useEffect(() => {
    // If already suppressed (cancelled or submitted), do not attach timers
    if (isLeadFormSuppressed()) {
      return;
    }

    // Wait 15s before listening for exit-intent or delayed popup
    const delayTimer = setTimeout(() => {
      if (isLeadFormSuppressed()) return;

      // 50-second timer fallback
      const showTimer = setTimeout(() => {
        if (!isLeadFormSuppressed() && claimLeadPopup("callback")) {
          setShow(true);
        }
      }, 50000);

      // Exit intent on desktop only
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !isLeadFormSuppressed()) {
          if (claimLeadPopup("callback")) {
            setShow(true);
          }
        }
      };

      if (!isMobile) {
        document.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        clearTimeout(showTimer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, 15000);

    return () => clearTimeout(delayTimer);
  }, [isMobile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Bot detected

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setError("");

    // Build WhatsApp message
    const waMessage = [
      `📞 *Callback Request — Kreeta Nursing Service*`,
      ``,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone}`,
      service ? `*Service:* ${service}` : "",
      ``,
      `_Please call me back._`,
      `_Sent from kreetanursingservice.com_`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
    setLoading(false);
    // Permanently suppress all lead popups once user submits
    suppressAllLeadForms(true);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && show) dismiss();
    },
    [show, dismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[var(--z-modal-backdrop)] cursor-pointer"
            onClick={dismiss}
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
              aria-labelledby="callback-title"
              className={cn(
                "bg-white shadow-popup border border-border-light w-full max-w-[440px] pointer-events-auto relative",
                isMobile
                  ? "rounded-t-[var(--radius-xl)]"
                  : "rounded-[var(--radius-xl)]"
              )}
            >
              {/* Drag handle */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-border rounded-full" />
                </div>
              )}

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary-50 text-text-muted hover:text-text transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 md:p-8">
                {!submitted ? (
                  <>
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h2
                      id="callback-title"
                      className="text-xl font-bold text-text mb-1 font-[family-name:var(--font-heading)]"
                    >
                      Need help choosing care?
                    </h2>
                    <p className="text-sm text-text-secondary mb-6">
                      Share your number and our clinical coordinator will call you back shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={phone}
                          onChange={(e) =>
                            setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-surface text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        />
                      </div>

                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-surface text-text focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all appearance-none text-sm"
                      >
                        <option value="">Select a service (optional)</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.shortTitle}>
                            {s.shortTitle}
                          </option>
                        ))}
                      </select>

                      {error && (
                        <p className="text-sm text-error">{error}</p>
                      )}

                      <Button
                        type="submit"
                        variant="accent"
                        fullWidth
                        loading={loading}
                        icon={<Phone className="w-4 h-4" />}
                      >
                        Request Callback via WhatsApp
                      </Button>
                    </form>

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#25D366] hover:underline"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </a>
                      <button
                        onClick={dismiss}
                        className="text-sm text-text-muted hover:text-text transition-colors cursor-pointer"
                      >
                        Don&apos;t show again
                      </button>
                    </div>

                    <p className="mt-4 text-xs text-text-muted">
                      By requesting a call, you agree to our{" "}
                      <a href="/privacy" className="underline hover:text-primary">
                        Privacy Policy
                      </a>
                      . Your information is confidential.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">
                      Thank you, {name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-6">
                      Our care coordinator will call you within 15 minutes.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#25D366] font-semibold hover:underline"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Or chat with us on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
