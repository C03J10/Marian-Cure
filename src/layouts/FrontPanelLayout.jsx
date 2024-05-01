import React from 'react'
import { Outlet } from "react-router-dom"

import logpanel from "assets/logpanel.png"

function FrontPanelLayout() {
    
    return (
        <div className='flex bg-white'>
            <div className="relative h-screen w-1/2">

                <img className="absolute h-full w-full object-cover object-center" src={logpanel} alt="background" />
                <div className="absolute z-10 h-full w-full bg-blu-400 opacity-60"></div>
                <div className="absolute z-20 h-full w-full gradient"></div>

            </div>

            <div className='w-1/2 h-full items-center justify-center m-auto'>
                <Outlet/>
            </div>
        </div>
    )
}

export default FrontPanelLayout