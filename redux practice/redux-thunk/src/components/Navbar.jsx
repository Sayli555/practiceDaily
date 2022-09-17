import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/" >Counter App</Link>
      <Link to="/todo">Todo App</Link>
    </div>
  )
}

export default Navbar
