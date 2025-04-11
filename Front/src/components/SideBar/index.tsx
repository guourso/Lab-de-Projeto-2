import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  LogOut, 
  Package, 
  Settings, 
  ShoppingCart, 
  Truck, 
  Users,
  MapPin,
  Sun,
  Moon
} from "lucide-react";

import { 
  SidebarContainer, 
  SidebarHeader, 
  LogoContainer, 
  LogoBox, 
  LogoTitle, 
  ToggleButton, 
  Separator, 
  NavContainer, 
  Nav, 
  NavLink, 
  SidebarFooter, 
  FooterButtonContainer, 
  FooterButton 
} from "./style";
import { useToast } from "../../hooks/use-toast";
import { useTheme } from "../../contexts/ThemeContext";
import { useIsMobile } from "../../hooks/use-mobile";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  const handleLogout = () => {
    toast({
      title: "Desconectado com sucesso",
      description: "Você foi desconectado do sistema",
      onClose: () => {
        console.log("Toast closed");
      },
    });
    navigate("/");
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: <BarChart3 size={20} />,
      path: "/dashboard",
    },
    {
      name: "Estoque",
      icon: <Package size={20} />,
      path: "/inventory",
    },
    {
      name: "Pedidos",
      icon: <Truck size={20} />,
      path: "/orders",
    },
    {
      name: "Clientes",
      icon: <Users size={20} />,
      path: "/customers",
    },
  ];

  return (
    <SidebarContainer collapsed={collapsed}>
      {/* Logo */}
      <SidebarHeader>
        <LogoContainer>
          <LogoBox>
            <ShoppingCart size={16} color="#000" />
          </LogoBox>
          {!collapsed && <LogoTitle>Blue Drive</LogoTitle>}
        </LogoContainer>
        <ToggleButton onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </ToggleButton>
      </SidebarHeader>

      <Separator />

      {/* Nav Items */}
      <NavContainer>
        <Nav>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              active={location.pathname === item.path}
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </Nav>
      </NavContainer>

      {/* Footer */}
      <SidebarFooter>
        <Separator />
        <FooterButtonContainer>
          {/* Theme Toggle Button */}
          <FooterButton onClick={toggleTheme}>
            {theme === "dark" ? 
              <Sun size={20} /> : 
              <Moon size={20} />
            }
            {!collapsed && <span>{theme === "dark" ? "Modo Claro" : "Modo Escuro"}</span>}
          </FooterButton>
          
          {/* Logout Button */}
          <FooterButton danger onClick={handleLogout}>
            <LogOut size={20} />
            {!collapsed && <span>Sair</span>}
          </FooterButton>
        </FooterButtonContainer>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
