import React, { lazy } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"

import HomeLayout from "layouts/HomeLayout"
import FrontPanelLayout from "layouts/FrontPanelLayout"

import Login from "pages/Login"
import Register from "pages/Register"
import ForgotPassword from "pages/ForgotPassword"
import Reportform from "pages/Reportform"
import SubmitFeedback from "pages/SubmitFeedback"

import RegisterProvider from 'hooks/registerContext'

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
      element: <FrontPanelLayout />,
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          element: 
          <RegisterProvider >
            <Register/>
          </RegisterProvider>,
          path: "/register"

        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />
        },
      ]
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