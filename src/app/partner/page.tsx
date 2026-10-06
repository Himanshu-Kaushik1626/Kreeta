import { Metadata } from "next";
import PartnerClient from "./PartnerClient";

export const metadata: Metadata = {
  title: "Partner With Us | Hospital & Doctor Home Care Collaboration | Kreeta",
  description:
    "Partner with Kreeta Nursing Service. Seamless home healthcare continuity for hospitals, doctors, diagnostic labs, and corporate wellness in Delhi NCR.",
  alternates: {
    canonical: "https://kreetanursingservice.com/partner",
  },
};

export default function PartnerPage() {
  return <PartnerClient />;
}
