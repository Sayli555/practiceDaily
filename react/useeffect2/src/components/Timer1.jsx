import React, { useEffect, useState } from 'react'

const Timer1 = () => {
    const [time,setTime]=useState(5);

    useEffect(()=>{
        let id=setInterval(()=>{

            if(time<1){
                clearInterval(id)
            }
            else{
                setTime((time)=>time-1)
            }

           
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

export default Timer1
