import React, { useState,useref, useEffect } from 'react'
import { useRef } from 'react'
import Items from '../API/Items.json'
import FoodUnit from './FoodUnit'
import { CartProvider, useCart } from "react-use-cart";

const Food = () => {
 

  const [item,setItem]=useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) =>   setItem(data));

  
     
  }, [])
  
 
     
  return (
    <div>
      <div className='catalogBrowser'>
        <div className='loaded'>
          <section className='bodyWrapper'>
            <div className='categoryHeader' >
               <a><b>Food</b></a>
                              
            </div>
            <div className='categorySection miscCategorySection onlyMiscCategorySection'>
              
              <div className='productPane'>{
                 item.map((item)=>(
                  
                  <FoodUnit  key={item.id} item={item}/>                   
                 ))
                }
                <div className='productPane'>
                                   
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