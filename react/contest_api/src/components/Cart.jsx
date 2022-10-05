import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {count,setCount} =useContext(CartContext)
  return (
    <div>
      <button onClick={()=>setCount(count+1)} >Add to cart</button>
    </div>
  )
}

export default Cart
