"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Enhanced Services Grid on the home page with high-res photos,
 * attractive hover scaling, 'Charges: On Call' badge, and seamless navigation.
 */
export function ServicesGrid() {
  // Show first 8 high-demand services on the home page
  const displayServices = services.slice(0, 8);

  return (
    <section className="section-padding bg-slate-50/70" id="services">
      <div className="container-custom">
        <SectionHeading
          badge="Our Clinical & Home Services"
          title="Comprehensive Home Healthcare Solutions"
          subtitle="From 24x7 critical nursing and elderly support to home ICU setup and physiotherapy — verified clinical care delivered to your doorstep across Delhi NCR."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, i) => {
            const IconComponent =
              (LucideIcons as unknown as Record<
                string,
                React.ComponentType<{ className?: string }>
              >)[service.icon] || LucideIcons.Heart;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/50 relative"
                >
                  {/* Service Photo with Zoom on Hover */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Gradient Overlay for photo contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge on Photo */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-primary backdrop-blur-sm shadow-sm">
                        {service.category}
                      </span>
                    </div>

                    {/* Floating Icon */}
                    <div className="absolute bottom-3 right-3 z-10 w-10 h-10 rounded-xl bg-primary text-white shadow-md flex items-center justify-center group-hover:bg-accent group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Service Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-primary transition-colors font-[family-name:var(--font-heading)] leading-snug mb-2">
                        {service.shortTitle}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Footer: 'On Call' Charges & Arrow */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold text-slate-500">Charges:</span>
                        <span className="text-xs font-black text-primary">On Call</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-accent transition-colors">
                        Explore
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-primary font-bold text-sm bg-white border-2 border-primary rounded-xl shadow-sm hover:bg-primary hover:text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-md"
          >
            <span>View All 15+ Home Healthcare Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
