import React, { useRef } from 'react'

const Tut42 = () => {
    const myref = useRef()
    const targetinput = ()=>{
        myref.current.focus()
        myref.current.style.backgroundColor="Yellow"
        myref.current.style.color="blue"
    }
  return (
    <div className='text-center'>
      <h3>UseRef in React js</h3>
      <input type="text" ref={myref}/>
      <button onClick={()=>{targetinput()}}>click</button>
    </div>
  )
}

export default Tut42
