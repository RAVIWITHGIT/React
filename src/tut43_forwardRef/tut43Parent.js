/* ************************************** forwardRef *************************************88
1.when we make ref in parent and want in child then use forwardRef
2.when we send ref as props then we use ref keyword which is bydefault
3. when get ref in child component then we write two parameter in roundbreaket of child component and second parameter store ref argument

*/


import React, { useRef } from 'react'
import Tut43Child from './tut43Child'





const Tut43Parent = () => {
    const inputref = useRef()

    const changesomething = ()=>{
        inputref.current.value = '1000'
        inputref.current.style.color = "blue";
        inputref.current.style.backgroundColor="yellow"
        inputref.current.style.border="none"
    }
  return (
    <div className='text-center'>
      <h3>forwardRef in react js</h3>
      <Tut43Child ref={inputref}/>
      <button onClick={()=>{changesomething()}}>click me</button>

    </div>
  )
}

export default Tut43Parent
