import { cn } from "@lib/cn";

export const navTabsStyles = {
  nav: "relative z-40 border-b border-accent/15 bg-surface/50 backdrop-blur-sm",
  inner: "max-w-[1280px] mx-auto px-4 tablet:px-6 flex items-end gap-0",
  tab: (active: boolean) =>
    cn(
      "relative px-5 py-2.5 text-xs font-cyber tracking-widest uppercase transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent border-b-2 -mb-px",
      active
        ? "text-accent border-accent"
        : "text-text-muted border-transparent hover:text-text-secondary hover:border-border"
    ),
};
