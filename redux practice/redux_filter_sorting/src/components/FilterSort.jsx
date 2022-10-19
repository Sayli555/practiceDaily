import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { getBookData } from '../redux/action';

const FilterSort = () => {
  const dispatch=useDispatch()
  const [category,setCategory]=useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort,setsort]=useState()


  const handleChange=(e)=>{
    let option=e.target.value;
    let newCategory=[...category]

    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1)
    }
    else{
      newCategory.push(option)
    }
    setCategory(newCategory)
  }


  useEffect(()=>{
    setSearchParams({ category: category })
    dispatch(getBookData({params:{category}}))

  },[category,searchParams])
  


  const handlesortby=(e)=>{
    setsort(e.target.value)
  }

  useEffect(()=>{
    if(sort ){
      // searchParams.getAll("category")
      const params={
      category:searchParams.getAll("category"),
      sort
      }
      setSearchParams(params)
      
      const getParamsForSort={
        params:{
          category:searchParams.getAll("category"),
          _sort:"release_year",
          _order:sort
        }
       
      }
      dispatch(getBookData(getParamsForSort))
    }
  },[sort,searchParams,dispatch,setSearchParams])


  return (
    <div>
      <h2>Filter</h2>
      <div>
      <input
       type="checkbox" 
       value="Novel"
       onChange={handleChange}
       defaultChecked={category.includes("Novel")}

       />
      <label>Novel</label>
      </div>
      <div>
      <input 
      type="checkbox"
        value="Science_friction"
       onChange={handleChange}
       defaultChecked={category.includes("Science_friction")}
       />
      <label>Science_friction</label>
      </div>
      <div>
      <input 
      type="checkbox"
      value="Thriller"
       onChange={handleChange}
       defaultChecked={category.includes("Thriller")}
       />
      <label>Thriller</label>
      </div>

     
     
    
      <h2>sort</h2>
      <div onChange={handlesortby}>

    
      <input 
      type="radio"
      value="ass"
      name="sortBy"
      
      />
      Assending

      <input 
      type="radio"
      value="desc"
      name="sortBy"
      />
      Desending
      </div>
    </div>
  )
}

export default FilterSort
