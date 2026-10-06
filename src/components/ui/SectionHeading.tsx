"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Section heading with optional badge and subtitle.
 */
export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary-50 rounded-full border border-primary-100">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
