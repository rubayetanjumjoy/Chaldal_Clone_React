import React, { useRef, useState ,useContext,useEffect,useLayoutEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ShoppingCartWrapper from './ShoppingCartWrapper'
import EverythingelseWarper from './EverythingelseWarper'
import { data } from '../Contexts/DataContext'
import { CartProvider, useCart } from "react-use-cart";
import { authProvider } from '../Contexts/Auth';
import { useLocation } from 'react-router'
import ProfileIcon from './ProfileIcon'
import GetWindowSize from '../CustomHooks/GetWindowSize'
import { Link } from 'react-router-dom'
import OutsideClickHandler from 'react-outside-click-handler';
import SignIn from './SignIn'
const Main = ({insideWarper}) => {
  const {
    isEmpty,
    totalUniqueItems
    
  } = useCart();
   //getting path url
  const { pathname } = useLocation();
  const [showorderbtn,setShoworderbtn]=useState('')
  console.log(totalUniqueItems)
  const refnav=useRef(null);
  const {auth,setAuth} =useContext(authProvider);

  const [isopenmodal,setIsOpenmodal]=useState(false);
  const [searchresult,setSearchesult]=useState([]);
  const [mysearch,setMysearch]=useState([]);
  const [address,setMyaddress]=useState([]);
  const [orderPlaced,setOrderPlaced]=useState(false)
  const [navopen,setNavopen]=useState(true)
  const [cartopen,setCartopen]=useState(false)
  const [otpshow, setOtpshow] = useState(false);
 
  const handleNav=()=>{
    setNavopen(()=>!navopen)
   }
  const handleCart=(state)=>{
    setCartopen(state)
  }

  const windowsize=GetWindowSize()
  
  
  useEffect(() => {
    if (typeof window !== 'undefined'){
      const items = JSON.parse(localStorage.getItem('address'));
      if (items) {
        
       setMyaddress(JSON.parse(localStorage.getItem('address')));
       
  
       }
      }
  
  }, [])
  useLayoutEffect(() => {
    if(pathname=='/placeanorder'){
    const items = JSON.parse(localStorage.getItem('orderPlaced'));
    if (items) {
      setOrderPlaced(JSON.parse(localStorage.getItem('orderPlaced')));
       
     }
    }
    if(pathname!='/placeanorder'){
      setOrderPlaced(false)
    }
  }, [])
   useEffect(() => {
    localStorage.setItem('orderPlaced', JSON.stringify(orderPlaced));
    
   }, [orderPlaced])
   useLayoutEffect(() => {
    
    if (windowsize.width<700){
       
        setNavopen(()=>false)
     
      
    }
    else if (windowsize.width>700){
       
        setNavopen(()=>true)
    }
    
  }, [windowsize])
  useEffect(() => {
     if(pathname=='/order' || pathname=='/placeanorder' ){
      setShoworderbtn(()=>false)
     }
     else{
      setShoworderbtn(()=>true)
     }
      }, [pathname])
  
  
  return (
    <>
      <CartProvider>
        
    <data.Provider value={{isopenmodal,setIsOpenmodal,searchresult,setSearchesult,mysearch,setMysearch,address,setMyaddress,orderPlaced,setOrderPlaced}}>
    
 
    
    <div  className={`app catalog  ${ navopen ? windowsize.width <700 ? 'navOpen fullscreen-menu':'navOpen' :''} chaldal-theme ${ cartopen ? windowsize.width <700 ? 'shoppingCartIsExpanded sc-fullscreen' :'shoppingCartIsExpanded':''}   `}>
    <div className='mui'>
    { !auth['token'] && isopenmodal && <SignIn isopenmodal={isopenmodal} setIsOpenmodal={setIsOpenmodal} otpshow={otpshow} setOtpshow={setOtpshow}/> }
     
    </div>
    { pathname !='/placeanorder' && <> <ProfileIcon/>
     <ShoppingCartWrapper  handleCart={handleCart} cartopen={cartopen} otpshow={otpshow} setOtpshow={setOtpshow}/>
     </>}
      <Navbar handleNav={handleNav} setNavopen={setNavopen}   />
   {  showorderbtn && <Link to ={isEmpty ? '/':'/order'}><div class="primary_shopping_bottom_btn shopping_bottom_btn"  data-reactid=".rgoiat4a6g.8"><button class="place_order_btn" data-reactid=".rgoiat4a6g.8.0">{!isEmpty ? 'Place Order':'Start Shopping'}</button></div></Link>}
     <EverythingelseWarper    insideWarper={insideWarper}/>
     
    </div>
   
    </data.Provider>

    </CartProvider>

     </>
  )
}

export default Main