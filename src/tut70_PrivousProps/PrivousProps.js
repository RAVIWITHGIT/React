import React, { useEffect, useRef } from 'react'

const PrivousProps = (props) => {

    const myref = useRef()
    useEffect(()=>{
        myref.current = props.count
    })
  return (
    <div>
      <h2>current value {props.count}</h2>
      <h2>privous value {myref.current}</h2>
    </div>
  )
}

export default PrivousProps
