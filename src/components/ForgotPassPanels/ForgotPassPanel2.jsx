import React from 'react'

function ForgotPassPanel2() {
    return (
        <div className='flex flex-col w-full'>

            <p className='font-semibold mb-9' >Please fill out the fields</p>

            <div className='flex flex-col w-full mb-9'>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="FullName">Password</label>
                    <input placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='FirstName' />
                </div>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="UserName">Confirmed Password</label>
                    <input placeholder='Enter your Confirmed Password' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='LastName' />
                </div>

            </div>

            <div className='flex flex-row gap-12 mt-2 mb-8'>

                <button onClick={prevStep} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg'>
                    Back</button>

                <button onClick={register} disabled={loading} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
                    {loading ? <i className='pi pi-spinner pi-spin'></i> : "Submit"}</button>

            </div>

        </div>
    )
}

export default ForgotPassPanel2