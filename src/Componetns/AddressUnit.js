import { counter } from '@fortawesome/fontawesome-svg-core';
import React, { useLayoutEffect } from 'react'
import { useState ,useContext,useEffect} from 'react'
import { authProvider } from '../Contexts/Auth';
import ModalAddress from './ModalAddress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const AddressUnit = ({handleclick}) => {
  const {auth,setAuth} =useContext(authProvider);
  const [selected,setSelected]=useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const hideModal = () => {
    setIsOpen(false)
  };
  const showModal = () => {

    setIsOpen(true);


  };
 
  
  useEffect(() => {
    if(auth['address'].length==0){
      setSelected(false)
    }
  }, [auth])
  
  useLayoutEffect(() => {
    const items = JSON.parse(localStorage.getItem('selected'));
    if (items) {
     setSelected(items);
    }
  }, []);
  useEffect(() => {
    
    localStorage.setItem('selected', JSON.stringify(selected));
    
   }, [selected])
   
 
   
    
    let dlt=(id)=>{
      
      fetch(`${process.env.REACT_APP_BASE_URL}/v0/updateaddress/${id}`,{
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
              toast.warn('Address Has been Deleted', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
             if(selected){
              if(id==selected['id']){
                setSelected(false)
              }
             }
          },
            
          (error) => {
            console.log(error);
          }
        )
  
  
    }
    const handleidclick=(obj)=>{
      setSelected(obj)
       

      if(handleclick){
        handleclick(obj)
      }
     
    }
     
   
    
    
  return (
    <div> 
     <section className="" >
     <div className="newAddressAddBtn buttonOnTop" >
    
     <section onClick={showModal} >
      
     <span  >New Address</span></section>
    
     </div>
      {auth && auth['address'].map((item,index)=>(
        <section key={item.id} className="addresses"  >
           
            <div className={selected['id'] == item.id ? "address selectedAddress" : "address" } >
              <div style={{width:'100%'}} onClick={()=>handleidclick(item)}>
              <span className="selectedAddressTickIcon" >
              <svg style={{fill: '#3BB07E', stroke: '#3BB07E', display: 'inline-block', verticalAlign: 'middle'}} width="20px" height="20px" version="1.1" viewBox="0 0 100 100" x="0px" y="0px" data-reactid=".1wow9o48z4y.a.2.0.0.1.1.1.0.1.0.0.2.1.$a3346127.0.0">
    <path d="M50,88.6c21.3,0,38.6-17.3,38.6-38.6S71.3,11.4,50,11.4S11.4,28.7,11.4,50S28.7,88.6,50,88.6z M31.8,45.9l12.3,12.3  l22.5-22.5l3,3L44.1,64.2L28.8,48.9L31.8,45.9z" data-reactid=".1wow9o48z4y.a.2.0.0.1.1.1.0.1.0.0.2.1.$a3346127.0.0.0" />
  </svg>
              </span>
                <span >
                  <p > Apartment No<span style={{fontWeight:'bold'}}> {item.apartment_no} </span> </p> 
                   
               
                    <span   className="addressArea " >{item.street_address}</span>
                 
                 
                  </span>
                  </div>
                  <a className="delete" onClick={()=>dlt(item.id)}>delete</a></div>
                 
       </section>)) 
      }
      </section>
      <ModalAddress hideModal={hideModal} setIsOpen={setIsOpen}  isOpen={isOpen} />
    
    </div>
  )
}

export default AddressUnit