import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing[4]};
  position: relative;
  overflow: hidden;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  max-width: 28rem;
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[8]};
`;

export const LogoWrapper = styled.div`
  display: inline-block;
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: ${(props) => props.theme.radius.large};
  background-color: ${(props) => `${props.theme.colors.primary}1A`};
  margin-bottom: ${(props) => props.theme.spacing[4]};
`;

export const LogoBox = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: ${(props) => props.theme.radius.large};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-top: ${(props) => props.theme.spacing[2]};
  text-align: center;
`;

export const Footer = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-top: ${(props) => props.theme.spacing[8]};
`;
