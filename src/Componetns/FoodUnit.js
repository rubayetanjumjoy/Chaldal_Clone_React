import React from 'react'
import { useRef } from 'react'
import  { useState,useContext } from 'react'
import { cartlist } from '../Contexts/CartContext'
const FoodUnit = ({item}) => {
  const [toggle,setToggle]=useState(false);
  const [counter,setCounter]=useState(0);
  
  const ref = useRef(null);
  const {cart,setcart} =useContext(cartlist);
 
  
 
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
  let increment=()=>{
    
    
    setCounter((prevcounter)=>prevcounter+1);
    setcart((cart)=>[...cart,item]);
    console.log(cart);
  }
  let decrement=()=>{

   if(counter>1){
   
   
    setCounter((prevcounter)=>prevcounter-1);
    setcart((cart)=>[...cart,item]);
  }
    else
   {
    setToggle(false);
    setCounter(0);
     
   }
    
  }
 
  
 
  let actionItems=()=>{
    return(
        <>
           <section className="actionItems">
                <p className="total">
                <span >৳ </span><span >750</span></p>
                <div>
                <p className="remove" onClick={decrement}>-</p><p className="quantity" >
                <span >{counter}</span></p>
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
                         <img src={item.iamge}></img> 
                        </div>
                        <div className='name'>{item.name} </div>
                       <div className='subText'>
                       500 gm
                       </div>
                       <div className='price'>{item.price}</div>
                       <div className='overlay text'>
                      {toggle ? actionItems() : renderoverlay() }
                       </div>     
                      </div>
                    {
                    !toggle ?
                     <section className='addButtonWrapper border-radius-small'onClick={addhandle}>
                          <p className='buyText' > Add to Bag</p>
                      </section>
                   :
                      <div className="productQuantityEditor addButtonWrapper border-radius-small">
                        <button className="minusQuantity" onClick={decrement} >–</button><div className="QuantityTextContainer" ><span>{counter}</span><span > </span><span >in bag</span></div>
                        <button className="plusQuantity" onClick={increment} >+</button>
                        </div> }
                     
                    </div>
                  </div> 
    </>
  )
}

export default FoodUnit