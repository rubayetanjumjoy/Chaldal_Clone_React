import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from "react-use-cart";
import { useContext ,useLayoutEffect} from 'react';
import AddressUnit from './AddressUnit';
import { authProvider } from '../Contexts/Auth';
import { data } from '../Contexts/DataContext'; 
import { useState } from 'react';
import { useEffect ,useRef} from 'react';

import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const {auth,setAuth} =useContext(authProvider);
  const [changeButton,setChangeButton]=useState(false)
  const [address,setAddress]=useState('')
  const [dateselect,setDateselect]=useState('')
  //datetime
  const [dateToggle,setdateToggle]=useState(false)
  const [slottoggle,setSlotToggle]=useState(false)
  const [dateNumber,setDateNumber]=useState(0)
  const [timeslot,setTimeslot]=useState([
    "8:00 AM - 9:00 AM","10:00 AM - 11:00 AM","11:00 AM - 12:00 PM","12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM","4:00 PM - 5:00 PM"
  ])
  const [timeslot2,setTimeslot2]=useState([
      "5:00 PM - 6:00 PM","6:00 PM - 7:00 PM","7:00 PM - 8:00 PM","8:00 PM - 9:00 PM","9:00 PM - 10:00 PM"
  ])
  const [displaySlot,setdisplaySlot]=useState("8:00 AM - 9:00 AM")
  const [selectAddress,setSelectAddress]=useState(false)
  
 
  const {orderPlaced,setOrderPlaced} =useContext(data);
  let navigate = useNavigate();
  useEffect(() => {
   
    console.log(selectAddress)
    
  }, [])
  
  const handleSubmitOrder=()=>{
    const data={"cart":items,"address": JSON.parse(localStorage.getItem('selected')),"timeslot":displaySlot,"delivery_date":moment(new Date()).add(dateselect, "days").format("dddd MMMM")}
      
        
     fetch(`${process.env.REACT_APP_BASE_URL}/v0/order/`,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'token': auth['token']
      },
      body: JSON.stringify(data),})
      .then(res => res.json())
      .then(
        (response) => {
          console.log(response)
          setOrderPlaced(response)
          items.map((item)=>{
            removeItem(item.id)
          })
          navigate('/placeanorder')
           
        },
          
        (error) => {
          console.log(error);
        }
      ) 
  }


  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    clearCartMetadata 
  } = useCart();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('selected'));
    if (items) {
      setAddress(items);
    }
    if (!items) {
      setChangeButton(true)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(address));

   }, [address])
   
  const handleclick=(obj)=>{
    setChangeButton(!changeButton)
    setAddress(obj)
    
  }
   

  
  
  const handleDate=(number)=>{
    setDateselect(number)
    setdateToggle(false)
    setDateNumber(number)
     
  }
  const hadnleTimeslot=(slot)=>{
    
    setdisplaySlot(slot)
    setSlotToggle(false)
  }
  
   
  
   return (
    <>
    <div data-reactid=".d6snlzz9k2.9.2.0">
     
  <div className="checkoutExperience2" data-reactid=".d6snlzz9k2.9.2.0.0">
    <div data-reactid=".d6snlzz9k2.9.2.0.0.0">
      <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0">
        <div className="checkoutDelivery" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0">
          <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1">
            <div className="deliveryStep" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0">
              <div className="deliveryStepTitle" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0">
                <div className="titleLeft" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0.0">
                  <div className="stepIcon" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0.0.0">
                    
                  </div>
                  <h2 data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0.0.1">Delivery Address</h2>
                </div>
              </div>
              <div className="" >
             {//delevery address  
              !changeButton  && <div className="deliveryStepContent" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1">
  <div className="addressComponent mui" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0">
    <div className="theSelectedAddress" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0">
      <div className="wholeAddress" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0">
        <span className="wrap" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0">
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.0">{address['apartment_no']}</span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.1"></span>
          <br data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.2"/>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.3"></span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.4">{address['street_address']}</span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.5"></span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.6"></span>
        </span>
      </div>
      <div className="stepAction" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.1">
        <button onClick={()=>setChangeButton(true)}>Change</button>
      </div>
    </div>
  </div>
</div>}
      {/*firstValue.format("dddd Do MMMM YYYY")*/}
      
  { changeButton && <div className="deliveryStepContent" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1">
    <div className="addressComponent mui" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0">
      { auth['token'] && <AddressUnit handleclick={handleclick}/>}
    </div>
  </div> }
</div>
              
            </div>
            <div className="deliveryStep activeStep deliverySlot" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0">
  <div className="deliveryStepTitle" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.0">
    <div className="titleLeft" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.0.0">
      <div className="stepIcon" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.0.0.0">
         
      </div>
      <h2 data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.0.0.1">Preferred Delivery Time</h2>
    </div>
  </div>
  <div className="deliveryStepContent" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1">
    <div className="deliveryComponent isBothDropDown" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0">
      <div data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0">
        <div className="timings" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1">
          <div className="onlyExpressItems" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1">
            <div className="deliveryTimeWrapper" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0">
              <div className="deliveryTime" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0">
                <div className="iconAndDescription" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0">
                  <p data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0.0">
                    
                    <span data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0.0.1"></span>
                    <span data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0.0.2">Date would you like your <b>Express Delivery</b>? </span>
                  </p>
                </div>
                <div className="clearAll" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.1"></div>
                <div className="dropdownContainer" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2">
                  <section className={dateToggle? "selectOptions daySelect open" : "selectOptions daySelect "} onClick={()=>setdateToggle(!dateToggle)} data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0">
                    <div className="firstBlock" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.0">
                      <p className="dayName" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.0.0">{moment(new Date()).add(dateNumber, "days").format("dddd")}</p>
                      <p className="dateName" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.0.1">{moment(new Date()).add(dateNumber, "days").format("D MMM")}</p>
                    </div>
                    <div className="tooltipSuggestion"   data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.1"  >
                      <i className="caret-down" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.1.0"></i>
                    </div>
                  </section>
                  <section className="mobileDaySelect mobileDropDown" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1">
                    <select data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0">
                      <option value="" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$">- Select Day -</option>
                      <option value="1666288800" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$21 Oct">{moment(new Date()).add(1, "days").format("dddd")}- {moment(new Date()).add(0, "days").format("D MMM")}</option>
                      <option value="1666375200" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$22 Oct">{moment(new Date()).add(2, "days").format("dddd")}- {moment(new Date()).add(0, "days").format("D MMM")}</option>
                      <option value="1666461600" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$23 Oct">{moment(new Date()).add(3, "days").format("dddd")}- {moment(new Date()).add(0, "days").format("D MMM")}</option>
                      <option value="1666548000" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$24 Oct">{moment(new Date()).add(4, "days").format("dddd")}- {moment(new Date()).add(0, "days").format("D MMM")}</option>
                      <option value="1666634400" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$25 Oct">{moment(new Date()).add(5, "days").format("dddd")}- {moment(new Date()).add(0, "days").format("D MMM")}</option>
                    </select>
                  </section>
                  <section className="selectOptions timeSelect" onClick={()=>setSlotToggle(!slottoggle) } data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2">
                    <div className="firstBlock" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.0">
                      <p className="dayName" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.0.0"></p>
                      <p className="dateName" style={{marginTop:'17px'}} data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.0.1">{displaySlot}</p>
                    </div>
                    <div className="tooltipSuggestion" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.1">
                      <i className="caret-down" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.1.0"></i>
                    </div>
                  </section>
                  <section className="mobileTimeSelect mobileDropDown" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3">
                    <select data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0">
                      <option value="" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$">- Select Time -</option>
                     
                      { timeslot.map((slot)=>(
        
          <option value={slot} data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022102122302300">{slot}</option>

      )) }

                     
                    </select>
                  </section>
                 { slottoggle  && <div class="times dropdown timesSplit" data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4">
  <div class="timesForTheDaySplit" data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0">
    <div class="firstBlockForSlots" data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.0">
      { timeslot.map((slot)=>(
        
        <div key={slot} onClick={()=>hadnleTimeslot(slot)} class={displaySlot ===slot ? 'singleTime selected' : 'singleTime'} data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.0.$a2022102208000900">
        <p data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.0.$a2022102208000900.0">
        
          <span data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.0.$a2022102208000900.0.0">{slot}</span>
          <span class="costOrAvailability" data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.0.$a2022102208000900.0.1"></span>
        </p>
      </div>
      )) }
      
    </div>
    <div class="secondBlockForSlots" data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.1">
      { timeslot2.map((slot2)=>(
        <div key={slot2} onClick={()=>hadnleTimeslot(slot2)} class={displaySlot ==slot2 ?'singleTime selected' : 'singleTime'} data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.1.$a2022102216001700">
        <p data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.1.$a2022102216001700.0">
          <span data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.1.$a2022102216001700.0.0">{slot2}</span>
          <span class="costOrAvailability" data-reactid=".9130wz7xo.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.4.0.1.$a2022102216001700.0.1"></span>
        </p>
      </div>
      )) }
      
    </div>
  </div>
</div>}
                </div>
                
               { dateToggle && 
               
               
               
               <div className="days dropdown fullWidth" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.3">
        
              { [0,1,2,3,4].map((number)=>(
                <div  key={number} className={number==dateselect ? 'singleDay selected':'singleDay'} onClick={()=>handleDate(number)} data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.3.$a1666288800">
                 
                 <p data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.3.$a1666288800.0">{moment(new Date()).add(number, "days").format("dddd")}</p>
                 <p data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.3.$a1666288800.1">{moment(new Date()).add(number, "days").format("D MMM")}</p>
               
               </div>
               ))}
                </div>}
              </div>
              <div className="clearAll" data-reactid=".t57rj60t64.a.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            <div className="shoppingBagChoice" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3">
              <table data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1">
                <tbody data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0">
                  <tr className="shoppingBagBlock" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0">
                    <td className="label" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0">
                      <div className="shoppingBagInfo" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0">
                        <span className="choiceIconContainer" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.0">
                          <div className="img-block" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.0.0">
                            
                          </div>
                        </span>
                        <h4 data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.1">
                          <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.1.0">Add reusable bags?</span>
                        </h4>
                        <span className="info-icon" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.2">
                          
                        </span>
                      </div>
                    </td>
                    <td className="value" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.1"></td>
                    <td data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2">
                      <div className="switch-block" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0">
                        <div className="switch" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0.0">
                          <input className="toggle toggle-light" id="toggleSwitch" type="checkbox" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0.0.0"/>
                          <label className="toggle-btn" for="toggleSwitch" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0.0.1"></label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="placeOrderFooter" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7">
              <div className="paymentMethodInstruction" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.0">
                <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.0.0">Payment options available on the next page</span>
              </div>
              <div className="confirmBtnContainer" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1">
                <p className="footNote" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0">
                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0">
                    <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0.0">৳</span>
                    <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0.1">29</span>
                    <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0.2"></span>
                  </span>
                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.1"> Delivery charge included</span>
                </p>
                {/*<Link to="/placeanorder" >*/}<button onClick={handleSubmitOrder} className="confirmBtn confirmOrder" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1">
                  <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0">
                    <div className="placeOrderText" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.0">Place Order</div>
                    <div className="placeOrderPrice" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.1">
                      <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.1.0">৳ </span>
                      <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.1.1">{items.reduce((total, item)=>total+(item.price*item.quantity),0)}</span>
                    </div>
                  </div>
                </button> 
                <p className="termConditionText" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.2">
                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.2.0">By clicking/tapping proceed, I agree to Chaldal's <a href="/t/TermsOfUse" target="_blank">Terms of Services</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Order