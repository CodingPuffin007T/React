import { Router } from 'react-router';
import './App.css';
import Content from './Components/Content';

import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Content/>
      
    </>
    
    
  );
}

export default App;


