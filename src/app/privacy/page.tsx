import { Metadata } from "next";
import { PHONE, EMAIL, ADDRESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Kreeta Nursing Service",
  description:
    "Learn how Kreeta Nursing Service collects, secures, and handles patient health information in compliance with Indian healthcare data privacy laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-surface py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-[var(--radius-xl)] p-8 sm:p-12 border border-border-light shadow-card prose prose-slate max-w-none">
          <div className="border-b border-border-light pb-6 mb-8">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Data Protection & Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text mt-2 font-[family-name:var(--font-heading)]">
              Privacy Policy
            </h1>
            <p className="text-xs text-text-muted mt-2">
              Last Updated: October 2026 | Compliant with the Digital Personal Data Protection (DPDP) Act, 2023
            </p>
          </div>

          <section className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-text mb-2">1. Overview</h2>
              <p>
                At <strong>{SITE_NAME}</strong>, we recognize the deeply personal and sensitive nature of health information. This Privacy Policy details how we collect, process, store, and protect your personal and medical information when you interact with our website, booking forms, mobile communications, and in-person healthcare staff.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">2. Information We Collect</h2>
              <p>We collect only the information strictly required to coordinate and provide safe home medical care:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Contact Identifiers:</strong> Name, phone number, email address, physical residence address, and landmark.</li>
                <li><strong>Patient Clinical Details:</strong> Age, gender, primary diagnosis, mobility status, allergies, doctor prescriptions, and required medical devices.</li>
                <li><strong>Operational Information:</strong> Preferred caregiver shift timings, feedback ratings, service renewal dates, and payment transaction references.</li>
                <li><strong>Technical Data:</strong> Cookies, IP address, and browser analytics to optimize site performance and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">3. Purpose and Use of Information</h2>
              <p>Your data is used solely for the following legitimate healthcare purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Matching patient needs with appropriate nurse and caregiver skillsets.</li>
                <li>Communicating shift confirmations, caregiver police verification details, and scheduling updates.</li>
                <li>Invoicing, processing payments, and fulfilling statutory taxation requirements.</li>
                <li>Clinical quality audits and emergency escalation to your designated treating doctor or hospital.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">4. Non-Disclosure & Sharing of Data</h2>
              <p>
                <strong>We do not sell, rent, or trade your medical or contact details to third-party advertisers or insurance brokers.</strong> Information is shared only with:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>The assigned caregiver and clinical supervisor strictly for care delivery.</li>
                <li>Diagnostic partner laboratories or ambulance providers with your explicit consent.</li>
                <li>Government or law enforcement authorities only when compelled by valid legal subpoenas under Indian law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">5. Data Security Measures</h2>
              <p>
                We implement industry-grade technical and physical safeguards including SSL/TLS 256-bit encryption for web transfers, restricted internal staff access controls, and secure database storage. Caregivers are bound by strict non-disclosure agreements prohibiting recording or photography of patients without written authorization.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">6. Your Rights</h2>
              <p>
                You retain the right to review the personal data stored with us, request corrections, or request deletion of non-statutory records upon completion of service. For data grievances, contact our Grievance Officer at <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>.
              </p>
            </div>

            <div className="pt-6 border-t border-border-light text-xs text-text-muted">
              {SITE_NAME} Data Protection Desk <br />
              {ADDRESS.full} <br />
              Direct Contact: <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE}</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
