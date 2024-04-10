import React from 'react'
import 'primeicons/primeicons.css'

import SideMenu from 'components/SideMenu'
import mariancure from 'assets/Logo/mariancure.png'

function Navbar() {
  return (
    <>
      <div className='flex flex-row w-full h-20 fixed top-0 z-40 px-12 gap-3 items-center bg-white shadow-lg'>

        <img src={mariancure} alt="Marian Cure Logo" className='w-16 h-16' />
        <div className='text-[1.5rem] font-itim font-bold'>
          <span className='text-pinkie'>
            Marian
          </span>
          <span className='text-blu-600'>
            Cure
          </span>
        </div>

        

        <div className=' flex flex-row float-right mr-0 m-auto text-[1.5rem] gap-7'>

          <button className='pi pi-bell buttonIcon'></button>
          <button className='pi pi-align-right buttonIcon'></button>

        </div>

      </div>

    </>
  )
}

export default Navbar