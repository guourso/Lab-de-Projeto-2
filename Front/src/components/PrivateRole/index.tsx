import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  role: string;
  userRole: string | null;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ role, userRole, children }) => {
  // Se o usuário não estiver logado ou não tiver o role certo, redireciona para o login
  if (!userRole || userRole !== role) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;