import React from 'react'
import Navbar from 'components/Navbar'
import doc from 'assets/Logo/doc.png'


import { Outlet } from 'react-router-dom'

function Hero() {
  return (
    <>
    
    <div className='w-full h-[50em] relative lg:h-[42em]' id='landhero'>

    <img className="h-[40em] w-[30em] top-[3.5em] right-[10em] absolute object-cover object-center" src={doc} alt="" />

    <p className="h-[40em] w-[30em] top-[3.5em] right-[15em] absolute object-cover object-center text-[30px] text-white font-rubik ">Welcome to Marian Cure! </p>
    <p className="h-[40em] w-[30em] top-[2.5em] left-[2.8em] absolute object-cover object-center text-[60px] text-white font-rubik font-bold ">Take care of <br></br>your health is our <br></br>top priority.</p>
    <button className='h-12 w-48 top-[30em] absolute buttonMain justify-center items-center flex m-auto text-white mb-4 left-[15em] '>Send us your concern</button>


    <div className="h-screen w-full flex items-center justify-center gradientRight m-auto" />
   

    </div>

    </>
  )
}

export default Hero