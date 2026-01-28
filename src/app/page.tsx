import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyAcrivo from "@/components/sections/WhyAcrivo";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyAcrivo />
      <PortfolioPreview />
      <Process />
      <CTA />
    </>
  );
}
