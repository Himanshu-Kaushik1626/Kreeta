import { Metadata } from "next";
import QuickRequestClient from "./QuickRequestClient";

export const metadata: Metadata = {
  title: "Urgent Home Healthcare Request | 60-Second Booking | Kreeta",
  description:
    "Need urgent nursing, injection, dressing, or oxygen support at home in Delhi NCR? Submit your quick request for an immediate callback within 10 minutes.",
  alternates: {
    canonical: "https://kreetanursingservice.com/quick-request",
  },
};

export default function QuickRequestPage() {
  return <QuickRequestClient />;
}
