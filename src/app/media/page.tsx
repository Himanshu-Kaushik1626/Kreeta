import { Metadata } from "next";
import MediaClient from "./MediaClient";

export const metadata: Metadata = {
  title: "Media, News & Gallery | Kreeta Nursing Service",
  description:
    "Explore Kreeta Nursing Service in the news, community health drives across Delhi NCR, clinical certifications, and gallery.",
  alternates: {
    canonical: "https://kreetanursingservice.com/media",
  },
};

export default function MediaPage() {
  return <MediaClient />;
}
