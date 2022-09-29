import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timer from './components/Timer';

function App() {


  return (
    <div className="App">
   <Timer />
  
    </div>
  );
}

export default App;
