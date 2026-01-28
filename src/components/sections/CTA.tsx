import Button from "../ui/Button";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants";

export default function CTA() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hello%20Acrivo%20Labs!%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's build something meaningful together
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how we
            can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Contact Us
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-accent-orange text-accent-orange font-medium hover:bg-accent-orange hover:text-white transition-all duration-200 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
