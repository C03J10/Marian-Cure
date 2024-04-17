import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import Toast from 'components/Toast'
import { AuthContext } from 'hooks/authContext'
import { authUser } from 'server/fetch'
import logpanel from "assets/logpanel.png"


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [showToast, setShowToast] = useState(false)
    const [toastType, setToastType] = useState('')
    const [toastMessage, setToastMessage] = useState('')

    const [loading, setLoading] = useState(false)

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

        setLoading(true)
        try {
            if (username == '' || password == '') {
                showToastVisibility('Error', 'Please fill out the fields first.')
                return
            }

            const response = await authUser(username, password);

            if (!response) {
                showToastVisibility('Error', 'Invalid credentials. Please try again.')
                return
            }

            if (response.status === 200) {
                login(response.data)
                navigate('/home')
                return
            }
        } finally {
            setLoading(false)
        }

        

    }

    useEffect(() => {
        if (sessionStorage.getItem("isLoggedIn")) {
            navigate("/home")
            return
        }
    })

    return (

        <div className='flex bg-white'>

            <div className="relative h-screen w-1/2">

                <img className="absolute h-full w-full object-cover object-center" src={logpanel} alt="background" />
                <div className="absolute z-10 h-full w-full bg-blu-400 opacity-60"></div>
                <div className="absolute z-20 h-full w-full gradient"></div>

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

                                <button id='passwordVisibilityButton' value={showPassword} onClick={handlePasswordVisibility}
                                    className={`absolute h-full buttonIcon pi pi-${showPassword ? 'eye-slash' : 'eye'} float-right right-4`}></button>

                            </div>

                        </div>

                        <button onClick={auth} id="loginButton" disabled={loading} className='h-12 w-full buttonMain text-white mb-4 rounded-lg'>
                            {loading ? <i className='pi pi-spinner pi-spin'></i> : "Log In"}</button>

                    </div>

                </div>

            </div>

        </div>


    )
}

export default Login