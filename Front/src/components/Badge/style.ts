import styled from "styled-components";

export const StyledBadge = styled.div<{
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning"
    | "error";
}>`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: background-color 0.2s, color 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring};
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return `
          background-color: ${theme.secondary};
          color: ${theme.secondaryForeground};
          &:hover {
            background-color: ${theme.secondary}/80;
          }
        `;
      case "destructive":
        return `
          background-color: ${theme.destructive};
          color: ${theme.destructiveForeground};
          &:hover {
            background-color: ${theme.destructive}/80;
          }
        `;
      case "outline":
        return `
          color: ${theme.foreground};
          border-color: ${theme.border};
        `;
      case "success":
        return `
            color: ${theme.colors.success};
            background-color: ${theme.colors.successForeground};
            border-color: ${theme.colors.success};
          `;
      case "warning":
        return `
              color: ${theme.colors.warning};
            background-color: ${theme.colors.warningForeground};
            border-color: ${theme.colors.warning};
            `;
      case "error":
        return `
                color: ${theme.colors.error};
            background-color: ${theme.colors.errorForeground};
            border-color: ${theme.colors.error};
              `;
      default:
        return `
          background-color: ${theme.primary};
          color: ${theme.primaryForeground};
          &:hover {
            background-color: ${theme.primary}/80;
          }
        `;
    }
  }}
`;
