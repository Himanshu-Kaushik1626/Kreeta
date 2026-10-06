"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { City } from "@/lib/constants";

interface CityContextType {
  selectedCity: City | null;
  setCity: (city: City) => void;
  showCitySelector: boolean;
  setShowCitySelector: (show: boolean) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [showCitySelector, setShowCitySelector] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("kreeta-city");
    if (saved) {
      setSelectedCity(saved as City);
    } else {
      // Show city selector on first visit after a short delay
      const timer = setTimeout(() => setShowCitySelector(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const setCity = useCallback((city: City) => {
    setSelectedCity(city);
    localStorage.setItem("kreeta-city", city);
    setShowCitySelector(false);
  }, []);

  return (
    <CityContext.Provider
      value={{ selectedCity, setCity, showCitySelector, setShowCitySelector }}
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
