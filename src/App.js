import logo from './logo.svg';
import React, { Component ,useState}  from 'react';
import './App.css';
import EverythingelseWarper from './Componetns/EverythingelseWarper';
import Navbar from './Componetns/Navbar';
import Sidebar from './Componetns/Sidebar';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [isOpen, setIsOpen] = React.useState(false);


  const showModal = () => {

    setIsOpen(true);

  };


  const hideModal = () => {

    setIsOpen(false);

  };
  return(
    <div className='app catalog navOpen chaldal-theme'>
       <Navbar/>
       <Sidebar/>
       <EverythingelseWarper/>


      </div>  
    );
}

export default App;
