"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * City chips section linking to city landing pages.
 */
export function CityChips() {
  return (
    <section className="section-padding bg-white" id="cities">
      <div className="container-custom">
        <SectionHeading
          badge="Service Areas"
          title="Serving Across Delhi NCR"
          subtitle="We deliver professional home healthcare services to all major cities in the National Capital Region."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link
                href={`/city/${city.slug}`}
                className="group flex flex-col items-center gap-3 p-6 rounded-[var(--radius-lg)] border-2 border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-center"
              >
                <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                <span className="font-semibold text-text group-hover:text-white transition-colors">
                  {city.name}
                </span>
                <span className="text-xs text-text-muted group-hover:text-white/70 transition-colors flex items-center gap-1">
                  Explore
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
