import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Roots from "../Pages/Roots/Roots.jsx";
import Home from "../Pages/Home/Home.jsx";
import AllApps from "../Pages/AllApps/AllApps.jsx";
import AppDetails from "../Pages/appDetails/AppDetails.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("./loadData.json").then((res) => res.json()),
        path: "/",
        Component: Home,
      },
      {
        path: "/allapps",
        loader: () => fetch("./loadData.json").then((res) => res.json()),
        Component: AllApps,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
      },
    ],
  },
]);
