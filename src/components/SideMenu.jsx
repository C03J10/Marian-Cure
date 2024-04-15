import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import { AuthContext } from 'hooks/authContext'

function SideMenu({handleSideMenu}) {

  const [username, setUsername] = useState('')
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  let userData = JSON.parse(sessionStorage.getItem('user'))

  const navToHome = () =>{
    handleSideMenu()
    navigate("/home")
  } 

  const navToMyPatients = () =>{
    handleSideMenu()
    navigate("/mypatients")
  } 

  const logOutUser = async () => {
    logout()
    navigate("/login")
  }

  const addTab = () => {
    return userData.pharmacist_id != null ? 
    <button onClick={navToMyPatients} className='buttonIcon font-semibold'>My Patients</button> : null
  }

  useEffect(() => {
    if(userData.pharmacist_id != null){
      setUsername(userData.pharmacist_name)
    }else {
      setUsername(userData.username)
    }
    
  })

  return (
    
    <div className='flex flex-col items-start px-12 gap-9 h-full w-1/3 z-50 top-0 right-0 fixed bg-white font-rubik'>

      <div className='flex flex-row gap-6'>
        <button onClick={handleSideMenu} className='h-20 buttonIcon text-left pi pi-arrow-left'></button>
        <p className='items-center justify-center m-auto font-semibold text-blu-900'>{username}</p>
      </div>
        
        <button onClick={navToHome} className='buttonIcon font-semibold'>Home</button>
        {addTab()}
        <button onClick={logOutUser} className='buttonIcon font-semibold'>Logout</button>

    </div>
  
  )
}

export default SideMenu