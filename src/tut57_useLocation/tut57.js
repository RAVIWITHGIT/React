/* ******************************** useLocation **************************************
1. we use uselocation in about.js file
2. useLocation hook return a object , in object present 5 key value pair
  I. hash ----> when we write or set hash in url exa ==> http://localhost:3000/about/#xyz
  II. key ---> when we give another component then a unique key present in every component
  III. pathname --> you know about it
  Iv. search --> search query/search param in url exa ==> http://localhost:3000/about/?age=20
  v. State --> what value in state ,when we send data about file

*/

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Tut57 = () => {
    const [state,setstate] = useState('ravi')
  return (
    <div className='text-center'>
      <h1>home page</h1>
      <NavLink to="/about" state={state}>go to about page</NavLink>
      <NavLink to="/contact">go to contact page</NavLink>
    </div>
  )
}

export default Tut57
