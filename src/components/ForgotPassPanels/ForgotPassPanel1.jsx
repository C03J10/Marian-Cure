import React from 'react'

function ForgotPassPanel1() {

    return (
        <div className='flex flex-col'>

            <p className='font-semibold mb-9' >Please enter your email address first</p>

            <div className='flex flex-col w-full mb-9'>

                <div className='flex flex-col mb-3'>
                    <label className='mb-1' htmlFor="FullName">Email Address</label>
                    <input placeholder='Enter your Username' value={username} onChange={(e) => setUsername(e.target.value)}
                        className='h-12 w-full rounded-lg px-4 font-normal' type="password" id='FirstName' />
                </div>

            </div>

            <button onClick={nextStep} disabled={loading} id="loginButton" className='h-12 w-36 buttonMain text-white mb-4 rounded-lg float-right ml-auto'>
                {loading ? <i className='pi pi-spinner pi-spin'></i> : "Next"}</button>

        </div>
    )
}

export default ForgotPassPanel1