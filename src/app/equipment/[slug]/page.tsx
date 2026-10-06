import { Metadata } from "next";
import { notFound } from "next/navigation";
import { equipment } from "@/data/equipment";
import EquipmentDetailClient from "./EquipmentDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return equipment.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = equipment.find((e) => e.slug === slug);

  if (!item) {
    return {
      title: "Equipment Not Found — Kreeta Nursing Service",
    };
  }

  return {
    title: `${item.name} on Rent & Sale in Delhi NCR | Kreeta Nursing Service`,
    description: `Rent or buy ${item.name} for home healthcare in Delhi, Noida, Gurgaon, Greater Noida, Faridabad, Ghaziabad. Same day doorstep delivery & installation.`,
    alternates: {
      canonical: `https://kreetanursingservice.com/equipment/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} — Home Medical Equipment Rental`,
      description: item.description,
      url: `https://kreetanursingservice.com/equipment/${item.slug}`,
      siteName: "Kreeta Nursing Service",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = equipment.find((e) => e.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedItems = equipment
    .filter((e) => e.id !== item.id && e.category === item.category)
    .slice(0, 3);

  return <EquipmentDetailClient item={item} relatedItems={relatedItems} />;
}
