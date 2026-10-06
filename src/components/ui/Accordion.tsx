"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

/**
 * FAQ Accordion component with smooth expand/collapse animation.
 */
export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "border rounded-[var(--radius-lg)] overflow-hidden transition-all duration-200",
              isOpen
                ? "border-primary-200 bg-white shadow-card"
                : "border-border bg-white hover:border-primary-100"
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left gap-4 group"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "font-semibold transition-colors",
                  isOpen ? "text-primary" : "text-text group-hover:text-primary"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 shrink-0 text-text-muted transition-transform duration-300",
                  isOpen && "rotate-180 text-primary"
                )}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-text-secondary leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
