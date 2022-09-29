import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [page,setpage]=useState(1)
  const [todo,setTodo]=useState([]);
  const [totalcount,settotalcount]=useState(0)




  const getTodo=async()=>{
    axios(`http://localhost:8081/todos?_page=${page}&_limit=4`).then((r)=> {
      setTodo(r.data);
      settotalcount(Number(r.headers["x-total-count"]))
      console.log(r)
    });
 }

 
//whenever page parameter change my component is render again
  useEffect(()=>{ 
    getTodo()
  },[page])

console.log("todo",todo)

  return (
    <div className="App">
   {todo.map((e)=>(
    <div key={e.id}>{e.title}</div>
   ))}
   <button 
   disabled={page<=1}
   onClick={()=>{
    if(page>=1){
      setpage(page-1)
    }
   }}
   >{"<"}</button>
   <button
   disabled={totalcount<page*4}
    onClick={()=>{
     
        setpage(page+1)
      
     }}
   >{">"}</button>
    </div>
  );
}

export default App;
