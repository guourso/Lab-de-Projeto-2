import styled, { css } from "styled-components";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "brand"
  | "ghost"
  | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/* Estilos base do botão */
const BaseButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  outline: none;
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    flex-shrink: 0;
  }
`;

/* Estilos por tamanho */
const sizeStyles = {
  default: css`
    height: 2.5rem;
    padding: 0 1rem;
  `,
  sm: css`
    height: 2.25rem;
    padding: 0 0.75rem;
  `,
  lg: css`
    height: 2.75rem;
    padding: 0 2rem;
  `,
  icon: css`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
  `,
};

/* Estilos por variante */
const variantStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}cc;
    }
  `,
  destructive: css`
    background-color: ${({ theme }) => theme.colors.destructive};
    color: ${({ theme }) => theme.colors.destructiveForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.destructive}cc;
    }
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent}20;
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary}cc;
    }
  `,
  brand: css`
    background-color: ${({ theme }) => theme.colors.brand};
    color: ${({ theme }) => theme.colors.secondaryForeground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.brandPress}cc;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.foreground};
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent}20;
    }
  `,
  link: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `,
};

/* Componente final do botão */
export const Button = styled(BaseButton)<ButtonProps>`
  ${({ size = "default" }) => sizeStyles[size]}
  ${({ variant = "default" }) => variantStyles[variant]}
`;

Button.defaultProps = {
  variant: "default",
  size: "default",
};
