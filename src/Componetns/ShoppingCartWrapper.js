import React from 'react'
import { useState, useRef ,useContext} from 'react';
import { cartlist } from '../Contexts/CartContext'
const ShoppingCartWrapper = ({refnav}) => {
   const {cart,setcart} =useContext(cartlist);
    const [carttoggle,setCarttoggle]=useState(true);
    const cartref=useRef(null);
    
    let cartclosehandler=()=>{
        let expandcart=cartref.current
      
        refnav.current.className='app catalog  navOpen chaldal-theme '
        expandcart.className='shoppingCartWrapper '
        setCarttoggle(true);
    }
    let cartexpandhandle=()=>{
        let expandcart=cartref.current
        refnav.current.className+=' shoppingCartWrapperExpanded'
        expandcart.className='shoppingCartWrapper shoppingCartWrapperExpanded'
        setCarttoggle(false);
    }

    
    
    let cartContainer=()=>{
        return(
          <>
            <div className="cartContainer" >
   <div className="shoppingCartButton" onClick={cartclosehandler} ></div>
   <div className="shoppingCart expanded non-empty responsive"  >
      <div className="header"  >
         <div className="cart"  >
            
         </div>
         <div className="itemCount" ><span  >2 ITEMS</span><span className="count-mobile" ><span  >2</span></span></div>
         <button className="closeCartButtonTop" onClick={cartclosehandler} >Close</button>
      </div>
      <section className="in-shopping-cart meter-full" id="shipping-cost-meter"  >
         <div className="costMeterSection"  >
             
         </div>
      </section>
      <section className="stickyHeader"  >
         <div className="itemCount"  >
             
            <p  ><span  >2 ITEMS</span></p>
         </div>
         <div className="total" >
            <span  >৳ </span>
            <div className="odometer odometer-auto-theme"  >
               <div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span></div>
            </div>
         </div>
      </section>
      <div className="body" style={{height:'75vh'}}>
         <div >
            <section className="itemsHeader expressHeader"  >
               <div  >
                  <div className="cartItemsHeaderIcon"  >
                      
                  </div>
                  <span  >Express Delivery</span>
               </div>
            </section>
            {cart.map((item)=>(
            <div   className="orderItem" key={item.id} >
               <div className="quantity"  >
                  <div className="caret caret-up" title="Add one more to bag" >
                     
                  </div>
                  <span className="onHoverCursor"  ><span  > </span><span >5</span><span  > </span></span>
                  <div className="caret caret-down" title="Remove one from bag"  >
                      
                  </div>
               </div>
                
               <div className="picture"  >
                  <div className="productPicture"  ><img src={item.iamge} size="400"  ></img></div>
               </div>
               <div className="name" >
                  <span  ></span>
                  <div className="subText"  ><span >৳ </span><span  >90</span><span > / 1 kg</span></div>
               </div>
               <div className="amount"  >
                  <section  >
                     <div className="total"  ><span >৳ </span><span  >450</span></div>
                  </section>
                  <div className="remove" title="Remove from bag"  >
                      
                  </div>
               </div>
            </div>
            ))} 
         </div>
         <div className="extraSpaceContainer"  style={{height:'110px'}}></div>
         <section className="discountCodeContainer notEligible"  >
            <div className="discountCodeHeader"  >
               <button className="btnDiscount"  >
                  <span className="arrow-icon arrow-up"  >
                      
                  </span>
                  <span >Have a special code?</span>
               </button>
            </div>
            <div className="discountCodeContent"  ></div>
         </section>
      </div>
      <div className=""  >
         <div className="footer"  >
            <div className="shoppingtCartActionButtons"  ><button id="placeOrderButton" ><span className="placeOrderText" >Place Order</span><span className="totalMoneyCount"  ><span >৳  </span><span  >725</span><span  > </span></span></button></div>
         </div>
      </div>
   </div>
</div>
          </>  
        );
    }
 
  let carthead=()=>{
    return(
        <>
           
   <div className="cartContainer"  >
      <div className="shoppingCart collapsed non-empty responsive"  >
         <div className="header" >
            <div className="cart"  >
               
            </div>
            <div className="itemCount" ><span >1 ITEM</span><span className="count-mobile"  ><span  >1</span></span></div>
            <button className="closeCartButtonTop"  >Close</button>
         </div>
         <section className="stickyHeader" onClick={cartexpandhandle}  >
            <div className="itemCount"  >
                
               <p  ><span  >1 ITEM</span></p>
            </div>
            <div className="total" data-reactid=".1olko8ll2v4.3.0.3.2.1">
               <span  >৳ </span>
               <div className="odometer odometer-auto-theme"  >
                  <div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">4</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div>
               </div>
            </div>
         </section>
         <div className="body" style={{height:'541px'}}></div>
      </div>
   </div>
 
        </>
    );
  }
 
  return (
    <div ref={cartref} className='shoppingCartWrapper '>
    {carttoggle ? carthead() : cartContainer()}
    </div>
  )
}

export default ShoppingCartWrapper