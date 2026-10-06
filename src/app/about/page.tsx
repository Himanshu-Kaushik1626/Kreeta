import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kreeta Nursing Service — our mission, vision, values, and the team behind trusted home healthcare in Delhi NCR.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
