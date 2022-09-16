import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as type from "./redux/action.type"
import { add, subtract } from './redux/action';

function App() {

 // const [count,setcount]=useState(0);
 const dispatch=useDispatch()

  const count=useSelector((state)=>state.count)



  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button 
      onClick={()=>{
        dispatch(subtract(5))
      }}>
        -
      </button>

      <button
        onClick={()=>{
          dispatch(add(10))
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
