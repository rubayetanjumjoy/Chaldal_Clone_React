import React, { useState,useref } from 'react'
import { useRef } from 'react'
const Food = () => {
  const [toggle,setToggle]=useState(false);
  const [counter,setCounter]=useState(0);
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
    setCounter(counter+1);
    setToggle(true);

  }
  let increment=()=>{

    setCounter(()=>counter+1);
  }
  let decrement=()=>{
   if(counter>1){
    setCounter(()=>counter-1);
   }else
   {
    setToggle(false);
    setCounter(0);
   }
    
  }
  console.log(counter);
 
  let actionItems=()=>{
    return(
        <>
           <section class="actionItems">
                <p class="total">
                <span >৳ </span><span >750</span></p>
                <div>
                <p class="remove" onClick={decrement}>-</p><p class="quantity" >
                <span >{counter}</span></p>
                <p class="add" onClick={increment}>+</p></div>
                </section>
            <p class="inBag">in bag</p>
        
        </>
    );
  
  }
  return (
    <div>
      <div className='catalogBrowser'>
        <div className='loaded'>
          <section className='bodyWrapper'>
            <div className='categoryHeader' >
               <a><b>Food</b></a>
            </div>
            <div className='categorySection miscCategorySection onlyMiscCategorySection'>
              
              <div className='productPane'>
                 
                <div className='productPane'>
                  <div>
                    <div ref={ref} onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave} className='product'>
                      <div className='imageWrapper'>
                        <div className='imageWrapperWrapper'>
                         <img src="https://chaldn.com/_mpimage/ajwa-dates-premium-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99543&q=best&v=1&m=400&webp=1"></img> 
                        </div>
                        <div className='name'>Date Premium </div>
                       <div className='subText'>
                       500 gm
                       </div>
                       <div className='price'>10</div>
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
                      <div class="productQuantityEditor addButtonWrapper border-radius-small">
                        <button class="minusQuantity" onClick={decrement} >–</button><div class="QuantityTextContainer" ><span>{counter}</span><span > </span><span >in bag</span></div>
                        <button class="plusQuantity" onClick={increment} >+</button>
                        </div> }
                     
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </div>
  )
}

export default Food