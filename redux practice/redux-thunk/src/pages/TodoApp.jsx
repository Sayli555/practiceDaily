import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from "../store/Todo/todo.action";


const TodoApp = () => {
  const dispatch=useDispatch();
  const ref=useRef()
  const {data:todos,gettodos,addtodos}=useSelector((state)=>state.todo);

  // const {loading:isloading}=useSelector((state)=>state.todo.addtodos)

  const addtodo=()=>{
    const value=ref.current.value
    dispatch(type.todoAdd({
      value,
      iscomplited:false,   
    }))
    ref.current.value=null
  }

  useEffect(()=>{

    dispatch(type.getTodos())
   
  },[])

  if(gettodos.loading) return <div><h1>Loading...</h1></div>
  if(gettodos.error) return <h1>Something went wrong...</h1>

  return (
    <div>
      <h1>Todo</h1>
    <input ref={ref} type="text" placeholder='type todos...' />

    <button onClick={addtodo} disabled={gettodos.loading}>ADD</button>
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
