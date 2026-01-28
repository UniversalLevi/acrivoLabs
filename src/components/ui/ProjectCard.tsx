import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block relative overflow-hidden rounded-xl border border-gray-800 hover:border-primary-blue transition-all duration-300"
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <p className="text-text-secondary text-sm">Project Preview</p>
          </div>
        </div>
        {project.isConcept && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-xs font-medium border border-accent-orange/30">
              Concept Project
            </span>
          </div>
        )}
      </div>
      <div className="p-6 bg-black border-t border-gray-800">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm">{project.description}</p>
      </div>
    </Link>
  );
}
