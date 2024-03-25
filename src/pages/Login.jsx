import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

import logpanel from "assets/logpanel.jpg"

function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const test = () => navigate("/mypatients")

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
        showPassword? {}:{}
    }

    const auth = () => {
        test()
    }

    return (

        <>
            <div className='flex bg-white'>

                <div className="relative h-screen w-[50%]">

                    <img className="absolute h-full w-full object-cover object-center" src={logpanel} alt="background" />

                    <div className="absolute z-10 h-full w-full bg-blu-400 opacity-60"></div>

                    <div className="absolute z-20 h-full w-full gradient"></div>


                </div>

                <div className='w-[50%] h-full flex flex-col items-center justify-center m-auto text-black font-rubik'>

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
                                <input type="text" id='usernameInput' value={username} onChange={(e) => setUsername(e.target.value)}placeholder='Enter your username' 
                                className='h-12 w-full rounded-lg px-4 font-normal ' />

                            </div>

                            <div className="flex flex-col mb-9">

                                <label htmlFor="passwordInput" className='mb-1'>password</label>

                                <div className='flex flex-row h-12 w-full relative'>

                                    <input type={showPassword ? "text" : "password"} id='passwordInput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' 
                                    className='absolute h-12 w-full rounded-lg px-4 font-normal' />

                                    <button value={showPassword} onClick={handlePasswordVisibility} 
                                    className={`absolute h-full buttonIcon pi pi-${showPassword? 'eye-slash':'eye'} float-right right-4`}></button>

                                </div>

                            </div>

                            <button onClick={auth} className='h-12 w-full buttonMain  text-white mb-4'>Log In</button>

                        </div>


                    </div>




                </div>


            </div>
        </>

    )
}

export default Login