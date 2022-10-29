import React from 'react'
import { useState,useEffect } from 'react'
import Order from './Order'
import OrderDetails from './OrderDetails'
import Orders from './Orders'
const MyOrder = () => {
   const [order,setOrder]=useState([])
   const [showId, setShowId] = useState();
   const [toggle,setToggle]=useState()
   const [checked, setChecked] = useState(true);
   const handleShow = id => { 
      setShowId(id);
       
   }
   
   function toggleFunction(id) {
    
        console.log(id)
      setToggle(toggle.map((item) =>
            item.shipment_id == id
            ? { ...item, [id]: !toggle[id] }
              : { ...item,[id]: false}
            )
           )
    
    // ...toggle,
    //[id]: !toggle[id],
//    setToggle((item) => 
 
    //toggle.map((item) =>
//     item.shipment_id === id
//        ? { ...item, toggle: !toggle[id] }
 //         : { ...item,toggle: false}
//      )
//     )
  }

  useEffect(() => {
     console.log(toggle)
  }, [toggle])
  
   
  useEffect(() => {
   fetch(`http://127.0.0.1:8000/v0/order/`,{
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'token':"24a59d0720b85716f84f664ac5580f7754b03a96"
      },
       })
      .then(res => res.json())
      .then(
        (response) => {
          console.log(response[0]['items'][0]['product']['title'])
          setOrder(response)
        setToggle(response)
           
        },
          
        (error) => {
          console.log(error);
        }
      )
  
  
   
    
  }, [])
  
  return (
    <div>
     
    <div data-reactid=".2a2ys0wkksc.a.2.0">
    <div class="order-history-page" data-reactid=".2a2ys0wkksc.a.2.0.0">
       <div class="page-title" data-reactid=".2a2ys0wkksc.a.2.0.0.0"><span data-reactid=".2a2ys0wkksc.a.2.0.0.0.0">My Orders</span><span data-reactid=".2a2ys0wkksc.a.2.0.0.0.1"></span></div>
       <div class="order-list" data-reactid=".2a2ys0wkksc.a.2.0.0.1">
          <div class="separator-line" data-reactid=".2a2ys0wkksc.a.2.0.0.1.0"></div>
         { order.map((item)=>(<>
            
            <Orders   show={showId == item.shipment_id}    item={item } onShow={handleShow} toggleFunction={toggleFunction} checked={checked} setChecked={setChecked}/>
            </>
         )) 
          }
       
             
       </div>
    </div>
 </div></div>
  )
}

export default MyOrder