import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'primeicons/primeicons.css'

function RegisterPanel4() {

    const navigate = useNavigate();
    const navToLogin = () => navigate('/login');

    return (
        <div className='flex flex-col w-full items-center justify-center'>

            <div className='flex flex-col w-full my-9 gap-6 items-center justify-center'>

                <p className='pi pi-check-circle text-blu-700 text-[5rem]'></p>

                <p>You have successfully registered!</p>

            </div>

            <div className='flex flex-row gap-12 mt-2 mb-8'>

                <button id="navButton" onClick={navToLogin} className='h-12 w-36 buttonMain text-white mb-4 rounded-lg'>
                    Go back</button>

            </div>

        </div>
    )
}

export default RegisterPanel4