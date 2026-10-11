"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { PHONE, PHONE_RAW, CITIES, WHATSAPP_MSG } from "@/lib/constants";
import { isValidPhone } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function QuickRequestClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Noida");
  const [service, setService] = useState("Urgent Nursing / Injection");
  const [urgency, setUrgency] = useState("Immediate (Within 60-90 Mins)");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    const waMsg = `*🚨 URGENT HEALTHCARE REQUEST — KREETA NURSING*\n\n` +
      `👤 *Patient/Contact:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🏥 *Service Required:* ${service}\n` +
      `⚡ *Urgency Level:* ${urgency}\n` +
      `📍 *City:* ${city}\n` +
      `🏠 *Address:* ${address || "Will share on call"}\n\n` +
      `Please contact immediately!`;

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  const whatsappMessage = `*URGENT HEALTHCARE REQUEST*
- Name: ${name}
- Phone: ${phone}
- Service: ${service}
- Urgency: ${urgency}
- City: ${city}
- Address: ${address || "Will share on call"}
Please call immediately!`;

  return (
    <div className="min-h-screen bg-bg-surface py-10 md:py-16">
      <div className="container-custom max-w-2xl">
        {/* Urgent header banner */}
        <div className="bg-red-50 border border-red-200 rounded-[var(--radius-lg)] p-4 mb-6 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
            <Zap className="w-4 h-4 fill-red-600" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-red-900 uppercase tracking-wide">
              Immediate Care Assistance — Delhi NCR
            </h2>
            <p className="text-xs text-red-700 mt-0.5">
              Need medical support right now? Call our 24x7 emergency helpline directly at{" "}
              <a href={`tel:${PHONE}`} className="font-bold underline text-red-900">
                {PHONE}
              </a>{" "}
              or fill the 60-second request below.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 sm:p-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Urgent Request Dispatched!
              </h3>
              <p className="text-xs text-text-secondary max-w-md mx-auto mb-6">
                Our care coordinator on duty has received your alert and will call <strong>{phone}</strong> within 5 to 10 minutes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={WHATSAPP_MSG(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <MessageCircle className="w-4 h-4 mr-2" /> Message on WhatsApp Now
                  </Button>
                </a>
                <a href={`tel:${PHONE}`} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="w-4 h-4 mr-2 text-primary" /> Call {PHONE}
                  </Button>
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-extrabold text-text font-[family-name:var(--font-heading)]">
                  Fast 60-Second Request
                </h1>
                <p className="text-xs text-text-muted mt-1">
                  Fill these quick details and we will coordinate immediate care.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-[var(--radius-md)] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-text mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikas Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text mb-1">
                  Phone Number (10 digits) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-text mb-1">
                    Service Required *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="Urgent Nursing / Injection">Urgent Nursing / Injection</option>
                    <option value="Dressing / Wound Care">Dressing / Wound Care</option>
                    <option value="Catheter / Ryle's Tube Care">Catheter / Ryle's Tube Care</option>
                    <option value="Immediate 12h/24h Attendant">Immediate 12h/24h Attendant</option>
                    <option value="Oxygen Cylinder / Concentrator">Oxygen Concentrator / Bipap</option>
                    <option value="ICU Setup at Home">Emergency ICU Setup</option>
                    <option value="Physiotherapist Visit">Urgent Physiotherapy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text mb-1">How Soon? *</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="Immediate (Within 60-90 Mins)">Within 60–90 Mins (Urgent)</option>
                    <option value="Today (Within 3-4 Hours)">Today (Within 3–4 Hours)</option>
                    <option value="Tonight (Night Shift)">Starting Tonight (8 PM)</option>
                    <option value="Tomorrow Morning">Tomorrow Morning (8 AM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-text mb-1">City *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text mb-1">
                    Locality / Society
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sector 50 / Indirapuram"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                <Zap className="w-4 h-4 mr-2" /> Request Immediate Callback
              </Button>

              <div className="pt-4 border-t border-border-light flex items-center justify-around text-[11px] text-text-muted">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-primary" /> Police-verified Staff
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent" /> 24x7 Response
                </span>
                <span className="flex items-center gap-1">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" /> Transparent Pricing
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
