import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

function Toast({ visible, toastType, toastMessage }) {

    return (
        visible &&
        < motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
                delay: 0.1,
            }}>

            <div className='h-24 w-96 flex flex-row bg-white shadow-xl z-50 right-4 top-4 fixed m-auto  text-black'>

                <div className=' rounded-l-md h-full w-2 bg-red-500'>

                </div>

                <div className='flex flex-col my-auto text-left px-6'>
                    <h1 className='text-[1.5rem] font-bold'>{toastType}</h1>
                    {toastMessage}
                </div>

            </div>

        </ motion.div> || null
    )
}

export default Toast