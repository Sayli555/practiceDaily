import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as type from "../store/counter/counter.action"

const CounterApp = () => {

  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.count)
  return (
    <div>
      <h1>counts:{count}</h1>
      <button onClick={()=>{
        dispatch(type.countInc())
      }}>+</button>
      <button
      onClick={()=>{dispatch(type.countDec())}}
      >-</button>
    </div>
  )
}

export default CounterApp
