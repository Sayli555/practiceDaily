import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()

    const handlLogin=()=>{
        navigate("/login")
    }
  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/feeds" >Feeds</Link>
      <button
      onClick={handlLogin}
      >Login</button>
     
    </div>
  )
}

export default Navbar
