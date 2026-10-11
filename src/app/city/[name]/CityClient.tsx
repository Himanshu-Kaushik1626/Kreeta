"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Shield,
  Clock,
  Heart,
  Award,
  CheckCircle,
  Search,
  ArrowRight,
  Star,
  Users,
  Activity,
  Calendar,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { CityData, cities } from "@/data/cities";
import { services } from "@/data/services";
import { PHONE, WHATSAPP_MSG, WHATSAPP_URL } from "@/lib/constants";
import { isValidPhone } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

interface Props {
  city: CityData;
}

export default function CityClient({ city }: Props) {
  const [searchArea, setSearchArea] = useState("");
  const [quickForm, setQuickForm] = useState({
    name: "",
    phone: "",
    service: "Nursing Care",
    area: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredAreas = city.areas.filter((a) =>
    a.name.toLowerCase().includes(searchArea.toLowerCase())
  );

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !isValidPhone(quickForm.phone)) return;
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Kreeta Team, I need home healthcare service in ${city.name} (${quickForm.area || "Area"}). My name is ${quickForm.name || "Customer"}. Please assist.`;
  const whatsappUrl = WHATSAPP_MSG(whatsappMessage);

  const cityFaqs = [
    {
      id: "faq-1",
      question: `How quickly can a nurse or caregiver reach my home in ${city.name}?`,
      answer: `In ${city.name}, our emergency and urgent care response can reach you within 60 to 90 minutes. For planned care (12-hour or 24-hour nursing shifts), we match and dispatch qualified personnel within 2 to 4 hours of consultation.`,
    },
    {
      id: "faq-2",
      question: `Are all Kreeta nurses and caregivers verified in ${city.name}?`,
      answer: `Yes, 100% of our healthcare staff undergoes mandatory background checks, police verification, clinical qualification verification (INC/State Nursing Council registration for nurses), and specialized in-house clinical training before deployment.`,
    },
    {
      id: "faq-3",
      question: `What areas of ${city.name} do you cover?`,
      answer: `We cover all major residential complexes, sectors, and localities across ${city.name}. If your location is within or adjoining ${city.name}, our medical team can provide service directly to your doorstep.`,
    },
    {
      id: "faq-4",
      question: `Can I request a replacement caregiver if not satisfied?`,
      answer: `Absolutely. We offer a zero-hassle caregiver replacement policy. If for any reason the allocated nurse or caregiver is not the right fit for your patient, simply notify your dedicated care coordinator and we will provide a replacement within 12-24 hours.`,
    },
  ];

  return (
    <>
      {/* City Hero */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-primary-50/50 via-white to-sky-50/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/60 border border-primary-200 text-primary-800 text-xs font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Serving All Localities in {city.name}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight mb-4 font-[family-name:var(--font-heading)] leading-tight">
                {city.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed">
                {city.heroDescription}
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white/90 backdrop-blur rounded-[var(--radius-lg)] border border-border-light shadow-soft mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text">Police Verified</div>
                    <div className="text-[11px] text-text-muted">100% Background Check</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-accent-100 flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text">24x7 Available</div>
                    <div className="text-[11px] text-text-muted">Day & Night Care</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text">10+ Yrs Exp</div>
                    <div className="text-[11px] text-text-muted">Certified Clinicians</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/booking">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-primary/20">
                    <Calendar className="w-4 h-4 mr-1.5" /> Book Service in {city.name}
                  </Button>
                </Link>
                <a href={`tel:${PHONE}`}>
                  <Button variant="outline" size="lg">
                    <Phone className="w-4 h-4 mr-1.5 text-primary" /> Call {PHONE}
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Quick Request Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-7 shadow-elevated border border-border-light relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
                <h2 className="text-xl font-bold text-text mb-1 font-[family-name:var(--font-heading)]">
                  Instant Healthcare Request
                </h2>
                <p className="text-xs text-text-muted mb-5">
                  Get a callback from a senior care coordinator in {city.name} within 15 minutes.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-[var(--radius-lg)] text-center">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-emerald-900 mb-1">
                      Request Received for {city.name}!
                    </h3>
                    <p className="text-xs text-emerald-700 mb-4">
                      Our coordinator will call you at {quickForm.phone} shortly.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[var(--radius-md)] text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> Message Directly on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Service Needed
                        </label>
                        <select
                          value={quickForm.service}
                          onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="Nursing Care">Nursing Care</option>
                          <option value="Caretaker / Elderly">Caretaker / Elderly</option>
                          <option value="ICU Setup at Home">ICU Setup at Home</option>
                          <option value="Physiotherapy">Physiotherapy</option>
                          <option value="Medical Equipment">Medical Equipment</option>
                          <option value="Lab Test at Home">Lab Test at Home</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Locality / Sector
                        </label>
                        <input
                          type="text"
                          placeholder={`e.g. Sector 62`}
                          value={quickForm.area}
                          onChange={(e) => setQuickForm({ ...quickForm, area: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <Button type="submit" variant="primary" className="w-full mt-2 font-semibold">
                      Request Call Back in {city.name}
                    </Button>
                    <p className="text-[11px] text-center text-text-muted">
                      🔒 Your details are secure & confidential. 24x7 clinical helpline.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas Covered Section */}
      <section className="section-padding bg-bg-surface border-y border-border-light">
        <div className="container-custom">
          <SectionHeading
            badge="Local Coverage"
            title={`Serving All Areas Across ${city.name}`}
            subtitle={`We have trained healthcare workers active in residential societies and sectors throughout ${city.name}.`}
          />

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                value={searchArea}
                onChange={(e) => setSearchArea(e.target.value)}
                placeholder={`Search your sector or locality in ${city.name}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-white text-xs text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-xs"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {filteredAreas.map((area, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  area.popular
                    ? "bg-primary-50 text-primary-800 border border-primary-200 shadow-xs font-semibold"
                    : "bg-white text-text-secondary border border-border-light hover:border-primary-200"
                }`}
              >
                <MapPin className={`w-3 h-3 ${area.popular ? "text-primary" : "text-text-muted"}`} />
                {area.name}
                {area.popular && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-text-muted">
            Don't see your specific sector? Don't worry, we cover <strong>100%</strong> of {city.name}.{" "}
            <a href={`tel:${PHONE}`} className="text-primary font-semibold underline">
              Call us now
            </a>{" "}
            to check caregiver availability at your exact pincode.
          </div>
        </div>
      </section>

      {/* Services Grid for this city */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Healthcare Services"
            title={`Home Healthcare Services in ${city.name}`}
            subtitle={`Choose from our complete spectrum of clinical and personal nursing care delivered to your door.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 9).map((service, i) => {
              const IconComp =
                (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ||
                LucideIcons.Heart;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-[var(--radius-lg)] border border-border-light p-6 hover:shadow-card-hover hover:border-primary-200 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[var(--radius-md)] bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-3 mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-light flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-text-muted block">Charges</span>
                      <span className="text-sm font-bold text-primary flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> On Call
                      </span>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-800"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/services">
              <Button variant="outline" size="md">
                View All 17+ Healthcare Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Testimonial & Why Us */}
      {city.localTestimonial && (
        <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-950 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-4">
                <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                Verified Patient Review from {city.name}
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed italic text-white/90 mb-6">
                "{city.localTestimonial.text}"
              </p>
              <div className="font-bold text-base text-white">{city.localTestimonial.name}</div>
              <div className="text-xs text-primary-200">
                Service: {city.localTestimonial.service} in {city.name}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            badge="Frequently Asked Questions"
            title={`Home Nursing in ${city.name} — FAQ`}
            subtitle="Common questions about hiring nurses, caregivers, and medical equipment in your area."
          />
          <Accordion items={cityFaqs} />
        </div>
      </section>

      {/* Bottom City CTA */}
      <section className="py-12 bg-white border-t border-border-light">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3 font-[family-name:var(--font-heading)]">
            Ready to arrange care in {city.name}?
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto mb-6">
            Speak directly with our clinical supervisor. We will assess your patient's condition and match the best nurse or caregiver within hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/booking">
              <Button variant="primary" size="lg">
                Book Online Now
              </Button>
            </Link>
            <a href={`tel:${PHONE}`}>
              <Button variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2 text-primary" /> Call {PHONE}
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border-light flex flex-wrap justify-center items-center gap-2 text-xs text-text-muted">
            <span>Also serving other Delhi NCR cities:</span>
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/city/${c.slug}`}
                  className="text-primary hover:underline font-medium"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
