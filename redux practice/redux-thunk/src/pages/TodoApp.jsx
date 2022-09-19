import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from "../store/Todo/todo.action";


const TodoApp = () => {
  const dispatch=useDispatch();
  const ref=useRef()
  const {data:todos,error,loading}=useSelector((state)=>state.todo.gettodos);

  const {loading:isloading}=useSelector((state)=>state.todo.addtodos)

  const addtodo=()=>{
    const value=ref.current.value
    type.todoAdd(dispatch,{
      value,
      iscomplited:false,   
    })
  }

  useEffect(()=>{

    type.getTodos(dispatch)
   
  },[])

  if(loading) return <div><h1>Loading...</h1></div>
  if(error) return <h1>Something went wrong...</h1>

  return (
    <div>
      <h1>Todo</h1>
    <input ref={ref} type="text" placeholder='type todos...' />

    <button onClick={addtodo} disabled={isloading}>ADD</button>
    <br/>
    <br/>
    {
      todos.map((todo)=>(
        <div key={todo.id}>{todo.value}</div>
      )

      )
    }

    </div>
  )
}

export default TodoApp
