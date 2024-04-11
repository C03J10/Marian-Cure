import React from 'react'
import Footer from "components/Footer"

function MyPatients() {
  return (
    <>
      <div className='h-screen w-full flex items-center justify-center gradientRight m-auto '>

        <div className='h-4/5 w-4/5 flex flex-col bg-white text-black p-12 rounded-xl'>

          <h1 className='text-center text-[1.5rem] font-bold mb-9 items-center w-full '>Medical Reports</h1>

          <table>

            <thead className='bg-pink-400 h-12'>

              <tr>
                <th>
                  Name
                </th>

                <th>
                  Contact
                </th>

                <th>
                  Age
                </th>

                <th>
                  Gender
                </th>

                <th>
                  Weight
                </th>

                <th>
                  Height
                </th>

                <th>
                  View
                </th>
              </tr>


            </thead>

            <tbody>

            </tbody>

          </table>

        </div>


      </div>

    </>
  )
}

export default MyPatients