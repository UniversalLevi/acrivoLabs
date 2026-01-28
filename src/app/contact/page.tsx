import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import Card from "@/components/ui/Card";
import { contactInfo } from "@/lib/constants";
import { Mail, MessageCircle, Clock } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us | Acrivo Labs",
  description:
    "Get in touch with Acrivo Labs. We're here to help bring your digital vision to life.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hello%20Acrivo%20Labs!%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring
            your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6 text-text-primary">
                Send us a Message
              </h2>
              <ContactForm />
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold mb-4 text-text-primary">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start space-x-3 text-text-secondary hover:text-primary-blue transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4 text-text-primary flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Working Hours
              </h3>
              <p className="text-text-secondary">{contactInfo.workingHours}</p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4 text-text-primary">
                Quick Connect
              </h3>
              <p className="text-text-secondary text-sm mb-4">
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
        </div>
      </div>
    </div>
  );
}
