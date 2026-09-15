import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <div className="bg-gray-800 text-white p-4"> navbar</div> */}
      <Outlet/>
        
    </div>
  )
}

export default MainLayout
