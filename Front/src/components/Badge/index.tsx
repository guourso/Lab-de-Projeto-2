import * as React from "react";
import { StyledBadge } from "./style";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "success"
  | "warning"
  | "error";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <StyledBadge ref={ref} variant={variant} className={className} {...props} />
  )
);

Badge.displayName = "Badge";

export { Badge };
