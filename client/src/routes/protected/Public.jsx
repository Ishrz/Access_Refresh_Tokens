import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const Public = () => {

    const {user , isLoading} = useSelector(state => state.auth)
    // console.log(user)

    if(isLoading) return <h1>Loading......</h1>

    if(user) return <Navigate to={"/home"} />

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Public
