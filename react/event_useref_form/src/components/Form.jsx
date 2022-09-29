import React, { useState } from 'react'

const Form = () => {

    const [form,setform]=useState({
        username:"",
        email:"",
        age:"",
        password:"",
        isIndian:""
    })


    const onchange=(e)=>{
        console.log(e)
        const {name,value,checked,type}=e.target;
        if(type=== "checkbox"){
            setform({  
                ...form,
                [name]:checked
            })
        }
        else{
            setform({          
                ...form,
                [name]:value
            })
        }
       
       

    }
    console.log(form)


  return (
    <div>
      <form>
        <div>
        <label>name</label>
            <input
            type="text"
            placeholder='name'
            name="username"
            onChange={onchange}
            value={form.username}
           
            />
        </div>
        <div>
        <label>email</label>
            <input
            type="email"
            placeholder='email'
            name="email"
            onChange={onchange}
            value={form.email}
           
            />
        </div>
        <div>
        <label>password</label>
            <input
            type="password"
            placeholder='password'
            name="password"
            onChange={onchange}
            value={form.password}
           
            />
        </div>
        <div>
        <label>age</label>
            <input
            type="number"
            placeholder='age'
            name="age"
            onChange={onchange}
            value={form.age}
           
            />
        </div>
        <div>
        
            <input
            type="checkbox"
            
            name="isIndian"
            onChange={onchange}
            checked={form.isIndian}
           
            />
            <label>isIndian</label>
        </div>
      </form>
    </div>
  )
}

export default Form
