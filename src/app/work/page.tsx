"use client";

import type { Metadata } from "next";
import { projects } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function WorkPage() {
  return (
    <div className="pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-neon-cyan">Work</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A collection of projects showcasing our design and development
              capabilities
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {/* Note about concept projects */}
        <FadeIn direction="up" delay={0.5}>
          <div className="text-center glass-panel border border-dark-800 rounded-xl p-6">
            <p className="text-text-muted text-sm font-mono">
              Some projects shown are concept projects created to demonstrate our
              capabilities. All concept projects are clearly labeled.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Start Your Project
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
