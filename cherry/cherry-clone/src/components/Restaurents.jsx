import React from 'react';

import res1 from "../assets/restaurant1.jpeg";
import res2 from "../assets/restaurant2.jpeg"
import res3 from "../assets/restaurant3.jpeg"
import res4 from "../assets/restaurant4.jpeg"
import res5 from "../assets/restaurant5.jpeg"
import res6 from "../assets/restaurant6.jpeg"
import res7 from "../assets/restaurant7.jpeg"
import Restaurent from './Restaurent';


const Restaurents = ({res}) => {
  console.log("res",res)
  return (
    <div className="container divider">
    <div className="cards">

    {res.map((r)=>(
       <Restaurent key={r.id}  r={r} />
    ))}




      

        
    </div>
</div>
  )
}

export default Restaurents
