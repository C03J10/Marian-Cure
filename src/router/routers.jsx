import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import HomeLayout from "layouts/HomeLayout"

import Login from "pages/Login"
import MyPatients from "pages/MyPatients"
import Footer from "components/Footer"
import Reportform from "pages/Reportform"

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
          path: "/mypatients",
          element: <MyPatients />
        },
        {
          path:"/footer",
          element: <Footer/>
        },
        {
          path:"/reportform",
          element: <Reportform/>
        }
      ]
    }
  ])
  return routers
}

export default routers;