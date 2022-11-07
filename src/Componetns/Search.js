import React from 'react'
import { useContext,useEffect } from 'react';
import { data } from '../Contexts/DataContext';
import FoodUnit from './FoodUnit';
import ReactLoading from 'react-loading';
import { useState } from 'react';
const Search = () => {
    const {searchresult,setSearchesult} =useContext(data);
    const {mysearch,setMysearch} =useContext(data);
    const [loading,setLoading]=useState(false);
    
    useEffect(() => {
      setLoading(true)
       fetch(`${process.env.REACT_APP_BASE_URL}/v0/search/?q=${mysearch}`)
      .then((response) => response.json())
      .then((data) =>  {setSearchesult(data)
    
       setLoading(false)}
      );
     
  
      
    }, [mysearch])
    

   return (
    <>
    { /*loading && <div style={{"position":"fixed","left":"45%","transform":"-ms-translate(-50%, -50%) ",marginTop:"-30px"}}>
     <ReactLoading type={'bubbles'} color={'#f1c40f'}   />
     </div> */}
     <div>
      <div className='catalogBrowser'>
        <div className='loaded'>
          <section className='bodyWrapper'>
            <div className='categoryHeader' >
               
                              
            </div>
            <div className='categorySection miscCategorySection onlyMiscCategorySection'>
            <div class="searchSlagName">
              {
                mysearch[0] ? searchresult[0]  ?  <span> Search result for: <strong>{mysearch}</strong></span> : 
                !loading ? <span>No product found for: <strong>{mysearch}</strong></span> :'loading'
                :<div className='noMatch'><p>Search for products (e.g. eggs, milk, potato)</p></div>
              }


            
              </div>
              
              <div className='productPane '>{
                mysearch[0] && searchresult.map((item)=>(
                  
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