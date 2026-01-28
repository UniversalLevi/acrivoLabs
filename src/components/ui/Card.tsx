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
        "bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 transition-all duration-200 hover:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
}
