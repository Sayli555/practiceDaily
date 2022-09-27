import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [newtodo,setnewtodo]=useState("");
  console.log("newtodo",newtodo)
  const [todos,settodos]=useState([])


//we are using useEffect heare beacause fetch is infinite time calling 
  useEffect(()=>{

    fetch("http://localhost:8080/todos")
    .then((r)=>r.json())
    .then((d)=>
    {
      // console.log(d)  
   settodos(d)  
   }
    )
  },[])
  

  const addtodo=()=>{

    fetch("http://localhost:8080/todos",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        title: newtodo,
        iscomplited: false
      })
    }).then((r)=>r.json()).then((r)=>{
      settodos([...todos,r])
      setnewtodo("")
    });

    

  };


  


  return (
    <div className="App">
    <div>
      <input type="text" value={newtodo} onChange={(e)=>
        setnewtodo(e.target.value)
      } />
      <button onClick={addtodo}>ADD</button>
      {todos.map((e)=>(
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
    </div>
  );
}

export default App;
