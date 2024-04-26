/*
1.here we discuss about how to send data child to parent 
2. This mechanism also call Lifting Stand Up
*/


import React from 'react'
import Tut38Child from './tut38Child'

const Tut38parent = () => {
  const myfun = (getvalue)=>{
    alert(getvalue)
  }
  return (
    <div className='text-center'>
      <h1>Lifting Stand Up</h1>
      <Tut38Child myalert={myfun}/>
    </div>
  )
}

export default Tut38parent
