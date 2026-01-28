import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowLeft, Code2, Palette, Monitor } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Acrivo Labs",
    };
  }

  return {
    title: `${project.title} | Acrivo Labs`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Back Button */}
        <FadeIn direction="up" delay={0.1}>
          <Link
            href="/work"
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </Link>
        </FadeIn>

        {/* Project Header */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mb-12">
            {project.isConcept && (
              <span className="inline-block px-4 py-2 rounded-full bg-accent-orange/20 text-accent-orange text-sm font-medium border border-accent-orange/30 mb-6 backdrop-blur-sm">
                Concept Project
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </FadeIn>

        {/* Project Image/Preview */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mb-12">
            <div className="relative aspect-video glass-panel border border-neon-cyan/20 rounded-xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center p-8 relative z-10">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-12 h-12 text-dark-950" />
                </div>
                <p className="text-text-secondary font-mono">Project Preview</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {project.objective && (
              <FadeIn direction="up" delay={0.4}>
                <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">
                    Objective
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{project.objective}</p>
                </Card>
              </FadeIn>
            )}

            {project.approach && (
              <FadeIn direction="up" delay={0.5}>
                <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neon-cyan">
                    Approach
                  </h2>
                  <p className="text-text-secondary leading-relaxed">{project.approach}</p>
                </Card>
              </FadeIn>
            )}
          </div>

          {/* Sidebar */}
          <FadeIn direction="up" delay={0.6}>
            <div className="space-y-6">
              {project.tools && project.tools.length > 0 && (
                <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-text-primary flex items-center">
                    <Code2 className="w-5 h-5 mr-2 text-neon-cyan" />
                    Tools & Technologies
                  </h3>
                  <ul className="space-y-3">
                    {project.tools.map((tool, index) => (
                      <li
                        key={index}
                        className="text-text-secondary text-sm flex items-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-neon-cyan mr-3 shadow-neon"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              <Card className="hover:border-neon-cyan/40 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-text-primary flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-accent-orange" />
                  Project Type
                </h3>
                <p className="text-text-secondary">
                  {project.isConcept ? "Concept Project" : "Client Project"}
                </p>
              </Card>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={0.7}>
          <div className="text-center glass-panel border border-neon-cyan/20 rounded-2xl p-8 md:p-12">
            <p className="text-text-secondary text-lg mb-6">
              Interested in working together on a similar project?
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Get in Touch
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
