"use client";

import type { Metadata } from "next";
import { services } from "@/lib/constants";
import Card from "@/components/ui/Card";
import { Palette, Globe, Layers, Megaphone, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  palette: Palette,
  globe: Globe,
  layers: Layers,
  megaphone: Megaphone,
};

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-neon-cyan">Services</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>

        {/* Services List */}
        <div className="space-y-12 md:space-y-16">
          {services.map((service, serviceIndex) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <FadeIn key={service.id} delay={serviceIndex * 0.1} direction="up">
                <Card className="overflow-hidden hover:border-neon-cyan/40 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Icon & Title */}
                    <div>
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-6 shadow-neon">
                        <Icon className="w-10 h-10 text-dark-950" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
                        {service.title}
                      </h2>
                      <p className="text-text-secondary text-lg leading-relaxed">
                        {service.detailedDescription}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-2 space-y-8">
                      {service.whoItsFor && (
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-neon-cyan">
                            Who It's For
                          </h3>
                          <p className="text-text-secondary leading-relaxed">{service.whoItsFor}</p>
                        </div>
                      )}

                      {service.whatYouGet && service.whatYouGet.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-neon-cyan">
                            What You Get
                          </h3>
                          <ul className="space-y-3">
                            {service.whatYouGet.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3 text-text-secondary"
                              >
                                <Check className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.typicalOutcomes &&
                        service.typicalOutcomes.length > 0 && (
                          <div>
                            <h3 className="text-xl font-semibold mb-4 text-neon-cyan">
                              Typical Outcomes
                            </h3>
                            <ul className="space-y-3">
                              {service.typicalOutcomes.map((outcome, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3 text-text-secondary"
                                >
                                  <Check className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA Section */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-16 text-center glass-panel border border-neon-cyan/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Book a Discovery Call
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
