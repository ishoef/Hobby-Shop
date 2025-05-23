import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DemoPage from "../Pages/DemoPage/DemoPage";
import DemoPage2 from "../Pages/DemoPage2/DemoPage2";
import DemoPage3 from "../Pages/DemoPage3/DemoPage3";
import Error from "../Pages/Error/Error";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: Error,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/demopage",
        Component: DemoPage,
      },
      {
        path: "/demopage2",
        Component: DemoPage2,
      },
      {
        path: "/demopage3",
        Component: DemoPage3,
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
