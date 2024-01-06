import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage";
import Projects from "../Pages/Projects/Projects";
import Reporting from "../Pages/Reporting/Reporting";
import SignUpPage from "../Pages/SignUpPage";
import Tasks from "../Pages/Tasks/Tasks";
import Users from "../Pages/Users/Users";
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
        path: "/users",
        element: <Users />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/reporting",
        element: <Reporting />,
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
