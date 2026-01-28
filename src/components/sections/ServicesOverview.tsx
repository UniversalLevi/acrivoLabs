"use client";

import { services } from "@/lib/constants";
import ServiceCard from "../ui/ServiceCard";
import FadeIn from "../ui/FadeIn";
import Button from "../ui/Button";

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-content mx-auto">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-neon-cyan">Services</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} direction="up">
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="text-center">
            <Button href="/services" variant="outline" className="text-lg px-8 py-4">
              Explore All Services
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
