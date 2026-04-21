import { cn } from "@lib/cn";
import type { TBtnSize, TBtnVariant } from "@src/types";

export const btnStyles = {
  base: (
    variant: TBtnVariant,
    size: TBtnSize,
    fullWidth: boolean,
    disabled: boolean
  ) =>
    cn(
      "inline-flex items-center justify-center gap-2 font-semibold font-cyber tracking-widest uppercase",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base",
      "transition-all duration-150",
      {
        "h-9 px-4 text-xs": size === "sm",
        "h-11 px-5 text-xs": size === "md",
        "h-13 px-7 text-sm": size === "lg",
        "bg-accent text-accent-text hover:bg-accent-hover hover:shadow-neon": variant === "primary",
        "border border-accent/40 bg-transparent text-text-primary hover:border-accent hover:bg-accent-muted":
          variant === "outline",
        "bg-transparent text-text-secondary hover:text-text-primary hover:bg-card-hover":
          variant === "ghost",
        "w-full": fullWidth,
        "opacity-50 cursor-not-allowed pointer-events-none": disabled,
      }
    ),

  spinnerIcon: "animate-spin",

  iconBtn: (size: string) =>
    cn(
      "inline-flex items-center justify-center",
      "text-text-secondary hover:text-accent hover:bg-card-hover",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      "transition-colors duration-150",
      {
        "w-8 h-8": size === "xs" || size === "sm",
        "w-9 h-9": size === "md",
        "w-11 h-11": size === "lg" || size === "xl",
      }
    ),
};
