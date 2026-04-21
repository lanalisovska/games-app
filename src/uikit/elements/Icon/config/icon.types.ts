import type { TIconColor, TIconName, TIconSize } from "@src/types";

export interface IIconProps {
  name: TIconName;
  size?: TIconSize;
  color?: TIconColor;
  className?: string;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
}
