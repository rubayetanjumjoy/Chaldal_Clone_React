import React from 'react'
 import { useState } from 'react'
 import { useEffect } from 'react'
 
 export default function GetWindowSize(){
    const [windowsize,setWindowsize]=useState({"width":0,"height":0})

    const handlewindow=()=>{
        setWindowsize({"width":window.innerWidth,"height":window.innerHeight})
        
    
      }
     
    useEffect(() => {
        
        handlewindow()
    
        window.addEventListener('resize',handlewindow)
        return ()=> window.removeEventListener('resize',handlewindow)
      }, [])
    return windowsize
 }
