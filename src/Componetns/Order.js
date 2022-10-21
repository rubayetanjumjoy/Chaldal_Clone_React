import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from "react-use-cart";
import { useContext } from 'react';
import AddressUnit from './AddressUnit';
import { authProvider } from '../Contexts/Auth'; 
import { useState } from 'react';
import { useEffect } from 'react';
const Order = () => {
  const {auth,setAuth} =useContext(authProvider);
  const [changeButton,setChangeButton]=useState(false)
  const [address,setAddress]=useState('')
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('selected'));
    if (items) {
      setAddress(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(address));

   }, [address])

  const handleclick=(obj)=>{
    setAddress(obj)
    
  }
  useEffect(() => {
  if(address){
    setChangeButton(false)
  }
  }, [address])
  
  return (
    <>
    <div data-reactid=".d6snlzz9k2.9.2.0">
  <div class="checkoutExperience2" data-reactid=".d6snlzz9k2.9.2.0.0">
    <div data-reactid=".d6snlzz9k2.9.2.0.0.0">
      <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0">
        <div class="checkoutDelivery" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0">
          <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1">
            <div class="deliveryStep" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0">
              <div class="deliveryStepTitle" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0">
                <div class="titleLeft" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0.0">
                  <div class="stepIcon" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0.0.0">
                    
                  </div>
                  <h2 data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.0.0.0.1">Delivery Address</h2>
                </div>
              </div>
              <div class="" >
             {//delevery address  
              !changeButton  && <div class="deliveryStepContent" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1">
  <div class="addressComponent mui" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0">
    <div class="theSelectedAddress" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0">
      <div class="wholeAddress" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0">
        <span class="wrap" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0">
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.0">{address['apartment_no']}</span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.1"></span>
          <br data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.2"/>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.3"></span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.4">{address['street_address']}</span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.5"></span>
          <span data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.0.0.6"></span>
        </span>
      </div>
      <div class="stepAction" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0.0.1">
        <button onClick={()=>setChangeButton(true)}>Change</button>
      </div>
    </div>
  </div>
</div>}
  
  { changeButton && <div class="deliveryStepContent" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1">
    <div class="addressComponent mui" data-reactid=".3q84otdxu0.a.2.0.0.0.0.0.1.0.1.0">
      { auth['token'] && <AddressUnit handleclick={handleclick}/>}
    </div>
  </div> }
</div>
              
            </div>
            <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2">
              <div class="deliveryStep activeStep deliverySlot" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0">
                <div class="deliveryStepTitle" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.0">
                  <div class="titleLeft" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.0.0">
                    <div class="stepIcon" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.0.0.0">
                      
                    </div>
                    <h2 data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.0.0.1">Preferred Delivery Time</h2>
                  </div>
                </div>
                <div class="deliveryStepContent" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1">
                  <div class="deliveryComponent isBothDropDown" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0">
                    <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0">
                      <div class="timings" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1">
                        <div class="onlyExpressItems" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1">
                          <div class="deliveryTimeWrapper" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0">
                            <div class="deliveryTime" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0">
                              <div class="iconAndDescription" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0">
                                <p data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0.0">
                                  
                                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0.0.1"></span>
                                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.0.0.2">When would you like your <b>Express Delivery</b>? </span>
                                </p>
                              </div>
                              <div class="clearAll" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.1"></div>
                              <div class="dropdownContainer" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2">
                                <section class="selectOptions daySelect" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0">
                                  <div class="firstBlock" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.0">
                                    <p class="dayName" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.0.0">Today</p>
                                    <p class="dateName" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.0.1">23 Aug</p>
                                  </div>
                                  <div class="tooltipSuggestion" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.1">
                                    <i class="caret-down" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.0.1.0"></i>
                                  </div>
                                </section>
                                <section class="mobileDaySelect mobileDropDown" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1">
                                  <select data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0">
                                    <option value="" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$">- Select Day -</option>
                                    <option value="1661191200" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$23 Aug">Today - 23 Aug</option>
                                    <option value="1661277600" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$24 Aug">Tomorrow - 24 Aug</option>
                                    <option value="1661364000" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$25 Aug">Thursday - 25 Aug</option>
                                    <option value="1661450400" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$26 Aug">Friday - 26 Aug</option>
                                    <option value="1661536800" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.1.0.$27 Aug">Saturday - 27 Aug</option>
                                  </select>
                                </section>
                                <section class="selectOptions timeSelect" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2">
                                  <div class="firstBlock" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.0">
                                    <p class="dayName" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.0.0"></p>
                                    <p class="dateName" style={{marginTop:'17px'}} data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.0.1">4:00 PM - 4:30 PM</p>
                                  </div>
                                  <div class="tooltipSuggestion" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.1">
                                    <i class="caret-down" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.2.1.0"></i>
                                  </div>
                                </section>
                                <section class="mobileTimeSelect mobileDropDown" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3">
                                  <select data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0">
                                    <option value="" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$">- Select Time -</option>
                                    <option value="4:00 PM - 4:30 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082316001630">4:00 PM - 4:30 PM</option>
                                    <option value="5:00 PM - 6:00 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082317001800">5:00 PM - 6:00 PM</option>
                                    <option value="6:00 PM - 7:00 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082318001900">6:00 PM - 7:00 PM</option>
                                    <option value="7:00 PM - 8:00 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082319002000">7:00 PM - 8:00 PM</option>
                                    <option value="8:00 PM - 9:00 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082320002100">8:00 PM - 9:00 PM</option>
                                    <option value="9:00 PM - 10:00 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082321002200">9:00 PM - 10:00 PM</option>
                                    <option value="10:00 PM - 11:00 PM" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.2.3.0.$2022082322002300">10:00 PM - 11:00 PM</option>
                                  </select>
                                </section>
                              </div>
                              <div class="countDownTimer" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.5">
                                <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.5.0">Your selected slot will close in</span>
                                <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.5.1"></span>
                                <span class="time" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.0.5.2">0:35</span>
                              </div>
                            </div>
                            <div class="clearAll" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.2.0.1.0.0.1.1.0.3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="shoppingBagChoice" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3">
              <table data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1">
                <tbody data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0">
                  <tr class="shoppingBagBlock" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0">
                    <td class="label" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0">
                      <div class="shoppingBagInfo" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0">
                        <span class="choiceIconContainer" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.0">
                          <div class="img-block" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.0.0">
                            
                          </div>
                        </span>
                        <h4 data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.1">
                          <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.1.0">Add reusable bags?</span>
                        </h4>
                        <span class="info-icon" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.0.0.2">
                          
                        </span>
                      </div>
                    </td>
                    <td class="value" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.1"></td>
                    <td data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2">
                      <div class="switch-block" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0">
                        <div class="switch" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0.0">
                          <input class="toggle toggle-light" id="toggleSwitch" type="checkbox" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0.0.0"/>
                          <label class="toggle-btn" for="toggleSwitch" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.3.1.0.0.2.0.0.1"></label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="placeOrderFooter" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7">
              <div class="paymentMethodInstruction" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.0">
                <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.0.0">Payment options available on the next page</span>
              </div>
              <div class="confirmBtnContainer" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1">
                <p class="footNote" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0">
                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0">
                    <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0.0">৳</span>
                    <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0.1">29</span>
                    <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.0.2"></span>
                  </span>
                  <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.0.1">Delivery charge included</span>
                </p>
                <button class="confirmBtn confirmOrder" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1">
                  <div data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0">
                    <div class="placeOrderText" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.0">Proceed</div>
                    <div class="placeOrderPrice" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.1">
                      <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.1.0">৳ </span>
                      <span data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.1.0.1.1">{items.reduce((total, item)=>total+(item.price*item.quantity),0)}</span>
                    </div>
                  </div>
                </button>
                <p class="termConditionText" data-reactid=".d6snlzz9k2.9.2.0.0.0.0.0.1.7.1.2">
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