import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timer1 from './components/Timer1';
import Stopwatch from './components/Stopwatch';

function App() {


  return (
    <div className="App">
   {/* <Timer1 /> */}
  <Stopwatch/>
    </div>
  );
}

export default App;
