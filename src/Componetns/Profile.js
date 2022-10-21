import React from 'react'
import ModalAddress from './ModalAddress'
import { useState,useContext,useEffect } from 'react'
import { authProvider } from '../Contexts/Auth'
import { data } from '../Contexts/DataContext';
import AddressUnit from './AddressUnit';

const Profile = () => {
  const {auth,setAuth} =useContext(authProvider);
  const [submitToggle,setSubmitToggle]=useState(false)
  const [myname,setMyname]=useState('')
  const [mynametoggle,setMynametoggle]=useState(false)
  const [myemail,setMyemail]=useState('')
  const [myemailToggle,setMynameToggle]=useState(false)
  const [mygender,setMygender]=useState('')
  const [mygenderedit,setMygenderedit]=useState(false)
  const [mybirthdate,setMybirthdate]=useState('')
  const [mybirthdateeidt,setMybirthdateeidt]=useState(false)

  const [isOpen, setIsOpen] = useState(false);
  const {address} =useContext(data);
  //toggle selected item
  const [selected,setSelected]=useState('')
   
 
  

  console.log(auth)



 console.log(myname)
  
 console.log(isOpen)
 
  let handlenamechange=(e)=>{
    setSubmitToggle(true)
    setMynametoggle(true)

    setMyname(e.target.value)

    
  }
  let handleemailchange=(e)=>{
    setSubmitToggle(true)
    setMyemail(e.target.value)
    setMynameToggle(true)
  }
  let handlegenderchange=(e)=>{
    setSubmitToggle(true)
    setMygender(e.target.value)
    setMygenderedit(true)
   
  }
  let handlebirthchange=(e)=>{
    setSubmitToggle(true)
    setMybirthdate(e.target.value)
    setMybirthdateeidt(true)
     
  }
 
  
 useEffect(() => {
    console.log(`nested${auth}`)
 }, [])
  let handlesubmit=()=>{ 
  
      let data={"name":myname,"email":myemail,"date_of_birth":mybirthdate,"gender":mygender,"date_of_birth":mybirthdate,"token":auth['token']}
       fetch(`${process.env.REACT_APP_BASE_URL}/v0/updateuser/`,{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),})
        .then(res => res.json())
        .then(
          (response) => {
            console.log(response)
            setAuth(prev=>({...prev,user:response}))
             
          },
            
          (error) => {
            console.log(error);
          }
        )

 
     
  }


  
  return (
    <>{
      auth['token'] &&
      <div >
      <div className="outer-profile-container" >
      <div className="profile" >
      <h2 className="profile-title">Your Profile</h2>
      <div className="profile-info" >
         
       
      <div className="inputContainer">
      <input className="has-value" name="name" type="text" required="" maxlength="70" onChange={handlenamechange} value={!mynametoggle ? auth['user']['name'] : myname } style={{color:'black'}} />
      <span className="input-placeholder">Name</span>
      <span className="input-error" ></span>
      <span className="input-description" ></span>
      <span className="input-extra-content" ></span></div>
      <div className="inputContainer " >
      <input className="has-value paddingForExtraContent" name="email" type="email" required="" onChange={handleemailchange} value={!myemailToggle? auth['user']['email'] : myemail} style={{color:'black'}} />
      <span className="input-placeholder" >Email Address</span>
      <span className="input-error" ></span>
      <span className="input-description" ></span>
      <span className="input-extra-content" >
      <div className="extraContentForEmail">
      {/*<span className="verified" >
     <span>Verified</span></span>*/}</div></span></div>
     <div className="inputContainer disable" >
     <input className="has-value" name="number" type="text" disabled="" value={auth['user']['phone_number']} style={{color:'black'}}/>
     <span className="input-placeholder">Phone Number</span>
     <span className="input-error" ></span>
     <span className="input-description" ></span>
     <span className="input-extra-content" ></span></div>
     <div className="inputContainer" >
     <label className="labelClass">Gender</label>
     <select className="selectClass"  value={!mygender? auth['user']['gender']: mygender} onChange={handlegenderchange}>
     <option value="Choose">--Select Gender--</option>
     
     <option value="1" >Male</option>
     <option value="2">Female</option>
     <option value="3">Others</option></select></div>
     <div className="inputContainer">
     <input className="" name="date" type="text"  value={mybirthdateeidt ? mybirthdate : auth['user']['date_of_birth']} onChange={handlebirthchange} style={{color:'black'}} />
       <span className="input-placeholder">Date of Birth (YYYY-MM-DD)</span>
     <span className="input-error" ></span>
     <span className="input-description" ></span><span className="input-extra-content"></span></div>
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
    
    
     
     
          
           <AddressUnit     />
       
        
      
       
      
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>
                 { submitToggle && <div className="submitButtonSection" >
                    <button type="button" class="btn btn-primary Btn" onClick={handlesubmit} >Submit</button>
                  </div>}
                  </div>
                  </div>
      }
    </>
  )
}

export default Profile