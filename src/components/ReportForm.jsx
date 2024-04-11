import React, { useState, useEffect } from 'react'

function ReportForm({ state, isViewed }) {

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
        if (isViewed) {
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
        if (fullName === '' || gender === '' || age === '' || contactNumber === '' || weight === '' || height === '' || concern === '' || curMed === '') {
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
                        <h1 className='text-[1.5rem] font-bold'>General Information</h1>
                    </div>

                    <div className='flex flex-row items-center justify-center '>
                        <div className='flex flex-col relative right-[8em]'>
                            <label>
                                <input type="checkbox" id='pregnantinput' />
                                Pregnant
                            </label>
                        </div>

                        <div className='flex flex-col relative right-[3em]'>
                            <label>
                                <input type="checkbox" id='breastfeedinginput' />
                                Breastfeeding
                            </label>
                        </div>

                        <div className='flex flex-col relative left-[2em] '>
                            <label>
                                <input type="checkbox" id='smokinginput' />
                                Smoking
                            </label>
                        </div>

                        <input type="text" id='complaintInput' placeholder=''
                                className='h-[1.3em] w-[3em] px-4 left-[2.5em] relative flex-row flex outline-' />
                                <h6  className='px-1 left-[2.5em] relative flex-row flex '> packs per year</h6>

                        <div className='flex flex-col relative left-[8em] '>
                        <label>
                            <input type="checkbox" id='alcoholicinput' />
                            Alcoholic
                        </label>
                        </div>
                    </div>


                    <div className='flex flex-col '>
                        <label htmlFor="complaintInput" className='font-semibold'>Chief Complaint</label>
                        <input type="text" id='complaintInput' placeholder='Input your Complaint here'
                            className='h-[10em] rounded-lg w-full px-4' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="familyhistoryInput" className='font-semibold'>Family History</label>
                        <input type="text" id='familyhistoryInput' placeholder='Input your Family History here'
                            className='h-[10em] rounded-lg w-full px-4' />
                    </div>

                    <div className='flex flex-row '>
                        <div className='top-0 flex items-center justify-center bg-pinktwo h-12 w-[30em] relative'>
                            <h1 className='text-[1.5rem] font-bold'>Allergy History</h1>
                        </div>

                        <div className='top-0 flex items-center justify-center bg-pinktwo h-12 w-[30em] relative left-[4em]   '>
                            <h1 className='text-[1.5rem] font-bold'>Medication History</h1>
                        </div>
                    </div>

                    <div className='flex flex-row relative'>
                        <div className='flex flex-col relative'>
                            <input type="text" id='allergyinput' placeholder='Input your Allergy History here'
                                className='h-[10em] rounded-lg w-[30em] px-4'></input>
                        </div>

                        <div className='flex flex-col relative left-[4em]'>
                            <input type="text" id='medicationinput' placeholder='Input your Medication History here'
                                className='h-[10em] rounded-lg w-[30em] px-4 left'></input>
                        </div>
                    </div>


                    <div className='flex flex-row '>
                        <div className='top-0 flex items-center justify-center bg-pinktwo h-12 w-[30em] relative '>
                            <h1 className='text-[1.5rem] font-bold'>Assessment</h1>
                        </div>

                        <div className='top-0 flex items-center justify-center bg-pinktwo h-12 w-[30em] relative left-[4em]    '>
                            <h1 className='text-[1.5rem] font-bold '>Plan</h1>
                        </div>
                    </div>


                    <div className='flex flex-row'>
                        <div>
                            <input type="text" id='assessmentinput' placeholder='Input your Assessment here'
                                className='h-[10em]  w-[30em] px-4 rounded-lg '></input>
                        </div>

                        <div className='flex flex-col relative left-[4em]'>
                            <input type="text" id='planinput' placeholder='Input your Plan History here'
                                className='h-[10em] w-[30em] px-4 rounded-lg '></input>
                        </div>
                    </div>





                </div>




                {addButtons()}

            </div>




        </div>

    )

}

export default ReportForm

