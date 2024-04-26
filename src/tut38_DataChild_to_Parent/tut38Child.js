import React from 'react'

const Tut38Child = (props) => {
    const Message = "Hello Ravi How Are you"
  return (
    <>
      <h3>child file</h3>
      <button onClick={()=>props.myalert(Message)}>click</button>
    </>
  )
}

export default Tut38Child
