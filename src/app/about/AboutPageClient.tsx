"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Eye,
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with the warmth, respect, and dignity they deserve.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description: "Police-verified, background-checked staff you can trust with your family.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description: "Clinically trained professionals with continuous skill development.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time, every time. 24x7 availability with rapid deployment.",
  },
];

const team = [
  { name: "Care Coordinators", count: "10+", description: "Manage cases, ensure quality, and stay in touch with families." },
  { name: "Registered Nurses", count: "100+", description: "GNM and B.Sc. qualified nurses with ICU and ward experience." },
  { name: "Trained Caretakers", count: "80+", description: "Geriatric and patient care certified with empathy assessments." },
  { name: "Physiotherapists", count: "20+", description: "BPT/MPT qualified therapists specializing in home rehabilitation." },
];

const verificationSteps = [
  "Document and certificate verification",
  "Police verification and background check",
  "Clinical skill assessment by senior nurses",
  "Empathy and communication evaluation",
  "Onboarding training on Kreeta protocols",
  "Regular performance reviews and upskilling",
];

export function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-white py-12 md:py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-primary-50 rounded-full border border-primary-100">
              About Kreeta
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
              Bringing Hospital-Quality Care{" "}
              <span className="gradient-text">Home</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Kreeta Nursing Service was founded with a simple belief — everyone
              deserves access to professional, compassionate healthcare in the
              comfort of their own home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                Who We Are
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Based in Greater Noida, Kreeta Nursing Service is a
                  home healthcare agency serving families across Delhi, Noida,
                  Greater Noida, Gurgaon, Faridabad, and Ghaziabad. We connect
                  patients with qualified nurses, trained caretakers,
                  physiotherapists, and doctors — delivering hospital-standard
                  care right at their doorstep.
                </p>
                <p>
                  We understand that illness and recovery are stressful for the
                  entire family. That is why we focus not just on clinical care,
                  but also on emotional support, transparent communication, and
                  genuine compassion. Our team is carefully selected, rigorously
                  trained, and continuously supervised to ensure your loved ones
                  receive the best possible care.
                </p>
                <p>
                  Beyond nursing, we provide medical equipment on rent and sale,
                  lab tests at home, doctor consultations, and a wide range of
                  specialized services — making us a one-stop solution for home
                  healthcare in Delhi NCR.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-50/50 rounded-[var(--radius-xl)] p-8 space-y-6"
            >
              {/* Mission */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-[var(--radius-md)] flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">Our Mission</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    To make professional, affordable, and compassionate
                    healthcare accessible to every home in Delhi NCR, enabling
                    patients to heal with dignity in familiar surroundings.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-[var(--radius-md)] flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-1">Our Vision</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    To become India&apos;s most trusted home healthcare brand,
                    known for clinical excellence, patient-first values, and
                    innovation in care delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            subtitle="These core values guide every decision we make and every interaction we have with patients and their families."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-[var(--radius-lg)] border border-border-light p-6 text-center hover:shadow-card hover:border-primary-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-text mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Trust & Safety"
                title="Our Staff Verification Process"
                subtitle="Every healthcare professional at Kreeta goes through a rigorous multi-step verification before they are assigned to a patient."
                centered={false}
              />
              <div className="space-y-3">
                {verificationSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                    <span className="text-text-secondary">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-4">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="bg-primary-50/50 rounded-[var(--radius-lg)] p-5 border border-primary-100/50"
                >
                  <p className="text-2xl font-bold text-primary mb-1">
                    {member.count}
                  </p>
                  <h4 className="font-semibold text-text text-sm mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Placeholder */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <SectionHeading
            badge="Certifications"
            title="Accredited & Certified"
            subtitle="We are committed to meeting the highest standards in home healthcare delivery."
          />
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["ISO Certified", "NABH Guidelines", "PMKVY Trained", "First Aid Certified"].map(
              (cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-20 h-20 bg-white rounded-full border-2 border-border flex items-center justify-center shadow-sm">
                    <Award className="w-8 h-8 text-primary-200" />
                  </div>
                  <p className="text-sm font-medium text-text-secondary">
                    {cert}
                  </p>
                </motion.div>
              )
            )}
          </div>
          <p className="mt-6 text-xs text-text-muted">
            Certification badges are placeholders. Replace with actual
            certifications.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
            Ready to Experience the Kreeta Difference?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let us take care of your loved ones with the professionalism and
            compassion they deserve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/booking">
              <Button variant="accent" size="lg" iconRight={<ArrowRight className="w-5 h-5" />}>
                Book a Service
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-primary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
