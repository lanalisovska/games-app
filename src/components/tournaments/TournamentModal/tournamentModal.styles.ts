import { cn } from "@lib/cn";

export const modalStyles = {
  dialog: "fixed inset-0 flex items-end tablet:items-center justify-center p-0 tablet:p-4",
  panel: "relative w-full tablet:max-w-[580px] bg-surface border border-accent/25 shadow-neon-strong overflow-hidden animate-slideUp tablet:animate-fadeIn max-h-[92dvh] flex flex-col",
  topActions: "absolute top-4 right-4 z-10 flex gap-2",
  actionBtn: "w-8 h-8 flex items-center justify-center border border-border bg-card/80 backdrop-blur-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  closeBtn: "absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center border border-border bg-card/80 backdrop-blur-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  imageWrap: "relative w-full aspect-video shrink-0 bg-base overflow-hidden",
  image: "object-cover brightness-75",
  scrollable: "overflow-y-auto flex-1",
  body: "p-5 tablet:p-6 flex flex-col gap-5",
  header: "flex flex-col gap-1",
  title: "text-xl font-bold text-text-primary leading-tight pr-8 font-cyber tracking-wide",
  badge: (status: "open" | "full") =>
    cn(
      "self-start px-2.5 py-0.5 text-xs font-bold font-cyber tracking-widest uppercase",
      status === "open"
        ? "text-neon-green border border-neon-green/40 bg-neon-green/10"
        : "text-neon-pink border border-neon-pink/40 bg-neon-pink/10"
    ),
  description: "text-sm text-text-secondary leading-relaxed",
  metaGrid: "grid grid-cols-2 gap-3",
  metaCard: "flex items-center gap-3 p-3 bg-card border border-border border-l-2 border-l-accent/50",
  metaIcon: "text-accent shrink-0",
  metaLabel: "text-xs text-text-muted font-cyber tracking-widest uppercase",
  metaValue: "text-sm font-semibold text-text-primary",
  footer: "p-5 tablet:p-6 pt-0",
  joinSuccess: "flex items-center justify-center gap-2 w-full h-11 border border-neon-green/30 bg-neon-green/10 text-sm font-semibold text-neon-green font-cyber tracking-wider",
};
