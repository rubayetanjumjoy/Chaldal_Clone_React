import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { useContext,useEffect } from 'react'
const PrivateRoute = () => {
  const auth=JSON.parse(localStorage.getItem('items'))
  
  console.log("as")
  console.log(auth)
  return (
    auth['token'] ? <Outlet/> : <Navigate to ="/account/login"/>
  )
}

export default PrivateRoute