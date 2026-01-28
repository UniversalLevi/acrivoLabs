import { projects } from "@/lib/constants";
import ProjectCard from "../ui/ProjectCard";
import Button from "../ui/Button";

export default function PortfolioPreview() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A glimpse into our design and development capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/work" variant="outline">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
}
