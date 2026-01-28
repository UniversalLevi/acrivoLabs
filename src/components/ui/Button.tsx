import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-950 hover:shadow-neon-blue hover:scale-[1.02] active:scale-[0.98] font-bold",
    secondary:
      "bg-gradient-to-r from-accent-orange to-accent-orange-light text-white hover:from-accent-orange-dark hover:to-accent-orange hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "text-text-secondary hover:text-neon-cyan hover:bg-dark-800/50 border border-transparent hover:border-neon-cyan/30",
    outline:
      "border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
