"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { City } from "@/lib/constants";

interface CityContextType {
  selectedCity: City | null;
  setCity: (city: City) => void;
  showCitySelector: boolean;
  setShowCitySelector: (show: boolean) => void;
  dismissCitySelector: () => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [showCitySelector, setShowCitySelector] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kreeta-city");
      if (saved) {
        setSelectedCity(saved as City);
      } else {
        // Show city selector on first visit after a short delay
        const timer = setTimeout(() => setShowCitySelector(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage access fallback
    }
  }, []);

  const setCity = useCallback((city: City) => {
    setSelectedCity(city);
    try {
      localStorage.setItem("kreeta-city", city);
    } catch {}
    setShowCitySelector(false);
  }, []);

  const dismissCitySelector = useCallback(() => {
    try {
      const saved = localStorage.getItem("kreeta-city");
      if (!saved) {
        localStorage.setItem("kreeta-city", "Delhi");
        setSelectedCity("Delhi");
      }
    } catch {}
    setShowCitySelector(false);
  }, []);

  return (
    <CityContext.Provider
      value={{ selectedCity, setCity, showCitySelector, setShowCitySelector, dismissCitySelector }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
}
