/* ------------------------------------------------------------------ *
 *  Navigation structure                                                *
 * ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Nursing Care (12h / 24h)", href: "/services/nursing-care" },
      { label: "Elderly & Patient Care", href: "/services/caretaker-elderly-care" },
      { label: "GDA (General Duty Assistant)", href: "/services/gda" },
      { label: "Physiotherapy at Home", href: "/services/physiotherapy-at-home" },
      { label: "Injection & IV Drip", href: "/services/injection-iv-drip" },
      { label: "Catheter Change", href: "/services/catheter-change" },
      { label: "RT Tube Care", href: "/services/rt-tube-care" },
      { label: "Doctor Visit at Home", href: "/services/doctor-visit-at-home" },
      { label: "ECG at Home", href: "/services/ecg-at-home" },
      { label: "Bedsore Care & Dressing", href: "/services/bedsore-care" },
      { label: "Palliative & Critical Care", href: "/services/palliative-care" },
      { label: "Mother & Baby Care", href: "/services/mother-baby-care" },
      { label: "Post-Discharge Care", href: "/services/post-discharge-care" },
      { label: "Tracheostomy Care", href: "/services/tracheostomy-care" },
    ],
  },
  {
    label: "Equipment",
    href: "/equipment",
    children: [
      { label: "Oxygen Concentrator (5L / 10L)", href: "/equipment/oxygen-concentrator-5l" },
      { label: "Hospital ICU Beds", href: "/equipment/hospital-bed-manual" },
      { label: "BiPAP & CPAP Machines", href: "/equipment/bipap-machine" },
      { label: "Patient Monitors", href: "/equipment/patient-monitor" },
      { label: "Air Mattresses (Anti-Bedsore)", href: "/equipment/air-mattress" },
      { label: "Wheelchairs & Mobility", href: "/equipment/wheelchair-standard" },
      { label: "View All Medical Equipment →", href: "/equipment" },
    ],
  },
  { label: "Lab Tests", href: "/lab-tests" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  services: [
    { label: "Nursing Care", href: "/services/nursing-care" },
    { label: "Elderly Care", href: "/services/caretaker-elderly-care" },
    { label: "Physiotherapy", href: "/services/physiotherapy-at-home" },
    { label: "Doctor at Home", href: "/services/doctor-visit-at-home" },
    { label: "Lab Tests", href: "/lab-tests" },
    { label: "Medical Equipment", href: "/equipment" },
    { label: "Mother & Baby Care", href: "/services/mother-baby-care" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Media", href: "/media" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Medical Disclaimer", href: "/disclaimer" },
  ],
  cities: [
    { label: "Delhi", href: "/city/delhi" },
    { label: "Noida", href: "/city/noida" },
    { label: "Greater Noida", href: "/city/greater-noida" },
    { label: "Gurgaon", href: "/city/gurgaon" },
    { label: "Faridabad", href: "/city/faridabad" },
    { label: "Ghaziabad", href: "/city/ghaziabad" },
  ],
};
