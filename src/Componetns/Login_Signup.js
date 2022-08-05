import React from 'react'

const Login_Signup = () => {
  return (
    <div>
        <div className="ModalDialog" >
  <div className="ModalTitle" >Login</div>
  <button className="close" ></button>
  <div className="ModalDialogContent undefined" >
    <div className="phoneNumberLogin authForm" >
      <div >
        <div className="facebookLogin" >
          <button className="facebookLoginButton loginBtn loginButton" >
            <svg width="20px" height="20px" style="fill:white;stroke:white;display:inline-block;vertical-align:middle;" viewBox="0 0 430.113 430.114" data-reactid=".26qu8jo02c.1.0.0.0.2.0.0.0.0.0">
              <path id="Facebook" d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805 c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354 c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z" data-reactid=".26qu8jo02c.1.0.0.0.2.0.0.0.0.0.0"></path>
            </svg>
            <div className="buttonText" >
              <span >Sign Up or Login with <b>Facebook</b>
              </span>
            </div>
          </button>
        </div>
      </div>
      <button className="loginBtn emailLoginBtn" >
        <svg style="display:inline-block;vertical-align:middle;" width="25px" height="25px" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 491.52 491.52" data-reactid=".26qu8jo02c.1.0.0.0.2.0.1.0">
          <rect y="85.914" style="fill:#F6C358;" width="491.52" height="319.693" data-reactid=".26qu8jo02c.1.0.0.0.2.0.1.0.0"></rect>
          <polygon style="fill:#FCD462;" points="245.76,217.258 491.52,405.604 0,405.604 " data-reactid=".26qu8jo02c.1.0.0.0.2.0.1.0.1"></polygon>
          <polygon style="fill:#DC8744;" points="245.76,291.673 0,85.916 491.52,85.916 " data-reactid=".26qu8jo02c.1.0.0.0.2.0.1.0.2"></polygon>
          <polygon style="fill:#FCD462;" points="245.76,274.261 0,85.916 491.52,85.916 " data-reactid=".26qu8jo02c.1.0.0.0.2.0.1.0.3"></polygon>
        </svg>
        <span >Login with <b>Email</b>
        </span>
      </button>
      <div className="orContainer" >
        <span >or</span>
      </div>
      <div className="loginWithPhoneMessage" >PLEASE ENTER YOUR MOBILE PHONE NUMBER</div>
      <form >
        <div className="phoneNumberInputContainer" >
          <div className="phoneNumberLoginField" >
            <div className="input" >
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="flag flag-bd" />
              <input type="tel" value="+88" placeholder="" />
            </div>
          </div>
        </div>
        <div className="errorContainer"  ></div>
        <div className="actions" >
          <button className="loginBtn" type="submit" >SIGN UP / LOGIN</button>
        </div>
      </form>
      <div className="recaptcha"  >
        <h5 className="recaptchaTxt"  >
          <span >This site is protected by reCAPTCHA and the Google </span>
          <a href="https://policies.google.com/privacy" target="_blank" data-reactid=".26qu8jo02c.1.0.0.0.2.0.7.0.1">Privacy Policy</a>
          <span data-reactid=".26qu8jo02c.1.0.0.0.2.0.7.0.2"> and </span>
          <a href="https://policies.google.com/terms" target="_blank" data-reactid=".26qu8jo02c.1.0.0.0.2.0.7.0.3">Terms of Service</a>
          <span data-reactid=".26qu8jo02c.1.0.0.0.2.0.7.0.4"> apply.</span>
        </h5>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login_Signup