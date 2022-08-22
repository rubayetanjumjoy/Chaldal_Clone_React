import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { useContext,useEffect } from 'react'
import { authProvider } from '../Contexts/Auth';
const PrivateRoute = () => {
  const {auth,setAuth} =useContext(authProvider);
  
  return (
    auth['token'] ? <Outlet/> : <Navigate to ="/account/login"/>
  )
}

export default PrivateRoute