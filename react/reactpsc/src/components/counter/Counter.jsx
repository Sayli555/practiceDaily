import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);


    const subtract=(val)=>{
        if(count>0){
            setCount(count+val)
        }
    }


    const add=(val)=>{
        if(count<10){
            setCount(count+val)
        }
       
            
        
    }


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>subtract(-1)}>-</button>
      <button onClick={()=>add(1)}>+</button>
    </div>
  )
}

export default Counter
