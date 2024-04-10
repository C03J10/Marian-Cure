import React from 'react'
import Footer from "components/Footer"

import mariancure from 'assets/Logo/mariancure.png'

function Reportform() {
  return (
    <>

<div className='m-24 flex flex-col items-center justify-center'>

   <img src={mariancure} alt="Marian Cure Logo" className='w-96 h-96' />
      <div className='text-[5rem] font-itim font-bold'>
        <span className='text-pinkie'>
          Marian
        </span>
        <span className='text-blu-600'>
          Cure
        </span>
      </div>

</div>
      


    </>
  )
}

export default Reportform