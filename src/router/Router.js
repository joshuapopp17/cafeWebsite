import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "../screens/Contact/Contact";
import Home from "../screens/Home/Home";
import Locations from "../screens/Locations/Locations";
import Shop from "../screens/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Locations",
    element: <Locations />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
]);