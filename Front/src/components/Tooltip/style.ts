import styled from "styled-components";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  z-index: 50;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid;
  background-color: var(--popover);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  color: var(--popover-foreground);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: fade-in 150ms ease-out, zoom-in-95 150ms ease-out;

  &[data-state="closed"] {
    animation: fade-out 150ms ease-in, zoom-out-95 150ms ease-in;
  }

  &[data-side="bottom"] {
    animation: slide-in-from-top-2 150ms ease-out;
  }
  &[data-side="left"] {
    animation: slide-in-from-right-2 150ms ease-out;
  }
  &[data-side="right"] {
    animation: slide-in-from-left-2 150ms ease-out;
  }
  &[data-side="top"] {
    animation: slide-in-from-bottom-2 150ms ease-out;
  }
`;