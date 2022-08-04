import React from 'react' 
import * as Icon from 'react-bootstrap-icons';
import Sidebar from './Sidebar';
import Modal from 'react-bootstrap/Modal';
import ModalLogin from './ModalLogin'
import {useState} from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {

    setIsOpen(true);

  };


  const hideModal = () => {

    setIsOpen(false);

  };
  console.log(isOpen);
  return (
    <div>
      <div className='headerWrapper'>
       <div className='headerWrapperWrapper'>
       <div className='top-header'>
         
       <button className="hamburgerMenu hidden-xs"  ><Icon.List style={{width:"25px",height:"25px",display:'inline-block',verticalAlign:'middle'}}/></button>
       <Link to="/"><img class="egg chaldal_logo" src='https://chaldnn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-78/Default/components/header/Header/images/logo-small.png?q=low&amp;webp=1&amp;alpha=1&quot'   />
       </Link>
       <div className='searchArea'>
       <div class="searchInput" style={{marginLeft:'30px'}}  > 
        <input  class="searchBox" type="text" autocomplete="off" placeholder="Search for products (e.g. eggs, milk, potato)" required=""  />
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
            <p> <i class="arrow-down"></i></p>
           
            </div>
        </div>
        <div class="loginArea authButtons area hidden-xs"  ><button onClick={showModal} class="signInBtn" >Sign in</button></div>
        <ModalLogin isOpen={isOpen} hideModal={hideModal} />
        
         
       </div> 
       </div>
      
       </div>
   
       
    </div>
  )
}

export default Navbar