import styled, { keyframes } from 'styled-components';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const DialogOverlay = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 50;
  
  &[data-state='open'] {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const DialogContent = styled(DialogPrimitive.Content)`
  background-color: ${({ theme }) => theme.colors.dialogBackground} !important;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  width: 100%;
  max-width: 32rem;
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &[data-state='open'] {
    animation: ${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const CloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  transition: opacity 200ms;
  background: none;
  border: none;
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring};
  }
`;

export const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  text-align: center;
  
  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const DialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const DialogTitle = styled(DialogPrimitive.Title)`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: -0.025em;
`;

export const DialogDescription = styled(DialogPrimitive.Description)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.mutedForeground};
`;

export const IconWrapper = styled(X)`
  width: 1rem;
  height: 1rem;
`;