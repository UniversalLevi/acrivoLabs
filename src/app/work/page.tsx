import type { Metadata } from "next";
import { projects } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Work | Acrivo Labs",
  description:
    "Explore our portfolio of design and development projects. See how we've helped businesses create modern digital experiences.",
};

export default function WorkPage() {
  return (
    <div className="pt-20 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our Work
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A collection of projects showcasing our design and development
            capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note about concept projects */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Some projects shown are concept projects created to demonstrate our
            capabilities. All concept projects are clearly labeled.
          </p>
        </div>
      </div>
    </div>
  );
}
