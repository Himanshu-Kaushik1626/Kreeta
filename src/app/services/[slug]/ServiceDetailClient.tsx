"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Check,
  ChevronRight,
  IndianRupee,
  CalendarCheck,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { PHONE_RAW, WHATSAPP_MSG } from "@/lib/constants";
import { isValidPhone } from "@/lib/utils";

interface ServiceDetailClientProps {
  service: Service;
  relatedServices: Service[];
}

/**
 * Service detail page client component with all sections.
 */
export function ServiceDetailClient({
  service,
  relatedServices,
}: ServiceDetailClientProps) {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || LucideIcons.Heart;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !isValidPhone(bookingForm.phone)) return;

    const waMsg = `*🏥 NEW SERVICE INQUIRY — ${service.title.toUpperCase()}*\n\n` +
      `👤 *Patient/Contact:* ${bookingForm.name}\n` +
      `📞 *Phone:* ${bookingForm.phone}\n` +
      `🩺 *Service:* ${service.title}\n` +
      `💬 *Requirements/Note:* ${bookingForm.message || "Please provide consultation & schedule"}`;

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank");

    setFormSubmitted(true);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border-light">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text font-medium">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Service Details */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Service Hero Photo */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-6 border border-slate-200/80 shadow-sm bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 bg-primary-50 rounded-[var(--radius-lg)] flex items-center justify-center shrink-0">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary bg-primary-50 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-text mt-2 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h1>
                </div>
              </div>

              {/* Overview */}
              <div className="prose prose-gray max-w-none mb-10">
                <p className="text-text-secondary text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Who Needs It */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                  Who Needs This Service
                </h2>
                <ul className="space-y-3">
                  {service.whoNeedsIt.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="mb-10 bg-primary-50/50 rounded-[var(--radius-xl)] p-6 md:p-8">
                <h2 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                  What&apos;s Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.whatsIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm text-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                  Our Process
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-text-secondary pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staff Qualifications */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                  Staff Qualifications
                </h2>
                <ul className="space-y-2">
                  {service.staffQualifications.map((qual, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
                    Care Plans & Charges
                  </h2>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    💵 Payment: Cash on Delivery (COD) Only
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.pricing.map((price, i) => (
                    <div
                      key={i}
                      className="bg-white border border-border-light rounded-[var(--radius-lg)] p-5 hover:border-primary-200 hover:shadow-card transition-all"
                    >
                      <p className="text-sm font-semibold text-slate-800 mb-1">
                        {price.label}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-2xl font-black text-primary">
                          On Call
                        </span>
                        <span className="text-xs text-text-muted font-medium">
                          (Customized Quote)
                        </span>
                      </div>
                      <p className="text-[11px] text-text-muted mt-2">
                        Call or WhatsApp our 24x7 coordinator for patient-specific shift timings & customized quote.
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-text-muted">
                  * Charges are confirmed on call after understanding patient condition, shift type, and exact location. Payment is Cash on Delivery only.
                </p>
              </div>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={service.faqs.map((faq, i) => ({
                      id: `faq-${i}`,
                      question: faq.question,
                      answer: faq.answer,
                    }))}
                  />
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                    Related Services
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {relatedServices.map((related) => {
                      const RelatedIcon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[related.icon] || LucideIcons.Heart;
                      return (
                        <Link
                          key={related.id}
                          href={`/services/${related.slug}`}
                          className="group flex items-center gap-3 p-4 rounded-[var(--radius-md)] border border-border-light hover:border-primary-200 hover:bg-primary-50/30 transition-all"
                        >
                          <RelatedIcon className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                            {related.shortTitle}
                          </span>
                          <ArrowRight className="w-4 h-4 text-text-muted ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Sticky Booking Form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[var(--radius-xl)] shadow-lg border border-border-light p-6"
              >
                {!formSubmitted ? (
                  <>
                    <h3 className="text-lg font-bold text-text mb-1">
                      Book {service.shortTitle}
                    </h3>
                    <p className="text-sm text-text-secondary mb-5">
                      Fill in your details and we will arrange the service for
                      you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={bookingForm.name}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                        required
                      />

                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={bookingForm.phone}
                          onChange={(e) =>
                            setBookingForm({
                              ...bookingForm,
                              phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                            })
                          }
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                          required
                        />
                      </div>

                      <textarea
                        placeholder="Brief description of your needs (optional)"
                        value={bookingForm.message}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            message: e.target.value,
                          })
                        }
                        rows={3}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none text-sm"
                      />

                      <Button
                        type="submit"
                        variant="accent"
                        fullWidth
                        icon={<CalendarCheck className="w-4 h-4" />}
                      >
                        Book Now
                      </Button>
                    </form>

                    <div className="mt-4 flex flex-col gap-2">
                      <Button
                        variant="outline"
                        fullWidth
                        size="sm"
                        icon={<Phone className="w-4 h-4" />}
                        as="a"
                        href={`tel:${PHONE_RAW}`}
                      >
                        Call Us
                      </Button>
                      <Button
                        variant="ghost"
                        fullWidth
                        size="sm"
                        icon={<MessageCircle className="w-4 h-4" />}
                        as="a"
                        href={WHATSAPP_MSG(service.shortTitle)}
                      >
                        WhatsApp Enquiry
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-7 h-7 text-success" />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">
                      Request Submitted
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      Our care coordinator will contact you within 15 minutes.
                    </p>
                    <a
                      href={WHATSAPP_MSG(service.shortTitle)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#25D366] font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                )}
              </motion.div>

              {/* Quick Info */}
              <div className="mt-4 bg-primary-50/50 rounded-[var(--radius-lg)] p-5">
                <h4 className="font-semibold text-text mb-3 text-sm">
                  Quick Info
                </h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Police-verified staff
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Available 24x7
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Replacement guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    No hidden charges
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
