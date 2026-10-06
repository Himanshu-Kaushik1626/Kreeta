import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Kreeta Nursing Service | 24x7 Delhi NCR Helpline",
  description:
    "Get in touch with Kreeta Nursing Service. Office at Gaur City Center, Greater Noida West. Call +91-8865888772 for 24x7 nursing, caretaker, and home medical support.",
  alternates: {
    canonical: "https://kreetanursingservice.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
