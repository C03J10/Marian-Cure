import React, { useState, useEffect, useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { getAllConcerns, getConcernByID } from 'server/fetch'
import DataTable from 'react-data-table-component'

function MyPatients() {

  const [concerns, setConcerns] = useState([])

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
      <div className='min-h-screen w-full flex items-center justify-center gradientRight m-auto '>

        <div className='min-h-4/5 w-4/5 flex flex-col bg-white text-black p-12 rounded-xl my-12'>

          <h1 className='text-center text-[1.5rem] font-bold mb-9 items-center w-full '>Medical Reports</h1>
          
          <DataTable columns={columns} data={concerns} pagination/>
        </div>


      </div>

    </>
  )
}

export default MyPatients