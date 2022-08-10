import React from 'react';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';

function App() {
  return (
    <div className="App-body">
      <div className='App'>
        <Info />
        <About />
        <Interest />
        
      </div>
    </div>
  );
}

export default App;
