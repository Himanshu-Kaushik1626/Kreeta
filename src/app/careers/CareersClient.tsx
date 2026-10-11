"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Phone,
  MessageCircle,
  DollarSign,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { PHONE, PHONE_RAW, CITIES, WHATSAPP_MSG } from "@/lib/constants";
import { isValidPhone, isValidEmail } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface JobOpening {
  id: string;
  title: string;
  qualification: string;
  type: string;
  payRange: string;
  experience: string;
  description: string;
  skills: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: "staff-nurse",
    title: "Registered Staff Nurse (GNM / B.Sc)",
    qualification: "Diploma in GNM or B.Sc Nursing (Registered with State Nursing Council)",
    type: "12h Day / 12h Night / 24h Live-in",
    payRange: "₹24,000 – ₹45,000 / month + Incentives",
    experience: "1+ Years Hospital or Home Care Experience",
    description:
      "Administer IV/IM injections, infusion lines, catheterization, wound dressing, tracheostomy management, and vital monitoring for post-op and critical home patients.",
    skills: ["IV Cannulation", "Tracheostomy", "Catheter Care", "Vital Monitoring", "BLS Knowledge"],
  },
  {
    id: "gda",
    title: "General Duty Assistant (GDA / Nursing Attendant)",
    qualification: "GDA Certificate / 10th or 12th Pass with Hospital Training",
    type: "12 Hours / 24 Hours Shifts",
    payRange: "₹18,000 – ₹28,000 / month",
    experience: "6+ Months of clinical or elderly care experience",
    description:
      "Assist semi-dependent and bedridden patients with daily hygiene, sponge baths, diaper changes, medication reminders, mobility support, and feeding.",
    skills: ["Patient Hygiene", "Bed Sore Care", "Vitals Checking", "Mobility Assistance"],
  },
  {
    id: "elderly-caregiver",
    title: "Elderly Care Companion / Attendant",
    qualification: "Experienced in geriatric care, compassionate and patient demeanor",
    type: "Day Shift (10-12h) / Live-In (24h)",
    payRange: "₹16,000 – ₹25,000 / month + Room/Board",
    experience: "Prior family or agency elderly care experience preferred",
    description:
      "Provide empathetic, dignified assistance to seniors. Support with walks, light exercise, companionship, memory stimulation, meals, and safety monitoring.",
    skills: ["Geriatric Care", "Dementia Support", "Fall Prevention", "Compassionate Care"],
  },
  {
    id: "physiotherapist",
    title: "Consultant Home Physiotherapist",
    qualification: "BPT / MPT (Bachelor / Master of Physiotherapy)",
    type: "Per Session Visits (Flexible Timing)",
    payRange: "₹600 – ₹1,200 per session / visit",
    experience: "1+ Years clinical experience in ortho/neuro rehab",
    description:
      "Conduct home evaluation, design customized recovery exercise plans for neuro, stroke, knee/hip replacement, and geriatric mobility patients.",
    skills: ["Neuro Rehab", "Ortho Rehab", "Chest Physiotherapy", "Post-Surgical Exercise"],
  },
  {
    id: "icu-nurse",
    title: "Critical Care / ICU Home Nurse",
    qualification: "B.Sc Nursing with 2+ years of ICU / HDU experience",
    type: "12 Hours / 24 Hours Shifts",
    payRange: "₹35,000 – ₹55,000 / month",
    experience: "2+ Years in Tertiary Hospital Intensive Care Unit",
    description:
      "Manage home ICU setup, mechanical ventilator, BiPAP/CPAP, arterial line, syringe pumps, TPN, and complex post-coma / trauma patients.",
    skills: ["Ventilator / BiPAP", "Syringe Pumps", "Critical Drug Titration", "Arterial Lines"],
  },
];

