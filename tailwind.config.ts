import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds
        dark: {
          950: "#0a0a0a",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        // Neon accents
        neon: {
          cyan: "#22d3ee",
          blue: "#38bdf8",
          purple: "#a78bfa",
        },
        // Primary brand colors (updated for futuristic theme)
        primary: {
          dark: "#0a0a0a",
          black: "#000000",
          blue: {
            light: "#38bdf8",
            DEFAULT: "#22d3ee",
            dark: "#06b6d4",
          },
        },
        accent: {
          orange: {
            light: "#fb923c",
            DEFAULT: "#f97316",
            dark: "#ea580c",
          },
        },
        text: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.2), 0 0 60px rgba(34, 211, 238, 0.1)",
        "neon-blue": "0 0 20px rgba(56, 189, 248, 0.3), 0 0 40px rgba(56, 189, 248, 0.2), 0 0 60px rgba(56, 189, 248, 0.1)",
        "neon-purple": "0 0 20px rgba(167, 139, 250, 0.3), 0 0 40px rgba(167, 139, 250, 0.2), 0 0 60px rgba(167, 139, 250, 0.1)",
        glow: "0 0 30px rgba(34, 211, 238, 0.4)",
        "glow-lg": "0 0 50px rgba(34, 211, 238, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },
      animation: {
        "gradient-shift": "gradientShift 20s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
