import React, { lazy } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import HomeLayout from "layouts/HomeLayout"

import Login from "pages/Login"
import Reportform from "pages/Reportform"
import SubmitFeedback from "pages/SubmitFeedback"

const Home = lazy(() => import('pages/Home'))
const MyPatients = lazy(() => import("pages/MyPatients"))
const ViewConcern = lazy(() => import("pages/ViewConcern"))

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
          path: "/submitconcern",
          element: <Reportform />
        },
        {
          path: "/viewconcern",
          element: <ViewConcern />
        },
        {
          path: "/mypatients",
          element: <MyPatients />
        },
        {
          path: "/submitfeedback",
          element: <SubmitFeedback />
        }
      ]
    }
  ])
  return routers
}

export default routers;