import React from 'react'
import HowtoOrder from './HowtoOrder'
import Corporate from './Corporate'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const LandingPage = () => {
    const [sideitem,setSideitem]=useState([])
  
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BASE_URL}/v0/products/catagorylist`)
         .then(res => res.json())
         .then(
           (response) => {
             
            setSideitem(response)
              
           },
             
           (error) => {
             console.log(error);
           }
         )
     
     
      
       
     }, [])
   
  return (
    <div>
         <div className='landingPage2'>
         <div className='landingBanner' style={{backgroundSize: 'auto', backgroundSize: 'cover',height: '325px',paddingTop: '100px', backgroundImage:`url(/img/landingtop.jpg)`}} >
            
        
         </div> 
         <div className='mainContainer'>
            <section id='product-categories' className='categoryTiles'>
                <div className='initialLabel mt-5'>
                    <h2>
                        <span>Our Product Categories</span>
                    </h2>
                </div>
                <div className='mainTile'>  
                {
                    sideitem.map((item)=>(
                        <Link to={`/${item.slug}`}>
                        <div className='categoryBox'>
                            <div className='categoryName'>{item.name}</div>
                            <div className='categoryImg' > 
                            <img src={item.icon}></img>
    
                            </div>
                        </div>
                    </Link>
                    ))
                }
               
                
                
                </div>
            </section>
            <HowtoOrder/>
            <Corporate/>

        </div>
          
  
        </div>
    </div>
  )
}

export default LandingPage