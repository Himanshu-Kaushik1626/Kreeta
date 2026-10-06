"use client";

import React from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { PHONE_RAW, WHATSAPP_URL } from "@/lib/constants";

/**
 * Mobile bottom bar with Call, WhatsApp, and Book buttons.
 * Fixed at the bottom of the screen on mobile only.
 */
export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-white border-t border-border shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-border-light">
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex flex-col items-center justify-center py-3 gap-1 text-primary hover:bg-primary-50 transition-colors active:bg-primary-100"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-[#25D366] hover:bg-green-50 transition-colors active:bg-green-100"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href="/booking"
          className="flex flex-col items-center justify-center py-3 gap-1 text-accent hover:bg-orange-50 transition-colors active:bg-orange-100"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Book</span>
        </a>
      </div>
    </div>
  );
}
