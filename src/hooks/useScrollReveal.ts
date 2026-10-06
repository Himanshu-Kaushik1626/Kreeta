"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Scroll-reveal hook using IntersectionObserver.
 * Adds 'data-visible' attribute when element enters viewport.
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) {
      // If reduced motion, mark as visible immediately
      if (element) element.setAttribute("data-visible", "true");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.setAttribute("data-visible", "true");
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  return ref;
}
