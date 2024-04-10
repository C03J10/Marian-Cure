import React, { useState, useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Navbar from 'components/Navbar'
import { AuthContext } from 'hooks/authContext'


function HomeLayout() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
      return
    }
  })

  return (

    <>
      <Navbar />
      <div className='mt-20'>
        <Outlet />
      </div>

    </>
  )
}

export default HomeLayout