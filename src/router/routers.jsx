import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import Login from "pages/Login"
import MyPatients from "pages/MyPatients"
import Footer from "components/Footer"

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
      path:"/mypatients",
      element: <MyPatients/>
    },
    {
      path:"/footer",
      element: <Footer/>
    }
  ])
  return routers
}

export default routers;