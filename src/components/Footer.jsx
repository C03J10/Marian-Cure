import React from 'react'

function Footer() {
  return (
    <>

<div className='h-screen w-full flex items-center justify-center gradientRight m-auto static bottom-0'>

<div className='w-full h-full flex flex-row gap-20 items-center justify-center m-auto'>

  <div className='top-0 flex flex-row gap-20 text-left font-lato font-bold text-[1rem]'>
   
    <div className='flex flex-col items-start'>

      <button>
        Home
      </button>

      <button>
        About Us
      </button>

      <button>
        Resources
      </button>

      <button>
        Feedback
      </button>

    </div>

    <div className='flex flex-col items-start'>

      <h1 className='text-[1.5rem] mb-2'>Contact Us</h1>

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