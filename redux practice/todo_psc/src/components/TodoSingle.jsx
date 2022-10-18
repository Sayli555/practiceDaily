import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { deleteTodoFetch, singleTodoFetch } from '../redux/action';

function TodoSingle() {
  const {id} =useParams();
  const dispatch=useDispatch();
  const todo=useSelector((state)=>state.single)

  console.log("single",todo)

  useEffect(()=>{
    dispatch(singleTodoFetch(id))
  },[id])



  const deleteTodo=()=>{
    dispatch(deleteTodoFetch(id))
  }


  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.isComplited}</h4>
      <button>toggle</button>
      <button 
      onClick={deleteTodo}
      >Delete</button>
    </div>
  )
}

export default TodoSingle
