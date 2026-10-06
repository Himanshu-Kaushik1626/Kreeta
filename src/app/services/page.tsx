"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ArrowRight, Filter } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { services, SERVICE_CATEGORIES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Services listing page with search and category filter.
 */
export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const matchesSearch =
        !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-white py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
            Our Healthcare Services
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Comprehensive home healthcare solutions tailored to your needs.
            Browse our services and book the care your family deserves.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="search"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-[var(--radius-lg)] border border-border bg-white text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Filter + Listing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <Filter className="w-4 h-4 text-text-muted mr-1" />
            {["All", ...SERVICE_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-text-secondary border-border hover:border-primary hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredServices.map((service, i) => {
                const IconComponent =
                  (LucideIcons as unknown as Record<
                    string,
                    React.ComponentType<{ className?: string }>
                  >)[service.icon] || LucideIcons.Heart;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/85 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/50 relative"
                    >
                      {/* Service Photo with Hover Zoom */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Soft Gradient Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Category Badge on Photo */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-primary backdrop-blur-sm shadow-sm">
                            {service.category}
                          </span>
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-xl bg-primary text-white shadow-md flex items-center justify-center group-hover:bg-accent group-hover:rotate-6 transition-all duration-300">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Service Card Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors font-[family-name:var(--font-heading)] leading-snug mb-2">
                            {service.shortTitle}
                          </h3>
                          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                          <p className="text-xs font-bold text-primary flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Charges: <span className="font-extrabold text-slate-800">On Call</span>
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                            View Details
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                No services found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
