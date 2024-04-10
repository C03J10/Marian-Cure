import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import { AuthContext } from 'hooks/authContext'

function SideMenu() {

  const { isLoggedIn, user, login, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const logOutUser = async () => {
    logout()
    navigate("/login")
  }

  return (

    <div className='h-full w-1/3 z-50 top-0 right-0 fixed flex flex-col items-start p-12 bg-white'>

        <button>Home</button>
        <button onClick={logOutUser}>Logout</button>

    </div>

  )
}

export default SideMenu