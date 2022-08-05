import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ShoppingCartWrapper from './ShoppingCartWrapper'
import EverythingelseWarper from './EverythingelseWarper'
import { cartlist } from '../Contexts/CartContext'
const Main = ({insideWarper}) => {
  const refnav=useRef(null);
  
  const [cart,setcart]=useState([]);
  return (
    <>
     <cartlist.Provider value={{cart,setcart}}>
    <div ref={refnav} className='app catalog  navOpen chaldal-theme'>
    <Navbar refnav={refnav} />
    
    <ShoppingCartWrapper refnav={refnav}/>
    <EverythingelseWarper insideWarper={insideWarper}/>
    
    </div>
    </cartlist.Provider>
    </>
  )
}

export default Main