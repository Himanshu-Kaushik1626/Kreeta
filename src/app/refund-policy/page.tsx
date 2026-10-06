import { Metadata } from "next";
import { PHONE, EMAIL, ADDRESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Kreeta Nursing Service",
  description:
    "Understand the transparent refund, advance return, and shift cancellation policies for Kreeta Nursing Service home healthcare.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-surface py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-[var(--radius-xl)] p-8 sm:p-12 border border-border-light shadow-card prose prose-slate max-w-none">
          <div className="border-b border-border-light pb-6 mb-8">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Financial Transparency
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text mt-2 font-[family-name:var(--font-heading)]">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-text-muted mt-2">
              Last Updated: October 2026 | Fair & Transparent Billing Practices
            </p>
          </div>

          <section className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-text mb-2">1. Booking Cancellations & Advance Deposits</h2>
              <p>
                We understand that healthcare situations can change unpredictably due to patient hospitalization, recovery, or other family circumstances. Our refund policy is structured to be as fair and accommodating as possible:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Cancellation &gt; 12 Hours Before Shift Start:</strong> 100% full refund of any advance booking fee paid, processed back to the original payment source.</li>
                <li><strong>Cancellation &lt; 12 Hours Before Shift Start:</strong> A nominal mobilization fee of ₹500 (or equivalent to half of single shift charge) is retained to compensate the dispatched caregiver for travel and lost assignment, and the remaining advance is refunded in full.</li>
                <li><strong>Cancellation After Staff Arrival:</strong> The first day / shift will be billed at standard day rate, and all remaining balance days will be refunded.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">2. Pro-Rata Refunds on Monthly or Multi-Day Packages</h2>
              <p>
                If a patient is discharged, hospitalized, or no longer requires services mid-contract on a 15-day or 30-day package:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Billing will be recalculated based only on the actual days/shifts utilized at standard rates.</li>
                <li>The unused balance amount will be refunded directly to your bank account within 3 to 5 business days without hidden forfeiture fees.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">3. Caregiver Replacement & Dissatisfaction Policy</h2>
              <p>
                If you are unsatisfied with the punctuality, demeanor, or clinical capability of the allocated caregiver:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Notify your care coordinator immediately. We provide a guaranteed free replacement within 12 to 24 hours.</li>
                <li>If we are unable to provide a satisfactory replacement within 24 hours, you may cancel the service with an immediate 100% refund of all unserved days.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">4. Medical Equipment Rental Security Deposits</h2>
              <p>
                Refundable security deposits collected on equipment rentals (e.g. Oxygen Concentrators, Hospital Beds, BiPAPs) are returned within 24 to 48 hours following physical pickup and inspection of the device in working order.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">5. Refund Processing Timelines</h2>
              <p>
                Approved refunds are processed via UPI / NEFT bank transfer within <strong>3 to 5 working days</strong>. You will receive an official confirmation SMS / WhatsApp receipt upon transfer execution.
              </p>
            </div>

            <div className="pt-6 border-t border-border-light text-xs text-text-muted">
              For billing questions, refund claims, or payment receipts: <br />
              Accounts Department, {SITE_NAME} <br />
              Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a> | Helpline: <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE}</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
