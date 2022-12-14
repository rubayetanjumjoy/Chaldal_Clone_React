import React from 'react'
import { useState,useEffect,useContext } from 'react';
import { authProvider } from '../Contexts/Auth';
import { data } from '../Contexts/DataContext';
import GetWindowSize from '../CustomHooks/GetWindowSize';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const ModalAddress = ({hideModal,isOpen,setIsOpen,setSelected}) => {
   
   const [mystreetaddress, setMystreetaddress] = useState('');
   const [myfloorno, setMyfloorno] = useState('');
   const [myaptno, setMyaptno] = useState('');
   const [error, setError] = useState(false);
   const {auth,setAuth} =useContext(authProvider);
   const windowsize=GetWindowSize()
   function containsOnlyNumbers(str) {
      return /^\d+$/.test(str);
    }
   let validateStreetaddr=()=>{
      if(mystreetaddress.length<=0){
        
         toast.error('Delivery Address Could Not be Empty', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return false
           
      }
      else{
         return true
      }
      
   } 
   let validateFloor=()=>{
      if(myfloorno.length<=0){
        
         toast.error('Floor Number can not be Empty!!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return false
           
      }
      else{
         return true
      }
      
   } 
   
   
   let handlesubmit=()=>{
       
      
      if(validateStreetaddr() && validateFloor()){
      let data={"street_address":mystreetaddress,"floor_no":myfloorno,"apartment_no":myaptno,"token":auth['token']}
        fetch(`${process.env.REACT_APP_BASE_URL}/v0/updateaddress/`,{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),})
            .then(res => res.json())
            .then(
              (result) => {
               setAuth(result)
               setIsOpen(false)
               setSelected(result['address'][result['address'].length-1])
               setMyaptno('')
               setMyfloorno('')
               setMystreetaddress('')
               toast.success('New Address Added', {
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
                console.log(error);
              }
            )
         }
          

   }

    
  return (
    <div>



<Modal  className= { windowsize.width < 700 && 'sm'}  show={isOpen} onHide={hideModal}  style={{paddingTop:'0px',}} >
<Modal.Header closeButton>

<Modal.Title> New Address</Modal.Title>

</Modal.Header>   
<Modal.Body >    
<div class="ModalDialogContent undefined"  style={{padding:'25px',}}>
         <div class="addressInputComponent" >
            <div class="show" >
               < >
                  <div class="inputContainer alternateStyle " >
                     <div class="input-label" ><span >Delivery Address<span class="required"> *</span></span></div>
                     <textarea onChange={(e)=>setMystreetaddress(e.target.value)} req class="" name="address" type="text" maxlength="400" rows="3" ></textarea>
                      
                     <span class="input-description" >e.g House No 73, Road 14, Block F, Bashundhara R/A, Dhaka - 1216</span>
                     <span class="input-extra-content" ></span>
                  </div>
                   
                  <div class="apartmentFields" >
                     <div class="inputContainer alternateStyle has-error  "  >
                        <div class="input-label" ><span >Floor No</span></div>
                        <input onChange={(e)=>setMyfloorno(e.target.value)} class="" name="floorNo" type="number" maxlength="10"   style={{color:'black'}} required /><span class="input-error" ></span><span class="input-description" >e.g "1", "2"</span><span class="input-extra-content" ></span>
                          
                     </div>
                     <div class="inputContainer alternateStyle" >
                        <div class="input-label" ><span >Apartment No</span></div>
                        <input onChange={(e)=>setMyaptno(e.target.value)} class="" name="flatNo" type="text" maxlength="10"   style={{color:'black'}} /><span class="input-error" ></span>
                        <span class="input-description" >e.g "A","B"</span>
                        <span class="input-extra-content"></span>
                     </div>
                  </div>
                  <div class="inputContainer alternateStyle" >
                     <div class="input-label" ><span >Name<span class="required"> *</span></span></div>
                     <input class="has-value" name="name" type="text" required="" maxlength="70" value="Joy" style={{color:'black'}} /><span class="input-error" ></span><span class="input-description" data-reactid=".2bxsvti1zxs.a.2.0.0.1.1.1.0.1.0.0.0.0.2.0.0.0.3.3">e.g Emraan Mahmood</span><span class="input-extra-content" ></span>
                  </div>
                  <div class="alternateInputStyle" >
                     <div class="input-label" ><span >Phone Number<span class="required"> *</span></span></div>
                     <div class="input" ><span class="dial-code" >+88</span><input type="tel" value="01521332753" placeholder="e.g. 01672955886" /></div>
                  </div>
                  <div class="error" ></div>
                {/*<div class="staticMapContainer" >
                     <div class="pin-on-map-button">
                          
                        <span >Pin on Map</span>
                
                     </div>
                  
                     <div class="minimaptouchBlocker blur" ></div>
                  </div>
                   */}  
                  <div class="actions" >
                     <button class="btn btn-primary" onClick={handlesubmit} type="submit" >Save Address</button></div>
                     <ToastContainer />
               </>
               <div class="error dropdownError"></div>
            </div>
         </div>
      </div>
      </Modal.Body>
        
        </Modal> 
           
    </div>
  )
}

export default ModalAddress