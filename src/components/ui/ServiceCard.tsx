import Card from "./Card";
import { Service } from "@/types";
import { Palette, Globe, Layers, Megaphone } from "lucide-react";

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
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            {service.title}
          </h3>
        </div>
        <p className="text-text-secondary flex-grow">{service.description}</p>
      </div>
    </Card>
  );
}
