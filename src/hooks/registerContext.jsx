import React, { createContext, useState } from 'react'

export const RegisterContext = createContext()

function RegisterProvider({ children }) {

    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        username: '',
        full_name: '',
        email_address: '',
        role_name: '',
        password: ''
    });

    const prevStep = () => {
        setStep(step - 1);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    return (
        <RegisterContext.Provider value={{ step, userData, setUserData, prevStep, nextStep }}>
            {children}
        </RegisterContext.Provider>
    )

}

export default RegisterProvider