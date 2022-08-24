import React from 'react'
import { useState,useContext } from 'react'
import { authProvider } from '../Contexts/Auth'
const Profile = () => {
  const {auth,setAuth} =useContext(authProvider);

  return (
    <>
      <div >
      <div className="outer-profile-container" >
      <div className="profile" >
      <h2 className="profile-title">Your Profile</h2>
      <div className="profile-info" >
      <form >
      <div className="inputContainer">
      <input className="has-value" name="name" type="text" required="" maxlength="70" value={auth['name']} style={{color:'black'}} />
      <span className="input-placeholder">Name</span>
      <span className="input-error" ></span>
      <span className="input-description" ></span>
      <span className="input-extra-content" ></span></div>
      <div className="inputContainer disable" >
      <input className="has-value paddingForExtraContent" name="email" type="email" disabled="" value={auth['email']} style={{color:'black'}} />
      <span className="input-placeholder" >Email Address</span>
      <span className="input-error" ></span>
      <span className="input-description" ></span>
      <span className="input-extra-content" >
      <div className="extraContentForEmail">
      {/*<span className="verified" >
     <span>Verified</span></span>*/}</div></span></div>
     <div className="inputContainer disable" >
     <input className="has-value" name="number" type="text" disabled="" value={auth['phone_number']} style={{color:'black'}}/>
     <span className="input-placeholder">Phone Number</span>
     <span className="input-error" ></span>
     <span className="input-description" ></span>
     <span className="input-extra-content" ></span></div>
     <div className="inputContainer" >
     <label className="labelClass">Gender</label>
     <select className="selectClass" >
     <option value="Choose">--Select Gender--</option>
     <option value="Male">Male</option>
     <option value="Female">Female</option>
     <option value="Others">Others</option></select></div>
     <div className="inputContainer">
     <input className="" name="date" type="text" value="" style={{color:'black'}} />
     <span className="input-placeholder">Date of Birth (YYYY-MM-DD)</span>
     <span className="input-error" ></span>
     <span className="input-description" ></span><span className="input-extra-content"></span></div></form>
     <div className="address-block checkoutExperience2" >
     <div className="deliveryStep activeStep" >
     <div className="deliveryStepTitle" >
     <div className="titleLeft" >
     <div className="stepIcon" >
     </div> 
     <h2 data-reactid=".d6snlzz9k2.9.2.0.0.1.1.1.0.0.0.1">Select a Delivery Address</h2></div></div>
     <div className="deliveryStepContent" >
     <div className="addressComponent mui" >
     <div className="" >
     <section className="" >
     <div className="newAddressAddBtn buttonOnTop" >
     <section >
     <span >New Address</span></section></div>
     { /*<section className="addresses" >
      <div className="address selectedAddress" >
        <span className="selectedAddressTickIcon" >
          </span>
          <span >
            <p >banasree</p>
            <span className="addressArea" >Rampura, Dhaka</span></span>
            <a className="delete" >delete</a></div>
            <div className="address" data-address="3122659" >
              <span className="selectedAddressTickIcon" >
                </span>
                <span >
                  <p >454</p>
                  <span className="addressArea" >Banasree, Dhaka</span></span>
                  <a className="delete" >delete</a></div>
  </section> */}
       </section>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>
                  <div className="submitButtonSection" ></div>
                  </div>
                  </div>
      
    </>
  )
}

export default Profile