import React from 'react'
import cpclogo from 'assets/Logo/cpc.png'
import uiclogo from 'assets/Logo/uic.png'
import mc from 'assets/Logo/mc.png'

function Footer() {

  return (
    <>

      <div className='h-[40em] w-full flex flex-row gap-12 items-center justify-center gradientRight'>

        <img className='h-[12em] w-[12em] object-cover object-center' src={cpclogo} alt="" ></img>
        <img className='h-[12em] w-[12em] object-cover object-center' src={uiclogo} alt="" ></img>
        <img className='h-[12em] w-[12em] object-cover object-center' src={mc} alt="" ></img>

        <div className='flex flex-col items-start font-rubik text-white'>

          <h1 className='text-[1.5rem] mb-2 font-bold'>Contact Us</h1>

          <a href="https://cpc.uic.edu.ph/" target="_blank" rel="noopener noreferrer">
            <span className="pi pi-external-link mr-3"></span>
            College of Pharmacy And Chemistry
          </a>

          <a href="https://www.facebook.com/UICPharmChem/" target="_blank" rel="noopener noreferrer">
            <span className="pi pi-facebook mr-3"></span>
            UIC College of Pharmacy And Chemistry
          </a>

          <a href="https://cpc.uic.edu.ph/" target="_blank" rel="noopener noreferrer">
            <span className="pi pi-envelope mr-3"></span>
            cpc.uic.edu.ph
          </a>

          <p>
            <span className="pi pi-phone mr-3"></span>
            (082) 221-8090
          </p>

        </div>

      </div>

    </>
  )
}

export default Footer