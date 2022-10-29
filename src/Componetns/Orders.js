import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import OrderDetails from './OrderDetails'
const Orders = ({   show, onShow ,item,toggleFunction,setChecked,checked}) => {
    const [detailsTog,setDetailsTog]=useState(false)
    
    
     
     
     
    
    const handleShow = () => {
     
      onShow && onShow(item.shipment_id);
      onShow && setChecked(true)
      toggleFunction(item.shipment_id)
       
   }
    
    
  return (
    <>  
        <div class="order-items border-radius-small" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0">
             <div class="order-summary" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1">
                <div class="left-order-info" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0">
                   <div class="order-status" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.0">
                      <div class="status-block" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.0.0">
                         <span class="text border-radius-small  processing" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.0.0.0">Processing</span>
                         <div class="total-shipment-number" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.0.0.1"><span data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.0.0.1.0"><span>1</span>Shipments</span></div>
                      </div>
                   </div>
                   <div class="order-id" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.1"><span data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.1.0">Id</span><span class="the-id" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.1.1"><span data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.1.1.0">{item.shipment_id}</span></span></div>
                   <div class="total-price" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.2"><span class="tk-symbol" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.2.0">৳</span><span data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.0.2.1">{item.totalprice}</span></div>
                </div>
                <div class="right-order-actions" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.1">
                   <div class="actions-btns mouse-hover-cursor-pointer" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.1.0">
                      <div class="view-details-btn" onClick={handleShow}>
                         <span class="text" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.1.0.0.0">View Details</span>
                          <span class="icon arrow-down" data-reactid=".2a2ys0wkksc.a.2.0.0.1.1:$order-item-0.1.1.0.0.1">
                         {/*<svg width="10px" height="10px" style={{fill:'#000000',stroke:'#000000',display:'inline',verticalAlign:'middle'}} viewBox="0 0 100 100" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-2.1.1.0.0.1.0"><path transform="translate(0 -952.36)" d="m31.918 1045.4l36.164-31.684 12.918-11.316-12.918-11.316-36.164-31.684-12.918 11.316 36.168 31.684-36.168 31.684zm0 0" stroke="#000" stroke-linecap="round" stroke-width="2" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-2.1.1.0.0.1.0.0"></path></svg>*/}
                         </span>
                      </div>
                   </div>
                </div>
             </div>
             
             { show && checked && <OrderDetails item={item} setChecked={setChecked} />}
             
          
          </div>
    </>
  )
}

export default Orders