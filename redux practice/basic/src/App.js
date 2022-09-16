import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

 // const [count,setcount]=useState(0);
 const dispatch=useDispatch()

  const count=useSelector((state)=>state.count)



  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button 
      onClick={()=>{
        dispatch({type:"subtract"})
      }}>
        -
      </button>
      
      <button
        onClick={()=>{
          dispatch({type:"add"})
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
