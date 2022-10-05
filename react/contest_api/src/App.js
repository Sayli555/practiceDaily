import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const reducer=(count,action)=>{
  switch(action.type){
    case "increment" :{
      return count+1
    }
    case "decrement" :{
      return count-1
    }
    default:{
      return count
    }
  }

}

function App() {
  const [count,dispatch]=useReducer(reducer,0)
  return (
    <div className="App">

      <h1>Counter:{count}</h1>
      <button onClick={()=>dispatch({type:"decrement"})} >{"-"}</button>
      <button onClick={()=>dispatch({type:"increment"})} >{"+"}</button>
    </div>
  );
}

export default App;
