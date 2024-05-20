import React from 'react'
import { NavLink } from 'react-router-dom'

const Mynav = () => {
  return (
    <>
      <ul class="nav justify-content-end">
  <li class="nav-item">
    <NavLink className="nav-link" to="/">home</NavLink>
  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to="/about">about</NavLink>

  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to="/contact">contact</NavLink>

  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to="/login">login</NavLink>

  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to="/logout">logout</NavLink>
  </li>
</ul>
    </>
  )
}

export default Mynav
