import styled, { keyframes } from 'styled-components';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const slideUp = keyframes`
  from { transform: translateY(2px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-2px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const SelectTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.foreground};

  &:focus {
    outline: none;
    ring: 2px solid ${({ theme }) => theme.ring};
    ring-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-placeholder] {
    color: ${({ theme }) => theme.mutedForeground};
  }
`;

export const SelectScrollButton = styled.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`;

export const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  ${SelectScrollButton}
`;

export const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  ${SelectScrollButton}
`;

export const SelectContent = styled(SelectPrimitive.Content)<{ position?: 'popper' | 'item-aligned' }>`
  background-color: ${({ theme }) => theme.colors.popoverBackground};
  color: ${({ theme }) => theme.popoverForeground};
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.popoverBorder};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 50;
  max-height: 384px;
  min-width: 8rem;

  &[data-state='open'] {
    animation: ${slideUp} 0.2s ease-out;
  }

  &[data-state='closed'] {
    animation: ${slideDown} 0.2s ease-out;
  }

  ${({ position }) => position === 'popper' && `
    &[data-side='bottom'] {
      transform: translateY(0.25rem);
    }
    &[data-side='left'] {
      transform: translateX(-0.25rem);
    }
    &[data-side='right'] {
      transform: translateX(0.25rem);
    }
    &[data-side='top'] {
      transform: translateY(-0.25rem);
    }
  `}
`;

export const SelectViewport = styled(SelectPrimitive.Viewport)<{ position?: 'popper' | 'item-aligned' }>`
  padding: 0.25rem;

  ${({ position }) => position === 'popper' && `
    height: var(--radix-select-trigger-height);
    width: var(--radix-select-trigger-width);
    min-width: 100%;
  `}
`;

export const SelectLabel = styled(SelectPrimitive.Label)`
  padding: 0.375rem 2rem 0.375rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const SelectItem = styled(SelectPrimitive.Item)`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  padding: 0.375rem 2rem 0.375rem 2rem;
  font-size: 0.875rem;
  border-radius: 0.125rem;
  outline: none;

  &:focus {
    background-color: ${({ theme }) => theme.colors.brandPress};
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const SelectSeparator = styled(SelectPrimitive.Separator)`
  height: 1px;
  margin: 0.25rem -0.25rem;
  background-color: ${({ theme }) => theme.mutedBackground};
`;

export const ChevronDownIcon = styled(ChevronDown)`
  width: 1rem;
  height: 1rem;
  opacity: 0.5;
`;

export const ChevronUpIcon = styled(ChevronUp)`
  width: 1rem;
  height: 1rem;
`;

export const CheckIcon = styled(Check)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 0.5rem;
`;

export const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;