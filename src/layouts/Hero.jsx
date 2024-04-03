import React from 'react'
import Navbar from 'components/Navbar'

import { Outlet } from 'react-router-dom'

function Hero() {
  return (
    <>
    <div className='w-full h-[32em] relative lg:h-[42em]' id='landhero'>

    <img className="h-full w-full absolute object-cover object-center" alt="C:\Users\MANUEL RUIZ\Desktop\mariancure\Marian-Cure\src\assets\Logo\doc.png" />
    <div className="h-screen w-full flex items-center justify-center gradientRight m-auto" />


    </div>

    </>
  )
}

export default Hero