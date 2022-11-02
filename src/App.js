import logo from './logo.svg';
import React, { Component ,useState}  from 'react';
import './App.css';
import Navbar from './Componetns/Navbar';
import Sidebar from './Componetns/Sidebar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes,useLocation } from 'react-router-dom'
import Search from './Componetns/Search';
import EverythingelseWarper from './Componetns/EverythingelseWarper';
import Food from './Componetns/Food';
import LandingPage from './Componetns/LandingPage';
import Main from './Componetns/Main'
import Cart from './Componetns/Cart';
import Order from './Componetns/Order';
import MyOrder from './Componetns/MyOrder';
import AccountLogin from './Componetns/AccountLogin';
import PrivateRoute from './Util/PrivateRoute';
import { authProvider } from './Contexts/Auth';
import { useEffect,useLayoutEffect } from 'react';
import Profile from './Componetns/Profile';
import ChangePassword from './Componetns/ChangePassword';
import NotFound from './Componetns/NotFound';
import PublicRoute from './Util/PublicRoute'
import PlaceAnOrder from './Componetns/PlaceAnOrder';
import { CartProvider, useCart } from "react-use-cart";

function App() {
   
 
  const [isOpen, setIsOpen] = React.useState(false);
  const [auth,setAuth]=useState([])
   
 
   useLayoutEffect(() => {
    
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setAuth(JSON.parse(localStorage.getItem('items')));
      
 
     }
    
  }, [])
   useEffect(() => {
    localStorage.setItem('items', JSON.stringify(auth));
    
   }, [auth])

   
 
  
   
  
 
  return(
    
    <authProvider.Provider value={{auth,setAuth}}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main insideWarper={<LandingPage/>}/>}></Route>
            <Route exact path="/cooking" element={<Main insideWarper={<Food props={'cooking'}/>}/>}></Route>
            <Route exact path="/meat-fish" element={<Main insideWarper={<Food props={'meat-fish'}/>}/>}></Route>
            <Route exact path="/fresh-fruit" element={<Main insideWarper={<Food props={'fresh-fruit'}/>}/>}></Route>
            <Route exact path="/coffee" element={<Main insideWarper={<Food props={'coffee'}/>}/>}></Route>
            <Route element={<PublicRoute/>}>
            <Route exact path="/account/login" element={<Main insideWarper={<AccountLogin/>}/>}></Route>
            </Route>
            <Route exact path="/search" element={<Main insideWarper={<Search/>}/>}></Route>
           


            
            {/* prottected Route */}
            <Route element={<PrivateRoute/>}>
            <Route exact path="/changepassword" element={<Main insideWarper={<ChangePassword/>}/>}></Route>
            <Route exact path="/profile" element={<Main insideWarper={<Profile/>}/>}></Route>
            <Route exact path="/order" element={<Main insideWarper={<Order/>}/>}></Route>
            <Route exact path="/myorder" element={<Main insideWarper={<MyOrder/>}/>}></Route>
            <Route exact path="/placeanorder" element={<Main insideWarper={<PlaceAnOrder/>}/>}></Route>
            </Route>
            <Route path="*" exact={true} element={<Main insideWarper={<NotFound/>}/>} />

            

          </Routes>
      </BrowserRouter>
      </CartProvider>
    
      </authProvider.Provider>
    
    );
}

export default App;
