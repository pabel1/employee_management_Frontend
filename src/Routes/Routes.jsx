import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddEmployee from "../Pages/Employee/AddEmployee";
import AllEmployees from "../Pages/Employee/AllEmployees";
import EditEmployee from "../Pages/Employee/EditEmployee";
import ViewEmployee from "../Pages/Employee/ViewEmployee";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage";
import MyProfile from "../Pages/MyProfile/MyProfile";
import AllShift from "../Pages/Shift/AllShift";
import MyShift from "../Pages/Shift/MyShift";
import ShiftAssign from "../Pages/Shift/ShiftAssign";
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
      {
        path: "/employee/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/employee/edit-employee/:id",
        element: <EditEmployee />,
      },
      {
        path: "/employee/view-employee/:id",
        element: <ViewEmployee />,
      },
      {
        path: "/shifts",
        element: <AllShift />,
      },
      {
        path: "/my-shift",
        element: <MyShift />,
      },
      {
        path: "/assign-shift/:shift",
        element: <ShiftAssign />,
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
    path: "*",
    element: <NotFoundPage />,
  },
]);
