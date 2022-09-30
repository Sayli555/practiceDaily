import React, { useRef, useState } from 'react';
import styles from "./style.module.css"

const Form = () => {
    const ref=useRef()

    const [form,setform]=useState({
        username:"",
        email:"",
        age:"",
        password:"",
        isIndian:""
    })


    const onchange=(e)=>{
        console.log(e)
        const {name,value,checked,type,files}=e.target;
        if(type=== "checkbox"){
            setform({  
                ...form,
                [name]:checked
            })
        }
        else if(type=== "file"){
            setform({  
                ...form,
                [name]:files
            })
        }
        else{
            setform({          
                ...form,
                [name]:value
            })
        }
    }
    
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(form,"form");
        ref.current.focus()
        ref.current.className+=styles.red
    }





  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
        <label>name</label>
            <input
            type="text"
            ref={ref}
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
        <div>
            <div>
                
                <input
                type="radio"
                onChange={onchange}
                name="gender"
                value="male"
                />
                <lable>Male</lable>
            </div>
            <div>
                
                <input
                type="radio"
                onChange={onchange}
                name="gender"
                value="female"
                />
                <lable>Female</lable>
            </div>
            {/* **************************select tag*********************************** */}

            <div>
                <select name="selectgender" onChange={onchange} value={form.selectgender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div>

            <lable>File</lable>
                <input
                type="file"
                onChange={onchange}
                name="resume"
                file={form.resume}
                />
            </div>
        </div>
        <div>
            <input
            type="submit"
            />
        </div>
      </form>
    </div>
  )
}

export default Form
