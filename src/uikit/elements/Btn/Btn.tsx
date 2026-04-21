import { cn } from "@lib/cn";
import { Icon } from "@uikit/elements/Icon/Icon";
import { btnStyles } from "./btn.styles";
import type { IBtnProps, IIconBtnProps } from "./config/btn.types";
import type { TIconSize } from "@src/types";

const iconSizeByBtn: Record<string, TIconSize> = {
  sm: "xs",
  md: "sm",
  lg: "md",
};

export const Btn = ({
  variant = "primary",
  size = "md",
  icon,
  iconSize,
  iconPosition = "left",
  loading = false,
  fullWidth = false,
  disabled = false,
  children,
  className,
  ...props
}: IBtnProps) => {
  const resolvedIconSize = iconSize ?? (iconSizeByBtn[size] as TIconSize);
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(btnStyles.base(variant, size, fullWidth, isDisabled), className)}
    >
      {loading ? (
        <Icon name="loader" size={resolvedIconSize} color="current" className={btnStyles.spinnerIcon} />
      ) : (
        icon && iconPosition === "left" && (
          <Icon name={icon} size={resolvedIconSize} color="current" />
        )
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === "right" && (
        <Icon name={icon} size={resolvedIconSize} color="current" />
      )}
    </button>
  );
};

export const IconBtn = ({
  name,
  size = "md",
  label,
  className,
  ...props
}: IIconBtnProps) => (
  <button
    {...props}
    aria-label={label}
    className={cn(btnStyles.iconBtn(size), className)}
  >
    <Icon name={name} size={size} color="current" />
  </button>
);
