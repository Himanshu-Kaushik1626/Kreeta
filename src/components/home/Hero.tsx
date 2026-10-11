"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  GraduationCap,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PHONE, PHONE_RAW, CITIES } from "@/lib/constants";
import { services } from "@/data/services";
import { isValidPhone } from "@/lib/utils";

const heroSlides = [
  {
    image: "/images/hero/H.jpeg",
    alt: "Kreeta Nursing Service — Trusted Healthcare At Your Doorstep",
  },
  {
    image: "/images/hero/H2.jpeg",
    alt: "Kreeta Nursing Service — Professional Home Healthcare & Nursing",
  },
  {
    image: "/images/hero/H3.jpeg",
    alt: "Kreeta Nursing Service — Compassionate 24x7 Patient Care Delhi NCR",
  },
];

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Police Verified Staff",
    desc: "Complete background & identity checks",
  },
  {
    icon: Clock,
    title: "Available 24x7",
    desc: "12-hr shifts or 24-hr live-in care",
  },
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    desc: "GNM / BSc nurses & trained GDAs",
  },
  {
    icon: GraduationCap,
    title: "Hospital-Grade Setup",
    desc: "Home ICU, monitors & oxygen",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

/**
 * Modern Hero Section:
 * 1. Clean, full-size uncropped sliding banner showcase (Home1, Home2, Home3)
 *    with NO text or dark overlays on top of the images.
 * 2. Dropped-down dedicated Healthcare Information & Quick Inquiry Form section
 *    positioned cleanly below the banners.
 */
export function Hero() {
  const [[slideIndex, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    city: "",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setSlide(([prev]) => {
        const next =
          (prev + newDirection + heroSlides.length) % heroSlides.length;
        return [next, newDirection];
      });
    },
    []
  );

  // Auto-advance slider every 5.5 seconds unless paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => paginate(1), 5500);
    return () => clearInterval(interval);
  }, [paginate, isPaused]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !isValidPhone(formData.phone)) return;

    // Build structured WhatsApp message
    const message = [
      `*New Service Request — Kreeta Nursing Service*`,
      `• *Name:* ${formData.name.trim()}`,
      `• *Phone:* ${formData.phone.trim()}`,
      `• *Service:* ${formData.service || "Nursing / Healthcare Consultation"}`,
      `• *City / Area:* ${formData.city || "Delhi NCR"}`,
      formData.notes ? `• *Requirement:* ${formData.notes.trim()}` : null,
      ``,
      `_Sent via Kreeta Nursing Service Website Quick Inquiry_`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. CLEAN BANNER SLIDER SHOWCASE (NO TEXT OVERLAY ON IMAGES)  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-4 pb-2">
        <div
          className="relative w-full aspect-[1376/768] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={slideIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full bg-white overflow-hidden"
            >
              {/* Sharp, edge-to-edge banner image */}
              <Image
                src={heroSlides[slideIndex].image}
                alt={heroSlides[slideIndex].alt}
                fill
                priority={slideIndex === 0}
                className="object-cover w-full h-full select-none"
                sizes="(max-width: 1440px) 100vw, 1400px"
                quality={100}
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 rounded-full bg-white/85 hover:bg-white text-slate-800 shadow-md backdrop-blur border border-white/60 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 rounded-full bg-white/85 hover:bg-white text-slate-800 shadow-md backdrop-blur border border-white/60 transition-all hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicators / Dots */}
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-y-0 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide([i, i > slideIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === slideIndex
                    ? "w-7 bg-primary"
                    : "w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. DROPPED-DOWN HEALTHCARE INFO & QUICK INQUIRY FORM          */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-8 md:py-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline, Trust Highlights, Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Urgency Alert Badge & COD Notice */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold border border-emerald-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available 24x7 Across Delhi NCR — Fast 60-90 Min Dispatch</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-800 rounded-full text-xs sm:text-sm font-semibold border border-teal-200 shadow-sm">
                <span>💵 Payment: Cash on Delivery (COD) Only</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-[family-name:var(--font-heading)]">
                Trusted Healthcare,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-600 to-secondary">
                  At Your Doorstep
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Professional ICU nurses, trained caretakers, physiotherapists, and
                hospital-grade medical equipment delivered right to your home in{" "}
                <strong className="text-slate-800">
                  Delhi, Noida, Greater Noida, Gurgaon, Ghaziabad & Faridabad
                </strong>
                . Compassionate clinical care, 24 hours a day.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/booking">
                <Button
                  variant="accent"
                  size="lg"
                  iconRight={<ArrowRight className="w-5 h-5" />}
                  className="font-bold shadow-md shadow-accent/25 hover:shadow-lg rounded-xl"
                >
                  Book a Nurse
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone className="w-5 h-5 text-primary" />}
                as="a"
                href={`tel:${PHONE_RAW}`}
                className="font-semibold text-slate-800 hover:text-primary rounded-xl"
              >
                Call {PHONE}
              </Button>
              <a
                href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Hi Kreeta Nursing Service, I need home healthcare assistance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Badges Grid (4 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {trustBadges.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage & Emergency Guarantee Strip */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-50 via-teal-50/50 to-emerald-50 border border-primary-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Instant deployment across all sectors of Noida, Greater Noida, Delhi, Gurgaon, Ghaziabad & Faridabad.
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary shrink-0">
                <CheckCircle2 className="w-4 h-4 text-secondary" /> Verified Quality
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Quick Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 relative">
              {/* Form Title & Subtitle */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 font-[family-name:var(--font-heading)]">
                    Quick Service Inquiry
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    We will call you back within 15 minutes
                  </p>
                </div>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all text-sm outline-none"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value.replace(/\D/g, ""),
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all text-sm outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all text-sm outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="12hr / 24hr Nursing Care">12hr / 24hr Nursing Care</option>
                      <option value="ICU Setup at Home">ICU Setup at Home</option>
                      <option value="Elderly & Patient Caretaker">Elderly & Patient Caretaker</option>
                      <option value="GDA (General Duty Assistant)">GDA (General Duty Assistant)</option>
                      <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                      <option value="Injection & IV Drip at Home">Injection & IV Drip at Home</option>
                      <option value="Medical Equipment Rental">Medical Equipment Rental</option>
                      <option value="Doctor Visit at Home">Doctor Visit at Home</option>
                      <option value="Lab Tests at Home">Lab Tests at Home</option>
                      <option value="Other Medical Assistance">Other Medical Assistance</option>
                    </select>
                  </div>

                  {/* City Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your City / Area
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all text-sm outline-none"
                    >
                      <option value="">Select your city...</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Requirement (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Post-surgery care, female nurse required"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all text-xs outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full font-bold shadow-md shadow-accent/25 hover:shadow-lg rounded-xl text-base py-3.5 mt-2"
                  >
                    ⚡ Get Callback via WhatsApp
                  </Button>

                  {/* Privacy / WhatsApp Notice */}
                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    🔒 Direct submission to our care desk on WhatsApp (8865888772). No spam ever.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                      Thank you! Our care coordinator is reviewing your details and will call you on WhatsApp/Phone within 15 minutes.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", phone: "", service: "", city: "", notes: "" });
                      }}
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
