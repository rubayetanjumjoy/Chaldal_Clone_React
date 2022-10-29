import React from 'react'

const OrderDetails = ({item,checked,setChecked}) => {
  return (
    <>
        <div class="order-details" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2">
  <div class="title" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.0">Order Details</div>
   
  <div class="product-list-wrap" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2">
    <div class="shipmentSection" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0">
      <div class="shipment-address-section" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0">
        <div class="delivery-address-info" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0">
          <div class="home-icon" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.0">
            <div data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.0.0">
               
            </div>
          </div>
          <div data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.1">
            <div data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.1.0">
              <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.1.0.0">{item.address.floor_no}</span>
            </div>
            <div data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.1.1">
              <span class="delivery-area-span" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.0.1.1.0">{item.address.street_address}</span>
            </div>
          </div>
        </div>
        <div onClick={()=>setChecked(false)} class="delivery-phone-number" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.1">
          <span style={{cursor:'pointer' }} data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.0.1.0">
            <svg style={{ marginLeft: '5px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <p>Close</p>
         </span>


        </div>
      </div>
      <div class="shipment-time-rating-container" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1">
        <div class="delivery-type-time-info" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0">
          <div class="delivery-type" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0">
            <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.0">
              <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.0.0">Shipment ID </span>
              <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.0.1"></span>
            
            </span>
            
            <span class="delivery-type-name" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.1">{item.shipment_id}</span>
          </div>
          <div class="delivery-type" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0">
            <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.0">
              <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.0.0">Phone Number  </span>
              <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.0.1"></span>
            
            </span>
            
            <span class="delivery-type-name" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.0.1">{item.user.phone_number}</span>
          </div>
         
          <div class="delivery-time" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.1">
            <span class="date-time-txt" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.0.1.0">অক্টো ২৬, ২০২২ | ২:০০দুপুর - ৩:০০দুপুর</span>
          </div>
        </div>
        <div class="shipment-rating-report-shipment-section" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.1.1"></div>
      </div>
      <div class="product-list" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2">
        
        {item.items.map((items)=>(
          <div class="product-item" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0">
          <div class="productInfo" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2">
            <div class="product-image" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.0">
              <img src={`${process.env.REACT_APP_BASE_URL}${items.product.image}`} style={{backgroundColor:'transparent'}} data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.0.0"/>
            </div>
            <div class="product-details" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1">
              <div class="product-unit" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0">
                <div class="product-name" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.0">{items.product.title}</div>
                <div class="product-info" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.1">
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.1.0">৳ </span>
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.1.1">
                    <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.1.1.0">{items.product.totalprice}</span>
                  </span>
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.1.2"> | </span>
                  <span class="product-mass" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.0.1.3">{items.product.description}</span>
                </div>
              </div>
              <div class="product-total" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1">
                <div class="total-price" data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.0">
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.0.0">৳ </span>
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.0.1">
                    <b data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.0.1.0">
                      <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.0.1.0.0">{items.product.price}</span>
                    </b>
                  </span>
                </div>
                <div data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.1">
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.1.0">Qty: </span>
                  <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.1.1">
                    <span data-reactid=".1ydwwpysure.a.2.0.0.1.1:$order-item-0.2.2.$order-details-id-0.2.$product-item-key-0.2.1.1.1.1.0">{items.quantity}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
       
       
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default OrderDetails