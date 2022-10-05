import React, { useContext } from 'react'
import { AuthContest } from '../context/authContest'
import { TheamContest } from '../context/TheamContext';
import Wishlist from './Wishlist'

const Navbar = () => {
  const {isAuthorised,login,logout}=useContext(AuthContest);
  const {toggleTheam,isTheam}=useContext(TheamContest)
  return (
    <div>
     
      <button className={`${isTheam ? "darkbtn" :"lightbtn"}`} onClick={()=>{
        if(isAuthorised){
          logout()
        }
        else{
          login("x","y")
        }
        
      }} >
      {isAuthorised ? "LOGOUT" :"LOGIN"}
      </button>
      <button
      className={`${isTheam ? "darkbtn" :"lightbtn"}`}
      onClick={toggleTheam}
      >

        {`${isTheam ?"dark":"light"}`}
      </button>
      {isAuthorised &&  <Wishlist/> }
    </div>
  )
}

export default Navbar
