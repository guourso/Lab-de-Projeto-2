import styled from "styled-components";
import { Check, Circle } from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// Root Component
export const DropdownMenu = styled(DropdownMenuPrimitive.Root)`
  position: relative;
  display: inline-block;
`;

// Portal Component
export const DropdownMenuPortal = styled(DropdownMenuPrimitive.Portal)`
  position: absolute;
  z-index: 50;
`;

// Content Component (updated)
export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 160px;
  background: ${({ theme }) => theme.colors.popoverBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  gap: 16px;
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;

  &[data-state="open"] {
    animation-name: fadeIn;
  }

  &[data-state="closed"] {
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes fadeOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }
`;

// Trigger Component (updated)
export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger)`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.foreground};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring};
  }
`;

// Item Component (updated)
export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item)<{ inset?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};
  transition: all 0.2s;

  ${({ inset }) => inset && `padding-left: 32px;`}

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.ring};
  }
`;

// Separator Component (updated)
export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator)`
  height: 1px;
  margin: 4px 0;
  background: ${({ theme }) => theme.colors.border};
`;

// Sub Components
export const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub)``;

export const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  svg {
    margin-left: auto;
  }
`;

export const DropdownMenuSubContent = styled(DropdownMenuPrimitive.SubContent)`
  min-width: 160px;
  background: ${({ theme }) => theme.colors.popoverBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

// Other Components
export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label)<{ inset?: boolean }>`
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedForeground};
  
  ${({ inset }) => inset && `padding-left: 2rem;`}
`;

export const DropdownMenuShortcut = styled.span`
  margin-left: auto;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

// Icons
export const CheckIcon = styled(Check)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RadioIcon = styled(Circle)`
  width: 14px;
  height: 14px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;