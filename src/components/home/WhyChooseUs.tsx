"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  RefreshCw,
  UserCheck,
  IndianRupee,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Police-Verified Staff",
    description: "Every nurse, caretaker, and therapist undergoes a thorough police verification and background check before joining our team.",
  },
  {
    icon: UserCheck,
    title: "Trained & Experienced",
    description: "Our healthcare professionals hold valid certifications and have a minimum of one year of hands-on clinical experience.",
  },
  {
    icon: Clock,
    title: "Available 24 Hours, 7 Days",
    description: "Day or night, weekday or holiday — our team is ready to serve you across Delhi NCR, whenever you need us.",
  },
  {
    icon: RefreshCw,
    title: "Replacement Guarantee",
    description: "Not satisfied with the assigned professional? We offer a free, hassle-free replacement within 24 hours.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. Our pricing is upfront and competitive, with flexible options for every budget.",
  },
  {
    icon: Headphones,
    title: "Dedicated Care Coordinator",
    description: "A personal care coordinator manages your case, ensures quality, and is just a phone call away for any concern.",
  },
];

/**
 * Why Choose Us section with feature cards.
 */
export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Why Kreeta"
          title="Why Families Trust Us"
          subtitle="We go beyond just providing staff. We build a reliable healthcare ecosystem around your family."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex gap-4 p-6 rounded-[var(--radius-lg)] border border-border-light hover:border-primary-100 hover:bg-primary-50/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-text mb-1 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
