import { cn } from "@lib/cn";
import { iconPaths } from "./icon.paths";
import type { IIconProps } from "./config/icon.types";
import type { TIconColor, TIconSize } from "@src/types";

const sizeMap: Record<TIconSize, string> = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

const colorMap: Record<TIconColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  accent: "text-accent",
  white: "text-white",
  current: "",
};

export const Icon = ({
  name,
  size = "md",
  color = "current",
  className,
  "aria-hidden": ariaHidden = true,
  "aria-label": ariaLabel,
}: IIconProps) => {
  const path = iconPaths[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={path.viewBox ?? "0 0 24 24"}
      fill={path.strokeWidth === 0 ? "currentColor" : "none"}
      stroke={path.strokeWidth === 0 ? "none" : "currentColor"}
      strokeWidth={path.strokeWidth === 0 ? undefined : (path.strokeWidth ?? 1.5)}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      className={cn(sizeMap[size], colorMap[color], "shrink-0", className)}
    >
      <path d={path.d} />
    </svg>
  );
};
