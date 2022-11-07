import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import GetWindowSize from '../CustomHooks/GetWindowSize'
const Sidebar = ({handleNav,setNavopen}) => {
  const windowsize=GetWindowSize()
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
    <>
     
    <div className='menuWrapper ' >
    <div>
    <div className='topMenu vertical'>
          <div data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0">
          <div class="hamBergerMenuIcon" onClick={handleNav}  data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0">
                <div class="bar1" data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0.0"></div>
                <div class="bar2" data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0.1"></div>
                <div class="bar3" data-reactid=".1ouxpi3x6ke.4.0.1.0.0.0.0.2"></div>
          </div>
      </div>
  
        <div className='menu' style={{height:windowsize.height}}>
                
               <ul className='misc-menu'>
                    <li className='unselected'>
                     <div className='name'>
                     <Link to='/cooking' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <span>Offers</span>
                     </Link>

                     </div>

                    </li>
                    <li className='unselected' >
                     <div className='name'>
                     <Link to='/coffee' onClick={()=>windowsize.width <700 && setNavopen(false)}>
                     <span>Trending Item</span>
                     </Link>

                     </div>

                    </li>
                   
                     
                </ul>
                <ul className='level-0'>
                <ul className='misc-menu'>
                    
                    {
                      sideitem.map((item)=>(
                        <li className='unselected'>
                        <div className='name'>
                        <Link to={`/${item.slug}`} onClick={()=>windowsize.width <700 && setNavopen(false)} >
                        <img className='MenuItemIcons' src={item.icon}/>
                        <span style={{marginLeft:"5px"}}>{item.name}</span>
                        </Link>
   
                        </div>
   
                       </li>
                      
                      ))
                    }
                     
                </ul>

                </ul>
                
        </div>
    
   
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Sidebar