import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { useContext,useEffect } from 'react'
const PrivateRoute = () => {
  const auth=JSON.parse(localStorage.getItem('items'))
  
  return (
    auth['token'] ? <Outlet/> : <Navigate to ="/account/login"/>
  )
}

export default PrivateRoute