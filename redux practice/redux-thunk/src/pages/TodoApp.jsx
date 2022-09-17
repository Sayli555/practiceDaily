import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from "../store/Todo/todo.action";


const TodoApp = () => {
  const dispatch=useDispatch();
  const ref=useRef()
  const todo=useSelector((state)=>state.todo.todos);

  const addtodo=()=>{
    const value=ref.current.value
    dispatch(type.todoAdd({
      value,
      iscomplited:false,
    
      
    }))
  }

  return (
    <div>
      <h1>Todo</h1>
    <input ref={ref} type="text" placeholder='type todos...' />

    <button onClick={addtodo}>ADD</button>
    <br/>
    <br/>
    {
      todo.map((todo)=>(
        <div key={todo.id}>{todo.value}</div>
      )

      )
    }

    </div>
  )
}

export default TodoApp
