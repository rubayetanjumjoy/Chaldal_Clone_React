import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect,useContext } from 'react';
import { isopen } from '../Contexts/ModalToggle';
import { authProvider } from '../Contexts/Auth';

const ModalLogin = ({hideModal,setOtpshow,otpshow}) => {
    const {isopenmodal,setIsOpenmodal} =useContext(isopen);

    const [logtoggle,setlogtoggle]=useState(false)
     
     // Inputs
     
     const [mynumber, setnumber] = useState('+880');
     const [myotp, setMyotp] = useState('');
     const [phonevalid, setPhonevalid] = useState(true);

     //auth
     const {auth,setAuth} =useContext(authProvider);
      
     
   
     let otpverifyhandler=()=>{
        let data={"phone_number":mynumber,"otp":myotp}
        fetch("http://127.0.0.1:8000/v0/verifyotp/",{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),})
            .then(res => res.json())
            .then(
              (result) => {
                setOtpshow(false)
                setIsOpenmodal(false)
                 
                localStorage.setItem('items', JSON.stringify(result));
                const items = JSON.parse(localStorage.getItem('items'));
                if (items) {
                 setAuth(items);
                 }
                 
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                console.log(error);
              }
            )

     }
     
     function validatePhoneNumber(input_str) {
        var re = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
      
        return re.test(input_str);
      }
      
     const signin = () => {
         let data={
            "phone_number":mynumber
         }
         if (validatePhoneNumber(mynumber)) {
            setPhonevalid(true);
            setOtpshow(true);
            fetch("http://127.0.0.1:8000/v0/sendotp/",{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),})
            .then(res => res.json())
            .then(
              (result) => {
                 
                console.log(result)
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                console.log(error);
              }
            )

        /* window.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-button', {
            size: 'invisible',
            callback: () => {
              // callback is not being fired automatically
              // but after the OTP has been sent to user's
              // phone number which makes this callback useless
              // as opposed to Firebase's documentation
            },
          });
         auth.signInWithPhoneNumber(mynumber, window.reCaptchaVerifier).then((result) => {
             setfinal(result);
             alert("code sent")
             setOtpshow(true);
         })
             .catch((err) => {
                 alert(err);
                 window.location.reload()
             });*/
            }
             else{
                 setPhonevalid(false)
             }
     }
   
    let phonerender=()=>{
        return (
            <>
             <div className='phoneNumberLogin'>
            <>    
            <button  onClick={()=>setlogtoggle(!logtoggle)} className="loginBtn emailLoginBtn">Login With <b> Email</b> </button>
            <div className="orContainer">
            <span>or</span>

            </div>
            <div className="loginWithPhoneMessage">
                { !otpshow ?' PLEASE ENTER YOUR PHONE NUMBER ': <span>We've sent a 4-digit one time PIN in your phone <b>{mynumber}</b></span>}
            </div>
             { !otpshow && <div className="phoneNumberInputContainer">
            <div className="phoneNumberLoginField">
                <div className="input">
                <img className='flag flag-bd'src="/img/bangladesh.png" ></img>
                <input type="tel"  value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }} />
                <div>
                    
            </div>

            </div>

            </div>
            
            </div> }
            
            {  !phonevalid && <div className='errorContainer'>
                <span >
                Please enter a valid bangladeshi number. e.g. +8801672955886
                </span>
            </div> }
            </>
            
     {      otpshow && <>
                <div className='inputContainer'>
                    <input name='otp' type="text" required="" onChange={(e)=>setMyotp(e.target.value)} style={{color:'black'}}></input>
                    <span className='input-placeholder'>
                    Please enter 4-digit one time pin
                    </span>
                    <span className='input-extra-content'>

                    </span>
                </div>
                <div className='actions'>
                    <button className='btn btn-primary' onClick={otpverifyhandler}>Enter</button>
                    <button className='btn'>Request PIN again </button>
                </div>
            </>
            }
            
            </div>
            { !otpshow && <button className="loginBtn" id="login-button" type="submit" onClick={signin} >SIGN UP / LOGIN</button>}

         </>
                
        );

    }

    let emailrender=()=>{
        return(
            <>
            <button  onClick={()=>{setlogtoggle(!logtoggle); setOtpshow(false)}} className="loginBtn emailLoginBtn">Login With <b> Phone Number</b> </button>
            <div className="inputContainer" >
            <input className="" name="email" type="email" required="" /> 
            <span className="input-placeholder" >Email Address</span>
            <span className="input-error"></span>
            <span className="input-description" 
            ></span>
            <span className="input-extra-content" >

            </span>
            
            </div>
              <div className="inputContainer" >
                <input className="" name="password" type="password" required=""  /><span className="input-placeholder" >Password</span>
                 <span className="input-error" ></span>
                <span className="input-description" ></span>
                <span className="input-extra-content">
                    </span>
            </div>
            <button className="loginBtn" id="login-button" type="submit" onClick={signin} >LOGIN</button>

        
            </>
        )
    }
  
  
  
    return (
    <div>

        <Modal    show={isopenmodal} onHide={hideModal}  style={{paddingTop:'0px',}}>


        <Modal.Header closeButton>

        <Modal.Title> Login</Modal.Title>

        </Modal.Header>

        <Modal.Body className="authForm">
        <button   className="loginBtn emailLoginBtn" style={{backgroundColor:'#49639f' }}> <span style={{color:'white'}}>Login With <b> Facebook</b></span> </button>
        {logtoggle ? emailrender() : phonerender()}


        </Modal.Body>

        <Modal.Footer>
        


        </Modal.Footer>
        
        </Modal>
    </div>
  )
}

export default ModalLogin