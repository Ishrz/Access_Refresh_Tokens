import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const AppRoute = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />
                },
                {
                    path: "register",
                    element: <Register />
                }
            ]
        },

        {
            path: "/home",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />
                }
            ]
        }
    ])



  return <RouterProvider router={router} />
}

export default AppRoute
