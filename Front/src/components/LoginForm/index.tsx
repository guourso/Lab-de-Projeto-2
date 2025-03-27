import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";
import { Card, CardContent, CardFooter } from "../Card";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import { FormContainer, IconWrapper, TogglePasswordButton, Loader, FooterText } from "./style";

import { authApi } from "../../api/auth";
import { useToast } from "../../hooks/use-toast";

interface LoginFormProps {
  onLogin: (email: string, senha: string, token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", senha: "" });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await authApi.login(credentials);
      console.log(token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(credentials.email));

      onLogin(credentials.email, credentials.senha, token);

      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo ao Sistema de Gerenciamento Postin",
        variant: "default",
        onClose: () => navigate("/dashboard"),
      });

      navigate("/dashboard");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Falha no login",
        description: "Por favor, verifique suas credenciais e tente novamente",
        onClose: () => {},
      });
    } finally {
      setLoading(false);  
    }
  };

  return (
    <FormContainer>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
            <div style={{ position: "relative" }}>
              <IconWrapper>
                <Mail size={16} />
              </IconWrapper>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                value={credentials.email}
                onChange={handleChange}
                required
                style={{ paddingLeft: "2.5rem" }}
              />
            </div>
            <div style={{ position: "relative" }}>
              <IconWrapper>
                <Lock size={16} />
              </IconWrapper>
              <Input
                id="senha"
                name="senha"
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={credentials.senha}
                onChange={handleChange}
                required
                style={{ paddingLeft: "2.5rem" }}
              />
              <TogglePasswordButton type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </TogglePasswordButton>
            </div>
            <Button type="submit" disabled={loading} style={{ width: "100%" }}>
              {loading ? (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Loader />
                  <span>Entrando...</span>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <LogIn size={16} />
                  <span>Entrar</span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <FooterText>
            Esqueceu a senha? Entre em contato com o administrador do sistema
          </FooterText>
        </CardFooter>
      </Card>
    </FormContainer>
  );
};

export default LoginForm;
