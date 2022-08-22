import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ShoppingCartWrapper from './ShoppingCartWrapper'
import EverythingelseWarper from './EverythingelseWarper'
import { isopen } from '../Contexts/ModalToggle'
import { CartProvider, useCart } from "react-use-cart";

const Main = ({insideWarper}) => {
  const refnav=useRef(null);
  
  const [isopenmodal,setIsOpenmodal]=useState(false);
  

  return (
    <>
      <CartProvider>
    <isopen.Provider value={{isopenmodal,setIsOpenmodal}}>

    <div ref={refnav} className='app catalog  navOpen chaldal-theme'>
    <Navbar refnav={refnav} />
    
    <ShoppingCartWrapper refnav={refnav}/>
    <EverythingelseWarper insideWarper={insideWarper}/>
    </div>
    </isopen.Provider>

    </CartProvider>

     </>
  )
}

export default Main