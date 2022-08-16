import React from 'react'
import { useState, useRef ,useContext} from 'react';
import { cartlist } from '../Contexts/CartContext'
import { CartProvider, useCart } from "react-use-cart";
import { ArrowDownShort, ArrowRight, ArrowUpShort, X,  } from 'react-bootstrap-icons';
import Odometer from 'react-odometerjs';


const ShoppingCartWrapper = ({refnav}) => {
   const [counter,setCounter]=useState(0)
   const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
    
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
    let total=()=>{
      let isTotal= items.reduce((total, item)=>total+(item.price*item.quantity),false)
      if(isTotal){
         return isTotal;
      }
      else
      {
         return false;
      }
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
         <div className="itemCount" ><span  >{totalUniqueItems} ITEMS</span><span className="count-mobile" ><span  >2</span></span></div>
         <button className="closeCartButtonTop" onClick={cartclosehandler} >Close</button>
      </div>
      <section className="in-shopping-cart meter-full" id="shipping-cost-meter"  >
         <div className="costMeterSection"  >
             
         </div>
      </section>
      <section className="stickyHeader"  >
         <div className="itemCount"  >
             
            <p  ><span  >{totalUniqueItems} ITEMS</span></p>
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
            {total() ? items.map((item)=>(
            <div   className="orderItem" key={item.id} >
               <div className="quantity"  >
                  <div className="caret caret-up" title="Add one more to bag" >
                  <ArrowUpShort size={4} color={'black'} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}/>
                  </div>
                  <span className="onHoverCursor"  ><span  > </span><span >{item.quantity}</span><span  > </span></span>
                  <div className="caret caret-down" title="Remove one from bag"  >
                  <ArrowDownShort size={4} color={'black'} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}/>
                  </div>
               </div>
                
               <div className="picture"  >
                  <div className="productPicture"  ><img src={item.image} size="400"  ></img></div>
               </div>
               <div className="name" >
                  <span  >{item.name}</span>
                  <div className="subText"  ><span  >{item.title}</span></div>
               </div>
               <div className="amount"  >
                  <section  >
                     <div className="total"  ><span >৳ </span><span  >{item.quantity * item.price}</span></div>
                  </section>
                  <div className="remove" title="Remove from bag"  >
                      <X onClick={() => removeItem(item.id)}/>
                  </div>
               </div>
            </div>
            )):
            <div className='emptyCart' style={{height: '147px'}}>
               <div className='nothingToSeeHereMoveOn'>
                  <div>
                     <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-85/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1"></img>
                  </div>
                  <span>Your shopping bag is empty. Start shopping</span>


               </div>

            </div>
         } 
            
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
         {total() ? <div className="shoppingtCartActionButtons"  ><button id="placeOrderButton" ><span className="placeOrderText" >Place Order</span><span className="totalMoneyCount"  >
               <span >৳  </span>
            <span  ><Odometer value={total()}/></span><span  > </span></span></button></div>: <div><span>Hotline : </span><span>16710</span></div>}
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
            <div className="itemCount" ><span >{totalUniqueItems} ITEMS</span>
             <ArrowDownShort/>
            <span className="count-mobile"  >
               <span  >{totalUniqueItems}</span>
            </span>
            </div>
            
            <button className="closeCartButtonTop"  >Close</button>
         </div>
         <section className="stickyHeader" onClick={cartexpandhandle}  >
            <div className="itemCount"  >
                
               <p  ><span  >{totalUniqueItems} ITEMS</span></p>
            </div>
            <div className="total" >
               <span  >৳</span>{
                  <Odometer value={total()}/> 
               }
             

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