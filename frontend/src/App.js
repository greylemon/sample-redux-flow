import React from 'react';
import './App.css';
import HelloWorld from './views/HelloWorld';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button/>
      <HelloWorld/>
    </div>
  );
}

export default App;
