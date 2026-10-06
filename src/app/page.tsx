import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsCounters } from "@/components/home/StatsCounters";
import { CityChips } from "@/components/home/CityChips";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABanner } from "@/components/home/CTABanner";

/**
 * Home page — assembled from all home sections.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <StatsCounters />
      <Testimonials />
      <CityChips />
      <FAQSection />
      <CTABanner />
    </>
  );
}
