import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
const ModalLogin = ({isOpen,hideModal}) => {
  
    const [logtoggle,setlogtoggle]=useState(false)
     
 
    let phonerender=()=>{
        return (
             <>
            <button  onClick={()=>setlogtoggle(!logtoggle)} className="loginBtn emailLoginBtn">Login With <b> Email</b> </button>
            <div className="orContainer">
            <span>or</span>

            </div>
            <div className="loginWithPhoneMessage">
                PLEASE ENTER YOUR PHONE NUMBER
            </div>
            <div className="phoneNumberInputContainer">
            <div className="phoneNumberLoginField">
                <div className="input">
                <img className='flag flag-bd'src="/img/bangladesh.png" ></img>
                <input type="tel" placeholder="+880" />
            </div>

            </div>
            </div>
         </>
                
        );

    }

    let emailrender=()=>{
        return(
            <>
            <button  onClick={()=>setlogtoggle(!logtoggle)} className="loginBtn emailLoginBtn">Login With <b> Phone Number</b> </button>
            <div class="inputContainer" >
            <input class="" name="email" type="email" required="" value=""  /><span class="input-placeholder" >Email Address</span><span class="input-error"></span><span class="input-description" ></span><span class="input-extra-content" ></span>
            
            </div>
              <div class="inputContainer" >
                <input class="" name="password" type="password" required="" value=""  /><span class="input-placeholder" >Password</span>
                 <span class="input-error" ></span>
                <span class="input-description" ></span>
                <span class="input-extra-content">
                    </span>
            </div>
        
            </>
        )
    }
  
  
  
    return (
    <div>
        <Modal  show={isOpen} onHide={hideModal} style={{marginLeft:'500px'}}>

        <Modal.Header closeButton>
        <Modal.Title> Login</Modal.Title>

        </Modal.Header>

        <Modal.Body className="authForm">
        <button   className="loginBtn emailLoginBtn" style={{backgroundColor:'#49639f' }}> <span style={{color:'white'}}>Login With <b> Facebook</b></span> </button>
        {logtoggle ? emailrender() : phonerender()}
         
        <button class="loginBtn" type="submit" >SIGN UP / LOGIN</button>
        </Modal.Body>

        <Modal.Footer>



        </Modal.Footer>

        </Modal>
    </div>
  )
}

export default ModalLogin