import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(100);

    useEffect(()=>{
        let id=setInterval(()=>{
            setTime((time)=>time-1)
        },1000)


        return ()=>{
            clearInterval(id)
        }
    })
  return (
    <div>
      <h2>Timer:{time}</h2>
    </div>
  )
}

export default Timer
