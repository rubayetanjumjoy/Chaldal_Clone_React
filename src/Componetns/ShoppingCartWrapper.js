import React from 'react'
import { useState, useRef ,useContext} from 'react';
import { CartProvider, useCart } from "react-use-cart";
import { Link } from 'react-router-dom'
import { ArrowDownShort, ArrowRight, ArrowUpShort, X,  } from 'react-bootstrap-icons';
import Odometer from 'react-odometerjs';
import 'animate.css';


const ShoppingCartWrapper = ({handleCart,cartopen}) => {
   const [counter,setCounter]=useState(0)
   const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();

    
    const [carttoggle,setCarttoggle]=useState(true);
    const cartref=useRef(null);
    
    
    
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
            <div className="cartContainer " >
   <div className="shoppingCartButton" onClick={()=>handleCart(false)} ></div>
   <div className="shoppingCart expanded non-empty responsive"  >
      <div className="header"  >
         <div className="cart"  >
            
         </div>
         <div className="itemCount " ><span  >{totalUniqueItems} ITEMS</span><span className="count-mobile " ><span  >2</span></span></div>
         <button className="closeCartButtonTop" onClick={()=>handleCart(false)} >Close</button>
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
            <div className="odometer odometer-auto-theme "  >
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
                     <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-118/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1"></img>
                  </div>
                  <span>Your shopping bag is empty. Start shopping</span>


               </div>

            </div>
         } 
            
         </div>
         <div className="extraSpaceContainer"  style={{height:'110px'}}></div>
         
      </div>
      <div className=""  >
         <div className="footer"  >
         {total() ? <div className="shoppingtCartActionButtons"  >
            <Link to="/order"><button id="placeOrderButton" ><span className="placeOrderText" >Place Order</span>
            <span className="totalMoneyCount"  >
               <span >৳  </span>
            <span  >
               <Odometer value={total()}/></span>
               <span  > </span></span>
               </button></Link>
               </div>: <div><span>Hotline : </span><span>16710</span></div>}
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
      <div className="shoppingCart collapsed non-empty responsive"  onClick={()=>handleCart(true)} >
         <div className="header" >
            <div className="cart"  >
            <svg version="1.1" id="Calque_1" x="0px" y="0px" style={{fill:'#FDD670',stroke:'#FDD670'}} width="21px" height="32px" viewBox="0 0 100 160.13" data-reactid=".10kt0qhl1y0.3.0.3.0.0.0">
               <g data-reactid=".10kt0qhl1y0.3.0.3.0.0.0.0">
                  <polygon points="11.052,154.666 21.987,143.115 35.409,154.666  " data-reactid=".10kt0qhl1y0.3.0.3.0.0.0.0.0"></polygon>
                  <path d="M83.055,36.599c-0.323-7.997-1.229-15.362-2.72-19.555c-2.273-6.396-5.49-7.737-7.789-7.737   c-6.796,0-13.674,11.599-16.489,25.689l-3.371-0.2l-0.19-0.012l-5.509,1.333c-0.058-9.911-1.01-17.577-2.849-22.747   c-2.273-6.394-5.49-7.737-7.788-7.737c-8.618,0-17.367,18.625-17.788,37.361l-13.79,3.336l0.18,1.731h-0.18v106.605l17.466-17.762   l18.592,17.762V48.06H9.886l42.845-10.764l2.862,0.171c-0.47,2.892-0.74,5.865-0.822,8.843l-8.954,1.75v106.605l48.777-10.655   V38.532l0.073-1.244L83.055,36.599z M36.35,8.124c2.709,0,4.453,3.307,5.441,6.081c1.779,5.01,2.69,12.589,2.711,22.513   l-23.429,5.667C21.663,23.304,30.499,8.124,36.35,8.124z M72.546,11.798c2.709,0,4.454,3.308,5.44,6.081   c1.396,3.926,2.252,10.927,2.571,18.572l-22.035-1.308C61.289,21.508,67.87,11.798,72.546,11.798z M58.062,37.612l22.581,1.34   c0.019,0.762,0.028,1.528,0.039,2.297l-23.404,4.571C57.375,42.986,57.637,40.234,58.062,37.612z M83.165,40.766   c-0.007-0.557-0.01-1.112-0.021-1.665l6.549,0.39L83.165,40.766z" data-reactid=".10kt0qhl1y0.3.0.3.0.0.0.0.1"></path>
               </g>
               </svg>
               
            </div>
            <div className="itemCount" ><span >{totalUniqueItems} ITEMS</span>
              
            <span className="count-mobile"  >
               <span  >{totalUniqueItems}</span>
            </span>
            </div>
            
            <button className="closeCartButtonTop"  >Close</button>
         </div>
         <section className="stickyHeader" onClick={()=>handleCart(true)}  >
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
    <div  className={`shoppingCartWrapper ${cartopen ? 'shoppingCartWrapperExpanded':''}`}>
    {!cartopen ? carthead() : cartContainer()}
    </div>
  )
}

export default ShoppingCartWrapper