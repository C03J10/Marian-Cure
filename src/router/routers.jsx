import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import HomeLayout from "layouts/HomeLayout"

import Login from "pages/Login"
import MyPatients from "pages/MyPatients"

import Reportform from "pages/Reportform"
import Home from "pages/Home"



function routers() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace={true} />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      element: <HomeLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/mypatients",
          element: <MyPatients />
        },
        {
          path: "/submitconcern",
          element: <Reportform />
        }

      ]
    }
  ])
  return routers
}

export default routers;