import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import RegisterPanel1 from 'components/RegisterPanels/RegisterPanel1'
import RegisterPanel2 from 'components/RegisterPanels/RegisterPanel2'
import RegisterPanel3 from 'components/RegisterPanels/RegisterPanel3'
import Toast from 'components/Toast'

import { RegisterContext } from 'hooks/registerContext'

function Register() {

    const navigate = useNavigate();
    const navToLogin = () => navigate('/login');

    const { step } = useContext(RegisterContext)

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
                return <RegisterPanel1 />
            case 2:
                return <RegisterPanel2 />
            case 3:
                return <RegisterPanel3 />
        }
    };

    return (

        <div className='w-full h-full flex flex-col items-center justify-center m-auto text-black font-rubik'>

            {showToast && <Toast visible={showToast} toastType={toastType} toastMessage={toastMessage} />}

            <div className='h-full w-3/5 flex flex-col'>

                <button onClick={navToLogin} className='text-[1rem] buttonIcon pi pi-arrow-left mr-auto'></button>

                <h1 className='text-left text-[3rem] font-bold'>
                    Sign Up
                </h1>

                <div className='font-semibold w-full'>

                    {renderStep()}

                </div>

            </div>

        </div>

    )
}

export default Register