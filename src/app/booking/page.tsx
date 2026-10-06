import { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Book Home Nursing & Healthcare Service | Kreeta Nursing Service",
  description:
    "Book qualified nurses, caretakers, physiotherapy, and medical equipment for your home across Delhi NCR. Instant confirmation & 24x7 clinical support.",
  alternates: {
    canonical: "https://kreetanursingservice.com/booking",
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
