import {
    createBrowserRouter,
  } from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";
import NewsDetailsLayOut from "../layout/NewsDetailsLayOut";
import AuthLayOut from "../layout/AuthLayOut";
import Login from "../components/Login";
import Register from "../components/Register";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut></HomeLayOut>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/category/:id",
          element:<CategoryNews></CategoryNews>,
          loader: () => fetch('/news.json'),
        }
      ]
    },
    {
      path: '/auth',
      element:<AuthLayOut></AuthLayOut>,
      children: [
        {
          path:'/auth/login',
          element: <Login></Login>
        },
        {
          path: '/auth/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path: '/newsDetails/:id',
      element: <NewsDetailsLayOut></NewsDetailsLayOut>,
      loader: () => fetch('/news.json')
    },
    {
      path:"/about",
      element: <div>this is about</div>
    },
    {
      path:"/Career",
      element: <div>this is carrer</div>
    }
  ]);
  