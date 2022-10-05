import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id}=useParams();
    const [pr,setpr]=useState({})

    

   useEffect(()=>{
    if(id){
      fetch(`http://localhost:8080/products/${id}`).then((r)=>r.json()).then((r)=>setpr(r))
    }
   },[id])
   console.log(pr)
  return (
    <div>
      <p>{pr.name}</p>
    </div>
  )
}

export default Product
