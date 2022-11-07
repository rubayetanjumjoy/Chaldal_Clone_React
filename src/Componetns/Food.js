import React, { useState,useref, useEffect } from 'react'
import { useRef } from 'react'
import Items from '../API/Items.json'
import FoodUnit from './FoodUnit'
import { CartProvider, useCart } from "react-use-cart";

const Food = ({props}) => {
 
 
  const [item,setItem]=useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/v0/products/${props}`)
  .then((response) => response.json())
  .then((data) =>   setItem(data));

  
     
  }, [props])
  
 
     
  return (
    <div>
      <div className='catalogBrowser'>
        <div className='loaded'>
          <section className='bodyWrapper'>
            <div className='categoryHeader' >
            <div class="categoryHeader" data-reactid=".10kt0qhl1y0.a.2.0.0.0.0.2.1">
  <ol class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList" data-reactid=".10kt0qhl1y0.a.2.0.0.0.0.2.1.0:$value:0">
   
    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" class="crumb selected" data-reactid=".10kt0qhl1y0.a.2.0.0.0.0.2.1.0:$value:0.$crumb-1696">
      <a  itemtype="http://schema.org/Thing" itemprop="item" id="Meat" itemscope="" data-reactid=".10kt0qhl1y0.a.2.0.0.0.0.2.1.0:$value:0.$crumb-1696.0">
        <span itemprop="name" data-reactid=".10kt0qhl1y0.a.2.0.0.0.0.2.1.0:$value:0.$crumb-1696.0.0">{props}</span>
      </a>
    </li>
  </ol>
  <div data-reactid=".10kt0qhl1y0.a.2.0.0.0.0.2.1.1"></div>
</div>
                              
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