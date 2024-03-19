import { useState } from 'react'
import { RouterProvider } from "react-router-dom"

import routers from 'router/routers'

function App() {

  return (
    <>
      <RouterProvider router={routers()}/>
    </>
  )
}

export default App
