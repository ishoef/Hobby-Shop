import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import AllGroups from "../Pages/AllGroups/AllGroups";
import MyGroupes from "../Pages/MyGroupes/MyGroupes";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/creategroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "/allgroups",
        Component: AllGroups,
      },
      {
        path: "/mygroups",
        element: (
          <PrivateRoute>
            <MyGroupes></MyGroupes>
          </PrivateRoute>
        ),
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        Component: AuthLayout,
        children: [
          {
            path: "/auth/register",
            Component: Register,
          },
          {
            path: "/auth/login",
            Component: Login,
          },
        ],
      },
    ],
  },
]);
