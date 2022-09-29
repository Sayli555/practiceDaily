import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [newtodo,setNewTodo]=useState("");
  const [todo,settodo]=useState([]);
  console.log(todo)


  useEffect(()=>{
    const getdata=()=>{
      fetch("http://localhost:8081/todos").then((r)=>r.json()).then((res)=>settodo(res))
    }
    getdata()
  },[])


  const addtodo=()=>{

    fetch("http://localhost:8081/todos",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        title:newtodo,
        isComplited:false
      })
    })
    .then((r)=>r.json()).then((r)=>{
     settodo([...todo,r])
      setNewTodo("")
     
    })
 
    setNewTodo("")
  }
  return (
    <div className="App">
      <input type="text" value={newtodo} placeholder='type todo..' onChange={(e)=>{
        setNewTodo(e.target.value)
      }} />
      <button onClick={addtodo}>+</button>
      {todo.map((e)=>(
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
}

export default App;
