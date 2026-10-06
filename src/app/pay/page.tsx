import { Metadata } from "next";
import PayClient from "./PayClient";

export const metadata: Metadata = {
  title: "Pay Online | Secure Healthcare Bill Payment | Kreeta",
  description:
    "Make safe, encrypted online payments for home nursing services, caregiver renewals, medical equipment deposits, and lab tests.",
  alternates: {
    canonical: "https://kreetanursingservice.com/pay",
  },
};

export default function PayPage() {
  return <PayClient />;
}
