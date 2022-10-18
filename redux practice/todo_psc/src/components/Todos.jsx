import React, { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getTodoFetch } from '../redux/action';
import {Routes,Route,Link} from "react-router-dom"

const Todos = () => {

    const dispatch=useDispatch();

    const todos=useSelector((state)=>state.todos)


    useEffect(()=>{
        dispatch(getTodoFetch())
    },[Todos])

console.log("todos",todos)

  return (
    <div>
      
    {todos.map((e)=>(
        <div >
        <Link to={`/todos/${e.id}`} >
            <h2>{e.title}</h2>
            <p>stats:- {e.isComplited}</p>
            <button>Toggle</button>
        </Link>   
        </div>
    ))}
     
    </div>
  )
}

export default Todos
