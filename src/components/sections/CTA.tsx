"use client";

import Button from "../ui/Button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function CTA() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hello%20Acrivo%20Labs!%20I'd%20like%20to%20discuss%20a%20project.`;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 animate-gradient-shift" />
      
      <div className="max-w-content mx-auto relative z-10">
        <FadeIn direction="up" delay={0.2}>
          <motion.div
            className="glass-panel-strong border-2 border-neon-cyan/30 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-blue/5 opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                  meaningful
                </span>{" "}
                together
              </h2>
              <p className="text-text-secondary text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to start your project? Get in touch and let&apos;s discuss how we
                can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 group">
                  Book a Discovery Call
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-accent-orange text-accent-orange font-semibold hover:bg-accent-orange hover:text-white transition-all duration-300 w-full sm:w-auto text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
