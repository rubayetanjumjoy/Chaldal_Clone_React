import logo from './logo.svg';
import React, { Component ,useState}  from 'react';
import './App.css';
import Navbar from './Componetns/Navbar';
import Sidebar from './Componetns/Sidebar';
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import EverythingelseWarper from './Componetns/EverythingelseWarper';
import Food from './Componetns/Food';
import LandingPage from './Componetns/LandingPage';
import Main from './Componetns/Main'

function App() {
  const [isOpen, setIsOpen] = React.useState(false);


  const showModal = () => {

    setIsOpen(true);

  };


  const hideModal = () => {

    setIsOpen(false);

  };
  return(
    
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main insideWarper={<LandingPage/>}/>}></Route>
            <Route exact path="/food" element={<Main insideWarper={<Food/>}/>}></Route>
          </Routes>
      </BrowserRouter>
    
    );
}

export default App;
