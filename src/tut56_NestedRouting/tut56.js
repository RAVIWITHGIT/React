/*
1.here we discuss about Nested Routing in React js
2. we creat code Nested routing in this component and routing.js component

*/

import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Tut56 = () => {
  return (
    <div className='text-center'>
      <h1>home page</h1>
        <NavLink to="/company" >Go To Company Page</NavLink>
        <NavLink to="/channel" className="mx-3">Go To Channel Page</NavLink>
        <NavLink to="/other">Go To Other Page</NavLink>
     
      <Outlet/>
    </div>
  )
}

export default Tut56
