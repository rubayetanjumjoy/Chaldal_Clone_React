import React from 'react'
import HowtoOrder from './HowtoOrder'
import Corporate from './Corporate'
import LandingPage from './LandingPage'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
const EverythingelseWarper = ({insideWarper}) => {
  return (
    <div className='everythingElseWrapper'>
        
        <section className='bodyTable'>
          {insideWarper}
        </section>
       
    </div>
  )
}

export default EverythingelseWarper