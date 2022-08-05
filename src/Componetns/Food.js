import React, { useState,useref } from 'react'
import { useRef } from 'react'

import FoodUnit from './FoodUnit'
const Food = () => {
  const [item,setItem]=useState([
    {
      "id": 1,
      "name": "date",
      "subText": "500gm",
      "iamge": "https://chaldn.com/_mpimage/ajwa-dates-premium-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99543&q=best&v=1&m=400&webp=1",
      "price": "20",
       
  },
  {
    "id": 2,
    "name": "Egg",
    "subText": "200gm",
    "iamge": "https://chaldn.com/_mpimage/moshur-dal-imported-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47049&q=low&v=1&m=400&webp=1",
    "price": "30",
  },
  {
    "id": 3,
    "name": "Potato",
    "subText": "500gm",
    "iamge": "https://chaldn.com/_mpimage/tang-orange-instant-drink-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113360&q=best&v=1&m=400&webp=1",
    "price": "150",
  }

  ]);
  
  
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