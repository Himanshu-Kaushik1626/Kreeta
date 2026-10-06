"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Calendar,
  User,
  MapPin,
  Clock,
  Shield,
  Phone,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  Heart,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import { CITIES, PHONE, PHONE_RAW, WHATSAPP_MSG } from "@/lib/constants";
import { isValidPhone, isValidEmail } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface BookingState {
  serviceId: string;
  shiftType: string;
  duration: string;
  patientName: string;
  patientAge: string;
  patientGender: "Male" | "Female" | "Other" | "";
  mobility: "Bedridden" | "Needs Support" | "Independent" | "";
  condition: string;
  attendantGenderPref: "Female" | "Male" | "No Preference";
  specialNeeds: string;
  city: string;
  address: string;
  landmark: string;
  pincode: string;
  startDate: string;
  startTime: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  relationship: string;
  notes: string;
}

export default function BookingClient() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<BookingState>({
    serviceId: services[0].id,
    shiftType: "12 Hours (Day)",
    duration: "15 Days",
    patientName: "",
    patientAge: "",
    patientGender: "Female",
    mobility: "Needs Support",
    condition: "",
    attendantGenderPref: "No Preference",
    specialNeeds: "",
    city: "Noida",
    address: "",
    landmark: "",
    pincode: "",
    startDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    startTime: "09:00 AM",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    relationship: "Son / Daughter",
    notes: "",
  });

  const selectedService = services.find((s) => s.id === form.serviceId) || services[0];

  const shiftOptions = [
    { label: "12 Hours (Day)", desc: "8 AM to 8 PM or custom daytime window" },
    { label: "12 Hours (Night)", desc: "8 PM to 8 AM overnight care and vitals" },
    { label: "24 Hours (Live-in)", desc: "Round the clock resident nursing care" },
    { label: "Per Procedure / Visit", desc: "For injections, dressing, catheter or physio" },
  ];

  const durationOptions = [
    "Single Day / Procedure",
    "7 Days (Weekly)",
    "15 Days",
    "30 Days (Monthly)",
    "Ongoing Long-Term",
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.serviceId) newErrors.serviceId = "Please select a service";
    } else if (step === 2) {
      if (!form.patientName.trim()) newErrors.patientName = "Patient name is required";
      if (!form.patientAge.trim()) newErrors.patientAge = "Patient age is required";
      if (!form.condition.trim()) newErrors.condition = "Please mention brief medical condition";
    } else if (step === 3) {
      if (!form.city) newErrors.city = "Please select city";
      if (!form.address.trim()) newErrors.address = "Complete address is required";
      if (!form.pincode.trim() || form.pincode.length < 6)
        newErrors.pincode = "Valid 6-digit pincode is required";
      if (!form.contactName.trim()) newErrors.contactName = "Primary contact name is required";
      if (!isValidPhone(form.contactPhone))
        newErrors.contactPhone = "Valid 10-digit mobile number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) {
      setCurrentStep(3);
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `KRT-${new Date().getFullYear()}-${randomNum}`;
    setBookingRef(ref);

    const waMsg = `*🚨 NEW PATIENT BOOKING (${ref})*\n\n` +
      `🏥 *Service:* ${selectedService.title}\n` +
      `⏱️ *Shift & Duration:* ${form.shiftType} (${form.duration})\n` +
      `👤 *Patient:* ${form.patientName} (${form.patientAge}y, ${form.patientGender})\n` +
      `🩺 *Condition:* ${form.condition} (${form.mobility})\n` +
      `📍 *Location:* ${form.city}, Pincode: ${form.pincode}\n` +
      `🏠 *Address:* ${form.address} (Landmark: ${form.landmark || "N/A"})\n` +
      `📅 *Start Date:* ${form.startDate} at ${form.startTime}\n` +
      `📞 *Contact:* ${form.contactName} (${form.contactPhone}, ${form.relationship})\n` +
      `👥 *Attendant Pref:* ${form.attendantGenderPref}\n` +
      (form.specialNeeds ? `⚠️ *Special Needs:* ${form.specialNeeds}\n` : "") +
      (form.notes ? `📝 *Notes:* ${form.notes}\n` : "");

    const waUrl = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, "_blank");

    setIsSubmitted(true);
    window.scrollTo({ top: 80, behavior: "smooth" });
  };

  const whatsappMsgText = `*New Booking Request: ${bookingRef || "KRT-PENDING"}*
- *Service:* ${selectedService.title}
- *Shift:* ${form.shiftType} (${form.duration})
- *Patient:* ${form.patientName} (${form.patientAge}y, ${form.patientGender})
- *Condition:* ${form.condition} (${form.mobility})
- *City / Area:* ${form.city}, Pin: ${form.pincode}
- *Address:* ${form.address}, Near ${form.landmark || "N/A"}
- *Start Date:* ${form.startDate} at ${form.startTime}
- *Contact:* ${form.contactName} (${form.contactPhone}, ${form.relationship})
${form.notes ? `- *Notes:* ${form.notes}` : ""}`;

  return (
    <div className="min-h-screen bg-bg-surface py-10 md:py-16">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-100/60 border border-primary-200 text-primary-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Easy 4-Step Home Healthcare Booking
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text font-[family-name:var(--font-heading)]">
            Schedule Home Care Service
          </h1>
          <p className="text-sm text-text-secondary max-w-lg mx-auto mt-2">
            Share your patient's requirements and our senior clinical coordinator will match the best certified caregiver in Delhi NCR.
          </p>
        </div>

        {/* Multi-step progress bar */}
        {!isSubmitted && (
          <div className="bg-white rounded-[var(--radius-xl)] p-4 sm:p-6 border border-border-light shadow-soft mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-border-light z-0" />
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary transition-all duration-300 z-0"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />

              {[
                { num: 1, label: "Service & Shift" },
                { num: 2, label: "Patient Profile" },
                { num: 3, label: "Location & Schedule" },
                { num: 4, label: "Review & Confirm" },
              ].map((step) => {
                const isCompleted = currentStep > step.num;
                const isCurrent = currentStep === step.num;

                return (
                  <div key={step.num} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all shadow-xs ${
                        isCompleted
                          ? "bg-primary text-white"
                          : isCurrent
                          ? "bg-white border-2 border-primary text-primary ring-4 ring-primary-100"
                          : "bg-white border border-border text-text-muted"
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold mt-2 hidden sm:block ${
                        isCurrent ? "text-primary" : "text-text-muted"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step Contents */}
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[var(--radius-xl)] border border-emerald-200 p-8 sm:p-12 shadow-elevated text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-3">
              Booking Request Received
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] mb-2">
              Thank You, {form.contactName}!
            </h2>
            <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
              Your home healthcare booking request has been registered under reference number:
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-[var(--radius-lg)] p-4 max-w-sm mx-auto mb-6">
              <div className="text-xs text-text-muted font-medium">Booking Reference ID</div>
              <div className="text-2xl font-black text-primary tracking-wider">{bookingRef}</div>
            </div>

            <div className="bg-bg-surface p-5 rounded-[var(--radius-lg)] max-w-lg mx-auto text-left text-xs space-y-2 mb-8 border border-border-light">
              <div className="flex justify-between py-1 border-b border-border-light">
                <span className="text-text-muted">Service:</span>
                <span className="font-semibold text-text">{selectedService.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-light">
                <span className="text-text-muted">Shift & Duration:</span>
                <span className="font-semibold text-text">{form.shiftType} ({form.duration})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-light">
                <span className="text-text-muted">Patient:</span>
                <span className="font-semibold text-text">{form.patientName} ({form.patientAge}y, {form.patientGender})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-light">
                <span className="text-text-muted">City / Address:</span>
                <span className="font-semibold text-text">{form.city}, {form.address}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-text-muted">Start Date:</span>
                <span className="font-semibold text-text">{form.startDate} at {form.startTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_MSG(whatsappMsgText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-4 h-4 mr-2" /> Share Details on WhatsApp
                </Button>
              </a>
              <a href={`tel:${PHONE}`} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="w-4 h-4 mr-2 text-primary" /> Call Coordinator Now
                </Button>
              </a>
            </div>

            <p className="text-xs text-text-muted mt-6">
              Our clinical supervisor will call you on <strong>{form.contactPhone}</strong> within 15–30 minutes to confirm the caregiver deployment.
            </p>
          </motion.div>
        ) : (
          <div className="bg-white rounded-[var(--radius-xl)] border border-border-light shadow-card p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {/* STEP 1: SERVICE & SHIFT */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
                      Step 1: Select Service & Shift
                    </h2>
                    <p className="text-xs text-text-muted mt-1">
                      Choose the primary healthcare assistance needed for your patient.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-2">
                      Select Healthcare Service *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                      {services.map((svc) => {
                        const isSelected = form.serviceId === svc.id;
                        return (
                          <div
                            key={svc.id}
                            onClick={() => setForm({ ...form, serviceId: svc.id })}
                            className={`p-3.5 rounded-[var(--radius-md)] border text-left cursor-pointer transition-all ${
                              isSelected
                                ? "border-primary bg-primary-50/50 shadow-xs ring-2 ring-primary/20"
                                : "border-border-light hover:border-primary-200 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-xs text-text">{svc.title}</span>
                              {isSelected && <Check className="w-4 h-4 text-primary shrink-0" />}
                            </div>
                            <p className="text-[11px] text-text-muted line-clamp-1">{svc.description}</p>
                            <div className="text-[11px] font-bold text-primary mt-1">
                              From {svc.pricing[0] ? `₹${svc.pricing[0].price}` : "Affordable rates"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.serviceId && (
                      <p className="text-red-500 text-xs mt-1">{errors.serviceId}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1.5">
                        Shift Requirement *
                      </label>
                      <div className="space-y-2">
                        {shiftOptions.map((opt) => (
                          <label
                            key={opt.label}
                            className={`flex items-start gap-2.5 p-3 rounded-[var(--radius-md)] border cursor-pointer transition-all text-xs ${
                              form.shiftType === opt.label
                                ? "border-primary bg-primary-50/40 text-text font-medium"
                                : "border-border-light hover:border-border text-text-secondary"
                            }`}
                          >
                            <input
                              type="radio"
                              name="shiftType"
                              checked={form.shiftType === opt.label}
                              onChange={() => setForm({ ...form, shiftType: opt.label })}
                              className="mt-0.5 text-primary focus:ring-primary"
                            />
                            <div>
                              <div className="font-semibold">{opt.label}</div>
                              <div className="text-[11px] text-text-muted">{opt.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1.5">
                        Expected Duration
                      </label>
                      <div className="space-y-2">
                        {durationOptions.map((dur) => (
                          <label
                            key={dur}
                            className={`flex items-center gap-2.5 p-3 rounded-[var(--radius-md)] border cursor-pointer transition-all text-xs ${
                              form.duration === dur
                                ? "border-primary bg-primary-50/40 text-text font-medium"
                                : "border-border-light hover:border-border text-text-secondary"
                            }`}
                          >
                            <input
                              type="radio"
                              name="duration"
                              checked={form.duration === dur}
                              onChange={() => setForm({ ...form, duration: dur })}
                              className="text-primary focus:ring-primary"
                            />
                            <span>{dur}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-border-light">
                    <Button variant="primary" onClick={handleNext}>
                      Next: Patient Profile <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: PATIENT PROFILE */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
                      Step 2: Patient Health Profile
                    </h2>
                    <p className="text-xs text-text-muted mt-1">
                      Helps our clinical team match a caregiver with the exact skills required.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nirmala Devi"
                        value={form.patientName}
                        onChange={(e) => setForm({ ...form, patientName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      {errors.patientName && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.patientName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Age (Years) *
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 72"
                          value={form.patientAge}
                          onChange={(e) => setForm({ ...form, patientAge: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        {errors.patientAge && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.patientAge}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">Gender</label>
                        <select
                          value={form.patientGender}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              patientGender: e.target.value as "Male" | "Female" | "Other",
                            })
                          }
                          className="w-full px-3 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Mobility Status
                      </label>
                      <select
                        value={form.mobility}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            mobility: e.target.value as "Bedridden" | "Needs Support" | "Independent",
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="Needs Support">Semi-ambulatory (Needs Support)</option>
                        <option value="Bedridden">Bedridden (Total Support Needed)</option>
                        <option value="Independent">Independent (Supervision only)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Caregiver Gender Preference
                      </label>
                      <select
                        value={form.attendantGenderPref}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            attendantGenderPref: e.target.value as "Female" | "Male" | "No Preference",
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="No Preference">Any Gender (Best Available)</option>
                        <option value="Female">Female Caregiver Preferred</option>
                        <option value="Male">Male Caregiver Preferred</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Primary Diagnosis / Medical Condition *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Post-stroke recovery, hip fracture, Alzheimer's, post-chemotherapy"
                      value={form.condition}
                      onChange={(e) => setForm({ ...form, condition: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    {errors.condition && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.condition}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Special Medical Needs (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tracheostomy, Ryle's Tube feeding, Foley catheter, Oxygen concentrator"
                      value={form.specialNeeds}
                      onChange={(e) => setForm({ ...form, specialNeeds: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-border-light">
                    <Button variant="outline" onClick={handleBack}>
                      <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                    </Button>
                    <Button variant="primary" onClick={handleNext}>
                      Next: Location & Schedule <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: LOCATION & SCHEDULE */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
                      Step 3: Location & Schedule
                    </h2>
                    <p className="text-xs text-text-muted mt-1">
                      Tell us where and when the care service should commence.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">City *</label>
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

                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Pincode (Delhi NCR) *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="e.g. 201301"
                        value={form.pincode}
                        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      {errors.pincode && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.pincode}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Complete Address (Flat / House No., Society / Street) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tower B, Flat 804, Gaur City 2, Greater Noida West"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">Landmark</label>
                      <input
                        type="text"
                        placeholder="Near Metro / Mall"
                        value={form.landmark}
                        onChange={(e) => setForm({ ...form, landmark: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        value={form.startDate}
                        onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text mb-1">
                        Preferred Time
                      </label>
                      <select
                        value={form.startTime}
                        onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="Immediate (Within 2 Hours)">Immediate (Emergency)</option>
                        <option value="08:00 AM">08:00 AM (Morning Shift)</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="02:00 PM">02:00 PM (Afternoon)</option>
                        <option value="08:00 PM">08:00 PM (Night Shift)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border-light">
                    <h3 className="text-xs font-bold text-text mb-3">Primary Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Contact Person's Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={form.contactName}
                          onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        {errors.contactName && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.contactName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.contactPhone}
                          onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        {errors.contactPhone && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.contactPhone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Relationship to Patient
                        </label>
                        <select
                          value={form.relationship}
                          onChange={(e) => setForm({ ...form, relationship: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="Son / Daughter">Son / Daughter</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Self">Self</option>
                          <option value="Parent">Parent</option>
                          <option value="Relative / Friend">Relative / Friend</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="name@email.com"
                          value={form.contactEmail}
                          onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-border-light">
                    <Button variant="outline" onClick={handleBack}>
                      <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                    </Button>
                    <Button variant="primary" onClick={handleNext}>
                      Next: Review & Confirm <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: REVIEW & CONFIRM */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
                      Step 4: Review Your Booking Details
                    </h2>
                    <p className="text-xs text-text-muted mt-1">
                      Please double-check all details before submitting. No advance payment is required upfront.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-bg-surface rounded-[var(--radius-lg)] p-5 border border-border-light space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border-light">
                      <div>
                        <div className="text-xs text-text-muted">Selected Service</div>
                        <div className="text-base font-bold text-primary">{selectedService.title}</div>
                      </div>
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
                        {form.shiftType}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-text-muted block">Patient Name & Age:</span>
                        <span className="font-semibold text-text">
                          {form.patientName}, {form.patientAge} Years ({form.patientGender})
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted block">Condition & Mobility:</span>
                        <span className="font-semibold text-text">
                          {form.condition} ({form.mobility})
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted block">Service Location:</span>
                        <span className="font-semibold text-text">
                          {form.address}, {form.city} - {form.pincode}
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted block">Schedule Start:</span>
                        <span className="font-semibold text-text">
                          {form.startDate} at {form.startTime} ({form.duration})
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted block">Contact Person:</span>
                        <span className="font-semibold text-text">
                          {form.contactName} ({form.relationship}) — {form.contactPhone}
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted block">Caregiver Preference:</span>
                        <span className="font-semibold text-text">{form.attendantGenderPref}</span>
                      </div>
                    </div>

                    {form.specialNeeds && (
                      <div className="pt-2 text-xs border-t border-border-light">
                        <span className="text-text-muted">Special Medical Needs:</span>{" "}
                        <span className="font-medium text-text">{form.specialNeeds}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text mb-1">
                      Additional Notes for Caregiver (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any habits, dietary restrictions, or specific doctor instructions..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-[var(--radius-md)] border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-[var(--radius-md)] flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-emerald-900">
                      <div className="font-bold">Kreeta Trust & Guarantee</div>
                      <div>
                        Free in-person or telephonic clinical assessment • 100% Police-verified staff •
                        Replacement guarantee within 24h if unsatisfied • Zero advance payment required now.
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border-light">
                    <Button variant="outline" onClick={handleBack}>
                      <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                    </Button>
                    <Button variant="primary" size="lg" onClick={handleSubmit}>
                      Confirm & Submit Booking <Check className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
