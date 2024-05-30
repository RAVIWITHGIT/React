import React, { useContext } from 'react'
import { mycontext } from './Tut72Parent'

const Button = () => {
    const {updatefun} = useContext(mycontext)
  return (
    <div>
      <button onClick={()=>updatefun("red")}>red color</button>
      <button onClick={()=>updatefun("blue")}>blue color</button>
      <button onClick={()=>updatefun("pink")}>pink color</button>
    </div>
  )
}

export default Button
