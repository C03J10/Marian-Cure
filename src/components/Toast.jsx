import React, { useEffect, useState } from 'react'

function Toast({ visible, toastType, toastMessage }) {

    return (
        visible &&

        <div className='h-24 w-96 flex flex-row bg-gradient-to-t rounded-md to-white from-transparent shadow-xl z-10 right-4 top-4 m-auto absolute text-black'>


            <div className=' rounded-l-md h-full w-2 bg-red-500'>

            </div>

            <div className='flex flex-col my-auto text-left px-6'>
                <h1 className='text-[1.5rem] font-bold'>{toastType}</h1>
                {toastMessage}
            </div>




        </div> || null
    )
}

export default Toast