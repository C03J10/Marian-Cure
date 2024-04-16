import React from 'react'
import ReportForm from 'components/ReportForm'

function SubmitFeedback() {
  return (
    <div className='min-h-auto w-full flex items-center justify-center gradientRight m-auto py-20'>

        <ReportForm state="feedback"/>

      </div>
  )
}

export default SubmitFeedback