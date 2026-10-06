"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Building,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { PHONE, PHONE_RAW, EMAIL, ADDRESS, OFFICE_HOURS, WHATSAPP_MSG, GOOGLE_MAPS_EMBED, CITIES } from "@/lib/constants";
import { isValidPhone, isValidEmail } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Noida",
    service: "Nursing Care",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidPhone(form.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    const waMsg = `*💬 NEW CONTACT INQUIRY — KREETA WEBSITE*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📧 *Email:* ${form.email || "Not provided"}\n` +
      `📍 *City:* ${form.city}\n` +
      `🏥 *Interested In:* ${form.service}\n` +
      `📝 *Message:* ${form.message || "Please provide consultation"}`;

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  const whatsappInquiry = `*Inquiry from Website (Contact Us)*
- Name: ${form.name}
- Phone: ${form.phone}
- City: ${form.city}
- Service: ${form.service}
- Message: ${form.message || "Please provide consultation"}`;

  return (
    <>
      {/* Hero Header */}
      <section className="pt-12 pb-14 bg-gradient-to-br from-primary-50/60 via-white to-sky-50/40 border-b border-border-light">
        <div className="container-custom text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-primary" />
            24x7 Customer Support & Healthcare Helpline
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight font-[family-name:var(--font-heading)]">
            We are Here to Help You & Your Loved Ones
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-xl mx-auto">
            Reach out by phone, WhatsApp, or visit our office. Our healthcare coordinators are available round the clock for emergencies.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details & Info Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quick Call Out */}
              <div className="bg-primary text-white rounded-[var(--radius-xl)] p-6 sm:p-8 shadow-card relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-4 translate-y-4">
                  <Phone className="w-48 h-48" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live 24x7 Emergency Line
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xs text-primary-100 mb-6">
                  Speak directly to our nurse supervisor or coordinator for prompt emergency dispatch in Delhi NCR.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-md)] bg-white text-primary font-bold text-xs hover:bg-primary-50 transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 fill-primary" /> Call {PHONE}
                  </a>
                  <a
                    href={WHATSAPP_MSG()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-md)] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Office Details Card */}
              <div className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-7 border border-border-light shadow-card space-y-5">
                <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
                  Registered Office & Details
                </h2>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text">Head Office Address</div>
                    <div className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                      {ADDRESS.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text">Email Address</div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-xs text-primary hover:underline font-medium block mt-0.5"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text">Operating Hours</div>
                    <div className="text-xs text-text-secondary mt-0.5">
                      {OFFICE_HOURS}
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                      Emergency response teams on standby 24/7/365
                    </div>
                  </div>
                </div>
              </div>

              {/* Cities Coverage Badge List */}
              <div className="bg-white rounded-[var(--radius-xl)] p-6 border border-border-light shadow-card">
                <div className="text-xs font-bold text-text mb-3">Cities We Cover Across Delhi NCR</div>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 bg-bg-surface border border-border-light text-xs font-medium text-text-secondary rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8 border border-border-light shadow-card">
                <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] mb-1">
                  Send Us a Message
                </h2>
                <p className="text-xs text-text-muted mb-6">
                  Have questions about pricing, specific conditions, or service availability? Fill out this form and our team will get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-[var(--radius-lg)]"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-emerald-950 mb-1">Message Sent Successfully!</h3>
                    <p className="text-xs text-emerald-800 max-w-sm mx-auto mb-5">
                      Thank you for contacting Kreeta Nursing Service. We will contact you at <strong>{form.phone}</strong> shortly.
                    </p>
                    <a
                      href={WHATSAPP_MSG(whatsappInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[var(--radius-md)] text-xs font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" /> Message Directly on WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-[var(--radius-md)]">
                        {error}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">City</label>
                        <select
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          {CITIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="Nursing Care">Nursing Care (12h/24h)</option>
                        <option value="Caretaker / Elderly Care">Caretaker / Elderly Care</option>
                        <option value="General Duty Assistant (GDA)">GDA Staff</option>
                        <option value="Physiotherapy at Home">Physiotherapy at Home</option>
                        <option value="Medical Equipment Rental">Medical Equipment Rental / Sale</option>
                        <option value="ICU Setup at Home">ICU Setup at Home</option>
                        <option value="Lab Tests at Home">Lab Tests at Home</option>
                        <option value="Other Medical Requirement">Other Medical Requirement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        How can we assist you?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please describe patient condition, preferred timings, or questions..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                      <Send className="w-4 h-4 mr-2" /> Send Consultation Message
                    </Button>
                    <p className="text-[11px] text-text-muted text-center">
                      🔒 We respect your privacy. Medical information is treated with strict confidentiality.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-12 bg-white border-t border-border-light">
        <div className="container-custom">
          <div className="rounded-[var(--radius-xl)] overflow-hidden border border-border-light shadow-card bg-slate-100">
            <div className="p-4 bg-white border-b border-border-light flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-text">
                  Gaur City Center, Sector 4, Greater Noida West (Noida Ext.)
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Gaur+City+Center+Noida+Extension"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-semibold hover:underline"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kreeta Nursing Service Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
