import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todo,setTodo]=useState([]);
  const [newtodo,setnewtodo]=useState("")


  useEffect(()=>{
    const getdata=()=>{
      fetch("http://localhost:8081/todos").then((r)=>r.json()).then((r)=>setTodo(r))
    }
    getdata()
  },[])


  //adding todo here
  

  const addtodo=()=>{
    fetch("http://localhost:8081/todos",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        title:newtodo,
        isComplied:false
      })
    })
    .then((r)=>r.json())
    .then((r)=>{
      setTodo([...todo,r]);
      setnewtodo("")
    })
  }


  return (
    <div className="App">
     <input type='text' value={newtodo} placeholder='type todo heare' onChange={(e)=>setnewtodo(e.target.value)} />
     <button onClick={addtodo}>+</button>
     {todo.map((e)=>(
      <div key={e.id}>{e.title}</div>
     ))}
    </div>
  );
}

export default App;
