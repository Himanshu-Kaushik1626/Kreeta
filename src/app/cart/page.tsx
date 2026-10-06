import { Metadata } from "next";
import CartClient from "./CartClient";

export const metadata: Metadata = {
  title: "Shopping Cart & Checkout | Kreeta Nursing Service",
  description:
    "Review your medical equipment rentals and lab test bookings. Same day delivery and doorstep sample collection across Delhi NCR.",
  alternates: {
    canonical: "https://kreetanursingservice.com/cart",
  },
};

export default function CartPage() {
  return <CartClient />;
}
