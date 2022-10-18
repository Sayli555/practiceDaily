import React, { useState } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getTodoFetch, postTodoFetch } from '../redux/action';
import Todos from './Todos';

const TodoPost = () => {
    const [todo,setTodo]=useState("");
    const dispatch=useDispatch();

    const onchange=(e)=>{
        setTodo(e.target.value)
    }


    const addTodo=()=>{
        const payload={
            title:todo,
            isComplited:"false"
        }
        dispatch(postTodoFetch(payload));
        dispatch(getTodoFetch())
        setTodo("")
    }

  return (
    <div>
      <input name="todo" type="text" placeholder="type todo..." onChange={onchange} />
      <button 
      onClick={addTodo}
      >+</button>


      <Todos/>
    </div>
  )
}

export default TodoPost
