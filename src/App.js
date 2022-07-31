import logo from './logo.svg';
import './App.css';
import EverythingelseWarper from './Componetns/EverythingelseWarper';
import Navbar from './Componetns/Navbar';
import Sidebar from './Componetns/Sidebar';
function App() {
  return (
    <div className='app catalog navOpen ' > 
    
     <Navbar></Navbar>
     <Sidebar></Sidebar>
     <EverythingelseWarper/>
      
    </div>
  );
}

export default App;
