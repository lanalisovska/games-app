import type { TIconName } from "@src/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: TIconName;
  error?: boolean;
}
