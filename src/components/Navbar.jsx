
import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom'


const navbar = () => {
  return (
    <>
  

<div className="reason">

<nav> 
      <span style={{fontSize:'x-large', fontWeight:'bolder', color: 'white' }} >PraRoz</span>

           

 

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
  


          
            
           <div className="button"> 
            <input type="" placeholder="Type to Search " className="middle"/> <a href="" className='jinx'>search</a> </div>

        
        </nav>
    
    </div>

</>
  )


}

export default navbar