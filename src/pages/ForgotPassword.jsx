import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import Toast from 'components/Toast'
import { getUsername, updatePass } from 'server/fetch'

function ForgotPassword() {

  const navigate = useNavigate();
  const navToLogin = () => navigate('/login');

  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const [loading, setLoading] = useState(false)

  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = async () => {

    switch (step) {

      case 1:
        if (username === '') {
          showToastVisibility('Error', 'Please fill out the field first.')
          return
        }
        setLoading(true)
        try {
          const response = await getUsername(username)

          if (!response) {
            showToastVisibility('Error', 'Something went wrong. Please try again.')
            return
          }

          if (response.status === 200) {
            setLoading(false)
            setStep(step + 1);
            break;
          }

        } finally {
          setLoading(false)
        }

        break;
    }

  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <RegisterPanel1 />
      case 2:
        return <RegisterPanel3 />
    }
  };

  const showToastVisibility = (toastTypeProp, toastMessageProp) => {

    setShowToast(true)
    setToastType(toastTypeProp)
    setToastMessage(toastMessageProp)

    setTimeout(() => setShowToast(false), 3000)
  }

  const register = async () => {

    setLoading(true)
    try {

      if (password == "" || confPassword == "") {
        showToastVisibility('Error', 'Please fill out the fields first.')
        return
      }

      if (password != confPassword) {
        showToastVisibility('Error', "Passwords don't match.")
        return
      }

      const response = await updatePass(username, password)

      if (!response) {
        showToastVisibility('Error', 'Something went wrong. Please try again.')
        return
      }

      if (response.status === 200) {

        navToLogin()
        return

      }

    } finally {
      setLoading(false)
    }
  }

  return (

    <div className='w-full h-full flex flex-col items-center justify-center m-auto text-black font-rubik'>

      {showToast && <Toast visible={showToast} toastType={toastType} toastMessage={toastMessage} />}

      <div className='h-full w-3/5 flex flex-col'>

        <h1 className='text-left text-[3rem] font-bold'>
          Forgot Password
        </h1>

        <div className='font-semibold w-full'>

          {renderStep()}

        </div>

      </div>

    </div>

  )

  function RegisterPanel1() {

    return (

      <div className='flex flex-col'>

        <p className='font-semibold mb-9' >Please enter your username first</p>

        <div className='flex flex-col w-full mb-9'>

          <div className='flex flex-col mb-3'>
            <label className='mb-1' htmlFor="FullName">Username</label>
            <input placeholder='Enter your Username' value={username} onChange={(e) => setUsername(e.target.value)}
              className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='FirstName' />
          </div>

        </div>

        <button onClick={nextStep} disabled={loading} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
          {loading ? <i className='pi pi-spinner pi-spin'></i> : "Next"}</button>

      </div>

    )
  }

  function RegisterPanel3() {

    return (

      <div className='flex flex-col w-full'>

        <p className='font-semibold mb-9' >Please fill out the fields</p>

        <div className='flex flex-col w-full mb-9'>

          <div className='flex flex-col mb-3'>
            <label className='mb-1' htmlFor="FullName">Password</label>
            <input placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}
              className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='FirstName' />
          </div>

          <div className='flex flex-col mb-3'>
            <label className='mb-1' htmlFor="UserName">Confirmed Password</label>
            <input placeholder='Enter your Confirmed Password' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
              className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='LastName' />
          </div>

        </div>

        <div className='flex flex-row gap-12 mt-2 mb-8'>

          <button onClick={prevStep} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg'>
            Back</button>

          <button onClick={register} disabled={loading} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
            {loading ? <i className='pi pi-spinner pi-spin'></i> : "Submit"}</button>

        </div>

      </div>

    )
  }

}


export default ForgotPassword