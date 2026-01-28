"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block relative overflow-hidden rounded-xl glass-panel border border-dark-800 hover:border-neon-cyan/40 hover:shadow-neon transition-all duration-300"
      >
        <div className="relative aspect-video bg-gradient-to-br from-dark-900 to-dark-950 overflow-hidden">
          {/* Animated gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 via-neon-blue/0 to-neon-purple/0 group-hover:from-neon-cyan/20 group-hover:via-neon-blue/10 group-hover:to-neon-purple/20 transition-all duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <ExternalLink className="w-8 h-8 text-dark-950" />
              </motion.div>
              <p className="text-text-secondary text-sm font-mono">Project Preview</p>
            </div>
          </div>
          
          {project.isConcept && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-xs font-medium border border-accent-orange/30 backdrop-blur-sm">
                Concept
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6 bg-dark-900/50 border-t border-dark-800 group-hover:border-neon-cyan/20 transition-colors">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-neon-cyan opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
