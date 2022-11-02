import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {

    const [isMobile,setIsMobile]=useState(true)


  return (
    <nav className='navbar'>
        <h3 className='logo'>logo</h3>
        <ul className={isMobile? "nav-mobile-links" : "nav-links"}
        onClick={()=>{setIsMobile(false)}}
        >
            <Link to="/" className='home'>
                <li>Home</li>
            </Link>
            <Link to="/about" className='about'>
                <li>About</li>
            </Link>
            <Link to="/contact" className='contact'>
                <li>Contact</li>
            </Link>
            <Link to="/skills" className='skills'>
                <li>Skills</li>
            </Link>
            <Link to="/signup" className='signup'>
                <li>Signup</li>
            </Link>
        </ul>
        <button className='mobile-menu-icons' 
        onClick={()=>setIsMobile(!isMobile)}
        >
            {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
        </button>
    </nav>
  )
}

export default Navbar
