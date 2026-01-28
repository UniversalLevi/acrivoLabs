import type { Metadata } from "next";
import { services } from "@/lib/constants";
import Card from "@/components/ui/Card";
import { Palette, Globe, Layers, Megaphone, Check } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  palette: Palette,
  globe: Globe,
  layers: Layers,
  megaphone: Megaphone,
};

export const metadata: Metadata = {
  title: "Services | Acrivo Labs",
  description:
    "Comprehensive digital services including branding, web development, UI/UX design, and marketing creatives.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 md:space-y-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <Card key={service.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Icon & Title */}
                  <div>
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-text-primary">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-lg">
                      {service.detailedDescription}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {service.whoItsFor && (
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-text-primary">
                          Who It's For
                        </h3>
                        <p className="text-text-secondary">{service.whoItsFor}</p>
                      </div>
                    )}

                    {service.whatYouGet && service.whatYouGet.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-text-primary">
                          What You Get
                        </h3>
                        <ul className="space-y-2">
                          {service.whatYouGet.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3 text-text-secondary"
                            >
                              <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.typicalOutcomes &&
                      service.typicalOutcomes.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-text-primary">
                            Typical Outcomes
                          </h3>
                          <ul className="space-y-2">
                            {service.typicalOutcomes.map((outcome, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3 text-text-secondary"
                              >
                                <Check className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
