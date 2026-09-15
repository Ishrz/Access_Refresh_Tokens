import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
        {/* <nav className="bg-gray-800 text-white p-4"/> */}
        <Outlet/>
      
    </div>
  )
}

export default AuthLayout
