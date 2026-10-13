"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home, Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_RAW, WHATSAPP_PHONE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring / console
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-bg-surface py-16 px-4">
      <div className="max-w-lg w-full text-center bg-white rounded-[var(--radius-xl)] p-8 sm:p-10 border border-border-light shadow-card">
        {/* Error Icon */}
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mx-auto mb-5">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold tracking-wider uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block mb-3">
          Error 500 — Temporary Issue
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-text mb-3 font-[family-name:var(--font-heading)]">
          Something went wrong
        </h1>

        <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-md mx-auto">
          We encountered an unexpected technical glitch. Don&apos;t worry — our medical team and 24x7 helpline remain fully active.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            className="w-full sm:w-auto min-w-[150px]"
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Try Again
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              className="w-full sm:w-auto min-w-[150px]"
            >
              <Home className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Immediate Support Box */}
        <div className="p-4 bg-primary-50/50 rounded-[var(--radius-lg)] border border-primary-100 text-left">
          <div className="text-xs font-bold text-text mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Need Immediate Healthcare Assistance?
          </div>
          <p className="text-xs text-text-secondary mb-3">
            Our clinical coordinators are available right now to book nurses, caretakers, or medical equipment.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white text-xs font-bold rounded-[var(--radius-sm)] hover:bg-primary-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call Helpline ({PHONE})
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hello Kreeta Nursing, I encountered an issue on your website and need healthcare assistance."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 text-white text-xs font-bold rounded-[var(--radius-sm)] hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>

        {error.digest && (
          <p className="text-[11px] text-text-muted mt-4">
            Reference code: <span className="font-mono">{error.digest}</span>
          </p>
        )}
      </div>
    </div>
  );
}