export default function CareersClient() {
  const [selectedRole, setSelectedRole] = useState(jobOpenings[0].title);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: jobOpenings[0].title,
    qualification: "GNM / B.Sc Nursing",
    experience: "1-3 Years",
    preferredCity: "Noida / Greater Noida",
    shiftPreference: "12 Hours (Day or Night)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!isValidPhone(form.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");

    const waMsg = `*💼 JOB APPLICATION — KREETA NURSING SERVICE*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `📧 *Email:* ${form.email || "Not provided"}\n` +
      `🩺 *Role Applied:* ${form.role}\n` +
      `🎓 *Qualification:* ${form.qualification}\n` +
      `⏳ *Experience:* ${form.experience}\n` +
      `📍 *Preferred City:* ${form.preferredCity}\n` +
      `⏰ *Shift:* ${form.shiftPreference}\n` +
      (form.message ? `💬 *About:* ${form.message}\n` : "");

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  const whatsappJobMsg = `*JOB APPLICATION — KREETA NURSING SERVICE*
- Name: ${form.name}
- Phone: ${form.phone}
- Role Applied: ${form.role}
- Qualification: ${form.qualification}
- Experience: ${form.experience}
- City: ${form.preferredCity}
- Shift: ${form.shiftPreference}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50/60 via-white to-emerald-50/30 border-b border-border-light">
        <div className="container-custom text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            We Are Actively Hiring Across Delhi NCR
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight font-[family-name:var(--font-heading)]">
            Build a Meaningful Healthcare Career with Kreeta
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-2xl mx-auto">
            Join a respected team of nurses, caregivers, and therapists. Enjoy competitive pay, punctual payouts, respected client environments, and continuous medical skill training.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a href="#open-positions">
              <Button variant="primary" size="md">
                View Open Positions
              </Button>
            </a>
            <a
              href={WHATSAPP_MSG("Hi Kreeta HR, I would like to apply for a nursing/caregiver position.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md">
                <MessageCircle className="w-4 h-4 mr-1.5 text-emerald-600" /> WhatsApp HR Directly
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Kreeta */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Why Join Us"
            title="Benefits of Working with Kreeta"
            subtitle="We treat our caregivers as our greatest asset — with dignity, top compensation, and genuine support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Timely & Top Payouts
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Guaranteed salary transfers by the 5th of every month, attractive shift bonuses, overtime pay, and travel reimbursements.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-100 flex items-center justify-center text-primary mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Flexible Shift Options
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Choose daytime 12-hour shifts, night shifts, 24-hour live-in assignments, or per-visit appointments near your residence.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Verified, Safe Homes
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                We pre-screen and verify every patient household before assignment. 24x7 supervisor hotline ensures you are always backed up.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-lg)] border border-border-light bg-bg-surface hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-purple-100 flex items-center justify-center text-purple-700 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Clinical Skill Growth
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Regular refresher workshops on ICU equipment handling, infection control, BLS, and elder communication certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="section-padding bg-bg-surface" id="open-positions">
        <div className="container-custom">
          <SectionHeading
            badge="Current Openings"
            title="Available Roles in Delhi NCR"
            subtitle="Select a role below to read the requirements and submit your application."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-[var(--radius-lg)] border border-border-light p-6 hover:shadow-card-hover transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted mt-1">
                      <span className="font-semibold text-primary">{job.payRange}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <a
                    href="#apply-form"
                    onClick={() => {
                      setSelectedRole(job.title);
                      setForm({ ...form, role: job.title });
                    }}
                  >
                    <Button variant="primary" size="sm">
                      Apply for this Role
                    </Button>
                  </a>
                </div>

                <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border-light">
                  <span className="text-[11px] font-semibold text-text-muted mr-1">Skills:</span>
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 text-text-secondary rounded text-[11px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white" id="apply-form">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-[var(--radius-xl)] p-6 sm:p-8 border border-border-light shadow-card">
            <h2 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] mb-1 text-center">
              Quick Job Application Form
            </h2>
            <p className="text-xs text-text-muted mb-6 text-center">
              Fill your contact details and qualifications. Our HR recruitment team will schedule an in-person or telephonic interview.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-[var(--radius-lg)]"
              >
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-950 mb-1">Application Submitted!</h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto mb-5">
                  Thank you for applying to Kreeta Nursing Service, <strong>{form.name}</strong>. Our HR manager will call <strong>{form.phone}</strong> within 24 hours.
                </p>
                <a
                  href={WHATSAPP_MSG(whatsappJobMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-[var(--radius-md)] text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4" /> Send Resume via WhatsApp
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
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Role Applying For *
                    </label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      {jobOpenings.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Highest Qualification
                    </label>
                    <select
                      value={form.qualification}
                      onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="GNM / B.Sc Nursing">GNM / B.Sc Nursing</option>
                      <option value="ANM Nursing">ANM Nursing</option>
                      <option value="GDA / Nursing Aide Certificate">GDA / Nursing Aide</option>
                      <option value="BPT / MPT (Physiotherapy)">BPT / MPT (Physiotherapy)</option>
                      <option value="10th / 12th Pass (Experienced Caretaker)">Experienced Caretaker</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Total Experience
                    </label>
                    <select
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Fresher (0 - 6 Months)">Fresher (0 - 6 Months)</option>
                      <option value="6 Months - 1 Year">6 Months - 1 Year</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Preferred City / Location
                    </label>
                    <select
                      value={form.preferredCity}
                      onChange={(e) => setForm({ ...form, preferredCity: e.target.value })}
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
                    Shift Preference
                  </label>
                  <select
                    value={form.shiftPreference}
                    onChange={(e) => setForm({ ...form, shiftPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="12 Hours (Day Shift)">12 Hours (Day Shift)</option>
                    <option value="12 Hours (Night Shift)">12 Hours (Night Shift)</option>
                    <option value="24 Hours (Live-in Care)">24 Hours (Live-in Care)</option>
                    <option value="Per Visit / Procedure (Flexible)">Per Visit / Procedure (Flexible)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text mb-1">
                    Past Hospital / Experience Summary (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention previous hospitals, clinics, or agency care experience..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full font-bold">
                  Submit Application Now
                </Button>
                <p className="text-[11px] text-text-muted text-center">
                  Have questions about recruitment? Call our HR team at{" "}
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
