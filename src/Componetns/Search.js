import React from 'react'
import { useContext } from 'react';
import { isopen } from '../Contexts/ModalToggle';
import FoodUnit from './FoodUnit';
const Search = () => {
    const {searchresult,setSearchesult} =useContext(isopen);
    console.log(searchresult)

   return (
    <>
     <div>
      <div className='catalogBrowser'>
        <div className='loaded'>
          <section className='bodyWrapper'>
            <div className='categoryHeader' >
               
                              
            </div>
            <div className='categorySection miscCategorySection onlyMiscCategorySection'>
            <div class="searchSlagName">
              <span >Search result for: </span>
              <strong>a</strong>
              </div>
              
              <div className='productPane'>{
                 searchresult.map((item)=>(
                  
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
  
    </>
  )
}

export default Search