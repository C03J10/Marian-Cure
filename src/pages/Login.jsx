import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import Toast from 'components/Toast'
import { db } from 'data/database'
import { AuthContext } from 'hooks/authContext'
import logpanel from "assets/logpanel.jpg"


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [showToast, setShowToast] = useState(false)
    const [toastType, setToastType] = useState('')
    const [toastMessage, setToastMessage] = useState('')

    const { isLoggedIn, user, login } = useContext(AuthContext)

    const navigate = useNavigate()

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const showToastVisibility = (toastTypeProp, toastMessageProp) => {

        setShowToast(true)
        setToastType(toastTypeProp)
        setToastMessage(toastMessageProp)

        setTimeout(() => setShowToast(false), 3000)
    }

    const auth = async () => {

        if (username == '' || password == '') {
            showToastVisibility('Error', 'Please fill out the fields first.')
            return
        }

        db.user.map((data) => {

            if (data.username == username && data.password == password) {

                let userData = {
                    username: data.username,
                    user_id: data.user_id,
                    role: 'Patient',
                    pharmacist_id: 0,
                    pharmacist_name: ''
                }

                db.pharmacist.map((pharmaData) => {


                    if (pharmaData.user_id == userData.user_id) {

                        userData = {
                            ...userData,
                            role: 'Pharmacist',
                            pharmacist_id: pharmaData.pharmacist_id,
                            pharmacist_name: pharmaData.pharmacist_name
                        }

                    }

                })
                login(userData)
                navigate('/mypatients')
                return

            }
        })

        showToastVisibility('Error', 'Invalid credentials. Please try again.')

}

return (

    <>

        <div className='flex bg-white'>

            <div className="relative h-screen w-1/2">

                <img className="absolute h-full w-full object-cover object-center" src={logpanel} alt="background" />

                <div className="absolute z-10 h-full w-full bg-blu-400 opacity-60"></div>

                <div className="absolute z-20 h-full w-full gradient"></div>

                <div className='absolute z-30 h-full w-full flex flex-col items-center justify-center text-white'>



                </div>


            </div>

            <div className='w-1/2 h-full flex flex-col items-center justify-center m-auto text-black font-rubik'>

                {showToast && <Toast visible={showToast} toastType={toastType} toastMessage={toastMessage} />}

                <div className='h-full w-3/5 flex flex-col'>

                    <h1 className='text-left text-[3rem] font-bold'>
                        Login
                    </h1>

                    <p className="mb-9">
                        To proceed, log in with your account.
                    </p>

                    <div className='font-semibold'>

                        <div className="flex flex-col mb-4">

                            <label htmlFor="usernameInput" className='mb-1'>username</label>
                            <input type="text" id='usernameInput' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username'
                                className='h-12 w-full rounded-lg px-4 font-normal' />

                        </div>

                        <div className="flex flex-col mb-9">

                            <label htmlFor="passwordInput" className='mb-1'>password</label>

                            <div className='flex flex-row h-12 w-full relative'>

                                <input type={showPassword ? "text" : "password"} id='passwordInput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'
                                    className='absolute h-12 w-full rounded-lg px-4 font-normal' />

                                <button value={showPassword} onClick={handlePasswordVisibility}
                                    className={`absolute h-full buttonIcon pi pi-${showPassword ? 'eye-slash' : 'eye'} float-right right-4`}></button>

                            </div>

                        </div>

                        <button onClick={auth} className='h-12 w-full buttonMain text-white mb-4'>Log In</button>

                    </div>

                </div>

            </div>

        </div>
    </>

)
}

export default Login