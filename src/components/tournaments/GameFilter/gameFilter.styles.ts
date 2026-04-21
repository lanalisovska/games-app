import { cn } from "@lib/cn";

export const filterStyles = {
  wrapper: "flex flex-wrap gap-2",
  chip: (active: boolean) =>
    cn(
      "px-3 py-1.5 text-xs font-semibold font-cyber tracking-widest uppercase",
      "border transition-all duration-150 cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      active
        ? "bg-accent text-accent-text border-accent shadow-neon"
        : "bg-transparent text-text-muted border-border hover:border-accent/50 hover:text-text-secondary hover:bg-accent-muted"
    ),
};
