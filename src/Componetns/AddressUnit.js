import { counter } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { useState ,useContext,useEffect} from 'react'
import { authProvider } from '../Contexts/Auth';
import ModalAddress from './ModalAddress';
const AddressUnit = ({handleclick}) => {
  const {auth,setAuth} =useContext(authProvider);
  const [selected,setSelected]=useState('')
  const [isOpen, setIsOpen] = useState(false);
  const hideModal = () => {
    setIsOpen(false)
  };
  const showModal = () => {

    setIsOpen(true);

  };
  useEffect(() => {
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
             
          },
            
          (error) => {
            console.log(error);
          }
        )
  
  
    }
    const handleidclick=(obj)=>{
      setSelected(obj)
      handleclick(obj)
     
    }
     
   
    
    
  return (
    <div> 
     <section className="" >
     <div className="newAddressAddBtn buttonOnTop" >
    
     <section onClick={showModal} >
      
     <span  >New Address</span></section>
     
     </div>
      {auth && auth['address'].map((item)=>(
        <section className="addresses" onClick={()=>handleidclick(item)} >
       
            <div className={selected['id'] == item.id ? "address selectedAddress" : "address" } >
            
              <span className="selectedAddressTickIcon" >
                </span>
                <span >
                  <p >{item.apartment_no}</p>
               
                    <span   className="addressArea " >{item.street_address}</span>
                 
                 
                  </span>
                  <a className="delete" onClick={()=>dlt(item.id)}>delete</a></div>
                 
       </section>))
      }
      </section>
      <ModalAddress hideModal={hideModal} setIsOpen={setIsOpen}  isOpen={isOpen} />

    </div>
  )
}

export default AddressUnit