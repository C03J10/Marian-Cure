import React, { useState, useEffect, useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { getAllConcerns, getConcernByID } from 'server/fetch'
import DataTable from 'react-data-table-component'
import add from 'assets/add.png'
import { submitFeedback } from 'src/server/fetch'

function MyPatients() {

  return (
    <>
    <div className='min-h-screen w-full flex items-center justify-center gradientRight m-auto '>

      <div className='min-h-4/5 w-4/5 flex flex-col bg-white text-black p-12 rounded-xl my-12'>

        <h1 className='text-center text-[1.5rem] font-bold mb-9 items-center w-full '>My Concerns</h1>

        <div className='flex justify-end mb-4'>
                    <a href='SubmitFeedback' target='_blank' rel='noopener noreferrer'className='flex items-center '>
                        <span className='pi pi-plus-circle mr-3.5'></span>
                        Add Concern
                    </a>
                </div>

        <DataTable pagination/>
      </div>


    </div>

  </>
)
}

export default MyPatients