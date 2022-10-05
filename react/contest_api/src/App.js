import logo from './logo.svg';
import './App.css';
import { useContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { TheamContest } from './context/TheamContext';


  

function App() {
  const {isTheam,setTheam} =useContext(TheamContest)
  
  return (
    <div className={`App ${isTheam ?"dark":"light"}`}>

   
    <Navbar/>
   
     
      <Body/>
    </div>
  );
}

export default App;
