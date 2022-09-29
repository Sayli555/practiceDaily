import React, { useState } from 'react'

const Stopwatch = () => {
    const [watch,setWatch]=useState(0);
    const [timerId,setTimerId]=useState()


    const start=()=>{
        if(!timerId){
            let id= setInterval(()=>{
                setWatch((prev)=>prev+1)
            },1000)
    
            setTimerId(id)
    
        }

     
    }

    const pause=()=>{
        clearInterval(timerId)
    }

    const reset=()=>{
        clearInterval(timerId);
        setWatch(0)
    }


  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{watch}</h2>
      <div>
        <button onClick={start} >start</button>
        <button onClick={pause} >pause</button>
        <button onClick={reset} >reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
