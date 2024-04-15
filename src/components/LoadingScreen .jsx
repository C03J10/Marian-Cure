import React from 'react'
import 'primeicons/primeicons.css';

function LoadingScreen() {

    return (

        <div className='flex h-screen w-full items-center justify-center text-[4rem]'>

            <i className='pi pi-spin pi-spinner gradientRight text-transparent bg-clip-text'></i>

        </div>
    )
}

export default LoadingScreen 