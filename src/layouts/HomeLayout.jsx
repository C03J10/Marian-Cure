import React from 'react'
import Navbar from 'components/Navbar'

import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
       <Outlet/>
    </div>
   
    </>
  )
}

export default HomeLayout