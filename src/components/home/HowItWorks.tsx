"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Users, PlayCircle, HeadphonesIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Request",
    description: "Share your care needs through our booking form, phone call, or WhatsApp. It takes less than 2 minutes.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Assessment & Matching",
    description: "Our care coordinator evaluates your requirements and matches you with the ideal healthcare professional.",
    color: "bg-secondary",
  },
  {
    icon: PlayCircle,
    title: "Service Starts",
    description: "Your assigned nurse, caretaker, or therapist arrives at the scheduled time, fully prepared and equipped.",
    color: "bg-accent",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "We provide continuous supervision, progress reports, seamless replacements, and 24x7 helpline support.",
    color: "bg-primary-dark",
  },
];

/**
 * How it Works section with 4-step process.
 */
export function HowItWorks() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          badge="Simple Process"
          title="How It Works"
          subtitle="Getting professional healthcare at home is simple. Here is how we make it happen."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}

              {/* Step number */}
              <div className="relative z-10 mx-auto mb-5">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-border rounded-full flex items-center justify-center text-xs font-bold text-text">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
