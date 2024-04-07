import React, { useState, useEffect } from 'react'

function ReportForm({ state }) {

    const [forView, setForView] = useState(true)
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [concern, setConcern] = useState('')
    const [prevMed, setPrevMed] = useState('')
    const [curMed, setCurMed] = useState('')

    useEffect(() => {
        if (state === "submit") {
            setForView(false)
        }
    }, [])

    const addButtons = () => {
        if (state === "submit") {
            return (
                <button onClick={submitConcern} className='h-12 w-1/4 buttonMain text-white font-rubik font-bold'>Submit</button>
            )
        }
    }

    const submitConcern = async () => {
        if (fullName === '' || gender === '' || age === '' || contactNumber === '' || weight === '' || height === '' || concern === '' || curMed === ''){
            alert("Please fill up the fields first.")
            return
        }
        alert("Successfully submitted form!")
    }

    return (

        <div className='min-h-auto w-4/5 flex flex-col gap-12 font-rubik rounded-xl bg-white text-black relative'>

            <div className='top-0 flex items-center justify-center bg-pinktwo rounded-t-xl h-24'>
                <h1 className='text-[2.5rem] font-bold'>Medical Report Form</h1>
            </div>

            <div className='min-h-auto w-full flex flex-col items-center justify-center mx-auto px-24 mb-12 gap-9'>

                <div className='min-h-auto w-full flex flex-col relative bg-white gap-6'>

                    <div className='top-0 flex items-center justify-center bg-pinktwo h-12'>
                        <h1 className='text-[1.5rem] font-bold'>Personal Information</h1>
                    </div>

                    <div className='flex flex-row gap-7'>

                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="fullNameInput" className='font-semibold'>Full Name (Ex. Dela Cruz, Juan C.)</label>
                            <input type="text" id='fullNameInput' placeholder='Enter Your Full Name' disabled={forView} value={fullName} onChange={(e) => setFullName(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                        <div className='w-1/4 flex flex-col'>
                            <label htmlFor="genderInput" className='font-semibold'>Gender</label>
                            <input type="text" id='genderInput' placeholder='Gender' disabled={forView} value={gender} onChange={(e) => setGender(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                        <div className='w-1/4 flex flex-col'>
                            <label htmlFor="ageInput" className='font-semibold'>Age</label>
                            <input type="number" id='ageInput' placeholder='Age' disabled={forView} value={age} onChange={(e) => setAge(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                    </div>

                    <div className='flex flex-row gap-7'>

                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="contactNumberInput" className='font-semibold'>Contact Number</label>
                            <input type="text" id='contactNumberInput' placeholder='09XXXXXXXXX' disabled={forView} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                        <div className='w-1/4 flex flex-col'>
                            <label htmlFor="weightInput" className='font-semibold'>Weight(kg)</label>
                            <input type="number" id='weightInput' placeholder='Weight' step="any" disabled={forView} value={weight} onChange={(e) => setWeight(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                        <div className='w-1/4 flex flex-col'>
                            <label htmlFor="heightInput" className='font-semibold'>Height(cm)</label>
                            <input type="number" id='heightInput' placeholder='Height' step="any" disabled={forView} value={height} onChange={(e) => setHeight(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                    </div>

                </div>

                <div className='min-h-auto w-full flex flex-col relative bg-white gap-6'>

                    <div className='top-0 flex items-center justify-center bg-pinktwo h-12'>
                        <h1 className='text-[1.5rem] font-bold'>Concern</h1>
                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="concernInput" className='font-semibold'>Concern</label>
                        <input type="text" id='concernInput' placeholder='Input your concern here' disabled={forView} value={concern} onChange={(e) => setConcern(e.target.value)}
                            className='h-[10em] rounded-lg w-full px-4' />
                    </div>

                </div>

                <div className='min-h-auto w-full flex flex-col relative bg-white gap-6'>

                    <div className='top-0 flex items-center justify-center bg-pinktwo h-12'>
                        <h1 className='text-[1.5rem] font-bold'>Medication</h1>
                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="prevMedInput" className='font-semibold'>Previous Medication (Optional)</label>
                        <input type="text" id='prevMedInput' placeholder='Input your concern here' disabled={forView} value={prevMed} onChange={(e) => setPrevMed(e.target.value)}
                            className='h-[10em] rounded-lg w-full px-4' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="curMedInput" className='font-semibold'>Current Medication</label>
                        <input type="text" id='curMedInput' placeholder='Input your concern here' disabled={forView} value={curMed} onChange={(e) => setCurMed(e.target.value)}
                            className='h-[10em] rounded-lg w-full px-4' />
                    </div>

                </div>

                {addButtons()}

            </div>




        </div>

    )

}

export default ReportForm

