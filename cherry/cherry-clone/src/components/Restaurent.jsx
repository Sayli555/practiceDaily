import React from 'react'

const Restaurent = ({r}) => {
  return (
   
    <div className="card" key={r.id}>
    <img width="254" height="160px" src={r.img} />
    <div className="restaurant-details">
        <div className="restaurant-title">{r.title}</div>
        
        <div className="restaurant-subtitle">{r.sub.join(",")}</div>
    </div>
    <div className="restaurant-info">
        <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i>{r.rating}
        </div>
         .<div className="restaurant-delivery-timings">{r.deliverytimings}</div> .
        <div className="restaurant-cost-for-two">{r.costfortwo}</div>
    </div>
    <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">
            {r.offer.join(" | ")}
        </span>
    </div>
</div>
  )
}

export default Restaurent
