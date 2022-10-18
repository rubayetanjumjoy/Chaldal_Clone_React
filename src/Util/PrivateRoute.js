import React from 'react'
import { Outlet,Navigate } from 'react-router'
import { useContext,useEffect,useState,useLayoutEffect } from 'react'
import { authProvider } from '../Contexts/Auth'
const PrivateRoute = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  console.log(auth)
  return (
    auth? <Outlet/> : <Navigate to ="/account/login"/>
  )
}

export default PrivateRoute