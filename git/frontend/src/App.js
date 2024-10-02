import React from 'react';
import './App.css'
import HamburgerMenu from './components/HamburgerMenu';
import Fetch from './components/swr';
function App() {




  return (
    
    <div className="App">
      <HamburgerMenu></HamburgerMenu>
      <h1>Image API</h1>
      <Fetch></Fetch>
    </div>
    
  );
}

export default App;

