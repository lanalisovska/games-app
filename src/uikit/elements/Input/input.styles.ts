import { cn } from "@lib/cn";

export const styles = {
  wrapper: "relative w-full",
  iconWrap: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none",
  input: (hasIcon: boolean, hasError: boolean) =>
    cn(
      "w-full h-11 bg-card border border-border",
      "text-sm text-text-primary placeholder:text-text-muted font-sans",
      "outline-none transition-all duration-150",
      "focus:ring-1 focus:ring-accent/60 focus:border-accent/60 focus:shadow-neon",
      hasIcon ? "pl-10 pr-4" : "px-4",
      hasError && "ring-1 ring-neon-pink border-neon-pink"
    ),
};
