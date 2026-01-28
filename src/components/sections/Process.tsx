"use client";

import { processSteps } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950/50" />
      
      <div className="max-w-content mx-auto relative z-10">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              How We <span className="text-neon-cyan">Work</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              A clear, structured process that keeps you informed every step of
              the way
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan/20 via-neon-blue/30 to-neon-cyan/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {processSteps.map((step, index) => (
              <FadeIn key={step.id} delay={index * 0.15} direction="up">
                <motion.div
                  className="relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-panel border border-neon-cyan/20 rounded-xl p-6 h-full hover:border-neon-cyan/40 hover:shadow-neon transition-all duration-300 group">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue text-dark-950 font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neon">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-8 h-8 text-neon-cyan" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
