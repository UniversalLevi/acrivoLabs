import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel border border-dark-800 rounded-xl p-6 transition-all duration-300 hover:border-neon-cyan/30 hover:shadow-neon",
        className
      )}
    >
      {children}
    </div>
  );
}
