import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import Footer from "components/Footer"
import { getConcern } from 'server/fetch'

import doctor from 'assets/doctor.png'
import kit from 'assets/medkit.png'
import heart from 'assets/heart.png'
import pharmacist from 'assets/groupic.png'
import stethoscope from 'assets/stethoscope.png'

function Home() {

  const [userState, setUserState] = useState('')
  const [buttonText, setButtonText] = useState('')

  const navigate = useNavigate()
  const navToSubmitConcern = () => navigate("/submitconcern")
  const navToViewConcern = () => navigate("/viewconcern")
  const navToMyPatients = () => navigate("/mypatients")

  let userData = JSON.parse(sessionStorage.getItem('user'))

  const handleState = async () => {
    if (userData.pharmacist_id != null) {
      setUserState(3)
      return
    }

    const response = await getConcern(userData.user_id);

    if (response.status === 200) {
      sessionStorage.setItem('concern', JSON.stringify(response.data))
      setUserState(2)
      return

    } else {
      setUserState(1)
      return
    }

  }

  const handleButtonText = () => {

    if (userState == 1) {
      setButtonText('Send us your concern')
      return
    }

    if (userState == 2) {
      setButtonText('View concern')
      return
    }

    if (userState == 3) {
      setButtonText('View patients')
      return
    }

  }

  const handleButtonFunction = () => {

    if (userState == 1) {
      navToSubmitConcern()
      return
    }

    if (userState == 2) {
      navToViewConcern()
      return
    }

    if (userState == 3) {
      navToMyPatients()
      return
    }

  }

  useEffect(() => {
    handleState()
    handleButtonText()
  })

  return (

    <>
      <div className='min-h-auto w-full font-rubik relative' id='landhero'>

        <div className="h-[36em] w-full flex flex-row items-center gap-24 justify-center gradientRight">

          <div className="flex flex-col text-white font-rubik gap-3 ">

            <p className="text-[1.5rem]">Welcome to Marian Cure! </p>
            <p className="text-[3rem] font-bold leading-[3.5rem] mb-8">Take care of <br></br>your health is our <br></br>top priority.</p>
            <button onClick={handleButtonFunction} className='rounded-lg h-12 w-64 buttonMain font-semibold'>{buttonText}</button>

          </div>

          <img className="h-[34em] w-[28em] object-cover object-center" src={doctor} alt="Doctor image" />

        </div>


        <div className='min-h-auto w-4/5 mx-auto flex flex-col relative gap-24 pb-24 text-black '>

          <div className='flex flex-row inset-0 -top-12 absolute items-center justify-center h-[22em] z-10 gap-12 mx-auto bg-white rounded-xl shadow-xl font-bold border border-gray-400'>

            <div className='flex flex-col items-center justify-start w-[20%] gap-3'>
              <img className='h-[6em] w-[6em] object-cover object-center' src={kit} alt=""></img>
              <h6 className='text-[1rem] text-center'> To streamline medication review and ensure access to needed medications while minimizing risks.</h6>
            </div>

            <div className='flex flex-col items-center justify-start w-[20%] gap-3'>
              <img className="h-[6em] w-[6em] object-cover object-center" src={stethoscope} alt=""></img>
              <h6 className='text-[1rem] text-center'>Monitor medication use, adherence, and adverse effects to improve health outcomes.</h6>
            </div>

            <div className='flex flex-col items-center justify-start w-[20%] gap-3'>
              <img className="h-[6em] w-[6em] object-cover object-center" src={heart} alt=""></img>
              <h6 className='text-[1rem] text-center'>Provide personalized interventions to optimize medication regimens and overall well-being.</h6>
            </div>

          </div>

          <div className='flex flex-row items-center justify-center relative min-h-auto gap-12 mt-96 mx-auto text-center'>

            <div className='flex flex-col px-4'>
              <h1 className='text-[3rem] font-bold'>Our Mission</h1>
              <p className=' text-[1rem]'>The Marian Cure system aims to safeguard the health and welfare of University of Immaculate Conception personnel by offering thorough medication management and monitoring services. </p>
            </div>

            <div className='flex flex-col px-4'>
              <h1 className='text-[3rem] font-bold'>Our Vision</h1>
              <p className='text-[1rem]'>To establish ourselves as a reliable ally in fostering health and wellness, achieved through efficient medication evaluations, educational initiatives, and supportive measures, thereby elevating the general quality of life within the University of Immaculate Conception.</p>
            </div>

          </div>

          <div className='flex flex-col'>
            <p className='flex flex-row  font-rubik text-[1.25rem] text-center'> The Marian Cure system is a medication therapy review system designed for the personnel of the University of Immaculate Conception. It facilitates the management and monitoring of personnel medications, ensuring efficient tracking and optimization of their healthcare needs. </p>

          </div>

          <img className="flex flex-row relative h-[30em] w-full object-cover object-center" src={pharmacist} alt=""></img>

        </div>
        <Footer />
      </div>

    </>
  )
}

export default Home