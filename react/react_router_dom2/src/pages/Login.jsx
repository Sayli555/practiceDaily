import React, { useState } from 'react';
import "../styles/login.css"

const Login = () => {
    const [loginCred,setLoginCred]=useState({});

    const handlechange=(e)=>{
        const {name, value}=e.target;

        setLoginCred({
            ...loginCred,
            [name]:value
        })
    }

    const handleSubmit=()=>{

    }


  return (
    <div >
      login
      <form className='login' onSubmit={handleSubmit} >
        <input name="email" type="email" placeholder='enter email' onChange={handlechange} />
        <input name='password' type="password" placeholder='enter password...' onChange={handlechange} />
        <button type="submit" >submit</button>

      </form>
    </div>
  )
}

export default Login
