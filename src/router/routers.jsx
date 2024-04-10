import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import HomeLayout from "layouts/HomeLayout"

import Login from "pages/Login"
import MyPatients from "pages/MyPatients"
import Footer from "components/Footer"
import Reportform from "pages/Reportform"
import Home from "pages/Home"
import Review from "pages/Review"
import Hero from "src/layouts/Hero"


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
          path:"/reportform",
          element: <Reportform/>
        },
        {
          path:"/home",
          element: <Home/>
        },
        {
          path:"/review",
          element: <Review/>
        },
        {
          path:"/hero",
          element: <Hero  />
        }
      
      ]
    }
  ])
  return routers
}

export default routers;