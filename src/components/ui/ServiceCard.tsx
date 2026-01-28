"use client";

import Card from "./Card";
import { Service } from "@/types";
import { Palette, Globe, Layers, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  palette: Palette,
  globe: Globe,
  layers: Layers,
  megaphone: Megaphone,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full group">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <motion.div
              className="w-14 h-14 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neon"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-7 h-7 text-dark-950" />
            </motion.div>
            <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-text-secondary flex-grow leading-relaxed">
            {service.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
