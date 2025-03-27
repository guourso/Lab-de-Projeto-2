import styled from 'styled-components';

export const TextareaStyled = styled.textarea`
  min-height: 80px;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  transition: all 0.2s ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.accentForeground};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;