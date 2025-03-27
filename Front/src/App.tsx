import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./contexts/AuthContext";
import MainLayout from "./components/MainLayout";
import ClientDashboard from "./pages/ClientDashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRole";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  const { isAuthenticated } = useAuth();
  const [userRole, setUserRole] = useState<string | null>(null);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route
          path="/"
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        >
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <PrivateRoute role="CLIENT" userRole={userRole}>
                  <ClientDashboard />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <PrivateRoute role="ADMIN" userRole={userRole}>
                  <AdminDashboard />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
