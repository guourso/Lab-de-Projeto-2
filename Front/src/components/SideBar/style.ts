import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components
export const SidebarContainer = styled.div<{ collapsed: boolean }>`
  height: 100vh;
  width: ${props => props.collapsed ? props.theme.sizes.sidebar.collapsed : props.theme.sizes.sidebar.expanded};
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.sidebar.background};
  transition: ${props => props.theme.transitions.default};
  overflow: hidden;
  border-right: 1px solid ${props => props.theme.colors.sidebar.border};
`;

export const SidebarHeader = styled.div`
  padding: ${props => props.theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[6]};
`;

export const LogoBox = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: ${props => props.theme.radius.medium};
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => props.theme.colors.sidebar.foreground};
`;

export const ToggleButton = styled.button`
  height: 2rem;
  width: 2rem;
  padding: 0 0 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${props => props.theme.colors.sidebar.foreground};
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.sidebar.border};
`;

export const NavContainer = styled.div`
  flex-grow: 1;
  padding-top: ${props => props.theme.spacing[4]};
  overflow-y: auto;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[1]};
  padding: 0 ${props => props.theme.spacing[2]};
`;

export const NavLink = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[3]};
  border-radius: ${props => props.theme.radius.medium};
  color: ${props => props.active 
    ? props.theme.colors.sidebar.accentForeground 
    : `${props.theme.colors.sidebar.foreground}cc`};
  background-color: ${props => props.active 
    ? props.theme.colors.sidebar.accent 
    : 'transparent'};
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.active 
      ? props.theme.colors.sidebar.accent 
      : `${props.theme.colors.sidebar.accent}80`};
    color: ${props => props.theme.colors.sidebar.foreground};
  }
`;

export const SidebarFooter = styled.div`
  padding: ${props => props.theme.spacing[4]};
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;

export const FooterButton = styled.button<{ danger?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.radius.medium};
  background: none;
  border: none;
  color: ${props => `${props.theme.colors.sidebar.foreground}cc`};
  text-align: left;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.danger
      ? `${props.theme.colors.destructive}20`
      : `${props.theme.colors.sidebar.accent}80`};
    color: ${props => props.danger
      ? props.theme.colors.destructive
      : props.theme.colors.sidebar.foreground};
  }
`;
