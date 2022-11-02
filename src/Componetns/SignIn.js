import React from 'react'
import { useState,useContext } from 'react';
import { authProvider } from '../Contexts/Auth';
const SignIn = ({setIsOpenmodal,setOtpshow,otpshow}) => {
    

    const [logtoggle,setlogtoggle]=useState(false)
     
     // Inputs
     
     const [mynumber, setnumber] = useState('+880');
     const [myotp, setMyotp] = useState('');
     const [phonevalid, setPhonevalid] = useState(true);

     //auth
     const {auth,setAuth} =useContext(authProvider);
      
     
   
     let otpverifyhandler=()=>{
        let data={"phone_number":mynumber,"otp":myotp}
        fetch(`${process.env.REACT_APP_BASE_URL}/v0/verifyotp/`,{
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
                 localStorage.setItem('auth', JSON.stringify({"auth":"true"}));

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
            fetch(`${process.env.REACT_APP_BASE_URL}/v0/sendotp/`,{
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
    <>
    <div className="authDialogs" data-reactid=".1f53q7t4nfi.1.0">
    <div className="ModalDialogContainer" data-reactid=".1f53q7t4nfi.1.0.0">
      <div className="ModalDialog" data-reactid=".1f53q7t4nfi.1.0.0.0">
        <div className="ModalTitle" data-reactid=".1f53q7t4nfi.1.0.0.0.0">Login</div>
        <button className="close" onClick={()=>setIsOpenmodal(false)} data-reactid=".1f53q7t4nfi.1.0.0.0.1" />
        <div className="ModalDialogContent undefined" data-reactid=".1f53q7t4nfi.1.0.0.0.2">
          <div className="phoneNumberLogin authForm" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0">
            <div data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0">
              <div className="facebookLogin" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0">
                <button className="facebookLoginButton loginBtn loginButton" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0.0">
                  <svg width="20px" height="20px" style={{fill: 'white', stroke: 'white', display: 'inline-block', verticalAlign: 'middle'}} viewBox="0 0 430.113 430.114" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0.0.0">
                    <path id="Facebook" d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805 c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354 c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0.0.0.0" />
                  </svg>
                  <div className="buttonText" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0.0.1">
                    <span data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0.0.1.0">Sign Up or Login with <b>Facebook</b>
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {logtoggle ? emailrender() : phonerender()}
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default SignIn