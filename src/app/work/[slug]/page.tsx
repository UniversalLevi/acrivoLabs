import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowLeft, Code2, Palette, Monitor } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary-blue transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Work</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          {project.isConcept && (
            <span className="inline-block px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-sm font-medium border border-accent-orange/30 mb-4">
              Concept Project
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Image/Preview */}
        <div className="mb-12">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center">
                <Monitor className="w-12 h-12 text-white" />
              </div>
              <p className="text-text-secondary">Project Preview</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {project.objective && (
              <Card>
                <h2 className="text-2xl font-bold mb-4 text-text-primary">
                  Objective
                </h2>
                <p className="text-text-secondary">{project.objective}</p>
              </Card>
            )}

            {project.approach && (
              <Card>
                <h2 className="text-2xl font-bold mb-4 text-text-primary">
                  Approach
                </h2>
                <p className="text-text-secondary">{project.approach}</p>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {project.tools && project.tools.length > 0 && (
              <Card>
                <h3 className="text-lg font-semibold mb-4 text-text-primary flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-primary-blue" />
                  Tools & Technologies
                </h3>
                <ul className="space-y-2">
                  {project.tools.map((tool, index) => (
                    <li
                      key={index}
                      className="text-text-secondary text-sm flex items-center"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary-blue mr-3"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <Card>
              <h3 className="text-lg font-semibold mb-4 text-text-primary flex items-center">
                <Palette className="w-5 h-5 mr-2 text-accent-orange" />
                Project Type
              </h3>
              <p className="text-text-secondary">
                {project.isConcept ? "Concept Project" : "Client Project"}
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-6">
            Interested in working together on a similar project?
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
