import React from 'react'
import Footer from "components/Footer"

function Reportform() {
  return (
    <>
      <div className='h-[80em] w-full flex items-center justify-center gradientRight m-auto mt-8'>

        <div className='h-[75em] w-4/5 flex flex-col bg-white text-black p-12 rounded-xl relative top-[1em]'>

          <h1 className='text-center text-[2rem] bg-pink-400 h-14 font-bold absolute w-full h-14 mx-auto top-0 left-0'>Medical Report Form</h1>
          
          <div className='bg-pink-400 h-14 font-bold absolute w-4/5 min-h-2 flex items-center justify-center mx-auto top-20 left-32'> 
            <h3 className=''> Personal Information</h3>

          <div> 
            <h6 className='flex items-center absolute justify-center mx-auto top-20 left-2'>Full Name (Ex. Dela Cruz, Juan C.)</h6>
            <input type="text" id='fullnameinput' placeholder='Enter Your Full Name' 
                    className='absolute h-12 rounded-lg w-96 px-4 font-normal top-28 left-0' />
          </div>

          <div> 
            <h6 className='flex items-center absolute justify-center mx-auto top-20 left-[430px]'>Gender</h6>
            <input type="text" id='genderinput' placeholder='Gender' 
                    className='absolute h-12 rounded-lg w-72 px-4 font-normal top-28 left-[420px]' />
          </div>

          <div> 
            <h6 className='flex items-center absolute justify-center mx-auto top-20 left-[750px]'>Age</h6>
            <input type="text" id='ageinput' placeholder='Age' 
                    className='absolute h-12 rounded-lg w-56 px-4 font-normal top-28 left-[740px]' />
          </div>


          <div> 
            <h6 className='flex items-center absolute justify-center mx-auto top-44 left-[430px]'>Weight(kg)</h6>
            <input type="text" id='weightinput' placeholder='Weight' 
                    className='absolute h-12 rounded-lg w-72 px-4 font-normal top-52 left-[420px]' />
          </div>

          <div> 
            <h6 className='flex items-center absolute justify-center mx-auto top-44 left-[750px]'>Height</h6>
            <input type="text" id='heightinput' placeholder='Height' 
                    className='absolute h-12 rounded-lg w-56 px-4 font-normal top-52 left-[740px]' />
          </div>

          <div> 
            <h6 className='flex items-center absolute justify-center mx-auto top-44 left-2'>Contact Number</h6>
            <input type="text" id='contactnumberinput' placeholder='09XXXXXXXXX' 
                    className='absolute h-12 rounded-lg w-96 px-4 font-normal top-52 left-0' />
          </div>
          </div>

          <div className='bg-pink-400 h-14 font-bold absolute w-4/5 flex items-center justify-center mx-auto top-96 left-32'> 
            <h3> Concern</h3>
            
            <input type="text" id='contactnumberinput' placeholder='Input your concern here:' 
                    className='absolute h-[10em] rounded-lg w-[60.5em] px-4 font-normal top-20 left-0' />

            <h6 className='flex items-center absolute justify-center mx-auto top-[16em] left-0'>Previous Medication(optional)</h6>

            <input type="text" id='contactnumberinput' placeholder='Input your previous medications here:' 
                    className='absolute h-[10em] rounded-lg w-[60.5em] px-4 font-normal top-[18em] left-0' /> 
          </div>

          <div className='bg-pink-400 h-14 font-bold absolute w-4/5 flex items-center justify-center mx-auto bottom-[17em] left-32'> 
            <h3> Current Medication</h3>
            <input type="text" id='contactnumberinput' placeholder='Input your previous medications here:' 
                    className='absolute h-[10em] rounded-lg w-[60.5em] px-4 font-normal top-[5em] left-0' /> 
          </div>

          <button className='h-12 w-48 bottom-1 absolute buttonMain justify-center items-center flex m-auto text-white mb-4 right-[28em]'>Submit Concern</button>



          

        </div>



      </div>

    </>
  )
}

export default Reportform