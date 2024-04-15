import React, { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Navbar from 'components/Navbar'
import LoadingScreen from 'components/LoadingScreen '

function HomeLayout() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/login")
      return
    }
  })

  return (

    <>
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <div className='mt-20'>
          <Outlet/>
        </div>
      </Suspense>
    </>
  )
}

export default HomeLayout