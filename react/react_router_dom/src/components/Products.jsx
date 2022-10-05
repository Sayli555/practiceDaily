import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [pr,setPr]=useState([])

    useEffect(()=>{
        const getData=async()=>{
            const data=await fetch("http://localhost:8080/products")
            .then((r)=>r.json()).then((r)=>setPr(r))
        }
        getData()
    },[])


  return (
    <div>
      Product
      {pr.map((e)=>(
    
        <div key={e.id}>
        <Link to={`/products/${e.id}`}>
             {e.name}
        </Link>
       </div>
       
       
      ))}
    </div>
  )
}

export default Products
