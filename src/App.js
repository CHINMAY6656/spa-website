import React, { useEffect } from 'react';
import Main from './Main';
import './App.css';
import StartApp from './Firebase';

function App() {
  useEffect(() => {
      StartApp();
    
  }, [])

  return (
    <div className="App">
      <Main />
      
      
    </div>
  );
}

export default App;
