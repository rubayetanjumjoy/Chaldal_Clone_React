import React from 'react'
import { useState ,useContext} from 'react'
import { authProvider } from '../Contexts/Auth';

const AddressUnit = ({item}) => {
  const {auth,setAuth} =useContext(authProvider);

    let dlt=()=>{
      fetch(`${process.env.REACT_APP_BASE_URL}/v0/updateaddress/${item.id}`,{
        method: 'delete', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"token":auth['token']}),
      })
        .then(res => res.json())
        .then(
          (response) => {
            console.log(response)
              setAuth(response) 
             
          },
            
          (error) => {
            console.log(error);
          }
        )
  
  
    }
  return (
    <div> 
        <section className="addresses" key={item.id} >
            <div className="address" >
              <span className="selectedAddressTickIcon" >
                </span>
                <span >
                  <p >{item.apartment_no}</p>
                  <span className="addressArea" >{item.street_address}</span></span>
                  <a className="delete" onClick={dlt}>delete</a></div>
                  
       </section>

    </div>
  )
}

export default AddressUnit