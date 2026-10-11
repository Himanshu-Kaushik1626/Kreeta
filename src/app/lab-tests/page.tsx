import { Metadata } from "next";
import LabTestsClient from "./LabTestsClient";

export const metadata: Metadata = {
  title: "Book Blood Tests & Health Checkups at Home | Kreeta Nursing Service",
  description:
    "Convenient home blood sample collection in Delhi NCR. Certified phlebotomists, NABL accredited reports within 12-24 hours on WhatsApp. Full body checkups and customized health packages.",
  alternates: {
    canonical: "https://kreetanursingservice.com/lab-tests",
  },
};

export default function LabTestsPage() {
  return <LabTestsClient />;
}
