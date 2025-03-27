import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../contexts/AuthContext";
import {
  BackgroundGradient,
  Footer,
  LoginContainer,
  LogoBox,
  LogoContainer,
  LogoWrapper,
  PageContainer,
  Subtitle,
  Title,
} from "./styles";
export default function Home() {
  const { login } = useAuth();
  return (
    <PageContainer>
      <BackgroundGradient></BackgroundGradient>
      <LoginContainer className="login-container">
        <LogoContainer>
          <LogoWrapper>
            <LogoBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-black"
              >
                <path d="M3 12h18l-2-5a2 2 0 0 0-1.8-1.2H6.8A2 2 0 0 0 5 7l-2 5Z" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
                <path d="M5 17h14" />
                <path d="M6 12v5" />
                <path d="M18 12v5" />
              </svg>
            </LogoBox>
          </LogoWrapper>
          <Title>BlueDrive</Title>
          <Subtitle>Realize o login para acessar seu perfil</Subtitle>
        </LogoContainer>
        <LoginForm onLogin={login} />
        <Footer>
          © {new Date().getFullYear()} BlueDrive. Todos os direitos reservados.
        </Footer>
      </LoginContainer>
    </PageContainer>
  );
}
