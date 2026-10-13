"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Send, HeartPulse, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { WHATSAPP_PHONE, WHATSAPP_URL, CITIES } from "@/lib/constants";
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
 * "Need a Service?" lead-generation popup.
 * Shows after 25s on first visit if no lead form has been cancelled or submitted.
 * Once cancelled or submitted, it is permanently silenced across all sessions.
 */
export function NeedServicePopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const dismiss = useCallback(() => {
    setShow(false);
    releaseLeadPopup("needservice");
    // Permanently suppress all lead popups once user cancels
    suppressAllLeadForms(false);
  }, []);

  useEffect(() => {
    // If already suppressed (cancelled or submitted), do not attach timers
    if (isLeadFormSuppressed()) {
      return;
    }

    // Delay 25s before showing
    const timer = setTimeout(() => {
      if (claimLeadPopup("needservice")) {
        setShow(true);
      }
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setError("");

    // Build WhatsApp message
    const waMessage = [
      `🏥 *New Service Inquiry — Kreeta Nursing Service*`,
      ``,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone}`,
      service ? `*Service:* ${service}` : "",
      city ? `*City:* ${city}` : "",
      message ? `*Message:* ${message}` : "",
      ``,
      `_Sent from kreetanursingservice.com_`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[500] cursor-pointer"
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-[501] flex items-end md:items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={
                isMobile
                  ? { y: "100%", opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              animate={
                isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }
              }
              exit={
                isMobile
                  ? { y: "100%", opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="needservice-title"
              className={cn(
                "bg-white shadow-2xl w-full max-w-[500px] relative overflow-hidden pointer-events-auto",
                isMobile
                  ? "rounded-t-[var(--radius-xl)] max-h-[90vh] overflow-y-auto"
                  : "rounded-[var(--radius-xl)]"
              )}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0E7C86] via-[#4CAF82] to-[#F28C38]" />

              {/* Drag handle on mobile */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-gray-300 rounded-full" />
                </div>
              )}

              {/* Close button — easy to dismiss */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 text-gray-500 hover:text-gray-800"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 md:p-8">
                {!submitted ? (
                  <>
                    {/* Header with logo */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0">
                        <Image
                          src="/images/brand/logo.jpeg"
                          alt="Kreeta Nursing Service"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2
                          id="needservice-title"
                          className="text-xl font-bold text-text font-[family-name:var(--font-heading)]"
                        >
                          Need a Healthcare Service?
                        </h2>
                        <p className="text-sm text-text-secondary">
                          Fill in your details — our care coordinator will reach out!
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                      />

                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="Mobile Number (10 Digits) *"
                          value={phone}
                          onChange={(e) =>
                            setPhone(
                              e.target.value.replace(/\D/g, "").slice(0, 10)
                            )
                          }
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all appearance-none text-sm"
                        >
                          <option value="">Select Service</option>
                          {services.map((s) => (
                            <option key={s.id} value={s.shortTitle}>
                              {s.shortTitle}
                            </option>
                          ))}
                        </select>

                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all appearance-none text-sm"
                        >
                          <option value="">Select City</option>
                          {CITIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>

                      <textarea
                        placeholder="Brief requirement notes (optional)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                      />

                      {error && (
                        <p className="text-sm text-error">{error}</p>
                      )}

                      <Button
                        type="submit"
                        variant="accent"
                        fullWidth
                        size="lg"
                        icon={<Send className="w-4 h-4" />}
                      >
                        Send via WhatsApp
                      </Button>
                    </form>

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[#25D366] hover:underline font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat directly
                      </a>
                      <button
                        onClick={dismiss}
                        className="text-sm text-text-muted hover:text-text transition-colors cursor-pointer"
                      >
                        Don&apos;t show again
                      </button>
                    </div>

                    <p className="mt-3 text-[11px] text-text-muted text-center">
                      Your details are sent directly to our team for quick
                      response. We respect your privacy.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HeartPulse className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      Thank you, <strong>{name}</strong>. Your inquiry has been
                      sent to our care coordinator via WhatsApp.
                    </p>
                    <p className="text-sm text-text-secondary mb-6">
                      We will contact you within <strong>15 minutes</strong>.
                    </p>
                    <button
                      onClick={dismiss}
                      className="text-sm text-primary font-semibold hover:underline cursor-pointer"
                    >
                      Close this window
                    </button>
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
