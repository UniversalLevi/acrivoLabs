"use client";

import { whyAcrivoPoints } from "@/lib/constants";
import Card from "../ui/Card";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function WhyAcrivo() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-content mx-auto">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Why <span className="text-neon-cyan">Acrivo Labs</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              We focus on how we work, not how big we are
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyAcrivoPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full group hover:border-neon-cyan/40 hover:shadow-neon transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-dark-950" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
