import React, { useEffect, useState, useContext } from 'react'

import heart from 'assets/heart.png'
import stethoscope from 'assets/stethoscope.png'

import { RegisterContext } from 'hooks/registerContext'

function RegisterPanel1() {

    const [role, selectRole] = useState('')
    const [disable, setDisable] = useState(false)

    const { userData, setUserData, nextStep } = useContext(RegisterContext)

    const nextStep1 = () => {

        setUserData((userData) => ({
            ...userData,
            role_name: role
        }))
        nextStep()
    }

    useEffect(() => {
        if (role == ''){
            setDisable(true)
            return
        }
        setDisable(false)
    })

    return (

        <div className='flex flex-col'>

            <p className='font-semibold mb-9' >Please select your role:</p>

            <div className='flex flex-row gap-9 items-center justify-center mb-9'>

                <button value="Patient" onClick={() => selectRole("Patient")} className="w-48 h-56 outline outline-blu-500 flex flex-col items-center justify-center gap-3
                hover:shadow-md active:shadow-lg active:shadow-blu-800 focus:shadow-lg focus:shadow-blu-600">
                    <img alt="patient" src={heart} className='w-24 h-24' />
                    <p>Patient</p>
                </button>

                <button value="Pharmacist" onClick={() => selectRole("Pharmacist")} className="w-48 h-56 outline outline-blu-500 flex flex-col items-center justify-center gap-3
                hover:shadow-md active:shadow-lg active:shadow-blu-800 focus:shadow-lg focus:shadow-blu-600">
                    <img alt="pharmacist" src={stethoscope} className='w-24 h-24' />
                    <p>Pharmacist</p>
                </button>

            </div>

            <button onClick={nextStep1} disabled={disable} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
                Next</button>

        </div>
    )
}

export default RegisterPanel1