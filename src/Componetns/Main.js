import React, { useRef, useState ,useContext,useEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ShoppingCartWrapper from './ShoppingCartWrapper'
import EverythingelseWarper from './EverythingelseWarper'
import { data } from '../Contexts/DataContext'
import { CartProvider, useCart } from "react-use-cart";
import { authProvider } from '../Contexts/Auth';

const Main = ({insideWarper}) => {
  const refnav=useRef(null);
  const {auth,setAuth} =useContext(authProvider);

  const [isopenmodal,setIsOpenmodal]=useState(false);
  const [searchresult,setSearchesult]=useState([]);
  const [mysearch,setMysearch]=useState([]);
  const [address,setMyaddress]=useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined'){
      const items = JSON.parse(localStorage.getItem('address'));
      if (items) {
        
       setMyaddress(JSON.parse(localStorage.getItem('address')));
       
  
       }
      }
  
  }, [])
  
  return (
    <>
      <CartProvider>
        
    <data.Provider value={{isopenmodal,setIsOpenmodal,searchresult,setSearchesult,mysearch,setMysearch,address,setMyaddress}}>

    <div ref={refnav} className='app catalog  navOpen chaldal-theme'>
    <Navbar refnav={refnav} />
    
    <ShoppingCartWrapper refnav={refnav}/>
    <EverythingelseWarper insideWarper={insideWarper}/>
    </div>
    </data.Provider>

    </CartProvider>

     </>
  )
}

export default Main