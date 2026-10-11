"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PHONE, PHONE_RAW, WHATSAPP_PHONE } from "@/lib/constants";

/**
 * High-contrast final CTA banner before the footer with crisp, readable text and buttons.
 */
export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-[#0B2B30] to-teal-950 relative overflow-hidden border-t border-teal-900/40">
      {/* Decorative background glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          24x7 Immediate Doorstep Assistance Across Delhi NCR
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight font-[family-name:var(--font-heading)]">
          Your Family Deserves The Best Clinical Care
        </h2>
        <p className="text-base md:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Whether you need an ICU nurse for post-surgery recovery, a caring attendant for your elderly parents, or medical equipment delivered at your home — Kreeta is available 24 hours a day. Payment: <strong className="text-emerald-300">Cash on Delivery (COD) Only</strong>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/booking">
            <Button
              variant="accent"
              size="lg"
              iconRight={<ArrowRight className="w-5 h-5" />}
              className="font-bold shadow-lg shadow-accent/30 rounded-xl"
            >
              Book a Service
            </Button>
          </Link>

          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white text-slate-900 hover:bg-slate-100 hover:text-primary transition-all duration-200 shadow-lg"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span>Call {PHONE}</span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hi Kreeta Nursing Service, I want to inquire about home healthcare services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-base bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-200 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
