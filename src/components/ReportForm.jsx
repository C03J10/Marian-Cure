import React, { useState, useEffect } from 'react'

function ReportForm({ state }) {

    const [forView, setForView] = useState(true)
    const [forFeedbackView, setForFeedbackView] = useState(true)
    const [hasFeedback, setHasFeedback] = useState(false)

    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const [isPregnant, setIsPregnant] = useState(false)
    const [doesBreastfeed, setDoesBreastfeed] = useState(false)
    const [doesDrinkAlcohol, setDoesDrinkAlcohol] = useState(false)
    const [doesSmoke, setDoesSmoke] = useState(false)
    const [packs, setPacks] = useState('')
    const [handlePacks, setHandlePacks] = useState('')

    const [chiefComplaint, setChiefComplaint] = useState('')
    const [familyHistory, setFamilyHistory] = useState('')
    const [allergyHistory, setAllergyHistory] = useState('')
    const [prevMed, setPrevMed] = useState('')
    const [curMed, setCurMed] = useState('')

    const [assessment, setAssessment] = useState('')
    const [plan, setPlan] = useState('')

    let concernData = JSON.parse(sessionStorage.getItem("concern"))

    const addData = () => {

        setFullName(concernData.name)
        setGender(concernData.gender)
        setAge(concernData.age)
        setContactNumber(concernData.contact_number)
        setWeight(concernData.weight)
        setHeight(concernData.height)
        setIsPregnant(concernData.is_pregnant)
        setDoesBreastfeed(concernData.does_breastfeed)
        setDoesSmoke(concernData.does_smoke)
        setDoesDrinkAlcohol(concernData.does_drink_alcohol)
        setPacks(concernData.number_of_packs_yearly)
        setChiefComplaint(concernData.chief_complaint_content)
        setFamilyHistory(concernData.family_history_content)
        setAllergyHistory(concernData.allergy_history_content)
        setPrevMed(concernData.previous_medication)
        setCurMed(concernData.current_medication)

        if (hasFeedback) {
            setAssessment(concernData.assessment_content)
            setPlan(concernData.plan_content)
        }

    }

    const addButtons = () => {
        if (state === "submit") {
            return (
                <button onClick={submitConcern} className='h-12 w-1/4 buttonMain text-white font-rubik font-bold'>Submit</button>
            )
        }

        if (state === "view") {
            return null
        }
    }

    const submitConcern = async () => {
        if (fullName === '' || gender === '' || age === '' || contactNumber === '' || weight === '' || height === '' || concern === '' || curMed === '') {
            alert("Please fill up the fields first.")
            return
        }
        alert("Successfully submitted form!")
    }

    const handlePregnantCheck = () => {
        setIsPregnant(!isPregnant)
    }

    const handleBreastfeedCheck = () => {
        setDoesBreastfeed(!doesBreastfeed)
    }

    const handleSmokeCheck = () => {
        setDoesSmoke(!doesSmoke)
        doesSmoke ? setHandlePacks(true) : setHandlePacks(false)
    }

    const handleAlcoholCheck = () => {
        setDoesDrinkAlcohol(!doesDrinkAlcohol)
    }

    useEffect(() => {
        if (state == "submit") {
            setForView(false)
            setHasFeedback(false)
            setForFeedbackView(true)
        }
        if (state == "view") {
            setForView(true)
            setForFeedbackView(true)
            if (concernData.feedback_id != null) {
                setHasFeedback(true)
            }
            addData()
        }
        if (state == "feedback") {
            setForView(true)
            setHasFeedback(true)
            setForFeedbackView(false)
        }
    })

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
                            <input type="number" id='ageInput' placeholder='Age' min="0" disabled={forView} value={age} onChange={(e) => setAge(e.target.value)}
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
                            <input type="number" id='weightInput' placeholder='Weight' step="any" min="0" disabled={forView} value={weight} onChange={(e) => setWeight(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                        <div className='w-1/4 flex flex-col'>
                            <label htmlFor="heightInput" className='font-semibold'>Height(cm)</label>
                            <input type="number" id='heightInput' placeholder='Height' step="any" min="0" disabled={forView} value={height} onChange={(e) => setHeight(e.target.value)}
                                className='h-12 rounded-lg w-full px-4' />
                        </div>

                    </div>


                    <div className='top-0 flex items-center justify-center bg-pinktwo h-12'>
                        <h1 className='text-[1.5rem] font-bold'>General Information</h1>
                    </div>

                    <div className='flex flex-row items-center justify-center gap-9 '>

                        <div className='flex gap-3'>
                            <input type="checkbox" id='pregnantInput' disabled={forView} value={isPregnant} onChange={handlePregnantCheck} />
                            <label htmlFor='pregnantInput'>Pregnant</label>
                        </div>

                        <div className='flex gap-3'>
                            <input type="checkbox" id='breastfeedingInput' disabled={forView} value={doesBreastfeed} onChange={handleBreastfeedCheck} />
                            <label htmlFor='breastfeedingInput'>Breastfeeding</label>
                        </div>


                        <div className='flex gap-3'>

                            <input type="checkbox" id='smokingInput' disabled={forView} value={doesSmoke} onChange={handleSmokeCheck} />
                            <label htmlFor="smokingInput">Smoking</label>

                            <div className='flex gap-1'>
                                <input type="number" id='complaintInput' disabled={handlePacks}
                                    min="0" value={packs} onChange={(e) => setPacks(e.target.value)} className='h-5 w-12 border-t-0 border-x-0 border-b-12' />
                                <h6 className='left-[2.5em] '> packs/year</h6>
                            </div>

                        </div>

                        <div className='flex gap-3'>
                            <input type="checkbox" id='alcoholicInput' disabled={forView} value={doesDrinkAlcohol} onChange={handleAlcoholCheck} />
                            <label htmlFor='alcoholicInput'>Alcoholic</label>
                        </div>

                    </div>

                    <div className='flex flex-col '>
                        <label htmlFor="complaintInput" className='font-semibold'>Chief Complaint</label>
                        <textarea type="text" id='complaintInput' placeholder='Input your complaint here'
                            value={chiefComplaint} onChange={(e) => setChiefComplaint(e.target.value)} disabled={forView}
                            className='h-[8em] rounded-lg w-full p-4' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="familyhistoryInput" className='font-semibold'>Family History</label>
                        <textarea type="text" id='familyhistoryInput' placeholder='Input your family history here' disabled={forView}
                            value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value)}
                            className='h-[8em] rounded-lg w-full p-4' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="allergyInput" className='font-semibold'>Allergy History</label>
                        <textarea type="text" id='allergyInput' placeholder='Input your allergy history here' disabled={forView}
                            value={allergyHistory} onChange={(e) => setAllergyHistory(e.target.value)}
                            className='h-[8em] rounded-lg w-full p-4' />
                    </div>


                    <div className='top-0 flex items-center justify-center bg-pinktwo h-12'>
                        <h1 className='text-[1.5rem] font-bold'>Medication History</h1>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="previousmedInput" className='font-semibold'>Previous Medication (Optional)</label>
                        <textarea type="text" id='previousmedInput' placeholder='Input your previous medication' disabled={forView}
                            value={prevMed} onChange={(e) => setPrevMed(e.target.value)}
                            className='h-[8em] rounded-lg w-full p-4' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="currentmedInput" className='font-semibold'>Current Medication</label>
                        <textarea type="text" id='currentmedInput' placeholder='Input your current medication here' disabled={forView}
                            value={curMed} onChange={(e) => setCurMed(e.target.value)}
                            className='h-[8em] rounded-lg w-full p-4' />
                    </div>

                    {hasFeedback &&
                        <div className='flex flex-row gap-6'>

                            <div className='flex flex-col w-full gap-6'>

                                <div className='top-0 flex items-center justify-center bg-pinktwo h-12 w-full'>
                                    <h1 className='text-[1.5rem] font-bold'>Assessment</h1>
                                </div>

                                <textarea type="text" id='assessmentinput' placeholder='Input your Assessment here' disabled={forFeedbackView}
                                    value={assessment} onChange={(e) => setAssessment(e.target.value)}
                                    className='h-[15em] w-full p-4 rounded-lg ' />

                            </div>

                            <div className='flex flex-col w-full gap-6'>

                                <div className='top-0 flex items-center justify-center bg-pinktwo h-12 w-full'>
                                    <h1 className='text-[1.5rem] font-bold '>Plan</h1>
                                </div>

                                <textarea type="text" id='planinput' placeholder='Input your Plan History here' disabled={forFeedbackView}
                                    value={plan} onChange={(e) => setPlan(e.target.value)}
                                    className='h-[15em] w-full p-4 rounded-lg ' />
                            </div>

                        </div>}

                </div>

                {addButtons()}

            </div>




        </div>

    )

}

export default ReportForm

