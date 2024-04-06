import React from 'react'
import Footer from "components/Footer"


function Home() {
  return (
    
   <>
   <div className='h-[80em] w-full flex items-center justify-center gradientRight m-auto mt-8'>

        <div className='absolute h-12 rounded-lg w-72 px-4 font-normal top-0 left-0'>
          <p>
          To streamline
           medication review and 
           ensure access
            to needed medications 
            while minimizing risks.
          </p>

          <p>
          Monitor medication use,
           adherence, and adverse
            effects to improve 
            health outcomes.
          </p>

          <p>Provide personalized 
            interventions to
             optimize medication
              regimens and overall
               well-being.</p>
        </div>

        <div className='flex flex-col bg-white text-black p-12 rounded-xl'>
            <h3> Our Mission</h3>
            <p>The Marian Cure system aims to safeguard the health
                 and welfare of University of Immaculate Conception
                  personnel by offering thorough medication
                   management and monitoring services. </p>
        </div>

        <div>
            <h3> Our Vision</h3>
            <p>
            To  establish ourselves as a reliable ally in fostering
             health and wellness, achieved through efficient 
             medication evaluations, educational initiatives, and 
             supportive measures, thereby elevating the general 
             quality of life within the University of Immaculate 
             Conception.
            </p>
        </div>
        <img> </img>
   </div>


   <Footer></Footer>
   </>


  )
}

export default Home