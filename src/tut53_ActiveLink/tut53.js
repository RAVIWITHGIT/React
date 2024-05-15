import React from 'react'
/*
1.here we discuss about active class
2. when we click any nav text then automatic add active class in targeted text in react js
3. use active class we can add color or background then we identify we are present which page

*/

import {NavLink} from 'react-router-dom'
import './tut53.css'


/*
    here we add target active class to change text
*/

// const Tut53 = () => {
//   return (

//     <>
//       <ul class="nav">
//   <li class="nav-item">
//   <NavLink className="mynav" to="/">home</NavLink>

//   </li>

//   <li class="nav-item">
//   <NavLink className="mynav" to="/about">About</NavLink>
//   </li>

//   <li class="nav-item">
//   <NavLink className="mynav" to="/contact">contact-us</NavLink>
//   </li>
  
// </ul>
//     </>
//   )
// }


/*
**************************  active with style tag
*/
const Tut53 = () => {
    return (
  
      <>
        <ul class="nav">
    <li class="nav-item">
    <NavLink className="mynav" style={({isActive})=>{return {color:isActive?"yellow":""}}} to="/">home</NavLink>
  
    </li>
  
    <li class="nav-item">
    <NavLink className="mynav" style={({isActive})=>{return {color:isActive?"yellow":""}}} to="/about">About</NavLink>
    </li>
  
    <li class="nav-item">
    <NavLink className="mynav" style={({isActive})=>{return {color:isActive?"yellow":""}}} to="/contact">contact-us</NavLink>
    </li>
    
  </ul>
      </>
    )
  }

export default Tut53
