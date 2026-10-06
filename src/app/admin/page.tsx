import { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin Portal & Care Coordination | Kreeta Nursing Service",
  description: "Internal operations dashboard for bookings, equipment, staff dispatch, and inquiries.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminClient />;
}
