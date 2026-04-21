import { cn } from "@lib/cn";

export const cardStyles = {
  link: "group block overflow-hidden border border-border bg-card hover:bg-card-hover hover:border-accent/40 hover:shadow-neon transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  imageWrap: "relative aspect-video overflow-hidden bg-surface",
  image: "object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90",
  badge: (status: "open" | "full") =>
    cn(
      "absolute top-3 right-3 px-2 py-0.5 text-xs font-bold font-cyber tracking-widest uppercase",
      status === "open"
        ? "bg-neon-green/10 text-neon-green border border-neon-green/40"
        : "bg-neon-pink/10 text-neon-pink border border-neon-pink/40"
    ),
  body: "p-4 flex flex-col gap-3 relative before:content-[''] before:absolute before:top-0 before:inset-x-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/25 before:to-transparent",
  title: "text-sm font-semibold text-text-primary leading-snug line-clamp-2 min-h-[38px]",
  meta: "flex flex-wrap gap-x-4 gap-y-1",
  metaItem: "flex items-center gap-1.5 text-xs text-text-muted",
  footer: "flex items-center justify-between pt-3 border-t border-border",
  prize: "text-sm font-bold text-accent font-cyber tracking-wide",
  game: "text-xs font-cyber tracking-widest uppercase text-neon-pink/70",
};
