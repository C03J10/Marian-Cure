import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllConcernsOfPharmacist, getConcernByID, searchConcerns } from 'server/fetch'
import DataTable from 'react-data-table-component'

import LoadingScreen from 'components/LoadingScreen '

function MyPatients() {

  const [concerns, setConcerns] = useState([])

  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  let userData = JSON.parse(sessionStorage.getItem('user'))

  const getID = async (row_id) => {

    const response = await getConcernByID(row_id);

    if (response.status === 200) {

      sessionStorage.setItem('concern', JSON.stringify(response.data))
      navigate("/viewconcern")
      return

    }
  }

  const columns = [
    {
      name: 'ID',
      selector: row => row.concern_id,
      sortable: true
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
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
      cell: (row) => <button onClick={() => getID(row.concern_id)} className='buttonIcon pi pi-eye'></button>
    }

  ];

  const getConcerns = async () => {

    setLoading(true)
    const response = await getAllConcernsOfPharmacist(userData.user_id)
    setConcerns(response.data)
    setLoading(false)
  }

  const searchConcern = async () => {

    if (name == '') return

    setLoading(true)
    const response = await searchConcerns(name)
    setConcerns(response.data)
    setLoading(false)

  }

  useEffect(() => {
    if (userData.role_name === "Patient") {
      navigate("/home")
      return
    } else {
      getConcerns()
    }
  }, [])

  return (
    <>
      <div className='min-h-screen w-full flex flex-col items-center justify-center gradientRight m-auto '>



        <div className='min-h-4/5 w-4/5 flex flex-col bg-white text-black p-12 rounded-xl my-12 gap-6'>

          <h1 className='text-center text-[1.5rem] font-bold items-center w-full '>My Patients</h1>

          <div className="w-full h-12 relative rounded-2xl">

            <input placeholder='Search for a patient' value={name} onChange={(e) => setName(e.target.value)} className='w-full h-full px-6 rounded-lg text-black bg-white' type="text" />
            <button onClick={searchConcern} className="pi pi-search absolute right-8 mt-4 buttonIcon"/>

          </div>

          {loading ? <div className='h-1/2'><LoadingScreen /></div> : <DataTable columns={columns} data={concerns} pagination />}


        </div>


      </div>

    </>
  )
}

export default MyPatients