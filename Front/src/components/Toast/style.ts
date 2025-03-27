import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  max-height: 100vh;
  padding: 1rem;

  @media (min-width: 640px) {
    bottom: 0;
    right: 0;
    top: auto;
    max-width: 420px;
  }
`;

export const ToastWrapper = styled.div<{ variant?: "default" | "destructive" }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  border: 1px solid ${({ theme, variant }) => (variant === "destructive" ? theme.colors.destructive : theme.colors.border)};
  background-color: ${({ theme, variant }) => (variant === "destructive" ? theme.colors.destructiveBackground : theme.colors.background)};
  color: ${({ theme, variant }) => (variant === "destructive" ? theme.colors.destructiveForeground : theme.colors.foreground)};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.enter {
    transform: translateY(100%);
    opacity: 0;
  }

  &.enter-active {
    transform: translateY(0);
    opacity: 1;
  }

  &.exit {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const ToastTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
`;

export const ToastDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.9;
`;

export const ToastCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.foreground};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ToastActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: medium;
  border-radius: ${({ theme }) => theme.radius.small};
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;
