"use client";

import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import Card from "@/components/ui/Card";
import { contactInfo } from "@/lib/constants";
import { Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hello%20Acrivo%20Labs!%20I'd%20like%20to%20discuss%20a%20project.`;

  const expectations = [
    "Response within 24 hours",
    "Free initial consultation",
    "Transparent pricing",
    "No commitment required",
  ];

  return (
    <div className="pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Get in <span className="text-neon-cyan">Touch</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Ready to start your project? Let's discuss how we can help bring
              your vision to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <FadeIn direction="up" delay={0.3}>
            <div className="lg:col-span-2">
              <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">
                  Send us a Message
                </h2>
                <ContactForm />
              </Card>
            </div>
          </FadeIn>

          {/* Contact Info & Expectations */}
          <FadeIn direction="up" delay={0.4}>
            <div className="space-y-6">
              <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-neon-cyan">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start space-x-3 text-text-secondary hover:text-neon-cyan transition-colors group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </Card>

              <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-neon-cyan flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Working Hours
                </h3>
                <p className="text-text-secondary">{contactInfo.workingHours}</p>
              </Card>

              <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-neon-cyan">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-neon-cyan">
                  Quick Connect
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  Prefer to chat? Reach out on WhatsApp for faster response.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="secondary" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
