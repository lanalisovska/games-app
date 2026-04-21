import { forwardRef } from "react";
import { cn } from "@lib/cn";
import { Icon } from "@uikit/elements/Icon/Icon";
import { styles } from "./input.styles";
import type { IInputProps } from "./config/input.types";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ icon, error = false, className, ...props }, ref) => (
    <div className={styles.wrapper}>
      {icon && (
        <span className={styles.iconWrap}>
          <Icon name={icon} size="sm" color="current" aria-hidden />
        </span>
      )}
      <input
        ref={ref}
        className={cn(styles.input(!!icon, error), className)}
        {...props}
      />
    </div>
  )
);

Input.displayName = "Input";
