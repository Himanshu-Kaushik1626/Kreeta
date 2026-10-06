import { Metadata } from "next";
import Link from "next/link";
import { PHONE, EMAIL, ADDRESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions | Kreeta Nursing Service",
  description:
    "Read the service agreement, caregiver terms, booking conditions, and client obligations for Kreeta Nursing Service home healthcare services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-surface py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-[var(--radius-xl)] p-8 sm:p-12 border border-border-light shadow-card prose prose-slate max-w-none">
          <div className="border-b border-border-light pb-6 mb-8">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Legal Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text mt-2 font-[family-name:var(--font-heading)]">
              Terms & Conditions
            </h1>
            <p className="text-xs text-text-muted mt-2">
              Last Updated: October 2026 | Effective for all home healthcare services rendered by {SITE_NAME}
            </p>
          </div>

          <section className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-text mb-2">1. Scope of Agreement</h2>
              <p>
                These Terms and Conditions govern your engagement with <strong>{SITE_NAME}</strong> ("Kreeta", "we", "us", or "our") for the provision of home nursing, caretaker, general duty assistance, physiotherapy, and medical equipment rental or sale services across Delhi NCR. By booking a caregiver, equipment, or service through our website, telephone, WhatsApp, or in person, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">2. Nature of Home Healthcare Services</h2>
              <p>
                Kreeta facilitates trained and verified nursing personnel (GNM, B.Sc), patient caretakers, and allied medical professionals for in-home or in-hospital non-critical and post-operative support. Our staff operates under the clinical guidance of your treating physician or hospital discharge summary. Kreeta is a specialized home nursing and caregiver provider and does not replace emergency tertiary hospital infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">3. Client Responsibilities & Safe Environment</h2>
              <p>
                To enable our healthcare workers to provide optimal care, the client and patient family agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Provide accurate and complete medical history, prescriptions, allergy alerts, and doctor instructions.</li>
                <li>Provide safe, hygienic, and dignified working conditions for nursing staff, including adequate rest breaks and basic meals / lodging for 24-hour live-in attendants.</li>
                <li>Refrain from requesting staff to perform non-healthcare domestic chores (e.g., house cleaning, cooking for the family, or laundry unrelated to the patient).</li>
                <li>Ensure a zero-tolerance environment towards physical, verbal, or mental harassment of staff. Kreeta reserves the immediate right to withdraw staff if safety is compromised.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">4. Shifts, Attendance & Replacement Guarantee</h2>
              <p>
                Nursing and caregiver shifts operate on standard 12-hour day (typically 8:00 AM – 8:00 PM), 12-hour night (8:00 PM – 8:00 AM), or 24-hour live-in formats. In the event a caregiver is unable to attend due to illness or emergency, or if the client is unsatisfied with the caregiver's performance, Kreeta commits to providing a qualified replacement within 12 to 24 hours of notification.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">5. Billing, Payments & Non-Solicitation</h2>
              <p>
                All service fees must be paid directly to {SITE_NAME} via authorized bank transfer, UPI, Razorpay gateway, or official receipted instruments. <strong>Direct financial transactions or private hiring of Kreeta staff without written agency authorization is strictly prohibited</strong> and constitutes a material breach of contract, voiding all liability coverage and background guarantees.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">6. Medical Equipment Rental & Custody</h2>
              <p>
                Equipment (e.g., Oxygen Concentrators, Hospital Beds, BiPAP/CPAP machines, Suction apparatus) remains the property of Kreeta. The client is responsible for standard upkeep, electrical surge protection, and reporting any malfunction immediately for free servicing or replacement.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">7. Jurisdiction</h2>
              <p>
                This agreement shall be governed by and construed in accordance with the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar / Greater Noida, Uttar Pradesh.
              </p>
            </div>

            <div className="pt-6 border-t border-border-light text-xs text-text-muted">
              For any legal or service inquiries, contact us at: <br />
              <strong>{SITE_NAME}</strong>, {ADDRESS.full} <br />
              Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a> | Phone: <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE}</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
