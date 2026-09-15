import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Public from "./protected/Public";
import Protected from "./protected/Protected";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../config/axiosinstance";
import { addUser, removeUser } from "../state/authReducer";

const AppRoute = () => {


    const dispatch = useDispatch()

    useEffect( ()=> {
        ( async () => {
            try {

                const res = await axiosInstance.get("/api/v1/auth/getMe")
                // console.log(res)
                dispatch(addUser(res.data.user))
                
            } catch (error) {
                dispatch(removeUser())
                console.log("Error in getMe Route", error)
            }
        } )()
    }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <Protected />,
      children: [
        {
          path:"",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
