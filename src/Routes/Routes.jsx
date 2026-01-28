import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Roots from "../Pages/Roots/Roots.jsx";
import Home from "../Pages/Home/Home.jsx";
import AllApps from "../Pages/AllApps/AllApps.jsx";
import AppDetails from "../Pages/AppDetails/AppDetails.jsx";
import Auth from "../Pages/Roots/Auth.jsx";
import Login from "../Pages/Login/Login.jsx";
import Registration from "../Pages/Registration/Registration.jsx";
import Loading from "../Pages/Loading/Loading.jsx";
import PrivateRoute from "../Provider/PrivateRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/loadData.json").then((res) => res.json()),
        element: <Home />,
      },
      {
        path: "/allapps",
        loader: () => fetch("/loadData.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <AllApps />
          </PrivateRoute>
        ),
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/loadData.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <AppDetails />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "*",
    element: <div className="text-center py-10">404 - Page Not Found</div>,
  },
]);
