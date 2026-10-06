import { Metadata } from "next";
import { PHONE, EMAIL, ADDRESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Medical & Clinical Disclaimer | Kreeta Nursing Service",
  description:
    "Important clinical guidelines, emergency disclaimers, and scope of home healthcare services provided by Kreeta Nursing Service.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-bg-surface py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-[var(--radius-xl)] p-8 sm:p-12 border border-border-light shadow-card prose prose-slate max-w-none">
          <div className="border-b border-border-light pb-6 mb-8">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Clinical Guidelines & Notices
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text mt-2 font-[family-name:var(--font-heading)]">
              Medical Disclaimer
            </h1>
            <p className="text-xs text-text-muted mt-2">
              Important information regarding the scope and limitations of home healthcare services
            </p>
          </div>

          <section className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-[var(--radius-md)] text-amber-900 font-medium">
              ⚠️ In case of life-threatening emergencies (e.g., sudden chest pain, severe breathlessness, loss of consciousness, uncontrolled bleeding), call national emergency services (108 / 112) or take the patient to the nearest hospital emergency department immediately.
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">1. No Independent Medical Advice or Diagnosis</h2>
              <p>
                The information provided on this website, in our promotional material, or during telephonic intake is for educational and general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment by a licensed physician. Always seek the advice of your primary doctor with any questions regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">2. Scope of Nursing & Caregiver Practice</h2>
              <p>
                Our registered nurses (GNM / B.Sc) and general duty assistants administer doctor-prescribed medications, execute wound care, monitor vital signs, and provide supportive rehabilitation according to established clinical nursing protocols and treating physician orders. They do not formulate new medical diagnoses or initiate prescription pharmacotherapy without doctor authorization.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">3. Medical Equipment Safety & Operational Responsibility</h2>
              <p>
                All medical equipment supplied on rent or sale (such as Oxygen Concentrators, BiPAPs, Hospital Beds, Ventilators) is sanitized, calibrated, and demonstrated upon delivery. Operational parameters (e.g., Oxygen flow rate in L/min, BiPAP pressures IPAP/EPAP) must be set according to the treating pulmonologist's or intensivist's written prescription.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text mb-2">4. Limitation of Liability</h2>
              <p>
                While {SITE_NAME} maintains rigorous caregiver verification, background checks, and clinical supervision standards, home healthcare inherently operates outside the controlled environment of a tertiary hospital. {SITE_NAME} shall not be liable for complications arising from undisclosed pre-existing patient conditions, failure to follow physician guidance, or natural disease progression.
              </p>
            </div>

            <div className="pt-6 border-t border-border-light text-xs text-text-muted">
              {SITE_NAME} Clinical Governance & Quality Assurance <br />
              {ADDRESS.full} <br />
              Emergency Advisory Helpline: <a href={`tel:${PHONE}`} className="text-primary hover:underline font-bold">{PHONE}</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
