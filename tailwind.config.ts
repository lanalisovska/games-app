import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        "card-hover": "var(--color-card-hover)",
        border: "var(--color-border)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-muted": "var(--color-accent-muted)",
        "accent-text": "var(--color-accent-text)",
        "neon-pink": "var(--color-neon-pink)",
        "neon-green": "var(--color-neon-green)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        cyber: ["var(--font-orbitron)", "monospace"],
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
        xl: "1280px",
      },
      borderRadius: {
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        pulseNeon: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(0,229,255,0.4), 0 0 20px rgba(0,229,255,0.15)" },
          "50%": { boxShadow: "0 0 16px rgba(0,229,255,0.7), 0 0 40px rgba(0,229,255,0.3)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s linear infinite",
        fadeIn: "fadeIn 0.2s ease-out",
        slideUp: "slideUp 0.25s ease-out",
        flicker: "flicker 3s ease-in-out infinite",
        pulseNeon: "pulseNeon 2s ease-in-out infinite",
      },
      boxShadow: {
        neon: "0 0 12px rgba(0,229,255,0.3), 0 0 30px rgba(0,229,255,0.12)",
        "neon-strong": "0 0 20px rgba(0,229,255,0.5), 0 0 50px rgba(0,229,255,0.2)",
        "neon-pink": "0 0 12px rgba(255,45,120,0.35), 0 0 30px rgba(255,45,120,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
