import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import Login from "pages/Login"
import MyPatients from "pages/MyPatients"

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
    }
  ])
  return routers
}

export default routers;