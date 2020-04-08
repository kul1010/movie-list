import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default ()=>{

    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Future Bridge</a>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about" >About Us</Link></li>
            <li><Link to="/" >Movies</Link></li>
          </ul>
         
        </div>
      </nav>
    )
}