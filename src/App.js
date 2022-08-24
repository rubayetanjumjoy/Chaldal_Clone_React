import logo from './logo.svg';
import React, { Component ,useState}  from 'react';
import './App.css';
import Navbar from './Componetns/Navbar';
import Sidebar from './Componetns/Sidebar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
 
import EverythingelseWarper from './Componetns/EverythingelseWarper';
import Food from './Componetns/Food';
import LandingPage from './Componetns/LandingPage';
import Main from './Componetns/Main'
import Cart from './Componetns/Cart';
import Order from './Componetns/Order';
import AccountLogin from './Componetns/AccountLogin';
import PrivateRoute from './Util/PrivateRoute';
import { authProvider } from './Contexts/Auth';
import { useEffect } from 'react';
import Profile from './Componetns/Profile';
import ChangePassword from './Componetns/ChangePassword';
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [auth,setAuth]=useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      
     setAuth(JSON.parse(localStorage.getItem('items')));
     console.log(auth);
     

     }
  }, [])

  return(
    
    <authProvider.Provider value={{auth,setAuth}}>
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main insideWarper={<LandingPage/>}/>}></Route>
            <Route exact path="/food" element={<Main insideWarper={<Food/>}/>}></Route>
            <Route exact path="/account/login" element={<Main insideWarper={<AccountLogin/>}/>}></Route>


            
            {/* prottected Route */}
            <Route element={<PrivateRoute/>}>
            <Route exact path="/changepassword" element={<Main insideWarper={<ChangePassword/>}/>}></Route>
            <Route exact path="/profile" element={<Main insideWarper={<Profile/>}/>}></Route>
            <Route exact path="/order" element={<Main insideWarper={<Order/>}/>}></Route>
            </Route>
            

          </Routes>
      </BrowserRouter>
      </authProvider.Provider>
    
    );
}

export default App;
