import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
    </div>
  );
}

export default App;
