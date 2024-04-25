import React from 'react'

const Child = (props) => {
    const getalert = ()=>{
        console.log("press button")
        alert("click the button")
    }
  return (
    <div>
      <span>user {props.passvalue.name}</span>
      <span className='mx-3'>from {props.passvalue.from}</span>
      <span>country {props.passvalue.country}</span>
      <button className='btn ms-2 my-2 btn-secondary' onClick={getalert}>Click</button>
    </div>
  )
}

export default Child
