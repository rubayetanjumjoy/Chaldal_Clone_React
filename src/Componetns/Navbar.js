import React from 'react' 
import * as Icon from 'react-bootstrap-icons';
import Sidebar from './Sidebar';
import Modal from 'react-bootstrap/Modal';
import ModalLogin from './ModalLogin'
import {useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom'
import { data } from '../Contexts/DataContext';
import { authProvider } from '../Contexts/Auth';
import { useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';
import GetWindowSize from '../CustomHooks/GetWindowSize';
import SignIn from './SignIn';
import ProfileIcon from './ProfileIcon';
import ProfileResponsive from './ProfileResponsive';
import AccountLogin from './AccountLogin';
const Navbar = ({handleNav,setNavopen}) => {
  const { emptyCart } = useCart();
  const {auth,setAuth} =useContext(authProvider);
  const {searchresult,setSearchesult} =useContext(data);
  const {mysearch,setMysearch} =useContext(data);
  const windowsize=GetWindowSize()
  const [smallSignin,setSmallSignin]=useState(false)
  


  const [isOpen, setIsOpen] = useState(false);
  const [sidetoggle, setSidetoggle] = useState(true);
  const [otpshow, setOtpshow] = useState(false);

  const {isopenmodal,setIsOpenmodal} =useContext(data);
  let navigate = useNavigate();
  const showModal = () => {

    setIsOpenmodal(true);

  };
  const hideModal = () => {
    setOtpshow(false);
    setIsOpenmodal(false)
  };

  const handleLocalStorage=()=>{
    window.localStorage.clear();
    setAuth([]);
    emptyCart();
  }

 
let handlechangeSearch=(e)=>{
  setMysearch(e.target.value)
   
  navigate('/search');
}
let handlesmlogin=()=>
 {
  navigate('/account/login')
 }

  
  return (
    <>
      <div className='headerWrapper'>
       <div className='headerWrapperWrapper'>
       <div>
       <div className='top-header'>
       
       <button onClick={handleNav} className="hamburgerMenu hidden-xs"  ><Icon.List style={{width:"25px",height:"25px",display:'inline-block',verticalAlign:'middle'}}/></button>
       <Link to="/">
        <img className="egg chaldal_logo" src='https://chaldnn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-100/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1'   />
       </Link>
       <div className='searchArea'>
       <div className="searchInput" style={{marginLeft:windowsize.width<700 ? '0px':'30px'}}  > 
        <input onChange={handlechangeSearch} className="searchBox" type="text" autoComplete='off' placeholder="Search for products (e.g. eggs, milk, potato)" required=""  />
         <button> 
         <svg class="search" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" data-reactid=".1rsh2u5c2y6.4.0.0.0.3.0.0.2.0">
          <path d="M44.5,78.5c-18.8,0-34-15.3-34-34s15.3-34,34-34s34,15.3,34,34S63.3,78.5,44.5,78.5z M44.5,18.1  C30,18.1,18.2,30,18.2,44.5S30,70.8,44.5,70.8S70.9,59,70.9,44.5S59,18.1,44.5,18.1z" data-reactid=".1rsh2u5c2y6.4.0.0.0.3.0.0.2.0.0"></path>
          <path d="M87.2,91c-1,0-2-0.4-2.7-1.1L63.1,68.5c-1.5-1.5-1.5-3.9,0-5.4s3.9-1.5,5.4,0l21.3,21.3  c1.5,1.5,1.5,3.9,0,5.4C89.2,90.6,88.2,91,87.2,91z" data-reactid=".1rsh2u5c2y6.4.0.0.0.3.0.0.2.0.1"></path>
         </svg>
         </button>
        </div>
        </div>
         
        <div className='citySelectionLink hidden-xs' style={{marginLeft:"20px"}}>
            <div className='area citySelectionArea'>
            <div className='locationMarkerIcon'>
            <Icon.HouseDoorFill size={20}/>     

            </div>
            <div className='metropolitanAreaName'>
            <span>Dhaka</span>
    
            </div>
            <p> <i className="arrow-down"></i></p>
           
            </div>
        </div>
        <div className="loginArea authButtons area hidden-xs area-with-dropdown "  >
          <button onClick={showModal} className="signInBtn" >{auth['token']?auth['user']['name'] : 'Sign In'}</button>
          { auth['token'] &&
            <ul class="dropDown" >
        <li >
          <Link to="/profile" >Your Profile</Link>
        </li>
        <li >
          <Link to="/myorder" >Your Orders</Link>
          </li>
          
           
          <li >
            <Link to="/changepassword" >Change Password</Link>
          </li>
          <li >
            <Link to="/"   onClick={handleLocalStorage} >Log out</Link>
            </li>
          </ul>
}
       
        </div>

        <div class="dotMenuIcon" onClick={()=>setSmallSignin(true)}  data-reactid=".1zdhas409fm.4.0.0.0.9">
          <ul class="icons btn-left showLeft" data-reactid=".1zdhas409fm.4.0.0.0.9.0">
            <li data-reactid=".1zdhas409fm.4.0.0.0.9.0.0"></li>
            <li data-reactid=".1zdhas409fm.4.0.0.0.9.0.1"></li>
            <li data-reactid=".1zdhas409fm.4.0.0.0.9.0.2"></li>
          </ul>
        </div>
      { smallSignin && <ProfileResponsive setSmallSignin ={setSmallSignin}/> } 
            
      </div>
       </div>
       <Sidebar handleNav={handleNav} setNavopen={setNavopen}/>  
       <div className='openMenuShadowDrop' onClick={(e) => {if (e.target.className === 'openMenuShadowDrop') {handleNav() }}}
       >
    
 </div>
       </div>
    
       </div>
   
       
    </>
  )
}

export default Navbar