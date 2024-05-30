import React, { useContext } from 'react'
import {mycontext} from './Tut72Parent'

const Tut72child1 = () => {
    const {color} = useContext(mycontext)
    console.log(color)
  return (
    <div>
      <h1 style={{backgroundColor:color}} >child one file</h1>
    </div>
  )
}

export default Tut72child1
