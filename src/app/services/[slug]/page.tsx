import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceDetailClient } from "./ServiceDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Kreeta Nursing Service`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Kreeta Nursing Service`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return <ServiceDetailClient service={service} relatedServices={relatedServices} />;
}
