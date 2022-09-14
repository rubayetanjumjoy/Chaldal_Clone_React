import React from 'react'
import { useContext,useEffect } from 'react';
import { data } from '../Contexts/DataContext';
import FoodUnit from './FoodUnit';
const Search = () => {
    const {searchresult,setSearchesult} =useContext(data);
    const {mysearch,setMysearch} =useContext(data);

    
    useEffect(() => {
       fetch(`http://192.168.100.199:8002/v0/search/?q=${mysearch}`)
      .then((response) => response.json())
      .then((data) =>  setSearchesult(data)
      );
      
      
    }, [mysearch])
    

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
              {
                mysearch[0] ? searchresult[0] ?<span> Search result for: <strong>{mysearch}</strong></span> : 
                <span>No product found for: <strong>{mysearch}</strong></span>
                :<div className='noMatch'><p>Search for products (e.g. eggs, milk, potato)</p></div>
              }


            
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