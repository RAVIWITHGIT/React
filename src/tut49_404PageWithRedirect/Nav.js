import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/about">about</Link>
          
        </li>
        <li class="nav-item">
            <Link className="nav-link" to="/contact">contact </Link>
          
        </li>
        
        
      </ul>
    </div>
  )
}

export default Nav
