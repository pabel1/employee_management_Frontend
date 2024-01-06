import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children, path }) => {
  const isAuth = useAuth();
  const location = useLocation();

  return !isAuth ? (
    children
  ) : (
    <Navigate to={location?.state ? location?.state : "/"} replace />
  );
};
export default PublicRoute;
