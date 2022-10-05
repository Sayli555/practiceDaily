import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate();

const handlchange=(id)=>{
  if(id===1){
    navigate("/products/1")
  }
}

  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/about" >about</Link>
      <Link to="/products" >products</Link>
      <button
      onClick={()=>{
        handlchange(1)
      }}
      >product1</button>
          <button
      onClick={()=>{
        handlchange(2)
      }}
      >product2</button>
    </div>
  )
}

export default Navbar
