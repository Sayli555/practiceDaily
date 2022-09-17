import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from "../store/action"

const TodoApp = () => {
  const dispatch=useDispatch();
  const [todoadd,setTodo]=useState("")

  const todo=useSelector((state)=>state.todo.todos);

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" placeholder="write todos" todoadd={todoadd} onChange={()=>{
        setTodo(value)
      }} />
      <button
      onClick={()=>{
        dispatch(type.todoAdd())
      }}
      >+</button>
    </div>
  )
}

export default TodoApp
