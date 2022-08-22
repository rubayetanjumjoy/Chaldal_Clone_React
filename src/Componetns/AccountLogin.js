import React from 'react'
import { useState,useContext } from 'react';
import { isopen } from '../Contexts/ModalToggle';
const AccountLogin = () => {
  const [otpshow, setOtpshow] = useState(false);

  const [mynumber, setnumber] = useState('+880');
  const [otp, setotp] = useState('');
  const [phonevalid, setPhonevalid] = useState(true);
  const {isopenmodal,setIsOpenmodal} =useContext(isopen);

  function validatePhoneNumber(input_str) {
    var re = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
  
    return re.test(input_str);
  }
 const signin = () => {

     if (validatePhoneNumber(mynumber)) {
        setPhonevalid(true);
        setOtpshow(true);
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

  return (
    <div>
      <div className='phoneNumberLogin outsideDialog authForm'>
      <button   className="loginBtn emailLoginBtn" style={{backgroundColor:'#49639f' }}> <span style={{color:'white'}}>Login With <b> Facebook</b></span> </button>

      <div className='phoneNumberLogin'>
            <form onSubmit={e => e.preventDefault()}>    
            <button onClick={()=>setIsOpenmodal(true)} className="loginBtn emailLoginBtn">Login With <b> Email</b> </button>
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
            </form>
            
     {      otpshow && <form>
                <div className='inputContainer'>
                    <input name='otp' type="text" required="" style={{color:'black'}}></input>
                    <span className='input-placeholder'>
                    Please enter 4-digit one time pin
                    </span>
                    <span className='input-extra-content'>

                    </span>
                </div>
                <div className='actions'>
                    <button className='btn btn-primary'>Enter</button>
                    <button className='btn'>Request PIN again </button>
                </div>
            </form>
            }
            
            </div>
            { !otpshow && <button className="loginBtn" id="login-button" type="submit" onClick={signin} >SIGN UP / LOGIN</button>}

      
      </div>
    </div>
  )
}

export default AccountLogin