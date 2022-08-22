import React from 'react' 
import * as Icon from 'react-bootstrap-icons';
import Sidebar from './Sidebar';
import Modal from 'react-bootstrap/Modal';
import ModalLogin from './ModalLogin'
import {useState,useContext} from 'react';
import { Link } from 'react-router-dom'
import { isopen } from '../Contexts/ModalToggle';
import { authProvider } from '../Contexts/Auth';
const Navbar = ({refnav}) => {

  const {auth,setAuth} =useContext(authProvider);

 
  const [isOpen, setIsOpen] = useState(false);
  const [sidetoggle, setSidetoggle] = useState(true);
  const [otpshow, setOtpshow] = useState(false);
  const {isopenmodal,setIsOpenmodal} =useContext(isopen);
  const showModal = () => {

    setIsOpenmodal(true);

  };
  const hideModal = () => {
    setOtpshow(false);
    setIsOpenmodal(false)
  };

  

  const sidehandler = () => {
    if(sidetoggle==false){
      refnav.current.className='app catalog  navOpen chaldal-theme';
    }
    if(sidetoggle==true){
      refnav.current.className='app catalog  chaldal-theme';
    }
    setSidetoggle(!sidetoggle);

  };
  
  
  return (
    <>
      <div className='headerWrapper'>
       <div className='headerWrapperWrapper'>
       
       <div className='top-header'>
       <button onClick={sidehandler} className="hamburgerMenu hidden-xs"  ><Icon.List style={{width:"25px",height:"25px",display:'inline-block',verticalAlign:'middle'}}/></button>
       <Link to="/"><img className="egg chaldal_logo" src='https://chaldnn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-78/Default/components/header/Header/images/logo-small.png?q=low&amp;webp=1&amp;alpha=1&quot'   />
       </Link>
       <div className='searchArea'>
       <div className="searchInput" style={{marginLeft:'30px'}}  > 
        <input  className="searchBox" type="text" autoComplete='off' placeholder="Search for products (e.g. eggs, milk, potato)" required=""  />
         <button> 
          <Icon.Search />
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
        <div className="loginArea authButtons area hidden-xs"  ><button onClick={showModal} className="signInBtn" >{auth['token']?auth['token'] : 'Sign In'}</button></div>
        <ModalLogin hideModal={hideModal}   otpshow={otpshow} setOtpshow={setOtpshow} />
        
         
       </div>
       <Sidebar/>  
       </div>
      
       </div>
   
       
    </>
  )
}

export default Navbar