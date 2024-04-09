import React from 'react'
import Footer from "components/Footer"
import Hero from "layouts/Hero"
import doc from 'assets/Logo/doc.png'
import kit from 'assets/medkit.png'
import heart from 'assets/heart.png'
import pharmacist from 'assets/groupic.png'
import stethoscope from 'assets/stethoscope.png'



function Home() {
  return (

    <>
      <div className='flex-grow h-screen relative ' id='landhero'>
        <div className="h-screen w-full flex flex-col items-center justify-center gradientRight m-auto" />

        <img className="flex flex-row h-[50em] w-[40em] top-[-44em] right-[-50em] relative object-cover object-center" src={doc} alt="" />

        <p className="flex flex-row h-[20em] w-[12em] top-[3.5em] left-[8.3em] absolute object-cover object-center text-[30px] text-white font-rubik ">Welcome to Marian Cure! </p>
        <p className="flex flex-row h-[20em] w-[12em] top-[2.5em] left-[3.8em] absolute object-cover object-center text-[65px] text-white font-rubik font-bold ">Take care of <br></br>your health is our <br></br>top priority.</p>
        <button className='flex-row rounded-3xl h-12 w-48 top-[31em] absolute buttonMain justify-center items-center flex m-auto text-white mb-4 left-[19em]'>Send us your concern</button>

        <div className='flex-col relative h-[25em] w-[85em] bottom-[55em] left-[5em] flex rounded-2xl bg-white border-[0.1em] border-gray shadow-2xl text-black p-12 '>

          <div className='flex flex-col'>
            <div className='flex flex-row absolute h-12 rounded-lg w-72 px-4 font-normal top-[6em] left-[10em]'>
              <img className='flex flex-row h-[7em] w-[7em] top-[-2em] right-[7em] absolute object-cover object-center' src={kit} alt=""></img>
              <h6 className='flex flex-row font-rubik text-lg text-center top-[6em] left-[-0.3em] font-bold relative'> To streamline <br></br>medication review and <br></br>ensure access to <br></br>needed medications <br></br>while minimizing risks.</h6>
            </div>

            <div className='flex flex-col absolute h-12 rounded-lg w-72 px-4 font-normal top-[6em] left-[30em]'>
              <img className="flex flex-row h-[7em] w-[7em] top-[-2em] right-[1em] absolute object-cover object-center" src={stethoscope} alt=""></img>

              <h6 className='flex flex-row font-rubik text-lg text-center top-[6em] left-[5em] font-bold relative'>Monitor medication use,<br></br> adherence, and adverse <br></br>effects to improve <br></br>health outcomes.</h6>
            </div>

            <div className='flex flex-row absolute h-12 rounded-lg w-72 px-4 font-normal top-[6em] left-[50em]'>
              <img className="flex flex-row h-[7em] w-[7em] top-[-2em] right-[-6em] absolute object-cover object-center" src={heart} alt=""></img>
              <h6 className='flex flex-row font-rubik text-lg text-center top-[6em] left-[11.5em] font-bold relative'>Provide personalized<br></br> interventions to <br></br>optimize medication<br></br> regimens and overall<br></br> well-being.</h6>
            </div>
          </div>

          <div className='flex flex-col top-[-4em] relative '>

            <div className='flex flex-col relative  h-12 rounded-lg w-[33em] px-4 font-normal top-[30em] left-[-6em]'>
              <h1 className='flex flex-row text-5xl text-center top-[1em] left-[6.5em] font-bold relative'>Our Mission</h1>
              <p className='flex flex-row font-rubik text-xl text-center top-[4em] left-[10em] relative'> The Marian Cure system aims to safeguard the health and welfare of University of Immaculate Conception personnel by offering thorough medication management and monitoring services. </p>
            </div>

            <div className='flex flex-col relative  h-12 rounded-lg w-[33em] px-4 font-normal top-[27em] left-[35em]'>
              <h1 className='flex flex-row text-5xl text-center top-[1em] left-[6.5em] font-bold relative'>Our Vision</h1>
              <p className='flex flex-row font-rubik text-xl text-center top-[4em] left-[10em] relative'> The Marian Cure system aims to safeguard the health and welfare of University of Immaculate Conception personnel by offering thorough medication management and monitoring services. </p>
            </div>

            <div className='flex flex-col top-[-4em] relative '>
              <p className='flex flex-row  font-rubik text-2xl text-center top-[60em] left-[1em] relative'> The Marian Cure system is a medication therapy review system designed for the personnel of the University of Immaculate Conception. It facilitates the management and monitoring of personnel medications, ensuring efficient tracking and optimization of their healthcare needs. </p>
              <img className="flex flex-row relative h-[30em] w-[80em] top-[45em] right-[-2em] object-cover object-center" src={pharmacist} alt=""></img>
            </div>

          </div>




        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Home