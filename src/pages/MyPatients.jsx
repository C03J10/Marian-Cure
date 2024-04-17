import React, { useState, useEffect, useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { getAllConcerns } from 'server/fetch'
import DataTable from 'react-data-table-component'

function MyPatients() {

  const [concerns, setConcerns] = useState([])

  const navigate = useNavigate()
  let userData = JSON.parse(sessionStorage.getItem('user'))

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Contact Number',
      selector: row => row.contact_number,
    },
    {
      name: 'Age',
      selector: row => row.age,
    },
    {
      name: 'Gender',
      selector: row => row.gender,
    },
    {
      name: 'Weight (kg)',
      selector: row => row.weight,
    },
    {
      name: 'Height (cm)',
      selector: row => row.height,
    },
    {
      name: 'View',
      button: true,
      cell: () => <button className='buttonIcon pi pi-eye'></button>
    }

  ];

  const getConcerns = async () => {
    const response = await getAllConcerns()
    setConcerns(response.data)

  }

  useEffect(() => {
    if (userData.pharmacist_id === null) {
      navigate("/home")
      return
    }else {
      getConcerns()
    }
  }, [])

  return (
    <>
      <div className='h-screen w-full flex items-center justify-center gradientRight m-auto '>

        <div className='h-4/5 w-4/5 flex flex-col bg-white text-black p-12 rounded-xl'>

          <h1 className='text-center text-[1.5rem] font-bold mb-9 items-center w-full '>Medical Reports</h1>

          
          <DataTable columns={columns} data={concerns}/>
        </div>


      </div>

    </>
  )
}

export default MyPatients