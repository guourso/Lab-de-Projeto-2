import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  padding: 0 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.foreground};
  transition: border-color ${({ theme }) => theme.transitions.fast}, 
              box-shadow ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
