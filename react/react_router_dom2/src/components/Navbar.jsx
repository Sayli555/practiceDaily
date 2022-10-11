import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const {isAuth,login,logout}=useContext(AuthContext)
    const navigate=useNavigate()

    const handlLogin=()=>{
        if(isAuth){
          logout();
          navigate("/")
        }
        else{
         
            navigate("/login")
        }
        
    }
  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/feeds" >Feeds</Link>
      <button
      onClick={handlLogin}
      >
      {isAuth ? "logout" : "login"}
      </button>
     
    </div>
  )
}

export default Navbar
