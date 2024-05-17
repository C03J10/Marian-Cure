import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import { ForgotPassContext } from 'hooks/forgotPassContext'
import { getEmailAddress } from 'server/fetch'

function ForgotPassPanel1({ showToastVisibility }) {

    const [emailAddress, setEmailAddress] = useState('')

    const [disable, setDisable] = useState(false)
    const [buttonText, setButtonText] = useState('Submit')

    const { userData, setUserData, nextStep } = useContext(ForgotPassContext)

    const nextStep1 = async () => {

        setDisable(true)
        setButtonText(<i className='pi pi-spinner pi-spin'></i>)

        try {
            const response = await getEmailAddress(emailAddress)

            if (!response) {
                showToastVisibility('Error', 'Email Adress does not exist.')
                return
            }

            if (response.status === 200) {

                setUserData({
                    ...userData,
                    email_address: emailAddress
                })
                nextStep()

            }

        } finally {
            setDisable(false)
            setButtonText('Submit')
        }
    }

    useEffect(() => {
        if (emailAddress == '') {
            setDisable(true)
            return
        }
        setDisable(false)
    })


    return (
        <div className='flex flex-col'>

            <p className='font-semibold mb-9' >Please enter your email address first</p>

            <div className='flex flex-col w-full mb-9'>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="FullName">Email Address</label>
                    <input placeholder='Enter your Username' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="text" id='FirstName' />
                </div>

            </div>

            <button onClick={nextStep1} disabled={disable} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
                {buttonText}</button>

        </div>
    )
}

export default ForgotPassPanel1