import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { deleteTodoFetch, 
  // singleTodoFetch
   toggleTodoFetch } from '../redux/action';

function TodoSingle() {
  const [currentTodo,setcurrentTodo]=useState({})
  const {id} =useParams();
  const dispatch=useDispatch();
  const todos=useSelector((state)=>state.todos);
  
  const deleteTodo=()=>{
    dispatch(deleteTodoFetch(id))
  }

    const toggleTodo=()=>{
      const payload={
        id,
        status:!currentTodo.isComplited
      }
      dispatch(toggleTodoFetch(payload))
    }
  
    useEffect(()=>{
        let current=todos.find((e)=>e.id==Number(id));
        current && setcurrentTodo(current)
    },[id,todos])

  return (
    <div>
      <h1>{currentTodo.title}</h1>
      <h4>{currentTodo.isComplited ? "True" :"False"}</h4>
      <button
      onClick={toggleTodo}

      >toggle</button>
      <button 
      onClick={deleteTodo}
      >Delete</button>
    </div>
  )
}

export default TodoSingle
