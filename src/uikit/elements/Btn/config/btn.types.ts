import type { TBtnSize, TBtnVariant, TIconName, TIconSize } from "@src/types";

export interface IBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBtnVariant;
  size?: TBtnSize;
  icon?: TIconName;
  iconSize?: TIconSize;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
}

export interface IIconBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: TIconName;
  size?: TIconSize;
  label: string;
}
