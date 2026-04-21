import { cn } from "@lib/cn";

export const welcomeStyles = {
  dialog:
    "fixed inset-0 flex items-center justify-center p-4 bg-transparent backdrop:bg-base/80 backdrop:backdrop-blur-sm",
  panel:
    "relative w-full max-w-lg bg-surface border border-accent/30 shadow-neon-strong animate-fadeIn flex flex-col gap-5 p-6 tablet:p-8",
  panelHeader:
    "flex items-start justify-between gap-4",
  eyebrow:
    "text-xs font-cyber tracking-widest uppercase text-accent/70",
  title:
    "text-xl font-bold font-cyber tracking-wide text-accent neon-text",
  langSwitcher:
    "flex items-center gap-1 shrink-0",
  langBtn: (active: boolean) =>
    cn(
      "px-2.5 py-1 text-xs font-cyber tracking-widest border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      active
        ? "border-accent/50 bg-accent/10 text-accent"
        : "border-border bg-transparent text-text-muted hover:text-text-secondary hover:border-border"
    ),
  body:
    "text-sm text-text-secondary leading-relaxed flex flex-col gap-3",
  featureList:
    "flex flex-col gap-2 pl-1",
  featureItem:
    "flex items-start gap-2 text-sm text-text-secondary",
  featureArrow:
    "text-accent shrink-0 mt-0.5 font-cyber",
  featureText:
    "leading-snug",
  featureBold:
    "text-text-primary font-semibold",
  disclaimer:
    "text-xs text-text-muted border-t border-border pt-4",
  footer:
    "flex items-center justify-between",
  closeBtn:
    "w-8 h-8 flex items-center justify-center border border-border bg-card/80 text-text-secondary hover:text-accent hover:border-accent/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
};
