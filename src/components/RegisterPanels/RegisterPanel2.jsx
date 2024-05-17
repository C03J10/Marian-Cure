import React, { useEffect, useState, useContext } from 'react'

import { RegisterContext } from 'hooks/registerContext'
import { getUsername, getEmailAddress } from 'server/fetch'

function RegisterPanel2({ showToastVisibility }) {

    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [emailAddress, setEmailAddress] = useState('')

    const [disable, setDisable] = useState(false)
    const [buttonText, setButtonText] = useState('Next')

    const { userData, setUserData, prevStep, nextStep } = useContext(RegisterContext)

    const nextStep2 = async () => {

        setDisable(true)
        setButtonText(<i className='pi pi-spinner pi-spin'></i>)

        try {

            const response = await getUsername(username)

            if (response) {
                showToastVisibility('Error', 'Username already been used.')
                return
            }

            const response2 = await getEmailAddress(emailAddress)

            if (response2) {
                showToastVisibility('Error', 'Email Address already been used.')
                return
            }

            setUserData((userData) => (
                {
                    ...userData,
                    full_name: fullName,
                    username: username,
                    email_address: emailAddress
                }
            ))

            nextStep()

        } finally {
            setDisable(false)
            setButtonText('Next')
        }

    }

    useEffect(() => {
        if (fullName == '' || username == '' || emailAddress == '') {
            setDisable(true)
            return
        }
        setDisable(false)
    })

    return (
        <div className='flex flex-col w-full'>

            <p className='font-semibold mb-9' >Please fill out the fields</p>

            <div className='flex flex-col w-full mb-9'>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="fullNameInput">Full Name</label>
                    <input placeholder='Enter your full name' value={fullName} onChange={(e) => setFullName(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="text" id='fullNameInput' />
                </div>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="usernameInput">Username</label>
                    <input placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="text" id='usernameInput' />
                </div>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="emailAddressInput">Email Address</label>
                    <input placeholder='Enter your email address' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="text" id='emailAddressInput' />
                </div>

            </div>

            <div className='flex flex-row gap-12 mt-2 mb-8'>

                <button id="prevButton" onClick={prevStep} className='h-12 w-36 buttonMain text-white mb-4 rounded-lg'>
                    Back</button>

                <button id="nextButton" onClick={nextStep2} disabled={disable}
                    className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
                    {buttonText}</button>

            </div>

        </div>
    )
}

export default RegisterPanel2