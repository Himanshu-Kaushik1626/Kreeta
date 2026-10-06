"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  FlaskConical,
  Briefcase,
  CheckCircle,
  Phone,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Clock,
  Send,
  Users,
} from "lucide-react";
import { PHONE, CITIES, WHATSAPP_MSG } from "@/lib/constants";
import { isValidPhone, isValidEmail } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function PartnerClient() {
  const [form, setForm] = useState({
    orgName: "",
    contactPerson: "",
    phone: "",
    email: "",
    partnerType: "Hospital / Nursing Home",
    city: "Noida",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.orgName.trim() || !form.contactPerson.trim()) {
      setError("Please fill organization and contact person name.");
      return;
    }
    if (!isValidPhone(form.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const whatsappPartnerMsg = `*PARTNERSHIP INQUIRY — KREETA*
- Organization: ${form.orgName}
- Contact Person: ${form.contactPerson}
- Phone: ${form.phone}
- Email: ${form.email || "N/A"}
- Partnership Type: ${form.partnerType}
- City: ${form.city}
- Notes: ${form.notes || "Interested in collaboration"}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50/60 via-white to-sky-50/30 border-b border-border-light">
        <div className="container-custom text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            Institutional & Clinical Partnerships
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight font-[family-name:var(--font-heading)]">
            Partner With Delhi NCR's Trusted Home Healthcare Network
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-2xl mx-auto">
            Extend clinical excellence into your patients' homes. We collaborate with leading hospitals, doctors, diagnostic centers, and corporate wellness programs to deliver uninterrupted post-discharge care.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a href="#partner-form">
              <Button variant="primary" size="md">
                Register Partnership Interest
              </Button>
            </a>
            <a
              href={WHATSAPP_MSG("Hi Kreeta Management, we are interested in discussing an institutional healthcare partnership.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md">
                <MessageCircle className="w-4 h-4 mr-1.5 text-emerald-600" /> Chat With Leadership
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Collaboration Verticals */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Who We Partner With"
            title="Comprehensive Healthcare Ecosystem Tie-ups"
            subtitle="Tailored collaboration models designed to ensure seamless continuity of patient care."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-primary-50 flex items-center justify-center text-primary mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Hospitals & Nursing Homes
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Reduce hospital readmission rates and optimize bed turnover with safe step-down home ICU, tracheostomy, and surgical wound care at home.
              </p>
              <ul className="text-[11px] text-text-muted space-y-1">
                <li>✓ Discharge continuity protocol</li>
                <li>✓ Daily electronic patient logs</li>
                <li>✓ Emergency readmission backup</li>
              </ul>
            </div>

            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Doctors & Surgeons
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Ensure your post-operative patients follow your medication, wound dressing, and physiotherapy regimen exactly as prescribed.
              </p>
              <ul className="text-[11px] text-text-muted space-y-1">
                <li>✓ Routine vitals WhatsApp reports</li>
                <li>✓ Zero deviation from Rx orders</li>
                <li>✓ Direct escalation channel</li>
              </ul>
            </div>

            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Diagnostic Labs & Pharmacies
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Cross-referral and doorstep logistics integration for blood sample collection, radiology at home, and scheduled medication delivery.
              </p>
              <ul className="text-[11px] text-text-muted space-y-1">
                <li>✓ Cold-chain sample handover</li>
                <li>✓ Co-branded health packages</li>
                <li>✓ Faster diagnostic turnaround</li>
              </ul>
            </div>

            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Corporates & Communities
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Corporate eldercare benefits, wellness checkups, ergonomics workshops, and on-premise first-aid nursing stations for staff.
              </p>
              <ul className="text-[11px] text-text-muted space-y-1">
                <li>✓ Subsidized employee eldercare</li>
                <li>✓ Society health camps</li>
                <li>✓ Emergency onsite triage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits / Why Kreeta */}
      <section className="section-padding bg-bg-surface border-y border-border-light">
        <div className="container-custom">
          <SectionHeading
            badge="Partner Advantages"
            title="Why Leading Healthcare Providers Rely on Kreeta"
            subtitle="Built on clinical governance, rigorous compliance, and transparent reporting."
          />

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-border-light text-center">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-sm font-bold text-text mb-1">100% Verified Staff</h4>
              <p className="text-xs text-text-muted">
                Mandatory background verification, police verification, and council credentials verification for all clinical personnel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-border-light text-center">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="text-sm font-bold text-text mb-1">&lt; 90 Min Deployment</h4>
              <p className="text-xs text-text-muted">
                Fast bedside dispatch across all 6 NCR cities ensuring zero discharge delay from your hospital or clinic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-border-light text-center">
              <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-text mb-1">High Patient NPS (98%)</h4>
              <p className="text-xs text-text-muted">
                Dignified, courteous care that protects your institution's reputation and promotes patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="section-padding bg-white" id="partner-form">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8 border border-border-light shadow-card">
            <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] mb-1 text-center">
              Institutional Partnership Inquiry
            </h2>
            <p className="text-xs text-text-muted mb-6 text-center">
              Connect with our business development & clinical director to explore formal collaboration or MOU.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-[var(--radius-lg)]"
              >
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-950 mb-1">Partnership Inquiry Received!</h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto mb-5">
                  Thank you for reaching out, <strong>{form.contactPerson}</strong>. Our partnership director will contact you at <strong>{form.phone}</strong> within 1 business day.
                </p>
                <a
                  href={WHATSAPP_MSG(whatsappPartnerMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[var(--radius-md)] text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4" /> Connect Directly on WhatsApp
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
                      Organization / Hospital Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Hospital / Dr. Sharma Clinic"
                      value={form.orgName}
                      onChange={(e) => setForm({ ...form, orgName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Contact Person & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Verma (Medical Supdt.)"
                      value={form.contactPerson}
                      onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Official Email
                    </label>
                    <input
                      type="email"
                      placeholder="partner@organization.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Type of Collaboration
                    </label>
                    <select
                      value={form.partnerType}
                      onChange={(e) => setForm({ ...form, partnerType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Hospital / Nursing Home">Hospital / Nursing Home Tie-up</option>
                      <option value="Doctor / Surgeon Referral">Doctor / Surgeon Referral</option>
                      <option value="Diagnostic Lab / Pathology">Diagnostic Lab / Pathology</option>
                      <option value="Corporate Eldercare / Wellness">Corporate Eldercare / Wellness</option>
                      <option value="Medical Equipment Supply">Medical Equipment Supply</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">City / Region</label>
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
                    Partnership Objective / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what kind of patient volume or collaborative services you envision..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                  Submit Partnership Request
                </Button>
                <p className="text-[11px] text-text-muted text-center">
                  Prefer direct phone discussion? Call our Director's desk at{" "}
                  <a href={`tel:${PHONE}`} className="text-primary font-bold">
                    {PHONE}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
