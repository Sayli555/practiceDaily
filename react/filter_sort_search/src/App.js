import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData]=useState([]);
  const [search,setSearch]=useState("");
  const [sortValue,setSortValue]=useState("")

  useEffect(()=>{
    loadingData()
  },[])


  const loadingData=async()=>{
    return await axios.get("http://localhost:8080/mens")
    .then((r)=>setData(r.data))
    .catch((e)=>console.log(e))
  }

  console.log("data",data)


  const handleReset=()=>{
    loadingData();
    setSearch("")
  }


  const sortOption=["Name","brand","typeofproduct","price"]
  const handlesort=async(e)=>{
    let value=e.target.value;
    setSortValue(value)
    return await axios.get(`http://localhost:8080/mens?_sort=${value}&_order=asc`)
    .then((r)=>setData(r.data))
    .catch((e)=>console.log(e))
  }

  return (
    <div className="App">
    {/* <form onSubmit={handleSearch}> */}
    <select
     onChange={handlesort}
     value={sortValue}
     >
      {sortOption.map((e,i)=>(
        <option value={e} key={i} >{e}</option>
      ))}
     </select>
    <input
        type="text"
        placeholder='Search Brand'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" >Search</button>
        <button onClick={()=>handleReset()}>Reset</button>
    {/* </form> */}
  

   
     {data.filter((val)=>{
      if(search==""){
        return val;
      }
      else if(val.brand.toLowerCase().includes(search.toLowerCase())){
        
        return val
      }
     }) 

     .map((e)=>(
      <div className='product-main-div'>
        <div>
          <img 
          src={e.imageurl}
          width="100%"
          height="100%"
          />
        </div>
        <div>
          <h4>{e.Name}</h4>
          <p>{e.price}</p>
          <p>{e.typeofproduct}</p>
          <p>{e.brand}</p>
        </div>
      </div>
     ))}

   
    </div>
  );
}

export default App;
