import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import EverythingelseWarper from './EverythingelseWarper'
const Main = ({insideWarper}) => {
  return (
    <>
    <div className='app catalog navOpen chaldal-theme'>
    <Navbar/>
    <Sidebar/>
    
    <EverythingelseWarper insideWarper={insideWarper}/>
    </div>
    </>
  )
}

export default Main