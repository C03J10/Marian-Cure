import React from 'react'
import ReportForm from 'components/ReportForm'

function Reportform() {
  return (
    <>
      <div className='min-h-auto w-full flex items-center justify-center gradientRight m-auto py-20'>

        <ReportForm state="submit" isViewed={true}/>

      </div>

    </>
  )
}

export default Reportform