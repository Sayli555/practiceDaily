import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "../styles/login.css"

const Login = () => {
    const {login}=useContext(AuthContext);
    const navigate=useNavigate()
    
    const [loginCred,setLoginCred]=useState({});

    const handlechange=(e)=>{
        const {name, value}=e.target;

        setLoginCred({
            ...loginCred,
            [name]:value
        })
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
        login();
        navigate("/feeds")
       
        console.log("login")
    }


  return (
    <div >
      login
      <form className='login' onSubmit={handleSubmit} >
        <input name="email" type="email" placeholder='enter email' onChange={handlechange} />
        <input name='password' type="password" placeholder='enter password...' onChange={handlechange} />
        <input type="submit" value="login"/>

      </form>
    </div>
  )
}

export default Login
