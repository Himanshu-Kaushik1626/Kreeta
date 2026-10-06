import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import CityClient from "./CityClient";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    name: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const city = cities.find((c) => c.slug === name);

  if (!city) {
    return {
      title: "City Not Found — Kreeta Nursing Service",
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `https://kreetanursingservice.com/city/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://kreetanursingservice.com/city/${city.slug}`,
      siteName: "Kreeta Nursing Service",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { name } = await params;
  const city = cities.find((c) => c.slug === name);

  if (!city) {
    notFound();
  }

  return <CityClient city={city} />;
}
