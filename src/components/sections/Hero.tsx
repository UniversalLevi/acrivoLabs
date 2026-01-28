"use client";

import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient orb background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-neon-cyan/20 via-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-float opacity-50" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-neon-purple/15 to-neon-cyan/15 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-content mx-auto text-center relative z-10">
        <FadeIn delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-neon-cyan/20 mb-8">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-mono text-neon-cyan/80">Modern Digital Studio</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight tracking-tight">
            We design and build{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              modern digital experiences
            </span>{" "}
            for growing businesses.
          </h1>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
            Branding, websites, UI/UX, and marketing creatives — crafted with
            clarity and purpose.
          </p>
        </FadeIn>

        <FadeIn delay={0.7} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
              Start a Project
            </Button>
            <Button href="/work" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
              View Our Work
            </Button>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1} direction="up">
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-sm font-mono">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
