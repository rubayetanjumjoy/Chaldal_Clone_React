import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ShoppingCartWrapper from './ShoppingCartWrapper'
import EverythingelseWarper from './EverythingelseWarper'
import { cartlist } from '../Contexts/CartContext'
import { CartProvider, useCart } from "react-use-cart";

const Main = ({insideWarper}) => {
  const refnav=useRef(null);
  
  const [cart,setcart]=useState([]);
  return (
    <>
      <CartProvider>

    <div ref={refnav} className='app catalog  navOpen chaldal-theme'>
    <Navbar refnav={refnav} />
    
    <ShoppingCartWrapper refnav={refnav}/>
    <EverythingelseWarper insideWarper={insideWarper}/>
    
    </div>
    </CartProvider>

     </>
  )
}

export default Main