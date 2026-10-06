import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Kreeta Nursing Service | Nursing & Caregiver Jobs in Delhi NCR",
  description:
    "Join our compassionate healthcare team in Delhi NCR. Hiring GNM, B.Sc Nurses, GDAs, Caretakers, and Physiotherapists. Competitive pay, flexible shifts & safe work environment.",
  alternates: {
    canonical: "https://kreetanursingservice.com/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
