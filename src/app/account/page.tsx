import { Metadata } from "next";
import AccountDashboardClient from "./AccountDashboardClient";

export const metadata: Metadata = {
  title: "My Account & Care Dashboard | Kreeta Nursing Service",
  description:
    "Manage your home healthcare bookings, active caregiver shifts, equipment rentals, and lab test reports.",
};

export default function AccountPage() {
  return <AccountDashboardClient />;
}
