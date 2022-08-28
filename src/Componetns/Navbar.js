import React from 'react' 
import * as Icon from 'react-bootstrap-icons';
import Sidebar from './Sidebar';
import Modal from 'react-bootstrap/Modal';
import ModalLogin from './ModalLogin'
import {useState,useContext} from 'react';
import { Link } from 'react-router-dom'
import { isopen } from '../Contexts/ModalToggle';
import { authProvider } from '../Contexts/Auth';
import { useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';

const Navbar = ({refnav}) => {
  const { emptyCart } = useCart();
  const {auth,setAuth} =useContext(authProvider);
  const {searchresult,setSearchesult} =useContext(isopen);

  

  const [isOpen, setIsOpen] = useState(false);
  const [sidetoggle, setSidetoggle] = useState(true);
  const [otpshow, setOtpshow] = useState(false);

  const {isopenmodal,setIsOpenmodal} =useContext(isopen);
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

  const sidehandler = () => {
    if(sidetoggle==false){
      refnav.current.className='app catalog  navOpen chaldal-theme';
    }
    if(sidetoggle==true){
      refnav.current.className='app catalog  chaldal-theme';
    }
    setSidetoggle(!sidetoggle);

  };
let handlechangeSearch=(e)=>{
  fetch(`http://192.168.100.199:8002/v0/search/?q=${e.target.value}`)
  .then((response) => response.json())
  .then((data) =>  setSearchesult(data)
  );
  navigate('/search');
}
  
  return (
    <>
      <div className='headerWrapper'>
       <div className='headerWrapperWrapper'>
       
       <div className='top-header'>
       <button onClick={sidehandler} className="hamburgerMenu hidden-xs"  ><Icon.List style={{width:"25px",height:"25px",display:'inline-block',verticalAlign:'middle'}}/></button>
       <Link to="/"><img className="egg chaldal_logo" src='https://chaldnn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-100/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1'   />
       </Link>
       <div className='searchArea'>
       <div className="searchInput" style={{marginLeft:'30px'}}  > 
        <input onChange={handlechangeSearch} className="searchBox" type="text" autoComplete='off' placeholder="Search for products (e.g. eggs, milk, potato)" required=""  />
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
        <div className="loginArea authButtons area hidden-xs area-with-dropdown "  >
          <button onClick={showModal} className="signInBtn" >{auth['token']?auth['name'] : 'Sign In'}</button>
          { auth['token'] &&
            <ul class="dropDown" >
        <li >
          <Link to="/profile" >Your Profile</Link>
        </li>
        <li >
          <Link to="/order" >Your Orders</Link>
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
       { !auth['token'] && <ModalLogin hideModal={hideModal}   otpshow={otpshow} setOtpshow={setOtpshow} />}
        
       </div>
       <Sidebar/>  
       </div>
      
       </div>
   
       
    </>
  )
}

export default Navbar