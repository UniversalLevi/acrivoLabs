"use client";

import { projects } from "@/lib/constants";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";

export default function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-content mx-auto">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Selected <span className="text-neon-cyan">Work</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              A glimpse into our design and development capabilities
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="text-center">
            <Button href="/work" variant="outline" className="text-lg px-8 py-4">
              View All Work
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
