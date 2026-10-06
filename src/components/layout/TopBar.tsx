"use client";

import React from "react";
import { Phone, MapPin, User, ChevronDown } from "lucide-react";
import { PHONE, PHONE_RAW, CITIES } from "@/lib/constants";
import { useCity } from "@/context/CityContext";

/**
 * Top bar with phone number, city selector, and login link.
 */
export function TopBar() {
  const { selectedCity, setShowCitySelector } = useCity();

  return (
    <div className="bg-primary text-white text-sm hidden md:block">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 text-xs font-medium">
        {/* Left: Phone */}
        <a
          href={`tel:${PHONE_RAW}`}
          className="flex items-center gap-2 hover:text-primary-100 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{PHONE}</span>
        </a>

        {/* Center: Tagline or banner */}
        <p className="text-primary-100 text-xs hidden lg:block">
          Trusted Healthcare, At Your Doorstep — Available 24x7 Across Delhi NCR
        </p>

        {/* Right: City selector & COD notice */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowCitySelector(true)}
            className="flex items-center gap-1.5 hover:text-primary-100 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{selectedCity || "Select City"}</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          <div className="w-px h-4 bg-primary-light hidden sm:block" />
          <span className="text-primary-100 text-[11px] hidden sm:inline-block">
            💵 Cash on Delivery (COD) Only
          </span>
        </div>
      </div>
    </div>
  );
}
