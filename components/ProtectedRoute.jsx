import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const authenticated = isAuthenticated();

  console.log(
    "ProtectedRoute check:",
    authenticated,
    "at path:",
    location.pathname
  );

  if (!authenticated) {
    // Redirect to login page with the return url
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;
