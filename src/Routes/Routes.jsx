import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllEmployees from "../Pages/Employee/AllEmployees";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage";
import MyProfile from "../Pages/MyProfile/MyProfile";
import SignUpPage from "../Pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute allowedRoles={["User"]} path={"/login"}>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/employee/all-employee",
        element: <AllEmployees />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute path={"/"}>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute path={"/"}>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
