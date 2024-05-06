/* ***************************** uncontrolled component
1. the component that contains the input fields
2. component which handle by ref or javascript dom , not handle by state
*/

import React, { useRef } from 'react'

const Tut45 = () => {
    const input1 = useRef()
    const input2 = useRef()
    const stopRefresh = (e)=>{
        e.preventDefault();
        let thirdInput = document.getElementById("thirdInput").value
        console.log(input1.current.value)
        console.log(input2.current.value)
        console.log(thirdInput)
    }
  return (
    <div className='text-center'>
        <h3 className='me-3'>uncontrolled component</h3>
      <form action="">
        <input ref={input1} type="text" /> <br /> <br />
        <input ref={input2} type="text" /> <br /> <br />
        <input id='thirdInput' type="text" /> <br /> <br />
        <button onClick={stopRefresh}>submit form</button>
      </form>
    </div>
  )
}

export default Tut45
