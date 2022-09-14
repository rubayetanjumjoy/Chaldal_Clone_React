import React from 'react'
import { Outlet,Navigate } from 'react-router'

const PublicRoute = () => {
  
  const auth = JSON.parse(localStorage.getItem('items'));

  
  return (
    auth['token'] ? <Navigate to ="/"/>:<Outlet/>  
  )
}

export default PublicRoute