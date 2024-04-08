import React from 'react'
import cpclogo from 'assets/Logo/cpc.png'
import uiclogo from 'assets/Logo/uic.png'
import mc from 'assets/Logo/mc.png'



function Footer() {
  return (
    <>



<div className='absolute h-[40em] w-full flex items-center justify-center gradientRight m-auto bottom-[-150em]'>


<img className='absolute h-[15em] w-[15em] top-[5em] right-[10em]  object-cover object-center' src={cpclogo} alt="" ></img>
<img className='absolute h-[15em] w-[15em] top-[5em] right-[70em]  object-cover object-center' src={uiclogo} alt="" ></img>
<img className='absolute h-[15em] w-[15em] top-[5em] right-[40em]  object-cover object-center' src={mc} alt="" ></img>



<div className='w-full h-full flex flex-row gap-20 items-center justify-center m-auto'>

  <div className='top-0 flex flex-row gap-20 text-left font-lato font-bold text-[1rem]'>
   
    
    <div className='flex flex-col items-start absolute left-[25em] top-[25em]'>
    
      <button className='text-2xl'>
        Home
      </button>

      <button className='text-2xl'>
        About Us
      </button>

      <button className='text-2xl'>
        Resources
      </button>

      <button className='text-2xl'>
        Feedback
      </button>

    </div>

    <div className='flex flex-col items-start  absolute left-[55em] top-[25em]'>

      <h1 className='text-2xl mb-2'>Contact Us</h1>

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
</div>

</div>


    </>
  )
}

export default Footer