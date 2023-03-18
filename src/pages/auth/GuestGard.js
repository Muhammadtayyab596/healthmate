import { Navigate } from "react-router-dom";

const GuestGard = ({ isAuthenticated, children }) => {
  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default GuestGard;