"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Stethoscope, MapPin, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Patients Served" },
  { icon: Stethoscope, value: 200, suffix: "+", label: "Healthcare Professionals" },
  { icon: MapPin, value: 6, suffix: "", label: "Cities Covered" },
  { icon: Star, value: 4.8, suffix: "/5", label: "Average Rating" },
];

/**
 * Stats counters section with animated numbers.
 */
export function StatsCounters() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center text-white"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl md:text-4xl font-bold mb-1 font-[family-name:var(--font-heading)]">
                {stat.value % 1 !== 0 ? (
                  // For decimal values like 4.8, don't animate
                  <span>{stat.value}{stat.suffix}</span>
                ) : (
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                )}
              </div>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
