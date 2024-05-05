import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import ForgotPassPanel1 from 'components/ForgotPassPanels/ForgotPassPanel1'
import ForgotPassPanel2 from 'components/ForgotPassPanels/ForgotPassPanel2'
import Toast from 'components/Toast'

import { ForgotPassContext } from 'hooks/forgotPassContext'

function ForgotPassword() {

  const navigate = useNavigate();
  const navToLogin = () => navigate('/login')

  const { step } = useContext(ForgotPassContext)

  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  const showToastVisibility = (toastTypeProp, toastMessageProp) => {

    setShowToast(true)
    setToastType(toastTypeProp)
    setToastMessage(toastMessageProp)

    setTimeout(() => setShowToast(false), 3000)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ForgotPassPanel1 showToastVisibility={showToastVisibility} />
      case 2:
        return <ForgotPassPanel2 showToastVisibility={showToastVisibility}/>
    }
  }

  return (

    <div className='w-full h-full flex flex-col items-center justify-center m-auto text-black font-rubik'>

      {showToast && <Toast visible={showToast} toastType={toastType} toastMessage={toastMessage} />}

      <div className='h-full w-3/5 flex flex-col'>

        <button onClick={navToLogin} className='text-[1rem] buttonIcon pi pi-arrow-left mr-auto'></button>

        <h1 className='text-left text-[3rem] font-bold'>
          Forgot Password
        </h1>

        <div className='font-semibold w-full'>

          {renderStep()}

        </div>

      </div>

    </div>

  )

}


export default ForgotPassword