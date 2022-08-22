import React from 'react'
import { useRef } from 'react'
import  { useState,useContext,useEffect } from 'react'
import { CartProvider, useCart } from "react-use-cart";

const FoodUnit = ({item}) => {
  const { updateItem } = useCart();
  const { getItem } = useCart();

  const [toggle,setToggle]=useState(false);
  const [counter,setCounter]=useState(0);
  const [qty,setQty]=useState(0);
  const { addItem } = useCart();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  
  
  const ref = useRef(null);
 

   
 

  let onMouseEnter =()=>{
    let product=ref.current
    product.className="product isInCart hasLinkedProduct"
     
  }
  let onMouseLeave =()=>{
    let product=ref.current
    product.className="product"
   
  }
  let renderoverlay=()=>{
    return(
      <>
       <p className='addText' onClick={addhandle}>

          Add to shopping bag
          </p>
          <span>
          <a className='btnShowDetails'>
          <span>Details</span>
          </a>

          </span>
      </>
    )
  }
  
  let addhandle=()=>{ 
   
    setToggle(true);
     
    increment();
  }

  useEffect(() => {
 
  }, )
  
 
   
  let increment=()=>{
    addItem(item);
      
  }
  let decrement=()=>{
    updateItemQuantity(item.id, getItem(item.id)["quantity"]-1);  
  }
  
  
 
  let actionItems=()=>{
    return(
        <>
           <section className="actionItems">
                <p className="total">
                <span >৳ </span><span >750</span></p>
                <div>
                <p className="remove" onClick={decrement}>-</p><p className="quantity" >
                <span >{getItem(item.id)["quantity"]}</span></p>
                <p className="add" onClick={increment}>+</p></div>
                </section>
            <p className="inBag">in bag</p>
        
        </>
    );
  
  }
  
  return (
    <>
    
    <div>
                    <div ref={ref} onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave} className='product'>
                      <div className='imageWrapper'>
                        <div className='imageWrapperWrapper'>
                         <img src={item.image}></img> 
                        </div>
                        <div className='name'>{item.name} </div>
                       <div className='subText'>
                       500 gm
                       </div>
                       <div className='price'>{item.price}</div>
                       <div className='overlay text'>
                      {getItem(item.id) ? actionItems() : renderoverlay() }
                       </div>     
                      </div>
                    {
                    !getItem(item.id) ?
                     <section className='addButtonWrapper border-radius-small'onClick={addhandle}>
                          <p className='buyText' > Add to Bag</p>
                      </section>
                   :
                      <div className="productQuantityEditor addButtonWrapper border-radius-small">
                        <button className="minusQuantity" onClick={decrement} >–</button><div className="QuantityTextContainer" >
                          <span>{getItem(item.id)["quantity"] }</span><span > </span><span >in bag</span></div>
                        <button className="plusQuantity" onClick={increment} >+</button>
                        </div> }
                     
                    </div>
                  </div> 
    </>
  )
}

export default FoodUnit