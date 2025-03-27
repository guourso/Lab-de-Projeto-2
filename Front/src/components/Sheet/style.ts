import styled, { css, keyframes } from 'styled-components';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

const slideIn = (side: string) => keyframes`
  from {
    transform: ${side === 'right' ? 'translateX(100%)' : 
               side === 'left' ? 'translateX(-100%)' :
               side === 'top' ? 'translateY(-100%)' : 'translateY(100%)'};
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = (side: string) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: ${side === 'right' ? 'translateX(100%)' : 
               side === 'left' ? 'translateX(-100%)' :
               side === 'top' ? 'translateY(-100%)' : 'translateY(100%)'};
  }
`;

export const SheetOverlay = styled(SheetPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  z-index: 50;
  
  &[data-state='open'] {
    animation: fadeIn 150ms ease-out;
  }
  
  &[data-state='closed'] {
    animation: fadeOut 150ms ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export const SheetContent = styled(SheetPrimitive.Content).attrs<{ side?: 'top' | 'bottom' | 'left' | 'right' }>(props => ({
  side: props.side || 'right'
}))<{ side?: 'top' | 'bottom' | 'left' | 'right' }>`
  position: fixed;
  z-index: 50;
  gap: 1rem;
  background: ${({ theme }) => theme.background};
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  ${({ side }) => css`
    ${side === 'right' && css`
      right: 0;
      top: 0;
      height: 100%;
      width: 100%;
      max-width: 24rem;
      border-left: 1px solid ${({ theme }) => theme.border};
    `}

    ${side === 'left' && css`
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      max-width: 24rem;
      border-right: 1px solid ${({ theme }) => theme.border};
    `}

    ${side === 'top' && css`
      top: 0;
      left: 0;
      right: 0;
      border-bottom: 1px solid ${({ theme }) => theme.border};
    `}

    ${side === 'bottom' && css`
      bottom: 0;
      left: 0;
      right: 0;
      border-top: 1px solid ${({ theme }) => theme.border};
    `}

    &[data-state='open'] {
      animation: ${slideIn(side || 'right')} 300ms ease-out;
    }

    &[data-state='closed'] {
      animation: ${slideOut(side || 'right')} 300ms ease-out;
    }
  `}
`;

export const SheetClose = styled(SheetPrimitive.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  padding: 0.25rem;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring};
  }
`;

export const SheetHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  
  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const SheetFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  margin-top: 1.5rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const SheetTitle = styled(SheetPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.foreground};
`;

export const SheetDescription = styled(SheetPrimitive.Description)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.mutedForeground};
`;

export const CloseIcon = styled(X)`
  width: 1rem;
  height: 1rem;
`;