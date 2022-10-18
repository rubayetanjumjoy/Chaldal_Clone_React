import React from 'react'

const AddressUnit = ({item, handledelete}) => {
    let dlt=()=>{
        handledelete(item.id)
    }
  return (
    <div> 
        <section className="addresses" key={item.id} >
            <div className="address selectedAddress" >
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