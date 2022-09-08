import React from 'react'

const Filter = ({filter,filterby,updatedfilter}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
           
            <div className="restaurant-options">
            {filter.map((key,values)=>(
              
                  <div key={key} 
                  className={`restaurant-option ${filterby===values ? "underline" : ""}`} 
                  onClick={()=>updatedfilter(key)} >
                  {key}
              </div>
                ))}
                     
                
            </div>
        </div>
  )
}

export default Filter
