import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  animation: scale-in 0.3s ease-in-out;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mutedForeground};
  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const Loader = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const FooterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-align: center;
`;
