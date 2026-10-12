import { Navigate } from "react-router";
import { useAuth } from "../contexts/useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
