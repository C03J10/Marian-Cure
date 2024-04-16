import React, { useState, useEffect, useContext } from 'react'
import DataTable from 'react-data-table-component';

import ReportForm from 'components/ReportForm'

function Reportform() {
  return (
    <>
      <div className='min-h-auto w-full flex items-center justify-center gradientRight m-auto py-20'>

        <ReportForm state="submit"/>

      </div>

    </>
  )
}

export default Reportform