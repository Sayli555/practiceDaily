import React from 'react'

const Filter = ({filter,filterby,updatedfilter}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
           
            <div className="restaurant-options">
            {Object.entries(filter).map(([key,values])=>(
                  <div key={key} className="restaurant-option" onClick={()=>updatedfilter(key)} >
                  {values}
              </div>
                ))}
                     
                
            </div>
        </div>
  )
}

export default Filter
