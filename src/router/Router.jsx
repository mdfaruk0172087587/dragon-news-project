import {
    createBrowserRouter,
  } from "react-router";
import HomeLayOut from "../layout/HomeLayOut";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut></HomeLayOut>,
    },
  ]);
  