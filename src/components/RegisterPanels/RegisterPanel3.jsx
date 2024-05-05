import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import { RegisterContext } from 'hooks/registerContext'
import { registerUser } from 'server/fetch'

function RegisterPanel3({ showToastVisibility }) {

    const navigate = useNavigate();
    const navToLogin = () => navigate('/login');

    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const [disable, setDisable] = useState(false)
    const [buttonText, setButtonText] = useState('Submit')

    const { userData, setUserData, prevStep } = useContext(RegisterContext)

    const register = async () => {

        setDisable(true)
        setButtonText(<i className='pi pi-spinner pi-spin'></i>)

        try {

            if (password != confPassword) {
                showToastVisibility('Error', "Passwords don't match.")
                return
            }

            setUserData(
                {
                    ...userData,
                    password: password
                }
            )

            console.log(userData)
            const response = await registerUser(userData)

            if (!response) {
                showToastVisibility('Error', 'Something went wrong. Please try again.')
                return
            }

            if (response.status === 200) {

                navToLogin()
                return

            }

        } finally {
            setDisable(false)
            setButtonText('Submit')
        }
    }

    useEffect(() => {
        if (password == '' || confPassword == '') {
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
                    <label className='mb-1' htmlFor="passwordInput">Password</label>
                    <input placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='passwordInput' />
                </div>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="confPasswordInput">Confirmed Password</label>
                    <input placeholder='Enter your Confirmed Password' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='confPasswordInput' />
                </div>

            </div>

            <div className='flex flex-row gap-12 mt-2 mb-8'>

                <button id="prevButton" onClick={prevStep} className='h-12 w-36 buttonMain text-white mb-4 rounded-lg'>
                    Back</button>

                <button id="registerButton" onClick={register} disabled={disable}
                    className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
                    {buttonText}</button>

            </div>

        </div>
    )
}

export default RegisterPanel3