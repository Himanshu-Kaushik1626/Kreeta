"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Testimonials carousel with autoplay, pause on hover, and swipe.
 */
export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          badge="Patient Stories"
          title="What Families Say About Us"
          subtitle="Real experiences from real families across Delhi NCR."
        />

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative bg-white rounded-[var(--radius-xl)] shadow-card border border-border-light p-8 md:p-10">
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-primary-100 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-border"
                      )}
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-lg md:text-xl text-text leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-bold text-text">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.service} · {testimonial.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-primary-50 hover:border-primary transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:bg-primary-50 hover:border-primary transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === current
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary-200"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
