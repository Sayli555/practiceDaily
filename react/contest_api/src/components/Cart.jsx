import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { TheamContest } from '../context/TheamContext';

const Cart = () => {
    const {count,setCount} =useContext(CartContext);
    const {toggleTheam,isTheam}=useContext(TheamContest)
  return (
    <div>
      <button 
      className={`${isTheam ? "darkbtn" :"lightbtn"}`}
      onClick={()=>setCount(count+1)} >Add to cart</button>
    </div>
  )
}

export default Cart
