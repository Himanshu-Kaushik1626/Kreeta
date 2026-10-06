import { Metadata } from "next";
import EquipmentListingClient from "./EquipmentListingClient";

export const metadata: Metadata = {
  title: "Medical Equipment on Rent & Sale in Delhi NCR | Kreeta Nursing Service",
  description:
    "Rent or buy certified medical equipment for home: Oxygen Concentrators, Hospital Beds, BiPAP/CPAP, Wheelchairs, Suction Machines. Same-day delivery across Delhi NCR.",
  alternates: {
    canonical: "https://kreetanursingservice.com/equipment",
  },
};

export default function EquipmentPage() {
  return <EquipmentListingClient />;
}
