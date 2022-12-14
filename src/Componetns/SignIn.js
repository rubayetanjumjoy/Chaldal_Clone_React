import React from 'react'
import { useState,useContext } from 'react';
import { authProvider } from '../Contexts/Auth';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = ({setIsOpenmodal,setOtpshow,otpshow}) => {
    

    const [logtoggle,setlogtoggle]=useState(false)
     
     // Inputs
     
     const [mynumber, setnumber] = useState('+880');
     const [myotp, setMyotp] = useState('');
     const [phonevalid, setPhonevalid] = useState(true);
     const [wrongotp, setWrongotp] = useState(false);
     const [loading,setLoading]=useState(false);
     //auth
     const {auth,setAuth} =useContext(authProvider);
     const inputref=useRef(null)
     const passref=useRef(null)
     const otpref=useRef(null)
     
     let focus=()=>{
      inputref.current.focus()
     }
     let focuspass=()=>{
      passref.current.focus()
     }
     let focusotp=()=>{
      otpref.current.focus()
     }
   
     let otpverifyhandler=()=>{
        let data={"phone_number":mynumber,"otp":myotp}
        setLoading(true)
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
                setLoading(false)
                if(wrongotp){
                  setWrongotp(false)
                }
                localStorage.setItem('items', JSON.stringify(result));
                const items = JSON.parse(localStorage.getItem('items'));
                if (items) {
                 setAuth(items);
                 localStorage.setItem('auth', JSON.stringify({"auth":"true"}));

                 }
                 toast.success('Login Successfull', {
                  position: "top-center",
                  autoClose: 1500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
                 
                 
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                setWrongotp(true)
                console.log(error);
              }
            )

     }
     
     function validatePhoneNumber(input_str) {
        var re = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        
        let counbtryCode="+880"
        let checkCountryCode = input_str. slice(0, 4)
        return re.test(input_str) && counbtryCode==checkCountryCode;
      }
      
     const signin = () => {
         let data={
            "phone_number":mynumber
         }
       
        
         if (validatePhoneNumber(mynumber)) {
          setPhonevalid(true);
          setLoading(true)
         
            fetch(`${process.env.REACT_APP_BASE_URL}/v0/sendotp/`,{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),})
            .then(res => res.json())
            .then(
              (result) => {
                 setOtpshow(true);
                console.log(result)
                setLoading(false)
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
                <span style={{color:'red'}} >
                Please enter a valid bangladeshi number. e.g. +8801672955886
                </span>
            </div>
            
             }
            </>
            
     {      otpshow && <>
                <div className={wrongotp ? 'inputContainer has-error' :'inputContainer'}>
                    <input name='otp' ref={otpref} class={myotp?'has-value':''} type="text" required="" onChange={(e)=>setMyotp(e.target.value)} style={{color:'black'}}></input>
                    <span onClick={focusotp} className='input-placeholder '>
                    Please enter 4-digit one time pin
                    </span>
                    <span class="input-error" data-reactid=".28e1137ykn4.1.0.0.0.2.0.5.0.2">Please enter correct 4-digit one time pin</span>
                    <span className='input-extra-content'>

                    </span>
                </div>
                <div className='actions'>
                    <button className='btn btn-primary' onClick={otpverifyhandler}>Enter</button>
                   
                    <button className='btn' onClick={signin} >Request PIN again </button>
                    
                </div>
            </>
            }
            
            </div>
            { !otpshow && <button    disabled={loading} className="loginBtn" id="login-button" type="submit" onClick={signin} >SIGN UP / LOGIN</button>}
           
         </>
                
        );

    }

    let emailrender=()=>{
        return(
            <>
            <button  onClick={()=>{setlogtoggle(!logtoggle); setOtpshow(false)}} className="loginBtn emailLoginBtn">Login With <b> Phone Number</b> </button>
             
            
            <div className="inputContainer" >
            <input ref={inputref} name="email" type="email" required=""/>
            <span className="input-placeholder" onClick={focus} >Email Address</span>
      
            <span className="input-error"></span>
            <span className="input-description" 
            ></span>
            <span className="input-extra-content" >

            </span>
       
            </div>
            
            
              <div className="inputContainer" >
                <input ref={passref} className="" name="password" type="password" required=""  /><span className="input-placeholder" onClick={focuspass} >Password</span>
                 <span className="input-error" ></span>
                <span className="input-description" ></span>
                <span className="input-extra-content">
                    </span>
            </div>
            <button disabled={loading}  className="loginBtn" id="login-button" type="submit" onClick={signin} >LOGIN</button>
            

        
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
                  <div  className="buttonText" data-reactid=".1f53q7t4nfi.1.0.0.0.2.0.0.0.0.1">
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