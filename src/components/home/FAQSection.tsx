"use client";

import React from "react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

/**
 * FAQ section on the home page.
 */
export function FAQSection() {
  const displayFaqs = faqs.slice(0, 8);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Find quick answers to the most common questions about our home healthcare services."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion
            items={displayFaqs.map((faq) => ({
              id: faq.id,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
