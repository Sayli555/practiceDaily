
import { useEffect, useState } from 'react';
import axios from 'axios';

function Todos() {
  const [page,setpage]=useState(1);
  const [limit,setLimit]=useState(5);
  const [todo,setTodo]=useState([]);
  const [totalcount,settotalcount]=useState(0)


console.log( typeof limit)

  const getTodo=async()=>{
    axios(`http://localhost:8081/todos?_page=${page}&_limit=${limit}`).then((r)=> {
      setTodo(r.data);
      settotalcount(Number(r.headers["x-total-count"]))
      // console.log(r)
    });
 }

 
//whenever page parameter change my component is render again
  useEffect(()=>{ 
    getTodo()
  },[page,limit])

// console.log("todo",todo)

  return (
    <div className="App">
     <button 
   disabled={page<=1}
   onClick={()=>{
    if(page>=1){
      setpage(page-1)
    }
   }}
   >{"<"}</button>

<input type="number" max={totalcount} value={limit} onChange={(e)=>setLimit(e.target.value)} />



   {/* <select onChange={(e)=>setLimit(Number(e.target.value))}>
    <option value={5}> 5</option>
    <option value={10}> 10</option>
    <option value={15}> 15</option>
   </select> */}


   <button
   disabled={totalcount<page*limit}
    onClick={()=>{
     
        setpage(page+1)
      
     }}
   >{">"}</button>
   {todo.map((e)=>(
    <div key={e.id}>{e.title}</div>
   ))}
  
    </div>
  );
}

export default Todos;
