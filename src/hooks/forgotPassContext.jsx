import React, { createContext, useState } from 'react'

export const ForgotPassContext = createContext()

function ForgotPassProvider({ children }) {

    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        email_address: '',
        password: ''
    });

    const prevStep = () => {
        setStep(step - 1);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    return (
        <ForgotPassContext.Provider value={{ step, userData, setUserData, prevStep, nextStep }}>
            {children}
        </ForgotPassContext.Provider>
    )

}

export default ForgotPassProvider