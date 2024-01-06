import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
const PrivateRoute = ({ children, allowedRoles, path }) => {
  const isLoggedIn = useAuth();

  const role = "User";

  let isAllowed;

  for (const element of allowedRoles) {
    if (role === element) {
      isAllowed = true;
      break;
    }
  }

  return isLoggedIn && isAllowed ? (
    children
  ) : (
    <Navigate to={path || "/login"} />
  );
};

export default PrivateRoute;
