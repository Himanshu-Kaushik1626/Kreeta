"use client";

import Link from "next/link";
import {
  Award,
  Calendar,
  Sparkles,
  Camera,
  Heart,
  Users,
  ShieldCheck,
  CheckCircle,
  Building,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function MediaClient() {
  const newsItems = [
    {
      title: "Kreeta Launches 24x7 Emergency Rapid-Deployment Nursing Across Greater Noida West",
      outlet: "NCR Healthcare Digest",
      date: "September 2026",
      summary:
        "Kreeta expands its local dispatch hub at Gaur City Center, reducing critical response times for home nursing and oxygen setups to under 60 minutes.",
    },
    {
      title: "Community Free Eldercare Screening Camp Conducted in Noida Sector 62",
      outlet: "Delhi Metro Health Review",
      date: "August 2026",
      summary:
        "Over 250 senior citizens benefited from complimentary vitals screening, random blood sugar tests, and physiotherapy consultations organized by Kreeta.",
    },
    {
      title: "Kreeta Achieves 100% Police Verification & Council Registration Milestone for 500+ Nurses",
      outlet: "National Nursing Quality Forum",
      date: "July 2026",
      summary:
        "Demonstrating commitment to family security, Kreeta reinforces mandatory background audits and digital credential passports for all active caregivers.",
    },
  ];

  const galleryCategories = [
    {
      title: "Clinical Staff Training & BLS Workshops",
      desc: "Regular monthly refresher training in CPR, infection control, and ventilator management at our Noida center.",
      tag: "Training",
    },
    {
      title: "Senior Citizen Wellness Drives",
      desc: "Free blood pressure, diabetic screening, and mobility counseling in high-rise residential societies.",
      tag: "Community",
    },
    {
      title: "Home ICU Setups & Equipment Delivery",
      desc: "Sterile biomedical deployment of motorized beds, oxygen concentrators, and BiPAP devices.",
      tag: "Operations",
    },
    {
      title: "Nurse Felicitation on International Nurses Day",
      desc: "Honoring our frontline home nursing heroes for exemplary dedication and patient compassion.",
      tag: "Recognition",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50/60 via-white to-sky-50/30 border-b border-border-light">
        <div className="container-custom text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5 text-primary" />
            Press, News & Community Life
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text tracking-tight font-[family-name:var(--font-heading)]">
            Kreeta in the News & Community
          </h1>
          <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-2xl mx-auto">
            Discover our latest community initiatives, clinical training programs, healthcare milestones, and news features across Delhi NCR.
          </p>
        </div>
      </section>

      {/* News Highlights */}
      <section className="section-padding bg-bg-surface">
        <div className="container-custom max-w-5xl">
          <SectionHeading
            badge="Press Releases"
            title="Recent News & Updates"
            subtitle="Keeping Delhi NCR families informed about our service expansions and healthcare initiatives."
          />

          <div className="space-y-4">
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[var(--radius-xl)] border border-border-light p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted mb-2">
                  <span className="font-semibold text-primary">{item.outlet}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Initiatives */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <SectionHeading
            badge="Our Work"
            title="Clinical Excellence in Action"
            subtitle="A glimpse into our clinical workshops, community camps, and patient care standards."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {galleryCategories.map((g, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-xl)] border border-border-light bg-gradient-to-br from-bg-surface to-white p-6 shadow-card hover:border-primary-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary-100 text-primary-800 mb-3">
                    {g.tag}
                  </div>
                  <h4 className="text-base font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                    {g.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">{g.desc}</p>
                </div>

                <div className="pt-3 border-t border-border-light flex items-center gap-2 text-[11px] text-text-muted">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Clinical Activity • Delhi NCR Hub</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
